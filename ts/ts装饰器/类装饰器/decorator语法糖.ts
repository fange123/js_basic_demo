{
  const moveDecorator = (target:Function)=> {
    target.prototype.getPosition = ():{x:number; y:number}=> {
  return {x:100,y:200}
}

}


//~decorator就是个语法糖
// @moveDecorator
// class Tank{
// }
// const t = new Tank();
// console.log((<any>t).getPosition())

//~相当于下面的

class Player{
}
const p = new Player();
moveDecorator(Player)

console.log((p as any).getPosition())
}
