class User {
  //!类里面有then方法，会被包装成promise
  constructor(name) {
    this.name = name;
  }
  then(resolve) {
    setTimeout(() => {
      resolve("我是一个" + this.name);
    }, 3000);
  }
}

const get = async () => {
  const user = await new User("张大宝");
  console.log(user);
};

get();
