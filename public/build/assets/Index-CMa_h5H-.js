import{j as e,Y as l,a as t,y as n}from"./app-DOZcIWVh.js";import{A as c}from"./AdminAuthenticated-CBQJ-3I7.js";import"./Dropdown-BYdKb6tQ.js";import"./AdminSidebar-BGLDizeY.js";import"./listen-BbKSz9Gy.js";import"./useWindow-DhqI_zMA.js";import"./Anchor-DRVRSgLP.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BgJ3aozw.js";import"./PermissionAllow-DPIa7gDb.js";import"./ToastNotification-DWZrIRJL.js";function C({countryList:r,auth:a,success:o=null,error:m=null}){const d=s=>{window.confirm("Are you sure you want to delete the country?")&&n.delete(route("admin.country.destroy",s.id))};return e.jsxs(c,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Country"}),children:[e.jsx(l,{title:"Country List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Country"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(t,{className:"btn btn-danger btn-sm text-end",href:route("admin.country.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Image"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Position"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:r.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx("img",{src:s.image,className:"w-100 rounded-5 ",alt:`${s.image} icon`,onError:i=>{i.target.onerror=null,i.target.src="/assets/admin/images/noimage.webp"}})}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.code}),e.jsx("td",{children:s.position}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(t,{className:"btn btn-transparent",href:route("admin.country.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{onClick:i=>d(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},s.id))})]})})})})})})})]})})]})}export{C as default};
