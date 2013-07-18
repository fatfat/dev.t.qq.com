var common = {
	getMsgByRet :function(i){
		return {
			 '-201':'对不起，请求参数错误！'
			,'-202':'请求被拒绝，请稍后再试！'
			,'-400':'登录信息已丢失，请 <a href="javascript:;" onclick="common.showLoginWin()">重新登录</a> ！'
			,'-401':'您还未注册开发者！<a href="/developer/add">点击此处注册成为开发者</a>'
			,'-402':'你的电子邮箱尚未通过验证，不能完成此操作！<a href="/developer/checkemail/">查看详情</a>'
		}[i] || false;
	},
	"setCookie":function(name, value, options){
		if (typeof value != 'undefined') { // name and value given, set cookie
			options = options || {};
			if (value === null) {
				value = '';
				options.expires = -1;
			}
			var expires = '';
			if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
				var date;
				if (typeof options.expires == 'number') {
					date = new Date();
					date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
				} else {
					date = options.expires;
				}
				expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
			}
			// CAUTION: Needed to parenthesize options.path and options.domain
			// in the following expressions, otherwise they evaluate to undefined
			// in the packed version for some reason...
			var path = options.path ? '; path=' + (options.path) : '';
			var domain = options.domain ? '; domain=' + (options.domain) : '';
			var secure = options.secure ? '; secure': '';
			document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
		} else { // only name given, get cookie
			var cookieValue = null;
			if (document.cookie && document.cookie != '') {
				var cookies = document.cookie.split(';');
				for (var i = 0; i < cookies.length; i++) {
					var cookie = jQuery.trim(cookies[i]);
					// Does this cookie string begin with the name we want?
					if (cookie.substring(0, name.length + 1) == (name + '=')) {
						cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
						break;
					}
				}
			}
			return cookieValue;
		}	
	},
	"showLoginWin":function(url){
		loginWin.close();
		loginWin.showBox(500, 300, url||encodeURIComponent(location.href),"用户登录");
		return false;
	},

	"buildLoginPage" : function () {
		var _html = [
			'<div class="headWrap">',
				'<div id="header" class="headInside">',
					'<h1><a class="logo" title="腾讯微博开放平台" href="/">腾讯微博开放平台</a></h1>',
					'<ul class="topNav">',
						'<li><a href="/" hidefocus="">首页</a></li>',
						'<li><a href="/websites/" hidefocus="">网站接入</a></li>',
						'<li><a href="/wireless/" hidefocus="">无线接入</a></li>',
						'<li><a href="/developer/" hidefocus="">应用开发</a></li>',
						'<li><a href="http://wiki.open.t.qq.com/" hidefocus="">文档</a></li>',
						'<li><a href="http://bbs.open.t.qq.com/" target="_blank" hidefocus="">论坛</a></li>',
						'<li><a href="/development" class="active" id="developmentbtn" hidefocus="">管理中心</a></li>',
					'</ul>',
			
				/*	'<div class="menuCon userNav" id="login_status">',
						'<a title="点击此处登录" class="login_name" href="javascript:void(0);" id="loginBtn" hidefocus="">登录</a>',
					'</div>',*/
					'<a title="点击此处登录" class="login_btn" href="javascript:void(0);" id="loginBtn" hidefocus>登录</a>',
				'</div>',
			'</div>',
			'<div class="actioninfo">',
				'<img src="http://mat1.gtimg.com/app/opent/images/index/transparent.gif" class="alert">对不起，在没有登录微博的情况下，您无法使用该功能。 请先 <a href="javascript:void(0)" id="loginBtn2" class="links">登录</a>',
			'</div>',
			'<div id="footer">',
				'<a href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0:%E5%85%B3%E4%BA%8E" target="_blank">关于腾讯微博开放平台</a>',
				'<a href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0:%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96" target="_blank">隐私政策</a>',
				'<a href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0:%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E" target="_blank">免责声明</a>',
				'<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a>',
				'<br/>',
				'Copyright &copy; 1998-2013 Tencent.All Rights Reserved',
			'</div>'
		].join('');
		$('#main').html(_html);
		$('#loginBtn,#loginBtn2').click(function() {
			common.showLoginWin();
			return false;
		});
	},
	"checkuserLogin":function(url){
		hdlogin = userInfo.hdlogin || false;
		url = url || encodeURIComponent(location.href);
		if (hdlogin){
			return true;
		}else{
			common.buildLoginPage();
			common.showLoginWin(url);
		}
		return false;
	},
	"loginOut":function(){
		common.setCookie('uin',null,{domain:'qq.com',path:'/'});
		common.setCookie('skey',null,{domain:'qq.com',path:'/'});
		common.setCookie('luin',null,{domain:'qq.com',path:'/'});
		common.setCookie('lskey',null,{domain:'qq.com',path:'/'});
		location.reload();
		return false;
	}
};

$((function() {
	var moduleObj = {};
	(function($) {
		$.fn.moduleBox = function(op) {
			op = op || {};
			var d = {
				"width": op.width || 450,
				"height": op.height || 320,
				"title": op.title || "提示信息",
				"text": op.text || "",
				"closeBtn": op.closeBtn || ""
			},
			_this = {};
			_this.initModuleBox = function() {
				var modulebox = $("<div class=\"modulebox\" style=\"position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;text-align:left;_ position:absolute;_ top:expression(eval(document.documentElement.scrollTop)); _ height:expression(eval(document.documentElement.clientHeight));display:none;\">" + "<iframe width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"opacity:0;filter:alpha(opacity=0);z-index:1;position:absolute;top:0;left:0;\"></iframe>" + "<div style=\"position:absolute;top:0;left:0;z-index:2;background:#000;width:100%;height:100%;opacity:0.2;filter:alpha(opacity=10);\"></div>" + "	<div class=\"modulebox_win\" style=\"position:absolute;z-index:3;top:50%;left:50%;margin:" + ( - d["height"] / 2) + "px 0 0 " + ( - d["width"] / 2) + "px;width:" + d["width"] + "px;height:" + d["height"] + "px;\">" + "		<a href=\"javascript:;\" class=\"modulebox_close closewin\" title=\"关闭\"></a>" + "		<h2 class=\"modulebox_title\" style=\"margin:0;padding:0;\">" + d["title"] + "</h2>" + "		<div class=\"modulebox_content\" style=\"height:" + (d["height"] - 41) + "px\">" + d["text"] + "</div>" + "	</div>" + "</div>").appendTo($("body"));
				modulebox.find(".closewin").bind("click",
				function() {
					modulebox.hide();
				});
				return {
					"working":false, //是否已弹出
					"waiting":[],    //队列
					"titlebar": modulebox.find(".modulebox_title"),
					"win": modulebox.find(".modulebox_win"),
					"contentarea": modulebox.find(".modulebox_content"),
					"closebtn": modulebox.find(".modulebox_close"),
					"close": function(callback) {
						this.working = false;
						this.contentarea.html("");
						modulebox.hide();
						(callback || function(){})();
						if (this.waiting.length>0){
							var t =this,para = t.waiting.shift();
								setTimeout(function(){
									t[para["_show"]||"show"].call(t,para,callback);
								},100);
						}
					},
					"show": function(_op) {
						if (this.working){
							this.waiting.push(_op);
							return;
						}
						if (_op) {
							if (_op.title) {
								this.titlebar.html(_op.title);
							}
							if (_op.text) {
								this.contentarea.html(_op.text);
							}
							if (_op.width) {
								this.win.css({
									"width": _op.width,
									"margin-left": -_op.width / 2
								});
							}
							if (_op.height) {
								this.win.css({
									"height": _op.height,
									"margin-top": -_op.height / 2
								});
								this.contentarea.css({
									"height": _op.height - 41
								});
							}
						};
						if (!modulebox.is(":visible")) {
							modulebox.show();
							this.working = true;
						}
					}
				};
			}
			return _this.initModuleBox();
		};
	})(jQuery);

	var init = function() {
		$('#logoutBtn').bind("click",common.loginOut);
		$('#loginBtn,#loginBtn2').click(function() {
			common.showLoginWin();
			return false;
		});
		$("#developmentbtn").click(function() {
			return ( !! checkuserLogin(encodeURIComponent("http://" + location.host.replace(/\bwiki\b\./, "dev.") + "/development/")));
		});
		$('#loginBtn_body').click(function() {
			loginWin.showBox(335, 380);
			return false;
		});

		$('.boxbg').click(function() {
			loginWin.hideBox();
		});
		$('.login_div_header').find('.closeBtn').click(function() {
			loginWin.hideBox();
		});
		window.loginWin = $.fn.moduleBox({
			"width": 500,
			"height": 400,
			"title": "",
			"text": ""
		});
		window.loginWin.closebtn.bind("click",function(){loginWin.close.call(loginWin)});
		window.loginWin.showBox = function(w, h, url, title) {
			url = "http://ui.ptlogin2.qq.com/cgi-bin/login?appid=46000101&s_url=" + url + "&f_url=loginerroralert&style=0&link_target=blank&target=blank&hide_title_bar=1&dummy=1&bgcolor=ffffff";
				
			this.show({
				"width":w,
				"height":h,
				"title": title || "对不起，您还未登录",
				"text": "<div id=\"login_div\" style=\"*display:inline;zoom:1;padding-top:20px;width:100%;height:100%;\"><iframe src=\"" + url + "\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" marginwidth=\"0\" marginheight=\"0\"></iframe></div>"
			})
		}
		window.loginWin.alert = function(s, close_callback) {
			var o = {
				"_show":"alert",
				"title": "提示",
				"text": "",
				"width": 420,
				"height": 150,
				"ok_text":"确定",
				"ok_class":"devSubmit closeBtn"
			};
			if (typeof s == "string") {
				o.text = s;
			} else if (typeof s == "object") {
				o.title = s.title || o.title;
				o.text = s.text || o.text;
				o.width = s.width || o.width;
				o.height = s.height || o.height;
				o.ok_text=s.ok_text || o.ok_text;
				o.ok_class=s.ok_class || o.ok_class;
			};
			//(typeof(s && s._show) === "undefined") && (o.text = "<br/>" + o.text + "<center><input type=\"button\" class=\"devSubmit closeBtn\" value=\"确定\"/></center>");
			(typeof(s && s._show) === "undefined") && (o.text = "<br/>" + o.text + "<center><input type=\"button\" class=\""+o.ok_class+"\" value=\""+o.ok_text+"\"/></center>");
			loginWin.show.call(loginWin,o);
			loginWin.contentarea.find(".closeBtn").bind("click",function(){
				loginWin.close.call(loginWin,close_callback);
			});
		};
		
		window.loginWin.showImg = function(s, close_callback) {
			var o = {
				"_show":"alert",
				"title": "提示",
				"text": "",
				"width":500,
				"height":650
			};
			if (typeof s == "string") {
				o.text = s;
			} else if (typeof s == "object") {
				o.title = s.title || o.title;
				o.text = s.text || o.text;
				o.width = s.width || o.width;
				o.height = s.height || o.height;
			};
		(typeof(s && s._show) === "undefined") && (o.text = "<div style=\"overflow:auto;text-align:center;\"><img src='"+o.text+"' /></div>");
			loginWin.width=o.width;
			loginWin.height=o.height;
			loginWin.show.call(loginWin,o);
		};
		
		window.loginWin.confirm = function(op,okFn,cancelFn){
			var settings = {
				  "width"       : 420
				 ,"height"      : 180
				 ,"text"        : ""
				 ,"title"       : "提示"
				 ,"ok_text"     : "确定"
				 ,"cancel_text" : "取消"
			 }
			 ,tpl = '<div style="text-align:center;margin:0 20px;">\
				   <div style="text-align:left;display:inline-block;* display:inline;zoom:1;margin:22px auto 14px;word-wrap:break-word;word-break:break-all;">\
					 #text#\
				   </div>\
			 </div>\
			 <div align="center">\
				   <a href="javascript:;" class="devSubmit sure_btn">#ok_text#</a>\
				   <a href="javascript:;" class="devCancel close_btn">#cancel_text#</a>\
			 </div>'
			 ,o = loginWin
			 ,c = o.contentarea;
			 if (typeof(op) === "string"){
				 op = tpl.replace('##',op);
				 settings = $.extend(settings,{"text":op});//
			 }else if(typeof(op) === "object"){
				 op.text = tpl.replace(/#(\S+)?#/g,function(){return op[arguments[1]]||("#"+arguments[1]+"#");});
				 $.extend(settings,op);
			 }
			 this.show(settings);
			 c.find(".sure_btn").bind("click",function(){
				 o.close();
				 okFn && okFn();
			 });
			 c.find(".close_btn").bind("click",function(){
				 o.close();
				 cancelFn && cancelFn();
			 });
			 this.closebtn.unbind("click").bind("click",function(){window.location.reload()});
		}
		
	}();
}));


/*以下是待删内容*/
var showLoginWin = common.showLoginWin,
	cookie = common.setCookie,
	checkuserLogin = common.checkuserLogin,
	openAppAfterLogin = function(o){
		return ( !! checkuserLogin(o.attr("href")));
	},
	ptlogin2_onResize = function(w,h){
		$(".modulebox_content").removeAttr("style")
			.parent().width(w).css("margin-left",-Math.ceil(w/2)).end()
			.height(h+40).parent().height(h+75).css("margin-top",-Math.ceil((h+75)/2));
		$("#login_div").height(h);
	}
	;
	
$(function(){/*
	$("body").mouseover(function(event){
		var t = $("#login_status"),target = event.target;
		if (window.hdlogin){
			if ($.contains(t[0],target) || t[0] === target){
				t.addClass("menuContainer");
			}else{
				t.removeClass("menuContainer");
			}
		}
	});*/
	$("body").mouseover(function(event){
		var target = event.target,
			subnavlist = $(".subnav"),
			currentSubNav = (function(){
				for(var i=0,k=subnavlist.length;i<k;i++){
					if ($.contains(subnavlist[i],target) || target === subnavlist[i]){
						return subnavlist[i];
					}
				}
				return false;
			})();
		if (currentSubNav){
			$(currentSubNav).addClass("subnav_hover");
		}else{
			subnavlist.removeClass("subnav_hover");
		}
	});
});

$(document).ready(function(){
	setTimeout(function(){
		common.checkuserLogin();
	},100);
});
/*  |xGv00|3a8d9990c72167d5413623a32edb10a0 */
