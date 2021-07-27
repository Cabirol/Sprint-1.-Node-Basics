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

//Nivell 2, exercici 1 *****************************************************************************************************

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


let getEmployee = id_employee => (					//aquesta és la funció fletxa que al rebre un id...
	new Promise ( function(resolve, reject) {			//...retorna un objecte promesa...
  		setTimeout(() => resolve(				//...mitjançant un timeout per fer veure que triga una mica...
			( (arr, value) => {				//...i aquí s'executa la promesa (busca l'objecte dins d'un array (employees) a partir del seu id).
  				for (var i=0; i<arr.length; i++) {
					if (arr[i].id == value) return arr[i];
				}
			})(employees, id_employee)
		), 1000);
	})
);

/*
getEmployee(1).then(							//un exemple per veure que getEmployee funciona. 
  result => console.log(result), 
  error => console.log(error) 
);
*/

//Nivell 2, exercici 2 **********************************************************************************************

let getSalary = employee_object => (					//aquesta és la funció fletxa que al rebre un objecte de employees...
	new Promise ( function(resolve, reject) {			//...retorna un objecte promesa...
  		setTimeout(() => resolve(				//...mitjançant un timeout per fer veure que triga una mica...
			( (arr, obj) => {				//...i aquí s'executa la promesa (busca la propietat salary igualant l'id de salaries amb el de employees).
  				for (var i=0; i<arr.length; i++) {
					if (arr[i].id == obj.id) return arr[i].salary;
				}
			})(salaries, employee_object)
		), 1000);
	})
);

/*
getSalary(employees[0]).then(							//un exemple per veure que getSalary funciona.
  result => console.log(result), 
  error => console.log(error) 
);
*/

//Nivell 2, exercici 3 ************************************************************************************************

getEmployee(1).then(
		result => getSalary(result).then(
			result => console.log(result)
		)
);

//Nivell 3, exercici 1 ************************************************************************************************

