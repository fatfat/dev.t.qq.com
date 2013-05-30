	if (global_obj.code){
		if(global_obj.code == 1){
			location.href = global_obj.url;
		}
		else if (global_obj.code == 2){
			location.href = global_obj.url;
		}
		else {
			alert("Wrong hint code" + global_obj.code);
		}
	}
	var str = [
		'.hostingclick {',
		    'cursor: pointer;',
		    'line-height: 25px;',
		    'padding-left: 0.8em;',
		    'padding-right: 0.8em;',
		    'border-top: 1px solid #d9d9d9;',
		    'border-left: 1px solid #d9d9d9;',
		    'border-right: 1px solid #d9d9d9;',
		    'font-weight: bold;',
		'}',

		'.hosting {',
		    'cursor: pointer;',
		    'line-height: 25px;',
		    'padding-left: 0.8em;',
		    'padding-right: 0.8em;',
		    'border-bottom: 1px solid #d9d9d9;',
		'}',
		'.tip_err{',
			'top:0px;vertical-align:middle;',
		'}',
		'.tip_ok{',
			'top:2px;',
		'}',

		'.apphost_input{',
			'display:inline-block;width:230px;_width:230px;height:22px;line-height:22px;border:1px solid #ccc;overflow:hidden;',
		'}',
			
		'div a#yunJPGClick {',
		    'display: none',
		'}',
		'#change_type_a_link a {vertical-align:baseline;}',
	].join("");
	util.createStyle(str);
	var developer_appinfo = 
	[       
		tpl.header, 
		'<div id="content" class="controlCon main main_app">',
		'<div class="approate"><a href="/development/">我的应用</a> &gt; <span><%=app.app_name%></span>',
		'</div>',
		'<div class="deverLeft">',
			'<div class="leftMain">',
				'<div class="uicon"><img src="<%=app && app.app_icon_75 ? app.app_icon_75:"http://mat1.gtimg.com/app/opent/images/index/icon.jpg"%>"',
				    'height="75" width="75" /><br />',
				'<p><%=app.app_name%></p>',
				'</div>',//uicon
				tpl.appnav,
			'</div>',//leftMain
		'</div>',//deverLeft
			
		'<div class="deverRight">',
		'<h1 class="comp_tit">应用信息汇总</h1>',
		'<ul class="appinfo">',
	//	    '<!-- 审核结果提示 -->',
		    '<%if (app.app_status==0){%>',
			    '<li class="alert alert_warn"><a href="javascript:;"',
			        'class="hidebtn closealert">收起↑</a>',
			    '<h4>你的应用被无效禁止使用</h4>',
			    '<div class="alert_content">你现在可以继续开发应用，若已开发完成且满足<a href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%94%E7%94%A8%E5%AE%A1%E6%A0%B8%E8%A7%84%E8%8C%83"',
			        'target="_blank">应用审核标准</a>，可点击“<a href="javascript:void(0);"',
			        'id="appSource">提交审核</a>”</div>',
			    '</li>',
		    '<%}else if(app.app_status==1){%>',
		    '<li class="alert alert_warn">',
		          '<a href="javascript:;" class="hidebtn closealert">收起↑</a>',
		           '<h4>你的应用尚未提交审核</h4>',
		          '<div class="alert_content">你现在可以继续开发应用，若已开发完成且满足<a href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%94%E7%94%A8%E5%AE%A1%E6%A0%B8%E8%A7%84%E8%8C%83" target="_blank">应用审核标准</a>，',
		                '<%if(app.app_type==4 &&  app.app_hosting == 0){%>',
		                    '可点击“提交审核”',
		                '<%}else if(app.app_type==4 &&  app.app_hosting == 1){%> ',
		                    '可点击“提交审核”',
		                '<%}else{%>  ',
		                    '可点击“提交审核”',
		                '<%}%>',
		            '</div>',
		    '</li>',
		    '<%}else if(app.app_status==2){%>',
		    '<li class="alert alert_warn">',
		    '<h4>应用审核中</h4>',
		    '</li>',
		    '<%}else if(app.app_status==7 && app.app_nosubmit){%>',
		    '<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
		    '<h4>你的应用未通过审核，原因如下：</h4>',
		    '<div class="alert_content"><%=app.app_check_msg%><br />',
		    '系统已经禁止你提交上架审核申请，如有疑问，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></div>',
		    '</li>',
		    '<%}else if(app.app_status==7){%>',
		    '<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
		    '<h4>你的应用未通过审核，原因如下：</h4>',
		    '<div class="alert_content"><%=app.app_check_msg%><br />',
		    '你可以修改应用后<a  <%if(app.app_checkapi == 0 && app.app_type == 4){%> href="javascript:;" id="sumbit_appcheckdeveloper2"   <%}else{%> href="/development/appcheckdeveloper?appid=<%=app.app_id%>" <%}%>>重新提交审核</a>，如有疑问，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></div>',
		    '</li>',
		    '<%}else if(app.app_status==5 && app.app_type != 6){%>',
		    '<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
		    '<h4>你的应用已通过审核</h4>',
			    '<%if ( 3!=app.app_type && 4!=app.app_type && app.app_check_status !=1){%>',
			           '<div class="alert_content">网页应用在审核通过后即可正常使用，无需上架。若有上架需求，转为站内应用后即可。', 
			           '<br />如有问题<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a>',
			       '</div>',
			    '<%}else if(app.app_type==4 && app.app_hosting==1){%>',
			        '<div class="alert_content">如果已申请服务器、代码部署完毕，并满足<a href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BA%94%E7%94%A8%E9%A2%91%E9%81%93%E4%B8%8A%E6%9E%B6%E5%AE%A1%E6%A0%B8%E8%A7%84%E8%8C%83" target="_blank">应用上架标准</a>，',
			        '并可点击“申请上架”，<br />审核通过后应用即出现在微博应用频道（如尚未开通托管权限，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a>）',
			        '</div>',  
			    '<%}else if (app.app_type==3 && app.app_nosubmit){%>',
			    	'<div class="alert_content"><%=app.app_check_msg%><br />',
			    	 '系统已经禁止你提交上架申请，如有疑问，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></div>',
				'<%}else{%>',
			        '如果你的应用满足<a href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BA%94%E7%94%A8%E9%A2%91%E9%81%93%E4%B8%8A%E6%9E%B6%E5%AE%A1%E6%A0%B8%E8%A7%84%E8%8C%83" target="_blank">应用上架标准</a>，可点击“申请上架”，审核通过后应用即出现在对应平台的应用频道',
			    '<%}%>',
		    '</li>',
		    '<%}else if((app.app_status==5 || app.app_status==3 || app.app_status==4)&& app.app_type == 6){%>',
			    '<%if ((!iphoneinfo.app_plat_status || iphoneinfo.app_plat_status=="" || iphoneinfo.app_plat_status==0) && (!androidinfo.app_plat_status || androidinfo.app_plat_status=="" || androidinfo.app_plat_status==0)){%>',
				    '<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
				    '<h4>你的应用已通过审核</h4>',
					    '<%if(app.app_nosubmit){%>',
					    	'<div class="alert_content"><%=app.app_check_msg%><br />',  
					    	 '系统已经禁止你提交上架申请，如有疑问，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></div>',
					    '<%}else{%>',
					        '<div class="alert_content">',
					        '如果你的应用满足<a href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BA%94%E7%94%A8%E9%A2%91%E9%81%93%E4%B8%8A%E6%9E%B6%E5%AE%A1%E6%A0%B8%E8%A7%84%E8%8C%83" target="_blank">应用上架标准</a>，可点击“申请上架”，审核通过后应用即出现在对应平台的应用频道',
					        '</div>',
					    '<%}%>',
					'</li> ',
		    	'<%}else{%>',
		    		'<%if(iphoneinfo.app_plat_status==1){%>',
				    '<li class="alert alert_warn">',
				    '<h4>iPhone应用频道上架审核中</h4>',
				    '</li>',
				    '<%}else if(iphoneinfo.app_plat_status==3){%>',
				    '<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
					'<h4>你的应用没有通过上架（iPhone应用频道）审核，原因如下：</h4> ',
					'<div class="alert_content"><%=iphoneinfo.app_check_msg%><br />',
					'你可以修改应用后重新“申请上架”，如有疑问，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></div>',
					'</li>',
			    	'<%}else if(iphoneinfo.app_plat_status==2){%>',
			    	'<li class="alert alert_warn">',
			    	'<h4>你的应用已上架到iPhone应用频道</h4>',
			   		'</li>',
			   		'<%}else if(iphoneinfo.app_plat_status==4){%>',
				    '<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
					'<h4>你的应用已从iPhone应用频道下架，原因如下：</h4>',
					'<div class="alert_content"><%=iphoneinfo.app_check_msg%><br />',
					'如有疑问，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></div>',
					'</li>',
				    '<%}%>',
		    		'<%if(androidinfo.app_plat_status==1){%>',
			    	'<li class="alert alert_warn">',
				    '<h4>Android应用频道上架审核中</h4>',
				    '</li>',
				    '<%}else if(androidinfo.app_plat_status==3){%>',
				    '<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
					'<h4>你的应用没有通过上架（Android应用频道）审核，原因如下：</h4>', 
					'<div class="alert_content"><%=androidinfo.app_check_msg%><br />',
					'你可以修改应用后重新“申请上架”，如有疑问，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></div>',
				    '</li>',
				    '<%}else if(androidinfo.app_plat_status==2){%>',
			   		'<li class="alert alert_warn">',
			   		'<h4>你的应用已上架到Android应用频道</h4>',
			   		'</li>',
			   		'<%}else if(androidinfo.app_plat_status==4){%>',
			    	'<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
					'<h4>你的应用已从Android应用频道下架，原因如下：</h4>', 
					'<div class="alert_content"><%=androidinfo.app_check_msg%><br />',
					'如有疑问，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></div>',
			    	'</li>',	
			    	'<%}%>',
				 '<%}%>',
		    '<%}else if(app.app_status==6 && app.app_type != 6){%>',
		    '<li class="alert alert_warn">',
		    '<h4>上架审核中</h4>',
		    '</li>',
		    '<%}else if(app.app_status==8 && app.app_nosubmit && app.app_type!=6){%>',
		    '<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
		    '<h4>你的应用没有通过上架审核，原因如下：</h4>', 
		    	'<div class="alert_content"><%=app.app_check_msg%><br />',   
			    '<%if ( 3!=app.app_type && 4!=app.app_type && app.app_check_status !=1){%>',
		           	'网页应用在审核通过后即可正常使用，无需上架。若有上架需求，转成站内应用后即可。',
		           '<br />如有问题<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a>',
		        '</div>',
			    '<%}else{%>',
			    '系统已经禁止你提交上架申请，如有疑问，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></div>',
			    '<%}%>',
		    '</li>',
		    '<%}else if(app.app_status==8 && app.app_type!=6){%>',
		    '<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
		    '<h4>你的应用没有通过上架审核，原因如下：</h4> ',
		    	'<div class="alert_content"><%=app.app_check_msg%><br />',
			    '<%if ( 3!=app.app_type && 4!=app.app_type && app.app_check_status !=1){%>',
			                            '网页应用在审核通过后即可正常使用，无需上架。若有上架需求，转成站内应用后即可。',
			           '<br />如有问题<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a>',
			        '</div>',
			    '<%}else{%> ',
			    '你可以修改应用后重新“申请上架”，如有疑问，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></div>',
			    '<%}%>',
		    '</li>',
		    '<%}else if(app.app_status==3 && app.app_type!=6){%>',
		    '<li class="alert alert_warn">',
		    '<h4>你的应用已上架 <a href="http://app.t.qq.com/app/play/<%=app.app_id%>"',
		        'target="_blank">查看应用</a></h4>',
		    '</li>',
		    '<%}else if(app.app_status==4 && app.app_type!=6){%>',
		    '<li class="alert alert_warn"><a href="javascript:;" class="hidebtn closealert">收起↑</a>',
		    '<h4>你的应用已下架，原因如下：</h4>',
		    '<div class="alert_content"><%=app.app_check_msg%><br />',
			    '<%if ( 3!=app.app_type && 4!=app.app_type && app.app_check_status !=1){%>',
			       '<div class="alert_content">',
			       	'网页应用在审核通过后即可正常使用，无需上架。若有上架需求，转成站内应用后即可。',
			        '</div>',
			    '<%}%>',
		    '如有疑问，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></div>',
		    '</li>',
		'<%}else{%>',
		    '<li class="alert alert_warn"><a href="javascript:;"',
		        'class="hidebtn closealert">收起↑</a>',
		    '<h4>你的应用处于非法状态</h4>',
		    '<div class="alert_content"><%=app.app_check_msg%><br />',
		    '如有疑问，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></div>',
		    '</li>',
		    '<%}%>',
		    '<%if(app.app_bd_change){%>',
		    '<li class="alert alert_warn" beclose="true"><a href="javascript:;" class="hidebtn closealert">关闭</a>',
		    '<h4>管理员对你的应用进行了如下操作：</h4>',
		    '<div class="alert_content"><%=app.app_bd_change%><br />',
		    '如有疑问，<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></div>',
		    '</li>',
		    '<%}%>',
		    '<!-- 审核结果提示  完 -->',
		    '<li><strong>应用名称：</strong><em><%=app.app_name%>&nbsp;</em></li>',
		    '<li><strong>应用类型：</strong><em><%=app.appType%>&nbsp;</em></li>',
		    '<li><strong>App Key：</strong><em><%=app.app_id_old?app.app_id_old:"&nbsp;"%></em></li>',
		    '<li><strong>App Secret：</strong><em><%=app.app_key?app.app_key:"&nbsp;"%></em></li>',
		    '<%if(app.app_type == 4){%>',
		   '<li><strong>接口权限：</strong><em><%=app.app_level%>权限&nbsp;</em><em class="link"> <a href="http://wiki.open.t.qq.com/index.php/API%E8%B0%83%E7%94%A8%E6%9D%83%E9%99%90" target="_blank">查看接口权限详细说明</a></em></li>',
		   '<li><strong>来源显示：</strong><em><%=app.source_status_display%></em><em ',
		        'class="link"><a ',
		        'href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F"',
		        'target="_blank">来源显示详细说明</a></em></li>',
		    '<li><strong>测试应用地址：</strong><em><a ',
		        'href="http://app.t.qq.com/app/playtest/<%=app.app_id%>"',
		        'target="_blank">http://app.t.qq.com/app/playtest/<%=app.app_id%></a></em></li>',
		    '<%if(app.app_status == 3 &&  app.app_status == 4){%>',
		    '<li><strong>应用地址：</strong><em><a ',
		        'href="http://app.t.qq.com/app/play/<%=app.app_id%>"',
		        'target="_blank">http://app.t.qq.com/app/play/<%=app.app_id%></a></em></li>',
		    '<%}%>',
		    '<%}else{%>',
		    '<li><strong>接口权限：</strong><em><%=app.app_level%>权限&nbsp;</em><em ',
		        'class="link"> <a ',
		        'href="http://wiki.open.t.qq.com/index.php/API%E8%B0%83%E7%94%A8%E6%9D%83%E9%99%90"',
		        'target="_blank">查看接口权限详细说明&gt;&gt;</a></em></li>',
		    '<li><strong>来源显示：</strong><em><%=app.source_status_display%></em><em ',
		        'class="link"> <a ',
		        'href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F"',
		        'target="_blank">查看来源显示详细说明&gt;&gt;</a></em></li>',
		    '<%}%>',
		    '<li><strong>应用状态：</strong>',
		    '<div class="appstate">',
		    '<div class="appstate_top"></div>',
		    '<div class="appstate_body">',
		    
		    '<%if (app.app_type == 6){%>',
		    	'<%if (app.app_status == 5){%>',
					'<%if (iphoneinfo.app_plat_status==2 || androidinfo.app_plat_status==2){%>',//<!--{*上架*}-->',
						'<div class="appstatebar appstatebar3"></div>',
					'<%}else if (iphoneinfo.app_plat_status==1 || androidinfo.app_plat_status==1){%>',// <!--{*上架审核中*}-->',
						'<div class="appstatebar appstatebar6"></div>',
					'<%}else if (iphoneinfo.app_plat_status==4 || androidinfo.app_plat_status==4){%>',//<!--{*下架*}-->',
						'<div class="appstatebar appstatebar4"></div>',
					'<%}else{%>',// <!--{*权限审核通过*}-->',
						'<div class="appstatebar appstatebar5"></div>',
					'<%}%> ',
				'<%}else{%>',
					'<div class="appstatebar appstatebar<%=app.app_status%>"></div>',
				'<%}%> ',
			'<%}else{%> ',
				'<div class="appstatebar appstatebar<%=app.app_status%>"></div>',
			'<%}%> ',
		   	
		    
		    '<div class="btns">',
		    '<%if (app.app_status == 1 || app.app_status == 7){%>',
		        '<a <%if (app.app_checkapi == 0 && app.app_type == 4){%> href="javascript:;" id="sumbit_appcheckdeveloper" <%}else{%> href="/development/appcheckdeveloper?appid=<%=app.app_id%>" <%}%> class="btn4 <%if (6 == app.app_type){%> wirelessapp_btn4<%}%>">提交审核</a>', 
		    '<%}else{%>', 
		        '<a class="btn4 btn4_gray <%if (6 == app.app_type){%> wirelessapp_btn4<%}%>" hidefocus="true">提交审核</a>',
		    '<%}%> ',
		    '<%if (app.app_type != 6){%>',
			    '<%if ((app.app_status == 8 || app.app_status == 5 || app.app_status == 4) && app.app_nosubmit != 1 && app.app_check_status != 1 ){%>',
			   		'<%if (3 != app.app_type && 4 != app.app_type){%>',
			        	'<a href="javascript:;" id="webappdisToStore" class="btn4">申请上架 </a>', 
			    	'<%}else{%>', 
			    		'<%if(app.app_checkapi == 0 && app.app_type == 4){%>',
			    		'<a href="javascript:;" id="sumbit_appcheckdeveloper" class="btn4 apptostore">申请上架</a>', 
			    		'<%}else{%>', 
			    		'<a href="javascript:;" id="apptostore" class="btn4 apptostore">申请上架</a>', 
			    		'<%}%>',
			    	'<%}%>',
			    '<%}else{%>',
			        '<a href="javascript:;" class="btn4 btn4_gray" hidefocus="true">申请上架</a>',
			    '<%}%>',
			'<%}else{%> ',
				'<%if (app.app_status == 5 && app.app_nosubmit != 1 && app.app_check_status != 1 ){%>',
				'<div class="wireless_tostore">',
					'<a href="javascript:;" id="apptoIstore" _appplatform="1" <%if ((app.app_platform == 1 || app.app_platform == 3) && iphoneinfo.app_plat_status != 1 && iphoneinfo.app_plat_status != 2 && iphoneinfo.app_check_status != 1){%>class="btn4_w btn4_w_iphone apptostore"<%}else{%>class="btn4_w_gray btn4_gray_iphone"<%}%> title="申请上架到iPhone应用频道">申请上架</a> ',
					'<a href="javascript:;" id="apptoAstore" _appplatform="2" <%if ((app.app_platform == 2 || app.app_platform == 3) && androidinfo.app_plat_status != 1 && androidinfo.app_plat_status != 2 && androidinfo.app_check_status != 1){%>class="btn4_w btn4_w_android apptostore"<%}else{%>class="btn4_w_gray btn4_gray_android"<%}%> title="申请上架到Android应用频道">申请上架</a> ',
				'</div>',
				'<%}else{%>',
				'<div class="wireless_tostore">',
		    		'<a href="javascript:;" class="btn4_w_gray btn4_gray_iphone" title="申请上架到iPhone应用频道" hidefocus="true">申请上架</a>',
		    		'<a href="javascript:;" class="btn4_w_gray btn4_gray_android" title="申请上架到Android应用频道" hidefocus="true">申请上架</a>', 
		    	'</div>',
		    	'<%}%>',
			'<%}%>',
		    '</div>',

		    '<%if(app.app_type == 1 || app.app_type == 2 || app.app_type == 3 || app.app_type == 6){%>',
		   // '<!--站外应用-->',
			   '<dl class="appstate_des">',
			    	'<%if(app.app_status != 3){%>', 
			    		'<%if(app.app_type != 6){%>', 
			        	'<dt>应用未上架，但可正常访问，你可以将应用推荐给他人使用了</dt>',
			        	'<%}else{%>',
			        	'<dt>应用通过审核后，可申请上架到对应平台的无线应用频道，获得推广资源</dt>',
			        	'<%}%> ',
			    	'<%}%> ',
			        '<%if (3 == app.app_type){%>',
			        '<dt>应用上架后，你的应用可以在应用频道展示</dt> ',
			        '<%}else if (6 == app.app_type){%>',
			        '<dt>应用在无线应用频道上架后，同时也会在PC应用频道上架展示</dt> ',
					'<%}else if (3!=app.app_type && 4!=app.app_type && 6!=app.app_type){%>',
			       	'<dt id="change_type_a_link">网页应用在审核通过后即可正常使用，无需上架。若有上架需求，<a href="javascript:;" id="change_type_2" >转成站内应用</a>后即可。</dt>',
			        '<%}%>',
			    '</dl>',
		   // '<!-- 站外应用--> ',
		    '<%}%> ',
		    
		    '<%if(app.app_type == 4){%> ',
	//	    '<!--站内应用--> ',
		        '<%if ((app.app_status == 4 || app.app_status == 5 || app.app_status == 8 ) && app.app_hosting == 1 ){%>',
		            '<dl class="appstate_des">',
		            '<dt>应用上架审核前，请完成并确认以下步聚：</dt>',  
		            '<dd class="active"><i></i><input type="checkbox" id="appstate_des1" />', 
		            '<label for="appstate_des1">已申请服务器和托管地址、已绑定域名</label>',
		            '<span class="valign"><a href="javascript:;" onclick="applyApphost();return false;">现在去申请</a> | ',
		            '<a href="http://wiki.opensns.qq.com/wiki/%E5%BA%94%E7%94%A8%E6%8E%A7%E5%88%B6%E5%8F%B0%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E#.E7.94.B3.E8.AF.B7.E8.B5.84.E6.BA.90.2F.E8.AE.BE.E5.A4.87.E6.89.A9.E5.AE.B9" target="_blank">申请指引</a></span>',
		            '<div class="app_hostinfo none c_orange" id="appstate_hostinfo">未检测到托管地址信息、请先申请托管地址，并绑定域名</div>',
		            '</dd>',
		            '<dd><i></i><input type="checkbox" id="appstate_des2" /> <label class="gray" for="appstate_des2">已部署应用</label>', 
		            '<span class="valign"><a href="http://wiki.opensns.qq.com/wiki/%E5%BA%94%E7%94%A8%E9%83%A8%E7%BD%B2%E8%AF%B4%E6%98%8E" target="_blank">布署指引</a></span>',
		            '</dd>',
		            '<dd><i></i><input type="checkbox" id="appstate_des3" />', 
		            '<label class="gray" for="appstate_des3">已测试完毕</label>',
		            '</dd>',
		            '<dt>提交申请前请按<a style="vertical-align:top" href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%94%E7%94%A8%E5%AE%A1%E6%A0%B8%E8%A7%84%E8%8C%83" target="_blank">应用审核规范</a>开发、改造你的应用，否则将无法通过审核</dt>',
		            '<dt>资质证明审核通过后即可申请服务器、部署应用，自测完毕后即可申请上架</dt>',
		            '<dt>应用未上架时，只有创建者和白名单用户可访问，上架到微博应用频道后，所有的用户均可访问</dt>',
		        	'<dt>应用上架后，你的应用可以在应用频道展示</dt>',
		        '</dl>',
		        '<%}else if (3 == app.app_status){%>', 
		        '<%}else if (app.app_hosting == 1){%>',  
		        '<dl class="appstate_des">',
		            '<dt>提交申请前请按<a style="vertical-align:top" href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%94%E7%94%A8%E5%AE%A1%E6%A0%B8%E8%A7%84%E8%8C%83" target="_blank">应用审核规范</a>开发、改造你的应用，否则将无法通过审核</dt>',
		            '<dt>资质证明审核通过后即可申请服务器、部署应用，自测完毕后即可申请上架</dt>',
		            '<dt>应用未上架时，只有创建者和白名单用户可访问，上架到微博应用频道后，所有的用户均可访问</dt>',
		        	'<dt>应用上架后，你的应用可以在应用频道展示</dt>',
		        '</dl>',
		        '<%}else{%> ', 
		        '<dl class="appstate_des">',
		            '<dt>提交申请前请按<a style="vertical-align:top" href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%94%E7%94%A8%E5%AE%A1%E6%A0%B8%E8%A7%84%E8%8C%83" target="_blank">应用审核规范</a>开发、改造你的应用，否则将无法通过审核</dt>',
		            '<dt>应用未上线，只有创建者和白名单用户可访问该应用，上架后所有用户均可访问</dt>',
		        	'<dt>应用上架后，你的应用可以在应用频道展示</dt>',
		        '</dl>',
		        '<%}%>',  
		        
			    '<%if (3 != app.app_status){%>', 
			        '<dl class="appstate_des">',
			            '<dt>如果此应用是从网页应用修改为站内应用的，请按<a href="http://wiki.open.t.qq.com/index.php/%E5%BA%94%E7%94%A8%E9%A2%91%E9%81%93%E6%8E%A5%E5%85%A5%E6%8C%87%E5%BC%95#.E5.B7.B2.E5.BC.80.E5.8F.91.E7.9A.84.E7.AB.99.E5.A4.96.E5.BA.94.E7.94.A8.E6.8E.A5.E5.85.A5" target="_blank">站内应用改造规范</a>进行应用改造</dt>',
			        '</dl>',
			    '<%}%> ',
		  //      '<!--站内应用--> ',
		    '<%}%> ',
		    '<p><a href="http://wiki.open.t.qq.com/" target="_blank">开发文档</a>', 
		    
		    '<%if(app.app_type ==3 || app.app_type ==4 || app.app_type ==6){%>', 
		    '| <a href="http://wiki.open.t.qq.com/index.php/%E5%BA%94%E7%94%A8%E6%8E%A5%E5%85%A5%E6%8C%87%E5%BC%95"  target="_blank">应用上架指引</a>',
		    '<%}%>',
		    '</p>',
		    '</div>',
		    '<div class="appstate_bottom"></div>',
		    '</div>',
		    '</li>',
		'</ul>',

		'</div>',
	  '</div>',
	  tpl.footer,
	].join("");
//debugger;
	var app = global_obj.data.app;
	var insiteAppAble=true;
	var appid=app.app_id;
	var showalert = global_obj.data.showlert ? global_obj.data.showlert : "0";
	var app_status=app.app_status?app.app_status:"2";
	global_obj.data.iphoneinfo = global_obj.data.iphoneinfo ||{};
	global_obj.data.androidinfo = global_obj.data.androidinfo || {};
	$('#main').html(tmpl(developer_appinfo,global_obj.data));
	(function ($) {
	    $.fn.moduleBox = function (op) {
	        op = op || {};
	        var d = {
	            "width": op.width || 450,
	            "height": op.height || 320,
	            "title": op.title || "提示信息",
	            "text": op.text || "",
	            "closeBtn": op.closeBtn || ""
	        }, _this = {};
	        _this.initModuleBox = function () {
	            var modulebox = $("<div class=\"modulebox\" style=\"position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;text-align:left;_ position:absolute;_ top:expression(eval(document.documentElement.scrollTop)); _ height:expression(eval(document.documentElement.clientHeight));\">"
	            + "<iframe width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"opacity:0;filter:alpha(opacity=0);z-index:1;position:absolute;top:0;left:0;\"></iframe>"
	            + "<div style=\"position:absolute;top:0;left:0;z-index:2;background:#000;width:100%;height:100%;opacity:0.2;filter:alpha(opacity=10);\"></div>"
	            + " <div class=\"modulebox_win\" style=\"position:absolute;z-index:3;top:50%;left:50%;margin:" + (-d["height"] / 2) + "px 0 0 " + (-d["width"] / 2) + "px;width:" + d["width"] + "px;height:" + d["height"] + "px;\">"
	            + "     <a href=\"javascript:;\" class=\"modulebox_close closewin\" title=\"关闭\" style=\"display:none;\"></a>"
	            + "     <h2 class=\"modulebox_title\" style=\"margin:0;padding:0;\">" + d["title"] + "</h2>"
	            + "     <div class=\"modulebox_content\" style=\"height:" + (d["height"] - 41) + "px\">" + d["text"] + "</div>"
	            + " </div>"
	            + "</div>").appendTo($("body"));
	            modulebox.hide();
	            if (op.closeBtn) {
	                op.closeBtn.live("click", function () {
	                    modulebox.hide();
	                });
	            }
	            modulebox.find(".closewin").bind("click", function () {
	                modulebox.hide();
	            });
	            return { "titlebar": modulebox.find(".modulebox_title"),
	                "win": modulebox.find(".modulebox_win"),
	                "contentarea": modulebox.find(".modulebox_content"),
	                "closebtn": modulebox.find(".modulebox_close"),
	                "close": function () { modulebox.hide(); },
	                "show": function (_op) {
	                    if (_op) {
	                        if (_op.title) {
	                            this.titlebar.html(_op.title);
	                        }
	                        if (_op.text) {
	                            this.contentarea.html(_op.text);
	                        }
	                        if (_op.width) {
	                            this.win.css({
	                                "width": _op.width,
	                                "margin-left": -_op.width / 2
	                            });
	                        }
	                        if (_op.height) {
	                            this.win.css({
	                                "height": _op.height,
	                                "margin-top": -_op.height / 2
	                            });
	                            this.contentarea.css({
	                                "height": _op.height - 41
	                            });
	                        }
	                    };
	                    if (!modulebox.is(":visible")) {
	                        modulebox.show();
	                    }
	                }
	            };
	        }
	        return _this.initModuleBox();
	    };
	})(jQuery);

	/*
	* 应用审核提示窗口
	*/

	(function () {
	if(+showalert){
	//---------------------------
	       setTimeout(function(){
		       if (window.loginWin && window.loginWin.show) {
		            loginWin.show({
		                "width": 600,
		                "height": 450,
		                "title": "提示",
		                "text": '<div class="tipTop">\
		                        <h2>应用提交审核前，请按以下规范进行改造</h2>\
		                        <p>1、应用主线功能与微博有深度关联</p>\
		                        <p>2、腾讯微博主题用户群都可以添加使用</p>\
		                        <p>3、用户可直接上手使用。复杂应用要给予明确的使用提示和指引</p>\
		                        <p>4、应用UI设计美观，符合大众的审美标准</p>\
		                        <p>5、符合<a  href="http://wiki.open.t.qq.com/index.php/%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%94%E7%94%A8%E5%AE%A1%E6%A0%B8%E8%A7%84%E8%8C%83"\
		                            target="_blank">应用审核规范</a></p>\
		                    </div>\
		                    <div class="tipBottom"><input class="chkRead" type="checkbox" /> <input type="button" class="btn_blue btn_disabled closeBtn" value="我知道了" disabled="disabled" /></div>'
		            });
		            var $chkRead = loginWin.contentarea.find(".chkRead");
		            var $closeBtn = loginWin.contentarea.find(".closeBtn");
		            $chkRead.bind("click", function () {
		                if (this.checked ){
		                    $closeBtn.removeAttr("disabled").removeClass("btn_disabled");
		                } else {
		                    $closeBtn.attr("disabled", "disabled").addClass("btn_disabled");
		                }
		            });
		            $closeBtn.bind("click", function () {
		                $("div.modulebox").hide();
		            });
		        }else{
		        	var callee = arguments.callee,timer = (arguments[0]|0);
		        	if (timer<20){
		        		setTimeout(function(){callee(++timer);},100);
		        	}
		        }
	       },100);
	//---------------------------
	    }
	})();

	$(function(){  
	 var app_platform = app.app_platform;
	 var app_status = app.app_status;
	 var app_nosubmit = app.app_nosubmit;
	  var androidinfo_app_plat_status = global_obj.data.androidinfo?global_obj.data.androidinfo.app_plat_status : {};
	    var iphoneinfo_app_plat_status = global_obj.data.iphoneinfo?global_obj.data.iphoneinfo.app_plat_status : {};
	  var app_check_status = app.app_check_status; 
		$('a#webappdisToStore').click(function(){
			 loginWin.alert({
	             "width": 520,
	             "height":180,
	             "title": "提示",
	             "ok_text":"马上转为站内应用",
	             "ok_class":"devSubmit closeBtn linkBtn",
	             "text": '<center>网页应用在审核通过后即可正常使用，无需上架。若有上架需求，转成站内应用后即可。</center>'
	         },function(){
	         	$("a#change_type_2").trigger("click");
	         }); 
		});
		$('a#sumbit_appcheckdeveloper,a#sumbit_appcheckdeveloper2').click(function(){
			 loginWin.alert({text:'<div style="text-align:center"><span style="display:inline-block;margin:0 auto;text-align:left;">你的应用从未调用过微博接口，请测试应用是否可正常调用接口，<br />测试成功后再提交申请！</span></div>',height:160});
		})
		$(".appinfo li.alert").find(".hidebtn").click(function(){
		    var t=$(this),p=t.parent(),c=p.find(".alert_content");
	        if (p.attr("beclose")){
	        p.hide();
	        $.get("/development/clearappcheckmsg?appid="+appid+"&t="+new Date().getTime());
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
	});

	function beforeCommitCheck(appplatform){
	    var options = $(".appstate_des").first().find(":checkbox"),nextURL="/development/appcheckdeveloper?appid="+app.app_id,unchecked = options.not(":checked");
	    if (unchecked.size()>0){
	        loginWin.alert({"width":470,"height":140,"text":"<center>应用申请上架前，请先确认已申请服务器和托管地址、已部署应用、已测试</center>"});
	    }else{
	    	//仅对站内应用判断是否调用过api
	    	if  (!(global_obj.data.app.app_type == 4 && global_obj.data.app.app_checkapi == 0))  
	        apptostore(appplatform); 
	    }
	}

	$(function(){
		window.bindAllEvent();
	    $(".appstate_des").find("dd").find(":checkbox").live("click",function(){
	            var dd=$(this).parent(),dl=dd.parent();
	                if (dd.index()>1&&!dd.hasClass("active")){
	                	return false;
	                }else if(dd.index()==1&&dl.find("input[type='checkbox']:checked").size()>1){
	                	return false;
	                }
	                if (dd.index() === 1){
	                	if (dd.find("input[type='radio']").size() == 0){
	                		//loginWin.show({"text":'<div style="text-align:center;margin:30px 0 10px;">未检测到托管地址信息<br/>请先申请托管地址，并绑定域名</div><div style="text-align:center;"><a href="javascript:;" class="devSubmit" onclick="$(\'#apphost_btn\').trigger(\'click\');return false;">现在去申请</a> <a href="javascript:;" class="devSubmit" onclick="loginWin.close();">以后再说</a></div>',"width":440,"height":195});
	                		var str="<center>未检测到托管地址信息，请先申请托管地址，并绑定域名<br/><br/><a href=\"javascript:;\" onclick=\"loginWin.close();$(\'#apphost_btn\').trigger(\'click\');return false;\">现在去申请</a><br/><br/></center>";
	    					loginWin.alert({"text":str,"height":215,"ok_text":"我知道了"});
	                		return false;
	                	}
	                	var checkradio=dd.find("input[type='radio']:checked");
	                	if (checkradio.size() == 0){
	                		loginWin.show({"text":'<div style="margin:20px 60px">'+$("#appstate_hostinfo").html().replace(/app_url_radio_/g,"_$1")+'</div><div style="text-align:center;"><a href="javascript:;" class="devSubmit closeBtn">确定</a></div>',"height":120},function(){});
	                		loginWin.contentarea.find(".closeBtn").bind("click",function(){
	                			var win_checkradio = loginWin.contentarea.find("[type='radio']:checked");
	                			if (win_checkradio.size() && win_checkradio.val()!=""){
	                				var i = loginWin.contentarea.find("input[type='radio']:checked").parent().index()||0
	                					,hostinfo_check=$("#appstate_hostinfo").find("input[type='radio']:eq("+i+")");
	                				if(win_checkradio.hasClass("cinput")){
	                					hostinfo_check.val(win_checkradio.val()).attr("checked","checked");	
	                					hostinfo_check.parent("li").find('input[type="text"]').val(win_checkradio.val()).removeClass("none");
	                					hostinfo_check.parent("li").find('label').addClass("none");
	                				}
									loginWin.close.call(loginWin,function(){
										dd.find("input[type='checkbox']").trigger("click");
									});
								}else if(win_checkradio.val()=="" && win_checkradio.parent("li").find("input[type='text']").size()){
									win_checkradio.parent("li").find("input[type='text']").trigger("blur");
								}
							});
							var h = loginWin.contentarea.removeAttr("style").height();
							loginWin.contentarea.height(h+40);
							loginWin.contentarea.parent().height(h+80).css("margin-top",-(h+40)/2);
	                		return false;
	                	}else if(checkradio.hasClass("cinput") && checkradio.val()==""){
	                		if(checkradio.parent("li").find(".tip_err").size()==0){
	                			checkradio.parent("li").find('input[type="text"]').trigger("blur");
	                		}
	                		loginWin.alert("<center>你选择了手动填写应用托管地址。请正确填写应用托管地址。</center>");
	                		return false;
	                	}
	                }
	                dd.next().addClass("active").find("label").removeClass("gray");
	                dd.removeClass("active").find("label").addClass("gray");
	                $("#"+$(this).attr("id").replace("appstate_des_","appstate_des"))
	                .attr("checked","checked")
	                .attr("disabled","disabled")
	                .parent("dd").removeClass("active")
	                .next("dd").addClass("active")
	                .find("label").removeClass("gray");
	                $(this).attr("disabled","disabled");
	        }); 
	        
	    if ((app.app_type == 1 || app.app_type == 2 || app.app_type == 3 || app.app_type == 4 || app.app_type == 6) &&  app.app_status != 3){
		    $(".apptostore").click(function(){
		    	var apptype = +app.app_type,
		    		grayClass = apptype === 6 ? "btn4_w_gray" : "btn4_gray",
		    		appplatform = apptype === 6 ? $(this).attr("_appplatform") : 0 ;
		    	if ($(this).hasClass(grayClass)){
		    		return false;
		    	}
		    	//$(this).attr("disabled","disabled").attr("hidefocus","true").addClass('btn4_gray');
		        beforeCommitCheck(appplatform);
		    });

		    var app_online_url = "app && app.app_online_url?app.app_online_url:''".replace(/^https?:\/\//,"");
		    $.ajax({
				 "dataType":"json"
				,"type":"post"
				,"url":"/pipes/interfaceserver"
 				,"data":{"action":"common_query","business_type":"ajax_getappsitelist","uin":global_obj.data.userInfo.hdlogin,"appid":global_obj.data.app.app_id}
				,"success":function(d){
					var ret = +d.ret,msg =common.getMsgByRet(ret),o = $("#appstate_hostinfo"),str="";
					if (msg){
						o.html(msg);
						return;
					}
					if (ret === 0){
						if (! (d.data && d.data.length)){
							return;
						}
						var t=0,f=0;
						for (var i=0,k=d.data.length;i<k;i++){
							str += '<li><input type="radio" name="app_url_radio" value="http://'
							    + d.data[i] +'" id="app_url_radio_'+i+'"'
							    + (app_online_url === d.data[i]?" checked":"")+'/> <label for="app_url_radio_'+i+'">'
							    + d.data[i] +'</label></li>';
							    
							if( app_online_url === d.data[i]){
								t++;
							}
						}
						
						str += '<li style="margin-bottom:3px;"><input type="radio" class="cinput" name="app_url_radio" id="app_url_radio_'+i+'" value="';
						if(t>0 ){
							f=0;
							str += '" /> <label for="app_url_radio_'+i+'">手动填写';
						}else if(app_online_url==""){
							f=0;
							str += '" /> <label for="app_url_radio_'+i+'">手动填写';
						}else{
							f=1;
							str += 'http://'+ app_online_url+'" checked /> <label for="app_url_radio_'+i+'" class="apphost_input" >'+app_online_url;
						}
						
						//str += '</label></li>';
						str += '</label><input type="text" onblur="checkapphost(this);" data-rule="link" data-error="应用托管地址" class="apphost_input none" value="'+(f==0?"":app_online_url)+'" /></li>';
						o.removeClass("c_orange").html("<h3>请选择应用托管地址（部署地址）</h3><ul class=\"app_url_list\">"+str+"</ul>");
						
						var app_url_list=$(".app_url_list");
						app_url_list.css("height",app_url_list[0].scrollHeight > 219 ? "220px" :"auto");
					}
				}
			}); 
			
			$(".app_url_list").find(":radio").live("click",function(){
				var li=$(this).parent("li"),cinput=li.parent("ul").find(".cinput"),value=cinput.val();
				if(cinput.size()){
					if($(this).hasClass("cinput")){//点击手动输入单选框
						li.find('input[type="text"]').removeClass("none").val(value);
						li.find("label").addClass("none");
						if(value){
							li.find('input[type="text"]').trigger("blur");
						}
					}else{//其他单选框
						cinput.parent("li").find('input[type="text"]').addClass("none");
						cinput.parent("li").find('label').removeClass("none");
						cinput.parent("li").find(".tip").remove();
					}
				}	
			});
			
			$("input.apphost_input").live("click",function(){
				$(this).parent("li").find(".cinput").attr("checked","checked");
			});

    	}
	    $("a[id='appSource']").click(function(){
	        var target=$(".appstate_body").find(".btns").find("a").first();
	        var url=target.attr("href");
	            if (target.hasClass(".btn4_gray")){
	                return false;
	            }else{
	                location.replace(url);
	                return false;
	            }
	    });
	    
	    $('a#change_type,a#change_type_2').click(function(){
	    	if(app_status == 1||app_status == 7||app_status==5||app_status==4||app_status==8){
	            loginWin.show({
	                "width": 685,
	                "height": 360,
	                "title": "提示",
	                "text": '<div class="tipTop" style="height: auto;">\
	                	    <div style="width: 645px; margin: 0 auto;">\
	                        <h3 style="padding-left: 26px; font-size: 14px; font-weight: normal; background: url(http://mat1.gtimg.com/app/opent/images/development/icon_notice.gif) no-repeat 0 0;">改为"站内应用"后将无法改回到原来的应用类型，如果确定改为站内应用，请选择部署模式：</h3>\
	                        <div id="app_hosting_container" style="padding: 15px 30px 30px;">\
	                            <p><input type="radio"  name="app_hosting" value="1" id="app_hosting"/>\
	                            	<label for="app_hosting">使用腾讯云平台托管/部署服务(Hosting)</label>  </p>\
	                            <p><input type="radio" name="app_hosting" value="0" checked="true" id="app_nohosting"/>\
	                            	<label for="app_nohosting">不使用腾讯云平台托管/部署服务(Non-Hosting)</label></p>\
	                        </div>\
	                        <p style="padding-left: 15px;">应用托管详细介绍：</p>\
	                        <p style="color: #777; padding-left: 15px;">微博开放平台针对服务器，带宽，云存储等云服务资源进行计费(<a href="http://wiki.open.qq.com/wiki/%E8%85%BE%E8%AE%AF%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E4%BA%91%E6%9C%8D%E5%8A%A1%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E8%B4%B9%E8%AE%A1%E8%B4%B9%E6%A0%87%E5%87%86" target="_blank">计费标准见这里</a>)；</p>\
	                        <p style="color: #777; padding-left: 15px;">如果你的应用需要接支付功能，请选择“Hosting”，Non-hosting不可接支付功能；</p>\
	                        <p style="color: #777; padding-left: 15px;">应用创建成功后，Non-hosting可改为Hosting，但Hosting不可改为Non-hosting。</p>\
	                        </div>\
	                    </div>\
	                    <div class="tipBottom" style="text-align: center;"><input type="button" class="devSubmit" value="确定" /></div>'
	            });
	            var $sureBtn = loginWin.contentarea.find(".devSubmit");
	            $sureBtn.bind("click", function () {
	                $("div.modulebox").hide();
	            	if ($(this).attr("commmiting")){return false;}
	            	$(this).attr("commmiting","commmiting");//表单正在提交当中
	                var postData = {
	                	"action":"common_query"
	                	,"business_type":"saveappinfo"
	                	 ,"app_type":4
	                	,"actiontype":1
	                	,"appid":global_obj.data.app.app_id
	                	,"app_hosting":$('#app_hosting_container').find(":checked").val()
	                };

	                $.ajax({
	                    type: "POST",
	                    url: "/pipes/interfaceserver",
	                    dataType: "json",
	                    data: postData,
	                    success: function(msg){
	                        if(msg.error == 0){
	                            if(app_status==1||app_status==7){
	                            	loginWin.close();
	                        		loginWin.alert('<center>应用类型修改成功，请按<a href="http://wiki.open.t.qq.com/index.php/%E5%BA%94%E7%94%A8%E9%A2%91%E9%81%93%E6%8E%A5%E5%85%A5%E6%8C%87%E5%BC%95#.E5.B7.B2.E5.BC.80.E5.8F.91.E7.9A.84.E7.AB.99.E5.A4.96.E5.BA.94.E7.94.A8.E6.8E.A5.E5.85.A5" target="_blank">站内应用改造规范</a>进行改造</center>', function() {
		                        		location.reload();
		                        	});
	                            }else{
	                            	loginWin.close();
	                                loginWin.alert('<center>已提交，通过审核后才能生效。</center>',function(){window.location.href="/development/appedit?appid="+appid});
	                            }   
	                         }else if(msg.error == 1){  
	                          	 loginWin.close();
	                             loginWin.alert("<center>提交内容包含非法数据，请重新提交</center>");
	                         }else{
	                          	 loginWin.close();
	                             loginWin.alert("<center>数据提交失败，请稍候再试</center>");    
	                         }
	                    },
	                    error:function(){
	                    	 loginWin.close();
	                         loginWin.alert("<center>网络连接失败，请稍候再试</center>");    
	                    }
	             }); 
	            });
	        }
	    	else if(app_status == 3){
	        	loginWin.close();
	    	     loginWin.alert('<center>已上架应用不能直接修改应用类型，如有修改需要<a  href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></center>');
	    		}
	    	else if(app_status == 2){
	        	loginWin.close();
	    	         loginWin.alert("<center>应用审核中，不能修改应用类型，审核完毕后即可修改</center>");
	    	        }	
	        else {
	        	loginWin.close();
	            loginWin.alert("<center>上架审核中，不能修改应用类型，审核完毕后即可修改</center>");
	           }   
	    })  
	    
	});  
	 

	 function apptostore(appplatform){
	 	var posteData = {};
	 	if(4==app.app_typ && 1==app.app_hosting){
	 		var checkhost=$("#appstate_hostinfo").find(":checked");
	 		if(checkhost.size() && checkhost.val()=="")
	 		{
	 			loginWin.alert("<center>你选择了手动填写应用托管地址。请正确填写应用托管地址。</center>");
	 			return false;
	 		}
	 		postData = {
	 			 "action":"common_query"
	 			 ,"business_type":"apptostore"
		 		 ,"appid":global_obj.data.app.app.app_id
		 		,"app_online_url":$("#appstate_hostinfo").find(":checked").val()
		 		,"changestatu":1
	 		}
	 	}else if(6==app.app_type){
	 	 	postData = {
	 	 	    	"action":"common_query",
	              "business_type":"apptostore",
		 		 "appid":global_obj.data.app.app_id,
		 		 "app_platform":appplatform
		  	}
	 	 }else{
	 	 	postData = {
	 	 			"action":"common_query",
	              "business_type":"apptostore",
		 		 "appid":global_obj.data.app.app_id
		  	}      
	 	 }
	 	 
	     $.ajax({
	          url: "/pipes/interfaceserver",
	          dataType: "json",
	          data:postData,
	          type:"POST",
	          cache: false,
	          success: function(ResposeData){ 
	            if(ResposeData.error == 0){
	                loginWin.alert('<center>应用提交上架成功，审核人员会在2个工作日内处理完毕。</center>',function(){location.reload();});	
	            }else if(ResposeData.error > -300 && ResposeData.error < 0){
					loginWin.confirm({'text':'<center>基本信息填写完整后才能申请上架<br />现在去填写基本信息?</center>','ok_text':'确定','cancel_text':'取消'},function(){location.href="/development/appedit?appid="+app.app_id;},function(){loginWin.close();});
	            }else if(ResposeData.error < -300 && appplatform){
	            	var platform = appplatform == 1 ? 'iPhone' : "Android" ;
					loginWin.confirm({'text':'<center>' +  platform + '平台信息填写完整后才能申请上架<br />现在去填写平台信息?</center>','ok_text':'确定','cancel_text':'取消'},function(){location.href="/development/platforminfo?appid="+app.app_id;},function(){loginWin.close();});
	            }else{
	                 //loginWin.alert({"text":'<div style=\"margin:0 20px;\"><span style=\"color:#090;\">请在完成应用开发后再提交审核</span><br/>我们将根据此应用 <b>功能完备性</b>，<b>接口调用次数</b>，<b>已授权用户数</b> 综合评估后进行审核，\n感谢你的配合。</div>',"height":180}) 
	                 loginWin.alert({text:'<div style="text-align:center"><span style="display:inline-block;margin:0 auto;text-align:left;">你的应用从未调用过微博接口，请测试应用是否可正常调用接口，<br />测试成功后再提交申请！</span></div>',height:160});
	            }
	          }
	    })
	}

	function checkapphost(obj){
		var text=$(obj)
			,value = text.val()
			,rule = text.attr("data-rule")//检测规则
			,errmsg = text.attr("data-error")//提示信息
			,flag;
			
		if ((/^link|applink$/.test(rule)) && value.length>0 && value.search(/http[s]?:\/\//) == -1){
			value="http://"+value;
			text.val(value);
		}
		if(OPEN_VALIDATOR.hasOwnProperty(rule) && rule){//判断是否进行检测
			if(!$.trim(value)){
				errmsg += "不能为空";
				flag = false;
			}else{
				var ret = OPEN_VALIDATOR[rule](value,text);//执行检测规则
				if (ret == undefined){
					flag=false;
					errmsg = "";
				}
				else if(ret === true){
					flag = true;
				}else if(ret === 1){
					return;
				}else{
					flag = false;
					errmsg = ret.replace(/##/g,errmsg);
				}
			}
			showmsg(flag,text,errmsg);
			if(true===flag){//
				text.parent("li").find(".cinput").val(value);
				text.parent("li").find("label").text(value);
				text.parent("li").find("input[type='text']").val(value);
			}else{
				text.parent("li").find(".cinput").val("");
			}
		}
	}

	OPEN_VALIDATOR = {
		link:function(value){
			var strRegex = "^((news|telnet|nttp|file|http|ftp|https)://)(([-A-Za-z0-9_]+(\\.[-A-Za-z0-9_]+)*(\\.[-A-Za-z]{2,6}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_$\\.+!*(),;:@&=?/~#%']*)*";  
			var re = new RegExp(strRegex);  
			if (/["'<>]/g.test(value)){
				return "##不能含有'\"<>";
			}else if(re.test(value)){
				return true;
			}else{
				return "##格式错误";
			}
		}
	};
		  
	function showmsg(flag,selector,msg){//提示信息
		var html;
		if(!flag){
			html = ' <span class="tip tip_err"><span class="tip_icon"></span>'+msg+'</span>';
		}else if(true === flag){
			html = ' <span class="tip tip_ok"><span class="tip_icon"></span></span>';	
		}else if(1 === flag){
			html = ' <span class="tip tip_waiting"><span class="tip_icon"></span>'+msg+'</span>';
		}else if(2 === flag){
			html = ' <span class="tip">'+msg+'</span>';
		}
		var li=selector.parent("li");
		li.find(".tip").remove();//清除提示
		selector.after(html);
	}
function applyApphost(){
	$('#apphost_btn').trigger('click');
}