<!--{ include file="header.tpl" }-->
<script type="text/javascript">
	<!--{if !$developerinfo }-->location.href="/developer/bedever/";<!--{/if}-->
</script>
<script type="text/javascript">
	QosSS.t[2]= (new Date()).getTime();
</script>
<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/> 
<div class="wrapper breadcast">
	<a href="/">腾讯微博开放平台</a> &gt; <a href="/websites">网站接入</a> &gt; <span>微博登录</span>
</div>
<div id="content" class="wrapper main main_comp">
	<!--{ include file="./websites/appnav.tpl" }-->
	<script type="text/javascript">
		QosSS.t[4]= (new Date()).getTime();
	</script>
	<div class="appsArea2">
		<h1 class="comp_tit">
			组件设置
		</h1>
		<!--{ include file="./websites/compform.tpl" }-->
		<!--{ include file="./websites/login/loginuse_include.tpl" }-->
		<h2 class="comp_sub_tit">获取代码</h2>
		<div class="p1">&nbsp;&nbsp;<a href="javascript:;" class="btn_code" id="showcode">获取代码</a></div>
	</div>
</div>
<script language="javascript" src="http://pingjs.qq.com/ping.js"></script>
<script language="javascript">if(typeof(pgvMain) == 'function')pgvMain();</script>
<!--{ include file="footer.tpl" }-->
<script type="text/javascript">
QosSS.c = new Image();
QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
QosSS.t[5]= (new Date()).getTime();
QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_ws_use"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
</script>