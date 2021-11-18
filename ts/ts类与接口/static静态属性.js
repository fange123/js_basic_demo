"use strict";
{
    var User_1 = /** @class */ (function () {
        function User() {
        }
        User.getSite = function () {
            // return this.site
            return User.site;
        };
        User.site = 'zhy';
        return User;
    }());
    var user_1 = new User_1();
    //~静态属性，不能通过对象调用，必须通过构造函数
    console.log(User_1.getSite());
}
