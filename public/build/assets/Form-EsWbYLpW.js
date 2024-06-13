import{c as d,u as i}from"./listen-BbKSz9Gy.js";import{P as y}from"./index-DHEsC4vh.js";import{r as t,j as l}from"./app-DOZcIWVh.js";import{C as J}from"./Col-BuJHI_DN.js";const K={type:y.string,tooltip:y.bool,as:y.elementType},N=t.forwardRef(({as:e="div",className:o,type:a="valid",tooltip:s=!1,...r},n)=>l.jsx(e,{...r,ref:n,className:d(o,`${a}-${s?"tooltip":"feedback"}`)}));N.displayName="Feedback";N.propTypes=K;const u=t.createContext({}),$=t.forwardRef(({id:e,bsPrefix:o,className:a,type:s="checkbox",isValid:r=!1,isInvalid:n=!1,as:m="input",...p},f)=>{const{controlId:c}=t.useContext(u);return o=i(o,"form-check-input"),l.jsx(m,{...p,ref:f,type:s,id:e||c,className:d(a,o,r&&"is-valid",n&&"is-invalid")})});$.displayName="FormCheckInput";const h=t.forwardRef(({bsPrefix:e,className:o,htmlFor:a,...s},r)=>{const{controlId:n}=t.useContext(u);return e=i(e,"form-check-label"),l.jsx("label",{...s,ref:r,htmlFor:a||n,className:d(o,e)})});h.displayName="FormCheckLabel";function Q(e,o){return t.Children.toArray(e).some(a=>t.isValidElement(a)&&a.type===o)}const O=t.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:a,inline:s=!1,reverse:r=!1,disabled:n=!1,isValid:m=!1,isInvalid:p=!1,feedbackTooltip:f=!1,feedback:c,feedbackType:F,className:C,style:w,title:v="",type:g="checkbox",label:x,children:R,as:b="input",...q},z)=>{o=i(o,"form-check"),a=i(a,"form-switch");const{controlId:L}=t.useContext(u),D=t.useMemo(()=>({controlId:e||L}),[L,e]),T=!R&&x!=null&&x!==!1||Q(R,h),H=l.jsx($,{...q,type:g==="switch"?"checkbox":g,ref:z,isValid:m,isInvalid:p,disabled:n,as:b});return l.jsx(u.Provider,{value:D,children:l.jsx("div",{style:w,className:d(C,T&&o,s&&`${o}-inline`,r&&`${o}-reverse`,g==="switch"&&a),children:R||l.jsxs(l.Fragment,{children:[H,T&&l.jsx(h,{title:v,children:x}),c&&l.jsx(N,{type:F,tooltip:f,children:c})]})})})});O.displayName="FormCheck";const j=Object.assign(O,{Input:$,Label:h}),S=t.forwardRef(({bsPrefix:e,type:o,size:a,htmlSize:s,id:r,className:n,isValid:m=!1,isInvalid:p=!1,plaintext:f,readOnly:c,as:F="input",...C},w)=>{const{controlId:v}=t.useContext(u);return e=i(e,"form-control"),l.jsx(F,{...C,type:o,size:s,ref:w,readOnly:c,id:r||v,className:d(n,f?`${e}-plaintext`:e,a&&`${e}-${a}`,o==="color"&&`${e}-color`,m&&"is-valid",p&&"is-invalid")})});S.displayName="FormControl";const U=Object.assign(S,{Feedback:N}),E=t.forwardRef(({className:e,bsPrefix:o,as:a="div",...s},r)=>(o=i(o,"form-floating"),l.jsx(a,{ref:r,className:d(e,o),...s})));E.displayName="FormFloating";const k=t.forwardRef(({controlId:e,as:o="div",...a},s)=>{const r=t.useMemo(()=>({controlId:e}),[e]);return l.jsx(u.Provider,{value:r,children:l.jsx(o,{...a,ref:s})})});k.displayName="FormGroup";const G=t.forwardRef(({as:e="label",bsPrefix:o,column:a=!1,visuallyHidden:s=!1,className:r,htmlFor:n,...m},p)=>{const{controlId:f}=t.useContext(u);o=i(o,"form-label");let c="col-form-label";typeof a=="string"&&(c=`${c} ${c}-${a}`);const F=d(r,o,s&&"visually-hidden",a&&c);return n=n||f,a?l.jsx(J,{ref:p,as:"label",className:F,htmlFor:n,...m}):l.jsx(e,{ref:p,className:F,htmlFor:n,...m})});G.displayName="FormLabel";const M=t.forwardRef(({bsPrefix:e,className:o,id:a,...s},r)=>{const{controlId:n}=t.useContext(u);return e=i(e,"form-range"),l.jsx("input",{...s,type:"range",ref:r,className:d(o,e),id:a||n})});M.displayName="FormRange";const V=t.forwardRef(({bsPrefix:e,size:o,htmlSize:a,className:s,isValid:r=!1,isInvalid:n=!1,id:m,...p},f)=>{const{controlId:c}=t.useContext(u);return e=i(e,"form-select"),l.jsx("select",{...p,size:a,ref:f,className:d(s,e,o&&`${e}-${o}`,r&&"is-valid",n&&"is-invalid"),id:m||c})});V.displayName="FormSelect";const A=t.forwardRef(({bsPrefix:e,className:o,as:a="small",muted:s,...r},n)=>(e=i(e,"form-text"),l.jsx(a,{...r,ref:n,className:d(o,e,s&&"text-muted")})));A.displayName="FormText";const B=t.forwardRef((e,o)=>l.jsx(j,{...e,ref:o,type:"switch"}));B.displayName="Switch";const W=Object.assign(B,{Input:j.Input,Label:j.Label}),_=t.forwardRef(({bsPrefix:e,className:o,children:a,controlId:s,label:r,...n},m)=>(e=i(e,"form-floating"),l.jsxs(k,{ref:m,className:d(o,e),controlId:s,...n,children:[a,l.jsx("label",{htmlFor:s,children:r})]})));_.displayName="FloatingLabel";const X={_ref:y.any,validated:y.bool,as:y.elementType},I=t.forwardRef(({className:e,validated:o,as:a="form",...s},r)=>l.jsx(a,{...s,ref:r,className:d(e,o&&"was-validated")}));I.displayName="Form";I.propTypes=X;const oe=Object.assign(I,{Group:k,Control:U,Floating:E,Check:j,Switch:W,Label:G,Text:A,Range:M,Select:V,FloatingLabel:_});export{oe as F};
