;(function(){
  return;
  function fn(name){
    // var str=name||'leo';
    // console.log(str);
    console.log(name||'leo');
  }
  fn('wang');
  fn();

})();

//es6 的默认赋值，通过这种默认赋值，可以避免因为传入参数为false出现的尴尬
;(function(){

  return;
  function fn(name='leo'){
    console.log(name);
  }
  fn('wang');
  fn();

})();


;(function(){
  return;
  function fn(a,...rest){
    console.log(a);
    console.log(rest);
  }
  fn(1);//1 ,[]
  fn(1,2,3,4,5,6,7,8,9);//1,[2,3,4,5,6,7,8,9];

})();
