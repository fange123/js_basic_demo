"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TODO:需要安装一个包
//~先初始化 yarn init -y
//~再安装包：yarn add reflect-metadata
require("reflect-metadata");
var zhy = { name: 'zhanghaiyu' };
//!元数据：为数据设置数据
//?定义元数据
//?四个参数，1，元数据键，2，元数据值，3，目标对象，4，目标对象的属性
Reflect.defineMetadata('zdb', { title: 'hhh' }, zhy, 'name');
console.log(Reflect.getMetadata('zdb', zhy, 'name')); //{title:hhhh}
