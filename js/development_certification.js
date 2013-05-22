//JavaScript Document
this.tpl = this.tpl || {};
this.tpl.development_certification = [
this.tpl.header,
'<style type="text/css">',
	'@-moz-document url-prefix(){',
		'.appform input[type="file"]{margin-left:-9999px;}',
		'.appform input[type="file"].moz0{margin-left:-128px;}',
		'.appform input[type="file"].moz1{margin-left:-138px;}',
	'}',
	'.ie6_0{_margin-left:-60px;} ',
	'.ie6_1{_margin-left:-80px;}',
	'.appinfo li.alert{margin-left:0px;}',
'</style>',
	'<div id="content" class="wrapper main main_app">',
		'<div class="deverLeft">',
			'<div class="leftMain">',
				'<div class="uicon">﻿',//<!--用户头像-->
					'<img src="<%=developer.head?developer.head+"/100":"http://mat1.gtimg.com/app/opent/images/index/icon.jpg"%>" height="75" width="75" />',
					'<br>',
					'<%=userInfo.nick%>',
				'</div>',
				'<ul class="appsnav">',
					'<li class="<%=(displaytype == "iweibo"?"active":"")%>"><a href="/development/iweibo/">iWeibo</a></li>',
					'<li class="<%=(displaytype == "comps"?"active":"")%>"><a href="/development/complist/">我的组件</a></li>',
					'<li class="<%=(displaytype == "app"?"active":"")%>"><a href="/development/">我的应用</a></li>',
					'<li><a href="/development/developer/">开发者资料</a></li>',
				'</ul>',
				'<%if(developer.user_app_numbers<developer.user_app_limit){%>',
					'<a href="javascript:;" class="creatIcon" rel="/development/create" id="newapp">创建应用</a>',
				'<%}%>',
			'</div>',
		'</div>',
		'<div class="deverRight">',
				'<ul id="appTab">',
				   ' <li>',
						'<a href="/development/developer/" class="developertab">基本信息</a>',
				   ' </li>',
					'<li class="currentTab">',
						'<a href="/development/certification/" class="certiftab">资质证明</a>',
					'</li>',
				'</ul>',
				'<div id="appDeveloperInfo">',
					'<div class="appDeveloper">',
						'<iframe id="appform_post_aec" name="appform_post_aec" width="100" height="100" src="about:blank" style="display:none;"></iframe>',
						'<form target="appform_post_aec" action="/development/certificationsubmit?user_uin=<%=developer.user_uin%>" method="post" class="appform" enctype="multipart/form-data" id="appform_user">',
							'<ul class="appinfo" style="margin-top:0;">',
								'<%if(developer.user_check_status==2){%>',
									'<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
										'<h4><%if(developer.user_certif_status == 0){%>资质证明审核中<%}else{%>修改资质证明审核中<%}%></h4>',
									'<div class="alert_content">',
									'你最近上传的身份证明、授权证明腾讯方正在审核，我们将在一个工作日内给与答复，审核中不能做任何修改。</div>',
									'</li>',
								'<%}else if(developer.user_check_status == 1){%>',
									'<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
										'<%if(developer.user_certif_status == 0){%><h4>资质证明未通过审核，原因如下：</h4>',
										'<div class="alert_content"><%=developer.user_check_msg%><br />',
									'你可以修改应用后重新提交审核，如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></div>',
										'<%}else{%><h4>资质证明修改审核未通过，原因如下：</h4>',
											'<div class="alert_content"><%=developer.user_check_msg%><br />',
											'你重新上传的身份证明、授权证明未通过审核，已恢复到提交审核前的状态。若更改需要再次提交审核。</a></div>',
										'<%}%>',
									'</li>',
								'<%}else if(developer.user_certif_status == 1 &&developer.user_check_status==0){ %>',
									'<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
									'<h4>资质证明审核通过</h4>',
									'<div class="alert_content">你上传的身份证明，授权证明已通过审核并生效，站内托管应用可使用腾讯云平台资源。若更改需要再次提交审核。</div>',
									'</li>',
							   '<%}else if(developer.user_certif_status == 1 && developer.user_check_status==3){%>',
									'<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
									'<h4>资质证明修改审核通过</h4>',
									'<div class="alert_content">你重新上传的身份证明、授权证明已通过审核并生效。若更改需要再次提交审核。</div>',
									'</li>',
							   '<%}%>',
							   '<%if(developer.user_certif_status != 1){%>',
							   '<li><label class="certiftip">开发者资质证明审核通过后，<a href="http://wiki.open.qq.com/wiki/%E4%BA%91%E6%9C%8D%E5%8A%A1%E8%AE%A1%E8%B4%B9%E7%AE%A1%E7%90%86%E6%96%B9%E5%BC%8F_V2" target="_blank">云费用账户</a>可获赠金额，站内托管应用可申请使用腾讯云平台服务</label>',
								'</li>',
								'<%}%>',
							'</ul>',
							'<div class="certifdiv">',
								'<%if(developer.user_type !=2){%>' ,
									'<h3 class="title">身份证明：</h3>',
									'<dl>',
										'<dt><a><img id ="idimg" class="nulimg" src="<%=developer.user_idcard_pic?developer.user_idcard_pic:"http://mat1.gtimg.com/app/opent/images/developer/pic_zwtp.png"%>" _src="<%=developer.user_idcard_pic?1:0%>"  width="100" height="120"/></a>',
											'<div class="uploaddiv">',
												'<%if(developer.user_certif_status == 0 &&developer.user_check_status == 0){%>',
													'<%if(developer.user_idcard_pic != ""){%><label for="icon_idcard" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="uploadbtn delete_pic">删除</label><%}else{%><label for="icon_idcard" class="uploadbtn upload_pic" _value="0">上传</label><%}%>',
												'<%}else if(developer.user_check_status == 2){%><label class="btngray">更改</label> &nbsp; <label class="btngray">删除</label>',
												'<%}else if(developer.user_certif_status == 0 && developer.user_check_status == 1){%><label for="icon_idcard" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="uploadbtn delete_pic">删除</label>',
												'<%}else if (developer.user_certif_status == 1 && ( developer.user_check_status == 0 || developer.user_check_status == 1 || developer.user_check_status == 3)){ %><label for="icon_idcard" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="btngray">删除</label>',
												'<%}%>',
											'</div>',
											'<input type="hidden" class="pic_type" value="icon_idcard"/>',
											'<input type="file" accept="image/png,image/jpeg" name="icon_idcard" id="icon_idcard" data-default="<%=developer.user_idcard_pic%>"/>',
										'</dt>',
										'<dd>',
											'请上传大小2M以内，JPG/PNG格式的图片<br/>',
											'身份证明扫描件 &nbsp; <a href="javascript:void(0);" class="pic_example" onclick="return false;" _src="http://mat1.gtimg.com/app/opent/images/developer/idcard.jpg" _title="身份证明范例" _width="476" _height="632" >身份证范例查看</a>',
										'</dd>',
									'</dl>',
									'<h3 class="title">授权证明：</h3>',
									'<dl>',
										'<dt><a><img id ="certifimg" class="nulimg" src="<%=developer.user_certif_pic?developer.user_certif_pic:"http://mat1.gtimg.com/app/opent/images/developer/pic_zwtp.png"%>" _src="<%=developer.user_certif_pic?1:0%>" width="100" height="120"/></a>',
											'<div class="uploaddiv">',
												'<%if(developer.user_certif_status == 0 && developer.user_check_status == 0){%>',
													'<%if (developer.user_certif_pic != ""){%><label for="icon_certifpic" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="uploadbtn delete_pic">删除</label><%}else{%><label for="icon_certifpic" class="uploadbtn upload_pic" _value="0">上传</label><%}%>',
												'<%}else if (developer.user_check_status == 2){%><label class="btngray">更改</label> &nbsp; <label class="btngray">删除</label>',
												'<%}else if (developer.user_certif_status == 0 && developer.user_check_status == 1){%><label for="icon_certifpic" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="uploadbtn delete_pic">删除</label>',
												'<%}else if(developer.user_certif_status == 1 && ( developer.user_check_status == 0 || developer.user_check_status == 1 || developer.user_check_status == 3)){ %><label for="icon_certifpic" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="btngray">删除</label>',
												'<%}%>',
										   ' </div>',
										   ' <input type="hidden" class="pic_type" value="icon_certifpic"/>',
										   '	<input type="file" accept="image/png,image/jpeg" name="icon_certifpic" id="icon_certifpic" data-default="<%=developer.user_certif_pic%>"/>',
											'<input type="hidden" name="img_need_post" id="img_need_post" value="0">',
										'</dt>',
										'<dd>',
											'请上传大小2M以内，JPG/PNG格式的图片<br/>',
											'授权证明扫描件 &nbsp; <a href="http://mat1.gtimg.com/app/opent/download/confirmation_letter_individual.zip">授权证明范例下载</a>',
										'</dd>',
									'</dl>',
								//<!--/个人开发者-->
								'<%}else{%>',
								//<!--企业开发者-->
								'<h3 class="title">营业执照：</h3>',
								'<dl>',
									'<dt><a><img id ="idimg" class="nulimg" src="<%=developer.user_idcard_pic?developer.user_idcard_pic:"http://mat1.gtimg.com/app/opent/images/developer/pic_zwtp.png"%>" _src="<%=developer.user_idcard_pic?1:0%>" width="100" height="120"/></a>',
										'<div class="uploaddiv">',
											'<%if(developer.user_certif_status == 0 && developer.user_check_status == 0){%>',
												'<%if (developer.user_idcard_pic != ""){%><label for="icon_idcard" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="uploadbtn delete_pic">删除</label><%}else{%><label for="icon_idcard" class="uploadbtn upload_pic" _value="0">上传</label><%}%>',
											'<%}else if (developer.user_check_status == 2){%><label class="btngray">更改</label> &nbsp; <label class="btngray">删除</label>',
											'<%}else if (developer.user_certif_status == 0 && developer.user_check_status == 1){%><label for="icon_idcard" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="uploadbtn delete_pic">删除</label>',
											'<%}else if (developer.user_certif_status == 1 && ( developer.user_check_status == 0 || developer.user_check_status == 1 || developer.user_check_status == 3)){ %><label for="icon_idcard" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="btngray">删除</label>',
											'<%}%>',
										'</div>',
									  '  <input type="hidden" class="pic_type" value="icon_idcard"/>',
									   ' <input type="file" accept="image/png,image/jpeg" name="icon_idcard" id="icon_idcard" data-default="<%=developer.user_idcard_pic%>"/>',
									'</dt>',
									'<dd>',
										'请上传大小2M以内，JPG/PNG格式的图片<br/>',
										'营业执照扫描件 &nbsp; <a href="javascript:void(0);" class="pic_example" onclick="return false;" _src="http://mat1.gtimg.com/app/opent/images/developer/license.jpg" _title="营业执照范例" _width="624" _height="441" >营业执照范例查看</a>',
									'</dd>',
								'</dl>',
								'<h3 class="title">授权证明：</h3>',
								'<dl>',
									'<dt><a><img id ="certifimg" class="nulimg" src="<%=developer.user_certif_pic?developer.user_certif_pic:"http://mat1.gtimg.com/app/opent/images/developer/pic_zwtp.png"%>" _src="<%=developer.user_certif_pic?1:0%>" width="100" height="120"/></a>',
									   ' <div class="uploaddiv">',
											'<%if (developer.user_certif_status == 0 && developer.user_check_status == 0){%>',
												'<%if( developer.user_certif_pic != ""){%><label for="icon_certifpic" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="uploadbtn delete_pic">删除</label><%}else{%><label for="icon_certifpic" class="uploadbtn upload_pic" _value="0">上传</label><%}%>',
											'<%}else if (developer.user_check_status == 2){%><label class="btngray">更改</label> &nbsp; <label class="btngray">删除</label>',
											'<%}else if (developer.user_certif_status == 0 && developer.user_check_status == 1){%><label for="icon_certifpic" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="uploadbtn delete_pic">删除</label>',
											'<%}else if (developer.user_certif_status == 1 && ( developer.user_check_status == 0 || developer.user_check_status == 1 || developer.user_check_status == 3)){ %><label for="icon_certifpic" class="uploadbtn upload_pic" _value="1">更改</label> &nbsp; <label class="btngray">删除</label>',
											'<%}%>',
										'</div>',
									   ' <input type="hidden" class="pic_type" value="icon_certifpic"/>',
										'<input type="file" accept="image/png,image/jpeg" name="icon_certifpic" id="icon_certifpic" data-default="<%=developer.user_certif_pic%>"/>',
										'<input type="hidden" name="img_need_post" id="img_need_post" value="0">',
									'</dt>',
									'<dd>',
										'请上传大小2M以内，JPG/PNG格式的图片<br/>',
										'授权证明扫描件 &nbsp; <a  href="http://mat1.gtimg.com/app/opent/download/confirmation_letter_company.zip">授权证明范例下载</a>',
									'</dd>',
								'</dl>',
								'<%}%>',
								'<dl>',
									'<dt><input type="submit" id="ajaxCertifSubmit" class="devCancel" value="提交审核" data-rule="formauto"></dt>',
									'<dd>&nbsp;</dd>',
								'</dl>',
						   ' </div>',
						'<form>',
					'</div>',
				'</div>	',
		'</div>',
'</div>',
'<link href="http://mat1.gtimg.com/app/opent/css/development/index_selectapp.css" rel="stylesheet" type="text/css" />',
this.tpl.footer
].join("\r");
global_obj.data.navPos = 7;
global_obj.data.displaytype = 1;
global_obj.data.developer = global_obj.data;
var developer = global_obj.data.developer;
var userType = developer.user_type || 1;
var user_uin = developer.user_uin || 0;
var user_certif_status = developer.user_certif_status;
var user_check_status = developer.user_check_status; //资质证明审核状态
var user_idcard_pic = developer.user_idcard_pic;
var user_certif_pic = developer.user_certif_pic;
var user_tmp_id = developer.user_tmp_id;
var user_tmp_name = developer.user_tmp_name;
var insiteAppAble = developer.user_hosting || false;
var displayAppType = 15;

$("#main").append(this.tmpl(this.tpl.development_certification, global_obj.data));

util.createScripts(["http://mat1.gtimg.com/app/opent/rebuild/js/location.js","http://mat1.gtimg.com/app/opent/rebuild/js/validater.js","http://mat1.gtimg.com/app/opent/rebuild/js/app_appadd.js"]);

$(function() {
	$('input[type=file]').change(function() {
		$('input#img_need_post').val('1')
	});
	//上传图片兼容ff,opera
	$(".appform input[type=file]").each(function() {
		var uploadbtn = $(this).parent("dt").find(".uploaddiv").find(".upload_pic"),
		_value = +uploadbtn.attr("_value");

		if (uploadbtn.size()) {
			if (_value === 0) { //上传
				$(this).removeClass("moz1").removeClass("ie6_1").addClass("moz0").addClass("ie6_0");
			} else if (_value === 1) {
				$(this).removeClass("moz0").removeClass("ie6_0").addClass("moz1").addClass("ie6_1");
			}
		} else {
			$(this).removeClass("moz0").removeClass("moz1").removeClass("ie6_0").removeClass("ie6_1");
		}
	});

	if ((user_certif_status === 0 && user_check_status === 0 && user_idcard_pic != "" && user_certif_pic != "") //从开平拉过来的数据，开平未提交审核
	|| user_check_status === 1) { //审核拒绝都可点
		$('input#ajaxCertifSubmit').attr("class", "devSubmit").removeAttr("disabled");
	} else {
		$('input#ajaxCertifSubmit').attr("class", "devCancel").attr("disabled", "disabled");
	}

	$(".pic_example").click(function() {
		var src = $(this).attr("_src"),
		title = $(this).attr("_title"),
		width = $(this).attr("_width"),
		height = $(this).attr("_height");
		loginWin.showImg({
			"title": title,
			"text": src,
			"width": width,
			"height": height
		});
	});

	$("#newapp").click(function() {
		popAppWin( + developer.user_app_numbers, +developer.appMax);
	});

	$(".appinfo li.alert").find(".hidebtn").click(function() {
		var t = $(this),
		p = t.parent(),
		c = p.find(".alert_content");

		if (c.is(":visible")) {
			c.slideUp("fast");
			t.html("展开↓");
		} else {
			c.slideDown("fast");
			t.html("收起↑");
		}
	});
})

function closealert(obj) {
	var a = $(obj),
	alertul = a.parent(".appinfo");
	alertul.hide();
}