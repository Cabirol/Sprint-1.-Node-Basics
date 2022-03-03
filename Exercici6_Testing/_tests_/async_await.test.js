const {getEmployee, getSalary, principal, auxiliar} = require ('../app/entrega4_Async_Await');


//Tests nivell 1 exercici 1


test('finds employer number 1', async ()=>{
    const employee = await getEmployee(1);
    expect(employee).toEqual({
        id: 1,
        name: 'Linux Torvalds'
    });
});

test('fails to find employer 4, that does not exist', async ()=>{
    await expect(getEmployee(4))
    .rejects.toEqual(new Error("No s'ha trobat cap empleat amb aquest id."));
});

test('gets salary from employer 3', async ()=>{
    const salary = await getSalary({
        id: 3,
        salary: 2000
    });
    expect(salary).toEqual(2000);
});

test('throws error because nothing was passed', async ()=>{
    await expect(getSalary())
    .rejects.toEqual(new TypeError("Cannot read property 'id' of undefined"));
});


//Tests Nivell 2 exercici 1 


test('la promesa resol després de 2 segons i retorna "fet" ', async ()=>{
    const resultat = await auxiliar(true);
    expect(resultat).toEqual("fet");
});

test('la promesa és rebutjada', async ()=>{
    await expect(auxiliar(false))
    .rejects.toEqual(new TypeError("Hi ha hagut un error"));
});

test('la consola imprimeix "fet"', async ()=>{
    const result = await principal(true);
    expect(result).toEqual(console.log("fet"));
});

//Tests Nivell 2 exercici 1 amb Jest Fake Timers

test('comprova el funcionament de setTimeout a auxiliar', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    auxiliar(true);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000, true);
});

test('comprova el funcionament de setTimeout a principal ', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    principal(true);
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000, true);
});