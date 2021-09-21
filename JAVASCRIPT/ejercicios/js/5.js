//function that shows the option selected
function muestraOpcion()
{
    let opciones = document.getElementsByName("ans");    
    let btn1, btn2, btn3, i;
    btn1 = document.getElementById("btn-1");
    btn2 = document.getElementById("btn-2");
    btn3 = document.getElementById("btn-3");

    console.log(opciones);

    for(i=0; i < opciones.length; i++)
    {        
        if(btn1.checked)
        {
            alert(opciones[i].value);
            break;
        }
        else if(btn2.checked)
        {
            alert(opciones[i + 1].value);
            break;
        }
        else if(btn3.checked)
        {
            alert(opciones[i + 2].value);
            break;
        }
    }
}