<<<<<<<< HEAD:public/build/assets/Index-BSJLiAdv.js
import{W as u,r as g,j as e,Y as N,a as f,b as m}from"./app-NOf8Ud2Y.js";import{A as w}from"./AdminAuthenticated-BvfjHjqe.js";import{P as c}from"./PermissionAllow-DuJ9Iv_Y.js";import{d as s}from"./index-Btq9algJ.js";/* empty css                                  */import{S as t}from"./sweetalert2.all-DvqkVDG2.js";import"./Dropdown-BeYQcZ-k.js";import"./AdminHeader-CMTsUJ_A.js";import"./Dropdown-DvMLigQO.js";import"./listen-DAonDIvx.js";import"./useWindow-CHvFuoXy.js";import"./Anchor-Bk6fN3Km.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-Blf2R5jN.js";import"./BootstrapModalManager-BrrHINVF.js";import"./Fade-BeIZaMCs.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-0eJ9DX1U.js";import"./ToastNotification-beDGr7FA.js";import"./ReactToastify-Dj4qrOSt.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";function K({files:h=[],images:p=[],auth:x}){u({db_name:"",image_name:""});const[j,i]=g.useState(!1),b=r=>{i(!0);const a={url:route("admin.backups.update-images"),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:{image_name:r}};t.fire({title:"Are you sure you want to restore this Images?",text:"Once restored, old data cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, Restore it!"}).then(async n=>{if(n.isConfirmed)try{await m(a).then(o=>{o.status?t.fire("Restored!","Images have been restored.","success"):t.fire("Error!","There was an error restoring the images.","error")})}catch{i(!1),t.fire("Error!","There was an error restored the images.","error")}finally{i(!1)}})},d=async r=>{i(!0);const a={url:route("admin.backups.download"),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},responseType:"blob",data:{image_name:r}};try{const n=await m(a);if(n.status===200){const o=new Blob([n.data],{type:n.headers["content-type"]}),l=document.createElement("a");l.href=window.URL.createObjectURL(o),l.download=r,l.click(),window.URL.revokeObjectURL(l.href)}else t.fire("Error!","There was an error downloading the file.","error")}catch{i(!1),t.fire("Error!","There was an error downloading the file.","error")}finally{i(!1)}};return e.jsxs(w,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Backup Files"}),children:[e.jsx(N,{title:"Backup Files"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Backup Files"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(f,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Backup Files"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(c,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"Image File"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:p.map((r,a)=>e.jsxs(s.Tr,{children:[e.jsx(s.Td,{children:r.name}),e.jsx(s.Td,{align:"right",children:e.jsxs(c,{permission:"Category Show",children:[e.jsx("span",{onClick:()=>b(r.originalName),title:"Restore",className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-arrow-clockwise"})}),e.jsx("span",{onClick:()=>d(r.originalName),title:"Download",className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-download"})})]})})]},a))})]})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"Database Name"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:h.map((r,a)=>e.jsxs(s.Tr,{children:[e.jsx(s.Td,{children:r.name}),e.jsx(s.Td,{align:"right",children:e.jsx(c,{permission:"Category Show",children:e.jsx("span",{onClick:()=>d(r.originalName),title:"Download",className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-download"})})})})]},a))})]})})]})})})})})})]})}),j&&e.jsx("div",{className:"loader",children:"Loading..."})]})}export{K as default};
========
import{W as u,r as g,j as e,Y as N,a as f,b as m}from"./app-DvZEQs7q.js";import{A as w}from"./AdminAuthenticated-znZDMwen.js";import{P as c}from"./PermissionAllow-DjiL2LeK.js";import{d as s}from"./index-NlZy6jqC.js";/* empty css                                  */import{S as t}from"./sweetalert2.all-BCTOxUKZ.js";import"./Dropdown-BatJtg61.js";import"./AdminHeader-CrVBgSW2.js";import"./Dropdown-CuQS9aha.js";import"./listen-B73106F4.js";import"./useWindow-DCw2ZySZ.js";import"./Anchor-CDa32GWz.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DeYRaHSg.js";import"./BootstrapModalManager-DtfyV_Y4.js";import"./Fade-nrbR4rxK.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BHIby_lu.js";import"./ToastNotification-Yj8jc6-v.js";import"./ReactToastify-uiHPkRGu.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";function K({files:h=[],images:p=[],auth:x}){u({db_name:"",image_name:""});const[j,i]=g.useState(!1),b=r=>{i(!0);const a={url:route("admin.backups.update-images"),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:{image_name:r}};t.fire({title:"Are you sure you want to restore this Images?",text:"Once restored, old data cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, Restore it!"}).then(async n=>{if(n.isConfirmed)try{await m(a).then(o=>{o.status?t.fire("Restored!","Images have been restored.","success"):t.fire("Error!","There was an error restoring the images.","error")})}catch{i(!1),t.fire("Error!","There was an error restored the images.","error")}finally{i(!1)}})},d=async r=>{i(!0);const a={url:route("admin.backups.download"),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},responseType:"blob",data:{image_name:r}};try{const n=await m(a);if(n.status===200){const o=new Blob([n.data],{type:n.headers["content-type"]}),l=document.createElement("a");l.href=window.URL.createObjectURL(o),l.download=r,l.click(),window.URL.revokeObjectURL(l.href)}else t.fire("Error!","There was an error downloading the file.","error")}catch{i(!1),t.fire("Error!","There was an error downloading the file.","error")}finally{i(!1)}};return e.jsxs(w,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Backup Files"}),children:[e.jsx(N,{title:"Backup Files"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Backup Files"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(f,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Backup Files"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(c,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"Image File"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:p.map((r,a)=>e.jsxs(s.Tr,{children:[e.jsx(s.Td,{children:r.name}),e.jsx(s.Td,{align:"right",children:e.jsxs(c,{permission:"Category Show",children:[e.jsx("span",{onClick:()=>b(r.originalName),title:"Restore",className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-arrow-clockwise"})}),e.jsx("span",{onClick:()=>d(r.originalName),title:"Download",className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-download"})})]})})]},a))})]})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"Database Name"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:h.map((r,a)=>e.jsxs(s.Tr,{children:[e.jsx(s.Td,{children:r.name}),e.jsx(s.Td,{align:"right",children:e.jsx(c,{permission:"Category Show",children:e.jsx("span",{onClick:()=>d(r.originalName),title:"Download",className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-download"})})})})]},a))})]})})]})})})})})})]})}),j&&e.jsx("div",{className:"loader",children:"Loading..."})]})}export{K as default};
>>>>>>>> 470c74d89ca7d7db853d4fce4809f9e3b5a4e1a7:public/build/assets/Index-Bl3hi0Kf.js