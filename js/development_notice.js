var str = [
	'.hostingclick {',
		'cursor: pointer;',
		'line-height: 25px;',
		'padding-left: 0.8em;',
		'padding-right: 0.8em;',
		'border-top: 1px solid #d9d9d9;',
		'border-left: 1px solid #d9d9d9;',
		'border-right: 1px solid #d9d9d9;',
		'font-weight: bold;',
	'}',

	'.hosting {',
		'cursor: pointer;',
		'line-height: 25px;',
		'padding-left: 0.8em;',
		'padding-right: 0.8em;',
		'border-bottom: 1px solid #d9d9d9;',
	'}',

	'div a#yunJPGClick {',
		'display: none',
	'}',
	'#change_type_a_link a {vertical-align:baseline;}'
].join('');
util.createStyle(str);

this.tpl = this.tpl || {};

tpl.development_notice = [
	'<!--{ include file="header.tpl" }-->',
	tpl.header,
	'<div id="content" class="controlCon main main_app">',
		'<div class="approate"><a href="/development/">我的应用</a> &gt; <span><%=app.app_name%></span>',
		'</div>',
		'<div class="deverLeft">',
			'<div class="leftMain">',
				'<div class="uicon"><img src="<%=app.app_icon_75 || \'http://mat1.gtimg.com/app/opent/images/index/icon.jpg\'%>"',
					'height="75" width="75" /><br />',
				'<p><%=app.app_name%></p>',
				'</div>',

			'<!--{ include file="./development/appnav.tpl" }-->',
			'</div>',
		'</div>',
		
		'<div class="deverRight">',
		'<h1 class="comp_tit">接入通知系统</h1>',
		'<% if (!app.notice_account) { %>',
			'<p>应用可通过通知接口将应用信息以系统通知的形式下发到用户，是触达用户的有效方式</p>',
			'<a href="/development/addnotice?appid=<%=app.app_id%>" title="申请接入" class="devSubmit">申请接入</a>',
		'<%}%>',
		
		'<!-- 审核结果提示 -->',
		'<ul class="noticeinfo">',
			'<%if (app.notice_bdaction==0) {%>',
				'<%if (app.notice_check_status==2) {%>',
				'<li>',
				'<h4>审核中...</h4>',
				'<br/>',
				'</li>',
				'<%} else if (app.notice_check_status==1) {%>',
				'<li>',
				'<h4>审核未通过，原因如下：</h4>',
				'<p><%=app.notice_check_msg%></p>',
				'<p>请修改后<a href="/development/addnotice?appid=<%=app.app_id%>">重新提交审核</a>，如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></p>',
				'</li>',
				'<%} else if (app.notice_check_status==3) {%>',
				 '<li>',
				 '<h4>审核已通过，可调用通知接口了</h4>',
				 '<p>通知帐号：<%=app.notice_nick%>（@<%=app.notice_account%>）</p>',
				 '<p>权限等级：<%=app.notice_clevel%></p>',
				 '<p>如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></p>',
				 '<br/>',
				 '<li>',
				'<%}%>',
			'<%} else if (app.notice_bdaction==1) {%>',
				'<li>',
				'<h4>该应用的通知接口权限已被管理员调整为"<%=app.notice_clevel%>"。</h4>',
				'<p>通知帐号：<%=app.notice_nick%>（@<%=app.notice_account%>）</p>',
				'<p>权限等级：<%=app.notice_clevel%></p>',
				'<p>如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></p>',
				'<br/>',
				'</li>',
				'<%} else if (app.notice_bdaction==2) {%>',
				'<li>',
				'<h4>该应用的通知接口权限已被管理员停用，并禁止该应用再次申请调用。原因如下：</h4>',
				'<p><%=app.notice_check_msg%></p>',
				'<p>如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></p>',
				'<br/>',
				'</li>',
				'<%} else if (app.notice_bdaction==3) {%>',
				 '<li>',
				 '<h4>该应用的通知接口权限已被管理员停用，但可重新申请调用。原因如下：</h4>',
				 '<p><%=app.notice_check_msg%></p>',
				 '<p>如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></p>',
				 '<a href="/development/addnotice?appid=<%=app.app_id%>" title="申请接入" class="devSubmit">申请接入</a>',
				 '<br/>',
				 '<li>',
			'<%}%>',
			'</ul>',
			
			'<!-- 通知系统介绍 -->',
		'<h1 class="comp_tit">通知系统介绍</h1>',
		'<ul class="noticeinfo">',
			'<% if (app.notice_status==2  || (app.notice_bdaction==0 && app.notice_check_status==3)) { %>',
			'<li class="alertnotice"><p><b>通知接口的使用方式介绍</b></p>',
				'<p>请求说明</p>',
				'<table cellpadding="0" border="0" class="noticetbl">',
					'<tbody>',
					'<tr><td width="180px">url</td><td>http://notice.t.qq.com/api/notice/app_notice</td></tr>',
					'<tr><td>格式</td><td> xml,json</td></tr>',
					'<tr><td>http请求方式</td><td> post</td></tr>',
					'<tr><td>是否需要鉴权</td><td> true</td></tr>',
					'<tr><td>请求数限制</td><td> true</td></tr>',
					'<tr><td>接口测试</td><td> <a href="http://test.open.t.qq.com/notice.html" class="external text" rel="nofollow" target="_blank">点击这里测试</a></td></tr>',
					'</tbody>',
				'</table>',
				'<p>参数说明</p>',
				'<table cellpadding="0" border="0" class="noticetbl">',
					'<tr>',
						'<th width="180px">参数名称</th><th>描述</th></tr>',
					'<tr>',
						'<td>format</td><td>返回数据的格式（json或xml）</td></tr>',
					'<tr>',
						'<td>appkey</td><td>开发者申请的appkey</td></tr>',
					'<tr>',
						'<td>clientip</td><td>用户ip（必须填写真实ip）</td></tr>',
					'<tr>',
						'<td>content</td><td>通知内容</td></tr>',
					'<tr>',
						'<td>openid</td><td>通知接受人的openid（即，使用本应用的人）</td></tr>',
					'<tr>',
						'<td>nonce</td><td>请求防重串</td></tr>',
					'<tr>',
						'<td>timestamp</td><td>请求时间戳</td></tr>',
					'<tr>',
						'<td>sig</td><td>签名串（32位）</td></tr>',
					'<tr>',
						'<td>method</td><td>签名方法：md5 or HMAC-SHA1</td></tr>',
				'</table>',
				'<p><a href="http://wiki.open.t.qq.com/index.php/%E7%AB%99%E5%86%85%E5%BA%94%E7%94%A8%E9%80%9A%E7%9F%A5%E6%8E%A5%E5%8F%A3/%E5%8F%91%E9%80%81%E9%80%9A%E7%9F%A5" target="_blank">具体使用方式介绍</a></p>',
			
			'</li>',
			'<li class="alertnotice"><p><b>使用通知接口的注意事项</b></p>',
				'<p>（1）第三方应用使用其官方微博账号进行通知发送，每款应用只开通一个账号；</p>',
				'<p>（2）第三方应用只能向各自已授权添加应用的用户下发通知，不能向非该应用的用户下发通知；</p>',
				'<p>（3）根据开发者的信用记录、应用特点及用户规模，为不同应用开通不同级别权限，相应发送频率和发送量进行控制。对权限暂定以下三个级别：</p>',
					'<div style="margin-left:25px;"><p>a.初级权限：每小时1000条，每天发送总量10000条；</p>',
					'<p>b.高级权限：每小时5000条，每天发送总量50000条；</p>',
					'<p>c.合作方权限：每小时10000条，每天发送总量100000条。</p></div>',
				'<p>（4）单用户每天成功接收同一应用的通知不超过3条，超出的通知自动丢弃；单用户每天成功接收第三方应用的总量不超过10条，超出的自动丢弃。</p>',
			'</li>',
			'<%} else {%>',
			'<li class="alertnotice"><p><b>什么是通知系统</b></p>',
				'<p>通知系统是应用将更新、活动、激活用户等相关的信息在微博上直接触达用户的渠道</p>',
				'<p><img src="http://mat1.gtimg.com/app/opent/images/development/noticeintro.png" alt="什么是通知系统"></p>',
			'</li>',
			'<li class="alertnotice"><p><b>哪些应用可以接入通知系统</b></p>',
				'<p>已上架的站内应用可接入通知系统</p>',
			'</li>',
			'<li class="alertnotice"><p><b>接入通知系统的流程</b></p>',
				'<p><img src="http://mat1.gtimg.com/app/opent/images/development/noticeprocess.png" alt="接入通知系统的流程"> </p>',
			'</li>',
			'<%}%>',
		'</ul>',
		
		'</div>',
	'</div>',
	'<!--{ include file="footer.tpl" }-->',
	tpl.footer
].join('');

$('#main').html(tmpl(tpl.development_notice,global_obj.data));
global_obj.init.notice = function(){
	$(".applyNotice").click(function(){
		$(this).attr("href","/development/addnotice?appid=" + app.app_id);
	});
};


