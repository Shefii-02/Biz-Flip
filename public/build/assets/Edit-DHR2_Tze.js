import{W as v,r as d,j as e,Y as w,a as x}from"./app-mbB9cBIL.js";import{A as C}from"./AdminAuthenticated-xPnj3WYW.js";import{I as o}from"./InputError-DVl4KS8v.js";import{T as h}from"./TextInput-Bq3i4Xj1.js";import{I as u}from"./InputLabel-D6bz93vo.js";import{S as I}from"./SelectOption-DZGIlFbx.js";import{P as p}from"./PermissionAllow-DCpYUVTp.js";import{F as y}from"./Form-Bdypvj7O.js";import"./Dropdown-CSn9d9O9.js";import"./AdminSidebar-B-iBc40u.js";import"./listen-uU4Ht3yp.js";import"./useWindow-Bp4PdcAQ.js";import"./Anchor-BXA3Nsnm.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-VSGo5GbR.js";import"./ToastNotification-YHLlhGoM.js";import"./react-select.esm-CAZgHMej.js";import"./useStateManager-7e1e8489.esm-CqsfXXsP.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-CFbDu7UJ.js";import"./hoist-non-react-statics.cjs-_X6JJ_ny.js";import"./index-DNemVMA8.js";import"./ElementChildren-eg2bXbJB.js";import"./Col-B1ilUJq7.js";function ae({features_item:a,queryParams:_=null,auth:j}){const{data:t,setData:r,post:N,errors:l,reset:k}=v({image:"",feature_name:a.name||"",status:a.status=1,position:a.position||"",_method:"PUT",remove_image:!1}),[n,m]=d.useState("");d.useEffect(()=>{a.icon&&m(a.icon)},[a.icon]);const b=s=>{const i=s.target.files[0];i&&(r("image",i),m(URL.createObjectURL(i)))},g=()=>{r("image",""),m(""),r("remove_image",!0)},f=s=>{s.preventDefault(),N(route("admin.features.update",a.id))},c=(s,i)=>{r(s,i)};return e.jsxs(C,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature/Edit"}),children:[e.jsx(w,{title:"Features List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Feature"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(p,{permission:"Features Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.features.index"),children:"Features"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(p,{permission:"Feature Create",message:!0,children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(u,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(h,{id:"feature-name",type:"text",name:"feature_name",className:"form-control",value:t.feature_name,onChange:s=>c("feature_name",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.feature_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(u,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(I,{onChange:s=>c("position",s),value:t.position,defaultValue:t.position}),e.jsx(o,{message:l.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(y.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:t.status===1,onChange:s=>c("status",s.target.checked?1:0)}),e.jsx(o,{message:l.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Icon/Image"}),e.jsxs("div",{className:"product-img",children:[n?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:n,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:g})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(h,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:b})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{ae as default};
