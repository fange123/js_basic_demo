Function.prototype.myBind = function (otherThis) {
  //* this就是调用myBind的函数
  //# 如果调用对象不是函数就抛错
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  // 获取参数
  const args = [...arguments].slice(1),
    fn = this;

  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? new fn(...arguments) : otherThis,
      args.concat(...arguments)
    );
  };
};

function Cat() {}
Cat.prototype.sayHello = function (name) {
  console.log(" 你好", name);
};

function Dog() {}
Dog.prototype.eat = function () {
  console.log(" ", arguments);
  console.log(" 吃什么", [...arguments]);
};

const zz = new Cat();
const pp = new Dog();
// pp.eat("汉堡");

//zz也想吃汉堡
pp.eat.myBind(zz, "汉堡")();
pp.eat.myBind(zz, "汉堡")("可乐");

//bug:我写成zz.eat.myBind(pp,'')   ,zz上哪来的eat？
