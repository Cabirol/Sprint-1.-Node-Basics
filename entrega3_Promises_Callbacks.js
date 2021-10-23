//Nivell 1, exercici 1 ***********************************************************************

var funcio_1 = parametre_1 => {
    return new Promise(function(resolve, reject) {
      		if (parametre_1 == true) {
        		resolve('Tot ha anat bé');
      		} else {
        		reject(new Error("Hi ha hagut un error"));
      		}
    });
}

funcio_1(true)
    .then(res => console.log(res))
    .catch(err => console.log(err.message));

funcio_1(false)
	.then(res => console.log(res))
	.catch(err => console.log(err.message));

//Nivell 1, exercici 2 ************************************************************************

var funció_2 = (paràmetre_2, callback) => {
	if (paràmetre_2 == true){
		callback("És veritat");
	} else {
		callback("És mentida");
	}
}

funció_2(true, console.log);
funció_2(false , console.log);

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

let getEmployee = id_employee => new Promise (function(resolve, reject) {			
	for (var i=0; i<employees.length; i++) {
		if (employees[i].id == id_employee) resolve (employees[i]);
	}
	reject(new Error("No s'ha trobat cap empleat amb aquest id."));
});

//Nivell 2, exercici 2 **********************************************************************************************

let getSalary = employee_object => new Promise (function(resolve, reject) {									
	for (var i=0; i<salaries.length; i++) {
		if (salaries[i].id == employee_object.id) resolve (salaries[i].salary);
	}
	reject(new Error("No s'ha trobat aquest objecte d'Empleat"));
});

//Nivell 2, exercici 3 ************************************************************************************************

getEmployee(1)
	.then(result => getSalary(result))
	.then(result => console.log(result));

//Nivell 3, exercici 1 ************************************************************************************************

getEmployee(4)
	.then(resolve => getSalary(resolve))
	.then(resolve => console.log(resolve))
	.catch(error => console.log(error));
