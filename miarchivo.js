

function calcularIMC(peso, estatura) {
    return parseInt(peso / (estatura * estatura));
}

let saludo = false;
while (saludo === false) {
    console.log("¡Hola!");
    saludo = confirm("Bienvenido, acepte para empezar");
    if (saludo === false) {
        break; // Si el usuario da clic en "Cancelar", se detiene el ciclo
    }
    continue;
}

const nombre = prompt("Ingrese su nombre");
let peso = parseFloat(prompt("Ingrese su peso en Kilos"));
let estatura = parseFloat(prompt("Ingrese su estatura en Metros"));
let sexo = prompt("Ingrese su sexo: f o m");

let resultadoIMC = calcularIMC(peso, estatura);

function imprimirResultadoIMC(nombre, resultadoIMC) {
    if (resultadoIMC < 20) {
        console.log(nombre + "," + " Tu índice de masa corporal es " + resultadoIMC + " = peso por debajo del normal");
    }
    else if (resultadoIMC >= 20 && resultadoIMC < 24) {
        console.log(nombre + "," + " Tu índice de masa corporal es " + resultadoIMC + " = peso normal");
        
    } else if (resultadoIMC >= 24 && resultadoIMC < 29) {
        console.log(nombre + "," + " Tu índice de masa corporal es " + resultadoIMC + " = peso superior al normal");
    }
    if (resultadoIMC > 29) {
        alert(nombre + "," + " Tu índice de masa corporal es " + resultadoIMC + " = Alerta de obesidad");
    }
}

if (sexo === "f") {
    imprimirResultadoIMC(nombre, resultadoIMC);
} else if (sexo === "m") {
    imprimirResultadoIMC(nombre, resultadoIMC);
}




