import{W as p,j as e,Y as b,a as m}from"./app-CJ8gtaWK.js";import{A as N}from"./AdminAuthenticated-VedlVE-1.js";import{I as n}from"./InputError-CXZmLGzP.js";import{T as u}from"./TextInput-BkMZLaX2.js";import{I as f}from"./InputLabel-L28_G93Y.js";import"./SelectOption-M1bIkM26.js";import{F as v}from"./Form-Cg3pJFre.js";import"./PermissionAllow-8aMWW39F.js";import"./AdminSidebar-k5u8Y9Pb.js";import"./objectWithoutPropertiesLoose-mTU-Rj-z.js";import"./ToastNotification-GiQwRqxR.js";import"./react-select.esm-C-Qzknou.js";import"./Select-49a62830.esm-CrE4LB8d.js";import"./inherits-Da4sx5rs.js";import"./extends-Lqyj1dvn.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-BDHRj7Tc.js";import"./index-CM2cCItZ.js";function q({permissionsList:l,auth:t}){const{data:i,setData:r,post:o,errors:c,reset:g}=p({name:"",permissions:[]}),d=s=>{s.preventDefault(),o(route("admin.role-responsibilities.store"))},h=(s,a)=>{r(s,a)},x=s=>{let a;i.permissions.includes(s)?a=i.permissions.filter(j=>j!==s):a=[...i.permissions,s],r("permissions",a)};return e.jsxs(N,{user:t.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities/Create"}),children:[e.jsx(b,{title:"Role & Responsibilities Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Create Role & Responsibilities"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(m,{href:route("admin.role-responsibilities.index"),children:"Role & Responsibilities"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:d,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-12",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(f,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(u,{id:"country-name",type:"text",name:"name",className:"form-control",value:i.name,onChange:s=>h("name",s.target.value),autoComplete:"off"}),e.jsx(n,{message:c.name,className:"mt-2 col-12"})]})})})}),e.jsxs("div",{className:"col-lg-12",children:[e.jsx("h5",{className:"mb-25",children:e.jsx("u",{children:"Allow Permissions"})}),e.jsx(n,{message:c.permissions,className:"mt-2 col-12"}),Object.keys(l).map(s=>e.jsxs("div",{children:[e.jsx("h6",{className:"fw-bold",children:s}),e.jsx("div",{className:"row my-3",children:l[s].map(a=>e.jsx("div",{className:"col-lg-2 col-6",children:e.jsx(v.Check,{type:"checkbox",id:`default-checkbox-${a.id}`,label:a.name,name:"permissions[]",checked:i.permissions.includes(a.id),onChange:()=>x(a.id)})},a.id))})]},s))]})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{q as default};