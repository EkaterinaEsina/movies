"use strict";(self.webpackChunkreact_nepomn=self.webpackChunkreact_nepomn||[]).push([[934],{483:(e,s,t)=>{t.d(s,{P:()=>a});var i=t(579);const n=()=>{const e=(new Date).getFullYear();return(0,i.jsx)("footer",{className:"page-footer green darken-1",children:(0,i.jsx)("div",{className:"footer-copyright",children:(0,i.jsxs)("div",{className:"container",children:["\xa9 ",e," Copyright Text",(0,i.jsx)("a",{className:"grey-text text-lighten-3 right",href:"#!",children:"Repository"})]})})})};var o=t(475);const r=e=>{const{title:s}=e;return(0,i.jsx)("nav",{className:"green darken-1",children:(0,i.jsxs)("div",{className:"nav-wrapper",children:[(0,i.jsx)(o.N_,{to:"/",className:"brand-logo",children:s}),(0,i.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[(0,i.jsx)("li",{children:(0,i.jsx)(o.N_,{to:"/meals",children:"Meals"})}),(0,i.jsx)("li",{children:(0,i.jsx)(o.N_,{to:"/shop",children:"Shop"})}),(0,i.jsx)("li",{children:(0,i.jsx)(o.N_,{to:"/movies",children:"Movies"})}),(0,i.jsx)("li",{children:(0,i.jsx)(o.N_,{to:"/posts",children:"Posts"})})]})]})})};var c=t(43);const l=e=>{const{children:s}=e,[t,n]=(0,c.useState)(!1);return(0,i.jsx)("main",{className:"container content",children:s})},a=e=>{let{title:s="Portfolio",children:t}=e;return(0,i.jsxs)("div",{className:"App",children:[(0,i.jsx)(r,{title:s}),(0,i.jsx)(l,{children:t}),(0,i.jsx)(n,{})]})}},299:(e,s,t)=>{t.d(s,{Z:()=>n});var i=t(579);const n=()=>(0,i.jsx)("div",{className:"progress",children:(0,i.jsx)("div",{className:"indeterminate"})})},934:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var i=t(43),n=t(483),o=t(299),r=t(579);const c=e=>{const{post:s,removePost:t}=e,[n,c]=(0,i.useState)([]),[l,a]=(0,i.useState)([]);return(0,i.useEffect)((()=>{fetch(`https://jsonplaceholder.typicode.com/posts/${s.id}/comments`).then((e=>e.json())).then((e=>{c(e),a(!1)})).catch((e=>console.error(e)))}),[]),(0,r.jsx)("div",{children:l?(0,r.jsx)(o.Z,{}):(0,r.jsx)("div",{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:["Post#",s.id]}),(0,r.jsx)("div",{children:s.body})]},s.id),(0,r.jsx)("button",{onClick:()=>t(e.post.id),children:"Remove this post"})]})})})},l=e=>{const[s,t]=(0,i.useState)([]),[l,a]=(0,i.useState)(!0);(0,i.useEffect)((()=>{fetch("https://jsonplaceholder.typicode.com/posts").then((e=>e.json())).then((e=>{t(e),a(!1)})).catch((e=>console.error(e)))}),[]);const d=()=>{t([...s,{userId:1,id:Math.random(),title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",body:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"}])},h=e=>{t([...s.filter((s=>s.id!==e))])};return(0,r.jsx)(n.P,{title:"Posts",children:l?(0,r.jsx)(o.Z,{}):(0,r.jsxs)("div",{children:[s.map((e=>(0,r.jsx)(c,{post:e,addPost:d,removePost:h},e.id))),(0,r.jsx)("button",{onClick:d,children:"Add new post"})]})})}}}]);
//# sourceMappingURL=934.fcd7b594.chunk.js.map