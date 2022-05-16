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