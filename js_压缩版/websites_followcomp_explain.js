this.tpl.explain=[this.tpl.header,'<%if(!developerinfo){%>location.href="/developer/bedever/";<%}%>','<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />','<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>','<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/> ','<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>收听组件</span></div>','<div id="content" class="wrapper main main_comp">		',this.tpl.websites_appnav,'<div class="appsArea2">	','<h2 class="apptit">',"<strong>使用微博组件 —— 收听组件</strong>","</h2>","<%if(userInfo.hdlogin){%>",this.tpl.compform,this.tpl.explain_include,'<div class="p1">','<a href="javascript:;" class="devSubmit" id="showcode">获取代码</a>  ','<!--<a href="javascript:history.go(-1);" class="devCancel">取消</a>-->',"</div>","<%}else{%>",'<div class="errormsg">对不起，在没有登录微博的情况下，你无法使用该功能。 请<a href="javascript:login();">登录</a></div>',"<%}%>","</div>","</div>",this.tpl.footer].join("");$("#main").html(tmpl(this.tpl.explain,global_obj.data));if(userInfo.hdlogin){function smartLen(a){a=a.replace(new RegExp("((news|telnet|nttp|file|http|ftp|https)://){1}(([-A-Za-z0-9]+(\\.[-A-Za-z0-9]+)*(\\.[-A-Za-z]{2,5}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_\\$\\.\\+\\!\\*\\(\\),;:@&=\\?/~\\#\\%]*)*","gi"),"填充填充填充填充填充填");return Math.ceil((jQuery.trim(a.replace(/[^\u0000-\u00ff]/g,"aa")).length)/2)}function smartCut(d,a){if(d.length<=a){return d}else{for(var c=0,b=d.length;c<b;c++){var e=d.substr(0,c);if(e.length>=a){return e}}return d}}function refreshUrl(){var b="http://follow.v.t.qq.com/index.php?c=follow&a=index";if($.trim(_namestr)&&_apprightflag){b+="&appkey="+_appkey;b+="&bg="+_color;b+="&hsize="+_icon;var a="";if(_namestr){a=_namestr.slice(0,_namestr.length-1)}b+="&name="+a;document.getElementById("review").src=b;$("#showImgs").hide();$("#review").show()}else{$("#review").hide();$("#showImgs").show()}}$("#copyscript").click(function(){if(window.clipboardData){window.clipboardData.setData("text",$("#showscripts").val());alert("复制成功！\t\r请将已复制的代码粘贴到要加入话题墙功能的页面。")}else{alert("你的浏览器不支持脚本复制或你拒绝了浏览器安全确认。\t\r请尝试[Ctrl+C]复制代码并粘贴到要加入功能的页面。")}})}else{window.setTimeout(function(){$("#loginBtn").click()},100);function login(){$("#loginBtn").click()}}bindAllEvent();util.createScript("http://pingjs.qq.com/ping.js");if(typeof(pgvMain)=="function"){pgvMain()};