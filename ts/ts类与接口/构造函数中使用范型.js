"use strict";
{
    var User_1 = /** @class */ (function () {
        function User(user_) {
            this.user_ = user_;
        }
        User.prototype.get = function () {
            return this.user_;
        };
        return User;
    }());
    var my_1 = {
        name: "张海玉",
        age: 18
    };
    var user_1 = new User_1(my_1);
    console.log(user_1.get().name);
}
