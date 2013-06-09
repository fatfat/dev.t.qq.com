var websites_index = [
	this.tpl.header,
'<link href="http://mat1.gtimg.com/app/opent/css/websites/websites.css" rel="stylesheet" type="text/css"/>',
	'<div class="banner"><div></div></div>',
	'<div class="link_banner wrapper">',
		'<ul class="link_list clearfix">',
			'<li><a href="/websites/login/" class="component component_1"></a>',
				'<h2 class="comp_name">微博登录</h2>',
				'<p class="comp_intro">简化用户登录流程，获取微博活跃用户，提升网站访问量。</p>',
			'</li>',
			'<li><a href="/websites/share/" class="component component_2"></a>',
				'<h2 class="comp_name">一键分享</h2>',
				'<p class="comp_intro">分享网站优质内容，提升内容曝光量及网站回流量。</p>',
			'</li>',
			'<li><a href="/websites/wall/" class="component component_3"></a>',
				'<h2 class="comp_name">话题墙</h2>',
				'<p class="comp_intro">展示指定话题微博内容，提升网站访问量及用户转化率。</p>',
			'</li>',
			'<li><a href="/websites/comment/" class="component component_4"></a>',
				'<h2 class="comp_name">微评论</h2>',
				'<p class="comp_intro">获取指定内容下的优质评论，提升用户的互动意愿。</p>',
			'</li>',
		'</ul>',
		'<div class="more_bar"><a href="/websites/share/" class="more more_big">更多&gt;</a></div>',
	'</div>',
	'<div class="main wrapper clearfix">',
		'<div class="main_left com_left">',
			'<h2 class="title_n">展示</h2>',
			'<ul class="slider_ul">',
				'<li><a class="slider slider1"></a>',
					'<p class="slider_intro">腾讯微博注册用户已达4.69亿，日活跃用户8200万（人均刷新19.8次），占注册用户的17.5%，开发者注册数量30万以上。巨大的流量上必有商机！</p></li>',
				'<!--<li class="none"><a class="slider slider2"></a></li>',
				'<li class="none"><a class="slider slider3"></a></li>',
				'<li class="none"><a class="slider slider4"></a></li>',
				'<li class="none"><a class="slider slider5"></a></li>-->',
			'</ul>',
			'<!--<ul class="indicators">',
				'<li class="indicator on"></li>',
				'<li class="indicator off"></li>',
				'<li class="indicator off"></li>',
				'<li class="indicator off"></li>',
				'<li class="indicator off"></li>',
			'</ul>-->',
		'</div>',
		'<div class="main_right com_right">',
			'<h2 class="title_n">合作案例<!--<a class="more hzmore">更多&gt;</a>--></h2>',
			'<ul class="coperation_list clearfix">',
				'<li><a href="http://www.youku.com/" target="_blank" class="coperation coperation1"></a></li>',
				'<li><a href="http://www.ifeng.com/" target="_blank" class="coperation coperation2"></a></li>',
				'<li><a href="http://www.56.com/" target="_blank" class="coperation coperation3"></a></li>',
				'<li><a href="http://www.mtime.com/" target="_blank" class="coperation coperation4"></a></li>',
				'<li><a href="http://blog.163.com/" target="_blank" class="coperation coperation5"></a></li>',
				'<li><a href="http://tv.sohu.com/" target="_blank" class="coperation coperation6"></a></li>',
				'<li><a href="http://www.dianping.com/" target="_blank" class="coperation coperation7"></a></li>',
				'<li><a href="http://www.stockstar.com/" target="_blank" class="coperation coperation8"></a></li>',
				'<li><a href="http://www.xinhuanet.com/" target="_blank" class="coperation coperation9"></a></li>',
			'</ul>',
		'</div>',
	'</div>',
	this.tpl.footer
].join("");

$("#main").append(tmpl(websites_index,global_obj.data));

$(document).ready(function(){
	util.setLoginInfo();
	window.init();
	//为所有链接添加hidefocus属性
	$("a").attr("hidefocus",true);
});
QosSS.c = new Image();
QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
QosSS.t[5]= (new Date()).getTime();
QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_w_index"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);


