"use strict";
{
    var moveDecorator_1 = function (target) {
        target.prototype.getPosition = function () {
            return { x: 100, y: 200 };
        };
    };
    //~decorator就是个语法糖
    // @moveDecorator
    // class Tank{
    // }
    // const t = new Tank();
    // console.log((<any>t).getPosition())
    //~相当于下面的
    var Player_1 = /** @class */ (function () {
        function Player() {
        }
        return Player;
    }());
    var p_1 = new Player_1();
    moveDecorator_1(Player_1);
    console.log(p_1.getPosition());
}
