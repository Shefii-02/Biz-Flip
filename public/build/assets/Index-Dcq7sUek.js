import{r as i,W as E,j as e,Y as L,a as m,y as $}from"./app-UYMcsozT.js";import{A as R}from"./AdminAuthenticated-BeSBahR6.js";import{P as n}from"./PermissionAllow-Bap9htMY.js";import{D as T,C as M,P as _}from"./react-beautiful-dnd.esm-DgNf6MSs.js";import{P as p}from"./index-DbEP-q8K.js";import{P as k}from"./Pagination-CVkbgNo9.js";import"./Dropdown-DIrmF7KH.js";import"./AdminSidebar-PMqOkiwD.js";import"./listen-BfSGih8d.js";import"./useWindow-DFLo-wP-.js";import"./Anchor-Fwh6yWVz.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-B-VLWdQt.js";import"./ToastNotification-B2mN7jJt.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./hoist-non-react-statics.cjs-CMtDnMvH.js";import"./tiny-invariant.esm-CCoILDQG.js";import"./extends-JlqcTN98.js";import"./emotion-react.browser.esm-DKTd78aF.js";import"./TransitionGroupContext-CFrQ52bA.js";function q({categoryList:x,auth:j}){const[d,g]=i.useState(1),[u,Q]=i.useState(""),[b,N]=i.useState(x.data),{data:W,setData:f,post:P,errors:Y,reset:z}=E({orderedIds:[]}),C=t=>{window.confirm("Are you sure you want to delete the category?")&&$.delete(route("admin.category.destroy",t.id))},w=(t,s)=>{g(s),window.scrollTo(0,0)},o=u.length>0?b:x.data,v=(d-1)*20,y=d*20,I=o.slice(v,y),[h,D]=i.useState(I),A=t=>{if(!t.destination)return;const s=Array.from(h),[l]=s.splice(t.source.index,1);s.splice(t.destination.index,0,l);const r=s.map((a,S)=>({...a,position:S+1}));D(r),N(r);const c=r.map(a=>a.id);f("orderedIds",c),P(route("admin.category.position-update"))};return e.jsxs(R,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Categories"}),children:[e.jsx(L,{title:"Category List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Ad Categories"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Ad Categories"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(n,{permission:"Category Create",children:e.jsxs(m,{className:"btn btn-info text-end",href:route("admin.category.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(n,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsx(T,{onDragEnd:A,children:e.jsx(M,{droppableId:"categories",children:t=>e.jsxs("table",{className:"table border-no",id:"example1",...t.droppableProps,ref:t.innerRef,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"Name"}),e.jsx("th",{className:"text-center",children:"Status"}),e.jsx("th",{className:"text-center",children:"Last Modified"}),e.jsx("th",{})]})}),e.jsxs("tbody",{children:[h.map((s,l)=>e.jsx(_,{draggableId:`${s.id}-${s.name}`,index:l,children:(r,c)=>e.jsxs("tr",{ref:r.innerRef,...r.draggableProps,...r.dragHandleProps,className:` ${c.isDragging?"dragging":""}`,children:[e.jsx("td",{children:e.jsx("i",{className:"bi bi-arrows-move me-3 fw-bold"})}),e.jsxs("td",{children:[e.jsx("img",{src:s.icon,className:"w-30 me-20 rounded-5",alt:`${s.icon} icon`,onError:a=>{a.target.onerror=null,a.target.src="/assets/admin/images/noimage.webp"}}),s.name]}),e.jsx("td",{className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsx("td",{className:"text-center",children:window.formatDateTime(s.updated_at)}),e.jsxs("td",{align:"right",children:[e.jsx(n,{permission:"Category Edit",children:e.jsx(m,{className:"btn btn-transparent",href:route("admin.category.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(n,{permission:"Category Delete",children:e.jsx("button",{onClick:()=>C(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]})},`${s.id}-${s.name}`)),t.placeholder]})]})})})}),o.length>20&&e.jsxs("div",{className:"pagination-container float-end py-5",children:[e.jsx(k,{count:Math.ceil(o.length/20),page:d,onChange:w}),e.jsx("i",{children:"Show All"})]})]})})})})})})]})})]})}q.propTypes={categoryList:p.object.isRequired,auth:p.object.isRequired};export{q as default};