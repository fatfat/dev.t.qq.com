;(function(){
	QosSS.t[2]= (new Date()).getTime();
	$(this).tpl = $(this).tpl || {};
	tpl.show_explain1 = [
		'<!--{ include file="header.tpl" }-->',
		tpl.header,
		'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />',
		'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/public/ex.css" type="text/css" rel="stylesheet">  ',
		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>微博秀</span></div>',
		'<div id="content" class="wrapper mainC">',
		'<!--{ include file="./websites/appnav.tpl" }-->',
		tpl.websites_appnav,
		'<div class="appsArea2">',
			'<h3 class="hbline"><strong>微博秀功能简介</strong></h3>	',
			'<p class="p">使用微博秀，将生成的代码放置到你的博客、网站或是其它支持html代码的位置，就能向网页访问者展示你在腾讯微博的最新广播和听众。</p>',
			'<h4 class="p">怎样在Qzone中使用微博秀模块？</h4>',
			'<ul class="qZoneList p">',
				'<li>',
					'第一步：点击Qzone页面右上角“装扮空间”按钮，打开装扮空间功能。',
					'<div><img src="http://mat1.gtimg.com/app/opent/images/websites/show/t01.png" width="650" /></div>',
				'</li>',
				'<li>',
					'第二步：在页面顶部选择“增删模块”，并选中“微博”。',
					'<div><img src="http://mat1.gtimg.com/app/opent/images/websites/show/t02.png" width="650" /></div>',
				'</li>',
				'<li>',
					'第三步：为微博模块选择希望放置的位置，并点击页面右上方的“保存”按钮生效。',
					'<div><img src="http://mat1.gtimg.com/app/opent/images/websites/show/t03.png" width="650" /></div>',
				'</li>',
				'<li>',
					'<div><a href="http://rc.qzone.qq.com/custom/module/" target="_blank" id="gotoEx" class="gotoEx1"></a></div>',
				'</li>',
			'</ul>',
		'</div>',
	    '</div>',
	    '<script language="javascript" src="http://pingjs.qq.com/ping.js"></script>',
		'<!--{ include file="footer.tpl" }-->',
		tpl.footer,
	].join("");
	QosSS.t[3]= (new Date()).getTime();
	QosSS.t[4]= (new Date()).getTime()
	$('#main').html(tmpl(tpl.show_explain1,global_obj.data));
	var UI = {};
	$(function(){
		var menu = function(){ 
				this.menus = $('.nav ul li');
			}
		menu.prototype = {
			hilight : function( index ){
				this.menus.removeClass('current');			
				$(this.menus[index]).addClass('current');
			},
			hl : function( index ){
				return this.hilight(index);
			}
		}
		UI.menu = new menu();	
		window.UI = UI;
		UI.menu.hl(1);
	});	


	QosSS.c = new Image();
	QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	QosSS.t[5]= (new Date()).getTime();
	QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wshow_explain1"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);

})();