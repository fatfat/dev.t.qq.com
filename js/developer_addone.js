  //JavaScript Document
 
var developer = null;//global_obj.data.developer;
global_obj.data.developer = null;
var user_uin = user_uin || developer && developer.user_uin ? developer.user_uin : global_obj.data.userInfo.uin||0;
var user_province = developer && developer.user_province ? developer.user_province : "";
var user_city = developer && developer.user_city ? developer.user_city : "";
var reSubmit = 0;
	
var developer_addone  = 
[
	this.tpl.header, 
	'<div id="content" class="deverCon wrapper">',
		'<h3 class="formtitle">',
			'<%if(developer){%>',
			'修改开发者资料',
			'<%}else{%>',
			'填写资料获得开发者身份',
			'<%}%>',
		'</h3>',
		'<div class="formWrap">',
			'<form action="developer_update.html" method="post" class="appform" >',
				'<ul class="appinfo_certif">',
					'<%if(developer){%>',
						'<input type="hidden" name="dotype" value="edit" />',
						'<input type="hidden" name="op" id="op" value="2" />',
						'<input type="hidden" name="sendmail" id="sendmail" value="0" />',
					'<%}else{%>',
					'<li>',
						'<label class="form_label">开发者类型：</label>',
						'<span class="form_element">',
						'<input type="radio" name="userType" value="0" id="uretypecom" /> <label for="uretypecom" class="normal">公司</label>',
						'\r<input type="radio" name="userType" value="1" checked id="uretypeperson" /> <label for="uretypeperson">个人</label>',
						'<input type="hidden" name="dotype" value="add" /> ',
						'<input type="hidden" name="op" id="op" value="1" />',
						'</span>',
					'</li>',
					'<%}%>',
					'<input type="hidden" name="user_type" value="1" >',
					'<li><label class="form_label"><em>*</em>姓名：</label><span class="form_input"><input type="text" class="txt" name="user_name" id="user_name" value="<%=developer && developer.user_name ? developer.user_name : ""%>" data-rule="comperson" data-error="姓名" maxlength="30"></span>',
					'</li>',
			    	'<li><label class="form_label"><em>*</em>个人身份证件：</label><span class="form_input form_select"><input type="text" name="user_id_type" id="user_id_type" value="<%if(developer && developer.user_id_type ? developer.user_id_type=="1" : "true"){%>身份证<%}else if(developer && developer.user_id_type ? developer.user_id_type == "0" : "true"){%>护照<%}else{%>身份证<%}%>" _value="<%if(developer && developer.user_id_type ? developer.user_id_type == "0" : "true"){%>1<%}else if(developer.user_id_type == "0"){%>0<%}else{%>1<%}%>" style="width:102px"/><a class="form_select_icon" href="javascript:;" tabindex="-1" hidefocus="true"></a><ul class="form_select_options form_select_options_certif form_select_userAuth"><li _value="1">身份证</li><li _value="0">护照</li></ul></span><div class="form_div"><span class="form_input"><input type="text" class="txt" id="user_id_card_num" name="user_id_card_num" placeholder="<%if(developer && developer.user_id_type ? developer.user_id_type == "1" : "true"){%>身份证号码<%}else if(developer && developer.user_id_type ? developer.user_id_type == "0" : "true"){%>护照号码<%}else{%>身份证号码<%}%>" data-rule="<%if(developer && developer.user_id_type ? developer.user_id_type == "0" : "true"){%>cardnum_new<%}else if(developer && developer.user_id_type ? developer.user_id_type == "0" : "true"){%>passport<%}else{%>cardnum_new<%}%>" data-error="<%if(developer && developer.user_id_type ? developer.user_id_type == "1" : "true"){%>身份证号码<%}else if(developer && developer.user_id_type ? developer.user_id_type == "0" : "true"){%>护照号码<%}else{%>身份证号码<%}%>" data-default="<%=developer && developer.user_id_card_num ? developer.user_id_card_num : ""%>" value="<%=developer && developer.user_id_card_num ? developer.user_id_card_num : ""%>" maxlength="30"/></span></span></div>',
					'</li>',
					'<li><label class="form_label"><em>*</em>联系地址：</label><span class="form_input form_select"><input type="text" name="company_province" id="company_province" placeholder="省份/直辖市" data-error="联系地址" data-rule="companyprovince" _value="-1" data-error="省份/直辖市" style="width:102px"/><a class="form_select_icon" href="javascript:;" tabindex="-1" hidefocus="true"></a><ul class="form_select_options form_select_options_certif form_select_province"></ul></span><span class="form_input form_select" style="margin-left:12px;"><input type="text" name="company_city" id="company_city" placeholder="市/区" data-error="联系地址" data-rule="companycity" _value="-1" data-error="市/区" style="width:102px"/><a class="form_select_icon" href="javascript:;" tabindex="-1" hidefocus="true"></a><ul class="form_select_options form_select_options_certif form_select_city"></ul></span><div class="form_div"><span class="form_input"><input type="text" class="txt" name="user_address" id="user_address" value="<%=developer && developer.user_address ? developer.user_address : ""%>" data-rule="comaddress" data-error="联系地址" maxlength="100"></span></div>',
					'</li>',
					'<li><label class="form_label"><em>*</em>手机号码：</label><span class="form_input"><input type="text" class="txt" name="user_phone" id="user_phone"  value="<%=developer && developer.user_phone ? developer.user_phone : ""%>" data-rule="mobilenum" data-error="手机号码" maxlength="11"></span><cite class="gray inputdes">仅限中国境内手机号码，无需加0或+86</cite>',
					'</li>',
					'<li><label class="form_label"><em>*</em>邮箱：</label><span class="form_input"><input type="text" class="txt" id="user_email"  name="user_email" value="<%=developer && developer.user_email ? developer.user_email : ""%>" data-rule="email" data-error="邮箱"></span>',
					'</li>',
					'<li><label class="form_label">QQ：</label><span class="form_element"><%=userInfo && userInfo.uin ? userInfo.uin : "111"%></span>',
					'</li>',
					'<li><label class="form_label">网站地址：</label><span class="form_input"><input type="text" class="txt" name="user_website" id="user_website" value="<%=developer && developer.user_website ? developer.user_website : ""%>" data-rule="applink" data-error="网站地址"></span>',
					'</li>',
					this.tpl.agreement,
					'<li>',
						'<label class="form_label">&nbsp;</label>',
						'<span class="form_element">',
						'<input type="submit" class="devSubmit" value="提交" data-rule="formauto" id="ajaxsumbit"/>',
						'\r<input type="reset" id="reset" class="devCancel" value="取消"/>',
						'</span>',
					'</li>',
				'</ul>',
			'</form>',
		'</div>',
	'</div>',
	this.tpl.footer
].join("");

$('#main').html(tmpl(developer_addone, global_obj.data));
util.createScript("/js/location.js");
util.createScript("/js/validater.js");
	$(function(){
	$('#reset').click(function() {
		location.href = "/developer/bedever";
	});
	$("#uretypecom").click(function() {
		location.href = '/developer/add';
	});
	$("#uretypeperson").click(function() {
		location.href = '/developer/addone';
	});
	
	if (window.user_province > 0) {
		$("#company_province").val(LOCATION[1][ + user_province].n).attr("_value", user_province);
	}
	if (window.user_city > 0) {
		$("#company_city").val(LOCATION[1][ + user_province][ + user_city].n).attr("_value", user_city);
	
		//市/区有值的情况下加载下拉框
		var cvalue = $("#company_city").attr("_value");
		if (cvalue != "-1") {
			var arr = [],
			pvalue = $("#company_province").attr("_value");
			for (var p in LOCATION[1][pvalue]) {
	
				("n" != p) && arr.push('<li _value="' + p + '">' + LOCATION[1][pvalue][p].n + '</li>');
			}
			$('.form_select_city').html(arr.join("")).find("li:eq(0)").addClass("active");
		}
	}
	$(".appform").submit(function() {
		if (reSubmit > 0) {
			loginWin.alert("<center>你已经是开发者，请不要重复提交！</center>",
			function() {
				location.href = '/development/';
			});
			return false;
		}
		var postData = "user_type=1&user_name=" + $('input#user_name').val() + "&user_id_type=" + $('input#user_id_type').attr("_value") + "&user_id_card_num=" + $('input#user_id_card_num').val() + "&user_province=" + encodeURIComponent($('input#company_province').attr("_value")) + "&user_city=" + encodeURIComponent($('input#company_city').attr("_value")) + "&user_address=" + encodeURIComponent($('input#user_address').val()) + "&user_phone=" + $('input#user_phone').val() + "&user_email=" + $('input#user_email').val() + "&user_website=" + encodeURIComponent($('input#user_website').val());
		postData += "&op=" + $('input#op').val() + "&user_uin=" + user_uin;
		if (developer) {
			postData += "&sendmail=" + $("input#sendmail").val(); //检测邮件地址是否改变，是否发邮件
		}
		$.ajax({
			type: "POST",
			//url: "/developer/update?t=" + new Date().getTime(),
			url:"/pipes/interfaceserver?action=common_query&business_type=updatedeveloper",
			dataType: "json",
			data: postData,
			success: function(d) {
				var ret = +(d.ret || d.error),
				msg = common.getMsgByRet(ret);
				if (msg) {
					loginWin.alert("<center>" + msg + "</center>");
					return;
				}
				if (ret === 0) {
					//注册或修改成功
					++reSubmit;
					loginWin.alert("<center>保存开发者资料成功</center>",
					function() {
						location.href = '/development/';
					});
				} else {
					loginWin.alert("<center>保存开发者资料失败," + d.msg + "</center>");
				}
			},
			error: function() {
				loginWin.alert("<center>网络连接失败，请稍候重试！</center>");
			}
		});
		return false;
	})
	
	$("input#user_email").change(function() {
		$("input#sendmail").val('1');
	})
	
	$("#cardnumcheck").click(function() {
		var selector = $("input[name='user_id_card_num']");
		selector.parent(".form_input").next(".errorTip").remove();
		selector.parent(".form_input").next(".currectTip").remove();
		var id = $.trim(selector.val());
		var ret = OPEN_VALIDATOR['cardnum'](id);
		if (ret == true && id) {
			var url = '/developer/checkid/' + id;
			if (id) {
				$.getJSON(url,
				function(d) {
					//d = $.parseJSON(d);
					if (d.data.is_exist == 0) {
						showmsg(true, selector, '');
					} else {
						showmsg(false, selector, '此ID已被注册');
					}
				});
			}
		} else {
			showmsg(false, selector, '身份证格式错误');
		}
	});
});





	