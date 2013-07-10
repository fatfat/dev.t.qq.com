QosSS.t[2]= (new Date()).getTime();
QosSS.t[3]= (new Date()).getTime();
QosSS.t[4]= (new Date()).getTime();

	this.tpl = this.tpl || {};
	tpl.sign_explain = [
		tpl.header,
		'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />',
		'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/show/customcolor.css" type="text/css" rel="stylesheet">',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/> ',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/public/ex.css" type="text/css" rel="stylesheet">',
		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>签名档</span></div>',
		'<div id="content" class="wrapper main main_comp">',
			tpl.websites_appnav,
		'<div class="appsArea2">	',
			'<h2 class="apptit">',
				'<strong>使用微博组件 —— 微博签名档</strong>',
			'</h2>',
		'<%if(userInfo.hdlogin){%>',
			'<div id="show" style="margin-bottom:-150px;height:150px;width:400px;margin-right:30px;float:right">',
				'<h3>效果预览</h3>',
					'<div style="margin:10px;">',
						'<a href="http://t.qq.com/<%=userInfo.name%>" target="_blank">',
							'<img id="reshow1"   src="http://v.t.qq.com/cgi-bin/signature?name=<%=userInfo.name%>&sign=<%=userInfo.sign%>&type=1" border="0" style="height:100px;line-height:56px;text-align:center;"/>',
						'</a>',
					'</div>',
			'</div>',
			'<div class="p1" id="act">',
				'<h3>选择用途</h3>',
				'<ul id="typeList">',
					'<li><input type="radio" name="types" value="0" checked="checked" id="typelist0"/> <label for="typelist0">ubb签名（可用于论坛签名档）</label></li>',
					'<li><input type="radio" name="types" value="1" id="typelist1"/> <label for="typelist1">博客或网站</label></li>',
					'<li><input type="radio" name="types" value="2" id="typelist2"/> <label for="typelist2">嵌入图片及电子邮件签名</label></li>',
					'<li><input type="radio" name="types" value="3" id="typelist3"/> <label for="typelist3">生成outlook邮件签名</label></li>',
					'<li><input type="radio" name="types" value="4" id="typelist4"/> <label for="typelist4">生成foxmail邮件签名</label></li>',
				'</ul>',
			'</div>',
			'<div class="p1">',
				'<h3>颜色与主题</h3>',
				'<ul id="colorList" class="colorList" style="width:220px;">',
					'<li class="s"><div class="color1"></div></li>',
					'<li><div class="color2"></div></li>',
					'<li><div class="color3"></div></li>',
					'<li><div class="color4"></div></li>',
					'<li><div class="color5"></div></li>',
					'<li><div class="color6"></div></li>',
					'<li><div class="color7"></div></li>',
				'</ul>',
			'</div>',
				'<div class="p1" id="getCode1">',
					'<h3>代码获取</h3>',
				'<div class="fcgray">请将以下代码复制粘贴到需要使用微博签名档的位置</div>',
				'<textarea id="showscripts">',
					'[url=http://t.qq.com/<%=userInfo.name%>][img]http://v.t.qq.com/sign/<%=userInfo.name%>/<%=userInfo.sign%>/1.jpg[/img][/url]</textarea>',
					'<div><input type="button" value="" class="button" id="copyscript" /></div>',
					'</div>',
					'<div>',
				'<div class="p1" id="getCode2" style="position:absolute;left:-9999px;">',
					'<h3>保存代码</h3>',
					'<div class="fcgray">请将以下代码另存为“腾讯微博签名档.vbs”到您的电脑，双击运行</div>',
									'<textarea style="display:none;" id="outlooksourcescript">',
									//	tpl.outlook,
									'</textarea>',
									'<textarea id="outlookscript" class="showscripts"></textarea><br/>',
							'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="90" height="24" id="saveaction" align="middle">',
								'<param name="allowScriptAccess" value="always" />',
								'<param name="movie" value="http://mat1.gtimg.com/app/opent/images/websites/saveaction.swf" />',
								'<param name="quality" value="high" />',
								'<param name="wmode" value="transparent" />',
								'<embed src="http://mat1.gtimg.com/app/opent/images/websites/saveaction.swf" quality="high" width="90" height="24" name="saveaction" align="middle" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer_cn"  wmode="transparent"/>',
							'</object>',
				'</div>',
				'<div class="p1" id="getCode3" style="position:absolute;left:-9999px;">',
					'<h3>保存代码</h3>',
					'<div class="fcgray">请将以下代码另存为“腾讯微博签名档.vbs”到您的电脑，双击运行</div>',
									'<textarea style="display:none;" id="foxmailsourcescript">',
									//	tpl.foxmail,
									'</textarea>',
									'<textarea id="foxmailscript" class="showscripts"></textarea><br/>',
									'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="90" height="24" id="saveaction2" align="middle">',
										'<param name="allowScriptAccess" value="always" />',
										'<param name="movie" value="http://mat1.gtimg.com/app/opent/images/websites/saveaction.swf" />',
										'<param name="quality" value="high" />',
										'<param name="wmode" value="transparent" />',
										'<embed src="http://mat1.gtimg.com/app/opent/images/websites/saveaction.swf" quality="high" width="90" height="24" name="saveaction2" align="middle" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer_cn"  wmode="transparent"/>',
									'</object>',
									'<div>运行以上代码之后，请<a href="http://open.t.qq.com/bbs/forum.php?mod=viewthread&tid=14" target="_blank">手动设置默认签名档</a>。</div>',
				'</div>',
				'</div>',
				'<br/><br/>',
			'<%}else{%>',
				'<div class="errormsg">对不起，在没有登录微博的情况下，你无法使用该功能。 请<a href="javascript:login();">登录</a></div>',
			'<%}%>',
		'</div>',
	'</div>',
	'<!--[if IE 6]>',
			'<script>',
				'try {',
					'document.execCommand("BackgroundImageCache", false, true);',
				'} catch(e) {}',
			'</script>',
		'<![endif]-->',
	  tpl.footer,
   ].join("");
 util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/outlook.js",
   function(){
	$('#main').html(tmpl(tpl.sign_explain, global_obj.data));
	tpl.outlook = tpl.outlook.replace(/<!--{\$userInfo.name}-->/g,userInfo.name).replace(/<!--{\$userInfo.sign}-->/,userInfo.sign);
	tpl.foxmail = tpl.foxmail.replace(/<!--{\$userInfo.name}-->/g,userInfo.name).replace(/<!--{\$userInfo.sign}-->/,userInfo.sign);
	$('#outlooksourcescript').html(tpl.outlook);
	$('#foxmailsourcescript').html(tpl.foxmail);	
   bindAllEvent();
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
	
	if(userInfo.hdlogin){
		var _name = userInfo.name; 
		var _sign = userInfo.sign;
		var _colorStyle = 0;
		var _type = 0;
		$("#outlookscript").val($("#outlooksourcescript").val().replace("_colorIndex_","1"));
		$("#foxmailscript").val($("#foxmailsourcescript").val().replace("_colorIndex_","1"));
		$('#typeList input').each(function(i){
			$(this).click(function(){
				if($(this).attr('checked')){
					_type = parseInt($(this).val());	
				}
				crUrl();						
			});	
		});
		$('#colorList li').each(function(i){
			$(this).click(function(){
				$('#colorList li').removeClass('s');
				$(this).addClass('s');
				_colorStyle = i;
				crUrl();
			});		
		});
		function crUrl(){
			var _c = _colorStyle + 1;
			//var _url = 'http://v.t.qq.com/cgi-bin/signature?name='+_name+'&sign='+_sign+'&type='+_c;
			var _url = 'http://v.t.qq.com/sign/'+_name+'/'+_sign+'/'+_c+'.jpg';
			$('#reshow').attr('src',_url);
			$('#getCode1').show();
			//$("#getCode2").css("position","absolute");
			switch(_type){
				case 0:
					$('#showscripts').val('[url=http://t.qq.com/'+_name+'][img]'+_url+'[/img][/url]');
					$("#getCode2").css("position","absolute");
					$("#getCode3").css("position","absolute");
					break;
				case 1:
					$('#showscripts').val('<a href="http://t.qq.com/'+_name+'" target="_blank"><img src="'+_url+'" width="380" height="100" /></a>');
					$("#getCode2").css("position","absolute");
					$("#getCode3").css("position","absolute");
					break;
				case 2:
					$('#showscripts').val(_url);
					$("#getCode2").css("position","absolute");
					$("#getCode3").css("position","absolute");
					break;
				case 3:
					$('#getCode1').hide();
					$("#getCode2").css("position","static");
					$("#getCode3").css("position","absolute");
					$("#outlookscript").val($("#outlooksourcescript").val().replace("_colorIndex_",_c));
					break;
				case 4:
					$('#getCode1').hide();
					$("#getCode2").css("position","absolute");
					$("#getCode3").css("position","static");
					$("#foxmailscript").val($("#foxmailsourcescript").val().replace("_colorIndex_",_c));
					break;
			}
			sendCodeForSave(_type);
		}
		$('#copyscript').click(function(){
			if (window.clipboardData) { 
				window.clipboardData.setData('text',$('#showscripts').val());  
				if(_type == 2){
					copyToClpBrd();
				}
				alert('复制成功！\t\r请将以下代码复制粘贴到需要使用微博签名档的位置。');
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
		
	function copyToClpBrd(){
		var div = document.getElementById('reshow1');
		var controlRange;
		if (document.body.createControlRange) {
			controlRange = document.body.createControlRange();
			controlRange.addElement(div);
			controlRange.execCommand('Copy');
		}
	}
	function sendCodeForSave(k){
		var e,v;
		if(k==3){
			e=$("#saveaction");
			v=$("#outlookscript").val();
		}else if(k==4){
			e=$("#saveaction2");
			v=$("#foxmailscript").val();
		}
		if(k ==3 || k == 4){
			e=(!-[1,]?e:e.find("embed:eq(0)"))[0];
			e.savecode({"t":v,"f":"腾讯微博签名档.vbs"});	
		}	
	}
 });
	QosSS.c = new Image();
	QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	QosSS.t[5]= (new Date()).getTime();
	QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wsign_explain"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
	
