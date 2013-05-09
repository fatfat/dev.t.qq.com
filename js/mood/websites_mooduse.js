;function(){
	$(this).tpl = $(this).tpl || {};
	if (!developerinfo )
		location.href="/developer/bedever/";
	tpl.mooduse = [
		'<!--{ include file="header.tpl" }--> ',
		tpl.header,
		'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/> ',
		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>心情板</span></div>',
		'<div id="content" class="wrapper main main_comp">',
		'<!--{ include file="./websites/appnav.tpl" }-->',
			'<div class="appsArea2">	',
				'<h3 class="hbline"><strong>心情板功能简介</strong></h3>',
				'<5if(userInfo.hdlogin){*>',
				'<!--{ include file="./websites/compform.tpl" }-->',
				tpl.compform
				'<!--{ include file="./websites/mood/mooduse_include.tpl" }-->',
				tpl.mooduse_include,
				'<div class="p1">',
					'<a href="javascript:;" class="devSubmit" id="showcode">获取代码</a>  ',
					'<!--',
					'<a href="javascript:history.go(-1);" class="devCancel">取消</a>',
					'-->',
				'</div>',
				'<!--',
				'<div class="p1" id="getScript">	',
					'<h3>代码获取</h3>',
					'<div class="fcgray">复制以下代码，粘贴到你的网页后台代码中，即可在网页<br />中看到你的心情板</div>',
					'<textarea style="width:300px;height:60px;" id="showscripts">请先填写需要定制的用户名和appkey</textarea>',
					'<div><input type="button" value="" class="button" id="copyscript" /></div>',
				'</div>',
				'-->',
				'<%}else%{>',
					'<div class="errormsg">对不起，在没有登录微博的情况下，你无法使用该功能。 请<a href="javascript:login();">登录</a></div>',
				'<%}%>',
			'</div>',
			'</div>',
		].join("");
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
		if (userInfo.hdlogin){
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

			var _height = 108;
			var _width = 300;
			var _appkey = '';
			var _namestr = '';

			var _apprightflag = false;//appkey正确
			var _nameflag = false;
			//name正确性检测
				
			$('#copyscript').click(function(){
				if (window.clipboardData) { 
					window.clipboardData.setData('text',$('#showscripts').val());  
					alert('复制成功！\t\r请将已复制的代码粘贴到要加入话题墙功能的页面。');
				}else{
					alert('你的浏览器不支持脚本复制或你拒绝了浏览器安全确认。\t\r请尝试[Ctrl+C]复制代码并粘贴到要加入功能的页面。');
				} 
			});
		}
		else{
			window.setTimeout(function(){
				$('#loginBtn').click();
			},100);
			function login(){
				$('#loginBtn').click();
			}
		}
		$(this).util = $(this).util || {};
		util.createScript("http://pingjs.qq.com/ping.js");
		if(typeof(pgvMain) == 'function')
			pgvMain();
})();
