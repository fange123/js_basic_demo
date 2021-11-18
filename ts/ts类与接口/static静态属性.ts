{
  class User {
    static site:string = 'zhy'
    public static getSite(){
      // return this.site
      return User.site
    }
  }
const user = new User()
//~静态属性，不能通过对象调用，必须通过构造函数
  console.log(User.getSite());

}
