import{j as e,Y as o,a as n,y as m}from"./app-UYMcsozT.js";import{A as h}from"./AdminAuthenticated-BeSBahR6.js";import{P as i}from"./PermissionAllow-Bap9htMY.js";import"./Dropdown-DIrmF7KH.js";import"./AdminSidebar-PMqOkiwD.js";import"./listen-BfSGih8d.js";import"./useWindow-DFLo-wP-.js";import"./Anchor-Fwh6yWVz.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-B-VLWdQt.js";import"./ToastNotification-B2mN7jJt.js";function A({testimonialList:t,auth:a,success:d=null,error:l=null}){const c=s=>{window.confirm("Are you sure you want to delete the testimonial?")&&m.delete(route("admin.testimonial.destroy",s.id))};return e.jsxs(h,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Testimonial"}),success:d,error:l,children:[e.jsx(o,{title:"Testimonial List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Testimonials"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(i,{permission:"Testimonial Create",children:e.jsxs(n,{className:"btn btn-info text-end",href:route("admin.testimonial.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(i,{permission:"Testimonials Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Image"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Company"}),e.jsx("th",{children:"Designation"}),e.jsx("th",{children:"Position"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:t.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx("img",{src:s.image,className:"w-100 rounded-5 ",alt:`${s.image} icon`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}})}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.company_name}),e.jsx("td",{children:s.designation}),e.jsx("td",{children:s.position}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(i,{permission:"Testimonial Edit",children:e.jsx(n,{className:"btn btn-transparent",href:route("admin.testimonial.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(i,{permission:"Testimonial Delete",children:e.jsx("button",{onClick:r=>c(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})})]})}export{A as default};
