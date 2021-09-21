function descargarClientes(){
    return new Promise((resolve) => {
        console.log('Descargando clientes espere...');

        setTimeout(() =>{
            resolve('Clientes descargados');
        }, 5000);        
    })
}

function descargarPedidos(){
    return new Promise((resolve) => {
        console.log('Descargando pedidos espere...');

        setTimeout(() => {
            resolve('Pedidos descargados');
        }, 3000);        
    });
}

async function getClientes(){
    try {
        /*const getResult = await descargarClientes();
        const getPedido = await descargarPedidos();
        console.log(getResult);        
        console.log(getPedido);*/
        const resultado = await Promise.all([descargarClientes(), descargarPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
getClientes();