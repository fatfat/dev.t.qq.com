;function(){
	$(this).tpl = $(this).tpl || {};
	tol.index = []
		'<!--{ include file="header.tpl" }-->',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/> ',
		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>微抽奖</span></div>',
		'<div id="content" class="wrapper main main_comp">',
		'<!--{ include file="./websites/appnav.tpl" }-->',
		'<div class="appsArea2"> ',
		'<h3 class="hbline"><strong>微抽奖介绍</strong></h3>',
		'<p class="p">使用微博微抽奖，填写您的抽奖方式和中奖条件，提交申请，系统就会为您统计中奖用户，中奖结果会以邮件方式通知您填写的抽奖邮箱<span style="color:#f00;">（注：您必须是加V用户才能使用该功能）</span>。</p>',
		'<div class="point p"></div></br>',
		'<h3 class="hbline"><strong>基本设置</strong></h3>',
		'<%if (count) {%>',
		'<p class="p">您已通过申请的抽奖单号如下，点击单号查看结果</p>',
		'<table border="1" style="border-collapse: separate" class="p">',
		'<tr>',
		'<td width="200px" align="center">申请单号</td>',
		'<td width="200px" align="center">申请时间</td>',
		'',
		'</tr>',
		'<!--{foreach key=key item=item from=$userinfo}-->',
		'<tr>',
		'<td width="200px" align="center"><a  href="/luckdraw/result/?id=<%=key|escape:"html"%>&type=<%item.type|escape:"html"%>"><!--{$key|escape:"html"}--></a></td>',
		'<td width="200px" align="center"><!--{$item.posttime|date_format:"%Y-%m-%e"}--></td>',
		'</tr>',
		'<!--{/foreach}-->',
		'</table></br>',
		'<!--{if $result}-->',
		'<p class="p">中奖名单如下，点击中奖人可查看对方资料</p>',
		'<table border="1" style="border-collapse: separate" class="p">',
		'<tr>',
		'<td width="200px" align="center">中奖人</td>',
		'<td width="200px" align="center">名次</td>',
		'',    
		'</tr>',
		'<!--{foreach key=key item=item from=$result}-->',
		'<tr>',
		'<td width="200px" align="center"><!--{$item.nick|escape:"html"}--><a href="http://t.qq.com/<!--{$item.name|escape:"html"}-->">(@<!--{$item.name|escape:"html"}-->)</a></td>',
		'<td width="200px" align="center">第<!--{$item.rank|escape:"html"}-->名</td>',
		'</tr>',
		'<%foreach%>',
		'</table>',
		'<%}else if (id){%>',
		'<p class="p">该单号的抽奖结果未完成,请留意邮箱通知</p>',
		'<%}else%{>',
		'<p class="p"></p>',
		'<%}%>',
		'</div>',
		'<%}else%{>',
		'<div class="p">您目前还没有抽奖单号</div>',
		'<%}%>',
		'</div>',
		'<!--{ include file="footer.tpl" }-->',
		tpl.footer,
	].join('');
	$('#main').html(tmpl(util.index,data));
})();