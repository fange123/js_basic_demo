"use strict";
{
    var Collection = /** @class */ (function () {
        function Collection() {
            this.data = [];
        }
        Collection.prototype.push = function () {
            var _a;
            var item = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                item[_i] = arguments[_i];
            }
            (_a = this.data).push.apply(_a, item);
        };
        Collection.prototype.shift = function () {
            return this.data.shift();
        };
        return Collection;
    }());
    var user_1 = {
        name: '小红',
        age: 20
    };
    var collection = new Collection();
    collection.push(user_1);
    console.log(collection.shift());
}
