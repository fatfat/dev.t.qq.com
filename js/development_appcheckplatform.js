
var development_appcheckplatformTmpl = [
headerTmpl,
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
				appNavTmpl,
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
			'<form target="appform_post_aec" action="/development/savecheckplatform/<%=app.app_id%>/" method="post" class="appform wirelessappform" enctype="multipart/form-data" id="appform_user">',
			    '<ul>',
					'<input type="hidden" name="isFramePost" value="1"/>',
					'<input type="hidden" name="isPostMaterial" value="1"/>',
			       // '<% include file="./development/development_appplatform_inner.tpl" %>',
			        agreementTmpl,
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
	'<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/app_checkmaterial.js?20130328"></script>',
	footerTmpl
].join("\r");

if (app.app_checkapi==0&&app.app_type==4  ){
	$(function(){ 
	 	$('input,textarea').attr("disabled","disabled"); 
	 	$('input#devSubmit').attr("class","devCancel");
	 	$('label.uploadbtn').hide();
	 	$('input[type="file"]').hide();
	}); 
} 
var nextURL = "/development/appinfo/"+app.app_id+"/",
	app_type = app.app_type;
	
$(function(){
	$(document.body).append(tmpl(development_appcheckplatformTmpl,{}))
	$('input[type=file]').change(function(){ $('input#need_post').val('1')});
})