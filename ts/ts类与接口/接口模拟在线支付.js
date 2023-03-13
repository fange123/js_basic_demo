"use strict";
var WeiPay = /** @class */ (function () {
    function WeiPay() {
    }
    WeiPay.prototype.handle = function (price) {
        console.log("\u5FAE\u4FE1\u652F\u4ED8\u4E86" + price);
    };
    WeiPay.prototype.my = function () {
        console.log("my");
    };
    return WeiPay;
}());
var ZhiPay = /** @class */ (function () {
    function ZhiPay() {
    }
    ZhiPay.prototype.handle = function (price) {
        console.log("\u652F\u4ED8\u5B9D\u652F\u4ED8\u4E86" + price);
    };
    return ZhiPay;
}());
function pay(type, price) {
    var pay;
    if (type === "weiPay") {
        pay = new WeiPay();
    }
    else {
        pay = new ZhiPay();
    }
    pay.handle(price);
}
