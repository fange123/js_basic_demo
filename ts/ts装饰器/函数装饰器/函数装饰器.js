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
var showDecorator = function (target, //*   对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
propertyKey, //* 方法名
descriptor //* 方法属性的描述对象（可写，可枚举...）
//   {
//   value: [Function (anonymous)],//* value就是对应的方法（show）
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
) {
    console.log(target, propertyKey, descriptor);
    //* 可以通过修改value的值去修改方法
    descriptor.value = function () {
        console.log("aaaa");
    };
};
var MyUser = /** @class */ (function () {
    function MyUser() {
    }
    MyUser.prototype.show = function () {
        console.log("bbbb");
    };
    __decorate([
        showDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MyUser.prototype, "show", null);
    return MyUser;
}());
new MyUser().show(); //aaaa
//TODO:输出aaaa，说明函数装饰器内部可以修改方法
//+++++++++++++++++++++++++++++++++
//* 自定义一个函数装饰器
var fn1 = function (target, propertyKey, descriptor) {
    //* 我要把你的方法改掉，哪个方法用我做装饰，我就把它搞掉
    descriptor.value = function () {
        console.log("嘻嘻嘻，吃毛线");
    };
};
var MM = /** @class */ (function () {
    function MM() {
    }
    MM.prototype.eat = function () {
        console.log("吃饭");
    };
    __decorate([
        fn1,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MM.prototype, "eat", null);
    return MM;
}());
new MM().eat();
