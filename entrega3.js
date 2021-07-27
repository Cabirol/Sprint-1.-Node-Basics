//Nivell 1, exercici 1 ***********************************************************************

let promesa_1 = new Promise(function(resolve, reject) {
	
	setTimeout(() => {				//simulem operació assíncrona amb un timeout
		let correcte = true;			//simulem que la operació ha anat bé amb true (o malament amb false)
      		if (correcte) {
        		resolve('Tot ha anat bé');
      		} else {
        		reject(new Error("Hi ha hagut un error"));
      		}
	}, 1000);
});

promesa_1.then(
  result => console.log(result), 
  error => console.log(error) 
);

//Nivell 1, exercici 2 ************************************************************************

var funció_1 = (paràmetre, callback) => {
	if (paràmetre == true){
		callback("És veritat");
	} else {
		callback("És mentida");
	}
}

funció_1(true, console.log);
funció_1(false , console.log);

//Nivell 2, exercici 1 **************************************************************************
