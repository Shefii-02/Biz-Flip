import{c as g,r as x,j as a,Y as pe,a as G}from"./app-CJ8gtaWK.js";import"./PermissionAllow-8aMWW39F.js";import ve from"./Wrapper-tmEhO1av.js";import{i as b}from"./interopRequireDefault-BbjLfwJi.js";import{r as j}from"./extends-Lqyj1dvn.js";import{d as he,e as _e,i as be,f as ye}from"./inherits-Da4sx5rs.js";import{p as C}from"./index-CM2cCItZ.js";import"./SideBar-WttygLfw.js";import"./ProfileDropdown-CagPJwpp.js";import"./Header-tbxw0iTs.js";import"./ToastNotification-GiQwRqxR.js";import"./setPrototypeOf-DgZC2w_0.js";var me={},w={};const ue=g(he),ie=g(_e);var N={exports:{}},E={exports:{}},W;function xe(){return W||(W=1,function(e){function t(r){"@babel/helpers - typeof";return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(E)),E.exports}var D={exports:{}},Y;function je(){return Y||(Y=1,function(e){function t(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(D)),D.exports}var J;function le(){return J||(J=1,function(e){var t=xe().default,r=je();function n(l,o){if(o&&(t(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return r(l)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports}(N)),N.exports}var I={exports:{}},L;function oe(){return L||(L=1,function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(l){return l.__proto__||Object.getPrototypeOf(l)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(I)),I.exports}const se=g(be);var O={},Q;function H(){if(Q)return O;Q=1;var e=b;Object.defineProperty(O,"__esModule",{value:!0}),O.Provider=O.Consumer=void 0;var t=e(x),r=t.default.createContext({});return O.Provider=r.Provider,O.Consumer=r.Consumer,O}var S={};const Te=g(ye);var U;function P(){return U||(U=1,function(e){var t=b;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(Te);function n(i,u){var s=Object.keys(i);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(i);u&&(d=d.filter(function(y){return Object.getOwnPropertyDescriptor(i,y).enumerable})),s.push.apply(s,d)}return s}function l(i){for(var u=1;u<arguments.length;u++){var s=arguments[u]!=null?arguments[u]:{};u%2?n(Object(s),!0).forEach(function(d){(0,r.default)(i,d,s[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach(function(d){Object.defineProperty(i,d,Object.getOwnPropertyDescriptor(s,d))})}return i}var o=function(u,s){return Object.keys(u).filter(function(d){return s.indexOf(d)===-1}).reduce(function(d,y){return l(l({},d),{},(0,r.default)({},y,u[y]))},{})},c=function(u){return o(u,["inHeader","columnKey","headers","forwardedRef"])};e.default=c}(S)),S}var V;function Oe(){return V||(V=1,function(e){var t={},r=b;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(j()),l=r(ue),o=r(ie),c=r(le()),i=r(oe()),u=r(se),s=r(x),d=r(C),y=H(),R=r(P());function q(v,f,_){return f=(0,i.default)(f),(0,c.default)(v,m()?Reflect.construct(f,_||[],(0,i.default)(v).constructor):f.apply(v,_))}function m(){try{var v=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(m=function(){return!!v})()}var p=function(v){function f(_){var T;return(0,l.default)(this,f),T=q(this,f,[_]),T.state={headers:{}},T}return(0,u.default)(f,v),(0,o.default)(f,[{key:"render",value:function(){var T=this.state.headers,F=this.props,de=F.className,ce=F.forwardedRef,fe="".concat(de||""," responsiveTable");return s.default.createElement(y.Provider,{value:T},s.default.createElement("table",(0,n.default)({"data-testid":"table"},(0,R.default)(this.props),{className:fe,ref:ce})))}}])}(s.default.Component);p.propTypes={className:d.default.string,forwardedRef:d.default.oneOfType([d.default.func,d.default.shape({current:d.default.instanceOf(t.Element)})])};var h=s.default.forwardRef(function(v,f){return s.default.createElement(p,(0,n.default)({},v,{forwardedRef:f}))});h.displayName=p.name,e.default=h}(w)),w}var M={},X;function Re(){return X||(X=1,function(e){var t=b;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(j()),n=t(x),l=t(P());function o(c){return n.default.createElement("tbody",(0,r.default)({"data-testid":"tbody"},(0,l.default)(c)))}e.default=o}(M)),M}var $={},z={},Z;function qe(){return Z||(Z=1,function(e){var t=b;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(j()),n=t(x),l=t(C),o=t(P());function c(i){var u=i.headers,s=i.children,d=i.columnKey,y=i.className,R=i.colSpan,q="".concat(y||""," pivoted");return R?n.default.createElement("td",(0,r.default)({"data-testid":"td"},(0,o.default)(i))):n.default.createElement("td",(0,r.default)({"data-testid":"td"},(0,o.default)(i),{className:q}),n.default.createElement("div",{"data-testid":"td-before",className:"tdBefore"},u[d]),s??n.default.createElement("div",null," "))}c.propTypes={children:l.default.node,headers:l.default.shape({}),columnKey:l.default.number,className:l.default.string,colSpan:l.default.oneOfType([l.default.number,l.default.string])},e.default=c}(z)),z}var ee;function Pe(){return ee||(ee=1,function(e){var t=b;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(j()),n=t(x),l=H(),o=t(qe());function c(i){return n.default.createElement(l.Consumer,null,function(u){return n.default.createElement(o.default,(0,r.default)({},i,{headers:u}))})}e.default=c}($)),$}var k={},te;function ge(){return te||(te=1,function(e){var t=b;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(j()),n=t(x),l=t(P());function o(c){return n.default.createElement("th",(0,r.default)({"data-testid":"th"},(0,l.default)(c)))}e.default=o}(k)),k}var A={},re;function Ce(){return re||(re=1,function(e){var t=b;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(j()),n=t(x),l=t(C),o=t(P());function c(i){var u=i.children;return n.default.createElement("thead",(0,r.default)({"data-testid":"thead"},(0,o.default)(i)),n.default.cloneElement(u,{inHeader:!0}))}c.propTypes={children:l.default.node},e.default=c}(A)),A}var K={},B={},ae;function we(){return ae||(ae=1,function(e){var t=b;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(j()),n=t(ue),l=t(ie),o=t(le()),c=t(oe()),i=t(se),u=t(x),s=t(C),d=t(P());function y(m,p,h){return p=(0,c.default)(p),(0,o.default)(m,R()?Reflect.construct(p,h||[],(0,c.default)(m).constructor):p.apply(m,h))}function R(){try{var m=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(R=function(){return!!m})()}var q=function(m){function p(h){var v;(0,n.default)(this,p),v=y(this,p,[h]);var f=h.headers;return f&&h.inHeader&&u.default.Children.map(h.children,function(_,T){_&&(f[T]=_.props.children)}),v}return(0,i.default)(p,m),(0,l.default)(p,[{key:"render",value:function(){var v=this.props.children;return u.default.createElement("tr",(0,r.default)({"data-testid":"tr"},(0,d.default)(this.props)),v&&u.default.Children.map(v,function(f,_){return f&&u.default.cloneElement(f,{key:_,columnKey:_})}))}}])}(u.default.Component);q.propTypes={children:s.default.node,headers:s.default.shape({}),inHeader:s.default.bool},e.default=q}(B)),B}var ne;function Ne(){return ne||(ne=1,function(e){var t=b;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(j()),n=t(x),l=H(),o=t(we());function c(i){return n.default.createElement(l.Consumer,null,function(u){return n.default.createElement(o.default,(0,r.default)({},i,{headers:u}))})}e.default=c}(K)),K}(function(e){var t=b;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Table",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"Tbody",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"Td",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"Th",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"Thead",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"Tr",{enumerable:!0,get:function(){return i.default}});var r=t(Oe()),n=t(Re()),l=t(Pe()),o=t(ge()),c=t(Ce()),i=t(Ne())})(me);function Fe({auth:e,tickets:t}){return a.jsxs(a.Fragment,{children:[a.jsx(pe,{title:"Support tickets"}),a.jsx(ve,{user:e.user,children:a.jsx("main",{className:"py-6",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"max-w-screen-lg vstack gap-6 m-auto",children:[a.jsx("div",{className:"text-xl font-bold",children:"Support tickets"}),a.jsx("div",{children:a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-header border-bottom",children:a.jsxs("div",{className:"d-flex align-items-center",children:[a.jsx("div",{className:"me-2",children:a.jsx("input",{type:"search",placeholder:"Search by name, location etc",className:"form-control"})}),a.jsx("div",{className:"ms-auto",children:a.jsxs(G,{className:"btn btn-primary",href:route("seller.tickets.create"),children:[a.jsx("i",{className:"bi bi-plus text-md"})," Open ticket"]})})]})}),a.jsx("div",{className:"table-responsive",children:a.jsxs("table",{className:"table table-hover table-nowrap",children:[a.jsx("thead",{className:"table-light",children:a.jsxs("tr",{children:[a.jsx("th",{scope:"col",children:"ID"}),a.jsx("th",{scope:"col",children:"Subject"}),a.jsx("th",{scope:"col",children:"Date created"}),a.jsx("th",{scope:"col",children:"Priority"}),a.jsx("th",{scope:"col",children:"Status"}),a.jsx("th",{scope:"col"})]})}),a.jsx("tbody",{children:t.data.map(r=>a.jsx(a.Fragment,{children:a.jsxs("tr",{children:[a.jsxs("td",{children:["#",r.id]}),a.jsx("td",{children:r.subject}),a.jsx("td",{children:r.date_text}),a.jsx("td",{children:a.jsx("div",{className:`btn btn-sm p-2 py-1 text-white small text-capitalize status-${r.priority}`,children:r.priority})}),a.jsx("td",{children:a.jsx("div",{className:`btn btn-sm p-2 py-1 text-white small text-capitalize status-${r.status}`,children:r.status})}),a.jsx("td",{children:a.jsx(G,{href:route("seller.tickets.show",r.id),className:"btn btn-sm btn-square btn-neutral",children:a.jsx("i",{className:"bi bi-eye"})})})]})}))})]})})]})})]})})})})]})}export{Fe as default};