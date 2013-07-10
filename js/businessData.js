document.domain="qq.com";

if (global_obj.data.pagename == "appcompass"){
	util.createStyle("#content{width:985px;}");
	global_obj.data.src = "http://compass.qq.com/reports?appid="+global_obj.data.app.app_id;
	if(global_obj.data.src != 4) {
		global_obj.data.src += "&ptype=1";
	}
	global_obj.data.businessType = "业务数据";
} else if (global_obj.data.pagename == "apphost") {
	util.createStyle("#content{width:1000px;}");
	global_obj.data.src = "http://opencloud.qq.com/?appid="+global_obj.data.app.app_id;
	global_obj.data.businessType = "应用托管";
} else if (global_obj.data.pagename == "apppay") {
	util.createStyle("#content{width:1000px;}");
	global_obj.data.src = "http://cpay.qq.com/qzone/qz/go/"+global_obj.data.app.app_id;
	global_obj.data.businessType = "支付结算";
}/* else if (global_obj.data.pagename == "notice") {
	util.createStyle("#content{width:1000px;}");
	global_obj.data.src = "http://opencloud.qq.com/?appid="+global_obj.data.app.app_id;
	global_obj.data.businessType = "更多服务";
}*/ else {
	util.createStyle("#content{width:985px;}");
	global_obj.data.src = "http://compass.qq.com/reports?appid="+global_obj.data.app.app_id;
	global_obj.data.businessType = "业务数据";
}

if(!/appedit/.test(global_obj.refer)){
	global_obj.data.refer = "http://dev.t.qq.com/development/appinfo?appid="+global_obj.data.app.app_id;
}

tpl.businessData = [
	tpl.header,
	
	'<div id="content" class="controlCon main main_app">',
		'<div class="approate">',
			'<a href="/development">我的应用</a> &gt; <a href=<%=refer%>><%=app.app_name%></a> &gt; <span><%=businessType%></span>',
			'<div class="approate_back"><a href=<%=refer%>>返回&gt;&gt;</a></div>',
		'</div>',
		'<iframe width="100%" height="500" frameborder="0" marginwidth="0" marginheight="0" src="<%=src%>" id="contentframe" onload="iframeLoaded(this)" scrolling="no"></iframe>',
	'</div>',
		
	tpl.footer
].join("");
$('#main').html(tmpl(tpl.businessData,global_obj.data));

var timer;
function iframeLoaded(contentframe){
	var win=contentframe.contentWindow,
		doc,
		fun = function(doc){
			timer=setInterval(function(){
			var h=doc.scrollHeight;
			if (h){
				contentframe.height=h;
			}
		},500);
	};
	clearInterval(timer);
	if (win.document){
		fun(win.document.documentElement||win.document.body);
	}
}
