import{j as s,Y as t,a as o}from"./app-NOf8Ud2Y.js";import"./Dropdown-BeYQcZ-k.js";import"./index-Blf2R5jN.js";import{P as l}from"./PermissionAllow-DuJ9Iv_Y.js";import m from"./Wrapper-CupChqxa.js";import n from"./LeadsTable-CgSbxt9G.js";import x from"./Tickets-dLNcRRmL.js";import h from"./AdsTable-BptR5Kzk.js";import j from"./Graphs-fMZ9J0Bm.js";import"./SideBar-tTLAqYq4.js";import"./ProfileDropdown-DSjlo1Jv.js";import"./Header-BZ9oaa1a.js";import"./Dropdown-DvMLigQO.js";import"./listen-DAonDIvx.js";import"./useWindow-CHvFuoXy.js";import"./Anchor-Bk6fN3Km.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-beDGr7FA.js";import"./ReactToastify-Dj4qrOSt.js";import"./LeadStatusBtn-C5IHc2nD.js";import"./server.browser-CC1LufyL.js";import"./Modal-Dza8gc_j.js";import"./BootstrapModalManager-BrrHINVF.js";import"./Fade-BeIZaMCs.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-0eJ9DX1U.js";import"./Lead-Cre2TREj.js";import"./AdStatusBtn-Cp_lIqm0.js";import"./AdAction-Duw2P6uJ.js";import"./react-apexcharts.min-BH9CFvqs.js";/* empty css              */function O({auth:a,data:e,leads:d,tickets:c,ads:r,current_invoice:i}){return s.jsxs(s.Fragment,{children:[s.jsx(t,{title:"Dashboard"}),s.jsx(m,{user:a.user,children:s.jsx("main",{className:"py-6",children:s.jsxs("div",{className:"container-fluid px-3 px-lg-6",children:[i?s.jsx(s.Fragment,{children:s.jsxs("div",{className:"alert alert-success mb-5",children:["You currently have active subscription ",s.jsx("strong",{children:i.name})," with remaining ",s.jsx("strong",{children:i.remaining_ads})," ads till ",s.jsx("strong",{children:i.expire_date})]})}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"alert alert-danger mb-5",children:["You dont have any active subscriptions. Please ",s.jsx(o,{href:route("seller.plans.index"),children:"purchase "}),"new plan to create new ads."]})}),s.jsxs("div",{className:"row g-6",children:[s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"My ads"}),s.jsx("span",{className:"h3 font-bold mb-0",children:e.ads})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-tertiary text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-building-fill-check"})})})]})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Leads"}),s.jsx("span",{className:"h3 font-bold mb-0",children:e.leads})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-primary text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-send-check-fill"})})})]})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Views"}),s.jsx("span",{className:"h3 font-bold mb-0",children:e.views})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-info text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-eye"})})})]})})})}),s.jsx("div",{className:"col-xl-3 col-sm-6 col-12",children:s.jsx("div",{className:"card rounded-input",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col text-overflow",children:[s.jsx("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2 text-overflow",children:"Views to lead ratio"}),s.jsxs("span",{className:"h3 font-bold mb-0",children:[e.view_lead_ratio,"%"]})]}),s.jsx("div",{className:"col-auto",children:s.jsx("div",{className:"icon icon-shape bg-warning text-white text-lg rounded-circle",children:s.jsx("i",{className:"bi bi-percent"})})})]})})})})]}),s.jsx("div",{children:s.jsx(j,{})}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs(l,{permission:"Ads Leads Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Latest leads"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(n,{minimal:!0,leads:d.data})})})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs(l,{permission:"Ads Leads Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Most viewd ads"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(h,{minimal:!0,ads:r.data})})})]})}),s.jsx("div",{className:"col-md-12",children:s.jsxs(l,{permission:"Support Ticket Listing",children:[s.jsx("div",{className:"text-xl font-bold mt-5",children:"Recent tickets"}),s.jsx("div",{children:s.jsx("div",{className:"card",children:s.jsx(x,{minimal:!0,ticketData:c.data})})})]})})]})]})})})]})}export{O as default};