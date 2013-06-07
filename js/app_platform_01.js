$(function(){
	var getPlatform = function() {
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
	 };
	 
	$("input[name='appplatform']").each(function(index){
		if($(this).attr("checked")){
			$(".paltform_container").eq(index).show();
		}else{
			$(".paltform_container").eq(index).hide();
		}
	});
	 
	 $("input[name='appplatform']").change(function(){
	 	if($(this).attr("checked")){
	 		$(this).parent(".form_platform").next(".paltform_container").show();
	 		if($("input[name='appplatform']").not(":checked").length > 0){
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
	});
	
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
			,"data":{"app_id" : appid, "app_platform" : app_platform, "app_downurl" : app_downurl, "app_marketurl" : app_marketurl}
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
	
	(function(){
		var btn = $("#app_apk_uploader"),
			app_apk = $("input[name='app_apk']"),
			app_uploader = $(".form_button_upload"),
			app_downer = $(".form_element_uploaded_name"),
			app_info = $(".form_element_uploaded"),
			apk_size = $("#app_size_2"),
			showAppInfo = function(app){
				app_apk.val(app.filekey);
				apk_size.val((app.filesize/1024/1024).toFixed(2));
				app_uploader.addClass("none");
				app_info.removeClass("none").find(".form_element_uploaded_name").html(app.filename);
				app_downer.html('<a href="http://app.t.qq.com/download.php?key=' + app.filekey + '&name='+ global_obj.data.app.app_id +'.apk" target="_blank" title="点击下载">'+global_obj.data.app.app_id+'.apk</a>');
				showmsg(true,app_apk);
			},
			hideAppInfo = function(){
				app_info.addClass("none");
				app_uploader.removeClass("none");
				$('#app_downurl_2').val("");
				app_apk.val("").removeAttr("data-default");
				showmsg(false,app_apk,"请上传apk安装文件");
			};
		btn.bind("click",function(){
			var iframe;
			loginWin.show({
				"text":'<iframe src="/html/upload.html" width="400" height="140" scrollong=no frameborder=0></iframe>',
				"width":400,
				"height":180,
				"title":"文件上传"
			});
			iframe = loginWin.win.find("iframe")[0];
			iframe.callback = function(d){
				//	{"ret":0,"msg":"上传成功","data":{"filename":"hello.apk","filekey":"a002b7e6-4a28-4248-9d9f-22a0c6d730f2","filesize":1520}}
				$('#app_downurl_2').val("2");
				loginWin.close();
				if (d.ret === 0){
					showAppInfo(d.data);
				}
			}
			iframe.errorcallback = function(){
				hideAppInfo();
			}
		});
		app_info.find(".form_element_uploaded_del").bind("click",hideAppInfo);
	})();
	
});/*  |xGv00|25334db736f5d66322dbf8cae1bcf524 */