import{j as e,Y as o,a as i,y as m}from"./app-Cp6npgci.js";import{A as h}from"./AdminAuthenticated-CNVEnC_w.js";import{S as d}from"./sweetalert2.all-9QNO6mFz.js";import"./Dropdown-BZmTeSXa.js";import"./AdminHeader-habo1Axa.js";import"./PermissionAllow-CdIqhLkM.js";import"./Fade-BS4F3XMu.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./BootstrapModalManager-DRvpUVeQ.js";import"./index-CepUJMv7.js";import"./Anchor-Bd0qquRR.js";import"./extends-CCbyfPlC.js";import"./index-HKqeB3Cm.js";import"./ToastNotification-pkvhd7Ns.js";function L({subscribersList:r,auth:l,success:a=null,error:n=null}){const c=s=>{d.fire({title:"Are you sure you want to delete this subscriber?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&m.delete(route("admin.subscribers.destroy",s.id),{onSuccess:()=>{d.fire("Deleted!","Subscriber has been deleted.","success")}})})};return e.jsxs(h,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Subscriber"}),success:a,error:n,children:[e.jsx(o,{title:"Subscribers List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Subscribers List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(i,{className:"btn btn-info text-end",href:route("admin.subscribers.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Full Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Type of Needed"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:r.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsxs("td",{children:[s.firstname," ",s.lastname]}),e.jsx("td",{children:s.email_id}),e.jsx("td",{children:s.type_of_needed}),e.jsx("td",{children:s.status_text}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(i,{className:"btn btn-transparent",href:route("admin.subscribers.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{onClick:t=>c(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]})})})})})})})]})})]})}export{L as default};