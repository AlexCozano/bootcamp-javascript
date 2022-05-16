class Gato{
    constructor(nombre,raza){
        this.nombre=nombre;
        this.raza=raza;

    }
}

//creamos dos objetos de tipo gato
let gato1=new Gato("neko","angora");
let gato2=new Gato("cat","egipcio");

//transformamos el gato 1 en un texto con formato JSON 
let gatoJSON= JSON.stringify(gato1);
console.log(gato1);
console.log(gatoJSON);

//hacemos el proceso inverso, transformamos el texto JSON en un objeto
let gatoObj = JSON.parse(gatoJSON);
console.log(gatoObj);

//creamos un arreglo, lo transformamos en texto con formato JSON y lo enviamos a pantalla
let arregloGatos=[gato1,gato2];
let arregloJSON=JSON.stringify(arregloGatos);
console.log(arregloJSON);
/*XML
<Gato>
    <nombre>neko</Nombre>
    <raza>angora</Angora>
</Gato>
Personalizado:
Clase=Gato
Objeto=(
        nombre"neko";
        raza="angora";
)
*/

