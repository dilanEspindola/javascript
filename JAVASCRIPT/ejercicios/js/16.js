var fechas = [];

function añadirFecha(){
    /*let addDate = document.getElementById("fecha").value;
     if(addDate !== ""){
        fechas.push(new Date(addDate));
        alert("se añadio una fecha");
     }else{
         alert("no se ha añadido ninguna fecha");
     }*/

     const form = document.forms["formFechas"];
     const fecha = form.fecha.value;

     if(fecha !== ""){
        fechas.push(new Date(fecha));
        fechas.sort((a, b) => a - b);
        alert("Se ha añadido una fecha")
     }else{
         alert("No se ha añadido ninguna fecha");
     }
}

function mostrarResultados(){
    let etiqnumFechas = document.getElementById("numFechas");
    let etiqfechaMenor = document.getElementById("fechaMenor");
    let etiqfechaMayor = document.getElementById("fechaMayor");
    let etiqmostrarFechas = document.getElementById("fechasAñadidas");
    
    for(let i = 0; i < fechas.length; i++){
        etiqnumFechas.innerHTML = i + 1;
        etiqfechaMenor.innerHTML = fechas[0];
        etiqfechaMayor.innerHTML = fechas[fechas.length - 1];
        etiqmostrarFechas.innerHTML += "<li>" + fechas[i] + "</li>";
    }
}