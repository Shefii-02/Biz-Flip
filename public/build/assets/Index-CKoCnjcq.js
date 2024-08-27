import{r as l,j as e,Y as f,a as o,y as v,b as T}from"./app-Bt-mFwUe.js";import{A as w}from"./AdminAuthenticated-C2mwp449.js";import{S as d}from"./sweetalert2.all-C6JxherP.js";import{d as s}from"./index-CglMWFtm.js";/* empty css                                  */import{M as g}from"./ModalPopup-bsFobsc6.js";import y from"./ViewRole-Dsbsctv0.js";import"./PermissionAllow-DOxUi5ks.js";import"./Dropdown-26xZ_kqk.js";import"./AdminHeader-d46GbjFp.js";import"./Dropdown-CYRjmO_5.js";import"./listen-9ifYQupn.js";import"./useWindow-JOB4t2KT.js";import"./Anchor-_sbeL0Hr.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-QthD7bNs.js";import"./BootstrapModalManager-Di_ap584.js";import"./Fade-Drtsv1Cr.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-RTz732VE.js";import"./ToastNotification-B1tP4kUe.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-DM2IsgWP.js";import"./defineProperty-DpFVb8oi.js";import"./Modal-CqSFdCcH.js";function Z({roleList:c,auth:m,success:h=null,error:x=null}){const[p,r]=l.useState(!1),[a,j]=l.useState(null),b=i=>{d.fire({title:"Are you sure you want to delete this role?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&v.delete(route("admin.role-responsibilities.destroy",i.id),{onSuccess:()=>{d.fire("Deleted!","role has been deleted.","success")}})})},n=()=>r(!1),u=async i=>{try{const N=(await T.get(route("admin.role-responsibilities.show",i.id))).data;j(N),r(!0)}catch(t){console.error("Error fetching data",t)}};return e.jsxs(w,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities"}),success:h,error:x,children:[e.jsx(f,{title:"Role & Responsibilities"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Role & Responsibilities"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(o,{className:"btn btn-info text-end",href:route("admin.role-responsibilities.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"No of Permissions"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:c.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsx(s.Td,{children:i.name}),e.jsx(s.Td,{children:Object.keys(i.permissions).length}),e.jsx(s.Td,{children:window.formatDateTime(i.updated_at)}),e.jsxs(s.Td,{children:[e.jsx("span",{title:"Show",onClick:()=>u(i),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx(o,{title:"Edit",className:"btn btn-transparent",href:route("admin.role-responsibilities.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})}),i.name!=="admin"&&i.name!=="seller"&&e.jsx("button",{title:"Delete",onClick:t=>b(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},i.id))})]})})})})})})})]})}),e.jsx(g,{show:p,handleClose:n,size:"lg",title:"Role Details",children:a?e.jsx(y,{collection:a,handleClose:n}):"Failed fetching data..."})]})}export{Z as default};
