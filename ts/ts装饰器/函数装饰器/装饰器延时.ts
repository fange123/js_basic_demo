const delayDecorator:MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor)=> {
  //~第三个参数的value就是实现
  //把原来的实现保存起来
  const method = descriptor.value
  descriptor.value = ()=> {
     setTimeout(()=>{
      method()
    },2000)
  }
}

class DelayUser{
  @delayDecorator
  public response(){
    console.log('bjyx')
  }
}
new DelayUser().response()



