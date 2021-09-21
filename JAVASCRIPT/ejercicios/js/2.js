let num1 = parseInt(prompt("ingresa otro numero"));
let num2 = parseInt(prompt("ingresa otro numero"));
let num3 = parseInt(prompt("ingresa otro numero"));

if ((num1 > num2) && (num1 > num3))
{
    document.write(num1 + "(primer numero) es el mayor de los 3 numeros");
}
else if ((num2 > num1) && (num2 > num3))
{
    document.write(num2 + "(segundo numero) es el mayor de los 3 numeros");
}
else if ((num1 == num2) && (num1 == num3) && (num2 == num3))
{
    document.write("Escibiste los mismos numeros");
}
else
{
    document.write(num3 + "(tercer numero) es el mayor de los 3 numeros");
}

document.write("<br>" + "numeros ingresados: " + num1 + ", " + num2 + ", " + num3);