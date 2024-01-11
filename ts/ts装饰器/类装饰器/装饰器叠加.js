"use strict";
//!: 一个构造函数可以同时拥有多个装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var myDecorator = function (target) {
    target.prototype.getMyName = function () {
        return "张大宝";
    };
};
var playDecorator = function (target) {
    target.prototype.playMusic = function () {
        console.log("播放音乐");
    };
};
var User1 = /** @class */ (function () {
    function User1() {
    }
    User1.prototype.getMyName = function () { };
    User1 = __decorate([
        myDecorator,
        playDecorator
    ], User1);
    return User1;
}());
var user1 = new User1();
console.log(user1.getMyName());
user.playMusic();
