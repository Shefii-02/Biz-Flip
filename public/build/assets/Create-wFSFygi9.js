import{W as _,r as h,j as e,Y as I,a as p}from"./app-mbB9cBIL.js";import{A as S}from"./AdminAuthenticated-xPnj3WYW.js";import{I as c}from"./InputError-DVl4KS8v.js";import{T as j}from"./TextInput-Bq3i4Xj1.js";import{I as l}from"./InputLabel-D6bz93vo.js";import{S as k}from"./SelectOption-DZGIlFbx.js";import{D as u}from"./DynamicSelect-BNffP33w.js";import{F as D}from"./Form-Bdypvj7O.js";import"./Dropdown-CSn9d9O9.js";import"./AdminSidebar-B-iBc40u.js";import"./listen-uU4Ht3yp.js";import"./useWindow-Bp4PdcAQ.js";import"./Anchor-BXA3Nsnm.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-VSGo5GbR.js";import"./PermissionAllow-DCpYUVTp.js";import"./ToastNotification-YHLlhGoM.js";import"./react-select.esm-CAZgHMej.js";import"./useStateManager-7e1e8489.esm-CqsfXXsP.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-CFbDu7UJ.js";import"./hoist-non-react-statics.cjs-_X6JJ_ny.js";import"./react-select-creatable.esm-yHvm6YSR.js";import"./index-DNemVMA8.js";import"./ElementChildren-eg2bXbJB.js";import"./Col-B1ilUJq7.js";function le({auth:m,countries:N}){const{data:r,setData:o,post:b,errors:i,reset:P}=_({image:"",name:"",status:"1",position:"",country:"",province:""}),g=s=>{s.preventDefault(),b(route("admin.city.store"))},[n,d]=h.useState(""),v=s=>{const a=s.target.files[0];a&&(o("image",a),d(URL.createObjectURL(a)))},f=()=>{o("image",""),d("")},t=(s,a)=>{o(s,a),s==="country"&&w(a)},[C,x]=h.useState([]),w=async s=>{if(!s){x([]);return}try{const y=await(await fetch(`/admin/provinces/${s}`,{headers:{Authorization:`Bearer ${m.token}`}})).json();x(y)}catch(a){console.error("Error fetching provinces:",a)}};return e.jsxs(S,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"City/Create"}),children:[e.jsx(I,{title:"City Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create City"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(p,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(p,{href:route("admin.city.index"),children:"City"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:g,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(j,{id:"name",type:"text",name:"name",className:"form-control",value:r.name,onChange:s=>t("name",s.target.value),autoComplete:"off"}),e.jsx(c,{message:i.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"Country"}),e.jsx(u,{options:N,onChange:s=>t("country",s),value:r.country}),e.jsx(c,{message:i.country,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(u,{options:C,onChange:s=>t("province",s),value:r.province}),e.jsx(c,{message:i.province,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(l,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(k,{onChange:s=>t("position",s),value:r.position}),e.jsx(c,{message:i.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(D.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:r.status===1,onChange:s=>t("status",s.target.checked?1:0)}),e.jsx(c,{message:i.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[n?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:n,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:f})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(j,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:v})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{le as default};
