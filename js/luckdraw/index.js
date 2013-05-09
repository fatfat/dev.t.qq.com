;function(){
	$(this).tpl = $(this).tpl || {};
	tol.index = [
		'<!--{ include file="header.tpl" }-->',
		tpl.header,
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/> ',
		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>微抽奖</span></div>',
		'<div id="content" class="wrapper main main_comp">',
		'<!--{ include file=".//websites/appnav.tpl" }-->',
		tpl.appnav,
		'<div class="appsArea2"> ',
		/*'<!--{*',
		'<h3 class="hbline"><strong>微抽奖简介</strong></h3>',
		'<p class="p">使用微博微抽奖，填写您的抽奖方式和中奖条件，提交申请，系统就会为您统计中奖用户，中奖结果会以邮件方式通知您填写的抽奖邮箱<span style="color:#f00;">（注：您必须是加V用户才能使用该功能）</span>。</p>',
		'<div class="point p"></div>',
		'<div class="p">',
			'<h3><strong>微抽奖</strong></h3>',
			'<p>欢迎您使用微博微抽奖，请选择下一步操作</p>',
			'<p>',
				'<input type="radio" class="choose" name="userType" checked id="reply" /> <label for="reply">提交抽奖申请</label> ',
				'<input type="radio" class="choose" name="userType" id="result" /> <label for="result">查询抽奖结果</label>',
			'</p>',
			'<p style="margin-top:10px;"><a href="/websites/luckdraw?step=1" title="下一步" class="devSubmit" id="next">下一步</a></p>',
		'</div>',
		'*}-->',*/
		'<iframe src="http://luckdraw.v.t.qq.com/index.php?c=luckdraw&a=index" width="100%" height="500" frameborder="0" marginwidth="0" marginheight="0" id="contentframe" onload="iframeLoaded()" scrolling="no"></iframe>',
		'</div>',
		'</div>',
		'<!--{ include file="footer.tpl" }-->',
		tpl.footer,
	].join("");
	$('#main').html(tmpl(util.index,data));
	$(this).util = $(this).util || {};
	util.createScript("http://mat1.gtimg.com/app/opent/js/jquery-1.4.3.min.js");
	/*<!--{*
	$(document).ready(function(){
		$("#reply").attr("checked",true);
	$("#reply").click(function(){
	        $("#next").attr('href','/websites/luckdraw?step=1');   
	});
	$("#result").click(function(){
	    $("#next").attr('href','/websites/luckdraw?step=2');   
	});
	});
	*}-->*/
	document.domain="qq.com";
	var contentframe=document.getElementById("contentframe"),timer;
	function iframeLoaded(){
		clearInterval(timer);
		var win=contentframe.contentWindow,doc=win.document.documentElement||win.document.body;
		timer=setInterval(function(){
			var h=doc.scrollHeight;
			if (h){
				contentframe.height=h;
			}
		},500);
	}
})();