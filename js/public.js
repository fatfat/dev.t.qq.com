;(function() {
	//页面参数控制跳转，add by fat
	//TODO:限制条件的正则判断有问题，比如注册成为开发者以后应该去邮箱激活页的，也可能是后台参数有问题
	
	if (userInfo.developer_status == 0){
		var webtype = location.pathname.split('/');
		if( !( /developer/.test(webtype[1]) && (webtype[2] == undefined || webtype[2] == "" || /(bedever|add|addone|activate)/.test(webtype[2])) ) ){
			location.href = "/developer/bedever";
		}
	}else if (userInfo.user_status == 0){
		var webtype = location.pathname.split('/');
		if( !( /developer/.test(webtype[1]) && (webtype[2] == undefined || webtype[2] == "" || /(edit|checkemail|activate)/.test(webtype[2])) )){
			location.href = "/developer/checkemail";
		}
	}else if(global_obj.code){
		if(global_obj.msg){
			alert(global_obj.msg);
		}
		location.href = "/development/";
	}
	
	//添加一个函数记录页面上所有JS要添加的时间绑定函数,以便在文档生成后统一执行
	this.eventBindFuncList = [];
	this.bindAllEvent = function(){
		$(this.eventBindFuncList).each(function(index,fn){
			fn.call(window);
		})
		this.eventBindFuncList = [];
	}
	var scripsCache = [];
	this.tpl = this.tpl || {};
	tpl.appnav = [
		'<ul class="appsnav">',
			'<li <%if (appnav ==\'info\') {%> class="active"<%}%>><a href="/development/appinfo?appid=<%=app.app_id%>">应用汇总</a></li>',
			'<li <%if (appnav ==\'edit\') {%> class="active"<%}%>><a href="/development/appedit?appid=<%=app.app_id%>">基本信息</a></li>',
			'<%if (app.app_type ==\'6\') {%>',
				'<li <%if (appnav ==\'platform\') {%> class="active"<%}%>><a href="/development/platforminfo?appid=<%=app.app_id%>">平台信息</a></li>',
			'<%}%>',
			'<li <%if (appnav ==\'compass\') {%> class="active"<%}%>><a href="/development/appcompass?appid=<%=app.app_id%>">业务数据</a></li>',
			'<%if (app.app_type ==\'4\' && app.app_type_check !=\'1\') {%>',
				'<%if (app.app_hosting==1) {%>',
					'<%if (developer.user_certif_status==1 || app.app_binbond==1) {%>',
						'<li <%if (appnav ==\'appedit\') {%> class="active"<%}%>><a href="/development/apphost?appid=<%=app.app_id%>" id="apphost_btn" data-default="1">应用托管</a></li>',
					'<%} else {%>',
						'<li><a href="javascript:;" id="apphost_btn" data-default="0">应用托管</a></li>',
					'<%}%>',
				'<%}%>',
				'<%if (app.app_status ==0 || app.app_status ==1 || app.app_status ==2 || app.app_status ==7) {%>',
					'<li><a href="javascript:;" id="apppay_uncheck">支付结算</a></li>',
				'<%} else {%>',
					'<%if (app.app_pay) {%>',
						'<li><a href="/development/apppay?appid=<%=app.app_id%>" >支付结算</a></li>',
					'<%} else {%>',
						'<li><a href="javascript:;" id="apppay_unpay">支付结算</a></li>',
					'<%}%>',
				'<%}%>',
				'<li <%if (appnav =="whitename") {%> class="active"  <%}%>><a href="/development/appwhitename?appid=<%=app.app_id%>">权限控制</a></li>',
				'<%if (app.app_status ==3) {%>',
					'<li <%if (appnav =="notice") {%> class="active"  <%}%>><a href="/development/notice?appid=<%=app.app_id%>">更多服务</a></li>',
				'<%} else {%>',
					'<li <%if (appnav =="notice") {%> class="active"  <%}%>><a href="javascript:;" id="apppay_unOnline">更多服务</a></li>',
				'<%}%>',
			'<%}%>',
		'</ul>'
	].join("");

	tpl.header = [
		'<div class="headWrap">',
			'<div id="header" class="headInside">',
				'<h1><a class="logo" title="腾讯微博开放平台" href="/">腾讯微博开放平台</a></h1>',
				'<ul class="topNav">',
					'<li><a <%if (navPos == \'1\' ) {%> class="active" <%}%> href="/" hidefocus>首页</a></li>',
					'<li><a <%if (navPos == \'2\' ) {%> class="active" <%}%> href="/websites/" hidefocus>网站接入</a></li>',
					'<li><a <%if (navPos == \'8\' ) {%> class="active" <%}%> href="/wireless/" hidefocus>无线接入</a></li>',
					'<li><a <%if (navPos == \'3\' ) {%> class="active" <%}%> href="/developer/" hidefocus>应用开发</a></li>',
					'<!--<li>',
						'<div class="menuCon webApp">',
						'<div class="menu">',
							'<a class="txt" href="javascript:;" title="web应用">web应用</a>',
							'<i class="nav_arrow webapp_arr"></i>',
						'</div>',
						'<ul class="childMenu web_sub">',
							'<li class="sub_item"><a class="sub_item_link sub_active" href="javascript:;" title="网页应用">网页应用</a></li>',
							'<li class="sub_item"><a class="sub_item_link" href="javascript:;" title="站内应用">站内应用</a></li>',
						'</ul>',
						'</div>',
					'</li>-->',
					'<li><a <%if (navPos == \'4\' ) {%> class="active" <%}%> href="http://wiki.open.t.qq.com/" hidefocus>文档</a></li>',
					'<li><a href="http://bbs.open.t.qq.com/" target="_blank" hidefocus>论坛</a></li>',
					'<li><a href="/development" <%if (navPos == \'7\' ) {%> class="active" <%}%> id="developmentbtn" hidefocus>管理中心</a></li>',
				'</ul>',
				'<div class="menuCon userNav" id = "login_status">',
					'<%if (userInfo.hdlogin ) {%>',
					'<div class="menu">',
						'<a class="login_name" href="javascript:;" title="<%=userInfo.nick?userInfo.nick:userInfo.hdlogin%>"><%=userInfo.nick?userInfo.nick:userInfo.hdlogin%><em></em></a>',
						'<i class="nav_arrow"></i>',
					'</div>',
					'<ul class="childMenu userNav_sub">',
						'<li class="sub_item"><a class="sub_item_link sub_active" href="/development/developer/">编辑开发者信息</a></li>',
						'<li class="sub_item"><a class="sub_item_link" href="javascript:;" id="logoutBtn">退出</a></li>',
					'</ul>',
					'<%} else {%>',
					'<a title="点击此处登录" class="login_name" href="javascript:void(0);" id="loginBtn" hidefocus>登录</a>',
					'<%}%>',
				'</div>',
				'<!--',
				'<div class="appSearch">',
					'<form class="searchForm" action="http://wiki.open.t.qq.com/index.php" method="get">',
						'<!--<label for="searchKey">搜应用或文档</label->',
						'<input type="text" class="inputTxt" autocomplete="off" name="search" maxlength="50" id="searchKey" _val="搜应用或文档" placeholder="搜应用或文档" />',
						'<input type="submit" value="搜索" class="inputBtn" />',
					'</form>',
				'</div> -->',
			'</div>',
		'</div>'
	].join("");

	tpl.footer = [
		'<div id="footer">',
			'<a href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0:%E5%85%B3%E4%BA%8E" target="_blank">关于腾讯微博开放平台</a>',
			'<a href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0:%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96" target="_blank">隐私政策</a>',
			'<a href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0:%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E" target="_blank">免责声明</a>',
			'<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a>',
			'<br/>',
			'Copyright &copy; 1998-2013 Tencent.All Rights Reserved',
		'</div>'
	].join("");

	this.tpl.login = [
		tpl.header,
		'<div class="actioninfo">',
			'<img src="http://mat1.gtimg.com/app/opent/images/index/transparent.gif" class="alert"/>对不起，在没有登录微博的情况下，您无法使用该功能。 请先 <a href="javascript:void(0)" id="loginBtn2" class="links">登录</a>',
		'</div>',
		'<script>',
			'$(document).ready(function(){',
				'setTimeout(function(){showLoginWin(encodeURIComponent(location.href))},100);',
		'	});',
		'</script>',
		tpl.footer,
	].join("");

	this.util = this.util || {};
	util.createStyle = function (str) {
		var style = document.createElement('style');
		var _styleid = style.id = 'cssBody' + Math.random();
		document.getElementsByTagName('head')[0].appendChild(style);
		if (style.styleSheet){
			style.styleSheet.cssText = str;
		} else {
			document.getElementById(_styleid).innerHTML = str;
		}
	}
	//创建web组件的导航条
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
	].join("");
	
	tpl.development_iweibonav = [
	'<ul class="appsnav">',
		'<li <%if (appnav =="info") {%> class="active"  <%}%>><a href="/development/iweiboinfo?appid=<%=app.app_id%>">组件信息</a></li>',
		'<li <%if (appnav =="edit"){%> class="active"  <%}%>><a href="/development/iweibosite?appid=<%=app.app_id%>">网站信息</a></li>',
		'<!-- ',
		'<li><a href="">转让应用</a></li>',
		'<li><a href="">删除应用</a></li>',
		'-->',
	'</ul>'
].join("");
		
	eventBindFuncList.push(function(){
		if(global_obj.data.navPos==2){
			var p=location.pathname;
			$(".appsnav").find("li").find("a").each(function(){
				var pathname = location.pathname.replace(/\/use/gi,"/");
				pathname = pathname.replace(/[1-9]+/g,"");  //微博秀	
				if ($(this).attr("href").indexOf(pathname)>-1){
					$(this).parent().addClass("active");
					return;
				}else if(1){
				
				}
			});
		}
	})
	util.createScript = function (src,callback) {
			$(document).ready(function(){
				if($.inArray(src,scripsCache)!=-1){
					return;
			}
			var script = document.createElement('script');
			script.type = 'text/javascript';
			//add by fat,IE8以下不支持onload事件
			if(navigator.userAgent.indexOf('MSIE') >= 0){
			    script.onreadystatechange = function(){
			        if(this.readyState == 'loaded' || this.readyState == 'complete'){
			            callback&&callback();
			        }
			    }
			}else{
			    script.onload = function(){
			        callback&&callback();
			    }
			}
			script.src = src;
			document.body.appendChild(script);
			scripsCache.push(src);
		})
	}
	util.createScripts = function(scripts,callback){
		var script = scripts.shift();
		if(!script){
			if($.isFunction(callback)){callback()};
			return;
		}
		util.createScript(script,function(){
			util.createScripts(scripts,callback);
		})
	}
	//--------------add by cbyi ---------------------
	//让下面显示的内容与导航之间存在一定的间隙
	var wapperStyle = ".deverCon.wrapper{margin-top:45px;}";
	util.createStyle(wapperStyle)
	//导航栏 用户登录相关信息需要用到的数据 (login_01.js里面)
	window.hdlogin = userInfo.hdlogin;
    global_obj.init = global_obj.init || {};
//	    var user_certif_status= developer.user_certif_status
//		var user_check_status= developer.user_check_status;//资质证明审核状态
//		var app_binbond= global_obj.data.app.app_binbond;//保证金   
		 
    global_obj.init.appnav = function(){
		$("#apphost_btn").click(function(event){ 
			if(global_obj.data.app.app_binbond ===0){//未分配保证金
				if( global_obj.data.developer.user_certif_status ===0 && ( global_obj.data.developer.user_check_status===0 || global_obj.data.developer.user_check_status===1 || global_obj.data.developer.user_check_status===2 )){
					var str="<center>开发者资质证明通过审核后，才能申请服务器和托管地址<br/><br/><a href=\"/development/certification\">现在去上传资质证明</a><br/><br/></center>";
					loginWin.alert({"text":str,"height":215,"ok_text":"我知道了"});
					return false;	
				}
			}
			location.href = $(this).attr("href");
					
			return false;
		}); 
		$("a#apppay_uncheck").click(function(){ 
			loginWin.alert('<center>应用通过审核后才能使用支付结算服务！</center>');
		});   
		$("a#apppay_unpay").click(function(){ 
			loginWin.alert('<center>尚未开通支付权限，如需开通请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></center>');
		}); 
		$("a#apppay_unOnline").click(function(){ 
			loginWin.alert('<center>应用上架后才能申请此功能！</center>');
		}); 
	}
	if(global_obj.data.app && global_obj.data.app.app_type == "4"){
		eventBindFuncList.push(global_obj.init.appnav);
	}
	
	//取得URL参数
	util.getUrlParam = function (name) {
		var re = new RegExp('(?:\\?|#|&)' + name + '=([^&]*)(?:$|&|#)', 'i');
		var m = re.exec(window.location.href);
		return m ? m[1] : '';
	};

		

	//用于一个循环检查DOM加载完成后执行
	this.readyExecution = function(selector,fn,content){
		var eventAddStatus = 1;
		var eventTimer = setInterval(function(){
			if(eventAddStatus&&$(selector).length>0){
				fn.call(content);
				eventAddStatus = null;
				clearInterval(eventTimer);
			}
		},400);
	}

//stats.js	
;(function(global){
	global.Ta=global.Ta||{};
	Ta.hack=function(){
		return {params:'',
			conf:{sid:22020733,pf:1,logo:255,hot:{}}		};
	};
})(this);

(function(g,t){function y(d){return(d=document.cookie.match(RegExp("(?:^|;\\s)"+d+"=(.*?)(?:;\\s|$)")))?d[1]:""}function z(d,a,b){d=d+"="+a+";path=/;domain=";a=window.location.host;var c={"com.cn":1,"net.cn":1,"gov.cn":1,"com.hk":1},e=a.split(".");2<e.length&&(a=(c[e.slice(-2).join(".")]?e.slice(-3):e.slice(-2)).join("."));document.cookie=d+a+(b?";expires="+b:"")}function u(d){var a,b,c,e={};void 0===d?(c=window.location,d=c.host,a=c.pathname,b=c.search.substr(1),c=c.hash):(c=d.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?:\:\d+)?(\/[^\?\\\"\'\|\:<>]*)?(?:\?([^\'\"\\<>#]*))?(?:#(\w+))?/i)||
[],d=c[1],a=c[2],b=c[3],c=c[4]);if(b)for(var g=b.split("&"),l=0,q=g.length;l<q;l++)if(-1!=g[l].indexOf("=")){var p=g[l].indexOf("="),n=g[l].slice(0,p),p=g[l].slice(p+1);e[n]=p}return{host:d,path:a,search:b,hash:c,param:e}}function A(d){return(d||"")+Math.round(2147483647*(Math.random()||0.5))*+new Date%1E10}function B(d,a){var b=document.createElement("script"),c=document.getElementsByTagName("script")[0];b.src=d;b.type="text/javascript";b.onload=b.onerror=b.onreadystatechange=function(){/loaded|complete|undefined/.test(b.readyState)&&
(b.onload=b.onerror=b.onreadystatechange=null,b.parentNode.removeChild(b),b=void 0,a())};c.parentNode.insertBefore(b,c)}function x(d){d=d||{};if(d.conf){var a=d.conf,b;for(b in a)a.hasOwnProperty(b)&&(g[b]=a[b])}if(g.sid&&!Ta[g.sid]){a=[];b=0;var c=u(),c={dm:c.host,pvi:"",si:"",url:c.path,arg:encodeURIComponent(c.search||""),ty:1},e=y("pgv_pvi");e||(c.ty=0,e=A(),z("pgv_pvi",e,"Sun, 18 Jan 2038 00:00:00 GMT;"));c.pvi=e;e=y("pgv_si");e||(e=A("s"),z("pgv_si",e));c.si=e;var e=u(document.referrer),s=u(),
e={rdm:e.host,rurl:e.path,rarg:encodeURIComponent(e.search||""),adt:s.param.ADTAG||s.param.adtag},s={r2:g.sid,r3:"undefined"==typeof _speedMark?"-1":new Date-_speedMark,r4:g.pf||1},l;a:{try{var w=navigator,p=screen||{width:"",height:"",colorDepth:""},n=document.body,t=p.width+"x"+p.height,x=p.colorDepth+"-bit",E=(w.language||w.userLanguage).toLowerCase(),F=w.javaEnabled()?1:0,G=(new Date).getTimezoneOffset()/60,p="";n&&n.addBehavior&&(n.addBehavior("#default#clientCaps"),p=n.connectionType);var n=
{fl:"",scr:t,scl:x,lg:E,jv:F,tz:G,ct:p},m,j,f;if((l=w.plugins)&&(m=l.length))for(f=0;f<m;f++){if(j=l[f].description.match(/Shockwave Flash ([\d\.]+) \w*/))n.fl=j[1]}else f=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"),n.fl=f.replace(/^.*\s+(\d+)\,(\d+).*$/,"$1.$2")}catch(I){l={};break a}l=n}m={};if("undefined"!=typeof _taadHolders&&0<_taadHolders.length){j=0;f=_taadHolders;for(n=f.length;j<n;j++)m[f[j]]=m[f[j]]?m[f[j]]+1:1}j=[];for(var v in m)m.hasOwnProperty(v)&&j.push(v+
"*"+m[v]);v={ext:"adid="+j.join(":")};var h;m=[];for(h in q)j=y(q[h].c_id),"afs"==h?f=(f=/ssid=([^&]*)/i.exec(u().hash))&&f[1]?f[1]:"":(f=u().param,f=f[q[h].id]?f[q[h].id]:""),f?(m.push("ty="+q[h].key+";ck=0;id="+f),j=new Date,j.setTime(j.getTime()+2592E6),z(q[h].c_id,f,j.toGMTString())):j&&m.push("ty="+q[h].key+";ck=1;id="+j);h={pf:m.join("|")};h=[c,e,s,l,v,h,{random:+new Date}];for(c=h.length;b<c;b++)for(var k in h[b])h[b].hasOwnProperty(k)&&a.push(k+"="+(h[b][k]||""));d.params&&a.push(d.params);
var C=Ta.src=("https:"==document.location.protocol?"https://pingtas":"http://pingtcss")+".qq.com/pingd?"+a.join("&"),r=new Image;Ta[g.sid]=r;r.onload=r.onerror=r.onabort=function(){r=r.onload=r.onerror=r.onabort=null;Ta[g.sid]=!0};r.src=C;if(1*!g.pf||g.hot.isValid){d=window.location;k=d.host+d.pathname;var H=d.pathname,D=function(){B(("https:"==document.location.protocol?"https://":"http://")+"tajs.qq.com/ping_hotclick_min.js",function(){window.hotclick&&(new hotclick(C)).watchClick()})};if(1*g.pf)RegExp(k).test(g.hot.url)&&
D();else{k=g.sid;d="http://tcss.qq.com/heatmap/"+k%100+"/";k+="";h=k.length;b=0;for(a="";b<h;){c=k.charCodeAt(b++)&255;if(b==h){a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c>>2);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((c&3)<<4);a+="==";break}e=k.charCodeAt(b++);if(b==h){a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c>>2);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((c&
3)<<4|(e&240)>>4);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((e&15)<<2);a+="=";break}s=k.charCodeAt(b++);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c>>2);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((c&3)<<4|(e&240)>>4);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((e&15)<<2|(s&192)>>6);a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(s&63)}B(d+
a+".js?random="+ +new Date,function(){var a;if(window._Cnf&&(a=window._Cnf.url)){a=a.split("|");for(var b=0;b<a.length;b++)if(a[b]==H){D();break}}})}}g.logo&&255!=g.logo&&(d=g.logo,k={9:"\u817e\u8baf\u5206\u6790",10:"\u7f51\u7ad9\u7edf\u8ba1",df:'<img src="http://tcss.qq.com/icon/toss_'+d+'.gif" border="0" />'},document.write(['<a href="http://ta.qq.com?ADTAG=FROUM.FOOTER.CLICK.ICON" title="\u817e\u8baf\u5206\u6790" target="_blank">',k[d]||k.df,"<a>"].join("")))}}var q={afs:{key:1,id:"ssid",c_id:"pgv_afsid",
fr:"hash"},afc:{key:2,id:"__tacid",c_id:"pgv_afcid",fr:"param"},gdt:{key:11,id:"qz_gdt",c_id:"pgv_gdtid",fr:"param"}};t.pgvSendClick=function(d,a){var b=Ta.src.replace(/ext=[^&]*/,function(){return"ext="+("evtid"==a?"ty=0;evtid=":"adid=")+d}).replace(/r2=([^&]*)/,function(a,b){return"r2=a"+b});(new Image(1,1)).src=b};t.Ta=t.Ta||{};Ta.pgv=x;!Ta.async&&x(Ta.hack?Ta.hack():"")})({sid:"",pf:"",hot:{url:"",isValid:!1}},this);
	
	//agreement.js
	this.tpl.agreement = [
	'<li>',
		'<label class="form_label">&nbsp;</label>',
		'<div class="form_element"  style="line-height:20px;">',
		'<input type="checkbox" name="user_agree" id="user_agree">' ,
		'<label for="user_agree">我同意接受</label>',
		'<a target="_blank" href="/index/agreement/" class="valign">《腾讯微博开放平台开发者服务协议》</a>',
		'<br/>',
		'<input type="checkbox" name="user_agree" id="user_agree2" agreement="腾讯微博开放平台第三方应用审核规范">', 
		'<label for="user_agree2">我同意接受</label>',
		'<a target="_blank" href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%94%E7%94%A8%E5%AE%A1%E6%A0%B8%E8%A7%84%E8%8C%83" class="valign">《腾讯微博开放平台第三方应用审核规范》</a>',
		'</div>',
	'</li>'
	].join("");
	//compform.js
	tpl.compform = [
		'<h2 class="comp_sub_tit">填写网站信息</h2>',
		'<form class="appform comp_site_form">',
		'<ul>',
			'<li><label class="form_label">网站名称： </label>',
				'<span class="form_input"><input type="text" value="" name="comp_name" id="comp_name" maxlength="16" data-rule="compname" data-error="网站名称"/></span>',
				'<cite class="gray inputdes">该名称用于显示来源 <a href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F" target="_blank" class="icon_help" title="提交应用来源字段审核能得到什么好处？"></a></cite>',
			'</li>',
			'<li><label class="form_label">网站地址： </label>',
			'<span class="form_input"><input type="text" value="" name="comp_url" id="comp_url" data-rule="link" data-error="网站地址"/></span>',
				'<cite class="gray inputdes">用户通过该链接地址访问你的网站</cite>',
			'</li>', 
		'</ul>',
		'</form>',
	].join("");
	//--------------add by cbyi ---------------------
	var cache = {};
	this.tmpl = function tmpl(str, data){
	  // Figure out if we're getting a template, or if we need to
	  // load the template - and be sure to cache the result.
	  var fn = !/\W/.test(str) ?
		cache[str] = cache[str] ||
		  tmpl(document.getElementById(str).innerHTML) :
	   
		// Generate a reusable function that will serve as a template
		// generator (and which will be cached).
		new Function("obj",
		  "var p=[],print=function(){p.push.apply(p,arguments);};" +
		 
		  // Introduce the data as local variables using with(){}
		  "with(obj){p.push('" +
		 
		  // Convert the template into pure JavaScript
		  str
			.replace(/[\r\t\n]/g, " ")
			.split("<%").join("\t")
			.replace(/((^|%>)[^\t]*)'/g, "$1\r")
			.replace(/\t=(.*?)%>/g, "',$1,'")
			.split("\t").join("');")
			.split("%>").join("p.push('")
			.split("\r").join("\\'")
		+ "');}return p.join('');");
	 
	  // Provide some basic currying to the user
	  return data ? fn( data ) : fn;
	};
})();

