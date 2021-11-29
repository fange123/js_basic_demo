const shoeDecorator:MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  descriptor.value = ()=>{
  console.log('aaaa');

  }

}

class MyUser{

  @shoeDecorator
  public show(){
    console.log('bbbb');


  }
}

new MyUser().show();//aaaa
//TODO:输出aaaa，说明装饰器内部可以修改方法
