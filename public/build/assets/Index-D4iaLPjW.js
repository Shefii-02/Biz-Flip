import{r as i,W as k,j as e,Y as Q,a as h,y as R,b as _}from"./app-C7Wmsx-r.js";import{A as q}from"./AdminAuthenticated-BzMDgxo7.js";import{P as o}from"./PermissionAllow-SWIDdt0G.js";import{P as f}from"./index-D1UJqtKR.js";import{S as N}from"./sweetalert2.all-CpkQSRBx.js";import{d as r}from"./index-Bhq-rrrz.js";/* empty css                                  */import{M as Y}from"./ModalPopup-pv647XVD.js";import z from"./ViewCategory-Caz-pwM5.js";import{P as F}from"./Pagination-YA9u0hbE.js";import"./Dropdown-B0qLyvOA.js";import"./AdminSidebar-DQ0wRrkg.js";import"./listen-DBSKtzGo.js";import"./useWindow-Bp8QNRUJ.js";import"./Anchor-CEqg9jmj.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CzsITtD-.js";import"./ToastNotification-gx8mAVOD.js";import"./index-Chjiymov.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-CkJbhqZ5.js";import"./defineProperty-D_iN_pGO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Modal-Zzk52Z60.js";import"./Fade-Du7pQ0im.js";import"./inheritsLoose-1HkgTRWY.js";import"./TransitionGroupContext-BvsyIu3A.js";import"./slick-theme-B1pmtPXr.js";import"./StatusBtn-D2_redau.js";import"./TabPane-CuXAwgt_.js";import"./DynamicSelect-B_R3PZmB.js";import"./react-select-creatable.esm-DirrFLVl.js";import"./useStateManager-7e1e8489.esm-K7qsbL5R.js";import"./objectSpread2-Cb9oE9w6.js";import"./emotion-react.browser.esm-DdNgd-M_.js";import"./hoist-non-react-statics.cjs-Ae5wMIlW.js";import"./objectWithoutPropertiesLoose-DN910g8V.js";function H({categoryList:n,auth:C}){const[y,x]=i.useState(!1),l=20,[c,p]=i.useState(1),[j,v]=i.useState(""),[u,d]=i.useState(n.data),{data:g,setData:w,post:O,errors:V,reset:W}=k({orderedIds:[]}),T=s=>{N.fire({title:"Are you sure you want to delete this category?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&R.delete(route("admin.category.destroy",s.id),{onSuccess:()=>{d(u.filter(a=>a.id!==s.id)),N.fire("Deleted!","Category has been deleted.","success")}})})},S=(s,t)=>{p(t),window.scrollTo(0,0)};i.useEffect(()=>{d(n.data)},[n]);const m=j.length>0?u:n.data,P=(c-1)*l,A=c*l,D=m.slice(P,A),[I,E]=i.useState(D),L=(s=null)=>{v(s);const t=n.data.filter(a=>a.name.toLowerCase().includes(s.toLowerCase()));d(t),E(t),p(1)},M=s=>{const t=s.target.value;L(t)},b=()=>x(!1),B=async s=>{try{const a=(await _.get(route("admin.category.show",s.id))).data;console.log(a),w(a),x(!0)}catch(t){console.error("Error fetching data",t)}};return e.jsxs(q,{user:C.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ad Categories"}),children:[e.jsx(Q,{title:"Category List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Ad Categories"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(h,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Ad Categories"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(o,{permission:"Category Create",children:e.jsxs(h,{className:"btn btn-info text-end",href:route("admin.category.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(o,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by Category name...",value:j,onChange:M})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(r.Table,{className:"table border-no",id:"example1",children:[e.jsx(r.Thead,{children:e.jsxs(r.Tr,{children:[e.jsx(r.Th,{children:"Name"}),e.jsx(r.Th,{className:"text-center",children:"Status"}),e.jsx(r.Th,{className:"text-center",children:"Last Modified"}),e.jsx(r.Th,{})]})}),e.jsx(r.Tbody,{children:I.map((s,t)=>e.jsxs(r.Tr,{children:[e.jsx(r.Td,{children:s.name}),e.jsx(r.Td,{className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsx(r.Td,{className:"text-center",children:window.formatDateTime(s.updated_at)}),e.jsxs(r.Td,{align:"right",children:[e.jsx(o,{permission:"Category Show",children:e.jsx("span",{onClick:()=>B(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(o,{permission:"Category Edit",children:e.jsx(h,{className:"btn btn-transparent",href:route("admin.category.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(o,{permission:"Category Delete",children:e.jsx("button",{onClick:()=>T(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},t))})]})}),m.length>l&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(F,{count:Math.ceil(m.length/l),page:c,onChange:S})})]})})})})})})]})}),e.jsx(Y,{show:y,handleClose:b,size:"md",title:"Ad Category Details",children:g?e.jsx(z,{collection:g,handleClose:b}):"Failed fetching data..."})]})}H.propTypes={categoryList:f.object.isRequired,auth:f.object.isRequired};export{H as default};
