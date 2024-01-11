"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MessageDecorator = function (target) {
    target.prototype.message = function (content) {
        console.log(content);
    };
};
//* 通过继承也能实现，装饰器也可以
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.login = function () {
        this.message("恭喜你呀，登录成功");
    };
    LoginController = __decorate([
        MessageDecorator
    ], LoginController);
    return LoginController;
}());
new LoginController().login();
var ArticleController = /** @class */ (function () {
    function ArticleController() {
    }
    ArticleController.prototype.store = function () {
        this.message("文章修改成功");
    };
    ArticleController = __decorate([
        MessageDecorator
    ], ArticleController);
    return ArticleController;
}());
new ArticleController().store();
