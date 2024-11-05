(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{2345:function(e,t,a){Promise.resolve().then(a.bind(a,5728))},5728:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var r=a(3827),n=a(4454),i=a.n(n),s=a(210),c=a(3444);a(8711);var o=a(2888),l=a(4090),d=a(5805),u=a(4576),h=a(8819),p=a(2505),m=a(6252),x=a(6879),b=a(6480),g=a.n(b),v=a(2865);let f=l.forwardRef((e,t)=>{let{bsPrefix:a,variant:n,animation:i="border",size:s,as:c="div",className:o,...l}=e;a=(0,v.vE)(a,"spinner");let d="".concat(a,"-").concat(i);return(0,r.jsx)(c,{ref:t,...l,className:g()(o,d,s&&"".concat(d,"-").concat(s),n&&"text-".concat(n))})});function k(e){let{dispatch:t,endpoint:a,data:n,color:i,text:s,showspin:c}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(x.Z,{className:"mb-3",variant:i,onClick:async()=>{t({type:"submit-Clicked",color:"primary disabled",text:"working"});let e=await (0,u.h)({method:"POST",endpoint:a,data:n});if(e.didError){console.log(e),t({type:"submit-Error",color:"danger",text:"error",errorText:""}),void 0!==e.data.dispatches&&e.data.dispatches.map(e=>t(e));return}t({type:"submit-Success",color:"success",text:"Success"}),void 0!==e.data.dispatches&&e.data.dispatches.map(e=>t(e))},children:s}),(0,r.jsx)(f,{animation:"border",role:"status",variant:"warning",className:"ms-1",hidden:!c,children:(0,r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})}f.displayName="Spinner";var C=a(9742);let S=["Create a new project for the employee’s training plan in Rent Manager","and assign them the corresponding RMU learning paths."],j={},A={"Select Path":{options:[],value:0},"Assigned PDC":{options:[],value:0},"Employee Email":{value:""},"Project Start Date":{value:""},"Ignore NH":{isChecked:!1},"Path List":[],"PDC List":[],Submit:{Color:"primary",Text:"Submit",ShowSpin:!1},Feedback:{color:"danger",code:"401",title:"UnAuthorized",text:"You are not authorized to do so",hidden:!0}},Z=(e,t)=>{let a={...e};switch(t.type){case"update-Value":return a[t.label].value=t.value,a.Feedback.hidden=!0,a.Submit.Text="Submit",a;case"mark-Checked":return a[t.label].isChecked=t.value,a;case"load-Options":{let e=t.data.Assets;a["Path List"]=e,a["Select Path"].options=e.map(e=>({ID:e.ID,Name:e.Name})),a["Select Path"].value=a["Select Path"].options[0].ID;let r=t.data.PDCs;return a["PDC List"]=r,a["Assigned PDC"].options=r.map(e=>({ID:e.ID,Name:e.Name})),a["Assigned PDC"].value=a["Assigned PDC"].options[0].ID,a}case"load-Response":case"submit-Clicked":return a.Submit.Color=t.color,a.Submit.Text=t.text,a.Submit.ShowSpin=!0,a;case"submit-Error":case"submit-Success":return a.Submit.Color=t.color,a.Submit.Text=t.text,a.Submit.ShowSpin=!1,a;case"load-Feedback":return a.Feedback.hidden=!1,a.Feedback.color=t.color,a.Feedback.code=t.code,a.Feedback.title=t.title,a.Feedback.text=t.text,a}};function _(){let[e,t]=(0,l.useReducer)(Z,A);return(0,l.useEffect)(function(){(async()=>{let e=await (0,u.h)({method:"GET",endpoint:"Litmos/RetrieveNHAssets"});e.didError||t({type:"load-Options",data:e.data})})()},[]),j={AssetID:e["Select Path"].value,Email:e["Employee Email"].value,IgnoreNH:e["Ignore NH"].isChecked,PDC:e["Assigned PDC"].value,StartDate:e["Project Start Date"].value},(0,r.jsx)("main",{className:i().main,style:{backgroundImage:"url(".concat(h.Z.src,")")},children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(p.Z,{text:"Assign Training Plan"}),(0,r.jsx)(C.Z,{text:S}),(0,r.jsx)(o.Z,{options:e["Select Path"].options,label:"Select Path",value:e["Select Path"].value,dispatch:t}),(0,r.jsx)(o.Z,{options:e["Assigned PDC"].options,label:"Assigned PDC",value:e["Assigned PDC"].value,dispatch:t}),(0,r.jsx)(c.Z,{label:"Employee Email",type:"email",reminder:"Must Match Email In RMU",placeholder:"",value:e["Employee Email"].value,dispatch:t}),(0,r.jsx)(c.Z,{label:"Project Start Date",type:"date",reminder:"",placeholder:"",value:e["Project Start Date"].value,dispatch:t}),(0,r.jsx)(d.Z,{label:"Ignore NH",reminder:"Check to Indicate Cross Training",isChecked:e["Ignore NH"].isChecked,dispatch:t,hidden:!1}),(0,r.jsx)(k,{method:"POST",endpoint:"Litmos/AssignLearningPath",dispatch:t,data:j,color:e.Submit.Color,text:e.Submit.Text,showspin:e.Submit.ShowSpin}),(0,r.jsx)(m.Z,{color:e.Feedback.color,code:e.Feedback.code,title:e.Feedback.title,text:e.Feedback.text,hidden:e.Feedback.hidden})]})})}},5805:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var r=a(3827);a(6845);var n=a(210);function i(e){let{label:t,reminder:a,isChecked:i,dispatch:s,hidden:c=!1}=e;return(0,r.jsx)(n.Z.Group,{hidden:c,className:"mb-3 text-dark-emphasis",controlId:"form".concat(t),children:(0,r.jsx)(n.Z.Check,{type:"checkbox",label:a,checked:i,onChange:e=>s({type:"mark-Checked",label:t,value:!i})})})}},3444:function(e,t,a){"use strict";var r=a(3827);a(6845);var n=a(210);t.Z=function(e){let{label:t,type:a="email",reminder:i,placeholder:s,value:c,dispatch:o,hidden:l=!1}=e;return(0,r.jsxs)(n.Z.Group,{hidden:l,className:"mb-3",controlId:"form".concat(t),children:[(0,r.jsx)(n.Z.Label,{className:"text-dark-emphasis badge",children:t}),(0,r.jsx)(n.Z.Control,{type:a,placeholder:s,value:c,onChange:e=>o({type:"update-Value",value:e.target.value,label:t})}),(0,r.jsx)(n.Z.Text,{className:"text-danger badge",children:i})]})}},6252:function(e,t,a){"use strict";var r=a(3827);a(6845);var n=a(6459);t.Z=function(e){let{color:t,code:a,title:i,text:s,hidden:c=!0}=e;return(0,r.jsxs)(n.Z,{bg:t,hidden:c,children:[(0,r.jsx)(n.Z.Header,{className:"text-dark",children:a}),(0,r.jsxs)(n.Z.Body,{children:[(0,r.jsx)(n.Z.Title,{className:"text-dark",children:i}),(0,r.jsx)(n.Z.Text,{className:"text-dark",children:s})]})]})}},9742:function(e,t,a){"use strict";var r=a(3827);a(6845),t.Z=function(e){let{text:t}=e;return(0,r.jsx)("div",{children:t.map(e=>(0,r.jsx)("p",{children:e}))})}},2505:function(e,t,a){"use strict";var r=a(3827);a(6845);var n=a(210);t.Z=function(e){let{text:t}=e;return(0,r.jsx)(n.Z.Group,{className:"mb-1",children:(0,r.jsx)(n.Z.Label,{size:"lg",className:"text-light",children:(0,r.jsx)("h1",{className:"text-dark-emphasis",children:t})})})}},2888:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var r=a(3827),n=a(210);function i(e){let{options:t,label:a,value:i,dispatch:s,hidden:c=!1}=e;return(0,r.jsxs)(n.Z.Group,{hidden:c,children:[(0,r.jsx)(n.Z.Label,{className:"text-dark-emphasis badge",children:a}),(0,r.jsx)(n.Z.Select,{className:"mb-3","aria-label":a,value:i,onChange:e=>s({type:"update-Value",value:e.target.value,label:a}),children:t.map(e=>(0,r.jsx)("option",{value:e.ID,children:e.Name},e.ID))})]})}a(6845)},8711:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(3827),n=a(6879),i=a(4576);function s(e){let{dispatch:t,endpoint:a,data:s,color:c,text:o}=e;return(0,r.jsx)(n.Z,{className:"mb-3",variant:c,onClick:async()=>{let e=await (0,i.h)({method:"POST",endpoint:a,data:s});if(e.didError){console.log(e),t({type:"submit-Error",color:"danger",text:"error",errorText:""}),void 0!==e.data.dispatches&&e.data.dispatches.map(e=>t(e));return}t({type:"submit-Success",color:"success",text:"Success"}),void 0!==e.data.dispatches&&e.data.dispatches.map(e=>t(e))},children:o})}},4576:function(e,t,a){"use strict";a.d(t,{h:function(){return n}});var r=a(7908);async function n(e){let{method:t,endpoint:a,data:n}=e,i={method:t,url:"".concat("http://10.1.5.220:3180/").concat(a),data:void 0!==n?n:null},s={};s.didError=!1,console.dir(i);try{let e=await (0,r.Z)(i);s.data=e.data,s.didError=s.data.didError}catch(e){s.didError=!0,s.data={}}return s}},6845:function(){},4454:function(e){e.exports={main:"page_main__nw1Wk",description:"page_description__lvaOp",code:"page_code__9AfUJ",grid:"page_grid__JZ9Cz",card:"page_card__Cf__u",center:"page_center__NcdcW",logo:"page_logo__ikIZE",content:"page_content___38fW",vercelLogo:"page_vercelLogo__YYFl1",rotate:"page_rotate__xIioM"}},8819:function(e,t){"use strict";t.Z={src:"/_next/static/media/Green.26974377.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAYElEQVR42g3EQQ6CQBBE0V81zSjG6P1PaNyYuDACDt3yFk+v73PP7ZfLOj7HQlCSA7AmsUmuyiQBlcMKxFk3K5qmprADFCNX4ebobe7tYhkoiPfyyBrhnrWf4jrH3QrgD9C3JBjW4v6FAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}}},function(e){e.O(0,[210,842,703,971,69,744],function(){return e(e.s=2345)}),_N_E=e.O()}]);
//# sourceMappingURL=page-b0eb99fcf9f392d0.js.map