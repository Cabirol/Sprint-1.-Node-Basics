//Nivell 1, Exercici 1**************************************

function exercici1(){
    setInterval(function(cadena) {
    console.log(cadena);
    }, 1000, "Ha passat un segon");
}

//Nivell 1, Exercici 2 *************************************

const fs = require('fs');

function escriureFrase(_frase){
    fs.appendFile('fitxer_exemple.txt', _frase, (err) => {
        if (err) return console.log(err);
        console.log(`S'ha escrit: "${_frase}" a 'fitxer_exemple.txt'.`);
    });
}
//escriureFrase("Bon dia pel dematí.");
//Nivell 1, Exercici 3 *************************************

function llegirFitxer(nomFitxer){
    console.log(fs.readFileSync(nomFitxer, "utf8"));
}
llegirFitxer('fitxer_exemple.txt');
//Nivell 2, Exercici 1 *************************************

//Crea una funció que comprimeixi el fitxer del nivell 1.
/*const zlib = require('zlib');

const gzip = zlib.createGzip();*/

/*Crea una funció que llisti per la consola
el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.*/
