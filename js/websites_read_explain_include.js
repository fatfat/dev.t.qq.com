this.tpl = this.tpl || {};
var scroll = function(event, scroller) {
	var k = event.wheelDelta ? event.wheelDelta: -event.detail * 10;
	scroller.scrollTop = scroller.scrollTop - k;
	return false;
}

var jsonToString = function(o) {
	if (window.JSON) {
		return JSON.stringify(o);
	}

	var arr = [],
	format = function(s) {
		if (typeof s === "object" && s !== null) {
			if (s.length) {
				var sarr = [];
				for (var j = 0, jk = s.length; j < jk; j++) {
					sarr.push(format(s[j]));
				}
				return "[" + sarr.join(",") + "]";
			}
			return jsonToString(s);
		} else if (typeof s === "string") {
			return '"' + s + '"';
		} else if (typeof s === "number") {
			return s;
		} else {
			return s;
		}
	};
	for (var i in o) {
		arr.push(['"' + i + '"', format(o[i])].join(":"));
	}
	return "{" + arr.join(",") + "}";
};

var sty = ['html,body{font-size:12px;display:block;margin:0;padding:0;min-height:100%;height:100%;}', '.colorList li,.colorList1 li{float:left;height:40px;padding:4px;margin-bottom:8px;}', '.color1, .color2, .color3, .color4, .color5, .color6, .color7 {height: 36px;margin: 1px;width: 36px;}', '.colorList li, .colorList1 li{height:38px;padding:0;margin:4px 10px 0 0;border-radius:4px;}', '.colorList1 li.s{border: 4px solid #A8DE86;margin-top:0;}', '.addIcon{width:12px;line-height:12px;margin-right:10px;cursor:pointer;}', '.toExtend{cursor:pointer;font-size:14px;display:block;margin-left:49px;;color:#333;line-height:28px;}', '.comp_area h4{font-size:12px;font-weight:normal;color:#666;}', '.comp_area ul li{margin-left:66px;list-style:none;}',
//	'.comp_area a{font-size:14px;color:#666;font-weight:bold;display:block;}',
'#addMod{padding:2px;}', 'i{color:red;}', '.c_gray{color:gray;}', '.c_green{color:#0a0;}', '.list{position:absolute;right:0;top:0;width:250px;min-height:100%;overflow:hidden;background:#fff;text-align:left;font-size:12px;}', '.list strong{height:40px;line-height:40px;text-align:left;display:block;text-indent:10px;}', '.list a{display:block;text-align:left;height:36px;line-height:36px;color:#333;text-decoration:none;background:#fefefe;border-top:1px solid #ccc;border-bottom:1px solid #fff;text-indent:10px;}', '.list a:hover{background:#eee;border-top-color:#ccc;}', '.list p{margin:8px;}', '.configboard{width:250px;padding:0;position:absolute;top:0;left:0;text-align:left;font-size:12px;background:rgba(255,255,255,.5);min-height:100%;overflow:hidden;}',

'input,label{vertical-align:middle;}', '.panel{margin-bottom:10px;}', '.panel h4{margin:0;padding:0;font-size:12px;line-height:24px;}', '.panel p{color:#999;line-height:18px;}', '.theme{display:inline-block ;width:14px;height:14px;border:1px solid #000;margin-bottom:-2px;}', '.split-line{height:0;line-height:0;font-size:0;border-bottom:1px dotted #ccc;margin:10px 40px;}', '.dialog{width:600px;height:480px;background:#fff;border:1px solid #DADADA;position:fixed;top:50%;left:50%;margin:-240px 0 0 -212px;z-index:2;_ position:absolute;}', '.dialog ul{list-style:none;}', '.dialog .closeBtn{position:absolute;top:0;right:0;display:inline-block;text-decoration:none;color:#333;height:34px;line-height:34px;width:34px;text-align:center;}', '.tabbar{height:34px;text-align:left;text-indent:10px;', 'background:#FEFEFD;', 'background: -o-linear-gradient(top,#FEFEFD,#F0F0F1);', 'background: -moz-linear-gradient(top,#FEFEFD,#F0F0F1);', 'background: -webkit-gradient(linear, left top, left bottom, from(#FEFEFD), to(#F0F0F1));', 'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#FEFEFD", endColorstr="#F0F0F1");', 'border-bottom:1px solid #DADADA;', '}', '.tabbar .tab{height:26px;line-height:26px;padding:0 20px;display:inline-block;margin:8px 0 0;font-size:14px;color:#333;text-decoration:none;color:#666;text-indent:0;}', '.tabbar .active{background:#fff;border:1px solid #DADADA;border-bottom:none;color:#999;cursor:default;}', '.controls{text-align:right;padding:5px 35px;}', '.timeline{text-align:left;list-style:none;font:12px "宋体",Tahoma,Arial}', '.timeline dl{margin:20px 0 0 40px;}', '.timeline dt,.timeline dd{margin:0 0 5px;}', '.timeline dt{margin:10px 0 5px;color:#090;}', '.timelineList{list-style:none;margin:0;padding:0;width:372px;}', '.timelineList li{margin:10px 0;border:1px solid #DADADA;padding:5px;}', '.timelineList li .condition{font-size:12px;color:#090;word-break:break-all;}', '.btn{padding:5px 25px;}', '.none{display:none;}', '.code{margin:8px;border:1px solid #aaa;padding:5px;border-radius:3px;white-space:pre;word-break:break-all;word-wrap:break-word;}'].join("");

util.createStyle(sty);

tpl.websites_read_iframe = [
	'<a href="javascript:void(0);" class="closeBtn">&times;</a>',
	 '<div class="tabbar">', 
	'<a href="javascript:void(0);" class="tab active">话题</a>',
	'<a href="javascript:void(0);" class="tab">多用户</a>', 
	'<a href="javascript:void(0);" class="tab">关键词</a>', 
	'<!--<a href="javascript:void(0);" class="tab">url</a>-->', 
	'</div>', 
	'<div class="timelines">', 
	'<form class="timeline">', 
	'<dl>', 
	'<dt>时间线名称</dt>', 
	'<dd><input type="text" size="20" maxlength="8" data-rule="word" data-error="word" style="width:500px;" name="Name" value=""/><input type="hidden" name="ConditionType" value="1"/></dd>', 
	'<dt>指定话题，每行为一个话题，最多支持5个话题</dt>', 
	'<dd><textarea size="20" style="width:500px;" data-rule="word" data-error="word" name="Condition" rows="5"></textarea></dd>', 
	'<dt>排序方式</dt>', '<dd>', '<input type="radio" name="SortType" value="1" id="SortType4" checked/> <label for="SortType4">时间排序</label>', '<input type="radio" name="SortType" value="2" id="SortType5"/> <label for="SortType5">热度排序</label>', '<input type="radio" name="SortType" value="4" id="SortType6" disabled/> <label for="SortType6" class="c_gray">相关性排序(暂不支持)</label>', '</dd>', '<dt>名人筛选</dt>', '<dd>', '<input type="radio" name="Famous" value="0" id="Famous3" checked/> <label for="Famous3">不使用名人筛选</label>', '<input type="radio" name="Famous" value="1" id="Famous4"/> <label for="Famous4">使用名人筛选</label>', '</dd>', '<dt>正文类型</dt>', '<dd>', '<input type="hidden" name="ContentType" value="0"/>', '<input type="radio" name="__ContentType" value="0" id="ContentType3" checked/> <label for="ContentType3">所有</label>', '<input type="radio" name="__ContentType" value="1" id="ContentType4"/> <label for="ContentType4">自定义</label>', '<div class="content-type none">', '<input type="checkbox" name="_ContentType" value="2" id="_ContentType_5" checked/> <label for="_ContentType_5">包含url</label>', '<input type="checkbox" name="_ContentType" value="4" id="_ContentType_6" checked/> <label for="_ContentType_6">有图片</label>', '<input type="checkbox" name="_ContentType" value="8" id="_ContentType_7" checked/> <label for="_ContentType_7">有视频</label>', '<input type="checkbox" name="_ContentType" value="16" id="_ContentType_8" checked/> <label for="_ContentType_8">有音频</label>', '</div>', '</dd>', '<dt>消息类型</dt>', '<dd>', '<input type="radio" name="MessageType" value="0" id="MsgType4" checked/> <label for="MsgType4">所有</label>', '<input type="radio" name="MessageType" value="1" id="MsgType5"/> <label for="MsgType5">原创</label>', '<input type="radio" name="MessageType" value="2" id="MsgType6"/> <label for="MsgType6">转播</label>', '</dd>', '</dl>', '</form>', '<form class="timeline none">', '<dl>', '<dt>时间线名称</dt>', '<dd><input type="text" size="20" maxlength="8" style="width:500px;" data-rule="word" data-error="word" name="Name" value=""/><input type="hidden" name="ConditionType" value="2"/></dd>', '<dt>指定微博帐号，每行为一个微博帐号，最多支持10个</dt>', '<dd><textarea size="20" style="width:500px;" data-error="weibos" data-rule="weibos" name="Condition" rows="5"></textarea></dd>', '<dt>排序方式</dt>', '<dd>', '<input type="radio" name="SortType" value="1" id="SortType7" checked/> <label for="SortType7">时间排序</label>', '<input type="radio" name="SortType" value="2" id="SortType8" disabled/> <label for="SortType8" class="c_gray">热度排序(暂不支持)</label>', '<input type="radio" name="SortType" value="4" id="SortType9" disabled/> <label for="SortType9" class="c_gray">相关性排序(暂不支持)</label>', '</dd>', '<dt>名人筛选</dt>', '<dd>', '<input type="radio" name="Famous" value="0" id="Famous5" checked/> <label for="Famous5">不使用名人筛选</label>', '<input type="radio" name="Famous" value="1" id="Famous6"/> <label for="Famous6">使用名人筛选</label>', '</dd>', '<dt>正文类型</dt>', '<dd>', '<input type="hidden" name="ContentType" value="0"/>', '<input type="radio" name="__ContentType" value="0" id="ContentType5" checked/> <label for="ContentType5">所有</label>', '<input type="radio" name="__ContentType" value="1" id="ContentType6"/> <label for="ContentType6">自定义</label>', '<div class="content-type none">', '<input type="checkbox" name="_ContentType" value="2" id="_ContentType_9" checked/> <label for="_ContentType_9">包含url</label>', '<input type="checkbox" name="_ContentType" value="4" id="_ContentType_10" checked/> <label for="_ContentType_10">有图片</label>', '<input type="checkbox" name="_ContentType" value="8" id="_ContentType_11" checked/> <label for="_ContentType_11">有视频</label>', '<input type="checkbox" name="_ContentType" value="16" id="_ContentType_12" checked/> <label for="_ContentType_12">有音频</label>', '</div>', '</dd>', '<dt>消息类型</dt>', '<dd>', '<input type="radio" name="MessageType" value="0" id="MsgType7" checked/> <label for="MsgType7">所有</label>', '<input type="radio" name="MessageType" value="1" id="MsgType8"/> <label for="MsgType8">原创</label>', '<input type="radio" name="MessageType" value="2" id="MsgType9"/> <label for="MsgType9">转播</label>', '</dd>', '</dl>', '</form>', '<form class="timeline none">', '<dl>', '<dt>时间线名称</dt>', '<dd><input type="text" size="20" maxlength="8" data-rule="word" data-error="word" style="width:500px;" name="Name" value=""/><input type="hidden" name="ConditionType" value="0"/></dd>', '<dt>指定关键词，每行为一个关键词，最多添加5个</dt>', '<dd><textarea size="20" style="width:500px;" data-error="keyWords" data-rule="keyWords" name="Condition" rows="5"></textarea></dd>', '<dt>排序方式</dt>', '<dd>', '<input type="radio" name="SortType" value="1" id="SortType1" checked/> <label for="SortType1">时间排序</label>', '<input type="radio" name="SortType" value="2" id="SortType2"/> <label for="SortType2">热度排序</label>', '<input type="radio" name="SortType" value="4" id="SortType3"/> <label for="SortType3">相关性排序</label>', '</dd>', '<dt>名人筛选</dt>', '<dd>', '<input type="radio" name="Famous" value="0" id="Famous1" checked/> <label for="Famous1">不使用名人筛选</label>', '<input type="radio" name="Famous" value="1" id="Famous2"/> <label for="Famous2">使用名人筛选</label>', '</dd>', '<dt>正文类型</dt>', '<dd>', '<input type="hidden" name="ContentType" value="0"/>', '<input type="radio" name="__ContentType" value="0" id="ContentType1" checked/> <label for="ContentType1">所有</label>', '<input type="radio" name="__ContentType" value="1" id="ContentType2"/> <label for="ContentType2">自定义</label>', '<div class="content-type none">', '<input type="checkbox" name="_ContentType" value="2" id="_ContentType_1" checked/> <label for="_ContentType_1">包含url</label>', '<input type="checkbox" name="_ContentType" value="4" id="_ContentType_2" checked/> <label for="_ContentType_2">有图片</label>', '<input type="checkbox" name="_ContentType" value="8" id="_ContentType_3" checked/> <label for="_ContentType_3">有视频</label>', '<input type="checkbox" name="_ContentType" value="16" id="_ContentType_4" checked/> <label for="_ContentType_4">有音频</label>', '</div>', '</dd>', '<dt>消息类型</dt>', '<dd>', '<input type="radio" name="MessageType" value="0" id="MsgType1" checked/> <label for="MsgType1">所有</label>', '<input type="radio" name="MessageType" value="1" id="MsgType2"/> <label for="MsgType2">原创</label>', '<input type="radio" name="MessageType" value="2" id="MsgType3"/> <label for="MsgType3">转播</label>', '</dd>', '</dl>', '</form>', '</div>', '<div class="controls">', '<input type="button" class="btn" value="确定"/>', '</div>', ].join(" ");

tpl.websites_read_explain_include = [
	'<div class="form1 dialog none">', 
		tpl.websites_read_iframe, 
	'</div>', 
	
	'<div id="readView" style="border-radius:5px;border:1px solid #DEDEDE;position:absolute;right:40px;width:345px;">',
		'<h3 style="line-height:28px;font-size:14px;text-indent:10px;text-shadow: 1px 1px 0 #fff;font-weight:normal;">样式预览</h3>',
		'<div id="show" style="height:594px;border:none;">', 
			'<iframe width="345px" height="594px" frameborder="0"  marginwidth=0 marginheight=0 style="position:relative;" allowtransparency="true" src="about:blank" id="frame" srcolling="no"></iframe>',
		'</div>',
	'</div>',	
	
	'<div class="comp_area" id = "configboard" style="min-height:700px;overflow:hidden;">', 


	'<h2 class="comp_sub_tit">自定义配置</h2>',

	'<a href="javascript:void(0);" class="toExtend"><em class="addIcon">+</em>整体样式与风格配置</a>', 
	'<ul class="none">', 
		'<li>', 
		'<div class="panel">', 
		'<h4>阅读墙尺寸</h4>', 
		'<p>请根据页面填写所需组件大小百分比或像素值</p>', 
		'<i>*</i> <input type="text" name="width" data-rule="width" data-error="宽度" size="5" value="100%" /> <label>&times;</label> <input type="text" name="height" data-rule="height" data-error="高度" size="5" value="100%"/>', 
		'</div>', 
		'</li>', 
		'<li>', 
		'<div class="panel">', 
		'<h4>阅读墙背景</h4>', 
		'<input type="radio" name="theme" value="0" id="theme0" checked /> <label for="theme0" class="theme" style="background:#fff;border-color:#DADADA;"></label> ', 			
		'<input type="radio" name="theme" value="1" id="theme1" /> <label for="theme1" class="theme" style="background:#E5E5E5;border-color:#CFCFCF;"></label> ', 		
		'<input type="radio" name="theme" value="2" id="theme2" /> <label for="theme2" class="theme" style="background:#555555;border-color:#6F6F6F;"></label> ', 
		'<input type="radio" name="theme" value="3" id="theme3" /> <label for="theme3" class="theme" style="background:#333333;border-color:#4E4D4D;"></label><br/> ', 
		'<input type="radio" name="theme" value="4" id="theme4" /> <label for="theme4" class="theme" style="background:#F1FAFE;border-color:#CFE3EA;"></label> ', 		
		'<input type="radio" name="theme" value="5" id="theme5" /> <label for="theme5" class="theme" style="background:#DEF2FA;border-color:#B1DAEA;"></label> ', 
		'<input type="radio" name="theme" value="6" id="theme6" /> <label for="theme6" class="theme" style="background:#17375D;border-color:#334F70;"></label> ', 
		'<input type="radio" name="theme" value="7" id="theme7" /> <label for="theme7" class="theme" style="background:#E5FFDF;border-color:#CBE7C2;"></label><br/> ', 
		'<input type="radio" name="theme" value="8" id="theme8" /> <label for="theme8" class="theme" style="background:#F7E5F4;border-color:#EACEE5;"></label> ', 
		'<input type="radio" name="theme" value="9" id="theme9" /> <label for="theme9" class="theme" style="background:#241F3E;border-color:#48435D;"></label> ', 
		'<br /><input type="checkbox" name="nobg" id="nobg" /> <label for="nobg">背景色透明</label>', 
		'</div>', 
		'</li>', 
		'<li>', 
		'<div class="panel">', 
			'<h4>整体模块显示<span class="none"><input type="checkbox" id="AllModule" name="ModuleConfigure" checked/><label for="AllModule">全选</label></span></h4>', 
			'<input type="checkbox" id="TitleModule" name="TitleModule" checked/> <label for="TitleModule">标题栏</label> ', 
			'<input type="checkbox" id="PubModule" name="PubModule" checked/> <label for="PubModule">发表框</label><br/> ', 
			'<input type="checkbox" id="TabModule" name="TabModule" checked/> <label for="TabModule">页卡栏</label> ', 
			'<input type="checkbox" id="TimelineModule" name="TimelineModule" checked/> <label for="TimelineModule">时间线</label> ', 
			'</div>', 
		'</li>', 
	'</ul>',
	'<a href="javascript:void(0);" class="toExtend"><em class="addIcon">+</em>标题栏样式</a>', 
	'<ul class="none">', 
		'<li>', 
		'<div class="panel">', 
			'<h4>收听微博帐号</h4>', 
			'<input type="text" name="OfficialAccount" data-rule="appweibo" data-error="微博账号" placeholder="指定用户可收听的微博帐号" value="api_weibo"/>',
			 '</div>', 
		'</li>',
	'</ul>',

	'<a href="javascript:void(0);" class="toExtend"><em class="addIcon">+</em>消息发表框样式</a>', 
	'<ul class="none">', 
		'<li>', 
		'<div class="panel">', 
		'<h4>显示位置：</h4>', 
		'<input type="radio" name="position" value="0" id="position1" checked/> <label for="position1">居上</label> ', 
		'<input type="radio" name="position" value="1" id="position2" /> <label for="position2">居下</label> ', 
		'</div>', 
		'</li>', 
		'<li>', 
		'<div class="panel">', 
		'<h4>支持功能：</h4>', 
			'<input type="checkbox" name="InsertFunction" value="0" id="InsertFunction0" checked/> <label for="InsertFunction0">表情</label> ', 
			'<input type="checkbox" name="InsertFunction" value="1" id="InsertFunction1" checked/> <label for="InsertFunction1">图片</label> ', 
			'<input type="checkbox" name="InsertFunction" value="2" id="InsertFunction2" checked/> <label for="InsertFunction2">@好友</label> ', 
	'</div>', 
	'</li>', 
	'<li>', 
	'<div class="panel">',
	 '<h4>来源设置：</h4>', 
	 '<input type="text" name="SourceUrl" data-rule="applink" data-error="来源URL" placeholder="指定一个发表微博后会自动带上的url地址" value="http://dev.t.qq.com/websites/read/"/>', 
	 '</div>', 
	 '</li>', 
	 '<li>', 
		'<div class="panel">', 
			'<h4>默认展示文字：</h4>', 
			'<p>请为您的阅读墙填写默认的展示文字，最多不超过140个字</p>', 
			'<input type="text" name="InitialContent" data-rule="wordTip" data-error="默认展示文字" placeholder="指定发表框默认显示的内容" value="#阅读墙测试# 说点什么吧"/>', 
		'</div>', 
	'</li>', 
	'</ul>',

'<a href="javascript:void(0);" class="toExtend"><em class="addIcon">+</em>时间线样式与内容</a>', '<ul class="none">', '<li>', '<div class="panel">', '<h4>时间线样式</h4>', '<input type="radio" name="PageStyle" value="0" id="PageStyle0" checked/> <label for="PageStyle0">固定高度</label><br/> ', '<input type="radio" name="PageStyle" value="1" id="PageStyle1"/> <label for="PageStyle1">上墙模式</label><br/> ', '<input type="radio" name="PageStyle" value="2" id="PageStyle2"/> <label for="PageStyle2">自定义高度</label> ', '</div>', '</li>', '<li>', '<div class="panel">', '<h4>时间线每次拉取微博数量</h4>',
//	'<input type="number" name="TwitterNum" placeholder="每页多少条微博(1-20)" value="20" max="20" min="1"/>',
'<select name="TwitterNum" style="display:block" data-rule="app_class_main" data-error="请选择分类">', '<option value="5">5条</option>', '<option value="10">10条</option>', '<option value="20" selected>20条</option>', '<option value="50">50条</option>', '<option value="80">80条</option>', '<option value="100">100条</option>', '</select>', '</div>', '</li>', '<li>', '<div class="panel">', '<h4>图片显示：</h4>', '<input type="radio" name="PicStyle" value="0" id="PicStyle0" checked/> <label for="PicStyle0">图片</label> ', '<input type="radio" name="PicStyle" value="1" id="PicStyle1"/> <label for="PicStyle1">缩略图</label>', '</div>', '</li>', '<li>', '<div class="panel">', '<h4>头像显示：</h4>', '<input type="checkbox" name="HeadStyle" value="0" id="HeadStyle" checked/> <label for="HeadStyle">显示用户头像</label>', '</div>', '</li>', '</ul>',

'<a href="javascript:void(0);" class="toExtend"><em class="addIcon">+</em>垃圾消息过滤设置</a>', '<ul class="none">', '<li>', '<div class="panel">', '<h4>过滤关键词</h4>', '<p>填写您要过滤的关键字/词/url，最多填写20个</p>', '<textarea size="20"  name="filter" data-error="关键词" data-rule="keyWords" rows="5"></textarea>', '</div>', '</li>', '<li>', '<div class="panel">', '<h4>过滤用户</h4>', '<p>填写您要过滤的用户微博帐号，最多填写20个</p>', '<textarea size="20" name="filter" data-error="微博账号" data-rule="appWeibos"  rows="5"></textarea>', '</div>', '</li>', '</ul>',

//自定义模块里的内容
'<div class="split-line"></div>',

'<a href="javascript:void(0);" class="toExtend"><em class="addIcon">+</em>添加自定义模块</a>', '<ul class="none">', '<li style="list-style:none outside none;">', '<div class="panel">', '<input type="button" value="添加自定义模块" id="addMod" class="btn createTimeline" data-action="createTimeline">', '</div>', '</li>', '</ul>',

'<ul id="timelineList" class="timelineList"></ul>'].join("");

var _width = 345;
var _height = 590;
var _opt = 7;
var comp_type = 3;

eventBindFuncList.push(function() {
	$('.toExtend').click(function() {
		if ($(this).children('.addIcon').html() == "+") {
			$(this).next('ul').css("display", "block");
			$(this).children('.addIcon').html('-');
		} else {
			$(this).next('ul').css("display", "none");
			$(this).children('.addIcon').html('+');
		}
	});
});
/*
var	submitTimelineInfo = function(){
		var t = $("#timelineList"),arr = [];
			t.find("li").each(function(){
				var li = $(this),attrs = ["Name","ConditionType","Condition","SortType","Famous","ContentType","MessageType"],timeline = {};
				for (var i in attrs){
					if (attrs[i] === "Condition"){
						timeline[attrs[i]] = encodeURIComponent(li.attr(attrs[i]));
					}else{
						timeline[attrs[i]] = li.attr(attrs[i]);
					}
				}
				arr.push(timeline);
			});
			return arr;
	}*/
function makeFilter() {
	var filter = {
		"updateTime": new Date().getTime(),
		"userIds": [],
		"keyWords": []
	};
	var userIds = $("textarea[name='filter']")[1].value.split(/\n+/);
	for (var i in userIds) {
		filter.userIds.push(userIds[i]);
	}

	var keyWords = $("textarea[name='filter']")[0].value.split(/\n+/);
	for (var i in keyWords) {
		filter.keyWords.push(encodeURIComponent(keyWords[i]));
	}
	return filter;
}

function formSubmit() {
	if ($("#showcode").attr("disabled")) {
		return;
	}

	var comp_style_json = makeCompStyle();
	var paras = {
		"comp_type": 9,
		//组件类型 1、'一键分享',2'批量收听',3'话题墙',4'Q-Share',5'心情板'
		"comp_style": jsonToString(comp_style_json)
	};

	if (window.comp && comp.comp_id) {
		paras["comp_id"] = comp.comp_id;
	}
	if ($("#comp_url").size() && $("#comp_name").size()) {
		paras["comp_url"] = encodeURIComponent($("#comp_url").val());
		paras["comp_name"] = encodeURIComponent($("#comp_name").val());
	};
	if (window.comp) {
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

function makeCompStyle() {
	var form = $("#configboard");
	var compConfig = {
		"width": $('input[name=width]').val(),
		"height": $('input[name=height]').val(),
		"appkey": window.comp && comp.comp_id ? comp.comp_id: "801351684",
		"theme": +$("input[name='theme']:checked").val(),
		"nobg": +$("input[name='nobg']")[0].checked,
		"ModuleConfigure": {
			"TitleModule": +$('#TitleModule')[0].checked,
			"PubModule": +$('#PubModule')[0].checked,
			"TabModule": +$('#TabModule')[0].checked,
			"TimelineModule": +$('#TimelineModule')[0].checked
		},
		"TimelineDetail": {
			"HeadStyle": +$("#HeadStyle").is(":checked"),
			"PageStyle": +form.find("input[name='PageStyle']:checked").val(),
			"PicStyle": +form.find("input[name='PicStyle']:checked").val(),
			"TwitterNum": +$('select[data-error="请选择分类"]').val()
		},
		"PubModuleConfigure": {
			"InitialContent": form.find("input[name='InitialContent']").val(),
			"InsertFunction": (function(a) {
				var arr = [];
				a.each(function() {
					arr.push( + $(this).val());
				});
				return arr;
			})(form.find("input[name='InsertFunction']:checked")),
			"SourceUrl": form.find("input[name='SourceUrl']").val(),
			"position": +form.find("input[name='position']:checked").val()
		},
		"TitleModuleConfigure": {
			"OfficialAccount": form.find("input[name='OfficialAccount']").val()
		},
		"TimelineModuleConfigure": (function(lis) {
			var arr = [];
			lis.each(function() {
				var conf = {},
				li = $(this);
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
		})($("#timelineList").find("li")),
		"filter": makeFilter()
	};
	return compConfig;
}

util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/comp_validate.js",
function() {
	bindAllEvent();
});

var getConfigInfo = function() {
	var form = $("#configboard"),
	//获取配置面板
	//		f = $(form),
	param = {};
	param["config"] = (function(arr) {
		//			arr.push(form["appkey"].value);
		arr.push(window.comp && comp.comp_id ? comp.comp_id: "801351684");
		arr.push(form.find("[name='theme']:checked").val());
		arr.push( + form.find("[name='nobg']")[0].checked);
		arr.push([ + form.find("[name='ModuleConfigure']")[0].checked, +form.find("[name='TitleModule']")[0].checked, +form.find("[name='PubModule']")[0].checked, +form.find("[name='TabModule']")[0].checked, +form.find("[name='TimelineModule']")[0].checked].join(""));
		arr.push(form.find("[name='PageStyle']:checked").val());
		arr.push(form.find("[name='PicStyle']:checked").val());
		arr.push( + form.find("[name='HeadStyle']").is(":checked"));
		arr.push(form.find("[name='TwitterNum']").val());
		arr.push((function(_arr) {
			form.find("[name='InsertFunction']:checked").each(function() {
				_arr.push($(this).val());
			});
			return _arr.join("");
		})([form.find("[name='position']:checked").val()]));
		return arr.join("-");
	})([]);
	param["account"] = form.find("[name='OfficialAccount']").val();
	param["sendbox"] = [encodeURIComponent(form.find("[name='SourceUrl']").val()), encodeURIComponent(form.find("[name='InitialContent']").val())].join("|");
	return param;
},
getTimelineInfo = function() {
	var t = $("#timelineList"),
	arr = [];
	t.find("li").each(function() {
		var li = $(this),
		attrs = ["Name", "ConditionType", "Condition", "SortType", "Famous", "ContentType", "MessageType"],
		timeline = [];
		for (var i in attrs) {
			if (attrs[i] === "Condition") {
				timeline.push(encodeURIComponent(li.attr(attrs[i])));
			} else {
				timeline.push(li.attr(attrs[i]));
			}
		}
		arr.push(timeline.join("\t"));
	});
	return arr.join("\n") || "0";
},
onIframeload = function(iframe) {
	var onMessage = function(event) {
		var d = event.data;
		if (/^\d+$/.test(d) && iframe.height != ( + d)) {
			iframe.height = d;
		}
	};
	if (window.postMessage) {
		if (window.addEventListener) {
			window.addEventListener('message', onMessage);
		} else {
			window.attachEvent("onmessage", onMessage);
		}

	} else {
		var win = iframe.contentWindow,
		h = 0;
		setInterval(function() {
			var name = window.name;
			if (/^\d+$/.test(name) && ( + name) !== h) {
				iframe.height = +name;
				h = +name;
			}
		},
		2000);
	}
};

//$(function(){
var showTimeLine = function(event) {
	var dialog = $(".dialog"),
	f = dialog.find("form").not(".none"),
	timelineList = $("#timelineList"),
	form = f[0],
	li,
	param = {};
	param["Name"] = form["Name"].value;
	param["ConditionType"] = form["ConditionType"].value;
	param["Condition"] = form["Condition"].value.replace(/^\s*|\s*$|\t*/g, "").split(/[\s\t]*\n+[\s\t]*/g).slice(0, 5).join("\t");
	param["SortType"] = f.find("input[name='SortType']:checked").val();
	param["Famous"] = f.find("input[name='Famous']:checked").val();
	param["ContentType"] = f.find("input[name='ContentType']").val();
	param["MessageType"] = f.find("input[name='MessageType']:checked").val();
	if (param["Name"] && param["Condition"]) {
		dialog.addClass("none");
		if (f.parent().attr("editId")) {
			li = timelineList.find("li:eq(" + f.parent().attr("editId") + ")");
		} else {
			li = $('<li></li>').appendTo(timelineList);
		}
		for (var i in param) {
			li.attr(i, param[i]);
		}
		var conditionType = {
			"0": "关键词",
			"1": "话题",
			"2": "多用户",
			"3": "多URL"
		} [param["ConditionType"]];
		li.html(conditionType + ": " + param["Name"] + '</div></div><div><a href="javascript:void(0);" data-action="edit">修改</a> <a href="javascript:void(0);" data-action="del">删除</a></div>');
		//	li.html(param["Name"]+'<div class="condition">'+param["Condition"]+'</div></div><div><a href="javascript:void(0);" data-action="edit">修改</a> <a href="javascript:void(0);" data-action="del">删除</a></div>');
	} else if (!param["Condition"]) {
		dialog.addClass("none");
	}
	$("#configboard").find("input").first().trigger("change");
	f.parent().removeAttr("editId");
},
getContentType = function(selector) {
	var val = 0x0;
	selector.find(":checked").each(function() {
		var value = +$(this).val();
		val = val | value;
	});
	return val;
};

eventBindFuncList.push(function() {
	var dialog = $(".dialog");
	$("input[name='__ContentType']").change(function() {
		var t = $(this),
		val = +t.val(),
		selector = t.siblings(".content-type"),
		target = t.siblings("input[name='ContentType']");
		if (val === 0) {
			selector.addClass("none");
			target.val(0);
		} else {
			selector.removeClass("none");
			target.val(getContentType(selector));
		}
	});

	$("input[name='_ContentType']").change(function() {
		var t = $(this),
		target = t.parent().siblings("input[name='ContentType']"),
		tval = getContentType(t.parent());
		target.val(tval);
	});

	$(".createTimeline").click(function() {
		$(".dialog").removeClass("none")
	});

	dialog.find(".tab").bind("click",
	function() {
		var t = $(this),
		i = t.index();
		t.addClass("active").siblings().removeClass("active");
		dialog.find(".timeline:eq(" + i + ")").removeClass("none").siblings().addClass("none");
	});
	dialog.find(".closeBtn").bind("click",
	function() {
		$(this).parent().addClass("none");
	});
	dialog.find(".btn").bind("click", showTimeLine);

	$("#configboard").find("input").change(function() {
		var iframe = $("#frame"),
		frame = iframe.get(0),
		form = $("#configboard"),
		pageStyle = +$("#configboard").find("[name='PageStyle']:checked").val(),
		sendMsg = function(win, msg) {
			if (win.postMessage) {
				win.postMessage(msg, "*");
			} else {
				win.name = msg;
			}
			if (pageStyle === 2) {
				onIframeload(iframe[0]);
			}
			/*	if (window.localStorage && msg !== "0"){
					localStorage.setItem("timelineInfo",msg);
				}*/
		},
		onFrameLoad = function() {
			var win = frame.contentWindow,
			msg = getTimelineInfo();
			sendMsg(win, msg);
			return false;
		};

		if (window.postMessage) {
			if (document.all) {
				frame.onreadystatechange = function() {
					if (frame.readyState === "complete") {
						onFrameLoad();
					}
				}
			} else {
				frame.onload = onFrameLoad;
			}
		} else {
			frame.onreadystatechange = function() {
				if (frame.readyState === "complete") {
					onFrameLoad();
				}
			}
		}
		iframe.attr("src", "http://read.v.t.qq.com?" + $.param(getConfigInfo())).attr("width", form.find("[name='width']").val()).attr("height", form.find("[name='height']").val());

		if (window.localStorage) {
			localStorage.setItem("configInfo", getConfigInfo());
		}

		//		buildCode(+new Date());
	})
	/*.last().trigger("change")*/
	;

	(function(storage) {
		if (storage) {
			var timelineInfo = storage.getItem("timelineInfo"),
			configInfo = storage.getItem("configInfo"),
			arr,
			o = {};

			/*	if (timelineInfo){
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
						var conditionType = {"0":"关键词","1":"话题","2":"多用户","3":"多URL"}[o["ConditionType"]];
						for (var n in o){
							li.attr(n,o[n].toString()).html(conditionType + ": " + o["Name"] + '</div></div><div><a href="javascript:void(0);" data-action="edit">修改</a> <a href="javascript:void(0);" data-action="del">删除</a></div>');
					//		li.attr(n,o[n].toString()).html(o["Name"]+'<div class="condition">'+ o["Condition"].toString() +'</div><div><a href="javascript:void(0);" data-action="edit">修改</a> <a href="javascript:void(0);" data-action="del">删除</a></div>');
						}
						o = {};
					}
				}*/
			$("#configboard").find("input").first().trigger("change");
		} else {
			$("#configboard").find("input").first().trigger("change");
		}
	})(window.localStorage);

	$("#timelineList").bind("click",
	function(event) {
		var target = $(event.target),
		callback = {
			"edit": function() {
				var li = target.parent().parent(),
				params = ["Name", "ConditionType", "Condition", "SortType", "Famous", "ContentType", "MessageType"],
				o = {},
				form,
				fun = function(i) {
					return [i & 2, i & 4, i & 8, i & 16];
				};
				for (var i in params) {
					if (typeof params[i] === "string") {
						if (["Name", "Condition"].toString().indexOf(params[i]) > -1) {
							o[params[i]] = li.attr(params[i]);
						} else {
							o[params[i]] = +li.attr(params[i]);
						}
					}
				}
				dialog.removeClass("none").find(".tab:eq(" + o["ConditionType"] + ")").trigger("click");
				form = dialog.find(".timeline").not(".none");
				form.parent().attr("editId", li.index());
				for (var arr = ["ConditionType", "SortType", "Famous", "ContentType", "MessageType"], i = 0, k = arr.length; i < k; i++) {
					if (typeof arr[i] === "string") {
						form.find("input[name='" + arr[i] + "'][value='" + o[arr[i]] + "']").attr("checked", "checked");
					}
				}
				form[0]["Name"].value = o["Name"];
				form[0]["Condition"].value = decodeURIComponent(o["Condition"]).split("\t").join("\n");
				if (o["ContentType"] > 0) {
					var arr = fun(o["ContentType"]);
					form.find("input[name='_ContentType']").removeAttr("checked");
					for (var i = 0, k = arr.length; i < k; i++) {
						if (arr[i] > 0) {
							form.find("input[name='_ContentType'][value='" + arr[i] + "']").attr("checked", "checked");
						}
					}
					form.find("input[name='__ContentType'][value='1']").attr("checked", "checked").trigger("change");
				}
			},
			"del": function() {
				target.parent().parent().remove();
				$("#configboard").find("input").first().trigger("change");
			}
		};
		if (callback[target.attr("data-action")]) {
			callback[target.attr("data-action")](event);
		}
	});
});
/*
	$(".createTimeline").trigger("click");
	dialog.find(".btn").trigger("click");
	*/
//});
