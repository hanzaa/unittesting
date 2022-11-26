const chunkArray = require('./chunk');

test('chunkArray function exists', () => {
  expect(chunkArray).toBeDefined();
});

test('Chunk an array of 10 values with length of 2', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('Chunk an array of 3 values with length of 1', () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([[1], [2], [3]]);
});

test('Chunk an array of 15 values with length of 3', () => {
  // completed the code
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const len = 3;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]]);
});

test('Chunk an array of 5 values with length of 2', () => {
  // completed the code
  const numbers = [1, 2, 3, 4, 5];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5] ]);
});
