var $timerButton = (function() {
  var $btn = $('<input class="timer-button" type="button" value="发送验证码（6s）" disabled>'),
      num=6,
      timer;
      //cfg = config,
    //  enabled = cfg.enabled;
  
  function show(container){
    if(timer) clearInterval(timer);
    // 1.DOM draw
    //if(num===0){
      //num = 6;
    //}
    $(container).append($btn);
    num=6;
    // 2.event bind
    $btn.attr('disabled');
    timer = setInterval(function() {
      num --;
      if(num === 0) {
        clearInterval(timer);
        $btn.val('发送验证码');
        $btn.removeAttr('disabled');
      }else{
        $btn.val('发送验证码（'+ num +'s）');
        //$btn.attr('disabled');
      }
    }, 1000);
  }
  $btn.click(function() {
    alert('已发送');
  });

  return {
    show: show
  }  

}());

// 不用 page load event

// 封装成对象，有几种方案
/*
 * 1.简单对象字面量，不完全是面向对象，不能包括私有方法
 * var timerBtn = function(){
 *  show:function()
 * }
 * 2.工厂函数，一个函数返回值是一个简单对象
 * var timerBtn = function(){
 *  return {
 *    show:function(){}
 *  }
 * }
 * 3.构造函数，function TimerBtn(){
 *
 * }
 * var tb = new TimerBtn();
 * */
