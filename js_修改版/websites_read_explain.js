;(function(){
	tpl.wrapper = [
		'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />',
		'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/> ',

		//'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>话题墙</span></div>',
		'<div id="content" class="wrapper main main_comp">',
		tpl.websites_appnav,

		'<div class="appsArea2">	',
			'<h2 class="apptit">',
				'<strong>阅读墙样式配置 高度适应您的需求</strong>',
			'</h2>',
			tpl.compform,
		'<%if(userInfo.hdlogin){%>',
			tpl.websites_read_explain_include,
			'<!--<div class="p1" id="getScript">',
				'<h3>代码获取</h3>',
				'<div class="fcgray">复制以下代码，粘贴到你的网页后台代码中，即可在网页<br />中看到你的话题墙</div>',
				'<textarea style="width:300px;height:60px;" id="showscripts">请先填写需要定制的话题名和appkey</textarea>',
				'<div><input type="button" value="" class="button" id="copyscript" /></div>',
			'</div>-->',
			'<div class="p1">',
				'<a href="javascript:;" class="devSubmit" id="showcode">获取代码</a> ',
				'<!--',
				'<a href="javascript:;" onclick="document.referrer&&location.replace(document.referrer);" class="devCancel">取消</a> ',
				'-->',
			'</div>',
			'<%}else{%>',
				'<div class="errormsg">对不起，在没有登录微博的情况下，你无法使用该功能。 请<a href="javascript:login();">登录</a></div>',
			'<%}%>',
		'</div>',
		'</div>',
	].join("");
	
	tpl.wall_explain = [
		tpl.header,
		tpl.wrapper,
		tpl.footer,
	].join("");

	$('#main').html(tmpl(tpl.wall_explain, global_obj.data));	
	util.createScripts(["http://mat1.gtimg.com/app/opent/rebuild/js/jscolor.js","http://mat1.gtimg.com/app/opent/rebuild/js/customcolor.js","http://mat1.gtimg.com/app/opent/rebuild/js/comp_validate.js"],function(){bindAllEvent()}); 


/*	if (!developerinfo){
		location.href="/developer/bedever/";
	}*/
	QosSS.t[2]= (new Date()).getTime();	
	QosSS.t[3]= (new Date()).getTime();
	QosSS.t[4]= (new Date()).getTime();
	
	if (userInfo.hdlogin){
		var _name = userInfo.name; 
		$('#copyscript').click(function(){
			if (window.clipboardData) { 
				window.clipboardData.setData('text',$('#showscripts').val());  
				alert('复制成功！\t\r请将已复制的代码粘贴到要加入话题墙功能的页面。');
			}else{
				alert('你的浏览器不支持脚本复制或你拒绝了浏览器安全确认。\t\r请尝试[Ctrl+C]复制代码并粘贴到要加入功能的页面。');
			} 
		});
	}
	else{
		window.setTimeout(function(){
			$('#loginBtn').click();
		},100);
		function login(){
			$('#loginBtn').click();
		}
	}
	
	util.createScript("http://pingjs.qq.com/ping.js");
	if(typeof(pgvMain) == 'function')
		pgvMain();

	QosSS.c = new Image();
	QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	QosSS.t[5]= (new Date()).getTime();
	QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wwall_explain"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);

}());
