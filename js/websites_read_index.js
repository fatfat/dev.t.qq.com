;(function(){
	tpl.read = [
		'<!--{ include file="header.tpl" }-->',
		tpl.header,
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/> ',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/read/read_index.css" rel="stylesheet" type="text/css"/> ',
		'<div class="wrapper breadcast">',
			'<a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>阅读墙</span>',
		'</div>',
			
		'<div id="content" class="wrapper main main_comp main_comp">',
			'<!--{ include file="./websites/appnav.tpl" }-->',
			tpl.websites_appnav,
			'<div class="appsArea2">',
				'<h1 class="comp_tit">微博阅读墙 高聚合消息获得更多用户与流量</h1>',
				'<h2 class="comp_sub_tit">组件介绍</h2>',
				'<dl>',
					'<dd class="color666">使用阅读墙，将生成的代码放置到你的博客、网站或是其它支html代码的位置，可以向用户同时展示您指定的多话题、多用户与关键词广播。</dd>',
					'<dd class="link"><a href="?explain=1" class="btn_newcomp" title="立即使用">立即使用</a></dd>',
				'</dl>',
				
				'<h2 class="comp_sub_tit margin-top40">使用阅读墙有什么好处</h2>',

				'<div class="good">',
				'<span class="icon1"></span>',
				'<dt>多话题的设定与展示</dt>',
				'<dd>可以同时设定最多5个话题让用户参与讨论，所有话题一并展示，向您的用户提供更加丰富、全面的微博内容。</dd>',
				'</div>',
				'<div class="good">',
				'<span class="icon2"></span>',
				'<dt>多用户帐号推送与展示</dt>',
				'<dd>您可以最多设定10位推送用户，多用户的所有广播可以单独进行展示，提高用户对您网站的关注度与粘性。</dd>',
				'</div>',
				'<div class="good">',
				'<span class="icon3"></span>',
				'<dt>微博全站关键词热搜</dt>',
				'<dd>增加关键词搜索功能，您网站的用户可以随时展开微博全站搜索，相关广播一览无余，增加内容丰富度。</dd>',
				'</div>',					
	
				'<h2 class="comp_sub_tit margin-top40">如何使用阅读墙</h2>',	

				'<dt class="margin-bottom8">按照以下步骤操作，就能在你的博客或网页中使用阅读墙:</dt>',
				'<dd class="left50"><strong>第一步: </strong> 访问阅读墙样式配置页。  <a href="/websites/read?explain=1">立即访问</a></dd>',
				'<dd class="left50"><strong>第二步: </strong> 在配置页中，填写自定义定制化样式与内容。</dd>',					
				'<dd class="left50"><strong>第三步: </strong> 复制阅读墙代码，粘贴到需要添加阅读墙的位置，就能在网页中显示你的阅读墙了。</dd>',	
							
				'<h2 class="comp_sub_tit margin-top40">阅读墙的显示内容</h2>',
				'<dt class="left50 margin-bottom8">阅读墙显示内容如下图所示:</dt>',

				'<p class="left50">',
					'<a href="/websites/read?explain=1"></a>',
					'<div class="right margin-top16"><i clase="line"></i><span>标题栏</span></div>',
					'<div class="right margin-top25"><i clase="line"></i><span>发表框</span></div>',					
					'<div class="right margin-top60"><i clase="line"></i><span>页卡栏</span></div>',		
					'<div class="right margin-top137"><i clase="line"></i><span>时间线</span></div>',					
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