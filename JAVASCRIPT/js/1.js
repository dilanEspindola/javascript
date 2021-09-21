let nombre, horasTrabajadas, impuesto, sueldoNeto, sueldoBruto;

nombre = prompt("Ingresa tu nombre");
horasTrabajadas = prompt("Ingresa el numero de horas trabajas");
sueldoBruto = horasTrabajadas * 2000;
impuesto = sueldoBruto * 0.10;
sueldoTotal = sueldoBruto - impuesto;

alert("Hola " + nombre + " tu sueldo final es: " + sueldoTotal);





