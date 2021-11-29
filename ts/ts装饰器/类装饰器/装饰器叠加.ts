const myDecorator:ClassDecorator = (target:Function)=> {
  target.prototype.getMyName = ()=> {
    return '张大宝'
  }

}
const playDecorator:ClassDecorator = (target:Function)=> {
  target.prototype.playMusic = ():void => {
    console.log('播放音乐')

  }
}
@myDecorator
@playDecorator
class User{
  public getMyName(){}
}

const user = new User()
console.log(user.getMyName());
(user as any).playMusic()
