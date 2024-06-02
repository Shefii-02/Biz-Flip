import{W as N,j as e,Y as f,a as t}from"./app-DgcCZBWy.js";import{A as v}from"./AdminAuthenticated-j6vvldw9.js";import{I as d}from"./InputError-CJO5BPi6.js";import{T as g}from"./TextInput-CMsgyJdo.js";import{I as y}from"./InputLabel-CRsH4gpT.js";import"./SelectOption-2rusTXNo.js";import{F as R}from"./Form-Dv0zgq79.js";import"./PermissionAllow-B757jAZE.js";import"./AdminSidebar-C8NNYMIP.js";import"./useMergedRefs-CnoNJX2P.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-PXY2H3mA.js";import"./react-select.esm-CuV6SM4v.js";import"./Select-49a62830.esm-DFUzPEuG.js";import"./inherits-Da4sx5rs.js";import"./extends-Lqyj1dvn.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-DJSY50Zv.js";import"./index-B07UDkQ7.js";function J({role:a,permissionsList:r,queryParams:k=null,auth:o}){const h=a.permissions?Object.keys(a.permissions).map(s=>parseInt(s)):[],{data:l,setData:m,post:x,errors:n,reset:w}=N({permissions:h||[],name:a.name||"",_method:"PUT"}),p=s=>{s.preventDefault(),x(route("admin.role-responsibilities.update",a.id))},j=(s,i)=>{m(s,i)},c=a.name==="admin"||a.name==="seller",b=s=>{let i;l.permissions.includes(s)?i=l.permissions.filter(u=>u!==s):i=[...l.permissions,s],m("permissions",i)};return e.jsxs(v,{user:o.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities/Edit"}),children:[e.jsx(f,{title:"Role & Responsibilities Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Role & Responsibilities"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(t,{href:route("admin.role-responsibilities.index"),children:"Role & Responsibilities"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:p,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-12",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(y,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(g,{id:"name",type:"text",name:"name",className:"form-control",value:l.name,onChange:c?null:s=>j("name",s.target.value),readOnly:c,autoComplete:"off"}),e.jsx(d,{message:n.name,className:"mt-2 col-12"})]})})})}),e.jsxs("div",{className:"col-lg-12",children:[e.jsx("h5",{className:"mb-25",children:e.jsx("u",{children:"Allow Permissions"})}),e.jsx(d,{message:n.permissions,className:"mt-2 col-12"}),Object.keys(r).map(s=>e.jsxs("div",{children:[e.jsx("h6",{className:"fw-bold",children:s}),e.jsx("div",{className:"row my-3",children:r[s].map(i=>e.jsx("div",{className:"col-lg-2 col-6",children:e.jsx(R.Check,{type:"checkbox",id:`default-checkbox-${i.id}`,label:i.name,name:"permissions[]",checked:l.permissions.includes(i.id),onChange:()=>b(i.id)})},i.id))})]},s))]})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{J as default};