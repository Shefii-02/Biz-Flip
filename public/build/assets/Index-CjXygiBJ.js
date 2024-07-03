import{r as n,j as e,Y,a as F,y as z,b as H}from"./app-C7Wmsx-r.js";import{A as O}from"./AdminAuthenticated-BzMDgxo7.js";import{P as u}from"./PermissionAllow-SWIDdt0G.js";import{T as A}from"./Tab-BPTbMnei.js";import{T as R}from"./Tabs-mjiDQ1AX.js";import{M as $}from"./ModalPopup-pv647XVD.js";import q from"./ViewSeller-BpkBGlxY.js";import{d as s}from"./index-Bhq-rrrz.js";/* empty css                                  */import{S as G}from"./sweetalert2.all-CpkQSRBx.js";import{P as J}from"./Pagination-YA9u0hbE.js";import"./Dropdown-B0qLyvOA.js";import"./AdminSidebar-DQ0wRrkg.js";import"./listen-DBSKtzGo.js";import"./useWindow-Bp8QNRUJ.js";import"./Anchor-CEqg9jmj.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CzsITtD-.js";import"./ToastNotification-gx8mAVOD.js";import"./index-D1UJqtKR.js";import"./index-Chjiymov.js";import"./TabPane-CuXAwgt_.js";import"./Fade-Du7pQ0im.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./TransitionGroupContext-BvsyIu3A.js";import"./ElementChildren-XGPhXeTL.js";import"./Modal-Zzk52Z60.js";import"./slick-theme-B1pmtPXr.js";import"./StatusBtn-D2_redau.js";import"./DynamicSelect-B_R3PZmB.js";import"./react-select-creatable.esm-DirrFLVl.js";import"./useStateManager-7e1e8489.esm-K7qsbL5R.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./emotion-react.browser.esm-DdNgd-M_.js";import"./hoist-non-react-statics.cjs-Ae5wMIlW.js";import"./interopRequireDefault-BbjLfwJi.js";import"./objectWithoutPropertiesLoose-DN910g8V.js";function ke({vendorsList:o,pendingVendorsList:d,suspendedVendorsList:p,auth:g}){const[c,h]=n.useState(1),[m,f]=n.useState(""),[S,t]=n.useState(o.data),[j,I]=n.useState(d.data),[K,B]=n.useState(p.data),[l,L]=n.useState("ApprovedSellers"),[k,b]=n.useState(!1),[E,V]=n.useState(null),N=a=>{G.fire({title:"Are you sure you want to delete the Seller?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&z.delete(route("admin.sellers.destroy",a.id))})},v=(a,r)=>{h(r),window.scrollTo(0,0)},T=a=>{const r=a.target.value;f(r);let i;l==="ApprovedSellers"?(i=o.data.filter(x=>x.full_name.toLowerCase().includes(r.toLowerCase())),t(i)):l==="PendingApproval"?(i=d.data.filter(x=>x.full_name.toLowerCase().includes(r.toLowerCase())),I(i)):l==="SuspendedSellers"&&(i=p.data.filter(x=>x.full_name.toLowerCase().includes(r.toLowerCase())),B(i)),h(1)},w=(()=>{if(m.length>0){if(l==="ApprovedSellers")return S;if(l==="PendingApproval")return j;if(l==="SuspendedSellers")return K}else{if(l==="ApprovedSellers")return o.data;if(l==="PendingApproval")return d.data;if(l==="SuspendedSellers")return p.data}})(),y=(c-1)*20,P=c*20,M=()=>b(!1),C=async a=>{try{const i=(await H.get(route("admin.sellers.show",a.id))).data;V(i),b(!0)}catch(r){console.error("Error fetching data",r)}},Q=()=>{b(!1)};return e.jsxs(O,{user:g.user,children:[e.jsx(Y,{title:"Sellers List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Sellers Listing"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(u,{permission:"Seller Create",children:e.jsxs(F,{className:"btn btn-info text-end",href:route("admin.sellers.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsxs(R,{id:"uncontrolled-tab-example",activeKey:l,onSelect:a=>L(a),className:"",children:[e.jsx(A,{eventKey:"ApprovedSellers",title:"Approved Sellers",children:e.jsx(_,{displayList:w,startIdx:y,endIdx:P,deleteVendor:N,handlePageChange:v,currentPage:c,itemsPerPage:20,handleShow:C,searchQuery:m,handleSearch:T})}),e.jsx(A,{eventKey:"PendingApproval",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Pending Approval"}),d.data.length>0&&e.jsx("span",{className:"pending-approval-count",children:d.data.length})]}),children:e.jsx(_,{displayList:w,startIdx:y,endIdx:P,deleteVendor:N,handlePageChange:v,currentPage:c,itemsPerPage:20,handleShow:C,searchQuery:m,handleSearch:T})}),e.jsx(A,{eventKey:"SuspendedSellers",title:"Suspended Sellers",children:e.jsx(_,{displayList:w,startIdx:y,endIdx:P,deleteVendor:N,handlePageChange:v,currentPage:c,itemsPerPage:20,handleShow:C,searchQuery:m,handleSearch:T})})]})]})}),e.jsx($,{show:k,handleClose:M,size:"md",title:"Seller Details",children:E?e.jsx(q,{collection:E,handleClose:M,onSubmit:Q}):"Failed fetching data..."})]})}const _=({displayList:o,startIdx:d,endIdx:p,deleteVendor:g,handlePageChange:D,currentPage:c,itemsPerPage:h,handleShow:m,searchQuery:f,handleSearch:S})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(u,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:f,onChange:S})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Email"}),e.jsx(s.Th,{children:"Mobile Number"}),e.jsx(s.Th,{children:"Company Name"}),e.jsx(s.Th,{children:"Designation"}),e.jsx(s.Th,{className:"text-center",children:"Status"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{className:"text-end"})]})}),e.jsx(s.Tbody,{children:o.slice(d,p).map(t=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{valign:"middle",children:t.id}),e.jsxs(s.Td,{valign:"middle",children:[e.jsx("img",{src:t.picture,className:"w-30 h-30 me-3 rounded-circle",alt:`${t.picture} icon`,onError:j=>{j.target.onerror=null,j.target.src="/assets/admin/images/noimage.webp"}})," ",e.jsx("span",{children:t.full_name})]}),e.jsx(s.Td,{valign:"middle",children:t.email}),e.jsx(s.Td,{valign:"middle",children:t.phone}),e.jsx(s.Td,{valign:"middle",children:t.company_name}),e.jsx(s.Td,{valign:"middle",children:t.designation}),e.jsx(s.Td,{className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(t.status)}})}),e.jsx(s.Td,{valign:"middle",children:window.formatDateTime(t.updated_at)}),e.jsxs(s.Td,{className:"text-end",children:[e.jsx(u,{permission:"Seller Show",children:e.jsx("span",{onClick:()=>m(t),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(u,{permission:"Seller Edit",children:e.jsx(F,{className:"btn btn-transparent",href:route("admin.sellers.edit",t.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(u,{permission:"Seller Edit",children:e.jsx("button",{onClick:()=>g(t),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},t.id))})]})}),o.length>h&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(J,{count:Math.ceil(o.length/h),page:c,onChange:D})})]})})})})})});export{ke as default};