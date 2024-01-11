const MessageDecorator: ClassDecorator = (target: Function) => {
  target.prototype.message = (content: string) => {
    console.log(content);
  };
};

//* 通过继承也能实现，装饰器也可以

@MessageDecorator
class LoginController {
  public login() {
    (this as any).message("恭喜你呀，登录成功");
  }
}

new LoginController().login();

@MessageDecorator
class ArticleController {
  public store() {
    (<any>this).message("文章修改成功");
  }
}

new ArticleController().store();
