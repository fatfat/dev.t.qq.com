/*author:icefrogli,date:20110930*/
//检测对象封装
var OPEN_VALIDATOR;
OPEN_VALIDATOR = {
	apptypeName: "应用",
	working: 0,
	//0:不在验证中,1:普通验证中 2:因为点了提交按钮而在验证中
	checkip: function(value) {
		var exp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
		var reg = value.match(exp); //"你输入的是一个非法的IP地址段！\nIP段为：:xxx.xxx.xxx.xxx（xxx为0-255)！ "               
		if (reg === null) {
			return "非法的IP地址段！";
		} else {
			return true;
		}
	},
	isempty: function() {
		return true;
	},
	appsupport: function() {
		return true;
	},
	appsupportIsEmpty: function(selector) {
		var label = selector.attr("data-error"),
		terminal = selector.attr("data-terminal"); //字段名
		var checkedsize = $("#app_support_list").find("input[name='check_" + terminal + "']:checked").size();
		return checkedsize > 0;
	},
	tname: function(name) {
		if (name && !(/^[a-zA-Z][a-zA-Z0-9_\-]{3,19}$/g.test(name))) {
			return "##输入有误";
		}
		return true;
	},
	appweibo: function(name, selector) {
		var label = selector.attr("data-error"); //字段名
		name = name.replace(/\s/g, "");
		selector.val(name);
		if (name && !(/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/g.test(name))) {
			return label + "输入有误";
		}
		var dataonly = selector.attr("data-only");
		if (dataonly) {
			if (dataonly === "true") {
				return true;
			} else {
				return "该" + label + "不存在";
			}
		} else {
			var dvalue = selector.attr("data-default"); //默认值
			if (dvalue) {
				if (name == dvalue) {
					return true;
				} else {
					return 1;
				}
			} else {
				return 1;
			}
		}
		return true;
	},
	telnum: function(value) {
		if (new RegExp(/^([0-9]|[-])+$/g).test(value)) {
			return true;
		} else {
			return "##格式错误";
		}
	},
	link: function(value) {
		var strRegex = "^((news|telnet|nttp|file|http|ftp|https)://)(([-A-Za-z0-9_]+(\\.[-A-Za-z0-9_]+)*(\\.[-A-Za-z]{2,6}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_$\\.+!*(),;:@&=?/~#%']*)*";
		var re = new RegExp(strRegex);
		if (/["'<>]/g.test(value)) {
			return "##不能含有'\"<>";
		} else if (re.test(value)) {
			return true;
		} else {
			return "##格式错误";
		}
	},
	appstorelink: function(value) {
		var strRegex = "^((https|http)://itunes.apple.com)(:[0-9]*)?(/[-A-Za-z0-9_$\\.+!*(),;:@&=?/~#%']*)*";
		var re = new RegExp(strRegex);
		if (/["'<>]/g.test(value)) {
			return "##不能含有'\"<>";
		} else if (re.test(value)) {
			return true;
		} else {
			return "请填写苹果官方市场下载地址";
		}
	},
	androidlink: function(value) {
		var strRegex = "^(https://play.google.com)(:[0-9]*)?(/[-A-Za-z0-9_$\\.+!*(),;:@&=?/~#%']*)*";
		var re = new RegExp(strRegex);
		if (value) {
			if (/["'<>]/g.test(value)) {
				return "##不能含有'\"<>";
			} else if (re.test(value)) {
				return true;
			} else {
				return "##格式错误";
			}
		} else {
			return true;
		}
	},
	applink: function(value) {
		if (value) {
			return OPEN_VALIDATOR.link(value);
		} else {
			return true;
		}
	},
	appapk: function(value) {
		if (value) {
			return true;
		} else {
			return "请上传##";
		}
	},
	email: function(value) {
		if (new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/).test(value)) {
			return true;
		} else {
			return "##格式错误";
		}
	},
	appname: function(value, selector) { //应用全称
		value = value.replace(/^\s+|\s$/g, "");
		selector.val(value);
		var tchar = value.match(/[^A-Za-z0-9（）()\u4e00-\u9fa5]+/g);
		if (value && tchar) {
			return '##不能含有非法字符' + tchar.join("");
		}
		if (value.replace(/[^\x00-\xff]/g, "tx").length <= 14) {
			var dataonly = selector.attr("data-only");
			if (dataonly) {
				if (dataonly === "true") {
					return true;
				} else {
					var textVal = selector.parent().next().text();
					if (textVal != '') return textVal;
					else return "此##已被注册";
				}
			} else {
				var dvalue = selector.attr("data-default"); //默认值
				if (dvalue) {
					if (value == dvalue) {
						return true;
					} else {
						return 1;
					}
				} else {
					return 1;
				}
			}
		} else {
			return "##不能超过7个汉字";
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
			"appname": "/pipes/interfaceserver",
			"compname": "/pipes/interfaceserver"
		},
		para = {
			"appname": {
				"action": "common_query",
				"business_type": "ajax_checkname",
				"appname": value
			},
			"compname": {
				"action": "common_query",
				"business_type": "ajax_checkcompname",
				"comp_name": encodeURIComponent(value),
				"comp_type": window.comp_type
			}
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
						//showmsg(false,selector,'此'+label+'已被注册');
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
					selector.removeAttr("data-working");
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
	appdes: function(value, selector) { //应用描述
		value = $.trim(value);
		selector.val(value);
		if (value.length > 140) {
			return "##不能超过140个汉字";
		} else if (value.length < 30) {
			return "##不能少于30个汉字";
		} else {
			return true;
		}
	},
	wappdes: function(value, selector) { //无线应用描述
		value = $.trim(value);
		selector.val(value);
		if (value.length < 30) {
			return "##不能少于30个汉字";
		} else {
			return true;
		}
	},
	apphight: function(value, selector) { //应用描述
		value = $.trim(value);
		$("#app_hight").val(value);
		if (new RegExp(/^[1-9][0-9]*$/).test(value)) {
			if (value > 1200 || value < 700) return "##必须在700—1200之间";
			else return true;
		} else {
			return "##必须是正整数";
		}
	},
	appname_only: true,
	companyname: function(value) { //公司名
		if (value.length <= 40) {
			return true;
		}
		if (value.length > 40) {
			return "##不能超过40个字符";
		}
	},
	comaddress: function(value) { //公司地址
		if (value.length <= 100) {
			return true;
		}
		if (value.length > 100) {
			return "##不能超过100个字符";
		}
	},
	comperson: function(value) { //联系人
		if (value.length <= 20) {
			return true;
		}
		if (value.length > 20) {
			return "##不能超过20个字符";
		}
	},
	app_class_main: function(value) { //请选择分类
		if (value == -1 || value <= 0) {
			return "请选择分类";
		}
		return true;
	},
	app_class_child: function(value) { //请选择分类
		var app_type = $("input[name='app_type']").val();
		if (app_type != 4) return true;
		if (value == -1 || value <= 0) {
			return "请选择分类";
		}
		return true;
	},
	appweiboCheck: function(value, selector) {
		var label = selector.attr("data-error") //字段名
		,
		dvalue = selector.attr("data-default") //默认值
		,
		rule = selector.attr("data-rule") //验证规则
		,
		url = "/pipes/interfaceserver",
		para = {
			"name": value,
			"action": "common_query",
			"business_type": "ajax_checkwb"
		};

		if (dvalue != value) {
			showmsg(1, selector, "正在验证" + label);
			$.ajax({
				"type": "get",
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
							setTimeout(function() {
								$("form input[type='submit']").trigger("click");
							},
							500);
						}
						selector.removeAttr("data-working");
					} else {
						selector.attr("data-only", false);
						selector.attr("error-flag", 0);
						showmsg(false, selector, '该' + label + '不存在');
						selector.removeAttr("data-working");
						if (w == 2) {
							loginWin.alert("<center>该" + label + "不存在</center>");
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
	installSize: function(value, selector) { //安装包大小
		value = $.trim(value);
		selector.val(value);
		if (new RegExp(/^[\d]+\.?[\d]*([Mm][Bb]?)?$/).test(value)) {
			return true;
		} else {
			return "##格式不正确";
		}
	}
};

OPEN_VALIDATOR.apptypeName = /iweibo/.test(location.pathname) ? "组件": (/platform/.test(location.pathname) ? "平台": "应用");

function getlen(str) { //获取字符串长度
	var len = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) > 255) len += 2;
		else len++;
	}
	return len;
}

function showmsg(flag, selector, msg) { //提示信息
	var html, p = selector.parent(),
	p1 = selector.parent(".form_input"),
	p2 = selector.parent(".form_element");

	if (!flag) {
		html = '<span class="tip tip_err"><span class="tip_icon"></span>' + msg + '</span>';
	} else if (true === flag) {
		html = '<span class="tip tip_ok"><span class="tip_icon"></span></span>';
	} else if (1 === flag) {
		html = '<span class="tip tip_waiting"><span class="tip_icon"></span>' + msg + '</span>';
	} else if (2 === flag) {
		html = '<span class="tip">' + msg + '</span>';
	}

	if (p.hasClass("form_input") || p.hasClass("form_element")) {
		p.parent().find(".tip").remove();
		p.after(html);
		p.parent().find(".inputdes").first().hide();
	} else if (p.hasClass("form_button_upload")) {
		p.parent().find(".tip").remove();
		p.parent().append(html);
		p.parent().find(".inputdes").first().hide();
	} else {
		p.find(".tip").remove();
		p.append(html);
	}
}

/*表单提交提示信息*/
function formSubmit() {
	if ($(".errorTip").length > 0) {
		loginWin.show({
			"title": "更新" + OPEN_VALIDATOR.apptypeName + "信息",
			"width": 410,
			"height": 185,
			"text": "<center><br/><label class=\"icon_alert\"></label> &nbsp;表单中有错误，请修改后再提交 <br/><input type=\"button\" class=\"devSubmit closeBtn\" value=\"返回修改\"/></center>"
		});
		loginWin.contentarea.find(".closeBtn").bind("click",
		function() {
			loginWin.close();
		});
	} else {
		loginWin.show({
			"title": "更新" + OPEN_VALIDATOR.apptypeName + "信息",
			"width": 410,
			"height": 120,
			"text": "<div style='text-align:center;line-height:59px;'>数据提交中，请勿操作或关闭浏览器窗口</div>"
		});
	}
}

//上传图片
$(function() {
	$("<div class=\"tooltip\" id=\"tooltip\"><div class=\"toolangle\"><span class=\"a1\">◆</span><span class=\"a2\">◆</span></div><div class=\"tooltext\"></div></div>").appendTo($("body"));
	window.tooltip = {
		"timer": null,
		"show": function(t, o, s) {
			var ot = o.offset();
			$("#tooltip").show().css({
				"left": ot.left,
				"top": ot.top + o.height()
			}).find(".tooltext").html(t);
			o.get(0).scrollIntoView(true);
			clearTimeout(tooltip.timer);
			if (s) {
				tooltip.timer = setTimeout(function() {
					$("#tooltip").fadeOut();
				},
				s);
			}
		}
	};

	$("input[type='file']").change(function() {
		var f = this.files && this.files[0],
		$this = $(this),
		img = $(this).parent().find("img")[0],
		$img = $(this).parent().find("img"),
		timg = new Image(),
		str = "",
		maxsize = $this.attr("_size") || 500,
		//图像最大大小，无线应用图标为10K，其他为500K
		filetype = $this.hasClass("png_jpg") ? 2 : 1,
		//2表示要求png/jpg格式，1表示png格式 
		fileSrcReg = filetype == 2 ? new RegExp(/\.(png|jpeg|jpg)$/i) : new RegExp(/\.(png)$/i),
		//针对ie的文件后缀名正则表达式
		filetypeReg = filetype == 2 ? new RegExp(/^image\/(png|jpeg)$/i) : new RegExp(/^image\/(png)$/i),
		//针对其他浏览器的文件后缀名正则表达式
		filesuffix = filetype == 2 ? "jpg/png": "png",
		clearImage = function() {
			setTimeout(function() {
				$img.removeAttr("src").attr("src", "http://mat1.gtimg.com/app/opent/images/websites/0.gif");
				$this.val("");
			},
			100);
		},
		showErrOnIE = function(str) {
			loginWin.alert({
				"text": "<div style=\"margin:0 0 0 30px;\">由于您的浏览器安全限制，" + str + "<br/>请将本站( <span style=\"color:red;font-weight:bold;\">" + location.href.slice(0, location.href.indexOf(location.pathname) + 1) + "</span> )添加到受信任的站点列表中 " + "<br/>点击此处了解 <a href=\"http://open.t.qq.com/bbs/forum.php?mod=viewthread&tid=21271\" target=\"_blank\">如何将本站添加到受信任的站点列表中？</a></div><div style=\"color:#090;margin:0 30px;\">您也可以使用非IE内核浏览器，如chrome、firefox（Safari暂不支持）</div>",
				"width": 460,
				"height": 200
			});
			clearImage();
		},
		fnForIE = function() {
			img.src = "http://mat1.gtimg.com/app/opent/images/websites/0.gif";
			var timer = setTimeout(function() {
				if ( + (timg.width || "") === 0 || +(timg.height || "") === 0) {
					showErrOnIE("无法获取图片大小");
					$this.attr("data-error", str);
					return;
				}
			},
			200);

			timg.onload = function() {
				if (this.complete) {
					return false;
				}
				if (fileSrcReg.test(timg.src) == false) {
					str = "你上传的图片不是有效的" + filesuffix + "格式图片";
					loginWin.alert("<center>" + str + "</center>");
					$this.attr("data-error", str);
					clearImage();
					return;
				} else if (timg.fileSize / 1024 > maxsize) {
					str = "文件大小不能超过" + maxsize + "K，请重新选择";
					loginWin.alert("<center>" + str + "</center>");
					$this.attr("data-error", str);
					clearImage();
					return;
				} else if ($img.attr("_width") && $img.attr("_width")) { //需要验证图片大小
					if ( + (timg.width || "") === 0 || +(timg.height || "") === 0) {
						showErrOnIE("无法获取图片大小");
						$this.attr("data-error", str);
						clearImage();
						return;
					} else if (timg.width != $img.attr("_width") || timg.height != $img.attr("_height")) {
						str = "你上传的图片尺寸" + timg.width + "×" + timg.height + "不符合要求，请选择一张" + $img.attr("_width") + "×" + $img.attr("_height") + "大小的" + filesuffix + "图片";
						$this.attr("data-error", str);
						str += "<div style=\"border-top:1px dashed #ccc;margin-top:5px;padding-top:5px;\">" + "<strong>如果你的图片尺寸符合要求但仍然看到该提示，你可以：</strong><br/>" + "1、如果你的浏览器是双核浏览器，可以切换到极速模式重新上传<br/>" + "2、如果你的浏览器不是双核浏览器，可以使用其它浏览器，如chrome或firefox</div>";
						loginWin.alert({
							"text": "<div style=\"margin:0 25px;\">" + str + "</center>",
							"width": 500,
							"height": 215
						});
						$this.attr("data-error", str);
						clearImage();
						return;
					}
				}
				img.src = timg.src;
				//上传成功
				$this.removeAttr("data-error");
				timg.onload = null;
			};
			timg.onerror = function() {
				str = "读取图片失败，浏览器不支持直接读取图片";
				showErrOnIE("加载图片失败");
				$this.attr("data-error", str);
				timg.onerror = null;
				clearImage();
				return;
			};
			timg.src = $this[0].value;
			return;
		},
		fnForSafari = function() {
			str = "你的浏览器不支持fileReader，无法预览图片<br/>建议使用firefox或chrome浏览器或升级您当前的浏览器至最新版本";
			loginWin.alert({
				"text": "<center>" + str + "</center>",
				"height": 170
			});
			$this.attr("data-error", str);
			clearImage();
			return;
		},
		fnForElse = function() {
			var reader = new FileReader(),
			loadimg = function(imgs) {
				return function(e) {
					for (var i in imgs) {
						imgs[i].src = e.target.result;
					}
				}
			},
			hasError = false; //是否已经报错
			reader.onload = loadimg([img, timg]);
			reader.readAsDataURL(f);
			loadimg([img]);
			if ($img.attr("_width") && $img.attr("_width")) { //需要验证图片大小
				(function() {
					var _callback = arguments.callee,
					_times = arguments[0];
					if ((((timg.width || timg.height) | 0) == 0) && (_times < 10)) {
						setTimeout(function() {
							_callback(++_times);
						},
						100);
						return;
					}

					if ((timg.width != $img.attr("_width") || timg.height != $img.attr("_height")) && !hasError) {
						str = "你上传的图片尺寸" + timg.width + "×" + timg.height + "不符合要求<br/>请选择一张" + $img.attr("_width") + "×" + $img.attr("_height") + "大小的" + filesuffix + "图片";
						img.src = "http://mat1.gtimg.com/app/opent/images/websites/0.gif";
						loginWin.alert({
							"text": "<center>" + str + "</center>",
							"height": 160
						});
						$this.attr("data-error", str);
						clearImage();
						return;
					}
					if (!hasError) {
						$this.removeAttr("data-error", str);
					}
				})(0);
			};

			if (filetypeReg.test(f.type) && (f.fileSize || f.size) / 1024 <= maxsize) {

} else if (filetypeReg.test(f.type) == false) {
				str = "你上传的图片不是有效的" + filesuffix + "格式图片";
				hasError = true;
				loginWin.alert("<center>" + str + "</center>");
				$this.attr("data-error", str);
				clearImage();
				return false;
			} else if ((f.fileSize || f.size) / 1024 > maxsize) {
				str = "文件大小不能超过" + maxsize + "K，请重新选择";
				hasError = true;
				loginWin.alert("<center>" + str + "</center>");
				$this.attr("data-error", str);
				clearImage();
				return false;
			} else {
				$this.removeAttr("data-error");
				return true;
			}
		};
		if (window.FileReader) {
			return fnForElse();
		} else if (document.all) {
			return fnForIE();
		} else {
			return fnForSafari();
		}
	});
});

// 表单提交
var need_post = false;
//var padstr = osstr= phonestr = '';
$(function() {
	function getOS() {
		var app_os = [];
		$("input[name='check_app_os']:checked").each(function() {
			app_os.push($(this).val());
		});
		$("input[name='app_os']").val(app_os.join("|"));
		return app_os;
	}

	function getPhone() {
		var app_phone = [];
		$("input[name='check_app_phone']:checked").each(function() {
			app_phone.push($(this).val());
		});
		$("input[name='app_phone']").val(app_phone.join("|"));
		return app_phone;
	}

	function getPad() {
		var app_pad = [];
		$("input[name='check_app_pad']:checked").each(function() {
			app_pad.push($(this).val());
		});
		$("input[name='app_pad']").val(app_pad.join("|"));
		return app_pad;
	}

	$("input[name='check_app_os'],input[name='check_app_phone'],input[name='check_app_pad']").change(function() {
		var n = $(this).attr("name").replace("check_app_", "").toLowerCase();
		var str = ""
		switch (n) {
		case "os":
			str = getOS();
			$("input[name='app_phone']").val("");
			$("input[name='app_pad']").val("");
			break;
		case "phone":
			str = getPhone();
			$("input[name='app_os']").val("");
			$("input[name='app_pad']").val("");
			break;
		case "pad":
			str = getPad();
			$("input[name='app_os']").val("");
			$("input[name='app_phone']").val("");
			break;
		}
		$("#app_support").trigger("blur");
	});
/*	
	$("input[name='check_app_os']").change(function() {
		var	str = getOS();
		$("#app_support").trigger("blur");
	});
*/
	$('input#app_name,input#app_url,input#app_down_url,input#app_support,textarea#app_description,input[type=checkbox],input#app_weibo,select#app_class_main,select#app_class_child').change(function() {
		need_post = 1;
	});

	$("form input[data-rule='appweibo']").change(function() {
		var selector = $(this),
		rule = selector.attr("data-rule"),
		value = selector.val();
		if (rule == "appweibo") {
			if (/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/g.test(value)) {
				selector.removeAttr("data-only");
				selector.removeAttr("error-flag");
				selector.attr("data-working", 1);
				OPEN_VALIDATOR["appweiboCheck"](value, selector);
			}
		}
	});
	
	$("form input[type='text'],form textarea").blur(function() { //单个即时验证
		var text, value, rule, errmsg, flag;
		text = $(this);
		value = text.val();
		rule = text.attr("data-rule"); //检测规则
		errmsg = text.attr("data-error"); //提示信息
		if ((/^link|applink$/.test(rule)) && value.length > 0 && value.search(/http[s]?:\/\//) == -1) {
			value = "http://" + value;
			text.val(value);
		}
		if (OPEN_VALIDATOR.hasOwnProperty(rule) && rule) { //判断是否进行检测
			if ((!$.trim(value) && rule != "tname" && rule != "applink" && rule != "androidlink") || (value == "请选择" && rule == "appsupport")) {
				errmsg += "不能为空";
				flag = false;
			} else {
				var ret = OPEN_VALIDATOR[rule](value, text); //执行检测规则
				if (ret && rule == "appsupport") {
					flag = OPEN_VALIDATOR["appsupportIsEmpty"]($(this));
					errmsg += "不能为空";
				} else if (ret == undefined) {
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

	$("form input[type='checkbox']").click(function() {
		var name = $(this).attr("name"),
		rule = $(this).attr("data-rule");
		if (rule == "isempty") {
			if ($(this).parent().find("input[type='checkbox']:checked").size() == 0) {
				showmsg(false, $(this), "请至少选择一项");
			} else {
				showmsg(true, $(this), "");
			}
		}
	});

	$("form input[type='submit']").click(function() { //表单提交验证
		var f = this.form,
		worker = $(f).find("input[data-working]");
		if (worker.size() > 0) {
			worker.attr("data-working", 2);
			return false;
		}
		var submitrule = $.trim($(this).attr("data-rule")),
		app_platform = +$("#app_platform").val(); //应用平台
		if (submitrule == 'formauto') { //表单自动提交
			if ($(f).hasClass("wirelessappform") && app_platform === 0) {
				loginWin.alert("<center>请至少选择一个平台</center>");
				return false;
			}
			//针对客户端应用需要勾选至少一个平台，add by fat
			if(global_obj.data.app.app_type == 3 && $("input[name='check_app_os']:checked").size() == 0){
				loginWin.alert("<center>请至少选择一个应用平台</center>");
				return false;
			}

			var form = this.form,
			flag, errmsg, rule, value, submitflag = true,
			data = '',
			imgisok = true;
			if (!OPEN_VALIDATOR.appname_only) {
				errmsg = "此" + OPEN_VALIDATOR.apptypeName + "名称已被注册";
				loginWin.alert("<center>" + errmsg + "</center>");
				return false;
			}

			$("form input[type='text'],form textarea,select#app_class_main,select#app_class_child,form input[type='file']").each(function() {
				//.not("[data-default]^=''")
				if ($(f).hasClass("wirelessappform")) {
					if ((app_platform === 1 && $(this).hasClass("android_field")) || (app_platform === 2 && $(this).hasClass("iphone_field"))) { //只选择了iphone平台,对android字段不验证;若只选择了android平台，则对iphone字段不验证
						return;
					}
				}

				rule = $(this).attr("data-rule");
				value = $(this).val();
				errmsg = $(this).attr("data-error");
				if (OPEN_VALIDATOR.hasOwnProperty(rule) && rule) {
					if ((!$.trim(value) && rule != "tname" && rule != "applink" && rule != "androidlink") || (value == "请选择" && rule == "appsupport")) {
						errmsg += "不能为空";
						flag = false;
					} else {
						var ret = OPEN_VALIDATOR[rule](value, $(this));
						if (ret && rule == "appsupport") {
							flag = OPEN_VALIDATOR["appsupportIsEmpty"]($(this));
							errmsg += "不能为空";
						} else if (ret === true) {
							flag = true;
						} else if (ret === 1) {
							return;
						} else {
							flag = false;
							errmsg = ret.replace(/##/g, errmsg);
						}
					}
					showmsg(flag, $(this), errmsg);
					if (submitflag && !flag) {
						loginWin.alert("<center>" + errmsg + "</center>");
					}
					submitflag = submitflag && flag;
				} else if ($(this).hasClass("required")) { //对于必上传的图片
					if ((!$(this).val() && !$(this).attr("data-default").replace("NULL", "")) || $(this).attr("data-error")) {
						imgisok = false;
						str = "<center>请上传应用预览图</center>";
						$(this).prev(".uploadbtn")[0].scrollIntoView(true);
						if (submitflag) { //前面的字段验证未通过时，已alert，避免连续alert两个对话框
							loginWin.alert(str);
						}
						tooltip.show(str, $(this).prev(".uploadbtn"), 2000);
						submitflag = submitflag && imgisok;
						return false;

					}
				} else if ($(this).hasClass("file")) { //对于不是必上传的图片，在上传出错的情况下，input type=file值不为空，必须增加处理，否则会提交input type=file的值
					if (submitflag && $(this).attr("data-error")) { //依赖于图片永远在其他字段的下方
						$(this).attr("disabled", "disabled");
						return false;
					};
				}
			});

			if (!submitflag) {
				return submitflag;
			}

			//创建无线应用，还需验证是否选择了应用平台
			if ($(f).hasClass("wirelessappform")) {
				var appplatform = $("input[name='appplatform']");
				if ($("input[name='appplatform']:checked").length == 0) {
					showmsg(false, $("#iphone_pf"), "请至少选择一个平台");
					loginWin.alert("<center>请至少选择一个平台</center>");
					return false;
				}

				//提交时判断是否上传了apk文件
				if ($("input[name='app_apk']").val() == '' && ($("#app_platform").val() == 2 || $("#app_platform").val() == 3)) {
					$('#android_pf')[0].scrollIntoView();
					var app_apk = $("input[name='app_apk']"),
					app_uploader = $(".form_button_upload"),
					app_downer = $(".form_element_uploaded_name"),
					app_info = $(".form_element_uploaded");
					app_info.addClass("none");
					app_uploader.removeClass("none");
					app_apk.val("").removeAttr("data-default");
					loginWin.alert("<center>请上传apk安装文件</center>");
					showmsg(false, app_apk, "请上传apk安装文件");
					return false;
				}

			}

			var checkboxflag = $("input[name='user_agree']").attr('checked');
			if (checkboxflag === undefined) { //检验是否有同意选项
				if (submitflag) { //没有checkbox user_agree
					checkStatus(form); //审核通过后，修改内容包含应用网址或75尺寸图片(无线应用)时，弹窗提示“修改信息后将重新提交审核，审核通过后才能生效”，确认后提交修改资料审核。
				} else {
					return false;
				}
			} else {
				if (checkboxflag == true) {
					if (submitflag) {
						checkStatus(form); //审核通过后，修改内容包含应用网址或75尺寸图片(无线应用)时，弹窗提示“修改信息后将重新提交审核，审核通过后才能生效”，确认后提交修改资料审核。
					} else {
						return false;
					}
				} else {
					loginWin.alert("<center>您尚未同意《腾讯微博开放平台开发者服务协议》</center>");
					return false;
				}
			}
		}
		return false;
	});

	function checkStatus(form) {
		var app_type = +$("input[name='app_type']").val(),
		app_status = global_obj.data.app.app_status,
		link = $("input[name='app_url']"),
		icon4 = $("input[name='icon4']"),
		checkflag = false,
		android_plat_status = global_obj.data.androidinfo ? global_obj.data.androidinfo.app_plat_status: "",
		iphone_plat_status = global_obj.data.iphoneinfo ? global_obj.data.iphoneinfo.app_plat_status: "",
		str = "";

		if (app_type === 1 || app_type === 2 || app_type === 3) {
			if (app_status === 4 || app_status === 5 || app_status === 8) {
				if (link.val() != link.attr("data-default")) {
					str = "<center>修改" + link.attr("data-error") + "后需再次提交审核，审核通过后才能生效。<br/>是否提交修改资料审核？</center>";
					checkflag = true;
				}
			}
		} else if (app_type === 6) {
			var wapp_platform = $("#wapp_platform").val(); //1:无线应用上架通过，更改平台信息任一字段，需重新审核
			//0:无线应用审核通过、上架拒绝、下架后，修改应用网址和75X75图标后需要重新审核
			if (wapp_platform == 0) {
				if ( + app_status === 5 && android_plat_status != 2 && iphone_plat_status != 2) {
					if (link.val() != link.attr("data-default") || (icon4.val() != "" && icon4.val() != icon4.attr("data-default"))) {
						str = "<center>修改" + link.attr("data-error") + "或75×75应用图标" + "后需再次提交审核，审核通过后才能生效。<br/>是否提交修改资料审核？</center>";
						checkflag = true;
					}
				}
			} else {
				if ( + app_status === 3 && (android_plat_status == 2 || iphone_plat_status == 2)) {
					var $container = null,
					app_platform = $("input[name='app_platform']").val(),
					$app_platform_changed = $("input[name='app_platform_changed']"),
					iphone_platform_changed = 0,
					android_platform_changed = 0,
					value,
					data_default;
					$container = app_platform == 3 ? $(".wirelessappform") : (app_platform == 2 ? $("#androidContainer") : $("#iphoneContainer"));

					$container.find("input[type='text'],textarea,input[type='file']").each(function() {
						value = $(this).val();
						data_default = $(this).attr("data-default");
						if ((!$(this).hasClass("file") && value != data_default) || ($(this).hasClass("file") && value != "" && value != data_default)) {
							if ($(this).hasClass("iphone_field")) {
								iphone_platform_changed = 1;
							} else if ($(this).hasClass("android_field")) {
								android_platform_changed = 1;
							}
							if ((android_plat_status == 2 && iphone_plat_status == 2) //已上架到两个平台
							|| (android_plat_status == 2 && iphone_plat_status != 2 && $(this).hasClass("android_field")) //只上架到android
							|| (android_plat_status != 2 && iphone_plat_status == 2 && $(this).hasClass("iphone_field"))) //只上架到iphone
							{
								str = "<center>修改平台信息后需再次提交审核，审核通过后才能生效。<br/>是否提交修改资料审核？</center>";
								checkflag = true;
							}
							return;
						}
					});

					if (iphone_platform_changed && android_platform_changed) {
						$app_platform_changed.val(3);
					} else if (iphone_platform_changed) {
						$app_platform_changed.val(1);
					} else if (android_platform_changed) {
						$app_platform_changed.val(2);
					}
				}
			}
		}
		if (checkflag) {
			loginWin.confirm({
				"text": str,
				"width": 440,
				"ok_text": "确定",
				"cancel_text": "取消"
			},
			function() {
				submitForm(form);
			},
			function() {
				loginWin.close();
			});
			return false;
		}
		submitForm(form);
	}

	function submitForm(form) {
		if ($(form).hasClass("wirelessappform")) { //无线应用
			var app_platform = +$("#app_platform").val();
			if (app_platform === 1) { //只选择了iphone平台,对android字段不验证
				$(".android_field").each(function() {
					$(this).val("");
				});
			} else if (app_platform == 2) { //只选择了iphone平台,对android字段不验证
				$(".iphone_field").each(function() {
					$(this).val("");
				});
			}
		}
		form.submit();
		formSubmit();
	}

	$("form input[data-rule='appname']").change(function() {
		var selector = $(this),
		rule = selector.attr("data-rule"),
		value = selector.val().replace(/\s/g, "");
		if (/^[A-Za-z0-9（）()\u4e00-\u9fa5]{1,14}$/.test(value) && value.replace(/^\s+|\s+$/g, "").replace(/[^\x00-\xff]/g, 'TX').length <= 14) {
			selector.removeAttr("data-only");
			selector.attr("data-working", 1);
			OPEN_VALIDATOR["appnameCheck"](value, selector);
		} else {
			selector.removeAttr("data-only");
		}
	});

	$("input[data-rule='link']").keydown(function(event) {
		if (event.keyCode == 13) {
			return false;
		}
	});

	$("form").keydown(function(event) { //阻止回车提交
		if (event.keyCode == 13) {
//			$(this).find("input[type='submit']").trigger("click");
			return true;
		}
	});

	$("form input[type='reset']").click(function() { //清除提示
		$(".form_input").next(".errorTip").remove();
		$(".form_input").next(".currectTip").remove();
	});
	/*初使化支持平台数据*/
	var app_platform_name = $("input[name='app_phone'],input[name='app_pad'],input[name='app_os']").filter("[value ^='']");
//	var app_platform_name = $(input[name='app_os']").filter("[value ^='']");
	if (app_platform_name.size() === 0) {
		$("input[name='app_phone']").val('Android');
		app_platform_name = $("input[name='app_phone']");
	}
	app_platform_name.each(function(index) {
		var n = $(this).attr("name"),
		v = $(this).val(),
		f = $("#app_support").attr("data-terminal") || 0;
		if (v || 0) { //兼容老数据
			$("#app_support").val($(this).parent("li").find(".form_select_options").find("li:eq(" + index + ")").text());
			$("#app_support").attr("data-terminal", n);
			$("#app_support_list").show();
			$("#app_support_list").find("input[value='" + v + "']").parent().show().siblings("dd").hide();
			s = v.split("|");
			for (var i in s) {
				$("input[name='check_" + n + "']").filter("[value='" + s[i] + "']").attr("checked", "checked");
			}
			return false;
		} else {
			$("#app_support").val("请选择").removeAttr("data-terminal");
		}
	});

	/*初使化支持平台数据*/
	$(".tip").remove();

	var initAppURL = function(data) {
		var select = $("#app_online_url").parent(),
		icon = select.find(".form_select_icon"),
		options = select.find(".form_select_options"),
		input = select.find("input"),
		opsize = 0;
		var options_str = function(data) {
			var arr = [];
			if (data.length) {
				for (var i = 0,
				k = data.length; i < k; i++) {
					arr.push("<li>http://" + data[i] + "</li>");
				}
				arr.push("<li _index='" + i + "'>手动填写</li>");
			} else {
				arr[0] = '<div class="gray">&nbsp;未申请托管地址，<a href="javascript:;" onclick="$(\'#apphost_btn\').trigger(\'click\');return false;">现在去申请</a></div>';
			}
			return arr.join("");
		} (data);
		if (data.length) {
			input.attr("data-rule", "link").attr("readonly", true);
		} else {
			select.prev(".form_label").find("em").remove();
		}
		options.html(options_str).find("li").mouseover(function() {
			$(this).parent().find("li").removeClass("active");
			$(this).addClass("active");
		}).click(function(event) {
			if ($(this).attr("_index")) {
				input.val("").removeAttr("readonly");
			} else {
				input.val($(this).html()).attr("readonly", true);
			}
			if (typeof(event.button) != "undefined") {
				input.trigger("blur");
			}
			options.hide();
		}).filter(":eq(0)").addClass("active");

		input.attr("readonly", true).attr("autoComplete", "off").focus(function() {
			if (input.attr("readonly")) {
				options.show();
			}
		}).bind("keydown",
		function(event) {
			var selected = options.find("li.active"),
			selectedIndex = selected.index();
			opsize = options.find("li").size();
			if (event.keyCode === 9) {
				return true;
			}
			if (!options.is(":visible") && input.attr("readonly")) {
				$(this).trigger("focus");
				return false;
			}
			switch (event.keyCode) {
			case 40:
				if (selectedIndex + 1 < opsize) {
					var option = options.find("li:eq(" + (++selectedIndex) + ")");
					option.trigger("mouseover");
					if (option[0].offsetTop - options[0].scrollTop >= options.height()) {
						options[0].scrollTop += option.height();
					}
				};
				break;
			case 38:
				if (selectedIndex > 0) {
					var option = options.find("li:eq(" + (--selectedIndex) + ")");
					option.trigger("mouseover");
					if (option[0].offsetTop < options[0].scrollTop) {
						options[0].scrollTop -= option.height();
					}
				};
				break;
			case 13:
				if (input.attr("readonly")) {
					selected.trigger("click");
				}
				options.hide();
				break;
			default:
				return true;
			}
			return false;
		}).bind("click",
		function() {
			if (!options.is(":visible") && input.attr("readonly")) {
				options.show();
			}
		});
		icon.click(function() {
			if (!input.attr("disabled")) {
				options.show();
			}
		});
		$("body").bind("click",
		function(event) {
			if ($.contains(select[0], event.target)) {
				return;
			}
			if (options.is(":visible")) {
				options.hide();
			}
		});
	};

	if ( + $("input[name='app_hosting']:checked").val() === 1) {
		if (window.app_status && ( + app_status === 2)) {
			$("#app_online_url").attr("readonly", true);
			$("#app_online_url").parent().prev(".form_label").find("em").remove();
		} else {
			$.ajax({
				"dataType": "json",
				"type": "post",
				"url": "/pipes/interfaceserver",
				"data": {
					"action": 'common_query',
					"uin": global_obj.data.userInfo.hdlogin,
					"appid": global_obj.data.app.app_id,
					"business_type":"ajax_getappsitelist"
				},
				"success": function(d) {
					var ret = +d.ret,
					msg = common.getMsgByRet(ret);
					if (msg) {
						loginWin.alert("<center>" + msg + "</center>");
						return;
					}
					initAppURL(d.data || []);
				}
			});
		}
	}
});

$("#app_class_child").change(function() {
	var appObj = $("#app_class_child");
	var cid = appObj.val();
	if (cid != -1) {
		showmsg(true, appObj, "");
	} else {
		showmsg(false, $("#app_class_child"), "应用分类不能为空");
	}
});

$("#app_class_main").change(function() {
	var appObj = $("#app_class_child");
	var cid = $("#app_class_main").val();
	if (cid != -1) {
		$.ajax({
			"dataType": "json",
			"type": "get",
			"url": "/pipes/interfaceserver",
			"data": {
				"action": 'common_query',
				"business_type": 'getapptype',
				"cid": cid
			},
			"success": function(d) {
				if (d != null) {
					var ret = +d.ret,
					msg = common.getMsgByRet(ret);
					if (msg) {
						loginWin.alert("<center>" + msg + "</center>");
						return;
					}
				}
				showmsg(true, $("#app_class_main"), "");
				$.each(appObj,
				function() {
					$(this).children().remove();
				});
				$.each(d,
				function(i, n) {
					appObj.append("<option value=" + n.cid + ">" + n.cname + "</option>");
				});
				appObj.css("display", "inline-block");
			}
		});
	} else {
		$.each(appObj,
		function() {
			$(this).children().remove();
		});
		appObj.css("display", "none");
		showmsg(false, $("#app_class_main"), "应用分类不能为空");
	}
});

var submitCallback = function(d) {
	var ret = +(d.code || d.error),
	msg = common.getMsgByRet(ret);
	loginWin.close();
	if (msg) {
		loginWin.alert("<center>" + msg + "</center>");
		return;
	}
	if (ret == 0) {
		if (loginWin) {
			loginWin.show({
				"title": "更新" + OPEN_VALIDATOR.apptypeName + "信息",
				"width": 410,
				"height": 125,
				"text": "<center><br/><label class=\"icon_ok\"></label> &nbsp; " + OPEN_VALIDATOR.apptypeName + "信息更新成功<br/></center>"
			});
			setTimeout(function() {
				window.location.href = window.location.href;
			},
			2000);
		}
	} else {
		var reason = "";
		if (ret > 100 && ret < 200) {
			reason = "图片不合法";
		} else if (ret > 200 && ret < 300) {
			reason = "参数非法";
		} else {
			reason = "未知原因";
		}
		if (loginWin) {
			loginWin.show({
				"title": "更新" + OPEN_VALIDATOR.apptypeName + "信息",
				"width": 410,
				"height": 185,
				"text": "<center><br/><label class=\"icon_alert\"></label> &nbsp; " + OPEN_VALIDATOR.apptypeName + "信息更新失败，原因&nbsp;<strong>" + reason + "</strong><br/><input type=\"button\" class=\"devSubmit closeBtn\" value=\"确定\"/></center>"
			});
			loginWin.contentarea.find(".closeBtn").bind("click",
			function() {
				loginWin.close();
			});
		}
	}
};
/*  |xGv00|e1bdfbf6b07902b1da8d339c0dc0d9a4 */
