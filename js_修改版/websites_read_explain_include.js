
this.tpl = this.tpl || {};
var common = {},scroll = function(event,scroller){
	var k = event.wheelDelta? event.wheelDelta:-event.detail*10;
		scroller.scrollTop = scroller.scrollTop - k;
		return false;
	}


var sty = [
	'.colorList li,.colorList1 li{float:left;height:40px;padding:4px;margin-bottom:8px;}',
	'.color1, .color2, .color3, .color4, .color5, .color6, .color7 {height: 36px;margin: 1px;width: 36px;}',
	'.colorList li, .colorList1 li{height:38px;padding:0;margin:4px 10px 0 0;border-radius:4px;}',
	'.colorList1 li.s{border: 4px solid #A8DE86;margin-top:0;}',
	'.toExtend{width:12px;line-height:12px;margin-right:20px;cursor:pointer;}',
	'.theme{display:inline-block;width:14px;height:14px;border:1px solid #000;margin-bottom:-2px;}',
	'.panel{padding:0 10px 10px 10px;line-height:150%;}',
	'.comp_area h4{font-size:12px;margin:10px 0;}',
	'.comp_area ul li{margin-left:70px;list-style:square;}',
	'#addMod{padding:2px;}'
].join("");

util.createStyle(sty);	

tpl.websites_read_explain_include = [
	'<link href="http://mat1.gtimg.com/app/opent/css/websites/show/customcolor.css" type="text/css" rel="stylesheet">',
	'<div class="comp_area">',
		'<div id="show" class="show_wall">',
			'<h3>样式预览</h3>',
			'<div style="width:100%;height:601px;overflow:auto">',
				'<iframe id="review" frameborder="0" marginwidth=0 marginheight=0 scrolling="no" src="http://mat1.gtimg.com/app/opent/images/websites/show.png" width="345" height="594"></iframe>',
			'</div>',
		'</div>',
	
		'<h2 class="comp_sub_tit">自定义配置</h2>',

		'<h3 class="p"><em class="toExtend">+</em>整体样式与风格配置</h3>',
		'<ul style="display:none">',
			'<li><h4>阅读墙尺寸</h4>',
				'<div class="panel">',
					'<input type="text" name="width" size="5" value="100%"> <label>&times;</label> <input type="text" name="height" size="5" value="100%"/>',
				'</div>',
			'</li>',
			'<li><h4>阅读墙背景</h4>',
				'<div class="panel">',
					'<input type="radio" name="theme" value="0" id="theme0" checked/> <label for="theme0" class="theme" style="background:#fff;border-color:#DADADA;"></label> ',
					'<input type="radio" name="theme" value="1" id="theme1"/> <label for="theme1" class="theme" style="background:#E5E5E5;border-color:#CFCFCF;"></label> ',
					'<input type="radio" name="theme" value="2" id="theme2"/> <label for="theme2" class="theme" style="background:#555555;border-color:#6F6F6F;"></label> ',
					'<input type="radio" name="theme" value="3" id="theme3"/> <label for="theme3" class="theme" style="background:#333333;border-color:#4E4D4D;"></label><br/> ',
					'<input type="radio" name="theme" value="4" id="theme4"/> <label for="theme4" class="theme" style="background:#F1FAFE;border-color:#CFE3EA;"></label> ',
					'<input type="radio" name="theme" value="5" id="theme5"/> <label for="theme5" class="theme" style="background:#DEF2FA;border-color:#B1DAEA;"></label> ',
					'<input type="radio" name="theme" value="6" id="theme6"/> <label for="theme6" class="theme" style="background:#17375D;border-color:#334F70;"></label> ',
					'<input type="radio" name="theme" value="6" id="theme7"/> <label for="theme7" class="theme" style="background:#E5FFDF;border-color:#CBE7C2;"></label><br/> ',
					'<input type="radio" name="theme" value="6" id="theme8"/> <label for="theme8" class="theme" style="background:#F7E5F4;border-color:#EACEE5;"></label> ',
					'<input type="radio" name="theme" value="6" id="theme9"/> <label for="theme9" class="theme" style="background:#241F3E;border-color:#48435D;"></label> ',
					'<br/><br/>',
					'<input type="checkbox" name="nobg" id="nobg"/> <label for="nobg">背景色透明</label>',
				'</div>',
			'</li>',
			'<li><h4>整体模块显示</h4>',
				'<div class="panel">',
					'<input type="checkbox" id="TitleModule" name="TitleModule" checked/> <label for="TitleModule">标题栏</label> ',
					'<input type="checkbox" id="PubModule" name="PubModule" checked/> <label for="PubModule">发表框</label><br/> ',
					'<input type="checkbox" id="TabModule" name="TabModule" checked/> <label for="TabModule">页卡栏</label> ',
					'<input type="checkbox" id="TimelineModule" name="TimelineModule" checked/> <label for="TimelineModule">时间线</label> ',
				'</div>',
			'</li>',
		'</ul>',
						
						
		'<h3 class="p"><em class="toExtend" id="styleConfig">+</em>标题栏样式</h3>',
		'<ul style="display:none;">',
			'<li>',
				'<h4>收听帐号</h4>',
				'<div class="panel">',
					'<div class="panel"><input type="text" name="OfficialAccount" placeholder="指定用户可收听的微博帐号" value="api_weibo"/></div>',
				'</div>',
			'</li>',
		'</ul>',
				
		'<h3 class="p"><em class="toExtend" id="styleConfig">+</em>消息发表框样式</h3>',
		'<ul style="display:none;">',
			'<li>',
				'<h4>显示位置：</h4>',
				'<div class="panel">',
					'<input type="radio" name="position" value="0" id="position1" checked/> <label for="position1">时间线上面</label> ',
					'<input type="radio" name="position" value="1" id="position2"/> <label for="position2">时间线下面</label> ',
				'</div>',
			'</li>',
			'<li>',
				'<h4>附属功能：</h4>',
				'<div class="panel">',
					'<input type="checkbox" name="InsertFunction" value="0" id="InsertFunction0" checked/> <label for="InsertFunction0">表情</label> ',
					'<input type="checkbox" name="InsertFunction" value="1" id="InsertFunction1" checked/> <label for="InsertFunction1">图片</label> ',
					'<input type="checkbox" name="InsertFunction" value="2" id="InsertFunction2" checked/> <label for="InsertFunction2">@好友</label> ',
				'</div>',
			'</li>',
			'<li>',
				'<h4>来源设置：</h4>',
				'<div class="panel">',
					'<input type="text" name="SourceUrl" placeholder="指定一个发表微博后会自动带上的url地址" value="http://mat1.gtimg.com/app/tmp/read.html"/>',
				'</div>',
			'</li>',
			'<li>',
				'<h4>默认内容：</h4>',
				'<div class="panel">',
					'<input type="text" name="InitialContent" placeholder="指定发表框默认显示的内容" value="#阅读墙测试# 说点什么吧"/>',
				'</div>',			
			//	'<p>发表框位置</p><div class="panel"><input type="text" name="OfficialAccount" placeholder="指定用户可收听的微博帐号" value="api_weibo"/></div>',
			'</li>',
		'</ul>',
				
		'<h3 class="p"><em class="toExtend" id="styleConfig">+</em>时间线样式与内容</h3>',
		'<ul style="display:none;">',
			'<li>',
				'<h4>时间线样式</h4>',
				'<div class="panel">',
					'<input type="radio" name="PageStyle" value="0" id="PageStyle0" checked/> <label for="PageStyle0">时间线固定高度</label> ',
					'<input type="radio" name="PageStyle" value="1" id="PageStyle1"/> <label for="PageStyle1">根据内容自适应高度</label><br/> ',
					'<input type="radio" name="PageStyle" value="2" id="PageStyle2"/> <label for="PageStyle2">时间线内容自适应刷新</label> ',
				'</div>',					
			'</li>',
			'<li>',
				'<h4>时间线每次拉取微博数量</h4>',
				'<div class="panel">',
					'<input type="number" name="TwitterNum" placeholder="每页多少条微博(1-20)" value="20" max="20" min="1"/>',
				'</div>',
			'</li>',
			'<li>',
				'<h4>图片显示：</h4>',
				'<div class="panel">',
					'<input type="radio" name="PicStyle" value="0" id="PicStyle0" checked/> <label for="PicStyle0">图片</label>',
					'<input type="radio" name="PicStyle" value="1" id="PicStyle1"/> <label for="PicStyle1">缩略图</label>',
				'</div>',
			'</li>',
			'<li>',
				'<h4>头像显示：</h4>',
				'<div class="panel">',
					'<input type="checkbox" name="HeadStyle" value="0" id="HeadStyle" checked/> <label for="HeadStyle">显示用户头像</label>',
				'</div>',
			'</li>',
		'</ul>',
			
		'<h3 class="p"><em class="toExtend" id="styleConfig">+</em>添加自定义模块</h3>',
		'<ul style="display:none;">',
			'<li>',
				'<div class="panel">',
					'<input type="button" value="添加自定义模块" id="addMod" class="btn createTimeline" data-action="createTimeline">',
				'</div>',
			'</li>',
		'</ul>',
	'</div>',
].join("");
	
 var _width = 345;
var _height = 590;
var _opt = 7;
var comp_type = 3;

eventBindFuncList.push(function(){
	$('.toExtend').click(function(){
		if($(this).html() == "+") {
			$(this).parent().next('ul').css("display","block");
			$(this).html('-');
		} else {	
			$(this).parent().next('ul').css("display","none");
			$(this).html('+');
		}
	});
	
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
});

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
	
//	var _appkey = comp.comp_id || "801000271";
	var _appkey = window.comp && comp.comp_id ? comp.comp_id : "801000271";
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
	if (window.comp && comp.comp_id) {
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
	if(window.comp){
		paras["comp_id"] = comp.comp_id;
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

util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/comp_validate.js",function(){
	bindAllEvent();
});
/*window.onload = function(){//解决IE6下组件设置（话题墙）页左侧导航隐藏的bug
		if($.browser.msie && $.browser.version == "6.0"){
			$(".deverRight").css({"width":"782px"});
			$(".comp_area").css({"width":"701px"});
			$("#show").css({"zoom":"1"});
			$("#review").css({"zoom":"1"});
		}
	}*/
var getConfigInfo = function(){
		var form = document.getElementById("configboard"),
			f = $(form),
			param = {};
			param["config"] = (function(arr){
				arr.push(form["appkey"].value);
				arr.push(f.find("[name='theme']:checked").val());
				arr.push(+form["nobg"].checked);
				arr.push([+form.ModuleConfigure.checked,+form.TitleModule.checked,+form.PubModule.checked,+form.TabModule.checked,+form.TimelineModule.checked].join(""));
				arr.push(f.find("[name='PageStyle']:checked").val());
				arr.push(f.find("[name='PicStyle']:checked").val());
				arr.push(+f.find("[name='HeadStyle']").is(":checked"));
				arr.push(form.TwitterNum.value);
				arr.push((function(_arr){
					f.find("[name='InsertFunction']:checked").each(function(){
						_arr.push($(this).val());
					});
					return _arr.join("");
				})([f.find("[name='position']:checked").val()]));
				return arr.join("-");
			})([]);
			param["account"] = form.OfficialAccount.value;
			param["sendbox"] =[encodeURIComponent(form.SourceUrl.value),encodeURIComponent(form.InitialContent.value)].join("|");
			return param;
	},
	getTimelineInfo = function(){
		var t = $("#timelineList"),arr = [];
			t.find("li").each(function(){
				var li = $(this),attrs = ["Name","ConditionType","Condition","SortType","Famous","ContentType","MessageType"],timeline = [];
				for (var i in attrs){
					if (attrs[i] === "Condition"){
						timeline.push(encodeURIComponent(li.attr(attrs[i])));
					}else{
						timeline.push(li.attr(attrs[i]));
					}
				}
				arr.push(timeline.join("\t"));
			});
			return arr.join("\n") || "0";
	},
	onIframeload = function(iframe){
		var onMessage = function(d){
			if (/^\d+$/.test(d) && iframe.height != (+d)){
				iframe.height = d;
			}
		};
		if (window.postMessage){
				if (window.addEventListener){
					window.addEventListener('message',function(event){
						onMessage(event.data);
					});
				}else{
					window.attachEvent("onmessage",function(event){
						onMessage(event.data);
					});
				}
			
		}else{
			var win = iframe.contentWindow,h = 0;
			setInterval(function(){
				var name = window.name;
				if (/^\d+$/.test(name) && (+name)!== h){
					iframe.height = +name;
					h = +name;
				}
			},2000);
		}
	};

$(function(){
	var dialog = $(".dialog"),
	timelineList = $("#timelineList"),
	showTimeLine = function(event){
		var f = dialog.find("form").not(".none"),
			form = f[0],
			li,
			param = {};
			param["Name"] = form["Name"].value;
			param["ConditionType"] = form["ConditionType"].value;
			param["Condition"] = form["Condition"].value.replace(/^\s*|\s*$|\t*/g,"").split(/[\s\t]*\n+[\s\t]*/g).slice(0,5).join("\t");
			param["SortType"] = f.find("input[name='SortType']:checked").val();
			param["Famous"] = f.find("input[name='Famous']:checked").val();
			param["ContentType"] = f.find("input[name='ContentType']").val();
			param["MessageType"] = f.find("input[name='MessageType']:checked").val();
			if (param["Name"] && param["Condition"]){
				dialog.addClass("none");
				
				if (f.parent().attr("editId")){
					li = timelineList.find("li:eq("+f.parent().attr("editId")+")");
				}else{
					li = $('<li></li>').appendTo(timelineList);
				}
				for(var i in param){
					li.attr(i,param[i]);
				}
				li.html(param["Name"]+'<div class="condition">'+param["Condition"]+'</div></div><div><a href="javascript:;" data-action="edit">修改</a> <a href="javascript:;" data-action="del">删除</a></div>');
			}
			$("#configboard").find("input").first().trigger("change");
			f.parent().removeAttr("editId");
	},
	getContentType = function(selector){
		var val = 0x0;
			selector.find(":checked").each(function(){
				var value = +$(this).val();
				val = val | value;
			});
			return val;
	},
	buildCode = function(timer){
		var code1= $("#code1"),
			code2= $("#code2"),
			form = $("#configboard"),
			id = 'txwbydq_01',
			f = form.get(0),
			colors = ['d0d0d0','ccc','333','000'],
			config = {},
			jsonToString = function(o){
				if (window.JSON){
					return JSON.stringify(o);
				}
			
				var arr = [],
					format = function(s){
						if (typeof s === "object" && s !== null){
							if (s.length){
								var sarr = [];
								for(var j=0,jk=s.length;j<jk;j++){
									sarr.push(format(s[j]));
								}
								return "["+sarr.join(",")+"]";
							}
							return jsonToString(s);
						}else if(typeof s === "string"){
							return '"'+s+'"';
						}else if(typeof s === "number"){
							return s;
						}else{
							return s;
						}
					};
				for(var i in o){
					arr.push(['"'+i+'"',format(o[i])].join(":"));
				}
				return "{"+arr.join(",")+"}";
			},
			codeStr1 = '&lt;script type="text/javascript" src="http://mat1.gtimg.com/app/vt/js/read/import.js" charset="utf-8"&gt;&lt;/script&gt;';
			codeStr2 = '&lt;iframe width="'+f.width.value+'" height="'+f.height.value+'" frameborder="0" style="border:1px solid #'+colors[+form.find("input[name='theme']:checked").val()]+';" allowtransparency="true" src="about:blank" id="'+id+'" srcolling="no"&gt;&lt;/iframe&gt;';
			config.appkey = f.appkey.value;
			config.theme = +form.find("input[name='theme']:checked").val();
			config.nobg = +f.nobg.checked;
			config.ModuleConfigure = {
				"PubModule":+$("#PubModule").is(":checked"),
				"TabModule":+$("#TabModule").is(":checked"),
				"TimelineModule":+$("#TimelineModule").is(":checked"),
				"TitleModule":+$("#TitleModule").is(":checked")
			};
			config.TimelineDetail = {
				"HeadStyle":+$("#HeadStyle").is(":checked"),
				"PageStyle":+form.find("input[name='PageStyle']:checked").val(),
				"PicStyle":+form.find("input[name='PicStyle']:checked").val(),
				"TwitterNum":+f.TwitterNum.value
			};
			config.PubModuleConfigure = {
				"InitialContent":f.InitialContent.value,
				"InsertFunction":(function(a){
					var arr = [];
					a.each(function(){
						arr.push(+$(this).val());
					});
					return arr;
				})(form.find("input[name='InsertFunction']:checked")),
				"SourceUrl":f.SourceUrl.value,
				"position":+form.find("input[name='position']:checked").val()
			};
			config.TitleModuleConfigure = {
				"OfficialAccount":f.OfficialAccount.value
			};
			config.TimelineModuleConfigure = (function(lis){
				var arr = [];
				lis.each(function(){
					var conf = {},li = $(this);
						conf.Condition = li.attr("Condition").split("\t");
						conf.ConditionType = +li.attr("ConditionType");
						conf.ContentType = +li.attr("ContentType");
						conf.Famous = +li.attr("Famous");
						conf.MessageType = +li.attr("MessageType");
						conf.Name = li.attr("Name");
						conf.SortType = +li.attr("SortType");
					arr.push(conf);
				});
				return arr;
			})($("#timelineList").find("li"));
			
			code1.html(codeStr1);
			code2.html([
				codeStr2,
				'',
				'&lt;script type="text/javascript"&gt;window.showTxWbYDQ(document.getElementById("'+id+'"),',
				jsonToString(config),
				',',
				'function(d){/*回调函数,d的值格式为：{"action":"发表","ret":0,"errcode":0,"msg":"ok","data":{"id":231174038614579,"time":1371544700}},其中action的值可能为“发表、转播、评论”*/}',
				');&lt;/script&gt;'
			].join("\n"));
	}
	;
	
	$("input[name='__ContentType']").change(function(){
		var t = $(this),val = +t.val(),selector = t.siblings(".content-type"),target = t.siblings("input[name='ContentType']");
		if (val === 0){
			selector.addClass("none");
			target.val(0);
		}else{
			selector.removeClass("none");
			target.val(getContentType(selector));
		}
	});
	
	$("input[name='_ContentType']").change(function(){
		var t = $(this),
			target = t.parent().siblings("input[name='ContentType']"),
			tval = getContentType(t.parent());
			target.val(tval);
	});
	
	$(".createTimeline").click(function(){
		dialog.removeClass("none")
	});
	
	dialog.find(".tab").bind("click",function(){
		var t = $(this),i = t.index();
		t.addClass("active").siblings().removeClass("active");
		dialog.find(".timeline:eq("+i+")").removeClass("none").siblings().addClass("none");
	});
	dialog.find(".close").bind("click",function(){
		$(this).parent().addClass("none");
	});
	dialog.find(".btn").bind("click",showTimeLine);
	
	$("#configboard").find("input").change(function(){
		var iframe = $("#frame"),
			frame = iframe.get(0),
			form = $("#configboard"),
			pageStyle = +$("#configboard").find("[name='PageStyle']:checked").val(),
			sendMsg = function(win,msg){
				if (win.postMessage){
					win.postMessage(msg,"*");
				}else{
					win.name = msg;
				}
				if (pageStyle === 2){
					onIframeload(iframe[0]);
				}
				if (window.localStorage && msg !== "0"){
					localStorage.setItem("timelineInfo",msg);
				}
			},
			onFrameLoad = function(){
				var win = frame.contentWindow,msg = getTimelineInfo();
					sendMsg(win,msg);
					return false;
			};
			
			if (window.postMessage){
				if (document.all){
					frame.onreadystatechange = function(){
						if (frame.readyState === "complete"){
							onFrameLoad();
						}
					}
				}else{
					frame.onload = onFrameLoad;
				}
			}else{
				frame.onreadystatechange = function(){
					if (frame.readyState === "complete"){
						onFrameLoad();
					}
				}
			}
			iframe.attr("src","http://read.v.t.qq.com?"+$.param(getConfigInfo()))
			.attr("width",form.find("[name='width']").val())
			.attr("height",form.find("[name='height']").val());
			
			if (window.localStorage){
				localStorage.setItem("configInfo",getConfigInfo());
			}
			
			buildCode(+new Date());
	})/*.last().trigger("change")*/;
	
	(function(storage){
		if (storage){
			var timelineInfo = storage.getItem("timelineInfo"),
				configInfo = storage.getItem("configInfo"),
				arr,
				o = {};
				
				if (timelineInfo){
					timelines = timelineInfo.split("\n");
					for(var i=0,k=timelines.length;i<k;i++){
						var arr = timelines[i].split("\t");
							arr[2] = decodeURIComponent(arr[2]);
						o = {
								"Name":arr[0],
								"ConditionType":+arr[1],
								"Condition":arr[2].split(","),
								"SortType":+arr[3],
								"Famous":+arr[4],
								"ContentType":+arr[5],
								"MessageType":arr[6]|0
							}
							
						var li = $("<li></li>").appendTo($("#timelineList"));
						for (var n in o){
							li.attr(n,o[n].toString()).html(o["Name"]+'<div class="condition">'+ o["Condition"].toString() +'</div><div><a href="javascript:;" data-action="edit">修改</a> <a href="javascript:;" data-action="del">删除</a></div>');
						}
						o = {};
					}
				}
				$("#configboard").find("input").first().trigger("change");
		}else{
			$("#configboard").find("input").first().trigger("change");
		}
	})(window.localStorage);
	
	$("#timelineList").bind("click",function(event){
		var target = $(event.target),
			callback = {
			"edit":function(){
				var li = target.parent().parent(),
					params = ["Name","ConditionType","Condition","SortType","Famous","ContentType","MessageType"],
					o={},
					form,
					fun = function(i){
						return [i & 2,i & 4,i & 8,i & 16];
					};
					for(var i in params){
						if (typeof params[i] === "string"){
							if (["Name","Condition"].toString().indexOf(params[i]) > -1){
								o[params[i]] = li.attr(params[i]);
							}else{
								o[params[i]] = +li.attr(params[i]);
							}
						}
					}
					dialog.removeClass("none").find(".tab:eq("+o["ConditionType"]+")").trigger("click");
					form = dialog.find(".timeline").not(".none");
					form.parent().attr("editId",li.index());
					for(var arr=["ConditionType","SortType","Famous","ContentType","MessageType"],i=0,k=arr.length;i<k;i++){
						if (typeof arr[i] === "string"){
							form.find("input[name='"+arr[i]+"'][value='"+o[arr[i]]+"']").attr("checked","checked");
						}
					}
					form[0]["Name"].value = o["Name"];
					form[0]["Condition"].value = decodeURIComponent(o["Condition"]).split("\t").join("\n");
					if (o["ContentType"]>0){
						var arr = fun(o["ContentType"]);
							form.find("input[name='_ContentType']").removeAttr("checked");
							for (var i=0,k=arr.length;i<k;i++){
								if (arr[i]>0){
									form.find("input[name='_ContentType'][value='"+arr[i]+"']").attr("checked","checked");
								}
							}
						form.find("input[name='__ContentType'][value='1']").attr("checked","checked").trigger("change");
					}
			},
			"del":function(){
				target.parent().parent().remove();
				$("#configboard").find("input").first().trigger("change");
			}
		};
		if (callback[target.attr("data-action")]){
			callback[target.attr("data-action")](event);
		}
	});
	/*
	$(".createTimeline").trigger("click");
	dialog.find(".btn").trigger("click");
	*/
});
