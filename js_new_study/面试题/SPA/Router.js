class Router {
  constructor() {
    this.routes = {}; //存放路由path以及callback
    currentUrl: "";

    //* 监听路由change改变相对应的回调
    //# window的load方法是在页面加载完成，所有css，图片资源都加载完成时触发DOMContentLoaded只是在dom加载完成后触发
    window.addEventListener("load", this.refresh());
    window.addEventListener("hashchange", this.refresh());
  }

  refresh() {}

  route(path, callback) {
    this.routes[path] = callback;
  }

  push(path) {
    //* 路径存在时，调用callback
    this.routes[path] && this.routes[path]();
  }
}

window.miniRouter = new Router();
