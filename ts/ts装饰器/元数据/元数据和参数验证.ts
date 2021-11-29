import 'reflect-metadata'

const requireDecorator:ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number)=> {
  //*记录那些参数需要验证
  let requireParams:number[] = []
  requireParams.push(parameterIndex)
  //*这里的requireParams需要在validateDecorator这个方法装饰器中使用
  //*所以需要用元数据来记录
  Reflect.defineMetadata('required',requireParams,target,propertyKey)


}

const validateDecorator:MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor)=> {
  const method = descriptor.value

  descriptor.value =function() {
    const requiredParams:number[] = Reflect.getMetadata('required',target,propertyKey) || []
    let argus = arguments
    requiredParams.forEach(param=> {

     if(param>argus.length || argus[param] == undefined) {

       throw new Error('请传递必要的参数')

     }

    })


  return method.apply(this, arguments)


  }




}

class OneUser{
  @validateDecorator
  find(name:string ,@requireDecorator id:number){
    console.log(id);


  }
}

new OneUser().find('张海宇',undefined)

// TODO:参数装饰器逼方法装饰器先执行


