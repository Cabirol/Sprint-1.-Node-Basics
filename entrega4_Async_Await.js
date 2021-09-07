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
  		resolve(				
			 ((arr, value) => {				
  				for (var i=0; i<arr.length; i++) {
					if (arr[i].id == value) return arr[i];
				}
			})(employees, id_employee)
		)
	})
);

let getSalary = employee_object => (					
	new Promise ( function(resolve, reject) {			
  		resolve(				
			( (arr, obj) => {				
  				for (var i=0; i<arr.length; i++) {
					if (arr[i].id == obj.id) return arr[i].salary;
				}
			})(salaries, employee_object)
		)
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
