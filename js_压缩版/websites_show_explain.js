(function(){QosSS.t[2]=(new Date()).getTime();tpl.show_explain=['<!--{ include file="header.tpl" }-->',tpl.header,'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />','<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>','<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/> ','<link href="http://mat1.gtimg.com/app/opent/css/websites/public/ex.css" type="text/css" rel="stylesheet">','<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>微博秀</span></div>','<div id="content" class="wrapper main main_comp">','<!--{ include file="./websites/appnav.tpl" }-->',tpl.websites_appnav,'<div class="appsArea2">','<h2 class="apptit">',"<strong>使用微博组件 —— 微博秀</strong>","</h2>",'<p class="p">使用微博秀，将生成的代码放置到你的博客、网站或是其它支持html代码的位置，就能向网页访问者展示你在腾讯微博的最新广播和听众。</p>','<h4 class="p">请选择您的博客、网站类型，获得此类博客对应微博秀:</h4>','<ul class="blogList p">','<li class="q0 s"><input type="radio" name="s" value="0" checked="checked" id="blog0"/></li>','<li class="q3"><input type="radio" name="s" value="1" id="blog1"/></li>',"</ul>	",'<ul class="blogList p">','<li class="q4"><input type="radio" name="s" value="2" id="blog2"/></li>','<li class="q7"><input type="radio" name="s" value="3" id="blog3"/></li>',"</ul>",'<div class="p">','<a href="/websites/show?explain=2" id="gotoEx" class="devSubmit">立即使用</a>',"</div>	","</div>","</div>",'<!--{ include file="footer.tpl" }-->',tpl.footer,].join("");QosSS.t[3]=(new Date()).getTime();QosSS.t[4]=(new Date()).getTime();$("#main").html(tmpl(tpl.show_explain,global_obj.data));bindAllEvent();var a={};$(function(){var b=function(){this.menus=$(".nav ul li")};b.prototype={hilight:function(c){this.menus.removeClass("current");$(this.menus[c]).addClass("current")},hl:function(c){return this.hilight(c)}};a.menu=new b();window.UI=a;a.menu.hl(1)});$(".blogList li").click(function(){$(".blogList li").removeClass("s");$(this).addClass("s").find("input").attr("checked","checked");$("#gotoEx").attr("href","/websites/show?explain="+($(this).find("input").val()==0?2:3))});util.createScript("http://pingjs.qq.com/ping.js");QosSS.c=new Image();QosSS.c.onload=(QosSS.c.onerror=function(){delete QosSS.c});QosSS.t[5]=(new Date()).getTime();QosSS.c.src="http://qos.report.qq.com/collect?type=1&name=opent_wshow_explain&1="+(QosSS.t[1]-QosSS.t[0])+"&2="+(QosSS.t[2]-QosSS.t[0])+"&3="+(QosSS.t[3]-QosSS.t[0])+"&4="+(QosSS.t[4]-QosSS.t[0])+"&5="+(QosSS.t[5]-QosSS.t[0])})();