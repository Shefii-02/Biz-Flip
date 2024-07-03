import{r as E,j as e,W as D,Y as I,a as T}from"./app-mbB9cBIL.js";import{A as K}from"./AdminAuthenticated-xPnj3WYW.js";import{I as n}from"./InputError-DVl4KS8v.js";import{T as b}from"./TextInput-Bq3i4Xj1.js";import{I as o}from"./InputLabel-D6bz93vo.js";import{D as A}from"./DynamicSelect-BNffP33w.js";import{C as k}from"./Col-B1ilUJq7.js";import{N as r}from"./TabPane-CT36erB8.js";import{u as B,a as L,b as O,c as P}from"./listen-uU4Ht3yp.js";import{T as h}from"./Tab-CegrjN32.js";import"./Dropdown-CSn9d9O9.js";import"./AdminSidebar-B-iBc40u.js";import"./useWindow-Bp4PdcAQ.js";import"./Anchor-BXA3Nsnm.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-VSGo5GbR.js";import"./PermissionAllow-DCpYUVTp.js";import"./ToastNotification-YHLlhGoM.js";import"./react-select-creatable.esm-yHvm6YSR.js";import"./useStateManager-7e1e8489.esm-CqsfXXsP.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-CFbDu7UJ.js";import"./hoist-non-react-statics.cjs-_X6JJ_ny.js";import"./Fade-DJ5eLw5R.js";import"./inheritsLoose-1HkgTRWY.js";import"./TransitionGroupContext-DXSP24mZ.js";import"./index-DNemVMA8.js";const w=E.forwardRef(({bsPrefix:a,className:N,as:y="div",...d},g)=>{const u=B(a,"row"),l=L(),j=O(),x=`${u}-cols`,i=[];return l.forEach(f=>{const t=d[f];delete d[f];let m;t!=null&&typeof t=="object"?{cols:m}=t:m=t;const v=f!==j?`-${f}`:"";m!=null&&i.push(`${x}${v}-${m}`)}),e.jsx(y,{ref:g,...d,className:P(N,u,...i)})});w.displayName="Row";function he({company_settings:a,socialLinks:N,queryParams:y=null,auth:d,success:g=null,error:u=null}){const{data:l,setData:j,post:x,errors:i,reset:f}=D({socialmedia_links:N||[{key:"facebook",label:"Facebook",url:""},{key:"twitter",label:"Twitter",url:""},{key:"instagram",label:"Instagram",url:""},{key:"linkedin",label:"Linkedin",url:""},{key:"youtube",label:"Youtube",url:""}],seo_title:a.seo_title||"",seo_description:a.seo_description||"",seo_keywords:a.seo_keywords||"",email_config_api_url:a.email_config_api_url||"",email_config_api_key:a.email_config_api_key||"",email_config_api_method:a.email_config_api_method||""}),t=s=>{s.preventDefault(),x(route("admin.company-settings.email-config",a.id))},m=s=>{s.preventDefault(),x(route("admin.company-settings.social-link",a.id))},v=s=>{s.preventDefault(),x(route("admin.company-settings.seo",a.id))},C=[{value:"GET",label:"GET"},{value:"POST",label:"POST"}],c=(s,p)=>{j(s,p)},S=(s,p)=>{const _=[...l.socialmedia_links];_[s].url=p,j("socialmedia_links",_)};return e.jsxs(K,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Company Settings"}),success:g,error:u,children:[e.jsx(I,{title:"Company Settings"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Company Settings"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(T,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Company Settings"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(h.Container,{id:"left-tabs-example",defaultActiveKey:"first",children:e.jsxs(w,{children:[e.jsx(k,{sm:2,children:e.jsxs(r,{variant:"pills",className:"flex-column",children:[e.jsx(r.Item,{children:e.jsx(r.Link,{eventKey:"first",children:"Email Configuration"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{eventKey:"second",children:"Social Media"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{eventKey:"three",children:"SEO Details"})})]})}),e.jsx(k,{sm:10,children:e.jsxs(h.Content,{children:[e.jsx(h.Pane,{eventKey:"first",children:e.jsx("form",{onSubmit:t,children:e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row1",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Configuration Api Url"}),e.jsx(b,{id:"email_config_api_url",type:"text",name:"email_config_api_url",className:"form-control",value:l.email_config_api_url,onChange:s=>c("email_config_api_url",s.target.value),autoComplete:"off"}),e.jsx(n,{message:i.email_config_api_url,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Configuration Api Key"}),e.jsx(b,{id:"email_config_api_key",type:"text",name:"email_config_api_key",className:"form-control",value:l.email_config_api_key,onChange:s=>c("email_config_api_key",s.target.value),autoComplete:"off"}),e.jsx(n,{message:i.email_config_api_key,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Configuration Api Method"}),e.jsx(A,{onChange:s=>c("email_config_api_method",s),value:l.email_config_api_method,options:C,name:"email_config_api_method"}),e.jsx(n,{message:i.email_config_api_method,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 text-center",children:e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-sm btn-neutral",children:[e.jsx("i",{className:"bi bi-check"})," Update Data"]})})})]})})})})})}),e.jsx(h.Pane,{eventKey:"second",children:e.jsx("form",{onSubmit:m,children:e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[l.socialmedia_links.map((s,p)=>e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:s.label}),e.jsx("div",{children:e.jsx("input",{value:s.url,onChange:_=>S(p,_.target.value),type:"text",className:"form-control"})})]})},s.key)),e.jsx("div",{className:"col-md-12 mb-3 text-center",children:e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-sm btn-neutral",children:[e.jsx("i",{className:"bi bi-check"})," Update Data"]})})})]})})})}),e.jsx(h.Pane,{eventKey:"three",children:e.jsx("form",{onSubmit:v,children:e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-lg-12",children:[e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Title"}),e.jsx(b,{id:"seo_title",type:"text",name:"seo_title",className:"form-control",value:l.seo_title,onChange:s=>c("seo_title",s.target.value),autoComplete:"off"}),e.jsx(n,{message:i.seo_title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Description"}),e.jsx("textarea",{id:"seo_description",type:"text",name:"seo_description",rows:5,className:"form-control",value:l.seo_description,onChange:s=>c("seo_description",s.target.value),autoComplete:"off"}),e.jsx(n,{message:i.seo_description,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Keywords"}),e.jsx(b,{id:"seo_keywords",type:"text",name:"seo_keywords",className:"form-control",value:l.seo_keywords,onChange:s=>c("seo_keywords",s.target.value),autoComplete:"off"}),e.jsx(n,{message:i.seo_keywords,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 text-center",children:e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-sm btn-neutral",children:[e.jsx("i",{className:"bi bi-check"})," Update Data"]})})})]})})})})})]})})]})})})})})})})]})})]})}export{he as default};
