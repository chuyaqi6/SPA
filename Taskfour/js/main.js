function WheelBox(){
  this.show = function(cfg){
    var $box = $(cfg.container),
        imgs = cfg.imgs,
        time = cfg.time,
        index = 0, //当前图片索引
        timer,
        $slider = $('<div class="slider" id="slider"></div>'),
        $left = $('<span id="left"><</span>'),
        $right = $('<span id="right">></span>'),
        $navs = $('<ul class="nav" id="navs"></ul>');
  
      // 1、添加元素
      // (1) 图片区域
    $slider.append('<div class="slide"><img src="'+imgs[cfg.imgs.length-1]+'" alt=""></div>');
    for(var i=0;i<cfg.imgs.length;i++){
      var $img = $('<div class="slide"><img src=" '+imgs[i]+'" alt=""></div>;');
        $slider.append($img);
    }
    $slider.append('<div class="slide"><img src="'+imgs[0]+'" alt=""></div>');
      // (2) 底部无序列表区域
    var arr = [];
    for(var j=0;j<cfg.imgs.length;j++){
      arr[j] = $('<li>'+(j+1)+'</li>');
      $navs.append(arr[j]);
    }
    arr[0].addClass('active');

      // 2、对应函数
      // (1) 图片切换
    function movePic(nextIndex,callback){
      var dis = nextIndex - index;
      var left = '';
        // dis>0:表示向左切换
        // dis<0:表示向右切换
      if(dis>0){
        left = '-='+(dis*1200);
        //console.log(dis)
      }else if(dis<0){
        left = '+='+(dis * -1200);
      }else{
        return 0;
      }
      $slider.animate({'left':left},1000,callback);
    }

      // (2) 原点样式
    function dotStyle(e){
      for(var i=0;i<cfg.imgs.length;i++){
        if(arr[i].hasClass('active')){
          arr[i].removeClass('active');
        }
      }  
      arr[e].addClass('active');
    }
      // 切换到下一张图片
    function nextPic(){
      if(index === cfg.imgs.length-1){
        dotStyle(0);
        movePic(cfg.imgs.length,function(){
          $slider.css('left',-1200);
        });
        index = 0;
      }else{
        dotStyle(index+1);
        movePic(index+1);
        index++;
      }
    }
      // 切换到上一张图片
    function lastPic(){
      if(index === 0){
        dotStyle(cfg.imgs.length-1);
        movePic(-1,function(){
          $slider.css('left',-1200*cfg.imgs.length);
        });
        index = cfg.imgs.length-1;
      }else{
        dotStyle(index-1);
        movePic(index-1);
        index--;
      }
    }

      // 箭头点击事件
    $box.mouseover(function(){
      clearInterval(timer);
      $left.stop().animate({'opacity':1.0});
      $right.stop().animate({'opacity':1.0});
    });
    $box.mouseout(function(){
      timer = setInterval(nextPic,time);
      $left.stop().animate({'opacity':0});
      $right.stop().animate({'opacity':0});
    });
    $left.click(lastPic);
    $right.click(nextPic);

      // 底部圆点点击事件
    for(var k=0;k<cfg.imgs.length;k++) {
      (function(j) {
        arr[j].click(function() {
          dotStyle(j);
          movePic(j);
          index = j;
        });
      })(k);
    }
  
    $box.append($slider);
    $box.append($left);
    $box.append($right);
    $box.append($navs);
    timer = setInterval(nextPic,time);
  };
}
