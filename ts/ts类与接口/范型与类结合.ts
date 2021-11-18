{
  class Collection<T>{
  data:T[] = []
  public push(...item:T[]){
    this.data.push(...item);
  }

  public shift():T{
    return this.data.shift()!;

  }

}

type User = {
  name:string;
  age:number;
}

const user:User = {
  name: '小红',
  age:20
}

const collection = new Collection<User>();
collection.push(user);
console.log(collection.shift());

}
