const moveDecorator = (target:Function)=> {
  target.prototype.getPosition = ():{x:number; y:number}=> {
    return {x:100,y:200}
  }

}
//~装饰器写在谁的前面，他的参数就是谁
//TODO:可以在不写继承的情况下在原型上添加属性
@moveDecorator
class Tank{
}
const t = new Tank();
console.log((<any>t).getPosition())

@moveDecorator
class Player{
}
const p = new Player();
console.log((p as any).getPosition())
