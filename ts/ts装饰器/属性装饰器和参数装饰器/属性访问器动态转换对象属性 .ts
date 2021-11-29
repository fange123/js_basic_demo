const LowDecorator:PropertyDecorator = (target: Object, propertyKey: string | symbol)=> {
  console.log(propertyKey);

  //#写一个访问器，对属性进行修改
  let value:string
  Object.defineProperty(target, propertyKey,{
    get:()=>{
      return value.toLocaleLowerCase()
    },
    set:(v)=>{
      value = v

    }
  })

}
class User {
  @LowDecorator
  public title: string|undefined;
}

const user = new User();
user.title = 'ZHANGHAIYU'
console.log(user.title)
