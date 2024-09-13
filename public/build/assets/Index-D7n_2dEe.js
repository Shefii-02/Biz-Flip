import{r as o,j as e,Y,a as F,y as z,b as H}from"./app-NOf8Ud2Y.js";import{A as O}from"./AdminAuthenticated-BvfjHjqe.js";import{P as u}from"./PermissionAllow-DuJ9Iv_Y.js";import{T as A}from"./Tab-JtK0ALxZ.js";import{T as R}from"./Tabs-nBjgjupB.js";import{M as $}from"./ModalPopup-ByGA8Ggc.js";import q from"./ViewSeller-CVoUIDLT.js";import{d as t}from"./index-Btq9algJ.js";/* empty css                                  */import{S as G}from"./sweetalert2.all-DvqkVDG2.js";import{P as J}from"./Pagination-DgvcFT7-.js";import"./Dropdown-BeYQcZ-k.js";import"./AdminHeader-CMTsUJ_A.js";import"./Dropdown-DvMLigQO.js";import"./listen-DAonDIvx.js";import"./useWindow-CHvFuoXy.js";import"./Anchor-Bk6fN3Km.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-Blf2R5jN.js";import"./BootstrapModalManager-BrrHINVF.js";import"./Fade-BeIZaMCs.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-0eJ9DX1U.js";import"./ToastNotification-beDGr7FA.js";import"./ReactToastify-Dj4qrOSt.js";import"./TabPane-BoRo_x9l.js";import"./ElementChildren-Dnnap9xS.js";import"./Modal-Dza8gc_j.js";import"./slick-theme-CNBmrXs2.js";import"./StatusBtn-CbSqwZlf.js";import"./DynamicSelect-DOBuTmDv.js";import"./react-select.esm-Zq4xYsl7.js";import"./Select-49a62830.esm-yfvIYKNF.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-CsTObgxi.js";import"./hoist-non-react-statics.cjs-D1VeiPUh.js";import"./interopRequireDefault-BbjLfwJi.js";import"./objectWithoutPropertiesLoose-DN910g8V.js";function Ve({vendorsList:c,pendingVendorsList:d,suspendedVendorsList:p,auth:f}){const[m,x]=o.useState(1),[l,g]=o.useState(""),[b,s]=o.useState(c.data),[j,M]=o.useState(d.data),[I,K]=o.useState(p.data),[i,B]=o.useState("ApprovedSellers"),[L,S]=o.useState(!1),[D,V]=o.useState(null),N=a=>{G.fire({title:"Are you sure you want to delete the Seller?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&z.delete(route("admin.sellers.destroy",a.id))})},T=(a,r)=>{x(r),window.scrollTo(0,0)},y=a=>{const r=a.target.value;g(r);let n;i==="ApprovedSellers"?(n=c.data.filter(h=>h.full_name.toLowerCase().includes(r.toLowerCase())),s(n)):i==="PendingApproval"?(n=d.data.filter(h=>h.full_name.toLowerCase().includes(r.toLowerCase())),M(n)):i==="SuspendedSellers"&&(n=p.data.filter(h=>h.full_name.toLowerCase().includes(r.toLowerCase())),K(n)),x(1)},C=(()=>{if(l.length>0){if(i==="ApprovedSellers")return b;if(i==="PendingApproval")return j;if(i==="SuspendedSellers")return I}else{if(i==="ApprovedSellers")return c.data;if(i==="PendingApproval")return d.data;if(i==="SuspendedSellers")return p.data}})(),v=(m-1)*20,P=m*20,E=()=>S(!1),w=async a=>{try{const n=(await H.get(route("admin.sellers.show",a.id))).data;V(n),S(!0)}catch(r){console.error("Error fetching data",r)}},Q=()=>{S(!1)};return e.jsxs(O,{user:f.user,children:[e.jsx(Y,{title:"Sellers List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Sellers Listing"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(u,{permission:"Seller Create",children:e.jsxs(F,{className:"btn btn-info text-end",href:route("admin.sellers.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsxs(R,{id:"uncontrolled-tab-example",activeKey:i,onSelect:a=>B(a),className:"",children:[e.jsx(A,{eventKey:"ApprovedSellers",title:"Approved Sellers",children:e.jsx(k,{displayList:C,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:l,handleSearch:y})}),e.jsx(A,{eventKey:"PendingApproval",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Pending Approval"}),d.data.length>0&&e.jsx("span",{className:"pending-approval-count",children:d.data.length})]}),children:e.jsx(k,{displayList:C,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:l,handleSearch:y})}),e.jsx(A,{eventKey:"SuspendedSellers",title:"Suspended Sellers",children:e.jsx(k,{displayList:C,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:l,handleSearch:y})})]})]})}),e.jsx($,{show:L,handleClose:E,size:"md",title:"Seller Details",children:D?e.jsx(q,{collection:D,handleClose:E,onSubmit:Q}):"Failed fetching data..."})]})}const k=({displayList:c,startIdx:d,endIdx:p,deleteVendor:f,handlePageChange:_,currentPage:m,itemsPerPage:x,handleShow:l,searchQuery:g,handleSearch:b})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(u,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:g,onChange:b})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(t.Table,{className:"table border-no",id:"example1",children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"Full Name"}),e.jsx(t.Th,{children:"Email"}),e.jsx(t.Th,{children:"Mobile Number"}),e.jsx(t.Th,{children:"Designation"}),e.jsx(t.Th,{className:"text-center",children:"Status"}),e.jsx(t.Th,{children:"Last Modified"}),e.jsx(t.Th,{className:"text-end"})]})}),e.jsx(t.Tbody,{children:c.slice(d,p).map(s=>e.jsxs(t.Tr,{className:"hover-primary",children:[e.jsxs(t.Td,{valign:"middle",className:"d-flex",onClick:()=>l(s),children:[e.jsx("img",{src:s.picture,className:"w-30 h-30 me-3 rounded-circle",alt:`${s.picture} icon`,onError:j=>{j.target.onerror=null,j.target.src="/assets/admin/images/noimage.webp"}}),e.jsxs("div",{children:[s.company_name!=""&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-fw-bold",children:s.company_name}),e.jsx("br",{})]}),e.jsx("i",{children:s.full_name})]})]}),e.jsx(t.Td,{onClick:()=>l(s),valign:"middle",children:s.email}),e.jsx(t.Td,{onClick:()=>l(s),valign:"middle",children:s.phone}),e.jsx(t.Td,{onClick:()=>l(s),valign:"middle",children:s.designation}),e.jsx(t.Td,{onClick:()=>l(s),className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsx(t.Td,{onClick:()=>l(s),valign:"middle",children:window.formatDateTime(s.updated_at)}),e.jsxs(t.Td,{className:"text-end",children:[e.jsx(u,{permission:"Seller Show",children:e.jsx("span",{onClick:()=>l(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(u,{permission:"Seller Edit",children:e.jsx(F,{className:"btn btn-transparent",href:route("admin.sellers.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(u,{permission:"Seller Edit",children:e.jsx("button",{onClick:()=>f(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})}),c.length>x&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(J,{count:Math.ceil(c.length/x),page:m,onChange:_})})]})})})})})});export{Ve as default};
