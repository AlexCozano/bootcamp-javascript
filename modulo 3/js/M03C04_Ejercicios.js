let foto=document.querySelector("img");
//let foto = $("img");
//let foto=document.querySelector("img");
//let btn=$("#boton");
let btn=document.querySelector("#boton");

//console.log(foto);
//console.log(btn);

//agregar click
btn.addEventListener("click",function(e){
    $.getJSON("https://dog.ceo/api/breeds/image/random",function(data){
        let obj=data;
        let URLimagen=data.message;
        foto.setAttribute("src",URLimagen);
    })
})

//crear una función que elija un número entero al azar entre 1 y 800
//usar esta función para buscar un pokemon al azar (por número)
//cuando se cargue, poner la información en el html. incluyendo la foto


//gatos
//https://api.thecatapi.com/v1/images/search

//let dirFinal="https://pokeapi.co/api/v2/pokemon/"+numeroRandom()
//getJson(dirFinal,funviot....

