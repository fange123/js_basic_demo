const highLightDecorator: MethodDecorator = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  //~第三个参数的value就是实现
  //把原来的实现保存起来
  const method = descriptor.value;
  descriptor.value = () => {
    return `<div style="color:#f00">${method()}</div>`;
  };
};

class LiUser {
  @highLightDecorator
  public response() {
    return "bjyx";
  }
}

document.body.insertAdjacentHTML("beforebegin", new LiUser().response());
// document.body.insertAdjacentHTML("afterend", new LiUser().response());
document.body.insertAdjacentHTML("afterbegin", new LiUser().response());
// document.body.insertAdjacentHTML('beforeend',new LiUser().response())
