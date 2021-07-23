//Nivell 1, exercici 1 ************************************************

console.log(
	( (num1, num2) => num1 + num2 )(2,3)
);

//Nivell 2, exercici 1 ************************************************

var Creaobjecte = valor => ({"Etiqueta":valor});

console.log(Creaobjecte("valorExemple"));

//Nivell 2, exercici 2 ************************************************

class Persona{
	constructor(nom){
		this.nom = nom;
	}
	dirNom(){
		console.log(this.nom);
	}
};

//Ara creem un element de la classe persona.

var personaExemple = new Persona("Daniel");

//I ara comprovem que el mètode funciona.

personaExemple.dirNom();

//Nivell 3, exercici 1 *************************************************

