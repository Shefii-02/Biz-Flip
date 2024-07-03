import{r as i,j as e,Y as V,a as Y,b as $}from"./app-D9ahBqhC.js";import{A as G}from"./AdminAuthenticated-lTOoSsVb.js";import{P as H}from"./PermissionAllow-C-hpl8Tq.js";import{M as J}from"./ModalPopup-ADGiW2bJ.js";import O from"./AdView-BhdJdyyC.js";import{B as U}from"./Badge-DcujCi_5.js";import{T as w}from"./Tab-BNYMVuw8.js";import{T as W}from"./Tabs-eAMKClFy.js";import{d as s}from"./index-BpglRj1-.js";/* empty css                                  */import{P as X}from"./Pagination-Dlggre6r.js";import"./Dropdown-D19vaCpq.js";import"./AdminHeader-CSgzBjco.js";import"./Fade-Cg8iyQwT.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-BWp3AgNg.js";import"./index-Chjiymov.js";import"./setPrototypeOf-DgZC2w_0.js";import"./BootstrapModalManager-BzAv9hhx.js";import"./Anchor-CiT1PzIr.js";import"./extends-CCbyfPlC.js";import"./index-DJkYJaGR.js";import"./ToastNotification-X_8GOv_9.js";import"./Modal-D_ywhj2o.js";import"./slick-theme-BH_s2huo.js";import"./StatusBtn-CRcokg0l.js";import"./TabPane-V1_rFWKe.js";import"./DynamicSelect-DgRH0-zc.js";import"./react-select-creatable.esm-Bt6aaOau.js";import"./useStateManager-7e1e8489.esm-DyWkr5eE.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./emotion-react.browser.esm-CJ7CoFmw.js";import"./hoist-non-react-statics.cjs-CQ0Sc79v.js";import"./ElementChildren-ngI8Dbxo.js";import"./interopRequireDefault-BbjLfwJi.js";import"./objectWithoutPropertiesLoose-DN910g8V.js";const Be=({ads:n,pendingAdsList:d,suspendedAdsList:p,soldAdsList:x,auth:P,success:f=null,error:C=null})=>{const[_,j]=i.useState(!1),[t,g]=i.useState(null),c=5,[m,F]=i.useState(1),[u,L]=i.useState(""),[D,E]=i.useState(n.data),[I,M]=i.useState(d.data),[k,B]=i.useState(p.data),[Q,q]=i.useState(x.data),[r,z]=i.useState("ApprovedAds"),v=(h,a)=>{F(a),window.scrollTo(0,0)},A=h=>{const a=h.target.value;L(a);let l;r==="ApprovedAds"?(l=n.data.filter(o=>o.title.toLowerCase().includes(a.toLowerCase())),E(l)):r==="PendingApproval"?(l=d.data.filter(o=>o.title.toLowerCase().includes(a.toLowerCase())),M(l)):r==="SuspendedAds"?(l=p.data.filter(o=>o.title.toLowerCase().includes(a.toLowerCase())),B(l)):r==="SoldAds"&&(l=x.data.filter(o=>o.title.toLowerCase().includes(a.toLowerCase())),q(l)),F(1)},S=(()=>{if(u.length>0){if(r==="ApprovedAds")return D;if(r==="PendingApproval")return I;if(r==="SuspendedAds")return k;if(r==="SoldAds")return Q}else{if(r==="ApprovedAds")return n.data;if(r==="PendingApproval")return d.data;if(r==="SuspendedAds")return p.data;if(r==="SoldAds")return x.data}})(),T=(m-1)*c,N=m*c,K=()=>j(!1),b=async h=>{try{const l=(await $.get(route("admin.ads.show",h.id))).data;g(l),j(!0)}catch(a){console.error("Error fetching data",a)}},R=()=>{j(!1)};return e.jsxs(G,{user:P.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ads Listing"}),success:f,error:C,children:[e.jsx(V,{title:"Ads Listing"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Ads Listing"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end"})})]})}),e.jsxs(W,{id:"uncontrolled-tab-example",activeKey:r,onSelect:h=>z(h),className:"",children:[e.jsx(w,{eventKey:"ApprovedAds",title:"Approved Ads",children:e.jsx(y,{displayList:S,startIdx:T,endIdx:N,handlePageChange:v,currentPage:m,itemsPerPage:c,handleShow:b,searchQuery:u,handleSearch:A})}),e.jsx(w,{eventKey:"PendingApproval",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Pending Approval"}),d.data.length>0&&e.jsx("span",{className:"pending-approval-count",children:d.data.length})]}),children:e.jsx(y,{displayList:S,startIdx:T,endIdx:N,handlePageChange:v,currentPage:m,itemsPerPage:c,handleShow:b,searchQuery:u,handleSearch:A})}),e.jsx(w,{eventKey:"SuspendedAds",title:"Suspended Ads",children:e.jsx(y,{displayList:S,startIdx:T,endIdx:N,handlePageChange:v,currentPage:m,itemsPerPage:c,handleShow:b,searchQuery:u,handleSearch:A})}),e.jsx(w,{eventKey:"SoldAds",title:"Sold Ads",children:e.jsx(y,{displayList:S,startIdx:T,endIdx:N,handlePageChange:v,currentPage:m,itemsPerPage:c,handleShow:b,searchQuery:u,handleSearch:A})})]})]})}),e.jsx(J,{show:_,handleClose:K,size:"lg",title:"Ad Details",children:t?e.jsx(O,{collection:t,handleClose:K,onSubmit:R}):"Failed fetching data..."})]})},y=({displayList:n,startIdx:d,endIdx:p,handlePageChange:x,currentPage:P,itemsPerPage:f,handleShow:C,searchQuery:_,handleSearch:j})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(H,{permission:"Ad Show",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:_,onChange:j})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Ad"}),e.jsx(s.Th,{children:"Address"}),e.jsx(s.Th,{className:"text-end",children:"Price"}),e.jsx(s.Th,{children:"Leads"}),e.jsx(s.Th,{children:"Type"}),e.jsx(s.Th,{children:"Purpose"}),e.jsx(s.Th,{children:"Seller"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:n.slice(d,p).map(t=>e.jsxs(s.Tr,{children:[e.jsx(s.Td,{children:e.jsx(U,{value:`#${t.unique_code}`,bg:"bg-dark",color:"text-white"})}),e.jsxs(s.Td,{children:[e.jsx("img",{src:t.main_picture,className:"w-25 rounded-5 ",alt:"Image",onError:g=>{g.target.onerror=null,g.target.src="/assets/admin/images/noimage.webp"}}),e.jsxs("span",{className:"ms-2",children:[" ",t.title," "]})]}),e.jsxs(s.Td,{children:[t.address,e.jsx("div",{className:"small",children:e.jsx("small",{children:t.city})})]}),e.jsx(s.Td,{className:"text-end",children:window.formatPrice(t.price)}),e.jsx(s.Td,{children:e.jsxs(Y,{className:"text-decoration-none",href:route("admin.propery_leads_index",{ad:t.id}),children:[t.total_leads," leads"]})}),e.jsx(s.Td,{children:t.property_type}),e.jsx(s.Td,{children:t.ad_purpose}),e.jsxs(s.Td,{children:[t.seller.firstname," ",t.seller.lastname]}),e.jsx(s.Td,{children:t.date_text}),e.jsx(s.Td,{children:e.jsx("span",{onClick:()=>C(t),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})})]},t.id))})]})}),n.length>f&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(X,{count:Math.ceil(n.length/f),page:P,onChange:x})})]})})})})})});export{Be as default};
