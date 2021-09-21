//Metodos de propiedad son funciones disfradas de metodos 
const reproductor = {
    reproducir: (id, nombre) => {
        console.log("Reproduciendo cancion con id: " + id + " y nombre: " + nombre);
    } 
}

reproductor.reproducir(12, "NEFFEX-Grateful");

//arrow functions: 
const numeros = (n1, n2) => {
    if(n1 > n2){
        return (n1 + " es mayor que " + n2);
    }
    else{
        return (n2 + " es mayor que " + n1);
    }
}

let res = numeros(56,123);
console.log(res);

