var e,t,n,r,i,l={75:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.playTitleAnimation=void 0;var n=function(e,t,n){return e<t?0:e>n?1:(e-t)/(n-t)},r=function(){console.log((100*c).toFixed(0)+"%"),i(),l(),o(),1!==c&&((c+=.001)>1&&(c=1),requestAnimationFrame(r))};t.playTitleAnimation=r;var i=function(){var e=n(c,0,.2);d.style.background="rgb(102, 102, 102)",d.style.borderRadius=.05*a.clientWidth+"px",d.style.boxShadow="0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)",d.style.color="rgb(255, 255, 255)",d.style.font="700 "+.15*a.clientWidth+'px/100% "Zen Kaku Gothic Antique", sans-serif';var t=-d.clientWidth,r=d.clientWidth+(document.documentElement.clientWidth-d.clientWidth)/2;d.style.left=t+r*n(e,0,.6)+"px",d.style.padding=.05*a.clientWidth+"px",d.style.position="absolute",d.style.top=-d.clientHeight+document.documentElement.clientHeight*(.3+.05*n(e,.8,1))+"px",d.style.whiteSpace="nowrap"},l=function(){var e=n(c,.55,.8);s.style.background="rgb(102, 102, 102)",s.style.borderRadius=s.clientWidth+s.clientHeight+"px",s.style.boxShadow="0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)",s.style.color="rgb(255, 255, 255)",s.style.font="700 "+.12*a.clientWidth+'px/100% "Zen Kaku Gothic Antique", sans-serif';var t=-s.clientWidth,r=s.clientWidth+(document.documentElement.clientWidth-s.clientWidth)/2,i=1.05*r,l=.75,o=.85;if(e<l)s.style.left=t+i*n(e,0,l)+"px";else if(e<o)s.style.left=t+i+"px";else{var d=t+i,u=i-r;s.style.left=d-u*n(e,o,1)+"px"}s.style.padding=.03*a.clientWidth+"px",s.style.position="absolute",s.style.transform=e<l?"rotate("+378*n(e,0,l)+"deg)":e<o?"rotate(378deg)":"rotate("+(378-18*n(e,o,1))+"deg)",s.style.top="calc(50vh - "+s.clientHeight/2+"px)"},o=function(){var e=n(c,.25,.45);u.style.background="rgb(102, 102, 102)",u.style.borderRadius=.04*a.clientWidth+"px",u.style.boxShadow="0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)",u.style.color="rgb(255, 255, 255)",u.style.font="700 "+.12*a.clientWidth+'px/100% "Zen Kaku Gothic Antique", sans-serif';var t=document.documentElement.clientWidth,r=u.clientWidth+(document.documentElement.clientWidth-u.clientWidth)/2;u.style.left=t-r*n(e,0,.6)+"px",u.style.position="absolute",u.style.padding=.04*a.clientWidth+"px",u.style.top=60+5*n(e,.8,1)+"vh",u.style.whiteSpace="nowrap"},c=0,a=function(){var e=document.querySelector(".main__title");if(null===e)throw new Error("タイトルアニメーションの描画対象となるHTML要素が見つかりませんでした。");return e}(),d=function(){var e=document.createElement("div");return e.innerText="石田 智義",new ResizeObserver((function(e,t){i()})).observe(document.body),a.appendChild(e),e}(),s=function(){var e=document.createElement("div");return e.innerText="の",new ResizeObserver((function(e,t){l()})).observe(document.body),a.appendChild(e),e}(),u=function(){var e=document.createElement("div");return e.innerText="ポートフォリオ",new ResizeObserver((function(e,t){o()})).observe(document.body),a.appendChild(e),e}()}},o={};n=function e(t){var n=o[t];if(void 0!==n)return n.exports;var r=o[t]={exports:{}};return l[t](r,r.exports,e),r.exports}(75),r=function(e,t){for(var n=0,r=Array.from(t);n<r.length;n++){var i=r[n];i.classList.contains("header__in-page-link--being-displayed")&&i.classList.remove("header__in-page-link--being-displayed")}for(var l=document.elementFromPoint(innerWidth/2,innerHeight/2);null!==l&&l!==document.body;){var o=e.findIndex((function(e,t,n){return e===l}));if(-1!==o)return void t[o].classList.add("header__in-page-link--being-displayed");l=l.parentElement}t[0].classList.add("header__in-page-link--being-displayed")},i=function(){var e=document.querySelector(".header");if(null===e)throw new Error("ヘッダーを表すHTML要素が見つかりません。");return e}(),e=Array.from(document.querySelectorAll(".main__content")),t=Array.from(document.querySelectorAll(".header__in-page-link")),setTimeout((function(){r(e,t)}),200),addEventListener("scroll",(function(n){r(e,t)})),function(){for(var e=0,t=Array.from(document.querySelectorAll(".header__in-page-link"));e<t.length;e++)t[e].addEventListener("click",(function(e){var t;e.preventDefault();var n=e.target.href.match(/#.*$/);if(null!==n){var r=document.querySelector(n[0]);document.documentElement.scrollTop+=null!==(t=null==r?void 0:r.getBoundingClientRect().top)&&void 0!==t?t:0}else document.documentElement.scrollTop=0}))}(),new ResizeObserver((function(e,t){for(var n=0,r=Array.from(document.querySelectorAll(".main__content"));n<r.length;n++)r[n].style.minHeight=document.documentElement.clientHeight-i.scrollHeight+"px"})).observe(document.documentElement),function(){for(var e=0,t=Array.from(document.querySelectorAll(".main__content-title"));e<t.length;e++)t[e].style.marginTop=2*i.scrollHeight+"px"}(),function(){var e,t=document.querySelector(".main__profil");if(null===t)throw new Error("自己紹介文を記述した<table>タグが見つかりません。");e=t.children[0]instanceof HTMLTableSectionElement?Array.from(t.children[0].children):Array.from(t.children);for(var n=0;n<e.length;n+=1)if(0!==n&&e[n].children[0].classList.contains("main__profil-head"))for(var r=0,i=Array.from(e[n].children);r<i.length;r++)i[r].style.paddingTop="1.5rem"}(),requestAnimationFrame(n.playTitleAnimation);