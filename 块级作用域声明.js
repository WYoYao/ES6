;(function(){
  function fn() {
    var n=5;
    if(true){
      //因为没有块级作用域，因为js 声明的懒惰性，不会重新声明只会对n进行赋值，相当于修改外部的n
      var n=10;
    };
    console.log(n);
  }
  fn();
})();

//块级作用域
;(function(){

  function fn() {
    let n=5;
    if(true){
      //let n的块级作用域只在这个if 中，不会修改外部的作用域
      let n=10;
    };
    console.log(n);
  }
  fn();

})();

;(function(){
  const PI=3.1415;
  console.log(PI);//==>3.1415
  PI=3;//在对从下定义的常量进行赋值的时候，会报错Identifier 'PI' has already been declared
})();
