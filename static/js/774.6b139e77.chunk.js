"use strict";(self.webpackChunkreact_nepomn=self.webpackChunkreact_nepomn||[]).push([[774],{768:(e,s,t)=>{t.d(s,{Cy:()=>c,QU:()=>r,oT:()=>n});var a=t(488);const r=async()=>{const e=`${a.a}/categories.php`,s=await fetch(e);return await s.json()},n=async e=>{const s=`${a.a}/filter.php?c=${e}`,t=await fetch(s);return await t.json()},c=async e=>{const s=`${a.a}/lookup.php?i=${e}`,t=await fetch(s);return await t.json()}},483:(e,s,t)=>{t.d(s,{P:()=>o});var a=t(579);const r=()=>{const e=(new Date).getFullYear();return(0,a.jsx)("footer",{className:"page-footer green darken-1",children:(0,a.jsx)("div",{className:"footer-copyright",children:(0,a.jsxs)("div",{className:"container",children:["\xa9 ",e," Copyright Text",(0,a.jsx)("a",{className:"grey-text text-lighten-3 right",href:"#!",children:"Repository"})]})})})};var n=t(475);const c=e=>{const{title:s}=e;return(0,a.jsx)("nav",{className:"green darken-1",children:(0,a.jsxs)("div",{className:"nav-wrapper",children:[(0,a.jsx)(n.N_,{to:"/",className:"brand-logo",children:s}),(0,a.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n.N_,{to:"/shop",children:"Meals"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.N_,{to:"/shop",children:"Shop"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.N_,{to:"/movies",children:"Movies"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.N_,{to:"/posts",children:"Posts"})})]})]})})};var i=t(43);const l=e=>{const{children:s}=e,[t,r]=(0,i.useState)(!1);return(0,a.jsx)("main",{className:"container content",children:s})},o=e=>{let{title:s="Portfolio",children:t}=e;return(0,a.jsxs)("div",{className:"App",children:[(0,a.jsx)(c,{title:s}),(0,a.jsx)(l,{children:t}),(0,a.jsx)(r,{})]})}},299:(e,s,t)=>{t.d(s,{Z:()=>r});var a=t(579);const r=()=>(0,a.jsx)("div",{className:"progress",children:(0,a.jsx)("div",{className:"indeterminate"})})},488:(e,s,t)=>{t.d(s,{a:()=>r,w:()=>a});const a="https://fortniteapi.io/v1/shop?lang=ru",r="https://themealdb.com/api/json/v1/1"},774:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});var a=t(43),r=t(475),n=t(579);const c=e=>{let{initialFilter:s="",onSubmit:t}=e;const[r,c]=(0,a.useState)(s);return(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"input-field col s12",children:[(0,n.jsx)("input",{id:"search-field",className:"validate",placeholder:"Search",type:"search",value:r,onChange:e=>{c(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&t(r)}}),(0,n.jsx)("button",{className:"btn search-btn",onClick:()=>t(r),children:"Search"})]})})};var i=t(483),l=t(299);const o=e=>{let{category:s}=e;if(!s)return null;const{strCategory:t,strCategoryDescription:a,strCategoryThumb:c}=s,i=c||`https://via.placeholder.com/300x250?text=${t}`;return(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("div",{className:"card-image",children:(0,n.jsx)("img",{alt:"poster",src:i,onClick:()=>null})}),(0,n.jsxs)("div",{className:"card-content",children:[(0,n.jsx)("span",{className:"card-title",children:t}),(0,n.jsxs)("p",{children:["Description: ",a]})]}),(0,n.jsx)("div",{className:"card-action",children:(0,n.jsx)(r.N_,{to:`meal/${t}`,className:"btn",children:"Show details"})})]})},d=e=>{let{categories:s}=e;return s.length?(0,n.jsx)("div",{className:"list",children:s.map((e=>(0,n.jsx)(o,{category:e},e.idCategory)))}):(0,n.jsx)(n.Fragment,{children:"Nothing founded"})};var h=t(768);const x=e=>{const[s,t]=(0,a.useState)([]),[o,x]=(0,a.useState)([]),[j,m]=(0,r.ok)();(0,a.useEffect)((()=>{p()}),[j]);const p=()=>{(0,h.QU)().then((e=>{t(e.categories),x(j.size?e.categories.filter((e=>e.strCategory.toLowerCase()===j.get("search").toLowerCase())):e.categories)}))};return(0,n.jsx)(i.P,{title:"Meals",children:(0,n.jsxs)("div",{className:"container content",children:[(0,n.jsx)(c,{onSubmit:e=>{x(s.filter((s=>s.strCategory.toLowerCase().includes(e.toLowerCase())))),m(e.length?{search:e}:j.delete("search"))},initialFilter:j.get("search")||""}),s.length?(0,n.jsx)(d,{categories:o}):(0,n.jsx)(l.Z,{})]})})}}}]);
//# sourceMappingURL=774.6b139e77.chunk.js.map