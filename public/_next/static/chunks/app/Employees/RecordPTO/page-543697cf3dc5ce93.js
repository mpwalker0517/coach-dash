(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{8317:function(e,t,r){Promise.resolve().then(r.bind(r,6100))},6100:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var i=r(3827),n=r(4454),s=r.n(n),a=r(210),o=r(3444),l=r(8711);r(2888);var u=r(4090);r(5805);var c=r(8819),d=r(2505);r(6252);var h=r(9742),f=r(1279);r(6845);var p=r(6491),m=r.n(p),g=function(e){let{label:t,type:r="file",reminder:n,placeholder:s,value:o,dispatch:l,hidden:u=!1}=e;return(0,i.jsxs)(a.Z.Group,{hidden:u,className:"mb-3",controlId:"form".concat(t),children:[(0,i.jsx)(a.Z.Label,{className:"text-dark-emphasis badge",children:t}),(0,i.jsx)(a.Z.Control,{type:r,accept:".csv",placeholder:s,value:o,onChange:e=>{m().parse(e.target.files[0],{header:!0,skipEmptyLines:!0,complete:function(e){console.log(e.data),l({type:"load-CSV",value:e.data,label:t})}}),l({type:"update-Value",value:e.target.value,label:t})}}),(0,i.jsx)(a.Z.Text,{className:"text-danger badge",children:n})]})};let _=["Select a csv to import PTO notes"],v={},b={"Select File":{value:"",csv:""},Submit:{Color:"primary",Text:"Submit"},Feedback:{color:"success",code:"",title:"",text:"",hidden:!0},Fails:[{}],"Report Month":{value:""}},y=(e,t)=>{let r={...e};switch(t.type){case"update-Value":return r[t.label].value=t.value,r.Submit.Color="primary",r.Submit.Text="Submit",r;case"load-CSV":return r[t.label].csv=t.value,r.Submit.Color="primary",r.Submit.Text="Submit",r;case"submit-Clicked":case"submit-Error":case"submit-Success":return r.Submit.Color=t.color,r.Submit.Text=t.text,r;case"load-Feedback":return r.Feedback.hidden=!1,r.Feedback.color=t.color,r.Feedback.code=t.code,r.Feedback.title=t.title,r.Feedback.text=t.text,r;case"load-Report":{let e=t.report;return r.Fails=e,r}}};function k(){let[e,t]=(0,u.useReducer)(y,b);return v={report:e["Select File"].csv,month:e["Report Month"].value},(0,i.jsx)("main",{className:s().main,style:{backgroundImage:"url(".concat(c.Z.src,")")},children:(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(d.Z,{text:"Create PTO Notes"}),(0,i.jsx)(h.Z,{text:_}),(0,i.jsx)("p",{children:"1. Run PTO report from ADP for a whole month. Include the following columns."}),(0,i.jsx)("p",{children:"2. Save the report as a csv file."}),(0,i.jsx)("p",{children:"3. Enter the first day of the month of the report"}),(0,i.jsx)("p",{children:"4. Click Submit"}),(0,i.jsx)(g,{label:"Select File",type:"file",reminder:"",placeholder:"",value:e["Select File"].value,dispatch:t}),(0,i.jsx)(o.Z,{label:"Report Month",type:"date",reminder:"",placeholder:"",value:e["Report Month"].value,dispatch:t}),(0,i.jsx)(l.Z,{method:"POST",endpoint:"Litmos/AddPTO",dispatch:t,data:v,color:e.Submit.Color,text:e.Submit.Text}),(0,i.jsx)(f.Z,{records:e.Fails})]})})}},1279:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var i=r(3827),n=r(210),s=r(6480),a=r.n(s),o=r(4090),l=r(2865);let u=o.forwardRef((e,t)=>{let{bsPrefix:r,className:n,striped:s,bordered:o,borderless:u,hover:c,size:d,variant:h,responsive:f,...p}=e,m=(0,l.vE)(r,"table"),g=a()(n,m,h&&"".concat(m,"-").concat(h),d&&"".concat(m,"-").concat(d),s&&"".concat(m,"-").concat("string"==typeof s?"striped-".concat(s):"striped"),o&&"".concat(m,"-bordered"),u&&"".concat(m,"-borderless"),c&&"".concat(m,"-hover")),_=(0,i.jsx)("table",{...p,className:g,ref:t});if(f){let e="".concat(m,"-responsive");return"string"==typeof f&&(e="".concat(e,"-").concat(f)),(0,i.jsx)("div",{className:e,children:_})}return _});var c=function(e){let{records:t}=e,r=Object.keys(t[0]),s=[];for(let e in t){let r=Object.values(t[e]);s.push((0,i.jsx)("tr",{children:r.map(e=>(0,i.jsx)("td",{children:e}))}))}return(0,i.jsx)(n.Z.Group,{children:(0,i.jsxs)(u,{className:"table table-secondary table-hover table-striped table-bordered",children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:r.map(e=>(0,i.jsx)("th",{children:e}))})}),(0,i.jsx)("tbody",{children:s.map(e=>e)})]})})}},5805:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var i=r(3827);r(6845);var n=r(210);function s(e){let{label:t,reminder:r,isChecked:s,dispatch:a,hidden:o=!1}=e;return(0,i.jsx)(n.Z.Group,{hidden:o,className:"mb-3 text-dark-emphasis",controlId:"form".concat(t),children:(0,i.jsx)(n.Z.Check,{type:"checkbox",label:r,checked:s,onChange:e=>a({type:"mark-Checked",label:t,value:!s})})})}},3444:function(e,t,r){"use strict";var i=r(3827);r(6845);var n=r(210);t.Z=function(e){let{label:t,type:r="email",reminder:s,placeholder:a,value:o,dispatch:l,hidden:u=!1}=e;return(0,i.jsxs)(n.Z.Group,{hidden:u,className:"mb-3",controlId:"form".concat(t),children:[(0,i.jsx)(n.Z.Label,{className:"text-dark-emphasis badge",children:t}),(0,i.jsx)(n.Z.Control,{type:r,placeholder:a,value:o,onChange:e=>l({type:"update-Value",value:e.target.value,label:t})}),(0,i.jsx)(n.Z.Text,{className:"text-danger badge",children:s})]})}},6252:function(e,t,r){"use strict";var i=r(3827);r(6845);var n=r(6459);t.Z=function(e){let{color:t,code:r,title:s,text:a,hidden:o=!0}=e;return(0,i.jsxs)(n.Z,{bg:t,hidden:o,children:[(0,i.jsx)(n.Z.Header,{className:"text-dark",children:r}),(0,i.jsxs)(n.Z.Body,{children:[(0,i.jsx)(n.Z.Title,{className:"text-dark",children:s}),(0,i.jsx)(n.Z.Text,{className:"text-dark",children:a})]})]})}},9742:function(e,t,r){"use strict";var i=r(3827);r(6845),t.Z=function(e){let{text:t}=e;return(0,i.jsx)("div",{children:t.map(e=>(0,i.jsx)("p",{children:e}))})}},2505:function(e,t,r){"use strict";var i=r(3827);r(6845);var n=r(210);t.Z=function(e){let{text:t}=e;return(0,i.jsx)(n.Z.Group,{className:"mb-1",children:(0,i.jsx)(n.Z.Label,{size:"lg",className:"text-light",children:(0,i.jsx)("h1",{className:"text-dark-emphasis",children:t})})})}},2888:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var i=r(3827),n=r(210);function s(e){let{options:t,label:r,value:s,dispatch:a,hidden:o=!1}=e;return(0,i.jsxs)(n.Z.Group,{hidden:o,children:[(0,i.jsx)(n.Z.Label,{className:"text-dark-emphasis badge",children:r}),(0,i.jsx)(n.Z.Select,{className:"mb-3","aria-label":r,value:s,onChange:e=>a({type:"update-Value",value:e.target.value,label:r}),children:t.map(e=>(0,i.jsx)("option",{value:e.ID,children:e.Name},e.ID))})]})}r(6845)},8711:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var i=r(3827),n=r(6879),s=r(4576);function a(e){let{dispatch:t,endpoint:r,data:a,color:o,text:l}=e;return(0,i.jsx)(n.Z,{className:"mb-3",variant:o,onClick:async()=>{let e=await (0,s.h)({method:"POST",endpoint:r,data:a});if(e.didError){console.log(e),t({type:"submit-Error",color:"danger",text:"error",errorText:""}),void 0!==e.data.dispatches&&e.data.dispatches.map(e=>t(e));return}t({type:"submit-Success",color:"success",text:"Success"}),void 0!==e.data.dispatches&&e.data.dispatches.map(e=>t(e))},children:l})}},4576:function(e,t,r){"use strict";r.d(t,{h:function(){return n}});var i=r(7908);async function n(e){let{method:t,endpoint:r,data:n}=e,s={method:t,url:"".concat("http://10.1.5.220:3180/").concat(r),data:void 0!==n?n:null},a={};a.didError=!1,console.dir(s);try{let e=await (0,i.Z)(s);a.data=e.data,a.didError=a.data.didError}catch(e){a.didError=!0,a.data={}}return a}},6491:function(e,t){"use strict";var r,i;void 0!==(i="function"==typeof(r=function e(){var t="undefined"!=typeof self?self:window,r=!t.document&&!!t.postMessage,i=t.IS_PAPA_WORKER||!1,n={},s=0,a={parse:function(r,i){var o,l=(i=i||{}).dynamicTyping||!1;if(k(l)&&(i.dynamicTypingFunction=l,l={}),i.dynamicTyping=l,i.transform=!!k(i.transform)&&i.transform,i.worker&&a.WORKERS_SUPPORTED){var f=function(){if(!a.WORKERS_SUPPORTED)return!1;var r,i,o=(r=t.URL||t.webkitURL||null,i=e.toString(),a.BLOB_URL||(a.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",i,")();"],{type:"text/javascript"})))),l=new t.Worker(o);return l.onmessage=g,l.id=s++,n[l.id]=l}();return f.userStep=i.step,f.userChunk=i.chunk,f.userComplete=i.complete,f.userError=i.error,i.step=k(i.step),i.chunk=k(i.chunk),i.complete=k(i.complete),i.error=k(i.error),delete i.worker,void f.postMessage({input:r,config:i,workerId:f.id})}var p=null;return a.NODE_STREAM_INPUT,"string"==typeof r?(r=65279===(o=r).charCodeAt(0)?o.slice(1):o,p=i.download?new u(i):new d(i)):!0===r.readable&&k(r.read)&&k(r.on)?p=new h(i):(t.File&&r instanceof File||r instanceof Object)&&(p=new c(i)),p.stream(r)},unparse:function(e,t){var r=!1,i=!0,n=",",s="\r\n",o='"',l=o+o,u=!1,c=null,d=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(u=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(l=t.escapeChar+o),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(d=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var h=RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,u);if("object"==typeof e[0])return f(c||Object.keys(e[0]),e,u)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||c),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],u);throw Error("Unable to serialize unrecognized input");function f(e,t,r){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,l=!Array.isArray(t[0]);if(o&&i){for(var u=0;u<e.length;u++)0<u&&(a+=n),a+=m(e[u],u);0<t.length&&(a+=s)}for(var c=0;c<t.length;c++){var d=o?e.length:t[c].length,h=!1,f=o?0===Object.keys(t[c]).length:0===t[c].length;if(r&&!o&&(h="greedy"===r?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===r&&o){for(var p=[],g=0;g<d;g++){var _=l?e[g]:g;p.push(t[c][_])}h=""===p.join("").trim()}if(!h){for(var v=0;v<d;v++){0<v&&!f&&(a+=n);var b=o&&l?e[v]:v;a+=m(t[c][b],v)}c<t.length-1&&(!r||0<d&&!f)&&(a+=s)}}return a}function m(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var i=!1;d&&"string"==typeof e&&d.test(e)&&(e="'"+e,i=!0);var s=e.toString().replace(h,l);return(i=i||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(s,a.BAD_DELIMITERS)||-1<s.indexOf(n)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?o+s+o:s}}};if(a.RECORD_SEP="\x1e",a.UNIT_SEP="\x1f",a.BYTE_ORDER_MARK="\uFEFF",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!r&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=m,a.ParserHandle=f,a.NetworkStreamer=u,a.FileStreamer=c,a.StringStreamer=d,a.ReadableStreamStreamer=h,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var r=e.config||{},i=[];return this.each(function(e){if(!("INPUT"===o(this).prop("tagName").toUpperCase()&&"file"===o(this).attr("type").toLowerCase()&&t.FileReader)||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)i.push({file:this.files[n],inputElem:this,instanceConfig:o.extend({},r)})}),n(),this;function n(){if(0!==i.length){var t,r,n,l=i[0];if(k(e.before)){var u=e.before(l.file,l.inputElem);if("object"==typeof u){if("abort"===u.action)return t=l.file,r=l.inputElem,n=u.reason,void(k(e.error)&&e.error({name:"AbortError"},t,r,n));if("skip"===u.action)return void s();"object"==typeof u.config&&(l.instanceConfig=o.extend(l.instanceConfig,u.config))}else if("skip"===u)return void s()}var c=l.instanceConfig.complete;l.instanceConfig.complete=function(e){k(c)&&c(e,l.file,l.inputElem),s()},a.parse(l.file,l.instanceConfig)}else k(e.complete)&&e.complete()}function s(){i.splice(0,1),n()}}}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new f(t),(this._handle.streamer=this)._config=t}).call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&k(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);void 0!==n&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var l=o.meta.cursor;this._finished||(this._partialLine=s.substring(l-this._baseIndex),this._baseIndex=l),o&&o.data&&(this._rowCount+=o.data.length);var u=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(i)t.postMessage({results:o,workerId:a.WORKER_ID,finished:u});else if(k(this._config.chunk)&&!r){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!u||!k(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),u||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),l.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=y(this._chunkLoaded,this),t.onerror=y(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var i in e)t.setRequestHeader(i,e[i])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){var e;4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(null===(e=t.getResponseHeader("Content-Range"))?-1:parseInt(e.substring(e.lastIndexOf("/")+1))),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(Error(r))}}function c(e){(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),l.call(this,e);var t,r,i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=y(this._chunkLoaded,this),t.onerror=y(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);i||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function d(e){var t;l.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function h(e){l.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=y(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function f(e){var t,r,i,n=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,s=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,o=this,l=0,u=0,c=!1,d=!1,h=[],f={data:[],errors:[],meta:{}};if(k(e.step)){var g=e.step;e.step=function(t){if(f=t,y())v();else{if(v(),0===f.data.length)return;l+=t.data.length,e.preview&&l>e.preview?r.abort():(f.data=f.data[0],g(f,o))}}}function _(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function v(){return f&&i&&(x("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines&&(f.data=f.data.filter(function(e){return!_(e)})),y()&&function(){if(f){if(Array.isArray(f.data[0])){for(var t=0;y()&&t<f.data.length;t++)f.data[t].forEach(r);f.data.splice(0,1)}else f.data.forEach(r)}function r(t,r){k(e.transformHeader)&&(t=e.transformHeader(t,r)),h.push(t)}}(),function(){if(!f||!e.header&&!e.dynamicTyping&&!e.transform)return f;function t(t,r){var i,a=e.header?{}:[];for(i=0;i<t.length;i++){var o,l,c=i,d=t[i];e.header&&(c=i>=h.length?"__parsed_extra":h[i]),e.transform&&(d=e.transform(d,c)),o=c,l=d,e.dynamicTypingFunction&&void 0===e.dynamicTyping[o]&&(e.dynamicTyping[o]=e.dynamicTypingFunction(o)),d=!0===(e.dynamicTyping[o]||e.dynamicTyping)?"true"===l||"TRUE"===l||"false"!==l&&"FALSE"!==l&&(!function(e){if(n.test(e)){var t=parseFloat(e);if(-9007199254740992<t&&t<9007199254740992)return!0}return!1}(l)?s.test(l)?new Date(l):""===l?null:l:parseFloat(l)):l,"__parsed_extra"===c?(a[c]=a[c]||[],a[c].push(d)):a[c]=d}return e.header&&(i>h.length?x("FieldMismatch","TooManyFields","Too many fields: expected "+h.length+" fields but parsed "+i,u+r):i<h.length&&x("FieldMismatch","TooFewFields","Too few fields: expected "+h.length+" fields but parsed "+i,u+r)),a}var r=1;return!f.data.length||Array.isArray(f.data[0])?(f.data=f.data.map(t),r=f.data.length):f.data=t(f.data,0),e.header&&f.meta&&(f.meta.fields=h),u+=r,f}()}function y(){return e.header&&0===h.length}function x(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),f.errors.push(n)}this.parse=function(n,s,o){var l=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=RegExp(p(t)+"([^]*?)"+p(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(n,l)),i=!1,e.delimiter)k(e.delimiter)&&(e.delimiter=e.delimiter(n),f.meta.delimiter=e.delimiter);else{var u=function(t,r,i,n,s){var o,l,u,c;s=s||[",","	","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var d=0;d<s.length;d++){var h=s[d],f=0,p=0,g=0;u=void 0;for(var v=new m({comments:n,delimiter:h,newline:r,preview:10}).parse(t),b=0;b<v.data.length;b++)if(i&&_(v.data[b]))g++;else{var y=v.data[b].length;p+=y,void 0!==u?0<y&&(f+=Math.abs(y-u),u=y):u=y}0<v.data.length&&(p/=v.data.length-g),(void 0===l||f<=l)&&(void 0===c||c<p)&&1.99<p&&(l=f,o=h,c=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);u.successful?e.delimiter=u.bestDelimiter:(i=!0,e.delimiter=a.DefaultDelimiter),f.meta.delimiter=e.delimiter}var d=b(e);return e.preview&&e.header&&d.preview++,t=n,f=(r=new m(d)).parse(t,s,o),v(),c?{meta:{paused:!0}}:f||{meta:{paused:!1}}},this.paused=function(){return c},this.pause=function(){c=!0,r.abort(),t=k(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){o.streamer._halted?(c=!1,o.streamer.parseChunk(t,!0)):setTimeout(o.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,r.abort(),f.meta.aborted=!0,k(e.complete)&&e.complete(f),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t,r=(e=e||{}).delimiter,i=e.newline,n=e.comments,s=e.step,o=e.preview,l=e.fastMode,u=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(u=e.escapeChar),("string"!=typeof r||-1<a.BAD_DELIMITERS.indexOf(r))&&(r=","),n===r)throw Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==i&&"\r"!==i&&"\r\n"!==i&&(i="\n");var c=0,d=!1;this.parse=function(a,h,f){if("string"!=typeof a)throw Error("Input must be a string");var m=a.length,g=r.length,_=i.length,v=n.length,b=k(s),y=[],x=[],E=[],C=c=0;if(!a)return H();if(e.header&&!h){var S=a.split(i)[0].split(r),R=[],w={},j=!1;for(var A in S){var O=S[A];k(e.transformHeader)&&(O=e.transformHeader(O,A));var T=O,F=w[O]||0;for(0<F&&(j=!0,T=O+"_"+F),w[O]=F+1;R.includes(T);)T=T+"_"+F;R.push(T)}if(j){var I=a.split(i);I[0]=R.join(r),a=I.join(i)}}if(l||!1!==l&&-1===a.indexOf(t)){for(var D=a.split(i),L=0;L<D.length;L++){if(E=D[L],c+=E.length,L!==D.length-1)c+=i.length;else if(f)break;if(!n||E.substring(0,v)!==n){if(b){if(y=[],B(E.split(r)),Q(),d)return H()}else B(E.split(r));if(o&&o<=L)return y=y.slice(0,o),H(!0)}}return H()}for(var Z=a.indexOf(r,c),N=a.indexOf(i,c),P=RegExp(p(u)+p(t),"g"),z=a.indexOf(t,c);;)if(a[c]!==t){if(n&&0===E.length&&a.substring(c,c+v)===n){if(-1===N)return H();c=N+_,N=a.indexOf(i,c),Z=a.indexOf(r,c)}else if(-1!==Z&&(Z<N||-1===N))E.push(a.substring(c,Z)),c=Z+g,Z=a.indexOf(r,c);else{if(-1===N)break;if(E.push(a.substring(c,N)),K(N+_),b&&(Q(),d))return H();if(o&&y.length>=o)return H(!0)}}else for(z=c,c++;;){if(-1===(z=a.indexOf(t,z+1)))return f||x.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:y.length,index:c}),W();if(z===m-1)return W(a.substring(c,z).replace(P,t));if(t!==u||a[z+1]!==u){if(t===u||0===z||a[z-1]!==u){-1!==Z&&Z<z+1&&(Z=a.indexOf(r,z+1)),-1!==N&&N<z+1&&(N=a.indexOf(i,z+1));var M=q(-1===N?Z:Math.min(Z,N));if(a.substr(z+1+M,g)===r){E.push(a.substring(c,z).replace(P,t)),a[c=z+1+M+g]!==t&&(z=a.indexOf(t,c)),Z=a.indexOf(r,c),N=a.indexOf(i,c);break}var U=q(N);if(a.substring(z+1+U,z+1+U+_)===i){if(E.push(a.substring(c,z).replace(P,t)),K(z+1+U+_),Z=a.indexOf(r,c),z=a.indexOf(t,c),b&&(Q(),d))return H();if(o&&y.length>=o)return H(!0);break}x.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:y.length,index:c}),z++}}else z++}return W();function B(e){y.push(e),C=c}function q(e){var t=0;if(-1!==e){var r=a.substring(z+1,e);r&&""===r.trim()&&(t=r.length)}return t}function W(e){return f||(void 0===e&&(e=a.substring(c)),E.push(e),c=m,B(E),b&&Q()),H()}function K(e){c=e,B(E),E=[],N=a.indexOf(i,c)}function H(e){return{data:y,errors:x,meta:{delimiter:r,linebreak:i,aborted:d,truncated:!!e,cursor:C+(h||0)}}}function Q(){s(H()),y=[],x=[]}},this.abort=function(){d=!0},this.getCharIndex=function(){return c}}function g(e){var t=e.data,r=n[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){i=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(k(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!i);a++);delete t.results}else k(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!i&&_(t.workerId,t.results)}function _(e,t){var r=n[e];k(r.userComplete)&&r.userComplete(t),r.terminate(),delete n[e]}function v(){throw Error("Not implemented.")}function b(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=b(e[r]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return i&&(t.onmessage=function(e){var r=e.data;if(void 0===a.WORKER_ID&&r&&(a.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var i=a.parse(r.input,r.config);i&&t.postMessage({workerId:a.WORKER_ID,results:i,finished:!0})}}),(u.prototype=Object.create(l.prototype)).constructor=u,(c.prototype=Object.create(l.prototype)).constructor=c,(d.prototype=Object.create(d.prototype)).constructor=d,(h.prototype=Object.create(l.prototype)).constructor=h,a})?r.apply(t,[]):r)&&(e.exports=i)},6845:function(){},4454:function(e){e.exports={main:"page_main__nw1Wk",description:"page_description__lvaOp",code:"page_code__9AfUJ",grid:"page_grid__JZ9Cz",card:"page_card__Cf__u",center:"page_center__NcdcW",logo:"page_logo__ikIZE",content:"page_content___38fW",vercelLogo:"page_vercelLogo__YYFl1",rotate:"page_rotate__xIioM"}},8819:function(e,t){"use strict";t.Z={src:"/_next/static/media/Green.26974377.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAYElEQVR42g3EQQ6CQBBE0V81zSjG6P1PaNyYuDACDt3yFk+v73PP7ZfLOj7HQlCSA7AmsUmuyiQBlcMKxFk3K5qmprADFCNX4ebobe7tYhkoiPfyyBrhnrWf4jrH3QrgD9C3JBjW4v6FAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}}},function(e){e.O(0,[210,842,703,971,69,744],function(){return e(e.s=8317)}),_N_E=e.O()}]);
//# sourceMappingURL=page-543697cf3dc5ce93.js.map