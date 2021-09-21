async function obtenerEmpleados() {
    
    const archivo = '/POOjavascript/empleados.json';
    fetch(archivo)
        /*.then(result => result.json())
        .then(data => {
            const { empleados } = data;
            
            empleados.forEach(empleado => {
                console.log(empleado.nombre);     
                document.querySelector('.text').textContent += empleado.nombre + " ";           
            });
        })*/

        const result = await fetch(archivo);
        const data = await result.json();
        console.log(result)
}
obtenerEmpleados();