var i=Object.defineProperty;var r=(s,e,t)=>e in s?i(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>(r(s,typeof e!="symbol"?e+"":e,t),t);import{r as l,j as p}from"./app-Cp6npgci.js";import{C as h}from"./react-select-creatable.esm-BJJY6_sW.js";class u extends l.Component{constructor(t){super(t);n(this,"handleChange",t=>{this.setState({selectedOption:t},()=>{this.props.onChange&&this.props.onChange(t?t.map(a=>a.value):[])})});this.state={selectedOption:t.defaultValue?t.defaultValue.map(a=>({value:a,label:String(a)})):[],options:t.options||[]}}componentDidUpdate(t){t.options!==this.props.options&&this.setState({options:this.props.options})}render(){const{selectedOption:t,options:a}=this.state,{nameval:o}=this.props;return p.jsx(h,{isClearable:!0,options:a,onChange:this.handleChange,name:o,value:t,isMulti:!0})}}const d=u;export{d as D};
