<!--{php}--> $thisUri = $_SERVER['REQUEST_URI'];<!--{/php}-->
<ul class="appsnav">
	<li><a href="/wireless/ios/"><span class="icon icon_ios"></span>iOS</a></li>
	<li><a href="/wireless/android/"><span class="icon icon_android"></span>android</a></li>
	<li><a href="/wireless/winphone/"><span class="icon icon_winphone"></span>WP7</a></li>
	<li><a href="/wireless/site/"><span class="icon icon_msite"></span>移动站点</a></li>
	
</ul>
<script>
$(function(){
	$(".appsnav").find("li").find("a").each(function(){
		if ($(this).attr("href").indexOf(location.pathname)>-1){
			$(this).parent().addClass("active");
			return;
		}
	});
})
</script>
