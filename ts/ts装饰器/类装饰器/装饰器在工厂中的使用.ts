
//~定义一个工厂
const testDecoratorFactory = (type:string):ClassDecorator => {
console.log(type)
  switch (type) {
    case "Car":
    return (target:Function)=> {
      target.prototype.test = ():void => {
        console.log('测试小汽车')
      }
    }
    case "Hat":
    return (target:Function)=> {
      target.prototype.test = ():void => {
        console.log('测试戴帽子')
      }
    }

    default:
      return (target:Function)=> {
      target.prototype.test = ():void => {
        console.log('测试~~~')
      }
  }
 }
}
const testDecorator:ClassDecorator = (target:Function)=> {
  target.prototype.test = ()=> {
    console.log('测试')
  }
}

@testDecoratorFactory("Car")
class Car{}
const car = new Car();
(<any>car).test()

@testDecoratorFactory("Hat")
class Hat{}

const hat = new Hat();
(hat as any).test()
