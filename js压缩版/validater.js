var OPEN_VALIDATOR;OPEN_VALIDATOR={checkip:function(B){var A=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;var C=B.match(A);if(C===null){return"非法的IP地址段！"}else{return true}},isempty:function(){return true},mobilenum:function(A,B){A=A.replace(/\s/g,"");B.val(A);if(new RegExp(/[^\d]/g).test(A)){return"你填写的##含有非法字符"}if(A.length==11){if(new RegExp(/^1(?:3|5|8)\d{9}$/).test(A)){return true}else{return"仅限中国境内##"}}else{return"请填写11位##"}},tname:function(A){if(A&&!(/^[a-zA-Z][a-zA-Z0-9_\-]{3,19}$/g.test(A))){return"##输入有误"}return true},telnum:function(A,B){A=A.replace(/\s/g,"");B.val(A);if(new RegExp(/^([0-9]|[-])+$/g).test(A)){return true}else{return"你填写的##含有非法字符"}},passport:function(A,D){A=A.replace(/\s/g,"");D.val(A);var E=A.match(/[^0-9a-zA-Z]+/g);if(A&&E){return"你填写的##含有非法字符"}if(new RegExp(/^[0-9a-zA-Z]+$/).test(A)){var C=D.attr("data-only");if(C){if(C==="true"){return true}else{return"该##已被注册"}}else{var B=D.attr("data-default");if(B){if(A==B){return true}else{return 1}}else{return 1}}}},cardnum_new:function(A,D){A=A.replace(/\s/g,"");D.val(A);var E=A.match(/[^0-9xX]+/g);if(A&&E){return"你填写的##含有非法字符"}if(A.length==18){if(new RegExp(/^[0-9xX]{18}$/).test(A)){var C=D.attr("data-only");if(C){if(C==="true"){return true}else{return"该##已被注册"}}else{var B=D.attr("data-default");if(B){if(A==B){return true}else{return 1}}else{return 1}}}}else{return"请填写18位身份证号码"}},cardnumCheck:function(A,E){var B=E.attr("data-error"),C=E.attr("data-default"),F=E.attr("data-rule"),D="/pipes/interfaceserver?action=common_query&business_type=ajax_checkuserid&userid="+encodeURIComponent(A);if(C!=A){showmsg(1,E,"正在验证"+B);$.ajax({"type":"get","dataType":"json","url":D,"success":function(I){var G=E.attr("data-working")|0,J=+I.code,H=common.getMsgByRet(J);if(H){E.attr("data-only",false);showmsg(false,E,H);E.removeAttr("data-working");return}if(J===0){E.attr("data-only",true);showmsg(true,E,"");if(G==2){setTimeout(function(){$("form input[type='submit']").trigger("click")},500)}E.removeAttr("data-working")}else{E.attr("data-only",false);E.attr("error-flag",0);showmsg(false,E,"该"+B+"已被注册");E.removeAttr("data-working");if(G==2){loginWin.alert("<center>该"+B+"已被注册</center>")}return false}},"error":function(){E.attr("data-only","false");setTimeout(function(){showmsg(false,E,"验证失败！请检查网络")},100);return false}});return true}else{E.attr("data-only","true");E.removeAttr("data-working");return true}},cardnum:function(B,D){v=B.toLowerCase();var G="##格式错误";if(new RegExp(/^[\sa-z][a-z][\d]{6,6}(\d|a|\(\d\)|\(a\))$/).test(v)){var C={" ":58,"a":10,"b":11,"c":12,"d":13,"e":14,"f":15,"g":16,"h":17,"i":18,"j":19,"k":20,"l":21,"m":22,"n":23,"o":24,"p":25,"q":26,"r":27,"s":28,"t":29,"u":30,"v":31,"w":32,"x":33,"y":34,"z":35};var A=v.split("");var E=0;for(i=0;i<A.length;i++){if(i==0){if(new RegExp(/^[\sa-zA-Z]$/).test(A[i])){E+=9*C[A[i]]}else{return G}}else{if(i==1){if(new RegExp(/^[a-zA-Z]$/).test(A[i])){E+=(9-i)*C[A[i]]}else{return G}}else{if(A[i]=="("||A[i]==")"){E+=0}else{if(i==8||i==9){var F=A[i];if(F=="a"){F=10}E+=(9-i)*F}else{E+=(9-i)*A[i]}}}}}if(E%11==0){return true}else{return G}}else{if(v.length==15){if(new RegExp(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/).test(v)){return true}else{return G}}else{if(v.length==18){if(new RegExp(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])[\dxX]{4}$/).test(v)){return true}else{return G}}else{return G}}}},cardnumIsSingle:function(A,B){if(A==B.attr("data-default")){showmsg(true,B,"");B.removeAttr("data-only");return}var C=B.attr("data-error");if(true===OPEN_VALIDATOR.cardnum(A)){$.getJSON("/developer/checkid/"+encodeURIComponent(A),function(D){if(D.error==0){showmsg(true,B,"");B.removeAttr("data-only")}else{showmsg(false,B,"此"+C+"已被注册");B.attr("data-only","此"+C+"已被注册")}})}else{showmsg(false,B,C+"格式错误")}},link:function(A){var B="^((news|telnet|nttp|file|http|ftp|https)://)(([-A-Za-z0-9_]+(\\.[-A-Za-z0-9_]+)*(\\.[-A-Za-z]{2,6}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_$\\.+!*(),;:@&=?/~#%']*)*";var C=new RegExp(B);if(/["'<>]/g.test(A)){return"##不能含有单引号，双引号，尖括号"}else{if(C.test(A)){return true}else{return"##格式错误"}}},applink:function(A){if(A){return OPEN_VALIDATOR.link(A)}else{return true}},email:function(A){if(new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/).test(A)){return true}else{return"##格式错误"}},appname:function(A,E){A=A.replace(/^\s+|\s$/g,"");E.val(A);var F=A.match(/[^ A-Za-z0-9（）()\u4e00-\u9fa5]+/g);if(A&&F){return"##不能含有非法字符"+F.join("")}if(A.replace(/[^\x00-\xff]/g,"tx").length<=14){var C=E.attr("data-only");if(C){if(C==="true"){return true}else{var D=E.parent().next().text();if(D!=""){return D}else{return"此##已被注册"}}}else{var B=E.attr("data-default");if(B){if(A==B){return true}else{return 1}}else{return 1}}}else{return"##不能超过7个汉字"}},appnameCheck:function(A,E){var B=E.attr("data-error"),C=E.attr("data-default"),G=E.attr("data-rule"),D={"appname":"/pipes/interfaceserver","compname":"/pipes/interfaceserver"},F={"appname":{"action":"common_query","business_type":"ajax_checkname","appname":A},"compname":{"action":"common_query","business_type":"ajax_checkcompname","comp_name":encodeURIComponent(A),"comp_type":window.comp_type}};F[G]["random"]=+new Date();if(C!=A){showmsg(1,E,"正在验证"+B+"是否重复...");$.ajax({"type":"get","dataType":"json","url":D[G],"data":F[G],"success":function(I){var H=E.attr("data-working")|0;if(I.code==0){E.attr("data-only",true);showmsg(true,E,"");if(H==2){loginWin.close();setTimeout(function(){$("form input[type='submit']").trigger("click")},500)}E.removeAttr("data-working")}else{E.attr("data-only",false);showmsg(false,E,I.msg);E.removeAttr("data-working");if(H==2){loginWin.close();loginWin.alert("<center>"+I.msg+"</center>")}return false}},"error":function(){E.attr("data-only","false");E.removeAttr("data-working");setTimeout(function(){showmsg(false,E,"验证失败！请检查网络")},100);return false}});return true}else{E.attr("data-only","true");E.removeAttr("data-working");return true}},appdes:function(A,B){A=$.trim(A);$("#app_description").val(A);if(A.length<=140){return true;b}else{return"##不能超过140个字符"}},companyname:function(A,B){A=A.replace(/(^\s+)|(\s+$)/g,"");B.val(A);if(new RegExp(/^[^<>'"]+$/).test(A)){return true}else{return"##格式错误"}},complicensenum:function(A,D){A=A.replace(/\s/g,"");D.val(A);var E=A.match(/[^0-9\-]+/g);if(A&&E){return"你填写的##含有非法字符"}if(A.length>=8&&A.length<=20){if(new RegExp(/^[0-9]([0-9]|-(?!-)){6,18}[0-9]$/).test(A)){var C=D.attr("data-only");if(C){if(C==="true"){return true}else{return"该##已被注册"}}else{var B=D.attr("data-default");if(B){if(A==B){return true}else{return 1}}else{return 1}}}else{return"##格式错误"}}else{return"请填写8-20位##"}},complicensenumCheck:function(A,E){var B=E.attr("data-error"),C=E.attr("data-default"),F=E.attr("data-rule"),D="/pipes/interfaceserver?action=common_query&business_type=checkcomid&comid="+encodeURIComponent(A);if(C!=A){showmsg(1,E,"正在验证"+B);$.ajax({"type":"get","dataType":"json","url":D,"success":function(I){var G=E.attr("data-working")|0,J=+I.error,H=common.getMsgByRet(J);if(H){E.attr("data-only",false);showmsg(false,E,H);E.removeAttr("data-working");return}if(J===0){E.attr("data-only",true);showmsg(true,E,"");if(G==2){setTimeout(function(){$("form input[type='submit']").trigger("click")},500)}E.removeAttr("data-working")}else{E.attr("data-only",false);E.attr("error-flag",0);showmsg(false,E,"该"+B+"已被注册");E.removeAttr("data-working");if(G==2){loginWin.alert("<center>该"+B+"已被注册</center>")}return false}},"error":function(){E.attr("data-only","false");setTimeout(function(){showmsg(false,E,"验证失败！请检查网络")},100);return false}});return true}else{E.attr("data-only","true");E.removeAttr("data-working");return true}},companyprovince:function(A,B){return true},comaddress:function(A,B){A=A.replace(/(^\s+)|(\s+$)/g,"");B.val(A);if(A.length<=100){if(new RegExp(/^[^<>'"]+$/).test(A)){return true}else{return"你填写的##含有非法字符"}}if(A.length>100){return"##不能超过100个字符"}},comperson:function(A,C){A=A.replace(/(^\s+)|(\s+$)/g,"");C.val(A);var D=/^[a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D][a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D\s]*$/,B=A.match(D);if(A&&B){return true}else{return"##含有非法字符"}},compname:function(D,E){var B,G,A=E&&E.attr("data-error")||"网站名称",C=E&&E[0].form;D=D.replace(/^\s+|\s$/g,"");E.val(D);G=D.match(/[^ A-Za-z0-9（）()\u4e00-\u9fa5]+/g);B=D.replace(/[^\x00-\xff]/g,"tx").length;$("#comp_name").val(D);if(D&&G){return"##不能含有非法字符"+G.join("")}if(B>0&&B<=14){var H=E.attr("data-only");if(H){if(H==="true"){return true}else{return"此##已被注册"}}else{var F=E.attr("data-default");if(F){if(D==F){return true}else{return 1}}else{return 1}}}else{if(B==0){return"##不能为空"}else{return"##不能超过7个汉字"}}},app_class_main:function(A){if(A==-1||A<=0){return"应用分类不能为空"}return true}};$("form input[type='text'],form textarea").blur(function(){var G;var A;var F;var D;var E;G=$(this);A=G.val();F=G.attr("data-rule");D=G.attr("data-error");if((/^link|applink$/.test(F))&&A.length>0&&A.search(/http[s]?:\/\//)==-1){A="http://"+A;G.val(A)}if(typeof B==="undefined"){var B=false}if(OPEN_VALIDATOR.hasOwnProperty(F)&&F){if(!$.trim(A)&&F!="tname"&&F!="appdes"&&(F!="applink"||(F=="applink"&&B==true))&&F!="companycity"){D+="不能为空";E=false}else{var C=OPEN_VALIDATOR[F](A,G);if(C==undefined){E=false;D=""}else{if(C===true){E=true}else{if(C===1){return}else{E=false;D=C.replace("##",D)}}}}if(F!="companyprovince"){showmsg(E,G,D)}else{if(F=="companyprovince"&&E==true){showmsgforselect(E,G,D)}}}});$("form input[type='checkbox']").click(function(){var A=$(this).attr("name"),B=$(this).attr("data-rule");if(B=="isempty"){if($(this).parent().find("input[type='checkbox']:checked").size()==0){showmsg(false,$(this),"请至少选择一项")}else{showmsg(true,$(this),"")}}});$("form input[type='submit']").click(function(){var I=this.form,K=$(I).find("input[data-working]");if(K.size()>0){K.attr("data-working",2);return false}var J=$.trim($(this).attr("data-rule"));if(J=="formauto"){var C,D,A,G,L=true,F="",B=$(I).find("input[data-only]"),H=true;if(B.size()&&B.attr("data-only")==="false"){C=false;D=$(I).find(".tip_err:eq(0)").text();if(D!=""){loginWin.alert("<center>"+D+"</center>")}return false}$("form input[type='file']").each(function(){if($(this).attr("data-error")){H=false;loginWin.alert("<center>"+$(this).attr("data-error")+"</center>");return false}});if(!H){return false}$("form input[type='text'],form textarea,form select").each(function(){A=$(this).attr("data-rule");G=$(this).val();D=$(this).attr("data-error");if(typeof P==="undefined"){var P=false}if(OPEN_VALIDATOR.hasOwnProperty(A)&&A){if(!$.trim(G)&&A!="tname"&&A!="appdes"&&(A!="applink"||(A=="applink"&&P==true))&&A!="companycity"){C=false;D+="不能为空"}else{if(A=="link"){var N=$("input[name='app_hosting']:checked").val();if(N){if(N==1){return}}}var O=OPEN_VALIDATOR[A](G,$(this));if(O===true){C=true}else{if(O===1){return}else{C=false;D=O.replace("##",D)}}}L=L&&C;if(A!="companyprovince"){showmsg(C,$(this),D)}else{showmsgforselect(C,$(this),D)}if(!C){loginWin.alert("<center>"+D+"</center>");return false}}});if(!L){return false}if($(I).hasClass("wirelessappform")){var E=$("input[name='appplatform']");if($("input[name='appplatform']:checked").length==0){showmsg(false,$("#iphone_pf"),"请至少选择一个平台");loginWin.alert("<center>请至少选择一个平台</center>");return false}}var M=$("input[name='user_agree']");if(M.size()===0){if(L){$("form").submit();return false}else{return false}}else{if(M.not(":checked").size()>0){loginWin.alert("<center>您尚未同意《"+(M.not(":checked").attr("agreement")||"腾讯微博开放平台开发者服务协议")+"》</center>");return false}else{$("form").submit();return false}}}return false});$("input[data-rule='link']").keydown(function(A){if(A.keyCode==13){return false}});$("form").keydown(function(A){if(A.keyCode==13){$(this).find("input[type='submit']").trigger("click");return false}});$("form input[type='reset']").click(function(){$(".form_input").next(".errorTip").remove();$(".form_input").next(".currectTip").remove()});$("form input[data-rule='appname'],form input[data-rule='compname']").change(function(){var B=$(this),C=B.attr("data-rule"),A=B.val().replace(/\s/g,"");if(/^[ A-Za-z0-9（）()\u4e00-\u9fa5]{1,14}$/.test(A)&&A.replace(/^\s+|\s+$/g,"").replace(/[^\x00-\xff]/g,"TX").length<=14){B.removeAttr("data-only");B.attr("data-working",1);OPEN_VALIDATOR["appnameCheck"](A,B)}else{B.removeAttr("data-only")}});$("form input[data-rule='complicensenum'],form input[data-rule='cardnum_new'],form input[data-rule='passport']").change(function(){var D=$(this),E=D.attr("data-rule"),B=D.val().replace(/\s/g,"");var C={"complicensenum":{"reg":/^[0-9]([0-9]|-(?!-)){6,18}[0-9]$/,"check":"complicensenumCheck"},"cardnum_new":{"reg":/^[0-9xX]{18}$/,"check":"cardnumCheck"},"passport":{"reg":/^[0-9a-zA-Z]+$/,"check":"cardnumCheck"}};for(var A in C){if(E==A){if(C[A]["reg"].test(B)){D.removeAttr("data-only");D.attr("data-working",1);OPEN_VALIDATOR[C[A]["check"]](B,D)}else{D.removeAttr("data-only")}break}}});function getlen(B){var A=0;for(var C=0;C<B.length;C++){if(B.charCodeAt(C)>255){A+=2}else{A++}}return A}function showmsg(C,B,A){var D;if(!C){D=' <span class="tip tip_err"><span class="tip_icon"></span>'+A+"</span>"}else{if(true===C){D=' <span class="tip tip_ok"><span class="tip_icon"></span></span>'}else{if(1===C){D=' <span class="tip tip_waiting"><span class="tip_icon"></span>'+A+"</span>"}else{if(2===C){D=' <span class="tip">'+A+"</span>"}}}}if(B.parent(".form_input").size()){B.parent(".form_input").parent().find(".tip").remove();B.parent(".form_input").after(D);B.parent(".form_input").parent().find(".inputdes").first().hide()}else{if(B.parent(".form_element").size()){B.parent(".form_element").parent().find(".tip").remove();B.parent(".form_element").after(D);B.parent(".form_element").parent().find(".inputdes").first().hide()}else{B.parent().find(".tip").remove();B.parent().append(D)}}}$("#app_class_child").change(function(){var B=$("#app_class_child");var A=B.val();if(A!=-1){showmsg(true,B,"")}});$("#app_class_main").change(function(){var C=$("input[name='app_type']").val();var B=$("#app_class_child");var A=$("#app_class_main").val();if(A!=-1){if(C==4){$.ajax({"dataType":"json","type":"get","url":"/pipes/interfaceserver","data":{"action":"common_query","business_type":"getapptype","cid":A},"success":function(E){if(E!=null){var F=+E.code,D=common.getMsgByRet(F);if(D){loginWin.alert("<center>"+D+"</center>");return}}showmsg(true,$("#app_class_main"),"");$.each(B,function(){$(this).children().remove()});$.each(E,function(H,G){B.append("<option value="+G.cid+">"+G.cname+"</option>")});B.css("display","inline-block")}})}else{B.remove()}showmsg(true,$("#app_class_main"),"")}else{$.each(B,function(){$(this).children().remove()});B.css("display","none");showmsg(false,$("#app_class_main"),"应用分类不能为空")}});function showmsgforselect(D,C,B){var E;if(!D){E=' <span class="tip tip_err"><span class="tip_icon"></span>'+B+"</span>"}else{if(true===D){E=' <span class="tip tip_ok"><span class="tip_icon"></span></span>'}}if(C.parent(".form_select").next(".form_select").size()){var A=C.parent(".form_select").next(".form_select")}else{var A=C.parent(".form_select")}A.parent().find(".tip").remove();A.after(E);A.parent().find(".inputdes").first().hide()}var SELECTADDR={initAddr:function(){if(!window.LOCATION){return}LOCATION[1][81][1000]={n:"其它"};LOCATION[1][82][1000]={n:"其它"};LOCATION[1][1000]={n:"其它"};LOCATION[1][1000][1000]={n:"其它"};var A=[];for(var B in LOCATION[1]){("n"!=B)&&A.push('<li _value="'+B+'">'+LOCATION[1][B].n+"</li>")}$(".form_select_province").html(A.join("")).find("li:eq(0)").addClass("active")},bindEvents:function(B){if(!window.LOCATION){return}var A=$(B).parent(".form_select"),C=A.find(".form_select_icon"),D=A.find(".form_select_options"),E=0;B.attr("readonly","true").click(function(){B.trigger("focus")}).focus(function(){if(B.attr("data-rule")=="companycity"&&B.attr("_value")=="-1"){D.hide();loginWin.alert("<center>请先选择省份/直辖市</center>")}else{D.show()}}).bind("keydown",function(F){var I=D.find("li.active"),H=I.index();E=D.find("li").size();if(F.keyCode===9){return true}if(!D.is(":visible")){$(this).trigger("focus");return false}switch(F.keyCode){case 40:if(H+1<E){var G=D.find("li:eq("+(++H)+")");G.trigger("mouseover");if(G[0].offsetTop-D[0].scrollTop>=D.height()){D[0].scrollTop+=G.height()}}break;case 38:if(H>0){var G=D.find("li:eq("+(--H)+")");G.trigger("mouseover");if(G[0].offsetTop<D[0].scrollTop){D[0].scrollTop-=G.height()}}break;case 13:I.trigger("click");D.hide();break}return false});C.click(function(){B.trigger("focus")});$("body").bind("click",function(F){if(D.is(":visible")){if($.contains(A[0],F.target)){return}D.hide();if(B.attr("data-rule")=="companyprovince"&&B.attr("_value")=="-1"){var G=B.attr("data-error")+"不能为空";showmsgforselect(false,B,G)}}return})}};$(document).ready(function(){SELECTADDR.initAddr();$(".form_select input").each(function(){SELECTADDR.bindEvents($(this))});if(!window.LOCATION){return}$(".form_select_province").find("li").click(function(D){var F=[],C=$(this).attr("_value"),I=$(this).parent("ul").parent(".form_select"),E=I.next(".form_select"),G=I.find(".form_select_options"),A=I.find("input"),B=E.find("input"),J={};i=0;for(var H in LOCATION[1][C]){if("n"!=H){F.push('<li _value="'+H+'">'+LOCATION[1][C][H].n+"</li>");i++;if(1==i){J.n=LOCATION[1][C][H].n;J.value=H}}}$(".form_select_city").html(F.join("")).find("li:eq(0)").addClass("active");A.val($(this).html()).attr("_value",$(this).attr("_value"));B.val(J.n).attr("_value",J.value);if(typeof(D.button)!="undefined"){A.trigger("blur")}G.hide()});$(".form_select_city").find("li").live("click",function(C){var D=$(this).parent("ul").parent(".form_select"),A=D.find(".form_select_options"),B=D.find("input");B.val($(this).html()).attr("_value",$(this).attr("_value"));showmsgforselect(true,B,"");if(typeof(C.button)!="undefined"){B.trigger("blur")}A.hide()});$(".form_select_options").find("li").live("mouseover",function(){$(this).parent().find("li").removeClass("active");$(this).addClass("active")});$(".form_select_userAuth").find("li").click(function(D){var B=$(this).parent(".form_select_options").parent(".form_select"),E=B.find(".form_select_options"),C=B.find("input"),A=B.siblings(".form_div").find(".form_input").find("input");C.val($(this).html()).attr("_value",$(this).attr("_value"));if(C.attr("_value")==="1"){A.attr("placeholder","身份证号码").attr("data-rule","cardnum_new").attr("data-error","身份证号码")}else{if(C.attr("_value")==="0"){A.attr("placeholder","护照号码").attr("data-rule","passport").attr("data-error","护照号码")}}if(C.attr("data-default")==C.attr("_value")&&A.attr("data-default")==A.val()){}else{A.val("");var F=A.parent(".form_input").parent().find(".tip");F.size()>0&&F.remove()}A.trigger("blur");if(typeof(D.button)!="undefined"){C.trigger("blur")}E.hide()})});var upload_op_type=0,upload_idcard_suc=0,upload_certifpic_suc=0;$(".delete_pic").live("click",function(){var B=$(this).parent(".uploaddiv"),A=B.parent("dt").find(".nulimg"),C=B.parent("dt").find(".pic_type").val();if(C==="icon_idcard"){upload_idcard_suc=0}else{if(C==="icon_certifpic"){upload_certifpic_suc=0}}B.html('<label for="'+C+'" class="uploadbtn upload_pic" _value="0">上传</label>');$("input#"+C).removeClass("moz1").removeClass("ie6_1").addClass("moz0").addClass("ie6_0");A.attr("src","http://mat1.gtimg.com/app/opent/images/developer/pic_zwtp.png").attr("_src","0");$("input#"+C).val("");$("input#ajaxCertifSubmit").attr("class","devCancel").attr("disabled","disabled")});function uploadsuccess(E){var B=$(E).parent("dt").find(".uploaddiv"),A=B.parent("dt").find(".nulimg"),D=B.find(".uploadbtn").attr("_value"),C=B.parent("dt").find(".pic_type").val();if(C==="icon_idcard"){upload_idcard_suc=1}else{if(C==="icon_certifpic"){upload_certifpic_suc=1}}A.attr("_src","1");if(+D===0){B.html('<label for="'+C+'" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="uploadbtn delete_pic">删除</label>');$("input#"+C).removeClass("moz0").removeClass("ie6_0").addClass("moz1").addClass("ie6_1")}}function setcertifsumbitbtn(){if($("#idimg").attr("_src")==1&&$("#certifimg").attr("_src")==1){$("#ajaxCertifSubmit").removeClass("devCancel").addClass("devSubmit").removeAttr("disabled")}else{$("input#ajaxCertifSubmit").attr("class","devCancel").attr("disabled","disabled")}}$("input[type='file']").change(function(){var G=this.files&&this.files[0],J=$(this),F=J.siblings(".pic_type"),D=$(this).parent().find("img")[0],I=new Image(),E="";if(document.all){D.src="http://mat1.gtimg.com/app/opent/images/developer/pic_zwtp.png";var C=setTimeout(function(){if(+(I.width||"")===0||+(I.height||"")===0){loginWin.alert({"text":'<div style="margin:0 0 0 30px;">由于您的浏览器安全限制，无法读取文件尺寸大小<br/>请将本站( <span style="color:red;font-weight:bold;">'+location.href.slice(0,location.href.indexOf(location.pathname)+1)+'</span> )添加到受信任的站点列表中 <br/>点击此处了解 <a href="http://open.t.qq.com/bbs/forum.php?mod=viewthread&tid=21271" target="_blank">如何将本站添加到受信任的站点列表中？</a></div><div style="color:#090;margin:0 30px;">您也可以使用非IE内核浏览器，如chrome、firefox（Safari暂不支持）</div>',"width":460,"height":200});J.attr("data-error",E);$(D).attr("_src","0");setcertifsumbitbtn();return}},1000);I.onload=function(){if(/\.(png|jpeg|jpg)$/i.test(I.src)==false){E="你上传的图片不是有效的jpg/png格式图片";loginWin.alert("<center>"+E+"</center>");J.attr("data-error",E);$(D).attr("_src","0");setcertifsumbitbtn();return}else{if(I.fileSize/1024>2048){E="文件大小不能超过2M，请重新选择";loginWin.alert("<center>"+E+"</center>");J.attr("data-error",E);$(D).attr("_src","0");setcertifsumbitbtn();return}}D.src=I.src;$(D).attr("_src","1");uploadsuccess(F);setcertifsumbitbtn();J.removeAttr("data-error");this.onload=null};I.onerror=function(){E="你上传的图片不合法";loginWin.alert("<center>"+E+"</center>");J.attr("data-error",E);$(D).attr("_src","0");setcertifsumbitbtn();return};I.src=this.value;return}if(/^image\/(png|jpeg)$/i.test(G.type)&&(G.fileSize||G.size)/1024<=2048){if(!window.FileReader){for(var A in G){D.src=G.fileName}E="你的浏览器不支持fileReader，无法预览图片<br/>建议使用firefox或chrome浏览器或升级您当前的浏览器至最新版本";loginWin.alert({"text":"<center>"+E+"</center>","height":170});J.attr("data-error",E);$(D).attr("_src","0");setcertifsumbitbtn();J.val("");return}var H=new FileReader();var B=function(K){return function(M){for(var L in K){K[L].src=M.target.result;$(K[L]).attr("_src","1")}}};H.onload=B([D,I]);H.readAsDataURL(G);B([D]);(function(){var L=arguments.callee,K=arguments[0];if((((I.width||I.height)|0)==0)&&(K<10)){setTimeout(function(){L(++K)},100);return}J.removeAttr("data-error")})(0);uploadsuccess(F);setcertifsumbitbtn();J.removeAttr("data-error");return}else{if(/^image\/(png|jpeg)$/i.test(G.type)==false){D.src="http://mat1.gtimg.com/app/opent/images/developer/pic_zwtp.png";E="你上传的内容不是有效的jpg/png格式图片";loginWin.alert("<center>"+E+"</center>");J.attr("data-error",E);$(D).attr("_src","0");setcertifsumbitbtn();J.val("");return}else{if((G.fileSize||G.size)/1024>2048){D.src="http://mat1.gtimg.com/app/opent/images/developer/pic_zwtp.png";E="文件大小不能超过2M，请重新选择";loginWin.alert("<center>"+E+"</center>");J.attr("data-error",E);$(D).attr("_src","0");setcertifsumbitbtn();J.val("");return}}}});var submitCallback=function(C){var D=+C.ret||C.code,B=common.getMsgByRet(D);loginWin.close();if(B){loginWin.alert("<center>"+B+"</center>");return}if(D==0){if(loginWin){loginWin.show({"title":"修改资质证明","width":410,"height":125,"text":'<center><br/><label class="icon_ok"></label> &nbsp; 提交审核成功<br/></center>'});setTimeout(function(){window.location.href=window.location.href},2000)}}else{var A="";if(D>100&&D<200){A="图片不合法"}else{if(D>200&&D<300){A="参数非法"}else{A="未知原因"}}if(loginWin){loginWin.show({"title":"修改资质证明","width":410,"height":185,"text":'<center><br/><label class="icon_alert"></label> &nbsp; 资质证明提交审核失败，原因&nbsp;<strong>'+A+'</strong><br/><input type="button" class="devSubmit closeBtn" value="确定"/></center>'});loginWin.contentarea.find(".closeBtn").bind("click",function(){loginWin.close()})}}};