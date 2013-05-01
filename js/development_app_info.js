var app = global_obj.data.app;
if (app.app_type != 5) {
	var str = [
		'label.form_label{width:100px;}',
		'.appform span.form_input{margin-left:100px;}',
		'.appform .form_element {margin-left:100px;}',
		'#showtgdiv{display:none;line-height:1.75;}',
		'#showtgdiv.show{display:inline-block;*display:inline;zoom:1;}'
	].join("");
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

this.tpl = this.tpl || {};
tpl.apptype5 = [
	'<!--iweibo组件-->',
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
		'<!--/iweibo组件-->',
].join("");
tpl.apptype3 = [
	'<!--客户端应用-->',
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
				'<% for (var i = 0, type; type = typelist[2][i]; i++) {%>',
					'<%if (app.app_class_main== type.cid) {%>',
					'<option value="<%=type.cid%>" selected="selected"><%=type.cname%></option>',
					'<% } else { %>',
					'<option value="<%=type.cid%>"><%=type.cname%></option>',
					'<% } %>',
				'<% } %>',
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
		'<input type="hidden" name="app_phone" value="<%=app.app_phone%>"/><input type="hidden" name="app_pad" value="<%=app.app_pad%>"/><input type="hidden" name="app_os" value="<%=app.app_os%>"/></li>',
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
		'<!--/客户端应用-->',
].join("");
tpl.apptype6 = [
	'<!--无线应用-->',
		'<li>',
			'<label class="form_label"><em>*</em> 应用名称： </label>',
			'<span class="form_input"><input type="text" name="app_name" id="app_name" data-rule="appname" ',
			'<% if (app.app_status ==3 ||app.app_status ==5||app.app_status ==8||app.app_status ==6||app.app_status ==4) { %> ',
				'disabled= "disabled" ',
			'<% } %>',
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
					'<% for (var i = 0, type; type = typelist[i]; i++) {%>',
						'<%if (app.app_class_main== type.cid && type.lev == 1 && type.pid == 0 ) {%>',
							'<option value="<%=type.cid%>" selected="selected"><%=type.cname%></option>',
						'<% } else if (type.lev == 1 && type.pid == 0) { %>',
						'<option value="<%=type.cid%>"><%=type.cname%></option>',
						'<% } %>',
					'<% } %>',
				'</select>',
			'</span>',
		'</li>',
		'<li>',
			'<label class="form_label"><em>*</em>应用平台： </label>',
			'<span class="form_element form_element2 form_checkplatform">',
				'<input type="checkbox" class="appplatform" name="appplatform" id="iphone_pf" ',
				'<%if (app.app_platform==3 || app.app_platform==1) {%>',
					'checked',
				'<% } %>',
				' <%if (iphoneinfo.app_plat_status ==2) {%>',
					'disabled',
				'<% } %>',
				'/><label for="iphone_pf" class="checkbox_label">iPhone</label>',
				'<input type="checkbox" class="appplatform" name="appplatform" id="android_pf" ',
				'<%if (app.app_platform==3 || app.app_platform==2) {%>',
					'checked',
				'<% } %>',
				'<%if (androidinfo.app_plat_status ==2) {%>',
					'disabled',
				'<% } %>',
				'/><label for="android_pf" class="checkbox_label">Android</label>',
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
].join("");
tpl.apptype4 = [
	'<!--站内应用-->',
		'<li>',
			'<label class="form_label"><em>*</em> 应用名称： </label>',
			'<span class="form_input"><input type="text" name="app_name" id="app_name" data-rule="appname"  <% if (app.app_status ==3 ||app.app_status ==5||app.app_status ==8||app.app_status ==6||app.app_status ==4||app.app_comefrom!=0) { console.log(app.app_status);%>  disabled= "disabled" <% } %>',
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
			'<label for="app_hosting">使用腾讯云平台托管/部署服务(Hosting) </label>',
			'<a href="javascript:;" id="tuguan" class="valign">托管/非托管详细介绍</a>',
				'<div style="margin-top:-10px;_ margin-top:0;">',
					'<input type="radio" name="app_hosting"id="app_nohosting" value="0"  <% if(app.app_hosting || app.app_status ==3 ||app.app_status ==5||app.app_status ==8||app.app_status ==6||app.app_status ==4||app.app_comefrom!=0) { %> disabled= "disabled"  <%if (app.app_hosting ) {%>  <%} else {%> checked="true" <% } %><%} else {%> checked="true" <% } %>/>',
					'<label for="app_nohosting">不使用腾讯云平台托管/部署服务(Non-Hosting)</label>',
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
					'<% for (var i = 0, type; type = typelist[i]; i++) {%>',
						'<%if (app.app_class_main== type.cid && type.lev == 1) {%>',
						//'<%if (app.app_class_main== type.cid) {%>',
							'<option value="<%=type.cid%>" selected="selected"><%=type.cname%></option>',
						'<% } else if (type.lev == 1) { %>',
							'<option value="<%=type.cid%>"><%=type.cname%></option>',
						'<% } %>',
					'<% } %>',
				'</select>',

				'<% if (app.app_class_child != "" && app.app_class_child != 0 && app.app_class_child != -1 && app.app_class_main != 11 || (typelist_1 && typelist_1[1] != "")) { %>',
				'<select name="app_class_child" id="app_class_child" data-rule="app_class_child" data-error="请选择分类" >',
					'<% if (typelist_1[1] != "") { %>',
						'<!--若站内应用二级分类为空-->',
						'<option value="-1">请选择</option>',
					'<% } %>',
					'<% for (var i = 0, type; type = typelist_1[i]; i++) {%>',
						'<%if (app.app_class_child == type.cid) {%>',
							'<option value="<%=type.cid%>" selected="selected"><%=type.cname%></option>',
						'<% } else { %>',
							'<option value="<%=type.cid%>"><%=type.cname%></option>',
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
			'<div class="form_element"><% if (app.app_width> 760 ) { %>950px<%} else {%>760px<% } %></div>',
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
		'<!--站内应用-->'
].join("");

tpl.apptype45 = [
	'<!--网页应用-->',
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
				'<% for (var i = 0, type; type = typelist[i]; i++) {%>',
					'<%if (app.app_class_child== type.cid && type.lev == 2 && type.pid == 11) {%>',
					'<option value="<%=type.cid%>" selected="selected"><%=type.cname%></option>',
					'<% } else if (type.lev == 2 && type.pid == 11){ %>',
					'<option value="<%=type.cid%>"><%=type.cname%></option>',
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

		'<!--/网页应用-->',
].join("");

tpl.development_app_info = [
	'<input type="hidden" name="app_id" value="<%=app.app_id%>">',
	'<input type="hidden" name="app_type" value="<%=app.app_type%>">',
	'<input type="hidden" name="postname" id="postname" value="0">',
	'<input type="hidden" name="isFramePost" value="1"/>',
	//'<%console.log(app.app_type);%>',

	'<%if (app.app_type ==5) {%>',
		tpl.apptype5,
	'<%} else if (app.app_type ==3) {%>',
		tpl.apptype3,
	'<%} else if (app.app_type ==6) {%>',
		tpl.apptype6,
	'<%} else if (app.app_type ==4) {%>',
		tpl.apptype4,
	'<%} else {%>',
		tpl.apptype45,
	'<% } %>'
].join('');

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
					url: "/development/saveappinfo/"+app_id+'/',
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
