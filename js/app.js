window.addEventListener("load",()=>{

document.body.classList.add("loaded");

let loader=document.getElementById("loader");
if(loader)loader.style.display="none";

});

/* ripple */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",function(e){

let circle=document.createElement("span");

circle.classList.add("ripple");

circle.style.left=e.offsetX+"px";
circle.style.top=e.offsetY+"px";

this.appendChild(circle);

setTimeout(()=>circle.remove(),600);

});

});

/* PWA install */

let deferredPrompt;

const installBtn=document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt",(e)=>{

e.preventDefault();

deferredPrompt=e;

if(installBtn)installBtn.style.display="block";

});

if(installBtn){

installBtn.addEventListener("click",()=>{

if(!deferredPrompt)return;

deferredPrompt.prompt();

});

}

/* service worker */

if("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js");

}
