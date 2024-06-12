import{W as v,j as e,Y as g,a as m}from"./app-CjewbWUq.js";import"./Dropdown-CJ6RRfHE.js";import"./index-DXXuAbUi.js";import"./PermissionAllow-CRcCMSN3.js";import N from"./Wrapper-DB6Ax3NE.js";import{S as w}from"./react-select.esm-Dx1wqq-N.js";import{I as n}from"./InputError-DqsPzRm2.js";import"./SideBar-CZC62MCb.js";import"./ProfileDropdown-BjwSGHuF.js";import"./Header-Dj3YUQzL.js";import"./ToastNotification-Chxa-umb.js";import"./useStateManager-7e1e8489.esm-D8xHEF_V.js";import"./extends-B6xKY8K9.js";import"./inherits-DuN3otLB.js";import"./toPropertyKey-PLuKRk1e.js";import"./setPrototypeOf-DgZC2w_0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./emotion-react.browser.esm-0eDStj_R.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";function V({staff:s,permissions:b,auth:d,success:c,error:h,roles:p}){const{data:l,setData:t,post:x,errors:r,reset:f}=v({firstname:s?s.firstname:null,lastname:s?s.lastname:null,email:s?s.email:null,phone:s?s.phone:null,role_id:s?s.role_id:null,role_name:s?s.role_name:"Select an option",_method:s?"PUT":"POST"}),i=(a,o)=>{t(a,o)},j=(a,o)=>{t(a,o.value)},u=async a=>{a.preventDefault(),await x(route(s?"seller.staffs.update":"seller.staffs.store",{staff:s?s.id:null}),{preserveScroll:!0})};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:s?"Edit staff":"Create new staff"}),e.jsx(N,{user:d.user,success:c,error:h,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"text-xl font-bold",children:s?"Edit staff":"Create new staff"}),e.jsx("div",{className:"ms-auto",children:e.jsxs(m,{href:route("seller.staffs.index"),className:"btn btn-neutral",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Go back"]})})]}),e.jsx("div",{children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"First name"})," ",e.jsx("input",{value:l.firstname,onChange:a=>i("firstname",a.target.value),type:"text",placeholder:"Your first name",className:"form-control",id:"first_name"})]}),e.jsx(n,{message:r.firstname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{value:l.lastname,onChange:a=>i("lastname",a.target.value),type:"text",placeholder:"Your last name",className:"form-control"})]}),e.jsx(n,{message:r.lastname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"})," ",e.jsx("input",{value:l.email,onChange:a=>i("email",a.target.value),placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(n,{message:r.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"})," ",e.jsx("input",{value:l.phone,type:"tel",onChange:a=>i("phone",a.target.value),placeholder:"Your phone number",className:"form-control"})]}),e.jsx(n,{message:r.phone})]})]}),e.jsx("div",{className:"mb-5 mt-5",children:e.jsx("h4",{children:"Roles and responsibility"})}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Role"}),e.jsx(w,{defaultValue:{value:l.role_id,label:l.role_name},onChange:a=>{j("role_id",a)},name:"role_id",options:p}),e.jsx(n,{message:r.role_id})]})}),e.jsx("div",{className:"mb-5 mt-5",children:e.jsx("h4",{children:s?e.jsx(e.Fragment,{children:"Change password"}):e.jsx(e.Fragment,{children:"Set password"})})}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"New password"})," ",e.jsx("input",{type:"password",value:l.password,onChange:a=>i("password",a.target.value),name:"password",id:"password",placeholder:"Your new secret password",className:"form-control"})]}),e.jsx(n,{message:r.password})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Conform new password"})," ",e.jsx("input",{type:"password",value:l.confirm_password,onChange:a=>i("confirm_password",a.target.value),name:"confirm_password",id:"confirm_password",placeholder:"Confirm your secret password",className:"form-control"})]}),e.jsx(n,{message:r.confirm_password})]}),e.jsxs("div",{className:"col-12 text-end",children:[e.jsx(m,{href:route("seller.staffs.index"),className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})]})]})})]})})})})]})}export{V as default};