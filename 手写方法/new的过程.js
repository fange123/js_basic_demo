function Cat(name) {
  this.name = name;
  // return [1, 2, 3]; //*构造函数如果返回值为一个对象，那么这个返回值会被正常使用
  // return 123; //*构造函数中返回一个原始值，然而这个返回值并没有作用
}

const bo = new Cat("小李猫");
console.log(bo);

//~ new的过程

const myNew = (Fun, ...args) => {
  //# 1.创建了一个空的obj
  const obj = {};
  //# 2.把这个对象和构造函数关联起来，通过原型链
  obj.__proto__ = Fun.prototype;
  //#3.将构造函数的this绑定到obj上
  const result = Fun.apply(obj, args);
  //#4.根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理
  return result instanceof Object ? result : obj;
};

console.log(myNew(Cat, "张张"));
