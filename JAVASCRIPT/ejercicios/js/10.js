function listaNombres(){
    let nombre = document.getElementById("nombre").value;
    let listar = document.getElementById("lista");
    let lista = [];

    lista.push(nombre);
    listar.innerHTML += "<li style='color:Red;'>" + lista + "</li>";
}