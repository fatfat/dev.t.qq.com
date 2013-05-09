//<!--{php}--> $thisUri = $_SERVER['REQUEST_URI'];<!--{/php}-->

this.tpl = this.tpl||{};
this.tpl.websites_appnav = [
	'<ul class="appsnav">',
	'<li><a href="/websites/login/"><span class="icon icon_login"></span>微博登录</a></li>',
	'<li><a href="/websites/share/"><span class="icon icon_share"></span>一键分享</a></li>',
	'<li><a href="/websites/followcomp/"><span class="icon icon_follow"></span>收听组件</a></li>',
	'<!--{*<li><a href="/websites/allfollow/">批量收听</a></li>*}-->',
	'<li><a href="/websites/wall/"><span class="icon icon_wall"></span>话题墙</a></li>',
	'<li><a href="/websites/qshare/"><span class="icon icon_qshare"></span>Q-Share</a></li>',
	'<li><a href="/websites/mood/"><span class="icon icon_mood"></span>心情板</a></li>',
	'<li><a href="/websites/comment/"><span class="icon icon_comment"></span>微评论</a></li>',
	'<!--{*<li><a href="/websites/follow/">快速收听</a></li>*}-->',
	'<li><a href="/websites/show/"><span class="icon icon_show"></span>微博秀</a></li>',
	'<!--{*<li><a href="/websites/pendant/"><span class="icon_pendant"></span>广播站</a></li>*}-->',
	'<li><a href="/websites/sign/"><span class="icon icon_sign"></span>签名档</a></li>',
	'<!--{*<li><a href="/websites/luckdraw/">微抽奖</a></li>*}-->',
	'<!--<li><a href="http://app.t.qq.com/?via=WB.TQQ.TOP.APP&g=2#mywebs" target="_blank">已授权网站</a></li>-->',
	'</ul>',
].join("\r");
$(function(){
	var p=location.pathname;
	$(".appsnav").find("li").find("a").each(function(){
		if ($(this).attr("href").indexOf(location.pathname)>-1){
			$(this).parent().addClass("active");
			return;
		}else if(1){
		
		}
	});
})
