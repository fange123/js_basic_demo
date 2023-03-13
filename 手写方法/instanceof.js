const myInstance = function (l, r) {
  let proto1 = l.__proto__;

  let prototype = r.prototype;
  while (true) {
    console.log("proto1 ", proto1);
    //* 1.基本数据类型不存在原型对象，直接false
    //* 2.最顶层Object也没有原型对象了

    if (!proto1) {
      return false;
    }
    //* 如果proto和prototype相等,那就直接true
    if (proto1 === prototype) {
      return true;
    }
    //* 如果proto和prototype不相等，就应该去原型链的上层去找找
    // proto = Object.getPrototypeOf(proto);
    proto1 = proto1.__proto__;
  }
};

// console.log(myInstance("123", Array));
// console.log(myInstance(1, Array));
// console.log(myInstance([], Array));
// console.log(myInstance({}, Array));
console.log(myInstance(() => {}, Array));
