const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    
    async taskOne(){
        //throw new Error("some problem");
        await sleep(4000);
        return ('VALUE 1');
    },

    async taskTwo(){
        //throw new Error("some problem");
        await sleep(2000);
        return ('VALUE 2');
    }

}