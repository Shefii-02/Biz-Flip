import{W as N,j as e,Y as f,a as c}from"./app-UYMcsozT.js";import{A as v}from"./AdminAuthenticated-BeSBahR6.js";import{I as o}from"./InputError-BAxEmKqc.js";import{T as g}from"./TextInput-DW_bnNi3.js";import{I as y}from"./InputLabel-BJw82p8q.js";import"./SelectOption-59f3uqM2.js";import{F as R}from"./Form-Dizn9b1d.js";import"./Dropdown-DIrmF7KH.js";import"./AdminSidebar-PMqOkiwD.js";import"./listen-BfSGih8d.js";import"./useWindow-DFLo-wP-.js";import"./Anchor-Fwh6yWVz.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-B-VLWdQt.js";import"./PermissionAllow-Bap9htMY.js";import"./ToastNotification-B2mN7jJt.js";import"./react-select.esm-BHwrYLQF.js";import"./useStateManager-7e1e8489.esm-rUKe57m_.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./inherits-CWsdyUoO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-DKTd78aF.js";import"./hoist-non-react-statics.cjs-CMtDnMvH.js";import"./index-DbEP-q8K.js";import"./ElementChildren-B3kWnESM.js";import"./Col-DOYcjBkn.js";function ee({role:a,permissionsList:r,queryParams:k=null,auth:d}){const h=a.permissions?Object.keys(a.permissions).map(s=>parseInt(s)):[],{data:l,setData:m,post:x,errors:n,reset:w}=N({permissions:h||[],name:a.name||"",_method:"PUT"}),p=s=>{s.preventDefault(),x(route("admin.role-responsibilities.update",a.id))},j=(s,i)=>{m(s,i)},t=a.name==="admin"||a.name==="seller",b=s=>{let i;l.permissions.includes(s)?i=l.permissions.filter(u=>u!==s):i=[...l.permissions,s],m("permissions",i)};return e.jsxs(v,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities/Edit"}),children:[e.jsx(f,{title:"Role & Responsibilities Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Role & Responsibilities"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(c,{href:route("admin.role-responsibilities.index"),children:"Role & Responsibilities"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:p,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-12",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(y,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(g,{id:"name",type:"text",name:"name",className:"form-control",value:l.name,onChange:t?null:s=>j("name",s.target.value),readOnly:t,autoComplete:"off"}),e.jsx(o,{message:n.name,className:"mt-2 col-12"})]})})})}),e.jsxs("div",{className:"col-lg-12",children:[e.jsx("h5",{className:"mb-25",children:e.jsx("u",{children:"Allow Permissions"})}),e.jsx(o,{message:n.permissions,className:"mt-2 col-12"}),Object.keys(r).map(s=>e.jsxs("div",{children:[e.jsx("h6",{className:"fw-bold",children:s}),e.jsx("div",{className:"row my-3",children:r[s].map(i=>e.jsx("div",{className:"col-lg-2 col-6",children:e.jsx(R.Check,{type:"checkbox",id:`default-checkbox-${i.id}`,label:i.name,name:"permissions[]",checked:l.permissions.includes(i.id),onChange:()=>b(i.id)})},i.id))})]},s))]})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-sm btn-neutral",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{ee as default};
