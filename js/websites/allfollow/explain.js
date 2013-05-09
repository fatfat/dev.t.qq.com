this.tpl = this.tpl||{};
this.tpl.explain = [
	this.tpl.header,
	'<script> ',
		'<%if(!developerinfo){%>location.href="/developer/bedever/";<%}%>',
	'</script>',
	'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />',
	'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
	'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/> ',
	'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> &lt; <a href="/websites">网站接入</a> &lt; <span>批量收听</span></div>',
	'<div id="content" class="wrapper main main_comp">	',	
		this.tpl.websites_appnav,
		'<div class="appsArea2">',
			'<h2 class="apptit">',
				'<strong>使用微博组件 —— 批量收听</strong>',
			'</h2>',
		'<%if(userInfo.hdlogin){%>',
			this.tpl.compform,
			this.tpl.explain_include,
			//<!--<dl id="getScript">
			//	<dt>代码获取</dt>
			//	<dd>
			//		<div class="fcgray">复制以下代码，粘贴到你的网页后台代码中，即可在网页<br />中看到你定制的批量收听</div>
			//		<textarea style="width:300px;height:60px;" id="showscripts">请先填写待收听的用户名和appkey</textarea>
			//		<div><input type="button" value="" class="button" id="copyscript" /></div>
			//	</dd>
			//</dl>
			//	<br/><br/>
			//</div>
			//<div class="cl"></div>
			//-->
			'<div class="p1">',
				'<a href="javascript:history.go(-1);" class="devCancel">取消</a> <a href="javascript:;" class="devSubmit" id="showcode">获取代码</a> ',
			'</div>',
		'<%}else{%>',
			'<div class="errormsg">对不起，在没有登录微博的情况下，你无法使用该功能。 请<a href="javascript:login();">登录</a></div>',
		'<%}%>',
		'</div>',
	'</div>',
	'<script language="javascript" src="http://pingjs.qq.com/ping.js"></script>',
	'<script language="javascript">if(typeof(pgvMain) == "function")pgvMain();</script>',
	this.tpl.footer
].join("");
$("#main").append(tmpl(this.tpl.explain,data));
var UI = {};
$(function(){
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

if(userInfo.hdlogin){
	function smartLen( str ){
		str = str.replace(new RegExp("((news|telnet|nttp|file|http|ftp|https)://){1}(([-A-Za-z0-9]+(\\.[-A-Za-z0-9]+)*(\\.[-A-Za-z]{2,5}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_\\$\\.\\+\\!\\*\\(\\),;:@&=\\?/~\\#\\%]*)*","gi"),'填充填充填充填充填充填');
		return Math.ceil((jQuery.trim(str.replace(/[^\u0000-\u00ff]/g,"aa")).length)/2);
	};
	
	function smartCut( str,maxlen ){
		if( str.length <= maxlen ){
		   return str;
		}else{
			for( var i=0,l=str.length;i<l;i++ ){
				var temp = str.substr(0,i);
				if( temp.length >= maxlen ){
					return temp;
				}
			}
			return str;//fail silently
		}	
	}
	
	
	function refreshUrl(){
		var _url = 'http://follow.v.t.qq.com/index.php?c=follow&a=index';
		if($.trim(_namestr) && _apprightflag){
			_url += '&appkey='+_appkey;//appkey
			_url += '&bg='+_color;//背景颜色
			_url += '&hsize='+_icon;//头像大小
			var lastname = '';
			if(_namestr){lastname = _namestr.slice(0,_namestr.length-1);}
			_url += '&name='+lastname;//uname列表
			
			//$('#showscripts').val('<iframe frameborder="0" scrolling="auto" src="'+_url+'" ></iframe>');
			document.getElementById('review').src=_url;
			$('#showImgs').hide();
			$('#review').show();
		}else{
			//$('#showscripts').val('请先填写待收听的用户名和appkey');
			$('#review').hide();
			$('#showImgs').show();
		}
	}
	
	
	/*
	$('#appkey').blur(function(){
		if(new RegExp(/^[a-zA-Z\d]{32,32}$/).test($(this).val())){
			$("#errortip").html('');
			_apprightflag = true;
			_appkey = $(this).val();
			refreshUrl();
		}
		if(new RegExp(/^[\d]{9,9}$/).test($(this).val())){
			$("#errortip").html('');
			_apprightflag = true;
			_appkey = $(this).val();
			refreshUrl();
		}
		if(!new RegExp(/^[a-zA-Z\d]{32,32}$/).test($(this).val()) && !new RegExp(/^[\d]{9,9}$/).test($(this).val())){
			$("#errortip").html('您输入APPKEY有误');
			return false;
		}
	}).keyup(function(){
		var _v = $(this).val();
		if(_v.length>32){
			_v = smartCut(_v,32);
			$(this).val(_v);
		}		
		if(!new RegExp(/^[a-zA-Z\d]{32,32}$/).test(_v)){
			$(this).val(_v.replace(/[^a-zA-Z\d]/g,''));
		}
	});*/
		
	$('#copyscript').click(function(){
		if (window.clipboardData) { 
			window.clipboardData.setData('text',$('#showscripts').val());  
			alert('复制成功！\t\r请将已复制的代码粘贴到要加入话题墙功能的页面。');
		}else{
			alert('你的浏览器不支持脚本复制或你拒绝了浏览器安全确认。\t\r请尝试[Ctrl+C]复制代码并粘贴到要加入功能的页面。');
		} 
	});
}else {
	window.setTimeout(function(){
		$('#loginBtn').click();
	},100);
	function login(){
		$('#loginBtn').click();
	}
}
