var development_compcheckuserTmpl = [
headerTmpl,
'<style type="text/css">',
'.hostingclick {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-top:1px solid #d9d9d9;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;font-weight:bold;}',
'.hosting {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-bottom:1px solid #d9d9d9;}',
'div a#yunJPGClick{display:none}',
'</style> ',
	'<div id="content" class="controlCon main main_app">',
		'<div class="approate">',
           '<a href="/development/complist/">我的组件</a> &gt; <span><%=comp.comp_name%></span>',
		'</div>',
		'<div class="deverLeft">',
			'<div class="leftMain">',
                '<div class="uicon">﻿<!--用户头像-->',
                    '<img src="http://mat1.gtimg.com/app/opent/images/index/icon.jpg" height="75" width="75" />',
                    '<br>',
                    '<%=comp.comp_name%>',
                '</div>',
				'<ul class="appsnav">',
					'<li class="active"><a href="/development/compinfo/<%=comp.comp_id%>">组件信息</a></li>',
					'<li><a href="/development/compsite/<%=comp.comp_id%>">网站信息</a></li>',
					'<% if(comp.comp_type !== 7){ %>',
					'<li><a href="/development/compset/<%=comp.comp_id%>">组件设置</a></li>',
					'<% } %>',
					//<!-- 
					//<li><a href="/development/compdel/222">删除组件</a></li> 
					// -->
				'</ul>',
			'</div>',
		'</div> ',
		'<div class="deverRight">',
			'<h1 class="comp_tit">组件提交审核</h1>',
			'<div class="app_check">',
				'<strong>确认开发者信息</strong><i></i><label>确认组件信息</label><i></i><label>提交审核</label>',
			'</div>',
			'<!--开发者信息-->',
'<iframe id="appform_post" width="100" height="100" src="about:blank"><iframe>',
'<form action="" method="post" class="appform"  id="appform_user"  onsubmit="return false;" >',
   ' <ul class="appinfo_certif">',
'<%if(developer.user_type !=2){ %>',
    			'<li style="height:28px;">',
			   '<input type="hidden" name="user_type" id="user_type" value="1" />',
							'<label class="form_label"><em>*</em>姓名：</label><span class="form_input"><input type="text" class="txt" name="user_name" id="user_name" value="<%=developer.user_name%>" data-default="<%=developer.user_name%>" data-rule="comperson" data-error="姓名" maxlength="30"></span>',
							'</li>',
							'<li style="height:61px;">',
								'<label class="form_label"><em>*</em>个人身份证件：</label><span class="form_input form_select">',	
									'<input type="text" name="user_id_type" id="user_id_type"',
										 ' value="<%if(developer.user_id_type=="1"){%>身份证<%}else if(developer.user_id_type=="0"){%>护照<%}else{%>身份证<%}%>" ',
										' _value="<%if(developer.user_id_type=="1"){%>1<%}else if(developer.user_id_type=="0"){%>0<%}else{%>1<%}%>" ',
										' data-default="<%if(developer.user_id_type=="1"){%>1<%}else if(developer.user_id_type=="0"){%>0<%}else{%>1<%}%>" style="width:102px"/>',
									'<a class="form_select_icon" id="user_di_seleicon" href="javascript:;" tabindex="-1" hidefocus="true"></a>',
									'<ul class="form_select_options  form_select_options_certif  form_select_userAuth"><li _value="1">身份证</li><li _value="0">护照</li></ul>',
								'</span>',
								'<div class="form_div"><span class="form_input">',
									'<input type="text" class="txt" id="user_id_card_num" name="user_id_card_num" ',
									' placeholder="<%if(developer.user_id_type=="1"){%>身份证号码<%}else if(developer.user_id_type=="0"){%>护照号码<%}else{%>身份证号码<%}%>"',
									' data-rule="<%if(developer.user_id_type=="1"){%>cardnum_new<%}else if(developer.user_id_type=="0"){%>passport<%}else{%>cardnum_new<%}%>" ',
									' data-error="<%if(developer.user_id_type=="1"){%>身份证号码<%}else if(developer.user_id_type=="0"){%>护照号码<%}else{%>身份证号码<%}%>"',
									' data-default="<%=developer.user_id_card_num%>" value="<%=developer.user_id_card_num%>" maxlength="30"/></span>',
								'</span></div>',
							'</li>',
							'<li style="height:61px;">',
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
							
							'<li> ',
								'<label class="form_label">QQ：</label><span class="form_element form_element2"><%=userInfo.uin%></span>',
							'</li>',
							
							'<li>',
								'<label class="form_label">网站地址：</label><span class="form_input"><input type="text" class="txt" name="user_website" id="user_website" value="<%=developer.user_website%>" data-rule="applink" data-error="网站地址"></span>',
							'</li>',




  
 '<%}else{%>',
'<input type="hidden" name="user_type" id="user_type" value="2" />',
 						'<li style="height:28px;">',
								'<label class="form_label"><em>*</em>公司全称：</label><span class="form_input"><input type="text" class="txt" name="user_company" id="user_company" value="<%=developer.user_company%>" data-default="<%=developer.user_company%>" data-rule="companyname" data-error="公司全称" maxlength="50"></span>',
							'</li>',
							'<li>',
								'<label class="form_label"><em>*</em>营业执照号码：</label><span class="form_input"><input type="text" class="txt" name="user_business_code" id="user_business_code" value="<%=developer.user_business_code%>" data-rule="complicensenum" data-error="营业执照号码" data-default="<%=developer.user_business_code%>"  maxlength="20"></span>',
							'</li>',
							'<li style="height:61px;">',
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
								'<label class="form_label">QQ：</label><span class="form_element form_element2"><%=userInfo.uin%></span>',
							'</li>',
							'<li>',
								'<label class="form_label">网站地址：</label><span class="form_input"><input type="text" class="txt" name="user_website"id="user_website"  value="<%=developer.user_website%>" data-rule="applink" data-error="网站地址"></span>',
								'<label class="gray inputdes"></label>',
							'</li>',
' <%}%>',
 		'<li>',
            '<label class="form_label">&nbsp;</label>',
           ' <span class="form_element">',
'<!--	            <input type="button" class="devCancel" value="保存设置">-->',
	            '<input type="submit" class="devSubmit" id="devSubmit" value="下一步" data-rule="formauto">',
            '</span>',
       ' </li>',
    '</ul>',
'</form>',
		'<!--/开发者信息-->',
		'</div>',
	'</div>',
'<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/app_checkdeveloper.js?20130328"></script>',
'<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/location.js?20130311"></script>',
footerTmpl
].join("\r");

$(function(){
	$(document.body).append(tmpl(development_compcheckuserTmpl,{}));
});
var need_post = false;
var NextUrl = '/development/compcheckinfo/'+comp.comp_id+'/';
var PostUrl = '/development/ajaxsavecheckdeverloper/'+app.app_id+'/'; 
var user_province=developer.user_province;
var user_city= developer.user_city;
