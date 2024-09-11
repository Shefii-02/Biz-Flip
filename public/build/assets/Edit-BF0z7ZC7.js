import{W as v,r as d,j as e,Y as w,a as x}from"./app-CG-cedyX.js";import{A as y}from"./AdminAuthenticated-ByjJAyqE.js";import{I as o}from"./InputError-CCdqjYDC.js";import{T as h}from"./TextInput-CHvuy4pr.js";import{I as p}from"./InputLabel-CY78c-ZX.js";import{S as I}from"./SelectOption-KCti45N1.js";import{P as j}from"./PermissionAllow-BtKYLFOB.js";import{F as C}from"./Form-BAPVm6lP.js";import"./Dropdown-BzC72U1u.js";import"./AdminHeader-Dj0oJY3B.js";import"./Dropdown-B1WKr_ab.js";import"./listen-BAmu7Ho1.js";import"./useWindow-DcnfaM70.js";import"./Anchor-DdZ2pRBt.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CB8FP-AD.js";import"./BootstrapModalManager-Dg4mQ0vY.js";import"./Fade-BjsinVYN.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-D1LT8eKv.js";import"./ToastNotification-IV0ugsHC.js";import"./ReactToastify-glfqqVTn.js";import"./react-select.esm-RGXfl3Tu.js";import"./Select-49a62830.esm-Do4iK4i6.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-ByTTzjc8.js";import"./hoist-non-react-statics.cjs-DUT9nNpZ.js";import"./ElementChildren-DLYU6fvW.js";import"./Col-CGe5sM12.js";function ce({facility_item:a,queryParams:E=null,auth:u}){const{data:t,setData:l,post:N,errors:r,reset:_}=v({image:"",facility_name:a.name||"",status:a.status=1,position:a.position||"",_method:"PUT",remove_image:!1}),[n,c]=d.useState("");d.useEffect(()=>{a.icon&&c(a.icon)},[a.icon]);const b=s=>{const i=s.target.files[0];i&&(l("image",i),c(URL.createObjectURL(i)))},g=()=>{l("image",""),c(""),l("remove_image",!0)},f=s=>{s.preventDefault(),N(route("admin.facilities.update",a.id))},m=(s,i)=>{l(s,i)};return e.jsxs(y,{user:u.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Facility/Edit"}),children:[e.jsx(w,{title:"Facility Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Facility"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(j,{permission:"Facilities Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.facilities.index"),children:"Facility"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(j,{permission:"Facility Edit",message:!0,children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(p,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(h,{id:"facility-name",type:"text",name:"facility_name",className:"form-control",value:t.facility_name,onChange:s=>m("facility_name",s.target.value),autoComplete:"off"}),e.jsx(o,{message:r.facility_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(p,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(I,{onChange:s=>m("position",s),value:t.position,defaultValue:t.position}),e.jsx(o,{message:r.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(C.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:t.status===1,onChange:s=>m("status",s.target.checked?1:0)}),e.jsx(o,{message:r.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[n?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:n,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:g})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(h,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:b})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{ce as default};
