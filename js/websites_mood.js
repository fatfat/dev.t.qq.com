;(function(){
	$(this).tpl = $(this).tpl || {};
	tpl.mood = [
		'<!--{ include file="header.tpl" }--> ',
		tpl.header,
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/>',
		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>心情板</span></div>',
		'<div id="content" class="wrapper main main_comp">',
		'<!--{ include file="./websites/appnav.tpl" }-->',
		tpl.websites_appnav,
		'<div class="appsArea2">',
			'<div class="appDescription">',
					'<h1>心情板</h1>',
					'<p>使用腾讯微博心情板应用，选择要显示的功能模块，将生成的心情板功能代码，嵌入到你的网站、博客或其他网页代码中，浏览网页的用户就能看到定制用户的心情</p>',
					'<div><a href="/websites/mood?explain=1" title="立即使用" class="devSubmit">立即使用</a></div>',
			'</div>',
			'<h3 class="hbline"><strong>使用心情板有什么好处？</strong></h3>',
			'<div class="p">',
				'<h3>展示最新心情信息</h3>',
				'<p>将代码嵌入到你的网站中，就可以向用户展示您最近更新的一条心情，使您的网络形象更加丰满。</p>',
			'</div>',
			'<h3 class="hbline"><strong>如何使用心情板？</strong></h3>		',
			'<div class="p">',
				'<p>按照一下步骤就可以在你的博客或网站使用微博心情板:</p>',
				'<ul>',
					'<li><strong>第一步:</strong>访问腾讯微博心情板代码获取页面 <a href="/websites/mood?explain=1">立即访问</a></li>',
					'<li><strong>第二步:</strong>登定制你的微博帐号</li>',
					'<li><strong>第三步:</strong>复制心情板功能代码，粘贴到你的网页代码中需要添加的位置，就能使用心情板了。</li>',
				'</ul>',
			'</div>',
			'<h3 class="hbline"><strong>微博心情板的显示内容</strong></h3>	',
			'<div class="p">',
				'<p>微博心情板显示内容如下图所示:</p>',
				'<img src="http://mat1.gtimg.com/app/opent/images/websites/mood/f1.png" />',
			'</div> ',
		'</div>',
		'</div>',
		'<!--{ include file="footer.tpl" }-->',
		tpl.footer,
	].join("");
	$('#main').html(tmpl(tpl.mood,global_obj.data));
	bindAllEvent();
	util.setLoginInfo();
})();
