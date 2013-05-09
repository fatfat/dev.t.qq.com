
;(function(){	
	var this.tpl = this.tpl || {};
    tpl.content = [
    	'<!--{ include file="header.tpl" }-->',
    	tpl.header,
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/sign/app.css" type="text/css" rel="stylesheet"> ',
		'<div id="content" class="wrapper mainC">		',
		'<!--{ include file="websites/appnav.tpl" }-->',
	    tpl.websites_appnav,
		'<div class="appsArea2">',
			'<div class="appDescription">',
					'<img src="http://mat1.gtimg.com/app/opent/images/websites/sign/sign_logo.gif" alt="微博签名档"/>',
					'<div>',
					'<h1>签名档</h1>',
					'<p>使用签名档，将代码放置到你的博客、论坛签名、电子邮件签名或其他可以引用网络图片链接的位置，就能同步显示你最新的微博信息。</p>',
					'<div><a href="/websites/sign?explain=1" title="立即使用" class="devSubmit">立即使用</a></div>',
					'</div>',
			'</div>',
				'<h3 class="hbline"><strong>使用微博签名档有什么好处？</strong></h3>',
				'',
				'<div class="appDescription"><h3>1. 使用微博个人信息作为签名</h3><p>将代码放置到你的博客、论坛签名、电子邮件签名或其他可以任意可以引用网络图片链接的位置，就能使用腾讯微博签名档，作为你的签名。</p></div>',
		'<br/>',
				'<div class="appDescription"><h3>2. 让他人随时看到你最新发表的微博消息</h3><p>签名档将显示使用你的最新一条原创微博消息，让访客更好的了解你的最新状态，还可以通过签名档访问你的微博页面。</p></div>',
				'<h3 class="hbline"><strong>如何使用微博签名档?</strong></h3>',
				'<p>按照以下步骤操作，就能在博客、论坛签名、电子邮件签名中使用微博签名档:</p>',
				'<ul>',
		'<li><strong>第一步: </strong> 访问腾讯微博微博签名档代码获取页面 <a href="explain.php">立即访问&gt;&gt;</a></li>',
		'<li><strong>第二步: </strong> 登录你的微博帐号</li>',
		'<li><strong>第三步: </strong> 复制或保存微博签名档代码，粘贴到需要添加的位置(outlook用户双击保存的脚本文件)，就能正常使用微博签名档了。</li>',
		'</ul>',
				'<h3 class="hbline"><strong>微博签名档的显示内容</strong></h3>		',
				'<p>微博签名档显示内容如下图所示，可定制你要使用的背景颜色。</p>',
		'<p><img src="http://mat1.gtimg.com/app/opent/images/websites/sign/f1.gif" vspace="10"/></p>',
				'',
		'<h3 class="hbline"><strong>应用图示</strong></h3>',
		'<p>',
		'<img src="http://mat1.gtimg.com/app/opent/images/websites/sign/f2.gif" align="top" class="view" path="http://mat1.gtimg.com/app/opent/images/websites/sign/f5.gif"/><img src="http://mat1.gtimg.com/app/opent/images/websites/sign/f3.gif" hspace="100" align="top" class="view" path="http://mat1.gtimg.com/app/opent/images/websites/sign/f6.gif"/><img src="http://mat1.gtimg.com/app/opent/images/websites/sign/f4.gif" align="top" class="view" path="http://mat1.gtimg.com/app/opent/images/websites/sign/f7.gif"/><br /><br />',
		'</p>',
			'</div>',
			'</div>',
		'<!--{ include file="footer.tpl" }-->',
		tpl.footer,
	].join("");
	QosSS.t[2]= (new Date()).getTime();
	QosSS.t[3]= (new Date()).getTime();
	QosSS.t[4]= (new Date()).getTime();
	$('#main').html(tmpl(tpl.content, global_obj.data));	

	QosSS.c = new Image();
	QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	QosSS.t[5]= (new Date()).getTime();
	QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wsign_sign"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
}());