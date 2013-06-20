;(function(){
	tpl.read = [
		'<!--{ include file="header.tpl" }-->',
		tpl.header,
		'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />',
		'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/> ',

		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>阅读墙</span></div>',
		'<div id="content" class="wrapper main main_comp">',
		'<!--{ include file="./websites/appnav.tpl" }-->',
		tpl.websites_appnav,
		'<div class="appsArea2">',
		'<div class="appDescription">',
		'<img src="http://mat1.gtimg.com/app/opent/images/websites/wall/mini.png" alt="阅读墙"/>',
		'<div>',
		'<h1>阅读墙</h1>',
		'<p>使用阅读墙，将生成的代码放置到你的博客、网站或是其它支html代码的位置，可以向用户同时展示您指定的多话题、多用户与关键词广播。</p>',
		'<div><a href="/websites/read?explain=1" title="立即使用" class="devSubmit">立即使用</a></div>',
		'</div>',
		'</div>',
		'<h3 class="hbline"><strong>使用阅读墙有什么好处？</strong></h3>',
		'<div class="appDescription">',
			'<img src="http://mat1.gtimg.com/app/opent/images/oldapp/follow/0.gif"  class="wall01" height="81"  width="159"/>',
			'<h3>1. 多话题的设定与展示</h3><p>可以同时设定最多5个话题让用户参与讨论，所有话题一并展示，向您的用户提供更加丰富、全面的微博内容。</p>',
		'</div>',
		'<div class="appDescription">',
			'<img src="http://mat1.gtimg.com/app/opent/images/oldapp/follow/0.gif"  class="wall02" height="73" width="159"/>',
			'<h3>2. 多用户帐号推送与展示</h3><p>您可以最多设定10位推送用户，多用户的所有广播可以单独进行展示，提高用户对您网站的关注度与粘性。</p>',
		'</div>',
		'<div class="appDescription">',
			'<img src="http://mat1.gtimg.com/app/opent/images/oldapp/follow/0.gif"  class="wall02" height="73" width="159"/>',
			'<h3>3. 微博全站关键词热搜</h3><p> 增加关键词搜索功能，您网站的用户可以随时展开微博全站搜索，相关广播一览无余，增加内容丰富度。</p>',
		'</div>',			
		'<br/>',
		'<h3 class="hbline"><strong>如何使用阅读墙?</strong></h3>',
		'<p class="p">按照以下步骤操作，就能在你的博客或网页中使用阅读墙:</p>',
				'<ul class="p">',
		'<li><strong>第一步: </strong> 访问阅读墙样式配置页  <a href="/websites/read?explain=1">立即访问</a></li>',
		'<li><strong>第二步: </strong> 在配置页中，填写自定义定制化样式与内容</li>',
		'<li><strong>第三步: </strong> 复制阅读墙代码，粘贴到需要添加阅读墙的位置，就能在网页中显示你的阅读墙了。</li>',
		'</ul>',
				'<h3 class="hbline"><strong>阅读墙的显示内容</strong></h3>',
				'<p class="p">阅读墙显示内容如下图所示</p>',
		'<p class="p"><img src="http://mat1.gtimg.com/app/opent/images/websites/wall/l2.png" /></p>',
		'<h3 class="hbline"><strong>应用图示</strong></h3><br/>',
		'<p class="p">',
		'<img src="http://mat1.gtimg.com/app/opent/images/websites/read/l3.png" align="top" class="view" path="http://mat1.gtimg.com/app/opent/images/websites/wall/l3b.png"/><img src="http://mat1.gtimg.com/app/opent/images/websites/wall/l4.png" hspace="100" align="top" class="view" path="http://mat1.gtimg.com/app/opent/images/websites/wall/l4b.png"/><br /><br />',
		'</p>',
		'</div>',
		'</div>',
		'<!--{ include file="footer.tpl" }-->',
		tpl.footer,
	].join("");	
	$('#main').html(tmpl(tpl.read,global_obj.data));
	bindAllEvent();
	util.setLoginInfo();
	window.init();
	QosSS.t[2]= (new Date()).getTime();
	QosSS.t[3]= (new Date()).getTime();
	QosSS.t[4]= (new Date()).getTime();
	QosSS.c = new Image();
	QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	QosSS.t[5]= (new Date()).getTime();
	QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wwall_index"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
}());