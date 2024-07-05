import{W as I,r as d,j as e,Y as S,a as j}from"./app-Cp6npgci.js";import{A as k}from"./AdminAuthenticated-CNVEnC_w.js";import{I as t}from"./InputError-DViU4MWI.js";import{T as f}from"./TextInput-BJtF79d6.js";import{I as n}from"./InputLabel-Caj0aB1c.js";import{S as P}from"./SelectOption-D9xQxzPH.js";import{D as g}from"./DynamicSelect-DnkqkJbd.js";import{F as D}from"./Form-D7TwxohJ.js";import"./Dropdown-BZmTeSXa.js";import"./AdminHeader-habo1Axa.js";import"./PermissionAllow-CdIqhLkM.js";import"./Fade-BS4F3XMu.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./BootstrapModalManager-DRvpUVeQ.js";import"./index-CepUJMv7.js";import"./Anchor-Bd0qquRR.js";import"./extends-CCbyfPlC.js";import"./index-HKqeB3Cm.js";import"./ToastNotification-pkvhd7Ns.js";import"./react-select.esm-C9HmEZhU.js";import"./useStateManager-7e1e8489.esm-BPBIJBiO.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./emotion-react.browser.esm-DBLkH3J1.js";import"./hoist-non-react-statics.cjs-4emqVRWP.js";import"./react-select-creatable.esm-BJJY6_sW.js";import"./ElementChildren-CRjmzAYa.js";import"./Col-4LD2RvU2.js";function me({city_item:a,queryParams:A=null,auth:h,countries:N}){console.log(a);const{data:i,setData:c,post:b,errors:o,reset:R}=I({image:"",name:a.name||"",status:(a.status=="published",1),position:a.position||"",_method:"PUT",remove_image:!1,country:a.country,province:a.province}),[p,m]=d.useState("");d.useEffect(()=>{a.image&&m(a.image),a.country&&u(a.country_id)},[a.image,a.country]);const v=s=>{const r=s.target.files[0];r&&(c("image",r),m(URL.createObjectURL(r)))},w=()=>{c("image",""),m(""),c("remove_image",!0)},C=s=>{s.preventDefault(),b(route("admin.city.update",a.id))},[y,x]=d.useState([]),u=async s=>{if(!s){x([]);return}try{const E=await(await fetch(`/admin/provinces/${s}`,{headers:{Authorization:`Bearer ${h.token}`}})).json();x(E)}catch(r){console.error("Error fetching provinces:",r)}},l=(s,r)=>{c(s,r),s==="country"&&u(r)};return e.jsxs(k,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"City/Edit"}),children:[e.jsx(S,{title:"City Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit City"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(j,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(j,{href:route("admin.city.index"),children:"City"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:C,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(f,{id:"name",type:"text",name:"name",className:"form-control",value:i.name,onChange:s=>l("name",s.target.value),autoComplete:"off"}),e.jsx(t,{message:o.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Country"}),e.jsx(g,{options:N,onChange:s=>l("country",s),defaultValue:i.country,value:i.country}),e.jsx(t,{message:o.country,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(g,{options:y,onChange:s=>l("province",s),defaultValue:i.province,value:i.province}),e.jsx(t,{message:o.province,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(P,{onChange:s=>l("position",s),value:i.position,defaultValue:i.position}),e.jsx(t,{message:o.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ps-3 ",children:[e.jsx("label",{className:"fw-700  form-label",children:"Status"}),e.jsx(D.Check,{type:"switch",id:"custom-switch",name:"status",label:"Publish",role:"button",checked:i.status===1,onChange:s=>l("status",s.target.checked?1:0)}),e.jsx(t,{message:o.status,className:"mt-2 col-12"})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[p?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:p,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:w})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(f,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:v})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn  btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{me as default};