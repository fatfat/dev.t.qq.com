var str = [
	'.hostingclick {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-top:1px solid #d9d9d9;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;font-weight:bold;}',
	'.hosting {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-bottom:1px solid #d9d9d9;}',
	'div a#yunJPGClick{display:none}'
].join('');
util.createStyle(str);

this.tpl = this.tpl || {};
tpl.development_appcheckapp = [
	this.tpl.header,
	'<div id="content" class="controlCon main main_app">',
		'<div class="approate">',
			'<a href="/development/">我的应用</a> &gt; <span><%=app.app_name%></span>',
		'</div>',
		'<div class="deverLeft">',
			'<div class="leftMain">',
				'<div class="uicon">',
					'<img src="<%=app.app_icon_75 || \'http://mat1.gtimg.com/app/opent/images/index/icon.jpg\'%>" height="75" width="75"/><br/>',
					'<p><%=app.app_name%></p>',
				'</div>',
				'<!--{ include file="./development/appnav.tpl" }-->',
			'</div>',
		'</div>',
		'<div class="deverRight">',
			'<h1 class="comp_tit">应用提交审核</h1>',
			'<%if (app.app_checkapi == 0 && $app.app_type == 4 ) {%>',
			'<font color="gray">你的应用从未调用过微博接口，请测试应用是否可正常调用接口， 测试成功后再提交申请！ </font>',
			'<%}%>',
			'<div class="app_check">',
				'<label>确认开发者信息</label><i class="active"></i><strong><%if (app.app_type == 6 ) {%>确认基本信息<%} else {%>确认应用信息<%}%></strong><i></i><label><%if (app.app_type == 6 ) {%>确认平台信息<%} else {%>确认应用素材<%}%></label><i></i><label>提交审核</label>',
			'</div>',
			'<%if (app.app_type == 6 ) {%>',
			'<iframe id="appform_post_aec" name="appform_post_aec" width="100" height="100" src="about:blank" style="display: none;"></iframe>',
			'<form action="/development/savecheckwapp/<%=app.app_id%>/" method="post" class="appform wirelessappform" enctype="multipart/form-data" id="appform" target="appform_post_aec" onsubmit="return false">',
				'<ul>',
				'<!--{ include file="./development/development_app_info.tpl" }-->',
				'<!--{ include file="./development/development_app_material.tpl" }-->',
				'<li>',
				    '<label class="form_label">&nbsp;</label>',
				    '<span class="form_element">',
			            '<input type="submit" class="devSubmit" id="devSubmit"  value="下一步" data-rule="formauto"/>',
				    '</span>',
				'</li>',
				'</ul>',
			'</form>',
			'<%} else {%>',
			'<form action=" " method="post" class="appform" id="appform_app" onsubmit="return false;">',
				'<ul>',
				'<!--{ include file="./development/development_app_info.tpl" }-->',
				'<li>',
				    '<label class="form_label">&nbsp;</label>',
				    '<span class="form_element">',
			            '<input type="submit" class="devSubmit" id="devSubmit" value="下一步" data-rule="formauto"/>',
				    '</span>',
				'</li>',
				'</ul>',
			'</form>',
			'<%}%>',
		'</div>',
	'</div>',
'<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/app_checkapp.js?20130328"></script>',
	this.tpl.footer
].join('');

var ex_appname = app.app_name
//ajax 链接网页应用 http://dev.t.qq.com/apps/checkname/abc?random=1366881099913
//无线应用 http://dev.t.qq.com/apps/checkname/accddd2013s?random=1366881352328 

$(function(){ 
	$('input#app_name').change(function(){ 
		if(ex_appname != $('input#app_name').val()){
			$('input#postname').val('1');
		}else{
			$('input#postname').val('0'); 
		}
	}) 
});

var app_id = app.app_id || '',
	app_type = +app.app_type || '',
	NextUrl = app_type == 6 ? '/development/appcheckplatform/'+app_id+'/' : '/development/appcheckmaterial/'+app_id+'/',
	typedata = '&app_hosting=' + app.app_hosting + '&app_type=' + app.app_type;
 
$(function(){
	$('input[type=radio]').change(function(){ need_post = 1;})
})
if  (app.app_checkapi == 0 && app.app_type == 4  ) {
	$(function(){ 
	 	$('input,textarea').attr("disabled","disabled"); 
	 	$('input,select').attr("disabled","disabled");
	 	$('input#devSubmit').attr("class","devCancel");
	 	$('label.uploadbtn').hide();
	 	$('input[type="file"]').hide();
	}); 
}
