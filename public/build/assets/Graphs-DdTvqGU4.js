import{r as o,W as f,j as s,b as h}from"./app-BjRDVr7K.js";import{_ as j}from"./react-apexcharts.min-DlOJwO1z.js";/* empty css              */import"./index-VofWu8MJ.js";const w=()=>{const[r,n]=o.useState([]),[c,i]=o.useState([{name:"Leads",data:[]},{name:"Views",data:[]}]),{data:d,setData:y}=f({start:"",end:""}),l={chart:{id:"combined-line-chart"},xaxis:{categories:r},toolbar:{show:!0,tools:{download:!0,selection:!0,zoom:!1,zoomin:!1,zoomout:!1,pan:!1,reset:!1}}},m=e=>{const a=Object.keys(e),u=a.map(t=>e[t].leads),x=a.map(t=>e[t].views);n(a),i([{name:"Leads",data:u},{name:"Views",data:x}])},p=async()=>{try{const e=await h.get(route("seller.graph"),d);m(e.data)}catch(e){console.error("Error fetching data:",e)}};return o.useEffect(()=>{p()},[]),s.jsxs("div",{className:"mt-5",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Daily Leads and Views"}),s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsx(j,{options:l,series:c,type:"area",height:350})})})]})},E=w;export{E as default};
