import{r as c,j as e,a,y as f}from"./app-D9ahBqhC.js";import N from"./AdStatusBtn-BDRQ8Eit.js";import{P as d}from"./PermissionAllow-C-hpl8Tq.js";import w from"./AdAction-Bg6aEcCe.js";import{M as n}from"./Modal-D_ywhj2o.js";import"./Fade-Cg8iyQwT.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-BWp3AgNg.js";import"./index-Chjiymov.js";import"./setPrototypeOf-DgZC2w_0.js";import"./BootstrapModalManager-BzAv9hhx.js";function P({ads:i,confirmDelete:h,minimal:t=!1}){const x=(s,r)=>{f.put(route("seller.ads.status",s.id),{status:r})},[j,o]=c.useState(!1),[u,m]=c.useState(""),[b,p]=c.useState(""),l=s=>{p(route("ads.show",s.slug)+"?embed=true"),m(s.title),o(!0)},g=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(n,{size:"lg",show:j,onHide:g,centered:!0,children:[e.jsx(n.Header,{closeButton:!0,children:e.jsx(n.Title,{children:u})}),e.jsx(n.Body,{className:"p-0",children:e.jsx("iframe",{className:"rounded-3 listframe",src:b,frameborder:"0"})})]}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Title"}),!t&&e.jsxs(e.Fragment,{children:[e.jsx("th",{scope:"col",children:"Industry"}),e.jsx("th",{scope:"col",children:"Category"}),e.jsx("th",{scope:"col",children:"Price"})]}),e.jsx("th",{scope:"col",children:"Leads"}),e.jsx("th",{scope:"col",children:"Views"}),!t&&e.jsxs(e.Fragment,{children:[e.jsx("th",{scope:"col",children:"Status"}),e.jsx("th",{scope:"col"})]}),t&&e.jsx("th",{})]})}),e.jsx("tbody",{children:i.length?e.jsx(e.Fragment,{children:i.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{onClick:r=>l(s),children:[s.title,!t&&e.jsx("div",{children:e.jsx("small",{children:s.city})})]}),!t&&e.jsxs(e.Fragment,{children:[e.jsx("td",{onClick:r=>l(s),children:s.category.label}),e.jsx("td",{onClick:r=>l(s),children:s.business_category.label}),e.jsxs("td",{onClick:r=>l(s),children:["$",s.price_text]})]}),e.jsx("td",{children:e.jsx("div",{children:e.jsxs(a,{className:"text-decoration-none",href:route("seller.leads.index",{ad:s.id}),children:[s.total_leads," leads"]})})}),e.jsxs("td",{onClick:r=>l(s),children:[s.total_views," views"]}),!t&&e.jsxs(e.Fragment,{children:[e.jsx("td",{children:e.jsx(N,{status:s.status})}),e.jsxs("td",{children:[e.jsxs(d,{permission:"Ad Create",children:[e.jsx(w,{status:x,ad:s}),e.jsx(a,{type:"button",href:route("seller.ads.edit",s.id),className:"btn btn-sm btn-square btn-neutral me-2",children:e.jsx("i",{className:"bi bi-pen"})})]}),e.jsx(d,{permission:"Ad Delete",children:e.jsx("button",{onClick:r=>h(s.id),className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]}),t&&e.jsx("td",{children:e.jsx("a",{target:"_blank",href:route("ads.show",s.slug),className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})})})]}))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})}export{P as default};