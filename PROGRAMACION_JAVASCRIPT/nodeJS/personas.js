function objetos(name, age){    
    let personas = [
        {nombre: name, edad: age}        
    ];
    /*for(let i = 0; i < personas.length; i++){
        return personas[i];
    }*/
    personas.forEach(persona => console.log(persona));
}
exports.arregloPersonas = objetos;