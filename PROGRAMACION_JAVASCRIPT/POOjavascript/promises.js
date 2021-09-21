//Promises
//TRES VALORES POSIBLES: pending, fulfilled, rejeted.

let promise = new Promise((resolve, reject  ) => {
    const x = "hola";
    const y = "hola"

    if(x != y){
        resolve("OK!");
    }else{
        reject(":(");
    }
});

promise.then(successMesage => console.log(successMesage)).catch(error => console.log(error))

