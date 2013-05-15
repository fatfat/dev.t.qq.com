var str = [
	'.hostingclick {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-top:1px solid #d9d9d9;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;font-weight:bold;}',
	'.hosting {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-bottom:1px solid #d9d9d9;}',
	'div a#yunJPGClick{display:none}',
	'.icon_alert{width:38px;height:38px;background:url(http://mat1.gtimg.com/app/opent/images/public/icon.png) -352px -59px no-repeat;display:inline-block;zoom:1;}',
	].join("");
util.createStyle(str);

tpl.iweibocheckmater = [
	'<!--{ include file="header.tpl" }--> ',
	tpl.header,

	'<div id="content" class="controlCon main main_app">',
		'<div class="approate">',
			'<a href="/development/iweibo/">iWeibo</a> &gt; <span><%=app.app_name%></span>',
		'</div>',
		'<div class="deverLeft">',
			'<div class="leftMain">',
				'<div class="uicon"> ',
					'<img src="<%=app&&app.app_icon_75?app.app_icon_75:"http://mat1.gtimg.com/app/opent/images/index/icon.jpg"%>" height="75" width="75"/><br/>',
					'<p><%=app.app_name%></p>',
				'</div>',
				'<!--{ include file="./development/iweibonav.tpl" }--> ',
				tpl.development_iweibonav,
			'</div>',
		'</div> ',
		'<div class="deverRight"> ',
			'<h1 class="comp_tit">iWeibo提交审核</h1>',
			'<div class="app_check">',
				'<label>确认开发者信息</label><i class="active"></i><label>确认组件信息</label><i class="active"></i><strong>确认素材</strong><i></i><label>提交审核</label>',
			'</div>',
			'<!--开发者信息-->',
'<iframe id="appform_post_aec" name="appform_post_aec" width="100" height="100" src="about:blank" style="display:none;"></iframe>',
'<form target="appform_post_aec" action="/development/savecheckmaterial/<!--{$app.app_id}-->/" method="post" class="appform" enctype="multipart/form-data" id="appform_user">',
'<ul>',
	'<input type="hidden" name="img_need_post"  id="img_need_post" value="0"  >',
'<!--{ include file="./development/development_app_material.tpl" }-->',
	tpl.development_app_material,
'<!--{ include file="./agreement.tpl" }-->',
	tpl.agreement,
'<li>',
'<label class="form_label">&nbsp;</label>',
'<span class="form_element">',
				'<!--{*<input type="button" class="devCancel" value="保存设置">*}-->',
	'<input type="submit" class="devSubmit" id="devSubmit" value="提交审核" data-rule="formauto">',
'</span>',
'</li>',
'</ul>',
'</form>',
			'<!--/开发者信息-->',
		'</div>',
	'</div>',
	tpl.footer,
	].join("");
	$('#main').html(tmpl(tpl.iweibocheckmater,global_obj.data));

	var nextURL = "/development/iweiboinfo?appid="+global_obj.data.app.app_id;
	$("input[type=file]").change(function(){ $("input#img_need_post").val("1")});

	util.createScript('/js/app_checkmaterial.js');


