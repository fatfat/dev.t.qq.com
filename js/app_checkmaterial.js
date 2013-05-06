var OPEN_VALIDATOR;
OPEN_VALIDATOR = {
	apptypeName:"应用",
	working:0 ,//0:不在验证中,1:普通验证中 2:因为点了提交按钮而在验证中
	isempty:function(){return true;},
	link:function(value){
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
	,appstorelink:function(value){
		var strRegex = "^((https|http)://itunes.apple.com)(:[0-9]*)?(/[-A-Za-z0-9_$\\.+!*(),;:@&=?/~#%']*)*";  
		var re = new RegExp(strRegex);  
		if (/["'<>]/g.test(value)){
			return "##不能含有'\"<>";
		}else if(re.test(value)){
			return true;
		}else{
			return "请填写苹果官方市场下载地址";
		}
	}
	,androidlink:function(value){
		var strRegex = "^(https://play.google.com/store)(:[0-9]*)?(/[-A-Za-z0-9_$\\.+!*(),;:@&=?/~#%']*)*";  
		var re = new RegExp(strRegex);  
		if(value){
			if (/["'<>]/g.test(value)){
				return "##不能含有'\"<>";
			}else if(re.test(value)){
				return true;
			}else{
				return "##格式错误";
			}
		}else{
			return true;
		}
	}
	,appdes:function(value,selector){//应用描述
		value = $.trim(value);
		selector.val(value);
		if(value.length>140){
			return "##不能超过140个汉字";
		}else if(value.length<30){
			return "##不能少于30个汉字";
		}else{
			return true;
		}
	},
	wappdes:function(value,selector){//无线应用描述
		value = $.trim(value);
		selector.val(value);
		if(value.length<30){
			return "##不能少于30个汉字";
		}else{
			return true;
		}
	},
	installSize:function(value,selector){//安装包大小
		value = $.trim(value);
		selector.val(value);
		if(new RegExp(/^[\d]+\.?[\d]*([Mm][Bb]?)?$/).test(value)){
			return true;
		}else{
			return "##格式不正确";
		}
	}
};	

OPEN_VALIDATOR.apptypeName = /iweibo/.test(location.pathname) ? "组件" : (/platform/.test(location.pathname) ? "平台" : "应用" );

$("form input[type='text'],form textarea").blur(function(){//单个即时验证
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
		if((!$.trim(value) && rule!="tname"&&rule!="applink"&&rule!="androidlink") || (value=="请选择" && rule=="appsupport")){
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
	
var submitCallback = function (d) {
	var ret = +(d.ret || d.error),msg = common.getMsgByRet(ret);
	loginWin.close();
	if (msg){
		loginWin.alert("<center>"+msg+"</center>");
		return;
	}
	if (ret == 0) {
		if(loginWin){
			$(".app_check").html('<div class="app_check"><label>确认开发者信息</label><i class="active"></i><label>确认'+OPEN_VALIDATOR.apptypeName+'信息</label><i class="active"></i><label>确认'+OPEN_VALIDATOR.apptypeName+'素材</label><i class="active"></i><strong>提交审核</strong></div>');
    		loginWin.alert({
    	    	"title":"提交审核",
    	    	"width":410,
    	    	"height":185,
    	    	"text":"<center><label class=\"icon_ok\"></label> &nbsp; "+OPEN_VALIDATOR.apptypeName+"提交审核成功，审核人员会在两个工作日处理完毕。</center>"
    	    	},function(){
    	    	window.location.href=nextURL;
    	    	});
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

var submitMaterialCallBack = function(d){
	var ret = +(d.ret || d.error),msg = common.getMsgByRet(ret),
		str = '<div style="text-align:center;margin:30px 0 10px;">' + msg + '</div>' + '<div style="text-align:center;"><a href="javascript:;" class="devSubmit closeBtn">确定</a></div>';
	loginWin.close();
	if (msg){
		loginWin.show({
    	    	"title":"提示",
    	    	"width":410,
    	    	"height":185,
    	    	"text":str
    	    	});
    	    	loginWin.contentarea.find(".closeBtn").bind("click",function(){
    		        common.showLoginWin();
    	    	});
		return;
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
	}else if(selector.parent(".form_element").size()){
		selector.parent(".form_element").parent().find(".tip").remove();//清除提示
		selector.parent(".form_element").after(html);
		selector.parent(".form_element").parent().find(".inputdes").first().hide();
	}else{
		selector.parent().find(".tip").remove();//清除提示
		selector.parent().append(html);	
	}
}

$(function(){
	$("<div class=\"tooltip\" id=\"tooltip\"><div class=\"toolangle\"><span class=\"a1\">◆</span><span class=\"a2\">◆</span></div><div class=\"tooltext\"></div></div>").appendTo($("body"));
    var tooltip={
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
		    	maxsize = $this.attr("_size") || 500,//图像最大大小，无线应用图标为10K，其他为500K
    			filetype = $this.hasClass("png_jpg") ? 2 : 1,//2表示要求png/jpg格式，1表示png格式 
    			fileSrcReg = filetype == 2 ? new RegExp(/\.(png|jpeg|jpg)$/i) : new RegExp(/\.(png)$/i),//针对ie的文件后缀名正则表达式
		    	filetypeReg = filetype == 2 ? new RegExp(/^image\/(png|jpeg)$/i) : new RegExp(/^image\/(png)$/i),//针对其他浏览器的文件后缀名正则表达式
		    	filesuffix = filetype == 2 ? "jpg/png" : "png",
		    	clearImage = function(){
		    		setTimeout(function(){
		    			$img.removeAttr("src").attr("src","http://mat1.gtimg.com/app/opent/images/websites/0.gif");
		    			$this.val("");
		    		},100);
		    	},
		    	showErrOnIE = function(str){
		    		loginWin.alert({
	    				"text":"<div style=\"margin:0 0 0 30px;\">由于您的浏览器安全限制，"+str+"<br/>请将本站( <span style=\"color:red;font-weight:bold;\">"
	    					+location.href.slice(0,location.href.indexOf(location.pathname)+1)
	    					+"</span> )添加到受信任的站点列表中 "
	    					+"<br/>点击此处了解 <a href=\"http://open.t.qq.com/bbs/forum.php?mod=viewthread&tid=21271\" target=\"_blank\">如何将本站添加到受信任的站点列表中？</a></div><div style=\"color:#090;margin:0 30px;\">您也可以使用非IE内核浏览器，如chrome、firefox（Safari暂不支持）</div>",
	    				"width":460,
	    				"height":200
	    				});
	    				clearImage();
		    	},
		    	fnForIE = function(){
		    		img.src="http://mat1.gtimg.com/app/opent/images/websites/0.gif";
    				var timer = setTimeout(function(){ 
			    		if( +(timg.width || "") === 0 || +(timg.height || "")=== 0 ){
					        showErrOnIE("无法获取图片大小");
			    			$this.attr("data-error",str);
			    			return;
    			    	}
					},200);
    					
					timg.onload = function(){
						if (this.complete){
							return false;
						}
						if(fileSrcReg.test(timg.src)==false){
			    			str = "你上传的图片不是有效的" + filesuffix +"格式图片";
			    	    	loginWin.alert("<center>"+str+"</center>");
			    	    	$this.attr("data-error",str);
			    	    	clearImage();
			    	    	return; 
			    		}else if(timg.fileSize/1024>maxsize){
			    			str = "文件大小不能超过" + maxsize + "K，请重新选择";
			    			loginWin.alert("<center>"+str+"</center>");
			    			$this.attr("data-error",str);
			    			clearImage();
			    	    	return;
			    		}else if( $img.attr("_width") && $img.attr("_width") ){ //需要验证图片大小
			    			if(+(timg.width || "") === 0 || +(timg.height || "")=== 0 ){
    					        showErrOnIE("无法获取图片大小");
    			    			$this.attr("data-error",str);
    			    			clearImage();
    			    			return;
    			    		}else if(timg.width != $img.attr("_width") || timg.height != $img.attr("_height")){
			    				str="你上传的图片尺寸"+timg.width+"×"+timg.height+"不符合要求，请选择一张"+$img.attr("_width")+"×"+$img.attr("_height")+"大小的" + filesuffix + "图片";
			    				$this.attr("data-error",str);
			    				str+="<div style=\"border-top:1px dashed #ccc;margin-top:5px;padding-top:5px;\">"
			    					+"<strong>如果你的图片尺寸符合要求但仍然看到该提示，你可以：</strong><br/>"
			    					+"1、如果你的浏览器是双核浏览器，可以切换到极速模式重新上传<br/>"
			    					+"2、如果你的浏览器不是双核浏览器，可以使用其它浏览器，如chrome或firefox</div>";
			    				loginWin.alert({"text":"<div style=\"margin:0 25px;\">"+str+"</center>","width":500,"height":215});
			    				$this.attr("data-error",str);
			    				clearImage();
								return;
			    			}
		    			}
			    		img.src=timg.src;
			    		//上传成功
			    		$this.removeAttr("data-error");
			    		this.onload = null;
			    	};
			    	timg.onerror = function(){
			    		str = "读取图片失败，浏览器不支持直接读取图片";
			    		showErrOnIE("加载图片失败");
			    		$this.attr("data-error",str);
			    		timg.onerror = null;
			    		clearImage();
			    		return;
			    	};
			    	timg.src=$this[0].value;
			    	return;
		    	},
		    	fnForSafari = function(){
    				str = "你的浏览器不支持fileReader，无法预览图片<br/>建议使用firefox或chrome浏览器或升级您当前的浏览器至最新版本";
    				loginWin.alert({"text":"<center>"+str+"</center>","height":170});
    				$this.attr("data-error",str);
    				clearImage();
    				return;
		    	},
		    	fnForElse = function(){
					var reader = new FileReader(),
						loadimg =function(imgs){
							return function(e){
									for(var i in imgs){
										imgs[i].src=e.target.result;
									}
							}
						},
						hasError = false; //是否已经报错
						
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
							
							if((timg.width!=$img.attr("_width")||timg.height!=$img.attr("_height")) && !hasError){
								str="你上传的图片尺寸"+timg.width+"×"+timg.height+"不符合要求<br/>请选择一张"+$img.attr("_width")+"×"+$img.attr("_height")+"大小的" + filesuffix + "图片";
								img.src="http://mat1.gtimg.com/app/opent/images/websites/0.gif";
								loginWin.alert({"text":"<center>"+str+"</center>","height":160});
								$this.attr("data-error",str);
								clearImage();
								return;
							};
						
							$this.removeAttr("data-error");
						})(0);
					};
					if(filetypeReg.test(f.type)&&(f.fileSize||f.size)/1024<=maxsize){
	    			
					}else if(filetypeReg.test(f.type)==false){
						str = "你上传的图片不是有效的" + filesuffix +"格式图片";
						hasError = true;
						loginWin.alert("<center>"+str+"</center>");
						$this.attr("data-error",str);
						clearImage();
						return false;
					}else if((f.fileSize||f.size)/1024>maxsize){
						str = "文件大小不能超过" + maxsize + "K，请重新选择";
						hasError = true;
						loginWin.alert("<center>"+ str +"</center>");
						$this.attr("data-error",str);
						clearImage();
						return false;
					}else{
						$this.removeAttr("data-error");
						return true;
					}
		    	}
		    	;
		    	if(window.FileReader){
	    			return fnForElse();
	    		}else if(document.all){
	    			return fnForIE();
	    		}else{
	    			return fnForSafari();
	    		}
    	});

    $("input#devSubmit").click(function(){
    	if(app_type !== 6){ //非无线应用
	    	//验证表单上传元素中都有图片
	    	var imgisok=true,str="";
	    	$("input[type='file']").each(function(){
	    		var img=$(this).parent().find("img");
	    		if( (!$(this).val() && !$(this).attr("data-default").replace("NULL","")) || $(this).attr("data-error") ) {
	    			imgisok=false;
	    			str="<center>请选择一张"+img.attr("_width")+"×"+img.attr("_height")+"的png图片</center>";
	    			$(this).prev(".uploadbtn")[0].scrollIntoView(true);
	    			loginWin.alert(str);
	    			tooltip.show(str,$(this).prev(".uploadbtn"),2000);
	    			return false;
	    		}
	    	});
			if (!imgisok){return false;}
		}else{//无线应用
			var f = this.form , worker = $(f).find("input[data-working]");
			if (worker.size()>0){
				worker.attr("data-working",2);
				return false;
			}
			var submitrule = $.trim($(this).attr("data-rule")),
				app_platform = + $("#app_platform").val();//应用平台
			if(submitrule == 'formauto'){//表单自动提交
				if($(f).hasClass("wirelessappform") && app_platform === 0){
					loginWin.alert("<center>请至少选择一个平台</center>");
					return false;
				}
		
				var form=this.form,flag,errmsg,rule,value,submitflag=true,data='',imgisok=true;
				
				$("form input[type='text'],form textarea,select#app_class_main,select#app_class_child,form input[type='file']").each(function(){
					if($(f).hasClass("wirelessappform")){
						if((app_platform === 1 && $(this).hasClass("android_field")) || (app_platform === 2 && $(this).hasClass("iphone_field"))){//只选择了iphone平台,对android字段不验证;若只选择了android平台，则对iphone字段不验证
							return;
						}
					}
				    rule = $(this).attr("data-rule"),value = $(this).val(),errmsg = $(this).attr("data-error");
					if(OPEN_VALIDATOR.hasOwnProperty(rule) && rule){
						if((!$.trim(value) && rule!="tname"&&rule!="applink"&&rule!="androidlink") || (value=="请选择" && rule=="appsupport")){
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
			    			str="<center>请上传"+$(this).attr("data-label")+"</center>";
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
				
				//创建无线应用，还需验证是否选择了应用平台
				if($(f).hasClass("wirelessappform")){
					var appplatform = $("input[name='appplatform']");
					if($("input[name='appplatform']:checked").length == 0){
						showmsg(false,$("#iphone_pf"),"请至少选择一个平台");
						loginWin.alert("<center>请至少选择一个平台</center>");
						return false;
					}
				}
			}	
		}
		
		// 必须同意开发者服务协议
		var agreements = $("input[name='user_agree']");
		if(agreements.size()===0){//检验是否有同意选项
			if(submitflag){//没有checkbox user_agree
				$("form").submit();
			}else{
				return false;
			}
		}else{
			if (agreements.not(":checked").size()>0){
				loginWin.alert("<center>您尚未同意《"+(agreements.not(":checked").attr("agreement")||"腾讯微博开放平台开发者服务协议")+"》</center>");
				return false;
			}else{
				$("form").submit();
				return false;
			}
		}

		//最后确认提交应用
		var confirmSubmitten = confirm("审核结果返回前，将不能修改"+OPEN_VALIDATOR.apptypeName+"信息，确定将此"+OPEN_VALIDATOR.apptypeName+"提交审核？");
		if(!confirmSubmitten){return confirmSubmitten;}

		//
    	loginWin.show({
        	"title":"提交审核",
        	"width":410,
        	"height":120,
        	"text":"<div style='text-align:center;line-height:59px;'>数据提交中，请勿操作或关闭浏览器窗口</div>"
        	});
		return true;
	});
});