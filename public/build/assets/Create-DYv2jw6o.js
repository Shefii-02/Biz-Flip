import{W as N,r as f,j as e,Y as v,a as d}from"./app-DUUes-Qe.js";import{A as C}from"./AdminAuthenticated-Ds-dgqPm.js";import{I as l}from"./InputError-CXHSIIRy.js";import{T as x}from"./TextInput-CseyGSIO.js";import{I as c}from"./InputLabel-uB2xVtIr.js";import{S as w}from"./SelectOption-D31qldZT.js";import{P as h}from"./PermissionAllow-a6rJKmWW.js";import{F as y}from"./Form-BvsTKWYx.js";import"./Dropdown-CFmbVfto.js";import"./AdminSidebar-qQiqrWh-.js";import"./listen-8kQ8eSJE.js";import"./useWindow-BvcGFOsK.js";import"./Anchor-MvCfxlSE.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BzWycOG-.js";import"./ToastNotification-Cn01RQ_-.js";import"./react-select.esm-_8J5l9wT.js";import"./useStateManager-7e1e8489.esm-D26xKiTS.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./inherits-CWsdyUoO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-BGHy7EY5.js";import"./index-BgGHsYll.js";import"./ElementChildren-CRTP-sSI.js";import"./Col-BY__Of_h.js";function $({auth:p}){const{data:o,setData:r,post:j,errors:i,reset:_}=N({image:"",category_name:"",status:"1",position:"",description:""}),g=s=>{s.preventDefault(),j(route("admin.category.store"))},[m,n]=f.useState(""),b=s=>{const a=s.target.files[0];a&&(r("image",a),n(URL.createObjectURL(a)))},u=()=>{r("image",""),n("")},t=(s,a)=>{r(s,a)};return e.jsxs(C,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Category/Create"}),children:[e.jsx(v,{title:"Category Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Ad Category"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(d,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(h,{permission:"Categories Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(d,{href:route("admin.category.index"),children:"Ad Categories"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(h,{permission:"Category Create",message:"true",children:e.jsxs("form",{onSubmit:g,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(x,{id:"category-name",type:"text",name:"category_name",className:"form-control",value:o.category_name,onChange:s=>t("category_name",s.target.value),autoComplete:"off"}),e.jsx(l,{message:i.category_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Description"}),e.jsx("textarea",{className:"form-control",rows:4,onChange:s=>t("description",s.target.value)})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(w,{onChange:s=>t("position",s),value:o.position}),e.jsx(l,{message:i.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group p-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(y.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",onChange:s=>t("status",s.target.checked?1:0)}),e.jsx(l,{message:i.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border bg-bubbles-white rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[m?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:m,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:u})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(x,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:b})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10 col-lg-12 text-center",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{$ as default};