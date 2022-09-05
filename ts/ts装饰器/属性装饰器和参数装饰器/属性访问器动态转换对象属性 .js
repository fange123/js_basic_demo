"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LowDecorator = function (target, propertyKey) {
    console.log(propertyKey);
    //#写一个访问器，对属性进行修改
    var value;
    Object.defineProperty(target, propertyKey, {
        get: function () {
            return value.toLocaleLowerCase();
        },
        set: function (v) {
            value = v;
        }
    });
};
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        LowDecorator
    ], User.prototype, "title", void 0);
    return User;
}());
var user = new User();
user.title = 'ZHANGHAIYU';
console.log(user.title);
