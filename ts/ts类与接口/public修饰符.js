"use strict";
var User = /** @class */ (function () {
    function User(n, a) {
        this.name = n;
        this.age = a;
    }
    //默认公共方法
    User.prototype.info = function () {
        return this.name + "\u7684\u5E74\u9F84\u662F" + this.age;
    };
    return User;
}());
var user = new User('小明', 18);
var stu = new User('小红', 20);
console.log(user.info());
//* for in会遍历原形链上的属性，比如info这个方法
for (var key in user) {
    console.log(key); //name,age,info
}
for (var key in user) {
    if (Object.prototype.hasOwnProperty.call(user, key)) {
        var element = stu[key];
        console.log(element);
    }
}
