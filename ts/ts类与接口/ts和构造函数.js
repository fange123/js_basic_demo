"use strict";
{
    var User_1 = /** @class */ (function () {
        //!完整写法
        // public name:string
        // constructor(name:string){
        //   this.name = name
        // }
        //!简写
        function User(name) {
            this.name = name;
            this.name = name;
        }
        return User;
    }());
    var user_1 = new User_1('张海玉');
    console.log(user_1.name);
}
