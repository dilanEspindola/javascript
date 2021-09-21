function numbers(){
    let num1 = document.getElementById("number-1").value;
    let num2 = document.getElementById("number-2").value;
    let array = document.getElementsByName("numbers");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    for(let i = 0; i < array.length; i++)
    {
        if(num1 > num2)
        {
            alert(num1 + " es mayor que " + num2);
            break;
        }
        else if(num1 == num2)
        {
            alert("el valor de los dos numeros es el mismo");
            break;
        }
        else
        {
            alert(num2 + " es mayor que " + num1);
            break;
        }
    }

    /*if(num1 > num2)
    {
        alert(num1 + " es mayor que " + num2);
    }
    else if(num1 == num2)
    {
        alert("los dos numeros tienen el mismo valor");
    }
    else
    {
        alert(num2 + " es mayor que " + num1);
    }*/
}


function max_min()
{
    let minimo = document.getElementById("numero-1").value;
    let maximo = document.getElementById("numero-2").value;        
    let mostrar = document.getElementById("mostar_numeros");
    let i;

    minimo = parseInt(minimo);
    maximo = parseInt(maximo);

    for(i = minimo; i <= maximo; i++)
    {
        if(i != maximo)
        {
            mostrar.innerHTML += i + ", ";            
        }                        
        if(i == maximo)
        {
            mostrar.innerHTML += i + ".";
        }        
    }
    if(minimo > maximo)
    {
        alert("no puedes asignar primero un numero maximo y despues un numero menor");
    }
}