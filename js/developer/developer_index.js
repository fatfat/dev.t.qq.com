  //JavaScript Document
	
var developer_index = 
[
	headerTmpl, 
	'<link href="http://mat1.gtimg.com/app/opent/css/developer/index/development_index.css?20120525" rel="stylesheet" type="text/css" />',
	'<div class="banner">',
	'<div class="wrapper"> ',
	'<a href="http://wiki.open.t.qq.com/" style="top:167px;left:478px;"></a>',
	'<a href="javascript:;" style="top:167px;left:620px;" id="newapp"></a>',
	'<a href="javascript:;" style="top:167px;left:762px;" id="newgame"></a>',
	'</div>',
	'</div>',
'<div class="main wrapper">',
   '<div class="main_left">',
     '<h2 class="title">应用开发</h2>',
	 '<ul class="developer">',
	   '<li>',
		   '<a target="_blank" href="http://wiki.open.t.qq.com/index.php/API%E6%96%87%E6%A1%A3" class="icon"><img src="http://mat1.gtimg.com/app/opent/images/developer/index/development_index_02.gif" /></a>',
		   '<h4><a target="_blank" href= "http://wiki.open.t.qq.com/index.php/API%E6%96%87%E6%A1%A3">API文档</a></h4>',
		   '<p><a target="_blank" href="http://wiki.open.t.qq.com/index.php/API%E6%96%87%E6%A1%A3">API接口描述及说明文档，包括基础数据API、搜索API和位置信息API</a></p>',
	   '</li>',
	   '<li>',
		   '<a target="_blank"  href="http://wiki.open.t.qq.com/index.php/SDK%E4%B8%8B%E8%BD%BD" class="icon"><img src="http://mat1.gtimg.com/app/opent/images/developer/index/development_index_03.gif" /></a>',
		   '<h4><a target="_blank"  href="http://wiki.open.t.qq.com/index.php/SDK%E4%B8%8B%E8%BD%BD">SDK下载</a></h4>',
		   '<p><a target="_blank"  href="http://wiki.open.t.qq.com/index.php/SDK%E4%B8%8B%E8%BD%BD">开发工具包，包括Adobe Air、PHP/Python、Java等流行语言</a> ',
		   '</p>',
		   '<div class="tooltip" id="tooltip" style="display:block;margin-left:80px;margin-top:5px;"><div class="toolangle"><span class="a1">◆</span><span class="a2">◆</span></div><div class="tooltext"><a href="http://wiki.open.t.qq.com/index.php/%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8%E6%8E%A5%E5%85%A5" target="_blank" title="新增移动应用SDK" style="color:#333;">新增移动应用SDK</a></div></div>',
	   '</li>',
	   '<li>',
	   		'<a target="_blank" href="http://wiki.open.t.qq.com/index.php/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94" class="icon"><img src="http://mat1.gtimg.com/app/opent/images/developer/index/development_index_04.gif" /></a>',
			'<h4><a target="_blank" href="http://wiki.open.t.qq.com/index.php/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94">常见问题</a></h4>',
			'<p><a target="_blank" href="http://wiki.open.t.qq.com/index.php/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94">开发，审核，接口权限、应用调优等常见问题</a></p>',
		'</li>',
		'<li>',
	    	'<a target="_about" href ="http://bbs.open.t.qq.com/" class="icon"><img src="http://mat1.gtimg.com/app/opent/images/developer/index/development_index_05.gif" /></a>',
			'<h4><a target="_about" href ="http://bbs.open.t.qq.com/">交流论坛</a></h4>',
			'<p><a target="_about" href ="http://bbs.open.t.qq.com/">开发者技术交流园地，提供运营商务支持。</a></p>',
		'</li>',
	 '</ul>',
   '</div>',
   '<div class="main_right demos">',
	 '<h2 class="title">优秀应用介绍</h2>',
	 index_apps,
  '</div>',
'</div>',
 	'<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/app_appadd.js\"></script>',
 		footerTmpl
].join("");


$(function(){
	$(document.body).append(tmpl(developer_index, {}));
	var hdlogin = userInfo.hdlogin;
	var regweibo = userInfo.reg_wb;
	var insiteAppAble=1;	
	QosSS.t[2]= (new Date()).getTime();
	$("#newapp").click(function(){
		if( hdlogin==undefined || hdlogin == '' || hdlogin == '0'){
			return checkuserLogin(encodeURIComponent(location.href.replace(location.search,"").replace(location.hash,"")+"?t="+(~new Date())+"#newapp"));
		}else{
			popAppWin(developer.user_app_numbers,developer.user_app_limit);
		}
	});
	$("#newgame").click(function(){
		if( hdlogin==undefined || hdlogin == '' || hdlogin == '0'){
			return checkuserLogin(encodeURIComponent("http://" + location.host+"/apps/add/4?cid=3"));		
		}else{
			popAppWin(developer.user_app_numbers,developer.user_app_limit,"newgame");
		}
		return false;
	});
	
	if( hdlogin==undefined || hdlogin == '' || hdlogin == '0'){
		$(".demos").find("a").removeAttr("target").click(function(){
			return (!!checkuserLogin(encodeURIComponent($(this).attr("href"))));
		})
	}else{
		if (location.hash=="#newapp"){
			$("#newapp").trigger("click");
		}else if(location.hash=="#newgame"){
			$("#newgame").trigger("click");
		}
	}
	QosSS.c = new Image();
	QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	QosSS.t[5]= (new Date()).getTime();
	QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_dev_index"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
});



 