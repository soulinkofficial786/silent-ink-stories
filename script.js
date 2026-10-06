const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector("#mainNav");
toggle?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const text=document.querySelector(".urdu-text");
const controls=document.querySelectorAll(".reader-controls button");
let fontSize=26;
controls[0]?.addEventListener("click",()=>{fontSize=Math.max(18,fontSize-2); if(text) text.style.fontSize=fontSize+"px";});
controls[2]?.addEventListener("click",()=>{fontSize=Math.min(38,fontSize+2); if(text) text.style.fontSize=fontSize+"px";});
controls[1]?.addEventListener("click",()=>document.body.classList.toggle("reader-dark"));
