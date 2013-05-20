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
	,cardnum:function(value,selector){
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
	,cardnumIsSingle:function(value,selector){
		if (value==selector.attr("data-default")){
			showmsg(true,selector,'');
			selector.removeAttr("data-only");
			return;
		}
		var inputlabel = selector.attr("data-error");
		if (true===OPEN_VALIDATOR.cardnum(value)){
		$.getJSON('/developer/checkid/'+encodeURIComponent(value),function(d){
				//d = $.parseJSON(d);
				if(d.error==0){
					showmsg(true,selector,'');
					selector.removeAttr("data-only");
				}else{
					showmsg(false,selector,'此'+inputlabel+'已被注册');
					selector.attr("data-only","此"+inputlabel+"已被注册");
				}
			});
		}else{
			showmsg(false,selector,inputlabel+'格式错误');
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
	,applink:function(value){
		if (value){
			return OPEN_VALIDATOR.link(value);
		}else{
			return true;
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
		var tchar = value.match(/[^ A-Za-z0-9（）()\u4e00-\u9fa5]+/g);
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
				// "appname"  : "/apps/checkname/"+encodeURIComponent(value),
				 "appname":"/pipes/interfaceserver",
				 "compname" : "/pipes/interfaceserver"
			}
			,para   = {
				 "appname"  : {
				 	'action' : 'common_query',
				 	'business_type' : 'ajax_checkname',
				 	'appname' : value
				 }
				,"compname" : {"action":"common_query","business_type":"ajax_checkcompname","comp_name":encodeURIComponent(value),"comp_type":window.comp_type}
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
					if(d.code == 0){
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
		if(value.length<=140){
			return true; b 
		}else{
			return "##不能超过140个字符";
		}
	}
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
		var tchar = value.match(/[^0-9a-zA-Z\-]+/g);
		if (value && tchar){
			return '你填写的##含有非法字符';
		}
		
		if(value.length>=8 && value.length<=20){
			if(new RegExp(/^[0-9a-zA-Z-]{8,20}$/).test(value)){
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
						//var w = selector.attr("data-working")|0,ret = +d.ret,err = common.getMsgByRet(ret); //转化为自然数
						var w = selector.attr("data-working")|0,ret = +(d.code||d.error),err = common.getMsgByRet(ret); //转化为自然数
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
	,compname:function(value,selector){//应用全称
		var k,
			tchar,
			msg = selector && selector.attr("data-error") || "网站名称",
			form = selector && selector[0].form;
			value = value.replace(/^\s+|\s$/g,"");
			selector.val(value);
			tchar = value.match(/[^ A-Za-z0-9（）()\u4e00-\u9fa5]+/g);
			k = value.replace(/[^\x00-\xff]/g,"tx").length;
			$("#comp_name").val(value);
		
		if (value && tchar){
			return '##不能含有非法字符'+tchar.join("");
		}
			if(k>0&&k<=14){
				var dataonly = selector.attr("data-only");
				if (dataonly){
					if (dataonly === "true"){
						return true;
					}else{
						return "此##已被注册";
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
					//return 1;
				}
			}
			else if(k==0){
				return "##不能为空";
			}else{
				return "##不能超过7个汉字";
			}
	}
	,app_class_main:function(value){//请选择分类
		if(value==-1||value<=0){
			return "应用分类不能为空";
		}
		return true;
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
	if (typeof tSiteWebApp === "undefined"){
		var tSiteWebApp = false;
	}
	if(OPEN_VALIDATOR.hasOwnProperty(rule) && rule){//判断是否进行检测
		if(!$.trim(value)&&rule!="tname"&&rule!="appdes"&& ( rule!="applink"  || ( rule=="applink" && tSiteWebApp == true)) && rule!="companycity"){
		
			errmsg += "不能为空";
			flag = false;
		}else{
			var ret = OPEN_VALIDATOR[rule](value,text);//执行检测规则
		       /*	if (ret && rule=="cardnum"){//验证身份证是否重复
				OPEN_VALIDATOR["cardnumIsSingle"](value,text);
				return;
			}*/
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
		var flag,errmsg,rule,value,submitflag=true,data='',onlyworker = $(f).find("input[data-only]"),imgisok=true;
		if(onlyworker.size() && onlyworker.attr("data-only")  === "false"){
			flag=false;
			errmsg = $(f).find(".tip_err:eq(0)").text();
			if (errmsg != ""){
				loginWin.alert("<center>"+errmsg+"</center>");
			}
			return false;
		}
		//验证图片
    	$("form input[type='file']").each(function(){
    		if($(this).attr("data-error")){
    			imgisok=false;
    			loginWin.alert("<center>"+$(this).attr("data-error")+"</center>");
    			return false;
    		}
    	});
		if (!imgisok){
		return false;
		}
	
		$("form input[type='text'],form textarea,form select").each(function(){
			rule = $(this).attr("data-rule");
			value = $(this).val(); 
			errmsg = $(this).attr("data-error");
			if (typeof tSiteWebApp === "undefined"){
				var tSiteWebApp = false;
			}
			if(OPEN_VALIDATOR.hasOwnProperty(rule) && rule){
				if(!$.trim(value)&&rule!="tname"&&rule!="appdes"&& ( rule!="applink" || ( rule=="applink" && tSiteWebApp == true)) && rule!="companycity"){
					flag = false;
					errmsg += "不能为空";
				}else{
					if(rule=="link"){
						var app_hosting = $("input[name='app_hosting']:checked").val();
						if(app_hosting){
							if(app_hosting==1){
								return;
							}
						}
					}
		
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
				submitflag = submitflag && flag;
				if(rule!="companyprovince"){
					showmsg(flag,$(this),errmsg);
				}else{
					showmsgforselect(flag,$(this),errmsg);	
				}
				
				if (!flag){
				loginWin.alert("<center>"+errmsg+"</center>");
				return false;
				}
			}
		});
		if (!submitflag){return false;}
		
		//创建无线应用，还需验证是否选择了应用平台
		if($(f).hasClass("wirelessappform")){
			var appplatform = $("input[name='appplatform']");
			if($("input[name='appplatform']:checked").length == 0){
				showmsg(false,$("#iphone_pf"),"请至少选择一个平台");
				loginWin.alert("<center>请至少选择一个平台</center>");
				return false;
			}
		}
		
		var agreements = $("input[name='user_agree']");
		if(agreements.size()===0){//检验是否有同意选项
			if(submitflag){//没有checkbox user_agree
				$("form").submit();	
		    	return false;
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

$("form input[data-rule='appname'],form input[data-rule='compname']").change(function(){
	var selector = $(this),rule = selector.attr("data-rule"),value = selector.val().replace(/\s/g,"");
	if (/^[ A-Za-z0-9（）()\u4e00-\u9fa5]{1,14}$/.test(value) && value.replace(/^\s+|\s+$/g,"").replace(/[^\x00-\xff]/g, 'TX').length<=14){
		selector.removeAttr("data-only");
		selector.attr("data-working",1);
		OPEN_VALIDATOR["appnameCheck"](value,selector);
	}else{
		selector.removeAttr("data-only");
	}
});

$("form input[data-rule='complicensenum'],form input[data-rule='cardnum_new'],form input[data-rule='passport']").change(function(){
	var selector = $(this),rule = selector.attr("data-rule"),value = selector.val();
	var rulecheck={"complicensenum":{"reg":/^[0-9a-zA-Z-]{8,20}$/,"check":"complicensenumCheck"}
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

$("#app_class_child").change(function(){

		var appObj = $("#app_class_child");
		var cid = appObj.val();	
		if(cid!=-1)
		{
	//			alert(cid);
				showmsg(true,appObj,"");
			
		}
			

});

$("#app_class_main").change(function(){


		var app_type = $("input[name='app_type']").val();

		var appObj = $("#app_class_child");

		var cid = $("#app_class_main").val();	

		//alert(cid);

		if(cid!=-1 )
		{
		if(app_type==4)
		{
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
					//var ret = +d.ret , msg = common.getMsgByRet(ret);
				var ret = +d.code , msg = common.getMsgByRet(ret);
				if (msg){
				loginWin.alert("<center>"+msg+"</center>");
				return;
				}
				}	
				showmsg(true,$("#app_class_main"),"");
				$.each(appObj,function()
						{
						//	appObj.append("<option value="+n.cid+">"+n.cname+"</option>");	
						$(this).children().remove();
						});


				$.each(d,function(i,n)
						{
						appObj.append("<option value="+n.cid+">"+n.cname+"</option>");	
						//		alert(n.cid);
						});

		appObj.css("display","inline-block");

				}
		});

		}else{
			appObj.remove();	
		}
		
				showmsg(true,$("#app_class_main"),"");
		}else{
				$.each(appObj,function()
				{
				$(this).children().remove();
				});
			appObj.css("display","none");
			showmsg(false,$("#app_class_main"),"应用分类不能为空");

		}
});

//
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
        
        input_province.val($(this).html()).attr("_value",$(this).attr("_value"));
        input_city.val(first.n).attr("_value",first.value);
        if (typeof(event.button) != "undefined"){
  	    	input_province.trigger("blur");
  	    }
        options_province.hide();
    });
    
   	$(".form_select_city").find("li").live("click",function (event) {
		var select_city=$(this).parent("ul").parent(".form_select")
			,options_city=select_city.find(".form_select_options")
			,input_city=select_city.find("input");
		
		input_city.val($(this).html()).attr("_value",$(this).attr("_value"));
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
				
			input.val($(this).html()).attr("_value",$(this).attr("_value"));
		
			if(input.attr("_value")==="1"){//身份证
					input_val.attr("placeholder","身份证号码").attr("data-rule","cardnum_new").attr("data-error","身份证号码");
				}else if(input.attr("_value")==="0"){//护照
					input_val.attr("placeholder","护照号码").attr("data-rule","passport").attr("data-error","护照号码");
			}
			
			if(input.attr("data-default")==input.attr("_value") && input_val.attr("data-default")==input_val.val()){
				
			}else{
				input_val.val("");
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

var upload_op_type=0,//标志上传和更改：上传0 更改1
    upload_idcard_suc=0,upload_certifpic_suc=0;//上传成功标志位

//删除图片
$(".delete_pic").live("click",function () {
	var	div_pic=$(this).parent(".uploaddiv")
		,img=div_pic.parent("dt").find(".nulimg")
		,label_for=div_pic.parent("dt").find(".pic_type").val();
	
	if(label_for==="icon_idcard"){
		upload_idcard_suc=0;
	}else if(label_for==="icon_certifpic"){
		upload_certifpic_suc=0;
	}

	div_pic.html('<label for="'+label_for+'" class="uploadbtn upload_pic" _value="0">上传</label>');
	$("input#"+label_for).removeClass("moz1").removeClass("ie6_1").addClass("moz0").addClass("ie6_0");//ff
	img.attr("src","http://mat1.gtimg.com/app/opent/images/developer/pic_zwtp.png").attr("_src","0");
	$("input#"+label_for).val("");
	
	$('input#ajaxCertifSubmit').attr("class","devCancel").attr("disabled","disabled"); 
});

function uploadsuccess(input_pictype){
	var div_pic=$(input_pictype).parent("dt").find(".uploaddiv")
		,img=div_pic.parent("dt").find(".nulimg")
		,upload_op_type=div_pic.find(".uploadbtn").attr("_value")
	    ,label_for=div_pic.parent("dt").find(".pic_type").val();
		
	if(label_for==="icon_idcard"){
		upload_idcard_suc=1;
	}else if(label_for==="icon_certifpic"){
		upload_certifpic_suc=1;
	}	

	img.attr("_src","1");
	if(+upload_op_type===0){//点击“上传”，改为“更改、删除”
		div_pic.html('<label for="'+ label_for+'" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="uploadbtn delete_pic">删除</label>');
		$("input#"+label_for).removeClass("moz0").removeClass("ie6_0").addClass("moz1").addClass("ie6_1");//ff
	}	
}
	
function setcertifsumbitbtn( ){
	if( $("#idimg").attr("_src")==1 && $("#certifimg").attr("_src")==1 ){
		$('#ajaxCertifSubmit').removeClass("devCancel").addClass("devSubmit").removeAttr("disabled"); 
	}else{
		$('input#ajaxCertifSubmit').attr("class","devCancel").attr("disabled","disabled"); 	
	}
}

$("input[type='file']").change(function(){
		    var f=this.files&&this.files[0],
		    	$this=$(this),pic_type=$this.siblings(".pic_type")
		    	img=$(this).parent().find("img")[0],
		    	timg=new Image(),
		    	str="";	
    			if(document.all){ //ie
    				img.src="http://mat1.gtimg.com/app/opent/images/developer/pic_zwtp.png";
    			    	var  timer = setTimeout(function(){ 
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
	    			    			$(img).attr("_src","0");
	    			    			setcertifsumbitbtn();
	    			    			return;
	    			    	}
    					},1000);
    				
    			    	timg.onload = function(){
	    			    	if(/\.(png|jpeg|jpg)$/i.test(timg.src)==false){
	    			    			str = "你上传的图片不是有效的jpg/png格式图片";
	    			    	    	loginWin.alert("<center>"+str+"</center>");
	    			    	    	$this.attr("data-error",str);
	    			    	    	$(img).attr("_src","0");
	    			    	    	setcertifsumbitbtn();
	    			    	    	return; 
	    			    		}else if(timg.fileSize/1024>2048){
	    			    			str = "文件大小不能超过2M，请重新选择";
	    			    			loginWin.alert("<center>"+str+"</center>");
	    			    			$this.attr("data-error",str);
	    			    			$(img).attr("_src","0");
	    			    			setcertifsumbitbtn();
	    			    	    	return;
	    			    		}
	    			    		img.src=timg.src;
	    			    		$(img).attr("_src","1");
	    			    		//上传成功
	    			    		uploadsuccess(pic_type);
	    			    		setcertifsumbitbtn();
	    			    		$this.removeAttr("data-error");
	    			    		this.onload = null;
    			    	}
    			    	timg.onerror = function(){
    			    		str = "你上传的图片不合法";
    			    		loginWin.alert("<center>"+str+"</center>");
    			    		$this.attr("data-error",str);
    			    		$(img).attr("_src","0");
    			    		setcertifsumbitbtn();
    			    		return;
    			    	}
    			    	
    			    	timg.src=this.value;
    			    	
    				return;
    			}
    			
    			if(/^image\/(png|jpeg)$/i.test(f.type)&&(f.fileSize||f.size)/1024<=2048){
	    			if(!window.FileReader){
	    				for(var i in f){
	    				img.src=f.fileName;
	    				}
	    				str = "你的浏览器不支持fileReader，无法预览图片<br/>建议使用firefox或chrome浏览器或升级您当前的浏览器至最新版本";
	    				loginWin.alert({"text":"<center>"+str+"</center>","height":170});
	    				$this.attr("data-error",str);
	    				$(img).attr("_src","0");
	    				setcertifsumbitbtn();
	    				$this.val("");
	    				return;
	    			}
    				var reader = new FileReader();
    				var loadimg =function(imgs){
    					return function(e){
    							for(var i in imgs){
    								imgs[i].src=e.target.result;
    								$(imgs[i]).attr("_src","1");
    							}
    					}
    				};
					reader.onload = loadimg([img,timg]);
					reader.readAsDataURL(f);
					loadimg([img]);
					(function(){
						var _callback=arguments.callee,_times=arguments[0];
						if((((timg.width||timg.height)|0)==0)&&(_times<10)){
							setTimeout(function(){
								_callback(++_times);
							},100);
							return;
						}
						$this.removeAttr("data-error");
					})(0);
					
			    	//上传成功
		    		uploadsuccess(pic_type);
		    		setcertifsumbitbtn();
					$this.removeAttr("data-error");
					return;
    			}else if(/^image\/(png|jpeg)$/i.test(f.type)==false){
    				img.src="http://mat1.gtimg.com/app/opent/images/developer/pic_zwtp.png";
    				str = "你上传的内容不是有效的jpg/png格式图片";
    				loginWin.alert("<center>"+str+"</center>");
    				$this.attr("data-error",str);
    				$(img).attr("_src","0");
    				setcertifsumbitbtn();
    				$this.val("");
    				return;
    			}else if((f.fileSize||f.size)/1024>2048){
    				img.src="http://mat1.gtimg.com/app/opent/images/developer/pic_zwtp.png";
    				str = "文件大小不能超过2M，请重新选择";
    				loginWin.alert("<center>"+ str +"</center>");
    				$this.attr("data-error",str);
    				$(img).attr("_src","0");
    				setcertifsumbitbtn();
    				$this.val("");
    				return;
    			};
    	});
    	
var submitCallback = function (d) {
	//var ret = +(d.ret||d.error),msg=common.getMsgByRet(ret);
	var ret = +d.ret ,msg=common.getMsgByRet(ret);
	loginWin.close();
	if (msg){
		loginWin.alert("<center>"+msg+"</center>");
		return;
	}
	
	if (ret == 0) {
		if(loginWin){
	    	//当前资质审核状态为通过、修改后通过
	    	if(user_certif_status === 1 && (user_check_status ===0 || user_check_status ===3) ){
    			var str="<center>你重新提交的资质证明正在审核中，通过审核后才可生效。请确认资质证明与你的基本信息一致，否则审核将不予以通过。现在就去修改基本信息？</center>";
    			loginWin.confirm({"text":str,"width":450,"title":"修改资质证明","ok_text":"立即修改","cancel_text":"以后再说"},function(){location.href="/development/developer/";return false;},function(){location.reload( );});
				return false;	
	    	}
	    	
	    	loginWin.show({
	    	"title":"修改资质证明",
	    	"width":410,
	    	"height":125,
	    	"text":"<center><br/><label class=\"icon_ok\"></label> &nbsp; 提交审核成功<br/></center>"
	    	});
	    	
			setTimeout(function () {
	    		window.location.href=window.location.href;
			},2000);
		}
	}else{
		var reason = "";
		if(ret > 100 && ret < 200) {
            reason = "图片不合法";
		} else if(ret > 200 && ret < 300) {
            reason = "参数非法";
		} else {
		    reason = "未知原因";
		}
		if(loginWin){
    		loginWin.show({
    	    	"title":"修改资质证明",
    	    	"width":410,
    	    	"height":185,
    	    	"text":"<center><br/><label class=\"icon_alert\"></label> &nbsp; "+OPEN_VALIDATOR.apptypeName+"提交审核失败，原因&nbsp;<strong>" + reason + "</strong><br/><input type=\"button\" class=\"devSubmit closeBtn\" value=\"确定\"/></center>"
    	    	});
    	    	loginWin.contentarea.find(".closeBtn").bind("click",function(){
    		        loginWin.close();
    	    	});
		}
	}
};
			  

/*  |xGv00|31af1f7a6ff6f38fe1c7611946104277 */
