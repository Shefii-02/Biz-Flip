import{W as N,j as s,Y as f,a as t}from"./app-DvQGNSQ4.js";import{A as v}from"./AdminAuthenticated-CbZKbwF2.js";import{I as o}from"./InputError-B9UL4AG8.js";import{T as g}from"./TextInput-fBlOaMfH.js";import{I as y}from"./InputLabel-CpOBrnx0.js";import"./SelectOption-BPuvC11l.js";import{F as R}from"./Form-CvhTtdKM.js";import"./Dropdown-CNPqD9J2.js";import"./AdminSidebar-Bc_gr7bn.js";import"./listen-teOUKAjB.js";import"./useWindow-ByyYJc5W.js";import"./Anchor-CBEY8rV_.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-VMkwHhWH.js";import"./PermissionAllow-CwtACi1H.js";import"./ToastNotification--DPTrFX6.js";import"./react-select.esm-CLV2RUgB.js";import"./useStateManager-7e1e8489.esm-CUBOu890.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-DdicrZ9q.js";import"./hoist-non-react-statics.cjs-BxRB6118.js";import"./index-D0OV_dKK.js";import"./ElementChildren-DesGOqzz.js";import"./Col-KJR4d7g7.js";function ss({role:a,permissionsList:r,queryParams:k=null,auth:d}){const h=a.permissions?Object.keys(a.permissions).map(e=>parseInt(e)):[],{data:l,setData:m,post:x,errors:c,reset:w}=N({permissions:h||[],name:a.name||"",_method:"PUT"}),p=e=>{e.preventDefault(),x(route("admin.role-responsibilities.update",a.id))},j=(e,i)=>{m(e,i)},n=a.name==="admin"||a.name==="seller",b=e=>{let i;l.permissions.includes(e)?i=l.permissions.filter(u=>u!==e):i=[...l.permissions,e],m("permissions",i)};return s.jsxs(v,{user:d.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities/Edit"}),children:[s.jsx(f,{title:"Role & Responsibilities Edit"}),s.jsx("div",{className:"content-wrapper me-4",children:s.jsxs("div",{className:"container-full",children:[s.jsx("div",{className:"content-header",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"d-flex flex-column",children:[s.jsx("h4",{className:"page-title",children:" Edit Role & Responsibilities"}),s.jsx("div",{className:"d-inline-block align-items-center mt-2",children:s.jsx("nav",{children:s.jsxs("ol",{className:"breadcrumb",children:[s.jsx("li",{className:"breadcrumb-item",children:s.jsxs(t,{href:route("admin.index"),children:[s.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),s.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:s.jsx(t,{href:route("admin.role-responsibilities.index"),children:"Role & Responsibilities"})}),s.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),s.jsx("div",{className:"col-lg-6"})]})}),s.jsx("section",{className:"content",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx("div",{className:"box",children:s.jsx("div",{className:"box-body",children:s.jsxs("form",{onSubmit:p,children:[s.jsx("div",{className:"form-body",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-12",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-md-12 mb-3",children:s.jsxs("div",{className:"form-group",children:[s.jsx(y,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),s.jsx(g,{id:"name",type:"text",name:"name",className:"form-control",value:l.name,onChange:n?null:e=>j("name",e.target.value),readOnly:n,autoComplete:"off"}),s.jsx(o,{message:c.name,className:"mt-2 col-12"})]})})})}),s.jsxs("div",{className:"col-lg-12",children:[s.jsx("h5",{className:"mb-25",children:s.jsx("u",{children:"Allow Permissions"})}),s.jsx(o,{message:c.permissions,className:"mt-2 col-12"}),Object.keys(r).map(e=>s.jsxs("div",{children:[s.jsx("h6",{className:"fw-bold",children:e}),s.jsx("div",{className:"row my-3",children:r[e].map(i=>s.jsx("div",{className:"col-lg-2 col-6",children:s.jsx(R.Check,{type:"checkbox",id:`default-checkbox-${i.id}`,label:i.name,name:"permissions[]",checked:l.permissions.includes(i.id),onChange:()=>b(i.id)})},i.id))})]},e))]})]})}),s.jsx("div",{className:"form-actions mt-10",children:s.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",s.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{ss as default};
