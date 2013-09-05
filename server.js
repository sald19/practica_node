var http = require("http");
var url = require("url");

function iniciar (route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("peticion para " + pathname + " Recibida.");

		route(handle, pathname);

		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("Hola Mundo");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;