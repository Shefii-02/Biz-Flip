import{W as y,r as x,j as e,Y as C,a as w}from"./app-BuJsMX9a.js";import{A as S}from"./AdminAuthenticated-BXAA85et.js";import{I as c}from"./InputError-PIeg-NW1.js";import{T as l}from"./TextInput-qSTR89Yk.js";import{I as i}from"./InputLabel-BmOMTHvq.js";import"./SelectOption-QKbbO_rb.js";import"./PermissionAllow-CBLTakTv.js";import"./Dropdown-645vnMep.js";import"./AdminHeader-C-6G0QeY.js";import"./Dropdown-B_ALlcem.js";import"./listen-Dt54IMS5.js";import"./useWindow-C6tKL611.js";import"./Anchor-CnRcIUht.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-UvC9uC-Z.js";import"./BootstrapModalManager-BTqy4KRW.js";import"./Fade--4Od6Tpv.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DR9Xsx6b.js";import"./ToastNotification-D5RfjFM1.js";import"./ReactToastify-BFDvHYRN.js";import"./react-select.esm-C6V2Yb7I.js";import"./Select-49a62830.esm-B7ro22xL.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-BxmLjlk2.js";import"./hoist-non-react-statics.cjs-DzzeXKvG.js";function oe({app_settings:s,queryParams:D=null,auth:g,success:j=null,error:b=null}){const{data:m,setData:n,post:f,errors:r,reset:R}=y({splash_screen:"",app_background:"",apiKey:s.apiKey||"",authDomain:s.authDomain||"",databaseURL:s.databaseURL||"",projectId:s.projectId||"",storageBucket:s.storageBucket||"",messagingSenderId:s.messagingSenderId||"",appId:s.appId||"",measurementId:s.measurementId||"",_method:"PUT",remove_image:!1,remove_image2:!1}),N=a=>{a.preventDefault(),f(route("admin.app-settings.update",s.id))},[u,d]=x.useState(""),[h,p]=x.useState(""),v=a=>{const t=a.target.files[0];t&&(n("splash_screen",t),d(URL.createObjectURL(t)))},I=()=>{n("splash_screen",""),d(""),n("remove_image",!0)},k=a=>{const t=a.target.files[0];t&&(n("app_background",t),p(URL.createObjectURL(t)))},_=()=>{n("app_background",""),p(""),n("remove_image2",!0)};x.useEffect(()=>{s.splash_screen&&d(s.splash_screen),s.app_background&&p(s.app_background)},[s.splash_screen,s.app_background]);const o=(a,t)=>{n(a,t)};return e.jsxs(S,{user:g.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"App Settings"}),success:j,error:b,children:[e.jsx(C,{title:"App Settings"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"App Settings"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(w,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"App Settings"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:N,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Firebase ApiKey"}),e.jsx(l,{id:"apiKey",type:"text",name:"apiKey",className:"form-control",value:m.apiKey,onChange:a=>o("apiKey",a.target.value),autoComplete:"off"}),e.jsx(c,{message:r.apiKey,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Firebase AuthDomain"}),e.jsx(l,{id:"authDomain",type:"text",name:"authDomain",className:"form-control",value:m.authDomain,onChange:a=>o("authDomain",a.target.value),autoComplete:"off"}),e.jsx(c,{message:r.authDomain,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Database URL"}),e.jsx(l,{id:"databaseURL",type:"text",name:"databaseURL",className:"form-control",value:m.databaseURL,onChange:a=>o("databaseURL",a.target.value),autoComplete:"off"}),e.jsx(c,{message:r.databaseURL,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Project Id"}),e.jsx(l,{id:"projectId",type:"text",name:"projectId",className:"form-control",value:m.projectId,onChange:a=>o("projectId",a.target.value),autoComplete:"off"}),e.jsx(c,{message:r.projectId,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Storage Bucket"}),e.jsx(l,{id:"storageBucket",type:"text",name:"storageBucket",className:"form-control",value:m.storageBucket,onChange:a=>o("storageBucket",a.target.value),autoComplete:"off"}),e.jsx(c,{message:r.storageBucket,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Messaging Sender Id"}),e.jsx(l,{id:"messagingSenderId",type:"text",name:"messagingSenderId",className:"form-control",value:m.messagingSenderId,onChange:a=>o("messagingSenderId",a.target.value),autoComplete:"off"}),e.jsx(c,{message:r.messagingSenderId,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"App Id"}),e.jsx(l,{id:"appId",type:"text",name:"appId",className:"form-control",value:m.appId,onChange:a=>o("appId",a.target.value),autoComplete:"off"}),e.jsx(c,{message:r.appId,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(i,{className:"fw-700 fs-16 form-label form-group__label",children:"Measurement Id"}),e.jsx(l,{id:"measurementId",type:"text",name:"measurementId",className:"form-control",value:m.measurementId,onChange:a=>o("measurementId",a.target.value),autoComplete:"off"}),e.jsx(c,{message:r.measurementId,className:"mt-2 col-12"})]})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Splash Screen"}),e.jsxs("div",{className:"desktop-img",children:[u?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:u,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:I})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(l,{id:"project_image_path",type:"file",name:"picture_desktop",className:"d-none mt-1 block w-full upload",onChange:v})]})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"App Background"}),e.jsxs("div",{className:"desktop-img",children:[h?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:h,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:_})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path2").click(),children:"Choose Image"}),e.jsx(l,{id:"project_image_path2",type:"file",name:"picture_mobile",className:"d-none mt-1 block w-full upload",onChange:k})]})]})]})})]})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Update Data"]})})]})})})})})})]})})]})}export{oe as default};
