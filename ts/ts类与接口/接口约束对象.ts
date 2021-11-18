interface IUser {
  name: string;
  age: number;
  info():string
  say:()=>void;
  //?可以有任何不确定属性
  [key:string]:any
}

const my:IUser={
  name: "张海玉",
  age:18,
  info(){
    return `${this.name}`
  },
  say(){
    console.log(this.name);
  },
  sex:'男',
  author:'hhh'
}

console.log(my.info())
my.say()
