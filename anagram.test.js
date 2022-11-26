const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"dessert" is an anagram of "stressed"', () => {
  //complete the code
  expect(isAnagram('dessert', 'stressed')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  //complete the code
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});

test('"Indonesia" is NOT an anagram of "Malaysia"', () => {
  //complete the code
  expect(isAnagram('Indonesia', 'Malaysia')).toBeFalsy();
});

test('"Soccer" is NOT an anagram of "Tennis"', () => {
  //complete the code
  expect(isAnagram('Soccer', 'Tennis')).toBeFalsy();

});
