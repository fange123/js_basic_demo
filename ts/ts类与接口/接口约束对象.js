"use strict";
var my = {
    name: "张海玉",
    age: 18,
    info: function () {
        return "" + this.name;
    },
    say: function () {
        console.log(this.name);
    },
    sex: '男',
    author: 'hhh'
};
console.log(my.info());
my.say();
