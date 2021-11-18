{
  class User{
    //!完整写法
    // public name:string
    // constructor(name:string){
    //   this.name = name
    // }
    //!简写
    constructor(public name:string){
      this.name = name
    }
  }

  const user = new User('张海玉')
  console.log(user.name);

}
