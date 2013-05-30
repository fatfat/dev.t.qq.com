;(function(){
	this.tpl = this.tpl || {};
	global_obj.data.app = global_obj.data.app || {};
	if (!global_obj.data.iphoneinfo) global_obj.data.iphoneinfo = {}; 
	if (!global_obj.data.androidinfo) global_obj.data.androidinfo = {}; 
	global_obj.data.appnav = "platform";
	tpl.app_platform = [
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
		'<!--{ include file="./development/appnav.tpl" }-->',
		'</div>',
		tpl.appnav,
		'</div>',

		'<div class="deverRight">',
		'<h3 class="comp_tit" id="platformTitle">平台信息</h3>',
		'<iframe id="appform_post_aec" name="appform_post_aec" width="100" height="100" src="about:blank" style="display: none;"></iframe>',
	//	'<form action="/pipes/interfaceserver?action=common_query&business_type=saveplatform&appid=<%=app.app_id%>" method="post" class="appform wirelessappform" enctype="multipart/form-data" id="appform" target="appform_post_aec" onsubmit="return false">',
		'<form action="/development/saveplatform?action=common_query&business_type=saveplatform&appid=<%=app.app_id%>" method="post" class="appform wirelessappform" enctype="multipart/form-data" id="appform" target="appform_post_aec" onsubmit="return false">',
		'<input type="hidden" name="app_type" value="<%=app.app_type%>">',
			'<!--{ include file="./development/development_appplatform_inner.tpl" }-->',
			tpl.development_appplatform_inner,
			'<div style="height:39px;">',
				'<label class="form_label">&nbsp;</label>',
				'<span class="form_element">',
					'<input type="submit" class="devSubmit" id="devSubmit" value="保存设置" data-rule="formauto"/> ',
					'<input type="reset" class="devCancel" value="取消" onclick="history.go(-1)"/>',
					'<input type="hidden" id="wapp_platform" value="1"/><!--用在app_edit中，用于判断无线应用上架通过后，更改平台信息任一字段，需重新审核-->',
				'</span>',
			'</div>',
		'</form>',
		'</div>',
		'</div>',
		'<!--{ include file="footer.tpl" }-->',
		tpl.footer,
	].join('');

	$('#main').html(tmpl(tpl.app_platform, global_obj.data));
//	global_obj.init.appnav();
//	global_obj.init.appplatform_inner();
bindAllEvent();
	var app = global_obj.data.app || {},
	iphoneinfo = global_obj.data.iphoneinfo || {},
	androidinfo = global_obj.data.androidinfo || {};
	var app_status=global_obj.data.app.app_status,
		iphone_plat_status =  iphoneinfo.app_plat_status || {},
		android_plat_status = androidinfo.app_plat_status || {};

	if ((app.app_check_status ==1 && app.app_url_check == '') || app.app_status ==2 || app.app_status ==6 || (app.app_status ==5 && (iphoneinfo.app_plat_status == 1 || androidinfo.app_plat_status == 1)) || ((iphoneinfo.app_check_status ==1 || androidinfo.app_check_status ==1) && (iphoneinfo.app_plat_status == 2 || androidinfo.app_plat_status == 2))) {
		$(function(){ 
		 	$('input,textarea').attr("disabled","disabled"); 
		 	$('input,select').attr("disabled","disabled"); 
		 	$('input#devSubmit').attr("class","devCancel");
		 	$('label.uploadbtn').hide();
		 	$('input[type="file"]').hide();
		 	$('input[name=appplatform]').attr("disabled","disabled");
		 	$("#btn_SynchroInfo_1").attr("disabled","disabled").css("background-color","#eee");
		 	$("#btn_SynchroInfo_2").attr("disabled","disabled").css("background-color","#eee");
		});

	}

	if (app.app_status ==5 && iphoneinfo.app_plat_status == 2) {
		$(function(){ 
		 	$("#btn_SynchroInfo_1").attr("disabled","disabled").css("background-color","#eee");
		});
	}

	if (app.app_status ==5 && androidinfo.app_plat_status == 2) {
		$(function(){ 
		 	$("#btn_SynchroInfo_2").attr("disabled","disabled").css("background-color","#eee");
		});
	}

	if (app.app_url_check ==true ) {
		$(function(){ 
		 	$('input#app_url').attr("disabled","disabled");
		});
	}
	util.createScripts(["http://mat1.gtimg.com/app/opent/rebuild/js/app_appedit.js","http://mat1.gtimg.com/app/opent/rebuild/js/app_platform_01.js"]);
})();

