/* //Ejercicio API Countries 2

$.getJSON("https://restcountries.com/v3.1/name/peru",function {
    console.log(data);
    console.log("-----------------------");
    console.log("nombre: " + data[0].name.official);
    console.log("capital: "+ data[0].capital[0]);

    let lenguajes="";
    for(l in data[0].lenguajes){
        lenguaje +=" " + data[0].lenguajes[1]
    }
    console.log("lenguajes: " + lenguajes);

    let moneda=data[0].currencies;
    for(m in moneda){
        console.log("moneda:" + moneda[m].name) ;
    }
}) */

//----------------------------
//callbacks
function saludar(nombre){
    console.log("Chao " + nombre);
}
function despedir(nombre){
    console.log("Chao " + nombre)
}

function ejecutar(funcionCallback){  
    let persona="pedro";
    funcionCallback(persona);
}
    /* ejecutar */
    ejecutar(saludar);
    ejecutar(despedir);

    var a = saludar;
    a("Denis");




    //----------------------------------
    //promesas

    let numero;
    console.log(numero);
    if(numero){
        console.log("existe");
    }else{
        console.log("no existe");
    }


    //construir una promesa
    function sumar(x,y) {
        var promesa = new Promise(function(resolve,reject){
            if (x==undefined || y==undefined){
                reject("Error: falta un número");
            }else{
                resolve (x+y);
            }

        });
        return promesa;
    }