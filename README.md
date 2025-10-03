# Repaso
alt z para ajuste de linea
ctrl ç para comentar

si vamos a hacer una web responsive el meta name tiene que estar 100%

en una lista li, si hago li*4 hace elementos dentro de la lista 
li*4
ul>li*4

MODELO DE CAJAS DE HTML Y CSS
Todos los elementos de HTML son cajas y estas tienen diferentes propiedades como padding, border y margin (contando desde dentro hacia fuera de la caja)

1rem = 16px

Selectores combinados de CSS;
header > p: esto seleccopna todos los elementos p que son hijos directos de header
header p: selecciona todos los p que son hijos de un header a cualquer nivel (puede haber un p dentro de un div)

efecto hover sobre cda opción del menú, cuando pase por encima, que se genere una cajita y cambie de color

Variables de css
Las declaramso al principio del css en la pseudo clase :root(), cuando las declaramos, los nombres tienen que empezar con --nombre-de-variable
LLamamos con la función var(--valor)

:first-child
:last-child
:nth-child(4)

seccion #prices
deben incluir un titulo del precio, el numero del precio, un icono y un botón

JS:
Es un lenguaje de programación, el más usado en el mundo. JS es el único lenguaje de programción que funciona en la parte del cliente (front-end). Es el único lenguaje de programación que entiende el navegador web, por otro lado es el único que ejecute el código de JS

Tenemos varias formas de cargar código de JS en nuestra web (dentor de los archivos de HTML).

Dentro del head del HTML (no es la mejor opción)

Enlazando el archivo de JS, dentro del elemento body, justo antes de que se cierre la segnda etiqueta del body (la forma buena)

Podemos cargar archivos propios o externos online de JS en nuestra web

Cuando escribimos codigo de JS, al final de linea debemos escribir siempre un ;

VARIABLES DE JS: son entidades que me permiten guardar valores

Cuando declaramos una variable por primera vez, debemos usar la palabra let(o var o constant).

Cuando llamamos a esa variable para usar el valor que guarda, solo escribimos su nombre

- var
- let 
- const

En var y let guardamos valores y los podemos modificar, en const pordemos guardar un valor pero no se puede modificar una vez asignado.

TIPOS DE DATOS DE JS:

- Texto (string) -> texto (letras), numeros, simbolos especiales, pero siempre de las comillas, las comillas pueden ser dobles o simples.

- Números (number) -> números sin comillas, para los números decimales se usa un punto.

Con estos números podemos realizar distintas operaciones:
- Suma -> +
- Resta -> - 
- Multiplicación -> *
- División -> /
- Módulo -> %


- Mayor que... -> (>)
- Menor que... -> (<)
- Mayor o igual que ... -> (>=)
- Menor o igual que ... -> (<=)
- Igual que ... -> (==)
- Totalmente igual ... -> (===) Es más escricto y se recomienda su uso para evitar errores.

Estas operaciones dan como resultado un tipo de dato especial que se llama boolean (true o false)

- Boolean (bool) -> true o false

- Arrays (lista) -> se trata de un tipo de dato complejo que me permite guardar una lista o colección de otros tipos de datos. Esto puede ser de un mismo tipo o de diferentes tipos. []

JS empieza a contar desde 0 

- Objeto (object): es un tipo de dato complejo que me permite guardar de forma ordenada (clave:valor) y acceder a estos datos una vez declarados. 

- null y undefined

## FUNCIONES/MÉTODOS DE JS

Las funciones o métodos son un conjunto de líneas de código que cumplen un trabajo determinado.

Las funciones trabajan como una "caja negra" cuando ya son funciones ya definidas del lenguaje, pero también tenemos la posibilidad de definir nuestras propias funciones. Podemos decir que tenemos dos tipos de funciones: 

- Las funciones de JS ya definidas dentro del propio código interno del lenguaje, las cuales podremos llamar y usar. Por ejemplo, las funciones alert() y log(), son funciones de este tipo que se conocen como built-in.

- Las funciones que nosotros mismos definimos en nuestro código. JS nos permite definir tantas funciones como queramos y usarlas tantas veces como necesitemos. 

Estas funciones se crean una sola vez en nuestro codigo y luego las podemos usar tantas veces como queramos.

Para crear y usar una función popia vamos a seguir estos pasos:
1. Declaramos la función propia con la palabara reservada: function 
2. Le damos un nombre a esta nueva función, el nombre lo decidimos nosotros y debe representar de forma clara y posible el trabjo que lleva a cabo dicha función. El nombre de esta función incluye al final y pegado unos parétesis. Detrás de los parétesis abrimos {}
3. Dentro de las llaves escribiremos el código interno de la función. 
4. Cuando queramos usar la función la llamaremos o invocaremos por su nombre.

Los datos pueden entrar dentro de una función como parámetros en los paréntesis. Los parámetros se introducen en la función en el momento de la llamada.

