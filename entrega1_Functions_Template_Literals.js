//Nivell 1, exerici 1 **********************************************

function ImprimirNom(nom){
	console.log(nom);
}

let nomUsuari = 'Daniel';
ImprimirNom(nomUsuari);

//Nivell 2, exercici 1 **********************************************

let cognom1 = "López",
    cognom2 = "Acevedo";

console.log(`El meu nom és ${nomUsuari} ${cognom1} ${cognom2}.`);

//Nivell 2, exercici 2 ************************************************

//Se'ns demana: 
//Invocar la funció mitjançant template literals.
//Quina funció?

function ElMeuNom(nom, cognom1, cognom2){
		return `El meu nom és ${nom} ${cognom1} ${cognom2}.`;
}

console.log(`${ElMeuNom(nomUsuari, cognom1, cognom2)}`);

//Nivell 3, exercici 1 *************************************************

var matriu = new Array(10);

for(var i = 0; i<matriu.length; i++){
	matriu[i] = function() {
		for (var j = 0; j<10; j++){
			console.log(j);
		}
	}
}

for(i = 0; i<matriu.length; i++){
	matriu[i]();
}

//Nivell 3, exercici 2 *************************************************

var imprimirNom2 = (function(nom){
	console.log(nom);
})(nomUsuari);
