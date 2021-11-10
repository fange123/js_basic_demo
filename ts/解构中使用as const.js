"use strict";
function my() {
    var a = 'zhy';
    var b = function (x, y) {
        return x + y;
    };
    return [a, b];
}
//此时my函数的返回值是string | ((x: number, y: number) => number))[]
//如果解构
var _a = my(), m = _a[0], n = _a[1];
//那么m,n的类型不明确啊
m(10, 20); //就报错啊
//所以，必须确定类型，m就是字符串，n就是函数
//~可以这么写
var _b = my(), x = _b[0], y = _b[1];
y(20, 10);
//~也可以这么写
var _c = my(), q = _c[0], w = _c[1];
q(10, 20);
//~也可以写的更明确类型
var _d = my(), o = _d[0], p = _d[1];
p(10, 20);
//*也可以在函数体内返回的时候就规定
function my1() {
    var a = 'zhy';
    var b = function (x, y) {
        return x + y;
    };
    // return [a,b] as [typeof a,typeof b]
    return [a, b];
}
var _e = my1(), k = _e[0], l = _e[1];
k = 'nnn';
l(10, 20);
