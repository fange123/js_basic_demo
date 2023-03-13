interface IPay {
  handle(price: number): void;
}

class WeiPay implements IPay {
  handle(price: number): void {
    console.log(`微信支付了${price}`);
  }
  my() {
    console.log("my");
  }
}
class ZhiPay implements IPay {
  handle(price: number): void {
    console.log(`支付宝支付了${price}`);
  }
}

function pay(type: string, price: number) {
  let pay: IPay;
  if (type === "weiPay") {
    pay = new WeiPay();
  } else {
    pay = new ZhiPay();
  }
  pay.handle(price);
}
