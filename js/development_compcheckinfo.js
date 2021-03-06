var development_compcheckinfo = [
tpl.header,
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
                   ' <%=comp.comp_name%>',
                '</div>',
				'<ul class="appsnav">',
					'<li class="active"><a href="/development/compinfo?comp_id=<%=comp.comp_id%>">组件信息</a></li>',
					'<li><a href="/development/compsite?comp_id=<%=comp.comp_id%>">网站信息</a></li>',
					'<%if(comp.comp_type!==7){%>',
						'<li><a href="/development/compset?comp_id=<%=comp.comp_id%>">组件设置</a></li>',
					'<%}%>',
					//<!-- 
					//<li><a href="/development/compdel/222">删除组件</a></li> 
					// -->
				'</ul>',
			'</div>',
		'</div> ',
		'<div class="deverRight">', 
			'<h1 class="comp_tit">组件提交审核</h1>',
			'<div class="app_check">',
				'<label>确认开发者信息</label><i class="active"></i><strong>确认组件信息</strong><i></i><label>提交审核</label>',
			'</div>',
			'<!--开发者信息-->',
'<form action="/development/compcheckover" method="post" class="appform" enctype="multipart/form-data" id="appform_user">',
    '<ul> ',
        
            '<input type="hidden" name="comp_user_uin" value="<%=comp.comp_user_uin%>">',
            '<input type="hidden" name="comp_id" value="<%=comp.comp_id%>">',
            '<input type="hidden" name="comp_type" value="<%=comp.comp_type%>">',
            '<input type="hidden" name="comp_level" value="<%=comp.comp_level%>">',
            '<input type="hidden" name="comp_source_status" value="<%=comp.comp_source_status%>">',
        
		'<li> ',
			'<label class="form_label"><em>*</em>网站名称：</label><span class="form_input"><input type="text" class="txt" name="comp_name" value="<%=comp.comp_name%>" data-default="<%=comp.comp_name%>" data-rule="compname" data-error="网站名称" maxlength="16"></span>',

                       '<label class="gray inputdes">该名称用于<a href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F" target="_blank">来源显示</a></label>',
		'</li> ',
		'<li> ',
			'<label class="form_label"><em>*</em>网站地址：</label><span class="form_input"><input type="text" class="txt" name="comp_url" value="<%=comp.comp_url%>" data-rule="link" data-error="网站地址"></span> ',

					'<label class="gray inputdes">用户通过该地址使用组件，同时也作为来源链接地址</label>',
		'</li>',
        '<li>',
            '<label class="form_label">&nbsp;</label>',
            '<span class="form_element">',
				'<!--<input type="button" class="devCancel" value="保存设置">-->',
	            '<input type="submit" class="devSubmit" value="提交审核" data-rule="formauto">',
           ' </span>',
        '</li>',
   ' </ul>',
'</form>',
			'<!--/开发者信息-->',
		'</div>',
	'</div>',
	tpl.footer,
].join("\r");
util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/validater.js");
var comp = global_obj.data;
var comp_type = comp.comp_type;
$("#main").append(tmpl(development_compcheckinfo,global_obj.data))
$(function(){
	
	//反选
	$("input[id^='app_type_select_']").click(function(){
		$(this).parent().parent().next("dd").find("input[type='checkbox']").each(function(){
			if ($(this).is(":checked")){
				$(this).removeAttr("checked");
			}else{
				$(this).attr("checked","checked");
			}
		});
	});
	//显示终端支持选项
	var app_support_list_close=true;
	$("input[name='app_support']").focus(function(){
		$("#app_support_list").show();
	}).blur(function(e){
		app_support_list_close=false;
		setTimeout(function(){
		if (!app_support_list_close)
		{$("#app_support_list").hide();}
		},100);
	});
	$("body").click(function(e){
		if ((e.target||e.srcElement).name=="app_support"){
		return;
		}
		app_support_list_close=false;
		setTimeout(function(){
		if (!app_support_list_close)
		{$("#app_support_list").hide();}
		},100);
	});
	$("#app_support_list").click(function(e){
		app_support_list_close=true;
		e.stopPropagation();
	});
	$(".appform").submit(function(){
	if(confirm("提交审核后组件信息将不能修改，是否确定继续提交审核？")){
		var postData ='comp_id='+comp.comp_id
		+'&comp_user_uin='+comp.comp_user_uin
		+'&comp_status='+comp.comp_status
		+'&comp_level='+comp.comp_level
		+'&comp_name='+encodeURIComponent($('input[name="comp_name"]').val())
		+'&comp_url='+encodeURIComponent($('input[name="comp_url"]').val())
		+'&comp_source_status='+encodeURIComponent($('input[name="comp_source_status"]').val())
		+"&action=common_query&business_type=ajax_compcheckover";
         $.ajax({
               "type": "POST",
			   "url":"/pipes/interfaceserver",
               "dataType": "json",
               "data": postData,
               "success": function(d){
               		var ret = +d.ret,msg=common.getMsgByRet(ret);
               	   if (msg){
               	   		loginWin.alert("<center>"+msg+"</center>");
               	   		return;
               	   }
                   if(ret === 0){
                   		$(".app_check").html("<label>确认开发者信息</label><i></i><label>确认应用信息</label><i class=\"active\"></i><strong>提交审核</strong>");
                	   if (loginWin){
                        	loginWin.alert({
                        	"title":"提交成功",
                        	"text":"<center><label class=\"icon_ok\"></label> &nbsp; 组件提交审核成功，审核人员会在两个工作日内处理完毕。</center>",
                        	"width":420,
                        	"height":185
                        	},function(){
                        	location.href="/development/compinfo?comp_id="+comp.comp_id;
                        	});
                        }
                    }else{
                        //注册或修改出错，打印错误
                        if (loginWin){
                        	loginWin.show({
                        	"title":"提交失败",
                        	"text":"<center><br/>"+d.msg+"</center>",
                        	"width":420,
                        	"height":120
                        	});
                        	setTimeout(function(){
                        		location.href="/development/compinfo?comp_id="+comp.comp_id;
                        	},1500);
                        }else{
                        	alert("提交失败\n"+d.msg); 
                        }
                    } 
               }
        }); 
	}
	return false;
	});
});