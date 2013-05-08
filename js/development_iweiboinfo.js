tpl.iweiboinfo = [
	'<!--{ include file="header.tpl" }--> ',
	tpl.header,
	'<div id="content" class="controlCon main main_app">',
		'<div class="approate">',
			'<a href="/development/iweibo/">iWeibo</a> &gt; <span><%=app.app_name%></span>',
		'</div>',
		'<div class="deverLeft">',
			'<div class="leftMain">',
				'<div class="uicon"> ',
					'<img src="<%=app && app.app_icon_75 ? app.app_icon_75 : "http://mat1.gtimg.com/app/opent/images/index/icon.jpg"%>" height="75" width="75"/><br/>',
					'<p><%=app.app_name%></p>',
				'</div>',
				'<ul class="appsnav">',
					'<li class="active"><a href="/development/iweiboinfo?appid=app.app_id_old%>">组件信息</a></li>',
					'<li><a href="/development/iweibosite?appid=app.app_id_old%>">网站信息</a></li>',
					'<!-- ',
					'<li><a href="">转让应用</a></li>',
					'<li><a href="">删除应用</a></li>',
					'-->',
				'</ul>',
			'</div>',
		'</div> ',
		'<div class="deverRight"> ',
			'<h1 class="comp_tit">组件信息汇总</h1>',
			'<ul class="appinfo">',
		'<%if (app.app_status==0){%>',
		'<li class="alert alert_warn">',
			'<a href="javascript:;" class="hidebtn closealert">收起↑</a>',
			'<h4>你的组件已经被禁止使用</h4>',
			'<div class="alert_content">如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></div>',
			'</li>',
		'<%}else if (app.app_status==1 ) {%>',
			'<li class="alert alert_warn">',
			'<a href="javascript:;" class="hidebtn closealert">收起↑</a>',
			'<h4>你的组件已可用</h4>',
			'<div class="alert_content">如需显示网站来源，可将组件<a href="/development/iweibocheckuser/<!--{$app.app_id}-->" >提交审核</a>审核通过后，来源显示自动生效</div>',
			'</li>',
			'<!--{elseif $app.app_status==2 }-->',
			'<li class="alert alert_warn"><h4>组件审核中</h4>',
			'</li>',
		'<%} else if (app.app_status==7) {%>',
			'<li class="alert alert_warn">',
			'<a href="javascript:;" class="hidebtn closealert">收起↑</a>',
			'<h4>你的组件未通过审核，原因如下：</h4>',
			'<div class="alert_content"><!--{$app.app_check_msg}--><br/>你可以修改后重新<a href="/development/iweibocheckuser/<!--{$app.app_id}-->">提交审核</a>，如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></div>',
			'</li>',
		'<%} else if (app.app_status==3) {%>',
			'<li class="alert alert_warn">',
			'<a href="javascript:;" class="hidebtn closealert"></a>',
			'<h4>你的组件已通过审核</h4>',
			'</li>',
		'<%} else {%>',
			'<li class="alert alert_warn">',
			'<a href="javascript:;" class="hidebtn closealert">收起↑</a>',
			'<h4>你的组件为非法状态</h4>',
			'<div class="alert_content">如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></div>',
			'</li>   ',
		'<%}%>',
		'<%if (app.app_bd_change) {%>',
			'<li class="alert alert_warn" beclose="true">',
			'<a href="javascript:;" class="hidebtn closealert">隐藏</a>',
			'<h4>管理员对你的组件进行了如下操作：</h4>',
			'<div class="alert_content"><!--{$app.app_bd_change}--><br/>如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></div>',
			'</li>',
		'<%}%>',
		'<!-- 审核结果提示  完 -->',
		'<li><strong>网站名称：</strong><em><!--{$app.app_name}-->&nbsp;</em></li>',
		'<li><strong>网站地址：</strong><em><a href="<%=app.app_url%>" target="_blank"><%=app.app_url%></a>&nbsp;</em></li>',
		'<li><strong>组件类型：</strong><em><%=app.appType%>&nbsp;</em></li>',
		'<li><strong>App Key：</strong><em><%=app && app.app_id_old ? app.app_id_old:"&nbsp;"%></em></li>',
		'<li><strong>App Secret：</strong><em><%=app && app.app_key? app.app_key:"&nbsp;"%></em></li>',
		'<li><strong>接口权限：</strong><em><%=app.app_level%>权限&nbsp;</em><em class="link">通过审核后会自动升级为高级 <a href="http://wiki.open.t.qq.com/index.php/API%E8%B0%83%E7%94%A8%E6%9D%83%E9%99%90" target="_blank">查看接口权限详细说明&gt;&gt;</a></em></li>',
		'<li><strong>来源显示：</strong><em><%=app.source_status_display%></em><em class="link">通过审核后会自动生效 <a href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F" target="_blank">查看来源显示详细说明&gt;&gt;</a></em></li>				</li>',
		'<li><strong>组件状态：</strong><em><%=app.app_status_display%>&nbsp;</em></li>',
					'</ul>',
				'</div>',
			'</div>',
	tpl.footer
	].join();
	$('#main').html(tpl.iweiboinfo,global_obj.data);
	var str = [
		'.hostingclick {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-top:1px solid #d9d9d9;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;font-weight:bold;}',
		'.hosting {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-bottom:1px solid #d9d9d9;}',
		'div a#yunJPGClick{display:none}',
	].join();
	util.createStyle(str);
	
	var insiteAppAble=true;
	var appid=global_obj.data.app.app_id;
	$(".appinfo li.alert").find(".hidebtn").click(function(){
	        var t=$(this),p=t.parent(),c=p.find(".alert_content");
	        if (p.attr("beclose")){
	        p.hide();
	        $.get("/development/clearappcheckmsg?appid="+appid+"t="+new Date().getTime());
	        return;
	        }
	        if (c.is(":visible")){
	            c.slideUp("fast");
	            t.html("展开↓");
	        }else{
	            c.slideDown("fast");
	            t.html("收起↑");
	        }
	    });
	$(function(){  
		 $('a#closewarn').click(function(){
	 		$.ajax({
				  url: "/development/clearappcheckmsg?appid="+appid+"?t="+new Date().getTime(),
	 			  dataType: "json",
	 			  success: function(ResposeData){
	 	 			if(ResposeData.ret==0){ 
	 	 	 			//请求成功
	 	 				$('#closewarnWindows').hide();
	 	 	 	 	}else{
	 	 	 	 	 	//失败
	 	 	 	 	 	$('#closewarnWindows').hide();
	 	 	 	 	}
	 		  	 }
	 		}); 

		}) 
	})