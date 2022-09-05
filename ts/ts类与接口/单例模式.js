"use strict";
{
    var User_1 = /** @class */ (function () {
        function User() {
        }
        User.make = function () {
            if (User.instance == null) {
                //+只执行一次
                console.log('创建User实例');
                User.instance = new User();
            }
            return User.instance;
        };
        User.instance = null;
        return User;
    }());
    var a_1 = User_1.make();
    var b_1 = User_1.make();
    var c_1 = User_1.make();
}
//~阻止外部实例化对象，并且此过程只执行一次，节省开销
//!把constructor定义成private就不让外部访问了
//!在class内部就搞好实例创建
