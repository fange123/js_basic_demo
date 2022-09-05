"use strict";
{
    const c = { name: "", age: 20 };
    class Person {
        constructor(name) {
            this.name = name;
            // name:string;
            this.age = 18;
            this.name = name;
        }
    }
    const p1 = new Person('章三');
    const p2 = new Person('里斯');
    const persons = [];
    const p = {
        name: '', email: '', age: 18
    };
    persons.push(p1);
    class ZHY {
        getName() {
            // * 静态属性，不管是在类内部调用还是外部调用，都必须通过构造函数名调用
            return ZHY.site;
        }
    }
    ZHY.site = 'zhy.com';
    class Father {
        // abstract name: string;
        // abstract age: number;
        getInfo() {
            console.log('aaa');
        }
    }
    class Son1 extends Father {
        constructor() {
            super(...arguments);
            this.name = 'hh';
            this.age = 18;
        }
    }
    class Son2 extends Father {
        constructor() {
            super(...arguments);
            this.name = 'zz';
            this.age = 50;
        }
    }
    // * interface和implements配合相当于实现抽象类的抽象属性和方法
    // * 只不过interface只定义规范
    // * 抽象类里面既可以定义规范，还可以书写逻辑
    const person = {};
    Object.defineProperty(person, "age", { value: 21 });
    console.log(person);
    console.log(Object.keys(person));
}
