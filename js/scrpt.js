// Para comprobar si hemos enlazado bien el archivo de JS, podemos usar la función console.log();
console.log("Hola que tal, esto es una prueba de JS");

// SINTAXIS DE JS
// Suelen ser lineas cortas que terminan en ;

//TIPOS DE DATOS EN JS Y VARIABLES

//Definimos una variable
let name = "Jaime";
let date = "2 de Octubre de 2025";

let price_01 = 2;
let price_02 = 1.5;

price_01 = 5;

let total_price = price_01 + price_02;

//Con esta función podemos ver el valor que hemos guardado en una variable
console.log(total_price);

//Declarar tres varaibles y realizar resta, multiplicación y divisón 

let total_price2 = price_01 - price_02;
console.log(total_price2);

let total_price3 = price_01 * price_02;
console.log(total_price3);

let total_price4 = price_01 % price_02;
console.log(total_price4);

//JS me permite hacer cosas un poco raras

let test = name + price_01;
console.log(test);

//Una situación normal en JS
let first_name = "Jaime";
let last_name = "Amaya";

let full_name = first_name + " " + last_name;
console.log(full_name);


//Compración
console.log(price_01 > price_02);
console.log(price_01 < price_02);
let num1 = 3;
let num2 = "3";
console.log(num1 == num2);
console.log(num1 === num2);


//Ejemplo de arrays

let arr_animals = ["cat", "dog", "cow", 7];

console.log(arr_animals[1]);

//Ejemplo de objeto de JS

let user154 = {
    name: "Jaime",
    last_name: "Amaya",
    age: 37,
    location: "Madrid",
    is_driver: true
};

let product174 = {
    name: "T-shirt",
    style: "Long",
    color: ["#FFFFFF", "#000000", "#FF5733"],
};

console.log(user154); //Accedemos a todo el objeto
console.log(user154.last_name); //Accedemos a una propiedad concreta del objeto

//La función de uilidad alert(), crea una ventana en el navegador con un mensaje
// alert("Hola, soy un mensaje");
console.log("Último log");
// let username = window.prompt("¿Cómo te llamas?");
// alert("Hola, " + username);

//Funciones propias de JS

let porduct01 = 12.99;
let porduct02 = 4.50;
let porduct03 = 23.77;
let porduct04 = 0.99;

//DECLARACIÓN DE LA FUNCIÓN
function calcTotal(param1, param2) {
    // console.log("Este código está dentro de una función");

    let total_price = param1 + param2;
    console.log("El precio total es: " + total_price);
}

//LLAMADA A LA FUNCIÓN
calcTotal(porduct01, porduct02);
calcTotal(porduct02, porduct03);
calcTotal(porduct03, porduct04);

// function greeting() {
//     console.log("Hola caraculo");
// }

//Crear una función que se llame GreatUser() que haga dos cosas:
//1. Pregunte el nombre del usuario (y guardar la respuesta)
//2. Mostrar el nombre de usuario con un saludito en un poop-up
function greeting() {
    let username = window.prompt("¿Cómo te llamas?");
    alert("Hola " + username);
    console.log(username);
    
}

//Desde nuestro archivo de JS, podemos usar varias funciones de built-in para seleccionar uno o varios elementos del HTML 

//El selector de JS que más vamos a usar es este:

let btn = document.querySelector('p');
console.log(btn);

//console.log(docuemnt);

//Para hacer referencia al documento de HTML, llamaremos a la variable "document". Esta variable ya está definida, no es necesario que la creemos nosotros y guarda en su interior todo tipo de HTML.

//Cuando quiero seleccionar solo un elemento usaré la función querySelector(); y si queremos seleccionar varios elementos usaremos querySelectorAll();

