"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var moveDecorator = function (target) {
    target.prototype.getPosition = function () {
        return { x: 100, y: 200 };
    };
};
//~装饰器写在谁的前面，他的参数就是谁
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
