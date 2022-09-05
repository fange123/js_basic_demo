"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var highLightDecorator = function (target, propertyKey, descriptor) {
    //~第三个参数的value就是实现
    //把原来的实现保存起来
    var method = descriptor.value;
    descriptor.value = function () {
        return "<div style=\"color:#f00\">" + method() + "</div>";
    };
};
var LiUser = /** @class */ (function () {
    function LiUser() {
    }
    LiUser.prototype.response = function () {
        return 'bjyx';
    };
    __decorate([
        highLightDecorator
    ], LiUser.prototype, "response", null);
    return LiUser;
}());
document.body.insertAdjacentHTML('beforeend', new LiUser().response());
