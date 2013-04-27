;(function(){
	this.tpl = this.tpl||{};
	this.tpl.development_appcheckmaterial = [
		this.tpl.header,
		'<style type="text/css">',
		'.hostingclick {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-top:1px solid #d9d9d9;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;font-weight:bold;}',
		'.hosting {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-bottom:1px solid #d9d9d9;}',
		'div a#yunJPGClick{display:none}',
		'.icon_alert{width:38px;height:38px;background:url(http://mat1.gtimg.com/app/opent/images/public/icon.png) -352px -59px no-repeat;display:inline-block;zoom:1;}',
		'</style> ',
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
						this.tpl.appnav,
					'</div>',
				'</div> ',
				'<div class="deverRight"> ',
					'<h1 class="comp_tit">应用提交审核</h1>',
					'<%if(app.app_checkapi==0&&app.app_type==4){%>',
						'<font color="gray">你的应用从未调用过微博接口，请测试应用是否可正常调用接口， 测试成功后再提交申请！ </font>',
					'<%}%>',
					'<div class="app_check">',
						'<label>确认开发者信息</label><i class="active"></i><label>确认应用信息</label><i class="active"></i><strong>确认应用素材</strong><i></i><label>提交审核</label>',
					'</div>',
					//<!--开发者信息-->
		'<iframe id="appform_post_aec" name="appform_post_aec" width="100" height="100" src="about:blank" style="display:none;"></iframe>',
		'<form target="appform_post_aec" action="/development/savecheckmaterial/<%=app.app_id%>/" method="post" class="appform" enctype="multipart/form-data" id="appform_user">',
			'<ul>',
				'<input type="hidden" name="isFramePost" value="1"/>',
				'<input type="hidden" name="isPostMaterial" value="1"/>',
			    this.tpl.development_app_material,
				this.tpl.agreementTmpl,
				'<li>',
				   '<label class="form_label">&nbsp;</label>',
				   ' <span class="form_element">',
						'<input type="submit" class="devSubmit" id="devSubmit" value="提交审核" data-rule="formauto"/>',
					'</span>',
			   ' </li>',
			'</ul>',
		'</form>',
					//<!--/开发者信息-->
				'</div>',
			'</div>',
			'<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/app_checkmaterial.js?20130328"></script>',
		this.tpl.footer
	].join("\r");
	
	var app = global_obj.data.app;
	if(app.app_checkapi==0 && app.app_type==4 ){
		$(function(){ 
			$('input,textarea').attr("disabled","disabled"); 
			$('input#devSubmit').attr("class","devCancel");
			$('label.uploadbtn').hide();
			$('input[type="file"]').hide();
		}); 
	}
	var nextURL = "/development/appinfo/"+app.app_id+"/";
	$("#main").append(tmpl(this.tpl.development_appcheckmaterial,global_obj.data))
	$(function(){
		$('input[type=file]').change(function(){ $('input#need_post').val('1')});
	})

})();