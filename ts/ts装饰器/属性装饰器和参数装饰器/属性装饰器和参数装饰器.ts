const ProDecorator:PropertyDecorator = (...args: any[]) => {
  console.log(args);

}


const ParamDecorator:ParameterDecorator = (...args:[])=> {
  console.log(args)
}

class ZHY {
  //?普通属性就是原型对象
@ProDecorator
  public name:string | undefined;
  //[ {}, 'name', undefined ]

  //?静态属性就是构造函数
@ProDecorator
  public static type:string | undefined;
  //[ [class ZHY] { type: undefined }, 'type', undefined ]

  public show(id:number,@ParamDecorator content:string){
    //~第一个参数：对象或构造函数（根据是否是静态方法区分），第二个参数是方法名称，第三个参数是位置
//[ {}, 'show', 1 ]

  }
}
