var PasswordBox=function(n){var t=$('<input type="password"/>'),i=$('<input type="text"/>'),e=$("<div></div>"),p=$('<div class="pwd">密码：</div>');p.append(t),p.append(e),p.append(i),$(n.container).append(p),t.on("input",function(){i.val(t.val())}),e.mouseover(function(){i.css("z-index","10")}),e.mouseout(function(){i.css("z-index","-10")}),this.getPwd=function(){return i.val()}};