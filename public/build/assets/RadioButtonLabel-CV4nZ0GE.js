import{r as c,j as e}from"./app-BNxhFZPN.js";function l({name:a,value:s,checked:i,label:n,onChange:o}){const[t,r]=c.useState(i),d=()=>{r(!t),o(s)};return e.jsx("label",{className:"radio-inline p-0 me-10",children:e.jsxs("div",{className:"radio radio-info",children:[e.jsx("input",{type:"radio",name:a,id:`status-${s}`,value:s,checked:t,onChange:d}),e.jsx("label",{htmlFor:`status-${s}`,children:n})]})})}export{l as R};
