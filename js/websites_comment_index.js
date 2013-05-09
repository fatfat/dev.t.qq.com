this.tpl = this.tpl||{};
this.tpl.index = [
	this.tpl.header,
	'<script type="text/javascript">',
		'QosSS.t[2]= (new Date()).getTime()',
	'</script>',
	'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />',
	'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
	'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/>',
	'<script type="text/javascript">',
	'QosSS.t[3]= (new Date()).getTime();',
	'</script>',
	'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>微评论</span></div>',
	'<div id="content" class="wrapper main main_comp">',
	this.tpl.websites_appnav,
	'<script type="text/javascript">',
	'QosSS.t[4]= (new Date()).getTime();',
	'</script>',
		  '<div class="appsArea2">',
	  '<div class="appDescription">',
				'<img src="http://mat1.gtimg.com/app/opent/images/websites/comment/mini.png" alt="微评论"/>',
				'<div>',
				'<h1>微评论</h1>',
				'<p>使用微评论，将组件代码插入到网页中，即可为您的网站增添留言功能。留言可与腾讯微博双向同步。</p>',
				'<div><a href="/websites/comment?explain=1" title="立即使用" class="devSubmit">立即使用</a></div>',
		  '</div>',
			'</div>',
			'<h3 class="hbline"><strong>使用微评论有什么好处？</strong></h3>',
			'<div class="appDescription">',
				'<img src="http://mat1.gtimg.com/app/opent/images/websites/comment/l1.png" class="share01" width="159" height="197"/>',
				'<h3>1. 向访问你的博客或网站的用户，提供留言功能</h3><p>微评论可以为您的博客或网站增添留言功能，增加您的网站与用户的互动性</p>',
				'<h3>2. 使用QQ号/微博账号登录，拓展用户来源</h3><p>可以与QQ互联或用腾讯微博账号登录功能相配合，降低用户注册难度</p>',
				'<h3>3. 带来评论回流，增加网站流量</h3><p>每条分享到腾讯微博的评论可以带来数倍的点击回流，帮助您的网站流量节节攀升</p>',
				'<h3>4. 采用openjs，易用性、拓展性更强</h3><p>通过使用openjs技术，调用更方便，并且可以通过与其他代码组合发挥更多功能</p>',
			'</div>',
			'<br/>',
			'<h3 class="hbline"><strong>如何使用微评论?</strong></h3>',
			'<p class="p">按照以下步骤操作，就能在你的博客或网页中使用微评论:</p>',
			'<ul class="p">',
			'<li><strong>第一步: </strong> 访问腾讯微博微评论代码获取页面  <a href="/websites/comment?explain=1">立即访问</a></li>',
			'<li><strong>第二步: </strong> 填写管理员账号并定制界面</li>',
			'<li><strong>第三步: </strong> 复制微评论代码，粘贴到需要添加微评论的位置，就能在网页中显示你的微评论了。</li>',
			'</ul>',
			'<h3 class="hbline"><strong>微评论的显示内容</strong></h3>		',
			'<p class="p">微评论显示内容如下图所示，可定制仅显示其中的部分模块。</p>',
			'<p class="p"><img src="http://mat1.gtimg.com/app/opent/images/websites/comment/l6.png" /></p>',
		'</div>',
	'</div>',
	this.tpl.footer
].join("");

$("#main").append(tmpl(this.tpl.index,global_obj.data))

QosSS.c = new Image();
QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
QosSS.t[5]= (new Date()).getTime();
QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wcomment_index"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);

