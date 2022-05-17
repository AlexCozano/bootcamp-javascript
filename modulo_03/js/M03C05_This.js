
class Gato{
    constructor(nombre,raza){
        this.nombre;
        this.raza;
    }
    saludar =function(){
        console+.console.log("hola " + this.nombre);
    }
}

let gato1=new gato("neko","angora");

gato1.nombre;
this.nombre;

//----------------------------------------------

let perro={
    nombre:"cachupin",
    raza:"terrier"
}
let FuncionPrestada = gato1.saludar.bind(perro);
perro.saludar();