import{r,W as p,j as e,S as x,Y as u,a as h,b as j}from"./app-D9WsVMvk.js";import"./Dropdown-BEL76v5R.js";import"./index-Dzdl2Ikd.js";import{P as b}from"./PermissionAllow-D_Il2u63.js";import f from"./Wrapper-DP_HtH2G.js";import"./index-GDY66V9H.js";/* empty css                                  */import N from"./Tickets-v1zlQUXB.js";import"./SideBar-DPjqtj8F.js";import"./ProfileDropdown-CAI296s4.js";import"./Header-nM_uNUAb.js";import"./ToastNotification-Camh_UQT.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CkJbhqZ5.js";import"./defineProperty-D_iN_pGO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Cdt2goES.js";function L({auth:i,tickets:c}){const[l,t]=r.useState(!1),[o,n]=r.useState(c.data),{data:a,setData:m}=p({q:""}),d=async()=>{t(!0);const s=await j.get(route("seller.tickets.search",a));n(s.data),t(!1)};return e.jsxs(e.Fragment,{children:[l&&e.jsx(x,{}),e.jsx(u,{title:"Support tickets"}),e.jsx(f,{user:i.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Support tickets"}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:a.q,onChange:s=>m("q",s.target.value),type:"search",placeholder:"Search by subject",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>d(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(b,{permission:"Support Ticket Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(h,{className:"btn btn-primary text-overflow",href:route("seller.tickets.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"Open ticket"})]})})})]})}),e.jsx(N,{ticketData:o})]})})]})})})})]})}export{L as default};
