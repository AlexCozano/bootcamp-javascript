//---------------------clases---------------
class auto {
    constructor(marca,modelo, anio){
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
    }
}

let auto1 = new auto("audi","TT",2003);
let auto2 = new Auto("mazda", "3", 2020);
let auto3 = new Auto("mitsubishi", "montero", 2012);

console.log(auto1.marca);
console.log(auto2,marca);
console.log(auto3);

//ejercicio crear una clase que defina un rectangulo

class Rectangulo{
    constructor(largo, ancho){
        this.largo=largo;
        this.ancho=ancho;
    }
}
      
let fig1= new Rectangulo(2,5);
//crear una clase que defina al usuario
class Usuario{
    constructor(nombre,password){
        this.nombre=nombre;
        this.password=password;
    }
}

var usuario1 = new Usuario("juanito","123");
var usuario2 = new Usuario("pablito","333");
var rectangulo1 = new rectangulo1(5,3)

console.log("nombre del usuario (con punto): " + usuario1.nombre);
console.log("nombre del usuario (con corchete): " + usuario1["nombre"]);

//agregar una propiedad a un usuario
usuario1.activo=false;
console.log(usuario1);
console.log(usuario2); 