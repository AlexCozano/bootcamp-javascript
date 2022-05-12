function cambiarFondo(){
    document.body.style.background="black;
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
        document.body.style.color=white;
        console.log(infoDelEvento);
    }
)

/* //forma avanzada
boton.addEventListener("click",(e)=>{
    document.body.style.backgroundColor="Black";
    document.body.style.color=white;
}); */

