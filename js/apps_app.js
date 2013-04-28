// JavaScript Document
this.tpl = this.tpl || {};
this.tpl.apps_app = [
this.tpl.header, 
'<style>',
'label.form_label{width:110px;}',
'.appform .form_input,.appform .form_element{margin-left:110px;}',
'.appform .form_element input[type="radio"]{position:relative;top:-2px;}',
'#showtgdiv{display:none;line-height:1.75;}',
'#showtgdiv.show{display:inline-block;_ display:inline;zoom:1;_ background:url(about:blank);}',
'</style>',
	'<div id="content" class="deverCon wrapper">' ,
		'<h3 class="formtitle">',
		'<%if(appType==1){%>创建网页应用<%}%>',
		'<%if(appType==2){%>创建应用<%}%>',
		'<%if(appType==3){%>创建客户端应用<%}%>',
		'<%if(appType==4){if(!cid){%>创建站内应用<%}else{%>创建游戏应用<%}}%>',
		'<%if(appType==5){%>使用iWeibo<%}%>',
		'<%if(appType==6){%>创建无线应用<%}%>',
		'<%if(appType==7){%>创建网页应用<%}%>',
		'</h3>',
		'<div class="formWrap">', 
			'<form action="" method="post" class="appform <%if(appType==6){%>wirelessappform<%}%>" onsubmit="return false;" >',
				'<ul>', 
					'<li>', 
						'<label class="form_label"><em>*</em><%if(appType==5){%>网站名称<%}else{%>应用名称<%}%>： </label>' ,
						'<span class="form_input"><input type="text" class="txt" id="app_name" name="app_name" data-rule="appname" data-error="应用名称" maxlength="14"></span>',
						'<label class="gray inputdes">该名称用于<a href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F" target="_blank">来源显示</a>，不超过7个汉字</label><br/>',
					'</li>', 
					
			 '<%if(appType==4){%>',
					'<li><label class="form_label"><em>*</em>部署模式：</label><div class="form_element"><input type="radio" id="app_hosting" name="app_hosting" value="1"/> <label for="app_hosting">使用腾讯云平台托管/部署服务(Hosting) </label><a href="javascript:;" id="tuguan" class="valign">托管/非托管详细介绍</a><div style="margin-top:-10px;_ margin-top:0;"><input type="radio" name="app_hosting"id="app_nohosting" value="0" checked="true"/> <label for="app_nohosting">不使用腾讯云平台托管/部署服务(Non-Hosting)</label></div></div>',
						'<div class="form_element gray" id="showtgdiv">',
						 '微博开放平台针对服务器，带宽，云存储等云服务资源进行计费(<a href="http://wiki.open.qq.com/wiki/%E8%85%BE%E8%AE%AF%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E4%BA%91%E6%9C%8D%E5%8A%A1%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E8%B4%B9%E8%AE%A1%E8%B4%B9%E6%A0%87%E5%87%86" target="_blank">计费标准见这里</a>)；<br />',
						'应用创建成功后，Non-hosting可改为Hosting，但Hosting不可改为Non-hosting；<br />',
						'Hosting和Non-hosting应用均可接入支付功能',
						'</div>',
					'</li>',  
			'<%}%>',
					'<li showfor="app_for_pc" id="appurlintroDivLi" style=" position:relative">', 
						'<label class="form_label"><em>*</em><%if(appType==5){%>网站地址<%}else if(appType==4){%>应用开发地址<%}else{%>应用网址<%}%>： </label>', 
						'<span class="form_input"><input type="text" class="txt" name="app_url"  id="app_url" data-rule="link" data-error="<%if(appType==5){%>网站地址<%}else if(appType==4){%>应用开发地址<%}else{%>应用网址<%}%>"></span>', 
						'<%if(appType==5){%>',
							'<label class="gray inputdes">用户通过该地址访问你的网站，同时也作为来源链接地址</label>',
						'<%}else if(appType==4){%>',
							 '<a href="javascript:;" class="guideword inputdes">应用开发地址详细介绍<label style="width:350px;margin-left:0;" id="app_realpath_desc">',
							 '<%if(app.app_hosting==0){%>',
								'应用开发完毕后，请将应用地址填写在此处 <br/>应用测试页面的iframe会调用此地址帮助您完成应用测试 <br/>应用提交审核后，审核人员也会通过该地址审核你的应用 <br/>用户使用此应用时，微博服务器会向该地址发送请求获取应用内容',
							 '<%}else{%>',
								'应用开发完毕后请先将应用部署在自己的服务器上，并将应用地址填写在此处<br/>应用测试页面的iframe会调用此地址帮助您完成应用测试<br>应用提交审核后，审核人员也会通过该地址审核你的应用<br> 应用通过审核、并部署完毕后，将托管域名填写在此处，以完成应用测试和上架',
							'<%}%>',
							'</label></a>',
						'<%}else if(appType==6){%>',
							'<label class="gray inputdes">用户通过该地址下载或使用应用，同时也作为来源链接地址</label>',
						'<%}else{%>',
							'<label class="gray inputdes">用户通过该地址使用应用，同时也作为来源链接地址</label>',
						'<%}%>',
					'</li>',							
				 '<%if(appType !=5){%>',				
					'<li>',
						'<label class="form_label"><em>*</em>',
							'应用分类：',
						'</label>',
						'<span class="form_element form_selectclass">',
							'<select name="app_class_main" id="app_class_main" data-rule="app_class_main" data-error="请选择分类" class="app_class_main">',
								'<option value="-1">请选择</option>',
								'<%for(var i=0;i<typelist.length;i++){%>',
								'<option value="<%=typelist[i].cid%>" ><%=typelist[i].cname%></option>',
								'<%}%>',
							'</select>',
						'<%if(!cid){%>',
							'<select name="app_class_child" id="app_class_child" style="display:none;"></select>',
						'<%}else{%>',	
							'<select name="app_class_child" id="app_class_child" style="display:inline-block;">',
								'<%for(var i=0;i<subtypelist.length;i++){%>',
								'<option value="<%=subtypelist[i].cid%>"><%=subtypelist[i].cname%></option>',
								'<%}%>',
							'</select>',
						'<%}%>',
						'</span>',
					'</li>',
				'<%}%>',
				'<%if(appType ==6){%>',	
					'<li>',
						'<label class="form_label"><em>*</em>应用平台： </label>',
						'<span class="form_element form_checkplatform">',
							'<input type="checkbox" class="appplatform" name="appplatform" id="iphone_pf"/><label for="iphone_pf" class="checkbox_label">iPhone</label>',
							'<input type="checkbox" class="appplatform" name="appplatform" id="android_pf"/><label for="android_pf" class="checkbox_label">Android</label>',
							'<input type="hidden" name="app_platform" id="app_platform"/>',
						'</span>',
					'</li>', 
				'<%}else{%>',	
					'<li>',
						'<label class="form_label"><%if(appType==5){%>网站简介<%}else{%>应用简介<%}%>： </label>',
						'<span class="form_input"><textarea name="app_description" id="app_description" data-rule="appdes" data-error="应用简介" maxlength="300"></textarea></span>',
						'<label class="gray inputdes"><%if(appType==5){%>请简述网站的作用、使用方法等信息，最多140个汉字<%}else{%>请简述应用的作用、使用方法等信息<br/>应用简介将显示在应用介绍页中，最多140个汉字<%}%></label>',
					'</li>',
				'<%}%>',
					this.tpl.agreementTmpl,
					'<li>', 
						'<label class="form_label">&nbsp;</label>', 
						'<span class="form_element">',
						'<input type="hidden" name="app_type" value="<%=appType%>" /> ',
						'<input type="submit" class="devSubmit" value="提交" data-rule="formauto" id="ajaxsumbit"/>', 
						'<input type="reset" class="devCancel" value="取消" onclick="history.go(-1);return false;" />',
						'</span>',
					'</li> ',
				'</ul> ',
			'</form> ',
		'</div> ',
	'</div>',
	this.tpl.footer
].join("");	

//add 20130525----------------------------------
//数据更正
global_obj.data.userInfo = userInfo;
global_obj.data.navPos = 6;
global_obj.data.app = {};
global_obj.data.developer = global_obj.developer;


//----------------------------------------------
var _appType = util.getUrlParam("apptype");
var appType = global_obj.data.appType || _appType ||1;
global_obj.data.appType = appType;


var cid = global_obj.data.cid || 0;
var appTypeName = ["应用", "组件"][0 + (appType == 5)];

$("#main").append(tmpl(this.tpl.apps_app,global_obj.data));

$(function() {
	if (cid === 3) { //游戏应用
		$(".appform .app_class_main").val("3");
	}
	$("input[name='app_hosting']").click(function() {
		var t = +$(this).filter(":checked").val();
		$("#app_realpath_desc").html(['应用开发完毕后，请将应用地址填写在此处 <br/>应用测试页面的iframe会调用此地址帮助您完成应用测试 <br/>应用提交审核后，审核人员也会通过该地址审核你的应用 <br/>用户使用此应用时，微博服务器会向该地址发送请求获取应用内容', '应用开发完毕后请先将应用部署在自己的服务器上，并将应用地址填写在此处<br/>应用测试页面的iframe会调用此地址帮助您完成应用测试<br>应用提交审核后，审核人员也会通过该地址审核你的应用<br> 应用通过审核、并部署完毕后，将托管域名填写在此处，以完成应用测试和上架'][t]).width([350, 420][t]);
		if (1 === t) {
			$('#appurlintroDivLi').hide();
			if ("" == $.trim($('#app_url').val())) {
				$('#app_url').val('http://www.qq.com');
			}
		} else {
			$('#appurlintroDivLi').show();
			if ("http://www.qq.com" == $.trim($('#app_url').val())) {
				$('#app_url').val('');
			}
		}
	});
	$('#tuguan').mouseover(function() {
		$('#showtgdiv').addClass("show");
		$(this).addClass("reflow");
	});
	$('#appurlintroA').mouseover(function() {
		$('#appurlintroDiv').show();
	});
	$('#appurlintroDiv,#appurlintroDivLi').mouseout(function() {
		$('#appurlintroDiv').hide();
	})

	var tSiteWebApp = appType == 4 ? true: false;

	if (appType == 6) {
		$(function() {
			function getPlatform() {
				var app_platform = 0;
				if ($("#iphone_pf").attr("checked") && $("#android_pf").attr("checked")) {

					app_platform = 3;
				} else if ($("#iphone_pf").attr("checked")) {
					app_platform = 1;
				} else if ($("#android_pf").attr("checked")) {
					app_platform = 2;
				}

				$("input[name='app_platform']").val(app_platform);
				return app_platform;
			}

			$("input[name='appplatform']").change(function() {
				var appplatform = $("input[name='appplatform']");
				getPlatform();
				if ($("input[name='appplatform']:checked").length == 0) {
					showmsg(false, $("#iphone_pf"), "请至少选择一个平台");
					loginWin.alert("<center>请至少选择一个平台</center>");
				} else {
					showmsg(true, $("#iphone_pf"), "");
				}
			});
		});
	}

	$(".appform").submit(function() {
		if ($(this).attr("commmiting")) {
			return false;
		}
		$(this).attr("commmiting", "commmiting"); //表单正在提交当中
		var postData = {
			"op": 1,
			"app_type": appType,
			"app_name": $("#app_name").val(),
			"app_description": appType == 6 ? "": $("#app_description").val(),
			"app_class_main": $("#app_class_main").val(),
			action:"common_query",
			business_type:"wirelessdoadd"
		},
		f = $(this);
		if (appType == 4) {
			app_hosting = $("input[name='app_hosting']:checked").val();
			postData["app_hosting"] = app_hosting;
			postData["app_class_child"] = $("#app_class_child").val();
			if (1 != app_hosting) {
				postData["app_url"] = $("#app_url").val();
			}
		} else {
			if (appType == 6) {
				postData["app_platform"] = $("#app_platform").val();
			} else {
				postData["app_url"] = $("#app_url").val();
			}
		}
		
		/*http://open_test.t.qq.com/pipes/interfaceserver?
		action=common_query
		&business_type=wirelessdoadd
		&app_url=http://www.qq.com
		&app_name=macowutestdoaddaa1
		&app_type=1
		&app_class_main=5001
		&app_description=aaabbb*/
		
		$.ajax({
			type: "POST",
			//url: "/apps/doadd?t=" + new Date().getTime(),
			url:"/pipes/interfaceserver?t=" + new Date().getTime(),
			dataType: "json",
			data: postData,
			success: function(d) {
				//var ret = +(d.ret || d.error),
				var ret = +(d.code ),
				msg = common.getMsgByRet(ret);
				if (msg) {
					loginWin.alert("<center>" + msg + "</center>");
					return;
				}
				if (ret === 0) {
					loginWin.alert("<center>创建成功</center>",
					function() {
						location.href = '/apps/getappkey?appid=' + d.data.appId;
						//location.href = '/apps/getappkey/' + d.data.appId + '/' + d.data.appKey + '-' + appType;
					});
				} else {
					f.removeAttr("commmiting");
					loginWin.alert("<center>创建失败," + d.msg + "</center>");
				}
			},
			"error": function() {
				loginWin.alert("<center>网络连接失败，请稍候重试！</center>");
				f.removeAttr("commmiting");
			}
		});
		return false;
	})
});