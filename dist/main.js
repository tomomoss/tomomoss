var e={75:function(e,t){var i,h,n,l,s,m,a,o,c,r,d,f,u,g,v,w,p=this&&this.__classPrivateFieldSet||function(e,t,i,h,n){if("m"===h)throw new TypeError("Private method is not writable");if("a"===h&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===h?n.call(e,i):n?n.value=i:t.set(e,i),i},y=this&&this.__classPrivateFieldGet||function(e,t,i,h){if("a"===i&&!h)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!h:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?h:"a"===i?h.call(e):h?h.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.playTitleAnimation=void 0;class P{constructor(e){i.add(this),h.set(this,void 0),n.set(this,void 0),p(this,n,e,"f"),this.element=document.createElement("canvas"),I.appendChild(this.element);const t=this.element.getContext("2d");if(null===t)throw new Error("「マスコット1」のCanvasコンテキストが取得できませんでした。");p(this,h,t,"f"),new ResizeObserver(((e,t)=>{this.animate()})).observe(document.body)}animate(){M.value>.4?this.element.remove():(this.element.height=.1*document.documentElement.clientHeight,this.element.width=.1*document.documentElement.clientHeight,y(this,i,"m",s).call(this),y(this,i,"m",l).call(this))}}h=new WeakMap,n=new WeakMap,i=new WeakSet,l=function(){if(y(this,h,"f").clearRect(0,0,this.element.width,this.element.height),y(this,h,"f").beginPath(),y(this,h,"f").arc(.5*this.element.width,.2*this.element.height,.2*this.element.height,0,2*Math.PI),y(this,h,"f").fill(),y(this,h,"f").beginPath(),y(this,h,"f").moveTo(.5*this.element.width,.45*this.element.height),y(this,h,"f").lineTo(.6*this.element.width,.6*this.element.height),y(this,h,"f").lineTo(.5*this.element.width,.75*this.element.height),y(this,h,"f").lineTo(.4*this.element.width,.6*this.element.height),y(this,h,"f").closePath(),y(this,h,"f").fill(),M.value<.2)"a"===y(this,n,"f")?(y(this,h,"f").beginPath(),y(this,h,"f").arc(.9*this.element.width,.1*this.element.height,.1*this.element.height,0,2*Math.PI),y(this,h,"f").fill()):(y(this,h,"f").beginPath(),y(this,h,"f").arc(.1*this.element.width,.1*this.element.height,.1*this.element.height,0,2*Math.PI),y(this,h,"f").fill());else if(M.value<.25){const e=M.convert(.2,.25);"a"===y(this,n,"f")?(y(this,h,"f").beginPath(),y(this,h,"f").arc(.9*this.element.width,.1*this.element.height+.05*document.documentElement.clientHeight*e,.1*this.element.height,0,2*Math.PI),y(this,h,"f").fill()):(y(this,h,"f").beginPath(),y(this,h,"f").arc(.1*this.element.width,.1*this.element.height+.05*document.documentElement.clientHeight*e,.1*this.element.height,0,2*Math.PI),y(this,h,"f").fill())}else M.value<.3&&("a"===y(this,n,"f")?(y(this,h,"f").beginPath(),y(this,h,"f").arc(.9*this.element.width,.1*this.element.height+.05*document.documentElement.clientHeight,.1*this.element.height,0,2*Math.PI),y(this,h,"f").fill()):(y(this,h,"f").beginPath(),y(this,h,"f").arc(.1*this.element.width,.1*this.element.height+.05*document.documentElement.clientHeight,.1*this.element.height,0,2*Math.PI),y(this,h,"f").fill()));M.value<.15||M.value>.3&&M.value<.4?(y(this,h,"f").beginPath(),Math.floor(100*M.value)%2==0?"a"===y(this,n,"f")?y(this,h,"f").arc(.3*this.element.width,.9*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):y(this,h,"f").arc(.3*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):"a"===y(this,n,"f")?y(this,h,"f").arc(.3*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):y(this,h,"f").arc(.3*this.element.width,.9*this.element.height,.15*this.element.width,Math.PI,2*Math.PI),y(this,h,"f").fill()):M.value<.3&&(y(this,h,"f").beginPath(),y(this,h,"f").arc(.3*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI),y(this,h,"f").fill()),M.value<.15||M.value>.3&&M.value<.4?(y(this,h,"f").beginPath(),Math.floor(100*M.value)%2==0?"a"===y(this,n,"f")?y(this,h,"f").arc(.7*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):y(this,h,"f").arc(.7*this.element.width,.9*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):"a"===y(this,n,"f")?y(this,h,"f").arc(.7*this.element.width,.9*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):y(this,h,"f").arc(.7*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI),y(this,h,"f").fill()):M.value<.3&&(y(this,h,"f").beginPath(),y(this,h,"f").arc(.7*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI),y(this,h,"f").fill())},s=function(){this.element.style.height=`${this.element.height}px`,this.element.style.position="absolute",this.element.style.top=.35*document.documentElement.clientHeight-this.element.clientHeight+"px",this.element.style.width=`${this.element.width}px`;const e=parseFloat(x.element.style.left)-.75*this.element.clientWidth,t=parseFloat(x.element.style.left)+x.element.clientWidth-.25*this.element.clientWidth,i=.75*this.element.clientWidth+x.element.clientWidth+(document.documentElement.clientWidth-x.element.clientWidth)/2;M.value<.3?"a"===y(this,n,"f")?this.element.style.left=`${e}px`:this.element.style.left=`${t}px`:M.value<.4&&("a"===y(this,n,"f")?this.element.style.left=`${e+i*M.convert(.3,.4)}px`:this.element.style.left=`${t+i*M.convert(.3,.4)}px`)},a=new WeakMap,m=new WeakSet,o=function(){y(this,a,"f").beginPath(),y(this,a,"f").arc(.5*this.element.width,.2*this.element.height,.2*this.element.height,0,2*Math.PI),y(this,a,"f").fill(),y(this,a,"f").beginPath(),y(this,a,"f").moveTo(.5*this.element.width,.45*this.element.height),y(this,a,"f").lineTo(.6*this.element.width,.6*this.element.height),y(this,a,"f").lineTo(.5*this.element.width,.75*this.element.height),y(this,a,"f").lineTo(.4*this.element.width,.6*this.element.height),y(this,a,"f").closePath(),y(this,a,"f").fill(),M.value<.9&&(y(this,a,"f").beginPath(),y(this,a,"f").arc(.9*this.element.width,.4*this.element.height,.1*this.element.height,0,2*Math.PI),y(this,a,"f").fill()),M.value<.75||M.value>.8&&M.value<.85||M.value>.9&&M.value<1?(y(this,a,"f").beginPath(),Math.floor(100*M.value)%2==0?y(this,a,"f").arc(.3*this.element.width,.9*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):y(this,a,"f").arc(.3*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI),y(this,a,"f").fill()):(M.value<.8||M.value>.85&&M.value<.9)&&(y(this,a,"f").beginPath(),y(this,a,"f").arc(.3*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI),y(this,a,"f").fill()),M.value<.75||M.value>.8&&M.value<.85||M.value>.9&&M.value<1?(y(this,a,"f").beginPath(),Math.floor(100*M.value)%2==0?y(this,a,"f").arc(.7*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):y(this,a,"f").arc(.7*this.element.width,.9*this.element.height,.15*this.element.width,Math.PI,2*Math.PI),y(this,a,"f").fill()):(M.value<.8||M.value>.85&&M.value<.9)&&(y(this,a,"f").beginPath(),y(this,a,"f").arc(.7*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI),y(this,a,"f").fill())},c=function(){this.element.style.height=`${this.element.height}px`,this.element.style.position="absolute",this.element.style.top=parseFloat(E.element.style.top)+E.element.clientHeight-this.element.clientHeight+"px",this.element.style.width=`${this.element.width}px`;const e=parseFloat(E.element.style.left)-.85*this.element.clientWidth,t=parseFloat(E.element.style.left)+this.element.clientWidth;M.value<.85?this.element.style.left=`${e}px`:M.value<1&&(this.element.style.left=e-t*M.convert(.9,1)+"px")};class b{constructor(e){r.add(this),d.set(this,void 0),f.set(this,void 0),p(this,f,e,"f"),this.element=document.createElement("canvas"),I.appendChild(this.element);const t=this.element.getContext("2d");if(null===t)throw new Error("「マスコット3」のCanvasコンテキストが取得できませんでした。");p(this,d,t,"f"),new ResizeObserver(((e,t)=>{this.animate()})).observe(document.body)}animate(){M.value>.7?this.element.remove():(this.element.height=.1*document.documentElement.clientHeight,this.element.width=.1*document.documentElement.clientHeight,y(this,r,"m",g).call(this),y(this,r,"m",u).call(this))}}d=new WeakMap,f=new WeakMap,r=new WeakSet,u=function(){if(y(this,d,"f").clearRect(0,0,this.element.width,this.element.height),y(this,d,"f").beginPath(),y(this,d,"f").arc(.5*this.element.width,.2*this.element.height,.2*this.element.height,0,2*Math.PI),y(this,d,"f").fill(),y(this,d,"f").beginPath(),y(this,d,"f").moveTo(.5*this.element.width,.45*this.element.height),y(this,d,"f").lineTo(.6*this.element.width,.6*this.element.height),y(this,d,"f").lineTo(.5*this.element.width,.75*this.element.height),y(this,d,"f").lineTo(.4*this.element.width,.6*this.element.height),y(this,d,"f").closePath(),y(this,d,"f").fill(),M.value<.5)"a"===y(this,f,"f")?(y(this,d,"f").beginPath(),y(this,d,"f").arc(.9*this.element.width,.1*this.element.height,.1*this.element.height,0,2*Math.PI),y(this,d,"f").fill()):(y(this,d,"f").beginPath(),y(this,d,"f").arc(.1*this.element.width,.1*this.element.height,.1*this.element.height,0,2*Math.PI),y(this,d,"f").fill());else if(M.value<.55){const e=M.convert(.5,.55);"a"===y(this,f,"f")?(y(this,d,"f").beginPath(),y(this,d,"f").arc(.9*this.element.width,.1*this.element.height+.05*document.documentElement.clientHeight*e,.1*this.element.height,0,2*Math.PI),y(this,d,"f").fill()):(y(this,d,"f").beginPath(),y(this,d,"f").arc(.1*this.element.width,.1*this.element.height+.05*document.documentElement.clientHeight*e,.1*this.element.height,0,2*Math.PI),y(this,d,"f").fill())}else M.value<.6&&("a"===y(this,f,"f")?(y(this,d,"f").beginPath(),y(this,d,"f").arc(.9*this.element.width,.1*this.element.height+.05*document.documentElement.clientHeight,.1*this.element.height,0,2*Math.PI),y(this,d,"f").fill()):(y(this,d,"f").beginPath(),y(this,d,"f").arc(.1*this.element.width,.1*this.element.height+.05*document.documentElement.clientHeight,.1*this.element.height,0,2*Math.PI),y(this,d,"f").fill()));M.value<.45||M.value>.6&&M.value<.7?(y(this,d,"f").beginPath(),Math.floor(100*M.value)%2==0?"a"===y(this,f,"f")?y(this,d,"f").arc(.3*this.element.width,.9*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):y(this,d,"f").arc(.3*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):"a"===y(this,f,"f")?y(this,d,"f").arc(.3*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):y(this,d,"f").arc(.3*this.element.width,.9*this.element.height,.15*this.element.width,Math.PI,2*Math.PI),y(this,d,"f").fill()):M.value<.6&&(y(this,d,"f").beginPath(),y(this,d,"f").arc(.3*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI),y(this,d,"f").fill()),M.value<.45||M.value>.6&&M.value<.7?(y(this,d,"f").beginPath(),Math.floor(100*M.value)%2==0?"a"===y(this,f,"f")?y(this,d,"f").arc(.7*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):y(this,d,"f").arc(.7*this.element.width,.9*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):"a"===y(this,f,"f")?y(this,d,"f").arc(.7*this.element.width,.9*this.element.height,.15*this.element.width,Math.PI,2*Math.PI):y(this,d,"f").arc(.7*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI),y(this,d,"f").fill()):M.value<.6&&(y(this,d,"f").beginPath(),y(this,d,"f").arc(.7*this.element.width,1*this.element.height,.15*this.element.width,Math.PI,2*Math.PI),y(this,d,"f").fill())},g=function(){this.element.style.height=`${this.element.height}px`,this.element.style.position="absolute",this.element.style.top=.65*document.documentElement.clientHeight+(W.element.clientHeight-this.element.clientHeight)+"px",this.element.style.width=`${this.element.width}px`;const e=parseFloat(W.element.style.left)-.75*this.element.clientWidth,t=parseFloat(W.element.style.left)+W.element.clientWidth-.25*this.element.clientWidth,i=.25*-this.element.clientWidth+W.element.clientWidth+(document.documentElement.clientWidth-W.element.clientWidth)/2+this.element.clientWidth;M.value<.6?"a"===y(this,f,"f")?this.element.style.left=`${e}px`:this.element.style.left=`${t}px`:M.value<.7&&("a"===y(this,f,"f")?this.element.style.left=e-i*M.convert(.6,.7)+"px":this.element.style.left=t-i*M.convert(.6,.7)+"px")},v=new WeakMap,w=new WeakMap,t.playTitleAnimation=function e(){x.animate(),E.animate(),W.animate(),$.animate(),H.animate(),T.animate(),_.animate(),k.animate(),1!==M.value&&(M.update(),requestAnimationFrame(e))};const M=new class{constructor(){v.set(this,void 0),w.set(this,void 0),p(this,v,1e3,"f"),p(this,w,0,"f")}get value(){return y(this,w,"f")/y(this,v,"f")}convert(e,t){return this.value<e?0:this.value>t?1:(this.value-e)/(t-e)}update(){p(this,w,y(this,w,"f")+1,"f")}},I=function(){const e=document.querySelector(".main__title");if(null===e)throw new Error("タイトルアニメーションの描画対象となるHTML要素が見つかりませんでした。");return e}(),x=new class{constructor(){this.element=document.createElement("div"),this.element.innerText="石田 智義",new ResizeObserver(((e,t)=>{this.animate()})).observe(document.body),I.appendChild(this.element)}animate(){const e=.05*I.clientWidth+"px",t=.15*I.clientWidth+"px";this.element.style.background="rgb(102, 102, 102)",this.element.style.borderRadius=e,this.element.style.boxShadow="0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)",this.element.style.color="rgb(255, 255, 255)",this.element.style.font=`700 ${t}/100% "Zen Kaku Gothic Antique", sans-serif`,this.element.style.padding=e,this.element.style.position="absolute",this.element.style.whiteSpace="nowrap";const i=-this.element.clientWidth-.75*H.element.clientWidth,h=this.element.clientWidth+(document.documentElement.clientWidth-this.element.clientWidth)/2+.75*H.element.clientWidth,n=i+h,l=.3*document.documentElement.clientHeight-this.element.clientHeight,s=.05*document.documentElement.clientHeight,m=l+s;return M.value<.15?(this.element.style.left=`${i+h*M.convert(0,.15)}px`,void(this.element.style.top=`${l}px`)):M.value<.2?(this.element.style.left=`${n}px`,void(this.element.style.top=`${l}px`)):M.value<.25?(this.element.style.left=`${n}px`,void(this.element.style.top=`${l+s*M.convert(.2,.25)}px`)):(this.element.style.left=`${n}px`,void(this.element.style.top=`${m}px`))}},E=new class{constructor(){this.element=document.createElement("div"),this.element.innerText="の",new ResizeObserver(((e,t)=>{this.animate()})).observe(document.body),I.appendChild(this.element)}animate(){const e=.12*I.clientWidth+"px";this.element.style.background="rgb(102, 102, 102)",this.element.style.borderRadius=`${this.element.clientHeight+this.element.clientWidth}px`,this.element.style.boxShadow="0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)",this.element.style.color="rgb(255, 255, 255)",this.element.style.font=`700 ${e}/100% "Zen Kaku Gothic Antique", sans-serif`,this.element.style.padding="1.2rem",this.element.style.position="absolute",this.element.style.top=.5*document.documentElement.clientHeight-this.element.clientHeight/2+"px",this.element.style.whiteSpace="nowrap";const t=-this.element.clientWidth,i=this.element.clientWidth+(document.documentElement.clientWidth-this.element.clientWidth)/2,h=1.05*i,n=t+h,l=.05*i,s=n-l;return M.value<.75?(this.element.style.left=`${t+h*M.convert(.6,.75)}px`,void(this.element.style.transform=`rotate(${378*M.convert(.6,.75)}deg)`)):M.value<.8?void(this.element.style.left=`${n}px`):M.value<.85?(this.element.style.left=n-l*M.convert(.8,.85)+"px",void(this.element.style.transform=`rotate(${378-18*M.convert(.8,.85)}deg)`)):void(this.element.style.left=`${s}px`)}},W=new class{constructor(){this.element=document.createElement("div"),this.element.innerText="ポートフォリオ",new ResizeObserver(((e,t)=>{this.animate()})).observe(document.body),I.appendChild(this.element)}animate(){const e=.04*I.clientWidth+"px",t=.12*I.clientWidth+"px";this.element.style.background="rgb(102, 102, 102)",this.element.style.borderRadius=e,this.element.style.boxShadow="0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)",this.element.style.color="rgb(255, 255, 255)",this.element.style.font=`700 ${t}/100% "Zen Kaku Gothic Antique", sans-serif`,this.element.style.padding=e,this.element.style.position="absolute",this.element.style.whiteSpace="nowrap";const i=document.documentElement.clientWidth+.75*_.element.clientWidth,h=-(this.element.clientWidth+(document.documentElement.clientWidth-this.element.clientWidth)/2)-.75*_.element.clientWidth,n=i+h,l=.6*document.documentElement.clientHeight,s=.05*document.documentElement.clientHeight,m=l+s;return M.value<.45?(this.element.style.left=`${i+h*M.convert(.3,.45)}px`,void(this.element.style.top=`${l}px`)):M.value<.5?(this.element.style.left=`${n}px`,void(this.element.style.top=`${l}px`)):M.value<.55?(this.element.style.left=`${n}px`,void(this.element.style.top=`${l+s*M.convert(.5,.55)}px`)):(this.element.style.left=`${n}px`,void(this.element.style.top=`${m}px`))}},$=new P("a"),H=new P("b"),T=new class{constructor(){m.add(this),a.set(this,void 0),this.element=document.createElement("canvas"),I.appendChild(this.element);const e=this.element.getContext("2d");if(null===e)throw new Error("「マスコット3」のCanvasコンテキストが取得できませんでした。");p(this,a,e,"f"),new ResizeObserver(((e,t)=>{this.animate()})).observe(document.body)}animate(){1!==M.value?(this.element.height=.1*document.documentElement.clientHeight,this.element.width=.1*document.documentElement.clientHeight,y(this,m,"m",c).call(this),y(this,m,"m",o).call(this)):this.element.remove()}},_=new b("a"),k=new b("b")}},t={};function i(h){var n=t[h];if(void 0!==n)return n.exports;var l=t[h]={exports:{}};return e[h].call(l.exports,l,l.exports,i),l.exports}(()=>{const e=i(75),t=(e,t)=>{for(const e of Array.from(t))e.classList.contains("header__in-page-link--being-displayed")&&e.classList.remove("header__in-page-link--being-displayed");let i=document.elementFromPoint(innerWidth/2,innerHeight/2);for(;null!==i&&i!==document.body;){const h=e.findIndex(((e,t,h)=>e===i));if(-1!==h)return void t[h].classList.add("header__in-page-link--being-displayed");i=i.parentElement}t[0].classList.add("header__in-page-link--being-displayed")},h=(()=>{const e=document.querySelector(".header");if(null===e)throw new Error("ヘッダーを表すHTML要素が見つかりません。");return e})();(()=>{const e=Array.from(document.querySelectorAll(".main__content")),i=Array.from(document.querySelectorAll(".header__in-page-link"));setTimeout((()=>{t(e,i)}),200),addEventListener("scroll",(h=>{t(e,i)}))})(),(()=>{for(const e of Array.from(document.querySelectorAll(".header__in-page-link")))e.addEventListener("click",(e=>{var t;e.preventDefault();const i=e.target.href.match(/#.*$/);if(null===i)return void(document.documentElement.scrollTop=0);const h=document.querySelector(i[0]);document.documentElement.scrollTop+=null!==(t=null==h?void 0:h.getBoundingClientRect().top)&&void 0!==t?t:0}))})(),new ResizeObserver(((e,t)=>{for(const e of Array.from(document.querySelectorAll(".main__content")))e.style.minHeight=document.documentElement.clientHeight-h.scrollHeight+"px"})).observe(document.documentElement),(()=>{for(const e of Array.from(document.querySelectorAll(".main__content-title")))e.style.marginTop=2*h.scrollHeight+"px"})(),(()=>{const e=document.querySelector(".main__profil");if(null===e)throw new Error("自己紹介文を記述した<table>タグが見つかりません。");let t;t=e.children[0]instanceof HTMLTableSectionElement?Array.from(e.children[0].children):Array.from(e.children);for(let e=0;e<t.length;e+=1)if(0!==e&&t[e].children[0].classList.contains("main__profil-head"))for(const i of Array.from(t[e].children))i.style.paddingTop="1.5rem"})(),requestAnimationFrame(e.playTitleAnimation)})();