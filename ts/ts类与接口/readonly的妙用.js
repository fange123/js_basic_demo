"use strict";
{
    var User_1 = /** @class */ (function () {
        // readonly protected author:string = '哈哈哈哈哈'//加了protected之后外面就调用不了了
        function User(name) {
            this.author = 'aaa';
            //?readonly在constructor里面可以改变
            this.author = name;
        }
        return User;
    }());
    var user_1 = new User_1('bbb');
    console.log(user_1.author);
}
