import{r as n,W as _,j as e,Y as w,a as p}from"./app-BjRDVr7K.js";import{A as y}from"./AdminAuthenticated-DT-tO4x8.js";import{I as t}from"./InputError-DCTNKh6L.js";import{T as m}from"./TextInput-BvjCnLfT.js";import{I as l}from"./InputLabel-DJJunxRi.js";import{E}from"./index-ZeAMf2y1.js";import{P as h}from"./PermissionAllow-DNNBW3FI.js";import{D as k}from"./DynamicSelect-P0lXrg3V.js";import{F as P}from"./Form-DOISYDx6.js";import"./Dropdown-Bf0mxkws.js";import"./AdminHeader-CpXCJvEE.js";import"./Dropdown-COIvMzCO.js";import"./listen-KPXmgqRh.js";import"./useWindow-qoUGISga.js";import"./Anchor-BS2sRxwm.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DvLCd-L0.js";import"./BootstrapModalManager-C4N9f22L.js";import"./Fade-DO0vLiWL.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-VofWu8MJ.js";import"./ToastNotification-Bs7WZX92.js";import"./ReactToastify-BdR81KYl.js";import"./react-select.esm-DZftWkmQ.js";import"./Select-49a62830.esm-BSqm6uZ4.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-BQRk229a.js";import"./hoist-non-react-statics.cjs-DHDiPd3B.js";import"./ElementChildren-BzHK84fa.js";import"./Col-BCuTZvsx.js";function ne({auth:j,imageList:f}){const u=Object.entries(f).map(([s,i])=>({value:s,label:i})),[d,g]=n.useState(null),{data:r,setData:x,post:N,errors:a,reset:D}=_({title:"",status:1,seo_title:"",seo_keywords:"",seo_description:"",image:"",pageContent:""}),o=(s,i)=>{x(s,i)},c=n.useRef(null);n.useEffect(()=>{x("pageContent",d)},[d]);const b=async s=>{s.preventDefault(),N(route("admin.content-page.store"))},v=()=>{c.current.editor.exportHtml(s=>{const{design:i,html:C}=s;g({design:i,html:C})})};return e.jsxs(y,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Content Page/Create"}),children:[e.jsx(w,{title:"Content Page Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Content Page"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(p,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(h,{permission:"Content Pages Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(p,{href:route("admin.content-page.index"),children:"Content Page"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(h,{permission:"Content Page Create",message:!0,children:e.jsx("form",{onSubmit:b,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(m,{id:"title",type:"text",name:"title",className:"form-control",value:r.title,onChange:s=>o("title",s.target.value),autoComplete:"off"}),e.jsx(t,{message:a.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"Page Top Image"}),e.jsx(k,{onChange:s=>o("image",s),value:r.image,options:u,name:"image"}),e.jsx(t,{message:a.image,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Title"}),e.jsx(m,{id:"seo_title",type:"text",name:"seo_title",className:"form-control",value:r.seo_title,onChange:s=>o("seo_title",s.target.value),autoComplete:"off"}),e.jsx(t,{message:a.seo_title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Keywords"}),e.jsx(m,{id:"seo_keywords",type:"text",name:"seo_keywords",className:"form-control",value:r.seo_keywords,onChange:s=>o("seo_keywords",s.target.value),autoComplete:"off"}),e.jsx(t,{message:a.seo_keywords,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Description"}),e.jsx(m,{id:"seo_description",type:"text",name:"seo_description",className:"form-control",value:r.seo_description,onChange:s=>o("seo_description",s.target.value),autoComplete:"off"}),e.jsx(t,{message:a.seo_description,className:"mt-2 col-12"})]})})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-label",children:"Content"}),e.jsx(t,{message:a.pageContent,className:"mt-2 col-12"}),e.jsx(E,{ref:c,onLoad:()=>{c.current.editor.addEventListener("design:updated",v)}})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(P.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:r.status===1,onChange:s=>o("status",s.target.checked?1:0)}),e.jsx(t,{message:a.status,className:"mt-2 col-12"})]})})}),e.jsx("div",{className:"form-actions mt-3 text-center",children:e.jsx("button",{type:"submit",className:"btn btn-primary me-2",children:"Save"})})]})})})})})})})})]})})]})}export{ne as default};
