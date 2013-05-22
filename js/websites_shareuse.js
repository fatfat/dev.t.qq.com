//;(function(){
//	if (!developerinfo) location.href="/developer/bedever/";
global_obj.data.compat = 3;
	var websites_shareuse = [
		'<!--{ include file="header.tpl" }-->',
		tpl.header,
	'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />',
		'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/> ',
		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > ',
		'<%if (compat == 2 ){%>',
			'<span>一键分享（移动版）</span>',
		'<%} else {%>',
			'<span>一键分享（PC版）</span>',
		'<%}%>',
			'</div>',
		'<div id="content" class="wrapper main main_comp">',
		'<!--{ include file="./websites/appnav.tpl" }-->',
		tpl.websites_appnav,
	'<div class="appsArea2">',
			'<h1 class="comp_tit">',
		'<%if (compat == 2 ){%>',
		'使用微博组件 —— 一键分享（移动版）',
		'<%} else {%>',
		'组件设置',
		'<%}%>',
	'</h1>',
			'<!--{ include file="./websites/compform.tpl" }-->',
		tpl.compform,
		'<%if (compat == 1 ){%>',
		'<!--{ include file="./websites/share/shareuse_include.tpl" }-->',
		tpl.websites_shareuse_include_new,
		'<%} else if (compat == 2 ){%>',
		'<!--{ include file="./websites/share/shareuse_include_wap.tpl" }-->',
		tpl.websites_share_include_wap,
		'<%} else {%>',
		'<!--{ include file="./websites/share/shareuse_include_new.tpl" }-->',
		tpl.websites_shareuse_include_new,
		'<%}%>',
		'<h2 class="comp_sub_tit">获取代码</h2>',
		'<div class="p1">&nbsp;&nbsp;<a href="javascript:;" class="btn_code" id="showcode">获取代码</a> </div>',
		'</div>',
		'</div>',
		tpl.footer
		].join("");
		$('#main').html(tmpl(websites_shareuse,global_obj.data));

	$(function(){
	    var UI = {};
	    var menu = function(){ 
	            this.menus = $('.nav ul li');
	        }
	    menu.prototype = {
	        hilight : function( index ){
	            this.menus.removeClass('current');          
	            $(this.menus[index]).addClass('current');
	        },
	        hl : function( index ){
	            return this.hilight(index);
	        }
	    }
	    UI.menu = new menu();   
	    window.UI = UI;
	    UI.menu.hl(1);
	});                     
        
    $('#copyscript').click(function(){
        if (window.clipboardData) { 
            window.clipboardData.setData('text',$('#scripts').val());  
            alert('复制成功！\t\r请将已复制的代码粘贴到要加入一键分享功能的页面。');
        }else{
            alert('你的浏览器不支持脚本复制或你拒绝了浏览器安全确认。\t\r请尝试[Ctrl+C]复制代码并粘贴到要加入功能的页面。');
        }
    });
	util.createScript("http://pingjs.qq.com/ping.js");
	if(typeof(pgvMain) == 'function')pgvMain();
	QosSS.c = new Image();
	QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	QosSS.t[5]= (new Date()).getTime();
	QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_ws_use"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
	util.createScripts(["http://mat1.gtimg.com/app/opent/js/rebuild/share.js","http://mat1.gtimg.com/app/opent/js/rebuild/comp_validate.js"],function(){
		bindAllEvent();
	});
//})();