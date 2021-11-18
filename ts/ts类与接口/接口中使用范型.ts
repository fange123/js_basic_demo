{
  interface IList<B,C>{
  data:string,
  comment:C[],
  block:B

}

type Comment={
  author:string,
  name:string,
}
const list:IList<boolean,Comment> ={
  data:'2021-11-20',
  comment:[{author:'张海玉',name:'张大宝的快乐时光'}],
  block:true
}

console.log(list);


}
