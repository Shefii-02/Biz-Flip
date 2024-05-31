import{r as n,W as w,j as e,Y as y,a as h}from"./app-DEFvwcdl.js";import{A as E}from"./AdminAuthenticated-BP6FwpnW.js";import{I as r}from"./InputError-Cv6Msw7B.js";import{T as m}from"./TextInput-DLZxt0iJ.js";import{I as o}from"./InputLabel-B-IZoxUr.js";import{R as j}from"./RadioButtonLabel-CfrYpfZA.js";import{E as D}from"./index-Dtq0rBKp.js";import{P as u}from"./PermissionAllow-B7s74L2E.js";import{D as k}from"./DynamicSelect-BL0lsCA6.js";import"./AdminSidebar-DBU5ZcO1.js";import"./useMergedRefs-B2_9xDH_.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-CN4koItJ.js";import"./react-select-creatable.esm-sWNgGilF.js";import"./Select-49a62830.esm-Dus8yFDX.js";import"./inherits-Da4sx5rs.js";import"./extends-Lqyj1dvn.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-DZwEriCY.js";function V({auth:f,imageList:p}){const g=Object.entries(p).map(([s,i])=>({value:s,label:i})),[d,N]=n.useState(null),{data:a,setData:x,post:v,errors:t,reset:P}=w({title:"",status:1,seo_title:"",seo_keywords:"",seo_description:"",image:"",pageContent:""}),l=(s,i)=>{x(s,i)},c=n.useRef(null);n.useEffect(()=>{x("pageContent",d)},[d]);const b=async s=>{s.preventDefault(),v(route("admin.content-page.store"))},C=()=>{c.current.editor.exportHtml(s=>{const{design:i,html:_}=s;N({design:i,html:_})})};return e.jsxs(E,{user:f.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Content Page/Create"}),children:[e.jsx(y,{title:"Content Page Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Content Page"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(h,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(u,{permission:"Content Pages Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(h,{href:route("admin.content-page.index"),children:"Content Page"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(u,{permission:"Content Page Create",message:!0,children:e.jsx("form",{onSubmit:b,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(m,{id:"title",type:"text",name:"title",className:"form-control",value:a.title,onChange:s=>l("title",s.target.value),autoComplete:"off"}),e.jsx(r,{message:t.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Image"}),e.jsx(k,{onChange:s=>l("image",s),value:a.image,options:g,name:"image"}),e.jsx(r,{message:t.image,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Title"}),e.jsx(m,{id:"seo_title",type:"text",name:"seo_title",className:"form-control",value:a.seo_title,onChange:s=>l("seo_title",s.target.value),autoComplete:"off"}),e.jsx(r,{message:t.seo_title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Keywords"}),e.jsx(m,{id:"seo_keywords",type:"text",name:"seo_keywords",className:"form-control",value:a.seo_keywords,onChange:s=>l("seo_keywords",s.target.value),autoComplete:"off"}),e.jsx(r,{message:t.seo_keywords,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Description"}),e.jsx(m,{id:"seo_description",type:"text",name:"seo_description",className:"form-control",value:a.seo_description,onChange:s=>l("seo_description",s.target.value),autoComplete:"off"}),e.jsx(r,{message:t.seo_description,className:"mt-2 col-12"})]})})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-label",children:"Content"}),e.jsx(r,{message:t.pageContent,className:"mt-2 col-12"}),e.jsx(D,{ref:c,onLoad:()=>{c.current.editor.addEventListener("design:updated",C)}})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(j,{name:"status",onChange:s=>l("status",s),value:"1",checked:a.status===1,label:"Published"}),e.jsx(j,{name:"status",onChange:s=>l("status",s),value:"0",checked:a.status===0,label:"Draft"})]}),e.jsx(r,{message:t.status,className:"mt-2 col-12"})]})})}),e.jsx("div",{className:"form-actions mt-3 text-center",children:e.jsx("button",{type:"submit",className:"btn btn-primary me-2",children:"Save"})})]})})})})})})})})]})})]})}export{V as default};
