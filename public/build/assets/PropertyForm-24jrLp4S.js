import{r as p,j as e,Y as j,a as t}from"./app-DEFvwcdl.js";import"./PermissionAllow-B7s74L2E.js";import u from"./Wrapper-DT2cqD2n.js";import b from"./AdditionalInfo-DkePrKEC.js";import{S as i}from"./react-select.esm-DJrhtTDn.js";import"./SideBar-H2yd8JKW.js";import"./ProfileDropdown-C8H9MyLl.js";import"./Header-6YyEGuVg.js";import"./ToastNotification-CN4koItJ.js";import"./Select-49a62830.esm-Dus8yFDX.js";import"./extends-CCbyfPlC.js";import"./inherits-Da4sx5rs.js";import"./extends-Lqyj1dvn.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-DZwEriCY.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";const v=[{label:"CCTV camera",value:"CCTV camera"},{label:"Smoke alarm",value:"Smoke alarm"},{label:"Coffee maker",value:"Coffee maker"}],N=[{label:"Driveway",value:"Driveway"},{label:"Car parking",value:"Car parking"},{label:"Wheelchair access",value:"Wheelchair access"}],f=[{label:"House",value:"House"},{label:"Shop",value:"Shop"},{label:"Warehouse",value:"Warehouse"}],y=[{label:"Rental",value:"Rental"},{label:"Lease",value:"Lease"},{label:"Sale",value:"Sale"}],g=[{label:"Ontatio",value:"Ontatio"}];function R({auth:d}){const[a,c]=p.useState([]),n=()=>{c([...a,{id:Date.now(),name:"",value:""}])},m=s=>{c(a.filter(r=>r.id!==s))},x=(s,r)=>{const o=a.map(l=>l.id===s?{...l,name:r}:l);c(o)},h=(s,r)=>{const o=a.map(l=>l.id===s?{...l,value:r}:l);c(o)};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Create property"}),e.jsx(u,{user:d.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"text-xl font-bold",children:"Create new property"}),e.jsx("div",{className:"ms-auto",children:e.jsxs(t,{href:route("seller.properties.index"),className:"btn btn-neutral",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Go back"]})})]}),e.jsx("div",{children:e.jsxs("form",{children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Basic details"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Name"})," ",e.jsx("input",{type:"text",placeholder:"Name",className:"form-control"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Price"})," ",e.jsx("input",{type:"text",placeholder:"Price",className:"form-control"})]})}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{placeholder:"Tell us about your property in detail",className:"form-control"})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Type"}),e.jsx(i,{options:y})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Category"}),e.jsx(i,{options:f})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Facilities"}),e.jsx(i,{isMulti:!0,options:N})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Features"}),e.jsx(i,{isMulti:!0,options:v})]})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Address"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Address"})," ",e.jsx("input",{type:"text",placeholder:"Address",className:"form-control"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"City"})," ",e.jsx("input",{type:"text",placeholder:"City",className:"form-control"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Postcode"})," ",e.jsx("input",{type:"text",placeholder:"Postcode",className:"form-control"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(i,{options:g})]})}),e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{children:[e.jsx("label",{children:"Map link"})," ",e.jsx("input",{type:"text",placeholder:"Map link",className:"form-control"})]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Gallery"})}),e.jsx("div",{className:"row g-5 mb-5",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"card rounded-input border-dashed",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"text-center py-5",role:"button",children:[e.jsx("i",{className:"bi bi-upload text-lg"}),e.jsx("div",{className:"font-semibold",children:"Upload a file or drag and drop"}),e.jsx("div",{className:"text-muted small",children:"PNG, WEBP, JPG upto 3mb"})]})})})})}),e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Additional info"})}),e.jsxs("div",{className:"row g-5 mb-5",children:[a.map(s=>e.jsx(b,{onNameChange:x,onValueChange:h,onDelete:m,info:s})),e.jsx("div",{className:"col-12",children:e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:n,children:[e.jsx("i",{className:"bi bi-plus"})," Add additional info"]})})]}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-12",children:[e.jsxs("div",{className:"form-check form-check-lg",children:[e.jsx("input",{role:"button",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",name:"publish_property",defaultValue:"true",id:"publish_property"}),e.jsx("label",{role:"button",className:"mt-1",htmlFor:"publish_property",children:"Publish property"})]}),e.jsx("div",{className:"text-muted small",children:"Your property will not visible to your clients if not published."})]}),e.jsxs("div",{className:"col-12 text-end",children:[e.jsx(t,{href:route("seller.properties.index"),className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})]})]})})]})})})})]})}export{R as default};
