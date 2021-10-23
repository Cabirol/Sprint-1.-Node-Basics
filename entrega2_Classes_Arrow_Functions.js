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

class MtgCard{
	constructor(nom, cmc, color){
		this.nom = nom;
		this.cmc = cmc;
		this.color = color;
		if(this.constructor == MtgCard){
			throw new Error(" Object of Abstract Class cannot be created");
			}	
	}

	info(){
		console.log(`Aquesta carta és un ${this.nom}, amb mana value ${this.cmc} i de color ${this.color}`);
	}
}

function creacioCartes(_nom, _cmc, _color){
	return Object.create(MtgCard.prototype, {
		"nom" : {value: _nom},
		"cmc":{value: _cmc},
		"color":{value: _color}
	});
}

carta_1 = creacioCartes("Black Lotus", 0, "incolor");
carta_1.info();

carta_2 = creacioCartes("Snapcaster Mage", 2, "blau");
carta_2.info();

carta_3 = creacioCartes("Path to Exile", 1, "blanc");
carta_3.info();