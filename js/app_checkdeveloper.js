/*author:icefrogli,date:20110930*/
var OPEN_VALIDATOR;//检测对象封装
OPEN_VALIDATOR = {
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
			return "微博帐号输入有误";	
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
	,passport:function(value,selector){//与开平同步，校验/^[0-9a-zA-Z]+$/
    	value = value.replace(/\s/g,"");
		selector.val(value);
		var tchar = value.match(/[^0-9a-zA-Z]+/g);
		if (value && tchar){
			return '你填写的##含有非法字符';
		}
		
		if(new RegExp(/^[0-9a-zA-Z]+$/).test(value)){
			var dataonly = selector.attr("data-only");
			
			if (dataonly){
				if (dataonly === "true"){
					return true;
				}else{
					return "该##已被注册";
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
		}
	}
	,cardnum_new:function(value,selector){//与开平同步，身份证只校验/^[0-9xX]{18}$/
    	value = value.replace(/\s/g,"");
		selector.val(value);
		var tchar = value.match(/[^0-9xX]+/g);
		if (value && tchar){
			return '你填写的##含有非法字符';
		}
		
		if(value.length==18){
			if(new RegExp(/^[0-9xX]{18}$/).test(value)){
				var dataonly = selector.attr("data-only");
                	if (dataonly){
					if (dataonly === "true"){
						return true;
					}else{
						return "该##已被注册";
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
			}
		}
		else{
			return "请填写18位身份证号码";
		}
	}
	,cardnumCheck:function(value,selector){
			var label  = selector.attr("data-error") 	//字段名
			,dvalue = selector.attr("data-default") //默认值
			,rule   = selector.attr("data-rule")    //验证规则
			//,url    = "/developer/checkuserid/"+encodeURIComponent(value);
			,url = "/pipes/interfaceserver?action=common_query&business_type=ajax_checkuserid&userid="+encodeURIComponent(value);
		if (dvalue != value){
			showmsg(1,selector,"正在验证"+label);
			$.ajax({
					"type":"get",
					"dataType":"json",
					"url":url,
					"success":function(d){
						var w = selector.attr("data-working")|0,ret = +d.code,err = common.getMsgByRet(ret); //转化为自然数
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
							showmsg(false,selector,'该'+label+'已被注册');
							selector.removeAttr("data-working");
							if (w == 2){
								loginWin.alert("<center>该"+label+"已被注册</center>");
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
	,link:function(value){
		var strRegex = "^((news|telnet|nttp|file|http|ftp|https)://)(([-A-Za-z0-9_]+(\\.[-A-Za-z0-9_]+)*(\\.[-A-Za-z]{2,6}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_$\\.+!*(),;:@&=?/~#%']*)*";  
		var re = new RegExp(strRegex);
		if (/["'<>]/g.test(value)){
			return "##不能含有单引号，双引号，尖括号";
		}else if(re.test(value)){
			return true; 
		}else{
			return "##格式错误";
		}
	}
	,email:function(value){
		if(new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/).test(value)){
			return true;
		}else{
			return "email格式错误";
		}
	}
	,appdes:function(value,selector){//应用描述
		if(value.length<=300){
			return true;
		}else{
			return "不能超过300个字符";
		}
	}
	,appname_only:true
	,companyname:function(value,selector){//公司名
		value = value.replace(/(^\s+)|(\s+$)/g,"");
		selector.val(value);
		if(new RegExp(/^[^<>'"]+$/).test(value)){
			return true;
		}else{
			return "##格式错误";
		}
	}
	,complicensenum:function(value,selector){//公司营业执照号码
		value = value.replace(/\s/g,"");
		selector.val(value);
		var tchar = value.match(/[^0-9\-]+/g);
//		var tchar = value.match(/^[0-9]([0-9]|-(?!-)){6,18}[0-9]$/);
		if (value && tchar){
			return '你填写的##含有非法字符';
		}
		
		if(value.length>=8 && value.length<=20){
			if(new RegExp(/^[0-9]([0-9]|-(?!-)){6,18}[0-9]$/).test(value)){
				var dataonly = selector.attr("data-only");
				if (dataonly){
					if (dataonly === "true"){
						return true;
					}else{
						return "该##已被注册";
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
				return '##格式错误';	
			}
		}else{
			return "请填写8-20位##";
		}
	}
	,complicensenumCheck:function(value,selector){  //公司营业执照号码唯一性验证
		var label  = selector.attr("data-error") 	//字段名
			,dvalue = selector.attr("data-default") //默认值
			,rule   = selector.attr("data-rule")    //验证规则
			//,url    = "/developer/checkcomid/"+encodeURIComponent(value);
			,url = "/pipes/interfaceserver?action=common_query&business_type=checkcomid&comid="+encodeURIComponent(value);
		if (dvalue != value){
			showmsg(1,selector,"正在验证"+label);
			$.ajax({
					"type":"get",
					"dataType":"json",
					"url":url,
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
							showmsg(false,selector,'该'+label+'已被注册');
							selector.removeAttr("data-working");
							if (w == 2){
								loginWin.alert("<center>该"+label+"已被注册</center>");
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
	,companyprovince:function(value,selector){
		return true;
	}
	,comaddress:function(value,selector){//公司地址
		value = value.replace(/(^\s+)|(\s+$)/g,"");
		selector.val(value);
		
		if(value.length<=100){
			if(new RegExp(/^[^<>'"]+$/).test(value)){
				return true;
			}else{
				return "你填写的##含有非法字符";
			}
		}
		if(value.length>100){
			return "##不能超过100个字符";
		}
	}
	,comperson:function(value,selector){//联系人，支持空格如jim green
		value = value.replace(/(^\s+)|(\s+$)/g,"");
		selector.val(value);
		
		var re=/^[a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D][a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D\s]*$/,
			tchar=value.match(re);
		if(value && tchar){
			return true;
		}else{
			return "##含有非法字符";
		}	
	}
	,applink:function(value){
		if (value){
			return OPEN_VALIDATOR.link(value);
		}else{
			return true;
		}
	}
};	
	
$("form input[type='text'],form textarea").blur(function(){//单个即时验证
	var text;
	var value;
	var rule;
	var errmsg;
	var flag;
	text = $(this);
	value = text.val();
	rule = text.attr("data-rule");//检测规则
	errmsg = text.attr("data-error");//提示信息
	if ((/^link|applink$/.test(rule)) && value.length>0 && value.search(/http[s]?:\/\//) == -1){
		value="http://"+value;
		text.val(value);
	}

	if(OPEN_VALIDATOR.hasOwnProperty(rule) && rule){//判断是否进行检测
		if(!$.trim(value) && rule!="link" && rule!="applink" && rule!="companycity"){
			errmsg += "不能为空";
			flag = false;
		}else{
			var ret = OPEN_VALIDATOR[rule](value,text);//执行检测规则
			if (ret == undefined){
				flag=false;
				errmsg = "";
			}
			else if(ret === true){
				flag = true;
			}else if(ret === 1){
				return;
			}else{
				flag = false;
				errmsg = ret.replace("##",errmsg);
			}
		}
		if(rule!="companyprovince"){
			showmsg(flag,text,errmsg);
		}else if(rule=="companyprovince" && flag==true){
			showmsgforselect(flag,text,errmsg);	
		}
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
	
	var submitrule = $.trim($(this).attr("data-rule"));
	if(submitrule == 'formauto'){//表单自动提交
		var flag, errmsg, rule, value, submitflag = true, data = '';
		if(!OPEN_VALIDATOR.appname_only){
			errmsg = "此应用名称已被注册";
			loginWin.alert("<center>"+errmsg+"</center>");
			return false;
		}
		$("form input[type='text'],form textarea").each(function(){
			rule = $(this).attr("data-rule");
			value = $(this).val();
			errmsg = $(this).attr("data-error");
			if(OPEN_VALIDATOR.hasOwnProperty(rule) && rule){
				if(!$.trim(value)&&rule!="tname"&&rule!="appdes" && rule!="applink" && rule!="companycity"){
					errmsg += "不能为空";
					flag = false;
				}else{
					var ret = OPEN_VALIDATOR[rule](value,$(this));
					if(ret === true){
						flag = true;
					}else if(ret === 1){
						return;
					}else{
						flag = false;
						errmsg = ret.replace("##",errmsg);
					}
				}
				if (submitflag&&!flag){
					loginWin.alert("<center>"+errmsg+"</center>");	
				}
				/*submitflag = submitflag && flag;
				showmsg(flag,$(this),errmsg);*/
				
				submitflag = submitflag && flag;
				if(rule!="companyprovince"){
					showmsg(flag,$(this),errmsg);
				}else{
					showmsgforselect(flag,$(this),errmsg);	
				}
			}else{

			}
		});
		if(!submitflag) {return submitflag;}
		var checkboxflag = $("input[name='user_agree']").attr('checked');
		if(checkboxflag === undefined){//检验是否有同意选项
			if(submitflag){//没有checkbox user_agree
				$("form").submit();
			}else{
				return false;
			}
		}else{
			if(checkboxflag == true){
				if(submitflag){
					$("form").submit();
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
	}else{
	selector.parent().find(".tip").remove();//清除提示
	selector.parent().append(html);	
	}
}
function showmsgforselect(flag,selector,msg){
	var html;
	if(!flag){
		html = ' <span class="tip tip_err"><span class="tip_icon"></span>'+msg+'</span>';
	}else if(true===flag){
		html = ' <span class="tip tip_ok"><span class="tip_icon"></span></span>';			
	}
	
	if(selector.parent(".form_select").next(".form_select").size()){
		var last_select=selector.parent(".form_select").next(".form_select");
	}else{
		var last_select=selector.parent(".form_select");
	}
	last_select.parent().find(".tip").remove();//清除提示
	last_select.after(html);
	last_select.parent().find(".inputdes").first().hide();

}
$("form input[data-rule='complicensenum'],form input[data-rule='cardnum_new'],form input[data-rule='passport']").change(function(){
	var selector = $(this),rule = selector.attr("data-rule"),value = selector.val();
	var rulecheck={"complicensenum":{"reg":/^[0-9]([0-9]|-(?!-)){6,18}[0-9]$/,"check":"complicensenumCheck"}
					 ,"cardnum_new":{"reg":/^[0-9xX]{18}$/,"check":"cardnumCheck"}
				     ,"passport":{"reg":/^[0-9a-zA-Z]+$/,"check":"cardnumCheck"}
			};
	
	for(var r in rulecheck){
		if(rule==r){
		
			if (rulecheck[r]["reg"].test(value)){
				selector.removeAttr("data-only");
				selector.attr("data-working",1);
				OPEN_VALIDATOR[rulecheck[r]["check"]](value,selector);
			}else{
				selector.removeAttr("data-only");
			}
			break;			
		}
	}
});
var SELECTADDR={
	initAddr:function(){
			if (!window.LOCATION){
				return;
			}
			LOCATION[1][81][1000] = {
	            n: "其它"
	        };
	       	LOCATION[1][82][1000] = {
	            n: "其它"
	        };
			LOCATION[1][1000] = {
	            n: "其它"
	        };
	        LOCATION[1][1000][1000] = {
	            n: "其它"
	        };
        
			//加载省份下拉框
			var arr = [];
	     	for (var p in LOCATION[1]) {
	            ("n" != p) && arr.push('<li _value="' + p + '">' + LOCATION[1][p].n + '</li>');
	        }
	        $('.form_select_province').html(arr.join("")).find("li:eq(0)").addClass("active"); 
	     }	
	,bindEvents:function(input){
			if (!window.LOCATION){
				return;
			}
			var select=$(input).parent(".form_select")
			    ,icon=select.find(".form_select_icon")
			    ,options=select.find(".form_select_options")
			    ,opsize=0;
		 
			input.attr("readonly","true")
			 .click(function(){
			 	input.trigger("focus");
			 })
			.focus(function(){
				if( input.attr("data-rule")=="companycity" && input.attr("_value")=="-1"){//市/区
					options.hide();	
					loginWin.alert("<center>请先选择省份/直辖市</center>");
				}else{
					options.show();	
				}
			  })
		 	.bind("keydown",function(event){
			 	var selected = options.find("li.active"),selectedIndex = selected.index();
			 		opsize = options.find("li").size();
			 	if (event.keyCode === 9){
			 		return true;
			 	}
			 	if (!options.is(":visible")){
			 		$(this).trigger("focus");
			 		return false;
			 	}
			 	switch(event.keyCode){
			 		case 40:
			 			if (selectedIndex+1 < opsize){
			 				var option = options.find("li:eq("+(++selectedIndex)+")");
			 					option.trigger("mouseover");
			 				if (option[0].offsetTop - options[0].scrollTop >= options.height()){
			 					options[0].scrollTop += option.height();
			 				}
			 			};
			 			break;
			 		case 38:
			 			if (selectedIndex>0){
			 				var option = options.find("li:eq("+(--selectedIndex)+")");
			 					option.trigger("mouseover");
			 				if (option[0].offsetTop < options[0].scrollTop){
			 					options[0].scrollTop -= option.height();
			 				}
			 			};
			 			break;
			 		case 13:
			 			selected.trigger("click");
			 			options.hide();
			 			break;
			 	}
			 	return false;
		 	});
		icon.click(function(){
			input.trigger("focus");
		});
		
		$("body").bind("click",function(event){
			if (options.is(":visible")){
				if ($.contains(select[0],event.target)){
					return;
				}
				
				options.hide();
				
				if(input.attr("data-rule")=="companyprovince" && input.attr("_value")=="-1"){
					var errmsg=input.attr("data-error")+"不能为空";
					showmsgforselect(false,input,errmsg);	
				}
			}
			return;
		});
	}	
};

$(document).ready(function(){	
	SELECTADDR.initAddr();	
	$(".form_select input").each(function(){
		SELECTADDR.bindEvents($(this));
	});
	
	if (!window.LOCATION){
		return;
	}
	//省市二级联动
	 $('.form_select_province').find("li").click(function (event) {
        var arr=[]
        	,value=$(this).attr("_value")
        	,select_province=$(this).parent("ul").parent(".form_select")
        	,select_city=select_province.next(".form_select")
        	,options_province=select_province.find(".form_select_options")
        	,input_province=select_province.find("input")
        	,input_city=select_city.find("input")
 			,first={}
 			i=0;
        
        for(var p in LOCATION[1][value]){
        	if("n" != p){
        	 	arr.push('<li _value="' + p + '">' +LOCATION[1][value][p].n + '</li>');
	        	i++;
	        	if(1==i){
	        		first.n=LOCATION[1][value][p].n;
	        		first.value=p;
	                }	
            }
        }
        $(".form_select_city").html(arr.join("")).find("li:eq(0)").addClass("active");
        
        input_province.val($(this).html()).attr("_value",$(this).attr("_value")).trigger("change");
        input_city.val(first.n).attr("_value",first.value).trigger("change");
        if (typeof(event.button) != "undefined"){
  	    	input_province.trigger("blur");
  	    }
        options_province.hide();
    });
    
   	$(".form_select_city").find("li").live("click",function (event) {
		var select_city=$(this).parent("ul").parent(".form_select")
			,options_city=select_city.find(".form_select_options")
			,input_city=select_city.find("input");
		
		input_city.val($(this).html()).attr("_value",$(this).attr("_value")).trigger("change");
		showmsgforselect(true,input_city,"");
		if (typeof(event.button) != "undefined"){
	  	    	input_city.trigger("blur");
	  	    }
	  	 	
	     options_city.hide();
	});
	
	$(".form_select_options").find("li").live("mouseover", function(){
  	  	$(this).parent().find("li").removeClass("active");
		$(this).addClass("active");
    });
    
    	$(".form_select_userAuth").find("li").click(function(event){
		var select=$(this).parent(".form_select_options").parent(".form_select")
				,options_auth=select.find(".form_select_options")
				,input=select.find("input")
				,input_val=select.siblings(".form_div").find(".form_input").find("input");
				
			input.val($(this).html()).attr("_value",$(this).attr("_value")).trigger("change");
		
			if(input.attr("_value")==="1"){//身份证
					input_val.attr("placeholder","身份证号码").attr("data-rule","cardnum_new").attr("data-error","身份证号码").trigger("change");
				}else if(input.attr("_value")==="0"){//护照
					input_val.attr("placeholder","护照号码").attr("data-rule","passport").attr("data-error","护照号码").trigger("change");
			}
			
			if(input.attr("data-default")==input.attr("_value") && input_val.attr("data-default")==input_val.val()){
				
			}else{
				input_val.val("").trigger("change");
				var t=	input_val.parent(".form_input").parent().find(".tip");
				t.size() >0 && 	t.remove();
			}
			input_val.trigger("blur");
	
			if (typeof(event.button) != "undefined"){
	  	    	input.trigger("blur");
	  	    }
		  	
		    options_auth.hide();
	});
});


var need_post = false; /*是否有修改*/
$(function(){
	 $('input#devSubmit').click(function(){
         if($(".tip_err").length>0){return;}//检查表单是否有错误
		 if(!need_post){location.href = NextUrl;return;} /*无修改*/
		 var form = $(this.form);
		 var data ={
		 	 'action':'common_query'
		 	 ,'business_type':'ajaxsavecheckdeverloper'
		 	 ,"appid"  : global_obj.data.app?global_obj.data.app.app_id:global_obj.data.comp.comp_id
		 	 ,"need_post"  : need_post
		 	,"user_name"  : form.find("input[name='user_name']").val()
		 	,"user_phone" : form.find("input[name='user_phone']").val()
		 	,"company_province" : form.find("input[name='company_province']").attr("_value")
		 	,"company_city" : form.find("input[name='company_city']").attr("_value")
		 	,"user_address" : form.find("input[name='user_address']").val()
		 	,"user_website" : form.find("input[name='user_website']").val()
		 };
		 
		 if (2 == form.find("input[name='user_type']").val()){
		 	data["user_company"] = form.find("input[name='user_company']").val();
		 	data["user_tel"]     = form.find("input[name='user_tel']").val();
		 	data["user_business_code"] = form.find("input[name='user_business_code']").val();
		 }else{
		 	data["user_id_type"] = form.find("input[name='user_id_type']").attr("_value");
		 	data["user_id_card_num"] = form.find("input[name='user_id_card_num']").val();
		 }
		 $.ajax({
			   type: "POST",
			   url: PostUrl,
			   dataType: "json",
			   data: data,
			   success: function(d){
			   	  // var ret = +(d.ret || d.error),msg = common.getMsgByRet(ret);
				    var ret = +(d.code),msg = common.getMsgByRet(ret);
			   	   if (msg){
			   	   		loginWin.alert('<center>'+ msg +'</center>');
			   	   		return;
			   	   }
				   if(ret === 0){
						location.href = NextUrl;
					}else{
						loginWin.alert("<center>数据提交失败，请稍候再试</center>");
					}
			   }
		}); 
	 });
	 $('form#appform_user input').change(function(){  need_post = 1; }) 
});