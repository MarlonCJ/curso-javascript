
// 🧠 TEMA 2: VARIABLES Y TIPOS DE DATOS

//📘 1. Explicación teórica

//Una variable es un espacio en la memoria donde guardamos información para usarla después.
//En JavaScript, las variables se crean con tres palabras clave:

// Palabra clave       Descripción

// var	                Antigua forma (ya casi no se usa).
// let	                Se usa para variables que pueden cambiar.
// const	            Se usa para valores que no cambian.

// Ejemplo:

let nombre = "Carlos";
const edad = 25;


// 👉 nombre puede cambiar.
// 👉 edad no debe cambiar.

// 🔢 2. Tipos de datos en JavaScript

// Tipo	        Ejemplo         Descripción

// String	        "Hola"	        Texto entre comillas.
// Number	        25, 3.14	    Números (enteros o decimales).
// Boolean	        true, false	    Verdadero o falso.
// Undefined	                    una variable sin valor.	
// Null	                            Valor vacío o nulo.	
// Object	                        { nombre: "Ana", edad: 22 }	Estructura con varios datos.
// Array	                        [1, 2, 3]	Lista de elementos.

// 3. Ejemplo simple

let nombre1 = "Juan";     // String
let edad2 = 20;           // Number
let estudiante = true;   // Boolean

console.log(nombre);
console.log(edad);
console.log(estudiante);


// Salida:

// Juan
// 20
// true

// 🧩 4. Mini ejercicio guiado

// 👉 Ejercicio:
// Crea variables que representen los siguientes datos y muéstralas en consola:

// Tu nombre
// Tu edad
// Si eres estudiante (true/false)

// Tu comida favorita

// Ejemplo guía:

let nombre3 = "Marlon";
let edad3 = 25;
let estudiante3 = true;
let comidaFavorita = "Pizza";

console.log(nombre3, edad3, estudiante3, comidaFavorita);

// 🧠 5. Ejercicios lógicos

// Declara dos variables numéricas (a y b), asígnales valores y muestra su suma.

let a = 30;
let b = 50;
console.log(a + b);


// Crea una variable ciudad sin asignarle valor y luego imprime su contenido.

let mensaje;
console.log(mensaje);

mensaje = "estamos aprendiendo";
console.log(mensaje);


// Declara una constante PI con el valor 3.1416 y muéstrala en consola.

const PI = 3.1416;
console.log(PI);


// 💻 6. Mini proyecto corto: “Ficha personal”

// Crea un pequeño programa que muestre tu ficha personal con tus datos básicos.
// Ejemplo:

// let nombre = "Marlon";
// let edad = 22;
// let profesion = "Estudiante de Ingeniería de Sistemas";
// let pais = "Colombia";

// console.log("=== FICHA PERSONAL ===");
// console.log("Nombre:", nombre);
// console.log("Edad:", edad);
// console.log("Profesión:", profesion);
// console.log("País:", pais);

// ------------------------------------

let nombre4 = 'juanito';
let edad4 = 56;
let profesion = 'ingeniero de sistemas';
let pais = 'peru';

console.log('Ficha Personal');
console.log('Nombre: ' + nombre4);
console.log('Apellido:' + edad4);
console.log('Profesion:' + profesion);
console.log('Pais: ' + pais);


// 🚀 7. Reto extra (opcional)

// Haz que el usuario ingrese sus datos con prompt() y muéstralos en consola con un mensaje amigable:

// let nombre = prompt("¿Cuál es tu nombre?");
// let edad = prompt("¿Cuántos años tienes?");
// let ciudad = prompt("¿En qué ciudad vives?");

// console.log(`Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}.`);

// ----------

let nombre5 = prompt('¿Cual es su nombre?');
let edad5 = prompt('¿Cual es su edad?');
let ciudad = prompt('¿Cual es su ciudad?');

alert(`Nombre: ${nombre5} Apellido: ${edad5} Ciudad: ${ciudad}`);