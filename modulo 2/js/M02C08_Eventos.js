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
/* function cambiarFoto(){
    imagen.setAtribute("src","img/img2.jpg");
}
//3.- agregar a evento
imagen.addEventListener("click",cambiarFoto);
 */
//--------------------------------------------------------
imagen = document.querySelector("img")
imagen.addEventListener("click", function(){
    imagen.setAttribute("src","img/img2.jpg");
})

//cambiar color de fondo de un parrafo cuando se pase
//el mouse sobre el volver al color normal
//usando:
//mouseover
//mouseout
//1.- cargar el parrafo
var parrafo = document.querySelector("p");
//2.- agregar el evento
parrafo.addEventListener("mouseover",function(){
    parrafo.style.backgroundColor="blue";
    parrafo.style.color="yellow";
});
parrafo.addEventListener("mouseout",function(){
    parrafo.style.backgroundColor="white";
    parrafo.style.color="black";
})

//---------------------------------------------
var elementosLi = document.querySelectorAll("li");

for(i=0;i<elementosLi.length;i++){
    elementosLi[i].addEventListener("mouseover",function(){
        this.style.color="red";
    });
    elementosLi[i].addEventListener("mouseout",function(){
        this.style.color="black";
    })
}
