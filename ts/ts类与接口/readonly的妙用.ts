{
  class User {
  readonly author:string='aaa'
  // readonly protected author:string = '哈哈哈哈哈'//加了protected之后外面就调用不了了

  constructor(name:string){
    //?readonly在constructor里面可以改变
    this.author = name
  }
}

const user = new User('bbb')
console.log(user.author);


}

