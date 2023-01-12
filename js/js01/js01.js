console.log("Sesión js01");

/*Son 7 datos primitivos de JS
-string ("Hola mundo")
-number (18.22)
-bigint (1800n)
----let bigIntVar = BigInt(maxNumer);-----
boolean (true / flase)
undeifne ( undefined ) no se ha asignado el valor o no esta definido
null ---intencionalmente se borra el tipo de dato---
symbol

Otro tipo de datos objet: 
-Object
 let myObject = { clave: "valor"};
-Array []
-Functions
*/

let myObject = { clave: "valor", edad: 18, 5:10};
console.log(myObject.edad);
const propiedad = 'edad';
console.log(myObject[ propiedad ]);
console.log(myObject['5'])

//Conversiones de datos de string a number
/*
parseInt (solo toma  la parte entera)
parseFloat (toma decimales)
number ("12")
+'22'
"22"*1
*/

//Conversiones de datos numer a string

/*
(10).toString(base);

*/


