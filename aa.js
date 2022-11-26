const chunkArray = require('./chunk');
const numbers = [1, 2, 3, 4, 5];
const len = 2;
const chunkedArr = chunkArray(numbers, len);
console.log(chunkedArr)