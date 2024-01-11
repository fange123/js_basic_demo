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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var requireDecorator = function (target, propertyKey, parameterIndex) {
    //*记录那些参数需要验证
    var requireParams = [];
    requireParams.push(parameterIndex);
    //*这里的requireParams需要在validateDecorator这个方法装饰器中使用
    //*所以需要用元数据来记录
    Reflect.defineMetadata('required', requireParams, target, propertyKey);
};
var validateDecorator = function (target, propertyKey, descriptor) {
    var method = descriptor.value;
    descriptor.value = function () {
        var requiredParams = Reflect.getMetadata('required', target, propertyKey) || [];
        var argus = arguments;
        requiredParams.forEach(function (param) {
            if (param > argus.length || argus[param] == undefined) {
                throw new Error('请传递必要的参数');
            }
        });
        return method.apply(this, arguments);
    };
};
var OneUser = /** @class */ (function () {
    function OneUser() {
    }
    OneUser.prototype.find = function (name, id) {
        console.log(id);
    };
    __decorate([
        validateDecorator,
        __param(1, requireDecorator),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", void 0)
    ], OneUser.prototype, "find", null);
    return OneUser;
}());
new OneUser().find('张海宇', undefined);
// TODO:参数装饰器逼方法装饰器先执行
