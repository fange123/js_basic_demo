{
  interface User   { name:string; email:string;}
  interface User {
    age:number;
  }
  type A  = {
    name:string;
  }
  type B = { age:number}

  type C = A & B
  const c:C =  {name:"",age:20}

  class Person {
    // name:string;
    age:number = 18;
    constructor(public name:string) {
      this.name = name
   }
  }

  const p1 = new Person('章三');
  const p2 = new Person('里斯');

  const persons:Person[] =[]

  interface People extends Person {
    email:string;
  }

  const p :People = {
  name:'',email:'',age:18}

  persons.push(p1)



  class ZHY {
    private static site:string = 'zhy.com'

    protected getName():string {
// * 静态属性，不管是在类内部调用还是外部调用，都必须通过构造函数名调用
      return ZHY.site
    }
  }


  interface IUser {
    name: string
    age:number
  }
  abstract class Father  {
    // abstract name: string;
    // abstract age: number;
    getInfo():void{
      console.log('aaa');

    }

    // * 抽象类不能实例化
  }

  class Son1 extends Father{
    name: string = 'hh';
    age: number = 18;

  }
  class Son2 extends Father implements IUser{
    name: string = 'zz';
    age: number = 50;


  }

  // * interface和implements配合相当于实现抽象类的抽象属性和方法
  // * 只不过interface只定义规范
  // * 抽象类里面既可以定义规范，还可以书写逻辑


  const person = {};

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));

}
