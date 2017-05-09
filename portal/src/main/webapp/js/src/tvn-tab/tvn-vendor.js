/*
 Highstock JS v5.0.10 (2017-03-31)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(K,a){"object"===typeof module&&module.exports?module.exports=K.document?a(K):a:K.Highcharts=a(K)})("undefined"!==typeof window?window:this,function(K){K=function(){var a=window,D=a.document,C=a.navigator&&a.navigator.userAgent||"",G=D&&D.createElementNS&&!!D.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,H=/(edge|msie|trident)/i.test(C)&&!window.opera,v=!G,l=/Firefox/.test(C),r=l&&4>parseInt(C.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highstock",
version:"5.0.10",deg2rad:2*Math.PI/360,doc:D,hasBidiBug:r,hasTouch:D&&void 0!==D.documentElement.ontouchstart,isMS:H,isWebKit:/AppleWebKit/.test(C),isFirefox:l,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(C),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:G,vml:v,win:a,charts:[],marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){}}}();(function(a){var D=[],C=a.charts,G=a.doc,H=a.win;a.error=function(v,l){v=a.isNumber(v)?"Highcharts error #"+
v+": www.highcharts.com/errors/"+v:v;if(l)throw Error(v);H.console&&console.log(v)};a.Fx=function(a,l,r){this.options=l;this.elem=a;this.prop=r};a.Fx.prototype={dSetter:function(){var a=this.paths[0],l=this.paths[1],r=[],w=this.now,q=a.length,n;if(1===w)r=this.toD;else if(q===l.length&&1>w)for(;q--;)n=parseFloat(a[q]),r[q]=isNaN(n)?a[q]:w*parseFloat(l[q]-n)+n;else r=l;this.elem.attr("d",r,null,!0)},update:function(){var a=this.elem,l=this.prop,r=this.now,w=this.options.step;if(this[l+"Setter"])this[l+
"Setter"]();else a.attr?a.element&&a.attr(l,r,null,!0):a.style[l]=r+this.unit;w&&w.call(a,r,this)},run:function(a,l,r){var v=this,q=function(a){return q.stopped?!1:v.step(a)},n;this.startTime=+new Date;this.start=a;this.end=l;this.unit=r;this.now=this.start;this.pos=0;q.elem=this.elem;q.prop=this.prop;q()&&1===D.push(q)&&(q.timerId=setInterval(function(){for(n=0;n<D.length;n++)D[n]()||D.splice(n--,1);D.length||clearInterval(q.timerId)},13))},step:function(a){var l=+new Date,v,w=this.options;v=this.elem;
var q=w.complete,n=w.duration,f=w.curAnim,c;if(v.attr&&!v.element)v=!1;else if(a||l>=n+this.startTime){this.now=this.end;this.pos=1;this.update();a=f[this.prop]=!0;for(c in f)!0!==f[c]&&(a=!1);a&&q&&q.call(v);v=!1}else this.pos=w.easing((l-this.startTime)/n),this.now=this.start+(this.end-this.start)*this.pos,this.update(),v=!0;return v},initPath:function(v,l,r){function w(a){var b,k;for(B=a.length;B--;)b="M"===a[B]||"L"===a[B],k=/[a-zA-Z]/.test(a[B+3]),b&&k&&a.splice(B+1,0,a[B+1],a[B+2],a[B+1],a[B+
2])}function q(a,d){for(;a.length<t;){a[0]=d[t-a.length];var k=a.slice(0,b);[].splice.apply(a,[0,0].concat(k));p&&(k=a.slice(a.length-b),[].splice.apply(a,[a.length,0].concat(k)),B--)}a[0]="M"}function n(a,d){for(var k=(t-a.length)/b;0<k&&k--;)h=a.slice().splice(a.length/x-b,b*x),h[0]=d[t-b-k*b],z&&(h[b-6]=h[b-2],h[b-5]=h[b-1]),[].splice.apply(a,[a.length/x,0].concat(h)),p&&k--}l=l||"";var f,c=v.startX,e=v.endX,z=-1<l.indexOf("C"),b=z?7:3,t,h,B;l=l.split(" ");r=r.slice();var p=v.isArea,x=p?2:1,k;
z&&(w(l),w(r));if(c&&e){for(B=0;B<c.length;B++)if(c[B]===e[0]){f=B;break}else if(c[0]===e[e.length-c.length+B]){f=B;k=!0;break}void 0===f&&(l=[])}l.length&&a.isNumber(f)&&(t=r.length+f*x*b,k?(q(l,r),n(r,l)):(q(r,l),n(l,r)));return[l,r]}};a.extend=function(a,l){var v;a||(a={});for(v in l)a[v]=l[v];return a};a.merge=function(){var v,l=arguments,r,w={},q=function(n,f){var c,e;"object"!==typeof n&&(n={});for(e in f)f.hasOwnProperty(e)&&(c=f[e],a.isObject(c,!0)&&"renderTo"!==e&&"number"!==typeof c.nodeType?
n[e]=q(n[e]||{},c):n[e]=f[e]);return n};!0===l[0]&&(w=l[1],l=Array.prototype.slice.call(l,2));r=l.length;for(v=0;v<r;v++)w=q(w,l[v]);return w};a.pInt=function(a,l){return parseInt(a,l||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(v,l){return v&&"object"===typeof v&&(!l||!a.isArray(v))};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=
function(a,l){for(var v=a.length;v--;)if(a[v]===l){a.splice(v,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(v,l,r){var w,q;if(a.isString(l))a.defined(r)?v.setAttribute(l,r):v&&v.getAttribute&&(q=v.getAttribute(l));else if(a.defined(l)&&a.isObject(l))for(w in l)v.setAttribute(w,l[w]);return q};a.splat=function(v){return a.isArray(v)?v:[v]};a.syncTimeout=function(a,l,r){if(l)return setTimeout(a,l,r);a.call(0,r)};a.pick=function(){var a=arguments,l,r,w=a.length;for(l=
0;l<w;l++)if(r=a[l],void 0!==r&&null!==r)return r};a.css=function(v,l){a.isMS&&!a.svg&&l&&void 0!==l.opacity&&(l.filter="alpha(opacity\x3d"+100*l.opacity+")");a.extend(v.style,l)};a.createElement=function(v,l,r,w,q){v=G.createElement(v);var n=a.css;l&&a.extend(v,l);q&&n(v,{padding:0,border:"none",margin:0});r&&n(v,r);w&&w.appendChild(v);return v};a.extendClass=function(v,l){var r=function(){};r.prototype=new v;a.extend(r.prototype,l);return r};a.pad=function(a,l,r){return Array((l||2)+1-String(a).length).join(r||
0)+a};a.relativeLength=function(a,l){return/%$/.test(a)?l*parseFloat(a)/100:parseFloat(a)};a.wrap=function(a,l,r){var w=a[l];a[l]=function(){var a=Array.prototype.slice.call(arguments),n=arguments,f=this;f.proceed=function(){w.apply(f,arguments.length?arguments:n)};a.unshift(w);a=r.apply(this,a);f.proceed=null;return a}};a.getTZOffset=function(v){var l=a.Date;return 6E4*(l.hcGetTimezoneOffset&&l.hcGetTimezoneOffset(v)||l.hcTimezoneOffset||0)};a.dateFormat=function(v,l,r){if(!a.defined(l)||isNaN(l))return a.defaultOptions.lang.invalidDate||
"";v=a.pick(v,"%Y-%m-%d %H:%M:%S");var w=a.Date,q=new w(l-a.getTZOffset(l)),n,f=q[w.hcGetHours](),c=q[w.hcGetDay](),e=q[w.hcGetDate](),z=q[w.hcGetMonth](),b=q[w.hcGetFullYear](),t=a.defaultOptions.lang,h=t.weekdays,B=t.shortWeekdays,p=a.pad,w=a.extend({a:B?B[c]:h[c].substr(0,3),A:h[c],d:p(e),e:p(e,2," "),w:c,b:t.shortMonths[z],B:t.months[z],m:p(z+1),y:b.toString().substr(2,2),Y:b,H:p(f),k:f,I:p(f%12||12),l:f%12||12,M:p(q[w.hcGetMinutes]()),p:12>f?"AM":"PM",P:12>f?"am":"pm",S:p(q.getSeconds()),L:p(Math.round(l%
1E3),3)},a.dateFormats);for(n in w)for(;-1!==v.indexOf("%"+n);)v=v.replace("%"+n,"function"===typeof w[n]?w[n](l):w[n]);return r?v.substr(0,1).toUpperCase()+v.substr(1):v};a.formatSingle=function(v,l){var r=/\.([0-9])/,w=a.defaultOptions.lang;/f$/.test(v)?(r=(r=v.match(r))?r[1]:-1,null!==l&&(l=a.numberFormat(l,r,w.decimalPoint,-1<v.indexOf(",")?w.thousandsSep:""))):l=a.dateFormat(v,l);return l};a.format=function(v,l){for(var r="{",w=!1,q,n,f,c,e=[],z;v;){r=v.indexOf(r);if(-1===r)break;q=v.slice(0,
r);if(w){q=q.split(":");n=q.shift().split(".");c=n.length;z=l;for(f=0;f<c;f++)z=z[n[f]];q.length&&(z=a.formatSingle(q.join(":"),z));e.push(z)}else e.push(q);v=v.slice(r+1);r=(w=!w)?"}":"{"}e.push(v);return e.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(v,l,r,w,q){var n,f=v;r=a.pick(r,1);n=v/r;l||(l=q?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===w&&(1===r?l=a.grep(l,function(a){return 0===a%1}):.1>=r&&(l=[1/r])));
for(w=0;w<l.length&&!(f=l[w],q&&f*r>=v||!q&&n<=(l[w]+(l[w+1]||l[w]))/2);w++);return f=a.correctFloat(f*r,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,l){var r=a.length,w,q;for(q=0;q<r;q++)a[q].safeI=q;a.sort(function(a,f){w=l(a,f);return 0===w?a.safeI-f.safeI:w});for(q=0;q<r;q++)delete a[q].safeI};a.arrayMin=function(a){for(var l=a.length,r=a[0];l--;)a[l]<r&&(r=a[l]);return r};a.arrayMax=function(a){for(var l=a.length,r=a[0];l--;)a[l]>r&&(r=a[l]);return r};a.destroyObjectProperties=
function(a,l){for(var r in a)a[r]&&a[r]!==l&&a[r].destroy&&a[r].destroy(),delete a[r]};a.discardElement=function(v){var l=a.garbageBin;l||(l=a.createElement("div"));v&&l.appendChild(v);l.innerHTML=""};a.correctFloat=function(a,l){return parseFloat(a.toPrecision(l||14))};a.setAnimation=function(v,l){l.renderer.globalAnimation=a.pick(v,l.options.chart.animation,!0)};a.animObject=function(v){return a.isObject(v)?a.merge(v):{duration:v?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,
day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(v,l,r,w){v=+v||0;l=+l;var q=a.defaultOptions.lang,n=(v.toString().split(".")[1]||"").length,f,c;-1===l?l=Math.min(n,20):a.isNumber(l)||(l=2);c=(Math.abs(v)+Math.pow(10,-Math.max(l,n)-1)).toFixed(l);n=String(a.pInt(c));f=3<n.length?n.length%3:0;r=a.pick(r,q.decimalPoint);w=a.pick(w,q.thousandsSep);v=(0>v?"-":"")+(f?n.substr(0,f)+w:"");v+=n.substr(f).replace(/(\d{3})(?=\d)/g,"$1"+w);l&&(v+=r+c.slice(-l));return v};Math.easeInOutSine=
function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(v,l){return"width"===l?Math.min(v.offsetWidth,v.scrollWidth)-a.getStyle(v,"padding-left")-a.getStyle(v,"padding-right"):"height"===l?Math.min(v.offsetHeight,v.scrollHeight)-a.getStyle(v,"padding-top")-a.getStyle(v,"padding-bottom"):(v=H.getComputedStyle(v,void 0))&&a.pInt(v.getPropertyValue(l))};a.inArray=function(a,l){return l.indexOf?l.indexOf(a):[].indexOf.call(l,a)};a.grep=function(a,l){return[].filter.call(a,l)};a.find=function(a,
l){return[].find.call(a,l)};a.map=function(a,l){for(var r=[],w=0,q=a.length;w<q;w++)r[w]=l.call(a[w],a[w],w,a);return r};a.offset=function(a){var l=G.documentElement;a=a.getBoundingClientRect();return{top:a.top+(H.pageYOffset||l.scrollTop)-(l.clientTop||0),left:a.left+(H.pageXOffset||l.scrollLeft)-(l.clientLeft||0)}};a.stop=function(a,l){for(var r=D.length;r--;)D[r].elem!==a||l&&l!==D[r].prop||(D[r].stopped=!0)};a.each=function(a,l,r){return Array.prototype.forEach.call(a,l,r)};a.addEvent=function(v,
l,r){function w(a){a.target=a.srcElement||H;r.call(v,a)}var q=v.hcEvents=v.hcEvents||{};v.addEventListener?v.addEventListener(l,r,!1):v.attachEvent&&(v.hcEventsIE||(v.hcEventsIE={}),v.hcEventsIE[r.toString()]=w,v.attachEvent("on"+l,w));q[l]||(q[l]=[]);q[l].push(r);return function(){a.removeEvent(v,l,r)}};a.removeEvent=function(v,l,r){function w(a,c){v.removeEventListener?v.removeEventListener(a,c,!1):v.attachEvent&&(c=v.hcEventsIE[c.toString()],v.detachEvent("on"+a,c))}function q(){var a,c;if(v.nodeName)for(c in l?
(a={},a[l]=!0):a=f,a)if(f[c])for(a=f[c].length;a--;)w(c,f[c][a])}var n,f=v.hcEvents,c;f&&(l?(n=f[l]||[],r?(c=a.inArray(r,n),-1<c&&(n.splice(c,1),f[l]=n),w(l,r)):(q(),f[l]=[])):(q(),v.hcEvents={}))};a.fireEvent=function(v,l,r,w){var q;q=v.hcEvents;var n,f;r=r||{};if(G.createEvent&&(v.dispatchEvent||v.fireEvent))q=G.createEvent("Events"),q.initEvent(l,!0,!0),a.extend(q,r),v.dispatchEvent?v.dispatchEvent(q):v.fireEvent(l,q);else if(q)for(q=q[l]||[],n=q.length,r.target||a.extend(r,{preventDefault:function(){r.defaultPrevented=
!0},target:v,type:l}),l=0;l<n;l++)(f=q[l])&&!1===f.call(v,r)&&r.preventDefault();w&&!r.defaultPrevented&&w(r)};a.animate=function(v,l,r){var w,q="",n,f,c;a.isObject(r)||(w=arguments,r={duration:w[2],easing:w[3],complete:w[4]});a.isNumber(r.duration)||(r.duration=400);r.easing="function"===typeof r.easing?r.easing:Math[r.easing]||Math.easeInOutSine;r.curAnim=a.merge(l);for(c in l)a.stop(v,c),f=new a.Fx(v,r,c),n=null,"d"===c?(f.paths=f.initPath(v,v.d,l.d),f.toD=l.d,w=0,n=1):v.attr?w=v.attr(c):(w=parseFloat(a.getStyle(v,
c))||0,"opacity"!==c&&(q="px")),n||(n=l[c]),n&&n.match&&n.match("px")&&(n=n.replace(/px/g,"")),f.run(w,n,q)};a.seriesType=function(v,l,r,w,q){var n=a.getOptions(),f=a.seriesTypes;n.plotOptions[v]=a.merge(n.plotOptions[l],r);f[v]=a.extendClass(f[l]||function(){},w);f[v].prototype.type=v;q&&(f[v].prototype.pointClass=a.extendClass(a.Point,q));return f[v]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),l=0;return function(){return"highcharts-"+a+"-"+l++}}();H.jQuery&&(H.jQuery.fn.highcharts=
function(){var v=[].slice.call(arguments);if(this[0])return v[0]?(new (a[a.isString(v[0])?v.shift():"Chart"])(this[0],v[0],v[1]),this):C[a.attr(this[0],"data-highcharts-chart")]});G&&!G.defaultView&&(a.getStyle=function(v,l){var r={width:"clientWidth",height:"clientHeight"}[l];if(v.style[l])return a.pInt(v.style[l]);"opacity"===l&&(l="filter");if(r)return v.style.zoom=1,Math.max(v[r]-2*a.getStyle(v,"padding"),0);v=v.currentStyle[l.replace(/\-(\w)/g,function(a,q){return q.toUpperCase()})];"filter"===
l&&(v=v.replace(/alpha\(opacity=([0-9]+)\)/,function(a,q){return q/100}));return""===v?1:a.pInt(v)});Array.prototype.forEach||(a.each=function(a,l,r){for(var w=0,q=a.length;w<q;w++)if(!1===l.call(r,a[w],w,a))return w});Array.prototype.indexOf||(a.inArray=function(a,l){var r,w=0;if(l)for(r=l.length;w<r;w++)if(l[w]===a)return w;return-1});Array.prototype.filter||(a.grep=function(a,l){for(var r=[],w=0,q=a.length;w<q;w++)l(a[w],w)&&r.push(a[w]);return r});Array.prototype.find||(a.find=function(a,l){var r,
w=a.length;for(r=0;r<w;r++)if(l(a[r],r))return a[r]})})(K);(function(a){var D=a.each,C=a.isNumber,G=a.map,H=a.merge,v=a.pInt;a.Color=function(l){if(!(this instanceof a.Color))return new a.Color(l);this.init(l)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[v(a[1]),v(a[2]),v(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[v(a[1]),
v(a[2]),v(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(l){var r,w,q,n;if((this.input=l=this.names[l&&l.toLowerCase?l.toLowerCase():""]||l)&&l.stops)this.stops=G(l.stops,function(f){return new a.Color(f[1])});else if(l&&"#"===l[0]&&(r=l.length,l=parseInt(l.substr(1),16),7===r?w=[(l&16711680)>>16,(l&65280)>>8,l&255,1]:4===r&&(w=[(l&3840)>>4|(l&3840)>>8,(l&240)>>4|l&240,(l&15)<<4|l&15,1])),!w)for(q=this.parsers.length;q--&&!w;)n=this.parsers[q],(r=n.regex.exec(l))&&(w=n.parse(r));
this.rgba=w||[]},get:function(a){var l=this.input,w=this.rgba,q;this.stops?(q=H(l),q.stops=[].concat(q.stops),D(this.stops,function(n,f){q.stops[f]=[q.stops[f][0],n.get(a)]})):q=w&&C(w[0])?"rgb"===a||!a&&1===w[3]?"rgb("+w[0]+","+w[1]+","+w[2]+")":"a"===a?w[3]:"rgba("+w.join(",")+")":l;return q},brighten:function(a){var l,w=this.rgba;if(this.stops)D(this.stops,function(q){q.brighten(a)});else if(C(a)&&0!==a)for(l=0;3>l;l++)w[l]+=v(255*a),0>w[l]&&(w[l]=0),255<w[l]&&(w[l]=255);return this},setOpacity:function(a){this.rgba[3]=
a;return this}};a.color=function(l){return new a.Color(l)}})(K);(function(a){var D,C,G=a.addEvent,H=a.animate,v=a.attr,l=a.charts,r=a.color,w=a.css,q=a.createElement,n=a.defined,f=a.deg2rad,c=a.destroyObjectProperties,e=a.doc,z=a.each,b=a.extend,t=a.erase,h=a.grep,B=a.hasTouch,p=a.inArray,x=a.isArray,k=a.isFirefox,F=a.isMS,d=a.isObject,u=a.isString,m=a.isWebKit,y=a.merge,J=a.noop,E=a.pick,I=a.pInt,g=a.removeEvent,L=a.stop,R=a.svg,O=a.SVG_NS,M=a.symbolSizes,P=a.win;D=a.SVGElement=function(){return this};
D.prototype={opacity:1,SVG_NS:O,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),init:function(a,g){this.element="span"===g?q(g):e.createElementNS(this.SVG_NS,g);this.renderer=a},animate:function(A,g,b){g=a.animObject(E(g,this.renderer.globalAnimation,!0));0!==g.duration?(b&&(g.complete=b),H(this,A,g)):(this.attr(A,null,b),g.step&&g.step.call(this));return this},colorGradient:function(A,g,b){var k=this.renderer,
d,m,c,h,L,E,F,u,Q,p,t,e=[],I;A.radialGradient?m="radialGradient":A.linearGradient&&(m="linearGradient");if(m){c=A[m];L=k.gradients;F=A.stops;p=b.radialReference;x(c)&&(A[m]=c={x1:c[0],y1:c[1],x2:c[2],y2:c[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===m&&p&&!n(c.gradientUnits)&&(h=c,c=y(c,k.getRadialAttr(p,h),{gradientUnits:"userSpaceOnUse"}));for(t in c)"id"!==t&&e.push(t,c[t]);for(t in F)e.push(F[t]);e=e.join(",");L[e]?p=L[e].attr("id"):(c.id=p=a.uniqueKey(),L[e]=E=k.createElement(m).attr(c).add(k.defs),
E.radAttr=h,E.stops=[],z(F,function(A){0===A[1].indexOf("rgba")?(d=a.color(A[1]),u=d.get("rgb"),Q=d.get("a")):(u=A[1],Q=1);A=k.createElement("stop").attr({offset:A[0],"stop-color":u,"stop-opacity":Q}).add(E);E.stops.push(A)}));I="url("+k.url+"#"+p+")";b.setAttribute(g,I);b.gradient=e;A.toString=function(){return I}}},applyTextOutline:function(A){var g=this.element,b,k,d,m,c;-1!==A.indexOf("contrast")&&(A=A.replace(/contrast/g,this.renderer.getContrast(g.style.fill)));A=A.split(" ");k=A[A.length-1];
if((d=A[0])&&"none"!==d&&a.svg){this.fakeTS=!0;A=[].slice.call(g.getElementsByTagName("tspan"));this.ySetter=this.xSetter;d=d.replace(/(^[\d\.]+)(.*?)$/g,function(a,A,g){return 2*A+g});for(c=A.length;c--;)b=A[c],"highcharts-text-outline"===b.getAttribute("class")&&t(A,g.removeChild(b));m=g.firstChild;z(A,function(a,A){0===A&&(a.setAttribute("x",g.getAttribute("x")),A=g.getAttribute("y"),a.setAttribute("y",A||0),null===A&&g.setAttribute("y",0));a=a.cloneNode(1);v(a,{"class":"highcharts-text-outline",
fill:k,stroke:k,"stroke-width":d,"stroke-linejoin":"round"});g.insertBefore(a,m)})}},attr:function(a,g,b,k){var A,d=this.element,m,c=this,h;"string"===typeof a&&void 0!==g&&(A=a,a={},a[A]=g);if("string"===typeof a)c=(this[a+"Getter"]||this._defaultGetter).call(this,a,d);else{for(A in a)g=a[A],h=!1,k||L(this,A),this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(A)&&(m||(this.symbolAttr(a),m=!0),h=!0),!this.rotation||"x"!==A&&"y"!==A||(this.doTransform=!0),h||(h=this[A+
"Setter"]||this._defaultSetter,h.call(this,g,A,d),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(A)&&this.updateShadows(A,g,h));this.doTransform&&(this.updateTransform(),this.doTransform=!1)}b&&b();return c},updateShadows:function(a,g,b){for(var A=this.shadows,k=A.length;k--;)b.call(A[k],"height"===a?Math.max(g-(A[k].cutHeight||0),0):"d"===a?this.d:g,a,A[k])},addClass:function(a,g){var A=this.attr("class")||"";-1===A.indexOf(a)&&(g||(a=(A+(A?" ":"")+a).replace("  "," ")),
this.attr("class",a));return this},hasClass:function(a){return-1!==v(this.element,"class").indexOf(a)},removeClass:function(a){v(this.element,"class",(v(this.element,"class")||"").replace(a,""));return this},symbolAttr:function(a){var A=this;z("x y r start end width height innerR anchorX anchorY".split(" "),function(g){A[g]=E(a[g],A[g])});A.attr({d:A.renderer.symbols[A.symbolName](A.x,A.y,A.width,A.height,A)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":
"none")},crisp:function(a,g){var A,b={},k;g=g||a.strokeWidth||0;k=Math.round(g)%2/2;a.x=Math.floor(a.x||this.x||0)+k;a.y=Math.floor(a.y||this.y||0)+k;a.width=Math.floor((a.width||this.width||0)-2*k);a.height=Math.floor((a.height||this.height||0)-2*k);n(a.strokeWidth)&&(a.strokeWidth=g);for(A in a)this[A]!==a[A]&&(this[A]=b[A]=a[A]);return b},css:function(a){var A=this.styles,g={},k=this.element,d,m="",c=!A,h=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);if(A)for(d in a)a[d]!==
A[d]&&(g[d]=a[d],c=!0);if(c){A&&(a=b(A,g));A=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===k.nodeName.toLowerCase()&&I(a.width);this.styles=a;A&&!R&&this.renderer.forExport&&delete a.width;if(F&&!R)w(this.element,a);else{A=function(a,A){return"-"+A.toLowerCase()};for(d in a)-1===p(d,h)&&(m+=d.replace(/([A-Z])/g,A)+":"+a[d]+";");m&&v(k,"style",m)}this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this},strokeWidth:function(){return this["stroke-width"]||
0},on:function(a,g){var A=this,b=A.element;B&&"click"===a?(b.ontouchstart=function(a){A.touchEventFired=Date.now();a.preventDefault();g.call(b,a)},b.onclick=function(a){(-1===P.navigator.userAgent.indexOf("Android")||1100<Date.now()-(A.touchEventFired||0))&&g.call(b,a)}):b["on"+a]=g;return this},setRadialReference:function(a){var A=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;A&&A.radAttr&&A.animate(this.renderer.getRadialAttr(a,A.radAttr));return this},translate:function(a,
g){return this.attr({translateX:a,translateY:g})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,g=this.translateY||0,b=this.scaleX,k=this.scaleY,d=this.inverted,m=this.rotation,c=this.element;d&&(a+=this.width,g+=this.height);a=["translate("+a+","+g+")"];d?a.push("rotate(90) scale(-1,1)"):m&&a.push("rotate("+m+" "+(c.getAttribute("x")||0)+" "+(c.getAttribute("y")||0)+")");(n(b)||n(k))&&a.push("scale("+E(b,1)+" "+E(k,1)+")");
a.length&&c.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,g,b){var A,k,d,m,c={};k=this.renderer;d=k.alignedObjects;var h,y;if(a){if(this.alignOptions=a,this.alignByTranslate=g,!b||u(b))this.alignTo=A=b||"renderer",t(d,this),d.push(this),b=null}else a=this.alignOptions,g=this.alignByTranslate,A=this.alignTo;b=E(b,k[A],k);A=a.align;k=a.verticalAlign;d=(b.x||0)+(a.x||0);m=(b.y||0)+(a.y||0);"right"===A?h=1:"center"===
A&&(h=2);h&&(d+=(b.width-(a.width||0))/h);c[g?"translateX":"x"]=Math.round(d);"bottom"===k?y=1:"middle"===k&&(y=2);y&&(m+=(b.height-(a.height||0))/y);c[g?"translateY":"y"]=Math.round(m);this[this.placed?"animate":"attr"](c);this.placed=!0;this.alignAttr=c;return this},getBBox:function(a,g){var A,k=this.renderer,d,m=this.element,c=this.styles,h,y=this.textStr,L,F=k.cache,u=k.cacheKeys,p;g=E(g,this.rotation);d=g*f;h=c&&c.fontSize;void 0!==y&&(p=y.toString(),-1===p.indexOf("\x3c")&&(p=p.replace(/[0-9]/g,
"0")),p+=["",g||0,h,c&&c.width,c&&c.textOverflow].join());p&&!a&&(A=F[p]);if(!A){if(m.namespaceURI===this.SVG_NS||k.forExport){try{(L=this.fakeTS&&function(a){z(m.querySelectorAll(".highcharts-text-outline"),function(A){A.style.display=a})})&&L("none"),A=m.getBBox?b({},m.getBBox()):{width:m.offsetWidth,height:m.offsetHeight},L&&L("")}catch(U){}if(!A||0>A.width)A={width:0,height:0}}else A=this.htmlGetBBox();k.isSVG&&(a=A.width,k=A.height,c&&"11px"===c.fontSize&&17===Math.round(k)&&(A.height=k=14),
g&&(A.width=Math.abs(k*Math.sin(d))+Math.abs(a*Math.cos(d)),A.height=Math.abs(k*Math.cos(d))+Math.abs(a*Math.sin(d))));if(p&&0<A.height){for(;250<u.length;)delete F[u.shift()];F[p]||u.push(p);F[p]=A}}return A},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var A=this;A.animate({opacity:0},{duration:a||150,complete:function(){A.attr({y:-9999})}})},add:function(a){var A=this.renderer,g=this.element,
b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&A.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:A.box).appendChild(g);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var A=a.parentNode;A&&A.removeChild(a)},destroy:function(){var a=this,g=a.element||{},b=a.renderer.isSVG&&"SPAN"===g.nodeName&&a.parentGroup,k,d;g.onclick=g.onmouseout=g.onmouseover=g.onmousemove=g.point=null;L(a);a.clipPath&&(z(a.element.ownerSVGElement.querySelectorAll("[clip-path]"),
function(g){-1<g.getAttribute("clip-path").indexOf(a.clipPath.element.id)&&g.removeAttribute("clip-path")}),a.clipPath=a.clipPath.destroy());if(a.stops){for(d=0;d<a.stops.length;d++)a.stops[d]=a.stops[d].destroy();a.stops=null}a.safeRemoveChild(g);for(a.destroyShadows();b&&b.div&&0===b.div.childNodes.length;)g=b.parentGroup,a.safeRemoveChild(b.div),delete b.div,b=g;a.alignTo&&t(a.renderer.alignedObjects,a);for(k in a)delete a[k];return null},shadow:function(a,g,b){var A=[],k,d,m=this.element,c,h,
y,L;if(!a)this.destroyShadows();else if(!this.shadows){h=E(a.width,3);y=(a.opacity||.15)/h;L=this.parentInverted?"(-1,-1)":"("+E(a.offsetX,1)+", "+E(a.offsetY,1)+")";for(k=1;k<=h;k++)d=m.cloneNode(0),c=2*h+1-2*k,v(d,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":y*k,"stroke-width":c,transform:"translate"+L,fill:"none"}),b&&(v(d,"height",Math.max(v(d,"height")-c,0)),d.cutHeight=c),g?g.element.appendChild(d):m.parentNode.insertBefore(d,m),A.push(d);this.shadows=A}return this},destroyShadows:function(){z(this.shadows||
[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=E(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,g,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");b.setAttribute(g,a);this[g]=a},dashstyleSetter:function(a){var g,A=this["stroke-width"];
"inherit"===A&&(A=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(g=a.length;g--;)a[g]=I(a[g])*A;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},
opacitySetter:function(a,g,b){this[g]=a;b.setAttribute(g,a)},titleSetter:function(a){var g=this.element.getElementsByTagName("title")[0];g||(g=e.createElementNS(this.SVG_NS,"title"),this.element.appendChild(g));g.firstChild&&g.removeChild(g.firstChild);g.appendChild(e.createTextNode(String(E(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,g,b){"string"===typeof a?b.setAttribute(g,
a):a&&this.colorGradient(a,g,b)},visibilitySetter:function(a,g,b){"inherit"===a?b.removeAttribute(g):b.setAttribute(g,a)},zIndexSetter:function(a,g){var A=this.renderer,b=this.parentGroup,k=(b||A).element||A.box,d,m=this.element,c;d=this.added;var h;n(a)&&(m.zIndex=a,a=+a,this[g]===a&&(d=!1),this[g]=a);if(d){(a=this.zIndex)&&b&&(b.handleZ=!0);g=k.childNodes;for(h=0;h<g.length&&!c;h++)b=g[h],d=b.zIndex,b!==m&&(I(d)>a||!n(a)&&n(d)||0>a&&!n(d)&&k!==A.box)&&(k.insertBefore(m,b),c=!0);c||k.appendChild(m)}return c},
_defaultSetter:function(a,g,b){b.setAttribute(g,a)}};D.prototype.yGetter=D.prototype.xGetter;D.prototype.translateXSetter=D.prototype.translateYSetter=D.prototype.rotationSetter=D.prototype.verticalAlignSetter=D.prototype.scaleXSetter=D.prototype.scaleYSetter=function(a,g){this[g]=a;this.doTransform=!0};D.prototype["stroke-widthSetter"]=D.prototype.strokeSetter=function(a,g,b){this[g]=a;this.stroke&&this["stroke-width"]?(D.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",
this["stroke-width"]),this.hasStroke=!0):"stroke-width"===g&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),this.hasStroke=!1)};C=a.SVGRenderer=function(){this.init.apply(this,arguments)};C.prototype={Element:D,SVG_NS:O,init:function(a,g,b,d,c,h){var A;d=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(d));A=d.element;a.appendChild(A);-1===a.innerHTML.indexOf("xmlns")&&v(A,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=A;this.boxWrapper=d;this.alignedObjects=
[];this.url=(k||m)&&e.getElementsByTagName("base").length?P.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(e.createTextNode("Created with Highstock 5.0.10"));this.defs=this.createElement("defs").add();this.allowHTML=h;this.forExport=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(g,b,!1);var y;k&&a.getBoundingClientRect&&(g=function(){w(a,{left:0,top:0});
y=a.getBoundingClientRect();w(a,{left:Math.ceil(y.left)-y.left+"px",top:Math.ceil(y.top)-y.top+"px"})},g(),this.unSubPixelFix=G(P,"resize",g))},getStyle:function(a){return this.style=b({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();c(this.gradients||
{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var g=new this.Element;g.init(this,a);return g},draw:J,getRadialAttr:function(a,g){return{cx:a[0]-a[2]/2+g.cx*a[2],cy:a[1]-a[2]/2+g.cy*a[2],r:g.r*a[2]}},getSpanWidth:function(a,g){var b=a.getBBox(!0).width;!R&&this.forExport&&(b=this.measureSpanWidth(g.firstChild.data,a.styles));return b},applyEllipsis:function(a,g,b,d){var k=this.getSpanWidth(a,g),
A=k>d,k=b,m,c=0,h=b.length,y=function(a){g.removeChild(g.firstChild);a&&g.appendChild(e.createTextNode(a))};if(A){for(;c<=h;)m=Math.ceil((c+h)/2),k=b.substring(0,m)+"\u2026",y(k),k=this.getSpanWidth(a,g),c===h?c=h+1:k>d?h=m-1:c=m;0===h&&y("")}return A},buildText:function(a){var g=a.element,b=this,k=b.forExport,d=E(a.textStr,"").toString(),m=-1!==d.indexOf("\x3c"),A=g.childNodes,c,y,L,F,p=v(g,"x"),u=a.styles,x=a.textWidth,t=u&&u.lineHeight,B=u&&u.textOutline,f=u&&"ellipsis"===u.textOverflow,J=u&&"nowrap"===
u.whiteSpace,q=u&&u.fontSize,n,l,r=A.length,u=x&&!a.added&&this.box,M=function(a){var d;d=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:q||b.style.fontSize||12;return t?I(t):b.fontMetrics(d,a.getAttribute("style")?a:g).h};n=[d,f,J,t,B,q,x].join();if(n!==a.textCache){for(a.textCache=n;r--;)g.removeChild(A[r]);m||B||f||x||-1!==d.indexOf(" ")?(c=/<.*class="([^"]+)".*>/,y=/<.*style="([^"]+)".*>/,L=/<.*href="(http[^"]+)".*>/,u&&u.appendChild(g),d=m?d.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,
'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[d],d=h(d,function(a){return""!==a}),z(d,function(d,m){var A,h=0;d=d.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");A=d.split("|||");z(A,function(d){if(""!==d||1===A.length){var E={},u=e.createElementNS(b.SVG_NS,"tspan"),t,I;c.test(d)&&(t=d.match(c)[1],v(u,"class",t));y.test(d)&&(I=d.match(y)[1].replace(/(;| |^)color([ :])/,
"$1fill$2"),v(u,"style",I));L.test(d)&&!k&&(v(u,"onclick",'location.href\x3d"'+d.match(L)[1]+'"'),w(u,{cursor:"pointer"}));d=(d.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==d){u.appendChild(e.createTextNode(d));h?E.dx=0:m&&null!==p&&(E.x=p);v(u,E);g.appendChild(u);!h&&l&&(!R&&k&&w(u,{display:"block"}),v(u,"dy",M(u)));if(x){E=d.replace(/([^\^])-/g,"$1- ").split(" ");t=1<A.length||m||1<E.length&&!J;var z=[],B,q=M(u),n=a.rotation;for(f&&(F=b.applyEllipsis(a,
u,d,x));!f&&t&&(E.length||z.length);)a.rotation=0,B=b.getSpanWidth(a,u),d=B>x,void 0===F&&(F=d),d&&1!==E.length?(u.removeChild(u.firstChild),z.unshift(E.pop())):(E=z,z=[],E.length&&!J&&(u=e.createElementNS(O,"tspan"),v(u,{dy:q,x:p}),I&&v(u,"style",I),g.appendChild(u)),B>x&&(x=B)),E.length&&u.appendChild(e.createTextNode(E.join(" ").replace(/- /g,"-")));a.rotation=n}h++}}});l=l||g.childNodes.length}),F&&a.attr("title",a.textStr),u&&u.removeChild(g),B&&a.applyTextOutline&&a.applyTextOutline(B)):g.appendChild(e.createTextNode(d.replace(/&lt;/g,
"\x3c").replace(/&gt;/g,"\x3e")))}},getContrast:function(a){a=r(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,g,d,k,m,c,h,L,E){var A=this.label(a,g,d,E,null,null,null,null,"button"),u=0;A.attr(y({padding:8,r:2},m));var p,x,t,e;m=y({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},m);p=m.style;delete m.style;c=y(m,{fill:"#e6e6e6"},c);x=c.style;delete c.style;h=y(m,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},
h);t=h.style;delete h.style;L=y(m,{style:{color:"#cccccc"}},L);e=L.style;delete L.style;G(A.element,F?"mouseover":"mouseenter",function(){3!==u&&A.setState(1)});G(A.element,F?"mouseout":"mouseleave",function(){3!==u&&A.setState(u)});A.setState=function(a){1!==a&&(A.state=u=a);A.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);A.attr([m,c,h,L][a||0]).css([p,x,t,e][a||0])};A.attr(m).css(b({cursor:"default"},
p));return A.on("click",function(a){3!==u&&k.call(A,a)})},crispLine:function(a,g){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-g%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+g%2/2);return a},path:function(a){var g={fill:"none"};x(a)?g.d=a:d(a)&&b(g,a);return this.createElement("path").attr(g)},circle:function(a,g,b){a=d(a)?a:{x:a,y:g,r:b};g=this.createElement("circle");g.xSetter=g.ySetter=function(a,g,d){d.setAttribute("c"+g,a)};return g.attr(a)},arc:function(a,g,b,k,m,c){d(a)?(k=a,g=k.y,b=k.r,a=k.x):
k={innerR:k,start:m,end:c};a=this.symbol("arc",a,g,b,b,k);a.r=b;return a},rect:function(a,g,b,k,m,c){m=d(a)?a.r:m;var h=this.createElement("rect");a=d(a)?a:void 0===a?{}:{x:a,y:g,width:Math.max(b,0),height:Math.max(k,0)};void 0!==c&&(a.strokeWidth=c,a=h.crisp(a));a.fill="none";m&&(a.r=m);h.rSetter=function(a,g,b){v(b,{rx:a,ry:a})};return h.attr(a)},setSize:function(a,g,b){var d=this.alignedObjects,k=d.length;this.width=a;this.height=g;for(this.boxWrapper.animate({width:a,height:g},{step:function(){this.attr({viewBox:"0 0 "+
this.attr("width")+" "+this.attr("height")})},duration:E(b,!0)?void 0:0});k--;)d[k].align()},g:function(a){var g=this.createElement("g");return a?g.attr({"class":"highcharts-"+a}):g},image:function(a,g,d,k,m){var c={preserveAspectRatio:"none"};1<arguments.length&&b(c,{x:g,y:d,width:k,height:m});c=this.createElement("image").attr(c);c.element.setAttributeNS?c.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):c.element.setAttribute("hc-svg-href",a);return c},symbol:function(a,g,d,k,m,
c){var h=this,A,y=this.symbols[a],L=n(g)&&y&&this.symbols[a](Math.round(g),Math.round(d),k,m,c),u=/^url\((.*?)\)$/,F,p;y?(A=this.path(L),A.attr("fill","none"),b(A,{symbolName:a,x:g,y:d,width:k,height:m}),c&&b(A,c)):u.test(a)&&(F=a.match(u)[1],A=this.image(F),A.imgwidth=E(M[F]&&M[F].width,c&&c.width),A.imgheight=E(M[F]&&M[F].height,c&&c.height),p=function(){A.attr({width:A.width,height:A.height})},z(["width","height"],function(a){A[a+"Setter"]=function(a,g){var d={},b=this["img"+g],k="width"===g?"translateX":
"translateY";this[g]=a;n(b)&&(this.element&&this.element.setAttribute(g,b),this.alignByTranslate||(d[k]=((this[g]||0)-b)/2,this.attr(d)))}}),n(g)&&A.attr({x:g,y:d}),A.isImg=!0,n(A.imgwidth)&&n(A.imgheight)?p():(A.attr({width:0,height:0}),q("img",{onload:function(){var a=l[h.chartIndex];0===this.width&&(w(this,{position:"absolute",top:"-999em"}),e.body.appendChild(this));M[F]={width:this.width,height:this.height};A.imgwidth=this.width;A.imgheight=this.height;A.element&&p();this.parentNode&&this.parentNode.removeChild(this);
h.imgCount--;if(!h.imgCount&&a&&a.onload)a.onload()},src:F}),this.imgCount++));return A},symbols:{circle:function(a,g,b,d){return this.arc(a+b/2,g+d/2,b/2,d/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,g,b,d){return["M",a,g,"L",a+b,g,a+b,g+d,a,g+d,"Z"]},triangle:function(a,g,b,d){return["M",a+b/2,g,"L",a+b,g+d,a,g+d,"Z"]},"triangle-down":function(a,g,b,d){return["M",a,g,"L",a+b,g,a+b/2,g+d,"Z"]},diamond:function(a,g,b,d){return["M",a+b/2,g,"L",a+b,g+d/2,a+b/2,g+d,a,g+d/2,"Z"]},arc:function(a,
g,b,d,k){var m=k.start,c=k.r||b,h=k.r||d||b,y=k.end-.001;b=k.innerR;d=k.open;var A=Math.cos(m),L=Math.sin(m),E=Math.cos(y),y=Math.sin(y);k=k.end-m<Math.PI?0:1;c=["M",a+c*A,g+h*L,"A",c,h,0,k,1,a+c*E,g+h*y];n(b)&&c.push(d?"M":"L",a+b*E,g+b*y,"A",b,b,0,k,0,a+b*A,g+b*L);c.push(d?"":"Z");return c},callout:function(a,g,b,d,k){var m=Math.min(k&&k.r||0,b,d),c=m+6,h=k&&k.anchorX;k=k&&k.anchorY;var y;y=["M",a+m,g,"L",a+b-m,g,"C",a+b,g,a+b,g,a+b,g+m,"L",a+b,g+d-m,"C",a+b,g+d,a+b,g+d,a+b-m,g+d,"L",a+m,g+d,"C",
a,g+d,a,g+d,a,g+d-m,"L",a,g+m,"C",a,g,a,g,a+m,g];h&&h>b?k>g+c&&k<g+d-c?y.splice(13,3,"L",a+b,k-6,a+b+6,k,a+b,k+6,a+b,g+d-m):y.splice(13,3,"L",a+b,d/2,h,k,a+b,d/2,a+b,g+d-m):h&&0>h?k>g+c&&k<g+d-c?y.splice(33,3,"L",a,k+6,a-6,k,a,k-6,a,g+m):y.splice(33,3,"L",a,d/2,h,k,a,d/2,a,g+m):k&&k>d&&h>a+c&&h<a+b-c?y.splice(23,3,"L",h+6,g+d,h,g+d+6,h-6,g+d,a+m,g+d):k&&0>k&&h>a+c&&h<a+b-c&&y.splice(3,3,"L",h-6,g,h,g-6,h+6,g,b-m,g);return y}},clipRect:function(g,b,d,k){var m=a.uniqueKey(),c=this.createElement("clipPath").attr({id:m}).add(this.defs);
g=this.rect(g,b,d,k,0).add(c);g.id=m;g.clipPath=c;g.count=0;return g},text:function(a,g,b,d){var k=!R&&this.forExport,m={};if(d&&(this.allowHTML||!this.forExport))return this.html(a,g,b);m.x=Math.round(g||0);b&&(m.y=Math.round(b));if(a||0===a)m.text=a;a=this.createElement("text").attr(m);k&&a.css({position:"absolute"});d||(a.xSetter=function(a,g,b){var d=b.getElementsByTagName("tspan"),k,m=b.getAttribute(g),c;for(c=0;c<d.length;c++)k=d[c],k.getAttribute(g)===m&&k.setAttribute(g,a);b.setAttribute(g,
a)});return a},fontMetrics:function(a,g){a=a||g&&g.style&&g.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?I(a):/em/.test(a)?parseFloat(a)*(g?this.fontMetrics(null,g.parentNode).f:16):12;g=24>a?a+3:Math.round(1.2*a);return{h:g,b:Math.round(.8*g),f:a}},rotCorr:function(a,g,b){var d=a;g&&b&&(d=Math.max(d*Math.cos(g*f),4));return{x:-a/3*Math.sin(g*f),y:d}},label:function(d,k,m,c,h,L,E,u,F){var A=this,p=A.g("button"!==F&&"label"),x=p.text=A.text("",0,0,E).attr({zIndex:1}),t,e,I=0,B=3,
f=0,J,R,O,q,l,w={},r,M,Q=/^url\((.*?)\)$/.test(c),v=Q,P,S,N,T;F&&p.addClass("highcharts-"+F);v=Q;P=function(){return(r||0)%2/2};S=function(){var a=x.element.style,g={};e=(void 0===J||void 0===R||l)&&n(x.textStr)&&x.getBBox();p.width=(J||e.width||0)+2*B+f;p.height=(R||e.height||0)+2*B;M=B+A.fontMetrics(a&&a.fontSize,x).b;v&&(t||(p.box=t=A.symbols[c]||Q?A.symbol(c):A.rect(),t.addClass(("button"===F?"":"highcharts-label-box")+(F?" highcharts-"+F+"-box":"")),t.add(p),a=P(),g.x=a,g.y=(u?-M:0)+a),g.width=
Math.round(p.width),g.height=Math.round(p.height),t.attr(b(g,w)),w={})};N=function(){var a=f+B,g;g=u?0:M;n(J)&&e&&("center"===l||"right"===l)&&(a+={center:.5,right:1}[l]*(J-e.width));if(a!==x.x||g!==x.y)x.attr("x",a),void 0!==g&&x.attr("y",g);x.x=a;x.y=g};T=function(a,g){t?t.attr(a,g):w[a]=g};p.onAdd=function(){x.add(p);p.attr({text:d||0===d?d:"",x:k,y:m});t&&n(h)&&p.attr({anchorX:h,anchorY:L})};p.widthSetter=function(g){J=a.isNumber(g)?g:null};p.heightSetter=function(a){R=a};p["text-alignSetter"]=
function(a){l=a};p.paddingSetter=function(a){n(a)&&a!==B&&(B=p.padding=a,N())};p.paddingLeftSetter=function(a){n(a)&&a!==f&&(f=a,N())};p.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==I&&(I=a,e&&p.attr({x:O}))};p.textSetter=function(a){void 0!==a&&x.textSetter(a);S();N()};p["stroke-widthSetter"]=function(a,g){a&&(v=!0);r=this["stroke-width"]=a;T(g,a)};p.strokeSetter=p.fillSetter=p.rSetter=function(a,g){"fill"===g&&a&&(v=!0);T(g,a)};p.anchorXSetter=function(a,g){h=a;T(g,Math.round(a)-
P()-O)};p.anchorYSetter=function(a,g){L=a;T(g,a-q)};p.xSetter=function(a){p.x=a;I&&(a-=I*((J||e.width)+2*B));O=Math.round(a);p.attr("translateX",O)};p.ySetter=function(a){q=p.y=Math.round(a);p.attr("translateY",q)};var C=p.css;return b(p,{css:function(a){if(a){var g={};a=y(a);z(p.textProps,function(b){void 0!==a[b]&&(g[b]=a[b],delete a[b])});x.css(g)}return C.call(p,a)},getBBox:function(){return{width:e.width+2*B,height:e.height+2*B,x:e.x-B,y:e.y-B}},shadow:function(a){a&&(S(),t&&t.shadow(a));return p},
destroy:function(){g(p.element,"mouseenter");g(p.element,"mouseleave");x&&(x=x.destroy());t&&(t=t.destroy());D.prototype.destroy.call(p);p=A=S=N=T=null}})}};a.Renderer=C})(K);(function(a){var D=a.attr,C=a.createElement,G=a.css,H=a.defined,v=a.each,l=a.extend,r=a.isFirefox,w=a.isMS,q=a.isWebKit,n=a.pInt,f=a.SVGRenderer,c=a.win,e=a.wrap;l(a.SVGElement.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&"SPAN"===b.tagName&&a.width)delete a.width,this.textWidth=b,this.updateTransform();a&&"ellipsis"===
a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=l(this.styles,a);G(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position="absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,h=this.translateY||0,e=this.x||0,p=this.y||0,x=this.textAlign||"left",k={left:0,center:.5,right:1}[x],F=this.styles;
G(b,{marginLeft:c,marginTop:h});this.shadows&&v(this.shadows,function(a){G(a,{marginLeft:c+1,marginTop:h+1})});this.inverted&&v(b.childNodes,function(d){a.invertChild(d,b)});if("SPAN"===b.tagName){var d=this.rotation,u=n(this.textWidth),m=F&&F.whiteSpace,y=[d,x,b.innerHTML,this.textWidth,this.textAlign].join();y!==this.cTT&&(F=a.fontMetrics(b.style.fontSize).b,H(d)&&this.setSpanRotation(d,k,F),G(b,{width:"",whiteSpace:m||"nowrap"}),b.offsetWidth>u&&/[ \-]/.test(b.textContent||b.innerText)&&G(b,{width:u+
"px",display:"block",whiteSpace:m||"normal"}),this.getSpanCorrection(b.offsetWidth,F,k,d,x));G(b,{left:e+(this.xCorr||0)+"px",top:p+(this.yCorr||0)+"px"});q&&(F=b.offsetHeight);this.cTT=y}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,t){var h={},e=w?"-ms-transform":q?"-webkit-transform":r?"MozTransform":c.opera?"-o-transform":"";h[e]=h.transform="rotate("+a+"deg)";h[e+(r?"Origin":"-origin")]=h.transformOrigin=100*b+"% "+t+"px";G(this.element,h)},getSpanCorrection:function(a,b,c){this.xCorr=
-a*c;this.yCorr=-b}});l(f.prototype,{html:function(a,b,c){var h=this.createElement("span"),t=h.element,p=h.renderer,x=p.isSVG,k=function(a,b){v(["opacity","visibility"],function(d){e(a,d+"Setter",function(a,d,k,c){a.call(this,d,k,c);b[k]=d})})};h.textSetter=function(a){a!==t.innerHTML&&delete this.bBox;t.innerHTML=this.textStr=a;h.htmlUpdateTransform()};x&&k(h,h.element.style);h.xSetter=h.ySetter=h.alignSetter=h.rotationSetter=function(a,b){"align"===b&&(b="textAlign");h[b]=a;h.htmlUpdateTransform()};
h.attr({text:a,x:Math.round(b),y:Math.round(c)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});t.style.whiteSpace="nowrap";h.css=h.htmlCss;x&&(h.add=function(a){var b,c=p.box.parentNode,m=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)m.push(a),a=a.parentGroup;v(m.reverse(),function(a){var d,y=D(a.element,"class");y&&(y={className:y});b=a.div=a.div||C("div",y,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,
opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},b||c);d=b.style;l(a,{on:function(){h.on.apply({element:m[0].div},arguments);return a},translateXSetter:function(b,g){d.left=b+"px";a[g]=b;a.doTransform=!0},translateYSetter:function(b,g){d.top=b+"px";a[g]=b;a.doTransform=!0}});k(a,d)})}}else b=c;b.appendChild(t);h.added=!0;h.alignOnAdd&&h.htmlUpdateTransform();return h});return h}})})(K);(function(a){var D,C,G=a.createElement,H=a.css,v=a.defined,l=a.deg2rad,r=a.discardElement,w=a.doc,
q=a.each,n=a.erase,f=a.extend;D=a.extendClass;var c=a.isArray,e=a.isNumber,z=a.isObject,b=a.merge;C=a.noop;var t=a.pick,h=a.pInt,B=a.SVGElement,p=a.SVGRenderer,x=a.win;a.svg||(C={docMode8:w&&8===w.documentMode,init:function(a,b){var d=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],k=["position: ","absolute",";"],m="div"===b;("shape"===b||m)&&k.push("left:0;top:0;width:1px;height:1px;");k.push("visibility: ",m?"hidden":"visible");d.push(' style\x3d"',k.join(""),'"/\x3e');b&&(d=m||"span"===b||"img"===b?
d.join(""):a.prepVML(d),this.element=G(d));this.renderer=a},add:function(a){var b=this.renderer,d=this.element,k=b.box,m=a&&a.inverted,k=a?a.element||a:k;a&&(this.parentGroup=a);m&&b.invertChild(d,k);k.appendChild(d);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:B.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*l),d=
Math.sin(a*l);H(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",b,", M12\x3d",-d,", M21\x3d",d,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,d,c,m){var k=c?Math.cos(c*l):1,h=c?Math.sin(c*l):0,p=t(this.elemHeight,this.element.offsetHeight),u;this.xCorr=0>k&&-a;this.yCorr=0>h&&-p;u=0>k*h;this.xCorr+=h*b*(u?1-d:d);this.yCorr-=k*b*(c?u?d:1-d:1);m&&"left"!==m&&(this.xCorr-=a*d*(0>k?-1:1),c&&(this.yCorr-=p*d*(0>h?-1:1)),H(this.element,
{textAlign:m}))},pathToVML:function(a){for(var b=a.length,d=[];b--;)e(a[b])?d[b]=Math.round(10*a[b])-5:"Z"===a[b]?d[b]="x":(d[b]=a[b],!a.isArc||"wa"!==a[b]&&"at"!==a[b]||(d[b+5]===d[b+7]&&(d[b+7]+=a[b+7]>a[b+5]?1:-1),d[b+6]===d[b+8]&&(d[b+8]+=a[b+8]>a[b+6]?1:-1)));return d.join(" ")||"x"},clip:function(a){var b=this,d;a?(d=a.members,n(d,b),d.push(b),b.destroyClip=function(){n(d,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:b.docMode8?"inherit":"rect(auto)"});return b.css(a)},css:B.prototype.htmlCss,
safeRemoveChild:function(a){a.parentNode&&r(a)},destroy:function(){this.destroyClip&&this.destroyClip();return B.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=x.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var d;a=a.split(/[ ,]/);d=a.length;if(9===d||11===d)a[d-4]=a[d-2]=h(a[d-2])-10*b;return a.join(" ")},shadow:function(a,b,d){var c=[],k,y=this.element,p=this.renderer,E,x=y.style,g,L=y.path,e,F,B,f;L&&"string"!==typeof L.value&&(L=
"x");F=L;if(a){B=t(a.width,3);f=(a.opacity||.15)/B;for(k=1;3>=k;k++)e=2*B+1-2*k,d&&(F=this.cutOffPath(L.value,e+.5)),g=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',e,'" filled\x3d"false" path\x3d"',F,'" coordsize\x3d"10 10" style\x3d"',y.style.cssText,'" /\x3e'],E=G(p.prepVML(g),null,{left:h(x.left)+t(a.offsetX,1),top:h(x.top)+t(a.offsetY,1)}),d&&(E.cutOff=e+1),g=['\x3cstroke color\x3d"',a.color||"#000000",'" opacity\x3d"',f*k,'"/\x3e'],G(p.prepVML(g),null,null,E),b?b.element.appendChild(E):
y.parentNode.insertBefore(E,y),c.push(E);this.shadows=c}return this},updateShadows:C,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,d){(d.getElementsByTagName("stroke")[0]||G(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,d))[b]=a||"solid";this[b]=a},dSetter:function(a,b,d){var c=this.shadows;a=a||[];this.d=a.join&&a.join(" ");d.path=a=this.pathToVML(a);if(c)for(d=
c.length;d--;)c[d].path=c[d].cutOff?this.cutOffPath(a,c[d].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,d){var c=d.nodeName;"SPAN"===c?d.style.color=a:"IMG"!==c&&(d.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,d,b,this)))},"fill-opacitySetter":function(a,b,d){G(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,d)},opacitySetter:C,rotationSetter:function(a,b,d){d=d.style;this[b]=d[b]=a;d.left=-Math.round(Math.sin(a*l)+1)+"px";d.top=Math.round(Math.cos(a*
l))+"px"},strokeSetter:function(a,b,d){this.setAttr("strokecolor",this.renderer.color(a,d,b,this))},"stroke-widthSetter":function(a,b,d){d.stroked=!!a;this[b]=a;e(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,d){"inherit"===a&&(a="visible");this.shadows&&q(this.shadows,function(d){d.style[b]=a});"DIV"===d.nodeName&&(a="hidden"===a?"-999em":0,this.docMode8||(d.style[b]=a?"visible":"hidden"),b="top");d.style[b]=a},xSetter:function(a,
b,d){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):d.style[b]=a},zIndexSetter:function(a,b,d){d.style[b]=a}},C["stroke-opacitySetter"]=C["fill-opacitySetter"],a.VMLElement=C=D(B,C),C.prototype.ySetter=C.prototype.widthSetter=C.prototype.heightSetter=C.prototype.xSetter,C={Element:C,isIE8:-1<x.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,d){var c,m;this.alignedObjects=[];c=this.createElement("div").css({position:"relative"});m=c.element;
a.appendChild(c.element);this.isVML=!0;this.box=m;this.boxWrapper=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,d,!1);if(!w.namespaces.hcv){w.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{w.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(y){w.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},
isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,d,c){var m=this.createElement(),k=z(a);return f(m,{members:[],count:0,left:(k?a.x:a)+1,top:(k?a.y:b)+1,width:(k?a.width:d)-1,height:(k?a.height:c)-1,getCSS:function(a){var b=a.element,d=b.nodeName,g=a.inverted,c=this.top-("shape"===d?b.offsetTop:0),m=this.left,b=m+this.width,k=c+this.height,c={clip:"rect("+Math.round(g?m:c)+"px,"+Math.round(g?k:b)+"px,"+Math.round(g?b:k)+"px,"+Math.round(g?c:m)+"px)"};!g&&a.docMode8&&"DIV"===d&&
f(c,{width:b+"px",height:k+"px"});return c},updateClipping:function(){q(m.members,function(a){a.element&&a.css(m.getCSS(a))})}})},color:function(b,c,d,h){var m=this,k,p=/^rgba/,E,x,g="none";b&&b.linearGradient?x="gradient":b&&b.radialGradient&&(x="pattern");if(x){var L,u,t=b.linearGradient||b.radialGradient,e,B,A,F,f,z="";b=b.stops;var n,l=[],w=function(){E=['\x3cfill colors\x3d"'+l.join(",")+'" opacity\x3d"',A,'" o:opacity2\x3d"',B,'" type\x3d"',x,'" ',z,'focus\x3d"100%" method\x3d"any" /\x3e'];
G(m.prepVML(E),null,null,c)};e=b[0];n=b[b.length-1];0<e[0]&&b.unshift([0,e[1]]);1>n[0]&&b.push([1,n[1]]);q(b,function(g,b){p.test(g[1])?(k=a.color(g[1]),L=k.get("rgb"),u=k.get("a")):(L=g[1],u=1);l.push(100*g[0]+"% "+L);b?(A=u,F=L):(B=u,f=L)});if("fill"===d)if("gradient"===x)d=t.x1||t[0]||0,b=t.y1||t[1]||0,e=t.x2||t[2]||0,t=t.y2||t[3]||0,z='angle\x3d"'+(90-180*Math.atan((t-b)/(e-d))/Math.PI)+'"',w();else{var g=t.r,r=2*g,v=2*g,C=t.cx,D=t.cy,H=c.radialReference,K,g=function(){H&&(K=h.getBBox(),C+=(H[0]-
K.x)/K.width-.5,D+=(H[1]-K.y)/K.height-.5,r*=H[2]/K.width,v*=H[2]/K.height);z='src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+r+","+v+'" origin\x3d"0.5,0.5" position\x3d"'+C+","+D+'" color2\x3d"'+f+'" ';w()};h.added?g():h.onAdd=g;g=F}else g=L}else p.test(b)&&"IMG"!==c.tagName?(k=a.color(b),h[d+"-opacitySetter"](k.get("a"),d,c),g=k.get("rgb")):(g=c.getElementsByTagName(d),g.length&&(g[0].opacity=1,g[0].type="solid"),g=b);return g},prepVML:function(a){var b=this.isIE8;a=a.join("");
b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:p.prototype.html,path:function(a){var b={coordsize:"10 10"};c(a)?b.d=a:z(a)&&f(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,d){var c=this.symbol("circle");
z(a)&&(d=a.r,b=a.y,a=a.x);c.isCircle=!0;c.r=d;return c.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,d,c,m){var h=this.createElement("img").attr({src:a});1<arguments.length&&h.attr({x:b,y:d,width:c,height:m});return h},createElement:function(a){return"rect"===a?this.symbol(a):p.prototype.createElement.call(this,a)},invertChild:function(a,b){var d=this;b=b.style;var c="IMG"===a.tagName&&a.style;
H(a,{flip:"x",left:h(b.width)-(c?h(c.top):1),top:h(b.height)-(c?h(c.left):1),rotation:-90});q(a.childNodes,function(b){d.invertChild(b,a)})},symbols:{arc:function(a,b,d,c,m){var h=m.start,k=m.end,p=m.r||d||c;d=m.innerR;c=Math.cos(h);var x=Math.sin(h),g=Math.cos(k),L=Math.sin(k);if(0===k-h)return["x"];h=["wa",a-p,b-p,a+p,b+p,a+p*c,b+p*x,a+p*g,b+p*L];m.open&&!d&&h.push("e","M",a,b);h.push("at",a-d,b-d,a+d,b+d,a+d*g,b+d*L,a+d*c,b+d*x,"x","e");h.isArc=!0;return h},circle:function(a,b,d,c,m){m&&v(m.r)&&
(d=c=2*m.r);m&&m.isCircle&&(a-=d/2,b-=c/2);return["wa",a,b,a+d,b+c,a+d,b+c/2,a+d,b+c/2,"e"]},rect:function(a,b,d,c,m){return p.prototype.symbols[v(m)&&m.r?"callout":"square"].call(0,a,b,d,c,m)}}},a.VMLRenderer=D=function(){this.init.apply(this,arguments)},D.prototype=b(p.prototype,C),a.Renderer=D);p.prototype.measureSpanWidth=function(a,b){var d=w.createElement("span");a=w.createTextNode(a);d.appendChild(a);H(d,b);this.box.appendChild(d);b=d.offsetWidth;r(d);return b}})(K);(function(a){function D(){var q=
a.defaultOptions.global,n=w.moment;if(q.timezone){if(n)return function(a){return-n.tz(a,q.timezone).utcOffset()};a.error(25)}return q.useUTC&&q.getTimezoneOffset}function C(){var q=a.defaultOptions.global,n,f=q.useUTC,c=f?"getUTC":"get",e=f?"setUTC":"set";a.Date=n=q.Date||w.Date;n.hcTimezoneOffset=f&&q.timezoneOffset;n.hcGetTimezoneOffset=D();n.hcMakeTime=function(a,b,c,h,e,p){var x;f?(x=n.UTC.apply(0,arguments),x+=v(x)):x=(new n(a,b,r(c,1),r(h,0),r(e,0),r(p,0))).getTime();return x};H("Minutes Hours Day Date Month FullYear".split(" "),
function(a){n["hcGet"+a]=c+a});H("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),function(a){n["hcSet"+a]=e+a})}var G=a.color,H=a.each,v=a.getTZOffset,l=a.merge,r=a.pick,w=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.10/gfx/vml-radial-gradient.png"},chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},
position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},
itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,
dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:G("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',
shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(q){a.defaultOptions=l(!0,a.defaultOptions,q);C();return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;C()})(K);
(function(a){var D=a.arrayMax,C=a.arrayMin,G=a.defined,H=a.destroyObjectProperties,v=a.each,l=a.erase,r=a.merge,w=a.pick;a.PlotLineOrBand=function(a,n){this.axis=a;n&&(this.options=n,this.id=n.id)};a.PlotLineOrBand.prototype={render:function(){var a=this,n=a.axis,f=n.horiz,c=a.options,e=c.label,z=a.label,b=c.to,t=c.from,h=c.value,B=G(t)&&G(b),p=G(h),x=a.svgElem,k=!x,F=[],d,u=c.color,m=w(c.zIndex,0),y=c.events,F={"class":"highcharts-plot-"+(B?"band ":"line ")+(c.className||"")},J={},E=n.chart.renderer,
I=B?"bands":"lines",g=n.log2lin;n.isLog&&(t=g(t),b=g(b),h=g(h));p?(F={stroke:u,"stroke-width":c.width},c.dashStyle&&(F.dashstyle=c.dashStyle)):B&&(u&&(F.fill=u),c.borderWidth&&(F.stroke=c.borderColor,F["stroke-width"]=c.borderWidth));J.zIndex=m;I+="-"+m;(u=n.plotLinesAndBandsGroups[I])||(n.plotLinesAndBandsGroups[I]=u=E.g("plot-"+I).attr(J).add());k&&(a.svgElem=x=E.path().attr(F).add(u));if(p)F=n.getPlotLinePath(h,x.strokeWidth());else if(B)F=n.getPlotBandPath(t,b,c);else return;if(k&&F&&F.length){if(x.attr({d:F}),
y)for(d in c=function(g){x.on(g,function(b){y[g].apply(a,[b])})},y)c(d)}else x&&(F?(x.show(),x.animate({d:F})):(x.hide(),z&&(a.label=z=z.destroy())));e&&G(e.text)&&F&&F.length&&0<n.width&&0<n.height&&!F.flat?(e=r({align:f&&B&&"center",x:f?!B&&4:10,verticalAlign:!f&&B&&"middle",y:f?B?16:10:B?6:-4,rotation:f&&!B&&90},e),this.renderLabel(e,F,B,m)):z&&z.hide();return a},renderLabel:function(a,n,f,c){var e=this.label,z=this.axis.chart.renderer;e||(e={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+
(f?"band":"line")+"-label "+(a.className||"")},e.zIndex=c,this.label=e=z.text(a.text,0,0,a.useHTML).attr(e).add(),e.css(a.style));c=[n[1],n[4],f?n[6]:n[1]];n=[n[2],n[5],f?n[7]:n[2]];f=C(c);z=C(n);e.align(a,!1,{x:f,y:z,width:D(c)-f,height:D(n)-z});e.show()},destroy:function(){l(this.axis.plotLinesAndBands,this);delete this.axis;H(this)}};a.AxisPlotLineOrBandExtension={getPlotBandPath:function(a,n){var f=this.getPlotLinePath(n,null,null,!0),c=this.getPlotLinePath(a,null,null,!0),e=this.horiz,z=1;a=
a<this.min&&n<this.min||a>this.max&&n>this.max;c&&f?(a&&(c.flat=c.toString()===f.toString(),z=0),c.push(e&&f[4]===c[4]?f[4]+z:f[4],e||f[5]!==c[5]?f[5]:f[5]+z,e&&f[1]===c[1]?f[1]+z:f[1],e||f[2]!==c[2]?f[2]:f[2]+z)):c=null;return c},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(l,n){var f=(new a.PlotLineOrBand(this,l)).render(),c=this.userOptions;f&&(n&&(c[n]=c[n]||[],c[n].push(l)),
this.plotLinesAndBands.push(f));return f},removePlotBandOrLine:function(a){for(var n=this.plotLinesAndBands,f=this.options,c=this.userOptions,e=n.length;e--;)n[e].id===a&&n[e].destroy();v([f.plotLines||[],c.plotLines||[],f.plotBands||[],c.plotBands||[]],function(c){for(e=c.length;e--;)c[e].id===a&&l(c,c[e])})}}})(K);(function(a){var D=a.correctFloat,C=a.defined,G=a.destroyObjectProperties,H=a.isNumber,v=a.merge,l=a.pick,r=a.deg2rad;a.Tick=function(a,l,n,f){this.axis=a;this.pos=l;this.type=n||"";this.isNew=
!0;n||f||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,q=a.options,n=a.chart,f=a.categories,c=a.names,e=this.pos,z=q.labels,b=a.tickPositions,t=e===b[0],h=e===b[b.length-1],c=f?l(f[e],c[e],e):e,f=this.label,b=b.info,B;a.isDatetimeAxis&&b&&(B=q.dateTimeLabelFormats[b.higherRanks[e]||b.unitName]);this.isFirst=t;this.isLast=h;q=a.labelFormatter.call({axis:a,chart:n,isFirst:t,isLast:h,dateTimeLabelFormat:B,value:a.isLog?D(a.lin2log(c)):c});C(f)?f&&f.attr({text:q}):(this.labelLength=
(this.label=f=C(q)&&z.enabled?n.renderer.text(q,0,0,z.useHTML).css(v(z.style)).add(a.labelGroup):null)&&f.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var q=this.axis,n=a.x,f=q.chart.chartWidth,c=q.chart.spacing,e=l(q.labelLeft,Math.min(q.pos,c[3])),c=l(q.labelRight,Math.max(q.pos+q.len,f-c[1])),z=this.label,b=this.rotation,t={left:0,center:.5,right:1}[q.labelAlign],h=z.getBBox().width,
B=q.getSlotWidth(),p=B,x=1,k,F={};if(b)0>b&&n-t*h<e?k=Math.round(n/Math.cos(b*r)-e):0<b&&n+t*h>c&&(k=Math.round((f-n)/Math.cos(b*r)));else if(f=n+(1-t)*h,n-t*h<e?p=a.x+p*(1-t)-e:f>c&&(p=c-a.x+p*t,x=-1),p=Math.min(B,p),p<B&&"center"===q.labelAlign&&(a.x+=x*(B-p-t*(B-Math.min(h,p)))),h>p||q.autoRotation&&(z.styles||{}).width)k=p;k&&(F.width=k,(q.options.labels.style||{}).textOverflow||(F.textOverflow="ellipsis"),z.css(F))},getPosition:function(a,l,n,f){var c=this.axis,e=c.chart,z=f&&e.oldChartHeight||
e.chartHeight;return{x:a?c.translate(l+n,null,null,f)+c.transB:c.left+c.offset+(c.opposite?(f&&e.oldChartWidth||e.chartWidth)-c.right-c.left:0),y:a?z-c.bottom+c.offset-(c.opposite?c.height:0):z-c.translate(l+n,null,null,f)-c.transB}},getLabelPosition:function(a,l,n,f,c,e,z,b){var t=this.axis,h=t.transA,B=t.reversed,p=t.staggerLines,x=t.tickRotCorr||{x:0,y:0},k=c.y;C(k)||(k=0===t.side?n.rotation?-8:-n.getBBox().height:2===t.side?x.y+8:Math.cos(n.rotation*r)*(x.y-n.getBBox(!1,0).height/2));a=a+c.x+
x.x-(e&&f?e*h*(B?-1:1):0);l=l+k-(e&&!f?e*h*(B?1:-1):0);p&&(n=z/(b||1)%p,t.opposite&&(n=p-n-1),l+=t.labelOffset/p*n);return{x:a,y:Math.round(l)}},getMarkPath:function(a,l,n,f,c,e){return e.crispLine(["M",a,l,"L",a+(c?0:-n),l+(c?n:0)],f)},renderGridLine:function(a,l,n){var f=this.axis,c=f.options,e=this.gridLine,z={},b=this.pos,t=this.type,h=f.tickmarkOffset,B=f.chart.renderer,p=t?t+"Grid":"grid",x=c[p+"LineWidth"],k=c[p+"LineColor"],c=c[p+"LineDashStyle"];e||(z.stroke=k,z["stroke-width"]=x,c&&(z.dashstyle=
c),t||(z.zIndex=1),a&&(z.opacity=0),this.gridLine=e=B.path().attr(z).addClass("highcharts-"+(t?t+"-":"")+"grid-line").add(f.gridGroup));if(!a&&e&&(a=f.getPlotLinePath(b+h,e.strokeWidth()*n,a,!0)))e[this.isNew?"attr":"animate"]({d:a,opacity:l})},renderMark:function(a,q,n){var f=this.axis,c=f.options,e=f.chart.renderer,z=this.type,b=z?z+"Tick":"tick",t=f.tickSize(b),h=this.mark,B=!h,p=a.x;a=a.y;var x=l(c[b+"Width"],!z&&f.isXAxis?1:0),c=c[b+"Color"];t&&(f.opposite&&(t[0]=-t[0]),B&&(this.mark=h=e.path().addClass("highcharts-"+
(z?z+"-":"")+"tick").add(f.axisGroup),h.attr({stroke:c,"stroke-width":x})),h[B?"attr":"animate"]({d:this.getMarkPath(p,a,t[0],h.strokeWidth()*n,f.horiz,e),opacity:q}))},renderLabel:function(a,q,n,f){var c=this.axis,e=c.horiz,z=c.options,b=this.label,t=z.labels,h=t.step,B=c.tickmarkOffset,p=!0,x=a.x;a=a.y;b&&H(x)&&(b.xy=a=this.getLabelPosition(x,a,b,e,t,B,f,h),this.isFirst&&!this.isLast&&!l(z.showFirstLabel,1)||this.isLast&&!this.isFirst&&!l(z.showLastLabel,1)?p=!1:!e||c.isRadial||t.step||t.rotation||
q||0===n||this.handleOverflow(a),h&&f%h&&(p=!1),p&&H(a.y)?(a.opacity=n,b[this.isNew?"attr":"animate"](a)):b.attr("y",-9999),this.isNew=!1)},render:function(a,q,n){var f=this.axis,c=f.horiz,e=this.getPosition(c,this.pos,f.tickmarkOffset,q),z=e.x,b=e.y,f=c&&z===f.pos+f.len||!c&&b===f.pos?-1:1;n=l(n,1);this.isActive=!0;this.renderGridLine(q,n,f);this.renderMark(e,n,f);this.renderLabel(e,q,n,a)},destroy:function(){G(this,this.axis)}}})(K);(function(a){var D=a.addEvent,C=a.animObject,G=a.arrayMax,H=a.arrayMin,
v=a.AxisPlotLineOrBandExtension,l=a.color,r=a.correctFloat,w=a.defaultOptions,q=a.defined,n=a.deg2rad,f=a.destroyObjectProperties,c=a.each,e=a.extend,z=a.fireEvent,b=a.format,t=a.getMagnitude,h=a.grep,B=a.inArray,p=a.isArray,x=a.isNumber,k=a.isString,F=a.merge,d=a.normalizeTickInterval,u=a.pick,m=a.PlotLineOrBand,y=a.removeEvent,J=a.splat,E=a.syncTimeout,I=a.Tick;a.Axis=function(){this.init.apply(this,arguments)};a.Axis.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",
minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",
lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},
defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var g=b.isX;this.chart=a;this.horiz=a.inverted?!g:g;this.isXAxis=g;this.coll=this.coll||(g?"xAxis":"yAxis");this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,c=d.type;this.labelFormatter=d.labels.formatter||
this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.reversed=d.reversed;this.visible=!1!==d.visible;this.zoomEnabled=!1!==d.zoomEnabled;this.hasNames="category"===c||!0===d.categories;this.categories=d.categories||this.hasNames;this.names=this.names||[];this.plotLinesAndBandsGroups={};this.isLog="logarithmic"===c;this.isDatetimeAxis="datetime"===c;this.positiveValuesOnly=this.isLog&&!this.allowNegativeLog;this.isLinked=q(d.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks=
{};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.stacksTouched=0;this.min=this.max=null;this.crosshair=u(d.crosshair,J(a.options.tooltip.crosshairs)[g?0:1],!1);var m;b=this.options.events;-1===B(this,a.axes)&&(g?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];a.inverted&&g&&void 0===this.reversed&&
(this.reversed=!0);this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(m in b)D(this,m,b[m]);this.lin2log=d.linearToLogConverter||this.lin2log;this.isLog&&(this.val2lin=this.log2lin,this.lin2val=this.lin2log)},setOptions:function(a){this.options=F(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],F(w[this.coll],a))},defaultLabelFormatter:function(){var g=
this.axis,d=this.value,c=g.categories,m=this.dateTimeLabelFormat,h=w.lang,k=h.numericSymbols,h=h.numericSymbolMagnitude||1E3,p=k&&k.length,y,E=g.options.labels.format,g=g.isLog?Math.abs(d):g.tickInterval;if(E)y=b(E,this);else if(c)y=d;else if(m)y=a.dateFormat(m,d);else if(p&&1E3<=g)for(;p--&&void 0===y;)c=Math.pow(h,p+1),g>=c&&0===10*d%c&&null!==k[p]&&0!==d&&(y=a.numberFormat(d/c,-1)+k[p]);void 0===y&&(y=1E4<=Math.abs(d)?a.numberFormat(d,-1):a.numberFormat(d,-1,void 0,""));return y},getSeriesExtremes:function(){var a=
this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();c(a.series,function(g){if(g.visible||!b.options.chart.ignoreHiddenSeries){var d=g.options,c=d.threshold,m;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=c&&(c=null);if(a.isXAxis)d=g.xData,d.length&&(g=H(d),x(g)||g instanceof Date||(d=h(d,function(a){return x(a)}),g=H(d)),a.dataMin=Math.min(u(a.dataMin,d[0]),g),a.dataMax=Math.max(u(a.dataMax,d[0]),G(d)));else if(g.getExtremes(),
m=g.dataMax,g=g.dataMin,q(g)&&q(m)&&(a.dataMin=Math.min(u(a.dataMin,g),g),a.dataMax=Math.max(u(a.dataMax,m),m)),q(c)&&(a.threshold=c),!d.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,b,d,c,m,h){var g=this.linkedParent||this,k=1,p=0,y=c?g.oldTransA:g.transA;c=c?g.oldMin:g.min;var L=g.minPixelPadding;m=(g.isOrdinal||g.isBroken||g.isLog&&m)&&g.lin2val;y||(y=g.transA);d&&(k*=-1,p=g.len);g.reversed&&(k*=-1,p-=k*(g.sector||g.len));b?(a=(a*k+p-L)/y+c,m&&(a=g.lin2val(a))):
(m&&(a=g.val2lin(a)),a=k*(a-c)*y+p+k*L+(x(h)?y*h:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,d,c,m){var g=this.chart,h=this.left,k=this.top,y,p,L=d&&g.oldChartHeight||g.chartHeight,E=d&&g.oldChartWidth||g.chartWidth,t;y=this.transB;var e=function(a,b,g){if(a<b||a>g)c?a=Math.min(Math.max(b,a),g):t=!0;return a};m=u(m,this.translate(a,
null,null,d));a=d=Math.round(m+y);y=p=Math.round(L-m-y);x(m)?this.horiz?(y=k,p=L-this.bottom,a=d=e(a,h,h+this.width)):(a=h,d=E-this.right,y=p=e(y,k,k+this.height)):t=!0;return t&&!c?null:g.renderer.crispLine(["M",a,y,"L",d,p],b||1)},getLinearTickPositions:function(a,b,d){var g,c=r(Math.floor(b/a)*a);d=r(Math.ceil(d/a)*a);var m=[];if(this.single)return[b];for(b=c;b<=d;){m.push(b);b=r(b+a);if(b===g)break;g=b}return m},getMinorTickPositions:function(){var a=this,b=a.options,d=a.tickPositions,m=a.minorTickInterval,
h=[],k=a.pointRangePadding||0,y=a.min-k,k=a.max+k,p=k-y;if(p&&p/m<a.len/3)if(a.isLog)c(this.paddedTicks,function(b,g,d){g&&h.push.apply(h,a.getLogTickPositions(m,d[g-1],d[g],!0))});else if(a.isDatetimeAxis&&"auto"===b.minorTickInterval)h=h.concat(a.getTimeTicks(a.normalizeTimeTickInterval(m),y,k,b.startOfWeek));else for(b=y+(d[0]-y)%m;b<=k&&b!==h[0];b+=m)h.push(b);0!==h.length&&a.trimTicks(h);return h},adjustForMinRange:function(){var a=this.options,b=this.min,d=this.max,m,h=this.dataMax-this.dataMin>=
this.minRange,k,y,p,E,x,t;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(q(a.min)||q(a.max)?this.minRange=null:(c(this.series,function(a){E=a.xData;for(y=x=a.xIncrement?1:E.length-1;0<y;y--)if(p=E[y]-E[y-1],void 0===k||p<k)k=p}),this.minRange=Math.min(5*k,this.dataMax-this.dataMin)));d-b<this.minRange&&(t=this.minRange,m=(t-d+b)/2,m=[b-m,u(a.min,b-m)],h&&(m[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=G(m),d=[b+t,u(a.max,b+t)],h&&(d[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),
d=H(d),d-b<t&&(m[0]=d-t,m[1]=u(a.min,d-t),b=G(m)));this.min=b;this.max=d},getClosest:function(){var a;this.categories?a=1:c(this.series,function(b){var g=b.closestPointRange,d=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&q(g)&&d&&(a=q(a)?Math.min(a,g):g)});return a},nameToX:function(a){var b=p(this.categories),g=b?this.categories:this.names,d=a.options.x,c;a.series.requireSorting=!1;q(d)||(d=!1===this.options.uniqueNames?a.series.autoIncrement():B(a.name,g));-1===d?b||
(c=g.length):c=d;void 0!==c&&(this.names[c]=a.name);return c},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=void 0,c(this.series||[],function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)b.processData(),b.generatePoints();c(b.points,function(g,d){var c;g.options&&(c=a.nameToX(g),void 0!==c&&c!==g.x&&(g.x=c,b.xData[d]=c))})}))},setAxisTranslation:function(a){var b=this,g=b.max-b.min,d=b.axisPointRange||0,m,h=0,y=0,p=b.linkedParent,E=!!b.categories,x=
b.transA,t=b.isXAxis;if(t||E||d)m=b.getClosest(),p?(h=p.minPointOffset,y=p.pointRangePadding):c(b.series,function(a){var g=E?1:t?u(a.options.pointRange,m,0):b.axisPointRange||0;a=a.options.pointPlacement;d=Math.max(d,g);b.single||(h=Math.max(h,k(a)?0:g/2),y=Math.max(y,"on"===a?0:g))}),p=b.ordinalSlope&&m?b.ordinalSlope/m:1,b.minPointOffset=h*=p,b.pointRangePadding=y*=p,b.pointRange=Math.min(d,g),t&&(b.closestPointRange=m);a&&(b.oldTransA=x);b.translationSlope=b.transA=x=b.options.staticScale||b.len/
(g+y||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=x*h},minFromRange:function(){return this.max-this.range},setTickInterval:function(b){var g=this,m=g.chart,h=g.options,k=g.isLog,y=g.log2lin,p=g.isDatetimeAxis,E=g.isXAxis,e=g.isLinked,I=h.maxPadding,B=h.minPadding,f=h.tickInterval,F=h.tickPixelInterval,J=g.categories,l=g.threshold,n=g.softThreshold,w,v,C,D;p||J||e||this.getTickAmount();C=u(g.userMin,h.min);D=u(g.userMax,h.max);e?(g.linkedParent=m[g.coll][h.linkedTo],m=g.linkedParent.getExtremes(),
g.min=u(m.min,m.dataMin),g.max=u(m.max,m.dataMax),h.type!==g.linkedParent.options.type&&a.error(11,1)):(!n&&q(l)&&(g.dataMin>=l?(w=l,B=0):g.dataMax<=l&&(v=l,I=0)),g.min=u(C,w,g.dataMin),g.max=u(D,v,g.dataMax));k&&(g.positiveValuesOnly&&!b&&0>=Math.min(g.min,u(g.dataMin,g.min))&&a.error(10,1),g.min=r(y(g.min),15),g.max=r(y(g.max),15));g.range&&q(g.max)&&(g.userMin=g.min=C=Math.max(g.min,g.minFromRange()),g.userMax=D=g.max,g.range=null);z(g,"foundExtremes");g.beforePadding&&g.beforePadding();g.adjustForMinRange();
!(J||g.axisPointRange||g.usePercentage||e)&&q(g.min)&&q(g.max)&&(y=g.max-g.min)&&(!q(C)&&B&&(g.min-=y*B),!q(D)&&I&&(g.max+=y*I));x(h.softMin)&&(g.min=Math.min(g.min,h.softMin));x(h.softMax)&&(g.max=Math.max(g.max,h.softMax));x(h.floor)&&(g.min=Math.max(g.min,h.floor));x(h.ceiling)&&(g.max=Math.min(g.max,h.ceiling));n&&q(g.dataMin)&&(l=l||0,!q(C)&&g.min<l&&g.dataMin>=l?g.min=l:!q(D)&&g.max>l&&g.dataMax<=l&&(g.max=l));g.tickInterval=g.min===g.max||void 0===g.min||void 0===g.max?1:e&&!f&&F===g.linkedParent.options.tickPixelInterval?
f=g.linkedParent.tickInterval:u(f,this.tickAmount?(g.max-g.min)/Math.max(this.tickAmount-1,1):void 0,J?1:(g.max-g.min)*F/Math.max(g.len,F));E&&!b&&c(g.series,function(a){a.processData(g.min!==g.oldMin||g.max!==g.oldMax)});g.setAxisTranslation(!0);g.beforeSetTickPositions&&g.beforeSetTickPositions();g.postProcessTickInterval&&(g.tickInterval=g.postProcessTickInterval(g.tickInterval));g.pointRange&&!f&&(g.tickInterval=Math.max(g.pointRange,g.tickInterval));b=u(h.minTickInterval,g.isDatetimeAxis&&g.closestPointRange);
!f&&g.tickInterval<b&&(g.tickInterval=b);p||k||f||(g.tickInterval=d(g.tickInterval,null,t(g.tickInterval),u(h.allowDecimals,!(.5<g.tickInterval&&5>g.tickInterval&&1E3<g.max&&9999>g.max)),!!this.tickAmount));this.tickAmount||(g.tickInterval=g.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,d=a.tickPositions,c=a.tickPositioner,m=a.startOnTick,h=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval=
"auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.single=this.min===this.max&&q(this.min)&&!this.tickAmount&&!1!==a.allowDecimals;this.tickPositions=b=d&&d.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,
this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,c&&(c=c.apply(this,[this.min,this.max])))&&(this.tickPositions=b=c);this.paddedTicks=b.slice(0);this.trimTicks(b,m,h);this.isLinked||(this.single&&(this.min-=.5,this.max+=.5),d||c||this.adjustTickAmount())},trimTicks:function(a,b,d){var g=a[0],c=a[a.length-1],m=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==g)this.min=g;else for(;this.min-m>a[0];)a.shift();if(d)this.max=c;else for(;this.max+m<a[a.length-1];)a.pop();
0===a.length&&q(g)&&a.push((c+g)/2)}},alignToOthers:function(){var a={},b,d=this.options;!1===this.chart.options.chart.alignTicks||!1===d.alignTicks||this.isLog||c(this.chart[this.coll],function(g){var d=g.options,d=[g.horiz?d.left:d.top,d.width,d.height,d.pane].join();g.series.length&&(a[d]?b=!0:a[d]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,d=a.tickPixelInterval;!q(a.tickInterval)&&this.len<d&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&
(b=Math.ceil(this.len/d)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,d=this.tickAmount,c=this.finalTickAmt,m=b&&b.length;if(m<d){for(;b.length<d;)b.push(r(b[b.length-1]+a));this.transA*=(m-1)/(d-1);this.max=b[b.length-1]}else m>d&&(this.tickInterval*=2,this.setTickPositions());if(q(c)){for(a=d=b.length;a--;)(3===c&&1===a%2||2>=c&&0<a&&a<d-1)&&b.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,b;this.oldMin=
this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;c(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=
b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,d,m,h){var g=this,k=g.chart;d=u(d,!0);c(g.series,function(a){delete a.kdTree});h=e(h,{min:a,max:b});z(g,"setExtremes",h,function(){g.userMin=a;g.userMax=b;g.eventArgs=h;d&&k.redraw(m)})},zoom:function(a,b){var g=this.dataMin,d=this.dataMax,c=this.options,m=Math.min(g,u(c.min,g)),c=Math.max(d,u(c.max,d));if(a!==this.min||b!==this.max)this.allowZoomOutside||(q(g)&&(a<m&&(a=m),a>c&&(a=c)),
q(d)&&(b<m&&(b=m),b>c&&(b=c))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,d=b.offsets||[0,0,0,0],c=this.horiz,m=u(b.width,a.plotWidth-d[3]+d[1]),h=u(b.height,a.plotHeight-d[0]+d[2]),k=u(b.top,a.plotTop+d[0]),b=u(b.left,a.plotLeft+d[3]),d=/%$/;d.test(h)&&(h=Math.round(parseFloat(h)/100*a.plotHeight));d.test(k)&&(k=Math.round(parseFloat(k)/100*a.plotHeight+a.plotTop));this.left=b;this.top=k;
this.width=m;this.height=h;this.bottom=a.chartHeight-h-k;this.right=a.chartWidth-m-b;this.len=Math.max(c?m:h,0);this.pos=c?b:k},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?r(b(this.min)):this.min,max:a?r(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,g=this.lin2log,d=b?g(this.min):this.min,b=b?g(this.max):this.max;null===a?a=d:d>a?a=d:b<a&&(a=b);return this.translate(a,0,
1,0,1)},autoLabelAlign:function(a){a=(u(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,g=b[a+"Length"],d=u(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(d&&g)return"inside"===b[a+"Position"]&&(g=-g),[g,d]},labelMetrics:function(){return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[0]&&this.ticks[0].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,
d=this.tickInterval,m=d,h=this.len/(((this.categories?1:0)+this.max-this.min)/d),k,y=a.rotation,p=this.labelMetrics(),E,x=Number.MAX_VALUE,t,e=function(a){a/=h||1;a=1<a?Math.ceil(a):1;return a*d};b?(t=!a.staggerLines&&!a.step&&(q(y)?[y]:h<u(a.autoRotationLimit,80)&&a.autoRotation))&&c(t,function(a){var b;if(a===y||a&&-90<=a&&90>=a)E=e(Math.abs(p.h/Math.sin(n*a))),b=E+Math.abs(a/360),b<x&&(x=b,k=a,m=E)}):a.step||(m=e(p.h));this.autoRotation=t;this.labelRotation=u(k,y);return m},getSlotWidth:function(){var a=
this.chart,b=this.horiz,d=this.options.labels,c=Math.max(this.tickPositions.length-(this.categories?0:1),1),m=a.margin[3];return b&&2>(d.step||0)&&!d.rotation&&(this.staggerLines||1)*this.len/c||!b&&(m&&m-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,d=this.tickPositions,m=this.ticks,h=this.options.labels,y=this.horiz,p=this.getSlotWidth(),E=Math.max(1,Math.round(p-2*(h.padding||5))),t={},x=this.labelMetrics(),e=h.style&&h.style.textOverflow,u,I=0,B,f;k(h.rotation)||
(t.rotation=h.rotation||0);c(d,function(a){(a=m[a])&&a.labelLength>I&&(I=a.labelLength)});this.maxLabelLength=I;if(this.autoRotation)I>E&&I>x.h?t.rotation=this.labelRotation:this.labelRotation=0;else if(p&&(u={width:E+"px"},!e))for(u.textOverflow="clip",B=d.length;!y&&B--;)if(f=d[B],E=m[f].label)E.styles&&"ellipsis"===E.styles.textOverflow?E.css({textOverflow:"clip"}):m[f].labelLength>p&&E.css({width:p+"px"}),E.getBBox().height>this.len/d.length-(x.h-x.f)&&(E.specCss={textOverflow:"ellipsis"});t.rotation&&
(u={width:(I>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},e||(u.textOverflow="ellipsis"));if(this.labelAlign=h.align||this.autoLabelAlign(this.labelRotation))t.align=this.labelAlign;c(d,function(a){var b=(a=m[a])&&a.label;b&&(b.attr(t),u&&b.css(F(u,b.specCss)),delete b.specCss,a.rotation=t.rotation)});this.tickRotCorr=b.rotCorr(x.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||q(this.min)&&q(this.max)&&!!this.tickPositions},addTitle:function(a){var b=
this.chart.renderer,g=this.horiz,d=this.opposite,c=this.options.title,m;this.axisTitle||((m=c.textAlign)||(m=(g?{low:"left",middle:"center",high:"right"}:{low:d?"right":"left",middle:"center",high:d?"left":"right"})[c.align]),this.axisTitle=b.text(c.text,0,0,c.useHTML).attr({zIndex:7,rotation:c.rotation||0,align:m}).addClass("highcharts-axis-title").css(c.style).add(this.axisGroup),this.axisTitle.isNew=!0);this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():
b[a]=new I(this,a)},getOffset:function(){var a=this,b=a.chart,d=b.renderer,m=a.options,h=a.tickPositions,k=a.ticks,y=a.horiz,p=a.side,E=b.inverted?[1,0,3,2][p]:p,t,x,e=0,I,B=0,f=m.title,z=m.labels,F=0,J=b.axisOffset,b=b.clipOffset,l=[-1,1,1,-1][p],n,r=m.className,w=a.axisParent,v=this.tickSize("tick");t=a.hasData();a.showAxis=x=t||u(m.showEmpty,!0);a.staggerLines=a.horiz&&z.staggerLines;a.axisGroup||(a.gridGroup=d.g("grid").attr({zIndex:m.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+
"-grid "+(r||"")).add(w),a.axisGroup=d.g("axis").attr({zIndex:m.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(r||"")).add(w),a.labelGroup=d.g("axis-labels").attr({zIndex:z.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(r||"")).add(w));if(t||a.isLinked)c(h,function(b,g){a.generateTick(b,g)}),a.renderUnsquish(),!1===z.reserveSpace||0!==p&&2!==p&&{1:"left",3:"right"}[p]!==a.labelAlign&&"center"!==a.labelAlign||c(h,function(a){F=Math.max(k[a].getLabelSize(),F)}),
a.staggerLines&&(F*=a.staggerLines,a.labelOffset=F*(a.opposite?-1:1));else for(n in k)k[n].destroy(),delete k[n];f&&f.text&&!1!==f.enabled&&(a.addTitle(x),x&&(e=a.axisTitle.getBBox()[y?"height":"width"],I=f.offset,B=q(I)?0:u(f.margin,y?5:10)));a.renderLine();a.offset=l*u(m.offset,J[p]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};d=0===p?-a.labelMetrics().h:2===p?a.tickRotCorr.y:0;B=Math.abs(F)+B;F&&(B=B-d+l*(y?u(z.y,a.tickRotCorr.y+8*l):z.x));a.axisTitleMargin=u(I,B);J[p]=Math.max(J[p],a.axisTitleMargin+
e+l*a.offset,B,t&&h.length&&v?v[0]+l*a.offset:0);m=m.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[E]=Math.max(b[E],m)},getLinePath:function(a){var b=this.chart,g=this.opposite,d=this.offset,c=this.horiz,m=this.left+(g?this.width:0)+d,d=b.chartHeight-this.bottom-(g?this.height:0)+d;g&&(a*=-1);return b.renderer.crispLine(["M",c?this.left:m,c?d:this.top,"L",c?b.chartWidth-this.right:m,c?d:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,d=this.top,c=this.len,m=this.options.title,h=a?b:d,k=this.opposite,y=this.offset,p=m.x||0,E=m.y||0,t=this.chart.renderer.fontMetrics(m.style&&m.style.fontSize,this.axisTitle).f,c={low:h+(a?0:c),middle:h+c/2,high:h+(a?c:0)}[m.align],b=(a?d+this.height:b)+(a?1:-1)*(k?-1:1)*this.axisTitleMargin+(2===this.side?t:0);return{x:a?c+p:b+(k?this.width:
0)+y+p,y:a?b+E-(k?this.height:0)+y:c+E}},renderMinorTick:function(a){var b=this.chart.hasRendered&&x(this.oldMin),g=this.minorTicks;g[a]||(g[a]=new I(this,a,"minor"));b&&g[a].isNew&&g[a].render(null,!0);g[a].render(null,!1,1)},renderTick:function(a,b){var g=this.isLinked,d=this.ticks,c=this.chart.hasRendered&&x(this.oldMin);if(!g||a>=this.min&&a<=this.max)d[a]||(d[a]=new I(this,a)),c&&d[a].isNew&&d[a].render(b,!0,.1),d[a].render(b)},render:function(){var a=this,b=a.chart,d=a.options,h=a.isLog,k=a.lin2log,
y=a.isLinked,p=a.tickPositions,t=a.axisTitle,x=a.ticks,e=a.minorTicks,u=a.alternateBands,B=d.stackLabels,f=d.alternateGridColor,z=a.tickmarkOffset,F=a.axisLine,J=a.showAxis,l=C(b.renderer.globalAnimation),n,q;a.labelEdge.length=0;a.overlap=!1;c([x,e,u],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||y)a.minorTickInterval&&!a.categories&&c(a.getMinorTickPositions(),function(b){a.renderMinorTick(b)}),p.length&&(c(p,function(b,d){a.renderTick(b,d)}),z&&(0===a.min||a.single)&&(x[-1]||(x[-1]=
new I(a,-1,null,!0)),x[-1].render(-1))),f&&c(p,function(d,g){q=void 0!==p[g+1]?p[g+1]+z:a.max-z;0===g%2&&d<a.max&&q<=a.max+(b.polar?-z:z)&&(u[d]||(u[d]=new m(a)),n=d+z,u[d].options={from:h?k(n):n,to:h?k(q):q,color:f},u[d].render(),u[d].isActive=!0)}),a._addedPlotLB||(c((d.plotLines||[]).concat(d.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0);c([x,e,u],function(a){var d,g,c=[],m=l.duration;for(d in a)a[d].isActive||(a[d].render(d,!1,0),a[d].isActive=!1,c.push(d));E(function(){for(g=
c.length;g--;)a[c[g]]&&!a[c[g]].isActive&&(a[c[g]].destroy(),delete a[c[g]])},a!==u&&b.hasRendered&&m?m:0)});F&&(F[F.isPlaced?"animate":"attr"]({d:this.getLinePath(F.strokeWidth())}),F.isPlaced=!0,F[J?"show":"hide"](!0));t&&J&&(t[t.isNew?"attr":"animate"](a.getTitlePosition()),t.isNew=!1);B&&B.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&(this.render(),c(this.plotLinesAndBands,function(a){a.render()}));c(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),
destroy:function(a){var b=this,d=b.stacks,g,m=b.plotLinesAndBands,h,k;a||y(b);for(g in d)f(d[g]),d[g]=null;c([b.ticks,b.minorTicks,b.alternateBands],function(a){f(a)});if(m)for(a=m.length;a--;)m[a].destroy();c("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){b[a]&&(b[a]=b[a].destroy())});for(h in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[h]=b.plotLinesAndBandsGroups[h].destroy();for(k in b)b.hasOwnProperty(k)&&-1===B(k,b.keepProps)&&delete b[k]},
drawCrosshair:function(a,b){var d,g=this.crosshair,c=u(g.snap,!0),m,h=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(q(b)||!c)?(c?q(b)&&(m=this.isXAxis?b.plotX:this.len-b.plotY):m=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),q(m)&&(d=this.getPlotLinePath(b&&(this.isXAxis?b.x:u(b.stackY,b.y)),null,null,null,m)||null),q(d)?(b=this.categories&&!this.isRadial,h||(this.cross=h=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":
"thin ")+g.className).attr({zIndex:u(g.zIndex,2)}).add(),h.attr({stroke:g.color||(b?l("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":u(g.width,1)}),g.dashStyle&&h.attr({dashstyle:g.dashStyle})),h.show().attr({d:d}),b&&!g.width&&h.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}};e(a.Axis.prototype,v)})(K);(function(a){var D=a.Axis,C=a.Date,G=a.dateFormat,H=a.defaultOptions,v=a.defined,
l=a.each,r=a.extend,w=a.getMagnitude,q=a.getTZOffset,n=a.normalizeTickInterval,f=a.pick,c=a.timeUnits;D.prototype.getTimeTicks=function(a,z,b,t){var h=[],e={},p=H.global.useUTC,x,k=new C(z-Math.abs(q(z))),F=C.hcMakeTime,d=a.unitRange,u=a.count,m;if(v(z)){k[C.hcSetMilliseconds](d>=c.second?0:u*Math.floor(k.getMilliseconds()/u));if(d>=c.second)k[C.hcSetSeconds](d>=c.minute?0:u*Math.floor(k.getSeconds()/u));if(d>=c.minute)k[C.hcSetMinutes](d>=c.hour?0:u*Math.floor(k[C.hcGetMinutes]()/u));if(d>=c.hour)k[C.hcSetHours](d>=
c.day?0:u*Math.floor(k[C.hcGetHours]()/u));if(d>=c.day)k[C.hcSetDate](d>=c.month?1:u*Math.floor(k[C.hcGetDate]()/u));d>=c.month&&(k[C.hcSetMonth](d>=c.year?0:u*Math.floor(k[C.hcGetMonth]()/u)),x=k[C.hcGetFullYear]());if(d>=c.year)k[C.hcSetFullYear](x-x%u);if(d===c.week)k[C.hcSetDate](k[C.hcGetDate]()-k[C.hcGetDay]()+f(t,1));x=k[C.hcGetFullYear]();t=k[C.hcGetMonth]();var y=k[C.hcGetDate](),J=k[C.hcGetHours]();if(C.hcTimezoneOffset||C.hcGetTimezoneOffset)m=(!p||!!C.hcGetTimezoneOffset)&&(b-z>4*c.month||
q(z)!==q(b)),k=k.getTime(),k=new C(k+q(k));p=k.getTime();for(z=1;p<b;)h.push(p),p=d===c.year?F(x+z*u,0):d===c.month?F(x,t+z*u):!m||d!==c.day&&d!==c.week?m&&d===c.hour?F(x,t,y,J+z*u):p+d*u:F(x,t,y+z*u*(d===c.day?1:7)),z++;h.push(p);d<=c.hour&&1E4>h.length&&l(h,function(a){0===a%18E5&&"000000000"===G("%H%M%S%L",a)&&(e[a]="day")})}h.info=r(a,{higherRanks:e,totalRange:d*u});return h};D.prototype.normalizeTimeTickInterval=function(a,f){var b=f||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",
[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];f=b[b.length-1];var t=c[f[0]],h=f[1],e;for(e=0;e<b.length&&!(f=b[e],t=c[f[0]],h=f[1],b[e+1]&&a<=(t*h[h.length-1]+c[b[e+1][0]])/2);e++);t===c.year&&a<5*t&&(h=[1,2,5]);a=n(a/t,h,"year"===f[0]?Math.max(w(a/t),1):1);return{unitRange:t,count:a,unitName:f[0]}}})(K);(function(a){var D=a.Axis,C=a.getMagnitude,G=a.map,H=a.normalizeTickInterval,v=a.pick;D.prototype.getLogTickPositions=
function(a,r,w,q){var n=this.options,f=this.len,c=this.lin2log,e=this.log2lin,z=[];q||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),z=this.getLinearTickPositions(a,r,w);else if(.08<=a)for(var f=Math.floor(r),b,t,h,B,p,n=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<w+1&&!p;f++)for(t=n.length,b=0;b<t&&!p;b++)h=e(c(f)*n[b]),h>r&&(!q||B<=w)&&void 0!==B&&z.push(B),B>w&&(p=!0),B=h;else r=c(r),w=c(w),a=n[q?"minorTickInterval":"tickInterval"],a=v("auto"===a?null:a,this._minorAutoInterval,
n.tickPixelInterval/(q?5:1)*(w-r)/((q?f/this.tickPositions.length:f)||1)),a=H(a,null,C(a)),z=G(this.getLinearTickPositions(a,r,w),e),q||(this._minorAutoInterval=a/5);q||(this.tickInterval=a);return z};D.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};D.prototype.lin2log=function(a){return Math.pow(10,a)}})(K);(function(a){var D=a.dateFormat,C=a.each,G=a.extend,H=a.format,v=a.isNumber,l=a.map,r=a.merge,w=a.pick,q=a.splat,n=a.syncTimeout,f=a.timeUnits;a.Tooltip=function(){this.init.apply(this,
arguments)};a.Tooltip.prototype={init:function(a,e){this.chart=a;this.options=e;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=e.split&&!a.inverted;this.shared=e.shared||this.split},cleanSplit:function(a){C(this.chart.series,function(c){var e=c&&c.tt;e&&(!e.isActive||a?c.tt=e.destroy():e.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,e=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,e.shape||"callout",null,null,e.useHTML,
null,"tooltip").attr({padding:e.padding,r:e.borderRadius}),this.label.attr({fill:e.backgroundColor,"stroke-width":e.borderWidth}).css(e.style).shadow(e.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();this.init(this.chart,r(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},
move:function(a,e,f,b){var c=this,h=c.now,B=!1!==c.options.animation&&!c.isHidden&&(1<Math.abs(a-h.x)||1<Math.abs(e-h.y)),p=c.followPointer||1<c.len;G(h,{x:B?(2*h.x+a)/3:a,y:B?(h.y+e)/2:e,anchorX:p?void 0:B?(2*h.anchorX+f)/3:f,anchorY:p?void 0:B?(h.anchorY+b)/2:b});c.getLabel().attr(h);B&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){c&&c.move(a,e,f,b)},32))},hide:function(a){var c=this;clearTimeout(this.hideTimer);a=w(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=
n(function(){c.getLabel()[a?"fadeOut":"hide"]();c.isHidden=!0},a))},getAnchor:function(a,e){var c,b=this.chart,t=b.inverted,h=b.plotTop,f=b.plotLeft,p=0,x=0,k,F;a=q(a);c=a[0].tooltipPos;this.followPointer&&e&&(void 0===e.chartX&&(e=b.pointer.normalize(e)),c=[e.chartX-b.plotLeft,e.chartY-h]);c||(C(a,function(a){k=a.series.yAxis;F=a.series.xAxis;p+=a.plotX+(!t&&F?F.left-f:0);x+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!t&&k?k.top-h:0)}),p/=a.length,x/=a.length,c=[t?b.plotWidth-x:p,this.shared&&
!t&&1<a.length&&e?e.chartY-h:t?b.plotHeight-p:x]);return l(c,Math.round)},getPosition:function(a,e,f){var b=this.chart,c=this.distance,h={},B=f.h||0,p,x=["y",b.chartHeight,e,f.plotY+b.plotTop,b.plotTop,b.plotTop+b.plotHeight],k=["x",b.chartWidth,a,f.plotX+b.plotLeft,b.plotLeft,b.plotLeft+b.plotWidth],F=!this.followPointer&&w(f.ttBelow,!b.inverted===!!f.negative),d=function(a,b,d,g,m,k){var p=d<g-c,y=g+c+d<b,E=g-c-d;g+=c;if(F&&y)h[a]=g;else if(!F&&p)h[a]=E;else if(p)h[a]=Math.min(k-d,0>E-B?E:E-B);
else if(y)h[a]=Math.max(m,g+B+d>b?g:g+B);else return!1},u=function(a,b,d,g){var m;g<c||g>b-c?m=!1:h[a]=g<d/2?1:g>b-d/2?b-d-2:g-d/2;return m},m=function(a){var b=x;x=k;k=b;p=a},y=function(){!1!==d.apply(0,x)?!1!==u.apply(0,k)||p||(m(!0),y()):p?h.x=h.y=0:(m(!0),y())};(b.inverted||1<this.len)&&m();y();return h},defaultFormatter:function(a){var c=this.points||q(this),f;f=[a.tooltipFooterHeaderFormatter(c[0])];f=f.concat(a.bodyFormatter(c));f.push(a.tooltipFooterHeaderFormatter(c[0],!0));return f},refresh:function(a,
e){var c,b=this.options,t,h=a,f,p={},x=[];c=b.formatter||this.defaultFormatter;var p=this.shared,k;clearTimeout(this.hideTimer);this.followPointer=q(h)[0].series.tooltipOptions.followPointer;f=this.getAnchor(h,e);e=f[0];t=f[1];!p||h.series&&h.series.noSharedTooltip?p=h.getLabelConfig():(C(h,function(a){a.setState("hover");x.push(a.getLabelConfig())}),p={x:h[0].category,y:h[0].y},p.points=x,h=h[0]);this.len=x.length;p=c.call(p,this);k=h.series;this.distance=w(k.tooltipOptions.distance,16);!1===p?this.hide():
(c=this.getLabel(),this.isHidden&&c.attr({opacity:1}).show(),this.split?this.renderSplit(p,a):(c.attr({text:p&&p.join?p.join(""):p}),c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+w(h.colorIndex,k.colorIndex)),c.attr({stroke:b.borderColor||h.color||k.color||"#666666"}),this.updatePosition({plotX:e,plotY:t,negative:h.negative,ttBelow:h.ttBelow,h:f[2]||0})),this.isHidden=!1)},renderSplit:function(c,e){var f=this,b=[],t=this.chart,h=t.renderer,B=!0,p=this.options,x,k=this.getLabel();
C(c.slice(0,e.length+1),function(a,d){d=e[d-1]||{isHeader:!0,plotX:e[0].plotX};var c=d.series||f,m=c.tt,y=d.series||{},F="highcharts-color-"+w(d.colorIndex,y.colorIndex,"none");m||(c.tt=m=h.label(null,null,null,"callout").addClass("highcharts-tooltip-box "+F).attr({padding:p.padding,r:p.borderRadius,fill:p.backgroundColor,stroke:d.color||y.color||"#333333","stroke-width":p.borderWidth}).add(k));m.isActive=!0;m.attr({text:a});m.css(p.style);a=m.getBBox();y=a.width+m.strokeWidth();d.isHeader?(x=a.height,
y=Math.max(0,Math.min(d.plotX+t.plotLeft-y/2,t.chartWidth-y))):y=d.plotX+t.plotLeft-w(p.distance,16)-y;0>y&&(B=!1);a=(d.series&&d.series.yAxis&&d.series.yAxis.pos)+(d.plotY||0);a-=t.plotTop;b.push({target:d.isHeader?t.plotHeight+x:a,rank:d.isHeader?1:0,size:c.tt.getBBox().height+1,point:d,x:y,tt:m})});this.cleanSplit();a.distribute(b,t.plotHeight+x);C(b,function(a){var b=a.point,c=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:B||b.isHeader?a.x:b.plotX+t.plotLeft+w(p.distance,
16),y:a.pos+t.plotTop,anchorX:b.isHeader?b.plotX+t.plotLeft:b.plotX+c.xAxis.pos,anchorY:b.isHeader?a.pos+t.plotTop-15:b.plotY+c.yAxis.pos})})},updatePosition:function(a){var c=this.chart,f=this.getLabel(),f=(this.options.positioner||this.getPosition).call(this,f.width,f.height,a);this.move(Math.round(f.x),Math.round(f.y||0),a.plotX+c.plotLeft,a.plotY+c.plotTop)},getDateFormat:function(a,e,z,b){var c=D("%m-%d %H:%M:%S.%L",e),h,B,p={millisecond:15,second:12,minute:9,hour:6,day:3},x="millisecond";for(B in f){if(a===
f.week&&+D("%w",e)===z&&"00:00:00.000"===c.substr(6)){B="week";break}if(f[B]>a){B=x;break}if(p[B]&&c.substr(p[B])!=="01-01 00:00:00.000".substr(p[B]))break;"week"!==B&&(x=B)}B&&(h=b[B]);return h},getXDateFormat:function(a,e,f){e=e.dateTimeLabelFormats;var b=f&&f.closestPointRange;return(b?this.getDateFormat(b,a.x,f.options.startOfWeek,e):e.day)||e.year},tooltipFooterHeaderFormatter:function(a,e){var c=e?"footer":"header";e=a.series;var b=e.tooltipOptions,t=b.xDateFormat,h=e.xAxis,f=h&&"datetime"===
h.options.type&&v(a.key),c=b[c+"Format"];f&&!t&&(t=this.getXDateFormat(a,b,h));f&&t&&(c=c.replace("{point.key}","{point.key:"+t+"}"));return H(c,{point:a,series:e})},bodyFormatter:function(a){return l(a,function(a){var c=a.series.tooltipOptions;return(c.pointFormatter||a.point.tooltipFormatter).call(a.point,c.pointFormat)})}}})(K);(function(a){var D=a.addEvent,C=a.attr,G=a.charts,H=a.color,v=a.css,l=a.defined,r=a.doc,w=a.each,q=a.extend,n=a.fireEvent,f=a.offset,c=a.pick,e=a.removeEvent,z=a.splat,
b=a.Tooltip,t=a.win;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,t){this.options=t;this.chart=a;this.runChartClick=t.chart.events&&!!t.chart.events.click;this.pinchDown=[];this.lastValidTouch={};b&&t.tooltip.enabled&&(a.tooltip=new b(a,t.tooltip),this.followTouchMove=c(t.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,h=b.options.chart,x=h.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(x=c(h.pinchType,x));this.zoomX=a=/x/.test(x);
this.zoomY=x=/y/.test(x);this.zoomHor=a&&!b||x&&b;this.zoomVert=x&&!b||a&&b;this.hasZoom=a||x},normalize:function(a,b){var c,h;a=a||t.event;a.target||(a.target=a.srcElement);h=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;b||(this.chartPosition=b=f(this.chart.container));void 0===h.pageX?(c=Math.max(a.x,a.clientX-b.left),b=a.y):(c=h.pageX-b.left,b=h.pageY-b.top);return q(a,{chartX:Math.round(c),chartY:Math.round(b)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};w(this.chart.axes,
function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},getKDPoints:function(a,b,p){var h=[],k,t,d;w(a,function(a){k=a.noSharedTooltip&&b;t=!b&&a.directTouch;a.visible&&!t&&c(a.options.enableMouseTracking,!0)&&(d=a.searchPoint(p,!k&&0>a.options.findNearestPointBy.indexOf("y")))&&d.series&&h.push(d)});h.sort(function(a,d){var c=a.distX-d.distX,m=a.dist-d.dist,h=(d.series.group&&d.series.group.zIndex)-(a.series.group&&a.series.group.zIndex);
return 0!==c&&b?c:0!==m?m:0!==h?h:a.series.index>d.series.index?-1:1});if(b&&h[0]&&!h[0].series.noSharedTooltip)for(a=h.length;a--;)(h[a].x!==h[0].x||h[a].series.noSharedTooltip)&&h.splice(a,1);return h},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getHoverData:function(b,t,p,x,k,e){var d=b,h=t,m;x?k?(m=[],w(p,function(a){var b=a.noSharedTooltip&&k,h=!k&&a.directTouch;a.visible&&!b&&!h&&c(a.options.enableMouseTracking,!0)&&(a=a.searchKDTree({clientX:d.clientX,
plotY:d.plotY},!b&&1===a.kdDimensions))&&a.series&&m.push(a)}),0===m.length&&(m=[d])):m=[d]:h&&!h.stickyTracking?(k||(p=[h]),m=this.getKDPoints(p,k,e),d=a.find(m,function(a){return a.series===h})):(b=a.grep(p,function(a){return a.stickyTracking}),m=this.getKDPoints(b,k,e),h=(d=m[0])&&d.series,k&&(m=this.getKDPoints(p,k,e)));m.sort(function(a,b){return a.series.index-b.series.index});return{hoverPoint:d,hoverSeries:h,hoverPoints:m}},runPointActions:function(b,t){var h=this.chart,x=h.tooltip,k=x?x.shared:
!1,e=t||h.hoverPoint,d=e&&e.series||h.hoverSeries;t=this.getHoverData(e,d,h.series,!!t||!k&&d&&d.directTouch,k,b);var f,m,e=t.hoverPoint;f=(d=t.hoverSeries)&&d.tooltipOptions.followPointer;m=(k=k&&e&&!e.series.noSharedTooltip)?t.hoverPoints:e?[e]:[];if(e&&(e!==h.hoverPoint||x&&x.isHidden)){w(h.hoverPoints||[],function(b){-1===a.inArray(b,m)&&b.setState()});w(m||[],function(a){a.setState("hover")});if(h.hoverSeries!==d)d.onMouseOver();d&&!d.directTouch&&(h.hoverPoint&&h.hoverPoint.firePointEvent("mouseOut"),
e.firePointEvent("mouseOver"));h.hoverPoints=m;h.hoverPoint=e;x&&x.refresh(k?m:e,b)}else f&&x&&!x.isHidden&&(e=x.getAnchor([{}],b),x.updatePosition({plotX:e[0],plotY:e[1]}));this.unDocMouseMove||(this.unDocMouseMove=D(r,"mousemove",function(b){var d=G[a.hoverChartIndex];if(d)d.pointer.onDocumentMouseMove(b)}));w(h.axes,function(a){c(a.crosshair.snap,!0)?w(m,function(d){d.series[a.coll]===a&&a.drawCrosshair(b,d)}):a.drawCrosshair(b)})},reset:function(a,b){var c=this.chart,h=c.hoverSeries,k=c.hoverPoint,
t=c.hoverPoints,d=c.tooltip,e=d&&d.shared?t:k;a&&e&&w(z(e),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)d&&e&&(d.refresh(e),k&&(k.setState(k.state,!0),w(c.axes,function(a){a.crosshair&&a.drawCrosshair(null,k)})));else{if(k)k.onMouseOut();t&&w(t,function(a){a.setState()});if(h)h.onMouseOut();d&&d.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());w(c.axes,function(a){a.hideCrosshair()});this.hoverX=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,
b){var c=this.chart,h;w(c.series,function(k){h=a||k.getPlotBox();k.xAxis&&k.xAxis.zoomEnabled&&k.group&&(k.group.attr(h),k.markerGroup&&(k.markerGroup.attr(h),k.markerGroup.clip(b?c.clipRect:null)),k.dataLabelsGroup&&k.dataLabelsGroup.attr(h))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,h=a.chartX,k=a.chartY,
t=this.zoomHor,d=this.zoomVert,e=b.plotLeft,m=b.plotTop,y=b.plotWidth,f=b.plotHeight,E,I=this.selectionMarker,g=this.mouseDownX,n=this.mouseDownY,z=c.panKey&&a[c.panKey+"Key"];I&&I.touch||(h<e?h=e:h>e+y&&(h=e+y),k<m?k=m:k>m+f&&(k=m+f),this.hasDragged=Math.sqrt(Math.pow(g-h,2)+Math.pow(n-k,2)),10<this.hasDragged&&(E=b.isInsidePlot(g-e,n-m),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&E&&!z&&!I&&(this.selectionMarker=I=b.renderer.rect(e,m,t?1:y,d?1:f,0).attr({fill:c.selectionMarkerFill||H("#335cad").setOpacity(.25).get(),
"class":"highcharts-selection-marker",zIndex:7}).add()),I&&t&&(h-=g,I.attr({width:Math.abs(h),x:(0<h?0:h)+g})),I&&d&&(h=k-n,I.attr({height:Math.abs(h),y:(0<h?0:h)+n})),E&&!I&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=this,c=this.chart,h=this.hasPinched;if(this.selectionMarker){var k={originalEvent:a,xAxis:[],yAxis:[]},t=this.selectionMarker,d=t.attr?t.attr("x"):t.x,e=t.attr?t.attr("y"):t.y,m=t.attr?t.attr("width"):t.width,y=t.attr?t.attr("height"):t.height,f;if(this.hasDragged||h)w(c.axes,
function(c){if(c.zoomEnabled&&l(c.min)&&(h||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var p=c.horiz,g="touchend"===a.type?c.minPixelPadding:0,t=c.toValue((p?d:e)+g),p=c.toValue((p?d+m:e+y)-g);k[c.coll].push({axis:c,min:Math.min(t,p),max:Math.max(t,p)});f=!0}}),f&&n(c,"selection",k,function(a){c.zoom(q(a,h?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();h&&this.scaleGroups()}c&&(v(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=
this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){G[a.hoverChartIndex]&&G[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=
G[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;l(a.hoverChartIndex)&&G[a.hoverChartIndex]&&G[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,b){for(var c;a;){if(c=
C(a,"class")){if(-1!==c.indexOf(b))return!0;if(-1!==c.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,h=b.plotLeft,k=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,
"highcharts-tracker")?(n(c.series,"click",q(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(q(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-h,a.chartY-k)&&n(b,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container;c.onmousedown=function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};c.onclick=function(a){b.onContainerClick(a)};D(c,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&D(r,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(c.ontouchstart=
function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&D(r,"touchend",b.onDocumentTouchEnd))},destroy:function(){var b;this.unDocMouseMove&&this.unDocMouseMove();e(this.chart.container,"mouseleave",this.onContainerMouseLeave);a.chartCount||(e(r,"mouseup",this.onDocumentMouseUp),e(r,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(b in this)this[b]=null}}})(K);(function(a){var D=a.charts,C=a.each,G=a.extend,H=a.map,
v=a.noop,l=a.pick;G(a.Pointer.prototype,{pinchTranslate:function(a,l,q,n,f,c){this.zoomHor&&this.pinchTranslateDirection(!0,a,l,q,n,f,c);this.zoomVert&&this.pinchTranslateDirection(!1,a,l,q,n,f,c)},pinchTranslateDirection:function(a,l,q,n,f,c,e,z){var b=this.chart,t=a?"x":"y",h=a?"X":"Y",B="chart"+h,p=a?"width":"height",x=b["plot"+(a?"Left":"Top")],k,F,d=z||1,u=b.inverted,m=b.bounds[a?"h":"v"],y=1===l.length,J=l[0][B],E=q[0][B],I=!y&&l[1][B],g=!y&&q[1][B],r;q=function(){!y&&20<Math.abs(J-I)&&(d=z||
Math.abs(E-g)/Math.abs(J-I));F=(x-E)/d+J;k=b["plot"+(a?"Width":"Height")]/d};q();l=F;l<m.min?(l=m.min,r=!0):l+k>m.max&&(l=m.max-k,r=!0);r?(E-=.8*(E-e[t][0]),y||(g-=.8*(g-e[t][1])),q()):e[t]=[E,g];u||(c[t]=F-x,c[p]=k);c=u?1/d:d;f[p]=k;f[t]=l;n[u?a?"scaleY":"scaleX":"scale"+h]=d;n["translate"+h]=c*x+(E-c*J)},pinch:function(a){var r=this,q=r.chart,n=r.pinchDown,f=a.touches,c=f.length,e=r.lastValidTouch,z=r.hasZoom,b=r.selectionMarker,t={},h=1===c&&(r.inClass(a.target,"highcharts-tracker")&&q.runTrackerClick||
r.runChartClick),B={};1<c&&(r.initiated=!0);z&&r.initiated&&!h&&a.preventDefault();H(f,function(a){return r.normalize(a)});"touchstart"===a.type?(C(f,function(a,b){n[b]={chartX:a.chartX,chartY:a.chartY}}),e.x=[n[0].chartX,n[1]&&n[1].chartX],e.y=[n[0].chartY,n[1]&&n[1].chartY],C(q.axes,function(a){if(a.zoomEnabled){var b=q.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,h=a.toPixels(l(a.options.min,a.dataMin)),d=a.toPixels(l(a.options.max,a.dataMax)),t=Math.max(h,d);b.min=Math.min(a.pos,Math.min(h,d)-
c);b.max=Math.max(a.pos+a.len,t+c)}}),r.res=!0):r.followTouchMove&&1===c?this.runPointActions(r.normalize(a)):n.length&&(b||(r.selectionMarker=b=G({destroy:v,touch:!0},q.plotBox)),r.pinchTranslate(n,f,t,b,B,e),r.hasPinched=z,r.scaleGroups(t,B),r.res&&(r.res=!1,this.reset(!1,0)))},touch:function(r,v){var q=this.chart,n,f;if(q.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=q.index;1===r.touches.length?(r=this.normalize(r),(f=q.isInsidePlot(r.chartX-q.plotLeft,
r.chartY-q.plotTop))&&!q.openMenu?(v&&this.runPointActions(r),"touchmove"===r.type&&(v=this.pinchDown,n=v[0]?4<=Math.sqrt(Math.pow(v[0].chartX-r.chartX,2)+Math.pow(v[0].chartY-r.chartY,2)):!1),l(n,!0)&&this.pinch(r)):v&&this.reset()):2===r.touches.length&&this.pinch(r)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(l){D[a.hoverChartIndex]&&D[a.hoverChartIndex].pointer.drop(l)}})})(K);(function(a){var D=
a.addEvent,C=a.charts,G=a.css,H=a.doc,v=a.extend,l=a.noop,r=a.Pointer,w=a.removeEvent,q=a.win,n=a.wrap;if(q.PointerEvent||q.MSPointerEvent){var f={},c=!!q.PointerEvent,e=function(){var a,c=[];c.item=function(a){return this[a]};for(a in f)f.hasOwnProperty(a)&&c.push({pageX:f[a].pageX,pageY:f[a].pageY,target:f[a].target});return c},z=function(b,c,h,f){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!C[a.hoverChartIndex]||(f(b),f=C[a.hoverChartIndex].pointer,f[c]({type:h,target:b.currentTarget,
preventDefault:l,touches:e()}))};v(r.prototype,{onContainerPointerDown:function(a){z(a,"onContainerTouchStart","touchstart",function(a){f[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){z(a,"onContainerTouchMove","touchmove",function(a){f[a.pointerId]={pageX:a.pageX,pageY:a.pageY};f[a.pointerId].target||(f[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){z(a,"onDocumentTouchEnd","touchend",function(a){delete f[a.pointerId]})},
batchMSEvents:function(a){a(this.chart.container,c?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,c?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(H,c?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});n(r.prototype,"init",function(a,c,h){a.call(this,c,h);this.hasZoom&&G(c.container,{"-ms-touch-action":"none","touch-action":"none"})});n(r.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(D)});
n(r.prototype,"destroy",function(a){this.batchMSEvents(w);a.call(this)})}})(K);(function(a){var D,C=a.addEvent,G=a.css,H=a.discardElement,v=a.defined,l=a.each,r=a.isFirefox,w=a.marginNames,q=a.merge,n=a.pick,f=a.setAnimation,c=a.stableSort,e=a.win,z=a.wrap;D=a.Legend=function(a,c){this.init(a,c)};D.prototype={init:function(a,c){this.chart=a;this.setOptions(c);c.enabled&&(this.render(),C(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var b=n(a.padding,
8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=q(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=b;this.initialItemY=b-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=n(a.symbolWidth,16);this.pages=[]},update:function(a,c){var b=this.chart;this.setOptions(q(!0,this.options,a));this.destroy();b.isDirtyLegend=b.isDirtyBox=!0;n(c,!0)&&b.redraw()},colorizeItem:function(a,c){a.legendGroup[c?"removeClass":"addClass"]("highcharts-legend-item-hidden");
var b=this.options,e=a.legendItem,p=a.legendLine,t=a.legendSymbol,k=this.itemHiddenStyle.color,b=c?b.itemStyle.color:k,f=c?a.color||k:k,d=a.options&&a.options.marker,u={fill:f},m;e&&e.css({fill:b,color:b});p&&p.attr({stroke:f});if(t){if(d&&t.isMarker&&(u=a.pointAttribs(),!c))for(m in u)u[m]=k;t.attr(u)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,e=a._legendItemPos,p=e[0],e=e[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?p:this.legendWidth-p-2*c-4,e);f&&(f.x=
p,f.y=e)},destroyItem:function(a){var b=a.checkbox;l(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&H(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}l(this.getAllItems(),function(b){l(["legendItem","legendGroup"],a,b)});l("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(a){var b=this.group&&this.group.alignAttr,c,e=this.clipHeight||this.legendHeight,
p=this.titleHeight;b&&(c=b.translateY,l(this.allItems,function(h){var k=h.checkbox,t;k&&(t=c+p+k.y+(a||0)+3,G(k,{left:b.translateX+h.checkboxOffset+k.x-20+"px",top:t+"px",display:t>c-6&&t<c+e-6?"":"none"}))}))},renderTitle:function(){var a=this.padding,c=this.options.title,h=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(c.style).add(this.group)),a=this.title.getBBox(),h=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:h}));
this.titleHeight=h},setText:function(b){var c=this.options;b.legendItem.attr({text:c.labelFormat?a.format(c.labelFormat,b):c.labelFormatter.call(b)})},renderItem:function(a){var b=this.chart,c=b.renderer,e=this.options,p="horizontal"===e.layout,f=this.symbolWidth,k=e.symbolPadding,l=this.itemStyle,d=this.itemHiddenStyle,u=this.padding,m=p?n(e.itemDistance,20):0,y=!e.rtl,J=e.width,E=e.itemMarginBottom||0,I=this.itemMarginTop,g=a.legendItem,z=!a.series,r=!z&&a.series.drawLegendSymbol?a.series:a,v=r.options,
v=this.createCheckboxForItem&&v&&v.showCheckbox,w=e.useHTML,P=a.options.className;g||(a.legendGroup=c.g("legend-item").addClass("highcharts-"+r.type+"-series highcharts-color-"+a.colorIndex+(P?" "+P:"")+(z?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=g=c.text("",y?f+k:-k,this.baseline||0,w).css(q(a.visible?l:d)).attr({align:y?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(l=l.fontSize,this.fontMetrics=c.fontMetrics(l,g),this.baseline=this.fontMetrics.f+
3+I,g.attr("y",this.baseline)),this.symbolHeight=e.symbolHeight||this.fontMetrics.f,r.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,g,w),v&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);this.setText(a);c=g.getBBox();f=a.checkboxOffset=e.itemWidth||a.legendItemWidth||f+k+c.width+m+(v?20:0);this.itemHeight=k=Math.round(a.legendItemHeight||c.height||this.symbolHeight);p&&this.itemX-u+f>(J||b.spacingBox.width-2*u-e.x)&&(this.itemX=u,this.itemY+=I+this.lastLineHeight+
E,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,f);this.lastItemY=I+this.itemY+E;this.lastLineHeight=Math.max(k,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];p?this.itemX+=f:(this.itemY+=I+k+E,this.lastLineHeight=k);this.offsetWidth=J||Math.max((p?this.itemX-u-m:f)+u,this.offsetWidth)},getAllItems:function(){var a=[];l(this.chart.series,function(b){var c=b&&b.options;b&&n(c.showInLegend,v(c.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===c.legendType?
b.data:b)))});return a},adjustMargins:function(a,c){var b=this.chart,e=this.options,p=e.align.charAt(0)+e.verticalAlign.charAt(0)+e.layout.charAt(0);e.floating||l([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(h,k){h.test(p)&&!v(a[k])&&(b[w[k]]=Math.max(b[w[k]],b.legend[(k+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][k]*e[k%2?"x":"y"]+n(e.margin,12)+c[k]))})},render:function(){var a=this,e=a.chart,h=e.renderer,f=a.group,p,x,k,n,d=a.box,u=a.options,m=a.padding;a.itemX=m;a.itemY=
a.initialItemY;a.offsetWidth=0;a.lastItemY=0;f||(a.group=f=h.g("legend").attr({zIndex:7}).add(),a.contentGroup=h.g().attr({zIndex:1}).add(f),a.scrollGroup=h.g().add(a.contentGroup));a.renderTitle();p=a.getAllItems();c(p,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});u.reversed&&p.reverse();a.allItems=p;a.display=x=!!p.length;a.lastLineHeight=0;l(p,function(b){a.renderItem(b)});k=(u.width||a.offsetWidth)+m;n=a.lastItemY+a.lastLineHeight+a.titleHeight;
n=a.handleOverflow(n);n+=m;d||(a.box=d=h.rect().addClass("highcharts-legend-box").attr({r:u.borderRadius}).add(f),d.isNew=!0);d.attr({stroke:u.borderColor,"stroke-width":u.borderWidth||0,fill:u.backgroundColor||"none"}).shadow(u.shadow);0<k&&0<n&&(d[d.isNew?"attr":"animate"](d.crisp({x:0,y:0,width:k,height:n},d.strokeWidth())),d.isNew=!1);d[x?"show":"hide"]();a.legendWidth=k;a.legendHeight=n;l(p,function(b){a.positionItem(b)});x&&f.align(q(u,{width:k,height:n}),!0,"spacingBox");e.isResizing||this.positionCheckboxes()},
handleOverflow:function(a){var b=this,c=this.chart,e=c.renderer,p=this.options,f=p.y,k=this.padding,c=c.spacingBox.height+("top"===p.verticalAlign?-f:f)-k,f=p.maxHeight,z,d=this.clipRect,u=p.navigation,m=n(u.animation,!0),y=u.arrowSize||12,J=this.nav,E=this.pages,I,g=this.allItems,q=function(a){a?d.attr({height:a}):d&&(b.clipRect=d.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+k+"px,9999px,"+(k+a)+"px,0)":"auto")};"horizontal"!==p.layout||"middle"===
p.verticalAlign||p.floating||(c/=2);f&&(c=Math.min(c,f));E.length=0;a>c&&!1!==u.enabled?(this.clipHeight=z=Math.max(c-20-this.titleHeight-k,0),this.currentPage=n(this.currentPage,1),this.fullHeight=a,l(g,function(a,b){var c=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);var d=E.length;if(!d||c-E[d-1]>z&&(I||c)!==E[d-1])E.push(I||c),d++;b===g.length-1&&c+a-E[d-1]>z&&E.push(c);c!==I&&(I=c)}),d||(d=b.clipRect=e.clipRect(0,k,9999,0),b.contentGroup.clip(d)),q(z),J||(this.nav=J=e.g().attr({zIndex:1}).add(this.group),
this.up=e.symbol("triangle",0,0,y,y).on("click",function(){b.scroll(-1,m)}).add(J),this.pager=e.text("",15,10).addClass("highcharts-legend-navigation").css(u.style).add(J),this.down=e.symbol("triangle-down",0,0,y,y).on("click",function(){b.scroll(1,m)}).add(J)),b.scroll(0),a=c):J&&(q(),this.nav=J.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,c){var b=this.pages,e=b.length;a=this.currentPage+a;var p=this.clipHeight,t=this.options.navigation,k=this.pager,
n=this.padding;a>e&&(a=e);0<a&&(void 0!==c&&f(c,this.chart),this.nav.attr({translateX:n,translateY:p+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),k.attr({text:a+"/"+e}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===e?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?t.inactiveColor:t.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===
e?t.inactiveColor:t.activeColor}).css({cursor:a===e?"default":"pointer"}),c=-b[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=a,this.positionCheckboxes(c))}};a.LegendSymbolMixin={drawRectangle:function(a,c){var b=a.symbolHeight,e=a.options.squareSymbol;c.legendSymbol=this.chart.renderer.rect(e?(a.symbolWidth-b)/2:0,a.baseline-b+1,e?b:a.symbolWidth,b,n(a.options.symbolRadius,b/2)).addClass("highcharts-point").attr({zIndex:3}).add(c.legendGroup)},drawLineMarker:function(a){var b=
this.options,c=b.marker,e=a.symbolWidth,p=a.symbolHeight,f=p/2,k=this.chart.renderer,l=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var d;d={"stroke-width":b.lineWidth||0};b.dashStyle&&(d.dashstyle=b.dashStyle);this.legendLine=k.path(["M",0,a,"L",e,a]).addClass("highcharts-graph").attr(d).add(l);c&&!1!==c.enabled&&(b=Math.min(n(c.radius,f),f),0===this.symbol.indexOf("url")&&(c=q(c,{width:p,height:p}),b=0),this.legendSymbol=c=k.symbol(this.symbol,e/2-b,a-b,2*b,2*b,c).addClass("highcharts-point").add(l),
c.isMarker=!0)}};(/Trident\/7\.0/.test(e.navigator.userAgent)||r)&&z(D.prototype,"positionItem",function(a,c){var b=this,e=function(){c._legendItemPos&&a.call(b,c)};e();setTimeout(e)})})(K);(function(a){var D=a.addEvent,C=a.animate,G=a.animObject,H=a.attr,v=a.doc,l=a.Axis,r=a.createElement,w=a.defaultOptions,q=a.discardElement,n=a.charts,f=a.css,c=a.defined,e=a.each,z=a.extend,b=a.find,t=a.fireEvent,h=a.getStyle,B=a.grep,p=a.isNumber,x=a.isObject,k=a.isString,F=a.Legend,d=a.marginNames,u=a.merge,
m=a.Pointer,y=a.pick,J=a.pInt,E=a.removeEvent,I=a.seriesTypes,g=a.splat,L=a.svg,R=a.syncTimeout,O=a.win,M=a.Renderer,P=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new P(a,b,c)};P.prototype={callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(k(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var d,g=b.series;b.series=null;d=u(w,b);d.series=b.series=g;this.userOptions=b;b=d.chart;g=b.events;this.margin=[];
this.spacing=[];this.bounds={h:{},v:{}};this.callback=c;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var m;this.index=n.length;n.push(this);a.chartCount++;if(g)for(m in g)D(this,m,g[m]);this.xAxis=[];this.yAxis=[];this.pointCount=this.colorCounter=this.symbolCounter=0;this.firstRender()},initSeries:function(b){var c=this.options.chart;(c=I[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=
this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].name||"Series "+(b[a].index+1))},isInsidePlot:function(a,b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var c=this.axes,d=this.series,g=this.pointer,m=this.legend,k=this.isDirtyLegend,h,y,p=this.hasCartesianSeries,f=this.isDirtyBox,E,x=this.renderer,u=x.isHidden(),I=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);u&&this.cloneRenderTo();this.layOutTitles();
for(b=d.length;b--;)if(E=d[b],E.options.stacking&&(h=!0,E.isDirty)){y=!0;break}if(y)for(b=d.length;b--;)E=d[b],E.options.stacking&&(E.isDirty=!0);e(d,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),k=!0);a.isDirtyData&&t(a,"updatedData")});k&&m.options.enabled&&(m.render(),this.isDirtyLegend=!1);h&&this.getStacks();p&&e(c,function(a){a.updateNames();a.setScale()});this.getMargins();p&&(e(c,function(a){a.isDirty&&(f=!0)}),e(c,function(a){var b=a.min+","+a.max;
a.extKey!==b&&(a.extKey=b,I.push(function(){t(a,"afterSetExtremes",z(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(f||h)&&a.redraw()}));f&&this.drawChartBox();t(this,"predraw");e(d,function(a){(f||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});g&&g.reset(!0);x.draw();t(this,"redraw");t(this,"render");u&&this.cloneRenderTo(!0);e(I,function(a){a.call()})},get:function(a){function c(b){return b.id===a||b.options&&b.options.id===a}var d,g=this.series,m;d=b(this.axes,c)||b(this.series,c);
for(m=0;!d&&m<g.length;m++)d=b(g[m].points||[],c);return d},getAxes:function(){var a=this,b=this.options,c=b.xAxis=g(b.xAxis||{}),b=b.yAxis=g(b.yAxis||{});e(c,function(a,b){a.index=b;a.isX=!0});e(b,function(a,b){a.index=b});c=c.concat(b);e(c,function(b){new l(a,b)})},getSelectedPoints:function(){var a=[];e(this.series,function(b){a=a.concat(B(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return B(this.series,function(a){return a.selected})},setTitle:function(a,
b,c){var d=this,g=d.options,m;m=g.title=u({style:{color:"#333333",fontSize:g.isStock?"16px":"18px"}},g.title,a);g=g.subtitle=u({style:{color:"#666666"}},g.subtitle,b);e([["title",a,m],["subtitle",b,g]],function(a,b){var c=a[0],g=d[c],m=a[1];a=a[2];g&&m&&(d[c]=g=g.destroy());a&&a.text&&!g&&(d[c]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),d[c].update=function(a){d.setTitle(!b&&a,b&&a)},d[c].css(a.style))});d.layOutTitles(c)},layOutTitles:function(a){var b=
0,c,d=this.renderer,g=this.spacingBox;e(["title","subtitle"],function(a){var c=this[a],m=this.options[a],k;c&&(k=m.style.fontSize,k=d.fontMetrics(k,c).b,c.css({width:(m.width||g.width+m.widthAdjust)+"px"}).align(z({y:b+k+("title"===a?-3:2)},m),!1,"spacingBox"),m.floating||m.verticalAlign||(b=Math.ceil(b+c.getBBox(m.useHTML).height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=c,this.hasRendered&&y(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=
this.options.chart,d=b.width,b=b.height,g=this.renderToClone||this.renderTo;c(d)||(this.containerWidth=h(g,"width"));c(b)||(this.containerHeight=h(g,"height"));this.chartWidth=Math.max(0,d||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||this.containerHeight||400)},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;if(a){if(b){for(;b.childNodes.length;)this.renderTo.appendChild(b.firstChild);q(b);delete this.renderToClone}}else c&&c.parentNode===
this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),f(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),v.body.appendChild(b),c&&b.appendChild(c)},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,d=c.chart,g,m;b=this.renderTo;var h=a.uniqueKey(),y;b||(this.renderTo=b=d.renderTo);k(b)&&(this.renderTo=b=v.getElementById(b));
b||a.error(13,!0);g=J(H(b,"data-highcharts-chart"));p(g)&&n[g]&&n[g].hasRendered&&n[g].destroy();H(b,"data-highcharts-chart",this.index);b.innerHTML="";d.skipClone||b.offsetWidth||this.cloneRenderTo();this.getChartSize();g=this.chartWidth;m=this.chartHeight;y=z({position:"relative",overflow:"hidden",width:g+"px",height:m+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style);this.container=b=r("div",{id:h},y,this.renderToClone||b);this._cursor=b.style.cursor;
this.renderer=new (a[d.renderer]||M)(b,g,m,null,d.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,d=this.margin,g=this.titleOffset;this.resetMargins();g&&!c(d[0])&&(this.plotTop=Math.max(this.plotTop,g+this.options.title.margin+b[0]));this.legend.display&&this.legend.adjustMargins(d,b);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||
0)+this.extraMargin.value);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],g=a.margin;a.hasCartesianSeries&&e(a.axes,function(a){a.visible&&a.getOffset()});e(d,function(d,m){c(g[m])||(a[d]+=b[m])});a.setChartSize()},reflow:function(a){var b=this,d=b.options.chart,g=b.renderTo,m=c(d.width),k=d.width||h(g,"width"),d=d.height||h(g,"height"),g=a?a.target:O;if(!m&&!b.isPrinting&&k&&d&&(g===O||g===v)){if(k!==
b.containerWidth||d!==b.containerHeight)clearTimeout(b.reflowTimeout),b.reflowTimeout=R(function(){b.container&&b.setSize(void 0,void 0,!1)},a?100:0);b.containerWidth=k;b.containerHeight=d}},initReflow:function(){var a=this,b;b=D(O,"resize",function(b){a.reflow(b)});D(a,"destroy",b)},setSize:function(b,c,d){var g=this,m=g.renderer;g.isResizing+=1;a.setAnimation(d,g);g.oldChartHeight=g.chartHeight;g.oldChartWidth=g.chartWidth;void 0!==b&&(g.options.chart.width=b);void 0!==c&&(g.options.chart.height=
c);g.getChartSize();b=m.globalAnimation;(b?C:f)(g.container,{width:g.chartWidth+"px",height:g.chartHeight+"px"},b);g.setChartSize(!0);m.setSize(g.chartWidth,g.chartHeight,d);e(g.axes,function(a){a.isDirty=!0;a.setScale()});g.isDirtyLegend=!0;g.isDirtyBox=!0;g.layOutTitles();g.getMargins();g.redraw(d);g.oldChartHeight=null;t(g,"resize");R(function(){g&&t(g,"endResize",null,function(){--g.isResizing})},G(b).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,g=
this.chartHeight,m=this.options.chart,k=this.spacing,h=this.clipOffset,y,p,f,E;this.plotLeft=y=Math.round(this.plotLeft);this.plotTop=p=Math.round(this.plotTop);this.plotWidth=f=Math.max(0,Math.round(d-y-this.marginRight));this.plotHeight=E=Math.max(0,Math.round(g-p-this.marginBottom));this.plotSizeX=b?E:f;this.plotSizeY=b?f:E;this.plotBorderWidth=m.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:k[3],y:k[0],width:d-k[3]-k[1],height:g-k[0]-k[2]};this.plotBox=c.plotBox={x:y,y:p,width:f,height:E};
d=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(d,h[3])/2);c=Math.ceil(Math.max(d,h[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(d,h[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(d,h[2])/2-c))};a||e(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;e(["margin","spacing"],function(c){var d=b[c],g=x(d)?d:[d,d,d,d];e(["Top","Right","Bottom","Left"],function(d,m){a[c][m]=y(b[c+d],g[m])})});
e(d,function(b,c){a[b]=y(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,g=this.chartBackground,m=this.plotBackground,k=this.plotBorder,h,y=this.plotBGImage,e=a.backgroundColor,p=a.plotBackgroundColor,f=a.plotBackgroundImage,E,t=this.plotLeft,x=this.plotTop,u=this.plotWidth,I=this.plotHeight,n=this.plotBox,l=this.clipRect,z=this.clipBox,J="animate";g||(this.chartBackground=
g=b.rect().addClass("highcharts-background").add(),J="attr");h=a.borderWidth||0;E=h+(a.shadow?8:0);e={fill:e||"none"};if(h||g["stroke-width"])e.stroke=a.borderColor,e["stroke-width"]=h;g.attr(e).shadow(a.shadow);g[J]({x:E/2,y:E/2,width:c-E-h%2,height:d-E-h%2,r:a.borderRadius});J="animate";m||(J="attr",this.plotBackground=m=b.rect().addClass("highcharts-plot-background").add());m[J](n);m.attr({fill:p||"none"}).shadow(a.plotShadow);f&&(y?y.animate(n):this.plotBGImage=b.image(f,t,x,u,I).add());l?l.animate({width:z.width,
height:z.height}):this.clipRect=b.clipRect(z);J="animate";k||(J="attr",this.plotBorder=k=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());k.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});k[J](k.crisp({x:t,y:x,width:u,height:I},-k.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,g,m;e(["inverted","angular","polar"],function(k){c=I[b.type||b.defaultSeriesType];m=b[k]||c&&c.prototype[k];
for(g=d&&d.length;!m&&g--;)(c=I[d[g].type])&&c.prototype[k]&&(m=!0);a[k]=m})},linkSeries:function(){var a=this,b=a.series;e(b,function(a){a.linkedSeries.length=0});e(b,function(b){var c=b.options.linkedTo;k(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=y(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){e(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;
b.items&&e(b.items,function(c){var d=z(b.style,c.style),g=J(d.left)+a.plotLeft,m=J(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,g,m).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,g,m;this.setTitle();this.legend=new F(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;d=this.plotHeight-=21;e(a,function(a){a.setScale()});this.getAxisMargins();g=1.1<c/this.plotWidth;m=
1.05<d/this.plotHeight;if(g||m)e(a,function(a){(a.horiz&&g||!a.horiz&&m)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&e(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=u(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=
this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(O.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,d=b.series,g=b.container,m,k=g&&g.parentNode;t(b,"destroy");n[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");E(b);for(m=c.length;m--;)c[m]=
c[m].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(m=d.length;m--;)d[m]=d[m].destroy();e("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});g&&(g.innerHTML="",E(g),k&&q(g));for(m in b)delete b[m]},isReadyToRender:function(){var a=this;return L||O!=O.top||"complete"===v.readyState?!0:(v.attachEvent("onreadystatechange",
function(){v.detachEvent("onreadystatechange",a.firstRender);"complete"===v.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();t(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();e(b.series||[],function(b){a.initSeries(b)});a.linkSeries();t(a,"beforeRender");m&&(a.pointer=new m(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.cloneRenderTo(!0)}},onload:function(){e([this.callback].concat(this.callbacks),
function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);t(this,"load");t(this,"render");c(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}}})(K);(function(a){var D,C=a.each,G=a.extend,H=a.erase,v=a.fireEvent,l=a.format,r=a.isArray,w=a.isNumber,q=a.pick,n=a.removeEvent;D=a.Point=function(){};D.prototype={init:function(a,c,e){this.series=a;this.color=a.color;this.applyOptions(c,e);a.options.colorByPoint?(c=a.options.colors||a.chart.options.colors,this.color=this.color||
c[a.colorCounter],c=c.length,e=a.colorCounter,a.colorCounter++,a.colorCounter===c&&(a.colorCounter=0)):e=a.colorIndex;this.colorIndex=q(this.colorIndex,e);a.chart.pointCount++;return this},applyOptions:function(a,c){var e=this.series,f=e.options.pointValKey||e.pointValKey;a=D.prototype.optionsToObject.call(this,a);G(this,a);this.options=this.options?G(this.options,a):a;a.group&&delete this.group;f&&(this.y=this[f]);this.isNull=q(this.isValid&&!this.isValid(),null===this.x||!w(this.y,!0));this.selected&&
(this.state="select");"name"in this&&void 0===c&&e.xAxis&&e.xAxis.hasNames&&(this.x=e.xAxis.nameToX(this));void 0===this.x&&e&&(this.x=void 0===c?e.autoIncrement(this):c);return this},optionsToObject:function(a){var c={},e=this.series,f=e.options.keys,b=f||e.pointArrayMap||["y"],t=b.length,h=0,n=0;if(w(a)||null===a)c[b[0]]=a;else if(r(a))for(!f&&a.length>t&&(e=typeof a[0],"string"===e?c.name=a[0]:"number"===e&&(c.x=a[0]),h++);n<t;)f&&void 0===a[h]||(c[b[n]]=a[h]),h++,n++;else"object"===typeof a&&
(c=a,a.dataLabels&&(e._hasPointLabels=!0),a.marker&&(e._hasPointMarkers=!0));return c},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=
this.series,c=a.zones,a=a.zoneAxis||"y",e=0,n;for(n=c[e];this[a]>=n.value;)n=c[++e];n&&n.color&&!this.options.color&&(this.color=n.color);return n},destroy:function(){var a=this.series.chart,c=a.hoverPoints,e;a.pointCount--;c&&(this.setState(),H(c,this),c.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)n(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(e in this)this[e]=null},destroyElements:function(){for(var a=["graphic",
"dataLabel","dataLabelUpper","connector","shadowGroup"],c,e=6;e--;)c=a[e],this[c]&&(this[c]=this[c].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var c=this.series,e=c.tooltipOptions,f=q(e.valueDecimals,""),b=e.valuePrefix||"",t=e.valueSuffix||"";C(c.pointArrayMap||["y"],function(c){c=
"{point."+c;if(b||t)a=a.replace(c+"}",b+c+"}"+t);a=a.replace(c+"}",c+":,."+f+"f}")});return l(a,{point:this,series:this.series})},firePointEvent:function(a,c,e){var f=this,b=this.series.options;(b.point.events[a]||f.options&&f.options.events&&f.options.events[a])&&this.importEvents();"click"===a&&b.allowPointSelect&&(e=function(a){f.select&&f.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});v(this,a,c,e)},visible:!0}})(K);(function(a){var D=a.addEvent,C=a.animObject,G=a.arrayMax,H=a.arrayMin,v=a.correctFloat,
l=a.Date,r=a.defaultOptions,w=a.defaultPlotOptions,q=a.defined,n=a.each,f=a.erase,c=a.extend,e=a.fireEvent,z=a.grep,b=a.isArray,t=a.isNumber,h=a.isString,B=a.merge,p=a.pick,x=a.removeEvent,k=a.splat,F=a.SVGElement,d=a.syncTimeout,u=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",
lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},
{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var d=this,m,k,g=a.series,h;d.chart=a;d.options=b=d.setOptions(b);d.linkedSeries=[];d.bindAxes();c(d,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});k=b.events;for(m in k)D(d,m,k[m]);if(k&&k.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;d.getColor();
d.getSymbol();n(d.parallelArrays,function(a){d[a+"Data"]=[]});d.setData(b.data,!1);d.isCartesian&&(a.hasCartesianSeries=!0);g.length&&(h=g[g.length-1]);d._i=p(h&&h._i,-1)+1;a.orderSeries(this.insert(g))},insert:function(a){var b=this.options.index,c;if(t(b)){for(c=a.length;c--;)if(b>=p(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return p(c,a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,k;n(b.axisTypes||[],function(m){n(d[m],
function(a){k=a.options;if(c[m]===k.index||void 0!==c[m]&&c[m]===k.id||void 0===c[m]&&0===k.index)b.insert(a.series),b[m]=a,a.isDirty=!0});b[m]||b.optionalAxis===m||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,m=t(b)?function(d){var g="y"===d&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=g}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};n(c.parallelArrays,m)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,
b=p(b,a.pointStart,0);this.pointInterval=c=p(this.pointInterval,a.pointInterval,1);d&&(a=new l(b),"day"===d?a=+a[l.hcSetDate](a[l.hcGetDate]()+c):"month"===d?a=+a[l.hcSetMonth](a[l.hcGetMonth]()+c):"year"===d&&(a=+a[l.hcSetFullYear](a[l.hcGetFullYear]()+c)),c=a-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},m=c[this.type];this.userOptions=a;c=B(m,c.series,a);this.tooltipOptions=B(r.tooltip,r.plotOptions[this.type].tooltip,
b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);this.stickyTracking=p(a.stickyTracking,d[this.type]&&d[this.type].stickyTracking,d.series&&d.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:c.stickyTracking);null===m.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||0,className:"highcharts-negative",
color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&q(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var d,m=this.chart,g=this.userOptions,k=a+"Index",h=a+"Counter",e=c?c.length:p(m.options.chart[a+"Count"],m[a+"Count"]);b||(d=p(g[k],g["_"+k]),q(d)||(m.series.length||(m[h]=0),g["_"+k]=d=m[h]%e,m[h]+=1),c&&(b=c[d]));void 0!==d&&(this[k]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",
this.options.color||w[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(c,d,k,e){var m=this,g=m.points,y=g&&g.length||0,E,f=m.options,x=m.chart,u=null,l=m.xAxis,z=f.turboThreshold,F=this.xData,q=this.yData,r=(E=m.pointArrayMap)&&E.length;c=c||[];E=c.length;d=p(d,!0);if(!1!==e&&E&&y===E&&!m.cropped&&!m.hasGroupedData&&m.visible)n(c,function(a,
b){g[b].update&&a!==f.data[b]&&g[b].update(a,!1,null,!1)});else{m.xIncrement=null;m.colorCounter=0;n(this.parallelArrays,function(a){m[a+"Data"].length=0});if(z&&E>z){for(k=0;null===u&&k<E;)u=c[k],k++;if(t(u))for(k=0;k<E;k++)F[k]=this.autoIncrement(),q[k]=c[k];else if(b(u))if(r)for(k=0;k<E;k++)u=c[k],F[k]=u[0],q[k]=u.slice(1,r+1);else for(k=0;k<E;k++)u=c[k],F[k]=u[0],q[k]=u[1];else a.error(12)}else for(k=0;k<E;k++)void 0!==c[k]&&(u={series:m},m.pointClass.prototype.applyOptions.apply(u,[c[k]]),m.updateParallelArrays(u,
k));h(q[0])&&a.error(14,!0);m.data=[];m.options.data=m.userOptions.data=c;for(k=y;k--;)g[k]&&g[k].destroy&&g[k].destroy();l&&(l.minRange=l.userMinRange);m.isDirty=x.isDirtyBox=!0;m.isDirtyData=!!g;k=!1}"point"===f.legendType&&(this.processData(),this.generatePoints());d&&x.redraw(k)},processData:function(b){var c=this.xData,d=this.yData,m=c.length,k;k=0;var g,h,e=this.xAxis,p,f=this.options;p=f.cropThreshold;var t=this.getExtremesFromAll||f.getExtremesFromAll,u=this.isCartesian,f=e&&e.val2lin,x=e&&
e.isLog,n,l;if(u&&!this.isDirty&&!e.isDirty&&!this.yAxis.isDirty&&!b)return!1;e&&(b=e.getExtremes(),n=b.min,l=b.max);if(u&&this.sorted&&!t&&(!p||m>p||this.forceCrop))if(c[m-1]<n||c[0]>l)c=[],d=[];else if(c[0]<n||c[m-1]>l)k=this.cropData(this.xData,this.yData,n,l),c=k.xData,d=k.yData,k=k.start,g=!0;for(p=c.length||1;--p;)m=x?f(c[p])-f(c[p-1]):c[p]-c[p-1],0<m&&(void 0===h||m<h)?h=m:0>m&&this.requireSorting&&a.error(15);this.cropped=g;this.cropStart=k;this.processedXData=c;this.processedYData=d;this.closestPointRange=
h},cropData:function(a,b,c,d){var m=a.length,g=0,k=m,h=p(this.cropShoulder,1),e;for(e=0;e<m;e++)if(a[e]>=c){g=Math.max(0,e-h);break}for(c=e;c<m;c++)if(a[c]>d){k=c+h;break}return{xData:a.slice(g,k),yData:b.slice(g,k),start:g,end:k}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,h=this.processedYData,g=this.pointClass,e=d.length,p=this.cropStart||0,f,t=this.hasGroupedData,u,x=[],n;b||t||(b=[],b.length=a.length,b=this.data=b);for(n=0;n<e;n++)f=p+n,t?(u=(new g).init(this,
[d[n]].concat(k(h[n]))),u.dataGroup=this.groupMap[n]):(u=b[f])||void 0===a[f]||(b[f]=u=(new g).init(this,a[f],d[n])),u&&(u.index=f,x[n]=u);if(b&&(e!==(c=b.length)||t))for(n=0;n<c;n++)n!==p||t||(n+=e),b[n]&&(b[n].destroyElements(),b[n].plotX=void 0);this.data=b;this.points=x},getExtremes:function(a){var c=this.yAxis,d=this.processedXData,m,k=[],g=0;m=this.xAxis.getExtremes();var h=m.min,e=m.max,p,f,u,x;a=a||this.stackedYData||this.processedYData||[];m=a.length;for(x=0;x<m;x++)if(f=d[x],u=a[x],p=(t(u,
!0)||b(u))&&(!c.positiveValuesOnly||u.length||0<u),f=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(d[x]||f)>=h&&(d[x]||f)<=e,p&&f)if(p=u.length)for(;p--;)null!==u[p]&&(k[g++]=u[p]);else k[g++]=u;this.dataMin=H(k);this.dataMax=G(k)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,k=this.yAxis,g=this.points,h=g.length,e=!!this.modifyValue,f=a.pointPlacement,u="between"===f||t(f),
x=a.threshold,n=a.startFromThreshold?x:0,l,z,F,r,B=Number.MAX_VALUE;"between"===f&&(f=.5);t(f)&&(f*=p(a.pointRange||c.pointRange));for(a=0;a<h;a++){var w=g[a],C=w.x,D=w.y;z=w.low;var G=b&&k.stacks[(this.negStacks&&D<(n?0:x)?"-":"")+this.stackKey],H;k.positiveValuesOnly&&null!==D&&0>=D&&(w.isNull=!0);w.plotX=l=v(Math.min(Math.max(-1E5,c.translate(C,0,0,0,1,f,"flags"===this.type)),1E5));b&&this.visible&&!w.isNull&&G&&G[C]&&(r=this.getStackIndicator(r,C,this.index),H=G[C],D=H.points[r.key],z=D[0],D=
D[1],z===n&&r.key===G[C].base&&(z=p(x,k.min)),k.positiveValuesOnly&&0>=z&&(z=null),w.total=w.stackTotal=H.total,w.percentage=H.total&&w.y/H.total*100,w.stackY=D,H.setOffset(this.pointXOffset||0,this.barW||0));w.yBottom=q(z)?k.translate(z,0,1,0,1):null;e&&(D=this.modifyValue(D,w));w.plotY=z="number"===typeof D&&Infinity!==D?Math.min(Math.max(-1E5,k.translate(D,0,1,0,1)),1E5):void 0;w.isInside=void 0!==z&&0<=z&&z<=k.len&&0<=l&&l<=c.len;w.clientX=u?v(c.translate(C,0,0,0,1,f)):l;w.negative=w.y<(x||0);
w.category=d&&void 0!==d[w.x]?d[w.x]:w.x;w.isNull||(void 0!==F&&(B=Math.min(B,Math.abs(l-F))),F=l);w.zone=this.zones.length&&w.getZone()}this.closestPointRangePx=B},getValidPoints:function(a,b){var c=this.chart;return z(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,m=b.inverted,g=this.clipBox,k=g||b.clipBox,h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,k.height,
c.xAxis,c.yAxis].join(),e=b[h],p=b[h+"m"];e||(a&&(k.width=0,b[h+"m"]=p=d.clipRect(-99,m?-b.plotLeft:-b.plotTop,99,m?b.chartWidth:b.chartHeight)),b[h]=e=d.clipRect(k),e.count={length:0});a&&!e.count[this.index]&&(e.count[this.index]=!0,e.count.length+=1);!1!==c.clip&&(this.group.clip(a||g?e:b.clipRect),this.markerGroup.clip(p),this.sharedClipKey=h);a||(e.count[this.index]&&(delete e.count[this.index],--e.count.length),0===e.count.length&&h&&b[h]&&(g||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},
animate:function(a){var b=this.chart,c=C(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();e(this,"afterAnimate")},drawPoints:function(){var a=this.points,b=this.chart,c,d,k,g,h=this.options.marker,e,f,u,x,n=this.markerGroup,l=p(h.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*h.radius);if(!1!==h.enabled||this._hasPointMarkers)for(d=
0;d<a.length;d++)k=a[d],c=k.plotY,g=k.graphic,e=k.marker||{},f=!!k.marker,u=l&&void 0===e.enabled||e.enabled,x=k.isInside,u&&t(c)&&null!==k.y?(c=p(e.symbol,this.symbol),k.hasImage=0===c.indexOf("url"),u=this.markerAttribs(k,k.selected&&"select"),g?g[x?"show":"hide"](!0).animate(u):x&&(0<u.width||k.hasImage)&&(k.graphic=g=b.renderer.symbol(c,u.x,u.y,u.width,u.height,f?e:h).add(n)),g&&g.attr(this.pointAttribs(k,k.selected&&"select")),g&&g.addClass(k.getClassName(),!0)):g&&(k.graphic=g.destroy())},markerAttribs:function(a,
b){var c=this.options.marker,d=a.marker||{},m=p(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],m=p(b&&b.radius,c&&c.radius,m+(c&&c.radiusPlus||0)));a.hasImage&&(m=0);a={x:Math.floor(a.plotX)-m,y:a.plotY-m};m&&(a.width=a.height=2*m);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,m=d&&d.marker||{},g=this.color,k=d&&d.color,h=a&&a.color,d=p(m.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;g=k||a||h||g;a=m.fillColor||c.fillColor||g;g=m.lineColor||c.lineColor||
g;b&&(c=c.states[b],b=m.states&&m.states[b]||{},d=p(b.lineWidth,c.lineWidth,d+p(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,g=b.lineColor||c.lineColor||g);return{stroke:g,"stroke-width":d,fill:a}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(u.navigator.userAgent),d,k=a.data||[],g,h,p;e(a,"destroy");x(a);n(a.axisTypes||[],function(b){(p=a[b])&&p.series&&(f(p.series,a),p.isDirty=p.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(d=k.length;d--;)(g=
k[d])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);for(h in a)a[h]instanceof F&&!a[h].survive&&(d=c&&"group"===h?"hide":"destroy",a[h][d]());b.hoverSeries===a&&(b.hoverSeries=null);f(b.series,a);b.orderSeries();for(h in a)delete a[h]},getGraphPath:function(a,b,c){var d=this,m=d.options,g=m.step,k,h=[],e=[],p;a=a||d.points;(k=a.reversed)&&a.reverse();(g={right:1,center:2}[g]||g&&3)&&k&&(g=4-g);!m.connectNulls||b||c||(a=this.getValidPoints(a));n(a,function(k,f){var u=k.plotX,
x=k.plotY,t=a[f-1];(k.leftCliff||t&&t.rightCliff)&&!c&&(p=!0);k.isNull&&!q(b)&&0<f?p=!m.connectNulls:k.isNull&&!b?p=!0:(0===f||p?f=["M",k.plotX,k.plotY]:d.getPointSpline?f=d.getPointSpline(a,k,f):g?(f=1===g?["L",t.plotX,x]:2===g?["L",(t.plotX+u)/2,t.plotY,"L",(t.plotX+u)/2,x]:["L",u,t.plotY],f.push("L",u,x)):f=["L",u,x],e.push(k.x),g&&e.push(k.x),h.push.apply(h,f),p=!1)});h.xMap=e;return d.graphPath=h},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),
d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];n(this.zones,function(c,g){d.push(["zone-graph-"+g,"highcharts-graph highcharts-zone-graph-"+g+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});n(d,function(d,g){var k=d[0],m=a[k];m?(m.endX=c.xMap,m.animate({d:c})):c.length&&(a[k]=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),m={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},d[3]?m.dashstyle=d[3]:"square"!==b.linecap&&
(m["stroke-linecap"]=m["stroke-linejoin"]="round"),m=a[k].attr(m).shadow(2>g&&b.shadow));m&&(m.startX=c.xMap,m.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,k,g,h=this.clips||[],e,f=this.graph,u=this.area,x=Math.max(b.chartWidth,b.chartHeight),t=this[(this.zoneAxis||"y")+"Axis"],l,z,F=b.inverted,q,r,B,w,v=!1;d.length&&(f||u)&&t&&void 0!==t.min&&(z=t.reversed,q=t.horiz,f&&f.hide(),u&&u.hide(),l=t.getExtremes(),n(d,function(d,m){k=z?q?b.plotWidth:0:q?0:
t.toPixels(l.min);k=Math.min(Math.max(p(g,k),0),x);g=Math.min(Math.max(Math.round(t.toPixels(p(d.value,l.max),!0)),0),x);v&&(k=g=t.toPixels(l.max));r=Math.abs(k-g);B=Math.min(k,g);w=Math.max(k,g);t.isXAxis?(e={x:F?w:B,y:0,width:r,height:x},q||(e.x=b.plotHeight-e.x)):(e={x:0,y:F?w:B,width:x,height:r},q&&(e.y=b.plotWidth-e.y));F&&c.isVML&&(e=t.isXAxis?{x:0,y:z?B:w,height:e.width,width:b.chartWidth}:{x:e.y-b.plotLeft-b.spacingBox.x,y:0,width:e.height,height:b.chartHeight});h[m]?h[m].animate(e):(h[m]=
c.clipRect(e),f&&a["zone-graph-"+m].clip(h[m]),u&&a["zone-area-"+m].clip(h[m]));v=d.value>l.max}),this.clips=h)},invertGroups:function(a){function b(){n(["group","markerGroup"],function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,k;c.xAxis&&(k=D(d,"resize",b),D(c,"destroy",k),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,k){var g=this[a],m=!g;m&&(this[a]=g=this.chart.renderer.g(b).attr({zIndex:d||
.1}).add(k),g.addClass("highcharts-series-"+this.index+" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+" "+(this.options.className||"")));g.attr({visibility:c})[m?"attr":"animate"](this.getPlotBox());return g},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,k=a.options,h=!!a.animate&&b.renderer.isSVG&&C(k.animation).duration,
g=a.visible?"inherit":"hidden",e=k.zIndex,p=a.hasRendered,f=b.seriesGroup,u=b.inverted;c=a.plotGroup("group","series",g,e,f);a.markerGroup=a.plotGroup("markerGroup","markers",g,e,f);h&&a.animate(!0);c.inverted=a.isCartesian?u:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(u);!1===k.clip||a.sharedClipKey||p||c.clip(b.clipRect);h&&a.animate();p||(a.animationTimeout=
d(function(){a.afterAnimate()},h));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,k=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:p(d&&d.left,a.plotLeft),translateY:p(k&&k.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,k=this.chart.inverted;return this.searchKDTree({clientX:k?
c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:k?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,d,g){var k,m;if(m=c&&c.length)return k=b.kdAxisArray[d%g],c.sort(function(a,b){return a[k]-b[k]}),m=Math.floor(m/2),{point:c[m],left:a(c.slice(0,m),d+1,g),right:a(c.slice(m+1),d+1,g)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;d(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?
0:1)},searchKDTree:function(a,b){function c(a,b,h,e){var p=b.point,f=d.kdAxisArray[h%e],u,t,x=p;t=q(a[k])&&q(p[k])?Math.pow(a[k]-p[k],2):null;u=q(a[g])&&q(p[g])?Math.pow(a[g]-p[g],2):null;u=(t||0)+(u||0);p.dist=q(u)?Math.sqrt(u):Number.MAX_VALUE;p.distX=q(t)?Math.sqrt(t):Number.MAX_VALUE;f=a[f]-p[f];u=0>f?"left":"right";t=0>f?"right":"left";b[u]&&(u=c(a,b[u],h+1,e),x=u[m]<x[m]?u:p);b[t]&&Math.sqrt(f*f)<x[m]&&(a=c(a,b[t],h+1,e),x=a[m]<x[m]?a:x);return x}var d=this,k=this.kdAxisArray[0],g=this.kdAxisArray[1],
m=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(K);(function(a){function D(a,f,c,e,l){var b=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=f;this.x=e;this.total=null;this.points={};this.stack=l;this.rightCliff=this.leftCliff=0;this.alignOptions={align:f.align||(b?c?"left":"right":"center"),verticalAlign:f.verticalAlign||(b?"middle":c?"bottom":"top"),y:q(f.y,b?4:c?
14:-6),x:q(f.x,b?c?-6:6:0)};this.textAlign=f.textAlign||(b?c?"right":"left":"center")}var C=a.Axis,G=a.Chart,H=a.correctFloat,v=a.defined,l=a.destroyObjectProperties,r=a.each,w=a.format,q=a.pick;a=a.Series;D.prototype={destroy:function(){l(this,this.axis)},render:function(a){var f=this.options,c=f.format,c=c?w(c,this):f.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,null,null,f.useHTML).css(f.style).attr({align:this.textAlign,
rotation:f.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,f){var c=this.axis,e=c.chart,n=e.inverted,b=c.reversed,b=this.isNegative&&!b||!this.isNegative&&b,t=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=Math.abs(t-c);a=e.xAxis[0].translate(this.x)+a;var h=e.plotHeight,n={x:n?b?t:t-c:a,y:n?h-a-f:b?h-t-c:h-t,width:n?c:f,height:n?f:c};if(f=this.label)f.align(this.alignOptions,null,n),n=f.alignAttr,f[!1===this.options.crop||e.isInsidePlot(n.x,n.y)?"show":"hide"](!0)}};
G.prototype.getStacks=function(){var a=this;r(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});r(a.series,function(f){!f.options.stacking||!0!==f.visible&&!1!==a.options.chart.ignoreHiddenSeries||(f.stackKey=f.type+q(f.options.stack,""))})};C.prototype.buildStacks=function(){var a=this.series,f,c=q(this.options.reversedStacks,!0),e=a.length,l;if(!this.isXAxis){this.usePercentage=!1;for(l=e;l--;)a[c?l:e-l-1].setStackedPoints();for(l=e;l--;)f=a[c?l:e-l-1],f.setStackCliffs&&
f.setStackCliffs();if(this.usePercentage)for(l=0;l<e;l++)a[l].setPercentStacks()}};C.prototype.renderStackTotals=function(){var a=this.chart,f=a.renderer,c=this.stacks,e,l,b=this.stackTotalGroup;b||(this.stackTotalGroup=b=f.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());b.translate(a.plotLeft,a.plotTop);for(e in c)for(l in a=c[e],a)a[l].render(b)};C.prototype.resetStacks=function(){var a=this.stacks,f,c;if(!this.isXAxis)for(f in a)for(c in a[f])a[f][c].touched<this.stacksTouched?(a[f][c].destroy(),
delete a[f][c]):(a[f][c].total=null,a[f][c].cum=null)};C.prototype.cleanStacks=function(){var a,f,c;if(!this.isXAxis)for(f in this.oldStacks&&(a=this.stacks=this.oldStacks),a)for(c in a[f])a[f][c].cum=a[f][c].total};a.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var a=this.processedXData,f=this.processedYData,c=[],e=f.length,l=this.options,b=l.threshold,t=l.startFromThreshold?b:0,h=l.stack,l=l.stacking,r=this.stackKey,
p="-"+r,x=this.negStacks,k=this.yAxis,F=k.stacks,d=k.oldStacks,u,m,y,w,E,I,g;k.stacksTouched+=1;for(E=0;E<e;E++)I=a[E],g=f[E],u=this.getStackIndicator(u,I,this.index),w=u.key,y=(m=x&&g<(t?0:b))?p:r,F[y]||(F[y]={}),F[y][I]||(d[y]&&d[y][I]?(F[y][I]=d[y][I],F[y][I].total=null):F[y][I]=new D(k,k.options.stackLabels,m,I,h)),y=F[y][I],null!==g&&(y.points[w]=y.points[this.index]=[q(y.cum,t)],v(y.cum)||(y.base=w),y.touched=k.stacksTouched,0<u.index&&!1===this.singleStacks&&(y.points[w][0]=y.points[this.index+
","+I+",0"][0])),"percent"===l?(m=m?r:p,x&&F[m]&&F[m][I]?(m=F[m][I],y.total=m.total=Math.max(m.total,y.total)+Math.abs(g)||0):y.total=H(y.total+(Math.abs(g)||0))):y.total=H(y.total+(g||0)),y.cum=q(y.cum,t)+(g||0),null!==g&&(y.points[w].push(y.cum),c[E]=y.cum);"percent"===l&&(k.usePercentage=!0);this.stackedYData=c;k.oldStacks={}}};a.prototype.setPercentStacks=function(){var a=this,f=a.stackKey,c=a.yAxis.stacks,e=a.processedXData,l;r([f,"-"+f],function(b){for(var f=e.length,h,n;f--;)if(h=e[f],l=a.getStackIndicator(l,
h,a.index,b),h=(n=c[b]&&c[b][h])&&n.points[l.key])n=n.total?100/n.total:0,h[0]=H(h[0]*n),h[1]=H(h[1]*n),a.stackedYData[f]=h[1]})};a.prototype.getStackIndicator=function(a,f,c,e){!v(a)||a.x!==f||e&&a.key!==e?a={x:f,index:0,key:e}:a.index++;a.key=[c,f,a.index].join();return a}})(K);(function(a){var D=a.addEvent,C=a.animate,G=a.Axis,H=a.createElement,v=a.css,l=a.defined,r=a.each,w=a.erase,q=a.extend,n=a.fireEvent,f=a.inArray,c=a.isNumber,e=a.isObject,z=a.merge,b=a.pick,t=a.Point,h=a.Series,B=a.seriesTypes,
p=a.setAnimation,x=a.splat;q(a.Chart.prototype,{addSeries:function(a,c,d){var k,m=this;a&&(c=b(c,!0),n(m,"addSeries",{options:a},function(){k=m.initSeries(a);m.isDirtyLegend=!0;m.linkSeries();c&&m.redraw(d)}));return k},addAxis:function(a,c,d,h){var k=c?"xAxis":"yAxis",e=this.options;a=z(a,{index:this[k].length,isX:c});new G(this,a);e[k]=x(e[k]||{});e[k].push(a);b(d,!0)&&this.redraw(h)},showLoading:function(a){var b=this,c=b.options,k=b.loadingDiv,m=c.loading,h=function(){k&&v(k,{left:b.plotLeft+
"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};k||(b.loadingDiv=k=H("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=H("span",{className:"highcharts-loading-inner"},null,k),D(b,"redraw",h));k.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;v(k,q(m.style,{zIndex:10}));v(b.loadingSpan,m.labelStyle);b.loadingShown||(v(k,{opacity:0,display:""}),C(k,{opacity:m.style.opacity||.5},{duration:m.showDuration||
0}));b.loadingShown=!0;h()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",C(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){v(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions".split(" "),update:function(a,h){var d,k={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},m=a.chart,e,p;if(m){z(!0,this.options.chart,m);"className"in m&&this.setClassName(m.className);if("inverted"in m||"polar"in m)this.propFromSeries(),e=!0;"alignTicks"in m&&(e=!0);for(d in m)m.hasOwnProperty(d)&&(-1!==f("chart."+d,this.propsRequireUpdateSeries)&&(p=!0),-1!==f(d,this.propsRequireDirtyBox)&&
(this.isDirtyBox=!0));"style"in m&&this.renderer.setStyle(m.style)}for(d in a){if(this[d]&&"function"===typeof this[d].update)this[d].update(a[d],!1);else if("function"===typeof this[k[d]])this[k[d]](a[d]);"chart"!==d&&-1!==f(d,this.propsRequireUpdateSeries)&&(p=!0)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&z(!0,this.options.plotOptions,a.plotOptions);r(["xAxis","yAxis","series","colorAxis","pane"],function(b){a[b]&&r(x(a[b]),function(a,c){(c=l(a.id)&&this.get(a.id)||this[b][c])&&c.coll===
b&&c.update(a,!1)},this)},this);e&&r(this.axes,function(a){a.update({},!1)});p&&r(this.series,function(a){a.update({},!1)});a.loading&&z(!0,this.options.loading,a.loading);d=m&&m.width;m=m&&m.height;c(d)&&d!==this.chartWidth||c(m)&&m!==this.chartHeight?this.setSize(d,m):b(h,!0)&&this.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});q(t.prototype,{update:function(a,c,d,h){function k(){p.applyOptions(a);null===p.y&&u&&(p.graphic=u.destroy());e(a,!0)&&(u&&u.element&&a&&a.marker&&a.marker.symbol&&
(p.graphic=u.destroy()),a&&a.dataLabels&&p.dataLabel&&(p.dataLabel=p.dataLabel.destroy()));x=p.index;f.updateParallelArrays(p,x);t.data[x]=e(t.data[x],!0)||e(a,!0)?p.options:a;f.isDirty=f.isDirtyData=!0;!f.fixedBox&&f.hasCartesianSeries&&(g.isDirtyBox=!0);"point"===t.legendType&&(g.isDirtyLegend=!0);c&&g.redraw(d)}var p=this,f=p.series,u=p.graphic,x,g=f.chart,t=f.options;c=b(c,!0);!1===h?k():p.firePointEvent("update",{options:a},k)},remove:function(a,b){this.series.removePoint(f(this,this.series.data),
a,b)}});q(h.prototype,{addPoint:function(a,c,d,h){var k=this.options,e=this.data,p=this.chart,f=this.xAxis,f=f&&f.hasNames&&f.names,u=k.data,g,x,t=this.xData,l,n;c=b(c,!0);g={series:this};this.pointClass.prototype.applyOptions.apply(g,[a]);n=g.x;l=t.length;if(this.requireSorting&&n<t[l-1])for(x=!0;l&&t[l-1]>n;)l--;this.updateParallelArrays(g,"splice",l,0,0);this.updateParallelArrays(g,l);f&&g.name&&(f[n]=g.name);u.splice(l,0,a);x&&(this.data.splice(l,0,null),this.processData());"point"===k.legendType&&
this.generatePoints();d&&(e[0]&&e[0].remove?e[0].remove(!1):(e.shift(),this.updateParallelArrays(g,"shift"),u.shift()));this.isDirtyData=this.isDirty=!0;c&&p.redraw(h)},removePoint:function(a,c,d){var k=this,m=k.data,h=m[a],e=k.points,f=k.chart,x=function(){e&&e.length===m.length&&e.splice(a,1);m.splice(a,1);k.options.data.splice(a,1);k.updateParallelArrays(h||{series:k},"splice",a,1);h&&h.destroy();k.isDirty=!0;k.isDirtyData=!0;c&&f.redraw()};p(d,f);c=b(c,!0);h?h.firePointEvent("remove",null,x):
x()},remove:function(a,c,d){function k(){m.destroy();h.isDirtyLegend=h.isDirtyBox=!0;h.linkSeries();b(a,!0)&&h.redraw(c)}var m=this,h=m.chart;!1!==d?n(m,"remove",null,k):k()},update:function(a,c){var d=this,k=this.chart,m=this.userOptions,h=this.oldType||this.type,e=a.type||m.type||k.options.chart.type,p=B[h].prototype,f=["group","markerGroup","dataLabelsGroup"],g;if(e&&e!==h||void 0!==a.zIndex)f.length=0;r(f,function(a){f[a]=d[a];delete d[a]});a=z(m,{animation:!1,index:this.index,pointStart:this.xData[0]},
{data:this.options.data},a);this.remove(!1,null,!1);for(g in p)this[g]=void 0;q(this,B[e||h].prototype);r(f,function(a){d[a]=f[a]});this.init(k,a);this.oldType=h;k.linkSeries();b(c,!0)&&k.redraw(!1)}});q(G.prototype,{update:function(a,c){var d=this.chart;a=d.options[this.coll][this.options.index]=z(this.userOptions,a);this.destroy(!0);this.init(d,q(a,{events:void 0}));d.isDirtyBox=!0;b(c,!0)&&d.redraw()},remove:function(a){for(var c=this.chart,d=this.coll,k=this.series,m=k.length;m--;)k[m]&&k[m].remove(!1);
w(c.axes,this);w(c[d],this);c.options[d].splice(this.options.index,1);r(c[d],function(a,b){a.options.index=b});this.destroy();c.isDirtyBox=!0;b(a,!0)&&c.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(K);(function(a){var D=a.color,C=a.each,G=a.map,H=a.pick,v=a.Series,l=a.seriesType;l("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(){var a=[],l=[],q=this.xAxis,n=this.yAxis,f=n.stacks[this.stackKey],
c={},e=this.points,z=this.index,b=n.series,t=b.length,h,B=H(n.options.reversedStacks,!0)?1:-1,p,x;if(this.options.stacking){for(p=0;p<e.length;p++)c[e[p].x]=e[p];for(x in f)null!==f[x].total&&l.push(x);l.sort(function(a,b){return a-b});h=G(b,function(){return this.visible});C(l,function(b,e){var d=0,k,m;if(c[b]&&!c[b].isNull)a.push(c[b]),C([-1,1],function(a){var d=1===a?"rightNull":"leftNull",x=0,u=f[l[e+a]];if(u)for(p=z;0<=p&&p<t;)k=u.points[p],k||(p===z?c[b][d]=!0:h[p]&&(m=f[b].points[p])&&(x-=
m[1]-m[0])),p+=B;c[b][1===a?"rightCliff":"leftCliff"]=x});else{for(p=z;0<=p&&p<t;){if(k=f[b].points[p]){d=k[1];break}p+=B}d=n.translate(d,0,1,0,1);a.push({isNull:!0,plotX:q.translate(b,0,0,0,1),x:b,plotY:d,yBottom:d})}})}return a},getGraphPath:function(a){var l=v.prototype.getGraphPath,q=this.options,n=q.stacking,f=this.yAxis,c,e,z=[],b=[],t=this.index,h,r=f.stacks[this.stackKey],p=q.threshold,x=f.getThreshold(q.threshold),k,q=q.connectNulls||"percent"===n,F=function(c,k,m){var d=a[c];c=n&&r[d.x].points[t];
var e=d[m+"Null"]||0;m=d[m+"Cliff"]||0;var u,l,d=!0;m||e?(u=(e?c[0]:c[1])+m,l=c[0]+m,d=!!e):!n&&a[k]&&a[k].isNull&&(u=l=p);void 0!==u&&(b.push({plotX:h,plotY:null===u?x:f.getThreshold(u),isNull:d,isCliff:!0}),z.push({plotX:h,plotY:null===l?x:f.getThreshold(l),doCurve:!1}))};a=a||this.points;n&&(a=this.getStackPoints());for(c=0;c<a.length;c++)if(e=a[c].isNull,h=H(a[c].rectPlotX,a[c].plotX),k=H(a[c].yBottom,x),!e||q)q||F(c,c-1,"left"),e&&!n&&q||(b.push(a[c]),z.push({x:c,plotX:h,plotY:k})),q||F(c,c+
1,"right");c=l.call(this,b,!0,!0);z.reversed=!0;e=l.call(this,z,!0,!0);e.length&&(e[0]="L");e=c.concat(e);l=l.call(this,b,!1,q);e.xMap=c.xMap;this.areaPath=e;return l},drawGraph:function(){this.areaPath=[];v.prototype.drawGraph.apply(this);var a=this,l=this.areaPath,q=this.options,n=[["area","highcharts-area",this.color,q.fillColor]];C(this.zones,function(f,c){n.push(["zone-area-"+c,"highcharts-area highcharts-zone-area-"+c+" "+f.className,f.color||a.color,f.fillColor||q.fillColor])});C(n,function(f){var c=
f[0],e=a[c];e?(e.endX=l.xMap,e.animate({d:l})):(e=a[c]=a.chart.renderer.path(l).addClass(f[1]).attr({fill:H(f[3],D(f[2]).setOpacity(H(q.fillOpacity,.75)).get()),zIndex:0}).add(a.group),e.isArea=!0);e.startX=l.xMap;e.shiftUnit=q.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var D=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,G,H){var v=G.plotX,l=G.plotY,r=a[H-1];H=a[H+1];var w,q,n,f;if(r&&!r.isNull&&!1!==r.doCurve&&!G.isCliff&&H&&!H.isNull&&
!1!==H.doCurve&&!G.isCliff){a=r.plotY;n=H.plotX;H=H.plotY;var c=0;w=(1.5*v+r.plotX)/2.5;q=(1.5*l+a)/2.5;n=(1.5*v+n)/2.5;f=(1.5*l+H)/2.5;n!==w&&(c=(f-q)*(n-v)/(n-w)+l-f);q+=c;f+=c;q>a&&q>l?(q=Math.max(a,l),f=2*l-q):q<a&&q<l&&(q=Math.min(a,l),f=2*l-q);f>H&&f>l?(f=Math.max(H,l),q=2*l-f):f<H&&f<l&&(f=Math.min(H,l),q=2*l-f);G.rightContX=n;G.rightContY=f}G=["C",D(r.rightContX,r.plotX),D(r.rightContY,r.plotY),D(w,v),D(q,l),v,l];r.rightContX=r.rightContY=null;return G}})})(K);(function(a){var D=a.seriesTypes.area.prototype,
C=a.seriesType;C("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:D.getStackPoints,getGraphPath:D.getGraphPath,setStackCliffs:D.setStackCliffs,drawGraph:D.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var D=a.animObject,C=a.color,G=a.each,H=a.extend,v=a.isNumber,l=a.merge,r=a.pick,w=a.Series,q=a.seriesType,n=a.svg;q("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,
states:{hover:{halo:!1,brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){w.prototype.init.apply(this,arguments);var a=this,c=a.chart;c.hasRendered&&G(c.series,function(c){c.type===a.type&&(c.isDirty=!0)})},
getColumnMetrics:function(){var a=this,c=a.options,e=a.xAxis,l=a.yAxis,b=e.reversed,t,h={},n=0;!1===c.grouping?n=1:G(a.chart.series,function(b){var c=b.options,k=b.yAxis,m;b.type===a.type&&b.visible&&l.len===k.len&&l.pos===k.pos&&(c.stacking?(t=b.stackKey,void 0===h[t]&&(h[t]=n++),m=h[t]):!1!==c.grouping&&(m=n++),b.columnIndex=m)});var p=Math.min(Math.abs(e.transA)*(e.ordinalSlope||c.pointRange||e.closestPointRange||e.tickInterval||1),e.len),x=p*c.groupPadding,k=(p-2*x)/(n||1),c=Math.min(c.maxPointWidth||
e.len,r(c.pointWidth,k*(1-2*c.pointPadding)));a.columnMetrics={width:c,offset:(k-c)/2+(x+((a.columnIndex||0)+(b?1:0))*k-p/2)*(b?-1:1)};return a.columnMetrics},crispCol:function(a,c,e,l){var b=this.chart,f=this.borderWidth,h=-(f%2?.5:0),f=f%2?.5:1;b.inverted&&b.renderer.isVML&&(f+=1);this.options.crisp&&(e=Math.round(a+e)+h,a=Math.round(a)+h,e-=a);l=Math.round(c+l)+f;h=.5>=Math.abs(c)&&.5<l;c=Math.round(c)+f;l-=c;h&&l&&(--c,l+=1);return{x:a,y:c,width:e,height:l}},translate:function(){var a=this,c=
a.chart,e=a.options,l=a.dense=2>a.closestPointRange*a.xAxis.transA,l=a.borderWidth=r(e.borderWidth,l?0:1),b=a.yAxis,t=a.translatedThreshold=b.getThreshold(e.threshold),h=r(e.minPointLength,5),n=a.getColumnMetrics(),p=n.width,x=a.barW=Math.max(p,1+2*l),k=a.pointXOffset=n.offset;c.inverted&&(t-=.5);e.pointPadding&&(x=Math.ceil(x));w.prototype.translate.apply(a);G(a.points,function(e){var d=r(e.yBottom,t),f=999+Math.abs(d),f=Math.min(Math.max(-f,e.plotY),b.len+f),m=e.plotX+k,l=x,n=Math.min(f,d),E,q=
Math.max(f,d)-n;Math.abs(q)<h&&h&&(q=h,E=!b.reversed&&!e.negative||b.reversed&&e.negative,n=Math.abs(n-t)>h?d-h:t-(E?h:0));e.barX=m;e.pointWidth=p;e.tooltipPos=c.inverted?[b.len+b.pos-c.plotLeft-f,a.xAxis.len-m-l/2,q]:[m+l/2,f+b.pos-c.plotTop,q];e.shapeType="rect";e.shapeArgs=a.crispCol.apply(a,e.isNull?[e.plotX,b.len/2,0,0]:[m,n,l,q])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},
pointAttribs:function(a,c){var e=this.options,f,b=this.pointAttrToOptions||{};f=b.stroke||"borderColor";var t=b["stroke-width"]||"borderWidth",h=a&&a.color||this.color,n=a[f]||e[f]||this.color||h,p=a[t]||e[t]||this[t]||0,b=e.dashStyle;a&&this.zones.length&&(h=(h=a.getZone())&&h.color||a.options.color||this.color);c&&(a=l(e.states[c],a.options.states&&a.options.states[c]||{}),c=a.brightness,h=a.color||void 0!==c&&C(h).brighten(a.brightness).get()||h,n=a[f]||n,p=a[t]||p,b=a.dashStyle||b);f={fill:h,
stroke:n,"stroke-width":p};e.borderRadius&&(f.r=e.borderRadius);b&&(f.dashstyle=b);return f},drawPoints:function(){var a=this,c=this.chart,e=a.options,n=c.renderer,b=e.animationLimit||250,t;G(a.points,function(h){var f=h.graphic;if(v(h.plotY)&&null!==h.y){t=h.shapeArgs;if(f)f[c.pointCount<b?"animate":"attr"](l(t));else h.graphic=f=n[h.shapeType](t).add(h.group||a.group);f.attr(a.pointAttribs(h,h.selected&&"select")).shadow(e.shadow,null,e.stacking&&!e.borderRadius);f.addClass(h.getClassName(),!0)}else f&&
(h.graphic=f.destroy())})},animate:function(a){var c=this,e=this.yAxis,f=c.options,b=this.chart.inverted,t={};n&&(a?(t.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,e.toPixels(f.threshold))),b?t.translateX=a-e.len:t.translateY=a,c.group.attr(t)):(t[b?"translateX":"translateY"]=e.pos,c.group.animate(t,H(D(c.options.animation),{step:function(a,b){c.group.attr({scaleY:Math.max(.001,b.pos)})}})),c.animate=null))},remove:function(){var a=this,c=a.chart;c.hasRendered&&G(c.series,function(c){c.type===
a.type&&(c.isDirty=!0)});w.prototype.remove.apply(a,arguments)}})})(K);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(K);(function(a){var D=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},
{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&D.prototype.drawGraph.call(this)}})})(K);(function(a){var D=a.pick,C=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,H=this.chart,v=2*(a.slicedOffset||0),l=H.plotWidth-2*v,H=H.plotHeight-2*v,r=a.center,r=[D(r[0],"50%"),D(r[1],"50%"),a.size||"100%",a.innerSize||0],w=Math.min(l,H),q,n;for(q=0;4>q;++q)n=
r[q],a=2>q||2===q&&/%$/.test(n),r[q]=C(n,[l,H,w,r[2]][q])+(a?v:0);r[3]>r[2]&&(r[3]=r[2]);return r}}})(K);(function(a){var D=a.addEvent,C=a.defined,G=a.each,H=a.extend,v=a.inArray,l=a.noop,r=a.pick,w=a.Point,q=a.Series,n=a.seriesType,f=a.setAnimation;n("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return null===this.y?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,
stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var c=this,f=c.points,b=c.startAngleRad;a||(G(f,function(a){var h=a.graphic,e=a.shapeArgs;h&&(h.attr({r:a.startR||c.center[3]/2,start:b,end:b}),h.animate({r:e.r,start:e.start,end:e.end},
c.options.animation))}),c.animate=null)},updateTotals:function(){var a,e=0,f=this.points,b=f.length,t,h=this.options.ignoreHiddenPoint;for(a=0;a<b;a++)t=f[a],0>t.y&&(t.y=null),e+=h&&!t.visible?0:t.y;this.total=e;for(a=0;a<b;a++)t=f[a],t.percentage=0<e&&(t.visible||!h)?t.y/e*100:0,t.total=e},generatePoints:function(){q.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var c=0,f=this.options,b=f.slicedOffset,t=b+(f.borderWidth||0),h,l,p,x=f.startAngle||
0,k=this.startAngleRad=Math.PI/180*(x-90),x=(this.endAngleRad=Math.PI/180*(r(f.endAngle,x+360)-90))-k,n=this.points,d=f.dataLabels.distance,f=f.ignoreHiddenPoint,u,m=n.length,y;a||(this.center=a=this.getCenter());this.getX=function(b,c){p=Math.asin(Math.min((b-a[1])/(a[2]/2+d),1));return a[0]+(c?-1:1)*Math.cos(p)*(a[2]/2+d)};for(u=0;u<m;u++){y=n[u];h=k+c*x;if(!f||y.visible)c+=y.percentage/100;l=k+c*x;y.shapeType="arc";y.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*h)/1E3,end:Math.round(1E3*
l)/1E3};p=(l+h)/2;p>1.5*Math.PI?p-=2*Math.PI:p<-Math.PI/2&&(p+=2*Math.PI);y.slicedTranslation={translateX:Math.round(Math.cos(p)*b),translateY:Math.round(Math.sin(p)*b)};h=Math.cos(p)*a[2]/2;l=Math.sin(p)*a[2]/2;y.tooltipPos=[a[0]+.7*h,a[1]+.7*l];y.half=p<-Math.PI/2||p>Math.PI/2?1:0;y.angle=p;t=Math.min(t,d/5);y.labelPos=[a[0]+h+Math.cos(p)*d,a[1]+l+Math.sin(p)*d,a[0]+h+Math.cos(p)*t,a[1]+l+Math.sin(p)*t,a[0]+h,a[1]+l,0>d?"center":y.half?"right":"left",p]}},drawGraph:null,drawPoints:function(){var a=
this,e=a.chart.renderer,f,b,t,h,l=a.options.shadow;l&&!a.shadowGroup&&(a.shadowGroup=e.g("shadow").add(a.group));G(a.points,function(c){if(null!==c.y){b=c.graphic;h=c.shapeArgs;f=c.getTranslate();var p=c.shadowGroup;l&&!p&&(p=c.shadowGroup=e.g("shadow").add(a.shadowGroup));p&&p.attr(f);t=a.pointAttribs(c,c.selected&&"select");b?b.setRadialReference(a.center).attr(t).animate(H(h,f)):(c.graphic=b=e[c.shapeType](h).setRadialReference(a.center).attr(f).add(a.group),c.visible||b.attr({visibility:"hidden"}),
b.attr(t).attr({"stroke-linejoin":"round"}).shadow(l,p));b.addClass(c.getClassName())}})},searchPoint:l,sortByAngle:function(a,e){a.sort(function(a,b){return void 0!==a.angle&&(b.angle-a.angle)*e})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:a.CenteredSeriesMixin.getCenter,getSymbol:l},{init:function(){w.prototype.init.apply(this,arguments);var a=this,e;a.name=r(a.name,"Slice");e=function(c){a.slice("select"===c.type)};D(a,"select",e);D(a,"unselect",e);return a},setVisible:function(a,
e){var c=this,b=c.series,f=b.chart,h=b.options.ignoreHiddenPoint;e=r(e,h);a!==c.visible&&(c.visible=c.options.visible=a=void 0===a?!c.visible:a,b.options.data[v(c,b.data)]=c.options,G(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)}),c.legendItem&&f.legend.colorizeItem(c,a),a||"hover"!==c.state||c.setState(""),h&&(b.isDirty=!0),e&&f.redraw())},slice:function(a,e,l){var b=this.series;f(l,b.chart);r(e,!0);this.sliced=this.options.sliced=C(a)?a:!this.sliced;
b.options.data[v(this,b.data)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,c.y,c.r+a,c.r+a,{innerR:this.shapeArgs.r,start:c.start,end:c.end})}})})(K);(function(a){var D=a.addEvent,C=a.arrayMax,G=a.defined,H=a.each,
v=a.extend,l=a.format,r=a.map,w=a.merge,q=a.noop,n=a.pick,f=a.relativeLength,c=a.Series,e=a.seriesTypes,z=a.stableSort;a.distribute=function(a,c){function b(a,b){return a.target-b.target}var e,p=!0,f=a,k=[],l;l=0;for(e=a.length;e--;)l+=a[e].size;if(l>c){z(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(l=e=0;l<=c;)l+=a[e].size,e++;k=a.splice(e-1,a.length)}z(a,b);for(a=r(a,function(a){return{size:a.size,targets:[a.target]}});p;){for(e=a.length;e--;)p=a[e],l=(Math.min.apply(0,p.targets)+Math.max.apply(0,
p.targets))/2,p.pos=Math.min(Math.max(0,l-p.size/2),c-p.size);e=a.length;for(p=!1;e--;)0<e&&a[e-1].pos+a[e-1].size>a[e].pos&&(a[e-1].size+=a[e].size,a[e-1].targets=a[e-1].targets.concat(a[e].targets),a[e-1].pos+a[e-1].size>c&&(a[e-1].pos=c-a[e-1].size),a.splice(e,1),p=!0)}e=0;H(a,function(a){var b=0;H(a.targets,function(){f[e].pos=a.pos+b;b+=f[e].size;e++})});f.push.apply(f,k);z(f,b)};c.prototype.drawDataLabels=function(){var a=this,c=a.options,h=c.dataLabels,e=a.points,p,f,k=a.hasRendered||0,q,d,
u=n(h.defer,!0),m=a.chart.renderer;if(h.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(h),d=a.plotGroup("dataLabelsGroup","data-labels",u&&!k?"hidden":"visible",h.zIndex||6),u&&(d.attr({opacity:+k}),k||D(a,"afterAnimate",function(){a.visible&&d.show(!0);d[c.animation?"animate":"attr"]({opacity:1},{duration:200})})),f=h,H(e,function(b){var k,e=b.dataLabel,x,g,t,u=b.connector,y=!e,r;p=b.dlOptions||b.options&&b.options.dataLabels;if(k=n(p&&p.enabled,f.enabled)&&null!==b.y)for(g in h=
w(f,p),x=b.getLabelConfig(),q=h.format?l(h.format,x):h.formatter.call(x,h),r=h.style,t=h.rotation,r.color=n(h.color,r.color,a.color,"#000000"),"contrast"===r.color&&(b.contrastColor=m.getContrast(b.color||a.color),r.color=h.inside||0>h.distance||c.stacking?b.contrastColor:"#000000"),c.cursor&&(r.cursor=c.cursor),x={fill:h.backgroundColor,stroke:h.borderColor,"stroke-width":h.borderWidth,r:h.borderRadius||0,rotation:t,padding:h.padding,zIndex:1},x)void 0===x[g]&&delete x[g];!e||k&&G(q)?k&&G(q)&&(e?
x.text=q:(e=b.dataLabel=m[t?"text":"label"](q,0,-9999,h.shape,null,null,h.useHTML,null,"data-label"),e.addClass("highcharts-data-label-color-"+b.colorIndex+" "+(h.className||"")+(h.useHTML?"highcharts-tracker":""))),e.attr(x),e.css(r).shadow(h.shadow),e.added||e.add(d),a.alignDataLabel(b,e,h,null,y)):(b.dataLabel=e.destroy(),u&&(b.connector=u.destroy()))})};c.prototype.alignDataLabel=function(a,c,h,e,p){var b=this.chart,k=b.inverted,f=n(a.plotX,-9999),d=n(a.plotY,-9999),l=c.getBBox(),m,t=h.rotation,
q=h.align,E=this.visible&&(a.series.forceDL||b.isInsidePlot(f,Math.round(d),k)||e&&b.isInsidePlot(f,k?e.x+1:e.y+e.height-1,k)),r="justify"===n(h.overflow,"justify");E&&(m=h.style.fontSize,m=b.renderer.fontMetrics(m,c).b,e=v({x:k?b.plotWidth-d:f,y:Math.round(k?b.plotHeight-f:d),width:0,height:0},e),v(h,{width:l.width,height:l.height}),t?(r=!1,k=b.renderer.rotCorr(m,t),k={x:e.x+h.x+e.width/2+k.x,y:e.y+h.y+{top:0,middle:.5,bottom:1}[h.verticalAlign]*e.height},c[p?"attr":"animate"](k).attr({align:q}),
f=(t+720)%360,f=180<f&&360>f,"left"===q?k.y-=f?l.height:0:"center"===q?(k.x-=l.width/2,k.y-=l.height/2):"right"===q&&(k.x-=l.width,k.y-=f?0:l.height)):(c.align(h,null,e),k=c.alignAttr),r?a.isLabelJustified=this.justifyDataLabel(c,h,k,l,e,p):n(h.crop,!0)&&(E=b.isInsidePlot(k.x,k.y)&&b.isInsidePlot(k.x+l.width,k.y+l.height)),h.shape&&!t&&c.attr({anchorX:a.plotX,anchorY:a.plotY}));E||(c.attr({y:-9999}),c.placed=!1)};c.prototype.justifyDataLabel=function(a,c,e,f,p,l){var b=this.chart,h=c.align,d=c.verticalAlign,
x,m,t=a.box?0:a.padding||0;x=e.x+t;0>x&&("right"===h?c.align="left":c.x=-x,m=!0);x=e.x+f.width-t;x>b.plotWidth&&("left"===h?c.align="right":c.x=b.plotWidth-x,m=!0);x=e.y+t;0>x&&("bottom"===d?c.verticalAlign="top":c.y=-x,m=!0);x=e.y+f.height-t;x>b.plotHeight&&("top"===d?c.verticalAlign="bottom":c.y=b.plotHeight-x,m=!0);m&&(a.placed=!l,a.align(c,null,p));return m};e.pie&&(e.pie.prototype.drawDataLabels=function(){var b=this,e=b.data,h,f=b.chart,p=b.options.dataLabels,x=n(p.connectorPadding,10),k=n(p.connectorWidth,
1),l=f.plotWidth,d=f.plotHeight,u,m=p.distance,y=b.center,q=y[2]/2,E=y[1],z=0<m,g,v,w,D,M=[[],[]],G,A,Q,S,N=[0,0,0,0];b.visible&&(p.enabled||b._hasPointLabels)&&(H(e,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),c.prototype.drawDataLabels.apply(b),H(e,function(a){a.dataLabel&&a.visible&&(M[a.half].push(a),a.dataLabel._pos=null)}),H(M,function(c,k){var e,t,u=c.length,n,z,I;if(u)for(b.sortByAngle(c,
k-.5),0<m&&(e=Math.max(0,E-q-m),t=Math.min(E+q+m,f.plotHeight),n=r(c,function(a){if(a.dataLabel)return I=a.dataLabel.getBBox().height||21,{target:a.labelPos[1]-e+I/2,size:I,rank:a.y}}),a.distribute(n,t+I-e)),S=0;S<u;S++)h=c[S],w=h.labelPos,g=h.dataLabel,Q=!1===h.visible?"hidden":"inherit",z=w[1],n?void 0===n[S].pos?Q="hidden":(D=n[S].size,A=e+n[S].pos):A=z,G=p.justify?y[0]+(k?-1:1)*(q+m):b.getX(A<e+2||A>t-2?z:A,k),g._attr={visibility:Q,align:w[6]},g._pos={x:G+p.x+({left:x,right:-x}[w[6]]||0),y:A+
p.y-10},w.x=G,w.y=A,null===b.options.size&&(v=g.getBBox().width,z=null,G-v<x?(z=Math.round(v-G+x),N[3]=Math.max(z,N[3])):G+v>l-x&&(z=Math.round(G+v-l+x),N[1]=Math.max(z,N[1])),0>A-D/2?N[0]=Math.max(Math.round(-A+D/2),N[0]):A+D/2>d&&(N[2]=Math.max(Math.round(A+D/2-d),N[2])),g.sideOverflow=z)}),0===C(N)||this.verifyDataLabelOverflow(N))&&(this.placeDataLabels(),z&&k&&H(this.points,function(a){var c;u=a.connector;if((g=a.dataLabel)&&g._pos&&a.visible){Q=g._attr.visibility;if(c=!u)a.connector=u=f.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+
a.colorIndex).add(b.dataLabelsGroup),u.attr({"stroke-width":k,stroke:p.connectorColor||a.color||"#666666"});u[c?"attr":"animate"]({d:b.connectorPath(a.labelPos)});u.attr("visibility",Q)}else u&&(a.connector=u.destroy())}))},e.pie.prototype.connectorPath=function(a){var b=a.x,c=a.y;return n(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},e.pie.prototype.placeDataLabels=
function(){H(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999}))},this)},e.pie.prototype.alignDataLabel=q,e.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,e=c.center,p=c.minSize||80,l,k;null!==e[0]?l=Math.max(b[2]-Math.max(a[1],a[3]),
p):(l=Math.max(b[2]-a[1]-a[3],p),b[0]+=(a[3]-a[1])/2);null!==e[1]?l=Math.max(Math.min(l,b[2]-Math.max(a[0],a[2])),p):(l=Math.max(Math.min(l,b[2]-a[0]-a[2]),p),b[1]+=(a[0]-a[2])/2);l<b[2]?(b[2]=l,b[3]=Math.min(f(c.innerSize||0,l),l),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):k=!0;return k});e.column&&(e.column.prototype.alignDataLabel=function(a,e,h,f,p){var b=this.chart.inverted,k=a.series,l=a.dlBox||a.shapeArgs,d=n(a.below,a.plotY>n(this.translatedThreshold,k.yAxis.len)),u=n(h.inside,
!!this.options.stacking);l&&(f=w(l),0>f.y&&(f.height+=f.y,f.y=0),l=f.y+f.height-k.yAxis.len,0<l&&(f.height-=l),b&&(f={x:k.yAxis.len-f.y-f.height,y:k.xAxis.len-f.x-f.width,width:f.height,height:f.width}),u||(b?(f.x+=d?0:f.width,f.width=0):(f.y+=d?f.height:0,f.height=0)));h.align=n(h.align,!b||u?"center":d?"right":"left");h.verticalAlign=n(h.verticalAlign,b||u?"middle":d?"top":"bottom");c.prototype.alignDataLabel.call(this,a,e,h,f,p);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(K);
(function(a){var D=a.Chart,C=a.each,G=a.pick,H=a.addEvent;D.prototype.callbacks.push(function(a){function l(){var l=[];C(a.series||[],function(a){var q=a.options.dataLabels,n=a.dataLabelCollections||["dataLabel"];(q.enabled||a._hasPointLabels)&&!q.allowOverlap&&a.visible&&C(n,function(f){C(a.points,function(a){a[f]&&(a[f].labelrank=G(a.labelrank,a.shapeArgs&&a.shapeArgs.height),l.push(a[f]))})})});a.hideOverlappingLabels(l)}l();H(a,"redraw",l)});D.prototype.hideOverlappingLabels=function(a){var l=
a.length,r,w,q,n,f,c,e,z,b,t=function(a,b,c,e,k,f,d,l){return!(k>a+c||k+d<a||f>b+e||f+l<b)};for(w=0;w<l;w++)if(r=a[w])r.oldOpacity=r.opacity,r.newOpacity=1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(w=0;w<l;w++)for(q=a[w],r=w+1;r<l;++r)if(n=a[r],q&&n&&q!==n&&q.placed&&n.placed&&0!==q.newOpacity&&0!==n.newOpacity&&(f=q.alignAttr,c=n.alignAttr,e=q.parentGroup,z=n.parentGroup,b=2*(q.box?0:q.padding),f=t(f.x+e.translateX,f.y+e.translateY,q.width-b,q.height-b,c.x+z.translateX,c.y+
z.translateY,n.width-b,n.height-b)))(q.labelrank<n.labelrank?q:n).newOpacity=0;C(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(K);(function(a){var D=a.addEvent,C=a.Chart,G=a.createElement,H=a.css,v=a.defaultOptions,l=a.defaultPlotOptions,r=a.each,w=a.extend,q=a.fireEvent,n=a.hasTouch,f=a.inArray,c=a.isObject,e=a.Legend,z=a.merge,b=a.pick,t=a.Point,h=a.Series,
B=a.seriesTypes,p=a.svg;a=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);if(void 0!==c)c.onMouseOver(a)};r(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(r(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(n)a[d].on("touchstart",
c);a.options.cursor&&a[d].css(H).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,m=a.chart,h=m.pointer,f=m.renderer,l=m.options.tooltip.snap,t=a.tracker,g,q=function(){if(m.hoverSeries!==a)a.onMouseOver()},z="rgba(192,192,192,"+(p?.0001:.002)+")";if(e&&!c)for(g=e+1;g--;)"M"===d[g]&&d.splice(g+1,0,d[g+1]-l,d[g+2],"L"),(g&&"M"===d[g]||g===e)&&d.splice(g,0,"L",d[g-2]+l,d[g-1]);t?
t.attr({d:d}):a.graph&&(a.tracker=f.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:z,fill:c?z:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*l),zIndex:2}).add(a.group),r([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",q).on("mouseout",function(a){h.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(n)a.on("touchstart",q)}))}};B.column&&(B.column.prototype.drawTracker=a.drawTrackerPoint);B.pie&&(B.pie.prototype.drawTracker=
a.drawTrackerPoint);B.scatter&&(B.scatter.prototype.drawTracker=a.drawTrackerPoint);w(e.prototype,{setItemEvents:function(a,b,c){var d=this,k=d.chart.renderer.boxWrapper,e="highcharts-legend-"+(a.series?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");k.addClass(e);b.css(d.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d.itemStyle:d.itemHiddenStyle);k.removeClass(e);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&
a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):q(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=G("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);D(a.checkbox,"click",function(b){q(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});v.legend.itemStyle.cursor="pointer";w(C.prototype,{showResetZoom:function(){var a=
this,b=v.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,m="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,m)},zoomOut:function(){var a=this;q(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var k,e=this.pointer,d=!1,h;!a||a.resetSelection?r(this.axes,function(a){k=
a.zoom()}):r(a.xAxis.concat(a.yAxis),function(a){var b=a.axis;e[b.isXAxis?"zoomX":"zoomY"]&&(k=b.zoom(a.min,a.max),b.displayBtn&&(d=!0))});h=this.resetZoomButton;d&&!h?this.showResetZoom():!d&&c(h)&&(this.resetZoomButton=h.destroy());k&&this.redraw(b(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,k;d&&r(d,function(a){a.setState()});r("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,e=a[d?"chartX":"chartY"],d=d?
"mouseDownX":"mouseDownY",m=c[d],h=(b.pointRange||0)/2,g=b.getExtremes(),f=b.toValue(m-e,!0)+h,h=b.toValue(m+b.len-e,!0)-h,p=h<f,m=p?h:f,f=p?f:h,p=b.toValue(b.toPixels(g.min)-b.minPixelPadding),h=b.toValue(b.toPixels(g.max)+b.minPixelPadding),p=Math.min(g.dataMin,p)-m,g=f-Math.max(g.dataMax,h);b.series.length&&0>p&&0>g&&(b.setExtremes(m,f,!1,!1,{trigger:"pan"}),k=!0);c[d]=e});k&&c.redraw(!1);H(c.container,{cursor:"move"})}});w(t.prototype,{select:function(a,c){var k=this,d=k.series,e=d.chart;a=b(a,
!k.selected);k.firePointEvent(a?"select":"unselect",{accumulate:c},function(){k.selected=k.options.selected=a;d.options.data[f(k,d.data)]=k.options;k.setState(a&&"select");c||r(e.getSelectedPoints(),function(a){a.selected&&a!==k&&(a.selected=a.options.selected=!1,d.options.data[f(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart.pointer;this.firePointEvent("mouseOver");b.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;
this.firePointEvent("mouseOut");r(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=z(this.series.options.point,this.options).events,b;this.events=a;for(b in a)D(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,c){var k=Math.floor(this.plotX),d=this.plotY,e=this.series,h=e.options.states[a]||{},f=l[e.type].marker&&e.options.marker,p=f&&!1===f.enabled,t=f&&f.states&&f.states[a]||{},n=!1===t.enabled,g=
e.stateMarkerGraphic,x=this.marker||{},q=e.chart,r=e.halo,z,v=f&&e.markerAttribs;a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===h.enabled||a&&(n||p&&!1===t.enabled)||a&&x.states&&x.states[a]&&!1===x.states[a].enabled)){v&&(z=e.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.attr(e.pointAttribs(this,a)),z&&this.graphic.animate(z,b(q.options.chart.animation,t.animation,
f.animation)),g&&g.hide();else{if(a&&t){f=x.symbol||e.symbol;g&&g.currentSymbol!==f&&(g=g.destroy());if(g)g[c?"animate":"attr"]({x:z.x,y:z.y});else f&&(e.stateMarkerGraphic=g=q.renderer.symbol(f,z.x,z.y,z.width,z.height).add(e.markerGroup),g.currentSymbol=f);g&&g.attr(e.pointAttribs(this,a))}g&&(g[a&&q.isInsidePlot(k,d,q.inverted)?"show":"hide"](),g.element.point=this)}(k=h.halo)&&k.size?(r||(e.halo=r=q.renderer.path().add(v?e.markerGroup:e.group)),r[c?"animate":"attr"]({d:this.haloPath(k.size)}),
r.attr({"class":"highcharts-halo highcharts-color-"+b(this.colorIndex,e.colorIndex)}),r.point=this,r.attr(w({fill:this.color||e.color,"fill-opacity":k.opacity,zIndex:-1},k.attributes))):r&&r.point&&r.point.haloPath&&r.animate({d:r.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});w(h.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&
q(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&q(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var c=this,e=c.options,d=c.graph,h=e.states,m=e.lineWidth,e=0;a=a||"";if(c.state!==a&&(r([c.group,c.markerGroup,c.dataLabelsGroup],function(b){b&&(c.state&&b.removeClass("highcharts-series-"+
c.state),a&&b.addClass("highcharts-series-"+a))}),c.state=a,!h[a]||!1!==h[a].enabled)&&(a&&(m=h[a].lineWidth||m+(h[a].lineWidthPlus||0)),d&&!d.dashstyle))for(m={"stroke-width":m},d.animate(m,b(c.chart.options.chart.animation,h[a]&&h[a].animation));c["zone-graph-"+e];)c["zone-graph-"+e].attr(m),e+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,k,h=d.options.chart.ignoreHiddenSeries,f=c.visible;k=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!f:a)?"show":"hide";r(["group",
"dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][k]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&r(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});r(c.linkedSeries,function(b){b.setVisible(a,!1)});h&&(d.isDirtyBox=!0);!1!==b&&d.redraw();q(c,k)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===
a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);q(this,a?"select":"unselect")},drawTracker:a.drawTrackerGraph})})(K);(function(a){var D=a.Chart,C=a.each,G=a.inArray,H=a.isArray,v=a.isObject,l=a.pick,r=a.splat;D.prototype.setResponsive=function(l){var q=this.options.responsive,n=[],f=this.currentResponsive;q&&q.rules&&C(q.rules,function(c){void 0===c._id&&(c._id=a.uniqueKey());this.matchResponsiveRule(c,n,l)},this);var c=a.merge.apply(0,a.map(n,function(c){return a.find(q.rules,function(a){return a._id===
c}).chartOptions})),n=n.toString()||void 0;n!==(f&&f.ruleIds)&&(f&&this.update(f.undoOptions,l),n?(this.currentResponsive={ruleIds:n,mergedOptions:c,undoOptions:this.currentOptions(c)},this.update(c,l)):this.currentResponsive=void 0)};D.prototype.matchResponsiveRule=function(a,q){var n=a.condition;(n.callback||function(){return this.chartWidth<=l(n.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=l(n.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=l(n.minWidth,0)&&this.chartHeight>=l(n.minHeight,0)}).call(this)&&
q.push(a._id)};D.prototype.currentOptions=function(a){function l(a,c,e,n){var b,f;for(b in a)if(!n&&-1<G(b,["series","xAxis","yAxis"]))for(a[b]=r(a[b]),e[b]=[],f=0;f<a[b].length;f++)c[b][f]&&(e[b][f]={},l(a[b][f],c[b][f],e[b][f],n+1));else v(a[b])?(e[b]=H(a[b])?[]:{},l(a[b],c[b]||{},e[b],n+1)):e[b]=c[b]||null}var n={};l(a,this.options,n,0);return n}})(K);(function(a){var D=a.addEvent,C=a.Axis,G=a.Chart,H=a.css,v=a.dateFormat,l=a.defined,r=a.each,w=a.extend,q=a.noop,n=a.Series,f=a.timeUnits;a=a.wrap;
a(n.prototype,"init",function(a){var c;a.apply(this,Array.prototype.slice.call(arguments,1));(c=this.xAxis)&&c.options.ordinal&&D(this,"updatedData",function(){delete c.ordinalIndex})});a(C.prototype,"getTimeTicks",function(a,e,n,b,t,h,q,p){var c=0,k,r,d={},u,m,y,z=[],E=-Number.MAX_VALUE,w=this.options.tickPixelInterval;if(!this.options.ordinal&&!this.options.breaks||!h||3>h.length||void 0===n)return a.call(this,e,n,b,t);m=h.length;for(k=0;k<m;k++){y=k&&h[k-1]>b;h[k]<n&&(c=k);if(k===m-1||h[k+1]-h[k]>
5*q||y){if(h[k]>E){for(r=a.call(this,e,h[c],h[k],t);r.length&&r[0]<=E;)r.shift();r.length&&(E=r[r.length-1]);z=z.concat(r)}c=k+1}if(y)break}a=r.info;if(p&&a.unitRange<=f.hour){k=z.length-1;for(c=1;c<k;c++)v("%d",z[c])!==v("%d",z[c-1])&&(d[z[c]]="day",u=!0);u&&(d[z[0]]="day");a.higherRanks=d}z.info=a;if(p&&l(w)){p=a=z.length;k=[];var g;for(u=[];p--;)c=this.translate(z[p]),g&&(u[p]=g-c),k[p]=g=c;u.sort();u=u[Math.floor(u.length/2)];u<.6*w&&(u=null);p=z[a-1]>b?a-1:a;for(g=void 0;p--;)c=k[p],b=Math.abs(g-
c),g&&b<.8*w&&(null===u||b<.8*u)?(d[z[p]]&&!d[z[p+1]]?(b=p+1,g=c):b=p,z.splice(b,1)):g=c}return z});w(C.prototype,{beforeSetTickPositions:function(){var a,e=[],f=!1,b,l=this.getExtremes(),h=l.min,n=l.max,p,x=this.isXAxis&&!!this.options.breaks,l=this.options.ordinal,k=this.chart.options.chart.ignoreHiddenSeries;if(l||x){r(this.series,function(b,c){if(!(k&&!1===b.visible||!1===b.takeOrdinalPosition&&!x)&&(e=e.concat(b.processedXData),a=e.length,e.sort(function(a,b){return a-b}),a))for(c=a-1;c--;)e[c]===
e[c+1]&&e.splice(c,1)});a=e.length;if(2<a){b=e[1]-e[0];for(p=a-1;p--&&!f;)e[p+1]-e[p]!==b&&(f=!0);!this.options.keepOrdinalPadding&&(e[0]-h>b||n-e[e.length-1]>b)&&(f=!0)}f?(this.ordinalPositions=e,b=this.ordinal2lin(Math.max(h,e[0]),!0),p=Math.max(this.ordinal2lin(Math.min(n,e[e.length-1]),!0),1),this.ordinalSlope=n=(n-h)/(p-b),this.ordinalOffset=h-b*n):this.ordinalPositions=this.ordinalSlope=this.ordinalOffset=void 0}this.isOrdinal=l&&f;this.groupIntervalFactor=null},val2lin:function(a,e){var c=
this.ordinalPositions;if(c){var b=c.length,f,h;for(f=b;f--;)if(c[f]===a){h=f;break}for(f=b-1;f--;)if(a>c[f]||0===f){a=(a-c[f])/(c[f+1]-c[f]);h=f+a;break}e=e?h:this.ordinalSlope*(h||0)+this.ordinalOffset}else e=a;return e},lin2val:function(a,e){var c=this.ordinalPositions;if(c){var b=this.ordinalSlope,f=this.ordinalOffset,h=c.length-1,l;if(e)0>a?a=c[0]:a>h?a=c[h]:(h=Math.floor(a),l=a-h);else for(;h--;)if(e=b*h+f,a>=e){b=b*(h+1)+f;l=(a-e)/(b-e);break}return void 0!==l&&void 0!==c[h]?c[h]+(l?l*(c[h+
1]-c[h]):0):a}return a},getExtendedPositions:function(){var a=this.chart,e=this.series[0].currentDataGrouping,f=this.ordinalIndex,b=e?e.count+e.unitName:"raw",l=this.getExtremes(),h,n;f||(f=this.ordinalIndex={});f[b]||(h={series:[],chart:a,getExtremes:function(){return{min:l.dataMin,max:l.dataMax}},options:{ordinal:!0},val2lin:C.prototype.val2lin,ordinal2lin:C.prototype.ordinal2lin},r(this.series,function(b){n={xAxis:h,xData:b.xData,chart:a,destroyGroupedData:q};n.options={dataGrouping:e?{enabled:!0,
forced:!0,approximation:"open",units:[[e.unitName,[e.count]]]}:{enabled:!1}};b.processData.apply(n);h.series.push(n)}),this.beforeSetTickPositions.apply(h),f[b]=h.ordinalPositions);return f[b]},getGroupIntervalFactor:function(a,e,f){var b;f=f.processedXData;var c=f.length,h=[];b=this.groupIntervalFactor;if(!b){for(b=0;b<c-1;b++)h[b]=f[b+1]-f[b];h.sort(function(a,b){return a-b});h=h[Math.floor(c/2)];a=Math.max(a,f[0]);e=Math.min(e,f[c-1]);this.groupIntervalFactor=b=c*h/(e-a)}return b},postProcessTickInterval:function(a){var c=
this.ordinalSlope;return c?this.options.breaks?this.closestPointRange:a/(c/this.closestPointRange):a}});C.prototype.ordinal2lin=C.prototype.val2lin;a(G.prototype,"pan",function(a,e){var c=this.xAxis[0],b=e.chartX,f=!1;if(c.options.ordinal&&c.series.length){var h=this.mouseDownX,l=c.getExtremes(),p=l.dataMax,n=l.min,k=l.max,q=this.hoverPoints,d=c.closestPointRange,h=(h-b)/(c.translationSlope*(c.ordinalSlope||d)),u={ordinalPositions:c.getExtendedPositions()},d=c.lin2val,m=c.val2lin,y;u.ordinalPositions?
1<Math.abs(h)&&(q&&r(q,function(a){a.setState()}),0>h?(q=u,y=c.ordinalPositions?c:u):(q=c.ordinalPositions?c:u,y=u),u=y.ordinalPositions,p>u[u.length-1]&&u.push(p),this.fixedRange=k-n,h=c.toFixedRange(null,null,d.apply(q,[m.apply(q,[n,!0])+h,!0]),d.apply(y,[m.apply(y,[k,!0])+h,!0])),h.min>=Math.min(l.dataMin,n)&&h.max<=Math.max(p,k)&&c.setExtremes(h.min,h.max,!0,!1,{trigger:"pan"}),this.mouseDownX=b,H(this.container,{cursor:"move"})):f=!0}else f=!0;f&&a.apply(this,Array.prototype.slice.call(arguments,
1))});n.prototype.gappedPath=function(){var a=this.options.gapSize,e=this.points.slice(),f=e.length-1;if(a&&0<f)for(;f--;)e[f+1].x-e[f].x>this.closestPointRange*a&&e.splice(f+1,0,{isNull:!0});return this.getGraphPath(e)}})(K);(function(a){function D(){return Array.prototype.slice.call(arguments,1)}function C(a){a.apply(this);this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,G(this.pointArrayMap,["y"]))}var G=a.pick,H=a.wrap,v=a.each,l=a.extend,r=a.isArray,w=a.fireEvent,q=a.Axis,n=a.Series;
l(q.prototype,{isInBreak:function(a,c){var e=a.repeat||Infinity,f=a.from,b=a.to-a.from;c=c>=f?(c-f)%e:e-(f-c)%e;return a.inclusive?c<=b:c<b&&0!==c},isInAnyBreak:function(a,c){var e=this.options.breaks,f=e&&e.length,b,l,h;if(f){for(;f--;)this.isInBreak(e[f],a)&&(b=!0,l||(l=G(e[f].showPoints,this.isXAxis?!1:!0)));h=b&&c?b&&!l:b}return h}});H(q.prototype,"setTickPositions",function(a){a.apply(this,Array.prototype.slice.call(arguments,1));if(this.options.breaks){var c=this.tickPositions,e=this.tickPositions.info,
f=[],b;for(b=0;b<c.length;b++)this.isInAnyBreak(c[b])||f.push(c[b]);this.tickPositions=f;this.tickPositions.info=e}});H(q.prototype,"init",function(a,c,e){var f=this;e.breaks&&e.breaks.length&&(e.ordinal=!1);a.call(this,c,e);a=this.options.breaks;f.isBroken=r(a)&&!!a.length;f.isBroken&&(f.val2lin=function(a){var b=a,c,e;for(e=0;e<f.breakArray.length;e++)if(c=f.breakArray[e],c.to<=a)b-=c.len;else if(c.from>=a)break;else if(f.isInBreak(c,a)){b-=a-c.from;break}return b},f.lin2val=function(a){var b,c;
for(c=0;c<f.breakArray.length&&!(b=f.breakArray[c],b.from>=a);c++)b.to<a?a+=b.len:f.isInBreak(b,a)&&(a+=b.len);return a},f.setExtremes=function(a,c,e,f,p){for(;this.isInAnyBreak(a);)a-=this.closestPointRange;for(;this.isInAnyBreak(c);)c-=this.closestPointRange;q.prototype.setExtremes.call(this,a,c,e,f,p)},f.setAxisTranslation=function(a){q.prototype.setAxisTranslation.call(this,a);var b=f.options.breaks;a=[];var c=[],e=0,p,l,k=f.userMin||f.min,n=f.userMax||f.max,d=G(f.pointRangePadding,0),u,m;for(m in b)l=
b[m],p=l.repeat||Infinity,f.isInBreak(l,k)&&(k+=l.to%p-k%p),f.isInBreak(l,n)&&(n-=n%p-l.from%p);for(m in b){l=b[m];u=l.from;for(p=l.repeat||Infinity;u-p>k;)u-=p;for(;u<k;)u+=p;for(;u<n;u+=p)a.push({value:u,move:"in"}),a.push({value:u+(l.to-l.from),move:"out",size:l.breakSize})}a.sort(function(a,b){return a.value===b.value?("in"===a.move?0:1)-("in"===b.move?0:1):a.value-b.value});b=0;u=k;for(m in a)l=a[m],b+="in"===l.move?1:-1,1===b&&"in"===l.move&&(u=l.value),0===b&&(c.push({from:u,to:l.value,len:l.value-
u-(l.size||0)}),e+=l.value-u-(l.size||0));f.breakArray=c;f.unitLength=n-k-e+d;w(f,"afterBreaks");f.transA=f.options.staticScale?f.options.staticScale:(n-f.min+d)/f.unitLength*f.transA;d&&(f.minPixelPadding=f.transA*f.minPointOffset);f.min=k;f.max=n})});H(n.prototype,"generatePoints",function(a){a.apply(this,D(arguments));var c=this.xAxis,e=this.yAxis,f=this.points,b,l=f.length,h=this.options.connectNulls,n;if(c&&e&&(c.options.breaks||e.options.breaks))for(;l--;)b=f[l],n=null===b.y&&!1===h,n||!c.isInAnyBreak(b.x,
!0)&&!e.isInAnyBreak(b.y,!0)||(f.splice(l,1),this.data[l]&&this.data[l].destroyElements())});a.Series.prototype.drawBreaks=function(a,c){var e=this,f=e.points,b,l,h,n;a&&v(c,function(c){b=a.breakArray||[];l=a.isXAxis?a.min:G(e.options.threshold,a.min);v(f,function(e){n=G(e["stack"+c.toUpperCase()],e[c]);v(b,function(b){h=!1;if(l<b.from&&n>b.to||l>b.from&&n<b.from)h="pointBreak";else if(l<b.from&&n>b.from&&n<b.to||l>b.from&&n>b.to&&n<b.from)h="pointInBreak";h&&w(a,h,{point:e,brk:b})})})})};H(a.seriesTypes.column.prototype,
"drawPoints",C);H(a.Series.prototype,"drawPoints",C)})(K);(function(a){var D=a.arrayMax,C=a.arrayMin,G=a.Axis,H=a.defaultPlotOptions,v=a.defined,l=a.each,r=a.extend,w=a.format,q=a.isNumber,n=a.merge,f=a.pick,c=a.Point,e=a.Tooltip,z=a.wrap,b=a.Series.prototype,t=b.processData,h=b.generatePoints,B=b.destroy,p={approximation:"average",groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S",
"-%H:%M:%S"],minute:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},x={line:{},spline:{},area:{},areaspline:{},column:{approximation:"sum",groupPixelWidth:10},arearange:{approximation:"range"},areasplinerange:{approximation:"range"},columnrange:{approximation:"range",groupPixelWidth:10},
candlestick:{approximation:"ohlc",groupPixelWidth:10},ohlc:{approximation:"ohlc",groupPixelWidth:5}},k=a.defaultDataGroupingUnits=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",null]],F={sum:function(a){var b=a.length,c;if(!b&&a.hasNulls)c=null;else if(b)for(c=0;b--;)c+=a[b];return c},average:function(a){var b=a.length;a=F.sum(a);q(a)&&b&&(a/=b);return a},open:function(a){return a.length?
a[0]:a.hasNulls?null:void 0},high:function(a){return a.length?D(a):a.hasNulls?null:void 0},low:function(a){return a.length?C(a):a.hasNulls?null:void 0},close:function(a){return a.length?a[a.length-1]:a.hasNulls?null:void 0},ohlc:function(a,b,c,e){a=F.open(a);b=F.high(b);c=F.low(c);e=F.close(e);if(q(a)||q(b)||q(c)||q(e))return[a,b,c,e]},range:function(a,b){a=F.low(a);b=F.high(b);if(q(a)||q(b))return[a,b]}};b.groupData=function(a,b,c,e){var d=this.data,k=this.options.data,f=[],g=[],h=[],m=a.length,
p,l,n=!!b,u=[[],[],[],[]];e="function"===typeof e?e:F[e];var t=this.pointArrayMap,x=t&&t.length,r,y=0;for(r=l=0;r<=m&&!(a[r]>=c[0]);r++);for(r;r<=m;r++){for(;(void 0!==c[y+1]&&a[r]>=c[y+1]||r===m)&&(p=c[y],this.dataGroupInfo={start:l,length:u[0].length},l=e.apply(this,u),void 0!==l&&(f.push(p),g.push(l),h.push(this.dataGroupInfo)),l=r,u[0]=[],u[1]=[],u[2]=[],u[3]=[],y+=1,r!==m););if(r===m)break;if(t){p=this.cropStart+r;p=d&&d[p]||this.pointClass.prototype.applyOptions.apply({series:this},[k[p]]);
var v,w;for(v=0;v<x;v++)w=p[t[v]],q(w)?u[v].push(w):null===w&&(u[v].hasNulls=!0)}else p=n?b[r]:null,q(p)?u[0].push(p):null===p&&(u[0].hasNulls=!0)}return[f,g,h]};b.processData=function(){var a=this.chart,c=this.options.dataGrouping,e=!1!==this.allowDG&&c&&f(c.enabled,a.options.isStock),h=this.visible||!a.options.chart.ignoreHiddenSeries,p;this.forceCrop=e;this.groupPixelWidth=null;this.hasProcessed=!0;if(!1!==t.apply(this,arguments)&&e){this.destroyGroupedData();var l=this.processedXData,n=this.processedYData,
g=a.plotSizeX,a=this.xAxis,q=a.options.ordinal,r=this.groupPixelWidth=a.getGroupPixelWidth&&a.getGroupPixelWidth();if(r){this.isDirty=p=!0;var x=a.getExtremes(),e=x.min,x=x.max,q=q&&a.getGroupIntervalFactor(e,x,this)||1,g=r*(x-e)/g*q,r=a.getTimeTicks(a.normalizeTimeTickInterval(g,c.units||k),Math.min(e,l[0]),Math.max(x,l[l.length-1]),a.options.startOfWeek,l,this.closestPointRange),l=b.groupData.apply(this,[l,n,r,c.approximation]),n=l[0],q=l[1];if(c.smoothed){c=n.length-1;for(n[c]=Math.min(n[c],x);c--&&
0<c;)n[c]+=g/2;n[0]=Math.max(n[0],e)}this.currentDataGrouping=r.info;this.closestPointRange=r.info.totalRange;this.groupMap=l[2];v(n[0])&&n[0]<a.dataMin&&h&&(a.min===a.dataMin&&(a.min=n[0]),a.dataMin=n[0]);this.processedXData=n;this.processedYData=q}else this.currentDataGrouping=this.groupMap=null;this.hasGroupedData=p}};b.destroyGroupedData=function(){var a=this.groupedData;l(a||[],function(b,c){b&&(a[c]=b.destroy?b.destroy():null)});this.groupedData=null};b.generatePoints=function(){h.apply(this);
this.destroyGroupedData();this.groupedData=this.hasGroupedData?this.points:null};z(c.prototype,"update",function(b){this.dataGroup?a.error(24):b.apply(this,[].slice.call(arguments,1))});z(e.prototype,"tooltipFooterHeaderFormatter",function(b,c,e){var d=c.series,k=d.tooltipOptions,f=d.options.dataGrouping,h=k.xDateFormat,g,m=d.xAxis,l=a.dateFormat;return m&&"datetime"===m.options.type&&f&&q(c.key)?(b=d.currentDataGrouping,f=f.dateTimeLabelFormats,b?(m=f[b.unitName],1===b.count?h=m[0]:(h=m[1],g=m[2])):
!h&&f&&(h=this.getXDateFormat(c,k,m)),h=l(h,c.key),g&&(h+=l(g,c.key+b.totalRange-1)),w(k[(e?"footer":"header")+"Format"],{point:r(c.point,{key:h}),series:d})):b.call(this,c,e)});b.destroy=function(){for(var a=this.groupedData||[],b=a.length;b--;)a[b]&&a[b].destroy();B.apply(this)};z(b,"setOptions",function(a,b){a=a.call(this,b);var c=this.type,d=this.chart.options.plotOptions,e=H[c].dataGrouping;x[c]&&(e||(e=n(p,x[c])),a.dataGrouping=n(e,d.series&&d.series.dataGrouping,d[c].dataGrouping,b.dataGrouping));
this.chart.options.isStock&&(this.requireSorting=!0);return a});z(G.prototype,"setScale",function(a){a.call(this);l(this.series,function(a){a.hasProcessed=!1})});G.prototype.getGroupPixelWidth=function(){var a=this.series,b=a.length,c,e=0,k=!1,h;for(c=b;c--;)(h=a[c].options.dataGrouping)&&(e=Math.max(e,h.groupPixelWidth));for(c=b;c--;)(h=a[c].options.dataGrouping)&&a[c].hasProcessed&&(b=(a[c].processedXData||a[c].data).length,a[c].groupPixelWidth||b>this.chart.plotSizeX/e||b&&h.forced)&&(k=!0);return k?
e:0};G.prototype.setDataGrouping=function(a,b){var c;b=f(b,!0);a||(a={forced:!1,units:null});if(this instanceof G)for(c=this.series.length;c--;)this.series[c].update({dataGrouping:a},!1);else l(this.chart.options.series,function(b){b.dataGrouping=a},!1);b&&this.chart.redraw()}})(K);(function(a){var D=a.each,C=a.Point,G=a.seriesType,H=a.seriesTypes;G("ohlc","column",{lineWidth:1,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eOpen: {point.open}\x3cbr/\x3eHigh: {point.high}\x3cbr/\x3eLow: {point.low}\x3cbr/\x3eClose: {point.close}\x3cbr/\x3e'},
threshold:null,states:{hover:{lineWidth:3}},stickyTracking:!0},{directTouch:!1,pointArrayMap:["open","high","low","close"],toYData:function(a){return[a.open,a.high,a.low,a.close]},pointValKey:"high",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},pointAttribs:function(a,l){l=H.column.prototype.pointAttribs.call(this,a,l);var r=this.options;delete l.fill;!a.options.color&&r.upColor&&a.open<a.close&&(l.stroke=r.upColor);return l},translate:function(){var a=this,l=a.yAxis,r=!!a.modifyValue,
w=["plotOpen","plotHigh","plotLow","plotClose","yBottom"];H.column.prototype.translate.apply(a);D(a.points,function(q){D([q.open,q.high,q.low,q.close,q.low],function(n,f){null!==n&&(r&&(n=a.modifyValue(n)),q[w[f]]=l.toPixels(n,!0))})})},drawPoints:function(){var a=this,l=a.chart;D(a.points,function(r){var w,q,n,f,c=r.graphic,e,v=!c;void 0!==r.plotY&&(c||(r.graphic=c=l.renderer.path().add(a.group)),c.attr(a.pointAttribs(r,r.selected&&"select")),q=c.strokeWidth()%2/2,e=Math.round(r.plotX)-q,n=Math.round(r.shapeArgs.width/
2),f=["M",e,Math.round(r.yBottom),"L",e,Math.round(r.plotY)],null!==r.open&&(w=Math.round(r.plotOpen)+q,f.push("M",e,w,"L",e-n,w)),null!==r.close&&(w=Math.round(r.plotClose)+q,f.push("M",e,w,"L",e+n,w)),c[v?"attr":"animate"]({d:f}).addClass(r.getClassName(),!0))})},animate:null},{getClassName:function(){return C.prototype.getClassName.call(this)+(this.open<this.close?" highcharts-point-up":" highcharts-point-down")}})})(K);(function(a){var D=a.defaultPlotOptions,C=a.each,G=a.merge,H=a.seriesType,
v=a.seriesTypes;H("candlestick","ohlc",G(D.column,{states:{hover:{lineWidth:2}},tooltip:D.ohlc.tooltip,threshold:null,lineColor:"#000000",lineWidth:1,upColor:"#ffffff",stickyTracking:!0}),{pointAttribs:function(a,r){var l=v.column.prototype.pointAttribs.call(this,a,r),q=this.options,n=a.open<a.close,f=q.lineColor||this.color;l["stroke-width"]=q.lineWidth;l.fill=a.options.color||(n?q.upColor||this.color:this.color);l.stroke=a.lineColor||(n?q.upLineColor||f:f);r&&(a=q.states[r],l.fill=a.color||l.fill,
l.stroke=a.lineColor||l.stroke,l["stroke-width"]=a.lineWidth||l["stroke-width"]);return l},drawPoints:function(){var a=this,r=a.chart;C(a.points,function(l){var q=l.graphic,n,f,c,e,v,b,t,h=!q;void 0!==l.plotY&&(q||(l.graphic=q=r.renderer.path().add(a.group)),q.attr(a.pointAttribs(l,l.selected&&"select")).shadow(a.options.shadow),v=q.strokeWidth()%2/2,b=Math.round(l.plotX)-v,n=l.plotOpen,f=l.plotClose,c=Math.min(n,f),n=Math.max(n,f),t=Math.round(l.shapeArgs.width/2),f=Math.round(c)!==Math.round(l.plotY),
e=n!==l.yBottom,c=Math.round(c)+v,n=Math.round(n)+v,v=[],v.push("M",b-t,n,"L",b-t,c,"L",b+t,c,"L",b+t,n,"Z","M",b,c,"L",b,f?Math.round(l.plotY):c,"M",b,n,"L",b,e?Math.round(l.yBottom):n),q[h?"attr":"animate"]({d:v}).addClass(l.getClassName(),!0))})}})})(K);(function(a){var D=a.addEvent,C=a.each,G=a.merge,H=a.noop,v=a.Renderer,l=a.seriesType,r=a.seriesTypes,w=a.TrackerMixin,q=a.VMLRenderer,n=a.SVGRenderer.prototype.symbols,f=a.stableSort;l("flags","column",{pointRange:0,shape:"flag",stackDistance:12,
textAlign:"center",tooltip:{pointFormat:"{point.text}\x3cbr/\x3e"},threshold:null,y:-30,fillColor:"#ffffff",lineWidth:1,states:{hover:{lineColor:"#000000",fillColor:"#ccd6eb"}},style:{fontSize:"11px",fontWeight:"bold"}},{sorted:!1,noSharedTooltip:!0,allowDG:!1,takeOrdinalPosition:!1,trackerGroups:["markerGroup"],forceCrop:!0,init:a.Series.prototype.init,pointAttribs:function(a,e){var c=this.options,b=a&&a.color||this.color,f=c.lineColor,h=a&&a.lineWidth;a=a&&a.fillColor||c.fillColor;e&&(a=c.states[e].fillColor,
f=c.states[e].lineColor,h=c.states[e].lineWidth);return{fill:a||b,stroke:f||b,"stroke-width":h||c.lineWidth||0}},translate:function(){r.column.prototype.translate.apply(this);var a=this.options,e=this.chart,l=this.points,b=l.length-1,n,h,q=a.onSeries;n=q&&e.get(q);var a=a.onKey||"y",q=n&&n.options.step,p=n&&n.points,x=p&&p.length,k=this.xAxis,v=this.yAxis,d=k.getExtremes(),u=0,m,y,w;if(n&&n.visible&&x)for(u=(n.pointXOffset||0)+(n.barW||0)/2,n=n.currentDataGrouping,y=p[x-1].x+(n?n.totalRange:0),f(l,
function(a,b){return a.x-b.x}),a="plot"+a[0].toUpperCase()+a.substr(1);x--&&l[b]&&!(n=l[b],m=p[x],m.x<=n.x&&void 0!==m[a]&&(n.x<=y&&(n.plotY=m[a],m.x<n.x&&!q&&(w=p[x+1])&&void 0!==w[a]&&(n.plotY+=(n.x-m.x)/(w.x-m.x)*(w[a]-m[a]))),b--,x++,0>b)););C(l,function(a,b){var c;void 0===a.plotY&&(a.x>=d.min&&a.x<=d.max?a.plotY=e.chartHeight-k.bottom-(k.opposite?k.height:0)+k.offset-v.top:a.shapeArgs={});a.plotX+=u;(h=l[b-1])&&h.plotX===a.plotX&&(void 0===h.stackIndex&&(h.stackIndex=0),c=h.stackIndex+1);a.stackIndex=
c})},drawPoints:function(){var c=this.points,e=this.chart,f=e.renderer,b,l,h=this.options,n=h.y,p,q,k,r,d,u,m,y=this.yAxis;for(q=c.length;q--;)k=c[q],m=k.plotX>this.xAxis.len,b=k.plotX,r=k.stackIndex,p=k.options.shape||h.shape,l=k.plotY,void 0!==l&&(l=k.plotY+n-(void 0!==r&&r*h.stackDistance)),d=r?void 0:k.plotX,u=r?void 0:k.plotY,r=k.graphic,void 0!==l&&0<=b&&!m?(r||(r=k.graphic=f.label("",null,null,p,null,null,h.useHTML).attr(this.pointAttribs(k)).css(G(h.style,k.style)).attr({align:"flag"===p?
"left":"center",width:h.width,height:h.height,"text-align":h.textAlign}).addClass("highcharts-point").add(this.markerGroup),k.graphic.div&&(k.graphic.div.point=k),r.shadow(h.shadow)),0<b&&(b-=r.strokeWidth()%2),r.attr({text:k.options.title||h.title||"A",x:b,y:l,anchorX:d,anchorY:u}),k.tooltipPos=e.inverted?[y.len+y.pos-e.plotLeft-l,this.xAxis.len-b]:[b,l+y.pos-e.plotTop]):r&&(k.graphic=r.destroy());h.useHTML&&a.wrap(this.markerGroup,"on",function(b){return a.SVGElement.prototype.on.apply(b.apply(this,
[].slice.call(arguments,1)),[].slice.call(arguments,1))})},drawTracker:function(){var a=this.points;w.drawTrackerPoint.apply(this);C(a,function(c){var e=c.graphic;e&&D(e.element,"mouseover",function(){0<c.stackIndex&&!c.raised&&(c._y=e.y,e.attr({y:c._y-8}),c.raised=!0);C(a,function(a){a!==c&&a.raised&&a.graphic&&(a.graphic.attr({y:a._y}),a.raised=!1)})})})},animate:H,buildKDTree:H,setClip:H});n.flag=function(a,e,f,b,l){return["M",l&&l.anchorX||a,l&&l.anchorY||e,"L",a,e+b,a,e,a+f,e,a+f,e+b,a,e+b,"Z"]};
C(["circle","square"],function(a){n[a+"pin"]=function(c,f,b,l,h){var e=h&&h.anchorX;h=h&&h.anchorY;"circle"===a&&l>b&&(c-=Math.round((l-b)/2),b=l);c=n[a](c,f,b,l);e&&h&&c.push("M",e,f>h?f:f+l,"L",e,h);return c}});v===q&&C(["flag","circlepin","squarepin"],function(a){q.prototype.symbols[a]=n[a]})})(K);(function(a){function D(a,b,c){this.init(a,b,c)}var C=a.addEvent,G=a.Axis,H=a.correctFloat,v=a.defaultOptions,l=a.defined,r=a.destroyObjectProperties,w=a.doc,q=a.each,n=a.fireEvent,f=a.hasTouch,c=a.isTouchDevice,
e=a.merge,z=a.pick,b=a.removeEvent,t=a.wrap,h,B={height:c?20:14,barBorderRadius:0,buttonBorderRadius:0,liveRedraw:a.svg&&!c,margin:10,minWidth:6,step:.2,zIndex:3,barBackgroundColor:"#cccccc",barBorderWidth:1,barBorderColor:"#cccccc",buttonArrowColor:"#333333",buttonBackgroundColor:"#e6e6e6",buttonBorderColor:"#cccccc",buttonBorderWidth:1,rifleColor:"#333333",trackBackgroundColor:"#f2f2f2",trackBorderColor:"#f2f2f2",trackBorderWidth:1};v.scrollbar=e(!0,B,v.scrollbar);a.swapXY=h=function(a,b){var c=
a.length,e;if(b)for(b=0;b<c;b+=3)e=a[b+1],a[b+1]=a[b+2],a[b+2]=e;return a};D.prototype={init:function(a,b,c){this.scrollbarButtons=[];this.renderer=a;this.userOptions=b;this.options=e(B,b);this.chart=c;this.size=z(this.options.size,this.options.height);b.enabled&&(this.render(),this.initEvents(),this.addEvents())},render:function(){var a=this.renderer,b=this.options,c=this.size,e;this.group=e=a.g("scrollbar").attr({zIndex:b.zIndex,translateY:-99999}).add();this.track=a.rect().addClass("highcharts-scrollbar-track").attr({x:0,
r:b.trackBorderRadius||0,height:c,width:c}).add(e);this.track.attr({fill:b.trackBackgroundColor,stroke:b.trackBorderColor,"stroke-width":b.trackBorderWidth});this.trackBorderWidth=this.track.strokeWidth();this.track.attr({y:-this.trackBorderWidth%2/2});this.scrollbarGroup=a.g().add(e);this.scrollbar=a.rect().addClass("highcharts-scrollbar-thumb").attr({height:c,width:c,r:b.barBorderRadius||0}).add(this.scrollbarGroup);this.scrollbarRifles=a.path(h(["M",-3,c/4,"L",-3,2*c/3,"M",0,c/4,"L",0,2*c/3,"M",
3,c/4,"L",3,2*c/3],b.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup);this.scrollbar.attr({fill:b.barBackgroundColor,stroke:b.barBorderColor,"stroke-width":b.barBorderWidth});this.scrollbarRifles.attr({stroke:b.rifleColor,"stroke-width":1});this.scrollbarStrokeWidth=this.scrollbar.strokeWidth();this.scrollbarGroup.translate(-this.scrollbarStrokeWidth%2/2,-this.scrollbarStrokeWidth%2/2);this.drawScrollbarButton(0);this.drawScrollbarButton(1)},position:function(a,b,c,e){var d=
this.options.vertical,k=0,f=this.rendered?"animate":"attr";this.x=a;this.y=b+this.trackBorderWidth;this.width=c;this.xOffset=this.height=e;this.yOffset=k;d?(this.width=this.yOffset=c=k=this.size,this.xOffset=b=0,this.barWidth=e-2*c,this.x=a+=this.options.margin):(this.height=this.xOffset=e=b=this.size,this.barWidth=c-2*e,this.y+=this.options.margin);this.group[f]({translateX:a,translateY:this.y});this.track[f]({width:c,height:e});this.scrollbarButtons[1][f]({translateX:d?0:c-b,translateY:d?e-k:0})},
drawScrollbarButton:function(a){var b=this.renderer,c=this.scrollbarButtons,e=this.options,d=this.size,f;f=b.g().add(this.group);c.push(f);f=b.rect().addClass("highcharts-scrollbar-button").add(f);f.attr({stroke:e.buttonBorderColor,"stroke-width":e.buttonBorderWidth,fill:e.buttonBackgroundColor});f.attr(f.crisp({x:-.5,y:-.5,width:d+1,height:d+1,r:e.buttonBorderRadius},f.strokeWidth()));f=b.path(h(["M",d/2+(a?-1:1),d/2-3,"L",d/2+(a?-1:1),d/2+3,"L",d/2+(a?2:-2),d/2],e.vertical)).addClass("highcharts-scrollbar-arrow").add(c[a]);
f.attr({fill:e.buttonArrowColor})},setRange:function(a,b){var c=this.options,e=c.vertical,d=c.minWidth,f=this.barWidth,h,p,n=this.rendered&&!this.hasDragged?"animate":"attr";l(f)&&(a=Math.max(a,0),h=Math.ceil(f*a),this.calculatedWidth=p=H(f*Math.min(b,1)-h),p<d&&(h=(f-d+p)*a,p=d),d=Math.floor(h+this.xOffset+this.yOffset),f=p/2-.5,this.from=a,this.to=b,e?(this.scrollbarGroup[n]({translateY:d}),this.scrollbar[n]({height:p}),this.scrollbarRifles[n]({translateY:f}),this.scrollbarTop=d,this.scrollbarLeft=
0):(this.scrollbarGroup[n]({translateX:d}),this.scrollbar[n]({width:p}),this.scrollbarRifles[n]({translateX:f}),this.scrollbarLeft=d,this.scrollbarTop=0),12>=p?this.scrollbarRifles.hide():this.scrollbarRifles.show(!0),!1===c.showFull&&(0>=a&&1<=b?this.group.hide():this.group.show()),this.rendered=!0)},initEvents:function(){var a=this;a.mouseMoveHandler=function(b){var c=a.chart.pointer.normalize(b),e=a.options.vertical?"chartY":"chartX",d=a.initPositions;!a.grabbedCenter||b.touches&&0===b.touches[0][e]||
(c=a.cursorToScrollbarPosition(c)[e],e=a[e],e=c-e,a.hasDragged=!0,a.updatePosition(d[0]+e,d[1]+e),a.hasDragged&&n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b}))};a.mouseUpHandler=function(b){a.hasDragged&&n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b});a.grabbedCenter=a.hasDragged=a.chartX=a.chartY=null};a.mouseDownHandler=function(b){b=a.chart.pointer.normalize(b);b=a.cursorToScrollbarPosition(b);a.chartX=b.chartX;a.chartY=b.chartY;
a.initPositions=[a.from,a.to];a.grabbedCenter=!0};a.buttonToMinClick=function(b){var c=H(a.to-a.from)*a.options.step;a.updatePosition(H(a.from-c),H(a.to-c));n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.buttonToMaxClick=function(b){var c=(a.to-a.from)*a.options.step;a.updatePosition(a.from+c,a.to+c);n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.trackClick=function(b){var c=a.chart.pointer.normalize(b),e=a.to-a.from,d=a.y+a.scrollbarTop,f=a.x+a.scrollbarLeft;
a.options.vertical&&c.chartY>d||!a.options.vertical&&c.chartX>f?a.updatePosition(a.from+e,a.to+e):a.updatePosition(a.from-e,a.to-e);n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})}},cursorToScrollbarPosition:function(a){var b=this.options,b=b.minWidth>this.calculatedWidth?b.minWidth:0;return{chartX:(a.chartX-this.x-this.xOffset)/(this.barWidth-b),chartY:(a.chartY-this.y-this.yOffset)/(this.barWidth-b)}},updatePosition:function(a,b){1<b&&(a=H(1-H(b-a)),b=1);0>a&&(b=H(b-a),a=0);
this.from=a;this.to=b},update:function(a){this.destroy();this.init(this.chart.renderer,e(!0,this.options,a),this.chart)},addEvents:function(){var a=this.options.inverted?[1,0]:[0,1],b=this.scrollbarButtons,c=this.scrollbarGroup.element,e=this.mouseDownHandler,d=this.mouseMoveHandler,h=this.mouseUpHandler,a=[[b[a[0]].element,"click",this.buttonToMinClick],[b[a[1]].element,"click",this.buttonToMaxClick],[this.track.element,"click",this.trackClick],[c,"mousedown",e],[w,"mousemove",d],[w,"mouseup",h]];
f&&a.push([c,"touchstart",e],[w,"touchmove",d],[w,"touchend",h]);q(a,function(a){C.apply(null,a)});this._events=a},removeEvents:function(){q(this._events,function(a){b.apply(null,a)});this._events=void 0},destroy:function(){var a=this.chart.scroller;this.removeEvents();q(["track","scrollbarRifles","scrollbar","scrollbarGroup","group"],function(a){this[a]&&this[a].destroy&&(this[a]=this[a].destroy())},this);a&&this===a.scrollbar&&(a.scrollbar=null,r(a.scrollbarButtons))}};t(G.prototype,"init",function(a){var b=
this;a.apply(b,Array.prototype.slice.call(arguments,1));b.options.scrollbar&&b.options.scrollbar.enabled&&(b.options.scrollbar.vertical=!b.horiz,b.options.startOnTick=b.options.endOnTick=!1,b.scrollbar=new D(b.chart.renderer,b.options.scrollbar,b.chart),C(b.scrollbar,"changed",function(a){var c=Math.min(z(b.options.min,b.min),b.min,b.dataMin),d=Math.max(z(b.options.max,b.max),b.max,b.dataMax)-c,e;b.horiz&&!b.reversed||!b.horiz&&b.reversed?(e=c+d*this.to,c+=d*this.from):(e=c+d*(1-this.from),c+=d*(1-
this.to));b.setExtremes(c,e,!0,!1,a)}))});t(G.prototype,"render",function(a){var b=Math.min(z(this.options.min,this.min),this.min,this.dataMin),c=Math.max(z(this.options.max,this.max),this.max,this.dataMax),e=this.scrollbar,d;a.apply(this,Array.prototype.slice.call(arguments,1));if(e){this.horiz?(e.position(this.left,this.top+this.height+2+this.chart.scrollbarsOffsets[1]+(this.opposite?0:this.axisTitleMargin+this.offset),this.width,this.height),d=1):(e.position(this.left+this.width+2+this.chart.scrollbarsOffsets[0]+
(this.opposite?this.axisTitleMargin+this.offset:0),this.top,this.width,this.height),d=0);if(!this.opposite&&!this.horiz||this.opposite&&this.horiz)this.chart.scrollbarsOffsets[d]+=this.scrollbar.size+this.scrollbar.options.margin;isNaN(b)||isNaN(c)||!l(this.min)||!l(this.max)?e.setRange(0,0):(d=(this.min-b)/(c-b),b=(this.max-b)/(c-b),this.horiz&&!this.reversed||!this.horiz&&this.reversed?e.setRange(d,b):e.setRange(1-b,1-d))}});t(G.prototype,"getOffset",function(a){var b=this.horiz?2:1,c=this.scrollbar;
a.apply(this,Array.prototype.slice.call(arguments,1));c&&(this.chart.scrollbarsOffsets=[0,0],this.chart.axisOffset[b]+=c.size+c.options.margin)});t(G.prototype,"destroy",function(a){this.scrollbar&&(this.scrollbar=this.scrollbar.destroy());a.apply(this,Array.prototype.slice.call(arguments,1))});a.Scrollbar=D})(K);(function(a){function D(a){this.init(a)}var C=a.addEvent,G=a.Axis,H=a.Chart,v=a.color,l=a.defaultOptions,r=a.defined,w=a.destroyObjectProperties,q=a.doc,n=a.each,f=a.erase,c=a.error,e=a.extend,
z=a.grep,b=a.hasTouch,t=a.isNumber,h=a.isObject,B=a.merge,p=a.pick,x=a.removeEvent,k=a.Scrollbar,F=a.Series,d=a.seriesTypes,u=a.wrap,m=a.swapXY,y=[].concat(a.defaultDataGroupingUnits),J=function(a){var b=z(arguments,t);if(b.length)return Math[a].apply(0,b)};y[4]=["day",[1,2,3,4]];y[5]=["week",[1,2,3]];d=void 0===d.areaspline?"line":"areaspline";e(l,{navigator:{height:40,margin:25,maskInside:!0,handles:{backgroundColor:"#f2f2f2",borderColor:"#999999"},maskFill:v("#6685c2").setOpacity(.3).get(),outlineColor:"#cccccc",
outlineWidth:1,series:{type:d,color:"#335cad",fillOpacity:.05,lineWidth:1,compare:null,dataGrouping:{approximation:"average",enabled:!0,groupPixelWidth:2,smoothed:!0,units:y},dataLabels:{enabled:!1,zIndex:2},id:"highcharts-navigator-series",className:"highcharts-navigator-series",lineColor:null,marker:{enabled:!1},pointRange:0,shadow:!1,threshold:null},xAxis:{className:"highcharts-navigator-xaxis",tickLength:0,lineWidth:0,gridLineColor:"#e6e6e6",gridLineWidth:1,tickPixelInterval:200,labels:{align:"left",
style:{color:"#999999"},x:3,y:-4},crosshair:!1},yAxis:{className:"highcharts-navigator-yaxis",gridLineWidth:0,startOnTick:!1,endOnTick:!1,minPadding:.1,maxPadding:.1,labels:{enabled:!1},crosshair:!1,title:{text:null},tickLength:0,tickWidth:0}}});D.prototype={drawHandle:function(a,b,c,d){this.handles[b][d](c?{translateX:Math.round(this.left+this.height/2-8),translateY:Math.round(this.top+parseInt(a,10)+.5)}:{translateX:Math.round(this.left+parseInt(a,10)),translateY:Math.round(this.top+this.height/
2-8)})},getHandlePath:function(a){return m(["M",-4.5,.5,"L",3.5,.5,"L",3.5,15.5,"L",-4.5,15.5,"L",-4.5,.5,"M",-1.5,4,"L",-1.5,12,"M",.5,4,"L",.5,12],a)},drawOutline:function(a,b,c,d){var g=this.navigatorOptions.maskInside,e=this.outline.strokeWidth(),f=e/2,e=e%2/2,h=this.outlineHeight,k=this.scrollbarHeight,m=this.size,l=this.left-k,n=this.top;c?(l-=f,c=n+b+e,b=n+a+e,a=["M",l+h,n-k-e,"L",l+h,c,"L",l,c,"L",l,b,"L",l+h,b,"L",l+h,n+m+k].concat(g?["M",l+h,c-f,"L",l+h,b+f]:[])):(a+=l+k-e,b+=l+k-e,n+=f,
a=["M",l,n,"L",a,n,"L",a,n+h,"L",b,n+h,"L",b,n,"L",l+m+2*k,n].concat(g?["M",a-f,n,"L",b+f,n]:[]));this.outline[d]({d:a})},drawMasks:function(a,b,c,d){var g=this.left,e=this.top,f=this.height,h,k,l,m;c?(l=[g,g,g],m=[e,e+a,e+b],k=[f,f,f],h=[a,b-a,this.size-b]):(l=[g,g+a,g+b],m=[e,e,e],k=[a,b-a,this.size-b],h=[f,f,f]);n(this.shades,function(a,b){a[d]({x:l[b],y:m[b],width:k[b],height:h[b]})})},renderElements:function(){var a=this,b=a.navigatorOptions,c=b.maskInside,d=a.chart,e=d.inverted,f=d.renderer,
h;a.navigatorGroup=h=f.g("navigator").attr({zIndex:8,visibility:"hidden"}).add();var k={cursor:e?"ns-resize":"ew-resize"};n([!c,c,!c],function(c,d){a.shades[d]=f.rect().addClass("highcharts-navigator-mask"+(1===d?"-inside":"-outside")).attr({fill:c?b.maskFill:"transparent"}).css(1===d&&k).add(h)});a.outline=f.path().addClass("highcharts-navigator-outline").attr({"stroke-width":b.outlineWidth,stroke:b.outlineColor}).add(h);n([0,1],function(c){a.handles[c]=f.path(a.getHandlePath(e)).attr({zIndex:7-
c}).addClass("highcharts-navigator-handle highcharts-navigator-handle-"+["left","right"][c]).add(h);var d=b.handles;a.handles[c].attr({fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":1}).css(k)})},update:function(a){this.destroy();B(!0,this.chart.options.navigator,this.options,a);this.init(this.chart)},render:function(a,b,c,d){var g=this.chart,e,f,h=this.scrollbarHeight,k,l=this.xAxis;e=this.navigatorEnabled;var m,n=this.rendered;f=g.inverted;var q=g.xAxis[0].minRange;if(!this.hasDragged||
r(c)){if(!t(a)||!t(b))if(n)c=0,d=l.width;else return;this.left=p(l.left,g.plotLeft+h+(f?g.plotWidth:0));this.size=m=k=p(l.len,(f?g.plotHeight:g.plotWidth)-2*h);g=f?h:k+2*h;c=p(c,l.toPixels(a,!0));d=p(d,l.toPixels(b,!0));t(c)&&Infinity!==Math.abs(c)||(c=0,d=g);a=l.toValue(c,!0);b=l.toValue(d,!0);if(Math.abs(b-a)<q)if(this.grabbedLeft)c=l.toPixels(b-q,!0);else if(this.grabbedRight)d=l.toPixels(a+q,!0);else return;this.zoomedMax=Math.min(Math.max(c,d,0),m);this.zoomedMin=Math.min(Math.max(this.fixedWidth?
this.zoomedMax-this.fixedWidth:Math.min(c,d),0),m);this.range=this.zoomedMax-this.zoomedMin;m=Math.round(this.zoomedMax);c=Math.round(this.zoomedMin);e&&(this.navigatorGroup.attr({visibility:"visible"}),n=n&&!this.hasDragged?"animate":"attr",this.drawMasks(c,m,f,n),this.drawOutline(c,m,f,n),this.drawHandle(c,0,f,n),this.drawHandle(m,1,f,n));this.scrollbar&&(f?(f=this.top-h,e=this.left-h+(e?0:this.height),h=k+2*h):(f=this.top+(e?this.height:-h),e=this.left-h),this.scrollbar.position(e,f,g,h),this.scrollbar.setRange(this.zoomedMin/
k,this.zoomedMax/k));this.rendered=!0}},addMouseEvents:function(){var a=this,c=a.chart,d=c.container,e=[],f,h;a.mouseMoveHandler=f=function(b){a.onMouseMove(b)};a.mouseUpHandler=h=function(b){a.onMouseUp(b)};e=a.getPartsEvents("mousedown");e.push(C(d,"mousemove",f),C(q,"mouseup",h));b&&(e.push(C(d,"touchmove",f),C(q,"touchend",h)),e.concat(a.getPartsEvents("touchstart")));a.eventsToUnbind=e;a.series&&a.series[0]&&e.push(C(a.series[0].xAxis,"foundExtremes",function(){c.navigator.modifyNavigatorAxisExtremes()}))},
getPartsEvents:function(a){var b=this,c=[];n(["shades","handles"],function(d){n(b[d],function(g,e){c.push(C(g.element,a,function(a){b[d+"Mousedown"](a,e)}))})});return c},shadesMousedown:function(a,b){a=this.chart.pointer.normalize(a);var c=this.chart,d=this.xAxis,e=this.zoomedMin,f=this.left,h=this.size,k=this.range,l=a.chartX,m;c.inverted&&(l=a.chartY,f=this.top);1===b?(this.grabbedCenter=l,this.fixedWidth=k,this.dragOffset=l-e):(a=l-f-k/2,0===b?a=Math.max(0,a):2===b&&a+k>=h&&(a=h-k,m=this.getUnionExtremes().dataMax),
a!==e&&(this.fixedWidth=k,b=d.toFixedRange(a,a+k,null,m),c.xAxis[0].setExtremes(Math.min(b.min,b.max),Math.max(b.min,b.max),!0,null,{trigger:"navigator"})))},handlesMousedown:function(a,b){this.chart.pointer.normalize(a);a=this.chart;var c=a.xAxis[0],d=a.inverted&&!c.reversed||!a.inverted&&c.reversed;0===b?(this.grabbedLeft=!0,this.otherHandlePos=this.zoomedMax,this.fixedExtreme=d?c.min:c.max):(this.grabbedRight=!0,this.otherHandlePos=this.zoomedMin,this.fixedExtreme=d?c.max:c.min);a.fixedRange=null},
onMouseMove:function(a){var b=this,c=b.chart,d=b.left,e=b.navigatorSize,f=b.range,h=b.dragOffset,k=c.inverted;a.touches&&0===a.touches[0].pageX||(a=c.pointer.normalize(a),c=a.chartX,k&&(d=b.top,c=a.chartY),b.grabbedLeft?(b.hasDragged=!0,b.render(0,0,c-d,b.otherHandlePos)):b.grabbedRight?(b.hasDragged=!0,b.render(0,0,b.otherHandlePos,c-d)):b.grabbedCenter&&(b.hasDragged=!0,c<h?c=h:c>e+h-f&&(c=e+h-f),b.render(0,0,c-h,c-h+f)),b.hasDragged&&b.scrollbar&&b.scrollbar.options.liveRedraw&&(a.DOMType=a.type,
setTimeout(function(){b.onMouseUp(a)},0)))},onMouseUp:function(a){var b=this.chart,c=this.xAxis,d=this.scrollbar,e,f,h=a.DOMEvent||a;(!this.hasDragged||d&&d.hasDragged)&&"scrollbar"!==a.trigger||(this.zoomedMin===this.otherHandlePos?e=this.fixedExtreme:this.zoomedMax===this.otherHandlePos&&(f=this.fixedExtreme),this.zoomedMax===this.size&&(f=this.getUnionExtremes().dataMax),c=c.toFixedRange(this.zoomedMin,this.zoomedMax,e,f),r(c.min)&&b.xAxis[0].setExtremes(Math.min(c.min,c.max),Math.max(c.min,c.max),
!0,this.hasDragged?!1:null,{trigger:"navigator",triggerOp:"navigator-drag",DOMEvent:h}));"mousemove"!==a.DOMType&&(this.grabbedLeft=this.grabbedRight=this.grabbedCenter=this.fixedWidth=this.fixedExtreme=this.otherHandlePos=this.hasDragged=this.dragOffset=null)},removeEvents:function(){this.eventsToUnbind&&(n(this.eventsToUnbind,function(a){a()}),this.eventsToUnbind=void 0);this.removeBaseSeriesEvents()},removeBaseSeriesEvents:function(){var a=this.baseSeries||[];this.navigatorEnabled&&a[0]&&!1!==
this.navigatorOptions.adaptToUpdatedData&&(n(a,function(a){x(a,"updatedData",this.updatedDataHandler)},this),a[0].xAxis&&x(a[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes))},init:function(a){var b=a.options,c=b.navigator,d=c.enabled,e=b.scrollbar,f=e.enabled,b=d?c.height:0,h=f?e.height:0;this.handles=[];this.shades=[];this.chart=a;this.setBaseSeries();this.height=b;this.scrollbarHeight=h;this.scrollbarEnabled=f;this.navigatorEnabled=d;this.navigatorOptions=c;this.scrollbarOptions=e;this.outlineHeight=
b+h;this.opposite=p(c.opposite,!d&&a.inverted);var l=this,e=l.baseSeries,f=a.xAxis.length,m=a.yAxis.length,n=e&&e[0]&&e[0].xAxis||a.xAxis[0];a.extraMargin={type:l.opposite?"plotTop":"marginBottom",value:(d||!a.inverted?l.outlineHeight:0)+c.margin};a.inverted&&(a.extraMargin.type=l.opposite?"marginRight":"plotLeft");a.isDirtyBox=!0;l.navigatorEnabled?(l.xAxis=new G(a,B({breaks:n.options.breaks,ordinal:n.options.ordinal},c.xAxis,{id:"navigator-x-axis",yAxis:"navigator-y-axis",isX:!0,type:"datetime",
index:f,offset:0,keepOrdinalPadding:!0,startOnTick:!1,endOnTick:!1,minPadding:0,maxPadding:0,zoomEnabled:!1},a.inverted?{offsets:[h,0,-h,0],width:b}:{offsets:[0,-h,0,h],height:b})),l.yAxis=new G(a,B(c.yAxis,{id:"navigator-y-axis",alignTicks:!1,offset:0,index:m,zoomEnabled:!1},a.inverted?{width:b}:{height:b})),e||c.series.data?l.addBaseSeries():0===a.series.length&&u(a,"redraw",function(b,c){0<a.series.length&&!l.series&&(l.setBaseSeries(),a.redraw=b);b.call(a,c)}),l.renderElements(),l.addMouseEvents()):
l.xAxis={translate:function(b,c){var d=a.xAxis[0],g=d.getExtremes(),e=d.len-2*h,f=J("min",d.options.min,g.dataMin),d=J("max",d.options.max,g.dataMax)-f;return c?b*d/e+f:e*(b-f)/d},toPixels:function(a){return this.translate(a)},toValue:function(a){return this.translate(a,!0)},toFixedRange:G.prototype.toFixedRange,fake:!0};a.options.scrollbar.enabled&&(a.scrollbar=l.scrollbar=new k(a.renderer,B(a.options.scrollbar,{margin:l.navigatorEnabled?0:10,vertical:a.inverted}),a),C(l.scrollbar,"changed",function(b){var c=
l.size,d=c*this.to,c=c*this.from;l.hasDragged=l.scrollbar.hasDragged;l.render(0,0,c,d);(a.options.scrollbar.liveRedraw||"mousemove"!==b.DOMType)&&setTimeout(function(){l.onMouseUp(b)})}));l.addBaseSeriesEvents();l.addChartEvents()},getUnionExtremes:function(a){var b=this.chart.xAxis[0],c=this.xAxis,d=c.options,e=b.options,f;a&&null===b.dataMin||(f={dataMin:p(d&&d.min,J("min",e.min,b.dataMin,c.dataMin,c.min)),dataMax:p(d&&d.max,J("max",e.max,b.dataMax,c.dataMax,c.max))});return f},setBaseSeries:function(a){var b=
this.chart,c;a=a||b.options&&b.options.navigator.baseSeries||0;this.series&&(this.removeBaseSeriesEvents(),n(this.series,function(a){a.destroy()}));c=this.baseSeries=[];n(b.series||[],function(b,d){(b.options.showInNavigator||(d===a||b.options.id===a)&&!1!==b.options.showInNavigator)&&c.push(b)});this.xAxis&&!this.xAxis.fake&&this.addBaseSeries()},addBaseSeries:function(){var a=this,b=a.chart,c=a.series=[],d=a.baseSeries,e,f,h=a.navigatorOptions.series,k,l={enableMouseTracking:!1,index:null,group:"nav",
padXAxis:!1,xAxis:"navigator-x-axis",yAxis:"navigator-y-axis",showInLegend:!1,stacking:!1,isInternal:!0,visible:!0};d?n(d,function(d,g){l.name="Navigator "+(g+1);e=d.options||{};k=e.navigatorOptions||{};f=B(e,l,h,k);g=k.data||h.data;a.hasNavigatorData=a.hasNavigatorData||!!g;f.data=g||e.data&&e.data.slice(0);d.navigatorSeries=b.initSeries(f);c.push(d.navigatorSeries)}):(f=B(h,l),f.data=h.data,a.hasNavigatorData=!!f.data,c.push(b.initSeries(f)));this.addBaseSeriesEvents()},addBaseSeriesEvents:function(){var a=
this,b=a.baseSeries||[];b[0]&&b[0].xAxis&&C(b[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes);!1!==this.navigatorOptions.adaptToUpdatedData&&n(b,function(b){b.xAxis&&C(b,"updatedData",this.updatedDataHandler);C(b,"remove",function(){this.navigatorSeries&&(f(a.series,this.navigatorSeries),this.navigatorSeries.remove(!1),delete this.navigatorSeries)})},this)},modifyNavigatorAxisExtremes:function(){var a=this.xAxis,b;a.getExtremes&&(!(b=this.getUnionExtremes(!0))||b.dataMin===a.min&&b.dataMax===
a.max||(a.min=b.dataMin,a.max=b.dataMax))},modifyBaseAxisExtremes:function(){var a=this.chart.navigator,b=this.getExtremes(),c=b.dataMin,d=b.dataMax,b=b.max-b.min,e=a.stickToMin,f=a.stickToMax,h,k,l=a.series&&a.series[0],m=!!this.setExtremes;this.eventArgs&&"rangeSelectorButton"===this.eventArgs.trigger||(e&&(k=c,h=k+b),f&&(h=d,e||(k=Math.max(h-b,l&&l.xData?l.xData[0]:-Number.MAX_VALUE))),m&&(e||f)&&t(k)&&(this.min=this.userMin=k,this.max=this.userMax=h));a.stickToMin=a.stickToMax=null},updatedDataHandler:function(){var a=
this.chart.navigator,b=this.navigatorSeries;a.stickToMin=t(this.xAxis.min)&&this.xAxis.min<=this.xData[0];a.stickToMax=Math.round(a.zoomedMax)>=Math.round(a.size);b&&!a.hasNavigatorData&&(b.options.pointStart=this.xData[0],b.setData(this.options.data,!1,null,!1))},addChartEvents:function(){C(this.chart,"redraw",function(){var a=this.navigator,b=a&&(a.baseSeries&&a.baseSeries[0]&&a.baseSeries[0].xAxis||a.scrollbar&&this.xAxis[0]);b&&a.render(b.min,b.max)})},destroy:function(){this.removeEvents();this.xAxis&&
(f(this.chart.xAxis,this.xAxis),f(this.chart.axes,this.xAxis));this.yAxis&&(f(this.chart.yAxis,this.yAxis),f(this.chart.axes,this.yAxis));n(this.series||[],function(a){a.destroy&&a.destroy()});n("series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" "),function(a){this[a]&&this[a].destroy&&this[a].destroy();this[a]=null},this);n([this.handles],function(a){w(a)},this)}};a.Navigator=D;u(G.prototype,"zoom",function(a,b,c){var d=this.chart,
e=d.options,g=e.chart.zoomType,f=e.navigator,e=e.rangeSelector,h;this.isXAxis&&(f&&f.enabled||e&&e.enabled)&&("x"===g?d.resetZoomButton="blocked":"y"===g?h=!1:"xy"===g&&(d=this.previousZoom,r(b)?this.previousZoom=[this.min,this.max]:d&&(b=d[0],c=d[1],delete this.previousZoom)));return void 0!==h?h:a.call(this,b,c)});u(H.prototype,"init",function(a,b,c){C(this,"beforeRender",function(){var a=this.options;if(a.navigator.enabled||a.scrollbar.enabled)this.scroller=this.navigator=new D(this)});a.call(this,
b,c)});u(H.prototype,"setChartSize",function(a){var b=this.legend,c=this.navigator,d,e,f,h;a.apply(this,[].slice.call(arguments,1));c&&(e=b.options,f=c.xAxis,h=c.yAxis,d=c.scrollbarHeight,this.inverted?(c.left=c.opposite?this.chartWidth-d-c.height:this.spacing[3]+d,c.top=this.plotTop+d):(c.left=this.plotLeft+d,c.top=c.navigatorOptions.top||this.chartHeight-c.height-d-this.spacing[2]-("bottom"===e.verticalAlign&&e.enabled&&!e.floating?b.legendHeight+p(e.margin,10):0)),f&&h&&(this.inverted?f.options.left=
h.options.left=c.left:f.options.top=h.options.top=c.top,f.setAxisSize(),h.setAxisSize()))});u(F.prototype,"addPoint",function(a,b,d,e,f){var g=this.options.turboThreshold;g&&this.xData.length>g&&h(b,!0)&&this.chart.navigator&&c(20,!0);a.call(this,b,d,e,f)});u(H.prototype,"addSeries",function(a,b,c,d){a=a.call(this,b,!1,d);this.navigator&&this.navigator.setBaseSeries();p(c,!0)&&this.redraw();return a});u(F.prototype,"update",function(a,b,c){a.call(this,b,!1);this.chart.navigator&&this.chart.navigator.setBaseSeries();
p(c,!0)&&this.chart.redraw()});H.prototype.callbacks.push(function(a){var b=a.navigator;b&&(a=a.xAxis[0].getExtremes(),b.render(a.min,a.max))})})(K);(function(a){function D(a){this.init(a)}var C=a.addEvent,G=a.Axis,H=a.Chart,v=a.css,l=a.createElement,r=a.dateFormat,w=a.defaultOptions,q=w.global.useUTC,n=a.defined,f=a.destroyObjectProperties,c=a.discardElement,e=a.each,z=a.extend,b=a.fireEvent,t=a.Date,h=a.isNumber,B=a.merge,p=a.pick,x=a.pInt,k=a.splat,F=a.wrap;z(w,{rangeSelector:{buttonTheme:{"stroke-width":0,
width:28,height:18,padding:2,zIndex:7},height:35,inputPosition:{align:"right"},labelStyle:{color:"#666666"}}});w.lang=B(w.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From",rangeSelectorTo:"To"});D.prototype={clickButton:function(a,b){var c=this,d=c.chart,f=c.buttonOptions[a],l=d.xAxis[0],n=d.scroller&&d.scroller.getUnionExtremes()||l||{},g=n.dataMin,r=n.dataMax,t,u=l&&Math.round(Math.min(l.max,p(r,l.max))),v=f.type,w,n=f._range,x,z,B,D=f.dataGrouping;if(null!==g&&null!==r){d.fixedRange=n;D&&
(this.forcedDataGrouping=!0,G.prototype.setDataGrouping.call(l||{chart:this.chart},D,!1));if("month"===v||"year"===v)l?(v={range:f,max:u,dataMin:g,dataMax:r},t=l.minFromRange.call(v),h(v.newMax)&&(u=v.newMax)):n=f;else if(n)t=Math.max(u-n,g),u=Math.min(t+n,r);else if("ytd"===v)if(l)void 0===r&&(g=Number.MAX_VALUE,r=Number.MIN_VALUE,e(d.series,function(a){a=a.xData;g=Math.min(a[0],g);r=Math.max(a[a.length-1],r)}),b=!1),u=c.getYTDExtremes(r,g,q),t=x=u.min,u=u.max;else{C(d,"beforeRender",function(){c.clickButton(a)});
return}else"all"===v&&l&&(t=g,u=r);c.setSelected(a);l?l.setExtremes(t,u,p(b,1),null,{trigger:"rangeSelectorButton",rangeSelectorButton:f}):(w=k(d.options.xAxis)[0],B=w.range,w.range=n,z=w.min,w.min=x,C(d,"load",function(){w.range=B;w.min=z}))}},setSelected:function(a){this.selected=this.options.selected=a},defaultButtons:[{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}],
init:function(a){var c=this,d=a.options.rangeSelector,f=d.buttons||[].concat(c.defaultButtons),h=d.selected,k=function(){var a=c.minInput,d=c.maxInput;a&&a.blur&&b(a,"blur");d&&d.blur&&b(d,"blur")};c.chart=a;c.options=d;c.buttons=[];a.extraTopMargin=d.height;c.buttonOptions=f;this.unMouseDown=C(a.container,"mousedown",k);this.unResize=C(a,"resize",k);e(f,c.computeButtonRange);void 0!==h&&f[h]&&this.clickButton(h,!1);C(a,"load",function(){C(a.xAxis[0],"setExtremes",function(b){this.max-this.min!==
a.fixedRange&&"rangeSelectorButton"!==b.trigger&&"updatedData"!==b.trigger&&c.forcedDataGrouping&&this.setDataGrouping(!1,!1)})})},updateButtonStates:function(){var a=this.chart,b=a.xAxis[0],c=Math.round(b.max-b.min),f=!b.hasVisibleSeries,a=a.scroller&&a.scroller.getUnionExtremes()||b,k=a.dataMin,l=a.dataMax,a=this.getYTDExtremes(l,k,q),n=a.min,g=a.max,p=this.selected,r=h(p),t=this.options.allButtonsEnabled,v=this.buttons;e(this.buttonOptions,function(a,d){var e=a._range,h=a.type,m=a.count||1;a=v[d];
var q=0;d=d===p;var u=e>l-k,y=e<b.minRange,w=!1,x=!1,e=e===c;("month"===h||"year"===h)&&c>=864E5*{month:28,year:365}[h]*m&&c<=864E5*{month:31,year:366}[h]*m?e=!0:"ytd"===h?(e=g-n===c,w=!d):"all"===h&&(e=b.max-b.min>=l-k,x=!d&&r&&e);h=!t&&(u||y||x||f);e=d&&e||e&&!r&&!w;h?q=3:e&&(r=!0,q=2);a.state!==q&&a.setState(q)})},computeButtonRange:function(a){var b=a.type,c=a.count||1,d={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5};if(d[b])a._range=d[b]*c;else if("month"===b||"year"===
b)a._range=864E5*{month:30,year:365}[b]*c},setInputValue:function(a,b){var c=this.chart.options.rangeSelector,d=this[a+"Input"];n(b)&&(d.previousValue=d.HCTime,d.HCTime=b);d.value=r(c.inputEditDateFormat||"%Y-%m-%d",d.HCTime);this[a+"DateBox"].attr({text:r(c.inputDateFormat||"%b %e, %Y",d.HCTime)})},showInput:function(a){var b=this.inputGroup,c=this[a+"DateBox"];v(this[a+"Input"],{left:b.translateX+c.x+"px",top:b.translateY+"px",width:c.width-2+"px",height:c.height-2+"px",border:"2px solid silver"})},
hideInput:function(a){v(this[a+"Input"],{border:0,width:"1px",height:"1px"});this.setInputValue(a)},drawInput:function(a){function b(){var a=p.value,b=(k.inputDateParser||Date.parse)(a),e=d.xAxis[0],g=d.scroller&&d.scroller.xAxis?d.scroller.xAxis:e,f=g.dataMin,g=g.dataMax;b!==p.previousValue&&(p.previousValue=b,h(b)||(b=a.split("-"),b=Date.UTC(x(b[0]),x(b[1])-1,x(b[2]))),h(b)&&(q||(b+=6E4*(new Date).getTimezoneOffset()),n?b>c.maxInput.HCTime?b=void 0:b<f&&(b=f):b<c.minInput.HCTime?b=void 0:b>g&&(b=
g),void 0!==b&&e.setExtremes(n?b:e.min,n?e.max:b,void 0,void 0,{trigger:"rangeSelectorInput"})))}var c=this,d=c.chart,e=d.renderer.style||{},f=d.renderer,k=d.options.rangeSelector,g=c.div,n="min"===a,p,r,t=this.inputGroup;this[a+"Label"]=r=f.label(w.lang[n?"rangeSelectorFrom":"rangeSelectorTo"],this.inputGroup.offset).addClass("highcharts-range-label").attr({padding:2}).add(t);t.offset+=r.width+5;this[a+"DateBox"]=f=f.label("",t.offset).addClass("highcharts-range-input").attr({padding:2,width:k.inputBoxWidth||
90,height:k.inputBoxHeight||17,stroke:k.inputBoxBorderColor||"#cccccc","stroke-width":1,"text-align":"center"}).on("click",function(){c.showInput(a);c[a+"Input"].focus()}).add(t);t.offset+=f.width+(n?10:0);this[a+"Input"]=p=l("input",{name:a,className:"highcharts-range-selector",type:"text"},{top:d.plotTop+"px"},g);r.css(B(e,k.labelStyle));f.css(B({color:"#333333"},e,k.inputStyle));v(p,z({position:"absolute",border:0,width:"1px",height:"1px",padding:0,textAlign:"center",fontSize:e.fontSize,fontFamily:e.fontFamily,
left:"-9em"},k.inputStyle));p.onfocus=function(){c.showInput(a)};p.onblur=function(){c.hideInput(a)};p.onchange=b;p.onkeypress=function(a){13===a.keyCode&&b()}},getPosition:function(){var a=this.chart,b=a.options.rangeSelector,a=p((b.buttonPosition||{}).y,a.plotTop-a.axisOffset[0]-b.height);return{buttonTop:a,inputTop:a-10}},getYTDExtremes:function(a,b,c){var d=new t(a),e=d[t.hcGetFullYear]();c=c?t.UTC(e,0,1):+new t(e,0,1);b=Math.max(b||0,c);d=d.getTime();return{max:Math.min(a||d,d),min:b}},render:function(a,
b){var c=this,d=c.chart,f=d.renderer,h=d.container,k=d.options,g=k.exporting&&!1!==k.exporting.enabled&&k.navigation&&k.navigation.buttonOptions,q=k.rangeSelector,r=c.buttons,k=w.lang,t=c.div,t=c.inputGroup,u=q.buttonTheme,v=q.buttonPosition||{},x=q.inputEnabled,B=u&&u.states,C=d.plotLeft,D,F=this.getPosition(),G=c.group,H=c.rendered;!1!==q.enabled&&(H||(c.group=G=f.g("range-selector-buttons").add(),c.zoomText=f.text(k.rangeSelectorZoom,p(v.x,C),15).css(q.labelStyle).add(G),D=p(v.x,C)+c.zoomText.getBBox().width+
5,e(c.buttonOptions,function(a,b){r[b]=f.button(a.text,D,0,function(){c.clickButton(b);c.isActive=!0},u,B&&B.hover,B&&B.select,B&&B.disabled).attr({"text-align":"center"}).add(G);D+=r[b].width+p(q.buttonSpacing,5)}),!1!==x&&(c.div=t=l("div",null,{position:"relative",height:0,zIndex:1}),h.parentNode.insertBefore(t,h),c.inputGroup=t=f.g("input-group").add(),t.offset=0,c.drawInput("min"),c.drawInput("max"))),c.updateButtonStates(),G[H?"animate":"attr"]({translateY:F.buttonTop}),!1!==x&&(t.align(z({y:F.inputTop,
width:t.offset,x:g&&F.inputTop<(g.y||0)+g.height-d.spacing[0]?-40:0},q.inputPosition),!0,d.spacingBox),n(x)||(d=G.getBBox(),t[t.alignAttr.translateX<d.x+d.width+10?"hide":"show"]()),c.setInputValue("min",a),c.setInputValue("max",b)),c.rendered=!0)},update:function(a){var b=this.chart;B(!0,b.options.rangeSelector,a);this.destroy();this.init(b)},destroy:function(){var a=this.minInput,b=this.maxInput,e;this.unMouseDown();this.unResize();f(this.buttons);a&&(a.onfocus=a.onblur=a.onchange=null);b&&(b.onfocus=
b.onblur=b.onchange=null);for(e in this)this[e]&&"chart"!==e&&(this[e].destroy?this[e].destroy():this[e].nodeType&&c(this[e])),this[e]!==D.prototype[e]&&(this[e]=null)}};G.prototype.toFixedRange=function(a,b,c,e){var d=this.chart&&this.chart.fixedRange;a=p(c,this.translate(a,!0,!this.horiz));b=p(e,this.translate(b,!0,!this.horiz));c=d&&(b-a)/d;.7<c&&1.3>c&&(e?a=b-d:b=a+d);h(a)||(a=b=void 0);return{min:a,max:b}};G.prototype.minFromRange=function(){var a=this.range,b={month:"Month",year:"FullYear"}[a.type],
c,e=this.max,f,k,l=function(a,c){var d=new Date(a);d["set"+b](d["get"+b]()+c);return d.getTime()-a};h(a)?(c=e-a,k=a):(c=e+l(e,-a.count),this.chart&&(this.chart.fixedRange=e-c));f=p(this.dataMin,Number.MIN_VALUE);h(c)||(c=f);c<=f&&(c=f,void 0===k&&(k=l(c,a.count)),this.newMax=Math.min(c+k,this.dataMax));h(e)||(c=void 0);return c};F(H.prototype,"init",function(a,b,c){C(this,"init",function(){this.options.rangeSelector.enabled&&(this.rangeSelector=new D(this))});a.call(this,b,c)});H.prototype.callbacks.push(function(a){function b(){c=
a.xAxis[0].getExtremes();h(c.min)&&d.render(c.min,c.max)}var c,d=a.rangeSelector,e,f;d&&(f=C(a.xAxis[0],"afterSetExtremes",function(a){d.render(a.min,a.max)}),e=C(a,"redraw",b),b());C(a,"destroy",function(){d&&(e(),f())})});a.RangeSelector=D})(K);(function(a){var D=a.arrayMax,C=a.arrayMin,G=a.Axis,H=a.Chart,v=a.defined,l=a.each,r=a.extend,w=a.format,q=a.inArray,n=a.isNumber,f=a.isString,c=a.map,e=a.merge,z=a.pick,b=a.Point,t=a.Renderer,h=a.Series,B=a.splat,p=a.SVGRenderer,x=a.VMLRenderer,k=a.wrap,
F=h.prototype,d=F.init,u=F.processData,m=b.prototype.tooltipFormatter;a.StockChart=a.stockChart=function(b,d,h){var k=f(b)||b.nodeName,g=arguments[k?1:0],l=g.series,m=a.getOptions(),n,p=z(g.navigator&&g.navigator.enabled,m.navigator.enabled,!0),q=p?{startOnTick:!1,endOnTick:!1}:null,r={marker:{enabled:!1,radius:2}},t={shadow:!1,borderWidth:0};g.xAxis=c(B(g.xAxis||{}),function(a){return e({minPadding:0,maxPadding:0,ordinal:!0,title:{text:null},labels:{overflow:"justify"},showLastLabel:!0},m.xAxis,
a,{type:"datetime",categories:null},q)});g.yAxis=c(B(g.yAxis||{}),function(a){n=z(a.opposite,!0);return e({labels:{y:-2},opposite:n,showLastLabel:!1,title:{text:null}},m.yAxis,a)});g.series=null;g=e({chart:{panning:!0,pinchType:"x"},navigator:{enabled:p},scrollbar:{enabled:z(m.scrollbar.enabled,!0)},rangeSelector:{enabled:z(m.rangeSelector.enabled,!0)},title:{text:null},tooltip:{shared:!0,crosshairs:!0},legend:{enabled:!1},plotOptions:{line:r,spline:r,area:r,areaspline:r,arearange:r,areasplinerange:r,
column:t,columnrange:t,candlestick:t,ohlc:t}},g,{isStock:!0});g.series=l;return k?new H(b,g,h):new H(g,d)};k(G.prototype,"autoLabelAlign",function(a){var b=this.chart,c=this.options,b=b._labelPanes=b._labelPanes||{},d=this.options.labels;return this.chart.options.isStock&&"yAxis"===this.coll&&(c=c.top+","+c.height,!b[c]&&d.enabled)?(15===d.x&&(d.x=0),void 0===d.align&&(d.align="right"),b[c]=this,"right"):a.call(this,[].slice.call(arguments,1))});k(G.prototype,"destroy",function(a){var b=this.chart,
c=this.options&&this.options.top+","+this.options.height;c&&b._labelPanes&&b._labelPanes[c]===this&&delete b._labelPanes[c];return a.call(this,Array.prototype.slice.call(arguments,1))});k(G.prototype,"getPlotLinePath",function(a,b,d,e,g,h){var k=this,m=this.isLinked&&!this.series?this.linkedParent.series:this.series,p=k.chart,r=p.renderer,t=k.left,u=k.top,w,x,y,B,E=[],C=[],D,F;if("colorAxis"===k.coll)return a.apply(this,[].slice.call(arguments,1));C=function(a){var b="xAxis"===a?"yAxis":"xAxis";a=
k.options[b];return n(a)?[p[b][a]]:f(a)?[p.get(a)]:c(m,function(a){return a[b]})}(k.coll);l(k.isXAxis?p.yAxis:p.xAxis,function(a){if(v(a.options.id)?-1===a.options.id.indexOf("navigator"):1){var b=a.isXAxis?"yAxis":"xAxis",b=v(a.options[b])?p[b][a.options[b]]:p[b][0];k===b&&C.push(a)}});D=C.length?[]:[k.isXAxis?p.yAxis[0]:p.xAxis[0]];l(C,function(a){-1===q(a,D)&&D.push(a)});F=z(h,k.translate(b,null,null,e));n(F)&&(k.horiz?l(D,function(a){var b;x=a.pos;B=x+a.len;w=y=Math.round(F+k.transB);if(w<t||
w>t+k.width)g?w=y=Math.min(Math.max(t,w),t+k.width):b=!0;b||E.push("M",w,x,"L",y,B)}):l(D,function(a){var b;w=a.pos;y=w+a.len;x=B=Math.round(u+k.height-F);if(x<u||x>u+k.height)g?x=B=Math.min(Math.max(u,x),k.top+k.height):b=!0;b||E.push("M",w,x,"L",y,B)}));return 0<E.length?r.crispPolyLine(E,d||1):null});G.prototype.getPlotBandPath=function(a,b){b=this.getPlotLinePath(b,null,null,!0);a=this.getPlotLinePath(a,null,null,!0);var c=[],d;if(a&&b)if(a.toString()===b.toString())c=a,c.flat=!0;else for(d=0;d<
a.length;d+=6)c.push("M",a[d+1],a[d+2],"L",a[d+4],a[d+5],b[d+4],b[d+5],b[d+1],b[d+2],"z");else c=null;return c};p.prototype.crispPolyLine=function(a,b){var c;for(c=0;c<a.length;c+=6)a[c+1]===a[c+4]&&(a[c+1]=a[c+4]=Math.round(a[c+1])-b%2/2),a[c+2]===a[c+5]&&(a[c+2]=a[c+5]=Math.round(a[c+2])+b%2/2);return a};t===x&&(x.prototype.crispPolyLine=p.prototype.crispPolyLine);k(G.prototype,"hideCrosshair",function(a,b){a.call(this,b);this.crossLabel&&(this.crossLabel=this.crossLabel.hide())});k(G.prototype,
"drawCrosshair",function(a,b,c){var d,e;a.call(this,b,c);if(v(this.crosshair.label)&&this.crosshair.label.enabled&&this.cross){a=this.chart;var f=this.options.crosshair.label,h=this.horiz;d=this.opposite;e=this.left;var k=this.top,l=this.crossLabel,m,n=f.format,p="",q="inside"===this.options.tickPosition,t=!1!==this.crosshair.snap,u=0;b||(b=this.cross&&this.cross.e);m=h?"center":d?"right"===this.labelAlign?"right":"left":"left"===this.labelAlign?"left":"center";l||(l=this.crossLabel=a.renderer.label(null,
null,null,f.shape||"callout").addClass("highcharts-crosshair-label"+(this.series[0]&&" highcharts-color-"+this.series[0].colorIndex)).attr({align:f.align||m,padding:z(f.padding,8),r:z(f.borderRadius,3),zIndex:2}).add(this.labelGroup),l.attr({fill:f.backgroundColor||this.series[0]&&this.series[0].color||"#666666",stroke:f.borderColor||"","stroke-width":f.borderWidth||0}).css(r({color:"#ffffff",fontWeight:"normal",fontSize:"11px",textAlign:"center"},f.style)));h?(m=t?c.plotX+e:b.chartX,k+=d?0:this.height):
(m=d?this.width+e:0,k=t?c.plotY+k:b.chartY);n||f.formatter||(this.isDatetimeAxis&&(p="%b %d, %Y"),n="{value"+(p?":"+p:"")+"}");b=t?c[this.isXAxis?"x":"y"]:this.toValue(h?b.chartX:b.chartY);l.attr({text:n?w(n,{value:b}):f.formatter.call(this,b),x:m,y:k,visibility:"visible"});b=l.getBBox();if(h){if(q&&!d||!q&&d)k=l.y-b.height}else k=l.y-b.height/2;h?(d=e-b.x,e=e+this.width-b.x):(d="left"===this.labelAlign?e:0,e="right"===this.labelAlign?e+this.width:a.chartWidth);l.translateX<d&&(u=d-l.translateX);
l.translateX+b.width>=e&&(u=-(l.translateX+b.width-e));l.attr({x:m+u,y:k,anchorX:h?m:this.opposite?0:a.chartWidth,anchorY:h?this.opposite?a.chartHeight:0:k+b.height/2})}});F.init=function(){d.apply(this,arguments);this.setCompare(this.options.compare)};F.setCompare=function(a){this.modifyValue="value"===a||"percent"===a?function(b,c){var d=this.compareValue;if(void 0!==b&&void 0!==d)return b="value"===a?b-d:b/d*100-(100===this.options.compareBase?0:100),c&&(c.change=b),b}:null;this.userOptions.compare=
a;this.chart.hasRendered&&(this.isDirty=!0)};F.processData=function(){var a,b=-1,c,d,e,f;u.apply(this,arguments);if(this.xAxis&&this.processedYData)for(c=this.processedXData,d=this.processedYData,e=d.length,this.pointArrayMap&&(b=q("close",this.pointArrayMap),-1===b&&(b=q(this.pointValKey||"y",this.pointArrayMap))),a=0;a<e-1;a++)if(f=-1<b?d[a][b]:d[a],n(f)&&c[a+1]>=this.xAxis.min&&0!==f){this.compareValue=f;break}};k(F,"getExtremes",function(a){var b;a.apply(this,[].slice.call(arguments,1));this.modifyValue&&
(b=[this.modifyValue(this.dataMin),this.modifyValue(this.dataMax)],this.dataMin=C(b),this.dataMax=D(b))});G.prototype.setCompare=function(a,b){this.isXAxis||(l(this.series,function(b){b.setCompare(a)}),z(b,!0)&&this.chart.redraw())};b.prototype.tooltipFormatter=function(b){b=b.replace("{point.change}",(0<this.change?"+":"")+a.numberFormat(this.change,z(this.series.tooltipOptions.changeDecimals,2)));return m.apply(this,[b])};k(h.prototype,"render",function(a){this.chart.is3d&&this.chart.is3d()||this.chart.polar||
!this.xAxis||this.xAxis.isRadial||(!this.clipBox&&this.animate?(this.clipBox=e(this.chart.clipBox),this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len):this.chart[this.sharedClipKey]?this.chart[this.sharedClipKey].attr({width:this.xAxis.len,height:this.yAxis.len}):this.clipBox&&(this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len));a.call(this)})})(K);return K});

/*
 Highcharts JS v5.0.10 (2017-03-31)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(y){"object"===typeof module&&module.exports?module.exports=y:y(Highcharts)})(function(y){(function(a){function p(a,b){this.init(a,b)}var r=a.CenteredSeriesMixin,v=a.each,m=a.extend,k=a.merge,h=a.splat;m(p.prototype,{coll:"pane",init:function(a,b){this.chart=b;this.background=[];b.pane.push(this);this.setOptions(a)},setOptions:function(a){this.options=k(this.defaultOptions,this.chart.angular?{background:{}}:void 0,a)},render:function(){var a=this.options,b=this.options.background,d=this.chart.renderer;
this.group||(this.group=d.g("pane-group").attr({zIndex:a.zIndex||0}).add());this.updateCenter();if(b)for(b=h(b),a=Math.max(b.length,this.background.length||0),d=0;d<a;d++)b[d]?this.renderBackground(k(this.defaultBackgroundOptions,b[d]),d):this.background[d]&&(this.background[d]=this.background[d].destroy(),this.background.splice(d,1))},renderBackground:function(a,b){var d="animate";this.background[b]||(this.background[b]=this.chart.renderer.path().add(this.group),d="attr");this.background[b][d]({d:this.axis.getPlotBandPath(a.from,
a.to,a)}).attr({fill:a.backgroundColor,stroke:a.borderColor,"stroke-width":a.borderWidth,"class":"highcharts-pane "+(a.className||"")})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"#cccccc",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ffffff"],[1,"#e6e6e6"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"},updateCenter:function(a){this.center=(a||this.axis||{}).center=
r.getCenter.call(this)},update:function(a,b){k(!0,this.options,a);this.setOptions(this.options);this.render();v(this.chart.axes,function(d){d.pane===this&&(d.pane=null,d.update({},b))},this)}});a.Pane=p})(y);(function(a){var p=a.each,r=a.extend,v=a.map,m=a.merge,k=a.noop,h=a.pick,t=a.pInt,b=a.wrap,d,e,g=a.Axis.prototype;a=a.Tick.prototype;d={getOffset:k,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:k,setCategories:k,setTitle:k};e={defaultRadialGaugeOptions:{labels:{align:"center",
x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(c){c=
this.options=m(this.defaultOptions,this.defaultRadialOptions,c);c.plotBands||(c.plotBands=[])},getOffset:function(){g.getOffset.call(this);this.chart.axisOffset[this.side]=0},getLinePath:function(c,b){c=this.center;var d=this.chart,f=h(b,c[2]/2-this.offset);this.isCircular||void 0!==b?b=this.chart.renderer.symbols.arc(this.left+c[0],this.top+c[1],f,f,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0}):(b=this.postTranslate(this.angleRad,f),b=["M",c[0]+d.plotLeft,c[1]+d.plotTop,"L",b.x,
b.y]);return b},setAxisTranslation:function(){g.setAxisTranslation.call(this);this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0)},beforeSetTickPositions:function(){if(this.autoConnect=this.isCircular&&void 0===h(this.userMax,this.options.max)&&this.endAngleRad-this.startAngleRad===2*Math.PI)this.max+=this.categories&&1||this.pointRange||this.closestPointRange||
0},setAxisSize:function(){g.setAxisSize.call(this);this.isRadial&&(this.pane.updateCenter(this),this.isCircular&&(this.sector=this.endAngleRad-this.startAngleRad),this.len=this.width=this.height=this.center[2]*h(this.sector,1)/2)},getPosition:function(c,b){return this.postTranslate(this.isCircular?this.translate(c):this.angleRad,h(this.isCircular?b:this.translate(c),this.center[2]/2)-this.offset)},postTranslate:function(c,b){var d=this.chart,f=this.center;c=this.startAngleRad+c;return{x:d.plotLeft+
f[0]+Math.cos(c)*b,y:d.plotTop+f[1]+Math.sin(c)*b}},getPlotBandPath:function(c,b,d){var f=this.center,n=this.startAngleRad,a=f[2]/2,e=[h(d.outerRadius,"100%"),d.innerRadius,h(d.thickness,10)],g=Math.min(this.offset,0),u=/%$/,k,m=this.isCircular;"polygon"===this.options.gridLineInterpolation?f=this.getPlotLinePath(c).concat(this.getPlotLinePath(b,!0)):(c=Math.max(c,this.min),b=Math.min(b,this.max),m||(e[0]=this.translate(c),e[1]=this.translate(b)),e=v(e,function(c){u.test(c)&&(c=t(c,10)*a/100);return c}),
"circle"!==d.shape&&m?(c=n+this.translate(c),b=n+this.translate(b)):(c=-Math.PI/2,b=1.5*Math.PI,k=!0),e[0]-=g,e[2]-=g,f=this.chart.renderer.symbols.arc(this.left+f[0],this.top+f[1],e[0],e[0],{start:Math.min(c,b),end:Math.max(c,b),innerR:h(e[1],e[0]-e[2]),open:k}));return f},getPlotLinePath:function(c,b){var d=this,f=d.center,e=d.chart,a=d.getPosition(c),g,t,h;d.isCircular?h=["M",f[0]+e.plotLeft,f[1]+e.plotTop,"L",a.x,a.y]:"circle"===d.options.gridLineInterpolation?(c=d.translate(c))&&(h=d.getLinePath(0,
c)):(p(e.xAxis,function(c){c.pane===d.pane&&(g=c)}),h=[],c=d.translate(c),f=g.tickPositions,g.autoConnect&&(f=f.concat([f[0]])),b&&(f=[].concat(f).reverse()),p(f,function(b,d){t=g.getPosition(b,c);h.push(d?"L":"M",t.x,t.y)}));return h},getTitlePosition:function(){var c=this.center,b=this.chart,d=this.options.title;return{x:b.plotLeft+c[0]+(d.x||0),y:b.plotTop+c[1]-{high:.5,middle:.25,low:0}[d.align]*c[2]+(d.y||0)}}};b(g,"init",function(c,b,a){var f=b.angular,n=b.polar,g=a.isX,t=f&&g,x,k=b.options,
p=this.pane=b.pane[a.pane||0],z=p.options;if(f){if(r(this,t?d:e),x=!g)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else n&&(r(this,e),this.defaultRadialOptions=(x=g)?this.defaultRadialXOptions:m(this.defaultYAxisOptions,this.defaultRadialYOptions));f||n?(this.isRadial=!0,b.inverted=!1,k.chart.zoomType=null):this.isRadial=!1;x&&(p.axis=this);c.call(this,b,a);t||!f&&!n||(c=this.options,this.angleRad=(c.angle||0)*Math.PI/180,this.startAngleRad=(z.startAngle-90)*Math.PI/180,this.endAngleRad=
(h(z.endAngle,z.startAngle+360)-90)*Math.PI/180,this.offset=c.offset||0,this.isCircular=x)});b(g,"autoLabelAlign",function(b){if(!this.isRadial)return b.apply(this,[].slice.call(arguments,1))});b(a,"getPosition",function(b,d,e,a,l){var c=this.axis;return c.getPosition?c.getPosition(e):b.call(this,d,e,a,l)});b(a,"getLabelPosition",function(b,d,e,a,l,g,t,k,u){var c=this.axis,f=g.y,n=20,q=g.align,w=(c.translate(this.pos)+c.startAngleRad+Math.PI/2)/Math.PI*180%360;c.isRadial?(b=c.getPosition(this.pos,
c.center[2]/2+h(g.distance,-25)),"auto"===g.rotation?a.attr({rotation:w}):null===f&&(f=c.chart.renderer.fontMetrics(a.styles.fontSize).b-a.getBBox().height/2),null===q&&(c.isCircular?(this.label.getBBox().width>c.len*c.tickInterval/(c.max-c.min)&&(n=0),q=w>n&&w<180-n?"left":w>180+n&&w<360-n?"right":"center"):q="center",a.attr({align:q})),b.x+=g.x,b.y+=f):b=b.call(this,d,e,a,l,g,t,k,u);return b});b(a,"getMarkPath",function(b,d,e,a,l,g,t){var c=this.axis;c.isRadial?(b=c.getPosition(this.pos,c.center[2]/
2+a),d=["M",d,e,"L",b.x,b.y]):d=b.call(this,d,e,a,l,g,t);return d})})(y);(function(a){var p=a.each,r=a.noop,v=a.pick,m=a.Series,k=a.seriesType,h=a.seriesTypes;k("arearange","area",{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{series.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:!1}}},
{pointArrayMap:["low","high"],dataLabelCollections:["dataLabel","dataLabelUpper"],toYData:function(a){return[a.low,a.high]},pointValKey:"low",deferTranslatePolar:!0,highToXY:function(a){var b=this.chart,d=this.xAxis.postTranslate(a.rectPlotX,this.yAxis.len-a.plotHigh);a.plotHighX=d.x-b.plotLeft;a.plotHigh=d.y-b.plotTop},translate:function(){var a=this,b=a.yAxis,d=!!a.modifyValue;h.area.prototype.translate.apply(a);p(a.points,function(e){var g=e.low,c=e.high,f=e.plotY;null===c||null===g?e.isNull=!0:
(e.plotLow=f,e.plotHigh=b.translate(d?a.modifyValue(c,e):c,0,1,0,1),d&&(e.yBottom=e.plotHigh))});this.chart.polar&&p(this.points,function(b){a.highToXY(b)})},getGraphPath:function(a){var b=[],d=[],e,g=h.area.prototype.getGraphPath,c,f,n;n=this.options;var w=this.chart.polar&&!1!==n.connectEnds,l=n.step;a=a||this.points;for(e=a.length;e--;)c=a[e],c.isNull||w||a[e+1]&&!a[e+1].isNull||d.push({plotX:c.plotX,plotY:c.plotY,doCurve:!1}),f={polarPlotY:c.polarPlotY,rectPlotX:c.rectPlotX,yBottom:c.yBottom,
plotX:v(c.plotHighX,c.plotX),plotY:c.plotHigh,isNull:c.isNull},d.push(f),b.push(f),c.isNull||w||a[e-1]&&!a[e-1].isNull||d.push({plotX:c.plotX,plotY:c.plotY,doCurve:!1});a=g.call(this,a);l&&(!0===l&&(l="left"),n.step={left:"right",center:"center",right:"left"}[l]);b=g.call(this,b);d=g.call(this,d);n.step=l;n=[].concat(a,b);this.chart.polar||"M"!==d[0]||(d[0]="L");this.graphPath=n;this.areaPath=this.areaPath.concat(a,d);n.isArea=!0;n.xMap=a.xMap;this.areaPath.xMap=a.xMap;return n},drawDataLabels:function(){var a=
this.data,b=a.length,d,e=[],g=m.prototype,c=this.options.dataLabels,f=c.align,n=c.verticalAlign,w=c.inside,l,q,h=this.chart.inverted;if(c.enabled||this._hasPointLabels){for(d=b;d--;)if(l=a[d])q=w?l.plotHigh<l.plotLow:l.plotHigh>l.plotLow,l.y=l.high,l._plotY=l.plotY,l.plotY=l.plotHigh,e[d]=l.dataLabel,l.dataLabel=l.dataLabelUpper,l.below=q,h?f||(c.align=q?"right":"left"):n||(c.verticalAlign=q?"top":"bottom"),c.x=c.xHigh,c.y=c.yHigh;g.drawDataLabels&&g.drawDataLabels.apply(this,arguments);for(d=b;d--;)if(l=
a[d])q=w?l.plotHigh<l.plotLow:l.plotHigh>l.plotLow,l.dataLabelUpper=l.dataLabel,l.dataLabel=e[d],l.y=l.low,l.plotY=l._plotY,l.below=!q,h?f||(c.align=q?"left":"right"):n||(c.verticalAlign=q?"bottom":"top"),c.x=c.xLow,c.y=c.yLow;g.drawDataLabels&&g.drawDataLabels.apply(this,arguments)}c.align=f;c.verticalAlign=n},alignDataLabel:function(){h.column.prototype.alignDataLabel.apply(this,arguments)},setStackedPoints:r,getSymbol:r,drawPoints:r})})(y);(function(a){var p=a.seriesType;p("areasplinerange","arearange",
null,{getPointSpline:a.seriesTypes.spline.prototype.getPointSpline})})(y);(function(a){var p=a.defaultPlotOptions,r=a.each,v=a.merge,m=a.noop,k=a.pick,h=a.seriesType,t=a.seriesTypes.column.prototype;h("columnrange","arearange",v(p.column,p.arearange,{lineWidth:1,pointRange:null}),{translate:function(){var b=this,d=b.yAxis,a=b.xAxis,g=a.startAngleRad,c,f=b.chart,n=b.xAxis.isRadial,w;t.translate.apply(b);r(b.points,function(e){var l=e.shapeArgs,h=b.options.minPointLength,x,u;e.plotHigh=w=d.translate(e.high,
0,1,0,1);e.plotLow=e.plotY;u=w;x=k(e.rectPlotY,e.plotY)-w;Math.abs(x)<h?(h-=x,x+=h,u-=h/2):0>x&&(x*=-1,u-=x);n?(c=e.barX+g,e.shapeType="path",e.shapeArgs={d:b.polarArc(u+x,u,c,c+e.pointWidth)}):(l.height=x,l.y=u,e.tooltipPos=f.inverted?[d.len+d.pos-f.plotLeft-u-x/2,a.len+a.pos-f.plotTop-l.x-l.width/2,x]:[a.left-f.plotLeft+l.x+l.width/2,d.pos-f.plotTop+u+x/2,x])})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:m,crispCol:t.crispCol,drawPoints:t.drawPoints,drawTracker:t.drawTracker,
getColumnMetrics:t.getColumnMetrics,animate:function(){return t.animate.apply(this,arguments)},polarArc:function(){return t.polarArc.apply(this,arguments)},pointAttribs:t.pointAttribs})})(y);(function(a){var p=a.each,r=a.isNumber,v=a.merge,m=a.pick,k=a.pInt,h=a.Series,t=a.seriesType,b=a.TrackerMixin;t("gauge","line",{dataLabels:{enabled:!0,defer:!1,y:15,borderRadius:3,crop:!1,verticalAlign:"top",zIndex:2,borderWidth:1,borderColor:"#cccccc"},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1},
{angular:!0,directTouch:!0,drawGraph:a.noop,fixedBox:!0,forceDL:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var b=this.yAxis,a=this.options,g=b.center;this.generatePoints();p(this.points,function(c){var d=v(a.dial,c.dial),e=k(m(d.radius,80))*g[2]/200,w=k(m(d.baseLength,70))*e/100,l=k(m(d.rearLength,10))*e/100,q=d.baseWidth||3,h=d.topWidth||1,x=a.overshoot,u=b.startAngleRad+b.translate(c.y,null,null,null,!0);r(x)?(x=x/180*Math.PI,u=Math.max(b.startAngleRad-
x,Math.min(b.endAngleRad+x,u))):!1===a.wrap&&(u=Math.max(b.startAngleRad,Math.min(b.endAngleRad,u)));u=180*u/Math.PI;c.shapeType="path";c.shapeArgs={d:d.path||["M",-l,-q/2,"L",w,-q/2,e,-h/2,e,h/2,w,q/2,-l,q/2,"z"],translateX:g[0],translateY:g[1],rotation:u};c.plotX=g[0];c.plotY=g[1]})},drawPoints:function(){var b=this,a=b.yAxis.center,g=b.pivot,c=b.options,f=c.pivot,n=b.chart.renderer;p(b.points,function(d){var a=d.graphic,f=d.shapeArgs,e=f.d,g=v(c.dial,d.dial);a?(a.animate(f),f.d=e):(d.graphic=n[d.shapeType](f).attr({rotation:f.rotation,
zIndex:1}).addClass("highcharts-dial").add(b.group),d.graphic.attr({stroke:g.borderColor||"none","stroke-width":g.borderWidth||0,fill:g.backgroundColor||"#000000"}))});g?g.animate({translateX:a[0],translateY:a[1]}):(b.pivot=n.circle(0,0,m(f.radius,5)).attr({zIndex:2}).addClass("highcharts-pivot").translate(a[0],a[1]).add(b.group),b.pivot.attr({"stroke-width":f.borderWidth||0,stroke:f.borderColor||"#cccccc",fill:f.backgroundColor||"#000000"}))},animate:function(b){var d=this;b||(p(d.points,function(b){var c=
b.graphic;c&&(c.attr({rotation:180*d.yAxis.startAngleRad/Math.PI}),c.animate({rotation:b.shapeArgs.rotation},d.options.animation))}),d.animate=null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);h.prototype.render.call(this);this.group.clip(this.chart.clipRect)},setData:function(b,a){h.prototype.setData.call(this,b,!1);this.processData();this.generatePoints();m(a,!0)&&this.chart.redraw()},drawTracker:b&&b.drawTrackerPoint},
{setState:function(b){this.state=b}})})(y);(function(a){var p=a.each,r=a.noop,v=a.pick,m=a.seriesType,k=a.seriesTypes;m("boxplot","column",{threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eMaximum: {point.high}\x3cbr/\x3eUpper quartile: {point.q3}\x3cbr/\x3eMedian: {point.median}\x3cbr/\x3eLower quartile: {point.q1}\x3cbr/\x3eMinimum: {point.low}\x3cbr/\x3e'},whiskerLength:"50%",fillColor:"#ffffff",lineWidth:1,
medianWidth:2,states:{hover:{brightness:-.3}},whiskerWidth:2},{pointArrayMap:["low","q1","median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]},pointValKey:"high",pointAttribs:function(a){var h=this.options,b=a&&a.color||this.color;return{fill:a.fillColor||h.fillColor||b,stroke:h.lineColor||b,"stroke-width":h.lineWidth||0}},drawDataLabels:r,translate:function(){var a=this.yAxis,m=this.pointArrayMap;k.column.prototype.translate.apply(this);p(this.points,function(b){p(m,
function(d){null!==b[d]&&(b[d+"Plot"]=a.translate(b[d],0,1,0,1))})})},drawPoints:function(){var a=this,k=a.options,b=a.chart.renderer,d,e,g,c,f,n,w=0,l,q,m,x,u=!1!==a.doQuartiles,r,z=a.options.whiskerLength;p(a.points,function(h){var A=h.graphic,p=A?"animate":"attr",t=h.shapeArgs,y={},D={},H={},I=h.color||a.color;void 0!==h.plotY&&(l=t.width,q=Math.floor(t.x),m=q+l,x=Math.round(l/2),d=Math.floor(u?h.q1Plot:h.lowPlot),e=Math.floor(u?h.q3Plot:h.lowPlot),g=Math.floor(h.highPlot),c=Math.floor(h.lowPlot),
A||(h.graphic=A=b.g("point").add(a.group),h.stem=b.path().addClass("highcharts-boxplot-stem").add(A),z&&(h.whiskers=b.path().addClass("highcharts-boxplot-whisker").add(A)),u&&(h.box=b.path(void 0).addClass("highcharts-boxplot-box").add(A)),h.medianShape=b.path(void 0).addClass("highcharts-boxplot-median").add(A)),y.stroke=h.stemColor||k.stemColor||I,y["stroke-width"]=v(h.stemWidth,k.stemWidth,k.lineWidth),y.dashstyle=h.stemDashStyle||k.stemDashStyle,h.stem.attr(y),z&&(D.stroke=h.whiskerColor||k.whiskerColor||
I,D["stroke-width"]=v(h.whiskerWidth,k.whiskerWidth,k.lineWidth),h.whiskers.attr(D)),u&&(A=a.pointAttribs(h),h.box.attr(A)),H.stroke=h.medianColor||k.medianColor||I,H["stroke-width"]=v(h.medianWidth,k.medianWidth,k.lineWidth),h.medianShape.attr(H),n=h.stem.strokeWidth()%2/2,w=q+x+n,h.stem[p]({d:["M",w,e,"L",w,g,"M",w,d,"L",w,c]}),u&&(n=h.box.strokeWidth()%2/2,d=Math.floor(d)+n,e=Math.floor(e)+n,q+=n,m+=n,h.box[p]({d:["M",q,e,"L",q,d,"L",m,d,"L",m,e,"L",q,e,"z"]})),z&&(n=h.whiskers.strokeWidth()%2/
2,g+=n,c+=n,r=/%$/.test(z)?x*parseFloat(z)/100:z/2,h.whiskers[p]({d:["M",w-r,g,"L",w+r,g,"M",w-r,c,"L",w+r,c]})),f=Math.round(h.medianPlot),n=h.medianShape.strokeWidth()%2/2,f+=n,h.medianShape[p]({d:["M",q,f,"L",m,f]}))})},setStackedPoints:r})})(y);(function(a){var p=a.each,r=a.noop,v=a.seriesType,m=a.seriesTypes;v("errorbar","boxplot",{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},
whiskerWidth:null},{type:"errorbar",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:m.arearange?function(){var a=this.pointValKey;m.arearange.prototype.drawDataLabels.call(this);p(this.data,function(h){h.y=h[a]})}:r,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||m.column.prototype.getColumnMetrics.call(this)}})})(y);(function(a){var p=a.correctFloat,r=a.isNumber,v=a.pick,m=a.Point,k=a.Series,
h=a.seriesType,t=a.seriesTypes;h("waterfall","column",{dataLabels:{inside:!0},lineWidth:1,lineColor:"#333333",dashStyle:"dot",borderColor:"#333333",states:{hover:{lineWidthPlus:0}}},{pointValKey:"y",translate:function(){var b=this.options,a=this.yAxis,e,g,c,f,n,h,l,q,k,m,u=v(b.minPointLength,5),r=u/2,z=b.threshold,y=b.stacking,B;t.column.prototype.translate.apply(this);q=k=z;g=this.points;e=0;for(b=g.length;e<b;e++)c=g[e],l=this.processedYData[e],f=c.shapeArgs,n=y&&a.stacks[(this.negStacks&&l<z?"-":
"")+this.stackKey],B=this.getStackIndicator(B,c.x,this.index),m=n?n[c.x].points[B.key]:[0,l],c.isSum?c.y=p(l):c.isIntermediateSum&&(c.y=p(l-k)),h=Math.max(q,q+c.y)+m[0],f.y=a.toPixels(h,!0),c.isSum?(f.y=a.toPixels(m[1],!0),f.height=Math.min(a.toPixels(m[0],!0),a.len)-f.y):c.isIntermediateSum?(f.y=a.toPixels(m[1],!0),f.height=Math.min(a.toPixels(k,!0),a.len)-f.y,k=m[1]):(f.height=0<l?a.toPixels(q,!0)-f.y:a.toPixels(q,!0)-a.toPixels(q-l,!0),q+=n&&n[c.x]?n[c.x].total:l),0>f.height&&(f.y+=f.height,f.height*=
-1),c.plotY=f.y=Math.round(f.y)-this.borderWidth%2/2,f.height=Math.max(Math.round(f.height),.001),c.yBottom=f.y+f.height,f.height<=u&&!c.isNull?(f.height=u,f.y-=r,c.plotY=f.y,c.minPointLengthOffset=0>c.y?-r:r):c.minPointLengthOffset=0,f=c.plotY+(c.negative?f.height:0),this.chart.inverted?c.tooltipPos[0]=a.len-f:c.tooltipPos[1]=f},processData:function(b){var a=this.yData,e=this.options.data,g,c=a.length,f,n,h,l,q,m;n=f=h=l=this.options.threshold||0;for(m=0;m<c;m++)q=a[m],g=e&&e[m]?e[m]:{},"sum"===
q||g.isSum?a[m]=p(n):"intermediateSum"===q||g.isIntermediateSum?a[m]=p(f):(n+=q,f+=q),h=Math.min(n,h),l=Math.max(n,l);k.prototype.processData.call(this,b);this.options.stacking||(this.dataMin=h,this.dataMax=l)},toYData:function(b){return b.isSum?0===b.x?null:"sum":b.isIntermediateSum?0===b.x?null:"intermediateSum":b.y},pointAttribs:function(b,a){var d=this.options.upColor;d&&!b.options.color&&(b.color=0<b.y?d:null);b=t.column.prototype.pointAttribs.call(this,b,a);delete b.dashstyle;return b},getGraphPath:function(){return["M",
0,0]},getCrispPath:function(){var b=this.data,a=b.length,e=this.graph.strokeWidth()+this.borderWidth,e=Math.round(e)%2/2,g=[],c,f,n;for(n=1;n<a;n++)f=b[n].shapeArgs,c=b[n-1].shapeArgs,f=["M",c.x+c.width,c.y+b[n-1].minPointLengthOffset+e,"L",f.x,c.y+b[n-1].minPointLengthOffset+e],0>b[n-1].y&&(f[2]+=c.height,f[5]+=c.height),g=g.concat(f);return g},drawGraph:function(){k.prototype.drawGraph.call(this);this.graph.attr({d:this.getCrispPath()})},setStackedPoints:function(){var b=this.options,a,e;k.prototype.setStackedPoints.apply(this,
arguments);a=this.stackedYData?this.stackedYData.length:0;for(e=1;e<a;e++)b.data[e].isSum||b.data[e].isIntermediateSum||(this.stackedYData[e]+=this.stackedYData[e-1])},getExtremes:function(){if(this.options.stacking)return k.prototype.getExtremes.apply(this,arguments)}},{getClassName:function(){var b=m.prototype.getClassName.call(this);this.isSum?b+=" highcharts-sum":this.isIntermediateSum&&(b+=" highcharts-intermediate-sum");return b},isValid:function(){return r(this.y,!0)||this.isSum||this.isIntermediateSum}})})(y);
(function(a){var p=a.Series,r=a.seriesType,v=a.seriesTypes;r("polygon","scatter",{marker:{enabled:!1,states:{hover:{enabled:!1}}},stickyTracking:!1,tooltip:{followPointer:!0,pointFormat:""},trackByArea:!0},{type:"polygon",getGraphPath:function(){for(var a=p.prototype.getGraphPath.call(this),k=a.length+1;k--;)(k===a.length||"M"===a[k])&&0<k&&a.splice(k,0,"z");return this.areaPath=a},drawGraph:function(){this.options.fillColor=this.color;v.area.prototype.drawGraph.call(this)},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,
drawTracker:p.prototype.drawTracker,setStackedPoints:a.noop})})(y);(function(a){var p=a.arrayMax,r=a.arrayMin,v=a.Axis,m=a.color,k=a.each,h=a.isNumber,t=a.noop,b=a.pick,d=a.pInt,e=a.Point,g=a.Series,c=a.seriesType,f=a.seriesTypes;c("bubble","scatter",{dataLabels:{formatter:function(){return this.point.z},inside:!0,verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1,radius:null,states:{hover:{radiusPlus:0}},symbol:"circle"},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},
tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["markerGroup","dataLabelsGroup"],bubblePadding:!0,zoneAxis:"z",directTouch:!0,pointAttribs:function(a,c){var d=b(this.options.marker.fillOpacity,.5);a=g.prototype.pointAttribs.call(this,a,c);1!==d&&(a.fill=m(a.fill).setOpacity(d).get("rgba"));return a},getRadii:function(b,a,c,d){var f,e,g,n=this.zData,h=[],l=this.options,q=
"width"!==l.sizeBy,k=l.zThreshold,m=a-b;e=0;for(f=n.length;e<f;e++)g=n[e],l.sizeByAbsoluteValue&&null!==g&&(g=Math.abs(g-k),a=Math.max(a-k,Math.abs(b-k)),b=0),null===g?g=null:g<b?g=c/2-1:(g=0<m?(g-b)/m:.5,q&&0<=g&&(g=Math.sqrt(g)),g=Math.ceil(c+g*(d-c))/2),h.push(g);this.radii=h},animate:function(b){var a=this.options.animation;b||(k(this.points,function(b){var c=b.graphic,d;c&&c.width&&(d={x:c.x,y:c.y,width:c.width,height:c.height},c.attr({x:b.plotX,y:b.plotY,width:1,height:1}),c.animate(d,a))}),
this.animate=null)},translate:function(){var b,c=this.data,d,e,g=this.radii;f.scatter.prototype.translate.call(this);for(b=c.length;b--;)d=c[b],e=g?g[b]:0,h(e)&&e>=this.minPxSize/2?(d.marker=a.extend(d.marker,{radius:e,width:2*e,height:2*e}),d.dlBox={x:d.plotX-e,y:d.plotY-e,width:2*e,height:2*e}):d.shapeArgs=d.plotY=d.dlBox=void 0},alignDataLabel:f.column.prototype.alignDataLabel,buildKDTree:t,applyZones:t},{haloPath:function(b){return e.prototype.haloPath.call(this,0===b?0:(this.marker?this.marker.radius||
0:0)+b)},ttBelow:!1});v.prototype.beforePadding=function(){var a=this,c=this.len,f=this.chart,e=0,g=c,m=this.isXAxis,t=m?"xData":"yData",v=this.min,y={},J=Math.min(f.plotWidth,f.plotHeight),B=Number.MAX_VALUE,E=-Number.MAX_VALUE,F=this.max-v,C=c/F,G=[];k(this.series,function(c){var e=c.options;!c.bubblePadding||!c.visible&&f.options.chart.ignoreHiddenSeries||(a.allowZoomOutside=!0,G.push(c),m&&(k(["minSize","maxSize"],function(b){var a=e[b],c=/%$/.test(a),a=d(a);y[b]=c?J*a/100:a}),c.minPxSize=y.minSize,
c.maxPxSize=Math.max(y.maxSize,y.minSize),c=c.zData,c.length&&(B=b(e.zMin,Math.min(B,Math.max(r(c),!1===e.displayNegative?e.zThreshold:-Number.MAX_VALUE))),E=b(e.zMax,Math.max(E,p(c))))))});k(G,function(b){var c=b[t],d=c.length,f;m&&b.getRadii(B,E,b.minPxSize,b.maxPxSize);if(0<F)for(;d--;)h(c[d])&&a.dataMin<=c[d]&&c[d]<=a.dataMax&&(f=b.radii[d],e=Math.min((c[d]-v)*C-f,e),g=Math.max((c[d]-v)*C+f,g))});G.length&&0<F&&!this.isLog&&(g-=c,C*=(c+e-g)/c,k([["min","userMin",e],["max","userMax",g]],function(c){void 0===
b(a.options[c[0]],a[c[1]])&&(a[c[0]]+=c[2]/C)}))}})(y);(function(a){function p(b,a){var d=this.chart,g=this.options.animation,c=this.group,f=this.markerGroup,h=this.xAxis.center,k=d.plotLeft,l=d.plotTop;d.polar?d.renderer.isSVG&&(!0===g&&(g={}),a?(b={translateX:h[0]+k,translateY:h[1]+l,scaleX:.001,scaleY:.001},c.attr(b),f&&f.attr(b)):(b={translateX:k,translateY:l,scaleX:1,scaleY:1},c.animate(b,g),f&&f.animate(b,g),this.animate=null)):b.call(this,a)}var r=a.each,v=a.pick,m=a.seriesTypes,k=a.wrap,h=
a.Series.prototype,t=a.Pointer.prototype;h.searchPointByAngle=function(b){var a=this.chart,e=this.xAxis.pane.center;return this.searchKDTree({clientX:180+-180/Math.PI*Math.atan2(b.chartX-e[0]-a.plotLeft,b.chartY-e[1]-a.plotTop)})};h.getConnectors=function(b,a,e,g){var c,d,h,k,l,m,p,r;d=g?1:0;c=0<=a&&a<=b.length-1?a:0>a?b.length-1+a:0;a=0>c-1?b.length-(1+d):c-1;d=c+1>b.length-1?d:c+1;h=b[a];d=b[d];k=h.plotX;h=h.plotY;l=d.plotX;m=d.plotY;d=b[c].plotX;c=b[c].plotY;k=(1.5*d+k)/2.5;h=(1.5*c+h)/2.5;l=(1.5*
d+l)/2.5;p=(1.5*c+m)/2.5;m=Math.sqrt(Math.pow(k-d,2)+Math.pow(h-c,2));r=Math.sqrt(Math.pow(l-d,2)+Math.pow(p-c,2));k=Math.atan2(h-c,k-d);p=Math.PI/2+(k+Math.atan2(p-c,l-d))/2;Math.abs(k-p)>Math.PI/2&&(p-=Math.PI);k=d+Math.cos(p)*m;h=c+Math.sin(p)*m;l=d+Math.cos(Math.PI+p)*r;p=c+Math.sin(Math.PI+p)*r;d={rightContX:l,rightContY:p,leftContX:k,leftContY:h,plotX:d,plotY:c};e&&(d.prevPointCont=this.getConnectors(b,a,!1,g));return d};k(h,"buildKDTree",function(b){this.chart.polar&&(this.kdByAngle?this.searchPoint=
this.searchPointByAngle:this.options.findNearestPointBy="xy");b.apply(this)});h.toXY=function(b){var a,e=this.chart,g=b.plotX;a=b.plotY;b.rectPlotX=g;b.rectPlotY=a;a=this.xAxis.postTranslate(b.plotX,this.yAxis.len-a);b.plotX=b.polarPlotX=a.x-e.plotLeft;b.plotY=b.polarPlotY=a.y-e.plotTop;this.kdByAngle?(e=(g/Math.PI*180+this.xAxis.pane.options.startAngle)%360,0>e&&(e+=360),b.clientX=e):b.clientX=b.plotX};m.spline&&(k(m.spline.prototype,"getPointSpline",function(a,d,e,g){this.chart.polar?g?(a=this.getConnectors(d,
g,!0,this.connectEnds),a=["C",a.prevPointCont.rightContX,a.prevPointCont.rightContY,a.leftContX,a.leftContY,a.plotX,a.plotY]):a=["M",e.plotX,e.plotY]:a=a.call(this,d,e,g);return a}),m.areasplinerange&&(m.areasplinerange.prototype.getPointSpline=m.spline.prototype.getPointSpline));k(h,"translate",function(a){var b=this.chart;a.call(this);if(b.polar&&(this.kdByAngle=b.tooltip&&b.tooltip.shared,!this.preventPostTranslate))for(a=this.points,b=a.length;b--;)this.toXY(a[b])});k(h,"getGraphPath",function(a,
d){var b=this,g,c,f;if(this.chart.polar){d=d||this.points;for(g=0;g<d.length;g++)if(!d[g].isNull){c=g;break}!1!==this.options.connectEnds&&void 0!==c&&(this.connectEnds=!0,d.splice(d.length,0,d[c]),f=!0);r(d,function(a){void 0===a.polarPlotY&&b.toXY(a)})}g=a.apply(this,[].slice.call(arguments,1));f&&d.pop();return g});k(h,"animate",p);m.column&&(m=m.column.prototype,m.polarArc=function(a,d,e,g){var b=this.xAxis.center,f=this.yAxis.len;return this.chart.renderer.symbols.arc(b[0],b[1],f-d,null,{start:e,
end:g,innerR:f-v(a,f)})},k(m,"animate",p),k(m,"translate",function(a){var b=this.xAxis,e=b.startAngleRad,g,c,f;this.preventPostTranslate=!0;a.call(this);if(b.isRadial)for(g=this.points,f=g.length;f--;)c=g[f],a=c.barX+e,c.shapeType="path",c.shapeArgs={d:this.polarArc(c.yBottom,c.plotY,a,a+c.pointWidth)},this.toXY(c),c.tooltipPos=[c.plotX,c.plotY],c.ttBelow=c.plotY>b.center[1]}),k(m,"alignDataLabel",function(a,d,e,g,c,f){this.chart.polar?(a=d.rectPlotX/Math.PI*180,null===g.align&&(g.align=20<a&&160>
a?"left":200<a&&340>a?"right":"center"),null===g.verticalAlign&&(g.verticalAlign=45>a||315<a?"bottom":135<a&&225>a?"top":"middle"),h.alignDataLabel.call(this,d,e,g,c,f)):a.call(this,d,e,g,c,f)}));k(t,"getCoordinates",function(a,d){var b=this.chart,g={xAxis:[],yAxis:[]};b.polar?r(b.axes,function(a){var c=a.isXAxis,e=a.center,h=d.chartX-e[0]-b.plotLeft,e=d.chartY-e[1]-b.plotTop;g[c?"xAxis":"yAxis"].push({axis:a,value:a.translate(c?Math.PI-Math.atan2(h,e):Math.sqrt(Math.pow(h,2)+Math.pow(e,2)),!0)})}):
g=a.call(this,d);return g});k(a.Chart.prototype,"getAxes",function(b){this.pane||(this.pane=[]);r(a.splat(this.options.pane),function(b){new a.Pane(b,this)},this);b.call(this)});k(a.Chart.prototype,"drawChartBox",function(a){a.call(this);r(this.pane,function(a){a.render()})});k(a.Chart.prototype,"get",function(b,d){return a.find(this.pane,function(a){return a.options.id===d})||b.call(this,d)})})(y)});

/*
 Highcharts JS v5.0.10 (2017-03-31)
 Exporting module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:k(Highcharts)})(function(k){(function(f){var k=f.defaultOptions,n=f.doc,A=f.Chart,w=f.addEvent,F=f.removeEvent,D=f.fireEvent,q=f.createElement,B=f.discardElement,u=f.css,p=f.merge,C=f.pick,h=f.each,r=f.extend,G=f.isTouchDevice,E=f.win,H=f.Renderer.prototype.symbols;r(k.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",
contextButtonTitle:"Chart context menu"});k.navigation={buttonOptions:{theme:{},symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24}};p(!0,k.navigation,{menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",background:"none",color:"#333333",fontSize:G?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",color:"#ffffff"},buttonOptions:{symbolFill:"#666666",
symbolStroke:"#666666",symbolStrokeWidth:3,theme:{fill:"#ffffff",stroke:"none",padding:5}}});k.exporting={type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",_titleKey:"contextButtonTitle",menuItems:[{textKey:"printChart",onclick:function(){this.print()}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChart()}},{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},
{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}]}}};f.post=function(a,b,e){var c;a=q("form",p({method:"post",action:a,enctype:"multipart/form-data"},e),{display:"none"},n.body);for(c in b)q("input",{type:"hidden",name:c,value:b[c]},null,a);a.submit();B(a)};r(A.prototype,{sanitizeSVG:function(a,b){if(b&&b.exporting&&b.exporting.allowHTML){var e=a.match(/<\/svg>(.*?$)/);e&&e[1]&&
(e='\x3cforeignObject x\x3d"0" y\x3d"0" width\x3d"'+b.chart.width+'" height\x3d"'+b.chart.height+'"\x3e\x3cbody xmlns\x3d"http://www.w3.org/1999/xhtml"\x3e'+e[1]+"\x3c/body\x3e\x3c/foreignObject\x3e",a=a.replace("\x3c/svg\x3e",e+"\x3c/svg\x3e"))}a=a.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'\x3csvg xmlns:xlink\x3d"http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g,
" xlink:href\x3d").replace(/\n/," ").replace(/<\/svg>.*?$/,"\x3c/svg\x3e").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1\x3d"rgb($2)" $1-opacity\x3d"$3"').replace(/&nbsp;/g,"\u00a0").replace(/&shy;/g,"\u00ad");return a=a.replace(/<IMG /g,"\x3cimage ").replace(/<(\/?)TITLE>/g,"\x3c$1title\x3e").replace(/height=([^" ]+)/g,'height\x3d"$1"').replace(/width=([^" ]+)/g,'width\x3d"$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href\x3d"$1"/\x3e').replace(/ id=([^" >]+)/g,' id\x3d"$1"').replace(/class=([^" >]+)/g,
'class\x3d"$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(a){return a.toLowerCase()})},getChartHTML:function(){return this.container.innerHTML},getSVG:function(a){var b,e,c,v,m,g=p(this.options,a);n.createElementNS||(n.createElementNS=function(a,b){return n.createElement(b)});e=q("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},n.body);c=this.renderTo.style.width;m=this.renderTo.style.height;
c=g.exporting.sourceWidth||g.chart.width||/px$/.test(c)&&parseInt(c,10)||600;m=g.exporting.sourceHeight||g.chart.height||/px$/.test(m)&&parseInt(m,10)||400;r(g.chart,{animation:!1,renderTo:e,forExport:!0,renderer:"SVGRenderer",width:c,height:m});g.exporting.enabled=!1;delete g.data;g.series=[];h(this.series,function(a){v=p(a.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible});v.isInternal||g.series.push(v)});h(this.axes,function(a){a.userOptions.internalKey||(a.userOptions.internalKey=
f.uniqueKey())});b=new f.Chart(g,this.callback);a&&h(["xAxis","yAxis","series"],function(c){var d={};a[c]&&(d[c]=a[c],b.update(d))});h(this.axes,function(a){var c=f.find(b.axes,function(b){return b.options.internalKey===a.userOptions.internalKey}),d=a.getExtremes(),e=d.userMin,d=d.userMax;!c||void 0===e&&void 0===d||c.setExtremes(e,d,!0,!1)});c=b.getChartHTML();c=this.sanitizeSVG(c,g);g=null;b.destroy();B(e);return c},getSVGForExport:function(a,b){var e=this.options.exporting;return this.getSVG(p({chart:{borderRadius:0}},
e.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||e.sourceWidth,sourceHeight:a&&a.sourceHeight||e.sourceHeight}}))},exportChart:function(a,b){b=this.getSVGForExport(a,b);a=p(this.options.exporting,a);f.post(a.url,{filename:a.filename||"chart",type:a.type,width:a.width||0,scale:a.scale,svg:b},a.formAttributes)},print:function(){var a=this,b=a.container,e=[],c=b.parentNode,f=n.body,m=f.childNodes,g=a.options.exporting.printMaxWidth,d,t;if(!a.isPrinting){a.isPrinting=!0;a.pointer.reset(null,
0);D(a,"beforePrint");if(t=g&&a.chartWidth>g)d=[a.options.chart.width,void 0,!1],a.setSize(g,void 0,!1);h(m,function(a,b){1===a.nodeType&&(e[b]=a.style.display,a.style.display="none")});f.appendChild(b);E.focus();E.print();setTimeout(function(){c.appendChild(b);h(m,function(a,b){1===a.nodeType&&(a.style.display=e[b])});a.isPrinting=!1;t&&a.setSize.apply(a,d);D(a,"afterPrint")},1E3)}},contextMenu:function(a,b,e,c,f,m,g){var d=this,t=d.options.navigation,v=d.chartWidth,k=d.chartHeight,p="cache-"+a,
l=d[p],x=Math.max(f,m),y,z;l||(d[p]=l=q("div",{className:a},{position:"absolute",zIndex:1E3,padding:x+"px"},d.container),y=q("div",{className:"highcharts-menu"},null,l),u(y,r({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},t.menuStyle)),z=function(){u(l,{display:"none"});g&&g.setState(0);d.openMenu=!1},d.exportEvents.push(w(l,"mouseleave",function(){l.hideTimer=setTimeout(z,500)}),w(l,"mouseenter",function(){clearTimeout(l.hideTimer)}),w(n,"mouseup",
function(b){d.pointer.inClass(b.target,a)||z()})),h(b,function(a){if(a){var b;a.separator?b=q("hr",null,null,y):(b=q("div",{className:"highcharts-menu-item",onclick:function(b){b&&b.stopPropagation();z();a.onclick&&a.onclick.apply(d,arguments)},innerHTML:a.text||d.options.lang[a.textKey]},null,y),b.onmouseover=function(){u(this,t.menuItemHoverStyle)},b.onmouseout=function(){u(this,t.menuItemStyle)},u(b,r({cursor:"pointer"},t.menuItemStyle)));d.exportDivElements.push(b)}}),d.exportDivElements.push(y,
l),d.exportMenuWidth=l.offsetWidth,d.exportMenuHeight=l.offsetHeight);b={display:"block"};e+d.exportMenuWidth>v?b.right=v-e-f-x+"px":b.left=e-x+"px";c+m+d.exportMenuHeight>k&&"top"!==g.alignOptions.verticalAlign?b.bottom=k-c-x+"px":b.top=c+m-x+"px";u(l,b);d.openMenu=!0},addButton:function(a){var b=this,e=b.renderer,c=p(b.options.navigation.buttonOptions,a),f=c.onclick,m=c.menuItems,g,d,k=c.symbolSize||12;b.btnCount||(b.btnCount=0);b.exportDivElements||(b.exportDivElements=[],b.exportSVGElements=[]);
if(!1!==c.enabled){var h=c.theme,n=h.states,q=n&&n.hover,n=n&&n.select,l;delete h.states;f?l=function(a){a.stopPropagation();f.call(b,a)}:m&&(l=function(){b.contextMenu(d.menuClassName,m,d.translateX,d.translateY,d.width,d.height,d);d.setState(2)});c.text&&c.symbol?h.paddingLeft=C(h.paddingLeft,25):c.text||r(h,{width:c.width,height:c.height,padding:0});d=e.button(c.text,0,0,l,h,q,n).addClass(a.className).attr({"stroke-linecap":"round",title:b.options.lang[c._titleKey],zIndex:3});d.menuClassName=a.menuClassName||
"highcharts-menu-"+b.btnCount++;c.symbol&&(g=e.symbol(c.symbol,c.symbolX-k/2,c.symbolY-k/2,k,k).addClass("highcharts-button-symbol").attr({zIndex:1}).add(d),g.attr({stroke:c.symbolStroke,fill:c.symbolFill,"stroke-width":c.symbolStrokeWidth||1}));d.add().align(r(c,{width:d.width,x:C(c.x,b.buttonOffset)}),!0,"spacingBox");b.buttonOffset+=(d.width+c.buttonSpacing)*("right"===c.align?-1:1);b.exportSVGElements.push(d,g)}},destroyExport:function(a){var b=a?a.target:this;a=b.exportSVGElements;var e=b.exportDivElements,
c=b.exportEvents,f;a&&(h(a,function(a,c){a&&(a.onclick=a.ontouchstart=null,f="cache-"+a.menuClassName,b[f]&&delete b[f],b.exportSVGElements[c]=a.destroy())}),a.length=0);e&&(h(e,function(a,c){clearTimeout(a.hideTimer);F(a,"mouseleave");b.exportDivElements[c]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=null;B(a)}),e.length=0);c&&(h(c,function(a){a()}),c.length=0)}});H.menu=function(a,b,e,c){return["M",a,b+2.5,"L",a+e,b+2.5,"M",a,b+c/2+.5,"L",a+e,b+c/2+.5,"M",a,b+c-1.5,"L",a+e,b+c-1.5]};A.prototype.renderExporting=
function(){var a,b=this.options.exporting,e=b.buttons,c=this.isDirtyExporting||!this.exportSVGElements;this.buttonOffset=0;this.isDirtyExporting&&this.destroyExport();if(c&&!1!==b.enabled){this.exportEvents=[];for(a in e)this.addButton(e[a]);this.isDirtyExporting=!1}w(this,"destroy",this.destroyExport)};A.prototype.callbacks.push(function(a){a.renderExporting();w(a,"redraw",a.renderExporting);h(["exporting","navigation"],function(b){a[b]={update:function(e,c){a.isDirtyExporting=!0;p(!0,a.options[b],
e);C(c,!0)&&a.redraw()}}})})})(k)});

/*!
 * Vue.js v1.0.26
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vue = factory());
}(this, function () { 'use strict';

  function set(obj, key, val) {
    if (hasOwn(obj, key)) {
      obj[key] = val;
      return;
    }
    if (obj._isVue) {
      set(obj._data, key, val);
      return;
    }
    var ob = obj.__ob__;
    if (!ob) {
      obj[key] = val;
      return;
    }
    ob.convert(key, val);
    ob.dep.notify();
    if (ob.vms) {
      var i = ob.vms.length;
      while (i--) {
        var vm = ob.vms[i];
        vm._proxy(key);
        vm._digest();
      }
    }
    return val;
  }

  /**
   * Delete a property and trigger change if necessary.
   *
   * @param {Object} obj
   * @param {String} key
   */

  function del(obj, key) {
    if (!hasOwn(obj, key)) {
      return;
    }
    delete obj[key];
    var ob = obj.__ob__;
    if (!ob) {
      if (obj._isVue) {
        delete obj._data[key];
        obj._digest();
      }
      return;
    }
    ob.dep.notify();
    if (ob.vms) {
      var i = ob.vms.length;
      while (i--) {
        var vm = ob.vms[i];
        vm._unproxy(key);
        vm._digest();
      }
    }
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check whether the object has the property.
   *
   * @param {Object} obj
   * @param {String} key
   * @return {Boolean}
   */

  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  /**
   * Check if an expression is a literal value.
   *
   * @param {String} exp
   * @return {Boolean}
   */

  var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

  function isLiteral(exp) {
    return literalValueRE.test(exp);
  }

  /**
   * Check if a string starts with $ or _
   *
   * @param {String} str
   * @return {Boolean}
   */

  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }

  /**
   * Guard text output, make sure undefined outputs
   * empty string
   *
   * @param {*} value
   * @return {String}
   */

  function _toString(value) {
    return value == null ? '' : value.toString();
  }

  /**
   * Check and convert possible numeric strings to numbers
   * before setting back to data
   *
   * @param {*} value
   * @return {*|Number}
   */

  function toNumber(value) {
    if (typeof value !== 'string') {
      return value;
    } else {
      var parsed = Number(value);
      return isNaN(parsed) ? value : parsed;
    }
  }

  /**
   * Convert string boolean literals into real booleans.
   *
   * @param {*} value
   * @return {*|Boolean}
   */

  function toBoolean(value) {
    return value === 'true' ? true : value === 'false' ? false : value;
  }

  /**
   * Strip quotes from a string
   *
   * @param {String} str
   * @return {String | false}
   */

  function stripQuotes(str) {
    var a = str.charCodeAt(0);
    var b = str.charCodeAt(str.length - 1);
    return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
  }

  /**
   * Camelize a hyphen-delmited string.
   *
   * @param {String} str
   * @return {String}
   */

  var camelizeRE = /-(\w)/g;

  function camelize(str) {
    return str.replace(camelizeRE, toUpper);
  }

  function toUpper(_, c) {
    return c ? c.toUpperCase() : '';
  }

  /**
   * Hyphenate a camelCase string.
   *
   * @param {String} str
   * @return {String}
   */

  var hyphenateRE = /([a-z\d])([A-Z])/g;

  function hyphenate(str) {
    return str.replace(hyphenateRE, '$1-$2').toLowerCase();
  }

  /**
   * Converts hyphen/underscore/slash delimitered names into
   * camelized classNames.
   *
   * e.g. my-component => MyComponent
   *      some_else    => SomeElse
   *      some/comp    => SomeComp
   *
   * @param {String} str
   * @return {String}
   */

  var classifyRE = /(?:^|[-_\/])(\w)/g;

  function classify(str) {
    return str.replace(classifyRE, toUpper);
  }

  /**
   * Simple bind, faster than native
   *
   * @param {Function} fn
   * @param {Object} ctx
   * @return {Function}
   */

  function bind(fn, ctx) {
    return function (a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    };
  }

  /**
   * Convert an Array-like object to a real Array.
   *
   * @param {Array-like} list
   * @param {Number} [start] - start index
   * @return {Array}
   */

  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
  }

  /**
   * Mix properties into target object.
   *
   * @param {Object} to
   * @param {Object} from
   */

  function extend(to, from) {
    var keys = Object.keys(from);
    var i = keys.length;
    while (i--) {
      to[keys[i]] = from[keys[i]];
    }
    return to;
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   *
   * @param {*} obj
   * @return {Boolean}
   */

  function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   *
   * @param {*} obj
   * @return {Boolean}
   */

  var toString = Object.prototype.toString;
  var OBJECT_STRING = '[object Object]';

  function isPlainObject(obj) {
    return toString.call(obj) === OBJECT_STRING;
  }

  /**
   * Array type check.
   *
   * @param {*} obj
   * @return {Boolean}
   */

  var isArray = Array.isArray;

  /**
   * Define a property.
   *
   * @param {Object} obj
   * @param {String} key
   * @param {*} val
   * @param {Boolean} [enumerable]
   */

  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Debounce a function so it only gets called after the
   * input stops arriving after the given wait period.
   *
   * @param {Function} func
   * @param {Number} wait
   * @return {Function} - the debounced function
   */

  function _debounce(func, wait) {
    var timeout, args, context, timestamp, result;
    var later = function later() {
      var last = Date.now() - timestamp;
      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    };
    return function () {
      context = this;
      args = arguments;
      timestamp = Date.now();
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      return result;
    };
  }

  /**
   * Manual indexOf because it's slightly faster than
   * native.
   *
   * @param {Array} arr
   * @param {*} obj
   */

  function indexOf(arr, obj) {
    var i = arr.length;
    while (i--) {
      if (arr[i] === obj) return i;
    }
    return -1;
  }

  /**
   * Make a cancellable version of an async callback.
   *
   * @param {Function} fn
   * @return {Function}
   */

  function cancellable(fn) {
    var cb = function cb() {
      if (!cb.cancelled) {
        return fn.apply(this, arguments);
      }
    };
    cb.cancel = function () {
      cb.cancelled = true;
    };
    return cb;
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   *
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   */

  function looseEqual(a, b) {
    /* eslint-disable eqeqeq */
    return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
    /* eslint-enable eqeqeq */
  }

  var hasProto = ('__proto__' in {});

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  // UA sniffing for working around browser-specific quirks
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && UA.indexOf('trident') > 0;
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0;
  var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
  var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
  var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

  // detecting iOS UIWebView by indexedDB
  var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

  var transitionProp = undefined;
  var transitionEndEvent = undefined;
  var animationProp = undefined;
  var animationEndEvent = undefined;

  // Transition property/event sniffing
  if (inBrowser && !isIE9) {
    var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
    var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
    transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
    transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
    animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
    animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
  }

  /**
   * Defer a task to execute it asynchronously. Ideally this
   * should be executed as a microtask, so we leverage
   * MutationObserver if it's available, and fallback to
   * setTimeout(0).
   *
   * @param {Function} cb
   * @param {Object} ctx
   */

  var nextTick = (function () {
    var callbacks = [];
    var pending = false;
    var timerFunc;
    function nextTickHandler() {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks = [];
      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }

    /* istanbul ignore if */
    if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
      var counter = 1;
      var observer = new MutationObserver(nextTickHandler);
      var textNode = document.createTextNode(counter);
      observer.observe(textNode, {
        characterData: true
      });
      timerFunc = function () {
        counter = (counter + 1) % 2;
        textNode.data = counter;
      };
    } else {
      // webpack attempts to inject a shim for setImmediate
      // if it is used as a global, so we have to work around that to
      // avoid bundling unnecessary code.
      var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
      timerFunc = context.setImmediate || setTimeout;
    }
    return function (cb, ctx) {
      var func = ctx ? function () {
        cb.call(ctx);
      } : cb;
      callbacks.push(func);
      if (pending) return;
      pending = true;
      timerFunc(nextTickHandler, 0);
    };
  })();

  var _Set = undefined;
  /* istanbul ignore if */
  if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = function () {
      this.set = Object.create(null);
    };
    _Set.prototype.has = function (key) {
      return this.set[key] !== undefined;
    };
    _Set.prototype.add = function (key) {
      this.set[key] = 1;
    };
    _Set.prototype.clear = function () {
      this.set = Object.create(null);
    };
  }

  function Cache(limit) {
    this.size = 0;
    this.limit = limit;
    this.head = this.tail = undefined;
    this._keymap = Object.create(null);
  }

  var p = Cache.prototype;

  /**
   * Put <value> into the cache associated with <key>.
   * Returns the entry which was removed to make room for
   * the new entry. Otherwise undefined is returned.
   * (i.e. if there was enough room already).
   *
   * @param {String} key
   * @param {*} value
   * @return {Entry|undefined}
   */

  p.put = function (key, value) {
    var removed;

    var entry = this.get(key, true);
    if (!entry) {
      if (this.size === this.limit) {
        removed = this.shift();
      }
      entry = {
        key: key
      };
      this._keymap[key] = entry;
      if (this.tail) {
        this.tail.newer = entry;
        entry.older = this.tail;
      } else {
        this.head = entry;
      }
      this.tail = entry;
      this.size++;
    }
    entry.value = value;

    return removed;
  };

  /**
   * Purge the least recently used (oldest) entry from the
   * cache. Returns the removed entry or undefined if the
   * cache was empty.
   */

  p.shift = function () {
    var entry = this.head;
    if (entry) {
      this.head = this.head.newer;
      this.head.older = undefined;
      entry.newer = entry.older = undefined;
      this._keymap[entry.key] = undefined;
      this.size--;
    }
    return entry;
  };

  /**
   * Get and register recent use of <key>. Returns the value
   * associated with <key> or undefined if not in cache.
   *
   * @param {String} key
   * @param {Boolean} returnEntry
   * @return {Entry|*}
   */

  p.get = function (key, returnEntry) {
    var entry = this._keymap[key];
    if (entry === undefined) return;
    if (entry === this.tail) {
      return returnEntry ? entry : entry.value;
    }
    // HEAD--------------TAIL
    //   <.older   .newer>
    //  <--- add direction --
    //   A  B  C  <D>  E
    if (entry.newer) {
      if (entry === this.head) {
        this.head = entry.newer;
      }
      entry.newer.older = entry.older; // C <-- E.
    }
    if (entry.older) {
      entry.older.newer = entry.newer; // C. --> E
    }
    entry.newer = undefined; // D --x
    entry.older = this.tail; // D. --> E
    if (this.tail) {
      this.tail.newer = entry; // E. <-- D
    }
    this.tail = entry;
    return returnEntry ? entry : entry.value;
  };

  var cache$1 = new Cache(1000);
  var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
  var reservedArgRE = /^in$|^-?\d+/;

  /**
   * Parser state
   */

  var str;
  var dir;
  var c;
  var prev;
  var i;
  var l;
  var lastFilterIndex;
  var inSingle;
  var inDouble;
  var curly;
  var square;
  var paren;
  /**
   * Push a filter to the current directive object
   */

  function pushFilter() {
    var exp = str.slice(lastFilterIndex, i).trim();
    var filter;
    if (exp) {
      filter = {};
      var tokens = exp.match(filterTokenRE);
      filter.name = tokens[0];
      if (tokens.length > 1) {
        filter.args = tokens.slice(1).map(processFilterArg);
      }
    }
    if (filter) {
      (dir.filters = dir.filters || []).push(filter);
    }
    lastFilterIndex = i + 1;
  }

  /**
   * Check if an argument is dynamic and strip quotes.
   *
   * @param {String} arg
   * @return {Object}
   */

  function processFilterArg(arg) {
    if (reservedArgRE.test(arg)) {
      return {
        value: toNumber(arg),
        dynamic: false
      };
    } else {
      var stripped = stripQuotes(arg);
      var dynamic = stripped === arg;
      return {
        value: dynamic ? arg : stripped,
        dynamic: dynamic
      };
    }
  }

  /**
   * Parse a directive value and extract the expression
   * and its filters into a descriptor.
   *
   * Example:
   *
   * "a + 1 | uppercase" will yield:
   * {
   *   expression: 'a + 1',
   *   filters: [
   *     { name: 'uppercase', args: null }
   *   ]
   * }
   *
   * @param {String} s
   * @return {Object}
   */

  function parseDirective(s) {
    var hit = cache$1.get(s);
    if (hit) {
      return hit;
    }

    // reset parser state
    str = s;
    inSingle = inDouble = false;
    curly = square = paren = 0;
    lastFilterIndex = 0;
    dir = {};

    for (i = 0, l = str.length; i < l; i++) {
      prev = c;
      c = str.charCodeAt(i);
      if (inSingle) {
        // check single quote
        if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
      } else if (inDouble) {
        // check double quote
        if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
      } else if (c === 0x7C && // pipe
      str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
        if (dir.expression == null) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          dir.expression = str.slice(0, i).trim();
        } else {
          // already has filter
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;break; // "
          case 0x27:
            inSingle = true;break; // '
          case 0x28:
            paren++;break; // (
          case 0x29:
            paren--;break; // )
          case 0x5B:
            square++;break; // [
          case 0x5D:
            square--;break; // ]
          case 0x7B:
            curly++;break; // {
          case 0x7D:
            curly--;break; // }
        }
      }
    }

    if (dir.expression == null) {
      dir.expression = str.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    cache$1.put(s, dir);
    return dir;
  }

var directive = Object.freeze({
    parseDirective: parseDirective
  });

  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
  var cache = undefined;
  var tagRE = undefined;
  var htmlRE = undefined;
  /**
   * Escape a string so it can be used in a RegExp
   * constructor.
   *
   * @param {String} str
   */

  function escapeRegex(str) {
    return str.replace(regexEscapeRE, '\\$&');
  }

  function compileRegex() {
    var open = escapeRegex(config.delimiters[0]);
    var close = escapeRegex(config.delimiters[1]);
    var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
    var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
    tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
    htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
    // reset cache
    cache = new Cache(1000);
  }

  /**
   * Parse a template text string into an array of tokens.
   *
   * @param {String} text
   * @return {Array<Object> | null}
   *               - {String} type
   *               - {String} value
   *               - {Boolean} [html]
   *               - {Boolean} [oneTime]
   */

  function parseText(text) {
    if (!cache) {
      compileRegex();
    }
    var hit = cache.get(text);
    if (hit) {
      return hit;
    }
    if (!tagRE.test(text)) {
      return null;
    }
    var tokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, html, value, first, oneTime;
    /* eslint-disable no-cond-assign */
    while (match = tagRE.exec(text)) {
      /* eslint-enable no-cond-assign */
      index = match.index;
      // push text token
      if (index > lastIndex) {
        tokens.push({
          value: text.slice(lastIndex, index)
        });
      }
      // tag token
      html = htmlRE.test(match[0]);
      value = html ? match[1] : match[2];
      first = value.charCodeAt(0);
      oneTime = first === 42; // *
      value = oneTime ? value.slice(1) : value;
      tokens.push({
        tag: true,
        value: value.trim(),
        html: html,
        oneTime: oneTime
      });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      tokens.push({
        value: text.slice(lastIndex)
      });
    }
    cache.put(text, tokens);
    return tokens;
  }

  /**
   * Format a list of tokens into an expression.
   * e.g. tokens parsed from 'a {{b}} c' can be serialized
   * into one single expression as '"a " + b + " c"'.
   *
   * @param {Array} tokens
   * @param {Vue} [vm]
   * @return {String}
   */

  function tokensToExp(tokens, vm) {
    if (tokens.length > 1) {
      return tokens.map(function (token) {
        return formatToken(token, vm);
      }).join('+');
    } else {
      return formatToken(tokens[0], vm, true);
    }
  }

  /**
   * Format a single token.
   *
   * @param {Object} token
   * @param {Vue} [vm]
   * @param {Boolean} [single]
   * @return {String}
   */

  function formatToken(token, vm, single) {
    return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
  }

  /**
   * For an attribute with multiple interpolation tags,
   * e.g. attr="some-{{thing | filter}}", in order to combine
   * the whole thing into a single watchable expression, we
   * have to inline those filters. This function does exactly
   * that. This is a bit hacky but it avoids heavy changes
   * to directive parser and watcher mechanism.
   *
   * @param {String} exp
   * @param {Boolean} single
   * @return {String}
   */

  var filterRE = /[^|]\|[^|]/;
  function inlineFilters(exp, single) {
    if (!filterRE.test(exp)) {
      return single ? exp : '(' + exp + ')';
    } else {
      var dir = parseDirective(exp);
      if (!dir.filters) {
        return '(' + exp + ')';
      } else {
        return 'this._applyFilters(' + dir.expression + // value
        ',null,' + // oldValue (null for read)
        JSON.stringify(dir.filters) + // filter descriptors
        ',false)'; // write?
      }
    }
  }

var text = Object.freeze({
    compileRegex: compileRegex,
    parseText: parseText,
    tokensToExp: tokensToExp
  });

  var delimiters = ['{{', '}}'];
  var unsafeDelimiters = ['{{{', '}}}'];

  var config = Object.defineProperties({

    /**
     * Whether to print debug messages.
     * Also enables stack trace for warnings.
     *
     * @type {Boolean}
     */

    debug: false,

    /**
     * Whether to suppress warnings.
     *
     * @type {Boolean}
     */

    silent: false,

    /**
     * Whether to use async rendering.
     */

    async: true,

    /**
     * Whether to warn against errors caught when evaluating
     * expressions.
     */

    warnExpressionErrors: true,

    /**
     * Whether to allow devtools inspection.
     * Disabled by default in production builds.
     */

    devtools: 'development' !== 'production',

    /**
     * Internal flag to indicate the delimiters have been
     * changed.
     *
     * @type {Boolean}
     */

    _delimitersChanged: true,

    /**
     * List of asset types that a component can own.
     *
     * @type {Array}
     */

    _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

    /**
     * prop binding modes
     */

    _propBindingModes: {
      ONE_WAY: 0,
      TWO_WAY: 1,
      ONE_TIME: 2
    },

    /**
     * Max circular updates allowed in a batcher flush cycle.
     */

    _maxUpdateCount: 100

  }, {
    delimiters: { /**
                   * Interpolation delimiters. Changing these would trigger
                   * the text parser to re-compile the regular expressions.
                   *
                   * @type {Array<String>}
                   */

      get: function get() {
        return delimiters;
      },
      set: function set(val) {
        delimiters = val;
        compileRegex();
      },
      configurable: true,
      enumerable: true
    },
    unsafeDelimiters: {
      get: function get() {
        return unsafeDelimiters;
      },
      set: function set(val) {
        unsafeDelimiters = val;
        compileRegex();
      },
      configurable: true,
      enumerable: true
    }
  });

  var warn = undefined;
  var formatComponentName = undefined;

  if ('development' !== 'production') {
    (function () {
      var hasConsole = typeof console !== 'undefined';

      warn = function (msg, vm) {
        if (hasConsole && !config.silent) {
          console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
        }
      };

      formatComponentName = function (vm) {
        var name = vm._isVue ? vm.$options.name : vm.name;
        return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
      };
    })();
  }

  /**
   * Append with transition.
   *
   * @param {Element} el
   * @param {Element} target
   * @param {Vue} vm
   * @param {Function} [cb]
   */

  function appendWithTransition(el, target, vm, cb) {
    applyTransition(el, 1, function () {
      target.appendChild(el);
    }, vm, cb);
  }

  /**
   * InsertBefore with transition.
   *
   * @param {Element} el
   * @param {Element} target
   * @param {Vue} vm
   * @param {Function} [cb]
   */

  function beforeWithTransition(el, target, vm, cb) {
    applyTransition(el, 1, function () {
      before(el, target);
    }, vm, cb);
  }

  /**
   * Remove with transition.
   *
   * @param {Element} el
   * @param {Vue} vm
   * @param {Function} [cb]
   */

  function removeWithTransition(el, vm, cb) {
    applyTransition(el, -1, function () {
      remove(el);
    }, vm, cb);
  }

  /**
   * Apply transitions with an operation callback.
   *
   * @param {Element} el
   * @param {Number} direction
   *                  1: enter
   *                 -1: leave
   * @param {Function} op - the actual DOM operation
   * @param {Vue} vm
   * @param {Function} [cb]
   */

  function applyTransition(el, direction, op, vm, cb) {
    var transition = el.__v_trans;
    if (!transition ||
    // skip if there are no js hooks and CSS transition is
    // not supported
    !transition.hooks && !transitionEndEvent ||
    // skip transitions for initial compile
    !vm._isCompiled ||
    // if the vm is being manipulated by a parent directive
    // during the parent's compilation phase, skip the
    // animation.
    vm.$parent && !vm.$parent._isCompiled) {
      op();
      if (cb) cb();
      return;
    }
    var action = direction > 0 ? 'enter' : 'leave';
    transition[action](op, cb);
  }

var transition = Object.freeze({
    appendWithTransition: appendWithTransition,
    beforeWithTransition: beforeWithTransition,
    removeWithTransition: removeWithTransition,
    applyTransition: applyTransition
  });

  /**
   * Query an element selector if it's not an element already.
   *
   * @param {String|Element} el
   * @return {Element}
   */

  function query(el) {
    if (typeof el === 'string') {
      var selector = el;
      el = document.querySelector(el);
      if (!el) {
        'development' !== 'production' && warn('Cannot find element: ' + selector);
      }
    }
    return el;
  }

  /**
   * Check if a node is in the document.
   * Note: document.documentElement.contains should work here
   * but always returns false for comment nodes in phantomjs,
   * making unit tests difficult. This is fixed by doing the
   * contains() check on the node's parentNode instead of
   * the node itself.
   *
   * @param {Node} node
   * @return {Boolean}
   */

  function inDoc(node) {
    if (!node) return false;
    var doc = node.ownerDocument.documentElement;
    var parent = node.parentNode;
    return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
  }

  /**
   * Get and remove an attribute from a node.
   *
   * @param {Node} node
   * @param {String} _attr
   */

  function getAttr(node, _attr) {
    var val = node.getAttribute(_attr);
    if (val !== null) {
      node.removeAttribute(_attr);
    }
    return val;
  }

  /**
   * Get an attribute with colon or v-bind: prefix.
   *
   * @param {Node} node
   * @param {String} name
   * @return {String|null}
   */

  function getBindAttr(node, name) {
    var val = getAttr(node, ':' + name);
    if (val === null) {
      val = getAttr(node, 'v-bind:' + name);
    }
    return val;
  }

  /**
   * Check the presence of a bind attribute.
   *
   * @param {Node} node
   * @param {String} name
   * @return {Boolean}
   */

  function hasBindAttr(node, name) {
    return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  function before(el, target) {
    target.parentNode.insertBefore(el, target);
  }

  /**
   * Insert el after target
   *
   * @param {Element} el
   * @param {Element} target
   */

  function after(el, target) {
    if (target.nextSibling) {
      before(el, target.nextSibling);
    } else {
      target.parentNode.appendChild(el);
    }
  }

  /**
   * Remove el from DOM
   *
   * @param {Element} el
   */

  function remove(el) {
    el.parentNode.removeChild(el);
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  function prepend(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  }

  /**
   * Replace target with el
   *
   * @param {Element} target
   * @param {Element} el
   */

  function replace(target, el) {
    var parent = target.parentNode;
    if (parent) {
      parent.replaceChild(el, target);
    }
  }

  /**
   * Add event listener shorthand.
   *
   * @param {Element} el
   * @param {String} event
   * @param {Function} cb
   * @param {Boolean} [useCapture]
   */

  function on(el, event, cb, useCapture) {
    el.addEventListener(event, cb, useCapture);
  }

  /**
   * Remove event listener shorthand.
   *
   * @param {Element} el
   * @param {String} event
   * @param {Function} cb
   */

  function off(el, event, cb) {
    el.removeEventListener(event, cb);
  }

  /**
   * For IE9 compat: when both class and :class are present
   * getAttribute('class') returns wrong value...
   *
   * @param {Element} el
   * @return {String}
   */

  function getClass(el) {
    var classname = el.className;
    if (typeof classname === 'object') {
      classname = classname.baseVal || '';
    }
    return classname;
  }

  /**
   * In IE9, setAttribute('class') will result in empty class
   * if the element also has the :class attribute; However in
   * PhantomJS, setting `className` does not work on SVG elements...
   * So we have to do a conditional check here.
   *
   * @param {Element} el
   * @param {String} cls
   */

  function setClass(el, cls) {
    /* istanbul ignore if */
    if (isIE9 && !/svg$/.test(el.namespaceURI)) {
      el.className = cls;
    } else {
      el.setAttribute('class', cls);
    }
  }

  /**
   * Add class with compatibility for IE & SVG
   *
   * @param {Element} el
   * @param {String} cls
   */

  function addClass(el, cls) {
    if (el.classList) {
      el.classList.add(cls);
    } else {
      var cur = ' ' + getClass(el) + ' ';
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        setClass(el, (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for IE & SVG
   *
   * @param {Element} el
   * @param {String} cls
   */

  function removeClass(el, cls) {
    if (el.classList) {
      el.classList.remove(cls);
    } else {
      var cur = ' ' + getClass(el) + ' ';
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      setClass(el, cur.trim());
    }
    if (!el.className) {
      el.removeAttribute('class');
    }
  }

  /**
   * Extract raw content inside an element into a temporary
   * container div
   *
   * @param {Element} el
   * @param {Boolean} asFragment
   * @return {Element|DocumentFragment}
   */

  function extractContent(el, asFragment) {
    var child;
    var rawContent;
    /* istanbul ignore if */
    if (isTemplate(el) && isFragment(el.content)) {
      el = el.content;
    }
    if (el.hasChildNodes()) {
      trimNode(el);
      rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
      /* eslint-disable no-cond-assign */
      while (child = el.firstChild) {
        /* eslint-enable no-cond-assign */
        rawContent.appendChild(child);
      }
    }
    return rawContent;
  }

  /**
   * Trim possible empty head/tail text and comment
   * nodes inside a parent.
   *
   * @param {Node} node
   */

  function trimNode(node) {
    var child;
    /* eslint-disable no-sequences */
    while ((child = node.firstChild, isTrimmable(child))) {
      node.removeChild(child);
    }
    while ((child = node.lastChild, isTrimmable(child))) {
      node.removeChild(child);
    }
    /* eslint-enable no-sequences */
  }

  function isTrimmable(node) {
    return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
  }

  /**
   * Check if an element is a template tag.
   * Note if the template appears inside an SVG its tagName
   * will be in lowercase.
   *
   * @param {Element} el
   */

  function isTemplate(el) {
    return el.tagName && el.tagName.toLowerCase() === 'template';
  }

  /**
   * Create an "anchor" for performing dom insertion/removals.
   * This is used in a number of scenarios:
   * - fragment instance
   * - v-html
   * - v-if
   * - v-for
   * - component
   *
   * @param {String} content
   * @param {Boolean} persist - IE trashes empty textNodes on
   *                            cloneNode(true), so in certain
   *                            cases the anchor needs to be
   *                            non-empty to be persisted in
   *                            templates.
   * @return {Comment|Text}
   */

  function createAnchor(content, persist) {
    var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
    anchor.__v_anchor = true;
    return anchor;
  }

  /**
   * Find a component ref attribute that starts with $.
   *
   * @param {Element} node
   * @return {String|undefined}
   */

  var refRE = /^v-ref:/;

  function findRef(node) {
    if (node.hasAttributes()) {
      var attrs = node.attributes;
      for (var i = 0, l = attrs.length; i < l; i++) {
        var name = attrs[i].name;
        if (refRE.test(name)) {
          return camelize(name.replace(refRE, ''));
        }
      }
    }
  }

  /**
   * Map a function to a range of nodes .
   *
   * @param {Node} node
   * @param {Node} end
   * @param {Function} op
   */

  function mapNodeRange(node, end, op) {
    var next;
    while (node !== end) {
      next = node.nextSibling;
      op(node);
      node = next;
    }
    op(end);
  }

  /**
   * Remove a range of nodes with transition, store
   * the nodes in a fragment with correct ordering,
   * and call callback when done.
   *
   * @param {Node} start
   * @param {Node} end
   * @param {Vue} vm
   * @param {DocumentFragment} frag
   * @param {Function} cb
   */

  function removeNodeRange(start, end, vm, frag, cb) {
    var done = false;
    var removed = 0;
    var nodes = [];
    mapNodeRange(start, end, function (node) {
      if (node === end) done = true;
      nodes.push(node);
      removeWithTransition(node, vm, onRemoved);
    });
    function onRemoved() {
      removed++;
      if (done && removed >= nodes.length) {
        for (var i = 0; i < nodes.length; i++) {
          frag.appendChild(nodes[i]);
        }
        cb && cb();
      }
    }
  }

  /**
   * Check if a node is a DocumentFragment.
   *
   * @param {Node} node
   * @return {Boolean}
   */

  function isFragment(node) {
    return node && node.nodeType === 11;
  }

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   *
   * @param {Element} el
   * @return {String}
   */

  function getOuterHTML(el) {
    if (el.outerHTML) {
      return el.outerHTML;
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML;
    }
  }

  var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
  var reservedTagRE = /^(slot|partial|component)$/i;

  var isUnknownElement = undefined;
  if ('development' !== 'production') {
    isUnknownElement = function (el, tag) {
      if (tag.indexOf('-') > -1) {
        // http://stackoverflow.com/a/28210364/1070244
        return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
      } else {
        return (/HTMLUnknownElement/.test(el.toString()) &&
          // Chrome returns unknown for several HTML5 elements.
          // https://code.google.com/p/chromium/issues/detail?id=540526
          // Firefox returns unknown for some "Interactive elements."
          !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
        );
      }
    };
  }

  /**
   * Check if an element is a component, if yes return its
   * component id.
   *
   * @param {Element} el
   * @param {Object} options
   * @return {Object|undefined}
   */

  function checkComponentAttr(el, options) {
    var tag = el.tagName.toLowerCase();
    var hasAttrs = el.hasAttributes();
    if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
      if (resolveAsset(options, 'components', tag)) {
        return { id: tag };
      } else {
        var is = hasAttrs && getIsBinding(el, options);
        if (is) {
          return is;
        } else if ('development' !== 'production') {
          var expectedTag = options._componentNameMap && options._componentNameMap[tag];
          if (expectedTag) {
            warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
          } else if (isUnknownElement(el, tag)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
          }
        }
      }
    } else if (hasAttrs) {
      return getIsBinding(el, options);
    }
  }

  /**
   * Get "is" binding from an element.
   *
   * @param {Element} el
   * @param {Object} options
   * @return {Object|undefined}
   */

  function getIsBinding(el, options) {
    // dynamic syntax
    var exp = el.getAttribute('is');
    if (exp != null) {
      if (resolveAsset(options, 'components', exp)) {
        el.removeAttribute('is');
        return { id: exp };
      }
    } else {
      exp = getBindAttr(el, 'is');
      if (exp != null) {
        return { id: exp, dynamic: true };
      }
    }
  }

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   *
   * All strategy functions follow the same signature:
   *
   * @param {*} parentVal
   * @param {*} childVal
   * @param {Vue} [vm]
   */

  var strats = config.optionMergeStrategies = Object.create(null);

  /**
   * Helper that recursively merges two data objects together.
   */

  function mergeData(to, from) {
    var key, toVal, fromVal;
    for (key in from) {
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (isObject(toVal) && isObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }
    return to;
  }

  /**
   * Data
   */

  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }
      if (typeof childVal !== 'function') {
        'development' !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
        return parentVal;
      }
      if (!parentVal) {
        return childVal;
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn() {
        return mergeData(childVal.call(this), parentVal.call(this));
      };
    } else if (parentVal || childVal) {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  };

  /**
   * El
   */

  strats.el = function (parentVal, childVal, vm) {
    if (!vm && childVal && typeof childVal !== 'function') {
      'development' !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return;
    }
    var ret = childVal || parentVal;
    // invoke the element factory if this is instance merge
    return vm && typeof ret === 'function' ? ret.call(vm) : ret;
  };

  /**
   * Hooks and param attributes are merged as arrays.
   */

  strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
    return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
  };

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */

  function mergeAssets(parentVal, childVal) {
    var res = Object.create(parentVal || null);
    return childVal ? extend(res, guardArrayAssets(childVal)) : res;
  }

  config._assetTypes.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Events & Watchers.
   *
   * Events & watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */

  strats.watch = strats.events = function (parentVal, childVal) {
    if (!childVal) return parentVal;
    if (!parentVal) return childVal;
    var ret = {};
    extend(ret, parentVal);
    for (var key in childVal) {
      var parent = ret[key];
      var child = childVal[key];
      if (parent && !isArray(parent)) {
        parent = [parent];
      }
      ret[key] = parent ? parent.concat(child) : [child];
    }
    return ret;
  };

  /**
   * Other object hashes.
   */

  strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
    if (!childVal) return parentVal;
    if (!parentVal) return childVal;
    var ret = Object.create(null);
    extend(ret, parentVal);
    extend(ret, childVal);
    return ret;
  };

  /**
   * Default strategy.
   */

  var defaultStrat = function defaultStrat(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };

  /**
   * Make sure component options get converted to actual
   * constructors.
   *
   * @param {Object} options
   */

  function guardComponents(options) {
    if (options.components) {
      var components = options.components = guardArrayAssets(options.components);
      var ids = Object.keys(components);
      var def;
      if ('development' !== 'production') {
        var map = options._componentNameMap = {};
      }
      for (var i = 0, l = ids.length; i < l; i++) {
        var key = ids[i];
        if (commonTagRE.test(key) || reservedTagRE.test(key)) {
          'development' !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
          continue;
        }
        // record a all lowercase <-> kebab-case mapping for
        // possible custom element case error warning
        if ('development' !== 'production') {
          map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
        }
        def = components[key];
        if (isPlainObject(def)) {
          components[key] = Vue.extend(def);
        }
      }
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   *
   * @param {Object} options
   */

  function guardProps(options) {
    var props = options.props;
    var i, val;
    if (isArray(props)) {
      options.props = {};
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          options.props[val] = null;
        } else if (val.name) {
          options.props[val.name] = val;
        }
      }
    } else if (isPlainObject(props)) {
      var keys = Object.keys(props);
      i = keys.length;
      while (i--) {
        val = props[keys[i]];
        if (typeof val === 'function') {
          props[keys[i]] = { type: val };
        }
      }
    }
  }

  /**
   * Guard an Array-format assets option and converted it
   * into the key-value Object format.
   *
   * @param {Object|Array} assets
   * @return {Object}
   */

  function guardArrayAssets(assets) {
    if (isArray(assets)) {
      var res = {};
      var i = assets.length;
      var asset;
      while (i--) {
        asset = assets[i];
        var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
        if (!id) {
          'development' !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
        } else {
          res[id] = asset;
        }
      }
      return res;
    }
    return assets;
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   *
   * @param {Object} parent
   * @param {Object} child
   * @param {Vue} [vm] - if vm is present, indicates this is
   *                     an instantiation merge.
   */

  function mergeOptions(parent, child, vm) {
    guardComponents(child);
    guardProps(child);
    if ('development' !== 'production') {
      if (child.propsData && !vm) {
        warn('propsData can only be used as an instantiation option.');
      }
    }
    var options = {};
    var key;
    if (child['extends']) {
      parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        var mixin = child.mixins[i];
        var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
        parent = mergeOptions(parent, mixinOptions, vm);
      }
    }
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   *
   * @param {Object} options
   * @param {String} type
   * @param {String} id
   * @param {Boolean} warnMissing
   * @return {Object|Function}
   */

  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }
    var assets = options[type];
    var camelizedId;
    var res = assets[id] ||
    // camelCase ID
    assets[camelizedId = camelize(id)] ||
    // Pascal Case ID
    assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
    if ('development' !== 'production' && warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }
    return res;
  }

  var uid$1 = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   *
   * @constructor
   */
  function Dep() {
    this.id = uid$1++;
    this.subs = [];
  }

  // the current target watcher being evaluated.
  // this is globally unique because there could be only one
  // watcher being evaluated at any time.
  Dep.target = null;

  /**
   * Add a directive subscriber.
   *
   * @param {Directive} sub
   */

  Dep.prototype.addSub = function (sub) {
    this.subs.push(sub);
  };

  /**
   * Remove a directive subscriber.
   *
   * @param {Directive} sub
   */

  Dep.prototype.removeSub = function (sub) {
    this.subs.$remove(sub);
  };

  /**
   * Add self as a dependency to the target watcher.
   */

  Dep.prototype.depend = function () {
    Dep.target.addDep(this);
  };

  /**
   * Notify all subscribers of a new value.
   */

  Dep.prototype.notify = function () {
    // stablize the subscriber list first
    var subs = toArray(this.subs);
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto)

  /**
   * Intercept mutating methods and emit events
   */

  ;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      // avoid leaking arguments:
      // http://jsperf.com/closure-with-arguments
      var i = arguments.length;
      var args = new Array(i);
      while (i--) {
        args[i] = arguments[i];
      }
      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
          inserted = args;
          break;
        case 'unshift':
          inserted = args;
          break;
        case 'splice':
          inserted = args.slice(2);
          break;
      }
      if (inserted) ob.observeArray(inserted);
      // notify change
      ob.dep.notify();
      return result;
    });
  });

  /**
   * Swap the element at the given index with a new value
   * and emits corresponding event.
   *
   * @param {Number} index
   * @param {*} val
   * @return {*} - replaced element
   */

  def(arrayProto, '$set', function $set(index, val) {
    if (index >= this.length) {
      this.length = Number(index) + 1;
    }
    return this.splice(index, 1, val)[0];
  });

  /**
   * Convenience method to remove the element at given index or target element reference.
   *
   * @param {*} item
   */

  def(arrayProto, '$remove', function $remove(item) {
    /* istanbul ignore if */
    if (!this.length) return;
    var index = indexOf(this, item);
    if (index > -1) {
      return this.splice(index, 1);
    }
  });

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * By default, when a reactive property is set, the new value is
   * also converted to become reactive. However in certain cases, e.g.
   * v-for scope alias and props, we don't want to force conversion
   * because the value may be a nested value under a frozen data structure.
   *
   * So whenever we want to set a reactive property without forcing
   * conversion on the new value, we wrap that call inside this function.
   */

  var shouldConvert = true;

  function withoutConversion(fn) {
    shouldConvert = false;
    fn();
    shouldConvert = true;
  }

  /**
   * Observer class that are attached to each observed
   * object. Once attached, the observer converts target
   * object's property keys into getter/setters that
   * collect dependencies and dispatches updates.
   *
   * @param {Array|Object} value
   * @constructor
   */

  function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    def(value, '__ob__', this);
    if (isArray(value)) {
      var augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  // Instance methods

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   *
   * @param {Object} obj
   */

  Observer.prototype.walk = function (obj) {
    var keys = Object.keys(obj);
    for (var i = 0, l = keys.length; i < l; i++) {
      this.convert(keys[i], obj[keys[i]]);
    }
  };

  /**
   * Observe a list of Array items.
   *
   * @param {Array} items
   */

  Observer.prototype.observeArray = function (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  /**
   * Convert a property into getter/setter so we can emit
   * the events when the property is accessed/changed.
   *
   * @param {String} key
   * @param {*} val
   */

  Observer.prototype.convert = function (key, val) {
    defineReactive(this.value, key, val);
  };

  /**
   * Add an owner vm, so that when $set/$delete mutations
   * happen we can notify owner vms to proxy the keys and
   * digest the watchers. This is only called when the object
   * is observed as an instance's root $data.
   *
   * @param {Vue} vm
   */

  Observer.prototype.addVm = function (vm) {
    (this.vms || (this.vms = [])).push(vm);
  };

  /**
   * Remove an owner vm. This is called when the object is
   * swapped out as an instance's $data object.
   *
   * @param {Vue} vm
   */

  Observer.prototype.removeVm = function (vm) {
    this.vms.$remove(vm);
  };

  // helpers

  /**
   * Augment an target Object or Array by intercepting
   * the prototype chain using __proto__
   *
   * @param {Object|Array} target
   * @param {Object} src
   */

  function protoAugment(target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment an target Object or Array by defining
   * hidden properties.
   *
   * @param {Object|Array} target
   * @param {Object} proto
   */

  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   *
   * @param {*} value
   * @param {Vue} [vm]
   * @return {Observer|undefined}
   * @static
   */

  function observe(value, vm) {
    if (!value || typeof value !== 'object') {
      return;
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }
    if (ob && vm) {
      ob.addVm(vm);
    }
    return ob;
  }

  /**
   * Define a reactive property on an Object.
   *
   * @param {Object} obj
   * @param {String} key
   * @param {*} val
   */

  function defineReactive(obj, key, val) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return;
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;

    var childOb = observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
          }
          if (isArray(value)) {
            for (var e, i = 0, l = value.length; i < l; i++) {
              e = value[i];
              e && e.__ob__ && e.__ob__.dep.depend();
            }
          }
        }
        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        if (newVal === value) {
          return;
        }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = observe(newVal);
        dep.notify();
      }
    });
  }



  var util = Object.freeze({
  	defineReactive: defineReactive,
  	set: set,
  	del: del,
  	hasOwn: hasOwn,
  	isLiteral: isLiteral,
  	isReserved: isReserved,
  	_toString: _toString,
  	toNumber: toNumber,
  	toBoolean: toBoolean,
  	stripQuotes: stripQuotes,
  	camelize: camelize,
  	hyphenate: hyphenate,
  	classify: classify,
  	bind: bind,
  	toArray: toArray,
  	extend: extend,
  	isObject: isObject,
  	isPlainObject: isPlainObject,
  	def: def,
  	debounce: _debounce,
  	indexOf: indexOf,
  	cancellable: cancellable,
  	looseEqual: looseEqual,
  	isArray: isArray,
  	hasProto: hasProto,
  	inBrowser: inBrowser,
  	devtools: devtools,
  	isIE: isIE,
  	isIE9: isIE9,
  	isAndroid: isAndroid,
  	isIos: isIos,
  	iosVersionMatch: iosVersionMatch,
  	iosVersion: iosVersion,
  	hasMutationObserverBug: hasMutationObserverBug,
  	get transitionProp () { return transitionProp; },
  	get transitionEndEvent () { return transitionEndEvent; },
  	get animationProp () { return animationProp; },
  	get animationEndEvent () { return animationEndEvent; },
  	nextTick: nextTick,
  	get _Set () { return _Set; },
  	query: query,
  	inDoc: inDoc,
  	getAttr: getAttr,
  	getBindAttr: getBindAttr,
  	hasBindAttr: hasBindAttr,
  	before: before,
  	after: after,
  	remove: remove,
  	prepend: prepend,
  	replace: replace,
  	on: on,
  	off: off,
  	setClass: setClass,
  	addClass: addClass,
  	removeClass: removeClass,
  	extractContent: extractContent,
  	trimNode: trimNode,
  	isTemplate: isTemplate,
  	createAnchor: createAnchor,
  	findRef: findRef,
  	mapNodeRange: mapNodeRange,
  	removeNodeRange: removeNodeRange,
  	isFragment: isFragment,
  	getOuterHTML: getOuterHTML,
  	mergeOptions: mergeOptions,
  	resolveAsset: resolveAsset,
  	checkComponentAttr: checkComponentAttr,
  	commonTagRE: commonTagRE,
  	reservedTagRE: reservedTagRE,
  	get warn () { return warn; }
  });

  var uid = 0;

  function initMixin (Vue) {
    /**
     * The main init sequence. This is called for every
     * instance, including ones that are created from extended
     * constructors.
     *
     * @param {Object} options - this options object should be
     *                           the result of merging class
     *                           options and the options passed
     *                           in to the constructor.
     */

    Vue.prototype._init = function (options) {
      options = options || {};

      this.$el = null;
      this.$parent = options.parent;
      this.$root = this.$parent ? this.$parent.$root : this;
      this.$children = [];
      this.$refs = {}; // child vm references
      this.$els = {}; // element references
      this._watchers = []; // all watchers as an array
      this._directives = []; // all directives

      // a uid
      this._uid = uid++;

      // a flag to avoid this being observed
      this._isVue = true;

      // events bookkeeping
      this._events = {}; // registered callbacks
      this._eventsCount = {}; // for $broadcast optimization

      // fragment instance properties
      this._isFragment = false;
      this._fragment = // @type {DocumentFragment}
      this._fragmentStart = // @type {Text|Comment}
      this._fragmentEnd = null; // @type {Text|Comment}

      // lifecycle state
      this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
      this._unlinkFn = null;

      // context:
      // if this is a transcluded component, context
      // will be the common parent vm of this instance
      // and its host.
      this._context = options._context || this.$parent;

      // scope:
      // if this is inside an inline v-for, the scope
      // will be the intermediate scope created for this
      // repeat fragment. this is used for linking props
      // and container directives.
      this._scope = options._scope;

      // fragment:
      // if this instance is compiled inside a Fragment, it
      // needs to reigster itself as a child of that fragment
      // for attach/detach to work properly.
      this._frag = options._frag;
      if (this._frag) {
        this._frag.children.push(this);
      }

      // push self into parent / transclusion host
      if (this.$parent) {
        this.$parent.$children.push(this);
      }

      // merge options.
      options = this.$options = mergeOptions(this.constructor.options, options, this);

      // set ref
      this._updateRef();

      // initialize data as empty object.
      // it will be filled up in _initData().
      this._data = {};

      // call init hook
      this._callHook('init');

      // initialize data observation and scope inheritance.
      this._initState();

      // setup event system and option events.
      this._initEvents();

      // call created hook
      this._callHook('created');

      // if `el` option is passed, start compilation.
      if (options.el) {
        this.$mount(options.el);
      }
    };
  }

  var pathCache = new Cache(1000);

  // actions
  var APPEND = 0;
  var PUSH = 1;
  var INC_SUB_PATH_DEPTH = 2;
  var PUSH_SUB_PATH = 3;

  // states
  var BEFORE_PATH = 0;
  var IN_PATH = 1;
  var BEFORE_IDENT = 2;
  var IN_IDENT = 3;
  var IN_SUB_PATH = 4;
  var IN_SINGLE_QUOTE = 5;
  var IN_DOUBLE_QUOTE = 6;
  var AFTER_PATH = 7;
  var ERROR = 8;

  var pathStateMachine = [];

  pathStateMachine[BEFORE_PATH] = {
    'ws': [BEFORE_PATH],
    'ident': [IN_IDENT, APPEND],
    '[': [IN_SUB_PATH],
    'eof': [AFTER_PATH]
  };

  pathStateMachine[IN_PATH] = {
    'ws': [IN_PATH],
    '.': [BEFORE_IDENT],
    '[': [IN_SUB_PATH],
    'eof': [AFTER_PATH]
  };

  pathStateMachine[BEFORE_IDENT] = {
    'ws': [BEFORE_IDENT],
    'ident': [IN_IDENT, APPEND]
  };

  pathStateMachine[IN_IDENT] = {
    'ident': [IN_IDENT, APPEND],
    '0': [IN_IDENT, APPEND],
    'number': [IN_IDENT, APPEND],
    'ws': [IN_PATH, PUSH],
    '.': [BEFORE_IDENT, PUSH],
    '[': [IN_SUB_PATH, PUSH],
    'eof': [AFTER_PATH, PUSH]
  };

  pathStateMachine[IN_SUB_PATH] = {
    "'": [IN_SINGLE_QUOTE, APPEND],
    '"': [IN_DOUBLE_QUOTE, APPEND],
    '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
    ']': [IN_PATH, PUSH_SUB_PATH],
    'eof': ERROR,
    'else': [IN_SUB_PATH, APPEND]
  };

  pathStateMachine[IN_SINGLE_QUOTE] = {
    "'": [IN_SUB_PATH, APPEND],
    'eof': ERROR,
    'else': [IN_SINGLE_QUOTE, APPEND]
  };

  pathStateMachine[IN_DOUBLE_QUOTE] = {
    '"': [IN_SUB_PATH, APPEND],
    'eof': ERROR,
    'else': [IN_DOUBLE_QUOTE, APPEND]
  };

  /**
   * Determine the type of a character in a keypath.
   *
   * @param {Char} ch
   * @return {String} type
   */

  function getPathCharType(ch) {
    if (ch === undefined) {
      return 'eof';
    }

    var code = ch.charCodeAt(0);

    switch (code) {
      case 0x5B: // [
      case 0x5D: // ]
      case 0x2E: // .
      case 0x22: // "
      case 0x27: // '
      case 0x30:
        // 0
        return ch;

      case 0x5F: // _
      case 0x24:
        // $
        return 'ident';

      case 0x20: // Space
      case 0x09: // Tab
      case 0x0A: // Newline
      case 0x0D: // Return
      case 0xA0: // No-break space
      case 0xFEFF: // Byte Order Mark
      case 0x2028: // Line Separator
      case 0x2029:
        // Paragraph Separator
        return 'ws';
    }

    // a-z, A-Z
    if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
      return 'ident';
    }

    // 1-9
    if (code >= 0x31 && code <= 0x39) {
      return 'number';
    }

    return 'else';
  }

  /**
   * Format a subPath, return its plain form if it is
   * a literal string or number. Otherwise prepend the
   * dynamic indicator (*).
   *
   * @param {String} path
   * @return {String}
   */

  function formatSubPath(path) {
    var trimmed = path.trim();
    // invalid leading 0
    if (path.charAt(0) === '0' && isNaN(path)) {
      return false;
    }
    return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
  }

  /**
   * Parse a string path into an array of segments
   *
   * @param {String} path
   * @return {Array|undefined}
   */

  function parse(path) {
    var keys = [];
    var index = -1;
    var mode = BEFORE_PATH;
    var subPathDepth = 0;
    var c, newChar, key, type, transition, action, typeMap;

    var actions = [];

    actions[PUSH] = function () {
      if (key !== undefined) {
        keys.push(key);
        key = undefined;
      }
    };

    actions[APPEND] = function () {
      if (key === undefined) {
        key = newChar;
      } else {
        key += newChar;
      }
    };

    actions[INC_SUB_PATH_DEPTH] = function () {
      actions[APPEND]();
      subPathDepth++;
    };

    actions[PUSH_SUB_PATH] = function () {
      if (subPathDepth > 0) {
        subPathDepth--;
        mode = IN_SUB_PATH;
        actions[APPEND]();
      } else {
        subPathDepth = 0;
        key = formatSubPath(key);
        if (key === false) {
          return false;
        } else {
          actions[PUSH]();
        }
      }
    };

    function maybeUnescapeQuote() {
      var nextChar = path[index + 1];
      if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
        index++;
        newChar = '\\' + nextChar;
        actions[APPEND]();
        return true;
      }
    }

    while (mode != null) {
      index++;
      c = path[index];

      if (c === '\\' && maybeUnescapeQuote()) {
        continue;
      }

      type = getPathCharType(c);
      typeMap = pathStateMachine[mode];
      transition = typeMap[type] || typeMap['else'] || ERROR;

      if (transition === ERROR) {
        return; // parse error
      }

      mode = transition[0];
      action = actions[transition[1]];
      if (action) {
        newChar = transition[2];
        newChar = newChar === undefined ? c : newChar;
        if (action() === false) {
          return;
        }
      }

      if (mode === AFTER_PATH) {
        keys.raw = path;
        return keys;
      }
    }
  }

  /**
   * External parse that check for a cache hit first
   *
   * @param {String} path
   * @return {Array|undefined}
   */

  function parsePath(path) {
    var hit = pathCache.get(path);
    if (!hit) {
      hit = parse(path);
      if (hit) {
        pathCache.put(path, hit);
      }
    }
    return hit;
  }

  /**
   * Get from an object from a path string
   *
   * @param {Object} obj
   * @param {String} path
   */

  function getPath(obj, path) {
    return parseExpression(path).get(obj);
  }

  /**
   * Warn against setting non-existent root path on a vm.
   */

  var warnNonExistent;
  if ('development' !== 'production') {
    warnNonExistent = function (path, vm) {
      warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
    };
  }

  /**
   * Set on an object from a path
   *
   * @param {Object} obj
   * @param {String | Array} path
   * @param {*} val
   */

  function setPath(obj, path, val) {
    var original = obj;
    if (typeof path === 'string') {
      path = parse(path);
    }
    if (!path || !isObject(obj)) {
      return false;
    }
    var last, key;
    for (var i = 0, l = path.length; i < l; i++) {
      last = obj;
      key = path[i];
      if (key.charAt(0) === '*') {
        key = parseExpression(key.slice(1)).get.call(original, original);
      }
      if (i < l - 1) {
        obj = obj[key];
        if (!isObject(obj)) {
          obj = {};
          if ('development' !== 'production' && last._isVue) {
            warnNonExistent(path, last);
          }
          set(last, key, obj);
        }
      } else {
        if (isArray(obj)) {
          obj.$set(key, val);
        } else if (key in obj) {
          obj[key] = val;
        } else {
          if ('development' !== 'production' && obj._isVue) {
            warnNonExistent(path, obj);
          }
          set(obj, key, val);
        }
      }
    }
    return true;
  }

var path = Object.freeze({
    parsePath: parsePath,
    getPath: getPath,
    setPath: setPath
  });

  var expressionCache = new Cache(1000);

  var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
  var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

  // keywords that don't make sense inside expressions
  var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
  var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

  var wsRE = /\s/g;
  var newlineRE = /\n/g;
  var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
  var restoreRE = /"(\d+)"/g;
  var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
  var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
  var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

  function noop() {}

  /**
   * Save / Rewrite / Restore
   *
   * When rewriting paths found in an expression, it is
   * possible for the same letter sequences to be found in
   * strings and Object literal property keys. Therefore we
   * remove and store these parts in a temporary array, and
   * restore them after the path rewrite.
   */

  var saved = [];

  /**
   * Save replacer
   *
   * The save regex can match two possible cases:
   * 1. An opening object literal
   * 2. A string
   * If matched as a plain string, we need to escape its
   * newlines, since the string needs to be preserved when
   * generating the function body.
   *
   * @param {String} str
   * @param {String} isString - str if matched as a string
   * @return {String} - placeholder with index
   */

  function save(str, isString) {
    var i = saved.length;
    saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
    return '"' + i + '"';
  }

  /**
   * Path rewrite replacer
   *
   * @param {String} raw
   * @return {String}
   */

  function rewrite(raw) {
    var c = raw.charAt(0);
    var path = raw.slice(1);
    if (allowedKeywordsRE.test(path)) {
      return raw;
    } else {
      path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
      return c + 'scope.' + path;
    }
  }

  /**
   * Restore replacer
   *
   * @param {String} str
   * @param {String} i - matched save index
   * @return {String}
   */

  function restore(str, i) {
    return saved[i];
  }

  /**
   * Rewrite an expression, prefixing all path accessors with
   * `scope.` and generate getter/setter functions.
   *
   * @param {String} exp
   * @return {Function}
   */

  function compileGetter(exp) {
    if (improperKeywordsRE.test(exp)) {
      'development' !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
    }
    // reset state
    saved.length = 0;
    // save strings and object literal keys
    var body = exp.replace(saveRE, save).replace(wsRE, '');
    // rewrite all paths
    // pad 1 space here because the regex matches 1 extra char
    body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
    return makeGetterFn(body);
  }

  /**
   * Build a getter function. Requires eval.
   *
   * We isolate the try/catch so it doesn't affect the
   * optimization of the parse function when it is not called.
   *
   * @param {String} body
   * @return {Function|undefined}
   */

  function makeGetterFn(body) {
    try {
      /* eslint-disable no-new-func */
      return new Function('scope', 'return ' + body + ';');
      /* eslint-enable no-new-func */
    } catch (e) {
      if ('development' !== 'production') {
        /* istanbul ignore if */
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
        } else {
          warn('Invalid expression. ' + 'Generated function body: ' + body);
        }
      }
      return noop;
    }
  }

  /**
   * Compile a setter function for the expression.
   *
   * @param {String} exp
   * @return {Function|undefined}
   */

  function compileSetter(exp) {
    var path = parsePath(exp);
    if (path) {
      return function (scope, val) {
        setPath(scope, path, val);
      };
    } else {
      'development' !== 'production' && warn('Invalid setter expression: ' + exp);
    }
  }

  /**
   * Parse an expression into re-written getter/setters.
   *
   * @param {String} exp
   * @param {Boolean} needSet
   * @return {Function}
   */

  function parseExpression(exp, needSet) {
    exp = exp.trim();
    // try cache
    var hit = expressionCache.get(exp);
    if (hit) {
      if (needSet && !hit.set) {
        hit.set = compileSetter(hit.exp);
      }
      return hit;
    }
    var res = { exp: exp };
    res.get = isSimplePath(exp) && exp.indexOf('[') < 0
    // optimized super simple getter
    ? makeGetterFn('scope.' + exp)
    // dynamic getter
    : compileGetter(exp);
    if (needSet) {
      res.set = compileSetter(exp);
    }
    expressionCache.put(exp, res);
    return res;
  }

  /**
   * Check if an expression is a simple path.
   *
   * @param {String} exp
   * @return {Boolean}
   */

  function isSimplePath(exp) {
    return pathTestRE.test(exp) &&
    // don't treat literal values as paths
    !literalValueRE$1.test(exp) &&
    // Math constants e.g. Math.PI, Math.E etc.
    exp.slice(0, 5) !== 'Math.';
  }

var expression = Object.freeze({
    parseExpression: parseExpression,
    isSimplePath: isSimplePath
  });

  // we have two separate queues: one for directive updates
  // and one for user watcher registered via $watch().
  // we want to guarantee directive updates to be called
  // before user watchers so that when user watchers are
  // triggered, the DOM would have already been in updated
  // state.

  var queue = [];
  var userQueue = [];
  var has = {};
  var circular = {};
  var waiting = false;

  /**
   * Reset the batcher's state.
   */

  function resetBatcherState() {
    queue.length = 0;
    userQueue.length = 0;
    has = {};
    circular = {};
    waiting = false;
  }

  /**
   * Flush both queues and run the watchers.
   */

  function flushBatcherQueue() {
    var _again = true;

    _function: while (_again) {
      _again = false;

      runBatcherQueue(queue);
      runBatcherQueue(userQueue);
      // user watchers triggered more watchers,
      // keep flushing until it depletes
      if (queue.length) {
        _again = true;
        continue _function;
      }
      // dev tool hook
      /* istanbul ignore if */
      if (devtools && config.devtools) {
        devtools.emit('flush');
      }
      resetBatcherState();
    }
  }

  /**
   * Run the watchers in a single queue.
   *
   * @param {Array} queue
   */

  function runBatcherQueue(queue) {
    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (var i = 0; i < queue.length; i++) {
      var watcher = queue[i];
      var id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if ('development' !== 'production' && has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > config._maxUpdateCount) {
          warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
          break;
        }
      }
    }
    queue.length = 0;
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   *
   * @param {Watcher} watcher
   *   properties:
   *   - {Number} id
   *   - {Function} run
   */

  function pushWatcher(watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      // push watcher into appropriate queue
      var q = watcher.user ? userQueue : queue;
      has[id] = q.length;
      q.push(watcher);
      // queue the flush
      if (!waiting) {
        waiting = true;
        nextTick(flushBatcherQueue);
      }
    }
  }

  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   *
   * @param {Vue} vm
   * @param {String|Function} expOrFn
   * @param {Function} cb
   * @param {Object} options
   *                 - {Array} filters
   *                 - {Boolean} twoWay
   *                 - {Boolean} deep
   *                 - {Boolean} user
   *                 - {Boolean} sync
   *                 - {Boolean} lazy
   *                 - {Function} [preProcess]
   *                 - {Function} [postProcess]
   * @constructor
   */
  function Watcher(vm, expOrFn, cb, options) {
    // mix in options
    if (options) {
      extend(this, options);
    }
    var isFn = typeof expOrFn === 'function';
    this.vm = vm;
    vm._watchers.push(this);
    this.expression = expOrFn;
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.prevError = null; // for async error stacks
    // parse expression for getter/setter
    if (isFn) {
      this.getter = expOrFn;
      this.setter = undefined;
    } else {
      var res = parseExpression(expOrFn, this.twoWay);
      this.getter = res.get;
      this.setter = res.set;
    }
    this.value = this.lazy ? undefined : this.get();
    // state for avoiding false triggers for deep and Array
    // watchers during vm._digest()
    this.queued = this.shallow = false;
  }

  /**
   * Evaluate the getter, and re-collect dependencies.
   */

  Watcher.prototype.get = function () {
    this.beforeGet();
    var scope = this.scope || this.vm;
    var value;
    try {
      value = this.getter.call(scope, scope);
    } catch (e) {
      if ('development' !== 'production' && config.warnExpressionErrors) {
        warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
      }
    }
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    if (this.preProcess) {
      value = this.preProcess(value);
    }
    if (this.filters) {
      value = scope._applyFilters(value, null, this.filters, false);
    }
    if (this.postProcess) {
      value = this.postProcess(value);
    }
    this.afterGet();
    return value;
  };

  /**
   * Set the corresponding value with the setter.
   *
   * @param {*} value
   */

  Watcher.prototype.set = function (value) {
    var scope = this.scope || this.vm;
    if (this.filters) {
      value = scope._applyFilters(value, this.value, this.filters, true);
    }
    try {
      this.setter.call(scope, scope, value);
    } catch (e) {
      if ('development' !== 'production' && config.warnExpressionErrors) {
        warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
      }
    }
    // two-way sync for v-for alias
    var forContext = scope.$forContext;
    if (forContext && forContext.alias === this.expression) {
      if (forContext.filters) {
        'development' !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
        return;
      }
      forContext._withLock(function () {
        if (scope.$key) {
          // original is an object
          forContext.rawValue[scope.$key] = value;
        } else {
          forContext.rawValue.$set(scope.$index, value);
        }
      });
    }
  };

  /**
   * Prepare for dependency collection.
   */

  Watcher.prototype.beforeGet = function () {
    Dep.target = this;
  };

  /**
   * Add a dependency to this directive.
   *
   * @param {Dep} dep
   */

  Watcher.prototype.addDep = function (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */

  Watcher.prototype.afterGet = function () {
    Dep.target = null;
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   *
   * @param {Boolean} shallow
   */

  Watcher.prototype.update = function (shallow) {
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync || !config.async) {
      this.run();
    } else {
      // if queued, only overwrite shallow with non-shallow,
      // but not the other way around.
      this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
      this.queued = true;
      // record before-push error stack in debug mode
      /* istanbul ignore if */
      if ('development' !== 'production' && config.debug) {
        this.prevError = new Error('[vue] async stack trace');
      }
      pushWatcher(this);
    }
  };

  /**
   * Batcher job interface.
   * Will be called by the batcher.
   */

  Watcher.prototype.run = function () {
    if (this.active) {
      var value = this.get();
      if (value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated; but only do so if this is a
      // non-shallow update (caused by a vm digest).
      (isObject(value) || this.deep) && !this.shallow) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        // in debug + async mode, when a watcher callbacks
        // throws, we also throw the saved before-push error
        // so the full cross-tick stack trace is available.
        var prevError = this.prevError;
        /* istanbul ignore if */
        if ('development' !== 'production' && config.debug && prevError) {
          this.prevError = null;
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            nextTick(function () {
              throw prevError;
            }, 0);
            throw e;
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
      this.queued = this.shallow = false;
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */

  Watcher.prototype.evaluate = function () {
    // avoid overwriting another watcher that is being
    // collected.
    var current = Dep.target;
    this.value = this.get();
    this.dirty = false;
    Dep.target = current;
  };

  /**
   * Depend on all deps collected by this watcher.
   */

  Watcher.prototype.depend = function () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subcriber list.
   */

  Watcher.prototype.teardown = function () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed or is performing a v-for
      // re-render (the watcher list is then filtered by v-for).
      if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
        this.vm._watchers.$remove(this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
      this.vm = this.cb = this.value = null;
    }
  };

  /**
   * Recrusively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   *
   * @param {*} val
   */

  var seenObjects = new _Set();
  function traverse(val, seen) {
    var i = undefined,
        keys = undefined;
    if (!seen) {
      seen = seenObjects;
      seen.clear();
    }
    var isA = isArray(val);
    var isO = isObject(val);
    if ((isA || isO) && Object.isExtensible(val)) {
      if (val.__ob__) {
        var depId = val.__ob__.dep.id;
        if (seen.has(depId)) {
          return;
        } else {
          seen.add(depId);
        }
      }
      if (isA) {
        i = val.length;
        while (i--) traverse(val[i], seen);
      } else if (isO) {
        keys = Object.keys(val);
        i = keys.length;
        while (i--) traverse(val[keys[i]], seen);
      }
    }
  }

  var text$1 = {

    bind: function bind() {
      this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
    },

    update: function update(value) {
      this.el[this.attr] = _toString(value);
    }
  };

  var templateCache = new Cache(1000);
  var idSelectorCache = new Cache(1000);

  var map = {
    efault: [0, '', ''],
    legend: [1, '<fieldset>', '</fieldset>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
  };

  map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

  map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

  map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

  map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

  /**
   * Check if a node is a supported template node with a
   * DocumentFragment content.
   *
   * @param {Node} node
   * @return {Boolean}
   */

  function isRealTemplate(node) {
    return isTemplate(node) && isFragment(node.content);
  }

  var tagRE$1 = /<([\w:-]+)/;
  var entityRE = /&#?\w+?;/;
  var commentRE = /<!--/;

  /**
   * Convert a string template to a DocumentFragment.
   * Determines correct wrapping by tag types. Wrapping
   * strategy found in jQuery & component/domify.
   *
   * @param {String} templateString
   * @param {Boolean} raw
   * @return {DocumentFragment}
   */

  function stringToFragment(templateString, raw) {
    // try a cache hit first
    var cacheKey = raw ? templateString : templateString.trim();
    var hit = templateCache.get(cacheKey);
    if (hit) {
      return hit;
    }

    var frag = document.createDocumentFragment();
    var tagMatch = templateString.match(tagRE$1);
    var entityMatch = entityRE.test(templateString);
    var commentMatch = commentRE.test(templateString);

    if (!tagMatch && !entityMatch && !commentMatch) {
      // text only, return a single text node.
      frag.appendChild(document.createTextNode(templateString));
    } else {
      var tag = tagMatch && tagMatch[1];
      var wrap = map[tag] || map.efault;
      var depth = wrap[0];
      var prefix = wrap[1];
      var suffix = wrap[2];
      var node = document.createElement('div');

      node.innerHTML = prefix + templateString + suffix;
      while (depth--) {
        node = node.lastChild;
      }

      var child;
      /* eslint-disable no-cond-assign */
      while (child = node.firstChild) {
        /* eslint-enable no-cond-assign */
        frag.appendChild(child);
      }
    }
    if (!raw) {
      trimNode(frag);
    }
    templateCache.put(cacheKey, frag);
    return frag;
  }

  /**
   * Convert a template node to a DocumentFragment.
   *
   * @param {Node} node
   * @return {DocumentFragment}
   */

  function nodeToFragment(node) {
    // if its a template tag and the browser supports it,
    // its content is already a document fragment. However, iOS Safari has
    // bug when using directly cloned template content with touch
    // events and can cause crashes when the nodes are removed from DOM, so we
    // have to treat template elements as string templates. (#2805)
    /* istanbul ignore if */
    if (isRealTemplate(node)) {
      return stringToFragment(node.innerHTML);
    }
    // script template
    if (node.tagName === 'SCRIPT') {
      return stringToFragment(node.textContent);
    }
    // normal node, clone it to avoid mutating the original
    var clonedNode = cloneNode(node);
    var frag = document.createDocumentFragment();
    var child;
    /* eslint-disable no-cond-assign */
    while (child = clonedNode.firstChild) {
      /* eslint-enable no-cond-assign */
      frag.appendChild(child);
    }
    trimNode(frag);
    return frag;
  }

  // Test for the presence of the Safari template cloning bug
  // https://bugs.webkit.org/showug.cgi?id=137755
  var hasBrokenTemplate = (function () {
    /* istanbul ignore else */
    if (inBrowser) {
      var a = document.createElement('div');
      a.innerHTML = '<template>1</template>';
      return !a.cloneNode(true).firstChild.innerHTML;
    } else {
      return false;
    }
  })();

  // Test for IE10/11 textarea placeholder clone bug
  var hasTextareaCloneBug = (function () {
    /* istanbul ignore else */
    if (inBrowser) {
      var t = document.createElement('textarea');
      t.placeholder = 't';
      return t.cloneNode(true).value === 't';
    } else {
      return false;
    }
  })();

  /**
   * 1. Deal with Safari cloning nested <template> bug by
   *    manually cloning all template instances.
   * 2. Deal with IE10/11 textarea placeholder bug by setting
   *    the correct value after cloning.
   *
   * @param {Element|DocumentFragment} node
   * @return {Element|DocumentFragment}
   */

  function cloneNode(node) {
    /* istanbul ignore if */
    if (!node.querySelectorAll) {
      return node.cloneNode();
    }
    var res = node.cloneNode(true);
    var i, original, cloned;
    /* istanbul ignore if */
    if (hasBrokenTemplate) {
      var tempClone = res;
      if (isRealTemplate(node)) {
        node = node.content;
        tempClone = res.content;
      }
      original = node.querySelectorAll('template');
      if (original.length) {
        cloned = tempClone.querySelectorAll('template');
        i = cloned.length;
        while (i--) {
          cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
        }
      }
    }
    /* istanbul ignore if */
    if (hasTextareaCloneBug) {
      if (node.tagName === 'TEXTAREA') {
        res.value = node.value;
      } else {
        original = node.querySelectorAll('textarea');
        if (original.length) {
          cloned = res.querySelectorAll('textarea');
          i = cloned.length;
          while (i--) {
            cloned[i].value = original[i].value;
          }
        }
      }
    }
    return res;
  }

  /**
   * Process the template option and normalizes it into a
   * a DocumentFragment that can be used as a partial or a
   * instance template.
   *
   * @param {*} template
   *        Possible values include:
   *        - DocumentFragment object
   *        - Node object of type Template
   *        - id selector: '#some-template-id'
   *        - template string: '<div><span>{{msg}}</span></div>'
   * @param {Boolean} shouldClone
   * @param {Boolean} raw
   *        inline HTML interpolation. Do not check for id
   *        selector and keep whitespace in the string.
   * @return {DocumentFragment|undefined}
   */

  function parseTemplate(template, shouldClone, raw) {
    var node, frag;

    // if the template is already a document fragment,
    // do nothing
    if (isFragment(template)) {
      trimNode(template);
      return shouldClone ? cloneNode(template) : template;
    }

    if (typeof template === 'string') {
      // id selector
      if (!raw && template.charAt(0) === '#') {
        // id selector can be cached too
        frag = idSelectorCache.get(template);
        if (!frag) {
          node = document.getElementById(template.slice(1));
          if (node) {
            frag = nodeToFragment(node);
            // save selector to cache
            idSelectorCache.put(template, frag);
          }
        }
      } else {
        // normal string template
        frag = stringToFragment(template, raw);
      }
    } else if (template.nodeType) {
      // a direct node
      frag = nodeToFragment(template);
    }

    return frag && shouldClone ? cloneNode(frag) : frag;
  }

var template = Object.freeze({
    cloneNode: cloneNode,
    parseTemplate: parseTemplate
  });

  var html = {

    bind: function bind() {
      // a comment node means this is a binding for
      // {{{ inline unescaped html }}}
      if (this.el.nodeType === 8) {
        // hold nodes
        this.nodes = [];
        // replace the placeholder with proper anchor
        this.anchor = createAnchor('v-html');
        replace(this.el, this.anchor);
      }
    },

    update: function update(value) {
      value = _toString(value);
      if (this.nodes) {
        this.swap(value);
      } else {
        this.el.innerHTML = value;
      }
    },

    swap: function swap(value) {
      // remove old nodes
      var i = this.nodes.length;
      while (i--) {
        remove(this.nodes[i]);
      }
      // convert new value to a fragment
      // do not attempt to retrieve from id selector
      var frag = parseTemplate(value, true, true);
      // save a reference to these nodes so we can remove later
      this.nodes = toArray(frag.childNodes);
      before(frag, this.anchor);
    }
  };

  /**
   * Abstraction for a partially-compiled fragment.
   * Can optionally compile content with a child scope.
   *
   * @param {Function} linker
   * @param {Vue} vm
   * @param {DocumentFragment} frag
   * @param {Vue} [host]
   * @param {Object} [scope]
   * @param {Fragment} [parentFrag]
   */
  function Fragment(linker, vm, frag, host, scope, parentFrag) {
    this.children = [];
    this.childFrags = [];
    this.vm = vm;
    this.scope = scope;
    this.inserted = false;
    this.parentFrag = parentFrag;
    if (parentFrag) {
      parentFrag.childFrags.push(this);
    }
    this.unlink = linker(vm, frag, host, scope, this);
    var single = this.single = frag.childNodes.length === 1 &&
    // do not go single mode if the only node is an anchor
    !frag.childNodes[0].__v_anchor;
    if (single) {
      this.node = frag.childNodes[0];
      this.before = singleBefore;
      this.remove = singleRemove;
    } else {
      this.node = createAnchor('fragment-start');
      this.end = createAnchor('fragment-end');
      this.frag = frag;
      prepend(this.node, frag);
      frag.appendChild(this.end);
      this.before = multiBefore;
      this.remove = multiRemove;
    }
    this.node.__v_frag = this;
  }

  /**
   * Call attach/detach for all components contained within
   * this fragment. Also do so recursively for all child
   * fragments.
   *
   * @param {Function} hook
   */

  Fragment.prototype.callHook = function (hook) {
    var i, l;
    for (i = 0, l = this.childFrags.length; i < l; i++) {
      this.childFrags[i].callHook(hook);
    }
    for (i = 0, l = this.children.length; i < l; i++) {
      hook(this.children[i]);
    }
  };

  /**
   * Insert fragment before target, single node version
   *
   * @param {Node} target
   * @param {Boolean} withTransition
   */

  function singleBefore(target, withTransition) {
    this.inserted = true;
    var method = withTransition !== false ? beforeWithTransition : before;
    method(this.node, target, this.vm);
    if (inDoc(this.node)) {
      this.callHook(attach);
    }
  }

  /**
   * Remove fragment, single node version
   */

  function singleRemove() {
    this.inserted = false;
    var shouldCallRemove = inDoc(this.node);
    var self = this;
    this.beforeRemove();
    removeWithTransition(this.node, this.vm, function () {
      if (shouldCallRemove) {
        self.callHook(detach);
      }
      self.destroy();
    });
  }

  /**
   * Insert fragment before target, multi-nodes version
   *
   * @param {Node} target
   * @param {Boolean} withTransition
   */

  function multiBefore(target, withTransition) {
    this.inserted = true;
    var vm = this.vm;
    var method = withTransition !== false ? beforeWithTransition : before;
    mapNodeRange(this.node, this.end, function (node) {
      method(node, target, vm);
    });
    if (inDoc(this.node)) {
      this.callHook(attach);
    }
  }

  /**
   * Remove fragment, multi-nodes version
   */

  function multiRemove() {
    this.inserted = false;
    var self = this;
    var shouldCallRemove = inDoc(this.node);
    this.beforeRemove();
    removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
      if (shouldCallRemove) {
        self.callHook(detach);
      }
      self.destroy();
    });
  }

  /**
   * Prepare the fragment for removal.
   */

  Fragment.prototype.beforeRemove = function () {
    var i, l;
    for (i = 0, l = this.childFrags.length; i < l; i++) {
      // call the same method recursively on child
      // fragments, depth-first
      this.childFrags[i].beforeRemove(false);
    }
    for (i = 0, l = this.children.length; i < l; i++) {
      // Call destroy for all contained instances,
      // with remove:false and defer:true.
      // Defer is necessary because we need to
      // keep the children to call detach hooks
      // on them.
      this.children[i].$destroy(false, true);
    }
    var dirs = this.unlink.dirs;
    for (i = 0, l = dirs.length; i < l; i++) {
      // disable the watchers on all the directives
      // so that the rendered content stays the same
      // during removal.
      dirs[i]._watcher && dirs[i]._watcher.teardown();
    }
  };

  /**
   * Destroy the fragment.
   */

  Fragment.prototype.destroy = function () {
    if (this.parentFrag) {
      this.parentFrag.childFrags.$remove(this);
    }
    this.node.__v_frag = null;
    this.unlink();
  };

  /**
   * Call attach hook for a Vue instance.
   *
   * @param {Vue} child
   */

  function attach(child) {
    if (!child._isAttached && inDoc(child.$el)) {
      child._callHook('attached');
    }
  }

  /**
   * Call detach hook for a Vue instance.
   *
   * @param {Vue} child
   */

  function detach(child) {
    if (child._isAttached && !inDoc(child.$el)) {
      child._callHook('detached');
    }
  }

  var linkerCache = new Cache(5000);

  /**
   * A factory that can be used to create instances of a
   * fragment. Caches the compiled linker if possible.
   *
   * @param {Vue} vm
   * @param {Element|String} el
   */
  function FragmentFactory(vm, el) {
    this.vm = vm;
    var template;
    var isString = typeof el === 'string';
    if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
      template = parseTemplate(el, true);
    } else {
      template = document.createDocumentFragment();
      template.appendChild(el);
    }
    this.template = template;
    // linker can be cached, but only for components
    var linker;
    var cid = vm.constructor.cid;
    if (cid > 0) {
      var cacheId = cid + (isString ? el : getOuterHTML(el));
      linker = linkerCache.get(cacheId);
      if (!linker) {
        linker = compile(template, vm.$options, true);
        linkerCache.put(cacheId, linker);
      }
    } else {
      linker = compile(template, vm.$options, true);
    }
    this.linker = linker;
  }

  /**
   * Create a fragment instance with given host and scope.
   *
   * @param {Vue} host
   * @param {Object} scope
   * @param {Fragment} parentFrag
   */

  FragmentFactory.prototype.create = function (host, scope, parentFrag) {
    var frag = cloneNode(this.template);
    return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
  };

  var ON = 700;
  var MODEL = 800;
  var BIND = 850;
  var TRANSITION = 1100;
  var EL = 1500;
  var COMPONENT = 1500;
  var PARTIAL = 1750;
  var IF = 2100;
  var FOR = 2200;
  var SLOT = 2300;

  var uid$3 = 0;

  var vFor = {

    priority: FOR,
    terminal: true,

    params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

    bind: function bind() {
      // support "item in/of items" syntax
      var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
      if (inMatch) {
        var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
        if (itMatch) {
          this.iterator = itMatch[1].trim();
          this.alias = itMatch[2].trim();
        } else {
          this.alias = inMatch[1].trim();
        }
        this.expression = inMatch[2];
      }

      if (!this.alias) {
        'development' !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
        return;
      }

      // uid as a cache identifier
      this.id = '__v-for__' + ++uid$3;

      // check if this is an option list,
      // so that we know if we need to update the <select>'s
      // v-model when the option list has changed.
      // because v-model has a lower priority than v-for,
      // the v-model is not bound here yet, so we have to
      // retrive it in the actual updateModel() function.
      var tag = this.el.tagName;
      this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

      // setup anchor nodes
      this.start = createAnchor('v-for-start');
      this.end = createAnchor('v-for-end');
      replace(this.el, this.end);
      before(this.start, this.end);

      // cache
      this.cache = Object.create(null);

      // fragment factory
      this.factory = new FragmentFactory(this.vm, this.el);
    },

    update: function update(data) {
      this.diff(data);
      this.updateRef();
      this.updateModel();
    },

    /**
     * Diff, based on new data and old data, determine the
     * minimum amount of DOM manipulations needed to make the
     * DOM reflect the new data Array.
     *
     * The algorithm diffs the new data Array by storing a
     * hidden reference to an owner vm instance on previously
     * seen data. This allows us to achieve O(n) which is
     * better than a levenshtein distance based algorithm,
     * which is O(m * n).
     *
     * @param {Array} data
     */

    diff: function diff(data) {
      // check if the Array was converted from an Object
      var item = data[0];
      var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

      var trackByKey = this.params.trackBy;
      var oldFrags = this.frags;
      var frags = this.frags = new Array(data.length);
      var alias = this.alias;
      var iterator = this.iterator;
      var start = this.start;
      var end = this.end;
      var inDocument = inDoc(start);
      var init = !oldFrags;
      var i, l, frag, key, value, primitive;

      // First pass, go through the new Array and fill up
      // the new frags array. If a piece of data has a cached
      // instance for it, we reuse it. Otherwise build a new
      // instance.
      for (i = 0, l = data.length; i < l; i++) {
        item = data[i];
        key = convertedFromObject ? item.$key : null;
        value = convertedFromObject ? item.$value : item;
        primitive = !isObject(value);
        frag = !init && this.getCachedFrag(value, i, key);
        if (frag) {
          // reusable fragment
          frag.reused = true;
          // update $index
          frag.scope.$index = i;
          // update $key
          if (key) {
            frag.scope.$key = key;
          }
          // update iterator
          if (iterator) {
            frag.scope[iterator] = key !== null ? key : i;
          }
          // update data for track-by, object repeat &
          // primitive values.
          if (trackByKey || convertedFromObject || primitive) {
            withoutConversion(function () {
              frag.scope[alias] = value;
            });
          }
        } else {
          // new isntance
          frag = this.create(value, alias, i, key);
          frag.fresh = !init;
        }
        frags[i] = frag;
        if (init) {
          frag.before(end);
        }
      }

      // we're done for the initial render.
      if (init) {
        return;
      }

      // Second pass, go through the old fragments and
      // destroy those who are not reused (and remove them
      // from cache)
      var removalIndex = 0;
      var totalRemoved = oldFrags.length - frags.length;
      // when removing a large number of fragments, watcher removal
      // turns out to be a perf bottleneck, so we batch the watcher
      // removals into a single filter call!
      this.vm._vForRemoving = true;
      for (i = 0, l = oldFrags.length; i < l; i++) {
        frag = oldFrags[i];
        if (!frag.reused) {
          this.deleteCachedFrag(frag);
          this.remove(frag, removalIndex++, totalRemoved, inDocument);
        }
      }
      this.vm._vForRemoving = false;
      if (removalIndex) {
        this.vm._watchers = this.vm._watchers.filter(function (w) {
          return w.active;
        });
      }

      // Final pass, move/insert new fragments into the
      // right place.
      var targetPrev, prevEl, currentPrev;
      var insertionIndex = 0;
      for (i = 0, l = frags.length; i < l; i++) {
        frag = frags[i];
        // this is the frag that we should be after
        targetPrev = frags[i - 1];
        prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
        if (frag.reused && !frag.staggerCb) {
          currentPrev = findPrevFrag(frag, start, this.id);
          if (currentPrev !== targetPrev && (!currentPrev ||
          // optimization for moving a single item.
          // thanks to suggestions by @livoras in #1807
          findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
            this.move(frag, prevEl);
          }
        } else {
          // new instance, or still in stagger.
          // insert with updated stagger index.
          this.insert(frag, insertionIndex++, prevEl, inDocument);
        }
        frag.reused = frag.fresh = false;
      }
    },

    /**
     * Create a new fragment instance.
     *
     * @param {*} value
     * @param {String} alias
     * @param {Number} index
     * @param {String} [key]
     * @return {Fragment}
     */

    create: function create(value, alias, index, key) {
      var host = this._host;
      // create iteration scope
      var parentScope = this._scope || this.vm;
      var scope = Object.create(parentScope);
      // ref holder for the scope
      scope.$refs = Object.create(parentScope.$refs);
      scope.$els = Object.create(parentScope.$els);
      // make sure point $parent to parent scope
      scope.$parent = parentScope;
      // for two-way binding on alias
      scope.$forContext = this;
      // define scope properties
      // important: define the scope alias without forced conversion
      // so that frozen data structures remain non-reactive.
      withoutConversion(function () {
        defineReactive(scope, alias, value);
      });
      defineReactive(scope, '$index', index);
      if (key) {
        defineReactive(scope, '$key', key);
      } else if (scope.$key) {
        // avoid accidental fallback
        def(scope, '$key', null);
      }
      if (this.iterator) {
        defineReactive(scope, this.iterator, key !== null ? key : index);
      }
      var frag = this.factory.create(host, scope, this._frag);
      frag.forId = this.id;
      this.cacheFrag(value, frag, index, key);
      return frag;
    },

    /**
     * Update the v-ref on owner vm.
     */

    updateRef: function updateRef() {
      var ref = this.descriptor.ref;
      if (!ref) return;
      var hash = (this._scope || this.vm).$refs;
      var refs;
      if (!this.fromObject) {
        refs = this.frags.map(findVmFromFrag);
      } else {
        refs = {};
        this.frags.forEach(function (frag) {
          refs[frag.scope.$key] = findVmFromFrag(frag);
        });
      }
      hash[ref] = refs;
    },

    /**
     * For option lists, update the containing v-model on
     * parent <select>.
     */

    updateModel: function updateModel() {
      if (this.isOption) {
        var parent = this.start.parentNode;
        var model = parent && parent.__v_model;
        if (model) {
          model.forceUpdate();
        }
      }
    },

    /**
     * Insert a fragment. Handles staggering.
     *
     * @param {Fragment} frag
     * @param {Number} index
     * @param {Node} prevEl
     * @param {Boolean} inDocument
     */

    insert: function insert(frag, index, prevEl, inDocument) {
      if (frag.staggerCb) {
        frag.staggerCb.cancel();
        frag.staggerCb = null;
      }
      var staggerAmount = this.getStagger(frag, index, null, 'enter');
      if (inDocument && staggerAmount) {
        // create an anchor and insert it synchronously,
        // so that we can resolve the correct order without
        // worrying about some elements not inserted yet
        var anchor = frag.staggerAnchor;
        if (!anchor) {
          anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
          anchor.__v_frag = frag;
        }
        after(anchor, prevEl);
        var op = frag.staggerCb = cancellable(function () {
          frag.staggerCb = null;
          frag.before(anchor);
          remove(anchor);
        });
        setTimeout(op, staggerAmount);
      } else {
        var target = prevEl.nextSibling;
        /* istanbul ignore if */
        if (!target) {
          // reset end anchor position in case the position was messed up
          // by an external drag-n-drop library.
          after(this.end, prevEl);
          target = this.end;
        }
        frag.before(target);
      }
    },

    /**
     * Remove a fragment. Handles staggering.
     *
     * @param {Fragment} frag
     * @param {Number} index
     * @param {Number} total
     * @param {Boolean} inDocument
     */

    remove: function remove(frag, index, total, inDocument) {
      if (frag.staggerCb) {
        frag.staggerCb.cancel();
        frag.staggerCb = null;
        // it's not possible for the same frag to be removed
        // twice, so if we have a pending stagger callback,
        // it means this frag is queued for enter but removed
        // before its transition started. Since it is already
        // destroyed, we can just leave it in detached state.
        return;
      }
      var staggerAmount = this.getStagger(frag, index, total, 'leave');
      if (inDocument && staggerAmount) {
        var op = frag.staggerCb = cancellable(function () {
          frag.staggerCb = null;
          frag.remove();
        });
        setTimeout(op, staggerAmount);
      } else {
        frag.remove();
      }
    },

    /**
     * Move a fragment to a new position.
     * Force no transition.
     *
     * @param {Fragment} frag
     * @param {Node} prevEl
     */

    move: function move(frag, prevEl) {
      // fix a common issue with Sortable:
      // if prevEl doesn't have nextSibling, this means it's
      // been dragged after the end anchor. Just re-position
      // the end anchor to the end of the container.
      /* istanbul ignore if */
      if (!prevEl.nextSibling) {
        this.end.parentNode.appendChild(this.end);
      }
      frag.before(prevEl.nextSibling, false);
    },

    /**
     * Cache a fragment using track-by or the object key.
     *
     * @param {*} value
     * @param {Fragment} frag
     * @param {Number} index
     * @param {String} [key]
     */

    cacheFrag: function cacheFrag(value, frag, index, key) {
      var trackByKey = this.params.trackBy;
      var cache = this.cache;
      var primitive = !isObject(value);
      var id;
      if (key || trackByKey || primitive) {
        id = getTrackByKey(index, key, value, trackByKey);
        if (!cache[id]) {
          cache[id] = frag;
        } else if (trackByKey !== '$index') {
          'development' !== 'production' && this.warnDuplicate(value);
        }
      } else {
        id = this.id;
        if (hasOwn(value, id)) {
          if (value[id] === null) {
            value[id] = frag;
          } else {
            'development' !== 'production' && this.warnDuplicate(value);
          }
        } else if (Object.isExtensible(value)) {
          def(value, id, frag);
        } else if ('development' !== 'production') {
          warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
        }
      }
      frag.raw = value;
    },

    /**
     * Get a cached fragment from the value/index/key
     *
     * @param {*} value
     * @param {Number} index
     * @param {String} key
     * @return {Fragment}
     */

    getCachedFrag: function getCachedFrag(value, index, key) {
      var trackByKey = this.params.trackBy;
      var primitive = !isObject(value);
      var frag;
      if (key || trackByKey || primitive) {
        var id = getTrackByKey(index, key, value, trackByKey);
        frag = this.cache[id];
      } else {
        frag = value[this.id];
      }
      if (frag && (frag.reused || frag.fresh)) {
        'development' !== 'production' && this.warnDuplicate(value);
      }
      return frag;
    },

    /**
     * Delete a fragment from cache.
     *
     * @param {Fragment} frag
     */

    deleteCachedFrag: function deleteCachedFrag(frag) {
      var value = frag.raw;
      var trackByKey = this.params.trackBy;
      var scope = frag.scope;
      var index = scope.$index;
      // fix #948: avoid accidentally fall through to
      // a parent repeater which happens to have $key.
      var key = hasOwn(scope, '$key') && scope.$key;
      var primitive = !isObject(value);
      if (trackByKey || key || primitive) {
        var id = getTrackByKey(index, key, value, trackByKey);
        this.cache[id] = null;
      } else {
        value[this.id] = null;
        frag.raw = null;
      }
    },

    /**
     * Get the stagger amount for an insertion/removal.
     *
     * @param {Fragment} frag
     * @param {Number} index
     * @param {Number} total
     * @param {String} type
     */

    getStagger: function getStagger(frag, index, total, type) {
      type = type + 'Stagger';
      var trans = frag.node.__v_trans;
      var hooks = trans && trans.hooks;
      var hook = hooks && (hooks[type] || hooks.stagger);
      return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
    },

    /**
     * Pre-process the value before piping it through the
     * filters. This is passed to and called by the watcher.
     */

    _preProcess: function _preProcess(value) {
      // regardless of type, store the un-filtered raw value.
      this.rawValue = value;
      return value;
    },

    /**
     * Post-process the value after it has been piped through
     * the filters. This is passed to and called by the watcher.
     *
     * It is necessary for this to be called during the
     * watcher's dependency collection phase because we want
     * the v-for to update when the source Object is mutated.
     */

    _postProcess: function _postProcess(value) {
      if (isArray(value)) {
        return value;
      } else if (isPlainObject(value)) {
        // convert plain object to array.
        var keys = Object.keys(value);
        var i = keys.length;
        var res = new Array(i);
        var key;
        while (i--) {
          key = keys[i];
          res[i] = {
            $key: key,
            $value: value[key]
          };
        }
        return res;
      } else {
        if (typeof value === 'number' && !isNaN(value)) {
          value = range(value);
        }
        return value || [];
      }
    },

    unbind: function unbind() {
      if (this.descriptor.ref) {
        (this._scope || this.vm).$refs[this.descriptor.ref] = null;
      }
      if (this.frags) {
        var i = this.frags.length;
        var frag;
        while (i--) {
          frag = this.frags[i];
          this.deleteCachedFrag(frag);
          frag.destroy();
        }
      }
    }
  };

  /**
   * Helper to find the previous element that is a fragment
   * anchor. This is necessary because a destroyed frag's
   * element could still be lingering in the DOM before its
   * leaving transition finishes, but its inserted flag
   * should have been set to false so we can skip them.
   *
   * If this is a block repeat, we want to make sure we only
   * return frag that is bound to this v-for. (see #929)
   *
   * @param {Fragment} frag
   * @param {Comment|Text} anchor
   * @param {String} id
   * @return {Fragment}
   */

  function findPrevFrag(frag, anchor, id) {
    var el = frag.node.previousSibling;
    /* istanbul ignore if */
    if (!el) return;
    frag = el.__v_frag;
    while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
      el = el.previousSibling;
      /* istanbul ignore if */
      if (!el) return;
      frag = el.__v_frag;
    }
    return frag;
  }

  /**
   * Find a vm from a fragment.
   *
   * @param {Fragment} frag
   * @return {Vue|undefined}
   */

  function findVmFromFrag(frag) {
    var node = frag.node;
    // handle multi-node frag
    if (frag.end) {
      while (!node.__vue__ && node !== frag.end && node.nextSibling) {
        node = node.nextSibling;
      }
    }
    return node.__vue__;
  }

  /**
   * Create a range array from given number.
   *
   * @param {Number} n
   * @return {Array}
   */

  function range(n) {
    var i = -1;
    var ret = new Array(Math.floor(n));
    while (++i < n) {
      ret[i] = i;
    }
    return ret;
  }

  /**
   * Get the track by key for an item.
   *
   * @param {Number} index
   * @param {String} key
   * @param {*} value
   * @param {String} [trackByKey]
   */

  function getTrackByKey(index, key, value, trackByKey) {
    return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
  }

  if ('development' !== 'production') {
    vFor.warnDuplicate = function (value) {
      warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
    };
  }

  var vIf = {

    priority: IF,
    terminal: true,

    bind: function bind() {
      var el = this.el;
      if (!el.__vue__) {
        // check else block
        var next = el.nextElementSibling;
        if (next && getAttr(next, 'v-else') !== null) {
          remove(next);
          this.elseEl = next;
        }
        // check main block
        this.anchor = createAnchor('v-if');
        replace(el, this.anchor);
      } else {
        'development' !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
        this.invalid = true;
      }
    },

    update: function update(value) {
      if (this.invalid) return;
      if (value) {
        if (!this.frag) {
          this.insert();
        }
      } else {
        this.remove();
      }
    },

    insert: function insert() {
      if (this.elseFrag) {
        this.elseFrag.remove();
        this.elseFrag = null;
      }
      // lazy init factory
      if (!this.factory) {
        this.factory = new FragmentFactory(this.vm, this.el);
      }
      this.frag = this.factory.create(this._host, this._scope, this._frag);
      this.frag.before(this.anchor);
    },

    remove: function remove() {
      if (this.frag) {
        this.frag.remove();
        this.frag = null;
      }
      if (this.elseEl && !this.elseFrag) {
        if (!this.elseFactory) {
          this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
        }
        this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
        this.elseFrag.before(this.anchor);
      }
    },

    unbind: function unbind() {
      if (this.frag) {
        this.frag.destroy();
      }
      if (this.elseFrag) {
        this.elseFrag.destroy();
      }
    }
  };

  var show = {

    bind: function bind() {
      // check else block
      var next = this.el.nextElementSibling;
      if (next && getAttr(next, 'v-else') !== null) {
        this.elseEl = next;
      }
    },

    update: function update(value) {
      this.apply(this.el, value);
      if (this.elseEl) {
        this.apply(this.elseEl, !value);
      }
    },

    apply: function apply(el, value) {
      if (inDoc(el)) {
        applyTransition(el, value ? 1 : -1, toggle, this.vm);
      } else {
        toggle();
      }
      function toggle() {
        el.style.display = value ? '' : 'none';
      }
    }
  };

  var text$2 = {

    bind: function bind() {
      var self = this;
      var el = this.el;
      var isRange = el.type === 'range';
      var lazy = this.params.lazy;
      var number = this.params.number;
      var debounce = this.params.debounce;

      // handle composition events.
      //   http://blog.evanyou.me/2014/01/03/composition-event/
      // skip this for Android because it handles composition
      // events quite differently. Android doesn't trigger
      // composition events for language input methods e.g.
      // Chinese, but instead triggers them for spelling
      // suggestions... (see Discussion/#162)
      var composing = false;
      if (!isAndroid && !isRange) {
        this.on('compositionstart', function () {
          composing = true;
        });
        this.on('compositionend', function () {
          composing = false;
          // in IE11 the "compositionend" event fires AFTER
          // the "input" event, so the input handler is blocked
          // at the end... have to call it here.
          //
          // #1327: in lazy mode this is unecessary.
          if (!lazy) {
            self.listener();
          }
        });
      }

      // prevent messing with the input when user is typing,
      // and force update on blur.
      this.focused = false;
      if (!isRange && !lazy) {
        this.on('focus', function () {
          self.focused = true;
        });
        this.on('blur', function () {
          self.focused = false;
          // do not sync value after fragment removal (#2017)
          if (!self._frag || self._frag.inserted) {
            self.rawListener();
          }
        });
      }

      // Now attach the main listener
      this.listener = this.rawListener = function () {
        if (composing || !self._bound) {
          return;
        }
        var val = number || isRange ? toNumber(el.value) : el.value;
        self.set(val);
        // force update on next tick to avoid lock & same value
        // also only update when user is not typing
        nextTick(function () {
          if (self._bound && !self.focused) {
            self.update(self._watcher.value);
          }
        });
      };

      // apply debounce
      if (debounce) {
        this.listener = _debounce(this.listener, debounce);
      }

      // Support jQuery events, since jQuery.trigger() doesn't
      // trigger native events in some cases and some plugins
      // rely on $.trigger()
      //
      // We want to make sure if a listener is attached using
      // jQuery, it is also removed with jQuery, that's why
      // we do the check for each directive instance and
      // store that check result on itself. This also allows
      // easier test coverage control by unsetting the global
      // jQuery variable in tests.
      this.hasjQuery = typeof jQuery === 'function';
      if (this.hasjQuery) {
        var method = jQuery.fn.on ? 'on' : 'bind';
        jQuery(el)[method]('change', this.rawListener);
        if (!lazy) {
          jQuery(el)[method]('input', this.listener);
        }
      } else {
        this.on('change', this.rawListener);
        if (!lazy) {
          this.on('input', this.listener);
        }
      }

      // IE9 doesn't fire input event on backspace/del/cut
      if (!lazy && isIE9) {
        this.on('cut', function () {
          nextTick(self.listener);
        });
        this.on('keyup', function (e) {
          if (e.keyCode === 46 || e.keyCode === 8) {
            self.listener();
          }
        });
      }

      // set initial value if present
      if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
        this.afterBind = this.listener;
      }
    },

    update: function update(value) {
      // #3029 only update when the value changes. This prevent
      // browsers from overwriting values like selectionStart
      value = _toString(value);
      if (value !== this.el.value) this.el.value = value;
    },

    unbind: function unbind() {
      var el = this.el;
      if (this.hasjQuery) {
        var method = jQuery.fn.off ? 'off' : 'unbind';
        jQuery(el)[method]('change', this.listener);
        jQuery(el)[method]('input', this.listener);
      }
    }
  };

  var radio = {

    bind: function bind() {
      var self = this;
      var el = this.el;

      this.getValue = function () {
        // value overwrite via v-bind:value
        if (el.hasOwnProperty('_value')) {
          return el._value;
        }
        var val = el.value;
        if (self.params.number) {
          val = toNumber(val);
        }
        return val;
      };

      this.listener = function () {
        self.set(self.getValue());
      };
      this.on('change', this.listener);

      if (el.hasAttribute('checked')) {
        this.afterBind = this.listener;
      }
    },

    update: function update(value) {
      this.el.checked = looseEqual(value, this.getValue());
    }
  };

  var select = {

    bind: function bind() {
      var _this = this;

      var self = this;
      var el = this.el;

      // method to force update DOM using latest value.
      this.forceUpdate = function () {
        if (self._watcher) {
          self.update(self._watcher.get());
        }
      };

      // check if this is a multiple select
      var multiple = this.multiple = el.hasAttribute('multiple');

      // attach listener
      this.listener = function () {
        var value = getValue(el, multiple);
        value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
        self.set(value);
      };
      this.on('change', this.listener);

      // if has initial value, set afterBind
      var initValue = getValue(el, multiple, true);
      if (multiple && initValue.length || !multiple && initValue !== null) {
        this.afterBind = this.listener;
      }

      // All major browsers except Firefox resets
      // selectedIndex with value -1 to 0 when the element
      // is appended to a new parent, therefore we have to
      // force a DOM update whenever that happens...
      this.vm.$on('hook:attached', function () {
        nextTick(_this.forceUpdate);
      });
      if (!inDoc(el)) {
        nextTick(this.forceUpdate);
      }
    },

    update: function update(value) {
      var el = this.el;
      el.selectedIndex = -1;
      var multi = this.multiple && isArray(value);
      var options = el.options;
      var i = options.length;
      var op, val;
      while (i--) {
        op = options[i];
        val = op.hasOwnProperty('_value') ? op._value : op.value;
        /* eslint-disable eqeqeq */
        op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
        /* eslint-enable eqeqeq */
      }
    },

    unbind: function unbind() {
      /* istanbul ignore next */
      this.vm.$off('hook:attached', this.forceUpdate);
    }
  };

  /**
   * Get select value
   *
   * @param {SelectElement} el
   * @param {Boolean} multi
   * @param {Boolean} init
   * @return {Array|*}
   */

  function getValue(el, multi, init) {
    var res = multi ? [] : null;
    var op, val, selected;
    for (var i = 0, l = el.options.length; i < l; i++) {
      op = el.options[i];
      selected = init ? op.hasAttribute('selected') : op.selected;
      if (selected) {
        val = op.hasOwnProperty('_value') ? op._value : op.value;
        if (multi) {
          res.push(val);
        } else {
          return val;
        }
      }
    }
    return res;
  }

  /**
   * Native Array.indexOf uses strict equal, but in this
   * case we need to match string/numbers with custom equal.
   *
   * @param {Array} arr
   * @param {*} val
   */

  function indexOf$1(arr, val) {
    var i = arr.length;
    while (i--) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }
    return -1;
  }

  var checkbox = {

    bind: function bind() {
      var self = this;
      var el = this.el;

      this.getValue = function () {
        return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
      };

      function getBooleanValue() {
        var val = el.checked;
        if (val && el.hasOwnProperty('_trueValue')) {
          return el._trueValue;
        }
        if (!val && el.hasOwnProperty('_falseValue')) {
          return el._falseValue;
        }
        return val;
      }

      this.listener = function () {
        var model = self._watcher.value;
        if (isArray(model)) {
          var val = self.getValue();
          if (el.checked) {
            if (indexOf(model, val) < 0) {
              model.push(val);
            }
          } else {
            model.$remove(val);
          }
        } else {
          self.set(getBooleanValue());
        }
      };

      this.on('change', this.listener);
      if (el.hasAttribute('checked')) {
        this.afterBind = this.listener;
      }
    },

    update: function update(value) {
      var el = this.el;
      if (isArray(value)) {
        el.checked = indexOf(value, this.getValue()) > -1;
      } else {
        if (el.hasOwnProperty('_trueValue')) {
          el.checked = looseEqual(value, el._trueValue);
        } else {
          el.checked = !!value;
        }
      }
    }
  };

  var handlers = {
    text: text$2,
    radio: radio,
    select: select,
    checkbox: checkbox
  };

  var model = {

    priority: MODEL,
    twoWay: true,
    handlers: handlers,
    params: ['lazy', 'number', 'debounce'],

    /**
     * Possible elements:
     *   <select>
     *   <textarea>
     *   <input type="*">
     *     - text
     *     - checkbox
     *     - radio
     *     - number
     */

    bind: function bind() {
      // friendly warning...
      this.checkFilters();
      if (this.hasRead && !this.hasWrite) {
        'development' !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
      }
      var el = this.el;
      var tag = el.tagName;
      var handler;
      if (tag === 'INPUT') {
        handler = handlers[el.type] || handlers.text;
      } else if (tag === 'SELECT') {
        handler = handlers.select;
      } else if (tag === 'TEXTAREA') {
        handler = handlers.text;
      } else {
        'development' !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
        return;
      }
      el.__v_model = this;
      handler.bind.call(this);
      this.update = handler.update;
      this._unbind = handler.unbind;
    },

    /**
     * Check read/write filter stats.
     */

    checkFilters: function checkFilters() {
      var filters = this.filters;
      if (!filters) return;
      var i = filters.length;
      while (i--) {
        var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
        if (typeof filter === 'function' || filter.read) {
          this.hasRead = true;
        }
        if (filter.write) {
          this.hasWrite = true;
        }
      }
    },

    unbind: function unbind() {
      this.el.__v_model = null;
      this._unbind && this._unbind();
    }
  };

  // keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    'delete': [8, 46],
    up: 38,
    left: 37,
    right: 39,
    down: 40
  };

  function keyFilter(handler, keys) {
    var codes = keys.map(function (key) {
      var charCode = key.charCodeAt(0);
      if (charCode > 47 && charCode < 58) {
        return parseInt(key, 10);
      }
      if (key.length === 1) {
        charCode = key.toUpperCase().charCodeAt(0);
        if (charCode > 64 && charCode < 91) {
          return charCode;
        }
      }
      return keyCodes[key];
    });
    codes = [].concat.apply([], codes);
    return function keyHandler(e) {
      if (codes.indexOf(e.keyCode) > -1) {
        return handler.call(this, e);
      }
    };
  }

  function stopFilter(handler) {
    return function stopHandler(e) {
      e.stopPropagation();
      return handler.call(this, e);
    };
  }

  function preventFilter(handler) {
    return function preventHandler(e) {
      e.preventDefault();
      return handler.call(this, e);
    };
  }

  function selfFilter(handler) {
    return function selfHandler(e) {
      if (e.target === e.currentTarget) {
        return handler.call(this, e);
      }
    };
  }

  var on$1 = {

    priority: ON,
    acceptStatement: true,
    keyCodes: keyCodes,

    bind: function bind() {
      // deal with iframes
      if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
        var self = this;
        this.iframeBind = function () {
          on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
        };
        this.on('load', this.iframeBind);
      }
    },

    update: function update(handler) {
      // stub a noop for v-on with no value,
      // e.g. @mousedown.prevent
      if (!this.descriptor.raw) {
        handler = function () {};
      }

      if (typeof handler !== 'function') {
        'development' !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
        return;
      }

      // apply modifiers
      if (this.modifiers.stop) {
        handler = stopFilter(handler);
      }
      if (this.modifiers.prevent) {
        handler = preventFilter(handler);
      }
      if (this.modifiers.self) {
        handler = selfFilter(handler);
      }
      // key filter
      var keys = Object.keys(this.modifiers).filter(function (key) {
        return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
      });
      if (keys.length) {
        handler = keyFilter(handler, keys);
      }

      this.reset();
      this.handler = handler;

      if (this.iframeBind) {
        this.iframeBind();
      } else {
        on(this.el, this.arg, this.handler, this.modifiers.capture);
      }
    },

    reset: function reset() {
      var el = this.iframeBind ? this.el.contentWindow : this.el;
      if (this.handler) {
        off(el, this.arg, this.handler);
      }
    },

    unbind: function unbind() {
      this.reset();
    }
  };

  var prefixes = ['-webkit-', '-moz-', '-ms-'];
  var camelPrefixes = ['Webkit', 'Moz', 'ms'];
  var importantRE = /!important;?$/;
  var propCache = Object.create(null);

  var testEl = null;

  var style = {

    deep: true,

    update: function update(value) {
      if (typeof value === 'string') {
        this.el.style.cssText = value;
      } else if (isArray(value)) {
        this.handleObject(value.reduce(extend, {}));
      } else {
        this.handleObject(value || {});
      }
    },

    handleObject: function handleObject(value) {
      // cache object styles so that only changed props
      // are actually updated.
      var cache = this.cache || (this.cache = {});
      var name, val;
      for (name in cache) {
        if (!(name in value)) {
          this.handleSingle(name, null);
          delete cache[name];
        }
      }
      for (name in value) {
        val = value[name];
        if (val !== cache[name]) {
          cache[name] = val;
          this.handleSingle(name, val);
        }
      }
    },

    handleSingle: function handleSingle(prop, value) {
      prop = normalize(prop);
      if (!prop) return; // unsupported prop
      // cast possible numbers/booleans into strings
      if (value != null) value += '';
      if (value) {
        var isImportant = importantRE.test(value) ? 'important' : '';
        if (isImportant) {
          /* istanbul ignore if */
          if ('development' !== 'production') {
            warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
          }
          value = value.replace(importantRE, '').trim();
          this.el.style.setProperty(prop.kebab, value, isImportant);
        } else {
          this.el.style[prop.camel] = value;
        }
      } else {
        this.el.style[prop.camel] = '';
      }
    }

  };

  /**
   * Normalize a CSS property name.
   * - cache result
   * - auto prefix
   * - camelCase -> dash-case
   *
   * @param {String} prop
   * @return {String}
   */

  function normalize(prop) {
    if (propCache[prop]) {
      return propCache[prop];
    }
    var res = prefix(prop);
    propCache[prop] = propCache[res] = res;
    return res;
  }

  /**
   * Auto detect the appropriate prefix for a CSS property.
   * https://gist.github.com/paulirish/523692
   *
   * @param {String} prop
   * @return {String}
   */

  function prefix(prop) {
    prop = hyphenate(prop);
    var camel = camelize(prop);
    var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
    if (!testEl) {
      testEl = document.createElement('div');
    }
    var i = prefixes.length;
    var prefixed;
    if (camel !== 'filter' && camel in testEl.style) {
      return {
        kebab: prop,
        camel: camel
      };
    }
    while (i--) {
      prefixed = camelPrefixes[i] + upper;
      if (prefixed in testEl.style) {
        return {
          kebab: prefixes[i] + prop,
          camel: prefixed
        };
      }
    }
  }

  // xlink
  var xlinkNS = 'http://www.w3.org/1999/xlink';
  var xlinkRE = /^xlink:/;

  // check for attributes that prohibit interpolations
  var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
  // these attributes should also set their corresponding properties
  // because they only affect the initial state of the element
  var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
  // these attributes expect enumrated values of "true" or "false"
  // but are not boolean attributes
  var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

  // these attributes should set a hidden property for
  // binding v-model to object values
  var modelProps = {
    value: '_value',
    'true-value': '_trueValue',
    'false-value': '_falseValue'
  };

  var bind$1 = {

    priority: BIND,

    bind: function bind() {
      var attr = this.arg;
      var tag = this.el.tagName;
      // should be deep watch on object mode
      if (!attr) {
        this.deep = true;
      }
      // handle interpolation bindings
      var descriptor = this.descriptor;
      var tokens = descriptor.interp;
      if (tokens) {
        // handle interpolations with one-time tokens
        if (descriptor.hasOneTime) {
          this.expression = tokensToExp(tokens, this._scope || this.vm);
        }

        // only allow binding on native attributes
        if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
          'development' !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
          this.el.removeAttribute(attr);
          this.invalid = true;
        }

        /* istanbul ignore if */
        if ('development' !== 'production') {
          var raw = attr + '="' + descriptor.raw + '": ';
          // warn src
          if (attr === 'src') {
            warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
          }

          // warn style
          if (attr === 'style') {
            warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
          }
        }
      }
    },

    update: function update(value) {
      if (this.invalid) {
        return;
      }
      var attr = this.arg;
      if (this.arg) {
        this.handleSingle(attr, value);
      } else {
        this.handleObject(value || {});
      }
    },

    // share object handler with v-bind:class
    handleObject: style.handleObject,

    handleSingle: function handleSingle(attr, value) {
      var el = this.el;
      var interp = this.descriptor.interp;
      if (this.modifiers.camel) {
        attr = camelize(attr);
      }
      if (!interp && attrWithPropsRE.test(attr) && attr in el) {
        var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
        ? '' : value : value;

        if (el[attr] !== attrValue) {
          el[attr] = attrValue;
        }
      }
      // set model props
      var modelProp = modelProps[attr];
      if (!interp && modelProp) {
        el[modelProp] = value;
        // update v-model if present
        var model = el.__v_model;
        if (model) {
          model.listener();
        }
      }
      // do not set value attribute for textarea
      if (attr === 'value' && el.tagName === 'TEXTAREA') {
        el.removeAttribute(attr);
        return;
      }
      // update attribute
      if (enumeratedAttrRE.test(attr)) {
        el.setAttribute(attr, value ? 'true' : 'false');
      } else if (value != null && value !== false) {
        if (attr === 'class') {
          // handle edge case #1960:
          // class interpolation should not overwrite Vue transition class
          if (el.__v_trans) {
            value += ' ' + el.__v_trans.id + '-transition';
          }
          setClass(el, value);
        } else if (xlinkRE.test(attr)) {
          el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
        } else {
          el.setAttribute(attr, value === true ? '' : value);
        }
      } else {
        el.removeAttribute(attr);
      }
    }
  };

  var el = {

    priority: EL,

    bind: function bind() {
      /* istanbul ignore if */
      if (!this.arg) {
        return;
      }
      var id = this.id = camelize(this.arg);
      var refs = (this._scope || this.vm).$els;
      if (hasOwn(refs, id)) {
        refs[id] = this.el;
      } else {
        defineReactive(refs, id, this.el);
      }
    },

    unbind: function unbind() {
      var refs = (this._scope || this.vm).$els;
      if (refs[this.id] === this.el) {
        refs[this.id] = null;
      }
    }
  };

  var ref = {
    bind: function bind() {
      'development' !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
    }
  };

  var cloak = {
    bind: function bind() {
      var el = this.el;
      this.vm.$once('pre-hook:compiled', function () {
        el.removeAttribute('v-cloak');
      });
    }
  };

  // must export plain object
  var directives = {
    text: text$1,
    html: html,
    'for': vFor,
    'if': vIf,
    show: show,
    model: model,
    on: on$1,
    bind: bind$1,
    el: el,
    ref: ref,
    cloak: cloak
  };

  var vClass = {

    deep: true,

    update: function update(value) {
      if (!value) {
        this.cleanup();
      } else if (typeof value === 'string') {
        this.setClass(value.trim().split(/\s+/));
      } else {
        this.setClass(normalize$1(value));
      }
    },

    setClass: function setClass(value) {
      this.cleanup(value);
      for (var i = 0, l = value.length; i < l; i++) {
        var val = value[i];
        if (val) {
          apply(this.el, val, addClass);
        }
      }
      this.prevKeys = value;
    },

    cleanup: function cleanup(value) {
      var prevKeys = this.prevKeys;
      if (!prevKeys) return;
      var i = prevKeys.length;
      while (i--) {
        var key = prevKeys[i];
        if (!value || value.indexOf(key) < 0) {
          apply(this.el, key, removeClass);
        }
      }
    }
  };

  /**
   * Normalize objects and arrays (potentially containing objects)
   * into array of strings.
   *
   * @param {Object|Array<String|Object>} value
   * @return {Array<String>}
   */

  function normalize$1(value) {
    var res = [];
    if (isArray(value)) {
      for (var i = 0, l = value.length; i < l; i++) {
        var _key = value[i];
        if (_key) {
          if (typeof _key === 'string') {
            res.push(_key);
          } else {
            for (var k in _key) {
              if (_key[k]) res.push(k);
            }
          }
        }
      }
    } else if (isObject(value)) {
      for (var key in value) {
        if (value[key]) res.push(key);
      }
    }
    return res;
  }

  /**
   * Add or remove a class/classes on an element
   *
   * @param {Element} el
   * @param {String} key The class name. This may or may not
   *                     contain a space character, in such a
   *                     case we'll deal with multiple class
   *                     names at once.
   * @param {Function} fn
   */

  function apply(el, key, fn) {
    key = key.trim();
    if (key.indexOf(' ') === -1) {
      fn(el, key);
      return;
    }
    // The key contains one or more space characters.
    // Since a class name doesn't accept such characters, we
    // treat it as multiple classes.
    var keys = key.split(/\s+/);
    for (var i = 0, l = keys.length; i < l; i++) {
      fn(el, keys[i]);
    }
  }

  var component = {

    priority: COMPONENT,

    params: ['keep-alive', 'transition-mode', 'inline-template'],

    /**
     * Setup. Two possible usages:
     *
     * - static:
     *   <comp> or <div v-component="comp">
     *
     * - dynamic:
     *   <component :is="view">
     */

    bind: function bind() {
      if (!this.el.__vue__) {
        // keep-alive cache
        this.keepAlive = this.params.keepAlive;
        if (this.keepAlive) {
          this.cache = {};
        }
        // check inline-template
        if (this.params.inlineTemplate) {
          // extract inline template as a DocumentFragment
          this.inlineTemplate = extractContent(this.el, true);
        }
        // component resolution related state
        this.pendingComponentCb = this.Component = null;
        // transition related state
        this.pendingRemovals = 0;
        this.pendingRemovalCb = null;
        // create a ref anchor
        this.anchor = createAnchor('v-component');
        replace(this.el, this.anchor);
        // remove is attribute.
        // this is removed during compilation, but because compilation is
        // cached, when the component is used elsewhere this attribute
        // will remain at link time.
        this.el.removeAttribute('is');
        this.el.removeAttribute(':is');
        // remove ref, same as above
        if (this.descriptor.ref) {
          this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
        }
        // if static, build right now.
        if (this.literal) {
          this.setComponent(this.expression);
        }
      } else {
        'development' !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
      }
    },

    /**
     * Public update, called by the watcher in the dynamic
     * literal scenario, e.g. <component :is="view">
     */

    update: function update(value) {
      if (!this.literal) {
        this.setComponent(value);
      }
    },

    /**
     * Switch dynamic components. May resolve the component
     * asynchronously, and perform transition based on
     * specified transition mode. Accepts a few additional
     * arguments specifically for vue-router.
     *
     * The callback is called when the full transition is
     * finished.
     *
     * @param {String} value
     * @param {Function} [cb]
     */

    setComponent: function setComponent(value, cb) {
      this.invalidatePending();
      if (!value) {
        // just remove current
        this.unbuild(true);
        this.remove(this.childVM, cb);
        this.childVM = null;
      } else {
        var self = this;
        this.resolveComponent(value, function () {
          self.mountComponent(cb);
        });
      }
    },

    /**
     * Resolve the component constructor to use when creating
     * the child vm.
     *
     * @param {String|Function} value
     * @param {Function} cb
     */

    resolveComponent: function resolveComponent(value, cb) {
      var self = this;
      this.pendingComponentCb = cancellable(function (Component) {
        self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
        self.Component = Component;
        cb();
      });
      this.vm._resolveComponent(value, this.pendingComponentCb);
    },

    /**
     * Create a new instance using the current constructor and
     * replace the existing instance. This method doesn't care
     * whether the new component and the old one are actually
     * the same.
     *
     * @param {Function} [cb]
     */

    mountComponent: function mountComponent(cb) {
      // actual mount
      this.unbuild(true);
      var self = this;
      var activateHooks = this.Component.options.activate;
      var cached = this.getCached();
      var newComponent = this.build();
      if (activateHooks && !cached) {
        this.waitingFor = newComponent;
        callActivateHooks(activateHooks, newComponent, function () {
          if (self.waitingFor !== newComponent) {
            return;
          }
          self.waitingFor = null;
          self.transition(newComponent, cb);
        });
      } else {
        // update ref for kept-alive component
        if (cached) {
          newComponent._updateRef();
        }
        this.transition(newComponent, cb);
      }
    },

    /**
     * When the component changes or unbinds before an async
     * constructor is resolved, we need to invalidate its
     * pending callback.
     */

    invalidatePending: function invalidatePending() {
      if (this.pendingComponentCb) {
        this.pendingComponentCb.cancel();
        this.pendingComponentCb = null;
      }
    },

    /**
     * Instantiate/insert a new child vm.
     * If keep alive and has cached instance, insert that
     * instance; otherwise build a new one and cache it.
     *
     * @param {Object} [extraOptions]
     * @return {Vue} - the created instance
     */

    build: function build(extraOptions) {
      var cached = this.getCached();
      if (cached) {
        return cached;
      }
      if (this.Component) {
        // default options
        var options = {
          name: this.ComponentName,
          el: cloneNode(this.el),
          template: this.inlineTemplate,
          // make sure to add the child with correct parent
          // if this is a transcluded component, its parent
          // should be the transclusion host.
          parent: this._host || this.vm,
          // if no inline-template, then the compiled
          // linker can be cached for better performance.
          _linkerCachable: !this.inlineTemplate,
          _ref: this.descriptor.ref,
          _asComponent: true,
          _isRouterView: this._isRouterView,
          // if this is a transcluded component, context
          // will be the common parent vm of this instance
          // and its host.
          _context: this.vm,
          // if this is inside an inline v-for, the scope
          // will be the intermediate scope created for this
          // repeat fragment. this is used for linking props
          // and container directives.
          _scope: this._scope,
          // pass in the owner fragment of this component.
          // this is necessary so that the fragment can keep
          // track of its contained components in order to
          // call attach/detach hooks for them.
          _frag: this._frag
        };
        // extra options
        // in 1.0.0 this is used by vue-router only
        /* istanbul ignore if */
        if (extraOptions) {
          extend(options, extraOptions);
        }
        var child = new this.Component(options);
        if (this.keepAlive) {
          this.cache[this.Component.cid] = child;
        }
        /* istanbul ignore if */
        if ('development' !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
          warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
        }
        return child;
      }
    },

    /**
     * Try to get a cached instance of the current component.
     *
     * @return {Vue|undefined}
     */

    getCached: function getCached() {
      return this.keepAlive && this.cache[this.Component.cid];
    },

    /**
     * Teardown the current child, but defers cleanup so
     * that we can separate the destroy and removal steps.
     *
     * @param {Boolean} defer
     */

    unbuild: function unbuild(defer) {
      if (this.waitingFor) {
        if (!this.keepAlive) {
          this.waitingFor.$destroy();
        }
        this.waitingFor = null;
      }
      var child = this.childVM;
      if (!child || this.keepAlive) {
        if (child) {
          // remove ref
          child._inactive = true;
          child._updateRef(true);
        }
        return;
      }
      // the sole purpose of `deferCleanup` is so that we can
      // "deactivate" the vm right now and perform DOM removal
      // later.
      child.$destroy(false, defer);
    },

    /**
     * Remove current destroyed child and manually do
     * the cleanup after removal.
     *
     * @param {Function} cb
     */

    remove: function remove(child, cb) {
      var keepAlive = this.keepAlive;
      if (child) {
        // we may have a component switch when a previous
        // component is still being transitioned out.
        // we want to trigger only one lastest insertion cb
        // when the existing transition finishes. (#1119)
        this.pendingRemovals++;
        this.pendingRemovalCb = cb;
        var self = this;
        child.$remove(function () {
          self.pendingRemovals--;
          if (!keepAlive) child._cleanup();
          if (!self.pendingRemovals && self.pendingRemovalCb) {
            self.pendingRemovalCb();
            self.pendingRemovalCb = null;
          }
        });
      } else if (cb) {
        cb();
      }
    },

    /**
     * Actually swap the components, depending on the
     * transition mode. Defaults to simultaneous.
     *
     * @param {Vue} target
     * @param {Function} [cb]
     */

    transition: function transition(target, cb) {
      var self = this;
      var current = this.childVM;
      // for devtool inspection
      if (current) current._inactive = true;
      target._inactive = false;
      this.childVM = target;
      switch (self.params.transitionMode) {
        case 'in-out':
          target.$before(self.anchor, function () {
            self.remove(current, cb);
          });
          break;
        case 'out-in':
          self.remove(current, function () {
            target.$before(self.anchor, cb);
          });
          break;
        default:
          self.remove(current);
          target.$before(self.anchor, cb);
      }
    },

    /**
     * Unbind.
     */

    unbind: function unbind() {
      this.invalidatePending();
      // Do not defer cleanup when unbinding
      this.unbuild();
      // destroy all keep-alive cached instances
      if (this.cache) {
        for (var key in this.cache) {
          this.cache[key].$destroy();
        }
        this.cache = null;
      }
    }
  };

  /**
   * Call activate hooks in order (asynchronous)
   *
   * @param {Array} hooks
   * @param {Vue} vm
   * @param {Function} cb
   */

  function callActivateHooks(hooks, vm, cb) {
    var total = hooks.length;
    var called = 0;
    hooks[0].call(vm, next);
    function next() {
      if (++called >= total) {
        cb();
      } else {
        hooks[called].call(vm, next);
      }
    }
  }

  var propBindingModes = config._propBindingModes;
  var empty = {};

  // regexes
  var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
  var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

  /**
   * Compile props on a root element and return
   * a props link function.
   *
   * @param {Element|DocumentFragment} el
   * @param {Array} propOptions
   * @param {Vue} vm
   * @return {Function} propsLinkFn
   */

  function compileProps(el, propOptions, vm) {
    var props = [];
    var names = Object.keys(propOptions);
    var i = names.length;
    var options, name, attr, value, path, parsed, prop;
    while (i--) {
      name = names[i];
      options = propOptions[name] || empty;

      if ('development' !== 'production' && name === '$data') {
        warn('Do not use $data as prop.', vm);
        continue;
      }

      // props could contain dashes, which will be
      // interpreted as minus calculations by the parser
      // so we need to camelize the path here
      path = camelize(name);
      if (!identRE$1.test(path)) {
        'development' !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
        continue;
      }

      prop = {
        name: name,
        path: path,
        options: options,
        mode: propBindingModes.ONE_WAY,
        raw: null
      };

      attr = hyphenate(name);
      // first check dynamic version
      if ((value = getBindAttr(el, attr)) === null) {
        if ((value = getBindAttr(el, attr + '.sync')) !== null) {
          prop.mode = propBindingModes.TWO_WAY;
        } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
          prop.mode = propBindingModes.ONE_TIME;
        }
      }
      if (value !== null) {
        // has dynamic binding!
        prop.raw = value;
        parsed = parseDirective(value);
        value = parsed.expression;
        prop.filters = parsed.filters;
        // check binding type
        if (isLiteral(value) && !parsed.filters) {
          // for expressions containing literal numbers and
          // booleans, there's no need to setup a prop binding,
          // so we can optimize them as a one-time set.
          prop.optimizedLiteral = true;
        } else {
          prop.dynamic = true;
          // check non-settable path for two-way bindings
          if ('development' !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
            prop.mode = propBindingModes.ONE_WAY;
            warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
          }
        }
        prop.parentPath = value;

        // warn required two-way
        if ('development' !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
          warn('Prop "' + name + '" expects a two-way binding type.', vm);
        }
      } else if ((value = getAttr(el, attr)) !== null) {
        // has literal binding!
        prop.raw = value;
      } else if ('development' !== 'production') {
        // check possible camelCase prop usage
        var lowerCaseName = path.toLowerCase();
        value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
        if (value) {
          warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
        } else if (options.required) {
          // warn missing required
          warn('Missing required prop: ' + name, vm);
        }
      }
      // push prop
      props.push(prop);
    }
    return makePropsLinkFn(props);
  }

  /**
   * Build a function that applies props to a vm.
   *
   * @param {Array} props
   * @return {Function} propsLinkFn
   */

  function makePropsLinkFn(props) {
    return function propsLinkFn(vm, scope) {
      // store resolved props info
      vm._props = {};
      var inlineProps = vm.$options.propsData;
      var i = props.length;
      var prop, path, options, value, raw;
      while (i--) {
        prop = props[i];
        raw = prop.raw;
        path = prop.path;
        options = prop.options;
        vm._props[path] = prop;
        if (inlineProps && hasOwn(inlineProps, path)) {
          initProp(vm, prop, inlineProps[path]);
        }if (raw === null) {
          // initialize absent prop
          initProp(vm, prop, undefined);
        } else if (prop.dynamic) {
          // dynamic prop
          if (prop.mode === propBindingModes.ONE_TIME) {
            // one time binding
            value = (scope || vm._context || vm).$get(prop.parentPath);
            initProp(vm, prop, value);
          } else {
            if (vm._context) {
              // dynamic binding
              vm._bindDir({
                name: 'prop',
                def: propDef,
                prop: prop
              }, null, null, scope); // el, host, scope
            } else {
                // root instance
                initProp(vm, prop, vm.$get(prop.parentPath));
              }
          }
        } else if (prop.optimizedLiteral) {
          // optimized literal, cast it and just set once
          var stripped = stripQuotes(raw);
          value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
          initProp(vm, prop, value);
        } else {
          // string literal, but we need to cater for
          // Boolean props with no value, or with same
          // literal value (e.g. disabled="disabled")
          // see https://github.com/vuejs/vue-loader/issues/182
          value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
          initProp(vm, prop, value);
        }
      }
    };
  }

  /**
   * Process a prop with a rawValue, applying necessary coersions,
   * default values & assertions and call the given callback with
   * processed value.
   *
   * @param {Vue} vm
   * @param {Object} prop
   * @param {*} rawValue
   * @param {Function} fn
   */

  function processPropValue(vm, prop, rawValue, fn) {
    var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
    var value = rawValue;
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop);
    }
    value = coerceProp(prop, value, vm);
    var coerced = value !== rawValue;
    if (!assertProp(prop, value, vm)) {
      value = undefined;
    }
    if (isSimple && !coerced) {
      withoutConversion(function () {
        fn(value);
      });
    } else {
      fn(value);
    }
  }

  /**
   * Set a prop's initial value on a vm and its data object.
   *
   * @param {Vue} vm
   * @param {Object} prop
   * @param {*} value
   */

  function initProp(vm, prop, value) {
    processPropValue(vm, prop, value, function (value) {
      defineReactive(vm, prop.path, value);
    });
  }

  /**
   * Update a prop's value on a vm.
   *
   * @param {Vue} vm
   * @param {Object} prop
   * @param {*} value
   */

  function updateProp(vm, prop, value) {
    processPropValue(vm, prop, value, function (value) {
      vm[prop.path] = value;
    });
  }

  /**
   * Get the default value of a prop.
   *
   * @param {Vue} vm
   * @param {Object} prop
   * @return {*}
   */

  function getPropDefaultValue(vm, prop) {
    // no default, return undefined
    var options = prop.options;
    if (!hasOwn(options, 'default')) {
      // absent boolean value defaults to false
      return options.type === Boolean ? false : undefined;
    }
    var def = options['default'];
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      'development' !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    }
    // call factory function for non-Function types
    return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
  }

  /**
   * Assert whether a prop is valid.
   *
   * @param {Object} prop
   * @param {*} value
   * @param {Vue} vm
   */

  function assertProp(prop, value, vm) {
    if (!prop.options.required && ( // non-required
    prop.raw === null || // abscent
    value == null) // null or undefined
    ) {
        return true;
      }
    var options = prop.options;
    var type = options.type;
    var valid = !type;
    var expectedTypes = [];
    if (type) {
      if (!isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType);
        valid = assertedType.valid;
      }
    }
    if (!valid) {
      if ('development' !== 'production') {
        warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
      }
      return false;
    }
    var validator = options.validator;
    if (validator) {
      if (!validator(value)) {
        'development' !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
        return false;
      }
    }
    return true;
  }

  /**
   * Force parsing value with coerce option.
   *
   * @param {*} value
   * @param {Object} options
   * @return {*}
   */

  function coerceProp(prop, value, vm) {
    var coerce = prop.options.coerce;
    if (!coerce) {
      return value;
    }
    if (typeof coerce === 'function') {
      return coerce(value);
    } else {
      'development' !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
      return value;
    }
  }

  /**
   * Assert the type of a value
   *
   * @param {*} value
   * @param {Function} type
   * @return {Object}
   */

  function assertType(value, type) {
    var valid;
    var expectedType;
    if (type === String) {
      expectedType = 'string';
      valid = typeof value === expectedType;
    } else if (type === Number) {
      expectedType = 'number';
      valid = typeof value === expectedType;
    } else if (type === Boolean) {
      expectedType = 'boolean';
      valid = typeof value === expectedType;
    } else if (type === Function) {
      expectedType = 'function';
      valid = typeof value === expectedType;
    } else if (type === Object) {
      expectedType = 'object';
      valid = isPlainObject(value);
    } else if (type === Array) {
      expectedType = 'array';
      valid = isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    };
  }

  /**
   * Format type for output
   *
   * @param {String} type
   * @return {String}
   */

  function formatType(type) {
    return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
  }

  /**
   * Format value
   *
   * @param {*} value
   * @return {String}
   */

  function formatValue(val) {
    return Object.prototype.toString.call(val).slice(8, -1);
  }

  var bindingModes = config._propBindingModes;

  var propDef = {

    bind: function bind() {
      var child = this.vm;
      var parent = child._context;
      // passed in from compiler directly
      var prop = this.descriptor.prop;
      var childKey = prop.path;
      var parentKey = prop.parentPath;
      var twoWay = prop.mode === bindingModes.TWO_WAY;

      var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
        updateProp(child, prop, val);
      }, {
        twoWay: twoWay,
        filters: prop.filters,
        // important: props need to be observed on the
        // v-for scope if present
        scope: this._scope
      });

      // set the child initial value.
      initProp(child, prop, parentWatcher.value);

      // setup two-way binding
      if (twoWay) {
        // important: defer the child watcher creation until
        // the created hook (after data observation)
        var self = this;
        child.$once('pre-hook:created', function () {
          self.childWatcher = new Watcher(child, childKey, function (val) {
            parentWatcher.set(val);
          }, {
            // ensure sync upward before parent sync down.
            // this is necessary in cases e.g. the child
            // mutates a prop array, then replaces it. (#1683)
            sync: true
          });
        });
      }
    },

    unbind: function unbind() {
      this.parentWatcher.teardown();
      if (this.childWatcher) {
        this.childWatcher.teardown();
      }
    }
  };

  var queue$1 = [];
  var queued = false;

  /**
   * Push a job into the queue.
   *
   * @param {Function} job
   */

  function pushJob(job) {
    queue$1.push(job);
    if (!queued) {
      queued = true;
      nextTick(flush);
    }
  }

  /**
   * Flush the queue, and do one forced reflow before
   * triggering transitions.
   */

  function flush() {
    // Force layout
    var f = document.documentElement.offsetHeight;
    for (var i = 0; i < queue$1.length; i++) {
      queue$1[i]();
    }
    queue$1 = [];
    queued = false;
    // dummy return, so js linters don't complain about
    // unused variable f
    return f;
  }

  var TYPE_TRANSITION = 'transition';
  var TYPE_ANIMATION = 'animation';
  var transDurationProp = transitionProp + 'Duration';
  var animDurationProp = animationProp + 'Duration';

  /**
   * If a just-entered element is applied the
   * leave class while its enter transition hasn't started yet,
   * and the transitioned property has the same value for both
   * enter/leave, then the leave transition will be skipped and
   * the transitionend event never fires. This function ensures
   * its callback to be called after a transition has started
   * by waiting for double raf.
   *
   * It falls back to setTimeout on devices that support CSS
   * transitions but not raf (e.g. Android 4.2 browser) - since
   * these environments are usually slow, we are giving it a
   * relatively large timeout.
   */

  var raf = inBrowser && window.requestAnimationFrame;
  var waitForTransitionStart = raf
  /* istanbul ignore next */
  ? function (fn) {
    raf(function () {
      raf(fn);
    });
  } : function (fn) {
    setTimeout(fn, 50);
  };

  /**
   * A Transition object that encapsulates the state and logic
   * of the transition.
   *
   * @param {Element} el
   * @param {String} id
   * @param {Object} hooks
   * @param {Vue} vm
   */
  function Transition(el, id, hooks, vm) {
    this.id = id;
    this.el = el;
    this.enterClass = hooks && hooks.enterClass || id + '-enter';
    this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
    this.hooks = hooks;
    this.vm = vm;
    // async state
    this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
    this.justEntered = false;
    this.entered = this.left = false;
    this.typeCache = {};
    // check css transition type
    this.type = hooks && hooks.type;
    /* istanbul ignore if */
    if ('development' !== 'production') {
      if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
        warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
      }
    }
    // bind
    var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
      self[m] = bind(self[m], self);
    });
  }

  var p$1 = Transition.prototype;

  /**
   * Start an entering transition.
   *
   * 1. enter transition triggered
   * 2. call beforeEnter hook
   * 3. add enter class
   * 4. insert/show element
   * 5. call enter hook (with possible explicit js callback)
   * 6. reflow
   * 7. based on transition type:
   *    - transition:
   *        remove class now, wait for transitionend,
   *        then done if there's no explicit js callback.
   *    - animation:
   *        wait for animationend, remove class,
   *        then done if there's no explicit js callback.
   *    - no css transition:
   *        done now if there's no explicit js callback.
   * 8. wait for either done or js callback, then call
   *    afterEnter hook.
   *
   * @param {Function} op - insert/show the element
   * @param {Function} [cb]
   */

  p$1.enter = function (op, cb) {
    this.cancelPending();
    this.callHook('beforeEnter');
    this.cb = cb;
    addClass(this.el, this.enterClass);
    op();
    this.entered = false;
    this.callHookWithCb('enter');
    if (this.entered) {
      return; // user called done synchronously.
    }
    this.cancel = this.hooks && this.hooks.enterCancelled;
    pushJob(this.enterNextTick);
  };

  /**
   * The "nextTick" phase of an entering transition, which is
   * to be pushed into a queue and executed after a reflow so
   * that removing the class can trigger a CSS transition.
   */

  p$1.enterNextTick = function () {
    var _this = this;

    // prevent transition skipping
    this.justEntered = true;
    waitForTransitionStart(function () {
      _this.justEntered = false;
    });
    var enterDone = this.enterDone;
    var type = this.getCssTransitionType(this.enterClass);
    if (!this.pendingJsCb) {
      if (type === TYPE_TRANSITION) {
        // trigger transition by removing enter class now
        removeClass(this.el, this.enterClass);
        this.setupCssCb(transitionEndEvent, enterDone);
      } else if (type === TYPE_ANIMATION) {
        this.setupCssCb(animationEndEvent, enterDone);
      } else {
        enterDone();
      }
    } else if (type === TYPE_TRANSITION) {
      removeClass(this.el, this.enterClass);
    }
  };

  /**
   * The "cleanup" phase of an entering transition.
   */

  p$1.enterDone = function () {
    this.entered = true;
    this.cancel = this.pendingJsCb = null;
    removeClass(this.el, this.enterClass);
    this.callHook('afterEnter');
    if (this.cb) this.cb();
  };

  /**
   * Start a leaving transition.
   *
   * 1. leave transition triggered.
   * 2. call beforeLeave hook
   * 3. add leave class (trigger css transition)
   * 4. call leave hook (with possible explicit js callback)
   * 5. reflow if no explicit js callback is provided
   * 6. based on transition type:
   *    - transition or animation:
   *        wait for end event, remove class, then done if
   *        there's no explicit js callback.
   *    - no css transition:
   *        done if there's no explicit js callback.
   * 7. wait for either done or js callback, then call
   *    afterLeave hook.
   *
   * @param {Function} op - remove/hide the element
   * @param {Function} [cb]
   */

  p$1.leave = function (op, cb) {
    this.cancelPending();
    this.callHook('beforeLeave');
    this.op = op;
    this.cb = cb;
    addClass(this.el, this.leaveClass);
    this.left = false;
    this.callHookWithCb('leave');
    if (this.left) {
      return; // user called done synchronously.
    }
    this.cancel = this.hooks && this.hooks.leaveCancelled;
    // only need to handle leaveDone if
    // 1. the transition is already done (synchronously called
    //    by the user, which causes this.op set to null)
    // 2. there's no explicit js callback
    if (this.op && !this.pendingJsCb) {
      // if a CSS transition leaves immediately after enter,
      // the transitionend event never fires. therefore we
      // detect such cases and end the leave immediately.
      if (this.justEntered) {
        this.leaveDone();
      } else {
        pushJob(this.leaveNextTick);
      }
    }
  };

  /**
   * The "nextTick" phase of a leaving transition.
   */

  p$1.leaveNextTick = function () {
    var type = this.getCssTransitionType(this.leaveClass);
    if (type) {
      var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
      this.setupCssCb(event, this.leaveDone);
    } else {
      this.leaveDone();
    }
  };

  /**
   * The "cleanup" phase of a leaving transition.
   */

  p$1.leaveDone = function () {
    this.left = true;
    this.cancel = this.pendingJsCb = null;
    this.op();
    removeClass(this.el, this.leaveClass);
    this.callHook('afterLeave');
    if (this.cb) this.cb();
    this.op = null;
  };

  /**
   * Cancel any pending callbacks from a previously running
   * but not finished transition.
   */

  p$1.cancelPending = function () {
    this.op = this.cb = null;
    var hasPending = false;
    if (this.pendingCssCb) {
      hasPending = true;
      off(this.el, this.pendingCssEvent, this.pendingCssCb);
      this.pendingCssEvent = this.pendingCssCb = null;
    }
    if (this.pendingJsCb) {
      hasPending = true;
      this.pendingJsCb.cancel();
      this.pendingJsCb = null;
    }
    if (hasPending) {
      removeClass(this.el, this.enterClass);
      removeClass(this.el, this.leaveClass);
    }
    if (this.cancel) {
      this.cancel.call(this.vm, this.el);
      this.cancel = null;
    }
  };

  /**
   * Call a user-provided synchronous hook function.
   *
   * @param {String} type
   */

  p$1.callHook = function (type) {
    if (this.hooks && this.hooks[type]) {
      this.hooks[type].call(this.vm, this.el);
    }
  };

  /**
   * Call a user-provided, potentially-async hook function.
   * We check for the length of arguments to see if the hook
   * expects a `done` callback. If true, the transition's end
   * will be determined by when the user calls that callback;
   * otherwise, the end is determined by the CSS transition or
   * animation.
   *
   * @param {String} type
   */

  p$1.callHookWithCb = function (type) {
    var hook = this.hooks && this.hooks[type];
    if (hook) {
      if (hook.length > 1) {
        this.pendingJsCb = cancellable(this[type + 'Done']);
      }
      hook.call(this.vm, this.el, this.pendingJsCb);
    }
  };

  /**
   * Get an element's transition type based on the
   * calculated styles.
   *
   * @param {String} className
   * @return {Number}
   */

  p$1.getCssTransitionType = function (className) {
    /* istanbul ignore if */
    if (!transitionEndEvent ||
    // skip CSS transitions if page is not visible -
    // this solves the issue of transitionend events not
    // firing until the page is visible again.
    // pageVisibility API is supported in IE10+, same as
    // CSS transitions.
    document.hidden ||
    // explicit js-only transition
    this.hooks && this.hooks.css === false ||
    // element is hidden
    isHidden(this.el)) {
      return;
    }
    var type = this.type || this.typeCache[className];
    if (type) return type;
    var inlineStyles = this.el.style;
    var computedStyles = window.getComputedStyle(this.el);
    var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
    if (transDuration && transDuration !== '0s') {
      type = TYPE_TRANSITION;
    } else {
      var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
      if (animDuration && animDuration !== '0s') {
        type = TYPE_ANIMATION;
      }
    }
    if (type) {
      this.typeCache[className] = type;
    }
    return type;
  };

  /**
   * Setup a CSS transitionend/animationend callback.
   *
   * @param {String} event
   * @param {Function} cb
   */

  p$1.setupCssCb = function (event, cb) {
    this.pendingCssEvent = event;
    var self = this;
    var el = this.el;
    var onEnd = this.pendingCssCb = function (e) {
      if (e.target === el) {
        off(el, event, onEnd);
        self.pendingCssEvent = self.pendingCssCb = null;
        if (!self.pendingJsCb && cb) {
          cb();
        }
      }
    };
    on(el, event, onEnd);
  };

  /**
   * Check if an element is hidden - in that case we can just
   * skip the transition alltogether.
   *
   * @param {Element} el
   * @return {Boolean}
   */

  function isHidden(el) {
    if (/svg$/.test(el.namespaceURI)) {
      // SVG elements do not have offset(Width|Height)
      // so we need to check the client rect
      var rect = el.getBoundingClientRect();
      return !(rect.width || rect.height);
    } else {
      return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
    }
  }

  var transition$1 = {

    priority: TRANSITION,

    update: function update(id, oldId) {
      var el = this.el;
      // resolve on owner vm
      var hooks = resolveAsset(this.vm.$options, 'transitions', id);
      id = id || 'v';
      oldId = oldId || 'v';
      el.__v_trans = new Transition(el, id, hooks, this.vm);
      removeClass(el, oldId + '-transition');
      addClass(el, id + '-transition');
    }
  };

  var internalDirectives = {
    style: style,
    'class': vClass,
    component: component,
    prop: propDef,
    transition: transition$1
  };

  // special binding prefixes
  var bindRE = /^v-bind:|^:/;
  var onRE = /^v-on:|^@/;
  var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
  var modifierRE = /\.[^\.]+/g;
  var transitionRE = /^(v-bind:|:)?transition$/;

  // default directive priority
  var DEFAULT_PRIORITY = 1000;
  var DEFAULT_TERMINAL_PRIORITY = 2000;

  /**
   * Compile a template and return a reusable composite link
   * function, which recursively contains more link functions
   * inside. This top level compile function would normally
   * be called on instance root nodes, but can also be used
   * for partial compilation if the partial argument is true.
   *
   * The returned composite link function, when called, will
   * return an unlink function that tearsdown all directives
   * created during the linking phase.
   *
   * @param {Element|DocumentFragment} el
   * @param {Object} options
   * @param {Boolean} partial
   * @return {Function}
   */

  function compile(el, options, partial) {
    // link function for the node itself.
    var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
    // link function for the childNodes
    var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

    /**
     * A composite linker function to be called on a already
     * compiled piece of DOM, which instantiates all directive
     * instances.
     *
     * @param {Vue} vm
     * @param {Element|DocumentFragment} el
     * @param {Vue} [host] - host vm of transcluded content
     * @param {Object} [scope] - v-for scope
     * @param {Fragment} [frag] - link context fragment
     * @return {Function|undefined}
     */

    return function compositeLinkFn(vm, el, host, scope, frag) {
      // cache childNodes before linking parent, fix #657
      var childNodes = toArray(el.childNodes);
      // link
      var dirs = linkAndCapture(function compositeLinkCapturer() {
        if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
        if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
      }, vm);
      return makeUnlinkFn(vm, dirs);
    };
  }

  /**
   * Apply a linker to a vm/element pair and capture the
   * directives created during the process.
   *
   * @param {Function} linker
   * @param {Vue} vm
   */

  function linkAndCapture(linker, vm) {
    /* istanbul ignore if */
    if ('development' === 'production') {}
    var originalDirCount = vm._directives.length;
    linker();
    var dirs = vm._directives.slice(originalDirCount);
    dirs.sort(directiveComparator);
    for (var i = 0, l = dirs.length; i < l; i++) {
      dirs[i]._bind();
    }
    return dirs;
  }

  /**
   * Directive priority sort comparator
   *
   * @param {Object} a
   * @param {Object} b
   */

  function directiveComparator(a, b) {
    a = a.descriptor.def.priority || DEFAULT_PRIORITY;
    b = b.descriptor.def.priority || DEFAULT_PRIORITY;
    return a > b ? -1 : a === b ? 0 : 1;
  }

  /**
   * Linker functions return an unlink function that
   * tearsdown all directives instances generated during
   * the process.
   *
   * We create unlink functions with only the necessary
   * information to avoid retaining additional closures.
   *
   * @param {Vue} vm
   * @param {Array} dirs
   * @param {Vue} [context]
   * @param {Array} [contextDirs]
   * @return {Function}
   */

  function makeUnlinkFn(vm, dirs, context, contextDirs) {
    function unlink(destroying) {
      teardownDirs(vm, dirs, destroying);
      if (context && contextDirs) {
        teardownDirs(context, contextDirs);
      }
    }
    // expose linked directives
    unlink.dirs = dirs;
    return unlink;
  }

  /**
   * Teardown partial linked directives.
   *
   * @param {Vue} vm
   * @param {Array} dirs
   * @param {Boolean} destroying
   */

  function teardownDirs(vm, dirs, destroying) {
    var i = dirs.length;
    while (i--) {
      dirs[i]._teardown();
      if ('development' !== 'production' && !destroying) {
        vm._directives.$remove(dirs[i]);
      }
    }
  }

  /**
   * Compile link props on an instance.
   *
   * @param {Vue} vm
   * @param {Element} el
   * @param {Object} props
   * @param {Object} [scope]
   * @return {Function}
   */

  function compileAndLinkProps(vm, el, props, scope) {
    var propsLinkFn = compileProps(el, props, vm);
    var propDirs = linkAndCapture(function () {
      propsLinkFn(vm, scope);
    }, vm);
    return makeUnlinkFn(vm, propDirs);
  }

  /**
   * Compile the root element of an instance.
   *
   * 1. attrs on context container (context scope)
   * 2. attrs on the component template root node, if
   *    replace:true (child scope)
   *
   * If this is a fragment instance, we only need to compile 1.
   *
   * @param {Element} el
   * @param {Object} options
   * @param {Object} contextOptions
   * @return {Function}
   */

  function compileRoot(el, options, contextOptions) {
    var containerAttrs = options._containerAttrs;
    var replacerAttrs = options._replacerAttrs;
    var contextLinkFn, replacerLinkFn;

    // only need to compile other attributes for
    // non-fragment instances
    if (el.nodeType !== 11) {
      // for components, container and replacer need to be
      // compiled separately and linked in different scopes.
      if (options._asComponent) {
        // 2. container attributes
        if (containerAttrs && contextOptions) {
          contextLinkFn = compileDirectives(containerAttrs, contextOptions);
        }
        if (replacerAttrs) {
          // 3. replacer attributes
          replacerLinkFn = compileDirectives(replacerAttrs, options);
        }
      } else {
        // non-component, just compile as a normal element.
        replacerLinkFn = compileDirectives(el.attributes, options);
      }
    } else if ('development' !== 'production' && containerAttrs) {
      // warn container directives for fragment instances
      var names = containerAttrs.filter(function (attr) {
        // allow vue-loader/vueify scoped css attributes
        return attr.name.indexOf('_v-') < 0 &&
        // allow event listeners
        !onRE.test(attr.name) &&
        // allow slots
        attr.name !== 'slot';
      }).map(function (attr) {
        return '"' + attr.name + '"';
      });
      if (names.length) {
        var plural = names.length > 1;
        warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
      }
    }

    options._containerAttrs = options._replacerAttrs = null;
    return function rootLinkFn(vm, el, scope) {
      // link context scope dirs
      var context = vm._context;
      var contextDirs;
      if (context && contextLinkFn) {
        contextDirs = linkAndCapture(function () {
          contextLinkFn(context, el, null, scope);
        }, context);
      }

      // link self
      var selfDirs = linkAndCapture(function () {
        if (replacerLinkFn) replacerLinkFn(vm, el);
      }, vm);

      // return the unlink function that tearsdown context
      // container directives.
      return makeUnlinkFn(vm, selfDirs, context, contextDirs);
    };
  }

  /**
   * Compile a node and return a nodeLinkFn based on the
   * node type.
   *
   * @param {Node} node
   * @param {Object} options
   * @return {Function|null}
   */

  function compileNode(node, options) {
    var type = node.nodeType;
    if (type === 1 && !isScript(node)) {
      return compileElement(node, options);
    } else if (type === 3 && node.data.trim()) {
      return compileTextNode(node, options);
    } else {
      return null;
    }
  }

  /**
   * Compile an element and return a nodeLinkFn.
   *
   * @param {Element} el
   * @param {Object} options
   * @return {Function|null}
   */

  function compileElement(el, options) {
    // preprocess textareas.
    // textarea treats its text content as the initial value.
    // just bind it as an attr directive for value.
    if (el.tagName === 'TEXTAREA') {
      var tokens = parseText(el.value);
      if (tokens) {
        el.setAttribute(':value', tokensToExp(tokens));
        el.value = '';
      }
    }
    var linkFn;
    var hasAttrs = el.hasAttributes();
    var attrs = hasAttrs && toArray(el.attributes);
    // check terminal directives (for & if)
    if (hasAttrs) {
      linkFn = checkTerminalDirectives(el, attrs, options);
    }
    // check element directives
    if (!linkFn) {
      linkFn = checkElementDirectives(el, options);
    }
    // check component
    if (!linkFn) {
      linkFn = checkComponent(el, options);
    }
    // normal directives
    if (!linkFn && hasAttrs) {
      linkFn = compileDirectives(attrs, options);
    }
    return linkFn;
  }

  /**
   * Compile a textNode and return a nodeLinkFn.
   *
   * @param {TextNode} node
   * @param {Object} options
   * @return {Function|null} textNodeLinkFn
   */

  function compileTextNode(node, options) {
    // skip marked text nodes
    if (node._skip) {
      return removeText;
    }

    var tokens = parseText(node.wholeText);
    if (!tokens) {
      return null;
    }

    // mark adjacent text nodes as skipped,
    // because we are using node.wholeText to compile
    // all adjacent text nodes together. This fixes
    // issues in IE where sometimes it splits up a single
    // text node into multiple ones.
    var next = node.nextSibling;
    while (next && next.nodeType === 3) {
      next._skip = true;
      next = next.nextSibling;
    }

    var frag = document.createDocumentFragment();
    var el, token;
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i];
      el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
      frag.appendChild(el);
    }
    return makeTextNodeLinkFn(tokens, frag, options);
  }

  /**
   * Linker for an skipped text node.
   *
   * @param {Vue} vm
   * @param {Text} node
   */

  function removeText(vm, node) {
    remove(node);
  }

  /**
   * Process a single text token.
   *
   * @param {Object} token
   * @param {Object} options
   * @return {Node}
   */

  function processTextToken(token, options) {
    var el;
    if (token.oneTime) {
      el = document.createTextNode(token.value);
    } else {
      if (token.html) {
        el = document.createComment('v-html');
        setTokenType('html');
      } else {
        // IE will clean up empty textNodes during
        // frag.cloneNode(true), so we have to give it
        // something here...
        el = document.createTextNode(' ');
        setTokenType('text');
      }
    }
    function setTokenType(type) {
      if (token.descriptor) return;
      var parsed = parseDirective(token.value);
      token.descriptor = {
        name: type,
        def: directives[type],
        expression: parsed.expression,
        filters: parsed.filters
      };
    }
    return el;
  }

  /**
   * Build a function that processes a textNode.
   *
   * @param {Array<Object>} tokens
   * @param {DocumentFragment} frag
   */

  function makeTextNodeLinkFn(tokens, frag) {
    return function textNodeLinkFn(vm, el, host, scope) {
      var fragClone = frag.cloneNode(true);
      var childNodes = toArray(fragClone.childNodes);
      var token, value, node;
      for (var i = 0, l = tokens.length; i < l; i++) {
        token = tokens[i];
        value = token.value;
        if (token.tag) {
          node = childNodes[i];
          if (token.oneTime) {
            value = (scope || vm).$eval(value);
            if (token.html) {
              replace(node, parseTemplate(value, true));
            } else {
              node.data = _toString(value);
            }
          } else {
            vm._bindDir(token.descriptor, node, host, scope);
          }
        }
      }
      replace(el, fragClone);
    };
  }

  /**
   * Compile a node list and return a childLinkFn.
   *
   * @param {NodeList} nodeList
   * @param {Object} options
   * @return {Function|undefined}
   */

  function compileNodeList(nodeList, options) {
    var linkFns = [];
    var nodeLinkFn, childLinkFn, node;
    for (var i = 0, l = nodeList.length; i < l; i++) {
      node = nodeList[i];
      nodeLinkFn = compileNode(node, options);
      childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
      linkFns.push(nodeLinkFn, childLinkFn);
    }
    return linkFns.length ? makeChildLinkFn(linkFns) : null;
  }

  /**
   * Make a child link function for a node's childNodes.
   *
   * @param {Array<Function>} linkFns
   * @return {Function} childLinkFn
   */

  function makeChildLinkFn(linkFns) {
    return function childLinkFn(vm, nodes, host, scope, frag) {
      var node, nodeLinkFn, childrenLinkFn;
      for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
        node = nodes[n];
        nodeLinkFn = linkFns[i++];
        childrenLinkFn = linkFns[i++];
        // cache childNodes before linking parent, fix #657
        var childNodes = toArray(node.childNodes);
        if (nodeLinkFn) {
          nodeLinkFn(vm, node, host, scope, frag);
        }
        if (childrenLinkFn) {
          childrenLinkFn(vm, childNodes, host, scope, frag);
        }
      }
    };
  }

  /**
   * Check for element directives (custom elements that should
   * be resovled as terminal directives).
   *
   * @param {Element} el
   * @param {Object} options
   */

  function checkElementDirectives(el, options) {
    var tag = el.tagName.toLowerCase();
    if (commonTagRE.test(tag)) {
      return;
    }
    var def = resolveAsset(options, 'elementDirectives', tag);
    if (def) {
      return makeTerminalNodeLinkFn(el, tag, '', options, def);
    }
  }

  /**
   * Check if an element is a component. If yes, return
   * a component link function.
   *
   * @param {Element} el
   * @param {Object} options
   * @return {Function|undefined}
   */

  function checkComponent(el, options) {
    var component = checkComponentAttr(el, options);
    if (component) {
      var ref = findRef(el);
      var descriptor = {
        name: 'component',
        ref: ref,
        expression: component.id,
        def: internalDirectives.component,
        modifiers: {
          literal: !component.dynamic
        }
      };
      var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
        if (ref) {
          defineReactive((scope || vm).$refs, ref, null);
        }
        vm._bindDir(descriptor, el, host, scope, frag);
      };
      componentLinkFn.terminal = true;
      return componentLinkFn;
    }
  }

  /**
   * Check an element for terminal directives in fixed order.
   * If it finds one, return a terminal link function.
   *
   * @param {Element} el
   * @param {Array} attrs
   * @param {Object} options
   * @return {Function} terminalLinkFn
   */

  function checkTerminalDirectives(el, attrs, options) {
    // skip v-pre
    if (getAttr(el, 'v-pre') !== null) {
      return skip;
    }
    // skip v-else block, but only if following v-if
    if (el.hasAttribute('v-else')) {
      var prev = el.previousElementSibling;
      if (prev && prev.hasAttribute('v-if')) {
        return skip;
      }
    }

    var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
    for (var i = 0, j = attrs.length; i < j; i++) {
      attr = attrs[i];
      name = attr.name.replace(modifierRE, '');
      if (matched = name.match(dirAttrRE)) {
        def = resolveAsset(options, 'directives', matched[1]);
        if (def && def.terminal) {
          if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
            termDef = def;
            rawName = attr.name;
            modifiers = parseModifiers(attr.name);
            value = attr.value;
            dirName = matched[1];
            arg = matched[2];
          }
        }
      }
    }

    if (termDef) {
      return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
    }
  }

  function skip() {}
  skip.terminal = true;

  /**
   * Build a node link function for a terminal directive.
   * A terminal link function terminates the current
   * compilation recursion and handles compilation of the
   * subtree in the directive.
   *
   * @param {Element} el
   * @param {String} dirName
   * @param {String} value
   * @param {Object} options
   * @param {Object} def
   * @param {String} [rawName]
   * @param {String} [arg]
   * @param {Object} [modifiers]
   * @return {Function} terminalLinkFn
   */

  function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
    var parsed = parseDirective(value);
    var descriptor = {
      name: dirName,
      arg: arg,
      expression: parsed.expression,
      filters: parsed.filters,
      raw: value,
      attr: rawName,
      modifiers: modifiers,
      def: def
    };
    // check ref for v-for and router-view
    if (dirName === 'for' || dirName === 'router-view') {
      descriptor.ref = findRef(el);
    }
    var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
      if (descriptor.ref) {
        defineReactive((scope || vm).$refs, descriptor.ref, null);
      }
      vm._bindDir(descriptor, el, host, scope, frag);
    };
    fn.terminal = true;
    return fn;
  }

  /**
   * Compile the directives on an element and return a linker.
   *
   * @param {Array|NamedNodeMap} attrs
   * @param {Object} options
   * @return {Function}
   */

  function compileDirectives(attrs, options) {
    var i = attrs.length;
    var dirs = [];
    var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
    while (i--) {
      attr = attrs[i];
      name = rawName = attr.name;
      value = rawValue = attr.value;
      tokens = parseText(value);
      // reset arg
      arg = null;
      // check modifiers
      modifiers = parseModifiers(name);
      name = name.replace(modifierRE, '');

      // attribute interpolations
      if (tokens) {
        value = tokensToExp(tokens);
        arg = name;
        pushDir('bind', directives.bind, tokens);
        // warn against mixing mustaches with v-bind
        if ('development' !== 'production') {
          if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
            return attr.name === ':class' || attr.name === 'v-bind:class';
          })) {
            warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
          }
        }
      } else

        // special attribute: transition
        if (transitionRE.test(name)) {
          modifiers.literal = !bindRE.test(name);
          pushDir('transition', internalDirectives.transition);
        } else

          // event handlers
          if (onRE.test(name)) {
            arg = name.replace(onRE, '');
            pushDir('on', directives.on);
          } else

            // attribute bindings
            if (bindRE.test(name)) {
              dirName = name.replace(bindRE, '');
              if (dirName === 'style' || dirName === 'class') {
                pushDir(dirName, internalDirectives[dirName]);
              } else {
                arg = dirName;
                pushDir('bind', directives.bind);
              }
            } else

              // normal directives
              if (matched = name.match(dirAttrRE)) {
                dirName = matched[1];
                arg = matched[2];

                // skip v-else (when used with v-show)
                if (dirName === 'else') {
                  continue;
                }

                dirDef = resolveAsset(options, 'directives', dirName, true);
                if (dirDef) {
                  pushDir(dirName, dirDef);
                }
              }
    }

    /**
     * Push a directive.
     *
     * @param {String} dirName
     * @param {Object|Function} def
     * @param {Array} [interpTokens]
     */

    function pushDir(dirName, def, interpTokens) {
      var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
      var parsed = !hasOneTimeToken && parseDirective(value);
      dirs.push({
        name: dirName,
        attr: rawName,
        raw: rawValue,
        def: def,
        arg: arg,
        modifiers: modifiers,
        // conversion from interpolation strings with one-time token
        // to expression is differed until directive bind time so that we
        // have access to the actual vm context for one-time bindings.
        expression: parsed && parsed.expression,
        filters: parsed && parsed.filters,
        interp: interpTokens,
        hasOneTime: hasOneTimeToken
      });
    }

    if (dirs.length) {
      return makeNodeLinkFn(dirs);
    }
  }

  /**
   * Parse modifiers from directive attribute name.
   *
   * @param {String} name
   * @return {Object}
   */

  function parseModifiers(name) {
    var res = Object.create(null);
    var match = name.match(modifierRE);
    if (match) {
      var i = match.length;
      while (i--) {
        res[match[i].slice(1)] = true;
      }
    }
    return res;
  }

  /**
   * Build a link function for all directives on a single node.
   *
   * @param {Array} directives
   * @return {Function} directivesLinkFn
   */

  function makeNodeLinkFn(directives) {
    return function nodeLinkFn(vm, el, host, scope, frag) {
      // reverse apply because it's sorted low to high
      var i = directives.length;
      while (i--) {
        vm._bindDir(directives[i], el, host, scope, frag);
      }
    };
  }

  /**
   * Check if an interpolation string contains one-time tokens.
   *
   * @param {Array} tokens
   * @return {Boolean}
   */

  function hasOneTime(tokens) {
    var i = tokens.length;
    while (i--) {
      if (tokens[i].oneTime) return true;
    }
  }

  function isScript(el) {
    return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
  }

  var specialCharRE = /[^\w\-:\.]/;

  /**
   * Process an element or a DocumentFragment based on a
   * instance option object. This allows us to transclude
   * a template node/fragment before the instance is created,
   * so the processed fragment can then be cloned and reused
   * in v-for.
   *
   * @param {Element} el
   * @param {Object} options
   * @return {Element|DocumentFragment}
   */

  function transclude(el, options) {
    // extract container attributes to pass them down
    // to compiler, because they need to be compiled in
    // parent scope. we are mutating the options object here
    // assuming the same object will be used for compile
    // right after this.
    if (options) {
      options._containerAttrs = extractAttrs(el);
    }
    // for template tags, what we want is its content as
    // a documentFragment (for fragment instances)
    if (isTemplate(el)) {
      el = parseTemplate(el);
    }
    if (options) {
      if (options._asComponent && !options.template) {
        options.template = '<slot></slot>';
      }
      if (options.template) {
        options._content = extractContent(el);
        el = transcludeTemplate(el, options);
      }
    }
    if (isFragment(el)) {
      // anchors for fragment instance
      // passing in `persist: true` to avoid them being
      // discarded by IE during template cloning
      prepend(createAnchor('v-start', true), el);
      el.appendChild(createAnchor('v-end', true));
    }
    return el;
  }

  /**
   * Process the template option.
   * If the replace option is true this will swap the $el.
   *
   * @param {Element} el
   * @param {Object} options
   * @return {Element|DocumentFragment}
   */

  function transcludeTemplate(el, options) {
    var template = options.template;
    var frag = parseTemplate(template, true);
    if (frag) {
      var replacer = frag.firstChild;
      var tag = replacer.tagName && replacer.tagName.toLowerCase();
      if (options.replace) {
        /* istanbul ignore if */
        if (el === document.body) {
          'development' !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
        }
        // there are many cases where the instance must
        // become a fragment instance: basically anything that
        // can create more than 1 root nodes.
        if (
        // multi-children template
        frag.childNodes.length > 1 ||
        // non-element template
        replacer.nodeType !== 1 ||
        // single nested component
        tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
        // element directive
        resolveAsset(options, 'elementDirectives', tag) ||
        // for block
        replacer.hasAttribute('v-for') ||
        // if block
        replacer.hasAttribute('v-if')) {
          return frag;
        } else {
          options._replacerAttrs = extractAttrs(replacer);
          mergeAttrs(el, replacer);
          return replacer;
        }
      } else {
        el.appendChild(frag);
        return el;
      }
    } else {
      'development' !== 'production' && warn('Invalid template option: ' + template);
    }
  }

  /**
   * Helper to extract a component container's attributes
   * into a plain object array.
   *
   * @param {Element} el
   * @return {Array}
   */

  function extractAttrs(el) {
    if (el.nodeType === 1 && el.hasAttributes()) {
      return toArray(el.attributes);
    }
  }

  /**
   * Merge the attributes of two elements, and make sure
   * the class names are merged properly.
   *
   * @param {Element} from
   * @param {Element} to
   */

  function mergeAttrs(from, to) {
    var attrs = from.attributes;
    var i = attrs.length;
    var name, value;
    while (i--) {
      name = attrs[i].name;
      value = attrs[i].value;
      if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
        to.setAttribute(name, value);
      } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
        value.split(/\s+/).forEach(function (cls) {
          addClass(to, cls);
        });
      }
    }
  }

  /**
   * Scan and determine slot content distribution.
   * We do this during transclusion instead at compile time so that
   * the distribution is decoupled from the compilation order of
   * the slots.
   *
   * @param {Element|DocumentFragment} template
   * @param {Element} content
   * @param {Vue} vm
   */

  function resolveSlots(vm, content) {
    if (!content) {
      return;
    }
    var contents = vm._slotContents = Object.create(null);
    var el, name;
    for (var i = 0, l = content.children.length; i < l; i++) {
      el = content.children[i];
      /* eslint-disable no-cond-assign */
      if (name = el.getAttribute('slot')) {
        (contents[name] || (contents[name] = [])).push(el);
      }
      /* eslint-enable no-cond-assign */
      if ('development' !== 'production' && getBindAttr(el, 'slot')) {
        warn('The "slot" attribute must be static.', vm.$parent);
      }
    }
    for (name in contents) {
      contents[name] = extractFragment(contents[name], content);
    }
    if (content.hasChildNodes()) {
      var nodes = content.childNodes;
      if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
        return;
      }
      contents['default'] = extractFragment(content.childNodes, content);
    }
  }

  /**
   * Extract qualified content nodes from a node list.
   *
   * @param {NodeList} nodes
   * @return {DocumentFragment}
   */

  function extractFragment(nodes, parent) {
    var frag = document.createDocumentFragment();
    nodes = toArray(nodes);
    for (var i = 0, l = nodes.length; i < l; i++) {
      var node = nodes[i];
      if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
        parent.removeChild(node);
        node = parseTemplate(node, true);
      }
      frag.appendChild(node);
    }
    return frag;
  }



  var compiler = Object.freeze({
  	compile: compile,
  	compileAndLinkProps: compileAndLinkProps,
  	compileRoot: compileRoot,
  	transclude: transclude,
  	resolveSlots: resolveSlots
  });

  function stateMixin (Vue) {
    /**
     * Accessor for `$data` property, since setting $data
     * requires observing the new object and updating
     * proxied properties.
     */

    Object.defineProperty(Vue.prototype, '$data', {
      get: function get() {
        return this._data;
      },
      set: function set(newData) {
        if (newData !== this._data) {
          this._setData(newData);
        }
      }
    });

    /**
     * Setup the scope of an instance, which contains:
     * - observed data
     * - computed properties
     * - user methods
     * - meta properties
     */

    Vue.prototype._initState = function () {
      this._initProps();
      this._initMeta();
      this._initMethods();
      this._initData();
      this._initComputed();
    };

    /**
     * Initialize props.
     */

    Vue.prototype._initProps = function () {
      var options = this.$options;
      var el = options.el;
      var props = options.props;
      if (props && !el) {
        'development' !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
      }
      // make sure to convert string selectors into element now
      el = options.el = query(el);
      this._propsUnlinkFn = el && el.nodeType === 1 && props
      // props must be linked in proper scope if inside v-for
      ? compileAndLinkProps(this, el, props, this._scope) : null;
    };

    /**
     * Initialize the data.
     */

    Vue.prototype._initData = function () {
      var dataFn = this.$options.data;
      var data = this._data = dataFn ? dataFn() : {};
      if (!isPlainObject(data)) {
        data = {};
        'development' !== 'production' && warn('data functions should return an object.', this);
      }
      var props = this._props;
      // proxy data on instance
      var keys = Object.keys(data);
      var i, key;
      i = keys.length;
      while (i--) {
        key = keys[i];
        // there are two scenarios where we can proxy a data key:
        // 1. it's not already defined as a prop
        // 2. it's provided via a instantiation option AND there are no
        //    template prop present
        if (!props || !hasOwn(props, key)) {
          this._proxy(key);
        } else if ('development' !== 'production') {
          warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
        }
      }
      // observe data
      observe(data, this);
    };

    /**
     * Swap the instance's $data. Called in $data's setter.
     *
     * @param {Object} newData
     */

    Vue.prototype._setData = function (newData) {
      newData = newData || {};
      var oldData = this._data;
      this._data = newData;
      var keys, key, i;
      // unproxy keys not present in new data
      keys = Object.keys(oldData);
      i = keys.length;
      while (i--) {
        key = keys[i];
        if (!(key in newData)) {
          this._unproxy(key);
        }
      }
      // proxy keys not already proxied,
      // and trigger change for changed values
      keys = Object.keys(newData);
      i = keys.length;
      while (i--) {
        key = keys[i];
        if (!hasOwn(this, key)) {
          // new property
          this._proxy(key);
        }
      }
      oldData.__ob__.removeVm(this);
      observe(newData, this);
      this._digest();
    };

    /**
     * Proxy a property, so that
     * vm.prop === vm._data.prop
     *
     * @param {String} key
     */

    Vue.prototype._proxy = function (key) {
      if (!isReserved(key)) {
        // need to store ref to self here
        // because these getter/setters might
        // be called by child scopes via
        // prototype inheritance.
        var self = this;
        Object.defineProperty(self, key, {
          configurable: true,
          enumerable: true,
          get: function proxyGetter() {
            return self._data[key];
          },
          set: function proxySetter(val) {
            self._data[key] = val;
          }
        });
      }
    };

    /**
     * Unproxy a property.
     *
     * @param {String} key
     */

    Vue.prototype._unproxy = function (key) {
      if (!isReserved(key)) {
        delete this[key];
      }
    };

    /**
     * Force update on every watcher in scope.
     */

    Vue.prototype._digest = function () {
      for (var i = 0, l = this._watchers.length; i < l; i++) {
        this._watchers[i].update(true); // shallow updates
      }
    };

    /**
     * Setup computed properties. They are essentially
     * special getter/setters
     */

    function noop() {}
    Vue.prototype._initComputed = function () {
      var computed = this.$options.computed;
      if (computed) {
        for (var key in computed) {
          var userDef = computed[key];
          var def = {
            enumerable: true,
            configurable: true
          };
          if (typeof userDef === 'function') {
            def.get = makeComputedGetter(userDef, this);
            def.set = noop;
          } else {
            def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
            def.set = userDef.set ? bind(userDef.set, this) : noop;
          }
          Object.defineProperty(this, key, def);
        }
      }
    };

    function makeComputedGetter(getter, owner) {
      var watcher = new Watcher(owner, getter, null, {
        lazy: true
      });
      return function computedGetter() {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      };
    }

    /**
     * Setup instance methods. Methods must be bound to the
     * instance since they might be passed down as a prop to
     * child components.
     */

    Vue.prototype._initMethods = function () {
      var methods = this.$options.methods;
      if (methods) {
        for (var key in methods) {
          this[key] = bind(methods[key], this);
        }
      }
    };

    /**
     * Initialize meta information like $index, $key & $value.
     */

    Vue.prototype._initMeta = function () {
      var metas = this.$options._meta;
      if (metas) {
        for (var key in metas) {
          defineReactive(this, key, metas[key]);
        }
      }
    };
  }

  var eventRE = /^v-on:|^@/;

  function eventsMixin (Vue) {
    /**
     * Setup the instance's option events & watchers.
     * If the value is a string, we pull it from the
     * instance's methods by name.
     */

    Vue.prototype._initEvents = function () {
      var options = this.$options;
      if (options._asComponent) {
        registerComponentEvents(this, options.el);
      }
      registerCallbacks(this, '$on', options.events);
      registerCallbacks(this, '$watch', options.watch);
    };

    /**
     * Register v-on events on a child component
     *
     * @param {Vue} vm
     * @param {Element} el
     */

    function registerComponentEvents(vm, el) {
      var attrs = el.attributes;
      var name, value, handler;
      for (var i = 0, l = attrs.length; i < l; i++) {
        name = attrs[i].name;
        if (eventRE.test(name)) {
          name = name.replace(eventRE, '');
          // force the expression into a statement so that
          // it always dynamically resolves the method to call (#2670)
          // kinda ugly hack, but does the job.
          value = attrs[i].value;
          if (isSimplePath(value)) {
            value += '.apply(this, $arguments)';
          }
          handler = (vm._scope || vm._context).$eval(value, true);
          handler._fromParent = true;
          vm.$on(name.replace(eventRE), handler);
        }
      }
    }

    /**
     * Register callbacks for option events and watchers.
     *
     * @param {Vue} vm
     * @param {String} action
     * @param {Object} hash
     */

    function registerCallbacks(vm, action, hash) {
      if (!hash) return;
      var handlers, key, i, j;
      for (key in hash) {
        handlers = hash[key];
        if (isArray(handlers)) {
          for (i = 0, j = handlers.length; i < j; i++) {
            register(vm, action, key, handlers[i]);
          }
        } else {
          register(vm, action, key, handlers);
        }
      }
    }

    /**
     * Helper to register an event/watch callback.
     *
     * @param {Vue} vm
     * @param {String} action
     * @param {String} key
     * @param {Function|String|Object} handler
     * @param {Object} [options]
     */

    function register(vm, action, key, handler, options) {
      var type = typeof handler;
      if (type === 'function') {
        vm[action](key, handler, options);
      } else if (type === 'string') {
        var methods = vm.$options.methods;
        var method = methods && methods[handler];
        if (method) {
          vm[action](key, method, options);
        } else {
          'development' !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
        }
      } else if (handler && type === 'object') {
        register(vm, action, key, handler.handler, handler);
      }
    }

    /**
     * Setup recursive attached/detached calls
     */

    Vue.prototype._initDOMHooks = function () {
      this.$on('hook:attached', onAttached);
      this.$on('hook:detached', onDetached);
    };

    /**
     * Callback to recursively call attached hook on children
     */

    function onAttached() {
      if (!this._isAttached) {
        this._isAttached = true;
        this.$children.forEach(callAttach);
      }
    }

    /**
     * Iterator to call attached hook
     *
     * @param {Vue} child
     */

    function callAttach(child) {
      if (!child._isAttached && inDoc(child.$el)) {
        child._callHook('attached');
      }
    }

    /**
     * Callback to recursively call detached hook on children
     */

    function onDetached() {
      if (this._isAttached) {
        this._isAttached = false;
        this.$children.forEach(callDetach);
      }
    }

    /**
     * Iterator to call detached hook
     *
     * @param {Vue} child
     */

    function callDetach(child) {
      if (child._isAttached && !inDoc(child.$el)) {
        child._callHook('detached');
      }
    }

    /**
     * Trigger all handlers for a hook
     *
     * @param {String} hook
     */

    Vue.prototype._callHook = function (hook) {
      this.$emit('pre-hook:' + hook);
      var handlers = this.$options[hook];
      if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
          handlers[i].call(this);
        }
      }
      this.$emit('hook:' + hook);
    };
  }

  function noop$1() {}

  /**
   * A directive links a DOM element with a piece of data,
   * which is the result of evaluating an expression.
   * It registers a watcher with the expression and calls
   * the DOM update function when a change is triggered.
   *
   * @param {Object} descriptor
   *                 - {String} name
   *                 - {Object} def
   *                 - {String} expression
   *                 - {Array<Object>} [filters]
   *                 - {Object} [modifiers]
   *                 - {Boolean} literal
   *                 - {String} attr
   *                 - {String} arg
   *                 - {String} raw
   *                 - {String} [ref]
   *                 - {Array<Object>} [interp]
   *                 - {Boolean} [hasOneTime]
   * @param {Vue} vm
   * @param {Node} el
   * @param {Vue} [host] - transclusion host component
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - owner fragment
   * @constructor
   */
  function Directive(descriptor, vm, el, host, scope, frag) {
    this.vm = vm;
    this.el = el;
    // copy descriptor properties
    this.descriptor = descriptor;
    this.name = descriptor.name;
    this.expression = descriptor.expression;
    this.arg = descriptor.arg;
    this.modifiers = descriptor.modifiers;
    this.filters = descriptor.filters;
    this.literal = this.modifiers && this.modifiers.literal;
    // private
    this._locked = false;
    this._bound = false;
    this._listeners = null;
    // link context
    this._host = host;
    this._scope = scope;
    this._frag = frag;
    // store directives on node in dev mode
    if ('development' !== 'production' && this.el) {
      this.el._vue_directives = this.el._vue_directives || [];
      this.el._vue_directives.push(this);
    }
  }

  /**
   * Initialize the directive, mixin definition properties,
   * setup the watcher, call definition bind() and update()
   * if present.
   */

  Directive.prototype._bind = function () {
    var name = this.name;
    var descriptor = this.descriptor;

    // remove attribute
    if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
      var attr = descriptor.attr || 'v-' + name;
      this.el.removeAttribute(attr);
    }

    // copy def properties
    var def = descriptor.def;
    if (typeof def === 'function') {
      this.update = def;
    } else {
      extend(this, def);
    }

    // setup directive params
    this._setupParams();

    // initial bind
    if (this.bind) {
      this.bind();
    }
    this._bound = true;

    if (this.literal) {
      this.update && this.update(descriptor.raw);
    } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
      // wrapped updater for context
      var dir = this;
      if (this.update) {
        this._update = function (val, oldVal) {
          if (!dir._locked) {
            dir.update(val, oldVal);
          }
        };
      } else {
        this._update = noop$1;
      }
      var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
      var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
      var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
      {
        filters: this.filters,
        twoWay: this.twoWay,
        deep: this.deep,
        preProcess: preProcess,
        postProcess: postProcess,
        scope: this._scope
      });
      // v-model with inital inline value need to sync back to
      // model instead of update to DOM on init. They would
      // set the afterBind hook to indicate that.
      if (this.afterBind) {
        this.afterBind();
      } else if (this.update) {
        this.update(watcher.value);
      }
    }
  };

  /**
   * Setup all param attributes, e.g. track-by,
   * transition-mode, etc...
   */

  Directive.prototype._setupParams = function () {
    if (!this.params) {
      return;
    }
    var params = this.params;
    // swap the params array with a fresh object.
    this.params = Object.create(null);
    var i = params.length;
    var key, val, mappedKey;
    while (i--) {
      key = hyphenate(params[i]);
      mappedKey = camelize(key);
      val = getBindAttr(this.el, key);
      if (val != null) {
        // dynamic
        this._setupParamWatcher(mappedKey, val);
      } else {
        // static
        val = getAttr(this.el, key);
        if (val != null) {
          this.params[mappedKey] = val === '' ? true : val;
        }
      }
    }
  };

  /**
   * Setup a watcher for a dynamic param.
   *
   * @param {String} key
   * @param {String} expression
   */

  Directive.prototype._setupParamWatcher = function (key, expression) {
    var self = this;
    var called = false;
    var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
      self.params[key] = val;
      // since we are in immediate mode,
      // only call the param change callbacks if this is not the first update.
      if (called) {
        var cb = self.paramWatchers && self.paramWatchers[key];
        if (cb) {
          cb.call(self, val, oldVal);
        }
      } else {
        called = true;
      }
    }, {
      immediate: true,
      user: false
    });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
  };

  /**
   * Check if the directive is a function caller
   * and if the expression is a callable one. If both true,
   * we wrap up the expression and use it as the event
   * handler.
   *
   * e.g. on-click="a++"
   *
   * @return {Boolean}
   */

  Directive.prototype._checkStatement = function () {
    var expression = this.expression;
    if (expression && this.acceptStatement && !isSimplePath(expression)) {
      var fn = parseExpression(expression).get;
      var scope = this._scope || this.vm;
      var handler = function handler(e) {
        scope.$event = e;
        fn.call(scope, scope);
        scope.$event = null;
      };
      if (this.filters) {
        handler = scope._applyFilters(handler, null, this.filters);
      }
      this.update(handler);
      return true;
    }
  };

  /**
   * Set the corresponding value with the setter.
   * This should only be used in two-way directives
   * e.g. v-model.
   *
   * @param {*} value
   * @public
   */

  Directive.prototype.set = function (value) {
    /* istanbul ignore else */
    if (this.twoWay) {
      this._withLock(function () {
        this._watcher.set(value);
      });
    } else if ('development' !== 'production') {
      warn('Directive.set() can only be used inside twoWay' + 'directives.');
    }
  };

  /**
   * Execute a function while preventing that function from
   * triggering updates on this directive instance.
   *
   * @param {Function} fn
   */

  Directive.prototype._withLock = function (fn) {
    var self = this;
    self._locked = true;
    fn.call(self);
    nextTick(function () {
      self._locked = false;
    });
  };

  /**
   * Convenience method that attaches a DOM event listener
   * to the directive element and autometically tears it down
   * during unbind.
   *
   * @param {String} event
   * @param {Function} handler
   * @param {Boolean} [useCapture]
   */

  Directive.prototype.on = function (event, handler, useCapture) {
    on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
  };

  /**
   * Teardown the watcher and call unbind.
   */

  Directive.prototype._teardown = function () {
    if (this._bound) {
      this._bound = false;
      if (this.unbind) {
        this.unbind();
      }
      if (this._watcher) {
        this._watcher.teardown();
      }
      var listeners = this._listeners;
      var i;
      if (listeners) {
        i = listeners.length;
        while (i--) {
          off(this.el, listeners[i][0], listeners[i][1]);
        }
      }
      var unwatchFns = this._paramUnwatchFns;
      if (unwatchFns) {
        i = unwatchFns.length;
        while (i--) {
          unwatchFns[i]();
        }
      }
      if ('development' !== 'production' && this.el) {
        this.el._vue_directives.$remove(this);
      }
      this.vm = this.el = this._watcher = this._listeners = null;
    }
  };

  function lifecycleMixin (Vue) {
    /**
     * Update v-ref for component.
     *
     * @param {Boolean} remove
     */

    Vue.prototype._updateRef = function (remove) {
      var ref = this.$options._ref;
      if (ref) {
        var refs = (this._scope || this._context).$refs;
        if (remove) {
          if (refs[ref] === this) {
            refs[ref] = null;
          }
        } else {
          refs[ref] = this;
        }
      }
    };

    /**
     * Transclude, compile and link element.
     *
     * If a pre-compiled linker is available, that means the
     * passed in element will be pre-transcluded and compiled
     * as well - all we need to do is to call the linker.
     *
     * Otherwise we need to call transclude/compile/link here.
     *
     * @param {Element} el
     */

    Vue.prototype._compile = function (el) {
      var options = this.$options;

      // transclude and init element
      // transclude can potentially replace original
      // so we need to keep reference; this step also injects
      // the template and caches the original attributes
      // on the container node and replacer node.
      var original = el;
      el = transclude(el, options);
      this._initElement(el);

      // handle v-pre on root node (#2026)
      if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
        return;
      }

      // root is always compiled per-instance, because
      // container attrs and props can be different every time.
      var contextOptions = this._context && this._context.$options;
      var rootLinker = compileRoot(el, options, contextOptions);

      // resolve slot distribution
      resolveSlots(this, options._content);

      // compile and link the rest
      var contentLinkFn;
      var ctor = this.constructor;
      // component compilation can be cached
      // as long as it's not using inline-template
      if (options._linkerCachable) {
        contentLinkFn = ctor.linker;
        if (!contentLinkFn) {
          contentLinkFn = ctor.linker = compile(el, options);
        }
      }

      // link phase
      // make sure to link root with prop scope!
      var rootUnlinkFn = rootLinker(this, el, this._scope);
      var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

      // register composite unlink function
      // to be called during instance destruction
      this._unlinkFn = function () {
        rootUnlinkFn();
        // passing destroying: true to avoid searching and
        // splicing the directives
        contentUnlinkFn(true);
      };

      // finally replace original
      if (options.replace) {
        replace(original, el);
      }

      this._isCompiled = true;
      this._callHook('compiled');
    };

    /**
     * Initialize instance element. Called in the public
     * $mount() method.
     *
     * @param {Element} el
     */

    Vue.prototype._initElement = function (el) {
      if (isFragment(el)) {
        this._isFragment = true;
        this.$el = this._fragmentStart = el.firstChild;
        this._fragmentEnd = el.lastChild;
        // set persisted text anchors to empty
        if (this._fragmentStart.nodeType === 3) {
          this._fragmentStart.data = this._fragmentEnd.data = '';
        }
        this._fragment = el;
      } else {
        this.$el = el;
      }
      this.$el.__vue__ = this;
      this._callHook('beforeCompile');
    };

    /**
     * Create and bind a directive to an element.
     *
     * @param {Object} descriptor - parsed directive descriptor
     * @param {Node} node   - target node
     * @param {Vue} [host] - transclusion host component
     * @param {Object} [scope] - v-for scope
     * @param {Fragment} [frag] - owner fragment
     */

    Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
      this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
    };

    /**
     * Teardown an instance, unobserves the data, unbind all the
     * directives, turn off all the event listeners, etc.
     *
     * @param {Boolean} remove - whether to remove the DOM node.
     * @param {Boolean} deferCleanup - if true, defer cleanup to
     *                                 be called later
     */

    Vue.prototype._destroy = function (remove, deferCleanup) {
      if (this._isBeingDestroyed) {
        if (!deferCleanup) {
          this._cleanup();
        }
        return;
      }

      var destroyReady;
      var pendingRemoval;

      var self = this;
      // Cleanup should be called either synchronously or asynchronoysly as
      // callback of this.$remove(), or if remove and deferCleanup are false.
      // In any case it should be called after all other removing, unbinding and
      // turning of is done
      var cleanupIfPossible = function cleanupIfPossible() {
        if (destroyReady && !pendingRemoval && !deferCleanup) {
          self._cleanup();
        }
      };

      // remove DOM element
      if (remove && this.$el) {
        pendingRemoval = true;
        this.$remove(function () {
          pendingRemoval = false;
          cleanupIfPossible();
        });
      }

      this._callHook('beforeDestroy');
      this._isBeingDestroyed = true;
      var i;
      // remove self from parent. only necessary
      // if parent is not being destroyed as well.
      var parent = this.$parent;
      if (parent && !parent._isBeingDestroyed) {
        parent.$children.$remove(this);
        // unregister ref (remove: true)
        this._updateRef(true);
      }
      // destroy all children.
      i = this.$children.length;
      while (i--) {
        this.$children[i].$destroy();
      }
      // teardown props
      if (this._propsUnlinkFn) {
        this._propsUnlinkFn();
      }
      // teardown all directives. this also tearsdown all
      // directive-owned watchers.
      if (this._unlinkFn) {
        this._unlinkFn();
      }
      i = this._watchers.length;
      while (i--) {
        this._watchers[i].teardown();
      }
      // remove reference to self on $el
      if (this.$el) {
        this.$el.__vue__ = null;
      }

      destroyReady = true;
      cleanupIfPossible();
    };

    /**
     * Clean up to ensure garbage collection.
     * This is called after the leave transition if there
     * is any.
     */

    Vue.prototype._cleanup = function () {
      if (this._isDestroyed) {
        return;
      }
      // remove self from owner fragment
      // do it in cleanup so that we can call $destroy with
      // defer right when a fragment is about to be removed.
      if (this._frag) {
        this._frag.children.$remove(this);
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (this._data && this._data.__ob__) {
        this._data.__ob__.removeVm(this);
      }
      // Clean up references to private properties and other
      // instances. preserve reference to _data so that proxy
      // accessors still work. The only potential side effect
      // here is that mutating the instance after it's destroyed
      // may affect the state of other components that are still
      // observing the same object, but that seems to be a
      // reasonable responsibility for the user rather than
      // always throwing an error on them.
      this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
      // call the last hook...
      this._isDestroyed = true;
      this._callHook('destroyed');
      // turn off all instance listeners.
      this.$off();
    };
  }

  function miscMixin (Vue) {
    /**
     * Apply a list of filter (descriptors) to a value.
     * Using plain for loops here because this will be called in
     * the getter of any watcher with filters so it is very
     * performance sensitive.
     *
     * @param {*} value
     * @param {*} [oldValue]
     * @param {Array} filters
     * @param {Boolean} write
     * @return {*}
     */

    Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
      var filter, fn, args, arg, offset, i, l, j, k;
      for (i = 0, l = filters.length; i < l; i++) {
        filter = filters[write ? l - i - 1 : i];
        fn = resolveAsset(this.$options, 'filters', filter.name, true);
        if (!fn) continue;
        fn = write ? fn.write : fn.read || fn;
        if (typeof fn !== 'function') continue;
        args = write ? [value, oldValue] : [value];
        offset = write ? 2 : 1;
        if (filter.args) {
          for (j = 0, k = filter.args.length; j < k; j++) {
            arg = filter.args[j];
            args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
          }
        }
        value = fn.apply(this, args);
      }
      return value;
    };

    /**
     * Resolve a component, depending on whether the component
     * is defined normally or using an async factory function.
     * Resolves synchronously if already resolved, otherwise
     * resolves asynchronously and caches the resolved
     * constructor on the factory.
     *
     * @param {String|Function} value
     * @param {Function} cb
     */

    Vue.prototype._resolveComponent = function (value, cb) {
      var factory;
      if (typeof value === 'function') {
        factory = value;
      } else {
        factory = resolveAsset(this.$options, 'components', value, true);
      }
      /* istanbul ignore if */
      if (!factory) {
        return;
      }
      // async component factory
      if (!factory.options) {
        if (factory.resolved) {
          // cached
          cb(factory.resolved);
        } else if (factory.requested) {
          // pool callbacks
          factory.pendingCallbacks.push(cb);
        } else {
          factory.requested = true;
          var cbs = factory.pendingCallbacks = [cb];
          factory.call(this, function resolve(res) {
            if (isPlainObject(res)) {
              res = Vue.extend(res);
            }
            // cache resolved
            factory.resolved = res;
            // invoke callbacks
            for (var i = 0, l = cbs.length; i < l; i++) {
              cbs[i](res);
            }
          }, function reject(reason) {
            'development' !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
          });
        }
      } else {
        // normal component
        cb(factory);
      }
    };
  }

  var filterRE$1 = /[^|]\|[^|]/;

  function dataAPI (Vue) {
    /**
     * Get the value from an expression on this vm.
     *
     * @param {String} exp
     * @param {Boolean} [asStatement]
     * @return {*}
     */

    Vue.prototype.$get = function (exp, asStatement) {
      var res = parseExpression(exp);
      if (res) {
        if (asStatement) {
          var self = this;
          return function statementHandler() {
            self.$arguments = toArray(arguments);
            var result = res.get.call(self, self);
            self.$arguments = null;
            return result;
          };
        } else {
          try {
            return res.get.call(this, this);
          } catch (e) {}
        }
      }
    };

    /**
     * Set the value from an expression on this vm.
     * The expression must be a valid left-hand
     * expression in an assignment.
     *
     * @param {String} exp
     * @param {*} val
     */

    Vue.prototype.$set = function (exp, val) {
      var res = parseExpression(exp, true);
      if (res && res.set) {
        res.set.call(this, this, val);
      }
    };

    /**
     * Delete a property on the VM
     *
     * @param {String} key
     */

    Vue.prototype.$delete = function (key) {
      del(this._data, key);
    };

    /**
     * Watch an expression, trigger callback when its
     * value changes.
     *
     * @param {String|Function} expOrFn
     * @param {Function} cb
     * @param {Object} [options]
     *                 - {Boolean} deep
     *                 - {Boolean} immediate
     * @return {Function} - unwatchFn
     */

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;
      var parsed;
      if (typeof expOrFn === 'string') {
        parsed = parseDirective(expOrFn);
        expOrFn = parsed.expression;
      }
      var watcher = new Watcher(vm, expOrFn, cb, {
        deep: options && options.deep,
        sync: options && options.sync,
        filters: parsed && parsed.filters,
        user: !options || options.user !== false
      });
      if (options && options.immediate) {
        cb.call(vm, watcher.value);
      }
      return function unwatchFn() {
        watcher.teardown();
      };
    };

    /**
     * Evaluate a text directive, including filters.
     *
     * @param {String} text
     * @param {Boolean} [asStatement]
     * @return {String}
     */

    Vue.prototype.$eval = function (text, asStatement) {
      // check for filters.
      if (filterRE$1.test(text)) {
        var dir = parseDirective(text);
        // the filter regex check might give false positive
        // for pipes inside strings, so it's possible that
        // we don't get any filters here
        var val = this.$get(dir.expression, asStatement);
        return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
      } else {
        // no filter
        return this.$get(text, asStatement);
      }
    };

    /**
     * Interpolate a piece of template text.
     *
     * @param {String} text
     * @return {String}
     */

    Vue.prototype.$interpolate = function (text) {
      var tokens = parseText(text);
      var vm = this;
      if (tokens) {
        if (tokens.length === 1) {
          return vm.$eval(tokens[0].value) + '';
        } else {
          return tokens.map(function (token) {
            return token.tag ? vm.$eval(token.value) : token.value;
          }).join('');
        }
      } else {
        return text;
      }
    };

    /**
     * Log instance data as a plain JS object
     * so that it is easier to inspect in console.
     * This method assumes console is available.
     *
     * @param {String} [path]
     */

    Vue.prototype.$log = function (path) {
      var data = path ? getPath(this._data, path) : this._data;
      if (data) {
        data = clean(data);
      }
      // include computed fields
      if (!path) {
        var key;
        for (key in this.$options.computed) {
          data[key] = clean(this[key]);
        }
        if (this._props) {
          for (key in this._props) {
            data[key] = clean(this[key]);
          }
        }
      }
      console.log(data);
    };

    /**
     * "clean" a getter/setter converted object into a plain
     * object copy.
     *
     * @param {Object} - obj
     * @return {Object}
     */

    function clean(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  }

  function domAPI (Vue) {
    /**
     * Convenience on-instance nextTick. The callback is
     * auto-bound to the instance, and this avoids component
     * modules having to rely on the global Vue.
     *
     * @param {Function} fn
     */

    Vue.prototype.$nextTick = function (fn) {
      nextTick(fn, this);
    };

    /**
     * Append instance to target
     *
     * @param {Node} target
     * @param {Function} [cb]
     * @param {Boolean} [withTransition] - defaults to true
     */

    Vue.prototype.$appendTo = function (target, cb, withTransition) {
      return insert(this, target, cb, withTransition, append, appendWithTransition);
    };

    /**
     * Prepend instance to target
     *
     * @param {Node} target
     * @param {Function} [cb]
     * @param {Boolean} [withTransition] - defaults to true
     */

    Vue.prototype.$prependTo = function (target, cb, withTransition) {
      target = query(target);
      if (target.hasChildNodes()) {
        this.$before(target.firstChild, cb, withTransition);
      } else {
        this.$appendTo(target, cb, withTransition);
      }
      return this;
    };

    /**
     * Insert instance before target
     *
     * @param {Node} target
     * @param {Function} [cb]
     * @param {Boolean} [withTransition] - defaults to true
     */

    Vue.prototype.$before = function (target, cb, withTransition) {
      return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
    };

    /**
     * Insert instance after target
     *
     * @param {Node} target
     * @param {Function} [cb]
     * @param {Boolean} [withTransition] - defaults to true
     */

    Vue.prototype.$after = function (target, cb, withTransition) {
      target = query(target);
      if (target.nextSibling) {
        this.$before(target.nextSibling, cb, withTransition);
      } else {
        this.$appendTo(target.parentNode, cb, withTransition);
      }
      return this;
    };

    /**
     * Remove instance from DOM
     *
     * @param {Function} [cb]
     * @param {Boolean} [withTransition] - defaults to true
     */

    Vue.prototype.$remove = function (cb, withTransition) {
      if (!this.$el.parentNode) {
        return cb && cb();
      }
      var inDocument = this._isAttached && inDoc(this.$el);
      // if we are not in document, no need to check
      // for transitions
      if (!inDocument) withTransition = false;
      var self = this;
      var realCb = function realCb() {
        if (inDocument) self._callHook('detached');
        if (cb) cb();
      };
      if (this._isFragment) {
        removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
      } else {
        var op = withTransition === false ? removeWithCb : removeWithTransition;
        op(this.$el, this, realCb);
      }
      return this;
    };

    /**
     * Shared DOM insertion function.
     *
     * @param {Vue} vm
     * @param {Element} target
     * @param {Function} [cb]
     * @param {Boolean} [withTransition]
     * @param {Function} op1 - op for non-transition insert
     * @param {Function} op2 - op for transition insert
     * @return vm
     */

    function insert(vm, target, cb, withTransition, op1, op2) {
      target = query(target);
      var targetIsDetached = !inDoc(target);
      var op = withTransition === false || targetIsDetached ? op1 : op2;
      var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
      if (vm._isFragment) {
        mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
          op(node, target, vm);
        });
        cb && cb();
      } else {
        op(vm.$el, target, vm, cb);
      }
      if (shouldCallHook) {
        vm._callHook('attached');
      }
      return vm;
    }

    /**
     * Check for selectors
     *
     * @param {String|Element} el
     */

    function query(el) {
      return typeof el === 'string' ? document.querySelector(el) : el;
    }

    /**
     * Append operation that takes a callback.
     *
     * @param {Node} el
     * @param {Node} target
     * @param {Vue} vm - unused
     * @param {Function} [cb]
     */

    function append(el, target, vm, cb) {
      target.appendChild(el);
      if (cb) cb();
    }

    /**
     * InsertBefore operation that takes a callback.
     *
     * @param {Node} el
     * @param {Node} target
     * @param {Vue} vm - unused
     * @param {Function} [cb]
     */

    function beforeWithCb(el, target, vm, cb) {
      before(el, target);
      if (cb) cb();
    }

    /**
     * Remove operation that takes a callback.
     *
     * @param {Node} el
     * @param {Vue} vm - unused
     * @param {Function} [cb]
     */

    function removeWithCb(el, vm, cb) {
      remove(el);
      if (cb) cb();
    }
  }

  function eventsAPI (Vue) {
    /**
     * Listen on the given `event` with `fn`.
     *
     * @param {String} event
     * @param {Function} fn
     */

    Vue.prototype.$on = function (event, fn) {
      (this._events[event] || (this._events[event] = [])).push(fn);
      modifyListenerCount(this, event, 1);
      return this;
    };

    /**
     * Adds an `event` listener that will be invoked a single
     * time then automatically removed.
     *
     * @param {String} event
     * @param {Function} fn
     */

    Vue.prototype.$once = function (event, fn) {
      var self = this;
      function on() {
        self.$off(event, on);
        fn.apply(this, arguments);
      }
      on.fn = fn;
      this.$on(event, on);
      return this;
    };

    /**
     * Remove the given callback for `event` or all
     * registered callbacks.
     *
     * @param {String} event
     * @param {Function} fn
     */

    Vue.prototype.$off = function (event, fn) {
      var cbs;
      // all
      if (!arguments.length) {
        if (this.$parent) {
          for (event in this._events) {
            cbs = this._events[event];
            if (cbs) {
              modifyListenerCount(this, event, -cbs.length);
            }
          }
        }
        this._events = {};
        return this;
      }
      // specific event
      cbs = this._events[event];
      if (!cbs) {
        return this;
      }
      if (arguments.length === 1) {
        modifyListenerCount(this, event, -cbs.length);
        this._events[event] = null;
        return this;
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          modifyListenerCount(this, event, -1);
          cbs.splice(i, 1);
          break;
        }
      }
      return this;
    };

    /**
     * Trigger an event on self.
     *
     * @param {String|Object} event
     * @return {Boolean} shouldPropagate
     */

    Vue.prototype.$emit = function (event) {
      var isSource = typeof event === 'string';
      event = isSource ? event : event.name;
      var cbs = this._events[event];
      var shouldPropagate = isSource || !cbs;
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        // this is a somewhat hacky solution to the question raised
        // in #2102: for an inline component listener like <comp @test="doThis">,
        // the propagation handling is somewhat broken. Therefore we
        // need to treat these inline callbacks differently.
        var hasParentCbs = isSource && cbs.some(function (cb) {
          return cb._fromParent;
        });
        if (hasParentCbs) {
          shouldPropagate = false;
        }
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
          var cb = cbs[i];
          var res = cb.apply(this, args);
          if (res === true && (!hasParentCbs || cb._fromParent)) {
            shouldPropagate = true;
          }
        }
      }
      return shouldPropagate;
    };

    /**
     * Recursively broadcast an event to all children instances.
     *
     * @param {String|Object} event
     * @param {...*} additional arguments
     */

    Vue.prototype.$broadcast = function (event) {
      var isSource = typeof event === 'string';
      event = isSource ? event : event.name;
      // if no child has registered for this event,
      // then there's no need to broadcast.
      if (!this._eventsCount[event]) return;
      var children = this.$children;
      var args = toArray(arguments);
      if (isSource) {
        // use object event to indicate non-source emit
        // on children
        args[0] = { name: event, source: this };
      }
      for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        var shouldPropagate = child.$emit.apply(child, args);
        if (shouldPropagate) {
          child.$broadcast.apply(child, args);
        }
      }
      return this;
    };

    /**
     * Recursively propagate an event up the parent chain.
     *
     * @param {String} event
     * @param {...*} additional arguments
     */

    Vue.prototype.$dispatch = function (event) {
      var shouldPropagate = this.$emit.apply(this, arguments);
      if (!shouldPropagate) return;
      var parent = this.$parent;
      var args = toArray(arguments);
      // use object event to indicate non-source emit
      // on parents
      args[0] = { name: event, source: this };
      while (parent) {
        shouldPropagate = parent.$emit.apply(parent, args);
        parent = shouldPropagate ? parent.$parent : null;
      }
      return this;
    };

    /**
     * Modify the listener counts on all parents.
     * This bookkeeping allows $broadcast to return early when
     * no child has listened to a certain event.
     *
     * @param {Vue} vm
     * @param {String} event
     * @param {Number} count
     */

    var hookRE = /^hook:/;
    function modifyListenerCount(vm, event, count) {
      var parent = vm.$parent;
      // hooks do not get broadcasted so no need
      // to do bookkeeping for them
      if (!parent || !count || hookRE.test(event)) return;
      while (parent) {
        parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
        parent = parent.$parent;
      }
    }
  }

  function lifecycleAPI (Vue) {
    /**
     * Set instance target element and kick off the compilation
     * process. The passed in `el` can be a selector string, an
     * existing Element, or a DocumentFragment (for block
     * instances).
     *
     * @param {Element|DocumentFragment|string} el
     * @public
     */

    Vue.prototype.$mount = function (el) {
      if (this._isCompiled) {
        'development' !== 'production' && warn('$mount() should be called only once.', this);
        return;
      }
      el = query(el);
      if (!el) {
        el = document.createElement('div');
      }
      this._compile(el);
      this._initDOMHooks();
      if (inDoc(this.$el)) {
        this._callHook('attached');
        ready.call(this);
      } else {
        this.$once('hook:attached', ready);
      }
      return this;
    };

    /**
     * Mark an instance as ready.
     */

    function ready() {
      this._isAttached = true;
      this._isReady = true;
      this._callHook('ready');
    }

    /**
     * Teardown the instance, simply delegate to the internal
     * _destroy.
     *
     * @param {Boolean} remove
     * @param {Boolean} deferCleanup
     */

    Vue.prototype.$destroy = function (remove, deferCleanup) {
      this._destroy(remove, deferCleanup);
    };

    /**
     * Partially compile a piece of DOM and return a
     * decompile function.
     *
     * @param {Element|DocumentFragment} el
     * @param {Vue} [host]
     * @param {Object} [scope]
     * @param {Fragment} [frag]
     * @return {Function}
     */

    Vue.prototype.$compile = function (el, host, scope, frag) {
      return compile(el, this.$options, true)(this, el, host, scope, frag);
    };
  }

  /**
   * The exposed Vue constructor.
   *
   * API conventions:
   * - public API methods/properties are prefixed with `$`
   * - internal methods/properties are prefixed with `_`
   * - non-prefixed properties are assumed to be proxied user
   *   data.
   *
   * @constructor
   * @param {Object} [options]
   * @public
   */

  function Vue(options) {
    this._init(options);
  }

  // install internals
  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  miscMixin(Vue);

  // install instance APIs
  dataAPI(Vue);
  domAPI(Vue);
  eventsAPI(Vue);
  lifecycleAPI(Vue);

  var slot = {

    priority: SLOT,
    params: ['name'],

    bind: function bind() {
      // this was resolved during component transclusion
      var name = this.params.name || 'default';
      var content = this.vm._slotContents && this.vm._slotContents[name];
      if (!content || !content.hasChildNodes()) {
        this.fallback();
      } else {
        this.compile(content.cloneNode(true), this.vm._context, this.vm);
      }
    },

    compile: function compile(content, context, host) {
      if (content && context) {
        if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
          // if the inserted slot has v-if
          // inject fallback content as the v-else
          var elseBlock = document.createElement('template');
          elseBlock.setAttribute('v-else', '');
          elseBlock.innerHTML = this.el.innerHTML;
          // the else block should be compiled in child scope
          elseBlock._context = this.vm;
          content.appendChild(elseBlock);
        }
        var scope = host ? host._scope : this._scope;
        this.unlink = context.$compile(content, host, scope, this._frag);
      }
      if (content) {
        replace(this.el, content);
      } else {
        remove(this.el);
      }
    },

    fallback: function fallback() {
      this.compile(extractContent(this.el, true), this.vm);
    },

    unbind: function unbind() {
      if (this.unlink) {
        this.unlink();
      }
    }
  };

  var partial = {

    priority: PARTIAL,

    params: ['name'],

    // watch changes to name for dynamic partials
    paramWatchers: {
      name: function name(value) {
        vIf.remove.call(this);
        if (value) {
          this.insert(value);
        }
      }
    },

    bind: function bind() {
      this.anchor = createAnchor('v-partial');
      replace(this.el, this.anchor);
      this.insert(this.params.name);
    },

    insert: function insert(id) {
      var partial = resolveAsset(this.vm.$options, 'partials', id, true);
      if (partial) {
        this.factory = new FragmentFactory(this.vm, partial);
        vIf.insert.call(this);
      }
    },

    unbind: function unbind() {
      if (this.frag) {
        this.frag.destroy();
      }
    }
  };

  var elementDirectives = {
    slot: slot,
    partial: partial
  };

  var convertArray = vFor._postProcess;

  /**
   * Limit filter for arrays
   *
   * @param {Number} n
   * @param {Number} offset (Decimal expected)
   */

  function limitBy(arr, n, offset) {
    offset = offset ? parseInt(offset, 10) : 0;
    n = toNumber(n);
    return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
  }

  /**
   * Filter filter for arrays
   *
   * @param {String} search
   * @param {String} [delimiter]
   * @param {String} ...dataKeys
   */

  function filterBy(arr, search, delimiter) {
    arr = convertArray(arr);
    if (search == null) {
      return arr;
    }
    if (typeof search === 'function') {
      return arr.filter(search);
    }
    // cast to lowercase string
    search = ('' + search).toLowerCase();
    // allow optional `in` delimiter
    // because why not
    var n = delimiter === 'in' ? 3 : 2;
    // extract and flatten keys
    var keys = Array.prototype.concat.apply([], toArray(arguments, n));
    var res = [];
    var item, key, val, j;
    for (var i = 0, l = arr.length; i < l; i++) {
      item = arr[i];
      val = item && item.$value || item;
      j = keys.length;
      if (j) {
        while (j--) {
          key = keys[j];
          if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
            res.push(item);
            break;
          }
        }
      } else if (contains(item, search)) {
        res.push(item);
      }
    }
    return res;
  }

  /**
   * Filter filter for arrays
   *
   * @param {String|Array<String>|Function} ...sortKeys
   * @param {Number} [order]
   */

  function orderBy(arr) {
    var comparator = null;
    var sortKeys = undefined;
    arr = convertArray(arr);

    // determine order (last argument)
    var args = toArray(arguments, 1);
    var order = args[args.length - 1];
    if (typeof order === 'number') {
      order = order < 0 ? -1 : 1;
      args = args.length > 1 ? args.slice(0, -1) : args;
    } else {
      order = 1;
    }

    // determine sortKeys & comparator
    var firstArg = args[0];
    if (!firstArg) {
      return arr;
    } else if (typeof firstArg === 'function') {
      // custom comparator
      comparator = function (a, b) {
        return firstArg(a, b) * order;
      };
    } else {
      // string keys. flatten first
      sortKeys = Array.prototype.concat.apply([], args);
      comparator = function (a, b, i) {
        i = i || 0;
        return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
      };
    }

    function baseCompare(a, b, sortKeyIndex) {
      var sortKey = sortKeys[sortKeyIndex];
      if (sortKey) {
        if (sortKey !== '$key') {
          if (isObject(a) && '$value' in a) a = a.$value;
          if (isObject(b) && '$value' in b) b = b.$value;
        }
        a = isObject(a) ? getPath(a, sortKey) : a;
        b = isObject(b) ? getPath(b, sortKey) : b;
      }
      return a === b ? 0 : a > b ? order : -order;
    }

    // sort on a copy to avoid mutating original array
    return arr.slice().sort(comparator);
  }

  /**
   * String contain helper
   *
   * @param {*} val
   * @param {String} search
   */

  function contains(val, search) {
    var i;
    if (isPlainObject(val)) {
      var keys = Object.keys(val);
      i = keys.length;
      while (i--) {
        if (contains(val[keys[i]], search)) {
          return true;
        }
      }
    } else if (isArray(val)) {
      i = val.length;
      while (i--) {
        if (contains(val[i], search)) {
          return true;
        }
      }
    } else if (val != null) {
      return val.toString().toLowerCase().indexOf(search) > -1;
    }
  }

  var digitsRE = /(\d{3})(?=\d)/g;

  // asset collections must be a plain object.
  var filters = {

    orderBy: orderBy,
    filterBy: filterBy,
    limitBy: limitBy,

    /**
     * Stringify value.
     *
     * @param {Number} indent
     */

    json: {
      read: function read(value, indent) {
        return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
      },
      write: function write(value) {
        try {
          return JSON.parse(value);
        } catch (e) {
          return value;
        }
      }
    },

    /**
     * 'abc' => 'Abc'
     */

    capitalize: function capitalize(value) {
      if (!value && value !== 0) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },

    /**
     * 'abc' => 'ABC'
     */

    uppercase: function uppercase(value) {
      return value || value === 0 ? value.toString().toUpperCase() : '';
    },

    /**
     * 'AbC' => 'abc'
     */

    lowercase: function lowercase(value) {
      return value || value === 0 ? value.toString().toLowerCase() : '';
    },

    /**
     * 12345 => $12,345.00
     *
     * @param {String} sign
     * @param {Number} decimals Decimal places
     */

    currency: function currency(value, _currency, decimals) {
      value = parseFloat(value);
      if (!isFinite(value) || !value && value !== 0) return '';
      _currency = _currency != null ? _currency : '$';
      decimals = decimals != null ? decimals : 2;
      var stringified = Math.abs(value).toFixed(decimals);
      var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
      var i = _int.length % 3;
      var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
      var _float = decimals ? stringified.slice(-1 - decimals) : '';
      var sign = value < 0 ? '-' : '';
      return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
    },

    /**
     * 'item' => 'items'
     *
     * @params
     *  an array of strings corresponding to
     *  the single, double, triple ... forms of the word to
     *  be pluralized. When the number to be pluralized
     *  exceeds the length of the args, it will use the last
     *  entry in the array.
     *
     *  e.g. ['single', 'double', 'triple', 'multiple']
     */

    pluralize: function pluralize(value) {
      var args = toArray(arguments, 1);
      var length = args.length;
      if (length > 1) {
        var index = value % 10 - 1;
        return index in args ? args[index] : args[length - 1];
      } else {
        return args[0] + (value === 1 ? '' : 's');
      }
    },

    /**
     * Debounce a handler function.
     *
     * @param {Function} handler
     * @param {Number} delay = 300
     * @return {Function}
     */

    debounce: function debounce(handler, delay) {
      if (!handler) return;
      if (!delay) {
        delay = 300;
      }
      return _debounce(handler, delay);
    }
  };

  function installGlobalAPI (Vue) {
    /**
     * Vue and every constructor that extends Vue has an
     * associated options object, which can be accessed during
     * compilation steps as `this.constructor.options`.
     *
     * These can be seen as the default options of every
     * Vue instance.
     */

    Vue.options = {
      directives: directives,
      elementDirectives: elementDirectives,
      filters: filters,
      transitions: {},
      components: {},
      partials: {},
      replace: true
    };

    /**
     * Expose useful internals
     */

    Vue.util = util;
    Vue.config = config;
    Vue.set = set;
    Vue['delete'] = del;
    Vue.nextTick = nextTick;

    /**
     * The following are exposed for advanced usage / plugins
     */

    Vue.compiler = compiler;
    Vue.FragmentFactory = FragmentFactory;
    Vue.internalDirectives = internalDirectives;
    Vue.parsers = {
      path: path,
      text: text,
      template: template,
      directive: directive,
      expression: expression
    };

    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */

    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     *
     * @param {Object} extendOptions
     */

    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var isFirstExtend = Super.cid === 0;
      if (isFirstExtend && extendOptions._Ctor) {
        return extendOptions._Ctor;
      }
      var name = extendOptions.name || Super.options.name;
      if ('development' !== 'production') {
        if (!/^[a-zA-Z][\w-]*$/.test(name)) {
          warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
          name = null;
        }
      }
      var Sub = createClass(name || 'VueComponent');
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super;
      // allow further extension
      Sub.extend = Super.extend;
      // create asset registers, so extended classes
      // can have their private assets too.
      config._assetTypes.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }
      // cache constructor
      if (isFirstExtend) {
        extendOptions._Ctor = Sub;
      }
      return Sub;
    };

    /**
     * A function that returns a sub-class constructor with the
     * given name. This gives us much nicer output when
     * logging instances in the console.
     *
     * @param {String} name
     * @return {Function}
     */

    function createClass(name) {
      /* eslint-disable no-new-func */
      return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
      /* eslint-enable no-new-func */
    }

    /**
     * Plugin system
     *
     * @param {Object} plugin
     */

    Vue.use = function (plugin) {
      /* istanbul ignore if */
      if (plugin.installed) {
        return;
      }
      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else {
        plugin.apply(null, args);
      }
      plugin.installed = true;
      return this;
    };

    /**
     * Apply a global mixin by merging it into the default
     * options.
     */

    Vue.mixin = function (mixin) {
      Vue.options = mergeOptions(Vue.options, mixin);
    };

    /**
     * Create asset registration methods with the following
     * signature:
     *
     * @param {String} id
     * @param {*} definition
     */

    config._assetTypes.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          if ('development' !== 'production') {
            if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
              warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
            }
          }
          if (type === 'component' && isPlainObject(definition)) {
            if (!definition.name) {
              definition.name = id;
            }
            definition = Vue.extend(definition);
          }
          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });

    // expose internal transition API
    extend(Vue.transition, transition);
  }

  installGlobalAPI(Vue);

  Vue.version = '1.0.26';

  // devtools global hook
  /* istanbul ignore next */
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if ('development' !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
        console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }
  }, 0);

  return Vue;

}));