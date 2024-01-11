const highLightDecorator1: MethodDecorator = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  //* 先保存一份原来的被装饰方法
  const temp = descriptor.value;
  descriptor.value = () => `<div style='color:pink'>${temp()}</div>`;
};
class P2 {
  @highLightDecorator1
  public show() {
    return "你好，哈哈哈";
  }
}

document.body.innerHTML = new P2().show();
