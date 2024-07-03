import{r as o,j as e,Y as b,a as c,y as f,b as N}from"./app-C7Wmsx-r.js";import{A as T}from"./AdminAuthenticated-BzMDgxo7.js";import{S as d}from"./sweetalert2.all-CpkQSRBx.js";import"./PermissionAllow-SWIDdt0G.js";import{d as s}from"./index-Bhq-rrrz.js";/* empty css                                  */import{M as v}from"./ModalPopup-pv647XVD.js";import g from"./ViewStaff-DtZ7cAqi.js";import"./Dropdown-B0qLyvOA.js";import"./AdminSidebar-DQ0wRrkg.js";import"./listen-DBSKtzGo.js";import"./useWindow-Bp8QNRUJ.js";import"./Anchor-CEqg9jmj.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CzsITtD-.js";import"./ToastNotification-gx8mAVOD.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CkJbhqZ5.js";import"./defineProperty-D_iN_pGO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Chjiymov.js";import"./Modal-Zzk52Z60.js";import"./Fade-Du7pQ0im.js";import"./inheritsLoose-1HkgTRWY.js";import"./index-D1UJqtKR.js";import"./TransitionGroupContext-BvsyIu3A.js";function W({auth:m,staffs:i}){const[h,a]=o.useState(!1),[n,x]=o.useState(null),j=function(t){d.fire({title:"Are you sure you want to delete this staff?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&f.delete(route("admin.staff.destroy",t),{onSuccess:()=>{d.fire("Deleted!","staff has been deleted.","success")}})})},l=()=>a(!1),p=async t=>{try{const u=(await N.get(route("admin.staff.show",t.id))).data;x(u),a(!0)}catch(r){console.error("Error fetching data",r)}};return e.jsxs(e.Fragment,{children:[e.jsxs(T,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Staff List"}),children:[e.jsx(b,{title:"Staff List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Staff List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(c,{className:"btn btn-info text-end",href:route("admin.staff.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{scope:"col",children:"#"}),e.jsx(s.Th,{scope:"col",children:"Name"}),e.jsx(s.Th,{scope:"col",children:"Email"}),e.jsx(s.Th,{scope:"col",children:"Phone"}),e.jsx(s.Th,{scope:"col",children:"Role"}),e.jsx(s.Th,{scope:"col",children:"Last Modified"}),e.jsx(s.Th,{scope:"col"})]})}),e.jsx(s.Tbody,{children:i.data.length?e.jsx(e.Fragment,{children:i.data.map(t=>e.jsxs(s.Tr,{children:[e.jsxs(s.Td,{children:["#",t.id]}),e.jsx(s.Td,{children:t.name}),e.jsx(s.Td,{children:t.email}),e.jsx(s.Td,{children:t.phone}),e.jsx(s.Td,{children:t.role_names}),e.jsx(s.Td,{children:t.date_text}),e.jsxs(s.Td,{children:[e.jsx("span",{onClick:()=>p(t),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx(c,{href:route("admin.staff.edit",t.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-pen"})}),e.jsx("button",{onClick:r=>j(t.id),className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})]})]},t.id))}):e.jsx(e.Fragment,{children:e.jsx(s.Tr,{children:e.jsx(s.Td,{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})})})})})})]})})]}),e.jsx(v,{show:h,handleClose:l,size:"md",title:"Staff User Details",children:n?e.jsx(g,{collection:n,handleClose:l}):"Failed fetching data..."})]})}export{W as default};