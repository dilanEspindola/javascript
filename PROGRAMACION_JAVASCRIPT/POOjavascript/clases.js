class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    
    nombreProducto(){
        return "Producto: " + this.nombre;
    }

    retornarPrecio(){
        return "Precio: " + this.precio;
    }

    descuentoProducto(){
        if(this.precio <= 500){            
            setTimeout(this.mensaje, 2000);            
        }        
        return "Descuento del 50%, total a pagar: " + (this.precio * 50) / 100;
    }

    mensaje(){
        alert("OK!");
    }
}

let producto = new Producto("celular", 200);
document.write(producto.nombreProducto() + "<br>");
document.write(producto.retornarPrecio() + "<br>");
document.write(producto.descuentoProducto() + "<br>");

let producto2 = new Producto("laptop", 900);
document.write(producto2.nombreProducto() + "<br>");
document.write(producto2.retornarPrecio() + "<br>");
document.write(producto2.descuentoProducto() + "<br>");