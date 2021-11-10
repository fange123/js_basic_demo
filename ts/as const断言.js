"use strict";
//TODO:as const 是根据值判断类型
var a = 'zhy';
var b = 120;
var c = '哈哈';
var d = [a, b, c];
var e = d[2];
var f = d[1];
var g = d[0];
e = '哈哈'; //e只能是哈哈
f = 20; //f只能是number类型
g = '20'; //g只能是string类型
//!as const 还可以这样写：
var d1 = [a, b, c];
//?断言就是我说了算，ts推断的类型可能不准确
