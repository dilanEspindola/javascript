/*let numero = parseInt(prompt("ingresa un numero positivo o uno negativo"));

if(numero >= 0){
document.write("Este numero es positivo " + numero);
} 
else if(numero < 0){
    document.write("El número " + numero +  " fue convertido a número positivo: " + Math.abs(numero));
}*/

/*let valorCompras = parseInt(prompt("Ingersa el valor total de tus compras"));

if(valorCompras >= 100000){
    document.write("El valor total a pagar es: " + valorCompras*0.50 + " con descuento del 50%");
}
else{
    document.write("El valor total a pagar es: " + valorCompras + " no hay descuento");
}*/

/*let valorCompras = parseInt(prompt("Ingersa el valor total de tus compras"));

if(valorCompras >= 100000){
    valorCompras = valorCompras*0.50;
    document.write("El valor total a pagar es: " + valorCompras + " con descuento del 50%");
}
else if(valorCompras < 100000){
    valorCompras = valorCompras*0.90;
    document.write("El valor total a pagar es: " + valorCompras + " con descuento del 10%");
}*/

/*let numero = parseInt(prompt("Ingresa un numero sea positivo o negativo"));

if(numero >= 0){
    document.write("Este numero es positivo " + numero);
}
else if(numero < 0){
    document.write("Este numero es negativo " + numero);
}*/

/*let num1 = parseInt(prompt("Ingresa un numero"));
let num2 = parseInt(prompt("Ingresa otro numero"));

if(num1 > num2){
    document.write("El primer numero es mayor " + num1);
}
else if(num2 > num1){
    document.write("El segundo numero es mayor " + num2);
}
else if (num1 == num2){
    document.write("ambos numeros son iguales " + num1 + ", " + num2);
}*/

/*let sueldo, añosAntiguedad, sueldoFinal;

sueldo = parseFloat(prompt("Ingresa el valor de tu sueldo"));
añosAntiguedad = parseInt(prompt("Ingresa los años de antiguedad"));

if(sueldo < 500 && añosAntiguedad >= 10 ){
    sueldoFinal = sueldo*0.20;
    document.write("El total de sueldo a pagar es: " + sueldoFinal);
}
else if(sueldo < 500 && añosAntiguedad < 10){
    sueldoFinal = sueldo*0.05;
    document.write("El total de sueldo a pagar es: " + sueldoFinal);
}
else if(sueldo >= 500){
    sueldoFinal = sueldo;
    document.write("El total sueldo a pagar es: " + sueldoFinal);
}*/
 
/*let opcion = parseInt(prompt("Eliga un numero entre el 1 al 4"));

switch(opcion){
    case 1:
        document.write("primavera");
    break;

    case 2:
        document.write("otoño");
    break;

    case 3:
        document.write("verano");
    break;

    case 4:
        document.write("invierno");
    break
    
    default: document.write("No hubo seleccion");
}*/

let menu, code, num1, num2, sum, res, mult, div, resp

num1 = parseInt(prompt("ingresa un numero"));
num2 = parseInt(prompt("ingresa otro numero"));

menu = "Que operacion desea realizar";
menu+= "1.+, "
menu+= "2.-, ";
menu+= "3.x, "
menu+= "4./";

code = parseInt(prompt(menu));

switch(code){
    case 1:
        sum = num1 + num2;
        resp = "La suma es: " +sum;
    break;

    case 2:
        res = num1 - num2;
        resp = "la resta es: " +res;
    break;

    case 3:
        mult = num1 * num2;
        resp = "la multiplicacion es: " +mult;        
    break;

    case 4:
        div = num1 / num2;
        resp = "la division es: " +div;
    break;
    
    default: document.write("no hubo seleccion");
}

document.write(resp);



