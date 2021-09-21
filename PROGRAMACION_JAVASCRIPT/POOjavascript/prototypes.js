//crear funciones que solo se utilizan en un obejto en especifico
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const producto = new Producto("celular", 450);
const producto2 = new Producto("televisor", 700);

Producto.prototype.formatearProducto = function() {
    return ("El nombre del producto es: " + this.nombre + " y el precio es: " + this.precio);
}
console.log(producto.formatearProducto());


function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
const cliente = new Cliente("Juan", "Ortiz");

Cliente.prototype.formatearCliente = function() {
    return "el nombre del cliente es: " + this.nombre + " y su apellido es: " + this.apellido;
}
console.log(cliente.formatearCliente());

//46.800
//56.700
//37.900
//900
//total: 142.300