;(function(){
	QosSS.t[2]= (new Date()).getTime();
	tpl.wrapper = [
		'<!--{ include file="header.tpl" }-->',
		tpl.header,
		'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />',
		'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/public/ex.css" type="text/css" rel="stylesheet"> ',
		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>微博秀</span></div>',
		'<div id="content" class="wrapper main main_comp">',
		'<!--{ include file="./websites/appnav.tpl" }-->',
		tpl.appnav,
		'<div class="appsArea2">',
			'<div class="appDescription">',
				'<img src="http://mat1.gtimg.com/app/opent/images/websites/2.gif" alt="微博秀"/>',
				'<div>',
				'<h1>微博秀</h1>',
				'<p>使用微博秀，将生成的代码放置到你的博客、网站或是其它支持html代码的位置，就能向网页访问者展示你在腾讯微博的最新广播和听众。</p>',
				'<div><a href="/websites/show?explain=1" title="立即使用" class="devSubmit">立即使用</a></div>',
			'</div>',
		'</div>',
		'<h3 class="hbline"><strong>使用微博秀有什么好处？</strong></h3>',
		'<div class="appDescription"><img src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" class="share01" width="150" height="80"/><h3>1. 向访问你的博客或网站的用户，展示最新发表的微博内容</h3><p>微博秀可向访问你的博客或网站的用户，展示微博个人信息，最新发表的微博消息，以及最新的若干位听众，并可通过点击查看微博消息，访问你的腾讯微博页面。</p></div>',
'<br/>',
		'<div class="appDescription"><img src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" class="share02" width="150" height="80"/><h3>2. 吸引他人收听你的微博帐号</h3><p>其他微博用户查看你的微博秀，可看到“立即收听”按钮，点击一键收听你的腾讯微博帐号。</p></div>',
		'<h3 class="hbline"><strong>如何使用微博秀?</strong></h3>',
		'<p class="p">按照以下步骤操作，就能在你的博客或网页中使用微博秀:</p>',
		'<ul class="p">',
			'<li><strong>第一步: </strong> 访问腾讯微博微博秀代码获取页面 <a href="/websites/show?explain=1">立即访问</a></li>',
			'<li><strong>第二步: </strong> 登录你的微博帐号 ，选择微博秀显示模块</li>',
			'<li><strong>第三步: </strong> 复制微博秀代码，粘贴到需要添加微博秀的位置，就能在网页中显示你的微博秀了。</li>',
		'</ul>',
		'<h3 class="hbline"><strong>微博秀的显示内容</strong></h3>		',
		'<p class="p">微博秀显示内容如下图所示，可定制仅显示其中的部分模块。</p>',
		'<p class="p"><img src="http://mat1.gtimg.com/app/opent/images/websites/show/f2.gif" /></p>',
		'<h3 class="hbline"><strong>应用图示</strong></h3><br/>',
		'<p class="p">',
		'<img src="http://mat1.gtimg.com/app/opent/images/websites/show/f3.gif" align="top" class="view" path="http://mat1.gtimg.com/app/opent/images/websites/show/f4.gif"/><img src="http://mat1.gtimg.com/app/opent/images/websites/show/f3.gif" hspace="100" align="top" class="view" path="http://mat1.gtimg.com/app/opent/images/websites/show/f7.gif"/><img src="http://mat1.gtimg.com/app/opent/images/websites/show/f5.gif"  align="top" class="view" path="http://mat1.gtimg.com/app/opent/images/websites/show/f8.gif"/><br /><br />',
		'</p>',
			'</div>',
			'</div>',
		'<!--{ include file="footer.tpl" }-->',
		tpl.footer,
	].join("");
	$('#main').html(tmpl(tpl.wrapper,global_obj.data));
	QosSS.t[3]= (new Date()).getTime();
	QosSS.t[4]= (new Date()).getTime();
	QosSS.c = new Image();
	QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	QosSS.t[5]= (new Date()).getTime();
	QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wshow_index"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
})();
