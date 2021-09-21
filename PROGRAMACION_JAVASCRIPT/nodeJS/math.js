function add(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2
}

function divide(num1, num2){
    if(num2 == 0){
        console.log("no se puede dividir entre 0")
    }
    else{
        return num1 / num2;
    }
}

//Se debe exportar con una palabra reservada q almacena la funcion 
//EXPORTA UNA PROPIEDAD DE UN OBJETO
exports.add = add;
exports.dividir = divide;

/*name.add = add;
module.exports = name;*/
//EXPORTA YA SEA UNA VARIABLE, CONSTANTE, OBJETO ETC

