import{j as s,r as u,W as w}from"./app-C7Wmsx-r.js";import{P as c}from"./index-D1UJqtKR.js";import{S as y}from"./slick-theme-B1pmtPXr.js";import{S as o,T as P}from"./StatusBtn-D2_redau.js";import{D as T}from"./DynamicSelect-B_R3PZmB.js";import"./index-Chjiymov.js";import"./listen-DBSKtzGo.js";import"./TabPane-CuXAwgt_.js";import"./Anchor-CEqg9jmj.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./Fade-Du7pQ0im.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./TransitionGroupContext-BvsyIu3A.js";import"./react-select-creatable.esm-DirrFLVl.js";import"./useStateManager-7e1e8489.esm-K7qsbL5R.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./extends-CkJbhqZ5.js";import"./emotion-react.browser.esm-DdNgd-M_.js";import"./hoist-non-react-statics.cjs-Ae5wMIlW.js";function C({images:t=[],slidesToShow:p=4,dots:l=!1,arrow:n=!1}){const e={dots:l,infinite:!0,speed:500,slidesToShow:p,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:n};return s.jsx(s.Fragment,{children:t.length?s.jsx(y,{...e,children:t.map((m,i)=>s.jsx("div",{className:"item",children:s.jsxs("div",{className:"pe-20",children:[s.jsx("img",{role:"button",src:window.getImageAsset(m),className:"img-fluid rounded15 mb-15",alt:window.getImageAsset(m),onError:a=>{a.target.onerror=null,a.target.src="/assets/admin/images/noimage.webp"}}),s.jsx("h6",{})]})},i))}):s.jsx("div",{children:"No images available"})})}const D=({collection:t,handleClose:p,onSubmit:l})=>{const[n,e]=u.useState(!1),[m,i]=u.useState(t.status),{data:a,setData:h,post:x,errors:_,reset:$}=w({status:t.status||"0",_method:"PUT"}),j=t.images||[],b=[{title:"Details",content:t.description+"<br>"},{title:"More Information",content:`<table class="table">
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
                                                </table>`}],f=[{value:"0",label:"Pending"},{value:"1",label:"Publish"},{value:"-1",label:"Suspend"},{value:"3",label:"Inactive"}];var r="";t.status==1?r="Publish":t.status==-1?r="Suspend":t.status==3?r="Inactive":r="Pending";const N=()=>{e(!0)};o,t.status;const g=d=>{d.preventDefault(),console.log(a),x(route("admin.ads.update",t.id),{preserveScroll:!0,onSuccess:()=>{e(!1),l()}})},S=()=>{e(!1),i(t.status)},v=d=>{h("status",d),i(d.value)};return s.jsx("div",{className:"col-lg-12",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-lg-4",children:s.jsx(C,{images:j,slidesToShow:1,dots:!0})}),s.jsxs("div",{className:"col-lg-8",children:[s.jsx("h2",{children:t.title}),s.jsx("table",{className:"border-0 ",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Price"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatPrice(t.price)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Type/Purpose"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.property_type," / ",t.ad_purpose]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Seller"})}),s.jsx("td",{className:"p-2",children:s.jsxs("p",{className:"mb-0",children:[t.seller.firstname," ",t.seller.lastname]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Created Date"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.created_at)})})]}),t.updated_at&&s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Last Modified"})}),s.jsx("td",{className:"p-2",children:s.jsx("p",{className:"mb-0",children:window.formatDateTime(t.updated_at)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-2",children:s.jsx("strong",{children:"Status"})}),s.jsx("td",{className:"p-2",children:n?s.jsx("form",{onSubmit:g,children:s.jsxs("div",{className:"text-center",children:[s.jsx(T,{onChange:v,value:a.status,defaultValue:r,options:f,isClearable:!1}),s.jsxs("div",{className:"mt-2",children:[s.jsx("button",{type:"button",className:"btn btn-link p-0",onClick:S,children:s.jsx("i",{className:"bi bi-x-circle-fill fs-3 text-danger ms-2",role:"button"})}),s.jsx("button",{type:"submit",className:"btn btn-link p-0",children:s.jsx("i",{className:"bi bi-check-circle-fill fs-3 text-success ms-2"})})]})]})}):s.jsxs(s.Fragment,{children:[s.jsx(o,{status:t.status}),t.status!=2?s.jsx("i",{className:"bi bi-pencil-fill ms-2 text-primary",role:"button",onClick:N}):""]})})]})]})})]}),s.jsx("div",{className:"col-lg-12 mt-50",children:s.jsx(P,{options:b})})]})})};D.propTypes={collection:c.object.isRequired,handleClose:c.func.isRequired,onSubmit:c.func.isRequired};export{D as default};