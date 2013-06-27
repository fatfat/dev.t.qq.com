var websites_login = [
this.tpl.header,
'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20130308" rel="stylesheet" type="text/css" />',
'<div class="wrapper breadcast">',
	'<a href="/">腾讯微博开放平台</a> &gt; <a href="/websites">网站接入</a> &gt; <span>登录按钮</span>',
'</div>',
'<div id="content" class="wrapper main main_comp">',
	this.tpl.websites_appnav,
	'<script type="text/javascript">',
		'QosSS.t[3]= (new Date()).getTime;',
	'</script>',
	'<div class="appsArea2">',
		'<h1 class="comp_tit">微博账号登录 获得海量高质量用户</h1>',
		'<h2 class="comp_sub_tit">组件介绍</h2>',
		'<dl class="comp_intr login_intr">',
			'<dt>功能说明：</dt>',
			'<dd class="gray">在您的网站上嵌入一段代码，即可获得微博登录按钮，用户可以使用腾讯微博账号登录您的网站，并与您网站自身的账号体系进行绑定。</dd>',
			'<!--{*<dd class="video_demo"><span class="icon_video"></span><a href="" class="valign demo_video">视频演示</a></dd>*}-->',
        	'<!--{*<dd><a href="?explain=1" class="btn_newcomp" title="立即使用">立即使用</a></dd>*}-->',
        	'<dd><a href="http://open.t.qq.com/open-js/doc/" title="立即使用" class="btn_newcomp" target="_blank">立即使用</a></dd>',
		'</dl>',
		'<h2 class="comp_sub_tit">使用案例</h2>',
		'<div class="comp_demos">',
			'<p class="f14">目前已有超过1000家网站添加了腾讯微博登录按钮</p>',
			'<dl class="comp_login_demo comp_demo_tudou">',
				'<dt class="f14">视频网站</dt>',
				'<dd class="gray">土豆视频网站在登录页面上加入腾讯微博登录，可以迅速获取高质量用户和好友关系链，通过微博分享，增加视频曝光和点击率，给网站带去回流。</dd>',
			'</dl>',
			'<dl class="comp_login_demo comp_demo_meilishuo">',
				'<dt class="f14">电商网站</dt>',
				'<dd class="gray">用腾讯微博登录美丽说，可以快速方便地分享用户喜好的商品给微博好友，为美丽说带去访客的同时增加销量。</dd>',
			'</dl>',
			'<dl class="comp_login_demo comp_demo_tianya">',
				'<dt class="f14">咨询网站</dt>',
				'<dd class="gray">天涯是全球最大的中文社区网站，接入腾讯微博登录，与好友共享优质的社区内容。</dd>',
			'</dl>',
		'</div>',
	'</div>',
'</div>',
this.tpl.footer
].join("");
$("#main").append(tmpl(websites_login,global_obj.data));
util.setLoginInfo();
bindAllEvent();
window.init();
QosSS.c = new Image();
QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
QosSS.t[5]= (new Date()).getTime();
QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_ws_index"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
