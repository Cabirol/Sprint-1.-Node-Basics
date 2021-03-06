//Nivell 1, exercici 1 ****************************************************************************************************

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

let getSalary = employee_object => new Promise (function(resolve, reject) {									
	for (var i=0; i<salaries.length; i++) {
		if (salaries[i].id == employee_object.id) resolve (salaries[i].salary);
	}
	reject(new Error("No s'ha trobat aquest objecte d'Empleat"));
});

//Nivell 1, exercici 2 ***********************************************************************************

async function llista(id){
    let result = await getEmployee(id);
    console.log(result.name);

    result = await getSalary(result);
    console.log(result);
}

//Nivell 2 Exercici 1 *************************************************************

async function principal(_parametre){
    let result = await auxiliar(_parametre);
    console.log(result);
}

function auxiliar(_parametre){
    return new Promise((resolve, reject) => {
        setTimeout(_aux => {
            if (_aux == true) resolve("fet");
            reject(new Error ("Hi ha hagut un error"));
        }, 2000, _parametre);
    });
}

//Nivell 3 Exercici 1 **************************************************************

llista(4).catch(error => console.log(error.message));
principal(false).catch(error => console.log(error.message));