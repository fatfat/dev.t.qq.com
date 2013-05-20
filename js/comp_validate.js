/*author:icefrogli,date:20110930*/
var OPEN_VALIDATOR; //检测对象封装
OPEN_VALIDATOR = {
	isempty: function() {
		return true;
	},
	appname_only: true,
	assname_exists: true,
	tname: function(name) {
		if (name && !(/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/g.test(name))) {
			return "输入有误";
		}
		return true;
	},
	link: function(value) {
		var strRegex = "^((news|telnet|nttp|file|http|ftp|https)://)(([-A-Za-z0-9_]+(\\.[-A-Za-z0-9_]+)*(\\.[-A-Za-z]{2,6}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_$\\.+!*(),;:@&=?/~#%']*)*";
		var re = new RegExp(strRegex);
		if (re.test(value)) {
			return true;
		} else {
			return "格式错误";
		}
	},
	compname: function(value, selector) {
		var k = value.length,
		tchar, msg = selector && selector.attr("data-error") || "网站名称",
		form = selector && selector[0].form;
		value = value.replace(/\s/g, "");
		tchar = value.match(/[^\w\-\u4e00-\u9fa5]+/g);
		$("#comp_name").val(value);

		if (value && tchar) {
			return '##不能含有特殊字符' + tchar.join("");
		}
		var k = value.length;
		if (k > 0 && k <= 16) {
			var dataonly = selector.attr("data-only");
			if (dataonly) {
				if (dataonly === "true") {
					return true;
				} else {
					return "此##已被注册";
				}
			} else {
				return 1;
			}
		} else if (k == 0) {
			return "##不能为空";
		} else {
			return "##不能超过16个字符";
		}
	},
	appnameCheck: function(value, selector) {
		//检测应用名称唯一性
		var label = selector.attr("data-error") //字段名
		,
		dvalue = selector.attr("data-default") //默认值
		,
		rule = selector.attr("data-rule") //验证规则
		,
		url = {
			//"appname": "/apps/checkname/" + encodeURIComponent(value),
			"appname":"/pipes/interfaceserver",
			"compname": "/pipes/interfaceserver"
		},
		para   = {
				"appname"  : {"action":"common_query","business_type":"ajax_checkname","appname":value}
				,"compname" : {"action":"common_query","business_type":"ajax_checkcompname","comp_name":encodeURIComponent(value),"comp_type":window.comp_type}
			};

		para[rule]["random"] = +new Date();

		if (dvalue != value) {
			showmsg(1, selector, "正在验证" + label + "是否重复...");
			$.ajax({
				"type": "get",
				"dataType": "json",
				"url": url[rule],
				"data": para[rule],
				"success": function(d) {
					var w = selector.attr("data-working") | 0; //转化为自然数
					if (d.error == 0) {
						selector.attr("data-only", true);
						showmsg(true, selector, '');
						if (w == 2) {
							loginWin.close();
							setTimeout(function() {
								$("form input[type='submit']").trigger("click");
							},
							500);
						}
						selector.removeAttr("data-working");
					} else {
						selector.attr("data-only", false);
						//showmsg(false,selector,'此'+label+'已被注册'd.msg);
						showmsg(false, selector, d.msg);
						selector.removeAttr("data-working");
						if (w == 2) {
							loginWin.close();
							//loginWin.alert("<center>此"+label+"已被注册</center>");
							loginWin.alert("<center>" + d.msg + "</center>");
						}
						return false;
					}
				},
				"error": function() {
					selector.attr("data-only", "false");
					setTimeout(function() {
						showmsg(false, selector, '验证失败！请检查网络');
					},
					100);
					return false;
				}
			});
			return true;
		} else {
			selector.attr("data-only", "true");
			selector.removeAttr("data-working");
			return true;
		}
	},
	topicname: function(value, selector) {
		if ($.trim(value).length == 0) {
			return "不能为空";
		} else if (/^[^#]{1,20}$/.test($.trim(value))) {
			return true;
		} else if (/^\s*$/.test(value)) {
			return true;
		} else if ($.trim(value).length > 20) {
			return "不能超过20个字符";
		} else {
			return "不符合规则";
		}
	},
	appdes: function(value, selector) { //应用描述
		value = $.trim(value);
		$("#app_description").val(value);
		if (value.length <= 280) {
			return true;
		} else {
			return "不能超过140个汉字";
		}
	},
	companyname: function(value) { //公司名
		if (value.length <= 40) {
			return true;
		}
		if (value.length > 40) {
			return "不能超过40个字符";
		}
	},
	assname: function(value, selector) {
		var dataonly = selector.attr("data-only"),
		label = selector.attr("data-error");
		if (/^\s*$/.test(value)) {
			return "不能为空";
		} else if (! (/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/g.test(value))) {
			return "##格式错误";
		}
		if (dataonly) {
			if (dataonly === "true") {
				return true;
			} else {
				return "此##不存在";
			}
		} else {
			return 1;
		}
	},
	assnameCheck: function(value, selector) {
		var label = selector.attr("data-error") //字段名
		,
		dvalue = selector.attr("data-default") //默认值
		,
		rule = selector.attr("data-rule") //验证规则
		,
		url = "/websites/checkacc?" + ( + new Date()),
		para = {
			"account": value
		};

		if (dvalue != value) {
			showmsg(1, selector, "检验中...");
			$.ajax({
				"type": "post",
				"dataType": "json",
				"url": url,
				"data": para,
				"success": function(d) {
					var w = selector.attr("data-working") | 0,
					ret = +d.ret,
					err = common.getMsgByRet(ret); //转化为自然数
					if (err) {
						selector.attr("data-only", false);
						showmsg(false, selector, err);
						selector.removeAttr("data-working");
						return;
					}
					if (ret === 0) {
						selector.attr("data-only", true);
						showmsg(true, selector, '');
						if (w == 2) {
							loginWin.close();
							setTimeout(function() {
								$("#showcode").trigger("click");
							},
							500);
						}
						selector.removeAttr("data-working");
					} else if (ret === -1) {
						selector.attr("data-only", false);
						showmsg(false, selector, '此' + label + '不存在');
						selector.removeAttr("data-working");
						if (w == 2) {
							loginWin.close();
							loginWin.alert("<center>此" + label + "不存在</center>");
						}
					}
				},
				"error": function() {
					selector.attr("data-only", "false");
					selector.removeAttr("data-working");
					setTimeout(function() {
						showmsg(false, selector, '验证失败！请检查网络');
					},
					100);
				}
			});
		}
	}
};

function getlen(str) { //获取字符串长度
	var len = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) > 255) len += 2;
		else len++;
	}
	return len;
}

function showmsg(flag, selector, msg) { //提示信息
	var html;
	if (!flag) {
		html = ' <span class="tip tip_err"><span class="tip_icon"></span>' + msg + '</span>';
	} else if (true === flag) {
		html = ' <span class="tip tip_ok"><span class="tip_icon"></span></span>';
	} else if (1 === flag) {
		html = ' <span class="tip tip_waiting"><span class="tip_icon"></span>' + msg + '</span>';
	} else if (2 === flag) {
		html = ' <span class="tip">' + msg + '</span>';
	}

	if (selector.parent(".form_input").size()) {
		selector.parent(".form_input").parent().find(".tip").remove(); //清除提示
		selector.parent(".form_input").after(html);
		selector.parent(".form_input").parent().find(".inputdes").first().hide();
	} else {
		selector.parent().find(".tip").remove(); //清除提示
		selector.parent().append(html);
	}
}

function compValidateEvent() {
	$("input[type='text'],textarea").blur(function() { //单个即时验证
		var text, value, rule, errmsg, flag;
		text = $(this);
		text.val($.trim(text.val()));
		value = text.val();
		rule = text.attr("data-rule"); //检测规则
		errmsg = text.attr("data-error"); //提示信息
		if (rule == "link" && value.length > 0 && value.search(/http[s]?:\/\//) == -1) {
			value = "http://" + value;
			text.val(value);
		}
		if (OPEN_VALIDATOR.hasOwnProperty(rule) && rule) { //判断是否进行检测
			if (!$.trim(value) && rule != "tname" && rule != "appdes" && rule != "topicname") {
				errmsg += "不能为空";
				flag = false;
			} else {
				var ret = OPEN_VALIDATOR[rule](value, text); //执行检测规则
				if (ret == undefined) {
					flag = false;
					errmsg = "";
				} else if (ret === true) {
					flag = true;
				} else if (ret === 1) {
					return;
				} else {
					flag = false;
					errmsg = ret.replace(/##/g, errmsg);
				}
			}
			showmsg(flag, text, errmsg);
		}
	});
	$("form input[data-rule='appname'],form input[data-rule='compname'],input[data-rule='assname']").change(function() {
		var selector = $(this),
		rule = selector.attr("data-rule"),
		value = selector.val().replace(/\s/g, "");
		if (rule === "assname") {
			if (/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/g.test(value)) {
				selector.removeAttr("data-only");
				selector.attr("data-working", 1);
				OPEN_VALIDATOR["assnameCheck"](value, selector);
			}
		} else {
			if (/^[\w\-\u4e00-\u9fa5]{1,16}$/.test(value)) {
				selector.removeAttr("data-only");
				selector.attr("data-working", 1);
				OPEN_VALIDATOR["appnameCheck"](value, selector);
			} else {
				selector.removeAttr("data-only");
			}
		}
	});

	$("#showcode").click(function() { //表单提交验证
		var flag, errmsg, rule, value, submitflag = true,
		data = '',
		f = this.form,
		worker = $(f).find("input[data-working]");
		if (worker.size() > 0) {
			worker.attr("data-working", 2);
			return false;
		}
		$(".appsArea2 input[type='text'],.appsArea2 textarea,.comp_area input[type='text'],.comp_area textarea").each(function() {
			rule = $(this).attr("data-rule");
			value = $(this).val();
			errmsg = $(this).attr("data-error");
			if (OPEN_VALIDATOR.hasOwnProperty(rule) && rule) {
				if (!$.trim(value) && rule != "tname" && rule != "appdes" && rule != "topicname") {
					errmsg += "不能为空";
					flag = false;
				} else {
					var ret = (rule === "appname" ? OPEN_VALIDATOR.appname_only: true) && (rule === "assname" ? OPEN_VALIDATOR.assname_exists: true) && OPEN_VALIDATOR[rule](value, $(this));
					if (ret === true) {
						flag = true;
					} else if (ret === 1) {
						return;
					} else {
						flag = false;
						errmsg = ret.replace(/##/g, errmsg);
					}
					/*
						if (ret === false){
							if (rule === "appname"){
								errmsg = "此组件的网站名称已被注册";
							}else if(rule === "assname"){
								errmsg = "该微博帐号不存在";
							}
						}*/
				}
				submitflag = submitflag && flag;
				showmsg(flag, $(this), errmsg);
				if (flag === false) {
					loginWin.alert("<center>" + errmsg + '</center>');
					//return false;
				}
			}
		});
		if (submitflag) {
			if (window.formSubmit) {
				window.formSubmit();
			}
		}
		return false;
	});

	$("input[data-rule='link']").keydown(function(event) {
		if (event.keyCode == 13) {
			return false;
		}
	});

	$("form").keydown(function(event) { //阻止回车提交
		if (event.keyCode == 13) {
			//$(this).find("input[type='submit']").trigger("click");
		}
	});

	$("form input[type='reset']").click(function() { //清除提示
		$(".form_input").next(".errorTip").remove();
		$(".form_input").next(".currectTip").remove();
	});
}
//add the event
eventBindFuncList.push(compValidateEvent);