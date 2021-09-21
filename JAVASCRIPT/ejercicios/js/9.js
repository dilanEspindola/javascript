// Math.floor(Math.random() * (max - min + 1 ) + min); 
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function numeros_aleatorios()
{
    let mostrar_elementos = document.getElementById("elementos");    
    let opciones = "";

    mostrar_elementos.innerHTML = opciones;

    for(let i = 0; i < 10; i++)
    {
        mostrar_elementos.innerHTML += "<option>" + getRandomInt(1, 50) + "</option>";
    }   
}


