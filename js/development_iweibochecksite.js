
	var str = [
		'.hostingclick {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-top:1px solid #d9d9d9;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;font-weight:bold;}',
		'.hosting {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-bottom:1px solid #d9d9d9;}',
		'div a#yunJPGClick{display:none}'
	].join("");
	util.createStyle(str);
	tpl.iweibochecksite = [
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
					'</div> ',
					'<!--{ include file="./development/iweibonav.tpl" }--> ',
					tpl.development_iweibonav,
				'</div>',
			'</div> ',
			'<div class="deverRight"> ',
			'<h1 class="comp_tit">iWeibo提交审核</h1>',
			'<div class="app_check">',
				'<label>确认开发者信息</label><i class="active"></i><strong>确认组件信息</strong><i></i><label>确认素材</label><i></i><label>提交审核</label>',
			'</div>  ',
			'<form action="" method="post" class="appform"  id="appform_web" target="appform_post"  onsubmit="return false;" >',
			'<ul>',
			'<!--{ include file="./development/development_app_info.tpl" }--> ',
			tpl.development_app_info,
			'<li>',
		'<label class="form_label">&nbsp;</label>',
		'<span class="form_element">',
						'<!--{*<input type="reset" class="devCancel" value="保存设置">*}-->',
			'<input type="submit" class="devSubmit" id="devSubmit"  value="下一步" data-rule="formauto">',
		'</span>',
		'</li>',
		'</ul>',
				'</form>',
			'</div>',
    	'</div>',
		tpl.footer
	].join("");
	$('#main').html(tmpl(tpl.iweibochecksite,global_obj.data));
	var app_id = app && app.app_id ? app.app_id : '';  
	var app_type = app && app.app_type ? app.app_type: '';
	var NextUrl = '/development/iweibocheckmater?appid='+ app.app_id;
	var typedata = '&app_type=' + app.app_type; 
	util.createScript('http://mat1.gtimg.com/app/opent/rebuild/js/app_checkapp.js');

