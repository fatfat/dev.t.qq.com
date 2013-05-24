;(function(){
	this.tpl = this.tpl||{};
	this.qshare_index = [
		this.tpl.header,
		'<script type="text/javascript">',
		'QosSS.t[2]= (new Date()).getTime()',
		'</script>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/> ',
		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>Q-Share</span></div>',
		'<div id="content" class="wrapper main main_comp">',
		'<script type="text/javascript">',
		'QosSS.t[3]= (new Date()).getTime()',
		'</script>',
				this.tpl.websites_appnav,
			  '<div class="appsArea2">',
				'<div class="appDescription">',
					'<img src="http://mat1.gtimg.com/app/opent/images/websites/7.gif" alt="Q-Share"/>',
					'<div>',
					'<h1>Q-Share</h1>',
					'<p>使用腾讯微博分享按钮后，用户在访问你网站时，只要选中功能区域中的任何一段文本，并点击“分享到微博”，就可以将选中内容分享到腾讯微博。如果你的网页中含有图片，程序会自动抓取功能区域中的所有图片供用户选择，默认使用第一张图片。</p>',
					'<div><a href="/websites/qshare?explain=1" title="立即使用" class="devSubmit">立即使用</a></div>',
					'</div>',
				'</div>',
				'<h3 class="hbline"><strong>使用Q-Share有什么好处？</strong></h3>',
				'',
				'<div class="appDescription"><img src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" class="share01" width="136" height="84"/><h3>1. 增加网站的访问流量</h3><p>将“Q-Share”按钮嵌入到你的网站中，访问网站的用户只要选中功能区域中的文字点击发送到微博，就能将你的网页标题+网站+指定内容或图片分享给他们的听众，吸引听众通过微博中的链接打开你的网站页面，增加网站的访问流量。</p></div>',
				'<br/>',
				'<div class="appDescription"><img src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" class="share02" width="136" height="90"/><h3>2. 扩大网站影响力</h3><p>用户在使用“Q-Share分享按钮”将网站内容分享到腾讯微博后，从网站中分享出的信息，会显示出来自****（申请的来源字段/网站名称），吸引用户点击此来源字段，同样会访问你设置的网站地址，从而为网站获得在千万级用户微博平台中的营销机会。</p></div>',
		'<script type="text/javascript">',
		'QosSS.t[4]= (new Date()).getTime()',
		'</script>		',
				'<h3 class="hbline"><strong>如何使用Q-Share？</strong></h3>',
				'<p class="p">按照以下步骤操作，就能在你的博客或网页中添加Q-Share分享按钮模块:</p>',
				'<div class="p">',
				'第一步:访问腾讯微博Q-Share分享按钮代码获取页面 <a href="/?explain=1">立即访问&gt;&gt;</a><br/>',
				'第二步:将生成的代码粘贴到网页底部，并设置分享按钮和分享区域，就能在网页中使用本功能。',
				'</div>',
				'<h3 class="hbline"><strong>Q-Share将分享哪些内容？</strong></h3>		',
				'<div class="p">1、文章标题<br/>',
					 '2、被分享页面的网址链接<br/>',
					 '3、用户选中的文字和功能区域中的图片<br/>',
				'</div>',
				'<h3 class="hbline"><strong>应用图示</strong></h3>',
				'<p class="p"><br/>',
				'<img src="http://mat1.gtimg.com/app/opent/images/websites/qshare/f1.gif" class="view" path="http://mat1.gtimg.com/app/opent/images/websites/qshare/f1.gif"/><img src="http://mat1.gtimg.com/app/opent/images/websites/qshare/f2.gif" vspace="10" class="view" path="http://mat1.gtimg.com/app/opent/images/websites/qshare/f2.gif" width="350"/><br /><br />',
				'</p>',
			'</div>',
			'</div>',
		this.tpl.footer
	].join("\r");
	
	$("#main").html(tmpl(this.qshare_index,global_obj.data));
	bindAllEvent();
	util.setLoginInfo();
	QosSS.c = new Image();
	QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	QosSS.t[5]= (new Date()).getTime();
	QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wqs_index"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
})();
