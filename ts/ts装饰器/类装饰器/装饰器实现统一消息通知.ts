const MessageDecorator:ClassDecorator = (target:Function)=> {
  target.prototype.message = (content:string)=> {
    console.log(content);

  }
}

@MessageDecorator
class LoginController{
  public login(){
    this.message('恭喜你呀，登录成功')

  }
}

new LoginController().login()

@MessageDecorator
class ArticleController{

  public store(){
    this.message('文章修改成功')
  }
}

new ArticleController().store()
