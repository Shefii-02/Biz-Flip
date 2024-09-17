import{W as N,r as t,j as e,Y as f,a as c}from"./app-BSaojbtm.js";import{A as v}from"./AdminAuthenticated-CHR6UyJT.js";import{I as m}from"./InputError-DObtdChr.js";import{T as o}from"./TextInput-pVxFRAad.js";import{I as d}from"./InputLabel-B2n_5c1_.js";import"./SelectOption-_MBfWOQU.js";import"./DynamicSelect-Bl9PipOj.js";import{F as b}from"./Form-NxD53lUI.js";import{P as g}from"./PermissionAllow-B41Jt6_p.js";import"./Dropdown-G1a4HqaD.js";import"./AdminHeader-Ca0U8u3o.js";import"./Dropdown-C4uOLq_Q.js";import"./listen-CejIQfaa.js";import"./useWindow-Co8DwMws.js";import"./Anchor-CXn0Lz-u.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CXZWBtcP.js";import"./BootstrapModalManager-yL3mrz2B.js";import"./Fade-D65TqjLf.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-eDr43yLW.js";import"./ToastNotification-BzR31p_Z.js";import"./ReactToastify-Balu2BoV.js";import"./react-select.esm-VkEWP3gr.js";import"./Select-49a62830.esm-BbctSirk.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-DLcLLPdI.js";import"./hoist-non-react-statics.cjs-BcdvTPyb.js";import"./ElementChildren-DJdU-U87.js";import"./Col-C0WXpdnB.js";function me({province_item:s,queryParams:w=null,auth:n,countries:P}){const{data:r,setData:x,post:h,errors:i,reset:y}=N({image:"",name:s.name||"",code:s.code||"",status:s.status=1,position:s.position||"",_method:"PUT",remove_image:!1,country:s.country_name}),[E,p]=t.useState("");t.useEffect(()=>{s.image&&p(s.image)},[s.image]);const u=a=>{a.preventDefault(),h(route("admin.province.update",s.id))},l=(a,j)=>{x(a,j)};return e.jsxs(v,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Province/Edit"}),children:[e.jsx(f,{title:"Province Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Province"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(c,{href:route("admin.province.index"),children:"Province"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(g,{permission:"Province Edit",message:"true",children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row2",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(o,{id:"name",type:"text",name:"name",className:"form-control",value:r.name,onChange:a=>l("name",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Code"}),e.jsx(o,{id:"province-code",type:"text",name:"code",className:"form-control",value:r.code,onChange:a=>l("code",a.target.value),autoComplete:"off"}),e.jsx(m,{message:i.code,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(b.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:r.status===1,onChange:a=>l("status",a.target.checked?1:0)}),e.jsx(m,{message:i.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12"})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{me as default};