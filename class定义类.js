//刚开始的时候class一直作为一个保留字，不允许使用
class animal(){
  //通过关键字constructor 来定义构造函数
  constructor(name){
    this.name=name;
  }

  sayName(){
    console.log('my name is'+ this.name);
  }
}
//sayName相当于
//Animal.prototype.sayName


//类的继承
class Progranmer extends Animal{
  constructor(name){
    /*
    这部分写自己相关的构造函数
    */

    //直接调用父类的构造函数进行初始化
    super(name);
  }

  program(){
    console.log("I'm codind...");
  }
}
