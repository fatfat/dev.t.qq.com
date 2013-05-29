
	this.tpl = this.tpl || {};
	this.tpl.development_developerTmpl = [
	this.tpl.header,
	'<div id="content" class="wrapper main main_app">',
		'<div class="deverLeft">',
			'<div class="leftMain"> ',
				'<div class="uicon">﻿',
					'<%if (developer.head){%>',
					'<img src="<%=developer.head%>/100" height="75" width="75" />',
					'<%}else{%>',
					'<img src="http://mat1.gtimg.com/app/opent/images/index/icon.jpg" height="75" width="75" />',
					'<%}%>',
					'<br>',
					'<%=userInfo.nick %>',
				'</div>',
				'<ul class="appsnav">',
					'<li<%if (displaytype == "iweibo" ){%> class="active"<%}%>><a href="/development/iweibo/">iWeibo</a></li>',
					'<li<%if (displaytype == "comps" ){%> class="active"<%}%>><a href="/development/complist/">我的组件</a></li>',
					'<li<%if (displaytype == "app" ){%> class="active"<%}%>><a href="/development/">我的应用</a></li>',
					'<li class="active"><a href="/development/developer/">开发者资料</a></li>',
				'</ul>',
				 
				'<%if (developer.user_app_numbers < developer.appMax){%>',
				'<a href="javascript:;" class="creatIcon" rel="/development/create" id="newapp">创建应用</a>',
				'<%}%>',
			'</div>',
		'</div>',
		'<div class="deverRight">',
				'<ul id="appTab">',
	                '<li class="currentTab">',
	                    '<a href="/development/developer" class="developertab">基本信息</a>',
	                '</li>',
	                '<li>',
	                    '<a href="/development/certification" class="certiftab">资质证明</a>',
	                '</li>',
	            '</ul>',
	            '<div id="appDeveloperInfo">',
	            	'<div id="appDeveloper" class="appDeveloper">',
	            		'<form action="" method="post" class="appform"  onsubmit="return false;" style="width:100%" >',
	            		'<%if (developer.user_check_status ==2 || developer.user_certif_status ==1 ){%> ',
						'<ul class="appinfo" style="margin-top:0;">',
							 '<%if (developer.user_tmp_name !="" || developer.user_tmp_id !="" ){%> ',
							'<li class="alert alert_warn">',
							'<h4>系统检测到你的<%if (developer.user_tmp_name !="" ){%><%if (developer.user_type !=2 ){%>姓名<%}else{%>公司全称<%}%>预修改为：<%=developer.user_tmp_name%><%}%>',
								'<%if (developer.user_tmp_name !=""  && developer.user_tmp_id !="" ){%>，<%}%>',
								'<%if (developer.user_tmp_id !="" ){%>',
									'<%if (developer.user_type !=2 ){%>个人身份证件<%}else{%>营业执照号码：<%}%>预修改为：<%=developer.user_tmp_id%>',
								'<%}%>',
							'</h4>',
							'<div class="alert_content">请确认<a href="/development/certification">资质证明</a>与你的基本信息一致，否则修改将不予以通过。你还可以<a href="javascript:;" class="rollbtn">撤销修改</a></div>',
							'</li>',
							'<%}%>',
						'</ul>',
						'<%}%>',
		            	'<ul class="appinfo_certif">',
				            '<%if (developer.user_type !=2){%>' ,
				            '<li>',
							'<input type="hidden" name="user_type" id="user_type" value="1" /><label class="form_label">开发者类型： </label><span class="form_element">个人</span>',
							'</li>',
							'<li>',
							'<label class="form_label"><em>*</em>姓名：</label><span class="form_input"><input type="text" class="txt" name="user_name" id="user_name" value="<%=developer.user_name%>" data-default="<%=developer.user_name%>" data-rule="comperson" data-error="姓名" maxlength="30"></span>',
							'</li>',
							'<li>',
								'<label class="form_label"><em>*</em>个人身份证件：</label><span class="form_input form_select">',
									'<input type="text" name="user_id_type" id="user_id_type" value="<%if (developer.user_id_type == "1"){%>身份证<%}else if( developer.user_id_type == "0"){%>护照<%}else{%>身份证<%}%>" _value="<%if (developer.user_id_type == "1"){%>1<%}else if( developer.user_id_type == "0"){%>0<%}else{%>1<%}%>" data-default="<%if (developer.user_id_type == "1"){%>1<%}else if( developer.user_id_type == "0"){%>0<%}else{%>1<%}%>"  style="width:102px"/>',
									'<a class="form_select_icon" id="user_di_seleicon" href="javascript:;" tabindex="-1" hidefocus="true"></a>',
									'<ul class="form_select_options form_select_options_certif form_select_userAuth"><li _value="1">身份证</li><li _value="0">护照</li></ul>',
								'</span>',
								'<div class="form_div"><span class="form_input">',
									'<input type="text" class="txt" id="user_id_card_num" name="user_id_card_num" placeholder="<%if (developer.user_id_type == "1"){%>身份证号码<%}else if( developer.user_id_type == "0"){%>护照号码<%}else{%>身份证号码<%}%>" data-rule="<%if (developer.user_id_type == "1"){%>cardnum_new<%}else if( developer.user_id_type == "0"){%>passport<%}else{%>cardnum_new<%}%>" data-error="<%if (developer.user_id_type == "1"){%>身份证号码<%}else if( developer.user_id_type == "0"){%>护照号码<%}else{%>身份证号码<%}%>" data-default="<%=developer.user_id_card_num%>" value="<%=developer.user_id_card_num%>" maxlength="30"/></span>',
								'</span></div>',
							'</li>',
							'<li>',
								'<label class="form_label"><em>*</em>联系地址：</label><span class="form_input form_select">',
										'<input type="text" name="company_province" id="company_province" placeholder="省份/直辖市" data-error="联系地址" data-rule="companyprovince" _value="-1" data-error="省份/直辖市" style="width:102px"/>',
										'<a class="form_select_icon" href="javascript:;" tabindex="-1" hidefocus="true"></a>',
										'<ul class="form_select_options form_select_options_certif form_select_province"></ul>',
								'</span>',
								'<span class="form_input form_select" style="margin-left:12px">',
										'<input type="text" name="company_city" id="company_city" placeholder="市/区" data-error="联系地址" data-rule="companycity" _value="-1" data-error="市/区" style="width:102px"/>',
										'<a class="form_select_icon" href="javascript:;" tabindex="-1" hidefocus="true"></a>',
										'<ul class="form_select_options form_select_options_certif form_select_city"></ul>',
								'</span>',
								'<div class="form_div"><span class="form_input"><input type="text" class="txt" name="user_address" id="user_address" value="<%=developer.user_address%>" data-rule="comaddress" data-error="联系地址" maxlength="100"></span></div>',
							'</li>',
							'<li>',
								'<label class="form_label"><em>*</em>手机号码：</label><span class="form_input"><input type="text" class="txt" name="user_phone" id="user_phone"  value="<%=developer.user_phone%>" data-rule="mobilenum" data-error="手机号码"  maxlength="11"></span><cite class="gray inputdes">仅限中国境内手机号码，无需加0或+86</cite>',
							'</li>',
							'<li>',
								'<label class="form_label"><em>*</em>邮箱：</label><span class="form_input"><input type="text" class="txt" id="user_email"  name="user_email" value="<%=developer.user_email%>" data-rule="email" data-error="邮箱" data-default="<%=developer.user_email%>"></span>',
							'</li>',
							'<li> ',
								'<label class="form_label">QQ：</label><span class="form_element form_element2"><%=userInfo.uin%></span>',
							'</li>',
							
							'<li>',
								'<label class="form_label">网站地址：</label><span class="form_input"><input type="text" class="txt" name="user_website" id="user_website" value="<%=developer.user_website%>" data-rule="applink" data-error="网站地址"></span>',
							'</li>',
							//<!--/个人开发者-->
							'<%}else{%>',
							//<!--企业开发者-->
							'<li>',
							'<input type="hidden" name="user_type" id="user_type" value="2" /><label class="form_label">开发者类型： </label><span class="form_span">公司</span>',
							'</li>',
							'<li>',
								'<label class="form_label"><em>*</em>公司全称：</label><span class="form_input"><input type="text" class="txt" name="user_company" id="user_company" value="<%=developer.user_company%>" data-default="<%=developer.user_company%>" data-rule="companyname" data-error="公司全称" maxlength="50"></span>',
							'</li>',
							'<li>',
								'<label class="form_label"><em>*</em>营业执照号码：</label><span class="form_input"><input type="text" class="txt" name="user_business_code" id="user_business_code" value="<%=developer.user_business_code%>" data-rule="complicensenum" data-error="营业执照号码" data-default="<%=developer.user_business_code%>"  maxlength="20"></span>',
							'</li>',
							'<li>',
								'<label class="form_label"><em>*</em>公司地址：</label><span class="form_input form_select">',
										'<input type="text" name="company_province" id="company_province" placeholder="省份/直辖市" data-error="公司地址" data-rule="companyprovince" _value="-1" style="width:102px"/>',
										'<a class="form_select_icon" href="javascript:;" tabindex="-1" hidefocus="true"></a>',
										'<ul class="form_select_options form_select_options_certif form_select_province"></ul>',
								'</span>',
								'<span class="form_input form_select" style="margin-left:12px;">',
										'<input type="text" name="company_city" id="company_city" placeholder="市/区" data-error="公司地址" data-rule="companycity" _value="-1" style="width:102px"/>',
										'<a class="form_select_icon" href="javascript:;" tabindex="-1" hidefocus="true"></a>',
										'<ul class="form_select_options form_select_options_certif form_select_city"></ul>',
								'</span>',
								'<div class="form_div"><span class="form_input"><input type="text" class="txt" name="user_address" id="user_address" value="<%=developer.user_address%>" data-rule="comaddress" data-error="公司地址" maxlength="100"></span></div>',
							'</li>',
							'<li>',
								'<label class="form_label"><em>*</em>公司电话：</label><span class="form_input"><input type="text" class="txt" name="user_tel" id="user_tel" value="<%=developer.user_tel%>" data-rule="telnum" data-error="公司电话" placeholder="区号-电话号码-分机号"></span>',
								'<label class="gray inputdes">填写公司固定电话号码，需加区号</label>',
							'</li>',
							'<li> ',
								'<label class="form_label"><em>*</em>联系人：</label><span class="form_input"><input type="text" class="txt" name="user_name"  id="user_name"value="<%=developer.user_name%>" data-rule="comperson" data-error="联系人" maxlength="30"></span>',
							'</li>',
							'<li>',
								'<label class="form_label"><em>*</em>手机号码：</label><span class="form_input"><input type="text" class="txt" name="user_phone" id="user_phone" value="<%=developer.user_phone%>" data-rule="mobilenum" data-error="手机号码" maxlength="11"></span>',
								'<label class="gray inputdes">仅限中国境内手机号码，无需加0或+86</label>',
							'</li>',
							'<li>',
								'<label class="form_label"><em>*</em>邮箱：</label><span class="form_input"><input type="text" class="txt" name="user_email" id="user_email" value="<%=developer.user_email%>" data-rule="email" data-error="邮箱" data-default="<%=developer.user_email%>"></span>',
							'</li>',
							'<li>',
								'<label class="form_label">QQ：</label><span class="form_element form_element2"><%=userInfo.uin%></span>',
							'</li>',
							'<li>',
								'<label class="form_label">网站地址：</label><span class="form_input"><input type="text" class="txt" name="user_website"id="user_website"  value="<%=developer.user_website%>" data-rule="applink" data-error="网站地址"></span>',
								'<label class="gray inputdes"></label>',
							'</li>',
							//<!--/企业开发者-->
							'<%}%>',
						'</ul>',
						'<ul>',
							'<li>',
								'<label class="form_label">&nbsp;</label>',
								'<span class="form_element">',
								'	<input type="submit" class="devSubmit" value="保存" id="ajaxsumbit" data-rule="formauto"/>',
								'</span>',
							'</li>',
						'</ul>',
					'</form>',
		        	'</div>',
	        	'</div>	',
		'</div>',
'</div>',
'<link href="http://mat1.gtimg.com/app/opent/css/development/index_selectapp.css" rel="stylesheet" type="text/css" />',
this.tpl.footer
].join("\r");

//拷贝信息
$.extend(global_obj.data.developer_detail, global_obj.data.developer);
global_obj.data.developer = global_obj.data.developer_detail;
window.user_province = global_obj.data.developer.user_province;
window.user_city = global_obj.data.developer.user_city;


$("#main").html(this.tmpl(this.tpl.development_developerTmpl, global_obj.data));

var developer = global_obj.data.developer;
var userType = developer.user_type || 1;
var user_uin = developer.user_uin || 0
var user_check_status = developer.user_check_status
var user_certif_status = developer.user_certif_status;
var user_province = developer.user_province;
var user_city = developer.user_city;
var insiteAppAble = developer.user_hosting || false;
var displayAppType = 15;
	
util.createScripts(["http://mat1.gtimg.com/app/opent/rebuild/js/location.js","http://mat1.gtimg.com/app/opent/rebuild/js/validater.js","http://mat1.gtimg.com/app/opent/rebuild/js/app_appadd.js"]);

$(function() {
	//开发者资料
	$(".appform").submit(function() {
		if ($("#user_email").val() != $("#user_email").attr("data-default")) {
			if (!confirm("修改邮箱地址需要重新激活邮件才能使用，是否继续操作？")) {
				return false;
			}
		}
		var postData = "ck_type=1&op=2&user_name=" + encodeURIComponent($('input#user_name').val()) + "&user_email=" + encodeURIComponent($('input#user_email').val());
		var sendmail = 0 + ($("#user_email").val() != $("#user_email").attr("data-default"));
		postData += "&user_phone=" + $('input#user_phone').val() + "&user_website=" + encodeURIComponent($('input#user_website').val()) + "&user_type=" + $('input#user_type').val() + "&user_uin=" + user_uin;
		postData += "&user_province=" + encodeURIComponent($('input#company_province').attr("_value")) + "&user_city=" + encodeURIComponent($('input#company_city').attr("_value")) + "&user_address=" + encodeURIComponent($('input#user_address').val());
		postData += "&sendmail=" + [0, 1][sendmail]; //检测邮件地址是否改变，是否发邮件
		if (userType == 2) { //公司
			postData += "&user_company=" + encodeURIComponent($('input#user_company').val()) + "&user_business_code=" + encodeURIComponent($('input#user_business_code').val()) + "&user_tel=" + $('input#user_tel').val();
		} else {
			postData += "&user_id_type=" + $('input#user_id_type').attr("_value") + "&user_id_card_num=" + $('input#user_id_card_num').val()
		}
		$.ajax({
			type: "POST",
			dataType: "json",
			//url: "/developer/update?t=" + new Date().getTime(),
			url: "/pipes/interfaceserver?action=common_query&business_type=updatedeveloper",
			data: postData,
			success: function(d) {
				//var ret = +(d.ret || d.error),
				var ret = d.code;
				msg = common.getMsgByRet(ret);
				if (msg) {
					loginWin.alert("<center>" + msg + "</center>");
					return;
				}
				if (ret === 0) {
					if ($("#user_email").val() != $("#user_email").attr("data-default")) {
						$("#user_email").attr("data-default", $("#user_email").val());
						var alertinfo = ["", "<br/>验证邮件已发送至<strong>" + $("#user_email").val() + "</strong>，验证成功后即可生效"][sendmail];
						loginWin.alert({
							"title": "修改成功",
							"text": "<center>成功修改开发者资料！" + alertinfo + "</center>",
							"width": 400,
							"height": [150, 180][sendmail]
						},
						function() {
							location.reload();
						});
					}
					if (user_check_status === 2 || user_certif_status === 1) {
						var user_name = userType == 2 ? $("input[name='user_company']") : $("input[name='user_name']"),
						user_id_card_num = userType == 2 ? $("input[name='user_business_code']") : $("input[name='user_id_card_num']"),
						user_id_type = $("input[name='user_id_type']");
						if (user_name.val() != user_name.attr("data-default") || user_id_card_num.val() != user_id_card_num.attr("data-default") || user_id_type.attr("_value") != user_id_type.attr("data-default")) { //修改了姓名、身份证件
							var str = "";
							if (user_check_status === 2) {
								str = "<center>请确认资质证明与你的基本信息一致，否则修改将不予以通过。<br/>现在去查看资质证明？</center>";
							} else {
								str = "<center>请确认资质证明与你的基本信息一致，并再次提交资质证明审核，审核通过后修改才可生效。现在去修改资质证明？</center>";
							}
							loginWin.confirm({
								"text": str,
								"title": "修改基本资料",
								"ok_text": "确定",
								"cancel_text": "以后再说"
							},
							function() {
								location.href = "/development/certification";
								return false;
							},
							function() {
								location.reload();
							});
							return false;
						}
					}
					loginWin.alert({
						"title": "修改成功",
						"text": "<center>成功修改开发者资料！</center>",
						"width": 400,
						"height": [150, 180][sendmail]
					},
					function() {
						location.reload();
					});

				} else {
					loginWin.alert("<center>修改开发者资料失败！</center>");
				}
			}
		});
	});
	$("#newapp").click(function() {
		popAppWin( +developer.user_app_numbers,+developer.appMax);
	});

	$(".appinfo li.alert").find(".rollbtn").click(function() {
		var t = $(this),
		w = t.parent(".alert_content").parent(".alert_warn");
		w.hide();
		$.get("/pipes/interfaceserver?action=common_query&business_type=rollinfo&uin=" + userInfo.uin + "&t=" + new Date().getTime());
		return;
	});
})