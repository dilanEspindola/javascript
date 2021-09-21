//funcion que lista nombres ingresados en un input
function lista_nombres(e) {
    e.preventDefault(); 

    let nombre = document.getElementById("nombre").value;
    let mostrarLista = document.getElementById("lista-nombres");
    let arrayNombres = [];

    arrayNombres.push(nombre);

    if(nombre == ""){
        alert("el campo no puede estar vacio");
    }    
    else{
        mostrarLista.innerHTML += "<li>" + arrayNombres + "</li>";
    }  
} 