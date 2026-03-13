if(localStorage.getItem("darkMode")==="true"){

document.body.classList.add("dark");

}

function toggleDark(){

document.body.classList.toggle("dark");

let state=document.body.classList.contains("dark");

localStorage.setItem("darkMode",state);

}
