;(function(){
  return;
  let res={
    a:1,
    b:2,
    c:3,
    d:4
  }
  //通过解构赋值，可以直接获取对象中间的数字
  let {a,b}=res;
  console.log(a,b);

})();


;(function(){
  return;
  let res={
    a:1,
    b:2,
    c:3,
    d:4
  }
  //通过解构赋值，可以直接获取对象中间的数字
  let {x,y}=res;
  //没有输出，必须要有对应的key值才能够进行解构赋值
})();

//数组的解构赋值
;(function(){
  return;
  var [a,b,c]=[1,2,3,1,3,5];
  console.log(a,b,c);

})();
