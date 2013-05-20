
this.tpl = this.tpl || {};


var sty = [
	'.colorList li,.colorList1 li{float:left;height:40px;padding:4px;margin-bottom:8px;}',
	'.color1, .color2, .color3, .color4, .color5, .color6, .color7 {height: 36px;margin: 1px;width: 36px;}',
	'.colorList li, .colorList1 li{height:38px;padding:0;margin:4px 10px 0 0;border-radius:4px;}',
	'.colorList1 li.s{border: 4px solid #A8DE86;margin-top:0;}',
].join("");

util.createStyle(sty);	

tpl.websites_wall_explain_include = [
	'<link href="http://mat1.gtimg.com/app/opent/css/websites/show/customcolor.css" type="text/css" rel="stylesheet">',
	'<div class="comp_area">',
	'<div id="show" style="margin-bottom:-630px;height:630px;width:345px;float:right;">',
		'<h3>效果预览</h3>',
		'<div style="width:100%;height:601px;overflow:auto">',
		'<iframe id="review" frameborder="0" marginwidth=0 marginheight=0 scrolling="no" src="http://mat1.gtimg.com/app/opent/images/websites/show.png" width="345" height="594"></iframe>',
		'</div>',
	'</div>',
	'<dl class="p" style="_ margin-top:-20px;">',
	'<dt>话题定制</dt>',
	'<dd  style="width:332px;"><span class="form_input"><input type="text" id="t1" name="topicname" placeholder="请输入话题名称" data-rule="topicname" data-error="话题名称"/></span></dd>',
	'</dl>',
	'',
	'<dl class="p">',
	'<dt>添加来源</dt>',
	'<dd  style="width:332px;"><span class="form_input"><input type="text" id="originurl" name="originurl" placeholder="请输入网站url" data-rule="link" data-error=""/></span></dd>',
	'</dl>',
	'',
	'<dl class="p">',
	'<dt>推荐官号</dt>',
	'<dd  style="width:332px;"><span class="form_input"><input type="text" id="wbname" name="wbname" placeholder="请输入官号英文账号" data-rule="tname" data-error=""/></span></dd>',
	'</dl>',
	'',
	'<dl class="p">',
	'<dt>- 尺寸</dt>',
	'<dd>宽：<span class="form_input"><input type="text" id="width" maxlength="4" class="winput" value="345" /></span> px</dd>',
	'<dd>高：<span class="form_input"><input type="text" id="height" maxlength="4" class="winput" value="590" /></span> px</dd>',
	'',
	'<dt>- 颜色</dt>',
	'<dd>',
		'<input type="radio" id="defaultColor" checked="checked" name="color" value="0"/> <label for="defaultColor">默认颜色</label>',
		'<ul id="colorList" class="colorList1">',
			'<li class="s" data-color="4"><div class="color1" style="background:#F7FBFD;"></div></li>',
			'<li data-color="1"><div class="color2" style="background:#333333;"></div></li>',
		'</ul>',
		'<div style="clear:both;height:1px;"></div>',
	'</dd>',
	'',
	'',
	'<dt>- 显示图片</dt>',
	'<dd>',
		'<input type="radio" name="imgshow" value="1" checked="checked" id="imgshow1"/> <label for="imgshow1">显示缩略图</label> &nbsp; &nbsp;',
		'<input type="radio" name="imgshow" value="0" id="imgshow2"/> <label for="imgshow2">显示为图标</label>',
	'</dd>',
	'',
	'<dt>- 发表框</dt>',
	'<dd>',
		'<input type="radio" name="post" value="1" checked="checked" id="setPost1"/> <label for="setPost1">居上</label> &nbsp; &nbsp;',
		'<input type="radio" name="post" value="0" id="setPost0"/> <label for="setPost0">居下</label> &nbsp; &nbsp;',
		'<input type="radio" name="post" value="2" id="setPost2"/> <label for="setPost2">不显示</label> &nbsp; &nbsp;',
	'</dd>',
	'',
	'<dt>- 滚动条</dt>',
	'<dd>',
		'<input type="radio" name="tmodel" value="5" checked="checked" id="tmodel1"/> <label for="tmodel1">有</label> &nbsp; &nbsp;',
		'<input type="radio" name="tmodel" value="0" id="tmodel2"/> <label for="tmodel2">无</label>',
	'</dd>',     
	'</dl>',
	'</div>'
].join("");
	
util.createScript("/js/jscolor.js");
util.createScript("/js/customcolor.js");
util.createScript("/js/comp_validate.js")

var _width = 345;
var _height = 590;
var _opt = 7;
var comp_type = 3;

$("input[name='topicname']").change(function() {
	crUrl(false);
});

$('#wbname').change(function() {
	crUrl(false);
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
	crUrl(false);
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
	crUrl(false);
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

$('input[name=imgshow]').click(function() {
	crUrl(false);
});

$('input[name=post]').click(function(i) {
	crUrl(false);
});

$('input[name=tmodel]').click(function(i) {
	crUrl(false);
});
/*
	$('#use_customcolorset').click(function(){
		crUrl('',4);
	});

    $('#defaultColor').change(function () {
        $("#colorList > li:first-child").trigger('click');
    });*/
$("input[name='color']").click(function() {
	$("#colorList,#customcolor").hide();
	if ($(this).val() == 0) {
		$(this).parent().find("li:eq(0)").trigger("click");;
	}
	$(this).parent().find("ul").show();
})

function crUrl(o) {
	if ($.trim($('input#t1').val()).length == 0) return false;
	var _t = [],
	cus = $("input[name='color']:checked").val() * 4,
	_colorStyle = $('#colorList li.s').attr('data-color') - 0 || 4;
	if ($('#t1').size() && $('#t1').val() != '') {
		_t.push(encodeURIComponent($.trim($('#t1').val())));
	}
	if (_t.length == 0) {
		return false;
	} else {
		var _tn = _t.join('');
	}

	var _appkey = comp.comp_id || "801000271";
	var wbname = encodeURIComponent($.trim($('#wbname').val()));
	var wburl = encodeURIComponent($.trim($('#originurl').val()));
	if (_tn != '' && _appkey != '') {
		$('#review').show();
		$('#showImgs').hide();
	} else {
		$('#review').hide();
		$('#showImgs').show();
	}
	var _url = 'http://wall.v.t.qq.com/index.php?c=wall&a=index&t=' + _tn;
	if (_width) {
		_width = parseInt($('#width').val());
	}
	_height = parseInt($('#height').val());
	_url += '&ak=' + _appkey;
	_url += '&w=' + [_width, "0"][0 + $("#autowidth").is(":checked")];
	_url += '&h=' + _height;
	_url += '&n=' + wbname;
	_url += '&url=' + wburl;
	_url += '&o=' +
	function() {
		var _opt = 7;
		switch ( + $("input[name='imgshow']:checked").val() || 0) {
		case 0:
			_opt &= ~parseInt(1 << 1, '0x');
			break; //1,5,13
		case 1:
			_opt |= parseInt(1 << 1, '0x');
			break; //3,7,15
		}
		switch ( + $("input[name='post']:checked").val() || 0) {
		case 0:
			_opt |= parseInt(1 << 3, '0x');
			_opt |= parseInt(1 << 2, '0x');
			break;
		case 1:
			_opt &= ~parseInt(1 << 3, '0x');
			_opt |= parseInt(1 << 2, '0x');
			break;
		default:
			_opt &= ~parseInt(1 << 2, '0x');
		}
		switch ( + $("input[name='tmodel']:checked").val() || 0) {
		case 0:
			_opt &= ~parseInt(1 << 5, '0x');
			break;
		case 5:
			_opt |= parseInt(1 << 5, '0x');
			break;
		}
		return _opt;
	} ();
	var colorPlan = [];
	if (cus == 4) {
		_url += '&s=' + cus;
		$("#customcolor").find("input").each(function() {
			colorPlan.push($(this).val().replace("#", ""));
		});
		colorPlan = colorPlan.join("_");
		_url += '&cs=';
		_url += colorPlan;
	} else {
		_url += '&s=' + _colorStyle;
	}

	iframewidth = [_width, "100%"][0 + $("#autowidth").is(":checked")];
	if (o) {
		$('#review').attr('width', iframewidth).attr('height', _height);
	} else {
		$('#review').attr('src', _url).attr('width', iframewidth).attr('height', _height);
	}
	/*
		if(_tn != '' && _appkey != ''){
			if ( cus == 4 )
			{
				$('#showscripts').val('<iframe frameborder="0" scrolling="no" src="http://wall.v.t.qq.com/index.php?c=wall&a=index&t='+_tn+'&ak='+_appkey+'&w='+_width+'&h='+_height+'&o='+_opt+'&s='+ cus +'&cs=' + colorPlan + '" width="'+iframewidth+'" height="'+_height+'"></iframe>');
			}
			else
			{
				$('#showscripts').val('<iframe frameborder="0" scrolling="no" src="http://wall.v.t.qq.com/index.php?c=wall&a=index&t='+_tn+'&ak='+_appkey+'&w='+_width+'&h='+_height+'&o='+_opt+'&s='+_colorStyle+'" width="'+iframewidth+'" height="'+_height+'"></iframe>');
			}			
		}else{
			$('#showscripts').val('请先填写需要定制的话题名和appkey');
		}*/
}

function formSubmit() {
	if ($("#showcode").attr("disabled")) {
		return;
	}
	var topicnames = [],
	customcolor = [];
	$("input[name='topicname']").each(function() {
		if (/^[^#]{1,20}$/.test($.trim($(this).val()))) {
			topicnames.push(encodeURIComponent($.trim($(this).val())));
		}
	});
	$("#customcolor").find("input").each(function() {
		customcolor.push($(this).val().replace("#", ""));
	});
	var tmodelp = +$("input[name='tmodel']:checked").val(),
	wbnamep = encodeURIComponent($.trim($('#wbname').val())),
	wburlp = encodeURIComponent($.trim($('#originurl').val())),
	colors = $('#colorList li.s').attr('data-color');
	var paras = {
		"comp_type": 3,
		//组件类型 1、'一键分享',2'批量收听',3'话题墙',4'Q-Share',5'心情板'
		"comp_style": "{\"topicnames\":\"" + topicnames.join("") + "\",\"width\":" + $("#width").val() + ",\"height\":" + $("#height").val() + ",\"autowidth\":" + $("#autowidth").is(":checked") + ",\"colorstyle\":" + $("input[name='color']:checked").val() + ",\"defaultcolorstyle\":" + colors + ",\"customcolor\":\"" + customcolor.join("_") + "\",\"imgshow\":" + $("input[name='imgshow']:checked").val() + ",\"postpos\":" + $("input[name='post']:checked").val() + ",\"tmodel\": " + tmodelp + " , \"wbname\" : \"" + wbnamep + "\", \"wburl\":\"" + wburlp + "\"}"
	};
	if (comp.comp_id) {
		paras["comp_id"] = comp.comp_id;
	}
	if ($("#comp_url").size() && $("#comp_name").size()) {
		paras["comp_url"] = encodeURIComponent($("#comp_url").val());
		paras["comp_name"] = encodeURIComponent($("#comp_name").val());
	};
	if (topicnames.length == 0) {
		loginWin.show({
			"title": "获取代码失败！",
			"width": 240,
			"height": 120,
			"text": "<center><br/>请至少指定一个需要定制的话题</center>"
		});
		return;
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


/*window.onload = function(){//解决IE6下组件设置（话题墙）页左侧导航隐藏的bug
		if($.browser.msie && $.browser.version == "6.0"){
			$(".deverRight").css({"width":"782px"});
			$(".comp_area").css({"width":"701px"});
			$("#show").css({"zoom":"1"});
			$("#review").css({"zoom":"1"});
		}
	}*/

