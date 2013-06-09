var str = [
	'.comp_area DT{',
	'margin-top:0px;',
	'font-size:14px;',
	'line-height:16px;',
	'}',
	].join("");
	util.createStyle(str);
this.tpl.explain_include = [
'<link href="http://mat1.gtimg.com/app/opent/css/websites/show/customcolor.css" type="text/css" rel="stylesheet">',
'<link href="http://mat1.gtimg.com/app/opent/css/websites/public/ex.css" type="text/css" rel="stylesheet">',
'<div class="comp_area">',
    '<!--[if IE]>',
    	'<div id="show" style="width:345px;height:200px;margin-bottom:-220px;float:right;">',
    '<![endif]-->',
    '<!--[if (gt IE 9)|!(IE)]><!-->',
		'<div id="show" style="width:345px;height:200px;margin-bottom:-200px;float:right;">',
    '<!--<![endif]-->',
			'<h3>效果预览</h3>',
			'<div style="margin:10px auto;"><iframe id="review" src="about:blank" frameborder="0" scrolling="auto" width="301" height="664" marginwidth=0 marginheight=0 frameborder="0" scrolling="no" allowtransparency="true"></iframe></div>',
		'</div>',
		'<div id="act0" class="p1">',
			'<dl>',
				'<dt>待收听用户数量</dt>',
				'<dd>',
                    '<input type="radio" name="followtype" value="0" checked="checked" id="follow_single"> <label for="follow_single">单个收听<span class="gray">（样式简洁，且可选择多种样式）</span></label>',
                    '<br/>',
                    '<input type="radio" name="followtype" value="1" id="follow_all"/> <label for="follow_all">批量收听<span class="gray">（可选一个或多个）</span></label>',
				'</dd>',
			'</dl>',
        '</div>',
		'<div id="act" class="p1" style="display:none;">',
			'<dl>',
				'<dt>待收听用户帐号(非用户昵称)</dt>',
				'<dd>',
					'<span class="form_input valign"><input type="text" maxlength="20" id="adduname" style="width:200px;" placeholder="输入完成按Enter添加"/></span>',
					'<a id="addname_btn" class="btn_code valign" href="javascript:;">添加帐号</a>',
				'</dd>',
				'<dd>&nbsp;</dd>',
				'<dt>已添加用户</dt>',
				'<dd>',
					'<p class="followgray">(最多收听30个正确的用户名，多于30个，只有前30个有效)</p>',
					'<ul style="width:240px;" id="namelist" class="namelist"></ul>',
				'</dd>',
				'<!--',
				'<dt>appkey设置<span style="font-size:12px;font-weight:200;">（请输入从腾讯获得的appkey）</dt>',
				'<dd>',
					'<span class="form_input"><input type="text" id="appkey" /></span><span style="color:red;" id="errortip"></span>',
				'</dd>',
				'-->',
			'</dl> ',
			'<dl id="setStyle" >',
				'<dt>样式设置</dt>',
				'<dd>',
				'<table border="0" cellpadding="0" cellspacing="0" width="340">',
					'<tr>',
						'<td valign="top" class="f14">- 背景颜色</td>	',
					'</tr>',
					'<tr>',
						'<td>',
							'<div class="cl">',
							'<input type="radio" id="defaultColor" checked="checked" name="color" value="0"/>',
							'<label for="defaultColor">默认颜色</label>',
							'</div>',
							'<ul id="colorList" class="colorList">',
								'<li class="s"><div class="followcolor" style="background:url(http://mat1.gtimg.com/app/opent/images/wiki/resource/imgbg.gif);border:1px solid #ccc;"></div></li>',
							'</ul>',
							'<div class="cl"> ',
							'<input type="radio" name="color" id="use_customcolorset" value="1"/> <label for="use_customcolorset">自定义颜色</label>',
							'</div>',
							'<ul id="customcolor" class="customcolor">',
								'<li>',
									'<label for="color_bg">背景色</label>',
									'<input type="textfiled"	class="color {hash:true}" id="color_bg" name="color_bg"></input>',
									'<div></div>',
								'</li>',
							'</ul>',
						'</td>',
					'</tr>',
				'</table>	',
				'</dd>',
			'</dl>',
			'<dl id="setStyle" >',
				'<dt>头像设置</dt>',
				'<dd>',
				'<table border="0" cellpadding="0" cellspacing="0">',
					'<tr>',
						'<td valign="top" class="f14" width="48">- 大小</td>',
					'</tr>',
					'<tr>',
						'<td class="radioloc" align="center" height="72" valign="bottom">',
						'<label for="icon2">',
						'<img src="http://t1.qlogo.cn/mbloghead/89733ea5b33bc17e67ce/100" border="1" width="72" height="72"/>',
						'</label>',
						'</td>',
						'<td class="radioloc" align="center" height="72" valign="bottom" width="150">',
						'<label for="icon1">',
						'<img src="http://t1.qlogo.cn/mbloghead/89733ea5b33bc17e67ce/50"/>',
						'</label>',
						'</td>',
					'</tr>',
					'<tr>',
						'<td class="radioloc" align="center" height="20"><input type="radio" name="iconsize" id="icon2" value="0"/></td>',
						'<td class="radioloc" align="center" height="20"><input type="radio" name="iconsize" id="icon1" value="1" checked /></td>',
					'</tr>',
				'</table>	',
				'</dd>',
			'</dl>',
       '</div>',
		'<div id="act2" class="p1">',
			'<h3>样式设置</h3>',
			'<ul id="typeList">',
                '<li><input type="checkbox" name="followers" checked="checked" id="typelist0"/> <label for="typelist0">显示已收听人数</label></li>',
				'<li><input type="radio" name="types" value="1" h="75" w1="227" w2="167" checked="checked" id="typelist1"/> <label for="typelist1">头像+收听按钮（样式丰富，更有效吸引听众）</label></li>',
				'<li><input type="radio" name="types" value="2" h="38" w1="191" w2="136" id="typelist2"/> <label for="typelist2">收听按钮（适合有限的展现空间）</label></li>',
				'<li><input type="radio" name="types" value="3" h="20" w1="208" w2="125" id="typelist3"/> <label for="typelist3">收听文字链（最简洁的状态）</label></li>',
				'<li><input type="radio" name="types" value="4" h="27" w1="182" w2="125"id="typelist4"/> <label for="typelist4">收听按钮（清新蓝色）</label></li>',
				'<li><input type="radio" name="types" value="5" h="24" w1="178" w2="125"id="typelist5"/> <label for="typelist5">收听按钮（小巧白色）</label></li>',
			'</ul>',
		'</div>',
'</div>',
'<script language="javascript">if(typeof(pgvMain) == "function")pgvMain();</script>',
'<script language="javascript" src="http://pingjs.qq.com/ping.js"></script>'
].join("");

util.createScripts(["http://mat1.gtimg.com/app/opent/rebuild/js/jscolor.js","http://mat1.gtimg.com/app/opent/rebuild/js/customcolor.js","http://mat1.gtimg.com/app/opent/rebuild/js/comp_validate.js"],function(){
	bindAllEvent();
});

var comp_type=2;
var tencent_wb_name = userInfo.name;
var tencent_wb_sign = userInfo.sign;
var tencent_wb_style = 1;
//	if(tencent_wb_name == ""){
//			alert("您还未注册腾讯微博，请先注册。");
//			window.location = "http://t.qq.com";
//	}
QosSS.t[3]= (new Date()).getTime();

var savedurl;
var lastsavedurl;

var initEvents = function() {
	// 快速收听源码
	if (userInfo.hdlogin) {
		var _name = userInfo.name
		var _sign = userInfo.sign;
		var _colorStyle = 0;
		var _type = 0;
		$('#typeList input').change(function() {
			crUrl();
		});
		// <!--{* 不是组件定制页内的修改设置 *}-->
		if (!window.comp) {
			crUrl();
		}
		function crUrl() {
			var o = $("input[name=types]:checked");
			var f = $("input[name=followers]").is(":checked") ? 1 : 0;
			var _url = "http://follow.v.t.qq.com/index.php?c=follow&a=quick&name=" + _name + "&style=" + o.val() + "&t=" + new Date().getTime() + "&f=" + f;
			$('#review').attr("src", _url).attr("width", f ? o.attr("w1") : o.attr("w2")).attr("height", o.attr("h"));
		}
	} else {
		window.setTimeout(function() {
			$('#loginBtn').click();
		},100);
		/*		function login() {
			$('#loginBtn').click();
		}*/
	}

	// 切换一键收听与批量收听
	
	$("input:radio[name=followtype]").change(function() {
		var followtype = $(this).val();
		savedurl = $("#review").attr("src");
		if (followtype == "0") {
			$("#act").hide();
			$("#act2").show();
			if (!lastsavedurl || /about/i.test(lastsavedurl)) {
				lastsavedurl = "http://follow.v.t.qq.com/index.php?c=follow&a=quick&name=" + userInfo.name + "&style=1&t=1329117509845&f=1";
			}
			$("#review").attr("src", lastsavedurl);
			$("#show").css({
				height: 200,
				marginBottom: -200 - ($.browser.msie ? 20 : 0)
			});
			$("#review").attr({
				height: $("input[name=types]:checked").attr("h")
			}).attr({
				width: $("input[name=types]:checked").attr($("#typelist0").is(":checked") ? "w1": "w2")
			});
		} else if (followtype == "1") {
			$("#act").show();
			$("#act2").hide();
			if (!lastsavedurl) {
				lastsavedurl = "http://mat1.gtimg.com/app/opent/images/websites/allfollow/showfollow.png";
			}
			$("#review").attr("src", lastsavedurl).attr("width", "301").attr("height", "664");
			$("#show").css({
				height: 703,
				marginBottom: -703 - ($.browser.msie ? 20 : 0)
			});
		}
		lastsavedurl = savedurl;
	});

	$("#adduname").focus(function() {
		if (this.value == this.defaultValue) {
			this.value = '';
		}
	}).keydown(function(event) {
		if (event.keyCode == 13) {
			nametourl();
		}
	});
	$("#addname_btn").click(function() {
		nametourl();
	});

	$("input[name='color'],input[name='iconsize']").click(function() {
		showDemo();
	});

	$("#color_bg").blur(function() {
		showDemo();
	});
}

function namecheck(name) {
	$("#namelist").find(".name_con").each(function() {
		if ($(this).text() == name) {
			name = false;
		}
	});
	return ((new RegExp('^[a-zA-Z](\\w|_|\\d|-){0,19}$', 'g')).test(name));
}

function nametourl() {
	var name = $("#adduname").val();
	if (namecheck(name)) {
		var html = '<li class=\"name_con\" onmouseover="listOver(this)" onmouseout="listOut(this)"><a href=\"javascript:;\" onclick=\"removeName(this)\"></a><span>' + name + '</span></li>';
		$("#namelist").append(html);
		$("#adduname").val('');
		showDemo();
	}
}

function showDemo() {
	if ($(".namelist").find("li").size()) {
		var names = [];
		$(".namelist").find(".name_con").each(function() {
			names.push($(this).text());
		});
		var comp_id = window.comp ? comp.comp_id : "801000271";
		$("#review").attr("src", "http://follow.v.t.qq.com/index.php?c=follow&a=index&appkey=" + comp_id + "&bg=" + ["fff", $("#color_bg").val().replace("#", "")][$("input[name='color']:checked").val()] + "&hsize=" + [100, 50][$("input[name='iconsize']:checked").val()] + "&name=" + names.join(","));
	} else {
		$("#review").attr("src", "http://mat1.gtimg.com/app/opent/images/websites/allfollow/showfollow.png");
	}
}

function listOver(t) {
	$(t).addClass("name_closebg");
}

function listOut(t) {
	$(t).removeClass("name_closebg");
}

function removeName(t) {
	$(t).parent().remove();
	showDemo();
}

function crUrl(){}

function formSubmit() {
	if ($("#showcode").attr("disabled")) {
		return;
	}
	var followtype = parseInt($("input[name=followtype]:checked").val(), 10); //0 快速收听 1 批量收听
	var paras = {
		"comp_type": 2
	}; //组件类型 1、'一键分享',2'收听组件（原批量收听）',3'话题墙',4'Q-Share',5'心情板'
	// 组件ID
	if (window.comp) {
		paras["comp_id"] = comp.comp_id
	}
	// 网址信息
	if ($("#comp_url").size() && $("#comp_name").size()) {
		paras["comp_url"] = encodeURIComponent($("#comp_url").val());
		paras["comp_name"] = encodeURIComponent($("#comp_name").val());
	};

	switch (followtype) {
		//快速收听
	case 0:
		var htm = $("#show div").html().replace(/&amp;/g, "&").replace(/([A-Z]+)/g,
		function($1) {
			return $1.toLowerCase();
		}).replace(/id=\"[a-z]+\"/, "").replace(/\s+/, " ");
		htm = encodeURIComponent(htm);
		paras["comp_style"] = ["{\"followtype\":0,", "\"displayfolloweramount\":", $("#typelist0").attr("checked"), ",", "\"displaystyle\":", $("input[name=types]:checked").val(), ",", "\"htm\":", "\"", htm, "\"", "}"].join("");
		break;
		//一键收听
	case 1:
		var names = [];
		$(".namelist").find(".name_con").each(function() {
			names.push($(this).text());
		});
		if (names.length == 0) {
			if (loginWin) {
				loginWin.alert({
					"title": "添加失败！",
					"width": 450,
					"text": "<center>请添加待收听的微博帐号！</center>"
				});
			}
			return false;
		}
		$("#showcode").attr("disabled", "disabled");
		paras["comp_style"] = "{\"names\":\"" + names.join(",") + "\",\"colorstyle\":" + $("input[name='color']:checked").val() + ",\"customcolor\":\"" + $("#color_bg").val() + "\",\"iconsize\":" + $("input[name='iconsize']:checked").val() + "}"; //组件风格 
		break;
	}
	$.ajax({
		"type": "post",
		"url": "/pipes/interfaceserver?action=common_query&business_type=ajax_compadd&t=" + new Date().getTime(),
		"data": paras,
		"dataType": "json",
		"success": function(d) {
			var ret = +d.ret,
			msg = common.getMsgByRet(ret);
			if (msg) {
				loginWin.alert("<center>" + msg + "</center>");
				return;
			}
			if (ret === 0 && d.data && d.data.id) {
				location.href = '/development/compinfo?comp_id=' + d.data.id;
			} else {
				loginWin.alert({
					"title": "获取代码失败！",
					"width": 450,
					"text": "<center>" + (d.msg || "服务器失败") + "</center>"
				});
			}
			$("#showcode").removeAttr("disabled");
		},
		"error": function(d) {
			loginWin.alert({
				"title": "获取代码失败！",
				"width": 340,
				"text": "<center>连接服务器失败</center>"
			});
			$("#showcode").removeAttr("disabled");
		}
	});
}
eventBindFuncList.push(initEvents);
