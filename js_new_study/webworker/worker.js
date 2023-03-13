//* 在worker里面处理数据
onmessage = function (e) {
  const data = e.data;
  postMessage(data.reverse());
};
