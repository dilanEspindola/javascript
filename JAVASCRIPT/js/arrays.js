/*let numeros = [654, 64, 680, 546, 1789, 1002];

/*for(var i = 0; i < numeros.length; i++){
    document.write("<br>" + i + ". " + numeros[i]);
}

numeros.forEach(function(numero){
    document.write("<br>" + numero);
})*/

let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];

//push();
    //añade un nuevo elemento al final del arreglo
//meses.push("julio");

//unshift();    
    //Añade un nuevo elemento al inicio del arreglo
//meses.unshift();

//pop();
    //elimina el ultimo elemento del arrelgo
//meses.pop();

//shift();
    //elimina el primer elemento del arreglo
//meses.shift();

//splice();
    //elimina un elemento del arreglo
//meses.splice(1,2);

meses.shift();

meses.forEach(mes => {
    if(mes == "enero"){
        alert("enero existe");        
    }else{
        alert("enero no existe");
    }
    
});

//CREA UN NUEVO ARREGLO CON LOS ELEMENTOS DEL ANTERIOR PERO AÑADIENDO UN NUEVO ELEMENTO AL NUEVO ARREGLO

let nuevoArreglo = [...meses, "julio"];

nuevoArreglo.forEach(arr => {
    document.write("<br>" + arr);
});

//OBJETOS CON ARRAY

/*let carrito = [
    {nombre: "monitor", precio: 350},
    {nombre: "celular", precio: 500},
    {nombre: "laptop", precio: 450}
]*/

