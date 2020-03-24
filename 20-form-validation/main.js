/* global Rectangle: true */
$(function(){
  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btn = $('#calculate'),
      $per = $('#perimeter'),
      $area = $('#area');
  /**
     * decimalSave
     * 保留小数点后n位
     * @param x 做近似处理的值
     * @param n 小数点后第n位
     * @returns 近似处理后的值
     */
  function decimalSave(num,n){
    return Math.round(num * Math.pow(10,n)) / Math.pow(10,n);
  }
  /*calc button click event*/
  $btn.click(function (){
    if(!validata('#width') || !validata('#height')) return;
    //get value
    var w = Number($width.val()),
        h = Number($height.val());

    //calculate
    var rect = new Rectangle();

    //decimalSave
    var p = decimalSave(rect.per(w,h),2);
    var a = decimalSave(rect.a(w,h),2);
    //output
    $per.val(p);
    $area.val(a);
  }); 

  function validata(field){
    var $data = $(field),
        $msg = $(field + '-validation');
    console.log($data.val());
    if($data.val()===''){
      $msg.html('不能为空');
      $data.select();
      return false;
    }
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
      $msg.html('必须是数值');
      $data.select();
      return false;
    }
    if(window.Number($data.val()) < 0) {
      $msg.html('必须大于零');
      $data.select();
      return false;
    }
    $msg.html('');
    return true;
  }
});
