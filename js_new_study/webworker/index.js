//* 创建web worker对象
// ~:浏览器会报错无法创建worker,报错origin  null
//~： 解决方法：使用Live Server插件打开
const worker = new Worker("./worker.js");
const arr = [1, 2, 3, 4, 5];
let tempArr = arr;
p.textContent = tempArr;

button.addEventListener("click", function () {
  //* 通过worker发送post消息
  worker.postMessage(tempArr);
});

//* 监听worker传递回来的消息

worker.onmessage = function (e) {
  const data = e.data;
  tempArr = data;
  p.textContent = data;
};
