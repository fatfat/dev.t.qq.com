this.tpl.websites_followcomp_index = [
	this.tpl.header,
'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/> ',
'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>收听组件</span></div>',
'<div id="content" class="wrapper main main_comp">',
   this.tpl.websites_appnav,
      '<div class="appsArea2">',
  '<div class="appDescription">',
			'<img src="http://mat1.gtimg.com/app/opent/images/websites/allfollow/5.gif" alt="收听组件"/>',
			'<div>',
			'<h1>收听组件</h1>',
			'<p>使用腾讯微博收听组件应用，选择要显示的功能模块，将生成的快速收听功能代码，嵌入到你的网站、博客或其他网页代码中，浏览网页的用户点击收听按钮，就能立即收听你定制的腾讯微博帐号。</p>',
			'<div><a href="/websites/followcomp?explain=1" title="立即使用" class="devSubmit">立即使用</a></div>',
	  '</div>',
		'</div>',
		'<h3 class="hbline"><strong>使用收听组件有什么好处？</strong></h3>',
		'<div class="appDescription"><img src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" class="allfollow01" width="150" height="81"/><h3>1. 让他人可以收听组件你定制的微博帐号</h3><p>将收听组件模块嵌入网页，访客点击收听按钮，就能一键收听你定制的腾讯微博帐号。</p></div>',
        '<br/>',
		'<div class="appDescription"><img src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" class="allfollow02" width="150" height="81"/><h3>2. 显示你的微博帐号信息</h3><p>提供多种样式，可选择显示你定制的微博头像+昵称信息，更好的吸引他人收听你定制的微博帐号。</p></div>',
		'<h3 class="hbline"><strong>如何使用收听组件?</strong></h3>',
		'<p class="p">按照以下步骤操作，就能在你的博客或网页中添加收听组件模块:</p>',
		'<ul class="p">',
        '<li><strong>第一步: </strong> 访问腾讯微博微博收听组件代码获取页面 <a href="/websites/followcomp?explain=1">立即访问</a></li>',
        '<li><strong>第二步: </strong> 登录你的微博帐号，选择模块样式</li>',
        '<li><strong>第三步: </strong> 复制快速收听代码，粘贴到需要添加收听组件的位置，就能在网页中显示你的快速收听模块了。</li>',
        '</ul>',
		'<h3 class="hbline"><strong>收听组件的显示内容</strong></h3>		',
		'<p class="p">收听组件模块显示内容如下图所示，可定制选择显示样式。</p>',
        '<p class="p"><img src="http://mat1.gtimg.com/app/opent/images/oldapp/follow/f2.gif" vspace="10"/></p>  ',
        '<p class="p" style="width:572px;height:239px;background:url(http://mat1.gtimg.com/app/opent/images/websites/allfollow/indexshow.png) no-repeat -49px 0px;"></p>  ',
	'</div>',
	'</div> ',
	this.tpl.footer
].join("");
$("#main").html(tmpl(tpl.websites_followcomp_index,global_obj.data));
	util.setLoginInfo();
	window.init();
	bindAllEvent();
	util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/imgViewer.js");
