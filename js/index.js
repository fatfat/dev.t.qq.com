	QosSS.c = new Image();
	 QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	 QosSS.t[5]= (new Date()).getTime();
	 QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_index"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);

var indexTmpl = [
	tpl.header,
	'<link href="http://mat1.gtimg.com/app/opent/css/index/index_02.css" rel="stylesheet" type="text/css"/>',
		
	'<ul class="notice_index none">',
		'<li>',
			'<span id="notice"></span>',
			'<cite id="cite"></cite>',
		'</li>',
		'<a href="javascript:;" title="关闭" class="notice_index_close">&times;</a>',
	'</ul>',

	'<div class="banner_area">',
		'<ul class="banner_lists">',
		/*	'<li class="banner_li banner_bg_1" style="z-index:999;">',
				'<img class="banner" src="http://mat1.gtimg.com/app/opent/images/index/banner_1.jpg" width="1088px" height="365px" alt=""/>',
			'</li>',*/
			'<li class="banner_li banner_bg_1">',
				'共享海量用户与资源 5亿多的微博用户 40多万的开发者 30多万的应用',
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

var getNoticeInfo = function(){ 
	$.ajax({
		  url: "/pipes/interfaceserver",
		  dataType: "json",
		  data: {"action":"common_query","business_type":"moreinfolist","page":1},
		  cache: false,
		  success: function(ResponseData){ 
		  	if(!ResponseData) {
		  		$('#notice').html('<a href="http://wiki.open.t.qq.com/index.php/API文档/地震数据API " title="腾讯微博开放全量地震相关数据，供救援寻人使用。" target="_blank" hidefocus>腾讯微博开放全量地震相关数据，供救援寻人使用。</a>');
				$('#cite').html('2013-04-22');
				return false;
		  	}
		  	var data = ResponseData.data && ResponseData.data.pagelist && ResponseData.data.pagelist[0];
		  	 if(+ResponseData.ret != 0 || !data || !(data.link && data.title && data.pubDate)){
		  	 	$('#notice').html('<a href="http://wiki.open.t.qq.com/index.php/API文档/地震数据API " title="腾讯微博开放全量地震相关数据，供救援寻人使用。" target="_blank" hidefocus>腾讯微博开放全量地震相关数据，供救援寻人使用。</a>');
				$('#cite').html('2013-04-22');
		  	 	return false;
		  	 }
			$('#notice').html('<a href=\"' + data.link + '\" title=\"' + data.title + '\" target=\"_blank\" hidefocus>' + data.title + '</a>');
			$('#cite').html(data.pubDate);
		  },
  		  error:function(){}
	})
} 

$(function(){
	getNoticeInfo();
	
	var showIndexNotice = +common.store.get("showIndexNotice"),
	notice_list = $(".notice_index"),
	notice_closeBtn = notice_list.find(".notice_index_close"),
	notice_time = +new Date(notice_list.find("li:eq(0)").find("cite").html().replace(/\-/g,"/"));
		
	notice_closeBtn.click(function(){
		notice_list.addClass("none");
		common.store.set("showIndexNotice",notice_time);
	});
	if(showIndexNotice == 0 || showIndexNotice != notice_time){
		notice_list.removeClass("none");
	}
	
	userInfo = global_obj.data.userInfo || {};
	util.setLoginInfo();
	window.init();
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