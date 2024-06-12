import{W as R,r as d,j as e,Y as A,a as u}from"./app-CjewbWUq.js";import{A as D}from"./AdminAuthenticated-B6RdVAZp.js";import{I as o}from"./InputError-DqsPzRm2.js";import{T as c}from"./TextInput-NDa9nm39.js";import{I as m}from"./InputLabel-DsaABNIQ.js";import{S as E}from"./SelectOption-BjmQ70Pn.js";import{R as g}from"./RadioButtonLabel-DzknY1tF.js";import{S as B}from"./react-select.esm-Dx1wqq-N.js";import{D as F}from"./DynamicSelect-GhnCWYNw.js";import{F as j}from"./Form-DoItDDT9.js";import"./Dropdown-CJ6RRfHE.js";import"./AdminSidebar-BByzt6BP.js";import"./listen-wp56gr8a.js";import"./useWindow-Cm-iF9fr.js";import"./Anchor-C1shSEEN.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DXXuAbUi.js";import"./PermissionAllow-CRcCMSN3.js";import"./ToastNotification-Chxa-umb.js";import"./useStateManager-7e1e8489.esm-D8xHEF_V.js";import"./inherits-DuN3otLB.js";import"./toPropertyKey-PLuKRk1e.js";import"./setPrototypeOf-DgZC2w_0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./emotion-react.browser.esm-0eDStj_R.js";import"./react-select-creatable.esm-BwnmTHuy.js";import"./index-B4YvV15V.js";function pe({auth:N}){const{data:t,setData:i,post:b,errors:l,reset:M}=R({firstname:"",lastname:"",email:"",password:"",phone:"",address:"",postalcode:"",city:"",province:"",picture:"",short_description:"",description:"",logo:"",company_name:"",full_address:"",alt_email:"",alt_phone:"",lat:"",long:"",employee:"",website:"",designation:"",business_type:"",public_profile_on:"",company_email:"",company_phone:"",position:"",status:"1"}),v=[{id:"mon",label:"Monday"},{id:"tue",label:"Tuesday"},{id:"wed",label:"Wednesday"},{id:"thu",label:"Thursday"},{id:"fri",label:"Friday"},{id:"sat",label:"Saturday"},{id:"sun",label:"Sunday"}],[n,_]=d.useState({mon:!1,tue:!1,wed:!1,thu:!1,fri:!1,sat:!1,sun:!1}),y=s=>{_(r=>({...r,[s]:!r[s]})),i("days",n)},C=[{id:"Agency",label:"Agency"},{id:"Mortgage Brokerage",label:"Mortgage Brokerage"},{id:"Residential Real Estate Agent",label:"Residential Real Estate Agent"},{id:"Commercial Property Broker",label:"Commercial Property Broker"},{id:"Other",label:"Other"}],w=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}],[p,x]=d.useState(""),[h,f]=d.useState(""),S=s=>{const r=s.target.files[0];r&&(i("picture",r),x(URL.createObjectURL(r)))},k=()=>{i("picture",""),x("")},I=s=>{const r=s.target.files[0];r&&(i("logo",r),f(URL.createObjectURL(r)))},P=()=>{i("logo",""),f("")},a=(s,r)=>{i(s,r)},L=async s=>{s.preventDefault(),await b(route("admin.sellers.store"),{preserveScroll:!0,onSuccess:()=>{}})};return e.jsxs(D,{user:N.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Seller/Create"}),children:[e.jsx(A,{title:"Seller Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Seller"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(u,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(u,{href:route("admin.sellers.index"),children:"Sellers"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("form",{onSubmit:L,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsx("h4",{className:"col-lg-12 pb-30",children:e.jsx("u",{children:"Contact Person Information"})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx(c,{id:"firstname",type:"text",name:"firstname",className:"form-control",value:t.firstname,onChange:s=>a("firstname",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.firstname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Last Name"}),e.jsx(c,{id:"lastname",type:"text",name:"lastname",className:"form-control",value:t.lastname,onChange:s=>a("lastname",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.lastname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Email"}),e.jsx(c,{id:"email",type:"text",name:"email",className:"form-control",value:t.email,onChange:s=>a("email",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Phone No"}),e.jsx(c,{id:"phone",type:"text",name:"phone",className:"form-control",value:t.phone,onChange:s=>a("phone",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Password"}),e.jsx(c,{id:"password",type:"text",name:"password",className:"form-control",value:t.password,onChange:s=>a("password",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.password,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Address"}),e.jsx(c,{id:"address",type:"text",name:"address",className:"form-control",value:t.address,onChange:s=>a("address",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.address,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Postal Code"}),e.jsx(c,{id:"postalcode",type:"text",name:"postalcode",className:"form-control",value:t.postalcode,onChange:s=>a("postalcode",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.postalcode,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"City"}),e.jsx(c,{id:"city",type:"text",name:"city",className:"form-control",value:t.city,onChange:s=>a("city",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.city,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(c,{id:"province",type:"text",name:"province",className:"form-control",value:t.province,onChange:s=>a("province",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.province,className:"mt-2 col-12"})]})})]})]}),e.jsx("div",{className:"col-lg-3 d-flex align-items-center",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border   p-3 bg-bubbles-white rounded10  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[p?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:p,alt:"Selected",className:"w-100 h-100 rounded-circle"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:k})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 w-100 h-100 text-center rounded-circle "}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(c,{id:"project_image_path",type:"file",name:"picture",className:"d-none mt-1 block w-full upload",onChange:S})]})]})]})})})]})}),e.jsxs("div",{className:"col-lg-12",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("h4",{className:"col-lg-12 pb-30",children:e.jsx("u",{children:"Company Information"})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Name"}),e.jsx(c,{id:"company_name",type:"text",name:"company_name",className:"form-control",value:t.company_name,onChange:s=>a("company_name",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.company_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Contact Person Designation"}),e.jsx(c,{id:"designation",type:"text",name:"designation",className:"form-control",value:t.designation,onChange:s=>a("designation",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.designation,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Short Bio"}),e.jsx(c,{id:"short_description",type:"text",name:"short_description",className:"form-control",value:t.short_description,onChange:s=>a("short_description",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.short_description,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Description"}),e.jsx("textarea",{id:"description",type:"text",name:"description",className:"form-control",rows:5,value:t.description,onChange:s=>a("description",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.description,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Full Address"}),e.jsx(c,{id:"full_address",type:"text",name:"full_address",className:"form-control",value:t.full_address,onChange:s=>a("full_address",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.full_address,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Latitude"}),e.jsx(c,{id:"lat",type:"text",name:"lat",className:"form-control",value:t.lat,onChange:s=>a("lat",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.lat,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Longtitude"}),e.jsx(c,{id:"long",type:"text",name:"long",className:"form-control",value:t.long,onChange:s=>a("long",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.long,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Email"}),e.jsx(c,{id:"company_email",type:"text",name:"company_email",className:"form-control",value:t.company_email,onChange:s=>a("company_email",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.company_email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Phone No"}),e.jsx(c,{id:"company_phone",type:"text",name:"company_phone",className:"form-control",value:t.company_phone,onChange:s=>a("company_phone",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.company_phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Alternative Emails"}),e.jsx(c,{id:"alt_email",type:"text",name:"alt_email",className:"form-control",value:t.alt_email,onChange:s=>a("alt_email",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.alt_email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Alternative Phone No`s"}),e.jsx(c,{id:"alt_phone",type:"text",name:"alt_phone",className:"form-control",value:t.alt_phone,onChange:s=>a("alt_phone",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.alt_phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Website"}),e.jsx(c,{id:"website",type:"text",name:"website",className:"form-control",value:t.website,onChange:s=>a("website",s.target.value),autoComplete:"off"}),e.jsx(o,{message:l.website,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"No Employees"}),e.jsx(F,{onChange:s=>{a("employee",s)},name:"employee",options:w}),e.jsx(o,{message:l.employee,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Business Type"}),e.jsx(B,{onChange:s=>{a("business_type",s.value)},name:"business_type",options:C.map(s=>({value:s.id,label:s.label}))}),e.jsx(o,{message:l.business_type,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(E,{onChange:s=>a("position",s),value:t.position}),e.jsx(o,{message:l.position,className:"mt-2 col-12"})]})})]})}),e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"border  p-3 bg-bubbles-white rounded10  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Logo"}),e.jsxs("div",{className:"product-img",children:[h?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:h,alt:"Selected",className:"w-100 h-100 text-center rounded-circle"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:P})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center w-100 h-100 rounded-circle"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>document.getElementById("project_image_path2").click(),children:"Choose Image"}),e.jsx(c,{id:"project_image_path2",type:"file",name:"logo",className:"d-none mt-1 block w-full upload",onChange:I})]})]})]})}),e.jsxs("div",{className:"col-md-12 mb-3",children:[e.jsxs("div",{className:"form-group px-20",children:[e.jsx(m,{className:"fw-700  form-label small",children:"Available Days"}),e.jsx("div",{className:"row pt-5",children:v.map(s=>e.jsx("div",{className:"col-12",children:e.jsx(j.Check,{type:"checkbox",id:`default-checkbox-${s.id}`,name:s.id,label:e.jsxs(e.Fragment,{children:[s.label,n[s.id]?e.jsx("span",{className:"text-success",children:" (opened)"}):e.jsx("span",{className:"text-danger",children:" (closed)"})]}),checked:n[s.id],onChange:()=>y(s.id)})},s.id))})]}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsx("div",{className:"form-group px-30",children:e.jsx(j.Check,{type:"switch",id:"custom-switch",name:"public_profile_on",label:"Public Profile Show"})})})]})]})})]}),e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group px-10",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(g,{name:"status",onChange:s=>a("status",s),value:"1",checked:t.status==="1",label:"Published"}),e.jsx(g,{name:"status",onChange:s=>a("status",s),value:"0",checked:t.status==="0",label:"Draft"}),e.jsx(o,{message:l.status,className:"mt-2 col-12"})]})]})})]}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{pe as default};