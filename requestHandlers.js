function iniciar () {
	console.log("Manipulador de peticion 'iniciar' ha sido llamado.");
	
	function sleep (milliSeconds) {
		// obtener la hora actual
		var startTime = new Date().getTime();
		// atasca la cpu
		while (new Date().getTime() < startTime + milliSeconds);
	}
	sleep(10000);
	return "Hola iniciar";
}

function subir () {
	console.log("Manipulador de peticion 'subir' ha sido llamado.");
	return "Hola subir";
}

exports.iniciar = iniciar;
exports.subir = subir;