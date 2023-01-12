console.log("Sesión JS02");

/*
function declaretion / function statment

una caracteristicas de estas funciones es que tienen hoisting (elevacion).

*/

function product(a, b) {
    return a * b;

}
console.log( ("El resultado de 5 * 10 = " + product(5,10) ) );


/*
Functions expressions

Son funciones que son declaradas dentro de la asignacion de una variable.
Pueden s er anonimas (no tienen nombre) y no tienen hosting

*/
/**
 * Suma dos valores
 * @param {number} a primer operador para sumar
 * @param {number} b segundo operador para sumar 
 * @returns resultado de a+b 
 */
const suma = function ( a, b) {
    const result = a + b;
    return result;

};

console.log("La sumatoria de 4 + 6 = " + suma (4, 6) );

/*

Funciones autoinvocadas (delft-invoking functions) 
Son funciones que se ejecutan en su definicion.
Pueden ser anónimas

*/

(function saludo() {
    console.log("Hola me estoy autoinvocando");
} ) (); //los parentesis al final invocan a la funcion (que esta dentro de los parentesis)

/*
Arrow functions
Son similares a las funciones expresadas pero no requieren la palabra function. Ademas, si solo tiene una instruccion y es el retorno no requiere la instruccion return ni las llaves {}  

*/

/* const restaExpresada= function (a, b) {
    return a-b;
} 
*/

const resta = (a, b) => a-b;
console.log("La resta de 20 -2 = " + resta(20,2) );

const exponente = (a, b) => a**b;
console.log( "El exponente de 4^3 = " + exponente(4,3) );

const exponenteAlCuadrado = (a) => a ** 2;
console.log( "El numero 4^2 = " + exponenteAlCuadrado(4) );

const imprimeSaludo = () => console.log("Holi crayoli");
imprimeSaludo();

/*
Funciones con parametros inicializados 

*/

function divide(a, b=1) {
    return a/b;
}

console.log( "La división de 3/1 = " +  divide(3) );

/*
Rest parameters
Este parametro nos permite representar una serie de valores indefinidos en los argumentos como un array.

*/

function sumatoriaIndefinida(a , b, ...restoDatos) {
    let sumatoria = a+b;
    for (let i = 0; i < restoDatos.length; i++) {
        sumatoria += restoDatos [i]; //sumatoria + resto de datos
        
    }
    return sumatoria;
}

console.log( "Sumar varios numeros:  " + sumatoriaIndefinida(2, 3, 5, 10, 11) );

/*
Funcion recursiva
Funcion que se llama a si misma
debe haber una condicion que detenga la recursion 
*/

function factorialConRecursion ( a ) {
    if( a < 1) return 1;
    return a * factorialConRecursion (a - 1)
}
console.log( "El factorial de 3 = " + factorialConRecursion(3) );
 
//hacer una recursion que muestre en consola un saludo

function saludo( cantidad, iteracion=1 ) {
    console.log( "saludo " + iteracion);
    if (iteracion >= cantidad)
    return 1;
    return saludo (cantidad, iteracion + 1);

}
saludo (2);

