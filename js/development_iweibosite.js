
	tpl.iweibosite = [
	'<!--{ include file="header.tpl" }--> ',
	tpl.header,

	'<div id="content" class="controlCon main main_app">',
		'<div class="approate">',
			'<a href="/development/iweibo/">iWeibo</a> &gt; <span><%=app.app_name%></span>',
		'</div>',
		'<div class="deverLeft">',
			'<div class="leftMain">',
				'<div class="uicon">',
					'<img src="<%=app && app.app_icon_75?app.app_icon_75:"http://mat1.gtimg.com/app/opent/images/index/icon.jpg"%>" height="75" width="75"/><br/>',
					'<p><%=app.app_name%></p>',
				'</div>',
				'<ul class="appsnav">',
					'<li><a href="/development/iweiboinfo?appid=<%=app.app_id%>">组件信息</a></li>',
					'<li class="active"><a href="/development/iweibosite?appid=<%=app.app_id%>">网站信息</a></li>',
					'<!-- ',
					'<li><a href="">转让应用</a></li>',
					'<li><a href="">删除应用</a></li>',
					'-->',
				'</ul>',
			'</div>',
		'</div> ',
		'<div class="deverRight"> ',
			'<h1 class="comp_tit">网站信息</h1>',
			'<iframe id="appform_post_aec" name="appform_post_aec" width="100" height="100" src="about:blank" style="display:none;"></iframe>',
			'<form action="/development/saveappinfopage?appid=<%=app.app_id%>" method="post" class="appform" enctype="multipart/form-data" id="appform" target="appform_post_aec">',
				'<input type="hidden" value="0" name="img_need_post" id="img_need_post"/>',
				'<%if (app.app_type ==5){%>',
					'<ul>',
						'<%if (app.app_status==2){%>',
							'<li class="alert alert alert_warn" beclose="true"><h4>组件审核中，组件资料不可修改</h4></li>',
						'<%}else if (app.app_check_status ==1 &&  app.app_status ==3){%>',
							'<li class="alert alert alert_warn" beclose="true"><h4>资料已提交，审核通过后才能生效</h4></li>',
						'<%}else if (app.app_check_status ==2 &&  app.app_status ==3){%>',
							'<li class="alert alert alert_warn" beclose="true"><a href="javascript:;" class="hidebtn closealert">关闭</a><h4>资料已通过审核</h4></li>',
						'<%}else if (app.app_check_status ==3 &&  app.app_status ==3){%>',
							'<li class="alert alert alert_warn" beclose="true"><a href="javascript:;" class="hidebtn closealert">关闭</a><h4>你修改的资料未通过审核，可以修改后重新提交<br/>如果有疑问<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></h4></li>',
						'<%}%>',
						'<!--{include file="./development/development_app_info.tpl" }-->',
						tpl.development_app_info,
						'<!--{ include file="./development/development_app_material.tpl" }-->',
						tpl.development_app_material,
						'<!--{* include file="./agreement.tpl" *}-->',
					//	tpl.agreement,
						'<li>',
						'<label class="form_label">&nbsp;</label>',
						'<span class="form_element">',
						'<input type="submit" class="devSubmit" id="devSubmit" value="保存设置" data-rule="formauto">',
								'<!--{*<input type="reset" class="devCancel" value="取消">*}-->',
						'</span>',
						'</li>',
					'</ul>',
				'<%}%>',
			'</form>',
		'</div>',
	'</div>',
	tpl.footer
].join("");

	$('#main').html(tmpl(tpl.iweibosite,global_obj.data));
	var str = [
		'.hostingclick {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-top:1px solid #d9d9d9;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;font-weight:bold;}',
		'.hosting {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-bottom:1px solid #d9d9d9;}',
		'div a#yunJPGClick{display:none}',
		'.icon_alert{width:38px;height:38px;background:url(http://mat1.gtimg.com/app/opent/images/public/icon.png) -352px -59px no-repeat;display:inline-block;zoom:1;}'
	].join();
	
	util.createStyle(str);
	util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/app_appedit.js");

	app = global_obj.data.app;
	if (app.app_check_status ==1 && app.app_status != 1){
	 	$('input,textarea').attr("disabled","disabled"); 
	 	$('input#devSubmit').attr("class","devCancel");
	 	$('label.uploadbtn').hide();
	 	$('input[type="file"]').hide();
	} else {
		$('input[type=file]').change(function(){ $('input#img_need_post').val('1');});
	}  

	$(function(){ 
		var ex_appname = app.app_name; 
	    $(".appform li.alert").find(".hidebtn").click(function(){
	    var t=$(this),p=t.parent(),c=p.find(".alert_content");
	        if (p.attr("beclose")){
	        p.hide();
	        $.get("/development/clearappsitemsg?appid="+app.app_id+"?t="+new Date().getTime());
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