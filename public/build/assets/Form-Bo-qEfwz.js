import{j as p,i as u,s as Q,t as U}from"./useMergedRefs-B2_9xDH_.js";import{P as j}from"./index-DR1INU4b.js";import{r as l,j as r}from"./app-DEFvwcdl.js";const W={type:j.string,tooltip:j.bool,as:j.elementType},w=l.forwardRef(({as:e="div",className:s,type:o="valid",tooltip:a=!1,...t},n)=>r.jsx(e,{...t,ref:n,className:p(s,`${o}-${a?"tooltip":"feedback"}`)}));w.displayName="Feedback";w.propTypes=W;const F=l.createContext({}),x=l.forwardRef(({id:e,bsPrefix:s,className:o,type:a="checkbox",isValid:t=!1,isInvalid:n=!1,as:c="input",...i},d)=>{const{controlId:m}=l.useContext(F);return s=u(s,"form-check-input"),r.jsx(c,{...i,ref:d,type:a,id:e||m,className:p(o,s,t&&"is-valid",n&&"is-invalid")})});x.displayName="FormCheckInput";const C=l.forwardRef(({bsPrefix:e,className:s,htmlFor:o,...a},t)=>{const{controlId:n}=l.useContext(F);return e=u(e,"form-check-label"),r.jsx("label",{...a,ref:t,htmlFor:o||n,className:p(s,e)})});C.displayName="FormCheckLabel";function X(e,s){return l.Children.toArray(e).some(o=>l.isValidElement(o)&&o.type===s)}const B=l.forwardRef(({id:e,bsPrefix:s,bsSwitchPrefix:o,inline:a=!1,reverse:t=!1,disabled:n=!1,isValid:c=!1,isInvalid:i=!1,feedbackTooltip:d=!1,feedback:m,feedbackType:f,className:y,style:N,title:h="",type:v="checkbox",label:g,children:R,as:z="input",...D},H)=>{s=u(s,"form-check"),o=u(o,"form-switch");const{controlId:L}=l.useContext(F),J=l.useMemo(()=>({controlId:e||L}),[L,e]),T=!R&&g!=null&&g!==!1||X(R,C),K=r.jsx(x,{...D,type:v==="switch"?"checkbox":v,ref:H,isValid:c,isInvalid:i,disabled:n,as:z});return r.jsx(F.Provider,{value:J,children:r.jsx("div",{style:N,className:p(y,T&&s,a&&`${s}-inline`,t&&`${s}-reverse`,v==="switch"&&o),children:R||r.jsxs(r.Fragment,{children:[K,T&&r.jsx(C,{title:h,children:g}),m&&r.jsx(w,{type:f,tooltip:d,children:m})]})})})});B.displayName="FormCheck";const $=Object.assign(B,{Input:x,Label:C}),O=l.forwardRef(({bsPrefix:e,type:s,size:o,htmlSize:a,id:t,className:n,isValid:c=!1,isInvalid:i=!1,plaintext:d,readOnly:m,as:f="input",...y},N)=>{const{controlId:h}=l.useContext(F);return e=u(e,"form-control"),r.jsx(f,{...y,type:s,size:a,ref:N,readOnly:m,id:t||h,className:p(n,d?`${e}-plaintext`:e,o&&`${e}-${o}`,s==="color"&&`${e}-color`,c&&"is-valid",i&&"is-invalid")})});O.displayName="FormControl";const Y=Object.assign(O,{Feedback:w}),S=l.forwardRef(({className:e,bsPrefix:s,as:o="div",...a},t)=>(s=u(s,"form-floating"),r.jsx(o,{ref:t,className:p(e,s),...a})));S.displayName="FormFloating";const k=l.forwardRef(({controlId:e,as:s="div",...o},a)=>{const t=l.useMemo(()=>({controlId:e}),[e]);return r.jsx(F.Provider,{value:t,children:r.jsx(s,{...o,ref:a})})});k.displayName="FormGroup";function Z({as:e,bsPrefix:s,className:o,...a}){s=u(s,"col");const t=Q(),n=U(),c=[],i=[];return t.forEach(d=>{const m=a[d];delete a[d];let f,y,N;typeof m=="object"&&m!=null?{span:f,offset:y,order:N}=m:f=m;const h=d!==n?`-${d}`:"";f&&c.push(f===!0?`${s}${h}`:`${s}${h}-${f}`),N!=null&&i.push(`order${h}-${N}`),y!=null&&i.push(`offset${h}-${y}`)}),[{...a,className:p(o,...c,...i)},{as:e,bsPrefix:s,spans:c}]}const E=l.forwardRef((e,s)=>{const[{className:o,...a},{as:t="div",bsPrefix:n,spans:c}]=Z(e);return r.jsx(t,{...a,ref:s,className:p(o,!c.length&&n)})});E.displayName="Col";const G=l.forwardRef(({as:e="label",bsPrefix:s,column:o=!1,visuallyHidden:a=!1,className:t,htmlFor:n,...c},i)=>{const{controlId:d}=l.useContext(F);s=u(s,"form-label");let m="col-form-label";typeof o=="string"&&(m=`${m} ${m}-${o}`);const f=p(t,s,a&&"visually-hidden",o&&m);return n=n||d,o?r.jsx(E,{ref:i,as:"label",className:f,htmlFor:n,...c}):r.jsx(e,{ref:i,className:f,htmlFor:n,...c})});G.displayName="FormLabel";const M=l.forwardRef(({bsPrefix:e,className:s,id:o,...a},t)=>{const{controlId:n}=l.useContext(F);return e=u(e,"form-range"),r.jsx("input",{...a,type:"range",ref:t,className:p(s,e),id:o||n})});M.displayName="FormRange";const V=l.forwardRef(({bsPrefix:e,size:s,htmlSize:o,className:a,isValid:t=!1,isInvalid:n=!1,id:c,...i},d)=>{const{controlId:m}=l.useContext(F);return e=u(e,"form-select"),r.jsx("select",{...i,size:o,ref:d,className:p(a,e,s&&`${e}-${s}`,t&&"is-valid",n&&"is-invalid"),id:c||m})});V.displayName="FormSelect";const A=l.forwardRef(({bsPrefix:e,className:s,as:o="small",muted:a,...t},n)=>(e=u(e,"form-text"),r.jsx(o,{...t,ref:n,className:p(s,e,a&&"text-muted")})));A.displayName="FormText";const _=l.forwardRef((e,s)=>r.jsx($,{...e,ref:s,type:"switch"}));_.displayName="Switch";const b=Object.assign(_,{Input:$.Input,Label:$.Label}),q=l.forwardRef(({bsPrefix:e,className:s,children:o,controlId:a,label:t,...n},c)=>(e=u(e,"form-floating"),r.jsxs(k,{ref:c,className:p(s,e),controlId:a,...n,children:[o,r.jsx("label",{htmlFor:a,children:t})]})));q.displayName="FloatingLabel";const P={_ref:j.any,validated:j.bool,as:j.elementType},I=l.forwardRef(({className:e,validated:s,as:o="form",...a},t)=>r.jsx(o,{...a,ref:t,className:p(e,s&&"was-validated")}));I.displayName="Form";I.propTypes=P;const ae=Object.assign(I,{Group:k,Control:Y,Floating:S,Check:$,Switch:b,Label:G,Text:A,Range:M,Select:V,FloatingLabel:q});export{ae as F};
