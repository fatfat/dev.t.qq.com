tpl.mooduse_include=['<div class="comp_area">','<div id="show" style="width:340px;height:400px;margin-bottom:-400px;float:right;">',"<h3>效果预览</h3>",'<div style="width:100%;height:390px;overflow:auto;text-align:center;">','<iframe id="review" frameborder="0" scrolling="no" src="http://mat1.gtimg.com/app/opent/images/websites/mood/moodshow.png" width="304" height="123" marginwidth=0 marginheight=0 style="margin:0 auto;"></iframe>',"</div>","</div>",'<dl class="p1" id="act">',"<dt>展示用户名</dt>",'<dd><span class="form_input valign"><input type="text" id="assname" placeholder="请输入微博帐号名" isempty="false" data-rule="assname"  data-error="微博帐号" style="width:180px;"/></span><span style="color:red;" id="errortip"></span>','<a class="guideword inputdes" href="javascript:;"> 什么是微博帐号？<label>微博帐号即微博地址后缀，如下图红框所示<br/>http://t.qq.com/<span style="border:1px solid #f00">QQGenius</span></label></a>',"</dd>","</dl>",'<dl class="p1" id="setStyle">',"<dt>- 尺寸设置</dt>",'<dd>宽：<span class="form_input"><input type="text" id="width" maxlength="4" class="winput" value="300" /></span> px <br/>','<span class="gray">&nbsp; &nbsp; &nbsp; 270-600像素</span></dd>','<dd>高：<span class="form_input"><input type="text" id="height" maxlength="4" class="winput" value="108" /></span> px <br/>','<span class="gray">&nbsp; &nbsp; &nbsp; 108-600像素</span></dd>','<dd><input type="checkbox" id="autowidth"> <label for="autowidth">宽度自适应网页</label></dd>','<dd><input type="checkbox" id="autoheight"> <label for="autoheight">高度自适应网页</label></dd>',,"</dl>","</div>",].join("");util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/comp_validate.js",function(){bindAllEvent()});var comp_type=5;function normalValidate(){$("#assname").trigger("change")}function formSubmit(){if($("#showcode").attr("disabled")){return}var a={comp_type:5,comp_style:'{"assname":"'+$("#assname").val()+'","width":'+parseInt($("#width").val())+',"height":'+parseInt($("#height").val())+',"autowidth":'+$("#autowidth").is(":checked")+',"autoheight":'+$("#autoheight").is(":checked")+"}"};if($("#comp_url").size()&&$("#comp_name").size()){a.comp_url=encodeURIComponent($("#comp_url").val());a.comp_name=encodeURIComponent($("#comp_name").val())}if(namecheck($("#assname").val())==false){$("#assname").trigger("change");return}if(window.comp){a.comp_id=comp.comp_id}$("#showcode").attr("disabled","disabled");$.ajax({type:"post",url:"/pipes/interfaceserver?action=common_query&business_type=ajax_compadd&t="+new Date().getTime(),data:a,dataType:"json",success:function(c){var b=+c.ret,d=common.getMsgByRet(b);if(d){loginWin.alert("<center>"+d+"</center>");return}if(b===0&&c.data&&c.data.id){location.href="/development/compinfo?comp_id="+c.data.id}else{loginWin.alert({title:"获取代码失败！",width:450,text:"<center>"+(c.msg||"服务器失败")+"</center>"})}$("#showcode").removeAttr("disabled")},error:function(b){loginWin.alert({title:"获取代码失败！",width:340,text:"<center>连接服务器失败</center>"});$("#showcode").removeAttr("disabled")}})}function namecheck(a){return/^[a-zA-Z][0-9a-zA-Z_\-]{0,19}$/.test(a)}function refreshUrl(){var c="http://emotion.v.t.qq.com/index.php?c=emotion&a=index",f=parseInt($("#width").val())||0,e=parseInt($("#height").val())||0,d=0+$("#autowidth").is(":checked"),g=0+$("#autoheight").is(":checked");if(namecheck($("#assname").val())){c+="&appkey=801000271";c+="&name="+$("#assname").val();c+="&w="+[f,0][d];c+="&h="+[e,0][d];var a=parseInt(e)+13;var b=f;$("#review").attr("src",c);$("#review").attr("width","100%");$("#review").attr("height","95%")}else{$("#assname").trigger("change")}}eventBindFuncList.push(function(){$("#assname").change(function(){var a=$(this).val();if(namecheck(a)){showmsg(true,$(this),"");refreshUrl()}else{var b=["微博帐号不正确","微博帐号不能为空"][0+(a=="")];if(window.showmsg){showmsg(false,$(this),b)}else{if(window.loginWin){loginWin.alert("<center>"+b+"</center>")}else{alert(b)}}}});$("#autowidth").click(function(){if($(this).attr("checked")==true){$("#width").attr("disabled","true");_width=0}else{$("#width").attr("disabled","");_width=parseInt($("#width").val())}refreshUrl()});$("#autoheight").click(function(){if($(this).attr("checked")==true){$("#height").attr("disabled","true");_height=0}else{$("#height").attr("disabled","");_height=parseInt($("#height").val())}refreshUrl()});$("#width").blur(function(){theval=$(this).val();if(theval<270){$(this).val(270)}if(theval>600){$(this).val(600)}_width=parseInt($(this).val());refreshUrl()}).keyup(function(){var a=$(this).val();$(this).val(a.replace(/[^\d]{0,4}/g,"").replace(/^0*/g,""))});$("#height").blur(function(){theval=$(this).val();if(theval<108){$(this).val(108)}if(theval>600){$(this).val(600)}_height=$(this).val();refreshUrl()}).keyup(function(){var a=$(this).val();$(this).val(a.replace(/[^\d]{0,4}/g,"").replace(/^0*/g,""))})});