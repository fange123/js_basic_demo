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
var randomColor = function (target, propertyKey) {
    var colors = ['red', 'blue', 'green', 'yellow'];
    //!我的设置属性不起作用啊,但是方法是正确的
    Object.defineProperty(target, propertyKey, {
        get: function () {
            return colors[Math.floor(Math.random() * (colors.length))];
        }
    });
};
var MyColor = /** @class */ (function () {
    function MyColor() {
    }
    __decorate([
        randomColor,
        __metadata("design:type", Object)
    ], MyColor.prototype, "color", void 0);
    return MyColor;
}());
var my = new MyColor();
console.log(my.color);
// my.draw();
