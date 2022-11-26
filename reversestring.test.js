const reverseString = require('./reversestring');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses', () => {
  // complete with another equal example
  expect(reverseString('home')).toEqual('emoh');

});

test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
  // complete with another uppercase equal example
  expect(reverseString('Car')).toEqual('rac');

});
