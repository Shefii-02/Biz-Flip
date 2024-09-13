import{r as n,W as M,j as e,Y as O,a as b}from"./app-DvZEQs7q.js";import{A as U}from"./AdminAuthenticated-znZDMwen.js";import{I as t}from"./InputError-BLcqGYnS.js";import{T as r}from"./TextInput-D1PlEwEu.js";import{I as o}from"./InputLabel-25ByoFv4.js";import"./SelectOption-CKRKq1mz.js";import{S as V}from"./react-select.esm-BVUURsEn.js";import{D as d}from"./DynamicSelect-C0SWDV6o.js";import{F as h}from"./Form-CQI4Qylm.js";import"./PermissionAllow-DjiL2LeK.js";import{I as N}from"./InputGroup-DWga3ard.js";import"./Dropdown-BatJtg61.js";import"./AdminHeader-CrVBgSW2.js";import"./Dropdown-CuQS9aha.js";import"./listen-B73106F4.js";import"./useWindow-DCw2ZySZ.js";import"./Anchor-CDa32GWz.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DeYRaHSg.js";import"./BootstrapModalManager-DtfyV_Y4.js";import"./Fade-nrbR4rxK.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BHIby_lu.js";import"./ToastNotification-Yj8jc6-v.js";import"./ReactToastify-uiHPkRGu.js";import"./Select-49a62830.esm-D0RUBDeS.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-xdAJojEI.js";import"./hoist-non-react-statics.cjs-B9q_QMYK.js";import"./ElementChildren-BWHT-j42.js";import"./Col-Dw8Pa575.js";function Ce({auth:v,cities:_,provinces:y,featureLabel:C}){const[p,w]=n.useState(!1),{data:l,setData:i,post:S,errors:m,reset:W}=M({firstname:"",lastname:"",email:"",password:"",phone:"",address:"",postalcode:"",city:"",province:"",picture:"",short_description:"",description:"",logo:"",company_name:"",full_address:"",alt_email:"",alt_phone:"",lat:"",long:"",employee:"",website:"",designation:"",business_type:"",public_profile_on:"",company_email:"",company_phone:"",position:"",featureLabel:"",status:"1"}),k=[{id:"mon",label:"Monday"},{id:"tue",label:"Tuesday"},{id:"wed",label:"Wednesday"},{id:"thu",label:"Thursday"},{id:"fri",label:"Friday"},{id:"sat",label:"Saturday"},{id:"sun",label:"Sunday"}],[x,I]=n.useState({mon:!1,tue:!1,wed:!1,thu:!1,fri:!1,sat:!1,sun:!1}),L=s=>{I(c=>({...c,[s]:!c[s]})),i("days",x)},P=[{id:"Agency",label:"Agency"},{id:"Mortgage Brokerage",label:"Mortgage Brokerage"},{id:"Residential Real Estate Agent",label:"Residential Real Estate Agent"},{id:"Commercial Property Broker",label:"Commercial Property Broker"},{id:"Other",label:"Other"}],A=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}],[f,u]=n.useState(""),[g,j]=n.useState(""),E=s=>{const c=s.target.files[0];c&&(i("picture",c),u(URL.createObjectURL(c)))},R=()=>{i("picture",""),u("")},D=s=>{const c=s.target.files[0];c&&(i("logo",c),j(URL.createObjectURL(c)))},B=()=>{i("logo",""),j("")},a=(s,c)=>{i(s,c)},T=async s=>{s.preventDefault(),await S(route("admin.sellers.store"),{preserveScroll:!0,onSuccess:()=>{}})},F=()=>{w(!p)};return e.jsxs(U,{user:v.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Seller/Create"}),children:[e.jsx(O,{title:"Seller Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Seller"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(b,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(b,{href:route("admin.sellers.index"),children:"Sellers"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("form",{onSubmit:T,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsx("h4",{className:"col-lg-12 pb-30",children:e.jsx("u",{children:"Contact Person"})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx(r,{id:"firstname",type:"text",name:"firstname",className:"form-control",value:l.firstname,onChange:s=>a("firstname",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.firstname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Last Name"}),e.jsx(r,{id:"lastname",type:"text",name:"lastname",className:"form-control",value:l.lastname,onChange:s=>a("lastname",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.lastname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Email"}),e.jsx(r,{id:"email",type:"text",name:"email",className:"form-control",value:l.email,onChange:s=>a("email",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Phone No"}),e.jsx(r,{id:"phone",type:"text",name:"phone",className:"form-control",value:l.phone,onChange:s=>a("phone",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Designation"}),e.jsx(r,{id:"designation",type:"text",name:"designation",className:"form-control",value:l.designation,onChange:s=>a("designation",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.designation,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Password"}),e.jsxs(N,{className:"mb-3",children:[e.jsx(r,{id:"password",type:p?"text":"password",name:"password",className:"form-control",autoComplete:"new-password",value:l.password,onChange:s=>a("password",s.target.value)}),e.jsx(N.Text,{id:"inputGroup-sizing-sm",children:e.jsx("i",{role:"button",className:`bi ${p?"bi-eye":"bi-eye-slash"}`,onClick:F})})]}),e.jsx(t,{message:m.password,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Address"}),e.jsx(r,{id:"address",type:"text",name:"address",className:"form-control",value:l.address,onChange:s=>a("address",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.address,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Postal Code"}),e.jsx(r,{id:"postalcode",type:"text",name:"postalcode",className:"form-control",value:l.postalcode,onChange:s=>a("postalcode",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.postalcode,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"City"}),e.jsx(d,{onChange:s=>a("city",s),value:l.city,options:_,name:"city",defaultValue:l.city}),e.jsx(t,{message:m.city,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(d,{onChange:s=>a("province",s),value:l.province,options:y,name:"province",defaultValue:l.province}),e.jsx(t,{message:m.province,className:"mt-2 col-12"})]})})]})]}),e.jsx("div",{className:"col-lg-3 d-flex align-items-center",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border   p-3 bg-gray-100 rounded10  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[f?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:f,alt:"Selected",className:"avatar-xxxl rounded-circle"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:R})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 avatar-xxxl text-center rounded-circle "}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-natural  btn-sm",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(r,{id:"project_image_path",type:"file",name:"picture",className:"d-none mt-1 block w-full upload",onChange:E})]})]})]})})})]})}),e.jsxs("div",{className:"col-lg-12",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("h4",{className:"col-lg-12 pb-30",children:e.jsx("u",{children:"Company Information"})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Name"}),e.jsx(r,{id:"company_name",type:"text",name:"company_name",className:"form-control",value:l.company_name,onChange:s=>a("company_name",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.company_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Description"}),e.jsx("textarea",{id:"description",type:"text",name:"description",className:"form-control",rows:5,value:l.description,onChange:s=>a("description",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.description,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Address"}),e.jsx(r,{id:"full_address",type:"text",name:"full_address",className:"form-control",value:l.full_address,onChange:s=>a("full_address",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.full_address,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Latitude"}),e.jsx(r,{id:"lat",type:"text",name:"lat",className:"form-control",value:l.lat,onChange:s=>a("lat",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.lat,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Longtitude"}),e.jsx(r,{id:"long",type:"text",name:"long",className:"form-control",value:l.long,onChange:s=>a("long",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.long,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Email"}),e.jsx(r,{id:"company_email",type:"text",name:"company_email",className:"form-control",value:l.company_email,onChange:s=>a("company_email",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.company_email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Phone No"}),e.jsx(r,{id:"company_phone",type:"text",name:"company_phone",className:"form-control",value:l.company_phone,onChange:s=>a("company_phone",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.company_phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Alternative Emails"}),e.jsx(r,{id:"alt_email",type:"text",name:"alt_email",className:"form-control",value:l.alt_email,onChange:s=>a("alt_email",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.alt_email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Alternative Phone No`s"}),e.jsx(r,{id:"alt_phone",type:"text",name:"alt_phone",className:"form-control",value:l.alt_phone,onChange:s=>a("alt_phone",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.alt_phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Website"}),e.jsx(r,{id:"website",type:"text",name:"website",className:"form-control",value:l.website,onChange:s=>a("website",s.target.value),autoComplete:"off"}),e.jsx(t,{message:m.website,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"No Employees"}),e.jsx(d,{onChange:s=>{a("employee",s)},name:"employee",options:A}),e.jsx(t,{message:m.employee,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Business Type"}),e.jsx(V,{onChange:s=>{a("business_type",s.value)},name:"business_type",options:P.map(s=>({value:s.id,label:s.label}))}),e.jsx(t,{message:m.business_type,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Feature Label"}),e.jsx(d,{onChange:s=>a("featureLabel",s),value:l.featureLabel,options:C,name:"featureLabel",defaultValue:l.featureLabel})]})})]})}),e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"border  p-3 bg-gray-100 rounded10  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Logo"}),e.jsxs("div",{className:"product-img",children:[g?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:g,alt:"Selected",className:"avatar-xxxl text-center rounded-circle"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:B})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center avatar-xxxl rounded-circle"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-natural  btn-sm",onClick:()=>document.getElementById("project_image_path2").click(),children:"Choose Image"}),e.jsx(r,{id:"project_image_path2",type:"file",name:"logo",className:"d-none mt-1 block w-full upload",onChange:D})]})]})]})}),e.jsxs("div",{className:"col-md-12 mb-3",children:[e.jsxs("div",{className:"form-group px-20",children:[e.jsx(o,{className:"fw-700  form-label small",children:"Available Days"}),e.jsx("div",{className:"row pt-5",children:k.map(s=>e.jsx("div",{className:"col-12",children:e.jsx(h.Check,{type:"checkbox",id:`default-checkbox-${s.id}`,name:s.id,label:e.jsxs(e.Fragment,{children:[s.label,x[s.id]?e.jsx("span",{className:"text-success",children:" (opened)"}):e.jsx("span",{className:"text-danger",children:" (closed)"})]}),checked:x[s.id],onChange:()=>L(s.id)})},s.id))})]}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsx("div",{className:"form-group px-30",children:e.jsx(h.Check,{type:"switch",id:"custom-switch",name:"public_profile_on",label:"Show Public Profile",role:"button",onChange:s=>a("public_profile_on",s.target.checked?1:0)})})})]})]})})]}),e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group px-10",children:[e.jsx("label",{className:" fs-14 form-label",children:"Status"}),e.jsx(h.Check,{type:"switch",id:"custom-switch-status",name:"status",label:"Active",role:"button",onChange:s=>a("status",s.target.checked?1:0)})]})})]}),e.jsx("div",{className:"form-actions mt-10 col-lg-12 text-left",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{Ce as default};