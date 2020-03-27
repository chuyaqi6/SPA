requirejs.config({
  'paths':{
    'jquery':'//apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
  }
});

require(['jquery'],function($){
  $(function() {
    //点击添加按钮后
    var $btnAdd = $('#add');
    $btnAdd.click(function(){
      require(['timer-button'],function(TimerButton){
        var tb = new TimerButton();
        tb.show({
          num:6,
          title:'发送验证码',
          onClick:function(){
            alert('已发送');
          }
        });
      });
    });
  });
});
