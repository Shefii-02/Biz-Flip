import{r as n,W as w,j as e,Y as y,a as h}from"./app-DOZcIWVh.js";import{A as E}from"./AdminAuthenticated-CBQJ-3I7.js";import{I as r}from"./InputError-COM9Dc_m.js";import{T as m}from"./TextInput-5vkQ05jO.js";import{I as o}from"./InputLabel-DDRTzj_T.js";import{R as p}from"./RadioButtonLabel-ClqdM3l2.js";import{E as D}from"./index-DyAYyyXY.js";import{P as j}from"./PermissionAllow-DPIa7gDb.js";import{D as P}from"./DynamicSelect-GIdpZsmi.js";import"./Dropdown-BYdKb6tQ.js";import"./AdminSidebar-BGLDizeY.js";import"./listen-BbKSz9Gy.js";import"./useWindow-DhqI_zMA.js";import"./Anchor-DRVRSgLP.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BgJ3aozw.js";import"./ToastNotification-DWZrIRJL.js";import"./react-select-creatable.esm-TZrN6mWC.js";import"./useStateManager-7e1e8489.esm-BdAqZFbm.js";import"./inherits-31b1Cyi6.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-JnW2krE5.js";function $({auth:u,imageList:f}){const g=Object.entries(f).map(([s,i])=>({value:s,label:i})),[d,N]=n.useState(null),{data:a,setData:x,post:v,errors:t,reset:k}=w({title:"",status:1,seo_title:"",seo_keywords:"",seo_description:"",image:"",pageContent:""}),l=(s,i)=>{x(s,i)},c=n.useRef(null);n.useEffect(()=>{x("pageContent",d)},[d]);const b=async s=>{s.preventDefault(),v(route("admin.content-page.store"))},C=()=>{c.current.editor.exportHtml(s=>{const{design:i,html:_}=s;N({design:i,html:_})})};return e.jsxs(E,{user:u.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Content Page/Create"}),children:[e.jsx(y,{title:"Content Page Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Content Page"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(h,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(j,{permission:"Content Pages Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(h,{href:route("admin.content-page.index"),children:"Content Page"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(j,{permission:"Content Page Create",message:!0,children:e.jsx("form",{onSubmit:b,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(m,{id:"title",type:"text",name:"title",className:"form-control",value:a.title,onChange:s=>l("title",s.target.value),autoComplete:"off"}),e.jsx(r,{message:t.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Page Top Image"}),e.jsx(P,{onChange:s=>l("image",s),value:a.image,options:g,name:"image"}),e.jsx(r,{message:t.image,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Title"}),e.jsx(m,{id:"seo_title",type:"text",name:"seo_title",className:"form-control",value:a.seo_title,onChange:s=>l("seo_title",s.target.value),autoComplete:"off"}),e.jsx(r,{message:t.seo_title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Keywords"}),e.jsx(m,{id:"seo_keywords",type:"text",name:"seo_keywords",className:"form-control",value:a.seo_keywords,onChange:s=>l("seo_keywords",s.target.value),autoComplete:"off"}),e.jsx(r,{message:t.seo_keywords,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Description"}),e.jsx(m,{id:"seo_description",type:"text",name:"seo_description",className:"form-control",value:a.seo_description,onChange:s=>l("seo_description",s.target.value),autoComplete:"off"}),e.jsx(r,{message:t.seo_description,className:"mt-2 col-12"})]})})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-label",children:"Content"}),e.jsx(r,{message:t.pageContent,className:"mt-2 col-12"}),e.jsx(D,{ref:c,onLoad:()=>{c.current.editor.addEventListener("design:updated",C)}})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(p,{name:"status",onChange:s=>l("status",s),value:"1",checked:a.status===1,label:"Published"}),e.jsx(p,{name:"status",onChange:s=>l("status",s),value:"0",checked:a.status===0,label:"Draft"})]}),e.jsx(r,{message:t.status,className:"mt-2 col-12"})]})})}),e.jsx("div",{className:"form-actions mt-3 text-center",children:e.jsx("button",{type:"submit",className:"btn btn-primary me-2",children:"Save"})})]})})})})})})})})]})})]})}export{$ as default};
