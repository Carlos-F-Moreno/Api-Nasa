let btnMostrar = document.getElementById("btnMostrar");
let fecha = document.getElementById("iptFecha");
let h1titulo = document.getElementById("titulo");
let imgApi = document.getElementById("imgApi");
let parrafoApi = document.getElementById("parrafoApi");



btnMostrar.addEventListener("click",function(){
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function(){
        const response = JSON.parse(xhr.responseText);
        imgApi.src = response.url;
        h1titulo.textContent = response.title;
        parrafoApi.textContent = response.explanation;

    });
    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + fecha.value);
    xhr.send();
});