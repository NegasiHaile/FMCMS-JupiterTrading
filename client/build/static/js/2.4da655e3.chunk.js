(this["webpackJsonpjupiter-trading-fmcms"]=this["webpackJsonpjupiter-trading-fmcms"]||[]).push([[2],{691:function(e,s){},696:function(e,s){},697:function(e,s){},698:function(e,s){},699:function(e,s){},700:function(e,s){},779:function(e,s,t){"use strict";t.r(s);var c=t(16),n=t.n(c),a=t(24),r=t(168),i=t(42),j=t(13),l=t(1),b=t(23),d=t.n(b),o=t(90),h=t(22),u=t(685),m=t(165),x=t.n(m),O=t(684),f=t(686),p=t(701),g=(t(702),t(703),t(11));s.default=function(){var e=Object(p.defaultLayoutPlugin)(),s=Object(l.useContext)(o.b),t=Object(h.h)(),c=Object(j.a)(s.UserAPI.User,1)[0],b=Object(j.a)(s.BusinessAPI.businesses,1)[0],m=Object(l.useState)(""),N=Object(j.a)(m,2),w=N[0],v=N[1],y=Object(j.a)(s.branchAPI.branchs,1)[0],I=Object(j.a)(s.UsersAPI.users,2),C=I[0],k=(I[1],Object(j.a)(s.SalesAPI.Sales,1)[0]),A=Object(l.useState)(k),B=Object(j.a)(A,2),S=B[0],R=B[1],T=Object(j.a)(s.MachineAPI.callback,2),_=T[0],P=T[1],M=Object(j.a)(s.BusinessAPI.callback,2),z=M[0],D=M[1],E=Object(j.a)(s.SalesAPI.callback,2),F=E[0],U=E[1],q=Object(j.a)(s.MachineAPI.machines,1)[0],Q=Object(l.useState)(""),J=Object(j.a)(Q,2),K=(J[0],J[1],Object(l.useState)(!1)),L=Object(j.a)(K,2),V=L[0],W=L[1],Y=Object(l.useState)({senderId:c._id,receiverId:"",subject:"Rejection",theMessage:""}),G=Object(j.a)(Y,2),H=G[0],X=G[1],Z=Object(l.useState)(!1),$=Object(j.a)(Z,2),ee=$[0],se=$[1],te=Object(l.useState)({branch:c.branch,businessId:t.id,machineId:"",status:""}),ce=Object(j.a)(te,2),ne=ce[0],ae=ce[1];Object(l.useEffect)((function(){if(t.id){var e=b.filter((function(e){return e._id===t.id}));v(e[0]),X({senderId:c._id,receiverId:e[0].ownerID,subject:"Rejection",theMessage:""});var s=k.filter((function(e){return e.businessId===t.id}));R(s)}else v(""),R("")}),[b,k,t.id]);var re=function(e,s){x.a.fire({position:"center",background:"#EBEDEF",icon:e,text:s,confirmButtonColor:"#1E263C",showConfirmButton:!1})},ie=function(){var e=Object(a.a)(n.a.mark((function e(s){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,d.a.put("/business/reject/".concat(w._id),Object(i.a)({},H));case 4:t=e.sent,D(!z),W(!V),re("success",t.data.msg),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),re("error",e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(s){return e.apply(this,arguments)}}(),je=function(){var e=Object(a.a)(n.a.mark((function e(s){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,d.a.post("/machine/distribute",Object(i.a)({},ne));case 4:t=e.sent,P(!_),D(!z),U(!F),re("success",t.data.msg),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),re("error",e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(s){return e.apply(this,arguments)}}();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(O.h,{children:[Object(g.jsxs)(O.i,{children:[Object(g.jsxs)(O.T,{className:"mb-2",children:[Object(g.jsx)(O.l,{sm:"12",md:"3",className:"d-flex justify-content-center",children:Object(g.jsx)(O.C,{className:"shadow-sm ",height:"150",src:"/Others/bsnsIcon1.png",alt:"Business Img"})}),Object(g.jsxs)(O.l,{sm:"6",md:"6",className:"mt-1",children:[Object(g.jsx)("h6",{}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Businss Name:"})," ",w.businessName]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Company Name:"})," ",w.companyName]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"TIN:"})," ",w.TIN]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"VAT:"})," ",w.VAT]})]}),Object(g.jsxs)(O.l,{sm:"6",md:"3",className:"mt-1",children:[Object(g.jsx)("h6",{}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Machine:"})," ",w.machine]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Credentials:"})," ",w.credentials]}),"branch-admin"===c.userRole&&Object(g.jsxs)(g.Fragment,{children:[" ","Pending"===w.credentials&&Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsxs)(O.e,{color:"dark",size:"sm",className:"mr-1 w-50",onClick:function(){!function(e){try{x.a.fire({title:"Accepte?",text:"Is the overall document is valid and you can assign it a machine!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#1E263C",cancelButtonColor:"#d33",confirmButtonText:"Yes, Accepte it!"}).then(function(){var s=Object(a.a)(n.a.mark((function s(t){var c;return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!t.isConfirmed){s.next=6;break}return s.next=3,d.a.put("/business/accepte/".concat(e));case 3:c=s.sent,D(!z),x.a.fire("Accepted!",c.data.msg,"success");case 6:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}())}catch(s){re("error",s.response.data.msg)}}(w._id)},children:[Object(g.jsx)(u.a,{name:"cil-check-circle"})," Accept"]}),Object(g.jsxs)(O.e,{onClick:function(){W(!V)},color:"danger",size:"sm",className:"ml-1 w-50",children:[Object(g.jsx)(u.a,{name:"cil-x"})," Reject"]})]})]}),"sales"===c.userRole&&"Accepted"===w.credentials&&"unassigned"===w.machine&&Object(g.jsx)(O.e,{onClick:function(){se(!ee)},color:"dark",size:"sm",className:"w-100",children:"Assigne Machine"})]})]}),Object(g.jsxs)(O.gb,{children:[Object(g.jsxs)(O.P,{variant:"tabs",children:[Object(g.jsx)(O.Q,{children:Object(g.jsxs)(O.R,{children:[Object(g.jsx)(u.a,{name:"cil-location-pin"})," Address"]})}),Object(g.jsx)(O.Q,{children:Object(g.jsxs)(O.R,{children:[Object(g.jsx)(u.a,{name:"cil-spreadsheet"})," Document"]})}),Object(g.jsx)(O.Q,{children:Object(g.jsxs)(O.R,{children:[Object(g.jsx)(u.a,{name:"cil-options"})," References"]})}),Object(g.jsx)(O.Q,{children:Object(g.jsxs)(O.R,{children:[Object(g.jsx)(u.a,{name:"cil-print"})," Machines"]})})]}),Object(g.jsxs)(O.eb,{className:"my-3",children:[Object(g.jsx)(O.fb,{children:Object(g.jsxs)(O.T,{children:[Object(g.jsxs)(O.l,{sm:"12",md:"6",lg:"5",className:"mt-1",children:[Object(g.jsx)("h6",{children:"Business Address"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"City:"})," ",w.city]}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Sub City:"})," ",w.subCity]}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Kebele:"})," ",w.kebele]}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Woreda:"})," ",w.woreda]}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Building Name:"})," ",w.buildingName]}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Office Number:"})," ",w.officeNumber]})]}),Object(g.jsxs)(O.l,{sm:"6",md:"6",lg:"5",className:"mt-1",children:[Object(g.jsx)("h6",{children:"Business Contacts"}),Object(g.jsx)("hr",{})," ",Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Telephone:"}),w.telephone]}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Email:"})," ",w.email]}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Fax:"})," ",w.fax]})]})]})}),Object(g.jsx)(O.fb,{children:Object(g.jsx)("div",{className:"pdf-container",children:Object(g.jsx)(f.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js",children:Object(g.jsx)(f.Viewer,{fileUrl:w.TL_Image,plugins:[e]})})})}),Object(g.jsx)(O.fb,{children:Object(g.jsxs)(O.T,{children:[Object(g.jsxs)(O.l,{sm:"12",md:"4",lg:"4",className:"mt-1",children:[Object(g.jsx)("h6",{className:"text-muted",children:"Business Owner"}),Object(g.jsx)("hr",{}),C.filter((function(e){return e._id===w.ownerID})).map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Owner name:"})," ",Object(g.jsxs)(O.J,{to:"/client/detail/".concat(e._id),children:[e.fName," ",e.mName]})]}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Phone:"})," ",e.phoneNumber]}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"email:"})," ",e.email]}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Account Status:"})," ",e.status]})]},e._id)}))]}),Object(g.jsxs)(O.l,{sm:"12",md:"4",lg:"4",className:"mt-1",children:[Object(g.jsx)("h6",{className:"text-muted",children:"Technician Detail"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Technician:"})," ",w.sw_Tech]})]}),Object(g.jsxs)(O.l,{sm:"12",md:"4",lg:"4",className:"mt-1",children:[Object(g.jsx)("h6",{className:"text-muted",children:"Branch"}),Object(g.jsx)("hr",{}),y.filter((function(e){return e._id===w.branch})).map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Branch Name:"})," ",e.branchName]}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"City:"})," ",e.city]}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Telephone:"})," ",e.telephone]}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Email:"})," ",e.email]})]},e._id)}))]})]})}),Object(g.jsx)(O.fb,{children:Object(g.jsx)(O.T,{children:Object(g.jsxs)(O.l,{sm:"12",md:"6",lg:"6",className:"mt-1",children:[Object(g.jsx)("h6",{className:"text-muted",children:"Machine Detail"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("span",{className:"d-flex justify-content-between",children:[Object(g.jsx)("strong",{children:"Machine:"})," ",w.machine]}),0!==S.length&&Object(g.jsxs)(g.Fragment,{children:[S.map((function(e){return Object(g.jsxs)("div",{children:["assigned"===w.machine&&("client"===c.userRole||"sales"===c.userRole)&&Object(g.jsx)(O.e,{variant:"ghost",color:"danger",size:"sm",className:"w-100 mt-3",to:"/business/return-machine/".concat(e.saleId),children:"Request to return this machine"}),"returning"===w.machine&&"branch-admin"===c.userRole&&Object(g.jsx)(O.e,{variant:"ghost",color:"success",size:"sm",className:"w-100 mt-3",children:"Confirm Return"})]},e.saleId)}))," "]})]})})})]})]})]}),Object(g.jsx)(O.K,{show:V,onClose:function(){return W(!V)},children:Object(g.jsx)(O.L,{children:Object(g.jsxs)(O.v,{onSubmit:ie,children:[Object(g.jsxs)(O.l,{children:[Object(g.jsx)(O.I,{htmlFor:"textarea-input",children:"Your message"}),Object(g.jsx)(O.hb,{id:"theMessage",name:"theMessage",onChange:function(e){var s=e.target,t=s.name,c=s.value;X(Object(i.a)(Object(i.a)({},H),{},Object(r.a)({},t,c)))},rows:"4",placeholder:"Write something why you are rejecting this request...",required:!0})]}),Object(g.jsxs)(O.l,{className:"d-flex justify-content-between pt-2",children:[Object(g.jsxs)(O.e,{type:"submit",size:"sm",variant:"outline",color:"dark",children:[Object(g.jsx)(u.a,{name:"cil-check-circle"})," confirm Rejection"]}),Object(g.jsxs)(O.e,{size:"sm",variant:"outline",color:"danger",onClick:function(){return W(!V)},children:[Object(g.jsx)(u.a,{name:"cil-x"})," Close"]})]})]})})}),Object(g.jsx)(O.K,{show:ee,onClose:function(){return se(!ee)},children:Object(g.jsxs)(O.v,{onSubmit:je,className:"m-2",children:[Object(g.jsx)(O.l,{children:Object(g.jsxs)(O.w,{children:[Object(g.jsx)(O.I,{children:"Machine you want to assigne to this business"}),Object(g.jsxs)(O.U,{"aria-label":"Default select example",id:"machineId",value:ne.machineId,onChange:function(e){ae(Object(i.a)(Object(i.a)({},ne),{},{machineId:e.target.value}))},required:!0,children:[Object(g.jsx)("option",{value:"",children:"Select machine ..."}),q.filter((function(e){return("unsold"===e.salesStatus||"returned"===e.salesStatus)&&e.branch==c.branch})).map((function(e){return Object(g.jsxs)("option",{value:e._id,children:["SER NO: ",e.serialNumber," - Brand:"," ",e.brand]},e._id)}))]})]})}),Object(g.jsxs)(O.l,{className:"d-flex justify-content-between mt-1",children:[Object(g.jsxs)(O.e,{type:"submit",size:"sm",variant:"outline",color:"dark",children:[Object(g.jsx)(u.a,{name:"cil-check-circle"})," Confirm"]}),Object(g.jsxs)(O.e,{size:"sm",variant:"outline",color:"danger",onClick:function(){return se(!ee)},children:[Object(g.jsx)(u.a,{name:"cil-x"})," Close"]})]})]})})]})})}}}]);
//# sourceMappingURL=2.4da655e3.chunk.js.map