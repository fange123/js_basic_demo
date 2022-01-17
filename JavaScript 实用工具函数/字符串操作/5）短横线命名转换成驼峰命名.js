const getCamelCase = (str) => {
  return str.replace(/-([a-z])/g, (i, item) => {
    console.log(i, item); //-f f  -h h
    return item.toUpperCase();
  });

  //TODO：关于replace中回调函数的参数
  //* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E6%8C%87%E5%AE%9A%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0
};

console.log(getCamelCase("my-father-haha"));
