// const name = require('./math.js'); SIRVE PARA IMPORTAR OTRO ARCHIVO JS A EL INDEX
const math = require('./math.js');
const personas = require('./personas.js');
const saludar = require('./saludar.js');

//console.log(math.add(1,2));
//console.log(math.dividir(20,6));
/*
let saludo = math.saludo("dilan");
console.log(saludo);
*/

/*let persona1 = personas.arregloPersonas("javier", 19);
let persona2 = personas.arregloPersonas("andres", 31);
let persona3 = personas.arregloPersonas("sofia", 20);*/
console.log(personas.arregloPersonas("javier", 19));
console.log(personas.arregloPersonas("laura", 28));
console.log(personas.arregloPersonas("juan", 25));

console.log(saludar.saludar("dilan"));