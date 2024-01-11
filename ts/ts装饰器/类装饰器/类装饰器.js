"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//!: 装饰器其实就是一个函数,里面实现一些功能，任何使用了这些装饰器的构造函数（类），都会拥有这些功能
var moveDecorator = function (target) {
    // * 装饰器接受的参数target就是它要装饰的构造函数
    target.prototype.getPosition = function () {
        return { x: 100, y: 200 };
    };
};
//~装饰器写在谁的前面，他的参数就是谁，用@,其实也是个语法糖
//TODO:可以在不写继承的情况下在原型上添加属性
var Tank = /** @class */ (function () {
    function Tank() {
    }
    Tank = __decorate([
        moveDecorator
    ], Tank);
    return Tank;
}());
var t = new Tank();
console.log(t.getPosition());
var Player = /** @class */ (function () {
    function Player() {
    }
    Player = __decorate([
        moveDecorator
    ], Player);
    return Player;
}());
var p = new Player();
console.log(p.getPosition());
//+++++++++++++++++++++++++++++++++++++
var fn = function (target) {
    //* 构造器里面可以实现一些方法，可以在构造函数的原型上添加一些属性或方法
    console.log(target); //[Function: P]
    target.prototype.say = function () {
        console.log("说点啥子");
    };
};
//~方法1:
var P = /** @class */ (function () {
    function P() {
    }
    P = __decorate([
        fn
    ], P);
    return P;
}());
var p1 = new P();
//p1的原型上肯定有say方法,但是ts会报错，可以把p1断言成any类型
p1.say(); //说点啥子
//~方法2:
//!:归根结底装饰器还是个函数，可以使用函数调用的方式去使用
var M = /** @class */ (function () {
    function M() {
    }
    return M;
}());
fn(M);
var m1 = new M();
m1.say();
