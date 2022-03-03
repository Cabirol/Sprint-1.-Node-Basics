const {getEmployee, getSalary} = require ('../app/entrega3_Promises_Callbacks');

test('retorna el salari del employee 1', () => {
    return getEmployee(1)
    .then(resolve => getSalary(resolve))
    .then(resolve => expect(resolve).toEqual(4000))
});

test('El user 4 no existeix', () => {
    return getEmployee(4)
    .then(resolve => getSalary(resolve))
    .then(resolve => console.log(resolve))
    .catch(e => expect(e).toEqual(new Error("No s'ha trobat cap empleat amb aquest id.")));
});