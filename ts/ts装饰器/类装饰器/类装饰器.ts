//!: 装饰器其实就是一个函数,里面实现一些功能，任何使用了这些装饰器的构造函数（类），都会拥有这些功能
const moveDecorator = (target: Function) => {
  // * 装饰器接受的参数target就是它要装饰的构造函数
  target.prototype.getPosition = (): { x: number; y: number } => {
    return { x: 100, y: 200 };
  };
};
//~装饰器写在谁的前面，他的参数就是谁，用@,其实也是个语法糖
//TODO:可以在不写继承的情况下在原型上添加属性
@moveDecorator
class Tank {}
const t = new Tank();
console.log((<any>t).getPosition());

@moveDecorator
class Player {}
const p = new Player();
console.log((p as any).getPosition());

//+++++++++++++++++++++++++++++++++++++

const fn = (target: Function) => {
  //* 构造器里面可以实现一些方法，可以在构造函数的原型上添加一些属性或方法
  console.log(target); //[Function: P]
  target.prototype.say = () => {
    console.log("说点啥子");
  };
};
//~方法1:
@fn
class P {}
const p1 = new P();
//p1的原型上肯定有say方法,但是ts会报错，可以把p1断言成any类型
(<any>p1).say(); //说点啥子
//~方法2:
//!:归根结底装饰器还是个函数，可以使用函数调用的方式去使用
class M {}
fn(M);
const m1 = new M();
(m1 as any).say();
