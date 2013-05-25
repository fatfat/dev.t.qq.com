
tpl.mooduse_include = [
	'<div class="comp_area">',
	'<div id="show" style="width:340px;height:400px;margin-bottom:-400px;float:right;">',
		'<h3>效果预览</h3>',
		'<div style="width:100%;height:390px;overflow:auto;text-align:center;">',
		'<iframe id="review" frameborder="0" scrolling="no" src="http://mat1.gtimg.com/app/opent/images/websites/mood/moodshow.png" width="304" height="123" marginwidth=0 marginheight=0 style="margin:0 auto;"></iframe>',	
		'</div>',
	'</div>',

	'<dl class="p1" id="act">',
		'<dt>展示用户名</dt>',
		'<dd><span class="form_input valign"><input type="text" id="assname" placeholder="请输入微博帐号名" isempty="false" data-rule="assname"  data-error="微博帐号" style="width:180px;"/></span><span style="color:red;" id="errortip"></span>',
		'<a class="guideword inputdes" href="javascript:;"> 什么是微博帐号？<label>微博帐号即微博地址后缀，如下图红框所示<br/>http://t.qq.com/<span style="border:1px solid #f00">QQGenius</span></label></a>',
		'</dd>',
	'</dl>',

	'<dl class="p1" id="setStyle">',
		'<dt>- 尺寸设置</dt>',
		'<dd>宽：<span class="form_input"><input type="text" id="width" maxlength="4" class="winput" value="300" /></span> px <br/>',
		'<span class="gray">&nbsp; &nbsp; &nbsp; 270-600像素</span></dd>',
		'<dd>高：<span class="form_input"><input type="text" id="height" maxlength="4" class="winput" value="108" /></span> px <br/>',
		'<span class="gray">&nbsp; &nbsp; &nbsp; 108-600像素</span></dd>',
		'<dd><input type="checkbox" id="autowidth"> <label for="autowidth">宽度自适应网页</label></dd>',
		'<dd><input type="checkbox" id="autoheight"> <label for="autoheight">高度自适应网页</label></dd>',,
	'</dl>',
	'</div>',
].join("");
	/*
//util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/comp_validate.js",function(){bindAllEvent()});
*/
var comp_type = 5;

function normalValidate() {
	$("#assname").trigger("change");
}

function formSubmit() {
	if ($("#showcode").attr("disabled")) {
		return;
	}
	var paras = {
		"comp_type": 5,
		//组件类型 1、'一键分享',2'批量收听',3'话题墙',4'Q-Share',5'心情板'
		"comp_style": "{\"assname\":\"" + $("#assname").val() + "\",\"width\":" + parseInt($("#width").val()) + ",\"height\":" + parseInt($("#height").val()) + ",\"autowidth\":" + $("#autowidth").is(":checked") + ",\"autoheight\":" + $("#autoheight").is(":checked") + "}"
	};
	if ($("#comp_url").size() && $("#comp_name").size()) {
		paras["comp_url"] = encodeURIComponent($("#comp_url").val());
		paras["comp_name"] = encodeURIComponent($("#comp_name").val());
	};
	if (namecheck($("#assname").val()) == false) {
		$("#assname").trigger("change");
		return;
	}
	if (window.comp) {
		paras["comp_id"] = comp.comp_id
	}
	$("#showcode").attr("disabled", "disabled");
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

function namecheck(name) {
	return /^[a-zA-Z][0-9a-zA-Z_\-]{0,19}$/.test(name);
}



function refreshUrl() {
	var _url = "http://emotion.v.t.qq.com/index.php?c=emotion&a=index",
	_width = parseInt($("#width").val()) || 0,
	_height = parseInt($("#height").val()) || 0,
	_aw = 0 + $('#autowidth').is(":checked"),
	//是否自动适应宽度
	_ah = 0 + $('#autoheight').is(":checked"); //是否自动适应高度
	if (namecheck($("#assname").val())) {
//		_url += '&appkey=' + ("<!--{$comp.comp_id}-->" || "801000271"); //appkey
    	_url += '&appkey=' + "801000271"; //appkey
		_url += '&name=' + $("#assname").val();
		_url += '&w=' + [_width, 0][_aw];
		_url += '&h=' + [_height, 0][_aw];

		var iframeheight = parseInt(_height) + 13;
		var iframewidth = _width;
		//$('#showscripts').val('<iframe frameborder="0" scrolling="auto" src="'+_url+'" width="'+iframewidth+'" height="'+iframeheight+'"></iframe>');
		$("#review").attr("src", _url);
		// $("#review").attr("width",[_width,"100%"][0+$('#autowidth').is(":checked")]);
		// $("#review").attr("height",[_height+13,"100%"][0+$('#autoheight').is(":checked")]);
		$("#review").attr("width", "100%");
		$("#review").attr("height", "95%");
	} else {
		$("#assname").trigger("change");
	}
}

eventBindFuncList.push(function(){
	$("#assname").change(function() {
		var s = $(this).val();
		if (namecheck(s)) {
			showmsg(true, $(this), "");
			refreshUrl();
		} else {
			var msg = ["微博帐号不正确", "微博帐号不能为空"][0 + (s == "")];
			if (window.showmsg) {
				showmsg(false, $(this), msg);
			} else if (window.loginWin) {
				loginWin.alert("<center>" + msg + "</center>");
			} else {
				alert(msg);
			}
		}
	});
	$('#autowidth').click(function() {
		if ($(this).attr('checked') == true) {
			$('#width').attr("disabled", "true");
			_width = 0;
		} else {
			$('#width').attr("disabled", "");
			_width = parseInt($('#width').val());
		}
		refreshUrl();
	});
	
	$('#autoheight').click(function() {
		if ($(this).attr('checked') == true) {
			$('#height').attr("disabled", "true");
			_height = 0;
		} else {
			$('#height').attr("disabled", "");
			_height = parseInt($('#height').val());
		}
		refreshUrl();
	});
	
	$('#width').blur(function() {
		theval = $(this).val();
		if (theval < 270) {
			$(this).val(270);
		}
		if (theval > 600) {
			$(this).val(600);
		}
		_width = parseInt($(this).val());
		refreshUrl();
	}).keyup(function() {
		var theval = $(this).val();
		$(this).val(theval.replace(/[^\d]{0,4}/g, "").replace(/^0*/g, ""));
	
	});
	
	$('#height').blur(function() {
		theval = $(this).val();
		if (theval < 108) {
			$(this).val(108);
		}
		if (theval > 600) {
			$(this).val(600);
		}
		_height = $(this).val();
		refreshUrl();
	}).keyup(function() {
		var theval = $(this).val();
		$(this).val(theval.replace(/[^\d]{0,4}/g, "").replace(/^0*/g, ""));
	});
});

