
var tSiteWebApp;
/*变量初始化*/
global_obj.data.navPos = 7;
var comp = global_obj.data.comp  = global_obj.data; 
var comp_type= comp.comp_type;
var development_compsiteTmpl = [
this.tpl.header,
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
					'<li><a href="/development/compinfo?comp_id=<%=comp.comp_id%>">组件信息</a></li>',
					'<li class="active"><a href="/development/compsite?comp_id=<%=comp.comp_id%>">网站信息</a></li>',
					'<% if(comp.comp_type != 7){ %>',
					'<li><a href="/development/compset?comp_id=<%=comp.comp_id%>">组件设置</a></li>',
					'<% } %>',
					
					'<!-- <li><a href="/development/compdel/222">删除组件</a></li>-->',
				'</ul>',
			'</div>',
		'</div> ',
		'<div class="deverRight">', 
			'<h1 class="comp_tit">网站信息</h1>',
			'<iframe id="appform_post" width="100" height="100" src="about:blank"></iframe>',
				'<form action="/development/compinfo?comp_id=<%=comp.comp_id%>" method="post" class="appform comp_site_form" enctype="multipart/form-data" id="appform_user">',
						'<ul> ',
						'<%if(comp.comp_status==2){%>',
							'<li class="alert alert alert_warn" beclose="true"><h4>组件审核中，组件信息不可以修改</h4></li>',
						'<%}else if(comp.comp_check_status ==1&&comp.comp_status ==3){ %>',
							'<li class="alert alert alert_warn" beclose="true"><h4>资料已提交，审核通过后才能生效</h4></li>',
						'<%}else if(comp.comp_check_status ==2&&comp.comp_status ==3){%>',
							'<li class="alert alert alert_warn" beclose="true"><a href="javascript:;" class="hidebtn closealert">关闭</a><h4>资料已通过审核</h4></li>',
						'<%}else if(comp.comp_check_status ==3&&comp.comp_status ==3){%>',
							'<li class="alert alert alert_warn" beclose="true"><a href="javascript:;" class="hidebtn closealert">关闭</a><h4>你修改的资料未通过审核，可以修改后重新提交<br/>如果有疑问<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></h4></li>',
						'<%}%>',
						'<input type="hidden" class="txt" name="comp_id" value="<%=comp.comp_id%>">',
					'<li>', 
						'<label class="form_label"><em>*</em>网站名称： </label>',
						'<span class="form_input"><input type="text" class="txt" data-default="<%=comp.comp_name%>" name="comp_name" id="comp_name" <%if(comp.comp_alertmsg || comp.comp_status==3){%>disabled<%}%>  value="<%=comp.comp_name%>" data-rule="compname" data-error="网站名称"></span>',
						'<label class="gray inputdes">该名称用于<a href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F" target="_blank">来源显示</a>，不超过16个字符</label>',
					'</li>',
					'<li> ',
						'<label class="form_label"><em>*</em>网站地址： </label>', 
						'<span class="form_input"><input type="text" class="txt" name="comp_url" <%if(comp.comp_alertmsg){%>disabled<%}%> value="<%=comp.comp_url%>" data-rule="link" data-error="网站地址"></span>', 
						'<label class="gray inputdes">用户通过该地址访问你的网站，同时也作为来源链接地址</label>',
					'</li>',
					'<li>',
						'<label class="form_label">&nbsp;</label>',
						'<span class="form_element">',
							'<input type="submit" value="提交" <%if(comp.comp_alertmsg){%>disabled class="devCancel"<%}else{%> class="devSubmit"<%}%> data-rule="formauto" >',
							'<input type="button" onclick="history.go(-1);" class="devCancel" value="取消">',
						'</span>',
					'</li>',
					'<li><label class="form_label">&nbsp;</label><span class="form_element" style="color:red">该组件如果已通过审核，修改需再次审核后方能生效</span></li>',
				'</ul>',
			'</form>',
		'</div>',
	'</div>',
	this.tpl.footer
].join("");



$("#main").append(tmpl(development_compsiteTmpl,global_obj.data))

util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/validater.js")

$(function(){
    $(".appform li.alert").find(".hidebtn").click(function(){
    var t=$(this),p=t.parent(),c=p.find(".alert_content");
        if (p.attr("beclose")){
			p.hide();
			$.get("/development/clearcompsitemsg/"+comp.comp_id+"?t="+new Date().getTime());
			return;
        }
    });
});

