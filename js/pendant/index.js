;(function(){
	QosSS.t[2]= (new Date()).getTime();	
	QosSS.t[3]= (new Date()).getTime();
	$(this).util = $(this).util || {};
	var str = [
		'<style type="text/css">',
		'img.share01,img.share02{ background:url(http://mat1.gtimg.com/app/opent/images/websites/pendant/f1.gif) no-repeat; vertical-align:bottom;margin-right:5px;}',
		'img.share02{ background-position:0 -90px;}',
		'.demolist{width:680px; display:inline-block;}',
		'.demolist a{display:inline-block;float:left;width:96px; text-align:center;}',
		'.demolist a.demo2{margin-left:200px;}',
		'.demolist a.demo3{float:right;}',
		'.demolist a img{ background:url(http://mat1.gtimg.com/app/opent/images/websites/pendant/f3.gif) no-repeat;margin:15px 0 0;}',
		'.demolist a.demo2 img{background-position:-88px 0;}',
		'.demolist a.demo3 img{background-position:-183px 0;}',
		'.demolist a img{display:block;}',
		'</style>',
		'<!--[if IE 6]> ',
		'<style>',
		'#content{',
			'clear:both;',
			'overflow:hidden;',
		'}',
		'</style>',
		'<![endif]-->',
	]
	util.createStyle(str);
	$(this).tpl = $(this).tpl || {};
	QosSS.t[4]= (new Date()).getTime();
	tpl.index = [
		'<!--{ include file="header.tpl" }-->',
		tpl.header,
		'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />',
		'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/> ',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/public/ex.css" type="text/css" rel="stylesheet"> ',
		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>微博广播站</span></div>',
		'<div id="content" class="wrapper main main_comp">',
		'<!--{ include file="./websites/appnav.tpl" }-->',
		tpl.appnav,
	
		'<div class="appsArea2">',
				'<div class="appDescription">',
					'<img src="http://mat1.gtimg.com/app/opent/images/websites/3.gif" alt="微博广播站"/>',
					'<div>',
						'<h1>广播站</h1>',
						'<p>使用微博广播站，将生成的代码放置到你的博客、网站或其他支持html代码的位置，不仅可以展示你的最新20条广播，登录腾讯微博后，你还可以直接在这里写微博，让更多人了解和收听你。</p>',
						'<div><a href="/websites/pendant?explain=1" title="立即使用" class="devSubmit">立即使用</a></div>',
					'</div>',
				'</div>',
				'<h3 class="hbline"><strong>使用微博广播站有什么好处？</strong></h3>',
				'',
				'<div class="appDescription"><img src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" class="share01" width="150" height="86"/><h3>1. 随时随地发表微博</h3><p>用户本人登录腾讯微博后，可在任意嵌入的微博广播站的页面中，发表微博消息到腾讯微博。</p></div>',
		'<br/>',
				'<div class="appDescription"><img src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" class="share02" width="150" height="80"/><div style="float:left;width:480px;"><h3>2. 向访问你的博客或网站的用户，展示最新发表的微博内容，并提供一键收听功能</h3><p>微博广播站可向访问你的博客或网站的用户，展示微博个人信息，最新发表的微博消息，并可通过点击查看微博消息，访问你的腾讯微博页面，其他微博用户查看你的微博秀，可看到“立即收听”按钮，点击一键收听你的腾讯微博帐号。</p></div></div>',
				'<h3 class="hbline"><strong>如何使用微博广播站?</strong></h3>',
				'<p class="p">按照以下步骤操作，就能在你的博客或网页中使用微博广播站:</p>',
				'<ul class="p">',
		'<li><strong>第一步: </strong> 访问腾讯微博微博广播站代码获取页面 <a href="/websites/pendant?explain=1">立即访问</a></li>',
		'<li><strong>第二步: </strong> 登录你的微博帐号</li>',
		'<li><strong>第三步: </strong> 复制微博广播站代码，粘贴到需要添加微博广播站的位置，就能在网页中显示你的微博广播站了。</li>',
		'</ul>',
				'<h3 class="hbline"><strong>微博广播站的显示内容</strong></h3>		',
				'<p class="p">微博广播站显示内容如下图所示，可定制仅显示其中的部分模块。</p>',
		'<p class="p"><img src="http://mat1.gtimg.com/app/opent/images/websites/pendant/f2.gif" /></p>',
				'',
		'<h3 class="hbline"><strong>应用图示</strong></h3><br/>',
		'<p class="p">',
		'<img src="http://mat1.gtimg.com/app/opent/images/websites/pendant/f3.gif" align="top"  class="view" path="http://mat1.gtimg.com/app/opent/images/websites/pendant/f6.gif"/>',
		'<img src="http://mat1.gtimg.com/app/opent/images/websites/pendant/f4.gif" hspace="100" align="top"  class="view" path="http://mat1.gtimg.com/app/opent/images/websites/pendant/f7.gif"/>',
		'<img src="http://mat1.gtimg.com/app/opent/images/websites/pendant/f5.gif" align="top"  class="view" path="http://mat1.gtimg.com/app/opent/images/websites/pendant/f8.gif"/>',
		'<br /><br />',
		'</p>',
			'</div>',
			'</div>',
		tpl.footer,
	].join("");
	$('#main').html(tmpl(tpl.index,data));	
	QosSS.c = new Image();
	QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	QosSS.t[5]= (new Date()).getTime();
	QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wpendant_index"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
})();