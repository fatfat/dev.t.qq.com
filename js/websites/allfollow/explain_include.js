this.tpl = this.tpl||{};
this.tpl.explain_include = [ 
'<link href="http://mat1.gtimg.com/app/opent/css/websites/show/customcolor.css" type="text/css" rel="stylesheet">',
'<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/jscolor_20111108.js"></script>',
'<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/customcolor.js"></script>',
'<div class="comp_area">',
		'<div id="show" style="width:345px;height:703px;margin-bottom:-703px;float:right;">',
			'<h3>效果预览</h3>',
			'<iframe id="review" frameborder="0" scrolling="auto" src="http://mat1.gtimg.com/app/opent/images/websites/allfollow/showfollow.png" width="301" height="664" marginwidth=0 marginheight=0 style="margin-top:10px;"></iframe>',
		'</div>',
		'<div id="act" class="p1">',
			'<dl>',
				'<dt>待收听用户帐号(非用户昵称)</dt>',
				'<dd>',
					'<span class="form_input"><input type="text" maxlength="20" id="adduname" value="输入完成按Enter添加" style="width:200px;"/></span>',
					'<a id="addname_btn"><img src="http://mat1.gtimg.com/app/opent/images/websites/allfollow/allfollow.png" valign="middle"/></a>',
				'</dd>',
				'<dt>已添加用户</dt>',
				'<dd>',
					'<p class="followgray">(最多收听30个正确的用户名，多于30个，只有前30个有效)</p>',
					'<ul style="width:240px;" id="namelist" class="namelist"></ul>',
				'</dd>',
				//<!--
				//<dt>appkey设置<span style="font-size:12px;font-weight:200;">（请输入从腾讯获得的appkey）</dt>
				//<dd>
					//<span class="form_input"><input type="text" id="appkey" /></span><span style="color:red;" id="errortip"></span>
				//</dd>
				//-->
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
'</div>',
'<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/comp_validate.js"></script>',
].join("");

var comp_type = 2;
$(function() {
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

});

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
		var comp_id = comp.comp_id || "801000271";
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
function crUrl() {}

function formSubmit() {
	if ($("#showcode").attr("disabled")) {
		return;
	}
	var names = [];
	$(".namelist").find(".name_con").each(function() {
		names.push($(this).text());
	});
	var paras = {
		"comp_type": 2,
		//组件类型 1、'一键分享',2'批量收听',3'话题墙',4'Q-Share',5'心情板'
		"comp_style": "{\"names\":\"" + names.join(",") + "\",\"colorstyle\":" + $("input[name='color']:checked").val() + ",\"customcolor\":\"" + $("#color_bg").val() + "\",\"iconsize\":" + $("input[name='iconsize']:checked").val() + "}" //组件风格
	};
	if (comp.comp_id) {
		paras["comp_id"] = comp.comp_id;
	}
	if ($("#comp_url").size() && $("#comp_name").size()) {
		paras["comp_url"] = encodeURIComponent($("#comp_url").val());
		paras["comp_name"] = encodeURIComponent($("#comp_name").val());
	};
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
	$.ajax({
		"type": "post",
		"url": "/development/compadd?t=" + new Date().getTime(),
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
				location.href = '/development/compinfo/' + d.data.id;
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
