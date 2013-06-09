if(window.OPEN_VALIDATOR){}var OPEN_VALIDATOR;OPEN_VALIDATOR={isempty:function(){return true},appname_only:true,assname_exists:true,tname:function(a){if(a&&!(/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/g.test(a))){return"输入有误"}return true},link:function(a){var c="^((news|telnet|nttp|file|http|ftp|https)://)(([-A-Za-z0-9_]+(\\.[-A-Za-z0-9_]+)*(\\.[-A-Za-z]{2,6}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_$\\.+!*(),;:@&=?/~#%']*)*";var b=new RegExp(c);if(b.test(a)){return true}else{return"格式错误"}},applink:function(a){if(a){return OPEN_VALIDATOR.link(a)}else{return true}},compname:function(f,e){var h,c,a=e&&e.attr("data-error")||"网站名称",g=e&&e[0].form;f=f.replace(/^\s+|\s$/g,"");e.val(f);c=f.match(/[^ A-Za-z0-9（）()\u4e00-\u9fa5]+/g);h=f.replace(/[^\x00-\xff]/g,"tx").length;$("#comp_name").val(f);if(f&&c){return"##不能含有非法字符"+c.join("")}if(h>0&&h<=14){var b=e.attr("data-only");if(b){if(b==="true"){return true}else{return"此##已被注册"}}else{var d=e.attr("data-default");if(d){if(f==d){return true}else{return 1}}else{return 1}}}else{if(h==0){return"##不能为空"}else{return"##不能超过7个汉字"}}},appnameCheck:function(a,d){var g=d.attr("data-error"),f=d.attr("data-default"),b=d.attr("data-rule"),e={appname:"/pipes/interfaceserver",compname:"/pipes/interfaceserver"},c={appname:{action:"common_query",business_type:"ajax_checkname",appname:encodeURIComponent(a)},compname:{action:"common_query",business_type:"ajax_checkcompname",comp_name:encodeURIComponent(a),comp_type:window.comp_type}};c[b]["random"]=+new Date();if(f!=a){showmsg(1,d,"正在验证"+g+"是否重复...");$.ajax({type:"get",dataType:"json",url:e[b],data:c[b],success:function(h){var i=d.attr("data-working")|0;if(h.error==0){d.attr("data-only",true);showmsg(true,d,"");if(i==2){loginWin.close();setTimeout(function(){$("form input[type='submit']").trigger("click")},500)}d.removeAttr("data-working")}else{d.attr("data-only",false);showmsg(false,d,h.msg);d.removeAttr("data-working");if(i==2){loginWin.close();loginWin.alert("<center>"+h.msg+"</center>")}return false}},error:function(){d.attr("data-only","false");setTimeout(function(){showmsg(false,d,"验证失败！请检查网络")},100);return false}});return true}else{d.attr("data-only","true");d.removeAttr("data-working");return true}},topicname:function(a,b){if($.trim(a).length==0){return"不能为空"}else{if(/^[^#]{1,20}$/.test($.trim(a))){return true}else{if(/^\s*$/.test(a)){return true}else{if($.trim(a).length>20){return"不能超过20个字符"}else{return"不符合规则"}}}}},appdes:function(a,b){a=$.trim(a);$("#app_description").val(a);if(a.length<=280){return true}else{return"不能超过140个汉字"}},companyname:function(a){if(a.length<=40){return true}if(a.length>40){return"不能超过40个字符"}},assname:function(a,b){var c=b.attr("data-only"),d=b.attr("data-error");if(/^\s*$/.test(a)){return"不能为空"}else{if(!(/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/g.test(a))){return"##格式错误"}}if(c){if(c==="true"){return true}else{return"此##不存在"}}else{return 1}},assnameCheck:function(a,d){var g=d.attr("data-error"),f=d.attr("data-default"),b=d.attr("data-rule"),e="/pipes/interfaceserver?t="+(+new Date()),c={account:a,action:"common_query",business_type:"ajax_checkacc"};if(f!=a){showmsg(1,d,"检验中...");$.ajax({type:"post",dataType:"json",url:e,data:c,success:function(i){var k=d.attr("data-working")|0,h=+i.ret,j=common.getMsgByRet(h);if(j){d.attr("data-only",false);showmsg(false,d,j);d.removeAttr("data-working");return}if(h===0){d.attr("data-only",true);showmsg(true,d,"");if(k==2){loginWin.close();setTimeout(function(){$("#showcode").trigger("click")},500)}d.removeAttr("data-working")}else{if(h===-1){d.attr("data-only",false);showmsg(false,d,"此"+g+"不存在");d.removeAttr("data-working");if(k==2){loginWin.close();loginWin.alert("<center>此"+g+"不存在</center>")}}}},error:function(){d.attr("data-only","false");d.removeAttr("data-working");setTimeout(function(){showmsg(false,d,"验证失败！请检查网络")},100)}})}}};function getlen(c){var a=0;for(var b=0;b<c.length;b++){if(c.charCodeAt(b)>255){a+=2}else{a++}}return a}function showmsg(c,d,a){var b;if(!c){b=' <span class="tip tip_err"><span class="tip_icon"></span>'+a+"</span>"}else{if(true===c){b=' <span class="tip tip_ok"><span class="tip_icon"></span></span>'}else{if(1===c){b=' <span class="tip tip_waiting"><span class="tip_icon"></span>'+a+"</span>"}else{if(2===c){b=' <span class="tip">'+a+"</span>"}}}}if(d.parent(".form_input").size()){d.parent(".form_input").parent().find(".tip").remove();d.parent(".form_input").after(b);d.parent(".form_input").parent().find(".inputdes").first().hide()}else{d.parent().find(".tip").remove();d.parent().append(b)}}function compValidateEvent(){$("input[type='text'],textarea").blur(function(){var b,a,c,e,d;b=$(this);b.val($.trim(b.val()));a=b.val();c=b.attr("data-rule");e=b.attr("data-error");if(c=="link"&&a.length>0&&a.search(/http[s]?:\/\//)==-1){a="http://"+a;b.val(a)}if(OPEN_VALIDATOR.hasOwnProperty(c)&&c){if(!$.trim(a)&&c!="tname"&&c!="appdes"&&c!="topicname"&&c!="applink"){e+="不能为空";d=false}else{var f=OPEN_VALIDATOR[c](a,b);if(f==undefined){d=false;e=""}else{if(f===true){d=true}else{if(f===1){return}else{d=false;e=f.replace(/##/g,e)}}}}showmsg(d,b,e)}});$("form input[data-rule='appname'],form input[data-rule='compname'],input[data-rule='assname']").change(function(){var c=$(this),b=c.attr("data-rule"),a=c.val().replace(/\s/g,"");if(b==="assname"){if(/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/g.test(a)){c.removeAttr("data-only");c.attr("data-working",1);OPEN_VALIDATOR.assnameCheck(a,c)}}else{if(/^[A-Za-z0-9（）()\u4e00-\u9fa5]{1,14}$/.test(a)&&a.replace(/^\s+|\s+$/g,"").replace(/[^\x00-\xff]/g,"TX").length<=14){c.removeAttr("data-only");c.attr("data-working",1);OPEN_VALIDATOR.appnameCheck(a,c)}else{c.removeAttr("data-only")}}});$("#showcode").click(function(){var h,g,a,e,b=true,f="",d=this.form,c=$(d).find("input[data-working]");if(c.size()>0){c.attr("data-working",2);return false}$(".appsArea2 input[type='text'],.appsArea2 textarea,.comp_area input[type='text'],.comp_area textarea").each(function(){a=$(this).attr("data-rule");e=$(this).val();g=$(this).attr("data-error");if(OPEN_VALIDATOR.hasOwnProperty(a)&&a){if(!$.trim(e)&&a!="tname"&&a!="appdes"&&a!="topicname"&&a!="applink"){g+="不能为空";h=false}else{var i=(a==="appname"?OPEN_VALIDATOR.appname_only:true)&&(a==="assname"?OPEN_VALIDATOR.assname_exists:true)&&OPEN_VALIDATOR[a](e,$(this));if(i===true){h=true}else{if(i===1){return}else{h=false;g=i.replace(/##/g,g)}}}b=b&&h;showmsg(h,$(this),g);if(h===false){loginWin.alert("<center>"+g+"</center>")}}});if(b){if(window.formSubmit){window.formSubmit()}}return false});$("input[data-rule='link']").keydown(function(a){if(a.keyCode==13){return false}});$("form").keydown(function(a){if(a.keyCode==13){}});$("form input[type='reset']").click(function(){$(".form_input").next(".errorTip").remove();$(".form_input").next(".currectTip").remove()})}eventBindFuncList.push(compValidateEvent);