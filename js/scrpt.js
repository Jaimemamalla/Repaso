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


