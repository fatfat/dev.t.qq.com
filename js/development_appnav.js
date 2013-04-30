;(function(){// JavaScript Document
	//需要的数据
	this.tpl = this.tpl || {};	
	/*window.appnav = "info";
	window.whitename = "1231";
	if(!window.app){
		window.app = {};
	};
	app.app_id = "4123";
	app.app_type = 6
	app.app_type_check = 2;
	app.app_hosting = "192.168.1.1";
	app.app_status = 1,
	app.app_pay = 1;
	app.app_binbond = 2;
	developer.user_certif_status = 1;
	developer.user_check_status = 1;*/
	var developer = this.developer||global_obj.data.developer;
	this.tpl.appnav = [
	'<ul class="appsnav">',
		'<li <%if(appnav =="info"){%> class="active"<%}%>><a href="/development/appinfo?appid=<%=app.app_id%>">应用汇总</a></li>',
		'<li <%if(appnav =="edit"){%> class="active"<%}%>><a href="/development/appedit?appid=<%=app.app_id%>">基本信息</a></li>',
		'<%if(app.app_type =="6"){%>', 
		'<li <%if(appnav =="platform"){%> class="active"<%}%>><a href="/development/platforminfo?appid=<%=app.app_id%>">平台信息</a></li>',
		'<%}%>',
		'<li <%if(appnav =="compass"){%> class="active"<%}%>><a href="/development/appcompass?appid=<%=app.app_id%>/">业务数据</a></li>',
		'<%if(app.app_type =="4"&&app.app_type_check !="1"){%>',
				"<%if(app.app_hosting==1){%>",
					'<%if(developer.user_certif_status==1 || app.app_binbond==1){%>',
						'<li <%if(appnav =="appedit"){%> class="active"<%}%>><a href="/development/apphost?appid=<%=app.app_id%>" id="apphost_btn" data-default="1">应用托管</a></li>',
					'<%}else{%>	',
						'<li><a href="javascript:;" id="apphost_btn" data-default="0">应用托管</a></li>',
					'<%}%>',
				'<%}%>',	
				'<%if(app.app_status ==0|| app.app_status ==1||app.app_status ==2 || app.app_status ==7){%>',
					'<li><a href="javascript:;" id="apppay_uncheck">支付结算</a></li>',
				'<%}else{%>',
					'<%if(app.app_pay){%> ',
						'<li><a href="/development/apppay?appid=<%=app.app_id%>" >支付结算</a></li>',
						'<%}else{%>',
						'<li><a href="javascript:;" id="apppay_unpay">支付结算</a></li>',
					'<%}%>',
			   '<%}%>',
			'<li <%if(appnav =="whitename"){%> class="active"  <%}%>><a href="/development/appwhitename?appid=<%=app.app_id%>">权限控制</a></li>',
			'<%if(app.app_status ==3){%>',
			'<li <%if(appnav =="notice"){%> class="active"  <%}%>><a href="/development/notice?appid=<%=app.app_id%>">更多服务</a></li>',
			'<%}else{%>',
			'<li <%if(appnav =="notice"){%> class="active"  <%}%>><a href="javascript:;" id="apppay_unOnline">更多服务</a></li>',
			'<%}%>',
		'<%}%>',
	'</ul>'
	].join("\r");
	
	var user_certif_status= developer.user_certif_status
	var user_check_status= developer.user_check_status;//资质证明审核状态
	var app_binbond= global_obj.data.app.app_binbond;//保证金
	$(function(){
		$("#apphost_btn").click(function(event){ 
			if(app_binbond ===0){//未分配保证金
				if( user_certif_status ===0 && ( user_check_status===0 || user_check_status===1 || user_check_status===2 )){
					var str="<center>开发者资质证明通过审核后，才能申请服务器和托管地址<br/><br/><a href=\"/development/certification/\">现在去上传资质证明</a><br/><br/></center>";
					loginWin.alert({"text":str,"height":215,"ok_text":"我知道了"});
					return false;	
				}
			}
			location.href = $(this).attr("href");
			
			return false;
		}); 
		$("a#apppay_uncheck").click(function(){ 
			loginWin.alert('<center>应用通过审核后才能使用支付结算服务！</center>')
		});   
		$("a#apppay_unpay").click(function(){ 
			loginWin.alert('<center>尚未开通支付权限，如需开通请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></center>')
		}); 
		$("a#apppay_unOnline").click(function(){ 
			loginWin.alert('<center>应用上架后才能申请此功能！</center>')
		}); 
	});
})();