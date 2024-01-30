const http = require('http')

function index(request, response) {
    response.writeHead(200)
    response.end('Hello world')
}

http.createServer(function (request, response ) {
    if (request.url === '/') {
        return index(request,response)
    }

    // http.STATUS_CODES[404], envia a resposta no front de acordo ao seu status code

    response.writeHead(404)
    response.end(http.STATUS_CODES[201])
}).listen(1337, ()=> console.log('batendo na porta 1337'))