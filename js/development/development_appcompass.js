var developer_appcompass = 
[       
	headerTmpl, 
	'<div id="content" class="controlCon main main_app">',
		'<style type="text/css">',
			'#content{width:985px;}',
		'</style> ',
		'<div class="approate">',
			'<a href="/development">我的应用</a> &gt; <a class = "test"><%=app && app.app_name ? app.app_name : ""%></a> &gt; <span>业务数据</span>',
			'<div class="approate_back test"><a>返回&gt;&gt;</a></div>',
		'</div>',
		'<%if(app && app.app_type && (app.app_type == 4)){%>',
			'<iframe width="100%" height="500" frameborder="0" marginwidth="0" marginheight="0" src="http://compass.qq.com/reports?appid=<%=app && app.app_id ? app.app_id : ""%>" id="contentframe" onload="iframeLoaded()" scrolling="no"></iframe>',
		'<%}else{%>',
			'<iframe width="100%" height="500" frameborder="0" marginwidth="0" marginheight="0" src="http://compass.qq.com/reports?appid=<%=app && app.app_id ? app.app_id : ""%>&ptype=1" id="contentframe" onload="iframeLoaded()" scrolling="no"></iframe>',
		'<%}%>',
	'</div>',
	footerTmpl	
].join("");
		
$(function(){   
	$(document.body).append(tmpl(developer_appcompass,data));
	var app = data.app;
	$('.test').attr('href',"/development/appinfo/" + (app && app.app_id ? app.app_id : ""));		
	document.domain="qq.com";
	var contentframe=document.getElementById("contentframe"),timer;
	function iframeLoaded(){
		clearInterval(timer);
		var win=contentframe.contentWindow,
			doc=win.document.documentElement||win.document.body;
		timer=setInterval(function(){
			var h=doc.scrollHeight;
			if (h){
				contentframe.height=h;
			}
		},500);
	}
})