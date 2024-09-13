import{r as l,j as e,Y as f,a as o,y as v,b as T}from"./app-BuJsMX9a.js";import{A as w}from"./AdminAuthenticated-BXAA85et.js";import{S as d}from"./sweetalert2.all-ww2Xp4Jg.js";import{d as i}from"./index-DClj2o4B.js";/* empty css                                  */import{M as g}from"./ModalPopup-C7waodmN.js";import y from"./ViewRole-BFl93xlA.js";import"./PermissionAllow-CBLTakTv.js";import"./Dropdown-645vnMep.js";import"./AdminHeader-C-6G0QeY.js";import"./Dropdown-B_ALlcem.js";import"./listen-Dt54IMS5.js";import"./useWindow-C6tKL611.js";import"./Anchor-CnRcIUht.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-UvC9uC-Z.js";import"./BootstrapModalManager-BTqy4KRW.js";import"./Fade--4Od6Tpv.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DR9Xsx6b.js";import"./ToastNotification-D5RfjFM1.js";import"./ReactToastify-BFDvHYRN.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./Modal-BBAE1n-Z.js";function $({roleList:c,auth:m,success:h=null,error:x=null}){const[p,r]=l.useState(!1),[a,j]=l.useState(null),b=s=>{d.fire({title:"Are you sure you want to delete this role?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&v.delete(route("admin.role-responsibilities.destroy",s.id),{onSuccess:()=>{d.fire("Deleted!","role has been deleted.","success")}})})},n=()=>r(!1),u=async s=>{try{const N=(await T.get(route("admin.role-responsibilities.show",s.id))).data;j(N),r(!0)}catch(t){console.error("Error fetching data",t)}};return e.jsxs(w,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities"}),success:h,error:x,children:[e.jsx(f,{title:"Role & Responsibilities"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Role & Responsibilities"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(o,{className:"btn btn-info text-end",href:route("admin.role-responsibilities.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(i.Table,{className:"table border-no",id:"example1",children:[e.jsx(i.Thead,{children:e.jsxs(i.Tr,{children:[e.jsx(i.Th,{children:"#"}),e.jsx(i.Th,{children:"Name"}),e.jsx(i.Th,{children:"No of Permissions"}),e.jsx(i.Th,{children:"Last Modified"}),e.jsx(i.Th,{})]})}),e.jsx(i.Tbody,{children:c.data.map(s=>e.jsxs(i.Tr,{className:"hover-primary",children:[e.jsx(i.Td,{children:s.id}),e.jsx(i.Td,{children:s.name}),e.jsx(i.Td,{children:Object.keys(s.permissions).length}),e.jsx(i.Td,{children:window.formatDateTime(s.updated_at)}),e.jsxs(i.Td,{children:[e.jsx("span",{title:"Show",onClick:()=>u(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx(o,{title:"Edit",className:"btn btn-transparent",href:route("admin.role-responsibilities.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})}),s.name!=="admin"&&s.name!=="seller"&&s.name!=="customer"&&e.jsx("button",{title:"Delete",onClick:t=>b(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]})})})})})})})]})}),e.jsx(g,{show:p,handleClose:n,size:"lg",title:"Role Details",children:a?e.jsx(y,{collection:a,handleClose:n}):"Failed fetching data..."})]})}export{$ as default};
