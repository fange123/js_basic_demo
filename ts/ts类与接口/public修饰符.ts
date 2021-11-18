class User {
  public name:string//默认都是公共变量，可以在前面加上public
  public age:number
  constructor(n:string,a:number){
    this.name = n;
    this.age = a

  }
//默认公共方法
  public info():string{
    return`${this.name}的年龄是${this.age}`
  }
}

const user = new User('小明',18);
const stu = new User('小红',20);
console.log(user.info());

//* for in会遍历原形链上的属性，比如info这个方法
for (const key in user) {
     console.log(key);//name,age,info
}

for (const key in user) {
  if (Object.prototype.hasOwnProperty.call(user, key)) {
    const element = stu[key];
    console.log(element);


  }
}

