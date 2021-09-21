function server(){
    let http = require('http');
    let server = http.createServer((request, response) => {
        response.writeHead(200, {'Context-Type':'text/html; charset=UTF-8'});
        response.end('<h1>Todo OK!</h1>');
    })

    server.listen(7070, '127.0.0.1');
    return ("servidor inciado");
}
exports.servidor = server;