import{W as v,j as e,Y as N,a as c}from"./app-DvQGNSQ4.js";import{A as k}from"./AdminAuthenticated-CbZKbwF2.js";import{S as I}from"./SortableComponent-EL76vT2I.js";import{I as T}from"./InputLabel-CpOBrnx0.js";import{v as o}from"./v4-DvF23Exx.js";import"./Dropdown-CNPqD9J2.js";import"./AdminSidebar-Bc_gr7bn.js";import"./listen-teOUKAjB.js";import"./useWindow-ByyYJc5W.js";import"./Anchor-CBEY8rV_.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-VMkwHhWH.js";import"./PermissionAllow-CwtACi1H.js";import"./ToastNotification--DPTrFX6.js";import"./react-beautiful-dnd.esm-CbCzDFSb.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./hoist-non-react-statics.cjs-BxRB6118.js";import"./tiny-invariant.esm-CCoILDQG.js";import"./TextInput-fBlOaMfH.js";import"./InputError-B9UL4AG8.js";const C=[{id:o(),linkText:"",linkType:"page_link",customLink:"",children:[]}],U=({auth:m,landingPage:h})=>{const{data:a,setData:d,post:p}=v({title:"",items:C}),x=n=>{if(!n.destination)return;const t=[...a.items],[r]=t.splice(n.source.index,1);if(n.destination.droppableId==="droppable")t.splice(n.destination.index,0,r);else{const l=parseInt(n.destination.droppableId.split("-")[1]),[i]=t.splice(l,1);i.children.splice(n.destination.index,0,r),t.splice(l,0,i)}d("items",t)},u=()=>{const n={id:o(),linkText:"",linkType:"page_link",customLink:"",children:[]};d("items",[...a.items,n])},f=n=>{const t={id:o(),linkText:"",linkType:"page_link",customLink:"",children:[]},r=(l,i)=>l.map(s=>s.id===i?{...s,children:[...s.children,t]}:s.children&&s.children.length?{...s,children:r(s.children,i)}:s);d("items",r(a.items,n))},j=n=>{const t=(r,l)=>r.filter(i=>i.id!==l).map(i=>i.children&&i.children.length?{...i,children:t(i.children,l)}:i);d("items",t(a.items,n))},b=(n,t)=>{const r=(l,i)=>l.map(s=>s.id===i?{...s,...t}:s.children&&s.children.length?{...s,children:r(s.children,i)}:s);d("items",r(a.items,n))},g=n=>{n.preventDefault();let t=!0;const r={};if(a.items.forEach((l,i)=>{l.linkText.trim()||(r[`items.${i}.linkText`]="Link text is required",t=!1),(!l.linkType||l.linkType==="page_link")&&(r[`items.${i}.linkType`]="Link type is required",t=!1)}),!t){d("errors",r),console.log(r);return}p(route("admin.navigation-menu.store"))};return e.jsxs(k,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(N,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(c,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{className:"form-group",children:[e.jsx(T,{htmlFor:"title",className:"fw-700 fs-16 form-label form-group__label",children:"Menu Title"}),e.jsx("input",{type:"text",id:"title",className:"form-control",value:a.title,onChange:n=>d("title",n.target.value)})]}),e.jsx(I,{items:a.items,onDragEnd:x,onAddItem:u,onAddChildItem:f,onDeleteItem:j,onChangeItem:b,landingPage:h}),e.jsx("div",{className:"col-lg-12 text-center mt-5",children:e.jsx("button",{className:"btn btn-success",type:"submit",children:"Submit"})})]})})})})})})]})})]})};export{U as default};
