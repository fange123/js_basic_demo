// 1.es6中的方法
console.log(Array.isArray([])); //true
console.log(Array.isArray({})); //false

console.log("--------------");

//2.instanceof
console.log([] instanceof Array); //true
console.log({} instanceof Array); //false

console.log("--------------");

//3.constructor

console.log([].constructor); //[Function: Array]
console.log({}.constructor); //[Function: Object]

console.log("--------------");

//4.Object.prototype.toString.call()

console.log(Object.prototype.toString.call([])); //[object Array]
console.log(Object.prototype.toString.call({})); //[object Object]
