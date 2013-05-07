;(function(){
tpl.development_appcheckplatform = [
	tpl.header,
	'<div id="content" class="controlCon main main_app">',
		'<div class="approate">',
			'<a href="/development/">我的应用</a> &gt; <span><%=app.app_name%></span>',
		'</div>',
		'<div class="deverLeft">',
			'<div class="leftMain">',
				'<div class="uicon"> ',
					'<img src="<%=app.app_icon_75?app.app_icon_75:"http://mat1.gtimg.com/app/opent/images/index/icon.jpg"%>" height="75" width="75"/><br/>',
					'<p><%=app.app_name%></p>',
				'</div>',
				tpl.appnav,
			'</div>',
		'</div>' ,
		'<div class="deverRight"> ',
			'<h3 class="title">应用提交审核</h3>',
			'<%if(app.app_checkapi==0 && app.app_type==4){%>',
			'<font color="gray">你的应用从未调用过微博接口，请测试应用是否可正常调用接口， 测试成功后再提交申请！ </font>',
			'<%}%>',
			'<div class="app_check">',
				'<label>确认开发者信息</label><i class="active"></i><label><%if(app.app_type == 6){ %>确认基本信息<%}else{%>确认应用信息<%}%></label><i class="active"></i><strong>确认平台信息</strong><i></i><label>提交审核</label>',
			'</div>',
			'<iframe id="appform_post_aec" name="appform_post_aec" width="100" height="100" src="about:blank" style="display:none;"></iframe>',
		//	'<form target="appform_post_aec" action="/pipes/interfaceserver?action=common_query&business_type=savecheckplatform&appid=<%=app.app_id%>" method="post" class="appform wirelessappform" enctype="multipart/form-data" id="appform_user">',
			'<form target="appform_post_aec" action="/development/savecheckplatform?appid=<%=app.app_id%>" method="post" class="appform" enctype="multipart/form-data" id="appform_user">',
				 '<ul>',
					'<input type="hidden" name="isFramePost" value="1"/>',
					'<input type="hidden" name="isPostMaterial" value="1"/>',
			        tpl.development_appplatform_inner,
			        tpl.agreement,
			        '<li>',
			            '<label class="form_label">&nbsp;</label>',
			            '<span class="form_element">',
				            '<input type="submit" class="devSubmit" id="devSubmit" value="提交审核" data-rule="formauto"/>',
			            '</span>',
			        '</li>',
			    '</ul>',
			'</form>',
		'</div>',
	'</div>',
	tpl.footer,
].join("");


var app = global_obj.data.app;
global_obj.data.androidinfo = global_obj.data.androidinfo || {};
global_obj.data.iphoneinfo = global_obj.data.iphoneinfo || {};
global_obj.data.appnav = "info";
if (app.app_checkapi==0&&app.app_type==4  ){
	$(function(){ 
	 	$('input,textarea').attr("disabled","disabled"); 
	 	$('input#devSubmit').attr("class","devCancel");
	 	$('label.uploadbtn').hide();
	 	$('input[type="file"]').hide();
	}); 
} 
var nextURL = "/development/appinfo?appid="+app.app_id,
	app_type = app.app_type;
	$('#main').html(tmpl(tpl.development_appcheckplatform,global_obj.data));
	$('input[type=file]').change(function(){ $('input#need_post').val('1')});
	global_obj.init.appnav();
	global_obj.init.appplatform_inner();
})();