"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ProDecorator = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
};
var ParamDecorator = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
};
var ZHY = /** @class */ (function () {
    function ZHY() {
    }
    //[ [class ZHY] { type: undefined }, 'type', undefined ]
    ZHY.prototype.show = function (id, content) {
        //~第一个参数：对象或构造函数（根据是否是静态方法区分），第二个参数是方法名称，第三个参数是位置
        //[ {}, 'show', 1 ]
    };
    __decorate([
        ProDecorator
    ], ZHY.prototype, "name", void 0);
    __decorate([
        __param(1, ParamDecorator)
    ], ZHY.prototype, "show", null);
    __decorate([
        ProDecorator
    ], ZHY, "type", void 0);
    return ZHY;
}());
