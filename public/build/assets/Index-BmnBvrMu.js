import{r,W as C,j as e,Y as _,S as D,b as q}from"./app-BjRDVr7K.js";import"./Dropdown-Bf0mxkws.js";import"./index-DvLCd-L0.js";import{P as x}from"./PermissionAllow-DNNBW3FI.js";import F from"./Wrapper-CiWi6_3T.js";import"./index-Cnp2J3Yl.js";/* empty css                                  */import"./server.browser-C2WeAfMo.js";import{M as i}from"./Modal-DJ72tGsS.js";import E from"./Invoice-BElScF_L.js";import"./SideBar-CT_zTNUK.js";import"./ProfileDropdown-CrQ8Au1r.js";import"./Header-VixfUe2o.js";import"./Dropdown-COIvMzCO.js";import"./listen-KPXmgqRh.js";import"./useWindow-qoUGISga.js";import"./Anchor-BS2sRxwm.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-Bs7WZX92.js";import"./ReactToastify-BdR81KYl.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-VofWu8MJ.js";import"./BootstrapModalManager-C4N9f22L.js";import"./Fade-DO0vLiWL.js";import"./inheritsLoose-1HkgTRWY.js";function oe({auth:p,invoices:j,current_invoice:l,newInvoice:n}){const[o,b]=r.useState(j.data),{data:c,setData:u}=C({q:""}),v=async()=>{d(!0);const s=await q.get(route("seller.invoices.search",c));b(s.data),d(!1)},[g,d]=r.useState(!1),[f,m]=r.useState(!1),[N,y]=r.useState(null),[w,k]=r.useState("Invoice"),[h,S]=r.useState(""),I=()=>m(!1),t=async s=>{y(s),k("Invoice #"+s.invoice_no),S(s.id),m(!0)};return r.useEffect(()=>{n&&t(n)},[n]),e.jsxs(e.Fragment,{children:[e.jsx(_,{title:"Invoices"}),e.jsx(x,{permission:"Invoice View",children:e.jsxs(i,{size:"lg",show:f,onHide:I,centered:!0,children:[e.jsx(i.Header,{closeButton:!0,children:e.jsx(i.Title,{children:w})}),e.jsx(i.Body,{children:e.jsx(E,{invoice:N})}),e.jsxs(i.Footer,{children:[e.jsxs("a",{target:"_blank",href:route("seller.invoices.print",h),className:"btn btn-primary btn-sm text-overflow",children:["Print ",e.jsx("i",{className:"bi bi-printer"})]}),e.jsxs("a",{target:"_blank",href:route("seller.invoices.download",h),className:"btn btn-primary btn-sm text-overflow",children:["Download ",e.jsx("i",{className:"bi bi-download"})]})]})]})}),e.jsxs(F,{user:p.user,children:[e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Invoices"}),e.jsx("div",{children:"View and manage your invoices easily. See your subscription details, track your billing history, and download invoices for record-keeping."}),e.jsxs("div",{children:[l&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"alert alert-success mb-5",children:["You currently have active subscription ",e.jsx("strong",{children:l.name})," with remaining ",e.jsx("strong",{children:l.remaining_ads})," ads till ",e.jsx("strong",{children:l.expire_date})]})}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:c.q,onChange:s=>u("q",s.target.value),type:"search",placeholder:"Search by name",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>v(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Invoice"}),e.jsx("th",{scope:"col",children:"Plan"}),e.jsx("th",{scope:"col",children:"Date purchased"}),e.jsx("th",{scope:"col",children:"Expires at"}),e.jsx("th",{scope:"col",children:"Amount"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:o.length?e.jsx(e.Fragment,{children:o.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{onClick:a=>t(s),children:["#",s.invoice_no]}),e.jsxs("td",{onClick:a=>t(s),children:[e.jsx("div",{children:s.name}),e.jsxs("div",{className:"small",children:["$",s.price," ",e.jsxs("small",{children:["/ ",s.duration," month"]})]})]}),e.jsx("td",{onClick:a=>t(s),children:e.jsx("div",{children:s.invoice_date})}),e.jsx("td",{onClick:a=>t(s),children:e.jsx("div",{children:s.expire_date})}),e.jsx("td",{onClick:a=>t(s),children:e.jsxs("div",{children:["$",s.total_amount]})}),e.jsx("td",{children:e.jsxs(x,{permission:"Invoice View",children:[e.jsx("button",{onClick:a=>t(s),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})}),e.jsx("a",{target:"_blank",href:route("seller.invoices.download",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-download"})})]})})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})]})]})})}),g&&e.jsx(D,{})]})]})}export{oe as default};
