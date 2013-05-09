
this.tpl = this.tpl||{};
this.tpl.follow_explain = [
	this.tpl.header,
    '<script type="text/javascript">',
		'QosSS.t[2]= (new Date()).getTime();',
	'</script>',
	'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/>',
	'<link href="http://mat1.gtimg.com/app/opent/css/websites/public/ex.css" type="text/css" rel="stylesheet">  ',
	'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>快速收听</span></div>',
	'<div id="content" class="wrapper main main_comp">',
		this.tpl.websites_appnav,
		'<div class="appsArea2">	',
		'<h2 class="apptit">',
				'<strong>使用微博组件 —— 快速收听</strong>',
		'</h2>',
		'<%if(userInfo.hdlogin){%>',
			'<script>',
			'var tencent_wb_name = "<%=userInfo.name%>";',
			'var tencent_wb_sign = "<%=userInfo.sign %>";',
			'var tencent_wb_style = 1;',
			'//if(tencent_wb_name == ""){',
			'//		alert("您还未注册腾讯微博，请先注册。");',
			'//		window.location = "http://t.qq.com";',
			'//}',
			'QosSS.t[3]= (new Date()).getTime();',
			'</script>',
			'<div id="show" style="margin-bottom:-120px;margin-right:35px;height:120px;float:right;width:250px;">',
				'<h3>效果预览</h3>',
				'<div style="margin:10px auto;text-align:center;"><iframe id="previewmc" src="about:blank" width="169" height="73" frameborder="0" scrolling="no" allowtransparency="true" style="margin:0 auto;"></iframe></div>',
			'</div>',
			'<div id="act" class="p1">',
				'<h3>样式设置</h3>',
				'<ul id="typeList">',
					'<li><input type="checkbox" name="followers" checked="checked" id="typelist0"/> <label for="typelist0">显示已收听人数</label></li>',
					'<li><input type="radio" name="types" value="1" h="75" w1="227" w2="167" checked="checked" id="typelist1"/> <label for="typelist1">头像+收听按钮（样式丰富，更有效吸引听众）</label></li>',
					'<li><input type="radio" name="types" value="2" h="38" w1="191" w2="136" id="typelist2"/> <label for="typelist2">收听按钮（适合有限的展现空间）</label></li>',
					'<li><input type="radio" name="types" value="3" h="20" w1="168" w2="125" id="typelist3"/> <label for="typelist3">收听文字链（最简洁的状态）</label></li>',
					'<li><input type="radio" name="types" value="4" h="27" w1="182" w2="125"id="typelist4"/> <label for="typelist4">收听按钮（清新蓝色）</label></li>',
					'<li><input type="radio" name="types" value="5" h="24" w1="178" w2="125"id="typelist5"/> <label for="typelist5">收听按钮（小巧白色）</label></li>',
				'</ul>',
				'<h3>代码获取</h3>',
				'<div class="fcgray">请将以下代码复制粘贴到需要使用微博快速收听的位置</div>',
						'<textarea id="showscripts"></textarea>',
						'<div><input type="button" value="" class="button" id="copyscript" /></div>',
			'</div>',
			'<div class="cl"></div>',
			'<%}else{%>',
				'<div class="errormsg">对不起，在没有登录微博的情况下，你无法使用该功能。 请<a href="javascript:login();">登录</a></div>',
			'<%}%>',
		'</div>',
	'</div>',
	'<script language="javascript" src="http://pingjs.qq.com/ping.js"></script>',
	'<script language="javascript">if(typeof(pgvMain) == "function")pgvMain();</script>',
	 '<script type="text/javascript">',
	  'QosSS.c = new Image();',
	  'QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});',
	  'QosSS.t[5]= (new Date()).getTime();',
	  'QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wfollow_explain"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);',
	  '</script>',
	this.tpl.footer
].join("");
$("#main").append(tmpl(this.tpl.follow_explain,data));
QosSS.t[4]= (new Date()).getTime();
				
if(userInfo.hdlogin){
	var _name = userInfo.name; 
	var _sign = userInfo.sign;
	var _colorStyle = 0;
	var _type = 0;
	$('#typeList input').click(function(){
		crUrl();
	});
	crUrl();
	function crUrl(){
		var o=$("input[name=types]:checked");
        var f=$("input[name=followers]").is(":checked") ? 1 : 0;
		var _url="http://follow.v.t.qq.com/index.php?c=follow&a=quick&name="+_name+"&style="+o.val()+"&t="+new Date().getTime()+"&f="+f;
		$('#previewmc').attr("src",_url)
					   .attr("width",f ? o.attr("w1") : o.attr("w2"))
					   .attr("height",o.attr("h"));
		$('#showscripts').val($("#show div").html().replace(/&amp;/g,"&").replace(/([A-Z]+)/g,function($1){return $1.toLowerCase();}));
	}
	$('#copyscript').click(function(){
		if (window.clipboardData) { 
			window.clipboardData.setData('text',$('#showscripts').val());  
			if(_type == 2){
				//copyToClpBrd();
			}
			alert('复制成功！\t\r请将以下代码复制粘贴到需要使用微博快速收听的位置。');
		}else{
			alert('你的浏览器不支持脚本复制或你拒绝了浏览器安全确认。\t\r请尝试[Ctrl+C]复制代码并粘贴到要加入功能的页面。');
		} 
	});
}else{
	window.setTimeout(function(){
		$('#loginBtn').click();
	},100);
	function login(){
		$('#loginBtn').click();
	}
}
