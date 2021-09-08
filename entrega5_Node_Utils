//Nivell 1, Exercici 1**************************************

function exercici1(){
    setInterval(function(cadena) {
    console.log(cadena);
    }, 1000, "Ha passat un segon");
}

//exercici1()
  


//Nivell 1, Exercici 2 *************************************

fs = require('fs');

function crearFitxerNom(nom){
    fs.writeFile('nom_usuari.txt', nom, (err) => {
        if (err) return console.log(err);
        console.log("S'ha creat 'nom_usuari.txt'.");
    });
}

//crearFitxerNom("Daniel");

//Nivell 1, Exercici 3 *************************************

function llegirFitxer(nomFitxer){
    console.log(fs.readFileSync(nomFitxer, "utf8"));
}

//llegirFitxer("nom_usuari.txt");
