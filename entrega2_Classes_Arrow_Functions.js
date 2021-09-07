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
		throw new Error("Abstract Method has no implementation");
	}
}

class Artifact extends MtgCard{

	info(){
		console.log(`${this.nom} is a ${this.color} artifact with cmc of ${this.cmc}.`);
	}
}

class Creature extends MtgCard{
	constructor(nom, cmc, color, power, toughness){
		super(nom, cmc, color);
		this.power = power;
		this.toughness = toughness;
	}

	info(){
		console.log(`${this.nom} is a ${this.power}/${this.toughness} ${this.color} creature with cmc of ${this.cmc}.`);
	}
}

class Land extends MtgCard{
	constructor(nom, cmc, color){
		super(nom, cmc, color);
		this.cmc = 0;
		this.color = "colorless";
	}

	info(){
		console.log(`${this.nom} is a land.`)
	}
}

//Exemples:

//var carta_0 = new MtgCard();    <--Dona error al ser implementat.

var carta_1 = new Artifact("Black Lotus", 0, "colorless");
carta_1.info();

var carta_2 = new Creature("Snapcaster Mage", 2, "blue", 2, 1);
carta_2.info();

var carta_3 = new Land("Plains");
carta_3.info();
