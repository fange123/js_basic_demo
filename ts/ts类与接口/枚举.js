"use strict";
{
    var SexType = void 0;
    (function (SexType) {
        SexType[SexType["BOY"] = 0] = "BOY";
        SexType[SexType["GIRL"] = 1] = "GIRL";
    })(SexType || (SexType = {}));
    var n = {
        name: "nnn",
        age: 18,
        sex: SexType.BOY,
    };
    var b = {
        name: "bbb",
        age: 20,
        sex: SexType.GIRL,
    };
    var s = [n, b];
    console.log(s);
}
