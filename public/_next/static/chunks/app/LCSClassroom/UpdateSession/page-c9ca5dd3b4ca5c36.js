(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20],{5269:function(e,t,a){Promise.resolve().then(a.bind(a,7941))},7941:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var s=a(3827),n=a(4454),i=a.n(n),r=a(210),l=a(3444),o=a(8711),c=a(2888),d=a(4090);a(5805);var u=a(4576),p=a(8819),m=a(2505),h=a(6252);a(8832);var v=a(8839),x=a(9742);let b=["Update an Existing Session"],f={},S={"Select Session":{options:[{ID:0,Name:""}],value:0},Trainer:{options:[{ID:0,Name:""}],value:0},"Remote Trainer":{options:[],value:0},Room:{options:[],value:236},"Shadow Name":{value:""},"Teams Link":{value:""},"Session Date":{value:""},"Session Length":{value:60},"Select Students":{options:[],value:[]},"Has Shadow":{isChecked:!1},"Needs Reserved":{isChecked:!1},"Has Remote":{isChecked:!1},"Assets List":[],"Sessions List":[],"Trainers List":[],Submit:{Color:"primary",Text:"Submit"},Feedback:{color:"success",code:"",title:"",text:"",hidden:!0}},k=(e,t)=>{let a={...e};switch(t.type){case"update-Value":if(console.dir(t),a[t.label].value=t.value,"Select Course"==t.label){let s=t.value;try{a["Select Students"].options=e["Session List"].find(e=>e.ID==s).Learners}catch(e){a["Select Students"].options=[]}}return a;case"mark-Checked":return a[t.label].isChecked=t.value,a;case"load-SelectBox":{let e=t.data.Sessions;return a["Select Session"].options=e,a["Select Session"].value=e[0].ID,a}case"load-Response":{let e=t.data.data;return a["Session Date"].value=e.Ticket.DueDate,a.Room.options=e.Rooms,a.Room.value=e.Ticket.UserDefinedValues.find(e=>214===e.UserDefinedFieldID).Value,a.Trainer.options=e.Trainers,a.Trainer.value=e.Ticket.AssignedToUserID,a["Remote Trainer"].value=e.Ticket.UserDefinedValues.find(e=>314===e.UserDefinedFieldID).Value,a["Shadow Name"].value=e.Ticket.UserDefinedValues.find(e=>312===e.UserDefinedFieldID).Value,a["Teams Link"].value=e.Ticket.UserDefinedValues.find(e=>308===e.UserDefinedFieldID).Value,a}case"submit-Clicked":case"submit-Error":case"submit-Success":return a.Submit.Color=t.color,a.Submit.Text=t.text,a;case"load-Feedback":return a.Feedback.hidden=!1,a.Feedback.color=t.color,a.Feedback.code=t.code,a.Feedback.title=t.title,a.Feedback.text=t.text,a}};function g(){let[e,t]=(0,d.useReducer)(k,S);return(0,d.useEffect)(function(){(async()=>{let e=await (0,u.h)({method:"GET",endpoint:"Litmos/RetrieveUpcomingSessions"});e.didError||t({type:"load-SelectBox",data:e.data})})()},[]),f={MasterTicket:e["Select Session"].value,Room:e.Room.value,Shadow:e["Shadow Name"].value,Trainer:e.Trainer.value,Remote:e["Remote Trainer"].value,Link:e["Teams Link"].value,DueDate:e["Session Date"].value},(0,s.jsx)("main",{className:i().main,style:{backgroundImage:"url(".concat(p.Z.src,")")},children:(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(m.Z,{text:"Update Existing Session"}),(0,s.jsx)(x.Z,{text:b}),(0,s.jsx)(v.Z,{label:"Select Session",value:e["Select Session"].value,dispatch:t,endpoint:"Internal/LoadLiveTicketAndOptions",data:{Ticket:e["Select Session"].value},options:e["Select Session"].options}),(0,s.jsx)(c.Z,{options:e.Trainer.options,label:"Trainer",value:e.Trainer.value,dispatch:t}),(0,s.jsx)(l.Z,{label:"Shadow Name",type:"text",reminder:"",placeholder:"",value:e["Shadow Name"].value,dispatch:t,hidden:!1}),(0,s.jsx)(l.Z,{label:"Remote Trainer",type:"text",reminder:"",placeholder:"",value:e["Remote Trainer"].value,dispatch:t,hidden:!1}),(0,s.jsx)(l.Z,{label:"Session Date",type:"datetime-local",reminder:"",placeholder:"",value:e["Session Date"].value,dispatch:t}),(0,s.jsx)(c.Z,{options:e.Room.options,label:"Room",value:e.Room.value,dispatch:t}),(0,s.jsx)(l.Z,{label:"Teams Link",type:"text",reminder:"",placeholder:"",value:e["Teams Link"].value,dispatch:t}),(0,s.jsx)(o.Z,{method:"POST",endpoint:"Internal/UpdateExistingSession",dispatch:t,data:f,color:e.Submit.Color,text:e.Submit.Text}),(0,s.jsx)(h.Z,{color:e.Feedback.color,code:e.Feedback.code,title:e.Feedback.title,text:e.Feedback.text,hidden:e.Feedback.hidden})]})})}},5805:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var s=a(3827);a(6845);var n=a(210);function i(e){let{label:t,reminder:a,isChecked:i,dispatch:r,hidden:l=!1}=e;return(0,s.jsx)(n.Z.Group,{hidden:l,className:"mb-3 text-dark-emphasis",controlId:"form".concat(t),children:(0,s.jsx)(n.Z.Check,{type:"checkbox",label:a,checked:i,onChange:e=>r({type:"mark-Checked",label:t,value:!i})})})}},3444:function(e,t,a){"use strict";var s=a(3827);a(6845);var n=a(210);t.Z=function(e){let{label:t,type:a="email",reminder:i,placeholder:r,value:l,dispatch:o,hidden:c=!1}=e;return(0,s.jsxs)(n.Z.Group,{hidden:c,className:"mb-3",controlId:"form".concat(t),children:[(0,s.jsx)(n.Z.Label,{className:"text-dark-emphasis badge",children:t}),(0,s.jsx)(n.Z.Control,{type:a,placeholder:r,value:l,onChange:e=>o({type:"update-Value",value:e.target.value,label:t})}),(0,s.jsx)(n.Z.Text,{className:"text-danger badge",children:i})]})}},6252:function(e,t,a){"use strict";var s=a(3827);a(6845);var n=a(6459);t.Z=function(e){let{color:t,code:a,title:i,text:r,hidden:l=!0}=e;return(0,s.jsxs)(n.Z,{bg:t,hidden:l,children:[(0,s.jsx)(n.Z.Header,{className:"text-dark",children:a}),(0,s.jsxs)(n.Z.Body,{children:[(0,s.jsx)(n.Z.Title,{className:"text-dark",children:i}),(0,s.jsx)(n.Z.Text,{className:"text-dark",children:r})]})]})}},9742:function(e,t,a){"use strict";var s=a(3827);a(6845),t.Z=function(e){let{text:t}=e;return(0,s.jsx)("div",{children:t.map(e=>(0,s.jsx)("p",{children:e}))})}},2505:function(e,t,a){"use strict";var s=a(3827);a(6845);var n=a(210);t.Z=function(e){let{text:t}=e;return(0,s.jsx)(n.Z.Group,{className:"mb-1",children:(0,s.jsx)(n.Z.Label,{size:"lg",className:"text-light",children:(0,s.jsx)("h1",{className:"text-dark-emphasis",children:t})})})}},8832:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var s=a(3827),n=a(210);function i(e){let{options:t,label:a,value:i,dispatch:r}=e,l=t.map(e=>(0,s.jsx)("option",{value:e.ID,children:e.Name},e.ID));return(0,s.jsxs)(n.Z.Group,{children:[(0,s.jsx)(n.Z.Label,{className:"text-dark-emphasis badge",children:a}),(0,s.jsx)(n.Z.Select,{className:"mb-3","aria-label":a,multiple:!0,value:i,size:"md",onChange:e=>r({type:"update-Value",value:[...e.target.selectedOptions].map(e=>e.value),label:a}),children:l.map(e=>e)})]})}a(6845)},2888:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var s=a(3827),n=a(210);function i(e){let{options:t,label:a,value:i,dispatch:r,hidden:l=!1}=e;return(0,s.jsxs)(n.Z.Group,{hidden:l,children:[(0,s.jsx)(n.Z.Label,{className:"text-dark-emphasis badge",children:a}),(0,s.jsx)(n.Z.Select,{className:"mb-3","aria-label":a,value:i,onChange:e=>r({type:"update-Value",value:e.target.value,label:a}),children:t.map(e=>(0,s.jsx)("option",{value:e.ID,children:e.Name},e.ID))})]})}a(6845)},8839:function(e,t,a){"use strict";var s=a(3827);a(6845);var n=a(6879),i=a(210),r=a(9252),l=a(4576);t.Z=function(e){let{label:t,value:a,dispatch:o,hidden:c=!1,endpoint:d,data:u,options:p,text:m="Load"}=e;return(0,s.jsx)(i.Z.Group,{hidden:c,className:"mb-3",controlId:"form".concat(t),children:(0,s.jsxs)(r.Z,{className:"mb-3",children:[(0,s.jsx)(n.Z,{onClick:async()=>{o({type:"load-Response",data:await (0,l.h)({method:"POST",endpoint:d,data:u})})},variant:"secondary",id:"button-addon1",children:m}),(0,s.jsx)(i.Z.Select,{className:"","aria-label":t,value:a,onChange:e=>o({type:"update-Value",value:e.target.value,label:t}),children:p.map(e=>(0,s.jsx)("option",{value:e.ID,children:e.Name},e.ID))})]})})}},8711:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var s=a(3827),n=a(6879),i=a(4576);function r(e){let{dispatch:t,endpoint:a,data:r,color:l,text:o}=e;return(0,s.jsx)(n.Z,{className:"mb-3",variant:l,onClick:async()=>{let e=await (0,i.h)({method:"POST",endpoint:a,data:r});if(e.didError){console.log(e),t({type:"submit-Error",color:"danger",text:"error",errorText:""}),void 0!==e.data.dispatches&&e.data.dispatches.map(e=>t(e));return}t({type:"submit-Success",color:"success",text:"Success"}),void 0!==e.data.dispatches&&e.data.dispatches.map(e=>t(e))},children:o})}},4576:function(e,t,a){"use strict";a.d(t,{h:function(){return n}});var s=a(7908);async function n(e){let{method:t,endpoint:a,data:n}=e,i={method:t,url:"".concat("http://10.1.5.220:3180/").concat(a),data:void 0!==n?n:null},r={};r.didError=!1,console.dir(i);try{let e=await (0,s.Z)(i);r.data=e.data,r.didError=r.data.didError}catch(e){r.didError=!0,r.data={}}return r}},9252:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var s=a(6480),n=a.n(s),i=a(4090),r=a(2865),l=a(6183),o=a(1805),c=a(3827);let d=i.forwardRef((e,t)=>{let{className:a,bsPrefix:s,as:i="span",...l}=e;return s=(0,r.vE)(s,"input-group-text"),(0,c.jsx)(i,{ref:t,className:n()(a,s),...l})});d.displayName="InputGroupText";let u=i.forwardRef((e,t)=>{let{bsPrefix:a,size:s,hasValidation:l,className:d,as:u="div",...p}=e;a=(0,r.vE)(a,"input-group");let m=(0,i.useMemo)(()=>({}),[]);return(0,c.jsx)(o.Z.Provider,{value:m,children:(0,c.jsx)(u,{ref:t,...p,className:n()(d,a,s&&"".concat(a,"-").concat(s),l&&"has-validation")})})});u.displayName="InputGroup";var p=Object.assign(u,{Text:d,Radio:e=>(0,c.jsx)(d,{children:(0,c.jsx)(l.Z,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(d,{children:(0,c.jsx)(l.Z,{type:"checkbox",...e})})})},1805:function(e,t,a){"use strict";let s=a(4090).createContext(null);s.displayName="InputGroupContext",t.Z=s},6845:function(){},4454:function(e){e.exports={main:"page_main__nw1Wk",description:"page_description__lvaOp",code:"page_code__9AfUJ",grid:"page_grid__JZ9Cz",card:"page_card__Cf__u",center:"page_center__NcdcW",logo:"page_logo__ikIZE",content:"page_content___38fW",vercelLogo:"page_vercelLogo__YYFl1",rotate:"page_rotate__xIioM"}},8819:function(e,t){"use strict";t.Z={src:"/_next/static/media/Green.26974377.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAYElEQVR42g3EQQ6CQBBE0V81zSjG6P1PaNyYuDACDt3yFk+v73PP7ZfLOj7HQlCSA7AmsUmuyiQBlcMKxFk3K5qmprADFCNX4ebobe7tYhkoiPfyyBrhnrWf4jrH3QrgD9C3JBjW4v6FAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}}},function(e){e.O(0,[210,842,703,971,69,744],function(){return e(e.s=5269)}),_N_E=e.O()}]);
//# sourceMappingURL=page-c9ca5dd3b4ca5c36.js.map