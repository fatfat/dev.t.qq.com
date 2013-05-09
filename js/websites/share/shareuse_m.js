;(function(){
	this.tpl = this.tpl||{};
	this.tpl.shareuse_m = [
	this.tpl.header,
	'<script> ',
	'<%if(!developerinfo){%>location.href="/developer/bedever/";<%}%>',
	'</script>',
	'<script type="text/javascript">',
	'QosSS.t[2]= (new Date()).getTime()',
	'</script>',
	'<link rel="apple-touch-icon-precomposed" href="http://mat1.gtimg.com/www/mb/images/microblog_72_72.png" />',
	'<link rel="shortcut icon" href="http://mat1.gtimg.com/www/mb/favicon.ico"/>',
	'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/> ',
	'<script type="text/javascript">',
	'QosSS.t[3]= (new Date()).getTime()',
	'</script>',
	'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>一键分享(移动版)</span></div>',
	'<div id="content" class="wrapper main main_comp">',
		this.tpl.websites_appnav,
	'<script type="text/javascript">',
	'QosSS.t[4]= (new Date()).getTime()',
	'</script>',
		'<div class="appsArea2">',
			'<h2 class="apptit">',
				'<strong>使用微博组件 —— 一键分享(移动版)</strong>',
			'</h2>',
			this.tpl.compform,
			this.tpl.shareuse_include_wap,
			'<div class="p1">',
			'<a href="javascript:;" class="devSubmit" id="showcode">获取代码</a> ',
			'<!--<a href="javascript:history.go(-1);" class="devCancel">取消</a>-->',
			'</div>',
			'<div class="p1" id="codearea">',
				'<h3>代码获取</h3>',
				'<div><input type="hidden" length="32" id="theKey"/>',
					'<textarea id="scripts" cols="60" rows="7" style="padding:5px;margin:5px 0 -5px;">请输入正确appkey。</textarea><br/>',
					'<input type="checkbox" name="compresscode" id="compresscode"/> <label for="compresscode">压缩代码</label>',
					'<p class="tr"><img src="http://mat1.gtimg.com/app/opent/images/websites/share/copybut.png" id="copyscript" border="0"/></p>',
				'</div>',
			'</div>',
		'</div>',
		'</div>',
		'<script language="javascript" src="http://pingjs.qq.com/ping.js"></script>',
		'<script language="javascript">if(typeof(pgvMain) == "function")pgvMain();</script>',
		this.tpl.footer,
		'<script type="text/javascript">',
		'QosSS.c = new Image();',
		'QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});',
		'QosSS.t[5]= (new Date()).getTime();',
		'QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_ws_use"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);'
].join("");

	$("#main").append(tmpl(this.tpl.shareuse_m,data));
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
})();

