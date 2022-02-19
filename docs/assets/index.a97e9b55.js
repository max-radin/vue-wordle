import{d as D,o as a,c as n,F as b,r as C,a as c,b as m,n as I,t as _,p as P,e as j,f as h,g as J,h as Q,i as q,w as X,T as Y,j as k,u as ee,k as M,l as te}from"./vendor.b7083f46.js";const re=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))v(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&v(l)}).observe(document,{childList:!0,subtree:!0});function f(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function v(r){if(r.ep)return;r.ep=!0;const o=f(r);fetch(r.href,o)}};re();const F=" Using word of the day instead.";function oe(){const e=new Date,i=new Date(2022,1,5),f=Number(e)-Number(i);return Math.floor(f/(1e3*60*60*24))}function se(e){if(location.search)try{const i=atob(location.search.slice(1));if(i.length!==5)alert(`Incorrect word length from encoded query. ${F}`);else return i}catch{alert(`Malformed encoded word query. ${F}`)}for(;e>N.length;)e-=N.length;return N[e]}const N=["arwen","gimli","quest","woods","moria","eomer","eowyn","tales","hurin","valar","eldar","rider","grima","eyrie","maiar","bilbo","brown","sting","frodo","elves","nenya","spell","harad","wargs","elven","misty","ungol","white","rohan","realm","dwarf","narya","downs","smaug","wyrms","gloin","durin","siege","ainur","istar","balin","shire","ogres","troll","kings","abyss","tower","rings","queen","vilya","witch","merry","umbar","eagle","biter","beorn","black"],ae=["minas","thain","bofur","kasem","barad","endor","meara","bungo","uruks","boron","drogo","ulbar","hiril","percy","huorn","uinen","celos","bifur","ugluk","anson","erech","khand","daisy","indor","talan","urwen","parth","arnor","freda","beril","celon","anwar","aldor","brego","folca","melko","argon","finwe","elros","andor","siril","poros","serni","narog","celon","rivil","indis","manwe","thror","basso","shade","ghost","ithil","mines"],ne=[...N,...ae];var K=(e,i)=>{const f=e.__vccOpts||e;for(const[v,r]of i)f[v]=r;return f};const le=e=>(P("data-v-a7ac7f5c"),e=e(),j(),e),ie={id:"keyboard"},ue={class:"row"},ce={key:0,class:"spacer"},de=["onClick"],fe={key:0},ve={key:1,xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},he=le(()=>c("path",{fill:"currentColor",d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"},null,-1)),pe=[he],me={key:1,class:"spacer"},_e=D({props:{letterStates:null},emits:["key"],setup(e){const i=["qwertyuiop".split(""),"asdfghjkl".split(""),["Enter",..."zxcvbnm".split(""),"Backspace"]];return(f,v)=>(a(),n("div",ie,[(a(),n(b,null,C(i,(r,o)=>c("div",ue,[o===1?(a(),n("div",ce)):m("",!0),(a(!0),n(b,null,C(r,l=>(a(),n("button",{class:I([l.length>1&&"big",e.letterStates[l]]),onClick:p=>f.$emit("key",l)},[l!=="Backspace"?(a(),n("span",fe,_(l),1)):(a(),n("svg",ve,pe))],10,de))),256)),o===1?(a(),n("div",me)):m("",!0)])),64))]))}});var ge=K(_e,[["__scopeId","data-v-a7ac7f5c"]]),d;(function(e){e[e.INITIAL=0]="INITIAL",e.CORRECT="correct",e.PRESENT="present",e.ABSENT="absent"})(d||(d={}));const R=e=>(P("data-v-9e8ea89c"),e=e(),j(),e),ye={key:0,class:"message"},we={key:0},be=R(()=>c("br",null,null,-1)),ke=R(()=>c("br",null,null,-1)),Ee={id:"resultGrid"},Te={key:0},Ce={key:1,class:"message"},Ie=R(()=>c("header",null,[c("h1",null,"GANDARFLE"),c("a",{id:"source-link",href:"https://github.com/max-radin/vue-wordle",target:"_blank"},"Source")],-1)),Ne={id:"board"},Re=R(()=>c("div",{id:"footer"},[k(" Inspired by "),c("a",{href:"https://www.powerlanguage.co.uk/wordle/",target:"_blank"},"Wordle"),k(" and "),c("a",{href:"https://digitaltolkien.github.io/vue-wordle/",target:"_blank"},"Lordle of the Rings"),k(". ")],-1)),$e=D({setup(e){const i=oe(),f=se(i);let v=h(!1);const r=h(Array.from({length:6},()=>Array.from({length:5},()=>({letter:"",state:d.INITIAL}))));let o=h(0);const l=J(()=>r.value[o.value]);let p=h(""),E=h(""),$=h(-1),A=h(!1);const g=h({});let S=!0;const x=t=>B(t.key);window.addEventListener("keyup",x),Q(()=>{window.removeEventListener("keyup",x)});function B(t){!S||(/^[a-zA-Z]$/.test(t)?H(t.toLowerCase()):t==="Backspace"?U():t==="Enter"&&W())}function H(t){for(const u of l.value)if(!u.letter){u.letter=t;break}}function U(){for(const t of[...l.value].reverse())if(t.letter){t.letter="";break}}function W(){if(l.value.every(t=>t.letter)){const t=l.value.map(s=>s.letter).join("");if(!ne.includes(t)&&t!==f){G(),T("Not in word list");return}const u=f.split("");l.value.forEach((s,y)=>{u[y]===s.letter&&(s.state=g.value[s.letter]=d.CORRECT,u[y]=null)}),l.value.forEach(s=>{!s.state&&u.includes(s.letter)&&(s.state=d.PRESENT,u[u.indexOf(s.letter)]=null,g.value[s.letter]||(g.value[s.letter]=d.PRESENT))}),l.value.forEach(s=>{s.state||(s.state=d.ABSENT,g.value[s.letter]||(g.value[s.letter]=d.ABSENT))}),S=!1,l.value.every(s=>s.state===d.CORRECT)?setTimeout(()=>{E.value=O(),T(["Genius","Magnificent","Impressive","Splendid","Great","Phew"][o.value],-1),A.value=!0},1600):o.value<r.value.length-1?(o.value++,setTimeout(()=>{S=!0},1600)):setTimeout(()=>{T(f.toUpperCase(),-1)},1600)}else G(),T("Not enough letters")}function T(t,u=1e3){p.value=t,u>0&&setTimeout(()=>{p.value=""},u)}function G(){$.value=o.value,setTimeout(()=>{$.value=-1},1e3)}const Z={[d.CORRECT]:"\u{1F7E9}",[d.PRESENT]:"\u{1F7E8}",[d.ABSENT]:"\u2B1C",[d.INITIAL]:null};function O(){return r.value.slice(0,o.value+1).map(t=>t.map(u=>Z[u.state]).join("")).join(`
`)}function z(){var t=document.createElement("textarea");document.body.appendChild(t);let u="Gandarfle #"+(i+1).toString()+`
`;t.value=u+O(),t.select(),document.execCommand("copy"),document.body.removeChild(t),v.value=!0}return(t,u)=>(a(),n(b,null,[q(Y,null,{default:X(()=>[E.value?(a(),n("div",ye,[p.value?(a(),n("div",we,[k(_(p.value)+"! ",1),be,ke])):m("",!0),c("div",Ee,[k(" Gandarfle #"+_(ee(i)+1)+" ",1),E.value?(a(),n("pre",Te,_(E.value),1)):m("",!0)]),v.value?m("",!0):(a(),n("div",{key:1,class:"button",onClick:z},"Copy")),v.value?(a(),n("div",{key:2,onClick:z},"Copied!")):m("",!0)])):p.value?(a(),n("div",Ce,[c("div",null,_(p.value),1)])):m("",!0)]),_:1}),Ie,c("div",Ne,[(a(!0),n(b,null,C(r.value,(s,y)=>(a(),n("div",{class:I(["row",$.value===y&&"shake",A.value&&o.value===y&&"jump"])},[(a(!0),n(b,null,C(s,(w,L)=>(a(),n("div",{class:I(["tile",w.letter&&"filled",w.state&&"revealed"])},[c("div",{class:"front",style:M({transitionDelay:`${L*300}ms`})},_(w.letter),5),c("div",{class:I(["back",w.state]),style:M({transitionDelay:`${L*300}ms`,animationDelay:`${L*100}ms`})},_(w.letter),7)],2))),256))],2))),256))]),q(ge,{onKey:B,"letter-states":g.value},null,8,["letter-states"]),Re],64))}});var Se=K($e,[["__scopeId","data-v-9e8ea89c"]]);window.addEventListener("resize",V);V();function V(){document.body.style.setProperty("--vh",window.innerHeight+"px")}te(Se).mount("#app");