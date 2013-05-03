;(function(){
<!--{ include file="header.tpl" }--> 
	tpl.whitename = [
	tpl.header,
	'<div id="content" class="controlCon main main_app">',
		'<div class="approate">',
			'<a href="/development/">我的应用</a> &gt; <span><%=app.app_name%></span>',
		'</div>',
		'<div class="deverLeft">',
			'<div class="leftMain">',
				'<div class="uicon">',
					'<img src="<%=app && app.app_icon_75 ? app.app_icon_75 : "http://mat1.gtimg.com/app/opent/images/index/icon.jpg"%>" height="75" width="75"/><br/>',
					'<p><%=app.app_name%></p>',
				'</div>',
				
				'<!--{ include file="./development/appnav.tpl" }--> ',
				tpl.development_appnav,
			'</div>',
		'</div> ',
		'<div class="deverRight">',
			'<h1 class="comp_tit">权限控制</h1>',
			'<div class="toogleview toogleview1">',
			'<p>你可以为应用添加白名单来进行产品体验和功能测试</p>',
			'<p><a href="javascript:;" class="btn_blue" id="addwhitename">+ 添加白名单</a></p>',
			'<%if (app.whitename_count>0) {%>',
			'<dl class="whitenamelist">',
				'<dt>目前有<span id="whitenum"><%=app.whitename_count%></span>个白名单号码：</dt>',
				'<%for(var item in app.app_whitename){%>',
					'<dd> <em><%=app.app_whitename[item]%></em><cite class="close" id="<%=app.app_whitename[item]%>" title="删除"></cite></dd>',
				'<%}%>',
			/*'<!--{foreach from=$app.app_whitename item=whitename}-->	
				'<dd> <em><!--{$whitename}--></em><cite class="close" id='<%=whitename%>' title="删除"></cite></dd>','
		//	'<!--{/foreach}-->*/
			'</dl>',
			//'<!--{/if}-->',
				'<%}%>',
			'<ul class="wikiinfo">',
				'<li><em>*</em>应用上线前，您可以为应用添加白名单来进行产品体验、功能测试，非白名单用户不可访问该应用</li>',
				'<li><em>*</em>每个应用最多可添加50个白名单号码</li>',
				'<li><em>*</em>应用上线后自动解除白名单限制</li>',
			'</ul>',
			'</div>',
			'<form class="toogleview toogleview2 appform" id="whitenameadd">',
				'<p>添加白名单号码</p>',
				'<ul>',
					'<li class="gray">请输入白名单号码(QQ号码)，每行一个</li>',
					'<li>',
						'<span class="form_input" style="margin-left:0;"><textarea name="whitenames" id="whitenames" style="line-height:24px;padding:5px;font-size:14px;width:235px;height:140px;"></textarea></span>',
					'</li>',
					'<li>',
					'<input type="submit" class="devSubmit" value="提交" data-rule="formauto" id="ajaxsumbit"/>',
					'<input type="reset" class="devCancel" value="取消">',
					'</li>',
				'</ul>',
			'</form>',
		'</div>',
	'</div>',
	tpl.footer,
].join("");

//console.log(tpl.whitename);

$('#main').html(tmpl(tpl.whitename,global_obj.data));
	var str = [
		'.hostingclick {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-top:1px solid #d9d9d9;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;font-weight:bold;}',
		'.hosting {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-bottom:1px solid #d9d9d9;}',
		'div a#yunJPGClick{display:none}'
	].join(""); 
	util.createStyle(str);
var appid =global_obj.data.app.app_id;
$(function(){ 
	$("#addwhitename").click(function(){
		var names=[];
		$(".whitenamelist").find("em").each(function(){
			names.push($(this).text().replace(/^\((.*)?\)$/,"$1"));
		});
		$(".appform textarea").val(names.join("\n"));
		$(".toogleview").hide();
		$(".toogleview2").show();
	});
	$(".toogleview2").hide();
	
	$(".appform input[type='reset']").click(function(){
		if (confirm("是否真的取消？")){
			$(".toogleview").hide();
			$(".toogleview1").show();
		}
		return false;
	}); 

	/**
	 * 删除白名单
	 */
	$("cite[id]").click(function(){
		console.log(this.id);
		 var postData = 'app_id='+global_obj.data.app.app_id+'&whitenames='+this.id,t=$(this);
		 $.ajax({ 
			   type: "POST", 
			   dataType: "json", 
			   url: "/pipes/interfaceserver?action=common_query&appid="+global_obj.data.app.app_id+"&business_type=whitenamedel&t="+"&t="+new Date().getTime(),
			   data: postData, 
			   success: function(d){
			   		var ret = +(d.ret||d.error),msg = common.getMsgByRet(ret);
			   		if (msg){
			   			loginWin.alert('<center>'+msg+'</center>');
			   			return;
			   		}
				   if(ret === 0){ 
					   loginWin.alert('<center>删除成功！</center>',function(){
					   		t.parent().remove();
							$("#whitenum").html($(".whitenamelist").find("dd").size());
					   });
					}else{
						loginWin.alert("<center>"+({
							 "101":"post 数据无效"
							,"102":"此数据不在白名单内"
							,"103":"没有修改权限"
							,"104":"提交错误，uin为空"
							,"201":"服务器错误"
						}[ret] || "删除失败")+"</center>");
					}  
			   } 
		});
	});

	/**
	 * 添加白名单
	 */
	$(".appform").submit(function(){ 
		 var qqnums=$('textarea#whitenames').val();
		 var qqs=qqnums.split(/\n+/),qqarr=[];
		 for(var i in qqs){
		 	if (/^\s*$/.test(qqs[i])){
		 		continue;
		 	}
		 	if (/^[1-9]\d{4,}$/.test(qqs[i])==false){
		 		qqarr.push(qqs[i]);
		 	}
		 }
		 if (qqarr.length>0){
		 	if (loginWin){/*
		 		loginWin.show({"title":"提示","text":"<div style=\"margin:20px 20px 10px;word-wrap:break-word;line-height:20px;font-size:14px;\">以下内容不是有效的QQ号码<ul style=\"line-height:20px;margin:10px 0 0 0;font-size:12px;\"><li>"+qqarr.join("</li><li>")+"</li></ul></div><center><input type=\"button\" class=\"devSubmit closeBtn\" value=\"返回修改\"/></center>","width":420,"height":160+qqarr.length*20});
		 		loginWin.contentarea.find(".closeBtn").bind("click",function(){
    		        loginWin.close();
    	    	});*/
    	    	loginWin.alert({"text":"<div style=\"margin:0 20px 10px;word-wrap:break-word;line-height:20px;font-size:14px;\">以下内容不是有效的QQ号码<ul style=\"line-height:20px;margin:10px 0 0 0;font-size:12px;\"><li>"+qqarr.join("</li><li>")+"</li></ul></div>","height":160+qqarr.length*20});
		 	}else{
		 		alert("以下内容不是有效的QQ号码\n"+qqarr.join("\n"));
		 	}
		 	return false;
		 }
		 if (qqs.length>50){
		 	loginWin.alert("<center>白名单号码最多只能添加50个</center>");
		 	return false;
		 }
		 qqnums=qqnums.replace(/[^0-9\n]/g,"");
		 var postData = 'appid='+appid+'&whitenames='+encodeURIComponent(qqnums);
		 console.log(postData);
		 $.ajax({ 
			   type: "POST", 
			   dataType: "json", 
			   url: "/pipes/interfaceserver?action=common_query&appid="+global_obj.data.app.app_id+"&business_type=whitenameadd&t="+new Date().getTime(), 
			   data: postData, 
			   success: function(d){ 
			   		var ret = +(d.ret || d.error),msg = common.getMsgByRet(ret);
			   		if (msg){
			   			loginWin.alert("<center>"+msg+"</center>");
			   			return;
			   		}
					if(ret === 0){
						loginWin.alert("<center>白名单信息保存成功</center>",function(){
							location.reload();
						});				   
					}else{
						loginWin.alert("<center>"+({'101':'提交的数据无效','102':'提交错误，应用id为空','103':'没有修改权限','201':'服务器错误'}[ret] || "添加白名单失败！")+"</center>"); 
					}  
			   } 
		});
		return false; 
	});
})

})();