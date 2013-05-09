<!--{ include file="header.tpl" }-->
<script type="text/javascript">
	QosSS.t[2]= (new Date()).getTime();
</script>
<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />
<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>
<link href="http://mat1.gtimg.com/app/opent/css/websites/show/customcolor.css" type='text/css' rel='stylesheet'>
<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/>
<link href="http://mat1.gtimg.com/app/opent/css/websites/public/ex.css" type='text/css' rel='stylesheet'>  
<script type="text/javascript">
	QosSS.t[3]= (new Date()).getTime();
</script>
<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>广播站</span></div>
<div id="content" class="wrapper main main_comp">
<!--{ include file="./websites/appnav.tpl" }-->
	<div class="appsArea2">	
		<h2 class="apptit">
			<strong>使用微博组件 —— 微博广播站</strong>
		</h2>
	<!--{ if $userInfo.hdlogin }-->
		<div id="show" style="height:600px;margin-bottom:-600px;margin-right:30px;width:330px;">
			<h3>效果预览</h3>
			<div style="width:100%;height:571px;overflow:auto;">
			<iframe id="review" frameborder="0" scrolling="no" src="http://v.t.qq.com/pendant/show.php?n=<!--{ $userInfo.name }-->&w=302&h=552&o=31&si=<!--{ $userInfo.sign }-->" width="302" height="552"></iframe></div>
		</div>
		<div id="act" class="p1">
			<h3>样式设置</h3>
			<table border="0" cellpadding="0" cellspacing="0" width="340">
				<tr>
					<td valign="top" class="f14" width="48">- 尺寸</td>
					<td>
						<ul class="wh">
							<li>宽：<input type="text" id="width" maxlength="4" class="winput" value="300" /> px <span class="fcgray">210-984像素</span></li>
							<li>高：<input type="text" id="height" maxlength="4" class="winput" value="550" /> px <span class="fcgray">260-728像素</span></li>
							<li><input type="checkbox" id="autowidth"> <label for="autowidth">宽度自适应网页</label></li>
						</ul>
					</td>
				</tr>
				<tr>
					<td valign="top" class="f14">- 颜色</td>
					<td>
						<div class="cl"><input type="radio" id="defaultColor" checked="checked" name="color" /> <label for="defaultColor">默认颜色</label></div>
						<ul id="colorList" class="colorList">
							<li class="s"><div class="color1"></div></li>
							<li><div class="color2"></div></li>
							<li><div class="color3"></div></li>
							<li><div class="color4"></div></li>
						</ul>
						<div class="cl"><input type="radio" name="color" id="use_customcolorset"/> <label for="use_customcolorset">自定义颜色</label></div>
						<ul id="customcolor" class="customcolor">
							<li>
								<label for="color_titlebar">标题栏色</label><input type="textfield"	class="color {hash:true}" id="color_titlebar" name="color_titlebar"></input>
								<div></div>
							</li>
							<li>
								<label for="color_background">背景色</label><input type="textfield" class="color {hash:true}" id="color_background" name="color_background"></input>
								<div></div>
							</li>
                         	<li>
								<label for="color_foreground">主字色</label><input type="textfield" class="color {hash:true}" id="color_foreground" name="color_foreground"></input>
								<div></div>
							</li>
                         	<li>
								<label for="color_border">边框色</label><input type="textfield" class="color {hash:true}" id="color_border" name="color_border"></input>
								<div></div>
							</li>
						</ul>
						<a id="autocolor" class="autocolor" href="javascript:void(0);">为我推荐一款搭配</a>
					</td>
				</tr>
			</table>
		</div>
		<div class="p1">
			<h3>显示图片</h3>
			<div>
				<input type="radio" name="imgshow" value="1" checked="checked" id="imgshow1"/> <label for="imgshow1">显示缩略图</label>
				<input type="radio" name="imgshow" value="0" id="imgshow2"/> <label for="imgshow2">显示为图标</label>
			</div>
		</div>
		
		<div class="p1">
			<h3>代码获取</h3>
			<div class="fcgray">复制以下代码，粘贴到你的网页后台代码中，即可在网页<br />中看到你的微博广播站</div>
			<textarea id="showscripts"><iframe frameborder="0" scrolling="no" src="http://v.t.qq.com/pendant/show.php?n=<!--{ $userInfo.name }-->&w=300&h=550&fl=2&l=8&o=31&c=0&si=<!--{ $userInfo.sign }-->" width="300" height="550"></iframe></textarea>
			<div><input type="button" value="" class="button" id="copyscript" /></div>
		</div>
		<br /><br />
		</div>
		<!--{else}-->
			<div class="errormsg">对不起，在没有登录微博的情况下，你无法使用该功能。 请<a href="javascript:login();">登录</a></div>
		<!--{/if}-->
	</div>
	</div>
	<div class="wrapper borderRadiusBottom"></div>

<script type="text/javascript">
	QosSS.t[4]= (new Date()).getTime();
</script>


<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/jscolor_20111108.js"></script>
<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/customcolor.js"></script>
	
<script type="text/javascript"><!--
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
<!--{ if $userInfo.hdlogin }-->
	var _name = '<!--{ $userInfo.name }-->'; 
	var _sign = '<!--{ $userInfo.sign }-->';
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
					if(theval<210){
						$(this).val(210);
					}
					if(theval>984){
						$(this).val(984);
					}		
				_width = parseInt($(this).val());
				checkLastChoose();
			}).keyup(function(){
					var theval = $(this).val();
					$(this).val(theval.replace(/[^\d]{0,4}/g,''));
				});  
	$('#height').blur(function(){
				theval = $(this).val();
					if(theval<260){
						$(this).val(260);
					}
					if(theval>728){
						$(this).val(728);
					}		
				_height = $(this).val();
				checkLastChoose();
			}).keyup(function(){
					var theval = $(this).val();
					$(this).val(theval.replace(/[^\d]{0,4}/g,''));
	  
			});

	$('#colorList li').each(function(i){
		$(this).click(function(){
			$('#colorList li').removeClass('s');
			$(this).addClass('s');
			_colorStyle = i;
			crUrl();
		});		
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
	$('input[name=opt]').each(function(i){
			$(this).click(function(){
				var _t = parseInt($(this).val());
				if($(this).attr('checked')){
					_opt |= parseInt(1<<_t,'0x');
				}else{
					_opt &= ~parseInt(1<<_t,'0x');
				}
				crUrl();
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
		var _url = 'http://v.t.qq.com/pendant/show.php?n='+_name;
		if(_width){
			_width = parseInt($('#width').val());
		}
		_height = parseInt($('#height').val());


		if(_opt & 0x4){
			if(_width){_width +=2;}
			_height +=2;
		}else{
			if(_width){_width -=2;}
			_height -=2;
		}

		_url +='&w='+_width;
		_url +='&h='+_height;
		_url +='&o='+_opt;
		var colorPlan = '';
		if ( cus == 4 )
		{
			_url +='&c=' + cus;
			colorPlan += ($('#color_titlebar').val()).replace('#', '');
			colorPlan += '_';
			colorPlan += ($('#color_background').val()).replace('#', '');
			colorPlan += '_';
			colorPlan += ($('#color_foreground').val()).replace('#', '');
			colorPlan += '_';
			colorPlan += ($('#color_border').val()).replace('#', '');
			_url += '&cs=';
			_url += colorPlan;

			$('#colorList li').removeClass('s');
			$('#use_customcolorset').attr('checked', 'checked');
			$('#customcolor').css('display', 'block');
			$('#autocolor').css('display', 'block');
		}
		else
		{
			_url +='&c='+_colorStyle;
			$('#defaultColor').attr('checked', 'checked');
			$('#customcolor').css('display', 'none');
			$('#autocolor').css('display', 'none');
		}
		_url +='&si='+_sign;
		_width>380?_w=380:_w=_width;
		if(_width>380){
			_w = 380;
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
			$('#showscripts').val('<iframe frameborder="0" scrolling="no" src="http://v.t.qq.com/pendant/show.php?n='+_name+'&w='+_width+'&h='+_height+'&fl='+_fanslen+'&l='+_fansNum+'&o='+_opt+'&c='+ cus +'&si='+_sign+'&cs=' + colorPlan + '" width="'+iframewidth+'" height="'+_height+'"></iframe>');
		}
		else
		{
			$('#showscripts').val('<iframe frameborder="0" scrolling="no" src="http://v.t.qq.com/pendant/show.php?n='+_name+'&w='+_width+'&h='+_height+'&fl='+_fanslen+'&l='+_fansNum+'&o='+_opt+'&c='+_colorStyle+'&si='+_sign+'" width="'+iframewidth+'" height="'+_height+'"></iframe>');
		}
	}
	$('#copyscript').click(function(){
		if (window.clipboardData) { 
			window.clipboardData.setData('text',$('#showscripts').val());  
			alert('复制成功！\t\r请将已复制的代码粘贴到要加入广播站功能的页面。');
		}else{
			alert('你的浏览器不支持脚本复制或你拒绝了浏览器安全确认。\t\r请尝试[Ctrl+C]复制代码并粘贴到要加入功能的页面。');
		} 
	});
	<!--{ else }-->
	window.setTimeout(function(){
		$('#loginBtn').click();
	},100);
	function login(){
		$('#loginBtn').click();
	}
	<!--{ /if }-->
	</script>
<script language="javascript" src="http://pingjs.qq.com/ping.js"></script>
<script language="javascript">if(typeof(pgvMain) == 'function')pgvMain();</script>

 <script type="text/javascript">
  QosSS.c = new Image();
  QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
  QosSS.t[5]= (new Date()).getTime();
  QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wpendant_explain"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
  </script>

<!--{ include file="footer.tpl" }-->
