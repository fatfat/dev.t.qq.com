;(function(){
	util.createStyle(
		[
			'.appsArea2 h2{margin-top:40px;}',
			'dl{line-height:22px;margin:4px 32px 40px 50px;}',
			'dt{color:black;font-size:14px;}',
			'.icon1{margin-top:6px;float:left;width:52px;height:39px;margin-right:18px;background: white url("http://mat1.gtimg.com/app/opent/images/websites/read/preview.png") no-repeat 52px 39px;background-position:-464px 0;}',
			'.icon2{margin-top:6px;float:left;width:52px;height:34px;margin-right:18px;background: white url("http://mat1.gtimg.com/app/opent/images/websites/read/preview.png") no-repeat 52px 34px;background-position:-464px -38px;}',
			'.icon3{margin-top:6px;float:left;width:52px;height:39px;margin-right:18px;background: white url("http://mat1.gtimg.com/app/opent/images/websites/read/preview.png") no-repeat 52px 39px;background-position:-464px -70px;}',
			'dd{color:"#999";}',
			'.good{margin-left:46px;margin-bottom:26px;}',
			'.left50{margin-left:50px;line-height:26px;}',
			'.appsArea2 p span{float:left;background:white url("http://mat1.gtimg.com/app/opent/images/websites/read/preview.png") no-repeat;background-position: 0 0;width:464px;height:474px;}',
			'.right{}',
			'.right i{display:inline-block;width:120px;height:2px;background:#98b8d1;line-height:18px;vertical-align:middle;}',
			'.right span{color:gray;vertical-align:middle;margin-left:2px;line-height:18px;}',
		].join("")
	);
	tpl.read = [
		'<!--{ include file="header.tpl" }-->',
		tpl.header,
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/> ',
		'<div class="wrapper breadcast">',
			'<a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>阅读墙</span>',
		'</div>',
			
		'<div id="content" class="wrapper main main_comp main_comp">',
			'<!--{ include file="./websites/appnav.tpl" }-->',
			tpl.websites_appnav,
			'<div class="appsArea2">',
				'<h1 class="comp_tit">微博阅读墙 高聚合消息获得更多用户与流量</h1>',
				'<h2 class="comp_sub_tit" style="margin-top:0;">组件介绍</h2>',
				'<dl>',
					'<dd>使用阅读墙，将生成的代码放置到你的博客、网站或是其它支html代码的位置，可以向用户同时展示您指定的多话题、多用户与关键词广播。</dd>',
					'<dd style="height:34px;margin-top:16px;"><a href="?explain=1" class="btn_newcomp" title="立即使用">立即使用</a></dd>',
				'</dl>',
				
				'<h2 class="comp_sub_tit">使用阅读墙有什么好处</h2>',

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
	
				'<h2 class="comp_sub_tit">如何使用阅读墙</h2>',	

				'<dt class="left50" style="margin-bottom:10px;">按照以下步骤操作，就能在你的博客或网页中使用阅读墙:</dt>',
				'<dd class="left50"><strong>第一步: </strong> 访问阅读墙样式配置页  <a href="/websites/read?explain=1">立即访问</a></dd>',
				'<dd class="left50"><strong>第二步: </strong> 在配置页中，填写自定义定制化样式与内容</dd>',					
				'<dd class="left50"><strong>第三步: </strong> 复制阅读墙代码，粘贴到需要添加阅读墙的位置，就能在网页中显示你的阅读墙了。</dd>',	
							
				'<h2 class="comp_sub_tit">阅读墙的显示内容</h2>',
				'<dt class="left50" style="margin-bottom:10px;">阅读墙显示内容如下图所示:</dt>',

				'<p class="left50">',
					'<span></span>',
					'<div class="right" style="margin-top:15px;"><i clase="line"></i><span>标题栏</span></div>',
					'<div class="right" style="margin-top:25px;"><i clase="line"></i><span>发表框</span></div>',					
					'<div class="right" style="margin-top:60px;"><i clase="line"></i><span>页卡栏</span></div>',		
					'<div class="right" style="margin-top:137px;"><i clase="line"></i><span>时间线</span></div>',					
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