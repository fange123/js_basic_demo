//* ajax是一类技术的统称，是用来和服务器端进行数据交互的，并且只更新部分网页

//* 创建一个ajax
//#1.
const xhr = new XMLHttpRequest();
//todo: 如果使用GET请求发送数据的时候，需要注意如下：

// 将请求数据添加到open()方法中的url地址中
// 发送请求数据中的send()方法中参数设置为null

xhr.open("GET", "/");
xhr.send();
xhr.onreadystatechange((e) => {
  console.log(e);
});
