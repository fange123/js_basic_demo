const showDecorator: MethodDecorator = (
  target: Object, //*   对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  propertyKey: string | symbol, //* 方法名
  descriptor: PropertyDescriptor //* 方法属性的描述对象（可写，可枚举...）
  //   {
  //   value: [Function (anonymous)],//* value就是对应的方法（show）
  //   writable: true,
  //   enumerable: true,
  //   configurable: true
  // }
) => {
  console.log(target, propertyKey, descriptor);

  //* 可以通过修改value的值去修改方法
  descriptor.value = () => {
    console.log("aaaa");
  };
};

class MyUser {
  @showDecorator
  public show() {
    console.log("bbbb");
  }
}

new MyUser().show(); //aaaa
//TODO:输出aaaa，说明函数装饰器内部可以修改方法

//+++++++++++++++++++++++++++++++++

//* 自定义一个函数装饰器
const fn1: MethodDecorator = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  //* 我要把你的方法改掉，哪个方法用我做装饰，我就把它搞掉
  descriptor.value = () => {
    console.log("嘻嘻嘻，吃毛线");
  };
};

class MM {
  @fn1
  public eat() {
    console.log("吃饭");
  }
}

new MM().eat();
