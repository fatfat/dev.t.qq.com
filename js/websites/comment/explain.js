//JavaScript Document
this.tpl = this.tpl ||{};
this.tpl.explain = [
	this.tpl.header,
	'<script> ',
	'<%if(!developerinfo ){%>location.href="/developer/bedever/";<%}%>',
	'</script> ',
	'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />',
	'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
	'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/>  ',
	'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>微评论</span></div>',
	'<div id="content" class="wrapper main main_comp">',
	this.tpl.websites_appnav,
		'<div class="appsArea2">	',
			'<h2 class="apptit">',
				'<strong>使用微博组件 —— 微评论</strong>',
			'</h2>',
			this.tpl.compform,
			'<%if(userInfo.hdlogin){%>',
				this.tpl.explain_include,
				'<div class="p1">',
					 '<a href="javascript:;" class="devSubmit" id="showcode">获取代码</a>  ',
					 '<!--',
					 '<a href="javascript:history.go(-1);" class="devCancel">取消</a>',
					 '-->',
				'</div>',
			'<%}else{%>',
				'<div class="errormsg">对不起，在没有登录微博的情况下，你无法使用该功能。 请<a href="javascript:login();">登录</a></div>',
			'<%}%>',
		'</div>',
		'</div> ',
	
	'<script language="javascript" src="http://pingjs.qq.com/ping.js"></script>',
	'<script language="javascript">if(typeof(pgvMain) == "function")pgvMain();</script>',
	this.tpl.footer
].join("");

$("#main").append(tmpl(this.tpl.explain,data));
if(userInfo.hdlogin){
	var _name = userInfo.name;
	$("#copyscript").click(function(){
		if (window.clipboardData) { 
			window.clipboardData.setData("text",$("#showscripts").val()); 
			alert("复制成功！\t\r请将已复制的代码粘贴到要加入微评论功能的页面。");
		}else{
			alert("你的浏览器不支持脚本复制或你拒绝了浏览器安全确认。\t\r请尝试[Ctrl+C]复制代码并粘贴到要加入功能的页面。");
		} 
	});
}else{
	window.setTimeout(function(){
		$("#loginBtn").click();
	},100);
	function login(){
		$("#loginBtn").click();
	}
}