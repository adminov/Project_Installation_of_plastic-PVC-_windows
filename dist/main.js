(()=>{"use strict";(()=>{const e=document.querySelector(".btn-order-call"),l=document.querySelector(".header-modal"),t=document.querySelector(".overlay");e.addEventListener("click",(()=>{l.style.display="block",t.style.display="block"})),t.addEventListener("click",(e=>{let l=e.target;l.classList.contains("header-modal__close")?t.style.display="none":(l=l.closest(".overlay"),l&&(t.style.display="none"))}))})(),console.log("sliderForCustomers")})();