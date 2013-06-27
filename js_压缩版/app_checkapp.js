var OPEN_VALIDATOR;OPEN_VALIDATOR={apptypeName:"应用",working:0,checkip:function(c){var a=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;var b=c.match(a);if(b===null){return"非法的IP地址段！"}else{return true}},isempty:function(){return true},appsupport:function(){return true},appsupportIsEmpty:function(d){var a=d.attr("data-error"),b=d.attr("data-terminal");var c=$("#app_support_list").find("input[name='check_"+b+"']:checked").size();return c>0},mobilenum:function(a,b){a=a.replace(/\s/g,"");b.val(a);if(new RegExp(/[^\d]/g).test(a)){return"你填写的##含有非法字符"}if(a.length==11){if(new RegExp(/^1(?:3|5|8)\d{9}$/).test(a)){return true}else{return"仅限中国境内##"}}else{return"请填写11位##"}},tname:function(a){if(a&&!(/^[a-zA-Z][a-zA-Z0-9_\-]{3,19}$/g.test(a))){return"##输入有误"}return true},appweibo:function(a,b){var e=b.attr("data-error");a=a.replace(/\s/g,"");b.val(a);if(a&&!(/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/g.test(a))){return e+"输入有误"}var c=b.attr("data-only");if(c){if(c==="true"){return true}else{return"该"+e+"不存在"}}else{var d=b.attr("data-default");if(d){if(a==d){return true}else{return 1}}else{return 1}}return true},telnum:function(a,b){a=a.replace(/\s/g,"");b.val(a);if(new RegExp(/^([0-9]|[-])+$/g).test(a)){return true}else{return"你填写的##含有非法字符"}},cardnum:function(f){v=f.toLowerCase();var b="##格式错误";if(new RegExp(/^[\sa-z][a-z][\d]{6,6}(\d|a|\(\d\)|\(a\))$/).test(v)){var e={" ":58,a:10,b:11,c:12,d:13,e:14,f:15,g:16,h:17,i:18,j:19,k:20,l:21,m:22,n:23,o:24,p:25,q:26,r:27,s:28,t:29,u:30,v:31,w:32,x:33,y:34,z:35};var a=v.split("");var d=0;for(i=0;i<a.length;i++){if(i==0){if(new RegExp(/^[\sa-zA-Z]$/).test(a[i])){d+=9*e[a[i]]}else{return b}}else{if(i==1){if(new RegExp(/^[a-zA-Z]$/).test(a[i])){d+=(9-i)*e[a[i]]}else{return b}}else{if(a[i]=="("||a[i]==")"){d+=0}else{if(i==8||i==9){var c=a[i];if(c=="a"){c=10}d+=(9-i)*c}else{d+=(9-i)*a[i]}}}}}if(d%11==0){return true}else{return b}}else{if(v.length==15){if(new RegExp(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/).test(v)){return true}else{return b}}else{if(v.length==18){if(new RegExp(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])[\dxX]{4}$/).test(v)){return true}else{return b}}else{return b}}}},link:function(a){var c="^((news|telnet|nttp|file|http|ftp|https)://)(([-A-Za-z0-9_]+(\\.[-A-Za-z0-9_]+)*(\\.[-A-Za-z]{2,6}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_$\\.+!*(),;:@&=?/~#%']*)*";var b=new RegExp(c);if(/["'<>]/g.test(a)){return"##不能含有'\"<>"}else{if(b.test(a)){return true}else{return"##格式错误"}}},applink:function(a){if(a){return OPEN_VALIDATOR.link(a)}else{return true}},appapk:function(a){if(a){return true}else{return"请上传##"}},email:function(a){if(new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/).test(a)){return true}else{return"##格式错误"}},appname:function(a,c){a=a.replace(/^\s+|\s$/g,"");c.val(a);var b=a.match(/[^A-Za-z0-9（）()\u4e00-\u9fa5]+/g);if(a&&b){return"##不能含有非法字符"+b.join("")}if(a.replace(/[^\x00-\xff]/g,"tx").length<=14){var e=c.attr("data-only");if(e){if(e==="true"){return true}else{var d=c.parent().next().text();if(d!=""){return d}else{return"此##已被注册"}}}else{var f=c.attr("data-default");if(f){if(a==f){return true}else{return 1}}else{return 1}}}else{return"##不能超过7个汉字"}},appnameCheck:function(a,d){var g=d.attr("data-error"),f=d.attr("data-default"),b=d.attr("data-rule"),e={appname:"/pipes/interfaceserver",compname:"/pipes/interfaceserver"},c={appname:{action:"common_query",business_type:"ajax_checkname",appname:a},compname:{action:"common_query",business_type:"ajax_checkcompname",comp_name:encodeURIComponent(a),comp_type:window.comp_type}};c[b]["random"]=+new Date();if(f!=a){showmsg(1,d,"正在验证"+g+"是否重复...");$.ajax({type:"get",dataType:"json",url:e[b],data:c[b],success:function(h){var j=d.attr("data-working")|0;if(h.error==0){d.attr("data-only",true);showmsg(true,d,"");if(j==2){loginWin.close();setTimeout(function(){$("form input[type='submit']").trigger("click")},500)}d.removeAttr("data-working")}else{d.attr("data-only",false);showmsg(false,d,h.msg);d.removeAttr("data-working");if(j==2){loginWin.close();loginWin.alert("<center>"+h.msg+"</center>")}return false}},error:function(){d.attr("data-only","false");d.removeAttr("data-working");setTimeout(function(){showmsg(false,d,"验证失败！请检查网络")},100);return false}});return true}else{d.attr("data-only","true");d.removeAttr("data-working");return true}},appdes:function(a,b){a=$.trim(a);$("#app_description").val(a);if(a.length>140){return"##不能超过140个汉字"}else{if(a.length<30){return"##不能少于30个汉字"}else{return true}}},apphight:function(a,b){a=$.trim(a);if(new RegExp(/^[1-9][0-9]*$/).test(a)){if(a>1200||a<700){return"##必须在700—1200之间"}else{return true}}else{return"##必须是正整数"}},appname_only:true,companyname:function(a){if(a.length<=40){return true}if(a.length>40){return"不能超过40个字符"}},comaddress:function(a){if(a.length<=100){return true}if(a.length>100){return"##不能超过100个字符"}},comperson:function(a){if(a.length<=20){return true}if(a.length>20){return"##不能超过20个字符"}},app_class_main:function(a){if(a==-1||a<=0){return"请选择分类"}return true},app_class_child:function(a){var b=$("input[name='app_type']").val();if(b!=4){return true}if(a==-1||a<=0){return"请选择分类"}return true},appweiboCheck:function(a,d){var g=d.attr("data-error"),f=d.attr("data-default"),b=d.attr("data-rule"),e="/pipes/interfaceserver",c={action:"common_query",business_type:"ajax_checkwb",name:a};if(f!=a){showmsg(1,d,"正在验证"+g);$.ajax({type:"get",dataType:"json",url:e,data:c,success:function(j){var l=d.attr("data-working")|0,h=+j.ret,k=common.getMsgByRet(h);if(k){d.attr("data-only",false);showmsg(false,d,k);d.removeAttr("data-working");return}if(h===0){d.attr("data-only",true);showmsg(true,d,"");if(l==2){setTimeout(function(){$("form input[type='submit']").trigger("click")},500)}d.removeAttr("data-working")}else{d.attr("data-only",false);d.attr("error-flag",0);showmsg(false,d,"该"+g+"不存在");d.removeAttr("data-working");if(l==2){loginWin.alert("<center>该"+g+"不存在</center>")}return false}},error:function(){d.attr("data-only","false");setTimeout(function(){showmsg(false,d,"验证失败！请检查网络")},100);return false}});return true}else{d.attr("data-only","true");d.removeAttr("data-working");return true}}};OPEN_VALIDATOR.apptypeName=/iweibo/.test(location.pathname)?"组件":(/platform/.test(location.pathname)?"平台":"应用");$("form input[type='text'],form input[type='hidden'],form textarea").blur(function(){var b,a,c,e,d;b=$(this);a=b.val();c=b.attr("data-rule");e=b.attr("data-error");if((/^link|applink$/.test(c))&&a.length>0&&a.search(/http[s]?:\/\//)==-1){a="http://"+a;b.val(a)}if(OPEN_VALIDATOR.hasOwnProperty(c)&&c){if(!$.trim(a)||(a=="请选择"&&c=="appsupport")){e+="不能为空";d=false}else{var f=OPEN_VALIDATOR[c](a,b);if(f&&c=="appsupport"){d=OPEN_VALIDATOR.appsupportIsEmpty($(this));e+="不能为空"}else{if(f==undefined){d=false;e=""}else{if(f===true){d=true}else{if(f===1){return}else{d=false;e=f.replace(/##/g,e)}}}}}showmsg(d,b,e)}});$("form input[data-rule='appname']").change(function(){var c=$(this),b=c.attr("data-rule"),a=c.val().replace(/\s/g,"");if(/^[A-Za-z0-9（）()\u4e00-\u9fa5]{1,14}$/.test(a)&&a.replace(/^\s+|\s+$/g,"").replace(/[^\x00-\xff]/g,"TX").length<=14){c.removeAttr("data-only");c.attr("data-working",1);OPEN_VALIDATOR.appnameCheck(a,c)}else{c.removeAttr("data-only")}});$("form input[type='checkbox']").click(function(){var a=$(this).attr("name"),b=$(this).attr("data-rule");if(b=="isempty"){if($(this).parent().find("input[type='checkbox']:checked").size()==0){showmsg(false,$(this),"请至少选择一项")}else{showmsg(true,$(this),"")}}});$("form input[type='submit']").click(function(){var j=this.form,g=$(j).find("input[data-working]");if(g.size()>0){g.attr("data-working",2);return false}var h=$.trim($(this).attr("data-rule")),f=+$("#app_platform").val();if(h=="formauto"){var b,a,c,l,e=true,m="",k=true;if(!OPEN_VALIDATOR.appname_only){b=false;a="此"+OPEN_VALIDATOR.apptypeName+"名称已被注册";loginWin.alert("<center>"+a+"</center>");return false}$("form input[type='text'],form input[type='hidden'],form textarea,select#app_class_main,select#app_class_child,form input[type='file']").each(function(){c=$(this).attr("data-rule");l=$(this).val();a=$(this).attr("data-error");if(OPEN_VALIDATOR.hasOwnProperty(c)&&c){if(!$.trim(l)||(l=="请选择"&&c=="appsupport")){a+="不能为空";b=false}else{var n=OPEN_VALIDATOR[c](l,$(this));if(n&&c=="appsupport"){b=OPEN_VALIDATOR.appsupportIsEmpty($(this));a+="不能为空"}else{if(n===true){b=true}else{if(n===1){return}else{b=false;a=n.replace(/##/g,a)}}}}showmsg(b,$(this),a);if(e&&!b){loginWin.alert("<center>"+a+"</center>")}e=e&&b}else{if($(j).hasClass("wirelessappform")&&$(this).hasClass("required")){if((!$(this).val()&&!$(this).attr("data-default").replace("NULL",""))||$(this).attr("data-error")){k=false;str="<center>请上传应用图标</center>";$(this).prev(".uploadbtn")[0].scrollIntoView(true);if(e){loginWin.alert(str)}tooltip.show(str,$(this).prev(".uploadbtn"),2000);e=e&&k;return false}}}});if(!e){return e}var d=$("input[name='user_agree']").attr("checked");if(d===undefined){if(e){if(app_type===6){j.submit()}else{$(j).submit()}}else{return false}}else{if(d==true){if(e){if(app_type===6){j.submit()}else{$(j).submit()}}else{return false}}else{alert("您必须同意我们的服务协议才能继续");return false}}}return false});$("input[data-rule='link']").keydown(function(a){if(a.keyCode==13){return false}});$("form").keydown(function(a){if(a.keyCode==13){$(this).find("input[type='submit']").trigger("click");return false}});$("form input[type='reset']").click(function(){$(".form_input").next(".errorTip").remove();$(".form_input").next(".currectTip").remove()});function getlen(c){var a=0;for(var b=0;b<c.length;b++){if(c.charCodeAt(b)>255){a+=2}else{a++}}return a}function showmsg(c,d,a){var b;if(!c){b=' <span class="tip tip_err"><span class="tip_icon"></span>'+a+"</span>"}else{if(true===c){b=' <span class="tip tip_ok"><span class="tip_icon"></span></span>'}else{if(1===c){b=' <span class="tip tip_waiting"><span class="tip_icon"></span>'+a+"</span>"}else{if(2===c){b=' <span class="tip">'+a+"</span>"}}}}if(d.parent(".form_input").size()){d.parent(".form_input").parent().find(".tip").remove();d.parent(".form_input").after(b);d.parent(".form_input").parent().find(".inputdes").first().hide()}else{if(d.parent(".form_element").size()){d.parent(".form_element").parent().find(".tip").remove();d.parent(".form_element").after(b);d.parent(".form_element").parent().find(".inputdes").first().hide()}else{d.parent().find(".tip").remove();d.parent().append(b)}}}var need_post=false;var padstr=osstr=phonestr="";$(function(){function d(){var e=[];$("input[name='check_app_os']:checked").each(function(){e.push($(this).val())});$("input[name='app_os']").val(e.join("|"));return e}function b(){var e=[];$("input[name='check_app_phone']:checked").each(function(){e.push($(this).val())});$("input[name='app_phone']").val(e.join("|"));return e}function c(){var e=[];$("input[name='check_app_pad']:checked").each(function(){e.push($(this).val())});$("input[name='app_pad']").val(e.join("|"));return e}$("input[name='check_app_os'],input[name='check_app_phone'],input[name='check_app_pad']").change(function(){var f=$(this).attr("name").replace("check_app_","").toLowerCase();var e="";switch(f){case"os":e=d();$("input[name='app_phone']").val("");$("input[name='app_pad']").val("");break;case"phone":e=b();$("input[name='app_os']").val("");$("input[name='app_pad']").val("");break;case"pad":e=c();$("input[name='app_os']").val("");$("input[name='app_phone']").val("");break}$("#app_support").trigger("blur")});$("form").submit(function(){var e=$("input[name='app_type']").val();if(e!=6){if($(".errorTip").length>0){return}if(!need_post){location.href=NextUrl;return}if(e==3){var j="|";typedata+=("&app_os="+$("input[name='app_os']").val());typedata+=("&app_phone="+$("input[name='app_phone']").val());typedata+=("&app_pad="+$("input[name='app_pad']").val());typedata+="&app_down_url="+encodeURIComponent($("input#app_down_url").val())}if(global_obj.data.app.app_type==3&&$("input[name='check_app_os']:checked").size()==0){loginWin.alert("<center>请至少选择一个应用平台</center>");return false}var f=$("#app_class_child").size()>0?$("#app_class_child").val():-1;var h={app_name:encodeURIComponent($("input#app_name").val()),appid:app_id,action:"common_query",app_hight:encodeURIComponent($("input#app_hight").val()),app_url:encodeURIComponent($("input#app_url").val()),app_description:encodeURIComponent($("textarea#app_description").val()),app_weibo:encodeURIComponent($("input#app_weibo").val()),need_post:1,postname:$("input#postname").val(),app_class_main:$("#app_class_main").val(),app_class_child:f,business_type:"savecheckapp"};var g=$.param(h)+typedata;$.ajax({type:"POST",url:"/pipes/interfaceserver",dataType:"json",data:g,success:function(l){var k=+(l.ret||l.error),m=common.getMsgByRet(k);if(m){loginWin.alert("<center>"+m+"</center>");return}if(k===0){location.href=NextUrl}else{if(k===1){loginWin.alert("<center>提交内容包含非法数据，请重新提交</center>")}else{loginWin.alert("<center>数据提交失败，请稍候再试</center>")}}},error:function(){loginWin.alert("<center>网络连接失败，请稍候再试</center>")}})}return false});$("input#app_name,input#app_hight,input#app_url,input#app_down_url,input#app_support,textarea#app_description,input[type=checkbox],input#app_weibo,select#app_class_main,select#app_class_child").change(function(){need_post=1});$("form input[data-rule='appweibo']").change(function(){var f=$(this),e=f.attr("data-rule"),g=f.val();if(e=="appweibo"){if(/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/g.test(g)){f.removeAttr("data-only");f.removeAttr("error-flag");f.attr("data-working",1);OPEN_VALIDATOR.appweiboCheck(g,f)}}});var a=$("input[name='app_phone'],input[name='app_pad'],input[name='app_os']").filter("[value ^='']");if(a.size()===0){$("input[name='app_phone']").val("Android");a=$("input[name='app_phone']")}a.each(function(e){var j=$(this).attr("name"),h=$(this).val(),g=$("#app_support").attr("data-terminal")||0;if(h||0){$("#app_support").val($(".form_select_options").find("li[data-terminal='"+j+"']").text());$("#app_support").attr("data-terminal",j);$("#app_support_list").show();s=h.split("|");for(var f in s){$("#app_support_list").find("input[value='"+s[f]+"']").parent().show().siblings("dd").hide();$("input[name='check_"+j+"']").filter("[value='"+s[f]+"']").attr("checked","checked")}return false}else{$("#app_support").val("请选择").removeAttr("data-terminal")}});$(".tip").remove();$("form .form_label").each(function(){var e=$(this).text().replace(new RegExp("\u00A0","g"),"");if($(this).find("em").size()>0){return}if(/^[\s]*$/.test(e)){return}$(this).prepend("<em>*</em>")})});$("#app_class_child").change(function(){var b=$("#app_class_child");var a=b.val();if(a!=-1){showmsg(true,b,"")}});$("#app_class_main").change(function(){var b=$("#app_class_child");var a=$("#app_class_main").val();if(a!=-1){$.ajax({dataType:"json",type:"get",url:"/pipes/interfaceserver",data:{action:"common_query",business_type:"getapptype",cid:a},success:function(d){if(d!=null){var c=+d.ret,e=common.getMsgByRet(c);if(e){loginWin.alert("<center>"+e+"</center>");return}}showmsg(true,$("#app_class_main"),"");$.each(b,function(){$(this).children().remove()});$.each(d,function(f,g){b.append("<option value="+g.cid+">"+g.cname+"</option>")});b.css("display","inline-block")}})}else{$.each(b,function(){$(this).children().remove()});b.css("display","none");showmsg(false,b,"应用分类不能为空")}});var submitCallback=function(c){var b=+(c.code||c.error),d=common.getMsgByRet(b);loginWin.close();if(d){loginWin.alert("<center>"+d+"</center>");return}if(b==0){if(loginWin){loginWin.close();window.location.href="/development/wappcheckinfo?appid="+app_id}}else{var a="";if(b>100&&b<200){a="图片不合法"}else{if(b>200&&b<300){a="参数非法"}else{a=c.msg||"未知原因"}}if(loginWin){loginWin.show({title:"提交审核",width:410,height:185,text:'<center><br/><label class="icon_alert"></label> &nbsp; '+OPEN_VALIDATOR.apptypeName+"提交审核因为&nbsp;<strong>"+a+'</strong>&nbsp;失败，请稍后再试。<br/><input type="button" class="devSubmit closeBtn" value="确定"/></center>'});loginWin.contentarea.find(".closeBtn").bind("click",function(){loginWin.close()})}}};$(function(){if(!$("form").first().hasClass("wirelessappform")){return}$('<div class="tooltip" id="tooltip"><div class="toolangle"><span class="a1">◆</span><span class="a2">◆</span></div><div class="tooltext"></div></div>').appendTo($("body"));window.tooltip={timer:null,show:function(d,b,a){var c=b.offset();$("#tooltip").show().css({left:c.left,top:c.top+b.height()}).find(".tooltext").html(d);b.get(0).scrollIntoView(true);clearTimeout(tooltip.timer);if(a){tooltip.timer=setTimeout(function(){$("#tooltip").fadeOut()},a)}}};$("input[type='file']").change(function(){var j=this.files&&this.files[0],e=$(this),a=$(this).parent().find("img")[0],d=$(this).parent().find("img"),k=new Image(),f="",g=d.attr("_size")||e.attr("_size")||500;if(document.all){a.src="http://mat1.gtimg.com/app/opent/images/websites/0.gif";var b=setTimeout(function(){if(+(k.width||"")===0||+(k.height||"")===0){loginWin.alert({text:'<div style="margin:0 0 0 30px;">由于您的浏览器安全限制，无法读取文件尺寸大小<br/>请将本站( <span style="color:red;font-weight:bold;">'+location.href.slice(0,location.href.indexOf(location.pathname)+1)+'</span> )添加到受信任的站点列表中 <br/>点击此处了解 <a href="http://open.t.qq.com/bbs/forum.php?mod=viewthread&tid=21271" target="_blank">如何将本站添加到受信任的站点列表中？</a></div><div style="color:#090;margin:0 30px;">您也可以使用非IE内核浏览器，如chrome、firefox（Safari暂不支持）</div>',width:460,height:200});e.attr("data-error",f);return}},200);k.onload=function(){if(/\.(png)$/i.test(k.src)==false){f="你上传的图片不是有效的png格式图片";loginWin.alert("<center>"+f+"</center>");e.attr("data-error",f);return}else{if(k.fileSize/1024>g){f="文件大小不能超过"+g+"K，请重新选择";loginWin.alert("<center>"+f+"</center>");e.attr("data-error",f);return}else{if(d.attr("_width")&&d.attr("_width")){if(+(k.width||"")===0||+(k.height||"")===0){loginWin.alert({text:'<div style="margin:0 0 0 30px;">由于您的浏览器安全限制，无法读取文件尺寸大小<br/>请将本站( <span style="color:red;font-weight:bold;">'+location.href.slice(0,location.href.indexOf(location.pathname)+1)+'</span> )添加到受信任的站点列表中 <br/>点击此处了解 <a href="http://open.t.qq.com/bbs/forum.php?mod=viewthread&tid=21271" target="_blank">如何将本站添加到受信任的站点列表中？</a></div><div style="color:#090;margin:0 30px;">您也可以使用非IE内核浏览器，如chrome、firefox（Safari暂不支持）</div>',width:460,height:200});e.attr("data-error",f);return}else{if(k.width!=d.attr("_width")||k.height!=d.attr("_height")){f="你上传的图片尺寸"+k.width+"×"+k.height+"不符合要求，请选择一张"+d.attr("_width")+"×"+d.attr("_height")+"大小的png图片";e.attr("data-error",f);f+='<div style="border-top:1px dashed #ccc;margin-top:5px;padding-top:5px;"><strong>如果你的图片尺寸符合要求但仍然看到该提示，你可以：</strong><br/>1、如果你的浏览器是双核浏览器，可以切换到极速模式重新上传<br/>2、如果你的浏览器不是双核浏览器，可以使用其它浏览器，如chrome或firefox</div>';loginWin.alert({text:'<div style="margin:0 25px;">'+f+"</center>",width:500,height:215});e.attr("data-error",f);return}}}}}a.src=k.src;e.removeAttr("data-error");this.onload=null};k.onerror=function(){f="你上传的图片不是有效的png格式图片";loginWin.alert("<center>"+f+"</center>");e.attr("data-error",f);return};k.src=this.value;return}if(/^image\/(png)$/i.test(j.type)&&(j.fileSize||j.size)/1024<=g){if(!window.FileReader){for(var l in j){a.src=j.fileName}f="你的浏览器不支持fileReader，无法预览图片<br/>建议使用firefox或chrome浏览器或升级您当前的浏览器至最新版本";loginWin.alert({text:"<center>"+f+"</center>",height:170});e.attr("data-error",f);return}var h=new FileReader();var c=function(m){return function(n){for(var o in m){m[o].src=n.target.result}}};h.onload=c([a,k]);h.readAsDataURL(j);c([a]);if(d.attr("_width")&&d.attr("_width")){(function(){var n=arguments.callee,m=arguments[0];if((((k.width||k.height)|0)==0)&&(m<10)){setTimeout(function(){n(++m)},100);return}if(k.width!=d.attr("_width")||k.height!=d.attr("_height")){f="你上传的图片尺寸"+k.width+"×"+k.height+"不符合要求<br/>请选择一张"+d.attr("_width")+"×"+d.attr("_height")+"大小的png图片";a.src="http://mat1.gtimg.com/app/opent/images/websites/0.gif";loginWin.alert({text:"<center>"+f+"</center>",height:160});e.attr("data-error",f);return}e.removeAttr("data-error")})(0)}e.removeAttr("data-error");return}else{if(/^image\/(png)$/i.test(j.type)==false){f="你上传的图片不是有效的png格式图片";loginWin.alert("<center>"+f+"</center>");e.attr("data-error",f);return}else{if((j.fileSize||j.size)/1024>g){f="文件大小不能超过"+g+"K，请重新选择";loginWin.alert("<center>"+f+"</center>");e.attr("data-error",f);return}}}})});