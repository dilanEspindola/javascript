// this: hace referencia a la funcion en la que se esta llamando o a funcion que esta en un objeto

const reservacion = {
    nombre: 'andres',
    apellido: 'perez',
    total: 500,
    paagado: false,
    informacion: function(){
        console.log("el cliente: " + this.nombre);
    }
}

reservacion.informacion();
