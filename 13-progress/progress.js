$(function(){
  var $progress = $('progress'),
      timer = 0,
      i = 0;
  $('#startbtn').click(function() {
    if(timer !== 0) return;
    
    timer = window.setInterval(function() {
      $progress.attr('value', i++);
    }, 100);
  });

  $('#stopbtn').click(function() {
    window.clearInterval(timer);
    timer = 0;
  });
  
  $('#resetbtn').click(function() {
    $progress.attr('value', i = 0);
  }); 
})
