tpl.development_iweibonav = [
	'<ul class="appsnav">',
		'<li <%if (appnav =="info") {%> class="active"  <%}%>><a href="/development/iweiboinfo?appid=<%=app.app_id%>">组件信息</a></li>',
		'<li <%if (appnav =="edit"){%> class="active"  <%}%>><a href="/development/iweibosite?appid=<%=app.app_id%>">网站信息</a></li>',
		'<!-- ',
		'<li><a href="">转让应用</a></li>',
		'<li><a href="">删除应用</a></li>',
		'-->',
	'</ul>'
].join("");
