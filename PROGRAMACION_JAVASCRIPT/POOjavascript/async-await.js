//Async - await

/*
function descargarClientes(){
    return new Promise( resolve => {
        console.log("descargando clientes...");

        setTimeout(() => {
            resolve("Clientes ha sido descargado");
        }, 3000)
    });
}

async function app(){
    try {
        const respuesta = await descargarClientes();
    } catch (error) {
        console.log(error);
    }
}*/

function suma(){
    return new Promise((resolve, reject) => {
        console.log('Loading resultado...');
        let a,b, res;
        if(res === 0){
            reject(new Error('Ha ocurrido un error'));
        }
        else{
            setTimeout(() => {
                a = 2;
                b = 2;
                res = a+b;
                resolve(res);
            }, 5000);
        }           
    });
}

const getData = async () => {
    try {
        const getResult = await suma();
        console.log(getResult);
    } catch (error) {
        console.log(error);
    } 
};
getData();