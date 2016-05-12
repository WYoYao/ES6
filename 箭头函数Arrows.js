//()=>{};  简化了方法的定义
const a=b=>b+1;
a(3);


//使用去除了this 执行的问题
const Template={
  test:function () {
      //this 指向Template
      console.log(this);
      $("#event").on('click',()=>{
        //如果不是箭头函数时候会打印出$("#event")
        //箭头函数没有自己的指向
        console.log(this);
      })
  }
};
Template.test();
