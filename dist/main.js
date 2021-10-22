(()=>{"use strict";(()=>{const e=document.querySelector(".btn-order-call"),t=document.querySelector(".header-modal"),n=document.querySelector(".overlay"),o={count:150,speed:10,start:150,end:0},s=()=>{o.start>o.end?o.count-=o.speed:o.count+=o.speed,t.style.transform=`translateX(${o.count}px)`,(o.start>o.end?o.count>o.end:o.count<o.end)&&requestAnimationFrame(s)};e.addEventListener("click",(()=>{n.style.display="block",screen.width>768&&(o.count=o.start,t.style.display="",requestAnimationFrame(s))})),n.addEventListener("click",(e=>{let t=e.target;t.classList.contains("header-modal__close")?n.style.display="none":(t=t.closest(".header-modal"),t||(n.style.display="none"))}))})(),(()=>{const e=document.querySelector(".benefits-inner"),t=document.querySelector(".benefits-wrap"),n=document.querySelectorAll(".benefits__item"),o=document.querySelector(".benefits__arrow--left"),s=document.querySelector(".benefits__arrow--right");if(e.style.overflow="hidden",t.style.marginLeft="inherit",screen.width<=1220){let r=0;const a=1,c=1,l=n.length,i=e.clientWidth/a,d=c*i;n.forEach((e=>{e.style.minWidth=`${i}px`})),s.addEventListener("click",(()=>{const e=l-(Math.abs(r)+a*i)/i;r-=e>=c?d:e*i,u()})),o.addEventListener("click",(()=>{const e=Math.abs(r)/i;r+=e>=c?d:e*i,u()}));const u=()=>{t.style.transform=`translateX(${r}px)`}}else{let r=0;const a=3,c=3,l=n.length,i=e.clientWidth/a,d=c*i;n.forEach((e=>{e.style.minWidth=`${i}px`})),s.addEventListener("click",(()=>{const e=l-(Math.abs(r)+a*i)/i;r-=e>=c?d:e*i,u()})),o.addEventListener("click",(()=>{const e=Math.abs(r)/i;r+=e>=c?d:e*i,u()}));const u=()=>{t.style.transform=`translateX(${r}px)`}}})(),(()=>{const e=document.querySelectorAll(".service-button"),t=document.querySelector(".services-modal"),n=document.querySelector(".overlayTwo"),o={count:150,speed:10,start:150,end:0},s=()=>{o.start>o.end?o.count-=o.speed:o.count+=o.speed,t.style.transform=`translateX(${o.count}px)`,(o.start>o.end?o.count>o.end:o.count<o.end)&&requestAnimationFrame(s)};e.forEach((e=>{e.addEventListener("click",(()=>{n.style.display="block",screen.width>768&&(o.count=o.start,t.style.display="",requestAnimationFrame(s))}))})),n.addEventListener("click",(e=>{let t=e.target;t.classList.contains("services-modal__close")?n.style.display="none":(t=t.closest(".services-modal"),t||(n.style.display="none"))}))})(),((e="25 October 2021")=>{const t=document.querySelectorAll(".count_1 span"),n=document.querySelectorAll(".count_2 span"),o=document.querySelectorAll(".count_3 span"),s=document.querySelectorAll(".count_4 span");let r;const a=()=>{const a=(()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60),s=Math.floor(t/60/60);return{timeRemaining:t,day:Math.floor(t/60/60/24),hours:s,minutes:o,second:n}})();a.timeRemaining>0?(t.forEach((e=>{e.textContent=("0"+a.day).slice(-2)})),n.forEach((e=>{e.textContent=("0"+a.hours).slice(-2)})),o.forEach((e=>{e.textContent=("0"+a.minutes).slice(-2)})),s.forEach((e=>{e.textContent=("0"+a.second).slice(-2)}))):(clearInterval(r),t.forEach((e=>{e.textContent="00"})),n.forEach((e=>{e.textContent="00"})),o.forEach((e=>{e.textContent="00"})),s.forEach((e=>{e.textContent="00"})))};a(),r=setInterval(a,1e3)})(),(()=>{const e=document.querySelectorAll("[name=fio]"),t=document.querySelectorAll("[name=phone]"),n=e=>{e.value=e.value.replace(/\s+/g," "),e.value=e.value.replace(/\-+/g,"-");let t=new RegExp("ReGeX"+e.value+"ReGeX");/^[/ /-]/.test(t)&&(e.value=e.value.replace(/^[/ /-]/,"")),/[/ /-]$/.test(t)&&(e.value=e.value.replace(/[/ /-]$/,""))},o=(e,t,n="Введите корректные данные")=>{""!==e.value&&(e.value.match(t)||(alert(n),e.value=""))};e.forEach((e=>{e.addEventListener("blur",(()=>{n(e),e.value=e.value.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join(" "),o(e,/[A-Za-zА-Яа-яЁё]{2,}/gi)}))})),t.forEach((e=>{e.addEventListener("blur",(()=>{n(e),o(e,/\+(\d){6,16}$/g)}))}))})(),(()=>{const e=e=>{[...document.getElementById(e).elements].filter((e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type)).forEach((e=>e.value=""))},t=()=>{const e=document.querySelector(".successError");setTimeout((()=>{e.remove(),document.querySelector(".overlayTwo").style.display="none"}),2e3)},n=n=>{const s=document.getElementById(n),r=document.createElement("div"),a=document.createElement("img");r.className="successError",r.style.cssText="font-size: 2rem; color: black;",a.height=50,s.addEventListener("submit",(c=>{c.preventDefault();const l=new FormData(s);let i={};l.forEach(((e,t)=>{i[t]=e})),""===i.fio||""===i.phone?alert("Введите данные"):(r.textContent="Загрузка...",a.src="./images/wait/wait.gif",r.insertBefore(a,r.firstChild),s.appendChild(r),o(i).then((()=>{r.textContent="Спасибо! Мы скокро с вами свяжемся!",a.src="./images/wait/success.png",r.insertBefore(a,r.firstChild),e(n),t()})).catch((o=>{r.textContent="Что то пошло не так...",a.src="./images/wait/error.png",r.insertBefore(a,r.firstChild),e(n),t(),console.error(o)})))}))};n("form1"),n("form2"),n("form3"),n("form4");const o=e=>new Promise(((t,n)=>{const o=new XMLHttpRequest;o.addEventListener("readystatechange",(()=>{4===o.readyState&&(200===o.status?t():n(o.status))})),o.open("POST","./server.php"),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(e))}))})()})();