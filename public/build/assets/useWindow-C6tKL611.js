import{r}from"./app-BuJsMX9a.js";import{d as u}from"./listen-Dt54IMS5.js";function c(){return r.useState(null)}function i(){const e=r.useRef(!0),n=r.useRef(()=>e.current);return r.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),n.current}function a(e){const n=r.useRef(null);return r.useEffect(()=>{n.current=e}),n.current}function f(e,n){if(e.contains)return e.contains(n);if(e.compareDocumentPosition)return e===n||!!(e.compareDocumentPosition(n)&16)}const t=r.createContext(u?window:void 0);t.Provider;function m(){return r.useContext(t)}export{m as a,i as b,a as c,f as d,c as u};
