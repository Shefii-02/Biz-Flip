import{r as n,j as e}from"./app-B3lS64dG.js";import{M as r}from"./Modal-BkNZUDXF.js";import"./Dropdown-ChjA9zgO.js";import"./index-D9o93I7c.js";import"./PermissionAllow-wxFNq2kt.js";import"./ReactToastify-_GpyaRek.js";import{d as s}from"./index-CsJGmNAv.js";import p from"./Invoice-Ipc5bvGp.js";import"./listen-B_F_1ACR.js";import"./useWindow-DgLGm7_F.js";import"./BootstrapModalManager-CaKnmYyO.js";import"./Fade-HZCctfIx.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-DbZSpFkk.js";import"./index-Chjiymov.js";import"./setPrototypeOf-DgZC2w_0.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CJoT7KlQ.js";import"./defineProperty-C77ibxUe.js";function v({invoices:d}){const[a,o]=n.useState(null);n.useState(!1);const[c,h]=n.useState("Invoice"),[m,i]=n.useState(!1),x=()=>i(!1),l=async t=>{o(t),h("Invoice #"+t.invoice_no),i(!0)},j=()=>{window.print()};return e.jsxs(e.Fragment,{children:[e.jsxs(r,{size:"lg",show:m,onHide:x,centered:!0,children:[e.jsx(r.Header,{closeButton:!0,children:e.jsx(r.Title,{children:c})}),e.jsx(r.Body,{children:e.jsx(p,{invoice:a})}),e.jsx(r.Footer,{className:"col-lg-12 text-end",children:e.jsxs("button",{onClick:j,className:"btn btn-linkedin btn-sm  text-end",children:[" ",e.jsx("i",{class:"bi bi-print"})," Print invoice"]})})]}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Inv No"}),e.jsx(s.Th,{children:"Seller Name"}),e.jsx(s.Th,{children:"Plan"}),e.jsx(s.Th,{children:"Price"}),e.jsx(s.Th,{children:"Payment Id"}),e.jsx(s.Th,{children:"Payment Method"}),e.jsx(s.Th,{children:"Created At"}),e.jsx(s.Th,{children:"Actions"})]})}),e.jsx(s.Tbody,{children:d.data.map(t=>e.jsxs(s.Tr,{onClick:T=>l(t),children:[e.jsx(s.Td,{children:t.id}),e.jsx(s.Td,{children:t.invoice_no}),e.jsxs(s.Td,{children:[t.seller.firstname," ",t.seller.lastname]}),e.jsx(s.Td,{children:t.name}),e.jsx(s.Td,{children:t.price}),e.jsx(s.Td,{children:t.payment_id}),e.jsx(s.Td,{children:t.payment_method}),e.jsx(s.Td,{children:t.created_at}),e.jsx(s.Td,{children:e.jsx("button",{className:"btn btn-transparent",onClick:()=>l(t),children:e.jsx("i",{className:"bi bi-eye"})})})]},t.id))})]})})})]})}export{v as default};
