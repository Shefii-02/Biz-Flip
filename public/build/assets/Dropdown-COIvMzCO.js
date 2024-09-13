import{f as X,o as rr,l as Ce,j as xt,q as nt,h as nr,u as G,c as J,e as Ot,i as or,g as ar}from"./listen-KPXmgqRh.js";import{r as v,g as ir,j as k,R as te}from"./app-BjRDVr7K.js";import{b as sr,d as ot,u as cr,a as ur,c as fr}from"./useWindow-qoUGISga.js";import{S as Ne,N as lr,m as at,B as pr,a as dr,A as vr,c as mr,b as gr,u as hr}from"./Anchor-BS2sRxwm.js";function wr(e,t,r,n=!1){const o=X(r);v.useEffect(()=>{const a=typeof e=="function"?e():e;return a.addEventListener(t,o,n),()=>a.removeEventListener(t,o,n)},[e])}function yr(e,t,r){const n=v.useRef(e!==void 0),[o,a]=v.useState(t),f=e!==void 0,s=n.current;return n.current=f,!f&&s&&o!==t&&a(t),[f?e:o,v.useCallback((...i)=>{const[u,...c]=i;let l=r==null?void 0:r(u,...c);return a(u),l},[r])]}const Pe=v.createContext(null);var it=Object.prototype.hasOwnProperty;function st(e,t,r){for(r of e.keys())if(de(r,t))return r}function de(e,t){var r,n,o;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&de(e[n],t[n]););return n===-1}if(r===Set){if(e.size!==t.size)return!1;for(n of e)if(o=n,o&&typeof o=="object"&&(o=st(t,o),!o)||!t.has(o))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e)if(o=n[0],o&&typeof o=="object"&&(o=st(t,o),!o)||!de(n[1],t.get(o)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return n===-1}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return n===-1}if(!r||typeof e=="object"){n=0;for(r in e)if(it.call(e,r)&&++n&&!it.call(t,r)||!(r in t)||!de(e[r],t[r]))return!1;return Object.keys(t).length===n}}return e!==e&&t!==t}function br(e){const t=sr();return[e[0],v.useCallback(r=>{if(t())return e[1](r)},[t,e[1]])]}var N="top",H="bottom",F="right",W="left",Le="auto",we=[N,H,F,W],ae="start",ge="end",xr="clippingParents",$t="viewport",pe="popper",Or="reference",ct=we.reduce(function(e,t){return e.concat([t+"-"+ae,t+"-"+ge])},[]),Ct=[].concat(we,[Le]).reduce(function(e,t){return e.concat([t,t+"-"+ae,t+"-"+ge])},[]),$r="beforeRead",Cr="read",Er="afterRead",Dr="beforeMain",Ar="main",jr="afterMain",Pr="beforeWrite",Sr="write",Mr="afterWrite",kr=[$r,Cr,Er,Dr,Ar,jr,Pr,Sr,Mr];function q(e){return e.split("-")[0]}function L(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function re(e){var t=L(e).Element;return e instanceof t||e instanceof Element}function U(e){var t=L(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function He(e){if(typeof ShadowRoot>"u")return!1;var t=L(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var ee=Math.max,Ae=Math.min,ie=Math.round;function We(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Et(){return!/^((?!chrome|android).)*safari/i.test(We())}function se(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&U(e)&&(o=e.offsetWidth>0&&ie(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&ie(n.height)/e.offsetHeight||1);var f=re(e)?L(e):window,s=f.visualViewport,i=!Et()&&r,u=(n.left+(i&&s?s.offsetLeft:0))/o,c=(n.top+(i&&s?s.offsetTop:0))/a,l=n.width/o,g=n.height/a;return{width:l,height:g,top:c,right:u+l,bottom:c+g,left:u,x:u,y:c}}function Fe(e){var t=se(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Dt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&He(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Y(e){return e?(e.nodeName||"").toLowerCase():null}function z(e){return L(e).getComputedStyle(e)}function Rr(e){return["table","td","th"].indexOf(Y(e))>=0}function Q(e){return((re(e)?e.ownerDocument:e.document)||window.document).documentElement}function Se(e){return Y(e)==="html"?e:e.assignedSlot||e.parentNode||(He(e)?e.host:null)||Q(e)}function ut(e){return!U(e)||z(e).position==="fixed"?null:e.offsetParent}function Tr(e){var t=/firefox/i.test(We()),r=/Trident/i.test(We());if(r&&U(e)){var n=z(e);if(n.position==="fixed")return null}var o=Se(e);for(He(o)&&(o=o.host);U(o)&&["html","body"].indexOf(Y(o))<0;){var a=z(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function ye(e){for(var t=L(e),r=ut(e);r&&Rr(r)&&z(r).position==="static";)r=ut(r);return r&&(Y(r)==="html"||Y(r)==="body"&&z(r).position==="static")?t:r||Tr(e)||t}function Ve(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ve(e,t,r){return ee(e,Ae(t,r))}function Br(e,t,r){var n=ve(e,t,r);return n>r?r:n}function At(){return{top:0,right:0,bottom:0,left:0}}function jt(e){return Object.assign({},At(),e)}function Pt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Nr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,jt(typeof t!="number"?t:Pt(t,we))};function Wr(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,f=r.modifiersData.popperOffsets,s=q(r.placement),i=Ve(s),u=[W,F].indexOf(s)>=0,c=u?"height":"width";if(!(!a||!f)){var l=Nr(o.padding,r),g=Fe(a),p=i==="y"?N:W,m=i==="y"?H:F,h=r.rects.reference[c]+r.rects.reference[i]-f[i]-r.rects.popper[c],d=f[i]-r.rects.reference[i],O=ye(a),b=O?i==="y"?O.clientHeight||0:O.clientWidth||0:0,x=h/2-d/2,w=l[p],y=b-g[c]-l[m],C=b/2-g[c]/2+x,E=ve(w,C,y),D=i;r.modifiersData[n]=(t={},t[D]=E,t.centerOffset=E-C,t)}}function Ir(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Dt(t.elements.popper,o)&&(t.elements.arrow=o))}const Lr={name:"arrow",enabled:!0,phase:"main",fn:Wr,effect:Ir,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(e){return e.split("-")[1]}var Hr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Fr(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:ie(r*o)/o||0,y:ie(n*o)/o||0}}function ft(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,f=e.offsets,s=e.position,i=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,l=e.isFixed,g=f.x,p=g===void 0?0:g,m=f.y,h=m===void 0?0:m,d=typeof c=="function"?c({x:p,y:h}):{x:p,y:h};p=d.x,h=d.y;var O=f.hasOwnProperty("x"),b=f.hasOwnProperty("y"),x=W,w=N,y=window;if(u){var C=ye(r),E="clientHeight",D="clientWidth";if(C===L(r)&&(C=Q(r),z(C).position!=="static"&&s==="absolute"&&(E="scrollHeight",D="scrollWidth")),C=C,o===N||(o===W||o===F)&&a===ge){w=H;var S=l&&C===y&&y.visualViewport?y.visualViewport.height:C[E];h-=S-n.height,h*=i?1:-1}if(o===W||(o===N||o===H)&&a===ge){x=F;var P=l&&C===y&&y.visualViewport?y.visualViewport.width:C[D];p-=P-n.width,p*=i?1:-1}}var $=Object.assign({position:s},u&&Hr),A=c===!0?Fr({x:p,y:h},L(r)):{x:p,y:h};if(p=A.x,h=A.y,i){var j;return Object.assign({},$,(j={},j[w]=b?"0":"",j[x]=O?"0":"",j.transform=(y.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",j))}return Object.assign({},$,(t={},t[w]=b?h+"px":"",t[x]=O?p+"px":"",t.transform="",t))}function Vr(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,f=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,u={placement:q(t.placement),variation:ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ft(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ft(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const qr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Vr,data:{}};var Ee={passive:!0};function Ur(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,f=n.resize,s=f===void 0?!0:f,i=L(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach(function(c){c.addEventListener("scroll",r.update,Ee)}),s&&i.addEventListener("resize",r.update,Ee),function(){a&&u.forEach(function(c){c.removeEventListener("scroll",r.update,Ee)}),s&&i.removeEventListener("resize",r.update,Ee)}}const zr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ur,data:{}};var Kr={left:"right",right:"left",bottom:"top",top:"bottom"};function De(e){return e.replace(/left|right|bottom|top/g,function(t){return Kr[t]})}var Xr={start:"end",end:"start"};function lt(e){return e.replace(/start|end/g,function(t){return Xr[t]})}function qe(e){var t=L(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ue(e){return se(Q(e)).left+qe(e).scrollLeft}function Yr(e,t){var r=L(e),n=Q(e),o=r.visualViewport,a=n.clientWidth,f=n.clientHeight,s=0,i=0;if(o){a=o.width,f=o.height;var u=Et();(u||!u&&t==="fixed")&&(s=o.offsetLeft,i=o.offsetTop)}return{width:a,height:f,x:s+Ue(e),y:i}}function Gr(e){var t,r=Q(e),n=qe(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=ee(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=ee(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+Ue(e),i=-n.scrollTop;return z(o||r).direction==="rtl"&&(s+=ee(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:f,x:s,y:i}}function ze(e){var t=z(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function St(e){return["html","body","#document"].indexOf(Y(e))>=0?e.ownerDocument.body:U(e)&&ze(e)?e:St(Se(e))}function me(e,t){var r;t===void 0&&(t=[]);var n=St(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=L(n),f=o?[a].concat(a.visualViewport||[],ze(n)?n:[]):n,s=t.concat(f);return o?s:s.concat(me(Se(f)))}function Ie(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Jr(e,t){var r=se(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function pt(e,t,r){return t===$t?Ie(Yr(e,r)):re(t)?Jr(t,r):Ie(Gr(Q(e)))}function Qr(e){var t=me(Se(e)),r=["absolute","fixed"].indexOf(z(e).position)>=0,n=r&&U(e)?ye(e):e;return re(n)?t.filter(function(o){return re(o)&&Dt(o,n)&&Y(o)!=="body"}):[]}function Zr(e,t,r,n){var o=t==="clippingParents"?Qr(e):[].concat(t),a=[].concat(o,[r]),f=a[0],s=a.reduce(function(i,u){var c=pt(e,u,n);return i.top=ee(c.top,i.top),i.right=Ae(c.right,i.right),i.bottom=Ae(c.bottom,i.bottom),i.left=ee(c.left,i.left),i},pt(e,f,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Mt(e){var t=e.reference,r=e.element,n=e.placement,o=n?q(n):null,a=n?ce(n):null,f=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(o){case N:i={x:f,y:t.y-r.height};break;case H:i={x:f,y:t.y+t.height};break;case F:i={x:t.x+t.width,y:s};break;case W:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var u=o?Ve(o):null;if(u!=null){var c=u==="y"?"height":"width";switch(a){case ae:i[u]=i[u]-(t[c]/2-r[c]/2);break;case ge:i[u]=i[u]+(t[c]/2-r[c]/2);break}}return i}function he(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,f=a===void 0?e.strategy:a,s=r.boundary,i=s===void 0?xr:s,u=r.rootBoundary,c=u===void 0?$t:u,l=r.elementContext,g=l===void 0?pe:l,p=r.altBoundary,m=p===void 0?!1:p,h=r.padding,d=h===void 0?0:h,O=jt(typeof d!="number"?d:Pt(d,we)),b=g===pe?Or:pe,x=e.rects.popper,w=e.elements[m?b:g],y=Zr(re(w)?w:w.contextElement||Q(e.elements.popper),i,c,f),C=se(e.elements.reference),E=Mt({reference:C,element:x,strategy:"absolute",placement:o}),D=Ie(Object.assign({},x,E)),S=g===pe?D:C,P={top:y.top-S.top+O.top,bottom:S.bottom-y.bottom+O.bottom,left:y.left-S.left+O.left,right:S.right-y.right+O.right},$=e.modifiersData.offset;if(g===pe&&$){var A=$[o];Object.keys(P).forEach(function(j){var M=[F,H].indexOf(j)>=0?1:-1,B=[N,H].indexOf(j)>=0?"y":"x";P[j]+=A[B]*M})}return P}function _r(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,f=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,u=i===void 0?Ct:i,c=ce(n),l=c?s?ct:ct.filter(function(m){return ce(m)===c}):we,g=l.filter(function(m){return u.indexOf(m)>=0});g.length===0&&(g=l);var p=g.reduce(function(m,h){return m[h]=he(e,{placement:h,boundary:o,rootBoundary:a,padding:f})[q(h)],m},{});return Object.keys(p).sort(function(m,h){return p[m]-p[h]})}function en(e){if(q(e)===Le)return[];var t=De(e);return[lt(e),t,lt(t)]}function tn(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,f=r.altAxis,s=f===void 0?!0:f,i=r.fallbackPlacements,u=r.padding,c=r.boundary,l=r.rootBoundary,g=r.altBoundary,p=r.flipVariations,m=p===void 0?!0:p,h=r.allowedAutoPlacements,d=t.options.placement,O=q(d),b=O===d,x=i||(b||!m?[De(d)]:en(d)),w=[d].concat(x).reduce(function(oe,K){return oe.concat(q(K)===Le?_r(t,{placement:K,boundary:c,rootBoundary:l,padding:u,flipVariations:m,allowedAutoPlacements:h}):K)},[]),y=t.rects.reference,C=t.rects.popper,E=new Map,D=!0,S=w[0],P=0;P<w.length;P++){var $=w[P],A=q($),j=ce($)===ae,M=[N,H].indexOf(A)>=0,B=M?"width":"height",R=he(t,{placement:$,boundary:c,rootBoundary:l,altBoundary:g,padding:u}),I=M?j?F:W:j?H:N;y[B]>C[B]&&(I=De(I));var ue=De(I),V=[];if(a&&V.push(R[A]<=0),s&&V.push(R[I]<=0,R[ue]<=0),V.every(function(oe){return oe})){S=$,D=!1;break}E.set($,V)}if(D)for(var T=m?3:1,ne=function(K){var le=w.find(function(Oe){var Z=E.get(Oe);if(Z)return Z.slice(0,K).every(function(Me){return Me})});if(le)return S=le,"break"},fe=T;fe>0;fe--){var xe=ne(fe);if(xe==="break")break}t.placement!==S&&(t.modifiersData[n]._skip=!0,t.placement=S,t.reset=!0)}}const rn={name:"flip",enabled:!0,phase:"main",fn:tn,requiresIfExists:["offset"],data:{_skip:!1}};function dt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function vt(e){return[N,F,H,W].some(function(t){return e[t]>=0})}function nn(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,f=he(t,{elementContext:"reference"}),s=he(t,{altBoundary:!0}),i=dt(f,n),u=dt(s,o,a),c=vt(i),l=vt(u);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}const on={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:nn};function an(e,t,r){var n=q(e),o=[W,N].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=a[0],s=a[1];return f=f||0,s=(s||0)*o,[W,F].indexOf(n)>=0?{x:s,y:f}:{x:f,y:s}}function sn(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,f=Ct.reduce(function(c,l){return c[l]=an(l,t.rects,a),c},{}),s=f[t.placement],i=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=f}const cn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:sn};function un(e){var t=e.state,r=e.name;t.modifiersData[r]=Mt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const fn={name:"popperOffsets",enabled:!0,phase:"read",fn:un,data:{}};function ln(e){return e==="x"?"y":"x"}function pn(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,f=r.altAxis,s=f===void 0?!1:f,i=r.boundary,u=r.rootBoundary,c=r.altBoundary,l=r.padding,g=r.tether,p=g===void 0?!0:g,m=r.tetherOffset,h=m===void 0?0:m,d=he(t,{boundary:i,rootBoundary:u,padding:l,altBoundary:c}),O=q(t.placement),b=ce(t.placement),x=!b,w=Ve(O),y=ln(w),C=t.modifiersData.popperOffsets,E=t.rects.reference,D=t.rects.popper,S=typeof h=="function"?h(Object.assign({},t.rects,{placement:t.placement})):h,P=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),$=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,A={x:0,y:0};if(C){if(a){var j,M=w==="y"?N:W,B=w==="y"?H:F,R=w==="y"?"height":"width",I=C[w],ue=I+d[M],V=I-d[B],T=p?-D[R]/2:0,ne=b===ae?E[R]:D[R],fe=b===ae?-D[R]:-E[R],xe=t.elements.arrow,oe=p&&xe?Fe(xe):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:At(),le=K[M],Oe=K[B],Z=ve(0,E[R],oe[R]),Me=x?E[R]/2-T-Z-le-P.mainAxis:ne-Z-le-P.mainAxis,Jt=x?-E[R]/2+T+Z+Oe+P.mainAxis:fe+Z+Oe+P.mainAxis,ke=t.elements.arrow&&ye(t.elements.arrow),Qt=ke?w==="y"?ke.clientTop||0:ke.clientLeft||0:0,Ye=(j=$==null?void 0:$[w])!=null?j:0,Zt=I+Me-Ye-Qt,_t=I+Jt-Ye,Ge=ve(p?Ae(ue,Zt):ue,I,p?ee(V,_t):V);C[w]=Ge,A[w]=Ge-I}if(s){var Je,er=w==="x"?N:W,tr=w==="x"?H:F,_=C[y],$e=y==="y"?"height":"width",Qe=_+d[er],Ze=_-d[tr],Re=[N,W].indexOf(O)!==-1,_e=(Je=$==null?void 0:$[y])!=null?Je:0,et=Re?Qe:_-E[$e]-D[$e]-_e+P.altAxis,tt=Re?_+E[$e]+D[$e]-_e-P.altAxis:Ze,rt=p&&Re?Br(et,_,tt):ve(p?et:Qe,_,p?tt:Ze);C[y]=rt,A[y]=rt-_}t.modifiersData[n]=A}}const dn={name:"preventOverflow",enabled:!0,phase:"main",fn:pn,requiresIfExists:["offset"]};function vn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function mn(e){return e===L(e)||!U(e)?qe(e):vn(e)}function gn(e){var t=e.getBoundingClientRect(),r=ie(t.width)/e.offsetWidth||1,n=ie(t.height)/e.offsetHeight||1;return r!==1||n!==1}function hn(e,t,r){r===void 0&&(r=!1);var n=U(t),o=U(t)&&gn(t),a=Q(t),f=se(e,o,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(n||!n&&!r)&&((Y(t)!=="body"||ze(a))&&(s=mn(t)),U(t)?(i=se(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=Ue(a))),{x:f.left+s.scrollLeft-i.x,y:f.top+s.scrollTop-i.y,width:f.width,height:f.height}}function wn(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var f=[].concat(a.requires||[],a.requiresIfExists||[]);f.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&o(i)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function yn(e){var t=wn(e);return kr.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function bn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function xn(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var mt={placement:"bottom",modifiers:[],strategy:"absolute"};function gt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function On(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?mt:o;return function(s,i,u){u===void 0&&(u=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},mt,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},l=[],g=!1,p={state:c,setOptions:function(O){var b=typeof O=="function"?O(c.options):O;h(),c.options=Object.assign({},a,c.options,b),c.scrollParents={reference:re(s)?me(s):s.contextElement?me(s.contextElement):[],popper:me(i)};var x=yn(xn([].concat(n,c.options.modifiers)));return c.orderedModifiers=x.filter(function(w){return w.enabled}),m(),p.update()},forceUpdate:function(){if(!g){var O=c.elements,b=O.reference,x=O.popper;if(gt(b,x)){c.rects={reference:hn(b,ye(x),c.options.strategy==="fixed"),popper:Fe(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(P){return c.modifiersData[P.name]=Object.assign({},P.data)});for(var w=0;w<c.orderedModifiers.length;w++){if(c.reset===!0){c.reset=!1,w=-1;continue}var y=c.orderedModifiers[w],C=y.fn,E=y.options,D=E===void 0?{}:E,S=y.name;typeof C=="function"&&(c=C({state:c,options:D,name:S,instance:p})||c)}}}},update:bn(function(){return new Promise(function(d){p.forceUpdate(),d(c)})}),destroy:function(){h(),g=!0}};if(!gt(s,i))return p;p.setOptions(u).then(function(d){!g&&u.onFirstUpdate&&u.onFirstUpdate(d)});function m(){c.orderedModifiers.forEach(function(d){var O=d.name,b=d.options,x=b===void 0?{}:b,w=d.effect;if(typeof w=="function"){var y=w({state:c,name:O,instance:p,options:x}),C=function(){};l.push(y||C)}})}function h(){l.forEach(function(d){return d()}),l=[]}return p}}const $n=On({defaultModifiers:[on,fn,qr,zr,cn,rn,dn,Lr]}),Cn=["enabled","placement","strategy","modifiers"];function En(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}const Dn={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},An={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:r}=e.elements;if("removeAttribute"in t){const n=(t.getAttribute("aria-describedby")||"").split(",").filter(o=>o.trim()!==r.id);n.length?t.setAttribute("aria-describedby",n.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:r,reference:n}=e.elements,o=(t=r.getAttribute("role"))==null?void 0:t.toLowerCase();if(r.id&&o==="tooltip"&&"setAttribute"in n){const a=n.getAttribute("aria-describedby");if(a&&a.split(",").indexOf(r.id)!==-1)return;n.setAttribute("aria-describedby",a?`${a},${r.id}`:r.id)}}},jn=[];function Pn(e,t,r={}){let{enabled:n=!0,placement:o="bottom",strategy:a="absolute",modifiers:f=jn}=r,s=En(r,Cn);const i=v.useRef(f),u=v.useRef(),c=v.useCallback(()=>{var d;(d=u.current)==null||d.update()},[]),l=v.useCallback(()=>{var d;(d=u.current)==null||d.forceUpdate()},[]),[g,p]=br(v.useState({placement:o,update:c,forceUpdate:l,attributes:{},styles:{popper:{},arrow:{}}})),m=v.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:d})=>{const O={},b={};Object.keys(d.elements).forEach(x=>{O[x]=d.styles[x],b[x]=d.attributes[x]}),p({state:d,styles:O,attributes:b,update:c,forceUpdate:l,placement:d.placement})}}),[c,l,p]),h=v.useMemo(()=>(de(i.current,f)||(i.current=f),i.current),[f]);return v.useEffect(()=>{!u.current||!n||u.current.setOptions({placement:o,strategy:a,modifiers:[...h,m,Dn]})},[a,o,m,n,h]),v.useEffect(()=>{if(!(!n||e==null||t==null))return u.current=$n(e,t,Object.assign({},s,{placement:o,strategy:a,modifiers:[...h,An,m]})),()=>{u.current!=null&&(u.current.destroy(),u.current=void 0,p(d=>Object.assign({},d,{attributes:{},styles:{popper:{}}})))}},[n,e,t]),g}var Sn=function(){},Mn=Sn;const kn=ir(Mn),ht=()=>{};function Rn(e){return e.button===0}function Tn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Te=e=>e&&("current"in e?e.current:e),wt={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function Bn(e,t=ht,{disabled:r,clickTrigger:n="click"}={}){const o=v.useRef(!1),a=v.useRef(!1),f=v.useCallback(u=>{const c=Te(e);kn(!!c,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),o.current=!c||Tn(u)||!Rn(u)||!!ot(c,u.target)||a.current,a.current=!1},[e]),s=X(u=>{const c=Te(e);c&&ot(c,u.target)&&(a.current=!0)}),i=X(u=>{o.current||t(u)});v.useEffect(()=>{var u,c;if(r||e==null)return;const l=rr(Te(e)),g=l.defaultView||window;let p=(u=g.event)!=null?u:(c=g.parent)==null?void 0:c.event,m=null;wt[n]&&(m=Ce(l,wt[n],s,!0));const h=Ce(l,n,f,!0),d=Ce(l,n,b=>{if(b===p){p=void 0;return}i(b)});let O=[];return"ontouchstart"in l.documentElement&&(O=[].slice.call(l.body.children).map(b=>Ce(b,"mousemove",ht))),()=>{m==null||m(),h(),d(),O.forEach(b=>b())}},[e,r,n,f,s,i])}function Nn(e){const t={};return Array.isArray(e)?(e==null||e.forEach(r=>{t[r.name]=r}),t):e||t}function Wn(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function In({enabled:e,enableEvents:t,placement:r,flip:n,offset:o,fixed:a,containerPadding:f,arrowElement:s,popperConfig:i={}}){var u,c,l,g,p;const m=Nn(i.modifiers);return Object.assign({},i,{placement:r,enabled:e,strategy:a?"fixed":i.strategy,modifiers:Wn(Object.assign({},m,{eventListeners:{enabled:t,options:(u=m.eventListeners)==null?void 0:u.options},preventOverflow:Object.assign({},m.preventOverflow,{options:f?Object.assign({padding:f},(c=m.preventOverflow)==null?void 0:c.options):(l=m.preventOverflow)==null?void 0:l.options}),offset:{options:Object.assign({offset:o},(g=m.offset)==null?void 0:g.options)},arrow:Object.assign({},m.arrow,{enabled:!!s,options:Object.assign({},(p=m.arrow)==null?void 0:p.options,{element:s})}),flip:Object.assign({enabled:!!n},m.flip)}))})}const Ln=["children","usePopper"];function Hn(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}const Fn=()=>{};function kt(e={}){const t=v.useContext(Pe),[r,n]=cr(),o=v.useRef(!1),{flip:a,offset:f,rootCloseEvent:s,fixed:i=!1,placement:u,popperConfig:c={},enableEventListeners:l=!0,usePopper:g=!!t}=e,p=(t==null?void 0:t.show)==null?!!e.show:t.show;p&&!o.current&&(o.current=!0);const m=C=>{t==null||t.toggle(!1,C)},{placement:h,setMenu:d,menuElement:O,toggleElement:b}=t||{},x=Pn(b,O,In({placement:u||h||"bottom-start",enabled:g,enableEvents:l??p,offset:f,flip:a,fixed:i,arrowElement:r,popperConfig:c})),w=Object.assign({ref:d||Fn,"aria-labelledby":b==null?void 0:b.id},x.attributes.popper,{style:x.styles.popper}),y={show:p,placement:h,hasShown:o.current,toggle:t==null?void 0:t.toggle,popper:g?x:null,arrowProps:g?Object.assign({ref:n},x.attributes.arrow,{style:x.styles.arrow}):{}};return Bn(O,m,{clickTrigger:s,disabled:!p}),[w,y]}function Rt(e){let{children:t,usePopper:r=!0}=e,n=Hn(e,Ln);const[o,a]=kt(Object.assign({},n,{usePopper:r}));return k.jsx(k.Fragment,{children:t(o,a)})}Rt.displayName="DropdownMenu";const je={prefix:String(Math.round(Math.random()*1e10)),current:0},Tt=te.createContext(je),Vn=te.createContext(!1);let qn=!!(typeof window<"u"&&window.document&&window.document.createElement),Be=new WeakMap;function Un(e=!1){let t=v.useContext(Tt),r=v.useRef(null);if(r.current===null&&!e){var n,o;let a=(o=te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||o===void 0||(n=o.ReactCurrentOwner)===null||n===void 0?void 0:n.current;if(a){let f=Be.get(a);f==null?Be.set(a,{id:t.current,state:a.memoizedState}):a.memoizedState!==f.state&&(t.current=f.id,Be.delete(a))}r.current=++t.current}return r.current}function zn(e){let t=v.useContext(Tt);t===je&&!qn&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=Un(!!e),n=`react-aria${t.prefix}`;return e||`${n}-${r}`}function Kn(e){let t=te.useId(),[r]=v.useState(Qn()),n=r?"react-aria":`react-aria${je.prefix}`;return e||`${n}-${t}`}const Xn=typeof te.useId=="function"?Kn:zn;function Yn(){return!1}function Gn(){return!0}function Jn(e){return()=>{}}function Qn(){return typeof te.useSyncExternalStore=="function"?te.useSyncExternalStore(Jn,Yn,Gn):v.useContext(Vn)}const Bt=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},yt=()=>{};function Nt(){const e=Xn(),{show:t=!1,toggle:r=yt,setToggle:n,menuElement:o}=v.useContext(Pe)||{},a=v.useCallback(s=>{r(!t,s)},[t,r]),f={id:e,ref:n||yt,onClick:a,"aria-expanded":!!t};return o&&Bt(o)&&(f["aria-haspopup"]=!0),[f,{show:t,toggle:r}]}function Wt({children:e}){const[t,r]=Nt();return k.jsx(k.Fragment,{children:e(t,r)})}Wt.displayName="DropdownToggle";const Zn=["eventKey","disabled","onClick","active","as"];function _n(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function It({key:e,href:t,active:r,disabled:n,onClick:o}){const a=v.useContext(Ne),f=v.useContext(lr),{activeKey:s}=f||{},i=at(e,t),u=r==null&&e!=null?at(s)===i:r;return[{onClick:X(l=>{n||(o==null||o(l),a&&!l.isPropagationStopped()&&a(i,l))}),"aria-disabled":n||void 0,"aria-selected":u,[xt("dropdown-item")]:""},{isActive:u}]}const Lt=v.forwardRef((e,t)=>{let{eventKey:r,disabled:n,onClick:o,active:a,as:f=pr}=e,s=_n(e,Zn);const[i]=It({key:r,href:s.href,disabled:n,onClick:o,active:a});return k.jsx(f,Object.assign({},s,{ref:t},i))});Lt.displayName="DropdownItem";function bt(){const e=dr(),t=v.useRef(null),r=v.useCallback(n=>{t.current=n,e()},[e]);return[t,r]}function be({defaultShow:e,show:t,onSelect:r,onToggle:n,itemSelector:o=`* [${xt("dropdown-item")}]`,focusFirstItemOnShow:a,placement:f="bottom-start",children:s}){const i=ur(),[u,c]=yr(t,e,n),[l,g]=bt(),p=l.current,[m,h]=bt(),d=m.current,O=fr(u),b=v.useRef(null),x=v.useRef(!1),w=v.useContext(Ne),y=v.useCallback(($,A,j=A==null?void 0:A.type)=>{c($,{originalEvent:A,source:j})},[c]),C=X(($,A)=>{r==null||r($,A),y(!1,A,"select"),A.isPropagationStopped()||w==null||w($,A)}),E=v.useMemo(()=>({toggle:y,placement:f,show:u,menuElement:p,toggleElement:d,setMenu:g,setToggle:h}),[y,f,u,p,d,g,h]);p&&O&&!u&&(x.current=p.contains(p.ownerDocument.activeElement));const D=X(()=>{d&&d.focus&&d.focus()}),S=X(()=>{const $=b.current;let A=a;if(A==null&&(A=l.current&&Bt(l.current)?"keyboard":!1),A===!1||A==="keyboard"&&!/^key.+$/.test($))return;const j=nt(l.current,o)[0];j&&j.focus&&j.focus()});v.useEffect(()=>{u?S():x.current&&(x.current=!1,D())},[u,x,D,S]),v.useEffect(()=>{b.current=null});const P=($,A)=>{if(!l.current)return null;const j=nt(l.current,o);let M=j.indexOf($)+A;return M=Math.max(0,Math.min(M,j.length)),j[M]};return wr(v.useCallback(()=>i.document,[i]),"keydown",$=>{var A,j;const{key:M}=$,B=$.target,R=(A=l.current)==null?void 0:A.contains(B),I=(j=m.current)==null?void 0:j.contains(B);if(/input|textarea/i.test(B.tagName)&&(M===" "||M!=="Escape"&&R||M==="Escape"&&B.type==="search")||!R&&!I||M==="Tab"&&(!l.current||!u))return;b.current=$.type;const V={originalEvent:$,source:$.type};switch(M){case"ArrowUp":{const T=P(B,-1);T&&T.focus&&T.focus(),$.preventDefault();return}case"ArrowDown":if($.preventDefault(),!u)c(!0,V);else{const T=P(B,1);T&&T.focus&&T.focus()}return;case"Tab":nr(B.ownerDocument,"keyup",T=>{var ne;(T.key==="Tab"&&!T.target||!((ne=l.current)!=null&&ne.contains(T.target)))&&c(!1,V)},{once:!0});break;case"Escape":M==="Escape"&&($.preventDefault(),$.stopPropagation()),c(!1,V);break}}),k.jsx(Ne.Provider,{value:C,children:k.jsx(Pe.Provider,{value:E,children:s})})}be.displayName="Dropdown";be.Menu=Rt;be.Toggle=Wt;be.Item=Lt;const Ke=v.createContext({});Ke.displayName="DropdownContext";const Ht=v.forwardRef(({className:e,bsPrefix:t,as:r="hr",role:n="separator",...o},a)=>(t=G(t,"dropdown-divider"),k.jsx(r,{ref:a,className:J(e,t),role:n,...o})));Ht.displayName="DropdownDivider";const Ft=v.forwardRef(({className:e,bsPrefix:t,as:r="div",role:n="heading",...o},a)=>(t=G(t,"dropdown-header"),k.jsx(r,{ref:a,className:J(e,t),role:n,...o})));Ft.displayName="DropdownHeader";const Vt=v.forwardRef(({bsPrefix:e,className:t,eventKey:r,disabled:n=!1,onClick:o,active:a,as:f=vr,...s},i)=>{const u=G(e,"dropdown-item"),[c,l]=It({key:r,href:s.href,disabled:n,onClick:o,active:a});return k.jsx(f,{...s,...c,ref:i,className:J(t,u,l.isActive&&"active",n&&"disabled")})});Vt.displayName="DropdownItem";const qt=v.forwardRef(({className:e,bsPrefix:t,as:r="span",...n},o)=>(t=G(t,"dropdown-item-text"),k.jsx(r,{ref:o,className:J(e,t),...n})));qt.displayName="DropdownItemText";const Xe=v.createContext(null);Xe.displayName="InputGroupContext";function Ut(e,t){return e}function zt(e,t,r){const n=r?"top-end":"top-start",o=r?"top-start":"top-end",a=r?"bottom-end":"bottom-start",f=r?"bottom-start":"bottom-end",s=r?"right-start":"left-start",i=r?"right-end":"left-end",u=r?"left-start":"right-start",c=r?"left-end":"right-end";let l=e?f:a;return t==="up"?l=e?o:n:t==="end"?l=e?c:u:t==="start"?l=e?i:s:t==="down-centered"?l="bottom":t==="up-centered"&&(l="top"),l}const Kt=v.forwardRef(({bsPrefix:e,className:t,align:r,rootCloseEvent:n,flip:o=!0,show:a,renderOnMount:f,as:s="div",popperConfig:i,variant:u,...c},l)=>{let g=!1;const p=v.useContext(mr),m=G(e,"dropdown-menu"),{align:h,drop:d,isRTL:O}=v.useContext(Ke);r=r||h;const b=v.useContext(Xe),x=[];if(r)if(typeof r=="object"){const $=Object.keys(r);if($.length){const A=$[0],j=r[A];g=j==="start",x.push(`${m}-${A}-${j}`)}}else r==="end"&&(g=!0);const w=zt(g,d,O),[y,{hasShown:C,popper:E,show:D,toggle:S}]=kt({flip:o,rootCloseEvent:n,show:a,usePopper:!p&&x.length===0,offset:[0,2],popperConfig:i,placement:w});if(y.ref=Ot(Ut(l),y.ref),or(()=>{D&&(E==null||E.update())},[D]),!C&&!f&&!b)return null;typeof s!="string"&&(y.show=D,y.close=()=>S==null?void 0:S(!1),y.align=r);let P=c.style;return E!=null&&E.placement&&(P={...c.style,...y.style},c["x-placement"]=E.placement),k.jsx(s,{...c,...y,style:P,...(x.length||p)&&{"data-bs-popper":"static"},className:J(t,m,D&&"show",g&&`${m}-end`,u&&`${m}-${u}`,...x)})});Kt.displayName="DropdownMenu";const Xt=v.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:n,active:o=!1,disabled:a=!1,className:f,...s},i)=>{const u=G(t,"btn"),[c,{tagName:l}]=gr({tagName:e,disabled:a,...s}),g=l;return k.jsx(g,{...c,...s,ref:i,disabled:a,className:J(f,u,o&&"active",r&&`${u}-${r}`,n&&`${u}-${n}`,s.href&&a&&"disabled")})});Xt.displayName="Button";const Yt=v.forwardRef(({bsPrefix:e,split:t,className:r,childBsPrefix:n,as:o=Xt,...a},f)=>{const s=G(e,"dropdown-toggle"),i=v.useContext(Pe);n!==void 0&&(a.bsPrefix=n);const[u]=Nt();return u.ref=Ot(u.ref,Ut(f)),k.jsx(o,{className:J(r,s,t&&`${s}-split`,(i==null?void 0:i.show)&&"show"),...u,...a})});Yt.displayName="DropdownToggle";const Gt=v.forwardRef((e,t)=>{const{bsPrefix:r,drop:n="down",show:o,className:a,align:f="start",onSelect:s,onToggle:i,focusFirstItemOnShow:u,as:c="div",navbar:l,autoClose:g=!0,...p}=hr(e,{show:"onToggle"}),m=v.useContext(Xe),h=G(r,"dropdown"),d=ar(),O=E=>g===!1?E==="click":g==="inside"?E!=="rootClose":g==="outside"?E!=="select":!0,b=X((E,D)=>{var S,P;!((S=D.originalEvent)==null||(P=S.target)==null)&&P.classList.contains("dropdown-toggle")&&D.source==="mousedown"||(D.originalEvent.currentTarget===document&&(D.source!=="keydown"||D.originalEvent.key==="Escape")&&(D.source="rootClose"),O(D.source)&&(i==null||i(E,D)))}),w=zt(f==="end",n,d),y=v.useMemo(()=>({align:f,drop:n,isRTL:d}),[f,n,d]),C={down:h,"down-centered":`${h}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return k.jsx(Ke.Provider,{value:y,children:k.jsx(be,{placement:w,show:o,onSelect:s,onToggle:b,focusFirstItemOnShow:u,itemSelector:`.${h}-item:not(.disabled):not(:disabled)`,children:m?p.children:k.jsx(c,{...p,ref:t,className:J(a,o&&"show",C[n])})})})});Gt.displayName="Dropdown";const oo=Object.assign(Gt,{Toggle:Yt,Menu:Kt,Item:Vt,ItemText:qt,Divider:Ht,Header:Ft});export{Xn as $,oo as D,Xe as c,yr as u};
