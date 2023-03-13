//* 绝大部分情况下，type和interface功能是差不多一样的

//* interface接口可以重名，并且不回覆盖，而是进行类型合并，也可以extends继承
interface IFruit {
  name: string;
}

interface IVegetable {
  color: string;
}

interface IVegetable {
  price: number;
}

interface IFood extends IFruit, IVegetable {}

const food: IFood = {
  name: "",
  color: "",
  price: 0,
};

// * type不可以有重名的，合并类型要用&
type Boy = {
  name: string;
};

type Girl = {
  age: number;
};

type Person = Boy & Girl;

const p: Person = {
  name: "",
  age: 0,
};

//* type可以申明基本类型的别名
type MyBoolean = boolean;
const fn = (flag: MyBoolean): MyBoolean => {
  return flag;
};
fn(true);

//* type可以申明联合类型
type SexType = "男" | "女";
const pn = (): SexType => {
  return `男`;
};
