//TODO:new.target是用来检测一个函数或者构造函数是否时通过new运算符来调用的，普通函数new.target是undefined
function Foo() {
  console.log(new.target);
}

// Foo()
new Foo();

// !:注意：刚开始使用肩头函数来创建构造函数是错误的做法
// 箭头函数不能作为构造函数。 因为箭头函数没有自己的 this ，
// 在使用构造函数new 一个对象的时候无法绑定和修改 this ；
// 同时箭头函数也没有 prototype 属性，
// 无法将该属性赋给实例对象的 __proto__ 。2022年1月7日
