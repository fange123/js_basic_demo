{
  class User<T> {
    //* 在构造函数的参数加上修饰符：public，private,protected等，相当于申明和赋值
    // private user_: T;
    // constructor(user: T) {
    //   this.user_ = user;
    // }
    constructor(private user_: T) {}
    public get(): T {
      return this.user_;
    }
  }

  class P {
    // private a: number;
    // constructor(a: number) {
    //   this.a = a;
    // }

    constructor(private a: number) {}
  }

  interface IUser {
    name: string;
    age: number;
  }

  const my: IUser = {
    name: "张海玉",
    age: 18,
  };
  const user = new User(my);
  console.log(user.get().name);
}
