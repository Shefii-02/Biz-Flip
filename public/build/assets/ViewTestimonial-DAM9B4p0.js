import{j as s}from"./app-CG-cedyX.js";function t({collection:e,handleClose:n}){return s.jsx(s.Fragment,{children:s.jsx("table",{className:"table table-separated",children:s.jsxs("tbody",{children:[s.jsx("tr",{children:s.jsx("td",{colSpan:2,className:"text-center",children:s.jsx("img",{src:e.image,className:"w-40 rounded-5 ",alt:`${e.image} icon`,onError:r=>{r.target.onerror=null,r.target.src="/assets/admin/images/noimage.webp"}})})}),s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx("span",{children:"Full Name"})}),s.jsx("td",{children:e.name})]}),s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx("span",{children:"Company Name"})}),s.jsx("td",{children:e.company_name})]}),s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx("span",{children:"Designation"})}),s.jsx("td",{children:e.designation})]}),s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx("span",{children:"Message"})}),s.jsx("td",{children:e.message})]}),s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx("span",{children:"Status"})}),s.jsx("td",{children:e.status})]}),s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx("span",{children:"Created Date"})}),s.jsx("td",{children:window.formatDateTime(e.created_at)})]})]})})})}export{t as default};
