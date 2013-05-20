;(function() {
	//页面参数控制跳转，add by fat
	if (userInfo.developer_status == 0){
		location.href = "/developer/bdever";
	} 
	if (userInfo.user_status == 0){
		location.href = "/developer/checkemail";
	}
	
	this.tpl = this.tpl || {};
	tpl.appnav = [
		'<ul class="appsnav">',
			'<li <%if (appnav ==\'info\') {%> class="active"<%}%>><a href="/development/appinfo?appid=<%=app.app_id%>">应用汇总</a></li>',
			'<li <%if (appnav ==\'edit\') {%> class="active"<%}%>><a href="/development/appedit?appid=<%=app.app_id%>">基本信息</a></li>',
			'<%if (app.app_type ==\'6\') {%>',
				'<li <%if (appnav ==\'platform\') {%> class="active"<%}%>><a href="/development/platforminfo?appid=<%=app.app_id%>">平台信息</a></li>',
			'<%}%>',
			'<li <%if (appnav ==\'compass\') {%> class="active"<%}%>><a href="/development/appcompass?appid=<%=app.app_id%>/">业务数据</a></li>',
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
						'<li><a href="/development/apppay/<%=app.app_id%>" >支付结算</a></li>',
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
						'<a class="login_name" href="javascript:;" title="<%=userInfo.nick%>"><%=userInfo.nick%><em></em></a>',
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

	util.createScript = function (src,callback) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = src;
		script.onload = callback;
		document.body.appendChild(script);
	}
	//--------------add by cbyi ---------------------
	//让下面显示的内容与导航之间存在一定的间隙
	var wapperStyle = ".deverCon.wrapper{margin-top:45px;}";
	util.createStyle(wapperStyle)
	//导航栏 用户登录相关信息需要用到的数据 (login_01.js里面)
	window.hdlogin = global_obj.data.userInfo.hdlogin;
    global_obj.init = global_obj.init || {};
//	    var user_certif_status= developer.user_certif_status
//		var user_check_status= developer.user_check_status;//资质证明审核状态
//		var app_binbond= global_obj.data.app.app_binbond;//保证金   
		 
    global_obj.init.appnav = function(){
		$("#apphost_btn").click(function(event){ 
			if(app_binbond ===0){//未分配保证金
				if( user_certif_status ===0 && ( user_check_status===0 || user_check_status===1 || user_check_status===2 )){
					var str="<center>开发者资质证明通过审核后，才能申请服务器和托管地址<br/><br/><a href=\"/development/certification/\">现在去上传资质证明</a><br/><br/></center>";
					loginWin.alert({"text":str,"height":215,"ok_text":"我知道了"});
					return false;	
				}
			}
			location.href = $(this).attr("href");
			
			return false;
		}); 
		$("a#apppay_uncheck").click(function(){ 
			loginWin.alert('<center>应用通过审核后才能使用支付结算服务！</center>')
		});   
		$("a#apppay_unpay").click(function(){ 
			loginWin.alert('<center>尚未开通支付权限，如需开通请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></center>')
		}); 
		$("a#apppay_unOnline").click(function(){ 
			loginWin.alert('<center>应用上架后才能申请此功能！</center>')
		}); 
	}
	
	//取得URL参数
	util.getUrlParam = function (name) {
		var re = new RegExp('(?:\\?|#|&)' + name + '=([^&]*)(?:$|&|#)', 'i');
		var m = re.exec(window.location.href);
		return m ? m[1] : '';
	};
	
	//获取登陆态
	util.setLoginInfo = function(){
		 $.ajax({
			 "dataType":"json"
			,"type":"post"
			,"url":"/pipes/interfaceserver"
 			,"data":{"action":"get_login_info"}
			,"success":function(d){
				if (d.ret !=0 && d.msg){
					loginWin.alert("<center>"+msg+"</center>");
					return;
				}
				var loginInfo = [
					'<%if (hdlogin ) {%>',
					'<div class="menu">',
						'<a class="login_name" href="javascript:;" title="<%=nick%>"><%=nick%><em></em></a>',
						'<i class="nav_arrow"></i>',
					'</div>',
					'<ul class="childMenu userNav_sub">',
						'<li class="sub_item"><a class="sub_item_link sub_active" href="/development/developer/">编辑开发者信息</a></li>',
						'<li class="sub_item"><a class="sub_item_link" href="javascript:;" id="logoutBtn">退出</a></li>',
					'</ul>',
					'<%} else {%>',
					'<a title="点击此处登录" class="login_name" href="javascript:void(0);" id="loginBtn" hidefocus>登录</a>',
					'<%}%>',
				].join("");
				$('#login_status').html(tmpl(loginInfo,d.data));
				global_obj.data.userInfo.hdlogin = userInfo.hdlogin = hdlogin = d.data.hdlogin;
			}
		});
	};
		
	//添加一个函数记录页面上所有JS要添加的时间绑定函数,以便在文档生成后统一执行
	this.eventBindFuncList = [];
	this.bindAllEvent = function(){
		$(this.eventBindFuncList).each(function(index,fn){
			fn.call(window);
		})
		this.eventBindFuncList = [];
	}
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
if(global_obj.code==1){
	top.location.href = global_obj.url;
}