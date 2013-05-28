util.createStyle("#content{width:985px;}");
if(!global_obj.data.businessType) global_obj.data.businessType = "业务数据";
tpl.businessData = [
	tpl.header,
	
	'<div id="content" class="controlCon main main_app">',
		'<div class="approate">',
			'<a href="/development">我的应用</a> &gt; <a href="/development/appinfo?appid=<%=app.app_id%>"><%=app.app_name%></a> &gt; <span><%=businessType%></span> ',
			'<div class="approate_back"><a href="/development/appinfo?appid=<%=app.app_id%>">返回&gt;&gt;</a></div>',
		'</div>',
		'<iframe width="100%" height="500" frameborder="0" marginwidth="0" marginheight="0" src="http://compass.qq.com/reports?appid=<%=app.app_id%>" id="contentframe" onload="iframeLoaded(this)" scrolling="no"></iframe>',
	'</div>',
		
	tpl.footer
].join("");
$('#main').html(tmpl(tpl.businessData,global_obj.data));

document.domain="qq.com";
var timer;
function iframeLoaded(contentframe){
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
