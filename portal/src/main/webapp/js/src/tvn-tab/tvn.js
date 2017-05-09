'use strict';
window.TVNDataManager = (function($, _) {
  var content = {};
  content.init = function(_gene_ids, _genetic_profiles, _study_cases_map) {

    var _profilesDataObj = {};
    $.each(_genetic_profiles, function(index, _genetic_profile) {
      if (_genetic_profile['normals_tissue_reference_id'] !== undefined && _genetic_profile['normals_tissue_reference_id'] !== null) {
        if (_profilesDataObj[_genetic_profile['normals_tissue_reference_id']] === undefined) {
          _profilesDataObj[_genetic_profile['normals_tissue_reference_id']] = {
            zscore_option: false,
            log_option: false,
            profiles: []
          };
        }
        if (_genetic_profile['id'].indexOf('rna_seq')) {
          _profilesDataObj[_genetic_profile['normals_tissue_reference_id']]['zscore_option'] = true;
          _profilesDataObj[_genetic_profile['normals_tissue_reference_id']]['log_option'] = true;
        }
        _profilesDataObj[_genetic_profile['normals_tissue_reference_id']]['profiles'].push(_genetic_profile);
      }
    });

    var getPlotData = function(self, selected_profiles,gene_id,reference_normals_id,zscore_flag){
      var def = new $.Deferred();
      var _data = {};
      _data[gene_id] = [];
      var _request = [];
      $.each(selected_profiles,function(key,genetic_profile){
        _request.push({
          geneticProfileId: genetic_profile['id'],
          sampleIds: self.studyCasesMap[genetic_profile['study_id']]
        });

      });
      $.ajax({
        url: window.cbioURL+'api/gene-symbol/'+gene_id+'/normals-reference/'+reference_normals_id+'/data/'+zscore_flag,
        data: JSON.stringify(_request),
        method: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: "json"
      }).done(function(response) {
        def.resolve(response);
      }).fail(function() {
        def.reject();
      });
      return def.promise();
    };

    return {
      geneIds: _gene_ids,
      getGenes: function() {
        return this.geneIds
      },
      studyCasesMap: _study_cases_map,
      getFilterOptionsData: function() {
        return _profilesDataObj
      },
      getPlotData: function(selected_profiles,gene_id,reference_normals_id,zscore_flag) {
        return getPlotData(this, selected_profiles,gene_id,reference_normals_id,zscore_flag);
      }
    }

  };
  return content;
})(window.$, window._);
'use strict';
var TVN = (function(_, $) {
  var processedData = {};

   var getData = function(gene_id, reference_normals_id, zscore_flag, selected_profiles){
     var def = new $.Deferred();
     var _data = processedData[gene_id + '-' + reference_normals_id + '-' + zscore_flag];
     if(_data !== undefined){
       def.resolve($.extend(true,{},_data));
     } else{
       $.when(window.tvn_datamanager.getPlotData(selected_profiles, gene_id, reference_normals_id, zscore_flag))
         .then(function(response) {
           _data = tvnBoxPlot.processData(response, gene_id, zscore_flag, 0.01, reference_normals_id);
           processedData[gene_id + '-' +reference_normals_id + '-' + zscore_flag] = _data;
           def.resolve($.extend(true,{},_data));
         }).fail(function(){
         def.reject();
       });
     }

     return def.promise();
   };

  return {
    loadData: function(gene_id, reference_normals_id, selected_profiles, zscore_flag) {
      var def = new $.Deferred();
      $.when(getData(gene_id, reference_normals_id, zscore_flag, selected_profiles)).then(function(_response){
        var toReturn = false;
        if(_response !== null && _response.seriesData.length>0){
          boxPlot.initializePlot(_response);
          toReturn = true;
        }
        def.resolve(toReturn);
      }).fail(function(){
        def.resolve(false);
      });
      return def.promise();
    },

    changeLogScale: function(log_value_flag) {
      var def = new $.Deferred();
      $.when(boxPlot.applyLog(log_value_flag)).then(function(){
        def.resolve();
      });
      return def.promise();
    },
    thresholdChange: function(threshold_value) {
      var def = new $.Deferred();
      $.when( boxPlot.thresholdChange(threshold_value)).then(function(){
        def.resolve();
      });
      return def.promise();

    }
  }
})(window._,
  window.$);
'use strict';
(function(Vue, TVN, _) {
  TVN.vue = {};

  TVN.vue.manage = (function() {
    var vmInstance_;

    return {
      init: function() {
        vmInstance_ = new Vue({
          el: '#tumor_vs_normals',
          data: {
            genes: [],
            showNormalsSelectionDropDown: false,
            normals: [],
            showzScoreOption: false,
            zScoreOption: false,
            logValueOption: false,
            showThresholdValue: false,
            thresholdValue: 0.01,
            selectedGene: '',
            selectedNormals: '',
            isloading: true,
            hasData:true

          }, watch: {
            genes: function(newVal) {
              this.selectedGene = newVal[0]
            },
            normals: function(newVal) {
              this.resetOptions();
              this.showNormalsSelectionDropDown = Object.keys(newVal).length > 1;
              this.showThresholdValue = Object.keys(newVal).length === 1;
              this.selectedNormals = Object.keys(newVal)[0]
            },
            selectedGene: function(newVal) {
              if(Object.keys(this.normals).length > 0) {
                this.resetOptions();
                this.loadData();
              }
            },
            selectedNormals: function(newVal) {
              this.showzScoreOption = this.normals[newVal]['zscore_option'];
            },
            zScoreOption: function(newVal) {
              if(!this.isloading && this.showzScoreOption){
                this.logValueOption = false;
                this.loadData();
              }
            },
            logValueOption: function(newVal) {
              if (this.zScoreOption !== true && !this.isloading && this.showzScoreOption) {
                var _self = this;
                this.isloading = true;
                this.$nextTick(function() {
                  $.when(TVN.changeLogScale(newVal)).then(function() {
                    _self.isloading = false;
                  });
                });

              }
            }
          }, methods: {
            initializeOptions: function(_genes,_filter_options) {
              this.genes = _genes;
              if(Object.keys(_filter_options).length > 0) {
                this.normals = _filter_options;
              } else {
                this.hasData = false;
                this.isloading = false;
              }
            },
            resetOptions: function() {
              this.zScoreOption = false;
              this.logValueOption = false;
              this.thresholdValue = 0.01;
            },
            loadData: function(){
              var _self = this;
              this.isloading = true;
              _self.hasData = true;
              this.$nextTick(function() {
                $.when(TVN.loadData(
                  _self.selectedGene,
                  this.selectedNormals,
                  this.normals[this.selectedNormals]['profiles'],
                  _self.zScoreOption))
                  .then(function(_hasData) {
                    _self.hasData = _hasData;
                    _self.isloading = false;
                  })
              });
            },
            isNumber: function(evt, val) {
              var theEvent = evt || window.event;
              var key = theEvent.keyCode || theEvent.which;
              key = String.fromCharCode(key);
              var regex = /[0-9]|\./;
              var alreadyHasDot = (key === ('.')) && (val.indexOf(key) > -1);
              if (!regex.test(key) || alreadyHasDot) {
                theEvent.returnValue = false;
                if (theEvent.preventDefault) theEvent.preventDefault();
              }
            },

            debounceInput: _.debounce(function(e) {
              var _self = this;
              this.isloading = true;
              this.$nextTick(function() {
                $.when(TVN.thresholdChange(this.thresholdValue)).then(function() {
                  _self.isloading = false;
                });
              });

            }, 1000)

          }
        });
      },
      getInstance: function() {
        if (typeof vmInstance_ === 'undefined') {
          this.init();
        }
        return vmInstance_;
      }
    };
  })();

})(window.Vue, window.TVN, window._);

var tvnBoxPlot = (function() {

  var searchIndexTop = function(arr, ele) {
    for (var i = arr.length - 1; i > 0; i--) {
      if (ele > arr[i]) {
        continue;
      } else if (parseFloat(ele) == parseFloat(arr[i])) {
        return i;
      } else {
        return i - 1;
      }
    }
    return arr.length - 1;
  };
  var searchIndexBottom = function(arr, ele) {
    for (var i = 0; i < arr.length; i++) {
      if (parseFloat(ele) <= parseFloat(arr[i])) {
        return i;
      } else {
        continue;
      }
    }
    return arr.length - 1;
  };
  var getSingleBoxData = function(xVal, sampleData, color) {
    var maxY = 0;
    var minY = 0.1;
    var returnData = {};
    var _scatterSeriesDataArray = [];
    var _singleBoxData = {
      x: 0,
      low: 0,
      q1: 0,
      median: 0,
      q3: 0,
      high: 0,
      fillColor: '#FFFFFF',
      color: '#AAAAAA',
      pValue: 0
    };
    _singleBoxData.x = xVal;
    var valArray = [];
    if (color != null)
      _singleBoxData.fillColor = color;

    $.each(sampleData, function(key, sampleObj) {
      var _x = xVal + (Math.random() * 0.2) - 0.1;
      var yVal = sampleObj['value'];
      if (yVal < minY)
        minY = yVal;
      else if (yVal > maxY)
        maxY = yVal;
      var _scatterPointData = {
        name: '',
        x: 0,
        y: 0
      };
      _scatterPointData.name = sampleObj['sampleId'];
      _scatterPointData.x = _x;
      _scatterPointData.y = yVal;
      _scatterSeriesDataArray.push(_scatterPointData);
      valArray.push(yVal);
    });
    valArray.sort(function(a, b) {
      return a - b;
    });
    var quantiles = [];
    if (valArray.length > 1) {
      quantiles = jStat.quantiles(valArray, [0.25, 0.5, 0.75]);
      var IQR = quantiles[2] - quantiles[0];
      var high = valArray[searchIndexTop(valArray, quantiles[2] + (1.5 * IQR))];
      var low = valArray[searchIndexBottom(valArray, quantiles[0]
        - (1.5 * IQR))];
      _singleBoxData.low = low;
      _singleBoxData.q1 = quantiles[0];
      _singleBoxData.median = quantiles[1];
      _singleBoxData.q3 = quantiles[2];
      _singleBoxData.high = high;
    } else {
      _singleBoxData.low = valArray[0];
      _singleBoxData.q1 = valArray[0];
      _singleBoxData.median = valArray[0];
      _singleBoxData.q3 = valArray[0];
      _singleBoxData.high = valArray[0];
    }
    var tmparr = [];
    tmparr.push(_singleBoxData);
    returnData.scatterData = _scatterSeriesDataArray;
    returnData.boxData = tmparr;
    returnData.minY = minY;
    returnData.maxY = maxY;
    return returnData;
  };

  function processData(dataSet, geneName, zScoreCheck,
                      thresholdValue, normal_reference_id) {
    var maxY = 0;
    var minY = 0.1;
    var _singleDataSet = {
      mappingName: '',
      geneName: '',
      hasMultipleTumorDatasets: false,
      showPValues: false,
      isZScored: 'N',
      pValues: [],
      title: '',
      tissueNames: [],
      xAxisName: '',
      yAxisName: '',
      seriesData: [],
      maxY: 0,
      minY: 0
    };
    var _boxPlotSeriesData = [];
    var _scatterPlotSeriesData = [];
    var pValues = [];
    var tissueNames = [];
    var xCount = 0;
    var _hasMultipleTumorDatasets = _.pluck(_.filter(dataSet, function(_data) {
        return _data['isTumorData'];
      }), 'isTumorData').length > 1;
    $.each(
      dataSet,
      function(key, val) {
        var _boxName = val['name'].replace(new RegExp('_', 'g'), " ");

        tissueNames
          .push(_boxName);

        var _boxColor =  val['isTumorData'] ? ((val['color'] != null) ? val['color'] : '#CCCCFF') : null;
        var returnedData = getSingleBoxData(
          xCount,
          val['data'],
          _boxColor);

        if (returnedData['minY'] < minY)
          minY = returnedData['minY'];
        if (returnedData['maxY'] > maxY)
          maxY = returnedData['maxY'];

        var _boxSeriesData = {
          name: '',
          id: '',
          type: 'boxplot',
          showInLegend: true,
          data: [],
          isCancer: false,
          zIndex: 1
        };
        _boxSeriesData.name = _boxName;
        _boxSeriesData.id = val['studyId'] !== undefined? val['studyId']:
         _boxName;
        _boxSeriesData.data = returnedData.boxData;
        if(val['studyId'] !== undefined){
          _boxSeriesData.showInLegend = false;
        }

        _boxSeriesData.isCancer = val['isTumorData'];
        var _scatterSeriesData = {
          name: '',
          type: 'scatter',
          linkedTo: '',
          data: [],
          isCancer: false,
          zIndex: 2
        };
        _scatterSeriesData.name = _boxSeriesData.name;
        _scatterSeriesData.linkedTo = _boxSeriesData.id ;
        _scatterSeriesData.data = returnedData.scatterData;
        _scatterSeriesData.isCancer = _boxSeriesData.isCancer;
        xCount++;
        if (!_hasMultipleTumorDatasets) {
          pValues.push(val['pValue'] !== undefined ? val['pValue'] : "");
          if(!_boxSeriesData.isCancer){
            _boxSeriesData.data[0].pValue = parseFloat(val['pValue']);

            if (parseFloat(val['pValue']) <= parseFloat(thresholdValue)) {
              _boxSeriesData.data[0].color = "#F80000";
            }
          }

        }
        _boxPlotSeriesData
          .push(_boxSeriesData);
        _scatterPlotSeriesData
          .push(_scatterSeriesData);
      });

    _singleDataSet.mappingName = normal_reference_id;
    _singleDataSet.tissueNames = tissueNames;
    _singleDataSet.xAxisName = 'Tissue Type';
    _singleDataSet.pValues = pValues;
    _singleDataSet.yAxisName = geneName + ', Gene Expression Value';
    _singleDataSet.seriesData = $.merge(_boxPlotSeriesData, _scatterPlotSeriesData);
    _singleDataSet.geneName = geneName;
    _singleDataSet.title = geneName + " Tumor v. Normals";
    _singleDataSet.hasMultipleTumorDatasets = _hasMultipleTumorDatasets;
    _singleDataSet.maxY = maxY;
    _singleDataSet.minY = minY;
    return _singleDataSet;
  }


  return {
    processData: processData
  };
}());

var boxPlot = (function() {
  var significanceValues = [];
  var chartContainer = "";
  var cutofflabel = "";
  var labelName = "";
  var addPlotLine = function(value) {
    chartContainer.yAxis[0].removePlotLine('plot-line');
    chartContainer.yAxis[0].addPlotLine({
      value: value,
      color: "#0C4F8B",
      width: 3,
      id: 'plot-line'
    });
    cutofflabel.attr({
      text: labelName + value.toFixed(2)
    });
  };

  var addCrossCancerEvents = function() {
    (function(H) {
      Highcharts.Chart.prototype.callbacks.push(function(chart) {

        H.addEvent(chart, 'click', function(e) {
          var flag = e.target.textContent != "";
          if (!flag) {
            chart.showLoading();

            var cutoff = e.yAxis[0].value;
            addPlotLine(e.yAxis[0].value);
            //chart.yAxis[0].plotLinesAndBands[0].label.toFront();
            if (chart.get('significanceAxis') != null) {
              significanceValues = [];
              $.each(chart.series, function(key, val) {
                if ((val.visible == true) && (val.type == 'boxplot')) {
                  var count = 0;
                  $.each(val.linkedSeries[0].yData, function(key1, val1) {
                    if (val1 >= cutoff) count++;
                  });
                  significanceValues.push(((count / val.linkedSeries[0].yData.length) * 100).toFixed(2));
                }
              });
              chart.get('significanceAxis').setCategories(significanceValues);
            }

            chart.hideLoading();
          }
        });
      });
    }(Highcharts));

  };

  var drawPlot = function(map) {
    // $('plots_box').html("");
    if (map.hasMultipleTumorDatasets) {
      addCrossCancerEvents();
    }

    chartContainer = new Highcharts.Chart({
      chart: {
        renderTo: 'plots_box',
        plotBorderWidth: 1,
        width: 920,
        events: {
          load: function(event) {
            this.myTooltip = new Highcharts.Tooltip(this, this.options.tooltip);
            labelName = 'Median value : ';
            if (map.hasMultipleTumorDatasets) {
              labelName = 'Cutoff value : ';
              significanceValues = [];
              var cutoff = this.yAxis[0].plotLinesAndBands[0].options.value;
              $.each(this.series, function(key, val) {
                if ((val.visible == true) && (val.type == 'boxplot')) {
                  var count = 0;
                  $.each(val.linkedSeries[0].yData, function(key1, val1) {
                    if (val1 >= cutoff) count++;
                  });
                  significanceValues.push(((count / val.linkedSeries[0].yData.length) * 100).toFixed(2));
                }
              });

              var label = this.renderer.label('Click on the plot to move line', this.chartWidth - 200, this.plotTop)
                .attr({
                  fill: 'rgba(0, 0, 0, 0.75)',
                  padding: 8,
                  r: 5,
                  zIndex: 8
                })
                .css({
                  color: '#FFFFFF'
                })
                .add();

              setTimeout(function() {
                label.fadeOut();
              }, 7000);

            } else {
              significanceValues = map.pValues;
            }
            cutofflabel = this.renderer.label(
                (map.hasMultipleTumorDatasets ? 'Cutoff value : ' : 'Median value : ') +
                map.seriesData[0].data[0].median.toFixed(2), this.plotLeft, this.plotTop)
              .attr({
                fill: 'rgba(0, 0, 0, 0.75)',
                padding: 8,
                r: 5,
                zIndex: 8
              })
              .css({
                color: '#FFFFFF',

                fontSize: '10px',
                fontFamily: 'Verdana, sans-serif',
                fontWeight: 'bold',
                'z-index': 1
              })
              .add();
            if (this.get('significanceAxis') != null) {
              this.get('significanceAxis').remove();
            }
            this.addAxis({ // slave axis
              linkedTo: 0,
              id: 'significanceAxis',
              lineWidth: 0,
              startOnTick: false,
              //min:0,
              tickColor: 'none',
              categories: significanceValues,
              opposite: false,
              title: {
                align: 'low',
                text: map.hasMultipleTumorDatasets ? 'Sig.(%)' : 'P values',
                rotation: 0,
                x: -60,
                y: -25
              },
              labels: {
                align: 'center',
                autoRotation: false,
                style: {
                  width: '30px',
                  'max-width': '20px',
                  fontSize: '10px',
                  fontFamily: 'Verdana, sans-serif',
                  height: '20px',
                  textOverflow: 'ellipsis'
                }
              }
            }, true);
          }
        }
      },
      lang: {
        loading: ""
      },
      loading: {
        hideDuration: 0,
        showDuration: 0,
        style: {
          backgroundImage: "url('images/ajax-loader.gif')",
          backgroundColor: 'gray',
          'backgroundRepeat': 'no-repeat',
          'backgroundPosition': 'center',
          opacity: .8
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: map.title
      },
      xAxis: [{
        title: {
          text: map.xAxisName,
          y: 57
        },
        tickInterval: 1,
        categories: map.tissueNames,
        labels: {
          formatter: function() {
            return this.value.toString().replace(" ", '<br />');
          },
          align: 'center',
          autoRotation: false,
          style: {
            width: '30px',
            'max-width': '20px',
            fontSize: '10px',
            fontFamily: 'Verdana, sans-serif',
            height: '20px',
            textOverflow: 'ellipsis'
          }
        },
        min: 0,
        max: 8
      }],
      yAxis: [{
        title: {
          text: map.yAxisName
        },
        min: map.minY,
        max: map.maxY,
        endOnTick: true,
        gridLineWidth: 0,
        plotLines: [{
          value: map.seriesData[0].data[0].median,
          color: "#0C4F8B",
          width: 3,
          id: 'plot-line'
        }]
      }],
      legend: {
        title: {
          text: 'Normal Tissue<br/><span style="font-size: 9px; color: #666; font-weight: normal">(Click to hide)</span>',
          style: {
            fontStyle: 'italic'
          }
        },
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        symbolHeight: 0,
        symbolWidth: 0,
        symbolRadius: 0,
        squareSymbol: false
      },
      plotOptions: {
        boxplot: {
          grouping: false,
          lineWidth: 2,
          whiskerLength: '60%',
          fillColor: '#FFFFFF'
        },
        scatter: {
          marker: {
            radius: 2.5,
            fillColor: '#0C4F8B',
            symbol: 'circle',
            states: {
              hover: {
                radiusPlus: 3,
                fillColor: '#ff1919',
                lineColor: '#e50000'
              }
            }
          },
          states: {
            hover: {
              halo: false
            }
          },
          events: {
            click: function(evt) {
              this.chart.myTooltip.refresh(evt.point, evt);
            },
            mouseOut: function() {
              this.chart.myTooltip.hide();
            }
          }
        },
        series: {
          events: {
            legendItemClick: function() {
              var categoryNames = [];
              var location = this.xData;
              var tempsignificanceValues = [];
              this.chart.showLoading();
              if (this.visible) {
                this.setVisible(false, false);
                this.linkedSeries[0].setVisible(false, false);
                $.each(this.chart.series, function(key, val) {
                  if ((val.visible) && (val.type == 'boxplot')) {
                    categoryNames.push(val.name);
                    tempsignificanceValues.push(significanceValues[key]);
                    if (val.xData != location) {
                      if (parseInt(val.xData) > parseInt(location)) {
                        val.data[0].update({
                          x: parseInt(val.xData) - 1
                        }, false);

                        $.each(val.linkedSeries[0].data, function(key1, val1) {
                          val1.update({
                            x: parseFloat(val1.x) - 1
                          }, false);
                        });
                      }
                    }
                  } else if ((val.type == 'scatter')) {
                    return false;
                  }
                });
                //this.chart.xAxis[0].setExtremes(0, null,false);
              } else {
                $.each(this.chart.series, function(key, val) {
                  if (((val.visible) || (val.xData == location)) && (val.type == 'boxplot')) {
                    categoryNames.push(val.name);
                    tempsignificanceValues.push(significanceValues[key]);
                    if ((val.visible) && (parseInt(val.xData) > location)) {
                      val.data[0].update({
                        x: parseInt(val.data[0].x) + 1
                      }, false);

                      $.each(val.linkedSeries[0].data, function(key1, val1) {
                        val1.update({
                          x: parseFloat(val1.x) + 1
                        }, false);
                      });

                    } else if (parseInt(val.xData) == location) {
                      var xVal = parseInt(val.data[0].x);
                      val.data[0].update({
                        x: parseInt(categoryNames.length - 1)
                      }, false);

                      $.each(val.linkedSeries[0].data, function(key1, val1) {
                        var updatedVal = val1.x - xVal;
                        updatedVal = updatedVal + parseFloat(categoryNames.length - 1);
                        val1.update({
                          x: updatedVal
                        }, false);
                      });

                    }
                  } else if ((val.type == 'scatter')) {
                    return false;
                  }
                });
                this.setVisible(true, false);
              }
              var _visibleLength = _.filter(this.chart.series, function(series) {
                  return series['visible']
                }).length / 2;
              if (_visibleLength <= 8) {
                this.chart.scroller.scrollbar.scrollbar.hide();
                this.chart.scroller.scrollbar.scrollbarGroup.hide();
                this.chart.xAxis[0].setExtremes(0, _visibleLength - 1, false);
              } else {
                this.chart.scroller.scrollbar.scrollbar.show();
                this.chart.scroller.scrollbar.scrollbarGroup.show();
                this.chart.xAxis[0].setExtremes(0, 8, false);
              }
              this.chart.xAxis[0].setCategories(categoryNames, false);
              this.chart.xAxis[1].setCategories(tempsignificanceValues, false);

              this.chart.redraw();
              this.chart.hideLoading();
              return false;
            }
          }
        }
      },
      tooltip: {
        useHTML: true,
        hideDelay: 1000,
        enabled: false,
        shared: false,
        borderWidth: 2,
        borderColor: '#e7f3fd',
        shadow: true,
        followTouchMove: true,
        backgroundColor: '#fafcff',
        formatter: function() {
          if (this.series.type == 'scatter') {
            var content = "<div>mRNA: <strong>" + parseFloat(this.point.y).toFixed(3) + "</strong><br>Case ID: <strong>";
            if (this.series.userOptions.isCancer) {
              content += "<a href="+ window.cbioURL +
                "case.do?sample_id=" +
                this.point.name +
                "&cancer_study_id=" +
                this.series.userOptions.linkedTo +
                " target = '_blank'>" +
                this.point.name +
                "</a>";
            } else {
              content += this.point.name ;
            }
            content += "</strong><br></div>";
            return content;
          }

        }
      },
      series: map.seriesData,
      scrollbar: {
        enabled: true,
        barBackgroundColor: 'gray',
        barBorderRadius: 3,
        barBorderWidth: 0,
        buttonBackgroundColor: 'gray',
        buttonBorderWidth: 0,
        buttonArrowColor: 'yellow',
        buttonBorderRadius: 3,
        rifleColor: 'yellow',
        trackBackgroundColor: 'white',
        trackBorderWidth: 1,
        trackBorderColor: 'silver',
        trackBorderRadius: 3

      },
      exporting: {
        filename: map.title,
        buttons: {
          contextButton: {
            menuItems: [{
              text: 'Export to PNG image',
              onclick: function() {
                exportTemplate(this, 'image/png');
              }
            }, {
              text: 'Export to JPEG image',
              onclick: function() {
                exportTemplate(this, 'image/jpeg');
              }
            }, {
              text: 'Export to PDF',
              onclick: function() {
                exportTemplate(this, 'application/pdf');
              }
            }, {
              text: 'Export to SVG image',
              onclick: function() {
                exportTemplate(this, 'image/svg+xml');
              }
            }]

          }
        }
      }
    });
  };

  function exportTemplate(chart, type) {
    var visibleLegendNames = _.map(_.filter(chart.legend['allItems'], function(legend) {
      return legend['visible']
    }), function(legend) {
      return legend['name']
    });
    chart.exportChart({
      sourceWidth: visibleLegendNames.length * 100,
      type: type
    }, {
      xAxis: [{
        title: {
          text: "Tissue Type",
          y: 60
        },
        categories: visibleLegendNames,
        min: 0,
        minRange: visibleLegendNames.length - 1,
        max: visibleLegendNames.length - 1
      }],
      scrollbar: {
        enabled: false
      }
    });

  }

  function applyLog(flag) {
    chartContainer.showLoading();
    if (flag) {
      var val;
      $.each(chartContainer.series, function(key, val) {

        if (val.type == 'boxplot') {
          var temp = val.data[0].options;
          temp.high = Math.log(temp.high) / Math.log(2);
          temp.low = Math.log(temp.low) / Math.log(2);
          temp.q1 = Math.log(temp.q1) / Math.log(2);
          temp.median = Math.log(temp.median) / Math.log(2);
          temp.q3 = Math.log(temp.q3) / Math.log(2);
          val.data[0].update(temp, false);
        } else {
          $.each(val.data, function(key1, val1) {
            var temp = val1.options;
            temp.y = Math.log(temp.y) / Math.log(2);
            val.data[key1].update(temp, false);
          });
        }
      });
      val = Math.log(chartContainer.yAxis[0].plotLinesAndBands[0].options.value) / Math.log(2);
      chartContainer.yAxis[0].setTitle({text: chartContainer.options.yAxis[0].title.text + ' (log2)'}, false);
      chartContainer.yAxis[0].setExtremes(Math.log(chartContainer.yAxis[0].options.min) / Math.log(2), Math.log(chartContainer.yAxis[0].options.max) / Math.log(2), false);
    } else {
      $.each(chartContainer.series, function(key, val) {
        if (val.type == 'boxplot') {
          var temp = val.data[0].options;
          temp.high = Math.pow(2, temp.high);
          temp.low = Math.pow(2, temp.low);
          temp.q1 = Math.pow(2, temp.q1);
          temp.median = Math.pow(2, temp.median);
          temp.q3 = Math.pow(2, temp.q3);
          val.data[0].update(temp, false);
        } else {
          $.each(val.data, function(key1, val1) {
            var temp = val1.options;
            temp.y = Math.pow(2, temp.y);
            val.data[key1].update(temp, false);
          });
        }
      });
      val = Math.pow(2, chartContainer.yAxis[0].plotLinesAndBands[0].options.value);
      var yTitle = chartContainer.options.yAxis[0].title.text;
      yTitle = yTitle.substring(0, yTitle.indexOf(" (log2)"));
      chartContainer.yAxis[0].setTitle({text: yTitle}, false);
      chartContainer.yAxis[0].setExtremes(chartContainer.yAxis[0].options.min, chartContainer.yAxis[0].options.max, false);
    }
    addPlotLine(val);
    chartContainer.redraw();
    chartContainer.hideLoading();
  }

  function thresholdChange(thresholdValue) {
    chartContainer.showLoading();
    $.each(chartContainer.series, function(key, val) {
      if (val.type == 'boxplot') {
        if (!val.userOptions.isCancer) {
          var temp = val.data[0].options;
          if (parseFloat(temp.pValue) <= parseFloat(thresholdValue)) {
            temp.color = "#F80000";
          } else {
            temp.color = '#AAAAAA';
          }
          val.update(temp, false);
        }

      } else {
        return false;
      }
    });
    chartContainer.redraw();
    chartContainer.hideLoading();
  }

  return {
    initializePlot: drawPlot,
    applyLog: applyLog,
    thresholdChange: thresholdChange
  };

}());
