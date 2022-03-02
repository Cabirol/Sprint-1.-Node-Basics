const {sumar, restar, multiplicar, dividir} = require ('../app/Operacions');

test('adds 1 + 2 to equal 3', () => {
  expect(sumar(1, 2)).toBe(3);
});

test('suma amb molts sumands', () => {
  expect(sumar(1,2,3,4,5,6,7,8,9,10)).toBe(55);
});

test('substracts 7 - 3 to equal 4', () => {
  expect(restar(7,3)).toBe(4);
});

test('multiplies 2 * 4 to equal 8', () => {
  expect(multiplicar(2,4)).toBe(8);
});

test('divides 6 / 3 to equal 2', () => {
  expect(dividir(6,3)).toBe(2);
});


