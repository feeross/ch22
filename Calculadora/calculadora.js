console.log("calculadora");

function suma() {  
  
  let x = document.getElementById("numberOne").value;  
  let y = document.getElementById("numberTwo").value; 

  let suma=parseFloat(x)+parseFloat(y);  
  let text= suma; 

  document.getElementById("sumando").innerHTML = text;  
}

function resta() {  
  
  let x = document.getElementById("numberOne").value;  
  let y = document.getElementById("numberTwo").value; 

  let resta=parseFloat(x)-parseFloat(y);  
  let text2= resta; 

  document.getElementById("sumando").innerHTML = text2;  
}


function producto () {

  let x = document.getElementById("numberOne").value;  
  let y = document.getElementById("numberTwo").value; 

  let producto=parseFloat(x) * parseFloat(y);  
  let text3= producto; 

  document.getElementById("multiplicando").innerHTML = text3;

}

function division () {

  let x = document.getElementById("numberOne").value;  
  let y = document.getElementById("numberTwo").value; 

  let division=parseFloat(x) / parseFloat(y);  
  let text4= division; 

  document.getElementById("dividiendo").innerHTML = text4;

}

//FUNCION FLECHA

const limpiarSuma = document.querySelector("#sumando"); //limpiamos el resultado de suma 
const botonLimpiarSuma = document.querySelector("#btnLimpiar");

botonLimpiarSuma.addEventListener("click", () => {
    limpiarSuma.innerHTML = "";
});

const limpiarResta = document.querySelector("#restando"); //limpiamos en resultado de resta
const botonLimpiarResta = document.querySelector("#btnLimpiar");

botonLimpiarResta.addEventListener("click", () => {
    limpiarResta.innerHTML = "";
});

const limpiarProducto = document.querySelector("#multiplicando"); //limpiamos el resultado del producto
const botonLimpiarProducto = document.querySelector("#btnLimpiar");

botonLimpiarProducto.addEventListener("click", () => {
    limpiarProducto.innerHTML = "";
});

const limpiarDivision = document.querySelector("#dividiendo"); //limpiamos el resultado de la division
const botonLimpiarDivision = document.querySelector("#btnLimpiar");

botonLimpiarDivision.addEventListener("click", () => {
    limpiarDivision.innerHTML = "";
});
