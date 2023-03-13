//* 抽象类是类的规范，不能实力化，但可以规定子类必须有哪些属性和方法

//* 抽象类里面可以没有抽象方法和抽象属性，但是抽象属性和方法必须存在于抽象类中

interface IStudent {
  //todo:接口里面只是规范，就不要写public之类的
  name: string;
  age: number;
}

abstract class Student {
  abstract name: string;
  abstract study(): string;
  //* 抽象类中不仅有规范，还有自己的业务实现，而接口interface就只是规范
  protected sleep(): void {
    console.log("睡觉");
  }
}

class Xiaoming extends Student implements IStudent {
  public name = "小明";
  //~实现了接口规范，就必须提供抽象类要求的规范以外的age属性
  public age = 18;
  public study(): string {
    return `${this.name}在学习`;
  }
}

class Xiaohong extends Student {
  public name = "小红";
  public study(): string {
    return `${this.name}在学习`;
  }
}
const h = new Xiaohong();
const m = new Xiaoming();
console.log(h.study());
console.log(m.study());
