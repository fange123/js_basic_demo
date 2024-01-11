//!: 一个构造函数可以同时拥有多个装饰器

const myDecorator: ClassDecorator = (target: Function) => {
  target.prototype.getMyName = () => {
    return "张大宝";
  };
};
const playDecorator: ClassDecorator = (target: Function) => {
  target.prototype.playMusic = (): void => {
    console.log("播放音乐");
  };
};
@myDecorator
@playDecorator
class User1 {
  public getMyName() {}
}

const user1 = new User1();
console.log(user1.getMyName());
(user as any).playMusic();
