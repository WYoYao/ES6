var humen={
  say(){
    console.log('HelloWorld');
  }
}
var worker={
  //设置此对象的原型为humen相当于是worker的类，继承humen的类
  __proto__:humen,
  company:'freelancer',
  work(){
    console.log('working...');
  }
};
humen.say();//HelloWorld;
worker.say();//HelloWorld;
