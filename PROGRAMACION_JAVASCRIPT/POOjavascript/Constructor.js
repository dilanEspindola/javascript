//OBJECT LITERAL
const producto = {
    nombre: "celular",
    precio: 500
}

//OBJECT CONSTRUCTOR

function Producto(nombre, precio, disponibilidad){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponibilidad;
}

const producto2 = new Producto("monitor", 700, true);
const producto3 = new Producto("tablet", 250, false);
const producto4 = new Producto("celular", 420, true);
const producto5 = new Producto("televisor", 500, false);

console.log(producto2);
console.log(producto3);s
console.log(producto4);
console.log(producto5);