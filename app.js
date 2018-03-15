var http = require('http');
var fs = require('fs');

var requisicao = function(request, response){
    fs.readFile(__dirname + "/index.html",function(err, data){
        response.writeHead(200, { "Content-Type": "text/html"});
        response.end(data);
    });
};

var server = http.createServer(requisicao);
var resultado = function(){
    console.log("Servidor no ar");
};
server.listen(3000, resultado);