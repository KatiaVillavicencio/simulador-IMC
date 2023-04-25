
//const Nombre = " "

//for (let i = 0; i<=1; i ++){
//let  = (prompt ("Ingrese un nombre"));
//if (NombreUsuario == Nombre !=  Nombre){
// prompt ("Bienvenido" + Nombre)}//
//}/



let saludo = false
while (saludo === false) {
    console.log("¡Hola!")
    saludo = confirm("Bienvenido, acepte para empezar")
    
    continue;
}


const nombre = prompt("Ingrese su nombre");

let peso = parseFloat(prompt("Ingrese su peso en Kilos"));

let estatura = parseFloat(prompt("Ingrese su estatura en Metros"));

let sexo = prompt("Ingrese su sexo: f o m")

let resultadoIMC = parseInt(peso / (estatura * estatura));


switch (sexo) {

    case "f":

        if (resultadoIMC < 20) {
            console.log(nombre + "," + " Tu índice de masa corporal es " + resultadoIMC + " = peso por debajo del normal");
        }
        else if (resultadoIMC >= 20 && resultadoIMC < 24) {
            console.log(nombre + "," + " Tu índice de masa corporal es " + resultadoIMC + " = peso normal");
        }
        else if (resultadoIMC >= 24 && resultadoIMC < 29) {
            console.log(nombre + "," + " Tu índice de masa corporal es " + resultadoIMC + " = peso superior al normal");
        }
        if (resultadoIMC > 29) {
            alert(nombre + "," + " Tu índice de masa corporal es " + resultadoIMC + " = Alerta de obesidad");
        }

        break;

    case "m":

        if (resultadoIMC < 21) {
            console.log(nombre + "," + " Tu índice de masa corporal es " + resultadoIMC + " = peso por debajo del normal");
        }
        else if (resultadoIMC >= 21 && resultadoIMC < 25) {
            console.log(nombre + "," + " Tu índice de masa corporal es " + resultadoIMC + " = peso normal");
        }
        else if (resultadoIMC >= 25 && resultadoIMC < 30) {
            console.log(nombre + "," + " Tu índice de masa corporal es " + resultadoIMC + " = peso superior al normal");
        }
        if (resultadoIMC > 30) {
            alert(nombre + "," + " Tu índice de masa corporal es " + resultadoIMC + " = Alerta de obesidad");
        }

        break;
}



