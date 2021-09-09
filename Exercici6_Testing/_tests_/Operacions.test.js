const {sumar} = require ('../app/Operacions');

test('adds 1 + 2 to equal 3', () => {
  expect(sumar(1, 2)).toBe(3);
});