const getPrototype = (arg) => {
  if (typeof arg !== "object") {
    return typeof arg;
  }
  //!:如果构造函数是object，那么可以用对象.constructor.name方法获取原构造函数的名字
  return arg.constructor.name;
};

class MyName {
  name = "zs";
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const xx = new MyName("小红");

console.log(getPrototype(xx)); //MyName
console.log(MyName.name); //MyName
console.log(getPrototype([]));
console.log(getPrototype(1));
console.log(getPrototype("123"));
console.log(getPrototype(true));
