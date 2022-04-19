"use strict";
const key = Symbol('key');
// 设置值
const obj = {
    name: 'Klaus',
    [key]: 'value'
};
// 以下方式遍历，是取不到Symbol类型的值的
for (const key in obj) {
    console.log(key); // => name
}
console.log(Object.keys(obj)); // => [ 'name' ]
console.log(Object.getOwnPropertyNames(obj)); // => [ 'name' ]
console.log(JSON.stringify(obj)); // => {"name":"Klaus"}
// 以下方式，可以获取到Symbol类型对应的属性值
console.log(Object.getOwnPropertySymbols(obj)); // => [ Symbol(key) ]
// TODO:一个新的 API，Reflect.ownKeys()方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
console.log(Reflect.ownKeys(obj)); // => [ 'name', Symbol(key) ]
//* Symbol.for()，Symbol.keyFor()
//+ Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，
//+ 前者会被登记在全局环境中供搜索，后者不会。Symbol.for()不会每次调用就返回一个新的 Symbol
//+ 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
//+ 比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，
//+ 但是调用Symbol("cat")30 次，会返回 30 个不同的 Symbol 值。
//eg:Symbol.for
let foo = Symbol.for('foo');
let foo_ = Symbol.for('foo');
console.log(foo === foo_); //true
//* Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key
//eg:Symbol.keyFor()
let car = Symbol.for('car'); //已登记
let cat = Symbol('cat'); //未登记
console.log("++++++++++++++++++");
console.log(Symbol.keyFor(car)); //car
console.log(Symbol.keyFor(cat)); //undefined
