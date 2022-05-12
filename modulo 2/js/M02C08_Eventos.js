function cambiarFondo(){
    document.body.style.background=black;
    document.body.style.color=white;
}

var boton = document.querySelector ("#boton1");

//agregar la función al evento
//primer parametro: texto indica el evento
//boton.addEventListener("click",cambiarFondo());

boton.addEventListener("clicl",function(){
    document.body.style.backgroundColor="Black";
    document.body.style.color=white;
})

