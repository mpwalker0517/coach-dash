(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{9105:function(e,t,a){Promise.resolve().then(a.bind(a,7516))},7516:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var r=a(3827),c=a(4454),n=a.n(c),o=a(210);a(3444);var s=a(8711),i=a(2888),l=a(4090);a(5805);var d=a(4576),u=a(8819);a(6007);var p=a(6252),h=a(1279);let m={},x={"LSManager Account":{value:""},Submit:{Color:"primary",Text:"Submit"},"Select Project":{options:[],value:0},Registrations:[{}],Feedback:{color:"success",code:"",title:"",text:"",hidden:!0}},b=(e,t)=>{let a={...e};switch(t.type){case"update-Value":return a[t.label].value=t.value,a.Submit.Color="primary",a.Submit.Text="Submit",a.Feedback.hidden=!0,a;case"submit-Clicked":case"submit-Error":case"submit-Success":return a.Submit.Color=t.color,a.Submit.Text=t.text,a;case"load-Options":{let e=t.data.QueryResponse;return a["Select Project"].options=e,a["Select Project"].value=e[0].ID,a}case"load-Report":{let e=t.report;return a.Registrations=e,a}case"load-SelectBox":{let e=t.data.QueryResponse;return a["Select Project"].options=e,a["Select Project"].value=e[0].ID,a}case"load-Feedback":return a.Feedback.hidden=!1,a.Feedback.color=t.color,a.Feedback.code=t.code,a.Feedback.title=t.title,a.Feedback.text=t.text,a}};function f(){let[e,t]=(0,l.useReducer)(b,x);return(0,l.useEffect)(function(){(async()=>{let e=await (0,d.h)({method:"POST",endpoint:"internal/QuickQuery",data:{QueryString:"Users?embeds=UserRoles&filters=UserRoles.Role.RoleID,eq,86",NameString:"Name",IDString:"UserID"}});if(e.didError)return;let a=e.data.QueryResponse.map(e=>e.ID).toString(),r=await (0,d.h)({method:"POST",endpoint:"internal/QuickQuery",data:{QueryString:"ServiceManagerProjects?filters=AssignedToUserID,in,(".concat(a,");IsClosed,eq,false"),NameString:"Name",IDString:"ServiceManagerProjectID"}});r.didError||t({type:"load-SelectBox",data:r.data})})()},[]),m={ProjectID:e["Select Project"].value},(0,r.jsx)("main",{className:n().main,style:{backgroundImage:"url(".concat(u.Z.src,")")},children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(i.Z,{options:e["Select Project"].options,label:"Select Project",value:e["Select Project"].value,dispatch:t}),(0,r.jsx)(s.Z,{method:"POST",endpoint:"internal/RetrieveIssuesInProject",dispatch:t,data:m,color:e.Submit.Color,text:e.Submit.Text}),(0,r.jsx)(h.Z,{records:e.Registrations}),(0,r.jsx)(p.Z,{color:e.Feedback.color,code:e.Feedback.code,title:e.Feedback.title,text:e.Feedback.text,hidden:e.Feedback.hidden})]})})}},1279:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(3827),c=a(210),n=a(6480),o=a.n(n),s=a(4090),i=a(2865);let l=s.forwardRef((e,t)=>{let{bsPrefix:a,className:c,striped:n,bordered:s,borderless:l,hover:d,size:u,variant:p,responsive:h,...m}=e,x=(0,i.vE)(a,"table"),b=o()(c,x,p&&"".concat(x,"-").concat(p),u&&"".concat(x,"-").concat(u),n&&"".concat(x,"-").concat("string"==typeof n?"striped-".concat(n):"striped"),s&&"".concat(x,"-bordered"),l&&"".concat(x,"-borderless"),d&&"".concat(x,"-hover")),f=(0,r.jsx)("table",{...m,className:b,ref:t});if(h){let e="".concat(x,"-responsive");return"string"==typeof h&&(e="".concat(e,"-").concat(h)),(0,r.jsx)("div",{className:e,children:f})}return f});var d=function(e){let{records:t}=e,a=Object.keys(t[0]),n=[];for(let e in t){let a=Object.values(t[e]);n.push((0,r.jsx)("tr",{children:a.map(e=>(0,r.jsx)("td",{children:e}))}))}return(0,r.jsx)(c.Z.Group,{children:(0,r.jsxs)(l,{className:"table table-secondary table-hover table-striped table-bordered",children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:a.map(e=>(0,r.jsx)("th",{children:e}))})}),(0,r.jsx)("tbody",{children:n.map(e=>e)})]})})}},6007:function(e,t,a){"use strict";var r=a(3827);a(6845);var c=a(6879),n=a(210),o=a(9252),s=a(4576);t.Z=function(e){let{label:t,type:a="email",reminder:i,placeholder:l,value:d,dispatch:u,hidden:p=!1,endpoint:h,data:m}=e;return(0,r.jsx)(n.Z.Group,{hidden:p,className:"mb-3",controlId:"form".concat(t),children:(0,r.jsxs)(o.Z,{className:"mb-3",children:[(0,r.jsx)(c.Z,{onClick:async()=>{let e=await (0,s.h)({method:"POST",endpoint:h,data:m});console.dir(e),u({type:"load-Options",data:e})},variant:"secondary",id:"button-addon1",children:"Load"}),(0,r.jsx)(n.Z.Control,{type:a,placeholder:l,value:d,onChange:e=>u({type:"update-Value",value:e.target.value,label:t}),"aria-label":"Example text with button addon","aria-describedby":"basic-addon1",autoComplete:"off"})]})})}},5805:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var r=a(3827);a(6845);var c=a(210);function n(e){let{label:t,reminder:a,isChecked:n,dispatch:o,hidden:s=!1}=e;return(0,r.jsx)(c.Z.Group,{hidden:s,className:"mb-3 text-dark-emphasis",controlId:"form".concat(t),children:(0,r.jsx)(c.Z.Check,{type:"checkbox",label:a,checked:n,onChange:e=>o({type:"mark-Checked",label:t,value:!n})})})}},3444:function(e,t,a){"use strict";var r=a(3827);a(6845);var c=a(210);t.Z=function(e){let{label:t,type:a="email",reminder:n,placeholder:o,value:s,dispatch:i,hidden:l=!1}=e;return(0,r.jsxs)(c.Z.Group,{hidden:l,className:"mb-3",controlId:"form".concat(t),children:[(0,r.jsx)(c.Z.Label,{className:"text-dark-emphasis badge",children:t}),(0,r.jsx)(c.Z.Control,{type:a,placeholder:o,value:s,onChange:e=>i({type:"update-Value",value:e.target.value,label:t})}),(0,r.jsx)(c.Z.Text,{className:"text-danger badge",children:n})]})}},6252:function(e,t,a){"use strict";var r=a(3827);a(6845);var c=a(6459);t.Z=function(e){let{color:t,code:a,title:n,text:o,hidden:s=!0}=e;return(0,r.jsxs)(c.Z,{bg:t,hidden:s,children:[(0,r.jsx)(c.Z.Header,{className:"text-dark",children:a}),(0,r.jsxs)(c.Z.Body,{children:[(0,r.jsx)(c.Z.Title,{className:"text-dark",children:n}),(0,r.jsx)(c.Z.Text,{className:"text-dark",children:o})]})]})}},2888:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var r=a(3827),c=a(210);function n(e){let{options:t,label:a,value:n,dispatch:o,hidden:s=!1}=e;return(0,r.jsxs)(c.Z.Group,{hidden:s,children:[(0,r.jsx)(c.Z.Label,{className:"text-dark-emphasis badge",children:a}),(0,r.jsx)(c.Z.Select,{className:"mb-3","aria-label":a,value:n,onChange:e=>o({type:"update-Value",value:e.target.value,label:a}),children:t.map(e=>(0,r.jsx)("option",{value:e.ID,children:e.Name},e.ID))})]})}a(6845)},8711:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var r=a(3827),c=a(6879),n=a(4576);function o(e){let{dispatch:t,endpoint:a,data:o,color:s,text:i}=e;return(0,r.jsx)(c.Z,{className:"mb-3",variant:s,onClick:async()=>{let e=await (0,n.h)({method:"POST",endpoint:a,data:o});if(e.didError){console.log(e),t({type:"submit-Error",color:"danger",text:"error",errorText:""}),void 0!==e.data.dispatches&&e.data.dispatches.map(e=>t(e));return}t({type:"submit-Success",color:"success",text:"Success"}),void 0!==e.data.dispatches&&e.data.dispatches.map(e=>t(e))},children:i})}},4576:function(e,t,a){"use strict";a.d(t,{h:function(){return c}});var r=a(7908);async function c(e){let{method:t,endpoint:a,data:c}=e,n={method:t,url:"".concat("http://10.1.5.220:3180/").concat(a),data:void 0!==c?c:null},o={};o.didError=!1,console.dir(n);try{let e=await (0,r.Z)(n);o.data=e.data,o.didError=o.data.didError}catch(e){o.didError=!0,o.data={}}return o}},9252:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(6480),c=a.n(r),n=a(4090),o=a(2865),s=a(6183),i=a(1805),l=a(3827);let d=n.forwardRef((e,t)=>{let{className:a,bsPrefix:r,as:n="span",...s}=e;return r=(0,o.vE)(r,"input-group-text"),(0,l.jsx)(n,{ref:t,className:c()(a,r),...s})});d.displayName="InputGroupText";let u=n.forwardRef((e,t)=>{let{bsPrefix:a,size:r,hasValidation:s,className:d,as:u="div",...p}=e;a=(0,o.vE)(a,"input-group");let h=(0,n.useMemo)(()=>({}),[]);return(0,l.jsx)(i.Z.Provider,{value:h,children:(0,l.jsx)(u,{ref:t,...p,className:c()(d,a,r&&"".concat(a,"-").concat(r),s&&"has-validation")})})});u.displayName="InputGroup";var p=Object.assign(u,{Text:d,Radio:e=>(0,l.jsx)(d,{children:(0,l.jsx)(s.Z,{type:"radio",...e})}),Checkbox:e=>(0,l.jsx)(d,{children:(0,l.jsx)(s.Z,{type:"checkbox",...e})})})},1805:function(e,t,a){"use strict";let r=a(4090).createContext(null);r.displayName="InputGroupContext",t.Z=r},6845:function(){},4454:function(e){e.exports={main:"page_main__nw1Wk",description:"page_description__lvaOp",code:"page_code__9AfUJ",grid:"page_grid__JZ9Cz",card:"page_card__Cf__u",center:"page_center__NcdcW",logo:"page_logo__ikIZE",content:"page_content___38fW",vercelLogo:"page_vercelLogo__YYFl1",rotate:"page_rotate__xIioM"}},8819:function(e,t){"use strict";t.Z={src:"/_next/static/media/Green.26974377.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAYElEQVR42g3EQQ6CQBBE0V81zSjG6P1PaNyYuDACDt3yFk+v73PP7ZfLOj7HQlCSA7AmsUmuyiQBlcMKxFk3K5qmprADFCNX4ebobe7tYhkoiPfyyBrhnrWf4jrH3QrgD9C3JBjW4v6FAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}}},function(e){e.O(0,[210,842,703,971,69,744],function(){return e(e.s=9105)}),_N_E=e.O()}]);
//# sourceMappingURL=page-ad34cc238fdc6605.js.map