import{r as n,W as g,j as s}from"./app-DvUISPJn.js";import{P as i}from"./index-tWxPSefe.js";import{S as v}from"./SlickSlider-DIJ_3tyq.js";import{S as m,T as w}from"./StatusBtn-jvoxIFcE.js";import{D as P}from"./DynamicSelect-BHHKhBLX.js";import"./index-Chjiymov.js";import"./slick-theme-CrREVhD4.js";import"./listen-C_H2u1Mk.js";import"./TabPane-D0pZyEGu.js";import"./Anchor-D-ApXcz1.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./Fade-DEZFuX-D.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./TransitionGroupContext-CBmSgjqp.js";import"./react-select-creatable.esm-DVeyHWca.js";import"./useStateManager-7e1e8489.esm-BWgT7QMB.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./emotion-react.browser.esm-DGO3JfO1.js";import"./hoist-non-react-statics.cjs-B8cWLWHZ.js";const y=({collection:t,handleClose:T,onSubmit:p})=>{const[c,r]=n.useState(!1),[C,d]=n.useState(t.status),{data:l,setData:u,post:h,errors:D,reset:_}=g({status:t.status||"0",_method:"PUT"}),x=t.images||[],o=[{title:"Details",content:t.description+"<br>"},{title:"More Information",content:`<table class="table">
                                                    <tr>
                                                        <th>
                                                        Addess
                                                        </th>
                                                        <td>
                                                            ${t.address}, <br>
                                                            ${t.postalcode}, 
                                                            ${t.city}, <br>
                                                            ${t.province}.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Space
                                                        </th>
                                                        <td>
                                                            ${t.space}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Price
                                                        </th>
                                                        <td>
                                                            ${window.formatPrice(t.price)}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Ad Viewed
                                                        </th>
                                                        <td>
                                                            ${t.total_views}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Total Leads
                                                        </th>
                                                        <td>
                                                            ${t.total_leads}
                                                        </td>
                                                    </tr>
                                                </table>`}],j=[{value:"0",label:"Pending"},{value:"1",label:"Publish"},{value:"-1",label:"Suspend"},{value:"3",label:"Inactive"}];var e="";t.status==1?e="Publish":t.status==-1?e="Suspend":t.status==3?e="Inactive":e="Pending";const b=()=>{r(!0)};m,t.status;const f=a=>{a.preventDefault(),console.log(l),h(route("admin.ads.update",t.id),{preserveScroll:!0,onSuccess:()=>{r(!1),p()}})},N=()=>{r(!1),d(t.status)},S=a=>{u("status",a),d(a.value)};return s.jsx("div",{className:"col-lg-12",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-4",children:s.jsx(v,{images:x,slidesToShow:1,dots:!0})}),s.jsxs("div",{className:"col-lg-8",children:[s.jsx("h2",{children:t.title}),s.jsx("table",{className:"border-0 ",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Price"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatPrice(t.price)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Type/Purpose"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.property_type," / ",t.ad_purpose]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Seller"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.seller.firstname," ",t.seller.lastname]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Created Date"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.created_at)})})]}),t.updated_at&&s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Last Modified"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.updated_at)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Status"})}),s.jsx("td",{className:"p-2",children:c?s.jsx("form",{onSubmit:f,children:s.jsxs("div",{className:"text-center",children:[s.jsx(P,{onChange:S,value:l.status,defaultValue:e,options:j,isClearable:!1}),s.jsxs("div",{className:"mt-2",children:[s.jsx("button",{type:"button",className:"btn btn-link p-0",onClick:N,children:s.jsx("i",{className:"bi bi-x-circle-fill fs-3 text-danger ms-2",role:"button"})}),s.jsx("button",{type:"submit",className:"btn btn-link p-0",children:s.jsx("i",{className:"bi bi-check-circle-fill fs-3 text-success ms-2"})})]})]})}):s.jsxs(s.Fragment,{children:[s.jsx(m,{status:t.status}),t.status!=2?s.jsx("i",{className:"bi bi-pencil-fill ms-2 text-primary",role:"button",onClick:b}):""]})})]})]})})]}),s.jsx("div",{className:"col-lg-12 mt-50",children:s.jsx(w,{options:o})})]})})};y.propTypes={collection:i.object.isRequired,handleClose:i.func.isRequired,onSubmit:i.func.isRequired};export{y as default};
