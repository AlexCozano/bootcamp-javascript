class Gato{
    constructor(nombre,raza){
        this.nombre;
        this.raza;
    }
    saludarv2=function(saludo){
        console.log(saludo +" " + this.nombre);
        console.log(despedida +" " + this.nombre)
    }
    saludarv3=function(saludos,despedida){
        console.log(saludo +" " + this.nombre)
    }

}

let gato1=new Gato("neko","angora");

gato1.nombre;
gato1.saludo();
gato1.saludarv2("que tal");
this.nombre;

//----------------------------------------------

let perro={
    nombre:"cachupin",
    raza:"terrier"
}
//bind
let FuncionPrestada = gato1.saludar.bind(perro);
FuncionPrestada();
//call
gato1.saludar.call(perro);
//call v2
gato1.saludarv2.call(perro,"buenas tardes",);
//call v2
gato1.saludarv3.call(perro,"buenas tardes","nos vemos");
//apply
gato1.saludarv2.apply(["perro,[buenas que tal"]);
gato1.saludarv2.apply(["perro,[buenas que tal","chao"]);

//-----------------------------------------------

function saludar(nombre){
    return function(){
        console.log(saludos + " "+ nombre);
    }
}

let f=saludar("Denis")
f("hola");