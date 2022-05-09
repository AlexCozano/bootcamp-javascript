
var encabezado = document.querySelector("#header");
encabezado.className = "estilo2";

var tituloPrincipal= document.querySelector("#header h1");
//var tituloPrincipal= document.querySelector("h1");
//var tituloPrincipal= encabezado.querySelector("h1");

//tituloPrincipal.innerText="<i>Título cambiado</i>";
tituloPrincipal.innerHTML="<i>Título cambiado 2</i>";

//cambiar el texto del primer párrafo
var primerParrafo=document.querySelector(".estilo1");
//var primerParrafo=document.querySelector("p");
//var primerParrafo=document.querySelector("#contenido p");
primerParrafo.innerHTML="este texto fue cambiado con javascript";

var parrafos = document.querySelectorall("p");
parrafos[1].className="estilo2";
for (i=0;i<parrafos.length;i++){
    parrafos[i].innerText="------------------------";
}
