"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var highLightDecorator1 = function (target, propertyKey, descriptor) {
    //* 先保存一份原来的被装饰方法
    var temp = descriptor.value;
    descriptor.value = function () { return "<div style='color:pink'>" + temp() + "</div>"; };
};
var P2 = /** @class */ (function () {
    function P2() {
    }
    P2.prototype.show = function () {
        return "你好，哈哈哈";
    };
    __decorate([
        highLightDecorator1,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], P2.prototype, "show", null);
    return P2;
}());
document.body.innerHTML = new P2().show();
