"use strict";
//* 抽象类是类的规范，不能实力化，但可以规定子类必须有哪些属性和方法
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student() {
    }
    //* 抽象类中不仅有规范，还有自己的业务实现，而接口interface就只是规范
    Student.prototype.sleep = function () {
        console.log("睡觉");
    };
    return Student;
}());
var Xiaoming = /** @class */ (function (_super) {
    __extends(Xiaoming, _super);
    function Xiaoming() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "小明";
        //~实现了接口规范，就必须提供抽象类要求的规范以外的age属性
        _this.age = 18;
        return _this;
    }
    Xiaoming.prototype.study = function () {
        return this.name + "\u5728\u5B66\u4E60";
    };
    return Xiaoming;
}(Student));
var Xiaohong = /** @class */ (function (_super) {
    __extends(Xiaohong, _super);
    function Xiaohong() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "小红";
        return _this;
    }
    Xiaohong.prototype.study = function () {
        return this.name + "\u5728\u5B66\u4E60";
    };
    return Xiaohong;
}(Student));
var h = new Xiaohong();
var m = new Xiaoming();
console.log(h.study());
console.log(m.study());
