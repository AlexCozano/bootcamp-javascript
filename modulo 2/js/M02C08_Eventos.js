function cambiarFondo(){
    document.body.style.background="black";
    document.body.style.color="white";
}

var boton = document.querySelector ("#boton1");

//agregar la función al evento
//primer parametro: texto indica el evento

//forma noob
//boton.addEventListener("click",cambiarFondo);

//forma normal
boton.addEventListener("click",
    function(infoDelEvento){
        document.body.style.backgroundColor="Black";
        document.body.style.color="white";
        console.log(infoDelEvento);
       if(infoDelEvento.type=="click"){
           alert("se hizo click");
       }
    }
)

/* //forma avanzada
boton.addEventListener("click",(e)=>{
    document.body.style.backgroundColor="Black";
    document.body.style.color=white;
}); */

//cambiar la foto al hacer click sobre ella
//1.- cargar el elemento que quiero modificar
var imagen = document.querySelector("img");
//2.- crear función
function cambiarFoto(){
    imagen.setAtribute("src","img/img2.jpg");
}
//3.- agregar a evento
Imagen.addEventListener("click",cambiarFoto);