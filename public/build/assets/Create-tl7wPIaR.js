import{W as j,j as e,Y as N,a as m}from"./app-mbB9cBIL.js";import{A as b}from"./AdminAuthenticated-xPnj3WYW.js";import{S as g}from"./SortableComponent-BurJIgr-.js";import{I as v}from"./InputLabel-D6bz93vo.js";import"./Dropdown-CSn9d9O9.js";import"./AdminSidebar-B-iBc40u.js";import"./listen-uU4Ht3yp.js";import"./useWindow-Bp4PdcAQ.js";import"./Anchor-BXA3Nsnm.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-VSGo5GbR.js";import"./PermissionAllow-DCpYUVTp.js";import"./ToastNotification-YHLlhGoM.js";import"./react-beautiful-dnd.esm-KtIEEJbU.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./hoist-non-react-statics.cjs-_X6JJ_ny.js";import"./tiny-invariant.esm-CCoILDQG.js";import"./TextInput-Bq3i4Xj1.js";import"./InputError-DVl4KS8v.js";const f=[{id:"item-1",linkText:"",linkType:"page_link",customLink:""}],J=({auth:l,landingPage:r})=>{const{data:i,setData:a,post:o}=j({title:"",items:f}),c=t=>{if(!t.destination)return;const n=i.items[t.source.index],s=[...i.items];s.splice(t.source.index,1),s.splice(t.destination.index,0,n),a("items",s)},d=()=>{const t={id:`item-${i.items.length+1}`,linkText:"",linkType:"page_link",customLink:""};a("items",[...i.items,t])},x=t=>{const n=i.items.filter((s,u)=>u!==t);a("items",n)},h=(t,n)=>{const s=[...i.items];s[t]=n,a("items",s)},p=t=>{t.preventDefault(),o(route("admin.navigation-menu.store"))};return e.jsxs(b,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(N,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(m,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{className:"form-group",children:[e.jsx(v,{htmlFor:"title",className:"fw-700 fs-16 form-label form-group__label",children:"Menu Title"}),e.jsx("input",{type:"text",id:"title",className:"form-control",value:i.title,onChange:t=>a("title",t.target.value)})]}),e.jsx(g,{items:i.items,onDragEnd:c,onAddItem:d,onDeleteItem:x,onChangeItem:h,landingPage:r}),e.jsx("div",{className:"col-lg-12 text-left",children:e.jsx("button",{className:"btn btn-success",type:"submit",children:"Submit"})})]})})})})})})]})})]})};export{J as default};
