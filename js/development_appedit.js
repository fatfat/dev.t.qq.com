;(function(){
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

	'.icon_alert {',
		'width: 38px;',
		'height: 38px;',
		'background: url(http://mat1.gtimg.com/app/opent/images/public/icon.png)',
			'-352px -59px no-repeat;',
		'display: inline-block;',
		'zoom: 1;',
	'}'
	].join('');
	util.createStyle(str);

	tpl.development_app_info = [
		'<input type="hidden" name="app_id" value="<%=app.app_id%>">',
		'<input type="hidden" name="app_type" value="<%=app.app_type%>">',
		'<input type="hidden" name="postname" id="postname" value="0">',
		'<input type="hidden" name="isFramePost" value="1"/>',

		'<%if (app.app_type ==5) {%>',
			//'<!--iweibo组件-->',
			'<li>',
				'<label class="form_label"><em>*</em> 网站名称：</label><span class="form_input"><input type="text" name="app_name" id="app_name" data-rule="appname" <% if (app.app_status ==3 ||app.app_status ==5||app.app_status ==8||app.app_status ==6||app.app_status ==4) { %>  disabled= "disabled" <% } %>',
					'value="<%=app.app_name%>" data-default="<%=app.app_name%>" data-error="网站名称" maxlength="16"/></span>',
				'<label class="gray inputdes">该名称用于<a href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F" target="_blank">来源显示</a>，不超过16个字符</label>',
			'</li>',
			'<li showfor="app_for_pc">',
				'<label class="form_label">',
					'<em>*</em>网站地址：',
				'</label><span class="form_input"><input type="text" name="app_url" id="app_url" value="<%=app.app_url%>"',
					'data-error="网站地址" data-rule="link"/></span>',
				'<label class="gray inputdes">用户通过该地址访问你的网站，同时也作为来源链接地址</label>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'网站简介：',
				'</label><span class="form_input"><textarea name="app_description" id="app_description" data-rule="appdes" data-error="网站简介" maxlength="300"><%=app.app_description%></textarea></span>',
				'<label class="gray inputdes">请简述网站的作用、使用方法等信息，最多140个汉字<br/>最少30个汉字</label>',
			'</li>',
			//'<!--/iweibo组件-->',
		'<%} else if (app.app_type ==3) {%>',
			//'<!--客户端应用-->',
			'<li>',
				'<label class="form_label"><em>*</em> 应用名称： </label>',
				'<span class="form_input"><input type="text" name="app_name" id="app_name" data-rule="appname" <% if (app.app_status ==3 ||app.app_status ==5||app.app_status ==8||app.app_status ==6||app.app_status ==4) { %> disabled= "disabled" <% } %>',
					'value="<%=app.app_name%>" data-default="<%=app.app_name%>" data-error="应用名称" maxlength="14"/></span>',
				'<label class="gray inputdes">该名称用于<a href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F" target="_blank">来源显示</a>，不超过7个汉字</label>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用类型：',
				'</label>',
				'<div class="form_element">客户端应用</div>',
			'</li>',
			'<li showfor="app_for_pc">',
				'<label class="form_label">',
					'<em>*</em>应用网址：',
				'</label>',
				'<span class="form_input"><input type="text" name="app_url" id="app_url" value="<%=app.app_url%>" data-error="应用网址" data-rule="link" data-default="<%=app.app_url%>" /></span>',
				'<label class="gray inputdes">用户通过该地址使用应用，同时也作为来源链接地址</label>',
			'</li>',
			'<li>',
				'<label class="form_label">',
					'<em>*</em>下载地址：',
				'</label>',
				'<span class="form_input"><input type="text" name="app_down_url" id="app_down_url" value="<%=app.app_down_url%>" data-error="下载地址" data-rule="link"/></span>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用分类：',
				'</label>',

				'<span class="form_element form_selectclass">',
				'<select name="app_class_main" id="app_class_main" data-rule="app_class_main" data-error="请选择分类" class="app_class_main">',
					'<option value="-1">请选择</option>',
					'<% for (var i = 0, _typelist; _typelist = typelist[2][i]; i++) {%>',
						'<%if (app.app_class_main== typelist.cid) {%>',
							'<option value="<%=typelist.cid%>" selected="selected"><%=typelist.cname%></option>',
						'<% } else { %>',
							'<option value="<%=typelist.cid%>"><%=typelist.cname%></option>',
						'<% } %>',
					'<% } %>',
					//'/*',
					//'<!--{foreach item=typelist  from=$typelist.2}-->',
					//'<%if (app.app_class_main== $typelist.cid) {%>',
					//'<option value="<%=typelist.cid%>" selected="selected"><%=typelist.cname%></option>',
					//'<% } else { %>',
					//'<option value="<%=typelist.cid%>"><%=typelist.cname%></option>',
					//'<% } %>',
					//'<% } %>',
					//'*/',
				'</select>',
				'</span>',
			'</li>',
			'<li style="height:82px;">',
				'<label class="form_label">',
					'<em>*</em>应用平台：',
				'</label>',
				'<span class="form_input form_select"><input type="text" name="app_support" id="app_support" value="" data-rule="appsupport" data-error="应用平台" readonly style="width:65px;"/>',
					'<a class="form_select_icon" href="javascript:;" tabindex="-1" hidefocus="true"></a>',
					'<ul class="form_select_options app_terminal"  style="width:75px;">',
						'<li data-terminal="app_phone">手机</li><li data-terminal="app_pad">平板</li><li data-terminal="app_os">PC</li>',
					'</ul>',
				'</span>',
				'<div id="app_support_list">',
				'<dl>',
					'<dd>',
						'<input type="checkbox" name="check_app_phone"  id="app_mobile_0" value="iOS" /><label for="app_mobile_0">iOS</label>',
						'<input type="checkbox" name="check_app_phone"  id="app_mobile_1" value="Android"/><label for="app_mobile_1">Android</label>',
						'<input type="checkbox" name="check_app_phone"  id="app_mobile_3" value="Symbian" /><label for="app_mobile_3">Symbian</label>',
						'<input type="checkbox" name="check_app_phone"  id="app_mobile_2" value="Windows Phone"/><label for="app_mobile_2">Windows Phone</label>',
						'<input type="checkbox" name="check_app_phone"  id="app_mobile_4" value="Other"/><label for="app_mobile_4">Other</label>',
					'</dd>',
					'<dd>',
						'<input type="checkbox" name="check_app_pad"  id="app_pad_0" value="iPad" /><label for="app_pad_0">iPad</label>',
						'<input type="checkbox" name="check_app_pad"  id="app_pad_1" value="AndroidPad"/><label for="app_pad_1">AndroidPad</label>',
						'<input type="checkbox" name="check_app_pad"  id="app_pad_2" value="gPad"/><label for="app_pad_2">gPad</label>',
						'<input type="checkbox" name="check_app_pad"  id="app_pad_3" value="Other" /><label for="app_pad_3">Other</label>',
					'</dd>',
					'<dd>',
						'<input type="checkbox" name="check_app_os"  id="app_pc_0" value="Windows" /><label for="app_pc_0">Windows</label>',
						'<input type="checkbox" name="check_app_os"  id="app_pc_1" value="Mac"/><label for="app_pc_1">Mac</label>',
						'<input type="checkbox" name="check_app_os"  id="app_pc_2" value="Linux"/><label for="app_pc_2">Linux</label>',
					'</dd>',
				'</dl>',
				'</div>',
				'<input type="hidden" name="app_phone" value="<%=app.app_phone%>"/><input type="hidden" name="app_pad" value="<%=app.app_pad%>"/><input type="hidden" name="app_os" value="<%=app.app_os%>"/>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用简介：',
				'</label>',
				'<span class="form_input"><textarea name="app_description" id="app_description" data-rule="appdes" data-error="应用简介" maxlength="300"><%=app.app_description%></textarea></span>',
				'<label class="gray inputdes">请简述应用的作用、使用方法等信息<br/>应用简介将显示在应用介绍页中，最多140个汉字<br/>最少30个汉字</label>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用微博帐号：',
				'</label>',
				'<span class="form_input"><input type="text" name="app_weibo" id="app_weibo" data-rule="appweibo" data-error="应用微博帐号" maxlength="20" value="<%=app.app_weibo%>" data-default="<%=app.app_weibo%>" ></span>',
				'<label class="gray inputdes">请填写该应用的官方微博帐号</label><div class="appweiboIntro"><a id="appweiboLink" href="javascript:;">填写示例</a><div class="appweiboDetail">如你画我猜应用，填写蓝框所示内容：<br/>http://t.qq.com/<span class="appweiboExample">nihuawocai</span></div></div>',
			'</li>',
			//'<!--/客户端应用-->',
		'<%} else if (app.app_type ==6) {%>',
			//'<!--无线应用-->',
			'<li>',
				'<label class="form_label"><em>*</em> 应用名称： </label>',
				'<span class="form_input"><input type="text" name="app_name" id="app_name" data-rule="appname"  <% if (app.app_status ==3 ||app.app_status ==5||app.app_status ==8||app.app_status ==6||app.app_status ==4) { %>  disabled= "disabled" <% } %>',
					'value="<%=app.app_name%>" data-default="<%=app.app_name%>" data-error="应用名称" maxlength="14"/></span>',
				'<label class="gray inputdes">该名称用于<a href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F" target="_blank">来源显示</a>，不超过7个汉字</label>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用类型：',
				'</label>',
				'<div class="form_element">无线应用</div>',
			'</li>',
			'<li showfor="app_for_pc">',
				'<label class="form_label">',
					'<em>*</em>应用网址：',
				'</label>',
				'<span class="form_input"><input type="text" name="app_url" id="app_url" value="<%=app.app_url%>" data-error="应用网址" data-rule="link" data-default="<%=app.app_url%>" /></span>',
				'<label class="gray inputdes inputdes2">用户通过该地址下载或使用应用<br/>同时也作为来源链接地址</label>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用分类：',
				'</label>',
				'<span class="form_element form_element2 form_selectclass">',
					'<select name="app_class_main" id="app_class_main" data-rule="app_class_main" data-error="请选择分类" class="app_class_main">',
						'<option value="-1">请选择</option>',
						'<% for (var i = 0, _typelist; _typelist = typelist[2][i]; i++) {%>',
							'<%if (app.app_class_main == _typelist.cid) {%>',
								'<option value="<%=_typelist.cid%>" selected="selected"><%=_typelist.cname%></option>',
							'<% } else { %>',
								'<option value="<%=_typelist.cid%>"><%=_typelist.cname%></option>',
							'<% } %>',
						'<% } %>',
						//'/*',
						//'<!--{foreach item=typelist  from=$typelist.2}-->',
						//'<%if (app.app_class_main== $typelist.cid) {%>',
						//'<option value="<%=typelist.cid%>" selected="selected"><%=typelist.cname%></option>',
						//'<% } else { %>',
						//'<option value="<%=typelist.cid%>"><%=typelist.cname%></option>',
						//'<% } %>',
						//'<% } %>',
						//'*/',
					'</select>',
				'</span>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>应用平台： </label>',
				'<span class="form_element form_element2 form_checkplatform">',
					'<input type="checkbox" class="appplatform" name="appplatform" id="iphone_pf" <%if (app.app_platform==3 || app.app_platform==1) {%>checked<% } %> <%if (iphoneinfo.app_plat_status ==2) {%>disabled<% } %>/><label for="iphone_pf" class="checkbox_label">iPhone</label>',
					'<input type="checkbox" class="appplatform" name="appplatform" id="android_pf" <%if (app.app_platform==3 || app.app_platform==2) {%>checked<% } %> <%if (androidinfo.app_plat_status ==2) {%>disabled<% } %>/><label for="android_pf" class="checkbox_label">Android</label>',
					'<input type="hidden" name="app_platform" id="app_platform" value="<%=app.app_platform%>"/>',
					'<input type="hidden" id="wapp_platform" value="0"/><!--用在app_edit.js中，用于判断无线应用审核通过、上架拒绝、下架后，修改应用网址和75X75图标后需要重新审核-->',
				'</span>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用微博帐号：',
				'</label>',
				'<span class="form_input"><input type="text" name="app_weibo" id="app_weibo" data-rule="appweibo" data-error="应用微博帐号" maxlength="20" value="<%=app.app_weibo%>" data-default="<%=app.app_weibo%>" ></span>',
				'<label class="gray inputdes">请填写该应用的官方微博帐号</label><div class="appweiboIntro"><a id="appweiboLink" href="javascript:;">填写示例</a><div class="appweiboDetail">如你画我猜应用，填写蓝框所示内容：<br/>http://t.qq.com/<span class="appweiboExample">nihuawocai</span></div></div>',
			'</li>',
		'<%} else if (app.app_type ==4) {%>',
			'<!--站内应用-->',
			'<li>',
				'<label class="form_label"><em>*</em> 应用名称： </label>',
				'<span class="form_input"><input type="text" name="app_name" id="app_name" data-rule="appname"  <% if (app.app_status ==3 ||app.app_status ==5||app.app_status ==8||app.app_status ==6||app.app_status ==4||app.app_comefrom!=0) { %>  disabled= "disabled" <% } %>',
					'value="<%=app.app_name%>" data-default="<%=app.app_name%>" data-error="应用名称" maxlength="14"/></span>',
				'<label class="gray inputdes">该名称用于<a href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F" target="_blank">来源显示</a>，不超过7个汉字</label><br/>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用类型：',
				'</label>',
				'<div class="form_element"><%if (app.app_hosting==1 ) {%>站内应用—托管<% } else { %>站内应用—非托管<% } %></div>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>部署模式：</label>',
				'<div class="form_element">',
				'<input type="radio" id="app_hosting" name="app_hosting" value="1" <% if(app.app_hosting  || app.app_status ==3 ||app.app_status ==5||app.app_status ==8||app.app_status ==6||app.app_status ==4||app.app_comefrom!=0) {%>  <%if (app.app_hosting) {%> checked="true"  <% } %> disabled= "disabled" <% } %> />',
				'<label for="app_hosting">&nbsp;使用腾讯云平台托管/部署服务(Hosting) </label>',
				'<a href="javascript:;" id="tuguan" class="valign">托管/非托管详细介绍</a>',
					'<div style="margin-top:-10px;_ margin-top:0;">',
						'<input type="radio" name="app_hosting"id="app_nohosting" value="0"  <% if(app.app_hosting || app.app_status ==3 ||app.app_status ==5||app.app_status ==8||app.app_status ==6||app.app_status ==4||app.app_comefrom!=0) { %> disabled= "disabled"  <%if (app.app_hosting ) {%>  <%} else {%> checked="true" <% } %><%} else {%> checked="true" <% } %>/>',
						'<label for="app_nohosting">&nbsp;不使用腾讯云平台托管/部署服务(Non-Hosting)</label>',
					'</div>',
				'</div>',
				
				'<div class="form_element gray" id="showtgdiv">',
										   '微博开放平台针对服务器，带宽，云存储等云服务资源进行计费(<a href="http://wiki.open.qq.com/wiki/%E8%85%BE%E8%AE%AF%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E4%BA%91%E6%9C%8D%E5%8A%A1%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E8%B4%B9%E8%AE%A1%E8%B4%B9%E6%A0%87%E5%87%86" target="_blank">计费标准见这里</a>)；<br />',
				 '应用创建成功后，Non-hosting可改为Hosting，但Hosting不可改为Non-hosting；<br />',
			  'Hosting和Non-hosting应用均可接入支付功能',
				'</div>',
			'</li>',
			'<% if (app.app_hosting != 0 && appnav == "edit") { %>',
			'<li>',
				'<label class="form_label">',
					'应用开发地址：',
				'</label>',
				'<span class="form_input"><input type="text" name="app_url" id="app_url" data-rule="applink" data-error="应用开发地址" value="<%=app.app_url%>" data-default="<%=app.app_url%>"></span>',
				'<span class="gray inputdes">该地址会在<a href="http://app.t.qq.com/app/playtest/<%=app.app_id%>" target="_blank">应用测试地址</a>中被调用</span>',
			'</li>',
			'<% } %>',
			'<li showfor="app_for_pc" id="appurlintroDivLi" style=" position:relative;height:34px;">',
				'<label class="form_label">',
					'<em>*</em><% if (appnav == "edit") { %>',
									'<%if (app.app_hosting == 0) {%>应用实际地址：<% } else { %>应用托管地址：<% } %>',
							  '<% } else { %>',
									'<%if (app.app_hosting == 0) {%>应用实际地址：<% } else { %>应用开发地址：<% } %>',
							  '<% } %>',
				'</label>',
				'<span class="form_input<%if (app.app_hosting == 0) {%><% } else { %> form_select<% } %>"><%if (app.app_hosting == 0) {%><input type="text" name="app_url" id="app_url" value="<%=app.app_url%>" data-error="应用实际地址" data-rule="link" data-default="<%=app.app_url%>"/><% } else { %><span style="width:0;overflow:hidden;display:inline-block;float:left;">&nbsp;</span><input type="text" name="<% if (appnav == "edit") {%>app_online_url<% } else { %>app_url<% } %>" id="<% if (appnav == "edit") {%>app_online_url<% } else { %>app_url<% } %>" <%if (appnav == "edit") {%>value="<%=app.app_online_url%>"<% } else { %>value="<%=app.app_url%>"<% } %> data-error="应用<%if (appnav == "edit") {%>托管<% } else { %>开发<% } %>地址" data-rule="applink"/><% } %><% if (!(appnav == "info" || app.app_hosting == 0)) {%><span style="width:0;overflow:hidden;display:inline-block;float:left;">&nbsp;</span><a class="form_select_icon" href="javascript:;" tabindex="-1" hidefocus="true"></a><ul class="form_select_options"></ul><% } %></span>',
					'<%if (appnav == "edit") {%>',
						'<%if (app.app_hosting == 0) {%>',
							'<a href="javascript:;" class="guideword inputdes">应用实际地址详细介绍',
							  '<label style="width:420px;margin-left:-150px;"  id="app_realpath_desc">',
								'应用开发完毕后，请将应用地址填写在此处 <br/>',
								'应用测试页面的iframe会调用此地址帮助您完成应用测试 <br/>',
								'应用提交审核后，审核人员也会通过该地址审核你的应用 <br/>',
								'用户使用此应用时，微博服务器会向该地址发送请求获取应用内容',
							'</label>',
							'</a>',
						'<% } else { %>',
							'<span class="gray inputdes inputdes2">应用托管地址是应用在托管服务器上的部署地址，',
								'<br/>需申请才能获得，<a href="javascript:;" onclick="$("#apphost_btn").trigger("click");return false;">现在去申请</a>',
							'</span>',
						'<% } %>',
					'<% } else { %>',
						'<%if (app.app_hosting == 0) {%>',
							'<a href="javascript:;" class="guideword inputdes">应用实际地址详细介绍',
							  '<label style="width:420px;margin-left:-150px;"  id="app_realpath_desc">',
								'应用开发完毕后，请将应用地址填写在此处 <br/>',
								'应用测试页面的iframe会调用此地址帮助您完成应用测试 <br/>',
								'应用提交审核后，审核人员也会通过该地址审核你的应用 <br/>',
								'用户使用此应用时，微博服务器会向该地址发送请求获取应用内容',
							'</label>',
							'</a>',
						'<% } else { %>',
							'<a href="javascript:;" class="guideword inputdes">应用开发地址详细介绍',
							  '<label style="width:420px;margin-left:-150px;"  id="app_realpath_desc">',
								'应用开发完毕后请先将应用部署在自己的服务器上，并将应用地址填写在此处<br/>',
								'应用提交审核后，审核人员通过该地址审核你的应用 <br/>',
								'应用上架后此地址失效',
							'</label>',
							'</a>',
						'<% } %>',
					'<% } %>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用分类：',
				'</label>',
				'<span class="form_element form_selectclass">',
					'<select name="app_class_main" id="app_class_main" data-rule="app_class_main" data-error="请选择分类"  class="app_class_main">',
						'<option value="-1">请选择</option>',
						'//<!--{foreach item=typelist  from=$typelist.2}-->',
						'<% for (var i = 0, _typelist; _typelist = typelist[2][i]; i++) {%>',
							'<%if (app.app_class_main == _typelist.cid) {%>',
								'<option value="<%=_typelist.cid%>" selected="selected"><%=_typelist.cname%></option>',
							'<% } else { %>',
								'<option value="<%=_typelist.cid%>"><%=_typelist.cname%></option>',
							'<% } %>',
						'<% } %>',
					'</select>',

					'<% if (app.app_class_child != "" && app.app_class_child != 0 && app.app_class_child != -1 && app.app_class_main != 11 || typelist_1[1] != "") { %>',
					'<select name="app_class_child" id="app_class_child" data-rule="app_class_child" data-error="请选择分类" >',
						'<% if (typelist_1[1] != "") { %>',
							'<!--若站内应用二级分类为空-->',
							'<option value="-1">请选择</option>',
						'<% } %>',
						//'//<!--{foreach item=typelist_1 from=$typelist_1.1}-->',
						'<% for (var i = 0, _typelist_1; _typelist_1 = typelist_1[1][i]; i++) {%>',
							'<%if (app.app_class_child == _typelist_1.cid) {%>',
								'<option value="<%=_typelist_1.cid%>" selected="selected"><%=_typelist_1.cname%></option>',
							'<% } else { %>',
								'<option value="<%=_typelist_1.cid%>"><%=_typelist_1.cname%></option>',
							'<% } %>',
						'<% } %>',
					'<% } else { %>',
						'<select name="app_class_child" id="app_class_child" style="display:none;">',
					'<% } %>',
					'</select>',
				'</span>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用简介：',
				'</label>',
				'<span class="form_input"><textarea name="app_description" id="app_description" data-rule="appdes" data-error="应用简介" maxlength="300"><%=app.app_description%></textarea></span>',
				'<label class="gray inputdes">请简述应用的作用、使用方法等信息<br/>应用简介将显示在应用介绍页中，最多140个汉字<br/>最少30个汉字</label>',
			'</li>',
			'<li>',
				'<label class="form_label">',
					'应用宽度：',
				'</label>',
				'<div class="form_element"><% if (app.app_width > 760 ) { %>950px<%} else {%>760px<% } %></div>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用高度：',
				'</label>',
				'<span class="form_input"><input type="text" name="app_hight" id="app_hight" data-rule="apphight" data-error="应用高度" value="<%=app.app_hight%>"></span>',
				'<label class="gray inputdes">请填写您的应用高度（正整数），范围在700-1200</label>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用微博帐号：',
				'</label>',
				'<span class="form_input"><input type="text" name="app_weibo" id="app_weibo" data-rule="appweibo" data-error="应用微博帐号" maxlength="20" value="<%=app.app_weibo%>" data-default="<%=app.app_weibo%>" ></span>',
				'<label class="gray inputdes">请填写该应用的官方微博帐号</label><div class="appweiboIntro"><a id="appweiboLink" href="javascript:;">填写示例</a><div class="appweiboDetail">如你画我猜应用，填写蓝框所示内容：<br/>http://t.qq.com/<span class="appweiboExample">nihuawocai</span></div></div>',
			'</li>',
			'<!--站内应用-->',
		'<%} else {%>',
			//'<!--网页应用-->',
			'<li>',
				'<label class="form_label"><em>*</em> 应用名称： </label>',
				'<span class="form_input"><input type="text" name="app_name" id="app_name" data-rule="appname"  <% if (app.app_status ==3 ||app.app_status ==5||app.app_status ==8||app.app_status ==6||app.app_status ==4) {%>  disabled= "disabled" <% } %>',
					'value="<%=app.app_name%>" data-default="<%=app.app_name%>" data-error="应用名称" maxlength="16"/></span>',
				'<label class="gray inputdes">该名称用于<a href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F" target="_blank">来源显示</a>，不超过7个汉字</label><br/>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用类型：',
				'</label>',
				'<div class="form_element"><span>网页应用</span><% if (app.app_status ==2||app.app_status ==6||app.app_check_status !=1) { %><a href="javascript:" id="change_type" style="margin-left:20px;">改为站内应用</a><% } %></div>',
			'</li>',
			'<li showfor="app_for_pc">',
				'<label class="form_label">',
					'<em>*</em>应用网址：',
				'</label>',
				'<span class="form_input"><input type="text" name="app_url" id="app_url" value="<%=app.app_url%>"',
					'data-error="应用网址" data-rule="link" data-default="<%=app.app_url%>"/></span>',
				'<label class="gray inputdes">用户通过该地址使用应用，同时也作为来源链接地址</label>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用分类：',
				'</label>',
				'<span class="form_element form_selectclass">',
					'<select name="app_class_main" id="app_class_main" data-rule="app_class_main" data-error="请选择分类"  class="app_class_main">',
					'<option value="-1">请选择</option>',
					'<% for (var i = 0, _typelist; _typelist = typelist[0]; i++) {%>',
						'<%if (app.app_class_child== _typelist.cid) {%>',
							'<option value="<%=_typelist.cid%>" selected="selected"><%=_typelist.cname%></option>',
						'<% } else { %>',
							'<option value="<%=_typelist.cid%>"><%=_typelist.cname%></option>',
						'<% } %>',
					'<% } %>',
					'</select>',
				'</span>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用简介：',
				'</label>',
				'<span class="form_input"><textarea name="app_description" id="app_description" data-rule="appdes" data-error="应用简介" maxlength="300"><%=app.app_description%></textarea></span>',
				'<label class="gray inputdes">请简述应用的作用、使用方法等信息<br/>应用简介将显示在应用介绍页中，最多140个汉字<br/>最少30个汉字</label>',
			'</li>',
			'<li>',
				'<label class="form_label"><em>*</em>',
					'应用微博帐号：',
				'</label>',
				'<span class="form_input"><input type="text" name="app_weibo" id="app_weibo" data-rule="appweibo" data-error="应用微博帐号" maxlength="20" value="<%=app.app_weibo%>" data-default="<%=app.app_weibo%>" ></span>',
				'<label class="gray inputdes">请填写该应用的官方微博帐号</label><div class="appweiboIntro"><a id="appweiboLink" href="javascript:;">填写示例</a><div class="appweiboDetail">如你画我猜应用，填写蓝框所示内容：<br/>http://t.qq.com/<span class="appweiboExample">nihuawocai</span></div></div>',
			'</li>',

			//'<!--/网页应用-->',
		'<% } %>'
	].join('');

	tpl.development_app_material = [
	'<li>',
		'<label class="form_label">',
			'<%if (app.app_type ==5 ) {%>组件图标：<%} else if (app.app_type ==6) {%><em>*</em>应用图标：<%} else {%>应用图标：<%}%>',
		'</label>',
		'<div class="form_element">',
		'<table width="550">',
			'<tbody>',
				'<tr>',
					'<td valign="bottom" align="left" height="75">',
						'<label class="nullimg">',
							'<img src="<%=app.app_icon_16 || \'http://mat1.gtimg.com/app/opent/images/websites/0.gif\'%>" width="16" height="16" _width="16" _height="16"/>',
						'</label>',
						'<br>',
						'<label>',
							'16×16',
						'</label>',
						'<br>',
						'<label for="icon1" class="uploadbtn">',
							'上传',
						'</label>',
						'<input type="file" _size="10" accept="image/png" name="icon1" id="icon1" data-default="<%=app.app_icon_16%>" <%if (app.app_type ==6 ) {%>class="required" _size="15"<%} else {%>class="file"<%}%>  data-label="<%if (app.app_type == 5) {%>组件图标<%} else {%>应用图标<%}%>"/>',
						'<input type="hidden" name="img_need_post" id="img_need_post" value="0">',
					'</td>',
					'<td valign="bottom" align="left">',
						'<label class="nullimg">',
							'<img src="<%=app.app_icon_50 || \'http://mat1.gtimg.com/app/opent/images/websites/0.gif\'%>" width="50" height="50" _width="50" _height="50"/>',
						'</label>',
						'<br>',
						'<label>',
							'50×50',
						'</label>',
						'<br>',
						'<label for="icon2" class="uploadbtn">',
							'上传',
						'</label>',
						'<input type="file" _size="10" accept="image/png" name="icon2" id="icon2" data-default="<%=app.app_icon_50%>" <%if (app.app_type ==6 ) {%>class="required" _size="15"<%} else {%>class="file"<%}%> data-label="<%if (app.app_type == 5) {%>组件图标<%} else {%>应用图标<%}%>"/>',
					'</td>',
					'<td valign="bottom" align="left">',
						'<label class="nullimg">',
							'<img src="<%=app.app_icon_64 || \'http://mat1.gtimg.com/app/opent/images/websites/0.gif\'%>" width="64" height="64" _width="64" _height="64" />',
						'</label>',
						'<br>',
						'<label>',
							'64×64',
						'</label>',
						'<br>',
						'<label for="icon3" class="uploadbtn">',
							'上传',
						'</label>',
						'<input type="file" _size="10" accept="image/png" name="icon3" id="icon3" data-default="<%=app.app_icon_64%>" <%if (app.app_type ==6 ) {%>class="required" _size="15"<%} else {%>class="file"<%}%> data-label="<%if (app.app_type == 5) {%>组件图标<%} else {%>应用图标<%}%>"/>',
					'</td>',
					'<td valign="bottom" align="left">',
						'<label class="nullimg">',
							'<img src="<%=app.app_icon_75 || \'http://mat1.gtimg.com/app/opent/images/websites/0.gif\'%>" width="75" height="75" _width="75" _height="75"/>',
						'</label>',
						'<br>',
						'<label>',
							'75×75',
						'</label>',
						'<br>',
						'<label for="icon4" class="uploadbtn">',
							'上传',
						'</label>',
						'<input type="file" _size="10" accept="image/png" name="icon4" id="icon4" data-default="<%=app.app_icon_75%>" <%if (app.app_type ==6 ) {%>class="required" _size="15"<%} else {%>class="file"<%}%> data-label="<%if (app.app_type == 5) {%>组件图标<%} else {%>应用图标<%}%>"/>',
					'</td>',
					'<%if (app.app_type ==6 ) {%>',
						'<td valign="bottom" align="left">',
						'<label class="nullimg">',
							'<img src="<%=app.app_icon_114 || \'http://mat1.gtimg.com/app/opent/images/websites/0.gif\'%>" width="114" height="114" _width="114" _height="114"/>',
						'</label>',
						'<br>',
						'<label>',
							'114×114',
						'</label>',
						'<br>',
						'<label for="icon5" class="uploadbtn">',
							'上传',
						'</label>',
						'<input type="file" _size="10" accept="image/png" name="icon5" id="icon5" data-default="<%=app.app_icon_114%>" <%if (app.app_type ==6 ) {%>class="required" _size="15"<%} else {%>class="file"<%}%> data-label="<%if (app.app_type == 5) {%>组件图标<%} else {%>应用图标<%}%>"/>',
					'</td>',
					'<%}%>',
				'</tr>',
				'<tr>',
					'<td colspan="<%if (app.app_type == 6) {%>5<%} else {%>4<%}%>" >',
						'<label class="gray">',
							'*图片格式为png &nbsp; &nbsp; *每张图片最大不超过10K',
						'</label>',
						'<div id="anquanlink" style="display:none;">',
							'<a href="http://open.t.qq.com/bbs/forum.php?mod=viewthread&amp;tid=21271" target="_blank">',
								'如何将本站添加到受信任的站点列表中？',
							'</a>',
						'</div>',
					'</td>',
				'</tr>',
			'</tbody>',
		'</table>',
		'</div>',
	'</li>',

	'<% if (app.app_type !=5 && app.app_type !=6) { %>',
	'<li>',
		'<label class="form_label">',
		   '应用预览图：',
		'</label>',
		'<div class="form_element">',
			'<table width="450">',
				'<tbody>',
					'<tr>',
						'<td>',
							'<label class="nullimg">',
								'<img src="<%=app.app_icon_p1 || \'http://mat1.gtimg.com/app/opent/images/websites/0.gif\'%>" width="200" height="150" _width="330" _height="247">',
							'</label>',
							'<br>',
							'<label>',
								'330×247',
							'</label>',
							'<label class="uploadbtn" for="pic1">',
								'上传',
							'</label>',
							'<input type="file" _size="50" accept="image/png" name="pic1" id="pic1" data-default="<%=app.app_icon_p1%>" class="file" data-label="应用预览图"/>',
						'</td>',
						'<td>',
							'<label class="nullimg">',
								'<img src="<%=app.app_icon_p2 || \'http://mat1.gtimg.com/app/opent/images/websites/0.gif\'%>" width="200" height="150" _width="330" _height="247">',
							'</label>',
							'<br>',
							'<label>',
								'330×247',
							'</label>',
							'<label class="uploadbtn" for="pic2">',
								'上传',
							'</label>',
							'<input type="file" _size="50" accept="image/png" name="pic2" id="pic2" data-default="<%=app.app_icon_p2%>" class="file" data-label="应用预览图"/>',
						'</td>',
					'</tr>',
					'<tr ><td height="10"  colspan="2"></td></tr>',
					'<tr><td colspan="2"><label class="gray">*图片格式为png &nbsp; &nbsp; *每张图片最大不超过50K</label> </td></tr>',
				'</tbody>',
			'</table>',
			'<div class="graydes">预览图在应用详情页展示，建议您提交的截图体现腾讯微博与应用结合场景</div>',
			'<div class="materialIntro previewIntro">',
				'<a class="example" id="previewExample" href="javascript:;">填写示例</a>',
				'<div class="materialDetail previewDetail" id="previewDiv">',
					'<div class="meterialTitle">在应用详情页，会显示两张应用预览图，如蓝框所示</div>',
					'<img id="previewImg" width="431px" height="270px" src="http://mat1.gtimg.com/app/opent/images/development/apppreview.jpg"/>',
				'</div>',
			'</div>',
		'</div>',
	'</li>',
		'<%if (app.app_type ==4) {%>',
		'<li>',
			'<label class="form_label">',
				'应用背景图：',
			'</label>',
			'<div class="form_element">',
				'<table width="450">',
				'<tbody>',
					'<tr>',
						'<td  colspan="2">',
							'<label class="nullimg">',
								'<img src="<%=app.app_icon_p3 || \'http://mat1.gtimg.com/app/opent/images/websites/0.gif\'%>" width="350"',
								'height="247" _width="760" _height="580">',
							'</label>',
							'<br>',
							'<label>',
								'760×580',
							'</label>',
							'<label class="uploadbtn" for="pic3">',
								'上传',
							'</label>',
							'<input type="file" _size="100" accept="image/png" name="pic3" id="pic3" data-default="<%=app.app_icon_p3%>" class="file" data-label="应用背景图"/>',
						'</td>',
					'</tr>',
					'<tr><td><label class="gray">*图片格式为png &nbsp; &nbsp; *每张图片最大不超过100K</label> </td></tr>',
				'</tbody>',
			'</table>',
			'<div class="graydes">背景图在进入应用页面展示</div>',
			'<div class="materialIntro previewIntro">',
				'<a class="example" id="backgroundExample" href="javascript:;">填写示例</a>',
				'<div class="materialDetail backgroundDetail" id="backgroundDiv">',
					'<div class="meterialTitle">进入应用时，会显示应用背景图，即蓝框所示</div>',
					'<img id="backgroundImg" width="409px" height="335px" src="http://mat1.gtimg.com/app/opent/images/development/appbackground.jpg"/>',
				'</div>',
			'</div>',
			'</div>',
		'</li>',
		'<%}%>',
	'<%}%>'
	].join('');

	tpl.appedit = [
	'<!--{ include file="header.tpl" }-->',
	tpl.header,
	'<div id="content" class="controlCon main main_app">',
		'<div class="approate"><a href="/development/">我的应用</a> &gt; <span><%=app.app_name%></span>',
		'</div>',
		'<div class="deverLeft">',
			'<div class="leftMain">',
				'<div class="uicon"><img src="<%=app.app_icon_75 || \'http://mat1.gtimg.com/app/opent/images/index/icon.jpg\'%>" height="75" width="75" /><br />',
					'<p><%=app.app_name%></p>',
				'</div>',

			//'<!--{ include file="./development/appnav.tpl" }-->',
				tpl.appnav,
			'</div>',
		'</div>',
		'<div class="deverRight">',
		'<h1 class="comp_tit">应用基本信息</h1>',
			'<iframe id="appform_post_aec" name="appform_post_aec" width="100" height="100" src="about:blank" style="display: none;"></iframe>',
			'<form action="/development/saveappinfo?appid=<%=app.app_id%>" method="post" class="appform <%if (app.app_type==6) {%>wirelessappform<%}%>" enctype="multipart/form-data" id="appform" target="appform_post_aec" onsubmit="return false">',
			'<ul>',
				'<%if (app.app_status==2) {%>',
					'<li class="alert alert_warn" beclose="true">',
					'<h4>应用审核中，应用资料不可修改</h4>',
					'</li>',
				'<%} else if (app.app_status==6) {%>',
					'<li class="alert alert_warn" beclose="true">',
					'<h4>上架审核中，应用资料不可修改</h4>',
					'</li>',
				'<%} else if (app.app_url_check ==true ) {%>',
					'<li class="alert alert_warn" beclose="true">',
					'<h4>应用网址已提交，审核通过后才能生效</h4>',
					'</li>',
				'<%} else if (app.app_check_status ==1 ) {%>',
					'<li class="alert alert_warn" beclose="true">',
					'<h4>资料已提交，审核通过后才能生效</h4>',
					'</li>',
				'<%} else if (app.app_check_status ==2 && (app.app_status ==5 || app.app_status ==8 || app.app_status ==3)) {%>',
					'<li class="alert alert_warn" beclose="true"><a href="javascript:;" class="hidebtn closealert">关闭</a>',
					'<h4>资料已通过审核</h4>',
					'</li>',
				'<%} else if (app.app_check_status ==3 && (app.app_status ==5 || app.app_status ==8 || app.app_status ==3)) {%>',
					'<li class="alert alert_warn" beclose="true"><a href="javascript:;" class="hidebtn closealert">关闭</a>',
					'<h4>你修改的资料未通过审核，可以修改后重新提交<br />',
					'如果有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></h4>',
					'</li>',
				'<%}%>',
				//'<!--{ include file="./development/development_app_info.tpl" }-->',
				tpl.development_app_info,
				//'<!--{ include file="./development/development_app_material.tpl" }-->',
				tpl.development_app_material,
				'<li style="height:39px;"><label class="form_label">&nbsp;</label> <span class="form_element">',
					'<input type="submit" class="devSubmit" id="devSubmit" value="<%if (app.app_type==3 || app.app_type==6) {%>保存设置<%} else {%>保存<%}%>" data-rule="formauto">',
					'<input type="reset" class="devCancel" value="取消" onclick="history.go(-1)"> </span>',
				'</li>',
			'</ul>',
			'</form>',
		'</div>',
	'</div>',
	//'<!--{ include file="footer.tpl" }-->',
	tpl.footer,
	].join('');

	global_obj.data.app = global_obj.data.app || {};
	global_obj.data.iphoneinfo = global_obj.data.iphoneinfo || {};
	var iphoneinfo = global_obj.data.iphoneinfo;
	global_obj.data.androidinfo = global_obj.data.androidinfo || {};
	var androidinfo = global_obj.data.androidinfo;
	var app = global_obj.data.app;
	$('#main').html(tmpl(tpl.appedit, global_obj.data));
	//appnav js begin
	var user_certif_status= global_obj.data.developer.user_certif_status;
	var user_check_status= global_obj.data.developer.user_check_status;//资质证明审核状态
	var app_binbond= global_obj.data.app.app_binbond;//保证金

	$(function(){
		$("#apphost_btn").click(function(event){ 
			/*var ret = +($(this).attr("data-default"));
			if (typeof(event.button) === "undefined" && window.app_status && (+app_status === 3)){
				loginWin.alert('<center>应用已上架，无须再申请！</center>');
				return false;
			}
			if (ret === 0){
				loginWin.alert('<center>应用通过审核后才能使用托管服务！</center>');
			}else{
				location.href = $(this).attr("href");
			}*/
			if(app_binbond ===0){//未分配保证金
				if( user_certif_status ===0 && ( user_check_status===0 || user_check_status===1 || user_check_status===2 )){
					var str="<center>开发者资质证明通过审核后，才能申请服务器和托管地址<br/><br/><a href=\"/development/certification\">现在去上传资质证明</a><br/><br/></center>";
					loginWin.alert({"text":str,"height":215,"ok_text":"我知道了"});
					return false;	
				}
			}
			location.href = $(this).attr("href");
			
			return false;
		}); 
		$("a#apppay_uncheck").click(function(){ 
			loginWin.alert('<center>应用通过审核后才能使用支付结算服务！</center>')
		});   
		$("a#apppay_unpay").click(function(){ 
			loginWin.alert('<center>尚未开通支付权限，如需开通请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></center>')
		}); 
		$("a#apppay_unOnline").click(function(){ 
		loginWin.alert('<center>应用上架后才能申请此功能！</center>')
		}); 
	}); 
	//appnav js end

	//development_app_info js begin
	if (app.app_type != 5) {
		var str = [
			'label.form_label{width:100px;}',
			'.appform span.form_input{margin-left:100px;}',
			'.appform .form_element {margin-left:100px;}',
			'#showtgdiv{display:none;line-height:1.75;}',
			'#showtgdiv.show{display:inline-block;*display:inline;zoom:1;}'
		].join('');
		util.createStyle(str);
	}

	if (app.app_type == 4) {
		$(function(){
			$("input[name='app_hosting']").click(function(){
				var t = $(this).filter(":checked").val();
					$("#app_realpath_desc").html([
						'应用开发完毕后，请将应用地址填写在此处 <br/>应用测试页面的iframe会调用此地址帮助您完成应用测试 <br/>应用提交审核后，审核人员也会通过该地址审核你的应用 <br/>用户使用此应用时，微博服务器会向该地址发送请求获取应用内容',
						'应用开发完毕后请先将应用部署在自己的服务器上，并将应用地址填写在此处<br/>应用测试页面的iframe会调用此地址帮助您完成应用测试<br>应用提交审核后，审核人员也会通过该地址审核你的应用<br> 应用上架后此地址失效'
					][+t]).width([350,420][+t]);
			});
			$('#tuguan').mouseover(function(){
				$('#showtgdiv').addClass("show");
				$(this).parent().addClass("reflow");
			});
		})
	}
	var TIMER = {};
	$("#appweiboLink").mouseover(function(){
			if(TIMER.timer){
				clearTimeout(TIMER.timer);
			}
			$(".appweiboDetail").show();
		}).mouseout(function(){
			TIMER.timer = setTimeout(function(){
				$(".appweiboDetail").hide();
			}, 200);
		});
		
		$(".appweiboDetail").mouseover(function(){
			if(TIMER.timer){
				clearTimeout(TIMER.timer);
			}
		}).mouseout(function(){
			TIMER.timer = setTimeout(function(){
				$(".appweiboDetail").hide();
			}, 200);
		});

	if (app.app_type ==6) {
		$(function(){
			function getPlatform() {
				var app_platform = 0;
				if($("#iphone_pf").attr("checked") && $("#android_pf").attr("checked")){
					app_platform = 3;
				}else if($("#iphone_pf").attr("checked")){
					app_platform = 1;
				}else if($("#android_pf").attr("checked")){
					app_platform = 2;
				}
			
				$("input[name='app_platform']").val(app_platform);
				return app_platform;
			 }
			 
			 $("input[name='appplatform']").change(function(){
				var appplatform = $("input[name='appplatform']");
				getPlatform();
				if($("input[name='appplatform']:checked").length == 0){
					showmsg(false,$("#iphone_pf"),"请至少选择一个平台");
					loginWin.alert("<center>请至少选择一个平台</center>");
				}else{
					showmsg(true,$("#iphone_pf"),"");
				}
			});
		});
	}

	if (app.app_type != 5 && app.app_type != 3 && app.app_type != 6 && app.app_type != 4){
		$(function(){
		var app_status=app.app_status;

		$('a#change_type').click(function(){
			if(app_status == 1||app_status == 7||app_status==5||app_status==4||app_status==8){
				loginWin.show({
					"width": 685,
					"height": 360,
					"title": "提示",
					"text": '<div class="tipTop" style="height: auto;">\
							<div style="width: 645px; margin: 0 auto;">\
							<h3 style="padding-left: 26px; font-size: 14px; font-weight: normal; background: url(http://mat1.gtimg.com/app/opent/images/development/icon_notice.gif) no-repeat 0 0;">改为"站内应用"后将无法改回到原来的应用类型，如果确定改为站内应用，请选择部署模式：</h3>\
							<div id="app_hosting1" style="padding: 15px 30px 30px;">\
								<p><input type="radio"  name="app_hosting1" value="1" id="app_hosting"/>\
									<label for="app_hosting">使用腾讯云平台托管/部署服务(Hosting)</label>  </p>\
								<p><input type="radio" name="app_hosting1" value="0" checked="true" id="app_nohosting"/>\
									<label for="app_nohosting">不使用腾讯云平台托管/部署服务(Non-Hosting)</p>\
							</div>\
							<p style="padding-left: 15px;">应用托管详细介绍：</p>\
							<p style="color: #777; padding-left: 15px;">微博开放平台针对服务器，带宽，云存储等云服务资源进行计费(<a href="http://wiki.open.qq.com/wiki/%E8%85%BE%E8%AE%AF%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E4%BA%91%E6%9C%8D%E5%8A%A1%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E8%B4%B9%E8%AE%A1%E8%B4%B9%E6%A0%87%E5%87%86" target="_blank">计费标准见这里</a>)；</p>\
							<p style="color: #777; padding-left: 15px;">如果你的应用需要接支付功能，请选择“Hosting”，Non-hosting不可接支付功能；</p>\
							<p style="color: #777; padding-left: 15px;">应用创建成功后，Non-hosting可改为Hosting，但Hosting不可改为Non-hosting。</p>\
							</div>\
						</div>\
						<div class="tipBottom" style="text-align: center;"><input type="button" class="devSubmit" value="确定" /></div>'
				});
				var $sureBtn = loginWin.contentarea.find(".devSubmit");
				$sureBtn.bind("click", function () {
					loginWin.close();
					loginWin.show({text:"<center><br/>正在转为站内应用，请不要关闭浏览器！</center>",height:120,width:450});
					var postData = 'app_type=4&action=1'
					+ '&app_id='+app_id
					+ '&app_hosting='+$('#app_hosting1 input:checked').val();
					$.ajax({
						type: "POST",
						url: "/development/saveappinfo?appid="+app_id,
						dataType: "json",
						data: postData,
						success: function(msg){
							//alert(JSON.stringify(msg));
							loginWin.close();
							if(msg.error == 0){
								if(app_status==1||app_status==7)
								loginWin.alert('<center>应用类型修改成功，请按<a href="http://wiki.open.t.qq.com/index.php/%E5%BA%94%E7%94%A8%E9%A2%91%E9%81%93%E6%8E%A5%E5%85%A5%E6%8C%87%E5%BC%95#.E5.B7.B2.E5.BC.80.E5.8F.91.E7.9A.84.E7.AB.99.E5.A4.96.E5.BA.94.E7.94.A8.E6.8E.A5.E5.85.A5" target="_blank">站内应用改造规范</a>进行改造</center>', function() {
									window.submitCallback && submitCallback(msg);
									location.reload();
								});
								else
									loginWin.alert('<center>已提交，通过审核后才能生效</center>', function() {
										window.submitCallback && submitCallback(msg);
										location.reload();
									});
									
							 }else if(msg.error == 1){
								 //注册或修改出错，打印错误
								 //alert( "Data Saved: " + msg ); 
								 loginWin.alert("<center>提交内容包含非法数据，请重新提交</center>");
							 }else{
								 loginWin.alert("<center>数据提交失败，请稍候再试</center>");    
							 }
						},
						error:function(){
							 loginWin.close();
							 loginWin.alert("<center>网络连接失败，请稍候再试</center>");    
						}
				 }); 
				});
			}
			else if(app_status == 3){
				 loginWin.close();
				 loginWin.alert('<center>已上架应用不能直接修改应用类型，如有修改需要<a  href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></center>');
				}
			else if(app_status == 2){
					loginWin.close();
					 loginWin.alert("<center>应用审核中，不能修改应用类型，审核完毕后即可修改</center>");
					}	
			else {
				loginWin.close();
				loginWin.alert("<center>上架审核中，不能修改应用类型，审核完毕后即可修改</center>");
			   }   
		});   
		});
	}
	//development_app_info js end

	//development_app_material js begin
	if (app.app_type ==6) {
		$(function(){
			$('input[type=file]').change(function(){ $('input#img_need_post').val('1')});
		})
	}

	if (app.app_type !=5 && app.app_type !=6) {
		$(function(){
			$('input[type=file]').change(function(){ $('input#img_need_post').val('1')});
		})
	}

	if (app.app_type ==4) {
		$(function(){
			$('input[type=file]').change(function(){ $('input#img_need_post').val('1')});
		})
	}

	var app_type =+ app.app_type;

	$(function(){
		var BKTIMER = {};
		$("#backgroundExample").mouseover(function(){
			if(BKTIMER.timer){
				clearTimeout(BKTIMER.timer);
			}
			$("#backgroundDiv").show();
		}).mouseout(function(){
			BKTIMER.timer = setTimeout(function(){
				$("#backgroundDiv").hide();
			}, 200);
		});

		$("#backgroundDiv").mouseover(function(){
			if(BKTIMER.timer){
				clearTimeout(BKTIMER.timer);
			}
		}).mouseout(function(){
			BKTIMER.timer = setTimeout(function(){
				$("#backgroundDiv").hide();
			}, 200);
		});
			
		var PRETIMER = {};
		$("#previewExample").mouseover(function(){
			if(PRETIMER.timer){
				clearTimeout(PRETIMER.timer);
			}
			$("#previewDiv").show();
		}).mouseout(function(){
			PRETIMER.timer = setTimeout(function(){
				$("#previewDiv").hide();
			}, 200);
		});

		$("#previewDiv").mouseover(function(){
			if(PRETIMER.timer){
				clearTimeout(PRETIMER.timer);
			}
		}).mouseout(function(){
			PRETIMER.timer = setTimeout(function(){
				$("#previewDiv").hide();
			}, 200);
		});
	});
	//development_app_material  js end

	util.createScript("http://mat1.gtimg.com/app/opent/js/app_appedit.js?20130328");

	if ((app.app_check_status ==1 && app.app_url_check == '') || app.app_status ==2 || app.app_status ==6 || (app.app_status ==5 && (iphoneinfo.app_plat_status == 1 || androidinfo.app_plat_status == 1)) || ((iphoneinfo.app_check_status ==1 || androidinfo.app_check_status ==1) && (iphoneinfo.app_plat_status == 2 || androidinfo.app_plat_status == 2))){
		$(function(){ 
			$('input,textarea').attr("disabled","disabled"); 
			$('input,select').attr("disabled","disabled"); 
			$('input#devSubmit').attr("class","devCancel");
			$('label.uploadbtn').hide();
			$('input[type="file"]').hide();
		});
	}

	if (app.app_url_check ==true ) {
		$(function(){ 
			$('input#app_url').attr("disabled","disabled");
		});
	}

	if (app.app_status ==5 || app.app_status ==4 || app.app_status ==8) {
		$(function(){ 
			$('input[type="file"]').addClass("required");
		});
	}

	var app_url_check=app.app_url_check || '0',
		ex_appname = app.app_name,
		app_status=app.app_status,
		app_check_status=app.app_check_status,
		app_id=app.app_id,
		android_plat_status=androidinfo.app_plat_status,
		iphone_plat_status=iphoneinfo.app_plat_status;


	if (app.app_type == 4 ) {
	var tSiteWebApp = true;
	} else {
	var tSiteWebApp = false; 
	}
	$(function(){
		$(".appform li.alert").find(".hidebtn").click(function(){
		var t=$(this),p=t.parent(),c=p.find(".alert_content");
			if (p.attr("beclose")){
			p.hide();
			$.get("/development/clearappsitemsg?appid=" + app.app_id + "&st="+new Date().getTime());
			return;
			}
		}); 
		$('input#app_name').change(function(){ 
			if(ex_appname != $('input#app_name').val()){
				$('input#postname').val('1');
			}else{
				$('input#postname').val('0'); 
			}
		}) 
	});
})();
