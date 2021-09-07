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

let getEmployee = id_employee => (					
	new Promise ( function(resolve, reject) {			
  		for (var i=0; i<employees.length; i++) {
            		if (employees[i].id == id_employee) resolve (employees[i]);
        	}
        	reject(new Error("No s'ha trobat cap empleat amb aquest id."));
	})
);

let getSalary = employee_object => (					
	new Promise ( function(resolve, reject) {									
  		for (var i=0; i<salaries.length; i++) {
			if (salaries[i].id == employee_object.id) resolve (salaries[i].salary);
		}
        	reject(new Error("No s'ha trobat aquest objecte d'Empleat"));
	})
);


//Nivell 1, exercici 2 ***********************************************************************************

async function llista(id){
    getEmployee(id)
        .then(result => console.log(result.name))
    
    getEmployee(id)
        .then(result => getSalary(result))
        .then(result => console.log(result))
}

//llista(2);        //És un exemple.

//Nivell 2 Exercici 1 *************************************************************

async function principal(){
    
    let result = await auxiliar();
    console.log(result);

}

async function auxiliar(){

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("fet!"), 2000)
    });
    
    let result = await promise; 
    return result;
}

principal();

//Nivell 3 Exercici 1 ************************************************************


