let numeros = [45, 25, 100];
let dias = ["lunes", "martes", "miercoles", "jueves"];

for(let i = 0; i < numeros.length; i++){
    let recorrer = numeros[i];
    switch(recorrer){
        case 45:                        
            alert("it works");
        break;
        default:
            alert("nada");
        break;
    }
}

/*let mes = "abril";

switch(mes){
    case 'abril':
        alert("abril");
        break;
    default:
        alert("no mes");
        break;
}*/
