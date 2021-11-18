"use strict";
var myFun = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + "-" + b;
    }
};
console.log(myFun(20, 30));
console.log(myFun("20", "30"));
