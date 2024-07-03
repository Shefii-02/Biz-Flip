import{r as d,W as D,j as e,Y as I,a as u,b as g}from"./app-C7Wmsx-r.js";import{A as y}from"./AdminAuthenticated-BzMDgxo7.js";import{P as l}from"./PermissionAllow-SWIDdt0G.js";import{Q as P,B as S}from"./ToastNotification-gx8mAVOD.js";import"./sweetalert2.all-CpkQSRBx.js";import{d as r}from"./index-Bhq-rrrz.js";/* empty css                                  */import{M as B}from"./ModalPopup-pv647XVD.js";import E from"./ViewCategory-0QaLQZlY.js";import{D as A,C as $,P as k}from"./react-beautiful-dnd.esm-Ca5BYZ7R.js";import"./Dropdown-B0qLyvOA.js";import"./AdminSidebar-DQ0wRrkg.js";import"./listen-DBSKtzGo.js";import"./useWindow-Bp8QNRUJ.js";import"./Anchor-CEqg9jmj.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CzsITtD-.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CkJbhqZ5.js";import"./defineProperty-D_iN_pGO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./Modal-Zzk52Z60.js";import"./Fade-Du7pQ0im.js";import"./inheritsLoose-1HkgTRWY.js";import"./index-D1UJqtKR.js";import"./TransitionGroupContext-BvsyIu3A.js";import"./slick-theme-B1pmtPXr.js";import"./StatusBtn-D2_redau.js";import"./TabPane-CuXAwgt_.js";import"./DynamicSelect-B_R3PZmB.js";import"./react-select-creatable.esm-DirrFLVl.js";import"./useStateManager-7e1e8489.esm-K7qsbL5R.js";import"./objectSpread2-Cb9oE9w6.js";import"./emotion-react.browser.esm-DdNgd-M_.js";import"./hoist-non-react-statics.cjs-Ae5wMIlW.js";import"./tiny-invariant.esm-CCoILDQG.js";function Te({categoryList:c,auth:b}){const[N,m]=d.useState(!1),[M,f]=d.useState(c.data),{data:p,setData:h,post:L,errors:O,reset:R}=D({orderedIds:[]}),[x,w]=d.useState(c.data),j=()=>m(!1),C=async i=>{if(!i.destination)return;const s=Array.from(x),[o]=s.splice(i.source.index,1);s.splice(i.destination.index,0,o);const a=s.map((t,v)=>({...t,position:v+1}));w(a),f(a);const n=a.map(t=>t.id);h("orderedIds",n);try{const t=await g.post(route("admin.business-category.position-update"),{orderedIds:n});S.success(t.data,{position:"top-right",autoClose:5e3,closeOnClick:!0})}catch(t){console.error("Error posting data:",t)}},T=async i=>{try{const o=(await g.get(route("admin.business-category.show",i.id))).data;h(o),m(!0)}catch(s){console.error("Error fetching data",s)}};return e.jsxs(y,{user:b.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Business Categories"}),children:[e.jsx(I,{title:"Business Category List"}),e.jsx(P,{position:"top-right",autoClose:1e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,draggable:!1}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Business Categories"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(u,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Business Categories"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(l,{permission:"Categories Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsx(A,{onDragEnd:C,children:e.jsx($,{droppableId:"categories",children:i=>e.jsxs(r.Table,{className:"table border-no",id:"example1",...i.droppableProps,ref:i.innerRef,children:[e.jsx(r.Thead,{children:e.jsxs(r.Tr,{children:[e.jsx(r.Th,{}),e.jsx(r.Th,{children:"Name"}),e.jsx(r.Th,{className:"text-center",children:"Status"}),e.jsx(r.Th,{className:"text-center",children:"Last Modified"}),e.jsx(r.Th,{})]})}),e.jsxs(r.Tbody,{children:[x.map((s,o)=>e.jsx(k,{draggableId:`${s.id}-${s.name}`,index:o,children:(a,n)=>e.jsxs(r.Tr,{ref:a.innerRef,...a.draggableProps,...a.dragHandleProps,className:` ${n.isDragging?"dragging":""}`,children:[e.jsx(r.Td,{children:e.jsx("i",{className:"bi bi-arrows-move me-3 fw-bold"})}),e.jsx(r.Td,{children:s.name}),e.jsx(r.Td,{className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsx(r.Td,{className:"text-center",children:window.formatDateTime(s.updated_at)}),e.jsxs(r.Td,{align:"right",children:[e.jsx(l,{permission:"Category Show",children:e.jsx("span",{onClick:()=>T(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(l,{permission:"Category Edit",children:e.jsx(u,{className:"btn btn-transparent",href:route("admin.business-category.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})})]})]})},`${s.id}-${s.name}`)),i.placeholder]})]})})})})})})})})})})]})}),e.jsx(B,{show:N,handleClose:j,size:"md",title:"Business Category Details",children:p?e.jsx(E,{collection:p,handleClose:j}):"Failed fetching data..."})]})}export{Te as default};
