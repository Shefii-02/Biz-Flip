import{r as T,d as v,q as ve,j as he}from"./app-C7Wmsx-r.js";function ue(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=ue(e[t]))&&(s&&(s+=" "),s+=n)}else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}function F(){for(var e,t,n=0,s="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=ue(e))&&(s&&(s+=" "),s+=t);return s}const J=e=>typeof e=="number"&&!isNaN(e),j=e=>typeof e=="string",$=e=>typeof e=="function",ne=e=>j(e)||$(e)?e:null,ie=e=>T.isValidElement(e)||j(e)||$(e)||J(e);function Ee(e,t,n){n===void 0&&(n=300);const{scrollHeight:s,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=s+"px",a.transition=`all ${n}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)})})}function se(e){let{enter:t,exit:n,appendPosition:s=!1,collapse:a=!0,collapseDuration:d=300}=e;return function(o){let{children:E,position:f,preventExitTransition:_,done:u,nodeRef:C,isIn:I,playToast:N}=o;const m=s?`${t}--${f}`:t,c=s?`${n}--${f}`:n,b=T.useRef(0);return T.useLayoutEffect(()=>{const p=C.current,l=m.split(" "),r=g=>{g.target===C.current&&(N(),p.removeEventListener("animationend",r),p.removeEventListener("animationcancel",r),b.current===0&&g.type!=="animationcancel"&&p.classList.remove(...l))};p.classList.add(...l),p.addEventListener("animationend",r),p.addEventListener("animationcancel",r)},[]),T.useEffect(()=>{const p=C.current,l=()=>{p.removeEventListener("animationend",l),a?Ee(p,u,d):u()};I||(_?l():(b.current=1,p.className+=` ${c}`,p.addEventListener("animationend",l)))},[I]),v.createElement(v.Fragment,null,E)}}function ce(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const k=new Map;let K=[];const le=new Set,Te=e=>le.forEach(t=>t(e)),pe=()=>k.size>0;function fe(e,t){var n;if(t)return!((n=k.get(t))==null||!n.isToastActive(e));let s=!1;return k.forEach(a=>{a.isToastActive(e)&&(s=!0)}),s}function me(e,t){ie(e)&&(pe()||K.push({content:e,options:t}),k.forEach(n=>{n.buildToast(e,t)}))}function de(e,t){k.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function be(e){const{subscribe:t,getSnapshot:n,setProps:s}=T.useRef(function(d){const o=d.containerId||1;return{subscribe(E){const f=function(u,C,I){let N=1,m=0,c=[],b=[],p=[],l=C;const r=new Map,g=new Set,O=()=>{p=Array.from(r.values()),g.forEach(i=>i())},M=i=>{b=i==null?[]:b.filter(h=>h!==i),O()},L=i=>{const{toastId:h,onOpen:P,updateId:R,children:S}=i.props,V=R==null;i.staleId&&r.delete(i.staleId),r.set(h,i),b=[...b,i.props.toastId].filter(z=>z!==i.staleId),O(),I(ce(i,V?"added":"updated")),V&&$(P)&&P(T.isValidElement(S)&&S.props)};return{id:u,props:l,observe:i=>(g.add(i),()=>g.delete(i)),toggle:(i,h)=>{r.forEach(P=>{h!=null&&h!==P.props.toastId||$(P.toggle)&&P.toggle(i)})},removeToast:M,toasts:r,clearQueue:()=>{m-=c.length,c=[]},buildToast:(i,h)=>{if((A=>{let{containerId:w,toastId:x,updateId:B}=A;const X=w?w!==u:u!==1,U=r.has(x)&&B==null;return X||U})(h))return;const{toastId:P,updateId:R,data:S,staleId:V,delay:z}=h,Y=()=>{M(P)},Z=R==null;Z&&m++;const D={...l,style:l.toastStyle,key:N++,...Object.fromEntries(Object.entries(h).filter(A=>{let[w,x]=A;return x!=null})),toastId:P,updateId:R,data:S,closeToast:Y,isIn:!1,className:ne(h.className||l.toastClassName),bodyClassName:ne(h.bodyClassName||l.bodyClassName),progressClassName:ne(h.progressClassName||l.progressClassName),autoClose:!h.isLoading&&(H=h.autoClose,Q=l.autoClose,H===!1||J(H)&&H>0?H:Q),deleteToast(){const A=r.get(P),{onClose:w,children:x}=A.props;$(w)&&w(T.isValidElement(x)&&x.props),I(ce(A,"removed")),r.delete(P),m--,m<0&&(m=0),c.length>0?L(c.shift()):O()}};var H,Q;D.closeButton=l.closeButton,h.closeButton===!1||ie(h.closeButton)?D.closeButton=h.closeButton:h.closeButton===!0&&(D.closeButton=!ie(l.closeButton)||l.closeButton);let W=i;T.isValidElement(i)&&!j(i.type)?W=T.cloneElement(i,{closeToast:Y,toastProps:D,data:S}):$(i)&&(W=i({closeToast:Y,toastProps:D,data:S}));const q={content:W,props:D,staleId:V};l.limit&&l.limit>0&&m>l.limit&&Z?c.push(q):J(z)?setTimeout(()=>{L(q)},z):L(q)},setProps(i){l=i},setToggle:(i,h)=>{r.get(i).toggle=h},isToastActive:i=>b.some(h=>h===i),getSnapshot:()=>l.newestOnTop?p.reverse():p}}(o,d,Te);k.set(o,f);const _=f.observe(E);return K.forEach(u=>me(u.content,u.options)),K=[],()=>{_(),k.delete(o)}},setProps(E){var f;(f=k.get(o))==null||f.setProps(E)},getSnapshot(){var E;return(E=k.get(o))==null?void 0:E.getSnapshot()}}}(e)).current;s(e);const a=T.useSyncExternalStore(t,n,n);return{getToastToRender:function(d){if(!a)return[];const o=new Map;return a.forEach(E=>{const{position:f}=E.props;o.has(f)||o.set(f,[]),o.get(f).push(E)}),Array.from(o,E=>d(E[0],E[1]))},isToastActive:fe,count:a==null?void 0:a.length}}function Ie(e){const[t,n]=T.useState(!1),[s,a]=T.useState(!1),d=T.useRef(null),o=T.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:E,pauseOnHover:f,closeToast:_,onClick:u,closeOnClick:C}=e;var I,N;function m(){n(!0)}function c(){n(!1)}function b(r){const g=d.current;o.canDrag&&g&&(o.didMove=!0,t&&c(),o.delta=e.draggableDirection==="x"?r.clientX-o.start:r.clientY-o.start,o.start!==r.clientX&&(o.canCloseOnClick=!1),g.style.transform=`translate3d(${e.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,g.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function p(){document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",p);const r=d.current;if(o.canDrag&&o.didMove&&r){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return a(!0),e.closeToast(),void e.collapseAll();r.style.transition="transform 0.2s, opacity 0.2s",r.style.removeProperty("transform"),r.style.removeProperty("opacity")}}(N=k.get((I={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||N.setToggle(I.id,I.fn),T.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||c(),window.addEventListener("focus",m),window.addEventListener("blur",c),()=>{window.removeEventListener("focus",m),window.removeEventListener("blur",c)}},[e.pauseOnFocusLoss]);const l={onPointerDown:function(r){if(e.draggable===!0||e.draggable===r.pointerType){o.didMove=!1,document.addEventListener("pointermove",b),document.addEventListener("pointerup",p);const g=d.current;o.canCloseOnClick=!0,o.canDrag=!0,g.style.transition="none",e.draggableDirection==="x"?(o.start=r.clientX,o.removalDistance=g.offsetWidth*(e.draggablePercent/100)):(o.start=r.clientY,o.removalDistance=g.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(r){const{top:g,bottom:O,left:M,right:L}=d.current.getBoundingClientRect();r.nativeEvent.type!=="touchend"&&e.pauseOnHover&&r.clientX>=M&&r.clientX<=L&&r.clientY>=g&&r.clientY<=O?c():m()}};return E&&f&&(l.onMouseEnter=c,e.stacked||(l.onMouseLeave=m)),C&&(l.onClick=r=>{u&&u(r),o.canCloseOnClick&&_()}),{playToast:m,pauseToast:c,isRunning:t,preventExitTransition:s,toastRef:d,eventHandlers:l}}function _e(e){let{delay:t,isRunning:n,closeToast:s,type:a="default",hide:d,className:o,style:E,controlledProgress:f,progress:_,rtl:u,isIn:C,theme:I}=e;const N=d||f&&_===0,m={...E,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};f&&(m.transform=`scaleX(${_})`);const c=F("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${I}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":u}),b=$(o)?o({rtl:u,type:a,defaultClassName:c}):F(c,o),p={[f&&_>=1?"onTransitionEnd":"onAnimationEnd"]:f&&_<1?null:()=>{C&&s()}};return v.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":N},v.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${I} Toastify__progress-bar--${a}`}),v.createElement("div",{role:"progressbar","aria-hidden":N?"true":"false","aria-label":"notification timer",className:b,style:m,...p}))}let Ce=1;const ge=()=>""+Ce++;function Le(e){return e&&(j(e.toastId)||J(e.toastId))?e.toastId:ge()}function G(e,t){return me(e,t),t.toastId}function oe(e,t){return{...t,type:t&&t.type||e,toastId:Le(t)}}function ee(e){return(t,n)=>G(t,oe(e,n))}function y(e,t){return G(e,oe("default",t))}y.loading=(e,t)=>G(e,oe("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),y.promise=function(e,t,n){let s,{pending:a,error:d,success:o}=t;a&&(s=j(a)?y.loading(a,n):y.loading(a.render,{...n,...a}));const E={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},f=(u,C,I)=>{if(C==null)return void y.dismiss(s);const N={type:u,...E,...n,data:I},m=j(C)?{render:C}:C;return s?y.update(s,{...N,...m}):y(m.render,{...N,...m}),I},_=$(e)?e():e;return _.then(u=>f("success",o,u)).catch(u=>f("error",d,u)),_},y.success=ee("success"),y.info=ee("info"),y.error=ee("error"),y.warning=ee("warning"),y.warn=y.warning,y.dark=(e,t)=>G(e,oe("default",{theme:"dark",...t})),y.dismiss=function(e){(function(t){var n;if(pe()){if(t==null||j(n=t)||J(n))k.forEach(s=>{s.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const s=k.get(t.containerId);s?s.removeToast(t.id):k.forEach(a=>{a.removeToast(t.id)})}}else K=K.filter(s=>t!=null&&s.options.toastId!==t)})(e)},y.clearWaitingQueue=function(e){e===void 0&&(e={}),k.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},y.isActive=fe,y.update=function(e,t){t===void 0&&(t={});const n=((s,a)=>{var d;let{containerId:o}=a;return(d=k.get(o||1))==null?void 0:d.toasts.get(s)})(e,t);if(n){const{props:s,content:a}=n,d={delay:100,...s,...t,toastId:t.toastId||e,updateId:ge()};d.toastId!==e&&(d.staleId=e);const o=d.render||a;delete d.render,G(o,d)}},y.done=e=>{y.update(e,{progress:1})},y.onChange=function(e){return le.add(e),()=>{le.delete(e)}},y.play=e=>de(!0,e),y.pause=e=>de(!1,e);const Ne=typeof window<"u"?T.useLayoutEffect:T.useEffect,te=e=>{let{theme:t,type:n,isLoading:s,...a}=e;return v.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...a})},re={info:function(e){return v.createElement(te,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return v.createElement(te,{...e},v.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return v.createElement(te,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return v.createElement(te,{...e},v.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return v.createElement("div",{className:"Toastify__spinner"})}},ke=e=>{const{isRunning:t,preventExitTransition:n,toastRef:s,eventHandlers:a,playToast:d}=Ie(e),{closeButton:o,children:E,autoClose:f,onClick:_,type:u,hideProgressBar:C,closeToast:I,transition:N,position:m,className:c,style:b,bodyClassName:p,bodyStyle:l,progressClassName:r,progressStyle:g,updateId:O,role:M,progress:L,rtl:i,toastId:h,deleteToast:P,isIn:R,isLoading:S,closeOnClick:V,theme:z}=e,Y=F("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":i},{"Toastify__toast--close-on-click":V}),Z=$(c)?c({rtl:i,position:m,type:u,defaultClassName:Y}):F(Y,c),D=function(q){let{theme:A,type:w,isLoading:x,icon:B}=q,X=null;const U={theme:A,type:w};return B===!1||($(B)?X=B({...U,isLoading:x}):T.isValidElement(B)?X=T.cloneElement(B,U):x?X=re.spinner():(ye=>ye in re)(w)&&(X=re[w](U))),X}(e),H=!!L||!f,Q={closeToast:I,type:u,theme:z};let W=null;return o===!1||(W=$(o)?o(Q):T.isValidElement(o)?T.cloneElement(o,Q):function(q){let{closeToast:A,theme:w,ariaLabel:x="close"}=q;return v.createElement("button",{className:`Toastify__close-button Toastify__close-button--${w}`,type:"button",onClick:B=>{B.stopPropagation(),A(B)},"aria-label":x},v.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},v.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(Q)),v.createElement(N,{isIn:R,done:P,position:m,preventExitTransition:n,nodeRef:s,playToast:d},v.createElement("div",{id:h,onClick:_,"data-in":R,className:Z,...a,style:b,ref:s},v.createElement("div",{...R&&{role:M},className:$(p)?p({type:u}):F("Toastify__toast-body",p),style:l},D!=null&&v.createElement("div",{className:F("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},D),v.createElement("div",null,E)),W,v.createElement(_e,{...O&&!H?{key:`pb-${O}`}:{},rtl:i,theme:z,delay:f,isRunning:t,isIn:R,closeToast:I,hide:C,type:u,style:g,className:r,controlledProgress:H,progress:L||0})))},ae=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Pe=se(ae("bounce",!0));se(ae("slide",!0));se(ae("zoom"));se(ae("flip"));const $e={position:"top-right",transition:Pe,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function we(e){let t={...$e,...e};const n=e.stacked,[s,a]=T.useState(!0),d=T.useRef(null),{getToastToRender:o,isToastActive:E,count:f}=be(t),{className:_,style:u,rtl:C,containerId:I}=t;function N(c){const b=F("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":C});return $(_)?_({position:c,rtl:C,defaultClassName:b}):F(b,ne(_))}function m(){n&&(a(!0),y.play())}return Ne(()=>{if(n){var c;const b=d.current.querySelectorAll('[data-in="true"]'),p=12,l=(c=t.position)==null?void 0:c.includes("top");let r=0,g=0;Array.from(b).reverse().forEach((O,M)=>{const L=O;L.classList.add("Toastify__toast--stacked"),M>0&&(L.dataset.collapsed=`${s}`),L.dataset.pos||(L.dataset.pos=l?"top":"bot");const i=r*(s?.2:1)+(s?0:p*M);L.style.setProperty("--y",`${l?i:-1*i}px`),L.style.setProperty("--g",`${p}`),L.style.setProperty("--s",""+(1-(s?g:0))),r+=L.offsetHeight,g+=.025})}},[s,f,n]),v.createElement("div",{ref:d,className:"Toastify",id:I,onMouseEnter:()=>{n&&(a(!1),y.pause())},onMouseLeave:m},o((c,b)=>{const p=b.length?{...u}:{...u,pointerEvents:"none"};return v.createElement("div",{className:N(c),style:p,key:`container-${c}`},b.map(l=>{let{content:r,props:g}=l;return v.createElement(ke,{...g,stacked:n,collapseAll:m,isIn:E(g.toastId,g.containerId),style:g.style,key:`toast-${g.key}`},r)}))}))}function Oe(){const{flash:e}=ve().props;return T.useEffect(()=>{e.success&&y.success(e.success,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0}),e.error&&y.error(e.error,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0})},[e]),he.jsx(we,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,draggable:!1})}export{y as B,we as Q,Oe as T,F as c};