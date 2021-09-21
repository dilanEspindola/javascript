/*let total = 0;

function carritoCompra(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15
}

total = carritoCompra(120);
total = carritoCompra(300);
total = carritoCompra(80);

let valorTotal = calcularImpuesto(total);
console.log(valorTotal);
*/

class CallMethodPublic{

    publicMethod(){
        console.log("esto es un metodo publico");
    }

    static staticMethod(){
        console.log("Este es un metodo estatico");
    }    
}

CallMethodPublic.staticMethod();


let callMethod = new CallMethodPublic;
//callMethod.publicMethod();


