console.log("Mensaje desde el script externo");

function changeColor() {
    document.getElementById("demo").style.color = "blue";
}

function changeColorh2(reference, color) {
    console.log(reference);
    console.log(color);
    document.getElementById("color-h2").style.color = color;
    //reference.style.color= color;

}

function changeColorByClass(color) {
    const colection = document.getElementsByClassName("example");
    console.log(colection);
    for (let index = 0; index < colection.length; index++) {
      colection [index].style.color = color;
       
    }
}