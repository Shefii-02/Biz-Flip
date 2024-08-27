import{W as N,j as s,Y as f,a as n}from"./app-Bt-mFwUe.js";import{A as v}from"./AdminAuthenticated-C2mwp449.js";import{I as o}from"./InputError-B1revXb_.js";import{T as g}from"./TextInput-KgrMBBen.js";import{I as y}from"./InputLabel-DJJ35U2c.js";import"./SelectOption-Cu6swBvR.js";import{F as R}from"./Form-Bung0YsD.js";import"./PermissionAllow-DOxUi5ks.js";import"./Dropdown-26xZ_kqk.js";import"./AdminHeader-d46GbjFp.js";import"./Dropdown-CYRjmO_5.js";import"./listen-9ifYQupn.js";import"./useWindow-JOB4t2KT.js";import"./Anchor-_sbeL0Hr.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-QthD7bNs.js";import"./BootstrapModalManager-Di_ap584.js";import"./Fade-Drtsv1Cr.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-RTz732VE.js";import"./ToastNotification-B1tP4kUe.js";import"./react-select.esm-DDYMx-v-.js";import"./Select-49a62830.esm-BD6FB1U9.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./extends-DM2IsgWP.js";import"./emotion-react.browser.esm-BFYtyMPG.js";import"./hoist-non-react-statics.cjs-BQ3zWrEw.js";import"./ElementChildren-cSMuAaUC.js";import"./Col-DDB57ZuR.js";function ls({role:a,permissionsList:r,queryParams:k=null,auth:d}){const h=a.permissions?Object.keys(a.permissions).map(e=>parseInt(e)):[],{data:l,setData:m,post:p,errors:t,reset:w}=N({permissions:h||[],name:a.name||"",_method:"PUT"}),x=e=>{e.preventDefault(),p(route("admin.role-responsibilities.update",a.id))},j=(e,i)=>{m(e,i)},c=a.name==="admin"||a.name==="seller",b=e=>{let i;l.permissions.includes(e)?i=l.permissions.filter(u=>u!==e):i=[...l.permissions,e],m("permissions",i)};return s.jsxs(v,{user:d.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities/Edit"}),children:[s.jsx(f,{title:"Role & Responsibilities Edit"}),s.jsx("div",{className:"content-wrapper me-4",children:s.jsxs("div",{className:"container-full",children:[s.jsx("div",{className:"content-header",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"d-flex flex-column",children:[s.jsx("h4",{className:"page-title",children:" Edit Role & Responsibilities"}),s.jsx("div",{className:"d-inline-block align-items-center mt-2",children:s.jsx("nav",{children:s.jsxs("ol",{className:"breadcrumb",children:[s.jsx("li",{className:"breadcrumb-item",children:s.jsxs(n,{href:route("admin.index"),children:[s.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),s.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:s.jsx(n,{href:route("admin.role-responsibilities.index"),children:"Role & Responsibilities"})}),s.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),s.jsx("div",{className:"col-lg-6"})]})}),s.jsx("section",{className:"content",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"box",children:s.jsx("div",{className:"box-body",children:s.jsxs("form",{onSubmit:x,children:[s.jsx("div",{className:"form-body",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-12",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-md-12 mb-3",children:s.jsxs("div",{className:"form-group",children:[s.jsx(y,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),s.jsx(g,{id:"name",type:"text",name:"name",className:"form-control",value:l.name,onChange:c?null:e=>j("name",e.target.value),readOnly:c,autoComplete:"off"}),s.jsx(o,{message:t.name,className:"mt-2 col-12"})]})})})}),s.jsxs("div",{className:"col-lg-12",children:[s.jsx("h5",{className:"mb-25",children:s.jsx("u",{children:"Allow Permissions"})}),s.jsx(o,{message:t.permissions,className:"mt-2 col-12"}),Object.keys(r).map(e=>s.jsxs("div",{children:[s.jsx("h6",{className:"fw-bold",children:e}),s.jsx("div",{className:"row my-3",children:r[e].map(i=>s.jsx("div",{className:"col-lg-2 col-6",children:s.jsx(R.Check,{type:"checkbox",id:`default-checkbox-${i.id}`,label:i.name,name:"permissions[]",checked:l.permissions.includes(i.id),onChange:()=>b(i.id)})},i.id))})]},e))]})]})}),s.jsx("div",{className:"form-actions mt-10",children:s.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",s.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{ls as default};
