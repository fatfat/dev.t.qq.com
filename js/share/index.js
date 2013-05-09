;(function(){
	QosSS.t[2]= (new Date()).getTime();
	$(this).tpl = $(this).tpl || {};
	var tpl.index = [
		'<!--{ include file="header.tpl" }-->',
		tpl.header,
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/> ',
			'<div class="wrapper breadcast">',
			'<a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>一键分享</span>',
			'</div>',
			'<div id="content" class="wrapper main main_comp main_comp">',
			'<!--{ include file="./websites/appnav.tpl" }-->',
			tpl.appnav,
		'<div class="appsArea2">',
				'<h1 class="comp_tit">一键分享到微博 迅速提升网站流量</h1>',
		'<h2 class="comp_sub_tit">组件介绍</h2>',
		'<dl class="comp_intr share_intr">',
			'<dt>功能说明：</dt>',
			'<dd class="gray">将一键分享按钮嵌入到网站里，网站访客点击按钮就能将网页名称+网址+指定图片，转发到腾讯微博，分享给他们的听众，增加网站的访问流量。</dd>',
			'<!--{*<dd class="video_demo"><span class="icon_video"></span><a href="" class="valign demo_video">视频演示</a></dd>*}-->',
			'<dd><a href="?explain=1" class="btn_newcomp" title="立即使用">立即使用</a></dd>',
		'</dl>',
		'<h2 class="comp_sub_tit">使用案例</h2>',
			'<div class="comp_demos">',
			'<p class="f14">目前已有超过了1000家网站添加了腾讯微博一键分享按钮。</p>',
			'<dl class="comp_demo comp_demo_youku">',
				'<dt class="f14">视频网站</dt>',
				'<dd class="gray">优酷视频网站在视频详情页增加一键分享按钮，让用户可以向TA的听众分享好玩好看好笑的视频，增加视频的曝光量，同时增加视频的点击率，给优酷网站至少每天带去20倍的回流。</dd>',
			'</dl>',
			'<dl class="comp_demo comp_demo_360buy">',
				'<dt class="f14">电商网站</dt>',
				'<dd class="gray">京东商城在物品详情页增加一键分享，让浏览该页面的用户可以向TA的听众介绍该款商品，通过良好的分享体验，增加商品的曝光量，通过点击来源形成用户回流而提高订单量。</dd>',
			'</dl>',
			'<dl class="comp_demo comp_demo_qq">',
				'<dt class="f14">资讯网站</dt>',
				'<dd class="gray">腾讯网通过一键分享，方便而快捷的让更多的用户浏览到腾讯的新闻，使新闻的传播效率和广度大大提升。</dd>',
			'</dl>',
		'</div>',
		'</div>  ',
		'</div>',
		'<!--{ include file="footer.tpl" }-->',
		tpl.footer,
	].join("");
	QosSS.t[3]= (new Date()).getTime();
	$('#main').html(tmpl(tpl.index,data));
	QosSS.c = new Image();
	QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	QosSS.t[5]= (new Date()).getTime();
	QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_ws_index"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
})();