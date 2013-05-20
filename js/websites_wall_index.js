;(function(){
	var this.tpl = this.tpl || {};
	tpl.wall = [
		'<!--{ include file="header.tpl" }-->',
		tpl.header,
		'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />',
		'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/> ',

		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>话题墙</span></div>',
		'<div id="content" class="wrapper main main_comp">',
		'<!--{ include file="./websites/appnav.tpl" }-->',
		tpl.websites_appnav,
		'<div class="appsArea2">',
		'<div class="appDescription">',
		'<img src="http://mat1.gtimg.com/app/opent/images/websites/wall/mini.png" alt="话题墙"/>',
		'<div>',
		'<h1>话题墙</h1>',
		'<p>使用话题墙，将生成的代码放置到你的博客、网站或是其它支持html代码的位置，就能向网页访问者展示一个或最多三个话题的最新广播。</p>',
		'<div><a href="/websites/wall?explain=1" title="立即使用" class="devSubmit">立即使用</a></div>',
		'</div>',
		'</div>',
		'<h3 class="hbline"><strong>使用话题墙有什么好处？</strong></h3>',
		'<div class="appDescription">',
			'<img src="http://mat1.gtimg.com/app/opent/images/oldapp/follow/0.gif"  class="wall01" height="81"  width="159"/>',
			'<h3>1. 向访问你的博客或网站的用户，展示基于某个话题的微博内容</h3><p>话题墙可向访问你的博客或网站的用户，展示基于某个话题最新发表的微博消息，更快的汇聚同类消息，适用于专题活动</p>',
		'</div>',
		'<div class="appDescription">',
			'<img src="http://mat1.gtimg.com/app/opent/images/oldapp/follow/0.gif"  class="wall02" height="73" width="159"/>',
			'<h3>2. 传播网站内容，从而提升网站的访问量和用户数</h3><p>访问的用户可以将在你的博客或网站发布的信息即时同步到腾讯微博，使网站内容通过微博关系链得到进一步的传播，从而提升网站的访问量和用户数。</p>',
		'</div>',
		'<br/>',
		'<h3 class="hbline"><strong>如何使用话题墙?</strong></h3>',
		'<p class="p">按照以下步骤操作，就能在你的博客或网页中使用话题墙:</p>',
				'<ul class="p">',
		'<li><strong>第一步: </strong> 访问腾讯微博话题墙代码获取页面  <a href="/websites/wall?explain=1">立即访问</a></li>',
		'<li><strong>第二步: </strong> 填写定制的话题</li>',
		'<li><strong>第三步: </strong> 复制话题墙代码，粘贴到需要添加话题墙的位置，就能在网页中显示你的话题墙了。</li>',
		'</ul>',
				'<h3 class="hbline"><strong>话题墙的显示内容</strong></h3>		',
				'<p class="p">话题墙显示内容如下图所示，可定制仅显示其中的部分模块。</p>',
		'<p class="p"><img src="http://mat1.gtimg.com/app/opent/images/websites/wall/l2.png" /></p>',
				'',
		'<h3 class="hbline"><strong>应用图示</strong></h3><br/>',
		'<p class="p">',
		'<img src="http://mat1.gtimg.com/app/opent/images/websites/wall/l3.png" align="top" class="view" path="http://mat1.gtimg.com/app/opent/images/websites/wall/l3b.png"/><img src="http://mat1.gtimg.com/app/opent/images/websites/wall/l4.png" hspace="100" align="top" class="view" path="http://mat1.gtimg.com/app/opent/images/websites/wall/l4b.png"/><br /><br />',
		'</p>',
		'</div>',
		'</div>',
		'<!--{ include file="footer.tpl" }-->',
		tpl.footer,
	].join("");	
	$('#main').html(tmpl(tpl.wall,global_obj.data));
	QosSS.t[2]= (new Date()).getTime();
	QosSS.t[3]= (new Date()).getTime();
	QosSS.t[4]= (new Date()).getTime();
	QosSS.c = new Image();
	QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	QosSS.t[5]= (new Date()).getTime();
	QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wwall_index"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
}());