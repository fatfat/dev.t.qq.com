// JavaScript Document
var developer = global_obj.data.developer||global_obj.data.developer_detail;
global_obj.data.developer = developer;
var sendmail = 0;
var user_uin = user_uin || developer && developer.user_uin ? developer.user_uin: global_obj.data.userInfo.uin || 0;
var reSubmit = 0;
var user_province = developer && developer.user_province ? developer.user_province: "";
var user_city = developer && developer.user_city ? developer.user_city: "";

	
var developer_add = [
	tpl.header, 
	'<div id="content" class="deverCon wrapper">',
		'<%if(developer){%>',
		'<h3 class="formtitle">修改开发者资料</h3>',
		'<%}else{%>',
		'<h3 class="formtitle">填写资料获得开发者身份</h3><%}%>',
		'<div class="formWrap">',
			'<form action="/developer/update" method="post" class="appform" >',
				'<ul class="appinfo_certif">',
				'<%if(developer){%>',
					'<input type="hidden" name="dotype" value="edit" />',
					'<input type="hidden" name="op" id="op" value="2" />',
					'<input type="hidden" name="sendmail" id="sendmail" value="0" />',
				'<%}else{%>',
					'<li>',
						'<label class="form_label">开发者类型：</label>',
						'<span class="form_element">',
						'<input type="radio" name="userType" checked id="uretypecom" /> <label class="normal" for="uretypecom">公司</label>',
						'\r<input type="radio" name="userType" id="uretypeperson" /> <label for="uretypeperson">个人</label>',
						'<input type="hidden" name="dotype" value="add" />',
						'<input type="hidden" name="op" id="op" value="1" />',
						'</span>',
					'</li><%}%>',
				'<input type="hidden" name="user_type" value="2" />',
					'<li><label class="form_label"><em>*</em>公司全称：</label><span class="form_input"><input type="text" class="txt" name="user_company" id="user_company" value="<%=developer && developer.user_company ? developer.user_company : ""%>" data-rule="companyname" data-error="公司全称" maxlength="50"></span>',
					'</li>',
				    '<li><label class="form_label"><em>*</em>营业执照号码：</label><span class="form_input"><input type="text" class="txt" name="user_business_code" id="user_business_code" value="<%=developer && developer.user_business_code ? developer.user_business_code : ""%>" data-default="<%=developer && developer.user_business_code ? developer.user_business_code : ""%>" data-rule="complicensenum" data-error="营业执照号码" maxlength="20"></span>',
					'</li>',
					'<li><label class="form_label"><em>*</em>公司地址：</label><span class="form_input form_select"><input type="text" name="company_province" id="company_province" placeholder="省份/直辖市" data-error="公司地址" data-rule="companyprovince" _value="-1" style="width:102px"/><a class="form_select_icon" href="javascript:;" tabindex="-1" hidefocus="true"></a><ul class="form_select_options form_select_options_certif form_select_province"></ul></span><span class="form_input form_select" style="margin-left:12px;"><input type="text" name="company_city" id="company_city" placeholder="市/区" data-error="公司地址" data-rule="companycity" _value="-1" style="width:102px"/><a class="form_select_icon" href="javascript:;" tabindex="-1" hidefocus="true"></a><ul class="form_select_options form_select_options_certif form_select_city"></ul></span><div class="form_div"><span class="form_input"><input type="text" class="txt" name="user_address" id="user_address" value="<%=developer && developer.user_address ? developer.user_address : ""%>" data-rule="comaddress" data-error="公司地址" maxlength="100"></span></div>',
					'</li>',
					'<li><label class="form_label"><em>*</em>公司电话：</label><span class="form_input"><input type="text" class="txt" name="user_tel" id="user_tel" value="<%=developer && developer.user_tel ? developer.user_tel : ""%>" data-rule="telnum" data-error="公司电话" placeholder="区号-电话号码-分机号"></span><label class="gray inputdes">填写公司固定电话号码，需加区号</label>',
					'</li>',
					'<li><label class="form_label"><em>*</em>联系人：</label><span class="form_input"><input type="text" class="txt" name="user_name"  id="user_name"value="<%=developer && developer.user_name ? developer.user_name : ""%>" data-rule="comperson" data-error="联系人" maxlength="30"></span>',
					'</li>',
					'<li><label class="form_label"><em>*</em>手机号码：</label><span class="form_input"><input type="text" class="txt" name="user_phone" id="user_phone" value="<%=developer && developer.user_phone ? developer.user_phone : ""%>" data-rule="mobilenum" data-error="手机号码" maxlength="11"></span><label class="gray inputdes">仅限中国境内手机号码，无需加0或+86</label>',
					'</li>',
					'<li><label class="form_label"><em>*</em>邮箱：</label>',
						'<span class="form_input"><input type="text" class="txt" name="user_email" id="user_email" value="<%=developer && developer.user_email ? developer.user_email : ""%>" data-rule="email" data-error="邮箱"></span>',
					'</li>',
					'<li><label class="form_label">QQ：</label><span class="form_element"><%=userInfo && userInfo.uin ? userInfo.uin : ""%></span>',
					'</li>',
					'<li><label class="form_label">网站地址：</label><span class="form_input"><input type="text" class="txt" name="user_website"id="user_website"  value="<%=developer && developer.user_website ? developer.user_website : ""%>" data-rule="applink" data-error="网站地址"></span><label class="gray inputdes"></label>',
					'</li>',
                    tpl.agreement,
					'<li>',
						'<label class="form_label">&nbsp;</label>',
						'<span class="form_element">',
						'<input type="submit" class="devSubmit" value="提交" data-rule="formauto" id="ajaxsumbit" />',
						'\r<input type="reset" id="reset" class="devCancel" value="取消" />',
						'</span>',
					'</li>',
				'</ul>',
			'</form>',
		'</div>',
	'</div>',
	tpl.footer
].join("");


$('#main').html(tmpl(developer_add, global_obj.data));

util.createScripts(["/js/location.js","/js/validater.js"]);
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
		var postData = "user_type=2&user_company=" + encodeURIComponent($('input#user_company').val()) + "&user_business_code=" + encodeURIComponent($('input#user_business_code').val()) + "&user_province=" + encodeURIComponent($('input#company_province').attr("_value")) + "&user_city=" + encodeURIComponent($('input#company_city').attr("_value")) + "&user_address=" + encodeURIComponent($('input#user_address').val()) + "&user_tel=" + $('input#user_tel').val() + "&user_name=" + encodeURIComponent($('input#user_name').val()) + "&user_phone=" + $('input#user_phone').val() + "&user_email=" + encodeURIComponent($('input#user_email').val());
		postData += "&user_website=" + encodeURIComponent($('input#user_website').val()) + "&op=" + $('input#op').val() + "&user_uin=" + user_uin;
		if (developer) {
			postData += "&sendmail=" + sendmail; //检测邮件地址是否改变，是否发邮件
		}
		$.ajax({
			type: "POST",
			dataType: "json",
			//url: "/developer/update?t=" + new Date().getTime(),
			url:"/pipes/interfaceserver?action=common_query&business_type=updatedeveloper",
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
			"error": function() {
				loginWin.alert("<center>网络连接失败，请稍候重试！</center>");
			}
		});
		return false;
	})
	
	$("input#user_email").change(function() {
		sendmail = 1;
	})
});
	