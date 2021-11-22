new Promise((resolve, reject) => {
  resolve("哈哈");
  //reject可以用catch接受错误信息
})
  .then((res) => {
    console.log(res);
    if (res !== "成功") {
      //~如果半路上失败了，
      //!要么抛异常，要么返回reject
      // throw new Error("失败了");
      return Promise.reject("失败啊啊啊");
    }
  })
  .catch((err) => console.error(err));
