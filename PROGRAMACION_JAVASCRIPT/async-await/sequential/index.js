const { taskOne, taskTwo} = require('./tasks.js');

async function main(){
    console.time('measure time');
    //ESTO ES EJECUTA DE MANERA PARALELA
    const results = await Promise.all([taskOne(), taskTwo()]);
    console.timeEnd('measure time');

    //EJECUTA DE MANERA SEQUENCIAL
    /*
    const value1 = await taskOne();
    const value2 = await taskTwo();
    */

    console.log('Task one: ', results[0]);
    console.log('task two: ', results[1]);
}

main();