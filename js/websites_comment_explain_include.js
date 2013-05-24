this.tpl.explain_include = [
'<link href="http://mat1.gtimg.com/app/opent/css/websites/show/customcolor.css" type="text/css" rel="stylesheet">',
'<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/jscolor_20111108.js"></script>',
'<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/customcolor.js"></script>',
'<style type="text/css">',
'.colorList li,.colorList1 li{float:left;height:40px;padding:4px;margin-bottom:8px;}',
'.color1, .color2, .color3, .color4, .color5, .color6, .color7 {height: 36px;margin: 1px;width: 36px;}',
'.colorList li, .colorList1 li{height:38px;padding:0;margin:4px 10px 0 0;border-radius:4px;}',
'.colorList1 li.s{border: 4px solid #A8DE86;margin-top:0;}',
'.fcgray{color:#999;}',
'</style>',
'<div class="comp_area">',
'<div id="show" style="margin-bottom:-550px;height:550px;width:345px;float:right;_ height:530px;_ margin-bottom:-530px;">',
	'<h3>效果预览</h3>',
	'<div style="width:100%;height:501px;overflow:hidden;_ height:491px;">',
	'<iframe id="review" frameborder="0" marginwidth=0 marginheight=0 scrolling="no" src="http://mat1.gtimg.com/app/opent/images/websites/comment.png" width="346" height="487"></iframe>',
	'</div>',
'</div>',
'<dl class="p1">',
'<dt>管理员微博帐号</dt>',
'<dd style="width:325px;">',
'<span class="form_input"><input type="text" style="width:120px" id="account" name="account" data-rule="assname" autocomplete="off" data-error="微博帐号"/></span>',
'</dd>',
'</dl>',
'',
'<dl class="p1">',
'<dt>- 尺寸</dt>',
'<dd>宽：<span class="form_input"><input type="text" id="width" maxlength="4" class="winput" value="300" /></span> px <br/><span class="fcgray">255-1024像素</span></dd>',
'<dd>高：<span class="form_input"><input type="text" id="height" maxlength="4" class="winput" value="550" /></span> px<br/><span class="fcgray">300-800像素</span></dd>',
'<dd><input type="checkbox" id="autowidth"> <label for="autowidth">宽度自适应网页</label></dd>',
'<dt>- 颜色</dt>',
'<dd>',
    '<dd>',
    '<input type="radio" id="defaultColor" checked="checked" name="color" value="0"/> <label for="defaultColor">默认颜色</label>',
    '</dd>',
	'<input type="radio" name="color" id="use_customcolorset" value="1"/> <label for="use_customcolorset">自定义颜色</label>',
	'<ul id="customcolor" class="customcolor">',
			'<li>',
				'<label for="color_titlebar">标题栏色</label><input type="textfield"	class="color {hash:true}" id="color_titlebar" name="color_titlebar"></input><div></div>',
			'</li>',
			'<li>',
				'<label for="color_background">背景色</label><input type="textfield" class="color {hash:true}" id="color_background" name="color_background"></input><div></div>',
			'</li>',
         	'<li>',
				'<label for="color_border">边框色</label><input type="textfield" class="color {hash:true}" id="color_border" name="color_border"></input><div></div>',
			'</li>',
         	'<li>',
				'<label for="color_border">主字色</label><input type="textfield" class="color {hash:true}" id="color_main" name="color_main"></input><div></div>',
			'</li>',
		'</ul>',
    '<div style="float:left;width:290px;text-align:right;clear:both;"><a id="autocolor" class="autocolor" href="javascript:void(0);">为我推荐一款搭配</a></div>',
'</dd>',
'<dd>',
    '<div style="margin:10px 0;">',
        '<span>每页显示 </span>',
        '<span><input id="pnum" type="text" style="margin:0 5px; line-height:22px; height:22px; width:40px" value="10" name="pnum" id="comm_num" maxlength="6" data-error="评论条数"/>条评论 （1-30条）</span><br/><span class="fcgray">此项获取代码后才能预览</span>',
    '</div>',
'</dd>',
'</dl>',
'</div>'
].join("");

util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/comp_validate.js",function(){bindAllEvent();});

/*解决IE6下点击“组件设置”时，其他导航及应用图标可不见的Bug*/
setTimeout(function(){
	if ($.browser.msie && ($.browser.version == "6.0")){
		$(".appsnav").find(".active").css({"zoom":"1"});
		$(".showcode_bar").css({"margin-bottom":"90px"});
	}
},200);

var _width=300;
var _height=550;
var _pnum=10;
var comp_type=6;



function crUrl(cfg) {
//	var _appkey = comp.comp_id || "801318648";
	var _appkey = "801318648";
	var rand = Math.random();
	var _url = 'http://comment.v.t.qq.com/index.html?r=' + rand;
	_url += '#appkey=' + _appkey;
	_url += '&url=http%3A%2F%2F' + location.hostname;
	if (cfg) {
		if (cfg.colorstyle == 1) {
			_url += '&colorset=' + cfg.customcolor;
		}
	} else {
		if ($("input[name='color']:checked").val() == '1') { // 自定义颜色
			var colorPlan = [];
			$("#customcolor").find("input").each(function() {
				colorPlan.push($(this).val());
			});

			colorPlan = encodeURIComponent(colorPlan.join("_"));
			_url += '&colorset=';
			_url += colorPlan;
		}
	}
	$('#review').attr('src', _url).attr('width', 344).attr('height', 480);
}

function formSubmit() {
	if ($("#showcode").attr("disabled")) {
		return;
	}

	var customcolor = [];
	$("#customcolor").find("input").each(function() {
		customcolor.push($(this).val());
	});
	var paras = {
		"action":"common_query",
		"business_type":"ajax_setmem",
		"comp_type": 6,
		//组件类型 1、'一键分享',2'批量收听',3'话题墙',4'Q-Share',5'心情板',6'微评论'
		"comp_style": "{'url':'http%3A%2F%2F" + location.hostname + "','account':'" + $("#account").val() + "','pnum':" + $("#pnum").val() + ",'width':" + $("#width").val() + ",'height':" + $("#height").val() + ",'autowidth':" + $("#autowidth").is(":checked") + ",'colorstyle':" + $("input[name='color']:checked").val() + ",'defaultcolorstyle':" + $("#colorList").find("li.s").index() + ",'customcolor':'" + encodeURIComponent(customcolor.join("_")) + "'}",
		"account": $("#account").val(),
		"pnum": $("#pnum").val()
	};
	if (window.comp) {
		paras["comp_id"] = comp.comp_id;
	}
	if ($("#comp_url").size() && $("#comp_name").size()) {
		paras["comp_url"] = encodeURIComponent($("#comp_url").val());
		paras["comp_name"] = encodeURIComponent($("#comp_name").val());
	};

	$("#showcode").attr("disabled", "disabled");

	$.ajax({
		"type": "post",
		"url": "/pipes/interfaceserver?t=" + new Date().getTime(),
		"data": paras,
		"dataType": "json",
		"success": function(d) {
			var ret = +d.ret,
			msg = common.getMsgByRet(ret);
			if (msg) {
				loginWin.alert("<center>" + msg + "</center>");
				return;
			}
			if (d.ret === 0 && d.data && d.data.id) {
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
			loginWin.show({
				"title": "获取代码失败！",
				"width": 340,
				"text": "<center>连接服务器失败</center>"
			});
			setTimeout(function() {
				loginWin.close();
			},
			2000);
			$("#showcode").removeAttr("disabled");
		}
	});
}

function normalValidate() {
	$("#comp_name").trigger("blur");
}
eventBindFuncList.push(function() {
	$('#autowidth').click(function() {
		if ($(this).attr('checked')) {
			$('#width').attr('disabled', 'true');
			_width = 0;
		} else {
			$('#width').attr('disabled', '');
			_width = parseInt($('#width').val());
		}
		crUrl();
	});
	$('#width').blur(function() {
		theval = $(this).val();
		if (theval < 255) {
			$(this).val(255);
		}
		if (theval > 1024) {
			$(this).val(1024);
		}
		_width = parseInt($(this).val());
		crUrl();
	}).keyup(function() {
		var theval = $(this).val();
		$(this).val(theval.replace(/[^\d]{0,4}/g, ''));
	});
	$('#height').blur(function() {
		theval = $(this).val();
		if (theval < 300) {
			$(this).val(300);
		}
		if (theval > 800) {
			$(this).val(800);
		}
		_height = $(this).val();
		crUrl();
	}).keyup(function() {
		var theval = $(this).val();
		$(this).val(theval.replace(/[^\d]{0,4}/g, ''));

	});
	//每页条数
	$('#pnum').blur(function() {
		theval = $(this).val();
		if (theval < 1) {
			$(this).val(1);
		}
		if (theval > 30) {
			$(this).val(30);
		}
		_pnum = $(this).val();
		crUrl();
	}).keyup(function() {
		var theval = $(this).val();
		$(this).val(theval.replace(/[^\d]{0,4}/g, ''));

	});

	$('#colorList li').each(function(i) {
		$(this).click(function() {
			$('#colorList li').removeClass('s');
			$(this).addClass('s');
			crUrl();
		});
	});

	$('input[name=post]').click(function(i) {
		crUrl();
	});

	$("input[name='color']").click(function() {
		crUrl();
	})
});      

