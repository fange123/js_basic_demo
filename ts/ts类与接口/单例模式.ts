{
  class User {
    private static instance: User | null = null;
    private constructor() {}

    static make(): User {
      if (User.instance == null) {
        //+只执行一次
        console.log("创建User实例");

        User.instance = new User();
      }
      return User.instance;
    }
  }

  const a = User.make();
  const b = User.make();
  const c = User.make();
}
//* 什么叫做单例模式？     只能new(实力化)出一个对象来

//~阻止外部实例化对象，并且此过程只执行一次，节省开销
//!把constructor定义成private就不让外部访问了
//!在class内部就搞好实例创建
