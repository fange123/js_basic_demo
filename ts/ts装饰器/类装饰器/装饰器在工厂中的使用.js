"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//~定义一个工厂
var testDecoratorFactory = function (type) {
    console.log(type);
    switch (type) {
        case "Car":
            return function (target) {
                target.prototype.test = function () {
                    console.log('测试小汽车');
                };
            };
        case "Hat":
            return function (target) {
                target.prototype.test = function () {
                    console.log('测试戴帽子');
                };
            };
        default:
            return function (target) {
                target.prototype.test = function () {
                    console.log('测试~~~');
                };
            };
    }
};
var testDecorator = function (target) {
    target.prototype.test = function () {
        console.log('测试');
    };
};
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        testDecoratorFactory("Car")
    ], Car);
    return Car;
}());
var car = new Car();
car.test();
var Hat = /** @class */ (function () {
    function Hat() {
    }
    Hat = __decorate([
        testDecoratorFactory("Hat")
    ], Hat);
    return Hat;
}());
var hat = new Hat();
hat.test();
