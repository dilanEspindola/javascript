function calcular() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operador = document.getElementById("operador").value;
    let mostrarResultado = document.getElementById("mostrarSuma");
    let resultado;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if((operador == "") && (isNaN(num1) && (isNaN(num2)))){
        alert("los campos no pueden estar vacios");
    }
    else if(isNaN(num1) && isNaN(num2)){
        alert("los campos no pueden estar vacios");
    }
    else if(operador == "+" || operador == "suma"){        
        resultado = num1 + num2;
        mostrarResultado.innerHTML = "el resultado es: " + resultado; 
    }
    else if(operador == "-" || operador == "resta"){        
        resultado = num1 - num2;
        mostrarResultado.innerHTML = "el resultado es: " + resultado;
    }
    else if(operador == "*" || operador == "multiplicacion"){        
        resultado = num1 * num2;
        mostrarResultado.innerHTML = "el resultado es: " + resultado;
    }
    else if(operador == "/" || operador == "division"){        
        resultado = num1 / num2;
        mostrarResultado.innerHTML = "el resultado es: " + resultado;
    }
    else if(operador != "+" || operador != "suma"){
        alert("no ingresaste una opcion correcta");
    }
    else if(operador != "-" || operador != "resta"){
        alert("no ingresaste una opcion correcta");
    }
    else if(operador != "*" || operador != "multiplicacion"){
        alert("no ingresaste una opcion correcta");
    }
    else if(operador != "/" || operador != "division"){
        alert("no ingresaste una opcion correcta");
    }    
}