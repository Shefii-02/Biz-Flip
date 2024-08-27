import{W as U,j as e,Y as y,a as x}from"./app-Bt-mFwUe.js";import{A as w}from"./AdminAuthenticated-C2mwp449.js";import{I as j}from"./InputError-B1revXb_.js";import{T as p}from"./TextInput-KgrMBBen.js";import{I as d}from"./InputLabel-DJJ35U2c.js";import{D as k}from"./DynamicSelect-DAcS7-gY.js";import{S as M}from"./index-7j6cehRR.js";import"./Dropdown-26xZ_kqk.js";import"./AdminHeader-d46GbjFp.js";import"./PermissionAllow-DOxUi5ks.js";import"./Dropdown-CYRjmO_5.js";import"./listen-9ifYQupn.js";import"./useWindow-JOB4t2KT.js";import"./Anchor-_sbeL0Hr.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-QthD7bNs.js";import"./BootstrapModalManager-Di_ap584.js";import"./Fade-Drtsv1Cr.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-RTz732VE.js";import"./ToastNotification-B1tP4kUe.js";import"./react-select.esm-DDYMx-v-.js";import"./Select-49a62830.esm-BD6FB1U9.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./extends-DM2IsgWP.js";import"./emotion-react.browser.esm-BFYtyMPG.js";import"./hoist-non-react-statics.cjs-BQ3zWrEw.js";import"./tiny-invariant.esm-CCoILDQG.js";const oe=({auth:r})=>{const{data:l,setData:i,post:h,errors:c,reset:g}=U({menuItems:[{title:"",landingpageUrl:"",custom_link:"",children:[]}]}),b=a=>{a.preventDefault(),h(route("admin.navigation-menu.store"),{onSuccess:()=>{g()}})},u=()=>{i("menuItems",[...l.menuItems,{title:"",landingpageUrl:"",custom_link:"",children:[]}])},m=a=>{const s=[...l.menuItems];s.splice(a,1),i("menuItems",s)},o=(a,s,t)=>{const n=[...l.menuItems];n[a][s]=t,i("menuItems",n)},v=a=>{const s=[...l.menuItems];s[a].children.push({title:"",landingpageUrl:"page-link",custom_link:"",children:[]}),i("menuItems",s)},_=(a,s)=>{const t=[...l.menuItems];t[a].children.splice(s,1),i("menuItems",t)};return e.jsxs(w,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(y,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(x,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsxs("section",{className:"content",children:[l.menuItems.map((a,s)=>e.jsx("div",{className:"mb-4",children:e.jsxs("div",{className:"tree-node row",children:[e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{htmlFor:`title-${s}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(p,{id:`title-${s}`,className:"form-control",value:a.title,onChange:t=>o(s,"title",t.target.value)}),e.jsx(j,{error:c.title})]})}),e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{htmlFor:`landingpageUrl-${s}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),e.jsx(k,{id:`landingpageUrl-${s}`,className:"form-control",value:a.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:t=>o(s,"landingpageUrl",t)})]})}),a.landingpageUrl==="custom-link"&&e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{htmlFor:`custom_link-${s}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),e.jsx(p,{id:`custom_link-${s}`,className:"form-control",value:a.custom_link,onChange:t=>o(s,"custom_link",t.target.value)}),e.jsx(j,{error:c.custom_link})]})}),e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"mt-1",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-danger",onClick:()=>m(s),children:"Remove"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-primary",onClick:()=>v(s),children:"Add Child"})]})}),e.jsx("div",{className:"col-lg-12",children:e.jsx(M,{tag:"div",options:{animation:150,handle:".move-icon",onEnd:({oldIndex:t,newIndex:n})=>{const N=[...l.menuItems],f=N[s].children,[$]=f.splice(t,1);f.splice(n,0,$),i("menuItems",N)}},children:a.children.map((t,n)=>e.jsx("div",{className:"mb-4 ml-5 child-tree-node",children:e.jsx(C,{node:t,parentIndex:s,childIndex:n,onRemoveParent:()=>_(s,n),onAddChild:()=>v(s),onChange:o,errors:c})},n))})})]})},s)),e.jsx("div",{className:"mt-1",children:e.jsx("button",{type:"button",className:"btn btn-sm btn-dark",onClick:u,children:"Add Part"})}),e.jsx("div",{className:"mt-3",children:e.jsx("button",{type:"submit",className:"btn btn-sm btn-neutral",onClick:b,children:"Save Menu"})})]})]})})]})},C=({node:r,parentIndex:l,childIndex:i,onRemoveParent:h,onAddChild:c,onChange:g,errors:b})=>{const u=(m,o)=>{g(l,m,o)};return e.jsxs("div",{className:"tree-node row",children:[e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{htmlFor:`title-${l}-${i}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(p,{id:`title-${l}-${i}`,className:"form-control",value:r.title,onChange:m=>u("title",m.target.value)})]})}),e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{htmlFor:`landingpageUrl-${l}-${i}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),e.jsx(k,{id:`landingpageUrl-${l}-${i}`,className:"form-control",value:r.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:m=>u("landingpageUrl",m)})]})}),r.landingpageUrl==="custom-link"&&e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(d,{htmlFor:`custom_link-${l}-${i}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),e.jsx(p,{id:`custom_link-${l}-${i}`,className:"form-control",value:r.custom_link,onChange:m=>u("custom_link",m.target.value)}),e.jsx(j,{error:b.custom_link})]})}),e.jsx("div",{className:"col-lg-3 mb-3",children:e.jsxs("div",{className:"mt-1",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-danger move-icon",onClick:()=>h(i),children:"Remove"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-primary move-icon",onClick:()=>c(),children:"Add Child"})]})}),r.children.map((m,o)=>e.jsx("div",{className:"mb-4 ml-5 child-tree-node",children:e.jsx(C,{node:m,parentIndex:l,childIndex:o,onRemoveParent:()=>h(o),onAddChild:()=>c(l),onChange:g,errors:b})},o))]})};export{oe as default};