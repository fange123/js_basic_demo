//* 同样是检测对象obj调用toString方法，obj.toString()的结果和
// * Object.prototype.toString.call(obj)的结果不一样，这是为什么？

// 这是因为toString是Object的原型方法，而Array、function等类型作为Object的实例，
// 都重写了toString方法。不同的对象类型调用toString方法时，根据原型链的知识，
// 调用的是对应的重写之后的toString方法
//* （function类型返回内容为函数体的字符串，-----把函数原模原样的以字符串的形式返回出来
//*  Array类型返回元素组成的字符串…）[]和['']返回一样，都是空字符串，
//而不会去调用Object上原型toString方法（
// 返回对象的具体类型），所以采用obj.toString()不能得到其对象类型，
// 只能将obj转换为字符串类型；因此，在想要得到对象的具体类型时，
// 应该调用Object原型上的toString方法

const fn = () => {
  console.log("fn");
};
console.log(fn.toString()); //() => {console.log("fn");}

const arr = [];
console.log(arr.toString()); //''
console.log(typeof arr.toString());
const arr1 = [""];
console.log(typeof arr1.toString());
const arr2 = ["123"];
console.log(arr2.toString());
