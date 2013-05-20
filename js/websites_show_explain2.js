;(function(){
//	QosSS.t[2]= (new Date()).getTime();
	tpl.show_explain2 = [
		'<!--{ include file="header.tpl" }-->',
		tpl.header,
		'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />',
		'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/show/customcolor.css" type="text/css" rel="stylesheet">',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/public/ex.css" type="text/css" rel="stylesheet"> ',
		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>微博秀</span></div>',
		'<div id="content" class="wrapper main main_comp">',
		'<!--{ include file="./websites/appnav.tpl" }-->',
		tpl.websites_appnav,
		'<div class="appsArea2">	',
				'<h2 class="apptit">',
					'<strong>使用微博组件 —— 微博秀</strong>',
				'</h2>',
			'<!--{ if $userInfo.hdlogin }-->',
				'<div id="show" style="height:600px;margin-bottom:-600px;width:335px;margin-right:30px;">',
					'<h3>效果预览</h3>',
					'<div style="width:100%;height:571px;overflow:auto;"><iframe id="review" frameborder="0" scrolling="no" marginwidth=0 marginheight=0  src="http://show.v.t.qq.com/index.php?c=show&a=index&n=<!--{$userInfo.name }-->&w=302&h=552&fl=2&l=8&o=31&si=<!--{$userInfo.sign }-->" width="303" height="552"></iframe></div>	',
				'</div>',
				'<div id="act" class="p1">',
					'<h3>样式设置</h3>',
					'<table border="0" cellpadding="0" cellspacing="0" width="340">',
						'<tr>',
							'<td valign="top" class="f14" width="48">- 尺寸</td>',
							'<td>',
								'<ul class="wh">',
									'<li>宽：<input type="text" id="width" maxlength="4" class="winput" value="300" /> px <span class="fcgray">160-800像素</span></li>',
									'<li>高：<input type="text" id="height" maxlength="4" class="winput" value="550" /> px <span class="fcgray">350-800像素</span></li>',
									'<li><input type="checkbox" id="autowidth"> <label for="autowidth">宽度自适应网页</label></li>',
								'</ul>',
							'</td>',
						'</tr>',
						'<tr>',
							'<td valign="top" class="f14">- 颜色</td>',
							'<td>',
								'<div class="cl"><input type="radio" id="defaultColor" checked="checked" name="color" /> <label for="defaultColor">默认颜色</label></div>',
								'<ul id="colorList" class="colorList">',
									'<li class="s"><div class="color1"></div></li>',
									'<li><div class="color2"></div></li>',
									'<li><div class="color3"></div></li>',
									'<li><div class="color4"></div></li>',
								'</ul>',
								'<div class="cl"><input type="radio" name="color" id="use_customcolorset"/> <label for="use_customcolorset">自定义颜色</label></div>',
								'<ul id="customcolor" class="customcolor">',
									'<li>',
										'<label for="color_titlebar">标题栏色</label> <input type="textfield"	class="color {hash:true}" id="color_titlebar" name="color_titlebar"></input>',
										'<div></div>',
									'</li>',
									'<li>',
										'<label for="color_background">背景色</label> <input type="textfield" class="color {hash:true}" id="color_background" name="color_background"></input>',
										'<div></div>',
									'</li>',
			'<li>',
										'<label for="color_foreground">主字色</label> <input type="textfield" class="color {hash:true}" id="color_foreground" name="color_foreground"></input>',
										'<div></div>',
									'</li>',
			'<li>',
										'<label for="color_border">边框色</label> <input type="textfield" class="color {hash:true}" id="color_border" name="color_border"></input>',
										'<div></div>',
									'</li>',
								'</ul>',
								'<a id="autocolor" class="autocolor" href="javascript:void(0);">为我推荐一款搭配</a>',
							'</td>',
						'</tr>',
					'</table>',
				'</div>',
				'<div class="p1">',
					'<h3>显示图片</h3>',
					'<div>',
						'<input type="radio" name="imgshow" value="1" checked="checked" id="imgshow1"/> <label for="imgshow1">显示缩略图</label>',
						'<input type="radio" name="imgshow" value="0" id="imgshow2"/> <label for="imgshow2">显示为图标</label>',
					'</div>',
				'</div>',
				'<div class="p1">',
					'<h3>显示听众</h3>',
					'<div>',
						'显示<input type="text" value="2" class="ltsize" id="fansNum" maxlength="1" /> 行听众  <span class="fcgray">可以设置1-5行，最多显示30个听众</span>',
					'</div>',
				'</div>',
				'<div class="p1">',
					'<h3>显示模块</h3>',
					'<div>',
						'<input type="checkbox" value="0" name="opt" checked="checked" id="opt0"/> <label for="opt0">最近广播消息</label>',
						'<input type="checkbox" value="1" name="opt" checked="checked" id="opt1"/> <label for="opt1">听众</label>',
						'<input type="checkbox" value="2" name="opt" checked="checked" id="opt2"/> <label for="opt2">边框</label>',
						'<input type="checkbox" value="3" name="opt" checked="checked" id="opt3"/> <label for="opt3">标题栏</label>',
					'</div>',
				'</div>',
				'<div class="p1">',
					'<h3>代码获取</h3>',
					'<div class="fcgray">复制以下代码，粘贴到你的网页后台代码中，即可在网页<br />中看到你的微博秀</div>',
					'<textarea id="showscripts"></textarea>',
					'<div><input type="button" value="" class="button" id="copyscript" /></div>',
				'</div>',
				'<br />',
				'<br />',
				'<!--{else}-->',
					'<div class="errormsg">对不起，在没有登录微博的情况下，你无法使用该功能。 请<a href="javascript:login();">登录</a></div>',
				'<!--{/if}-->',
			'</div>',
			'</div>',
			<!--{ include file="footer.tpl" }-->
			tpl.footer,
		].join("");
		QosSS.t[3]= (new Date()).getTime();
		QosSS.t[4]= (new Date()).getTime();
		$('#main').html(tmpl(tpl.show_explain2,global_obj.data));

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
			var _name = userInfo.name; 
			var _sign = userInfo.sign;		
			var _width=300;
			var _height=550;
			var _colorStyle = 0;
			var _fanslen=2;
			var _fansNum = 8;
			var _opt = 31;

			$('#autowidth').click(function(){
						if($(this).attr('checked')){
							$('#width').attr('disabled','true');	
							_width = 0;
						}else{
							$('#width').attr('disabled','');	
							_width = parseInt($('#width').val());
						}
						checkLastChoose();
					});
			$('#width').blur(function(){
						theval = $(this).val();
							if(theval<160){
								$(this).val(160);
							}
							if(theval>800){
								$(this).val(800);
							}		
						_width = parseInt($(this).val());
						checkLastChoose();
					}).keyup(function(){
							var theval = $(this).val();
							$(this).val(theval.replace(/[^\d]{0,4}/g,'').replace(/^0*/g,''));
			  
						});  
			$('#height').blur(function(){
						theval = $(this).val();
							if(theval<350){
								$(this).val(350);
							}
							if(theval>800){
								$(this).val(800);
							}		
						_height = $(this).val();
						checkLastChoose();
					}).keyup(function(){
							var theval = $(this).val();
							$(this).val(theval.replace(/[^\d]{0,4}/g,'').replace(/^0*/g,''));
			  
					});

			$('#colorList li').each(function(i){
				$(this).click(function(){
					$('#colorList li').removeClass('s');
					$(this).addClass('s');
					_colorStyle = i;
					crUrl();
				});		
			});
			$('#fansNum').keyup(function(){
				var _t = Math.floor(_width/75);
				var theval = $(this).val();
				$(this).val(theval.replace(/[^\d]/g,''));
				_fanslen = $(this).val();
				if(_fanslen>5){
					_fanslen = 5;
					$(this).val(5);
				}else if(_fanslen==0){
					_fanslen = 1;
					$(this).val(1);
				}
				_fansNum = _t*_fanslen;
				if(_fansNum>30){
					_fansNum = 30;
				}
				var _th,_bh;
				if(_opt & 0x4){
					_bh = 2;	
				}else{
					_bh = 0;	
				}
				if(_opt & 0x8){
					_th = _height -(_bh+24+75+30+_fanslen*90);	
				}else{
					_th = _height -(_bh+75+30+_fanslen*90);	
				}
				if(_th < 0){
					_height += (Math.abs(_th)+50);	
					$('#height').val(_height);
				}
				checkLastChoose();
			});
			$('input[name=imgshow]').each(function(){
				$(this).click(function(){
					if($(this).attr('checked')){
						var _t = parseInt($(this).val());
						if(_t){
							_opt |= parseInt(1<<4,'0x');
						}else{
							_opt &= ~parseInt(1<<4,'0x');
						}
						checkLastChoose();
					}
				});		
			});
			$('input[name=sexshow]').each(function(){
				$(this).click(function(){
					if($(this).attr('checked')){
							_opt |= parseInt(1<<5,'0x');
					}else{
							_opt &= ~parseInt(1<<5,'0x');
					}
					checkLastChoose();
				});		
			});
			$('#appkey').blur(function(){
			var that=$(this),val=that.val();
			var b=/(^\d{9}$)|(^[0-9a-z]{32}$)/.test(val);
			if(val&&!b){
			alert('appkey不合法'+b);return;
			}
			crUrl();
			});
			$('input[name=opt]').each(function(i){
				$(this).click(function(){
					var _t = parseInt($(this).val());
					if($(this).attr('checked')){
						_opt |= parseInt(1<<_t,'0x');
					}else{
						_opt &= ~parseInt(1<<_t,'0x');
					}
					checkLastChoose();
				});
			});

			function checkLastChoose()
			{
				if ( UI.lastChoose == 4 )
				{
					crUrl('', UI.lastChoose);
				}
				else
				{
					crUrl();
				}
			}

			function crUrl(o, cus){
				UI.lastChoose = cus || _colorStyle;
				var _url = 'http://show.v.t.qq.com/index.php?c=show&a=index&n='+_name;
				//_sign=$("#appkey").val();
				if(_width){
					_width = parseInt($('#width').val());
				}
				_height = parseInt($('#height').val());
				if(_width){
					var _tt = Math.floor(_width/75);
					_fansNum = _tt*_fanslen;
					if(_fansNum>30){
						_fansNum = 30;
					}
				}else{
					_fansNum = 30;
				}

				if(_opt & 0x4){
					if(_width){_width +=2;}
					_height +=2;
				}else{
					// if(_width){_width -=2;}
					_height -=2;
				}
				_url +='&w='+_width;
				_url +='&h='+_height;
				_url +='&o='+_opt;
				_url +='&fl='+_fanslen;
				_url +='&l='+_fansNum;
				var colorPlan = '';
				if ( cus == 4 )
				{
					_url +='&co=' + cus;
					colorPlan += [$('#color_titlebar').val(),$('#color_background').val(),$('#color_foreground').val(),$('#color_border').val()].join("_").replace(/#/g,"");
					_url += '&cs=';
					_url += colorPlan;
					$('#colorList li').removeClass('s');
					$('#use_customcolorset').attr('checked', 'checked');
					$('#customcolor').css('display', 'block');
					$('#autocolor').css('display', 'block');
				}
				else
				{
					_url +='&co='+_colorStyle;
					$('#defaultColor').attr('checked', 'checked');
					$('#customcolor').css('display', 'none');
					$('#autocolor').css('display', 'none');
				}
				//_url +='&si='+_sign;
				if(_width>800){
					_w = 800;
					//$('#review').attr('scrolling','auto');
				}else{
					if(_width){
					_w = _width;	
					}else{
						_w = 300;
					}
					//$('#review').attr('scrolling','no');
				}
				if(!_width){
					var iframewidth = '100%';
				}else{
					var iframewidth = _width;
				}
				if(o){
					$('#review').attr('width',[_w+1,"100%"][0+(_width==0)]).attr('height',_height);		
				}else{
					$('#review').attr('src',_url).attr('width',[_w+1,"100%"][0+(_width==0)]).attr('height',_height);		
				}
				if ( cus == 4 )
				{
					$('#showscripts').val('<iframe frameborder="0" scrolling="no" src="http://show.v.t.qq.com/index.php?c=show&a=index&n='+_name+'&w='+_width+'&h='+_height+'&fl='+_fanslen+'&l='+_fansNum+'&o='+_opt+'&co='+ cus +'&cs=' + colorPlan + '" width="'+iframewidth+'" height="'+_height+'"></iframe>');
				}
				else
				{
					$('#showscripts').val('<iframe frameborder="0" scrolling="no" src="http://show.v.t.qq.com/index.php?c=show&a=index&n='+_name+'&w='+_width+'&h='+_height+'&fl='+_fanslen+'&l='+_fansNum+'&o='+_opt+'&co='+_colorStyle+'" width="'+iframewidth+'" height="'+_height+'"></iframe>');
				}
			}
			$('#copyscript').click(function(){
				if (window.clipboardData) { 
					window.clipboardData.setData('text',$('#showscripts').val());  
					alert('复制成功！\t\r请将已复制的代码粘贴到要加入微博秀功能的页面。');
				}else{
					alert('你的浏览器不支持脚本复制或你拒绝了浏览器安全确认。\t\r请尝试[Ctrl+C]复制代码并粘贴到要加入功能的页面。');
				} 
			});
			$("#height").trigger("blur"); 
		}
		else{
			window.setTimeout(function(){
				$('#loginBtn').click();
			},100);
			function login(){
				$('#loginBtn').click();
			}
		}
		QosSS.c = new Image();
		QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
		QosSS.t[5]= (new Date()).getTime();
		QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wshow_explain2"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
})();