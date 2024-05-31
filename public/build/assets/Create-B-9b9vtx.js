import{W as g,r as v,j as e,Y as f,a as o}from"./app-DEFvwcdl.js";import{A as C}from"./AdminAuthenticated-BP6FwpnW.js";import{I as c}from"./InputError-Cv6Msw7B.js";import{T as d}from"./TextInput-DLZxt0iJ.js";import{I as x}from"./InputLabel-B-IZoxUr.js";import{S as y}from"./SelectOption-CCiX4v4E.js";import{R as h}from"./RadioButtonLabel-CfrYpfZA.js";import"./PermissionAllow-B7s74L2E.js";import"./AdminSidebar-DBU5ZcO1.js";import"./useMergedRefs-B2_9xDH_.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-CN4koItJ.js";import"./react-select.esm-DJrhtTDn.js";import"./Select-49a62830.esm-Dus8yFDX.js";import"./inherits-Da4sx5rs.js";import"./extends-Lqyj1dvn.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-DZwEriCY.js";function G({auth:j}){const{data:t,setData:i,post:u,errors:r,reset:w}=g({image:"",name:"",status:"1",position:""}),p=s=>{s.preventDefault(),u(route("admin.country.store"))},[m,n]=v.useState(""),N=s=>{const a=s.target.files[0];a&&(i("image",a),n(URL.createObjectURL(a)))},b=()=>{i("image",""),n("")},l=(s,a)=>{i(s,a)};return e.jsxs(C,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Country/Create"}),children:[e.jsx(f,{title:"Country Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Country"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(o,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(o,{href:route("admin.country.index"),children:"Country"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:p,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(d,{id:"country-name",type:"text",name:"name",className:"form-control",value:t.name,onChange:s=>l("name",s.target.value),autoComplete:"off"}),e.jsx(c,{message:r.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(x,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(y,{onChange:s=>l("position",s),value:t.position}),e.jsx(c,{message:r.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(h,{name:"status",onChange:s=>l("status",s),value:"1",checked:t.status==="1",label:"Published"}),e.jsx(h,{name:"status",onChange:s=>l("status",s),value:"0",checked:t.status==="0",label:"Draft"}),e.jsx(c,{message:r.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[m?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:m,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:b})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"btn mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(d,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{G as default};
