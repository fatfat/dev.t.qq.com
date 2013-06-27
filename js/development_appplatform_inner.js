;(function(){
	tpl.development_appplatform_inner = 
	[       
		'<ul>',
			'<%if(app.app_status==5 && (iphoneinfo.app_check_status ==1 || androidinfo.app_check_status ==1)){%>',
			'<li class="alert alert_warn" beclose="true">',
			'<h4>平台信息已提交，审核通过后才能生效</h4>',
			'</li>',
			'<%}else if(app.app_status==5 && iphoneinfo.app_check_status ==2 && androidinfo.app_check_status ==2 && (iphoneinfo.app_plat_status == 2 || androidinfo.app_plat_status == 2)){%>',
			'<li class="alert alert_warn" beclose="true">',
			'<h4>平台信息已通过审核</h4>',
			'</li>',
			'<%}else if(app.app_status==5 && (iphoneinfo.app_check_status ==3 || androidinfo.app_check_status ==3) && (iphoneinfo.app_plat_status == 2 || androidinfo.app_plat_status == 2)){%>',
			'<li class="alert alert_warn" beclose="true">',
			'<h4>你修改的平台信息未通过审核，可以修改后重新提交<br />',
				'如果有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">请联系我们</a></h4>',
			'</li>',
			'<%}%>',
		'</ul>',
		'<div class="form_platform">',
			'<input type="checkbox" name="appplatform" id="iphone_pf" <%if(app.app_platform==3 || app.app_platform==1){%>checked<%}%> <%if(iphoneinfo.app_plat_status==2){%>disabled<%}%>/><label for="iphone_pf" class="checkbox_label">iPhone</label>',
			'<input type="hidden" name="app_platform" id="app_platform" value="<%=app.app_platform%>"/>',
			'<input type="hidden" name="app_platform_changed" id="app_platform_changed" value="0"/>',
		//<!--用在app_edit中，用于判断无线应用上架通过后，更改平台信息任一字段，需重新审核。值为1表示更改了iphone平台，为2表示更改了android平台，为3表示更改了两个平台-->',
		'</div>',

		'<ul id="iphoneContainer" class="paltform_container">',
			'<li>',
			    '<label class="form_label"><em>*</em>',
			        ' 下载地址：',
			    '</label>',
			    '<span class="form_input"><input type="text" name="app_downurl_1" id="app_downurl_1" value="<%=iphoneinfo.app_downurl%>" data-default="<%=iphoneinfo.app_downurl%>" data-error="下载地址" data-rule="appstorelink" class="iphone_field synchroinfo"/></span>',
			    ' <label class="gray inputdes">请填写苹果官方市场下载地址</label>',
			  /*  '<div>',
					'<label class="form_label">&nbsp;</label>',
					'<span class="form_button"><input type="button" id="btn_SynchroInfo_1" class="btn_abled synchroPlatform"  _platform="1" value="同步信息"></input></span>',
					' <cite class="gray inputdes">可根据appstore下载地址拉取并补充以下信息</cite>',
				'</div>',*/
			'</li>',
	    	'<li>',
			    '<label class="form_label"><em>*</em>',
			        ' 应用简介：',
			    '</label>',
			    '<span class="form_input"><textarea name="app_description_1" id="app_description_1" data-rule="wappdes" data-default="<%=iphoneinfo.app_description%>" data-error="应用简介"  class="iphone_field"><%=iphoneinfo.app_description%></textarea></span>',
			    ' <label class="gray inputdes">请简述应用的作用、使用方法等信息<br/>应用简介将显示在应用介绍页中，最少30个汉字</label>',
			'</li>',
			'<li>',
			    '<label class="form_label">',
			        '<em>*</em> 版本：',
			    '</label>',
			    '<span class="form_input"><input type="text" name="app_version_1" id="app_version_1" value="<%=iphoneinfo.app_version%>" data-default="<%=iphoneinfo.app_version%>" data-error="版本" data-rule="isempty" class="iphone_field" maxlength="30"/></span>',
			'</li>',
			'<li>',
			    '<label class="form_label">',
			        ' <em>*</em>安装包大小：',
			    '</label>',
			    '<span class="form_input"><input type="text" name="app_size_1" id="app_size_1" value="<%=iphoneinfo.app_size%>" data-default="<%=iphoneinfo.app_size%>" data-error="安装包大小" data-rule="installSize" class="iphone_field" maxlength="30"/></span>',
			    ' <cite class="gray inputdes">单位MB</cite>',
			'</li>',
			'<li>',
			    '<label class="form_label">',
			        '<em>*</em> 评分：',
			    '</label>',
			    ' <span class="form_element form_span" id="app_score_1"><%=((!iphoneinfo.app_score || iphoneinfo.app_score == "0.0") ? "4.0" : iphoneinfo.app_score)%></span><cite class="gray inputdes">自动拉取appstore评分，如无展示默认分数</cite>',
			'</li>',
			'<li>',
			    '<label class="form_label">',
			        ' <em>*</em>应用预览图：',
			    '</label>',
				'<div class="form_element">',
					'<table width="580">',
			            '<tbody>',
			                '<tr>',
			                    '<td valign="bottom" align="left" height="140">',
			                        '<label class="nullimg">',
			                            '<img id="app_pic1_1" src="<%=iphoneinfo && iphoneinfo.app_pic1 ? iphoneinfo.app_pic1 : "http://mat1.gtimg.com/app/opent/images/websites/0.gif"%>" width="100" height="140" _width="320" _height="480"/>',
			                        '</label>',
			                        '<br>',
			                        '<label for="wpic1_1" class="uploadbtn">',
			                            '上传',
			                        '</label>',
			                        '<input type="file" accept="image/png,image/jpeg" name="wpic1_1" id="wpic1_1" data-default="<%=iphoneinfo.app_pic1%>" class="iphone_field png_jpg required file" _size="200"/>',
			                   '</td>',
			                    '<td valign="bottom" align="left">',
			                        '<label class="nullimg">',
			                            '<img id="app_pic2_1" src="<%=iphoneinfo && iphoneinfo.app_pic2 ? iphoneinfo.app_pic2 : "http://mat1.gtimg.com/app/opent/images/websites/0.gif"%>" width="100" height="140" _width="320" _height="480"/>',
			                        '</label>',
			                        '<br>',
			                        '<label for="wpic2_1" class="uploadbtn">',
			                            '上传',
			                        '</label>',
			                        '<input type="file" accept="image/png,image/jpeg" name="wpic2_1" id="wpic2_1" data-default="<%=iphoneinfo.app_pic2%>" class="iphone_field png_jpg required file" _size="200"/>',
			                    '</td>',
			                    '<td valign="bottom" align="left">',
			                        '<label class="nullimg">',
			                            '<img id="app_pic3_1" src="<%=iphoneinfo && iphoneinfo.app_pic3 ? iphoneinfo.app_pic3 : "http://mat1.gtimg.com/app/opent/images/websites/0.gif"%>" width="100" height="140" _width="320" _height="480"/>',
			                        '</label>',
			                        '<br>',
			                        '<label for="wpic3_1" class="uploadbtn">',
			                            '上传',
			                        '</label>',
			                        '<input type="file" accept="image/png,image/jpeg" name="wpic3_1" id="wpic3_1" data-default="<%=iphoneinfo.app_pic3%>" class="iphone_field png_jpg required file" _size="200"/>',
			                    '</td>',
			                 '<td valign="bottom" align="left">',
			                        '<label class="nullimg">',
			                            '<img id="app_pic4_1" src="<%=iphoneinfo && iphoneinfo.app_pic4 ? iphoneinfo.app_pic4 : "http://mat1.gtimg.com/app/opent/images/websites/0.gif"%>" width="100" height="140" _width="320" _height="480"/>',
			                        '</label>',
			                        '<br>',
			                          '<label for="wpic4_1" class="uploadbtn">',
			                            '上传',
			                        '</label>',
			                        '<input type="file" accept="image/png,image/jpeg" name="wpic4_1" id="wpic4_1" data-default="<%=iphoneinfo.app_pic4%>" class="iphone_field png_jpg required file" _size="200"/>',
			                    '</td>',
			                    '<td valign="bottom" align="left">',
			                        '<label class="nullimg">',
			                            '<img id="app_pic5_1" src="<%=iphoneinfo && iphoneinfo.app_pic5 ? iphoneinfo.app_pic5 : "http://mat1.gtimg.com/app/opent/images/websites/0.gif"%>" width="100" height="140" _width="320" _height="480"/>',
			                        '</label>',
			                        '<br>',
			                        '<label for="wpic5_1" class="uploadbtn">',
			                            '上传',
			                        '</label>',
			                        '<input type="file" accept="image/png,image/jpeg" name="wpic5_1" id="wpic5_1" data-default="<%=iphoneinfo.app_pic5%>" class="iphone_field png_jpg required file" _size="200"/>',
			                        '<input type="hidden" name="img_need_post" id="img_need_post" value="0">',
			                        '<input type="hidden" name="app_plat_status_1" id="app_plat_status_1" value="<%=iphoneinfo.app_plat_status%>"/>',
			                        '<input type="hidden" name="app_plat_status_2" id="app_plat_status_2" value="<%=androidinfo.app_plat_status%>"/>',
			                    '</td>',
			                '</tr>',
			                '<tr>',
			                    '<td colspan="5">',
			                        '<label class="gray">',
			                            '*图片格式为JPG/PNG &nbsp; &nbsp; 请上传320*480尺寸 &nbsp; &nbsp; *每张图片最大不超过200K',
			                            '<br/>',
			                            '预览图在应用详情页展示，建议您提交的截图体现腾讯微博与应用结合场景（如分享功能，登录功能等）',
			                        '</label>',
			                    '</td>',
			                '</tr>',
			            '</tbody>',
			        '</table>',
				'</div>',
			'</li>',
		'</ul>',
		'<div class="form_platform form_platform_android">',
			'<input type="checkbox" name="appplatform" id="android_pf" <%if(app.app_platform==3 || app.app_platform==2){%>checked<%}%> <%if(androidinfo.app_plat_status==2 ){%>disabled<%}%>/><label for="android_pf" class="checkbox_label">Android</label>',
		'</div>',
		'<ul id="androidContainer" class="paltform_container">',
		/*	'<li>',
			    '<label class="form_label"><em>*</em>',
			        ' 下载地址：',
			    '</label>',
			    '<span class="form_input"><input type="text" name="app_downurl_2" id="app_downurl_2" value="<%=androidinfo.app_downurl%>" data-default="<%=androidinfo.app_downurl%>" data-error="下载地址" data-rule="link" class="android_field synchroinfo"/></span>',
			    ' <label class="gray inputdes inputdes2">请填写适合手机浏览的下载页地址<br/>或.apk结尾的直接下载地址</label>',
			'</li>',
	 		'<li>',
			    '<label class="form_label">',
			        'Google Play地址：',
			    '</label>',
			    '<span class="form_input"><input type="text" name="app_marketurl" id="app_marketurl" value="<%=androidinfo.app_marketurl%>" data-default="<%=androidinfo.app_marketurl%>" data-error="Google Play地址" data-rule="androidlink" class="android_field synchroinfo"/></span>',
			    ' <label class="gray inputdes">若已在<a href="https://play.google.com/store" target="_blank">Google Play</a>上架，请填写应用在该市场地址</label>',
			    '<div>',
					'<label class="form_label">&nbsp; </label>',
					'<span class="form_button"><input type="button" id="btn_SynchroInfo_2" class="btn_abled synchroPlatform" _platform="2" value="同步信息"></input></span>',
					' <cite class="gray inputdes">可根据Google Play地址拉取并补充以下信息</cite>',
				'</div>',
			'</li>',*/
			'<input type="hidden" name="app_downurl_2" id="app_downurl_2"  value="<%=androidinfo.app_downurl%>" data-default="<%=androidinfo.app_downurl%>" />',
			'<li>',
				'<label class="form_label"><em>*</em>apk安装包：</label>',

				'<div class="form_element">',
					'<span class="form_button_upload <%if(androidinfo.app_downurl){%> none<%}%>">',
						'<input type="button" class="btn_abled" _platform="2" value="上传" id="app_apk_uploader"/>',
						'<input type="hidden" name="app_apk" class="app_apk" data-rule="appapk" data-error="apk安装包" data-default="<%=androidinfo.app_downurl%>" value="<%=androidinfo.app_downurl%>"/>',
					'</span>',
					'<span class="form_element_uploaded<%if (androidinfo.app_downurl) {%><% }else{ %> none<% } %>">',
						'<span class="form_element_uploaded_name"><%if (androidinfo.app_downurl) {%><a href="http://app.t.qq.com/download.php?key=<%=androidinfo.app_downurl%>&name=<%=app.app_id%>.apk" target="_blank" title="点击下载"><%=app.app_id%>.apk</a><% } %></span> ',
						'<a href="javascript:;" class="form_element_uploaded_del">删除</a>',
					'</span>',
				'</div>',
			'</li>',
			    	'<li>',
			    '<label class="form_label"><em>*</em>',
			       ' 应用简介：',
			    '</label>',
			    '<span class="form_input"><textarea name="app_description_2" id="app_description_2" data-rule="wappdes" data-default="<%=androidinfo.app_description%>" data-error="应用简介"  class="android_field"><%=androidinfo.app_description%></textarea></span>',
			    ' <label class="gray inputdes">请简述应用的作用、使用方法等信息<br/>应用简介将显示在应用介绍页中，最少30个汉字</label>',
			'</li>',
			'<li>',
			    '<label class="form_label">',
			        ' <em>*</em>版本：',
			    '</label>',
			    '<span class="form_input"><input type="text" name="app_version_2" id="app_version_2" value="<%=androidinfo.app_version%>" data-default="<%=androidinfo.app_version%>" data-error="版本" data-rule="isempty" class="android_field" maxlength="30"/></span>',
			'</li>',
			'<li>',
			    '<label class="form_label">',
			         '<em>*</em>安装包大小：',
			    '</label>',
			    '<span class="form_input"><input type="text" name="app_size_2" id="app_size_2" value="<%=androidinfo.app_size%>" data-default="<%=androidinfo.app_size%>" data-error="安装包大小" data-rule="installSize" class="android_field" maxlength="30"/></span>',
			    ' <cite class="gray inputdes">单位MB</cite>',
			'</li>',
		/*	'<li>',
			    '<label class="form_label">',
			        '<em>*</em> 评分：',
			    '</label>',
			    '<span class="form_element form_span" id="app_score_2"><%=androidinfo.app_score%></span><cite class="gray inputdes">自动拉取安卓市场评分，如无展示默认分数</cite>',
			'</li>',*/
			'<li>',
			    '<label class="form_label">',
			        '<em>*</em> 应用预览图：',
			    '</label>',
				'<div class="form_element">',
					'<table width="580">',
			            '<tbody>',
			                '<tr>',
			                    '<td valign="bottom" align="left" height="140">',
			                        '<label class="nullimg">',
			                            '<img id="app_pic1_2" src="<%=androidinfo && androidinfo.app_pic1 ? androidinfo.app_pic1 : "http://mat1.gtimg.com/app/opent/images/websites/0.gif"%>" width="100" height="140" _width="320" _height="480"/>',
			                        '</label>',
			                        '<br>',
			                        '<label for="wpic1_2" class="uploadbtn">',
			                            '上传',
			                        '</label>',
			                        '<input type="file" accept="image/png,image/jpeg" name="wpic1_2" id="wpic1_2" data-default="<%=androidinfo.app_pic1%>" class="android_field png_jpg required file" _size="200"/>',
			                    '</td>',
			                    '<td valign="bottom" align="left">',
			                        '<label class="nullimg">',
			                            '<img id="app_pic2_2" src="<%=androidinfo && androidinfo.app_pic2 ? androidinfo.app_pic2 : "http://mat1.gtimg.com/app/opent/images/websites/0.gif"%>" width="100" height="140" _width="320" _height="480"/>',
			                        '</label>',
			                        '<br>',
			                        '<label for="wpic2_2" class="uploadbtn">',
			                            '上传',
			                        '</label>',
			                        '<input type="file" accept="image/png,image/jpeg" name="wpic2_2" id="wpic2_2" data-default="<%=androidinfo.app_pic2%>" class="android_field png_jpg required file" _size="200"/>',
			                    '</td>',
			                    '<td valign="bottom" align="left">',
			                        '<label class="nullimg">',
			                            '<img id="app_pic3_2" src="<%=androidinfo && androidinfo.app_pic3 ? androidinfo.app_pic3 : "http://mat1.gtimg.com/app/opent/images/websites/0.gif"%>" width="100" height="140" _width="320" _height="480"/>',
			                        '</label>',
			                        '<br>',
			                        '<label for="wpic3_2" class="uploadbtn">',
			                            '上传',
			                        '</label>',
			                        '<input type="file" accept="image/png,image/jpeg" name="wpic3_2" id="wpic3_2" data-default="<%=androidinfo.app_pic3%>" class="android_field png_jpg required file" _size="200"/>',
			                    '</td>',
			                    '<td valign="bottom" align="left">',
			                        '<label class="nullimg">',
			                            '<img id="app_pic4_2" src="<%=androidinfo && androidinfo.app_pic4 ? androidinfo.app_pic4 : "http://mat1.gtimg.com/app/opent/images/websites/0.gif"%>" width="100" height="140" _width="320" _height="480"/>',
			                        '</label>',
			                        '<br>',
			                        '<label for="wpic4_2" class="uploadbtn">',
			                            '上传',
			                        '</label>',
			                        '<input type="file" accept="image/png,image/jpeg" name="wpic4_2" id="wpic4_2" data-default="<%=androidinfo.app_pic4%>" class="android_field png_jpg required file" _size="200"/>',
			                    '</td>',
			                    '<td valign="bottom" align="left">',
			                        '<label class="nullimg">',
			                            '<img id="app_pic5_2" src="<%=androidinfo && androidinfo.app_pic5 ? androidinfo.app_pic5 : "http://mat1.gtimg.com/app/opent/images/websites/0.gif"%>" width="100" height="140" _width="320" _height="480"/>',
			                        '</label>',
			                        '<br>',
			                        '<label for="wpic5_2" class="uploadbtn">',
			                            '上传',
			                        '</label>',
			                        '<input type="file" accept="image/png,image/jpeg" name="wpic5_2" id="wpic5_2" data-default="<%=androidinfo.app_pic5%>" class="android_field png_jpg required file" _size="200"/>',
			                    '</td>',
			                '</tr>',
			                '<tr>',
			                    '<td colspan="5">',
			                        '<label class="gray">',
			                            '*图片格式为JPG/PNG &nbsp; &nbsp; 请上传320*480尺寸 &nbsp; &nbsp; *每张图片最大不超过200K',
			                            '<br/>',
			                            '预览图在应用详情页展示，建议您提交的截图体现腾讯微博与应用结合场景（如分享功能，登录功能等）',
			                        '</label>',
			                    '</td>',
			                '</tr>',
			            '</tbody>',
			        '</table>',
				'</div>',
			'</li>	',
		'</ul>',
	].join("");	

 
	function getPlatform() {
		var app_platform = 0;
		if($("#iphone_pf").attr("checked") && $("#android_pf").attr("checked")){
			app_platform = 3;
		}else if($("#iphone_pf").attr("checked")){
			app_platform = 1;
		}else if($("#android_pf").attr("checked")){
			app_platform = 2;
		}
		$("input[name='app_platform']").val(app_platform);
		return app_platform;
	 }
		
	eventBindFuncList.push( function(){
		$("input[name='appplatform']").each(function(index){
			if($(this).attr("checked")){
				$(".paltform_container").eq(index).show();
			}else{
				$(".paltform_container").eq(index).hide();
			}
		});
		
		/*$("input[name='appplatform']").change(function(){
		 	if($(this).attr("checked")){
		 		$(this).parent(".form_platform").next(".paltform_container").show();
		 		if($("input[name='appplatform']").not(":checked").legnth > 0){
		 			$("input[name='appplatform']").not(":checked").next(".paltform_container").hide();
		 		}
		 	}else{
		 		if($("input[name='appplatform']:checked").length == 0){
					//$("#platformTitle").append($('<span class="tip tip_err" style="margin-top:0;"><span class="tip_icon"></span>请至少选择一个平台</span>"'));
					loginWin.alert("<center>请至少选择一个平台</center>");	
				}else{
					//$("#platformTitle").next(".tip_err").remove();	
				}
				$(this).parent(".form_platform").next(".paltform_container").hide();
		 	}
			getPlatform();
		});*/
	
		$('input[type=file]').change(function(){ $('input#img_need_post').val('1')});
		
		$(".synchroPlatform").click(function(){
			var app_platform=$(this).attr("_platform"),
				$app_downurl = $("#app_downurl_"+app_platform),
				app_downurl = $app_downurl.val(),
				$app_marketurl = $("#app_marketurl"),
				app_marketurl = app_platform == 1 ? "" : $app_marketurl.val(),
				error_msg = "",
				sychroflag = true;
			
			$app_downurl.trigger("blur");
			if(app_platform == 2){
				$app_marketurl.trigger("blur");
			}
			if($app_downurl.parent(".form_input").next(".tip_err").size()){
				error_msg = $app_downurl.parent(".form_input").next(".tip_err").text();
				sychroflag = false;
			}
			if(app_platform == 2 && $app_marketurl.parent(".form_input").next(".tip_err").size()){
				if(error_msg == ""){
					error_msg = $app_marketurl.parent(".form_input").next(".tip_err").text();
				}
			}
			if(error_msg){
				loginWin.alert("<center>" + error_msg + "</center>");
				return false;
			}
			//loading
			var $btn_SynchroInfo = $("#btn_SynchroInfo_"+app_platform);
			showmsg(1,$btn_SynchroInfo,"正在同步信息");
			$btn_SynchroInfo.attr("disabled","disabled").css("background-color","#eee");
			
			$.ajax({
				 "dataType":"json"
				,"type":"post"
				,"url":"/development/dospider?t=" + (+new Date())
				,"data":{"app_id" : app.app_id, "app_platform" : app_platform, "app_downurl" : app_downurl, "app_marketurl" : app_marketurl}
				,"success":function(d){
					var ret = +d.ret,msg =common.getMsgByRet(ret);
					if (msg){
						loginWin.alert("<center>"+msg+"</center>");
						return;
					}
					if(ret === 0 || ret === 3){
						if(ret === 0){
							showmsg(true,$btn_SynchroInfo,"信息同步成功");
						}else if(ret === 3){
							showmsg(false,$btn_SynchroInfo,"部分信息同步失败");
						}
						
						$btn_SynchroInfo.removeAttr("disabled").css("background-color","#D6EEF6");
						if(d.msg.app_description){
							$("#app_description_"+app_platform).val(d.msg.app_description);
						}
						if(d.msg.app_version){
							$("#app_version_"+app_platform).val(d.msg.app_version);
						}
						if(d.msg.app_size){
							$("#app_size_"+app_platform).val(d.msg.app_size);
						}
						if(d.msg.app_score){
							$("#app_score_"+app_platform).text(d.msg.app_score);
						}
						if(d.msg.app_pic1 ){
							$("#app_pic1_"+app_platform).attr("src",d.msg.app_pic1);
							$("#wpic1_"+app_platform).attr("data-default",d.msg.app_pic1);
						}
						if(d.msg.app_pic2){
							$("#app_pic2_"+app_platform).attr("src",d.msg.app_pic2);
							$("#wpic2_"+app_platform).attr("data-default",d.msg.app_pic2);
						}
						if(d.msg.app_pic3){
							$("#app_pic3_"+app_platform).attr("src",d.msg.app_pic3);
							$("#wpic3_"+app_platform).attr("data-default",d.msg.app_pic3);
						}
						if(d.msg.app_pic4){
							$("#app_pic4_"+app_platform).attr("src",d.msg.app_pic4);
							$("#wpic4_"+app_platform).attr("data-default",d.msg.app_pic4);
						}
						if(d.msg.app_pic5){
							$("#app_pic5_"+app_platform).attr("src",d.msg.app_pic5);
							$("#wpic5_"+app_platform).attr("data-default",d.msg.app_pic5);
						}
					}else if(ret === 1){
						showmsg(false,$btn_SynchroInfo,"填写Google Play地址才可同步信息");
						$btn_SynchroInfo.removeAttr("disabled").css("background-color","#D6EEF6");
						return;
					}else{
						showmsg(false,$btn_SynchroInfo,"信息同步失败，请重试或手动填写");
						$btn_SynchroInfo.removeAttr("disabled").css("background-color","#D6EEF6");
						return;
					}
				}
				,"error":function(){
					showmsg(false,$btn_SynchroInfo,"信息同步失败，请重试");
					$btn_SynchroInfo.removeAttr("disabled").css("background-color","#D6EEF6");
					return;
				}
			});
		});
	});
})();
