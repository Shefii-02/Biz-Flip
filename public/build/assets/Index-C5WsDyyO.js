import{j as e,Y as c,a as r,y as o}from"./app-B6HJ7lp1.js";import{A as h}from"./AdminAuthenticated-C-7bt9ji.js";import{P as i}from"./PermissionAllow-syxqwq8s.js";import"./Dropdown-BVFye-0k.js";import"./AdminSidebar-Be_FS12E.js";import"./listen-DHrJC07s.js";import"./useWindow-N7JEgl-N.js";import"./Anchor-CC1UpRJd.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-Cob9jMlK.js";import"./ToastNotification-CeNNScY0.js";import"./ReactToastify-BzgMDz3e.js";function A({labelList:t,auth:a,success:d=null,error:l=null}){const n=s=>{window.confirm("Are you sure you want to delete the Feature label?")&&o.delete(route("admin.feature-label.destroy",s.id))};return e.jsxs(h,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature Label"}),success:d,error:l,children:[e.jsx(c,{title:"Feature Label List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Feature Label"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(i,{permission:"Feature Label Create",children:e.jsxs(r,{className:"btn btn-info text-end",href:route("admin.feature-label.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsx(i,{permission:"Feature Label Listing",message:!0,children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Color"}),e.jsx("th",{children:"Priority"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:t.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:s.name}),e.jsx("td",{children:e.jsx("div",{style:{backgroundColor:s.color,width:"20px",height:"20px"}})}),e.jsx("td",{children:s.priority}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(i,{permission:"Feature Label Edit",children:e.jsx(r,{className:"btn btn-transparent",href:route("admin.feature-label.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(i,{permission:"Feature Label Delete",children:e.jsx("button",{onClick:x=>n(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})})]})}export{A as default};
