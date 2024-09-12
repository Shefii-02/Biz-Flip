import{W as f,r as c,j as e,Y as b}from"./app-lCOCIkqV.js";import"./Dropdown-DvBQc9A-.js";import"./index-D7bls_SS.js";import"./PermissionAllow-CtaIoGbT.js";import N from"./Wrapper-BNX6JF8E.js";import{I as i}from"./InputError-CoJRMqPL.js";import"./SideBar-BziKKtIY.js";import"./ProfileDropdown-CayOb9Ex.js";import"./SideBar-DcufK-SQ.js";import"./ProfileDropdown-CcpPfmbe.js";import"./Header-CXEes6iP.js";import"./Dropdown-C4xB1MZv.js";import"./listen-Dw4wEuf-.js";import"./useWindow-BLQYVIa-.js";import"./Anchor-C-081uBT.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-BIk8DmDA.js";import"./ReactToastify-BPWJDsNb.js";function B({user:s,queryParams:y=null,auth:d,success:p,error:h}){const{data:r,setData:m,post:x,errors:t,reset:u}=f({picture:"",firstname:s.firstname,lastname:s.lastname,email:s.email,phone:s.phone,password:"",confirm_password:""}),[j,o]=c.useState();c.useEffect(()=>{s.picture&&o(s.picture_url)},[s.picture]);const v=a=>{const l=a.target.files[0];l&&(m("picture",l),o(URL.createObjectURL(l)))},n=(a,l)=>{m(a,l)},g=async a=>{a.preventDefault(),await x(route("customer.profile.store"),{preserveScroll:!0,onSuccess:()=>{u("confirm_password","password")}})};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Profile"}),e.jsx(N,{success:p,error:h,user:d.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3 px-lg-6",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Your profile settings"}),e.jsx("div",{className:"card rounded-input",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("label",{role:"button",htmlFor:"avatar",href:"#",className:"avatar avatar-lg border-2 border-gray rounded-circle text-white",children:e.jsx("img",{onError:a=>{a.target.onerror=null,a.target.src="/assets/admin/images/noimage.webp"},alt:"...",src:j})}),e.jsxs("div",{className:"ms-4",children:[e.jsxs("span",{className:"h4 d-block mb-0",children:[r.firstname," ",r.lastname]}),e.jsx("label",{htmlFor:"avatar",type:"button",className:"text-primary font-semibold mt-1",children:"Change image"})]})]}),e.jsx(i,{message:t.picture})]}),e.jsx("input",{onChange:v,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"})]})})}),e.jsx("div",{children:e.jsxs("form",{onSubmit:g,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"First name"})," ",e.jsx("input",{value:r.firstname,onChange:a=>n("firstname",a.target.value),type:"text",placeholder:"Your first name",className:"form-control",id:"first_name"})]}),e.jsx(i,{message:t.firstname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{value:r.lastname,onChange:a=>n("lastname",a.target.value),type:"text",placeholder:"Your last name",className:"form-control"})]}),e.jsx(i,{message:t.lastname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"})," ",e.jsx("input",{value:r.email,onChange:a=>n("email",a.target.value),placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(i,{message:t.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"})," ",e.jsx("input",{value:r.phone,type:"tel",onChange:a=>n("phone",a.target.value),placeholder:"Your phone number",className:"form-control"})]}),e.jsx(i,{message:t.phone})]})]}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 text-end mt-10",children:[e.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})})]})})]})})})})]})}export{B as default};