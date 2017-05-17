<script type="text/javascript" src="js/src/tvn-tab/tvn-vendor.js?<%=GlobalProperties.getAppVersion()%>"></script>
<script type="text/javascript" src="js/src/tvn-tab/tvn.js?<%=GlobalProperties.getAppVersion()%>"></script>
<link rel="stylesheet" href="css/tvn-tab/tvn.css?<%=GlobalProperties.getAppVersion()%>"/>

<div class="section" id="tvn">
<div id="tumor_vs_normals">
    <table>
        <tr>
            <td>
                <div id="tvn-sidebar-div" class="tvn">
                    <h4>Parameters Filter</h4>
                    <div id="tvn-spec">

                        <div v-if="showNormalsSelectionDropDown">
                            <h5>Normal Dataset</h5>
                            <select id="select_normals_reference"
                                    v-model="selectedNormals">
                                <option value="key"
                                        v-for="(key,val) in normals">{{normal}}
                                </option>
                            </select>
                        </div>

                        <div>
                            <h5>Gene</h5>
                            <select id="select_gene" v-model="selectedGene">
                                <option id="{{gene}}" value="{{gene}}"
                                        v-for="gene in genes">{{gene}}
                                </option>
                            </select>
                        </div>


                        <div v-if="showzScoreOption">
                            <h5>Apply Z-Score</h5>
                            <input type="checkbox" id="zscore_option"
                                   v-model="zScoreOption">
                        </div>

                        <div v-if="showzScoreOption && !zScoreOption">
                            <h5>Apply Log Scale</h5>
                            <input type="checkbox" id="log_value_option"
                                   v-model="logValueOption">
                        </div>

                        <div v-if="showThresholdValue">
                            <h5>Threshold Value</h5>
                            <input v-on:input="debounceInput" type="text"
                                   id="threshold_value"
                                   v-model="thresholdValue" value="0.01"
                                   style="width:100px;"
                                   v-on:keypress="isNumber(event,thresholdValue)">
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div id="tvn-plots-box" class="tvn">
                    <div :class="{'start-loading': isloading}"
                         align="center"
                         style="float:none !important; height: 650px;"
                         id="plots_box" v-if="hasData"></div>
                        <div v-if="!hasData" style="margin-top: 30%;
                        margin-left: 30%;">
                            <span>Sorry! No Data Available</span>
                        </div>
                    <div id="chart-loader" :class="{'show-loading': isloading}"
                         class="chart-loader"
                         style="top: 30%; left: 30%; display: none;">
                        <img src="images/ajax-loader.gif" alt="loading">
                    </div>
                </div>

            </td>
        </tr>
    </table>
</div>
</div>

</body>
<script>
    $(document).ready(function() {
    	window.cbioURL = '';
        var _tvn_instance = TVN.vue.manage.getInstance();
        window.tvn = {};

    	var tvn_tab_init = false;
        if ($("#tvn").is(":visible")) {
                	window.cbioportal_client.getGeneticProfiles({'study_id': [window.QuerySession.getCancerStudyIds()[0]]})
                .then(function(_genetic_profiles) {
                    window.tvn_datamanager = new
                            TVNDataManager.init(window.QuerySession.getQueryGenes(), _genetic_profiles, window.QuerySession.getStudySampleMap());
                    _tvn_instance.initializeOptions(window.tvn_datamanager.getGenes(), window.tvn_datamanager.getFilterOptionsData());
                });
                    tvn_tab_init = true;
        } else {
            $(window).trigger("resize");
        }
        $("#tabs").bind("tabsactivate", function(event, ui) {
            if (ui.newTab.text().trim().toLowerCase() === "tumor vs normals") {
                if (tvn_tab_init === false) {
                	window.cbioportal_client.getGeneticProfiles({'study_id': [window.QuerySession.getCancerStudyIds()[0]]})
                .then(function(_genetic_profiles) {
                    window.tvn_datamanager = new
                            TVNDataManager.init(window.QuerySession.getQueryGenes(), _genetic_profiles, window.QuerySession.getStudySampleMap());
                    _tvn_instance.initializeOptions(window.tvn_datamanager.getGenes(), window.tvn_datamanager.getFilterOptionsData());
                });
                    tvn_tab_init = true;
                    $(window).trigger("resize");
                } else {
                    $(window).trigger("resize");
                }
            }
        });
        
        
    });
</script>