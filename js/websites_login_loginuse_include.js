tpl.loginuse_include=['<link href="http://mat1.gtimg.com/app/opent/css/websites/login/use.css" rel="stylesheet" type="text/css"/>','<h2 class="comp_sub_tit">配置微博登录按钮样式</h2>','<div class="style_set">','<div class="titles">','<p class="f14">1&nbsp;选择登录前样式</p>','<p class="f14 offset_right">登录前效果预览:</p>',"</div>",'<div class="load_before">',"<form>",'<div class="type">','<strong class="sub">样式：</strong>',"<p>",'<input type="radio" checked="checked" name="b_type" value=0 id="btn"/><label for="btn">按钮</label>','<input type="radio" name="b_type" value=1 id="btn_words"/><label for="btn_words">图标+文字</label>','<input type="radio" name="b_type" value=2 id="words" /><label for="words">文字</label>',"</p>","</div>",'<div class="size unvisible">','<strong class="sub">大小：</strong>',"<p>",'<input type="radio" checked="checked" name="size" value=0 id="230_48" /><label for="230_48">230*48</label>','<input type="radio" name="size" value=1 id="170_32" /><label for="170_32">170*32</label>','<input type="radio" name="size" value=2 id="120_24" /><label for="120_24">120*24</label>','<input type="radio" name="size" value=3 id="105_16" /><label for="105_16">105*16</label>',"</p>","</div>","</form>",'<div class="b_img_container">','<div class="b_img_show"></div>',"</div>","</div>",'<div class="titles">','<p class="f14">2&nbsp;选择登录后样式</p>','<p class="f14 offset_right">登录后效果预览:</p>',"</div>",'<div class="load_after">',"<form>",'<div class="type">','<strong class="sub">样式：</strong>',"<p>",'<input type="radio" checked="checked" name="a_type" value=0 id="pic_nick" /><label for="pic_nick">用户头像+昵称</label>','<input type="radio" name="a_type" value=1 id="logo_nick" /><label for="logo_nick">logo+昵称</label>','<input type="radio" name="a_type" value=2 id="nick" /><label for="nick">昵称</label>',"</p>","</div>","</form>",'<div class="a_img_container">','<div class="a_img_show"></div>',"</div>","</div>","</div>"].join("");function formSubmit(){if($("#showcode").attr("disabled")){return}var a={comp_type:8,comp_style:'{"b_type":"'+$("input[name='b_type']:checked").val()+'", "b_size":"'+$("input[name='size']:checked").val()+'", "a_type":"'+$("input[name='a_type']:checked").val()+'"}'};if(comp.comp_id){a.comp_id=comp.comp_id}if($("#comp_url").size()&&$("#comp_name").size()){a.comp_url=encodeURIComponent($("#comp_url").val());a.comp_name=encodeURIComponent($("#comp_name").val())}if(window.comp){a.comp_id=comp.comp_id}$("#showcode").attr("disabled","disabled");$.ajax({type:"post",url:"/pipes/interfaceserver?action=common_query&business_type=ajax_compadd&t="+new Date().getTime(),data:a,dataType:"json",success:function(c){var b=+(c.ret),d=common.getMsgByRet(b);if(d){loginWin.alert("<center>"+d+"</center>");return}if(b===0&&c.data&&c.data.id){location.href="/development/compinfo/"+c.data.id}else{loginWin.alert({title:"获取代码失败！",width:450,text:"<center>"+(c.msg||"服务器失败")+"</center>"})}$("#showcode").removeAttr("disabled")},error:function(b){loginWin.alert({title:"获取代码失败！",width:340,text:"<center>连接服务器失败</center>"});$("#showcode").removeAttr("disabled")}})}function normalValidate(){$("#comp_name").trigger("blur")}var comp_type=8;util.createScripts(["http://mat1.gtimg.com/app/opent/rebuild/js/login_vt.js","http://mat1.gtimg.com/app/opent/rebuild/js/comp_validate.js"],function(){bindAllEvent()});