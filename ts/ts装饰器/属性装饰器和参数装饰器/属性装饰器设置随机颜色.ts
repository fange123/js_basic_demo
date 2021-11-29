const randomColor:PropertyDecorator = (target: Object, propertyKey: string | symbol)=> {
  let colors :string[] = ['red','blue','green','yellow']
//!我的设置属性不起作用啊,但是方法是正确的

  Object.defineProperty(target, propertyKey, {
    get(){
      return colors[Math.floor(Math.random()*(colors.length))]
    }
  })

}

class MyColor{
  @randomColor
  public color: string|undefined

  // public draw(){
  //   document.body.insertAdjacentHTML('beforebegin',`<div style="color:${this.color};height:300px;width:300px">我喜欢你啊宝～</div>`);
  // }
}

const my = new MyColor();
console.log(my.color)
// my.draw();
