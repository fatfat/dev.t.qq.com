	QosSS.c = new Image();
	 QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	 QosSS.t[5]= (new Date()).getTime();
	 QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_index"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);

var indexTmpl = [
	tpl.header,
	'<link href="http://mat1.gtimg.com/app/opent/css/index/index_01.css" rel="stylesheet" type="text/css"/>',
	'<div class="banner_area">',
		'<ul class="banner_lists">',
			'<li class="banner_li banner_bg_1" style="z-index:999;">',
				'<img class="banner" src="http://mat1.gtimg.com/app/opent/images/index/banner_1.jpg" width="1088px" height="365px" alt=""/>',
			'</li>',
		'</ul>',
	'</div>',
	'<div class="wrapper main">',
		'<a class="connect" href="/websites/">',
			'<div class="con_img websites_img" width="117px" height="116px"></div>',
			'<strong class="con_title">网站接入</strong>',
			'<p class="con_intro">使用微博登录、一键分享等组件<br/>一步接入社会化网络</p>',
			'<div class="split"></div>',
		'</a>',	
		'<a class="connect" href="/wireless/">',
			'<div class="con_img wireless_img" width="124px" height="116px"></div>',
			'<strong class="con_title">无线接入</strong>',
			'<p class="con_intro">利用丰富的无线组件和接口<br/>实现移动站点和客户端应用的接入</p>',
			'<div class="split"></div>',
		'</a>',	
		'<a class="connect" href="/developer/" >',
			'<div class="con_img webpage_img" width="128px" height="116px"></div>',
			'<strong class="con_title">应用开发</strong>',
			'<p class="con_intro">打造创新web应用<br/>服务亿万用户</p>',
		'</a>',	
	'</div>', 
		this.tpl.footer	
].join("");
$('#main').html(tmpl(indexTmpl,global_obj.data));
$(function(){
	//首页三大应用接入mouseover效果
	$(".connect").mouseover(function(){
		var _this = $(this),
			_con_img = _this.find(".con_img");
		_con_img.removeClass("opacityadd").addClass("opacityminus");
		_this.addClass("con_hover");		
	}).mouseout(function(){
		var _this = $(this),
			_con_img = _this.find(".con_img");
		_con_img.removeClass("opacityminus").addClass("opacityadd");
		_this.removeClass("con_hover");
		
	})
});