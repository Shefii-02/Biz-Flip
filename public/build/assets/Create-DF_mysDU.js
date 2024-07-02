import{W as p,j as e,Y as f,a as c}from"./app-DvQGNSQ4.js";import{A as b}from"./AdminAuthenticated-CbZKbwF2.js";import{I as i}from"./InputError-B9UL4AG8.js";import{T as t}from"./TextInput-fBlOaMfH.js";import{I as m}from"./InputLabel-CpOBrnx0.js";import{D as j}from"./DynamicMultiSelect-G6Tl6YJU.js";import{F as N}from"./Form-CvhTtdKM.js";import"./Dropdown-CNPqD9J2.js";import"./AdminSidebar-Bc_gr7bn.js";import"./listen-teOUKAjB.js";import"./useWindow-ByyYJc5W.js";import"./Anchor-CBEY8rV_.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-VMkwHhWH.js";import"./PermissionAllow-CwtACi1H.js";import"./ToastNotification--DPTrFX6.js";import"./react-select-creatable.esm-qansbjBE.js";import"./useStateManager-7e1e8489.esm-CUBOu890.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-DdicrZ9q.js";import"./hoist-non-react-statics.cjs-BxRB6118.js";import"./index-D0OV_dKK.js";import"./ElementChildren-DesGOqzz.js";import"./Col-KJR4d7g7.js";function U({auth:o}){const{data:a,setData:n,post:d,errors:l,reset:v}=p({firstname:"",lastname:"",email_id:"",type_of_needed:[],status:1}),u=s=>{s.preventDefault(),d(route("admin.subscribers.store"))},r=(s,h)=>{n(s,h),console.log("Data to be submitted:",a)},x=[{value:"Business",label:"Business"},{value:"Franchise",label:"Franchise"},{value:"Commrecial Real Estate",label:"Commrecial Real Estate"},{value:"Preconstruction",label:"Preconstruction"},{value:"Business Services",label:"Business Services"}];return e.jsxs(b,{user:o.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"News Subscriber/Create"}),children:[e.jsx(f,{title:"News Subscriber Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create News Subscriber"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(c,{href:route("admin.subscribers.index"),children:"News Subscriber"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx(t,{id:"firstname",type:"text",name:"firstname",className:"form-control",value:a.firstname,onChange:s=>r("firstname",s.target.value),autoComplete:"off"}),e.jsx(i,{message:l.firstname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Last Name"}),e.jsx(t,{id:"lastname",type:"text",name:"lastname",className:"form-control",value:a.lastname,onChange:s=>r("lastname",s.target.value),autoComplete:"off"}),e.jsx(i,{message:l.lastname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Id"}),e.jsx(t,{id:"email_id",type:"email",name:"email_id",className:"form-control",value:a.email_id,onChange:s=>r("email_id",s.target.value),autoComplete:"off"}),e.jsx(i,{message:l.email_id,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Type of Needed"}),e.jsx(j,{onChange:s=>r("type_of_needed",s),value:a.type_of_needed,options:x,name:"type_of_needed"}),e.jsx(i,{message:l.type_of_needed,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(N.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:a.status===1,onChange:s=>r("status",s.target.checked?1:0)}),e.jsx(i,{message:l.status,className:"mt-2 col-12"})]})})]})})})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{U as default};
