import{W as g,r as v,j as e,Y as f,a as x}from"./app-D9ahBqhC.js";import{A as C}from"./AdminAuthenticated-lTOoSsVb.js";import{I as t}from"./InputError-BtkBTcD3.js";import{T as m}from"./TextInput-BPLij89R.js";import{I as c}from"./InputLabel-CFCOx1Zp.js";import{S as w}from"./SelectOption-D-stTlc-.js";import{D as y}from"./DynamicSelect-DgRH0-zc.js";import{F as I}from"./Form-CFvF1wPX.js";import"./Dropdown-D19vaCpq.js";import"./AdminHeader-CSgzBjco.js";import"./PermissionAllow-C-hpl8Tq.js";import"./Fade-Cg8iyQwT.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-BWp3AgNg.js";import"./index-Chjiymov.js";import"./setPrototypeOf-DgZC2w_0.js";import"./BootstrapModalManager-BzAv9hhx.js";import"./Anchor-CiT1PzIr.js";import"./extends-CCbyfPlC.js";import"./index-DJkYJaGR.js";import"./ToastNotification-X_8GOv_9.js";import"./react-select.esm-D3TlozS5.js";import"./useStateManager-7e1e8489.esm-DyWkr5eE.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./emotion-react.browser.esm-CJ7CoFmw.js";import"./hoist-non-react-statics.cjs-CQ0Sc79v.js";import"./react-select-creatable.esm-Bt6aaOau.js";import"./ElementChildren-ngI8Dbxo.js";import"./Col-CvYZd_f6.js";function ie({auth:h,countries:p}){const{data:a,setData:o,post:j,errors:l,reset:_}=g({image:"",name:"",code:"",status:"1",position:"",country:""}),u=s=>{s.preventDefault(),j(route("admin.province.store"))},[n,d]=v.useState(""),N=s=>{const r=s.target.files[0];r&&(o("image",r),d(URL.createObjectURL(r)))},b=()=>{o("image",""),d("")},i=(s,r)=>{o(s,r)};return e.jsxs(C,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Province/Create"}),children:[e.jsx(f,{title:"Province Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Province"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.province.index"),children:"Province"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(m,{id:"name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>i("name",s.target.value),autoComplete:"off"}),e.jsx(t,{message:l.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Code"}),e.jsx(m,{id:"province-code",type:"text",name:"code",className:"form-control",value:a.code,onChange:s=>i("code",s.target.value),autoComplete:"off"}),e.jsx(t,{message:l.code,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Country"}),e.jsx(y,{options:p,onChange:s=>i("country",s),value:a.country}),e.jsx(t,{message:l.country,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(w,{onChange:s=>i("position",s),value:a.position}),e.jsx(t,{message:l.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(I.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:a.status===1,onChange:s=>i("status",s.target.checked?1:0)}),e.jsx(t,{message:l.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[n?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:n,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:b})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(m,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{ie as default};