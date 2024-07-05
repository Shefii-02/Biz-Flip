import{W as f,j as e,Y as j,a as c}from"./app-bT85omD1.js";import{A as N}from"./AdminAuthenticated-Bo-fLewR.js";import{I as m}from"./InputError-D2W3D-re.js";import{T as o}from"./TextInput-DOhYVOSk.js";import{I as t}from"./InputLabel-CzCBuqqk.js";import{D as b}from"./DynamicMultiSelect-BpnSdIm8.js";import{F as v}from"./Form-Cl6Es-s9.js";import"./Dropdown-DSJyYO_-.js";import"./AdminHeader-ItZhh-3p.js";import"./PermissionAllow-QbieIjnx.js";import"./Fade-B1qT5flw.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-Cdtt5v2M.js";import"./index-Chjiymov.js";import"./setPrototypeOf-DgZC2w_0.js";import"./BootstrapModalManager-BNjE6Alw.js";import"./Anchor-CZqgEY3g.js";import"./extends-CCbyfPlC.js";import"./index-BUPCNXUR.js";import"./ToastNotification-BK7rUfiZ.js";import"./react-select-creatable.esm-B5r7FAnn.js";import"./useStateManager-7e1e8489.esm-Di-qwGZa.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./emotion-react.browser.esm-JdCGqlUe.js";import"./hoist-non-react-statics.cjs-CHsilqo4.js";import"./ElementChildren-wXnusVuh.js";import"./Col-CpXExGw7.js";function Z({subscriber_item:a,queryParams:g=null,auth:n}){const{data:l,setData:d,post:u,errors:r,reset:_}=f({firstname:a.firstname||"",lastname:a.lastname||"",email_id:a.email_id||"",type_of_needed:a.type_of_needed||[],status:a.status||1,_method:"PUT"}),x=[{value:"Business",label:"Business"},{value:"Franchise",label:"Franchise"},{value:"Commrecial Real Estate",label:"Commrecial Real Estate"},{value:"Preconstruction",label:"Preconstruction"},{value:"Business Services",label:"Business Services"}],h=s=>{s.preventDefault(),u(route("admin.subscribers.update",a.id))},i=(s,p)=>{d(s,p)};return e.jsxs(N,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"News Subscriber/Edit"}),children:[e.jsx(j,{title:"News Subscriber Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit News Subscriber"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(c,{href:route("admin.subscribers.index"),children:"News Subscriber"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(PermissionAllow,{permission:"Subscriber Edit",message:"true",children:e.jsxs("form",{onSubmit:h,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx(o,{id:"firstname",type:"text",name:"firstname",className:"form-control",value:l.firstname,onChange:s=>i("firstname",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.firstname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Last Name"}),e.jsx(o,{id:"lastname",type:"text",name:"lastname",className:"form-control",value:l.lastname,onChange:s=>i("lastname",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.lastname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Id"}),e.jsx(o,{id:"email_id",type:"email",name:"email_id",className:"form-control",value:l.email_id,onChange:s=>i("email_id",s.target.value),autoComplete:"off"}),e.jsx(m,{message:r.email_id,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Type of Needed"}),e.jsx(b,{onChange:s=>i("type_of_needed",s),value:l.type_of_needed,options:x,name:"type_of_needed"}),e.jsx(m,{message:r.type_of_needed,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(v.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:l.status!==1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(m,{message:r.status,className:"mt-2 col-12"})]})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{Z as default};
