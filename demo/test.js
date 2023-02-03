// let obj = { name: "小红" };
// Object.defineProperty(obj, "age", {
//   value: 21,
//   // enumerable: true,
// });
// console.log(obj);
// {
//   const name = "lix";
//   age = 20;
//   console.log(delete name);
//   console.log(delete age);
// }

// {
//   const set = new Set([1, 2, 3, 4]);
//   console.log("set", set);
// }

// {
//   const fn = () => {
//     throw "hhh ";
//   };

//   const param1 = () => {
//     try {
//       fn();
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   param1();
// }

// {
//   console.log(
//     {
//       name: 18,
//     } == { name: 18 }
//   );
// }

// {
//   console.log(new Number(10));
// }
// {

//   const obj = {name:'zhy'}
//   const {name:newName} = obj
//   console.log(name)
// }
// {
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };

// class Labrador extends Dog {
//   // 1
//   constructor(size) {
//     this.size = size;
//   }
//   // 2
//   // constructor(name, size) {
//   //   super(name);
//   //   this.size = size;
//   // }
//   // 3
//   // constructor(size) {
//   //   super(name);
//   //   this.size = size;
//   // }
//   // 4
//   // constructor(name, size) {
//   //   this.name = name;
//   //   this.size = size;
//   // }

// };

// new Labrador('zhy',1)


// }
{
 const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21,enumerable:true });

console.log(person);
console.log(Object.keys(person));
}
