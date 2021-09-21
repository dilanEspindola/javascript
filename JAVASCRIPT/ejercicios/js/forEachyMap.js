const carrito = [
    {nombre: "televisor", precio: 300},
    {nombre: "tablet", precio: 500},
    {nombre: "celular", precio: 250},
    {nombre: "laptop", precio: 450}
]

//foreach
carrito.forEach(producto => console.log(producto.nombre));

//map: 
const arr2 = carrito.map(producto => producto.nombre);

//console.log(arr1); // retorna undefined
console.log (arr2); // retorna nuevo arreglo(nombre)

/* nota: cuando quiertas iterar sobre un arreglo y mostrar los elemtnos puedes usar for each
    para crear nuyevo arreglo usar map con each mnda undefined
*/