//JavaScript Document
this.tpl = this.tpl || {};
this.tpl.apps_getappkey = [
	this.tpl.header,
	'<div id="content" class="deverCon wrapper">',
		'<h3 class="formtitle">完成<%if(appkeyinfo.app_type==5){%>组件<%}else{%>应用<%}%>注册</h3>',
		'<div class="keyGet">',
			'<div class="top">',
				'<span class="getkeyIcon1"></span>',
				'<span>已经成功获取App Key和App Secret</span>',
			'</div>',
			'<div class="getkeyconBg">',
				'<p><span class="keyName">App Key:</span><span id="appidret"><%=appkeyinfo.appkey%>		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></p>',
				'<p><span class="keyName">App Secret:</span><span id="appkeyret"><%=appkeyinfo.appsecret%></span></p>',
				'<div>',
					'<span class="getkeyIcon2"></span><a href="/apps/saveappkey?appid=<%=appkeyinfo.appkey%>" target="_blank">保存到本地</a>',
					'<span class="getkeyIcon3"></span><a target="_blank" href="http://wiki.open.t.qq.com/index.php/%E5%BA%94%E7%94%A8%E6%8E%A5%E5%85%A5%E6%8C%87%E5%BC%95#.E8.BF.9B.E8.A1.8C.E5.BC.80.E5.8F.91">如何使用</a>',
				'</div>',
			'</div>',
			'<p>通过App Key和App Secret两个Key值，您可以开始进行相关的技术开发工作，<a target="_blank" href="http://wiki.open.t.qq.com/index.php/%E5%BA%94%E7%94%A8%E6%8E%A5%E5%85%A5%E6%8C%87%E5%BC%95">详情请点击》</a></p>',
			'<a href="/development/<%if(appkeyinfo.app_type==5){%>iweiboinfo<%}else{%>appinfo<%}%>?appid=<%=appkeyinfo.appkey%>" class="linkBtn">完成<%if(appkeyinfo.app_type==5){%>组件<%}else{%>应用<%}%>注册</a>',
		'</div>',
	'</div>' ,
	this.tpl.footer
].join("")

global_obj.data.appkeyinfo.appsecret = global_obj.data.appkeyinfo.app_key;
global_obj.data.appkeyinfo.appkey = global_obj.data.appkeyinfo.app_id;

$("#main").append(tmpl(this.tpl.apps_getappkey,global_obj.data));
$(function(){
	$('#savebtn').click(function(){
		if (window.clipboardData) { 
			var appid = $.trim($("#appidret").text());
			var appkey = $.trim($("#appkeyret").text());
			var text = 'appid:'+appid+'\nappkey:'+appkey;
			window.clipboardData.setData('text',text);  
			alert('复制成功！');
		}else{
			alert('你的浏览器不支持脚本复制或你拒绝了浏览器安全确认。\t\r请尝试[Ctrl+C]复制代码。');
		} 	
	});
});
	