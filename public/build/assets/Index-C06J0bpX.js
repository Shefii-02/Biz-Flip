import{r as E,j as e,W as D,Y as I,a as T}from"./app-BjRDVr7K.js";import{A as K}from"./AdminAuthenticated-DT-tO4x8.js";import{I as n}from"./InputError-DCTNKh6L.js";import{T as N}from"./TextInput-BvjCnLfT.js";import{I as o}from"./InputLabel-DJJunxRi.js";import{D as A}from"./DynamicSelect-P0lXrg3V.js";import{C as k}from"./Col-BCuTZvsx.js";import{N as r}from"./TabPane-Cc0edB8j.js";import{u as B,a as O,b as P,c as L}from"./listen-KPXmgqRh.js";import{T as u}from"./Tab-Bt9G8DTn.js";import"./Dropdown-Bf0mxkws.js";import"./AdminHeader-CpXCJvEE.js";import"./PermissionAllow-DNNBW3FI.js";import"./Dropdown-COIvMzCO.js";import"./useWindow-qoUGISga.js";import"./Anchor-BS2sRxwm.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DvLCd-L0.js";import"./BootstrapModalManager-C4N9f22L.js";import"./Fade-DO0vLiWL.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-VofWu8MJ.js";import"./ToastNotification-Bs7WZX92.js";import"./ReactToastify-BdR81KYl.js";import"./react-select.esm-DZftWkmQ.js";import"./Select-49a62830.esm-BSqm6uZ4.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-BQRk229a.js";import"./hoist-non-react-statics.cjs-DHDiPd3B.js";const w=E.forwardRef(({bsPrefix:a,className:d,as:y="div",...x},g)=>{const j=B(a,"row"),l=O(),_=P(),f=`${j}-cols`,i=[];return l.forEach(p=>{const t=x[p];delete x[p];let c;t!=null&&typeof t=="object"?{cols:c}=t:c=t;const v=p!==_?`-${p}`:"";c!=null&&i.push(`${f}${v}-${c}`)}),e.jsx(y,{ref:g,...x,className:L(d,j,...i)})});w.displayName="Row";function je({company_settings:a,socialLinks:d,queryParams:y=null,auth:x,success:g=null,error:j=null}){const{data:l,setData:_,post:f,errors:i,reset:p}=D({socialmedia_links:d.length>0?d:[{key:"facebook",label:"Facebook",url:""},{key:"twitter",label:"Twitter",url:""},{key:"instagram",label:"Instagram",url:""},{key:"linkedin",label:"Linkedin",url:""},{key:"youtube",label:"Youtube",url:""}],seo_title:a.seo_title||"",seo_description:a.seo_description||"",seo_keywords:a.seo_keywords||"",email_config_api_url:a.email_config_api_url||"",email_config_api_key:a.email_config_api_key||"",email_config_api_method:a.email_config_api_method||""});console.log(d);const t=s=>{s.preventDefault(),f(route("admin.company-settings.email-config",a.id))},c=s=>{s.preventDefault(),f(route("admin.company-settings.social-link",a.id))},v=s=>{s.preventDefault(),f(route("admin.company-settings.seo",a.id))},C=[{value:"GET",label:"GET"},{value:"POST",label:"POST"}],m=(s,h)=>{_(s,h)},S=(s,h)=>{const b=[...l.socialmedia_links];b[s].url=h,_("socialmedia_links",b)};return e.jsxs(K,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Company Settings"}),success:g,error:j,children:[e.jsx(I,{title:"Company Settings"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Company Settings"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(T,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Company Settings"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(u.Container,{id:"left-tabs-example",defaultActiveKey:"first",children:e.jsxs(w,{children:[e.jsx(k,{sm:2,children:e.jsxs(r,{variant:"pills",className:"flex-column",children:[e.jsx(r.Item,{children:e.jsx(r.Link,{eventKey:"first",children:"Email Configuration"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{eventKey:"second",children:"Social Media"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{eventKey:"three",children:"SEO Details"})})]})}),e.jsx(k,{sm:10,children:e.jsxs(u.Content,{children:[e.jsx(u.Pane,{eventKey:"first",children:e.jsx("form",{onSubmit:t,children:e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row1",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row1",children:[e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Configuration Api Url"}),e.jsx(N,{id:"email_config_api_url",type:"text",name:"email_config_api_url",className:"form-control",value:l.email_config_api_url,onChange:s=>m("email_config_api_url",s.target.value),autoComplete:"off"}),e.jsx(n,{message:i.email_config_api_url,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Configuration Api Key"}),e.jsx(N,{id:"email_config_api_key",type:"text",name:"email_config_api_key",className:"form-control",value:l.email_config_api_key,onChange:s=>m("email_config_api_key",s.target.value),autoComplete:"off"}),e.jsx(n,{message:i.email_config_api_key,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Configuration Api Method"}),e.jsx(A,{onChange:s=>m("email_config_api_method",s),value:l.email_config_api_method,options:C,name:"email_config_api_method"}),e.jsx(n,{message:i.email_config_api_method,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 text-center",children:e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[e.jsx("i",{className:"bi bi-check"})," Update Data"]})})})]})})})})})}),e.jsx(u.Pane,{eventKey:"second",children:e.jsx("form",{onSubmit:c,children:e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[l.socialmedia_links.map((s,h)=>e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:s.label}),e.jsx("div",{children:e.jsx("input",{value:s.url,onChange:b=>S(h,b.target.value),type:"text",className:"form-control"})})]})},s.key)),e.jsx("div",{className:"col-md-12 mb-3 text-center",children:e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[e.jsx("i",{className:"bi bi-check"})," Update Data"]})})})]})})})}),e.jsx(u.Pane,{eventKey:"three",children:e.jsx("form",{onSubmit:v,children:e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-lg-12",children:[e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Title"}),e.jsx(N,{id:"seo_title",type:"text",name:"seo_title",className:"form-control",value:l.seo_title,onChange:s=>m("seo_title",s.target.value),autoComplete:"off"}),e.jsx(n,{message:i.seo_title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Description"}),e.jsx("textarea",{id:"seo_description",type:"text",name:"seo_description",rows:5,className:"form-control",value:l.seo_description,onChange:s=>m("seo_description",s.target.value),autoComplete:"off"}),e.jsx(n,{message:i.seo_description,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"SEO Keywords"}),e.jsx(N,{id:"seo_keywords",type:"text",name:"seo_keywords",className:"form-control",value:l.seo_keywords,onChange:s=>m("seo_keywords",s.target.value),autoComplete:"off"}),e.jsx(n,{message:i.seo_keywords,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3 text-center",children:e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[e.jsx("i",{className:"bi bi-check"})," Update Data"]})})})]})})})})})]})})]})})})})})})})]})})]})}export{je as default};
