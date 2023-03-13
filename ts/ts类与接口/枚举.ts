{
  enum SexType {
    BOY,
    GIRL,
  }

  interface IUser {
    name: string;
    age: number;
    sex: SexType;
  }

  const n: IUser = {
    name: "nnn",
    age: 18,
    sex: SexType.BOY,
  };
  const b: IUser = {
    name: "bbb",
    age: 20,
    sex: SexType.GIRL,
  };

  const s: IUser[] = [n, b];
  console.log(s);
}
