import{r as N,W as f,j as e,Y as g,a as m}from"./app-C7Wmsx-r.js";import"./Dropdown-B0qLyvOA.js";import"./index-CzsITtD-.js";import"./PermissionAllow-SWIDdt0G.js";import k from"./Wrapper-BG-gv0mJ.js";import{I as o}from"./InputError-Dhrn_y_m.js";import"./SideBar-C5XeElQ2.js";import"./ProfileDropdown-em-Z3wSF.js";import"./Header-D9VyhKxS.js";import"./ToastNotification-gx8mAVOD.js";function T({role:a,permissions:l,auth:d,success:x,error:h}){const i=a?Object.keys(a.permissions).map(s=>parseInt(s)):[];console.log(i),N.useState({});const j=s=>{let r;n.permissions.includes(s)?r=n.permissions.filter(v=>v!==s):r=[...n.permissions,s],t("permissions",r)},{data:n,setData:t,post:p,errors:c,reset:C}=f({permissions:i||[],name:a?a.name:null,_method:a?"PUT":"POST"}),u=(s,r)=>{t(s,r)},b=async s=>{s.preventDefault(),await p(route(a?"seller.roles.update":"seller.roles.store",{role:a?a.id:null}),{preserveScroll:!0})};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:a?"Edit role":"Create new role"}),e.jsx(k,{user:d.user,success:x,error:h,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3 px-lg-6",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"text-xl font-bold",children:a?"Edit role":"Create new role"}),e.jsx("div",{className:"ms-auto",children:e.jsxs(m,{href:route("seller.roles.index"),className:"btn btn-neutral",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Go back"]})})]}),e.jsx("div",{children:e.jsx("form",{onSubmit:b,children:e.jsxs("div",{className:"row g-5",children:[e.jsx("div",{className:"mb-0",children:e.jsx("h4",{children:"Role name"})}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{children:"Name"}),e.jsx("input",{value:n.name,onChange:s=>{u("name",s.target.value)},placeholder:"Enter name",className:"form-control"}),e.jsx(o,{message:c.name})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Permissions"})}),Object.keys(l).map(s=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-md text-primary",children:s}),e.jsx("div",{children:l[s].map(r=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"form-check form-check-lg",children:[e.jsx("input",{role:"button",className:"form-check-input shadow-none border border-gray border-1 cursor-pointer",type:"checkbox",id:`permission_${r.id}`,checked:n.permissions.includes(r.id),onChange:()=>j(r.id)}),e.jsx("label",{role:"button",className:"mt-1",htmlFor:`permission_${r.id}`,children:r.name})]},r.id)}))})]},s),e.jsx("hr",{})]})),e.jsx(o,{message:c.permissions})]}),e.jsxs("div",{className:"col-12 text-end",children:[e.jsx(m,{href:route("seller.roles.index"),className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})]})})})]})})})})]})}export{T as default};