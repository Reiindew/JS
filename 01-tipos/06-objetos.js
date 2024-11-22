//tipo de referencia, es decir, te la una ubicacion objetiva de donde esta realmente es archivo
/**
 * ademas de una agrupacion de datos que tiene sentido tener juntos, como por ejemplo: 
 * lapiz: color, longitud, fabricante, peso.
*/ 

//personaje de TV
let nombre = "Tanjiro";
let anime = "Semon slayer";
let edad = 16;

//obejeto literal
let personaje = { 
    nombre: "Tanjiro" ,
    anime: "Demon Slayer",
    edad: 16,
}

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

let llave ='edad';
personaje[llave] = 16;

delete personaje.anime;

console.log(personaje);