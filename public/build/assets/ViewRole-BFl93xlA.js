import{j as e}from"./app-BuJsMX9a.js";function l({collection:s,handleClose:n}){return console.log(s),e.jsx(e.Fragment,{children:e.jsx("table",{className:"table table-separated",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("span",{children:"Role Name"})}),e.jsx("td",{children:s.name})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("span",{children:"Last Modified"})}),e.jsx("td",{children:window.formatDateTime(s.updated_at)})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("span",{children:"Permissions"})}),e.jsx("td",{children:e.jsx("ul",{children:Object.values(s.permissions).map((r,d)=>e.jsx("li",{children:r},d))})})]})]})})})}export{l as default};
