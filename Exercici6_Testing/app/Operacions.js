function sumar(){
    let suma = 0;
    for (let i=0; i<arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

function restar(minuend, substraend){
    return minuend - substraend;
}


function multiplicar(){
    let mult = 1;
    for (let i=0; i<arguments.length; i++){
        mult *= arguments[i];
    }
    return mult;
}

function dividir(dividend, divisor){
    return dividend/divisor;
}

module.exports = {sumar, restar, multiplicar, dividir};