// const gato = {
//     nombre: "Guilfrido",
//     comer(){
//         console.log(${this.nombre} esta comiendo);

//     }
// }

// const Gato2 ={
//     nombre:"Bambi",
//     comer(){
//         console.log(${this.nombre} esta comiendo);
        
//     }
// }


// console.log(gato);
// console.log(gato.nombre);

// gato.comer();

// console.log(Gato2);


class Animal {
    constructor(nombre,genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
    comer(){
        console.log(`${this.nombre} esta comiendo`);       
    }
    pedircomida(){
        console.log(`${this.nombre} esta pidiendo comida`);       
    }
}


class Gato extends Animal {
    constructor(nombre,genero,tamano) {
        super(nombre,genero)
        this.tamano = tamano;
    }

    comer(){
        console.log(`Soy el gato mas pechomcho asi es soy ${this.nombre}`);
        
    }
}


const Guilfrido = new Animal("Guilfrido","Macho");
const Bambi =new Gato("Bambi","Hembra");

console.log(Guilfrido);
console.log(Bambi);


Guilfrido.comer();
Bambi.comer();