/*通知系统接入——提交申请验证*/
var OPEN_VALIDATOR;//检测对象封装
OPEN_VALIDATOR = {
	appweibo:function(name,selector){
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
				var errorflag=+selector.attr("error-flag");
				if(errorflag===1)
					return "该"+label+"尚未通过认证";
				else if(errorflag===0)
					return "该"+label+"不存在";
				else if(errorflag===undefined)
					return 1;
			}
		}else{
			return 1;
		}
		
		return true;
	}
	,appweiboCheck:function(value,selector){
		var label  = selector.attr("data-error") 	//字段名
			,dvalue = selector.attr("data-default") //默认值
			,rule   = selector.attr("data-rule")    //验证规则
			,url    = "/pipes/interfaceserver"
			,para   = {"action":"common_query","business_type":"ajax_checkvip","account":value};
			
		if (dvalue != value){
			showmsg(1,selector,"正在验证"+label);
			$.ajax({
					"type":"get",
					"dataType":"json",
					"url":url,
					"data":para,
					"success":function(d){
						var w = selector.attr("data-working")|0,ret = +d.ret,err = common.getMsgByRet(ret);; //转化为自然数
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
							}else{
								getPreview(d.data.head,d.data.nick,d.data.notice_type);
							}
							selector.removeAttr("data-working");
						}else if(ret===1){
							selector.attr("data-only",false);
							selector.attr("error-flag",1);
							showmsg(false,selector,'该'+label+'尚未通过认证');
							selector.removeAttr("data-working");
							if (w == 2){
								loginWin.alert("<center>该"+label+"尚未通过认证</center>");
							}
							return false;
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
	if(!flag){
		removePreview();
	}
}

$(function(){
	
$("input[type='text']").blur(function(){//单个即时验证
	var text,value,rule,errmsg,flag;
	text = $(this);
	text.val($.trim(text.val()));
	value = text.val();
	rule = text.attr("data-rule");//检测规则
	errmsg = text.attr("data-error");//提示信息
	if(OPEN_VALIDATOR.hasOwnProperty(rule) && rule){//判断是否进行检测
		if(!$.trim(value)){
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
				//errmsg = ret.replace(/##/g,errmsg);
				errmsg=ret;
			}
		}
		showmsg(flag,text,errmsg);
	}

});

$("form input[data-rule='appweibo']").change(function(){
	var selector = $(this),rule = selector.attr("data-rule"),value = selector.val().replace(/\s/g,"");
	if (rule == "appweibo"){
		if (/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/g.test(value)){
			selector.removeAttr("data-only");
			selector.removeAttr("error-flag");
			selector.attr("data-working",1);
			OPEN_VALIDATOR["appweiboCheck"](value,selector);
	    }
	}
});

$("#noticeSubmit").click(function(){//表单提交验证
		var flag,errmsg,rule,value,submitflag = true,data='',f = this.form,worker = $(f).find("input[data-working]");
		if (worker.size()>0){
			worker.attr("data-working",2);
			return false;
		}
		$(".appform input[type='text']").each(function(){
			rule = $(this).attr("data-rule");
			value = $(this).val();
			errmsg = $(this).attr("data-error");
			if(OPEN_VALIDATOR.hasOwnProperty(rule) && rule){
				if(!$.trim(value)){
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
					//	errmsg = ret.replace(/##/g,errmsg);
						errmsg=ret;
					}
				}
				submitflag = submitflag && flag;
				showmsg(flag,$(this),errmsg);
				if(flag === false){
					loginWin.alert("<center>"+errmsg+'</center>');
				}
			}
		});
		if (submitflag){	
				formSubmit();
		}
		return false;
});

$("form").keydown(function(event){//阻止回车提交
	if(event.keyCode == 13){
		//$(this).find("input[type='submit']").trigger("click");
	}
});

$("form input[type='reset']").click(function(){//清除提示
	$(".form_input").next(".errorTip").remove();
	$(".form_input").next(".currectTip").remove();
});
});