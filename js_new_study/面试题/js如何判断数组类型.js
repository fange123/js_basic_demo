const arr = [];

console.log(Array.isArray(arr));
console.log(arr.constructor);
console.log(arr instanceof Array);
console.log(Object.prototype.toString.call(arr));
console.log(Object.getPrototypeOf(arr) === Array.prototype);
console.log(arr.__proto__ === Array.prototype);
