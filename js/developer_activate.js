// JavaScript Document

var developer_activate = [       
	tpl.header, 
	'<div class="actioninfo">',
	'<%if(uinError!=null){%>',
		'<%if(uinError === "noUin"){%>',
			'<img src="http://mat1.gtimg.com/app/opent/images/index/transparent.gif" class="alert"/>',
			'很抱歉，激活失败，激活链接出错，<p>',
			'请打开<a href="/developer/edit">此页面</a>，修改邮箱，到邮箱获取最新激活链接，重新激活开发者身份！ </a>',
		'<%}else if(uinError === "errUin"){%>',
			'<img src="http://mat1.gtimg.com/app/opent/images/index/transparent.gif" class="alert"/>',
			'很抱歉，激活失败，激活帐号出错，<p>',
			'请用QQ: <%=comform_uin%> 帐号登录，再重新打开<a href="<%=request_url%>">此激活链接！ </a>',
			'</p><%}%>',
	'<%}else{%>',
		'<%if(activateResult!=null){%>',
			'<img src="http://mat1.gtimg.com/app/opent/images/index/transparent.gif" class="ok"/> 恭喜！你已激活开发者身份',
			'<p class="p">',
			'<a href="http://dev.t.qq.com/websites/" id="newcomp" class="btn_new_comp" title="使用组件"></a>',
			'<a href="http://dev.t.qq.com/developer/#0" id="newapp" class="btn_new_app" title="创建应用"></a>',
			'</p>',
		'<%}else{%>',
			'<img src="http://mat1.gtimg.com/app/opent/images/index/transparent.gif" class="alert"/>很抱歉，激活失败，可能激活链接已经过期。',
			'<p>您可以点击',
			'<a href="/developer/edit" class="links">此处</a>修改用户信息并且重新发送激活邮件！',
			'</p><%}%>',
	'<%}%>',	
	'</div>',
	tpl.footer
].join("");

global_obj.data.uinError = global_obj.uinError;
global_obj.data.comform_uin = global_obj.comform_uin;
global_obj.data.request_url = global_obj.request_url;
global_obj.data.activateResult = global_obj.activateResult;
$('#main').html(tmpl(developer_activate, global_obj.data));
