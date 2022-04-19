//* 1.ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
// Set本身是一个构造函数，用来生成 Set 数据结构

const s = new Set();
[1,2,3,3,2,1].map(x=>s.add(x))//去重

console.log(new Set([1,2,3,3,2,1]));//去重
console.log(s); //Set(3) { 1, 2, 3 }
console.log([...s]); //[ 1, 2, 3 ]
console.log(Array.from(s)); //[ 1, 2, 3 ]

//eg:字符串去重
const ss = 'abbbbccd';
console.log([...new Set([...ss])].join(',')); //abcd

// Set.prototype.size：返回Set实例的成员总数。

// Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
// Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
// Set.prototype.clear()：清除所有成员，没有返回值。

//* 2.WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
//? 1.WeakSet 的成员只能是对象，而不能是其他类型的值
//?2.WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);//a数组的成员作为参数而不是a数组本身

//eg:
const b = [1,2,3]
const wsb = new WeakSet(b)//数组b的成员不是对象，会报错

// ? WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。

//* 3.Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
//eg:
const map = new Map()
const obj_ = {
  name:'zhy'
}
map.set(obj_,'haha')
console.log(map.get(obj_));//haha
console.log(map.size);//1
console.log(map.has(obj_));//true
map.delete(obj_)
console.log(map.has(obj_));//false
//eg:
const map_ = new Map([['name', '张三']])
console.log(map_.size);//1
console.log(map_.has('name'));//true
console.log(map_.get('name'));//张三

//eg:
// + 如果对同一个键多次赋值，后面的值将覆盖前面的值。

const map2 = new Map();

map2
.set(1, 'aaa')
.set(1, 'bbb');

map2.get(1) // "bbb"

// +遍历方法
// Map 结构原生提供三个遍历器生成函数和一个遍历方法。

Map.prototype.keys()//：返回键名的遍历器。
Map.prototype.values()//：返回键值的遍历器。
Map.prototype.entries()//：返回所有成员的遍历器。
Map.prototype.forEach()//：遍历 Map 的所有成员。

//!:Map 的遍历顺序就是插入顺序
const map3 = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

map3.forEach((value, key, map)=> {
  console.log(value); //no yes
  console.log(key); //F T
  console.log(map); //no yes
})

//# 与其他数据结构的互相转换
//?（1）Map 转为数组  最方便的方法，就是使用扩展运算符（...）

const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
[...myMap]

//?（2）数组 转为 Map 将数组传入 Map 构造函数，就可以转为 Map。
new Map([[{foo: 3}, ['abc']],[true, 7]])

//? （3）Map 转为对象 如果所有 Map 的键都是字符串，它可以无损地转为对象。

const myMap_ = new Map()
  .set('yes', true)
  .set('no', false);

function strMapToObj(map){
 const obj = {}
 for (const [k,v] of map) {
   obj[k]=  v

 }
 return obj

}

console.log(strMapToObj(myMap_));//{ yes: true, no: false }

//? （4）对象转为 Map 对象转为 Map 可以通过Object.entries()。
let obj1 = {"a":1, "b":2};
console.log(Object.entries(obj1));

let map4 = new Map(Object.entries(obj1));
console.log(map4);

//? （5）Map 转为 JSON
// JSON.stringify()

//? （6）JSON 转为 Map
// JSON.parse


