//function that shows the text in the div created
function add_text()
{
     let input_txt = document.getElementById("txt");
     let mostar_txt = document.getElementById("mostrarTexto");

     mostar_txt.innerHTML += input_txt.value + " ";
}

//function that adds two numbers and show the result in  thbe div created
function sumar()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let mostar_resultado = document.getElementById("resultado");
    let resultado_suma;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    resultado_suma = num1 + num2;
    mostar_resultado.innerHTML = "El resultado de la suma es: " + resultado_suma;
}