import{r,W as p,j as e,S as x,Y as u,a as h,b as j}from"./app-Cp6npgci.js";import"./Dropdown-BZmTeSXa.js";import"./index-HKqeB3Cm.js";import{P as b}from"./PermissionAllow-CdIqhLkM.js";import f from"./Wrapper-DTKt2c4Z.js";import"./index-CdvRHsm2.js";/* empty css                                  */import N from"./Tickets-BG0wo7k_.js";import"./SideBar-yxwA62H8.js";import"./ProfileDropdown-DrQtiY49.js";import"./Header-D90Yv61d.js";import"./ToastNotification-pkvhd7Ns.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CkJbhqZ5.js";import"./defineProperty-D_iN_pGO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CepUJMv7.js";function L({auth:i,tickets:c}){const[l,t]=r.useState(!1),[o,n]=r.useState(c.data),{data:a,setData:m}=p({q:""}),d=async()=>{t(!0);const s=await j.get(route("seller.tickets.search",a));n(s.data),t(!1)};return e.jsxs(e.Fragment,{children:[l&&e.jsx(x,{}),e.jsx(u,{title:"Support tickets"}),e.jsx(f,{user:i.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Support tickets"}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:a.q,onChange:s=>m("q",s.target.value),type:"search",placeholder:"Search by subject",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>d(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(b,{permission:"Support Ticket Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(h,{className:"btn btn-primary text-overflow",href:route("seller.tickets.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"Open ticket"})]})})})]})}),e.jsx(N,{ticketData:o})]})})]})})})})]})}export{L as default};
