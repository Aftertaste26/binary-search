const {binarySearch} = require('./binarySearch.js')

const list = [1, 3, 4, 3, 4, 5, 6, 7, 6, 5, 78, 5, 67, 5, 4, 3, 45, 56,70];
const sortedList = list.sort((a, b) => a - b);

console.log(binarySearch(70, sortedList, true));
