import{W as f,j as e,Y as j,a as c}from"./app-BSaojbtm.js";import{A as N}from"./AdminAuthenticated-CHR6UyJT.js";import{I as m}from"./InputError-DObtdChr.js";import{T as o}from"./TextInput-pVxFRAad.js";import{I as t}from"./InputLabel-B2n_5c1_.js";import{D as b}from"./DynamicMultiSelect-C4UrfsSk.js";import{F as v}from"./Form-NxD53lUI.js";import{P as g}from"./PermissionAllow-B41Jt6_p.js";import"./Dropdown-G1a4HqaD.js";import"./AdminHeader-Ca0U8u3o.js";import"./Dropdown-C4uOLq_Q.js";import"./listen-CejIQfaa.js";import"./useWindow-Co8DwMws.js";import"./Anchor-CXn0Lz-u.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CXZWBtcP.js";import"./BootstrapModalManager-yL3mrz2B.js";import"./Fade-D65TqjLf.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-eDr43yLW.js";import"./ToastNotification-BzR31p_Z.js";import"./ReactToastify-Balu2BoV.js";import"./Select-49a62830.esm-BbctSirk.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-DLcLLPdI.js";import"./hoist-non-react-statics.cjs-BcdvTPyb.js";import"./ElementChildren-DJdU-U87.js";import"./Col-C0WXpdnB.js";function ae({subscriber_item:a,queryParams:_=null,auth:n}){const{data:l,setData:d,post:u,errors:r,reset:y}=f({firstname:a.firstname||"",lastname:a.lastname||"",email_id:a.email_id||"",type_of_needed:a.type_of_needed||[],status:a.status||1,_method:"PUT"}),p=[{value:"Business",label:"Business"},{value:"Franchise",label:"Franchise"},{value:"Commrecial Real Estate",label:"Commrecial Real Estate"},{value:"Preconstruction",label:"Preconstruction"},{value:"Business Services",label:"Business Services"}],x=s=>{s.preventDefault(),u(route("admin.subscribers.update",a.id))},i=(s,h)=>{d(s,h)};return e.jsxs(N,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"News Subscriber/Edit"}),children:[e.jsx(j,{title:"News Subscriber Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit News Subscriber"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(c,{href:route("admin.subscribers.index"),children:"News Subscriber"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(g,{permission:"Subscriber Edit",message:"true",children:e.jsxs("form",{onSubmit:x,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx(o,{id:"firstname",type:"text",name:"firstname",className:"form-control",value:l.firstname,onChange:s=>i("firstname",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.firstname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Last Name"}),e.jsx(o,{id:"lastname",type:"text",name:"lastname",className:"form-control",value:l.lastname,onChange:s=>i("lastname",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.lastname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Id"}),e.jsx(o,{id:"email_id",type:"email",name:"email_id",className:"form-control",value:l.email_id,onChange:s=>i("email_id",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.email_id,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Type of Needed"}),e.jsx(b,{onChange:s=>i("type_of_needed",s),value:l.type_of_needed,options:p,name:"type_of_needed"}),e.jsx(m,{message:r.type_of_needed,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(v.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:l.status!==1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(m,{message:r.status,className:"mt-2 col-12"})]})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{ae as default};