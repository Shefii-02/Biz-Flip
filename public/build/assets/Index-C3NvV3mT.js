import{r,W as d,j as e,S as x,Y as u,a as h,b as j}from"./app-CG-cedyX.js";import"./Dropdown-BzC72U1u.js";import"./index-CB8FP-AD.js";import{P as b}from"./PermissionAllow-BtKYLFOB.js";import f from"./Wrapper-DkV39J5d.js";import"./index-Ds_Q7KGA.js";/* empty css                                  */import N from"./Tickets-CHHKEOCQ.js";import"./SideBar-ilD0-0XU.js";import"./ProfileDropdown-CVB6pUlg.js";import"./Header-B_aq4-sM.js";import"./Dropdown-B1WKr_ab.js";import"./listen-BAmu7Ho1.js";import"./useWindow-DcnfaM70.js";import"./Anchor-DdZ2pRBt.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-IV0ugsHC.js";import"./ReactToastify-glfqqVTn.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-D1LT8eKv.js";function H({auth:i,tickets:o}){const[c,s]=r.useState(!1),[l,m]=r.useState(o.data),{data:a,setData:n}=d({q:""}),p=async()=>{s(!0);const t=await j.get(route("seller.tickets.search",a));m(t.data),s(!1)};return e.jsxs(e.Fragment,{children:[c&&e.jsx(x,{}),e.jsx(u,{title:"Support tickets"}),e.jsx(f,{user:i.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Support tickets"}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:a.q,onChange:t=>n("q",t.target.value),type:"search",placeholder:"Search by subject",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:t=>p(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(b,{permission:"Support Ticket Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(h,{className:"btn btn-primary text-overflow",href:route("seller.tickets.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"Open ticket"})]})})})]})}),e.jsx(N,{ticketData:l})]})})]})})})})]})}export{H as default};
