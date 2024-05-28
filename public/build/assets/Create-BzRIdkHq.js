import{W as j,j as e,Y as b,a as t}from"./app-ubtpBZLn.js";import{A as N}from"./AdminAuthenticated-C_d8im7i.js";import{T as m,I as c}from"./TextInput-DgyTfVcW.js";import{I as i}from"./InputLabel-Ddo2be3J.js";import{S as f}from"./SelectOption-B9gl58CL.js";import{R as o}from"./RadioButtonLabel-CQFLO2Bl.js";import"./Dropdown-B61pZ40z.js";import"./AdminSidebar-Cie97x6K.js";import"./emotion-react.browser.esm-CMO6Um0Z.js";function I({auth:n}){const{data:a,setData:d,post:x,errors:r,reset:p}=j({color:"",name:"",status:"1",priority:""}),h=s=>{s.preventDefault(),x(route("admin.feature-label.store"))},l=(s,u)=>{d(s,u)};return e.jsxs(N,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature Label/Create"}),children:[e.jsx(b,{title:"Feature Label Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Feature Label"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(t,{href:route("admin.feature-label.index"),children:"Feature Label"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:h,children:[e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(m,{id:"name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>l("name",s.target.value),autoComplete:"off"}),e.jsx(c,{message:r.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Color"}),e.jsx(m,{id:"color",type:"color",name:"color",className:"form-control",value:a.color,onChange:s=>l("color",s.target.value),autoComplete:"off"}),e.jsx(c,{message:r.color,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Priority"}),e.jsx(f,{onChange:s=>l("priority",s),value:a.priority}),e.jsx(c,{message:r.priority,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(o,{name:"status",onChange:s=>l("status",s),value:"1",checked:a.status==="1",label:"Published"}),e.jsx(o,{name:"status",onChange:s=>l("status",s),value:"0",checked:a.status==="0",label:"Draft"}),e.jsx(c,{message:r.status,className:"mt-2 col-12"})]})]})})]})})})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{I as default};