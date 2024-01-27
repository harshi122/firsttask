const array = [1, 2, 3, 4, 1, 2, 3];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4]