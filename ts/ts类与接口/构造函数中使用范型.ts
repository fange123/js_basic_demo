{
  class User<T>{
    constructor(private user_:T){}
    public get():T{
      return this.user_
    }
  }


  interface IUser{
    name:string
    age:number
  }

  const my :IUser ={
    name: "张海玉",
    age:18
  }
  const user = new User(my)
  console.log(user.get().name);

}
