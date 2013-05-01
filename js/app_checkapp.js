/*author:icefrogli,date:20110930*/
var OPEN_VALIDATOR;//检测对象封装
OPEN_VALIDATOR = {
	apptypeName:"应用",
	working:0, //0:不在验证中,1:普通验证中 2:因为点了提交按钮而在验证中
	checkip:function(value){
		var exp=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/; 
		var reg = value.match(exp); //"你输入的是一个非法的IP地址段！\nIP段为：:xxx.xxx.xxx.xxx（xxx为0-255)！ "               
		if(reg === null){ 
			return "非法的IP地址段！";
		} 
		else{ 
			return true;
		} 
	}
	,isempty:function(){return true;}
	,appsupport:function(){return true;}
	,appsupportIsEmpty:function(selector){
		var label  = selector.attr("data-error"),terminal=selector.attr("data-terminal");	//字段名
		var checkedsize=	$("#app_support_list").find("input[name='check_"+terminal+"']:checked").size();
		return checkedsize>0;
	}
	/*,mobilenum:function(value){
		if(new RegExp(/^1[3|4|5|8][0-9]\d{8}$/).test(value)){
			return true;
		}else{
			if(new RegExp(/^(00852|852)(\s|-)[5|6|9]\d{7}$/).test(value)){
				return true;
			}else{
				return "##格式错误";
			}
		}
	}*/
	,mobilenum:function(value,selector){ //与开平同步，校验/^1(?:3|5|8)\d{9}$/
		value = value.replace(/\s/g,"");
		selector.val(value);
		if( new RegExp(/[^\d]/g).test(value) ){
			return "你填写的##含有非法字符";
		}
		
		if(value.length == 11){
			if(new RegExp(/^1(?:3|5|8)\d{9}$/).test(value)){
				return true;	
			}else{
				return "仅限中国境内##";	
			}
		}else{
			return "请填写11位##";		
		}
	}
	,tname:function(name){
		if (name&&!(/^[a-zA-Z][a-zA-Z0-9_\-]{3,19}$/g.test(name))){
			return "##输入有误";	
		}
		return true;
	}
	,appweibo:function(name,selector){
		var label  = selector.attr("data-error");	//字段名
		name = name.replace(/\s/g,"");		
		selector.val(name);
		if (name&&!(/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/g.test(name))){
			return label+"输入有误";	
		}
		var dataonly = selector.attr("data-only");
		if (dataonly){
			if (dataonly === "true"){
				return true;
			}else{
				return "该"+label+"不存在";
			}
		}else{
			var dvalue = selector.attr("data-default"); //默认值
			if(dvalue){
				if(name==dvalue){
					return true;
				}else{
					return 1;
				}
			}else{
				return 1;	
			}
		}
		return true;
	}
	,telnum:function(value,selector){
		value = value.replace(/\s/g,"");
		selector.val(value);
		if(new RegExp(/^([0-9]|[-])+$/g).test(value)){
			return true;
		}else{
			return "你填写的##含有非法字符";
		}
	}
	,cardnum:function(value){
		v = value.toLowerCase();
		var errmsg = "##格式错误";
	 	if(new RegExp(/^[\sa-z][a-z][\d]{6,6}(\d|a|\(\d\)|\(a\))$/).test(v)){
			var code = {' ' : 58,'a' : 10,'b' :11,'c' :12,'d' :13,'e' :14,'f' :15,'g' :16,'h' :17,'i' :18,'j' :19,'k' :20,'l' :21,'m' :22,'n' :23,'o' :24,'p' :25,'q' :26,'r' :27,'s' :28,'t' :29,'u' :30,'v' :31,'w' :32,'x' :33,'y' :34,'z' :35};
			var _clist = v.split('');
			var _tl = 0;
			for(i=0;i<_clist.length;i++){
				if(i==0){
					if(new RegExp(/^[\sa-zA-Z]$/).test(_clist[i])){
						_tl += 9*code[_clist[i]];	
					}else{
						return errmsg;
					}
				}else if(i==1){
					if(new RegExp(/^[a-zA-Z]$/).test(_clist[i])){
						_tl += (9-i)*code[_clist[i]];	
					}else{
						return errmsg;
					}
				}else{
					if(_clist[i] == '(' || _clist[i]==')'){
						_tl +=0;
					}else{
						if(i == 8 || i == 9){
							var _tmp = _clist[i];
							if(_tmp=='a'){
								_tmp = 10;
							}
							_tl += (9-i)*_tmp;	
						}else{
							_tl += (9-i)*_clist[i];	
						}
					}
				}
			}	
			if(_tl%11 == 0){
				return true;
			}else{
				return errmsg;
			}
		}else if(v.length == 15){
			if(new RegExp(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/).test(v)){
				return true;
			}else{
				return errmsg;
			}
		}else if(v.length == 18){
			if(new RegExp(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])[\dxX]{4}$/).test(v)){
				return true;
			}else{
				return errmsg;
			}
		}else{
			return errmsg;
		}
	}
	,link:function(value){
		var strRegex = "^((news|telnet|nttp|file|http|ftp|https)://)(([-A-Za-z0-9_]+(\\.[-A-Za-z0-9_]+)*(\\.[-A-Za-z]{2,6}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_$\\.+!*(),;:@&=?/~#%']*)*";  
		var re = new RegExp(strRegex);  
		if (/["'<>]/g.test(value)){
			return "##不能含有'\"<>";
		}else if(re.test(value)){
			return true;
		}else{
			return "##格式错误";
		}
	}
	,applink:function(value){
		if (value){
			return OPEN_VALIDATOR.link(value);
		}else{
			return true;
		}
	}
	,appapk:function(value){
		if (value){
			return true;
		}else{
			return "请上传##";
		}
	}
	,email:function(value){
		if(new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/).test(value)){
			return true;
		}else{
			return "##格式错误";
		}
	}
	,appname:function(value,selector){//应用全称
		value = value.replace(/^\s+|\s$/g,"");
		selector.val(value);
		var tchar = value.match(/[^A-Za-z0-9（）()\u4e00-\u9fa5]+/g);
		if (value && tchar){
			return '##不能含有非法字符'+tchar.join("");
		}
		if(value.replace(/[^\x00-\xff]/g,"tx").length<=14){
			var dataonly = selector.attr("data-only");
			if (dataonly){
				if (dataonly === "true"){ 
					return true;
				}else{
					var textVal= selector.parent().next().text(); 
					if(textVal!='') return textVal;
					else return "此##已被注册";
				}
			}else{
				var dvalue = selector.attr("data-default"); //默认值
				if(dvalue){
					if(value==dvalue){
						return true;
					}else{
						return 1;
					}
				}else{
					return 1;	
				}
			}
		}else{
			return "##不能超过7个汉字";
		}
	}
	,appnameCheck:function(value,selector){
		//检测应用名称唯一性
		 var label  = selector.attr("data-error") 	//字段名
			,dvalue = selector.attr("data-default") //默认值
			,rule   = selector.attr("data-rule")    //验证规则
			,url    = {
				 "appname"  : "/pipes/interfaceserver"
				,"compname" : "/apps/checkcompname"
			}
			,para   = {
                "appname"  : {"action":"common_query","business_type":"ajax_checkname","checkname":encodeURIComponent(value)}
				,"compname" : {"comp_name":encodeURIComponent(value),"comp_type":window.comp_type}
			};
			
			para[rule]["random"]=+new Date();
		
		if (dvalue != value){
			showmsg(1,selector,"正在验证"+label+"是否重复...");
			$.ajax({
				"type"     : "get",
				"dataType" : "json",
				"url"      : url[rule],
				"data"     : para[rule],
				"success"  : function(d){
					var w = selector.attr("data-working")|0; //转化为自然数
					if(d.error == 0){
						selector.attr("data-only",true);
						showmsg(true,selector,'');
						if (w == 2){
							loginWin.close();
							setTimeout(function(){
								$("form input[type='submit']").trigger("click");
							},500);
						}
						selector.removeAttr("data-working");
					}else{
						selector.attr("data-only",false);
						//showmsg(false,selector,'此'+label+'已被注册');
						showmsg(false,selector,d.msg);
						selector.removeAttr("data-working");
						if (w == 2){
							loginWin.close(); 
							//loginWin.alert("<center>此"+label+"已被注册</center>");
							loginWin.alert("<center>"+d.msg+"</center>");
						}
						return false;
					}
				},
				"error"   : function(){
					selector.attr("data-only","false");
					selector.removeAttr("data-working");
					setTimeout(function(){
						showmsg(false,selector,'验证失败！请检查网络');
					},100);
					return false;
				}
			});
			return true;
			}else{
				selector.attr("data-only","true");
				selector.removeAttr("data-working");
			return true;	
			}
	}
	,appdes:function(value,selector){//应用描述
		value = $.trim(value);
		$("#app_description").val(value);
		if(value.length>140){
			return "##不能超过140个汉字";
		}else if(value.length<30){
			return "##不能少于30个汉字";
		}else{
			return true;
		}
	}
	,apphight:function(value,selector){//应用描述
		value = $.trim(value);
		if(new RegExp(/^[1-9][0-9]*$/).test(value)){
			if(value>1200||value<700)
				return "##必须在700—1200之间";
			else 
				return true;
		}
		else{
			return "##必须是正整数";
		}
	}
	,appname_only:true
	,companyname:function(value){//公司名
		if(value.length<=40){
			return true;
		}
		if(value.length>40){
			return "不能超过40个字符";
		}
	}
	,comaddress:function(value){//公司地址
		if(value.length<=100){
			return true;
		}
		if(value.length>100){
			return "##不能超过100个字符";
		}
	}
	,comperson:function(value){//联系人
		if(value.length<=20){
			return true;
		}
		if(value.length>20){
			return "##不能超过20个字符";
		}
	}

	,app_class_main:function(value){//请选择分类	
			if(value==-1||value<=0){
					return "请选择分类";	
			}	
			return true;
	}
	,app_class_child:function(value){//请选择分类
		var app_type = $("input[name='app_type']").val();
		if(app_type!=4) return true;
		if(value==-1||value<=0){
			return "请选择分类";
		}	
		   return true;
	}
	,appweiboCheck:function(value,selector){
		var label  = selector.attr("data-error") 	//字段名
			,dvalue = selector.attr("data-default") //默认值
			,rule   = selector.attr("data-rule")    //验证规则
			,url    = "/pipes/interfaceserver"
			,para   = {
				"action" : 'common_query',
				"business_type" : "ajax_checkwb",
				"name" : value
			};
		
		if (dvalue != value){
			showmsg(1,selector,"正在验证"+label);
			$.ajax({
					"type":"get",
					"dataType":"json",
					"url":url,
					"data":para,
					"success":function(d){
						var w = selector.attr("data-working")|0,ret = +d.ret,err = common.getMsgByRet(ret); //转化为自然数
					
						if (err){
							selector.attr("data-only",false);
							showmsg(false,selector,err);
							selector.removeAttr("data-working");
							return;
						}
						if(ret===0){
							selector.attr("data-only",true);
							showmsg(true,selector,'');
							if (w == 2){
								setTimeout(function(){
									$("form input[type='submit']").trigger("click");
								},500);
							}
							selector.removeAttr("data-working");
						}else{
							selector.attr("data-only",false);
							selector.attr("error-flag",0);
							showmsg(false,selector,'该'+label+'不存在');
							selector.removeAttr("data-working");
							if (w == 2){
								loginWin.alert("<center>该"+label+"不存在</center>");
							}
							return false;
						}
					},
					"error":function(){
						selector.attr("data-only","false");
						setTimeout(function(){
							showmsg(false,selector,'验证失败！请检查网络');
						},100);
						return false;
					}
			});
			return true;
		}else
		{
			selector.attr("data-only","true");
			selector.removeAttr("data-working");
			return true;	
		}
	}
};	
OPEN_VALIDATOR.apptypeName = /iweibo/.test(location.pathname) ? "组件" : (/platform/.test(location.pathname) ? "平台" : "应用" );
	
$("form input[type='text'],form input[type='hidden'],form textarea").blur(function(){//单个即时验证
	var text, value, rule, errmsg, flag;
	text = $(this);
	value = text.val();
	rule = text.attr("data-rule");//检测规则
	errmsg = text.attr("data-error");//提示信息
	if ((/^link|applink$/.test(rule)) && value.length>0 && value.search(/http[s]?:\/\//) == -1){
		value="http://"+value;
		text.val(value);
	}
	if(OPEN_VALIDATOR.hasOwnProperty(rule) && rule){//判断是否进行检测
		if(!$.trim(value) || (value=="请选择" && rule=="appsupport")){
			errmsg += "不能为空";
			flag = false;
		}else{
			var ret = OPEN_VALIDATOR[rule](value,text);//执行检测规则
			if(ret && rule=="appsupport"){
				flag = OPEN_VALIDATOR["appsupportIsEmpty"]($(this));
				errmsg += "不能为空";			
			}else if (ret == undefined){
				flag=false;
				errmsg = "";
			}
			else if(ret === true){
				flag = true;
			}else if(ret === 1){
				return;
			}else{
				flag = false;
				errmsg = ret.replace(/##/g,errmsg);
			}
		}
		showmsg(flag,text,errmsg);
	}
});

$("form input[data-rule='appname']").change(function(){
	var selector = $(this),rule = selector.attr("data-rule"),value = selector.val().replace(/\s/g,"");
	if (/^[A-Za-z0-9（）()\u4e00-\u9fa5]{1,14}$/.test(value) && value.replace(/^\s+|\s+$/g,"").replace(/[^\x00-\xff]/g, 'TX').length<=14){
		selector.removeAttr("data-only");
		selector.attr("data-working",1);
		OPEN_VALIDATOR["appnameCheck"](value,selector);
	}else{
		selector.removeAttr("data-only");
	}
});

$("form input[type='checkbox']").click(function(){
			var name=$(this).attr("name"),rule=$(this).attr("data-rule");
			if(rule=="isempty"){
			if($(this).parent().find("input[type='checkbox']:checked").size()==0){
				showmsg(false,$(this),"请至少选择一项");
			}else{
				showmsg(true,$(this),"");
			}
		}
});

$("form input[type='submit']").click(function(){//表单提交验证
	var f = this.form , worker = $(f).find("input[data-working]");
	if (worker.size()>0){
		worker.attr("data-working",2);
		return false;
	}
	var submitrule = $.trim($(this).attr("data-rule")),
		app_platform = + $("#app_platform").val();//应用平台
	if(submitrule == 'formauto'){//表单自动提交
		var flag, errmsg, rule, value, submitflag = true, data = '',imgisok=true;
		if(!OPEN_VALIDATOR.appname_only){
			flag=false;
			errmsg = "此"+OPEN_VALIDATOR.apptypeName+"名称已被注册";
			loginWin.alert("<center>"+errmsg+"</center>");
			return false;
		}
	
		$("form input[type='text'],form input[type='hidden'],form textarea,select#app_class_main,select#app_class_child,form input[type='file']").each(function(){
			rule = $(this).attr("data-rule");value = $(this).val();errmsg = $(this).attr("data-error");
			if(OPEN_VALIDATOR.hasOwnProperty(rule) && rule){
				if(!$.trim(value) || (value=="请选择" && rule=="appsupport")){
					errmsg += "不能为空";
					flag = false;
				}else{
					var ret = OPEN_VALIDATOR[rule](value,$(this));
					if(ret && rule=="appsupport"){
						flag = OPEN_VALIDATOR["appsupportIsEmpty"]($(this));
						errmsg += "不能为空";			
					}else if(ret === true){
						flag = true;
					}else if(ret === 1){
						return;
					}else{
						flag = false;
						errmsg = ret.replace(/##/g,errmsg);
					}
				}
				showmsg(flag,$(this),errmsg);
				if (submitflag&&!flag){
					loginWin.alert("<center>"+errmsg+"</center>");	
				}
				submitflag = submitflag && flag;
			}else if($(f).hasClass("wirelessappform") && $(this).hasClass("required")){//无线应用还需验证应用预览图是否已上传
				if( (!$(this).val() && !$(this).attr("data-default").replace("NULL","")) || $(this).attr("data-error") ) {
	    			imgisok=false;
	    			str="<center>请上传应用图标</center>";
	    			$(this).prev(".uploadbtn")[0].scrollIntoView(true);
	    			if(submitflag){//前面的字段验证未通过时，已alert，避免连续alert两个对话框
	    				loginWin.alert(str);
	    			}
	    			tooltip.show(str,$(this).prev(".uploadbtn"),2000);
	    			submitflag = submitflag && imgisok;
	    			return false;
	    		}	
			}
		});
		if(!submitflag) {return submitflag;}
		
		var checkboxflag = $("input[name='user_agree']").attr('checked');
		if(checkboxflag === undefined){//检验是否有同意选项
			if(submitflag){//没有checkbox user_agree
				if(app_type === 6){
					f.submit();
				}else{
					$(f).submit();
				}
			}else{
				return false;
			}
		}else{
			if(checkboxflag == true){
				if(submitflag){
					if(app_type === 6){
						f.submit();
					}else{
						$(f).submit();
					}
				}else{
					return false;
				}
			}else{
				alert("您必须同意我们的服务协议才能继续");
				return false;
			}
		}
	}
	return false;
});
	
$("input[data-rule='link']").keydown(function(event){
	if (event.keyCode == 13){
		return false;
	}
});

$("form").keydown(function(event){//阻止回车提交
	if(event.keyCode == 13){
		$(this).find("input[type='submit']").trigger("click");
		return false;
	}
});

$("form input[type='reset']").click(function(){//清除提示
	$(".form_input").next(".errorTip").remove();
	$(".form_input").next(".currectTip").remove();
});

function getlen(str){//获取字符串长度
	var len = 0;
	for(var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i)>255) len+=2;
		else len++;
	}
	return len;
}

function showmsg(flag,selector,msg){//提示信息
	var html;
	if(!flag){
		html = ' <span class="tip tip_err"><span class="tip_icon"></span>'+msg+'</span>';
	}else if(true === flag){
		html = ' <span class="tip tip_ok"><span class="tip_icon"></span></span>';	
	}else if(1 === flag){
		html = ' <span class="tip tip_waiting"><span class="tip_icon"></span>'+msg+'</span>';
	}else if(2 === flag){
		html = ' <span class="tip">'+msg+'</span>';
	}

	if(selector.parent(".form_input").size()){
		selector.parent(".form_input").parent().find(".tip").remove();//清除提示
		selector.parent(".form_input").after(html);
		selector.parent(".form_input").parent().find(".inputdes").first().hide();
	}else if(selector.parent(".form_element").size()){
		selector.parent(".form_element").parent().find(".tip").remove();//清除提示
		selector.parent(".form_element").after(html);
		selector.parent(".form_element").parent().find(".inputdes").first().hide();
	}else{
		selector.parent().find(".tip").remove();//清除提示
		selector.parent().append(html);	
	}
}

var need_post = false;  
var padstr = osstr= phonestr = '';
$(function(){
	function getOS() {
		var app_os = [];
		$("input[name='check_app_os']:checked").each(function () {
			app_os.push($(this).val());
		});
		$("input[name='app_os']").val(app_os.join("|"));
		return app_os;
	 }

	 function getPhone() {
		var app_phone = [];
		$("input[name='check_app_phone']:checked").each(function () {
			app_phone.push($(this).val());
		});
		$("input[name='app_phone']").val(app_phone.join("|"));
		return app_phone;
	 }

	 function getPad() {
		var app_pad = [];
		$("input[name='check_app_pad']:checked").each(function () {
			app_pad.push($(this).val());
		});
		$("input[name='app_pad']").val(app_pad.join("|"));
		return app_pad;
	 }
	 
 	$("input[name='check_app_os'],input[name='check_app_phone'],input[name='check_app_pad']").change(function(){
     	var n=$(this).attr("name").replace("check_app_","").toLowerCase();
     	var str=""
     	switch(n){
     		case "os":str = getOS();$("input[name='app_phone']").val("");$("input[name='app_pad']").val("");break;
     		case "phone":str = getPhone();$("input[name='app_os']").val("");$("input[name='app_pad']").val("");break;
     		case "pad": str = getPad();$("input[name='app_os']").val("");$("input[name='app_phone']").val("");break;
     	}
     	$("#app_support").trigger("blur");
     });
     
		 //表单提交
	 $('form').submit(function(){
	 	 if( app_type !== 6){//非无线应用
	        if($(".errorTip").length>0){return;}//检查表单是否有错误
	        
			if(!need_post){location.href = NextUrl;return;} /*无修改*/
			//var	typedata = "";全局变量
			if(app_type===3) {
				var sep_str = "|"
	            typedata += ("&app_os=" +$("input[name='app_os']").val());
	            typedata += ("&app_phone=" + $("input[name='app_phone']").val());
	            typedata += ("&app_pad=" + $("input[name='app_pad']").val());
				typedata += '&app_down_url='+encodeURIComponent($('input#app_down_url').val())
	     	}
		
			var app_class_child = $("#app_class_child").size()>0?$("#app_class_child").val():-1;

			var postData = 'app_name='+encodeURIComponent($('input#app_name').val())
	                     + '&app_id='+app_id+ '&app_hight='+encodeURIComponent($('input#app_hight').val())
	                     + '&app_url='+encodeURIComponent($('input#app_url').val())
	                     + '&app_description='+encodeURIComponent($('textarea#app_description').val())
	                     + '&app_weibo='+encodeURIComponent($('input#app_weibo').val())
						 + '&need_post=1'
			 			 + '&postname='+$('input#postname').val()
			 			 + '&app_class_main='+$('#app_class_main').val()
			 			 + '&app_class_child='+app_class_child;

			 postData += typedata;

			 $.ajax({
				   type: "POST",
				   url: "/development/ajaxsavecheckapp/"+app_id+'/',
				   dataType: "json",
				   data: postData,
				   success: function(msg){
				   	   var ret = +(msg.ret || msg.error),retmsg = common.getMsgByRet(ret);
				   	   if (retmsg){
				   	   		loginWin.alert("<center>"+retmsg+"</center>");
				   	   		return;
				   	   }
					   if(ret === 0){
							location.href = NextUrl;
						}else if(ret === 1){
							loginWin.alert("<center>提交内容包含非法数据，请重新提交</center>");
						}else{
							loginWin.alert("<center>数据提交失败，请稍候再试</center>");	
						}
				   },
				   "error":function(){
				   		loginWin.alert("<center>网络连接失败，请稍候再试</center>");	
				   }
			});
		} 
		return false;
		
	 });
 
	 
	 $('input#app_name,input#app_hight,input#app_url,input#app_down_url,input#app_support,textarea#app_description,input[type=checkbox],input#app_weibo,select#app_class_main,select#app_class_child').change(function(){  need_post = 1; });
	 
	 $("form input[data-rule='appweibo']").change(function(){
		var selector = $(this),rule = selector.attr("data-rule"),value = selector.val();
		if (rule == "appweibo"){
			if (/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/g.test(value)){
				selector.removeAttr("data-only");
				selector.removeAttr("error-flag");
				selector.attr("data-working",1);
				OPEN_VALIDATOR["appweiboCheck"](value,selector);
		    }
		}
	});
	 
	/*初使化支持平台数据*/
	var app_platform_name = $("input[name='app_phone'],input[name='app_pad'],input[name='app_os']").filter("[value ^='']");
		if (app_platform_name.size() === 0){
			$("input[name='app_phone']").val('Android');
			app_platform_name = $("input[name='app_phone']");
		}
		
		app_platform_name.each(function(index){
			var n=$(this).attr("name"),v=$(this).val(),f=$("#app_support").attr("data-terminal") || 0;
			if(v || 0){
				$("#app_support").val($(".form_select_options").find("li[data-terminal='"+n+"']").text());
				$("#app_support").attr("data-terminal",n);
				$("#app_support_list").show();
				s= v.split("|");
				for(var i in s){
					$("#app_support_list").find("input[value='"+s[i]+"']").parent().show().siblings("dd").hide();
					$("input[name='check_"+n+"']").filter("[value='"+s[i]+"']").attr("checked","checked");
				}
				return false;
			}else{
				$("#app_support").val("请选择").removeAttr("data-terminal") ;
			}
	});
		
	$(".tip").remove();
	/*初使化支持平台数据*/
	/*给没有加*的项加上*号*/
	$("form .form_label").each(function(){
		var s=$(this).text().replace(new RegExp("\u00A0","g"),"");
		if ($(this).find("em").size()>0){
			return;
		}
		if (/^[\s]*$/.test(s)){
			return;
		}
		$(this).prepend("<em>*</em>");
	});
});

$("#app_class_child").change(function(){
	var appObj = $("#app_class_child");
	var cid = appObj.val();	
	if(cid!=-1){
		showmsg(true,appObj,"");	
	}
});
$("#app_class_main").change(function(){
	var appObj = $("#app_class_child");
	var cid = $("#app_class_main").val();	
	if(cid!=-1){
		$.ajax({
			"dataType":"json"
			,"type":"get"
			,"url":"/pipes/interfaceserver"
			,"data":{
				"action":'common_query',
				"business_type":'getapptype',
				"cid":cid
			}
			,"success":function(d){
				if(d!=null){
					var ret = +d.ret , msg = common.getMsgByRet(ret);
					if (msg){
						loginWin.alert("<center>"+msg+"</center>");
						return;
					}
				}	
				showmsg(true,$("#app_class_main"),"");
				$.each(appObj,function(){
					$(this).children().remove();
				});
				$.each(d,function(i,n){
					appObj.append("<option value="+n.cid+">"+n.cname+"</option>");	
				});
				appObj.css("display","inline-block");
			}
		});
	}else{
		$.each(appObj,function(){
			$(this).children().remove();
		});
		appObj.css("display","none");
		showmsg(false,appObj,"应用分类不能为空");
	}
});

var submitCallback = function (d) {//特别针对无线应用
	var ret = +(d.ret || d.error),msg = common.getMsgByRet(ret);
	loginWin.close();
	if (msg){
		loginWin.alert("<center>"+msg+"</center>");
		return;
	}
	if (ret == 0) {
		if(loginWin){
			loginWin.close();
			window.location.href = "/development/wappcheckinfo/" + app_id + "/";
			//window.location.replace("/development/wappcheckinfo/" + app_id + "/");
		}
	} else {
		var reason = "";
		if(ret > 100 && ret < 200) {
            reason = "图片不合法";
		} else if(ret > 200 && ret < 300) {
            reason = "参数非法";
		} else {
		    reason = d.msg || "未知原因";
		}
		if(loginWin){
    		loginWin.show({
    	    	"title":"提交审核",
    	    	"width":410,
    	    	"height":185,
    	    	"text":"<center><br/><label class=\"icon_alert\"></label> &nbsp; "+OPEN_VALIDATOR.apptypeName+"提交审核因为&nbsp;<strong>" + reason + "</strong>&nbsp;失败，请稍后再试。<br/><input type=\"button\" class=\"devSubmit closeBtn\" value=\"确定\"/></center>"
    	    	});
    	    	loginWin.contentarea.find(".closeBtn").bind("click",function(){
    		        loginWin.close();
    	    	});
		}
	}
};

//上传图片
$(function () {
	if(! $("form").first().hasClass("wirelessappform")){//无线应用，则加载此段代码
		return ;
	}
		
	$("<div class=\"tooltip\" id=\"tooltip\"><div class=\"toolangle\"><span class=\"a1\">◆</span><span class=\"a2\">◆</span></div><div class=\"tooltext\"></div></div>").appendTo($("body"));
    window.tooltip={
    	"timer":null,
		"show":function(t,o,s){
			var ot=o.offset();
			$("#tooltip").show().css({"left":ot.left,"top":ot.top+o.height()}).find(".tooltext").html(t);
			o.get(0).scrollIntoView(true);
			clearTimeout(tooltip.timer);
			if (s){
				tooltip.timer=setTimeout(function(){
				$("#tooltip").fadeOut();
				},s);
			}
		}
	};

    $("input[type='file']").change(function(){
		    var f=this.files&&this.files[0],
		    	$this=$(this),
		    	img=$(this).parent().find("img")[0],
		    	$img = $(this).parent().find("img"),
		    	timg=new Image(),
		    	str="",
		    	maxsize = $img.attr("_size") || 500;//图像最大大小，无线应用图标为10K，其他为500K
    			if(document.all){ //ie
    				img.src="http://mat1.gtimg.com/app/opent/images/websites/0.gif";
    				var timer = setTimeout(function(){ 
			    		if( +(timg.width || "") === 0 || +(timg.height || "")=== 0 ){
					        loginWin.alert({
			    				"text":"<div style=\"margin:0 0 0 30px;\">由于您的浏览器安全限制，无法读取文件尺寸大小<br/>请将本站( <span style=\"color:red;font-weight:bold;\">"
			    					+location.href.slice(0,location.href.indexOf(location.pathname)+1)
			    					+"</span> )添加到受信任的站点列表中 "
			    					+"<br/>点击此处了解 <a href=\"http://open.t.qq.com/bbs/forum.php?mod=viewthread&tid=21271\" target=\"_blank\">如何将本站添加到受信任的站点列表中？</a></div><div style=\"color:#090;margin:0 30px;\">您也可以使用非IE内核浏览器，如chrome、firefox（Safari暂不支持）</div>",
			    				"width":460,
			    				"height":200
			    				});
			    			$this.attr("data-error",str);
			    			return;
    			    	}
					},200);
					
					timg.onload = function(){
    			    	if(/\.(png)$/i.test(timg.src)==false){
    			    			str = "你上传的图片不是有效的png格式图片";
    			    	    	loginWin.alert("<center>"+str+"</center>");
    			    	    	$this.attr("data-error",str);
    			    	    	return; 
    			    		}else if(timg.fileSize/1024>maxsize){
    			    			str = "文件大小不能超过" + maxsize + "K，请重新选择";
    			    			loginWin.alert("<center>"+str+"</center>");
    			    			$this.attr("data-error",str);
    			    	    	return;
    			    		}else if( $img.attr("_width") && $img.attr("_width") ){ //需要验证图片大小
    			    			if(+(timg.width || "") === 0 || +(timg.height || "")=== 0 ){
	    					        loginWin.alert({
	    			    				"text":"<div style=\"margin:0 0 0 30px;\">由于您的浏览器安全限制，无法读取文件尺寸大小<br/>请将本站( <span style=\"color:red;font-weight:bold;\">"
	    			    					+location.href.slice(0,location.href.indexOf(location.pathname)+1)
	    			    					+"</span> )添加到受信任的站点列表中 "
	    			    					+"<br/>点击此处了解 <a href=\"http://open.t.qq.com/bbs/forum.php?mod=viewthread&tid=21271\" target=\"_blank\">如何将本站添加到受信任的站点列表中？</a></div><div style=\"color:#090;margin:0 30px;\">您也可以使用非IE内核浏览器，如chrome、firefox（Safari暂不支持）</div>",
	    			    				"width":460,
	    			    				"height":200
	    			    				});
	    			    			$this.attr("data-error",str);
	    			    			return;
	    			    		}else if(timg.width != $img.attr("_width") || timg.height != $img.attr("_height")){
				    				str="你上传的图片尺寸"+timg.width+"×"+timg.height+"不符合要求，请选择一张"+$img.attr("_width")+"×"+$img.attr("_height")+"大小的png图片";
				    				$this.attr("data-error",str);
				    				str+="<div style=\"border-top:1px dashed #ccc;margin-top:5px;padding-top:5px;\">"
				    					+"<strong>如果你的图片尺寸符合要求但仍然看到该提示，你可以：</strong><br/>"
				    					+"1、如果你的浏览器是双核浏览器，可以切换到极速模式重新上传<br/>"
				    					+"2、如果你的浏览器不是双核浏览器，可以使用其它浏览器，如chrome或firefox</div>";
				    				loginWin.alert({"text":"<div style=\"margin:0 25px;\">"+str+"</center>","width":500,"height":215});
				    				$this.attr("data-error",str);
									return;
				    			}
			    			}
    			    		img.src=timg.src;
    			    		//上传成功
    			    		$this.removeAttr("data-error");
    			    		this.onload = null;
			    	};
			    	timg.onerror = function(){
			    		str = "你上传的图片不是有效的png格式图片";
			    		loginWin.alert("<center>"+str+"</center>");
			    		$this.attr("data-error",str);
			    		return;
			    	};
			    	
			    	timg.src=this.value;
			    	return;
    			}
    			if(/^image\/(png)$/i.test(f.type)&&(f.fileSize||f.size)/1024<=maxsize){
	    			if(!window.FileReader){
	    				for(var i in f){
		    				img.src=f.fileName;
		    			}
	    				str = "你的浏览器不支持fileReader，无法预览图片<br/>建议使用firefox或chrome浏览器或升级您当前的浏览器至最新版本";
	    				loginWin.alert({"text":"<center>"+str+"</center>","height":170});
	    				$this.attr("data-error",str);
	    				return;
	    			}
					var reader = new FileReader();
					var loadimg =function(imgs){
						return function(e){
								for(var i in imgs){
									imgs[i].src=e.target.result;
								}
						}
					};
					reader.onload = loadimg([img,timg]);
					reader.readAsDataURL(f);
					loadimg([img]);
					if( $img.attr("_width") && $img.attr("_width") ){ //需要验证图片大小
						(function(){
							var _callback=arguments.callee,_times=arguments[0];
							if((((timg.width||timg.height)|0)==0)&&(_times<10)){
								setTimeout(function(){
									_callback(++_times);
								},100);
								return;
							}
							
							if(timg.width!=$img.attr("_width")||timg.height!=$img.attr("_height")){
								str="你上传的图片尺寸"+timg.width+"×"+timg.height+"不符合要求<br/>请选择一张"+$img.attr("_width")+"×"+$img.attr("_height")+"大小的png图片";
								img.src="http://mat1.gtimg.com/app/opent/images/websites/0.gif";
								loginWin.alert({"text":"<center>"+str+"</center>","height":160});
								$this.attr("data-error",str);
								return;
							};
						
							$this.removeAttr("data-error");
						})(0);
					}
					$this.removeAttr("data-error");
					return;
			}else if(/^image\/(png)$/i.test(f.type)==false){
				str = "你上传的图片不是有效的png格式图片";
				loginWin.alert("<center>"+str+"</center>");
				$this.attr("data-error",str);
				return;
			}else if((f.fileSize||f.size)/1024>maxsize){
				str = "文件大小不能超过" + maxsize + "K，请重新选择";
				loginWin.alert("<center>"+ str +"</center>");
				$this.attr("data-error",str);
				return;
			}
    	});
});

/*  |xGv00|3bb86ba20a683b22c407d8d677002509 */
