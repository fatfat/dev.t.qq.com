QosSS.t[2]= (new Date()).getTime();


tpl.loginuse = [
	'<!--{ include file="header.tpl" }-->',
	tpl.header,
	'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/>', 
	'<div class="wrapper breadcast">',
		'<a href="/">腾讯微博开放平台</a> &gt; <a href="/websites">网站接入</a> &gt; <span>微博登录</span>',
	'</div>',
	'<div id="content" class="wrapper main main_comp">',
		'<!--{ include file="./websites/appnav.tpl" }-->',
		tpl.websites_appnav,
		'<div class="appsArea2">',
			'<h1 class="comp_tit">',
				'组件设置',
			'</h1>',
			'<!--{ include file="./websites/compform.tpl" }-->',
			tpl.compform,
			'<!--{ include file="./websites/login/loginuse_include.tpl" }-->',
			tpl.websites_loginuse_include,
			'<h2 class="comp_sub_tit">获取代码</h2>',
			'<div class="p1">&nbsp;&nbsp;<a href="javascript:;" class="btn_code" id="showcode">获取代码</a></div>',
		'</div>',
	'</div>',


	'<!--{ include file="footer.tpl" }-->',
	tpl.footer
].join("");
$('#main').append(tmpl(tpl.loginuse,global_obj.data));
util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/login_vt.js");
util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/comp_validate.js",function(){	bindAllEvent();});



util.createScript("http://pingjs.qq.com/ping.js");
if(typeof(pgvMain) == 'function')pgvMain();
QosSS.c = new Image();
QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
QosSS.t[5]= (new Date()).getTime();
QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_ws_use"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
