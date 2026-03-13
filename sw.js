const CACHE="festival-v1";

const urls=[

"/",
"/index.html",
"/css/style.css",
"/js/app.js",
"/js/settings.js"

];

self.addEventListener("install",e=>{

e.waitUntil(

caches.open(CACHE).then(cache=>cache.addAll(urls))

);

});

self.addEventListener("fetch",e=>{

e.respondWith(

caches.match(e.request).then(res=>res||fetch(e.request))

);

});
