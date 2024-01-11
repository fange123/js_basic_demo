//* 装饰器工厂，根据不同的类型，返回不同的装饰器
//~定义一个工厂
const testDecoratorFactory = (type: string): ClassDecorator => {
  console.log(type);
  switch (type) {
    case "Car":
      //* 返回Car类型的装饰器
      return (target: Function) => {
        target.prototype.test = (): void => {
          console.log("测试小汽车");
        };
      };
    case "Hat":
      return (target: Function) => {
        target.prototype.test = (): void => {
          console.log("测试戴帽子");
        };
      };

    default:
      return (target: Function) => {
        target.prototype.test = (): void => {
          console.log("测试~~~");
        };
      };
  }
};
const testDecorator: ClassDecorator = (target: Function) => {
  target.prototype.test = () => {
    console.log("测试");
  };
};

@testDecoratorFactory("Car")
class Car {}
const car = new Car();
(<any>car).test();

@testDecoratorFactory("Hat")
class Hat {}

const hat = new Hat();
(hat as any).test();
