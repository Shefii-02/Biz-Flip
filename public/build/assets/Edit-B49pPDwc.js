import{W as f,r as h,j as e,Y as v,a as p}from"./app-mbB9cBIL.js";import{A as w}from"./AdminAuthenticated-xPnj3WYW.js";import{I as o}from"./InputError-DVl4KS8v.js";import{T as n}from"./TextInput-Bq3i4Xj1.js";import{I as d}from"./InputLabel-D6bz93vo.js";import{S as C}from"./SelectOption-DZGIlFbx.js";import{F as I}from"./Form-Bdypvj7O.js";import"./Dropdown-CSn9d9O9.js";import"./AdminSidebar-B-iBc40u.js";import"./listen-uU4Ht3yp.js";import"./useWindow-Bp4PdcAQ.js";import"./Anchor-BXA3Nsnm.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-VSGo5GbR.js";import"./PermissionAllow-DCpYUVTp.js";import"./ToastNotification-YHLlhGoM.js";import"./react-select.esm-CAZgHMej.js";import"./useStateManager-7e1e8489.esm-CqsfXXsP.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-CFbDu7UJ.js";import"./hoist-non-react-statics.cjs-_X6JJ_ny.js";import"./index-DNemVMA8.js";import"./ElementChildren-eg2bXbJB.js";import"./Col-B1ilUJq7.js";function se({country_item:a,queryParams:y=null,auth:j}){const{data:i,setData:t,post:u,errors:m,reset:E}=f({image:"",name:a.name||"",code:a.code||"",status:a.status=1,position:a.position||"",_method:"PUT",remove_image:!1}),[x,c]=h.useState("");h.useEffect(()=>{a.image&&c(a.image)},[a.image]);const N=s=>{const l=s.target.files[0];l&&(t("image",l),c(URL.createObjectURL(l)))},g=()=>{t("image",""),c(""),t("remove_image",!0)},b=s=>{s.preventDefault(),u(route("admin.country.update",a.id))},r=(s,l)=>{t(s,l)};return e.jsxs(w,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Country/Edit"}),children:[e.jsx(v,{title:"Country Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Country"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(p,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(p,{href:route("admin.country.index"),children:"Country"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:b,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(n,{id:"name",type:"text",name:"name",className:"form-control",value:i.name,onChange:s=>r("name",s.target.value),autoComplete:"off"}),e.jsx(o,{message:m.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Code"}),e.jsx(n,{id:"country-code",type:"text",name:"code",className:"form-control",value:i.code,onChange:s=>r("code",s.target.value),autoComplete:"off"}),e.jsx(o,{message:m.code,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(C,{onChange:s=>r("position",s),value:i.position,defaultValue:i.position}),e.jsx(o,{message:m.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group p-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(I.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:i.status===1,onChange:s=>r("status",s.target.checked?1:0)}),e.jsx(o,{message:m.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[x?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:x,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:g})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(n,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{se as default};
