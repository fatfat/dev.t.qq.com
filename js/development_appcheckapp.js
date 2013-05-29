this.tpl = this.tpl || {};
	if (app.app_type != 5) {
		var str = [
			'label.form_label{width:100px;}',
			'.appform span.form_input{margin-left:100px;}',
			'.appform .form_element {margin-left:100px;}',
			'#showtgdiv{display:none;line-height:1.75;}',
			'#showtgdiv.show{display:inline-block;*display:inline;zoom:1;}'
		].join('');
		util.createStyle(str);
	}
tpl.development_appcheckapp = [
	this.tpl.header,
	'<div id="content" class="controlCon main main_app">',
		'<div class="approate">',
			'<a href="/development/">我的应用</a> &gt; <span><%=app.app_name%></span>',
		'</div>',
		'<div class="deverLeft">',
			'<div class="leftMain">',
				'<div class="uicon">',
					'<img src="<%=app.app_icon_75 || \'http://mat1.gtimg.com/app/opent/images/index/icon.jpg\'%>" height="75" width="75"/><br/>',
					'<p><%=app.app_name%></p>',
				'</div>',
				this.tpl.appnav,
			'</div>',
		'</div>',
		'<div class="deverRight">',
			'<h1 class="comp_tit">应用提交审核</h1>',
			'<%if (app.app_checkapi == 0 && app.app_type == 4 ) {%>',
			'<font color="gray">你的应用从未调用过微博接口，请测试应用是否可正常调用接口， 测试成功后再提交申请！ </font>',
			'<%}%>',
			'<div class="app_check">',
				'<label>确认开发者信息</label><i class="active"></i><strong><%if (app.app_type == 6 ) {%>确认基本信息<%} else {%>确认应用信息<%}%></strong><i></i><label><%if (app.app_type == 6 ) {%>确认平台信息<%} else {%>确认应用素材<%}%></label><i></i><label>提交审核</label>',
			'</div>',
			'<%if (app.app_type == 6 ) {%>',
			'<iframe id="appform_post_aec" name="appform_post_aec" width="100" height="100" src="about:blank" style="display: none;"></iframe>',
			'<form action="/development/savecheckwapp?action=common_query&appid=<%=app.app_id%>" method="post" class="appform wirelessappform" enctype="multipart/form-data" id="appform" target="appform_post_aec" onsubmit="return false">',
				'<ul>',
				this.tpl.development_app_info,
				this.tpl.development_app_material,
				'<li>',
				    '<label class="form_label">&nbsp;</label>',
				    '<span class="form_element">',
			            '<input type="submit" class="devSubmit" id="devSubmit"  value="下一步" data-rule="formauto"/>',
				    '</span>',
				'</li>',
				'</ul>',
			'</form>',
			'<%} else {%>',
			'<form action=" " method="post" class="appform" id="appform_app" onsubmit="return false;">',
				'<ul>',
				this.tpl.development_app_info,
				'<li>',
				    '<label class="form_label">&nbsp;</label>',
				    '<span class="form_element">',
			            '<input type="submit" class="devSubmit" id="devSubmit" value="下一步" data-rule="formauto"/>',
				    '</span>',
				'</li>',
				'</ul>',
			'</form>',
			'<%}%>',
		'</div>',
	'</div>',
	this.tpl.footer
].join('');

var app = global_obj.data.app;
var ex_appname = app.app_name;
//ajax 链接网页应用 http://dev.t.qq.com/apps/checkname/abc?random=1366881099913
//无线应用 http://dev.t.qq.com/apps/checkname/accddd2013s?random=1366881352328 
global_obj.data.appnav = "info";
$("#main").html(tmpl(this.tpl.development_appcheckapp,global_obj.data));

global_obj.init.appnav();
util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/app_checkapp.js");
var str = [
	'.hostingclick {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-top:1px solid #d9d9d9;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;font-weight:bold;}',
	'.hosting {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-bottom:1px solid #d9d9d9;}',
	'div a#yunJPGClick{display:none}'
].join('');
util.createStyle(str);


	$('input#app_name').change(function(){ 
		if(ex_appname != $('input#app_name').val()){
			$('input#postname').val('1');
		}else{
			$('input#postname').val('0'); 
		}
	}) 


var app_id = app.app_id || '',
	app_type = +app.app_type || '',
	NextUrl = app_type == 6 ? '/development/appcheckplatform?appid='+app_id : '/development/appcheckmaterial?appid='+app_id,
	typedata = '&app_hosting=' + app.app_hosting + '&app_type=' + app.app_type;
 
$(function(){
	$('input[type=radio]').change(function(){ need_post = 1;})
})
if  (app.app_checkapi == 0 && app.app_type == 4  ) {
	$(function(){ 
	 	$('input,textarea').attr("disabled","disabled"); 
	 	$('input,select').attr("disabled","disabled");
	 	$('input#devSubmit').attr("class","devCancel");
	 	$('label.uploadbtn').hide();
	 	$('input[type="file"]').hide();
	}); 
}
//development_app_info js begin
	if (app.app_type == 4) {
		$(function(){
			$("input[name='app_hosting']").click(function(){
				var t = $(this).filter(":checked").val();
					$("#app_realpath_desc").html([
						'应用开发完毕后，请将应用地址填写在此处 <br/>应用测试页面的iframe会调用此地址帮助您完成应用测试 <br/>应用提交审核后，审核人员也会通过该地址审核你的应用 <br/>用户使用此应用时，微博服务器会向该地址发送请求获取应用内容',
						'应用开发完毕后请先将应用部署在自己的服务器上，并将应用地址填写在此处<br/>应用测试页面的iframe会调用此地址帮助您完成应用测试<br>应用提交审核后，审核人员也会通过该地址审核你的应用<br> 应用上架后此地址失效'
					][+t]).width([350,420][+t]);
			});
			$('#tuguan').mouseover(function(){
				$('#showtgdiv').addClass("show");
				$(this).parent().addClass("reflow");
			});
		})
	}
	var TIMER = {};
	$("#appweiboLink").mouseover(function(){
			if(TIMER.timer){
				clearTimeout(TIMER.timer);
			}
			$(".appweiboDetail").show();
		}).mouseout(function(){
			TIMER.timer = setTimeout(function(){
				$(".appweiboDetail").hide();
			}, 200);
		});
		
		$(".appweiboDetail").mouseover(function(){
			if(TIMER.timer){
				clearTimeout(TIMER.timer);
			}
		}).mouseout(function(){
			TIMER.timer = setTimeout(function(){
				$(".appweiboDetail").hide();
			}, 200);
		});

	if (app.app_type ==6) {
		$(function(){
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
			 
			 $("input[name='appplatform']").change(function(){
				var appplatform = $("input[name='appplatform']");
				getPlatform();
				if($("input[name='appplatform']:checked").length == 0){
					showmsg(false,$("#iphone_pf"),"请至少选择一个平台");
					loginWin.alert("<center>请至少选择一个平台</center>");
				}else{
					showmsg(true,$("#iphone_pf"),"");
				}
			});
		});
	}

	if (app.app_type != 5 && app.app_type != 3 && app.app_type != 6 && app.app_type != 4){
		$(function(){
		var app_status=app.app_status;
		$('a#change_type').click(function(){
			if(app_status == 1||app_status == 7||app_status==5||app_status==4||app_status==8){
				loginWin.show({
					"width": 685,
					"height": 360,
					"title": "提示",
					"text": '<div class="tipTop" style="height: auto;">\
							<div style="width: 645px; margin: 0 auto;">\
							<h3 style="padding-left: 26px; font-size: 14px; font-weight: normal; background: url(http://mat1.gtimg.com/app/opent/images/development/icon_notice.gif) no-repeat 0 0;">改为"站内应用"后将无法改回到原来的应用类型，如果确定改为站内应用，请选择部署模式：</h3>\
							<div id="app_hosting1" style="padding: 15px 30px 30px;">\
								<p><input type="radio"  name="app_hosting1" value="1" id="app_hosting"/>\
									<label for="app_hosting">使用腾讯云平台托管/部署服务(Hosting)</label>  </p>\
								<p><input type="radio" name="app_hosting1" value="0" checked="true" id="app_nohosting"/>\
									<label for="app_nohosting">不使用腾讯云平台托管/部署服务(Non-Hosting)</p>\
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
					loginWin.close();
					loginWin.show({text:"<center><br/>正在转为站内应用，请不要关闭浏览器！</center>",height:120,width:450});
				    var postData = {
				    	'action':'common_query',
				    	 'business_type':'saveappinfo',
					    "app_type":4,
					    "actiontype":1,
					    "appid":app.app_id,
					    "app_hosting":$("#app_hosting1 input:checked").val()
			   		};
					
					$.ajax({
						type: "POST",
						url: "/pipes/interfaceserver",
						dataType: "json",
						data: postData,
						success: function(msg){
							//alert(JSON.stringify(msg));
							loginWin.close();
							if(msg.error == 0){
								if(app_status==1||app_status==7)
								loginWin.alert('<center>应用类型修改成功，请按<a href="http://wiki.open.t.qq.com/index.php/%E5%BA%94%E7%94%A8%E9%A2%91%E9%81%93%E6%8E%A5%E5%85%A5%E6%8C%87%E5%BC%95#.E5.B7.B2.E5.BC.80.E5.8F.91.E7.9A.84.E7.AB.99.E5.A4.96.E5.BA.94.E7.94.A8.E6.8E.A5.E5.85.A5" target="_blank">站内应用改造规范</a>进行改造</center>', function() {
									window.submitCallback && submitCallback(msg);
									location.reload();
								});
								else
									loginWin.alert('<center>已提交，通过审核后才能生效</center>', function() {
										window.submitCallback && submitCallback(msg);
										location.reload();
									});
									
							 }else if(msg.error == 1){
								 //注册或修改出错，打印错误
								 //alert( "Data Saved: " + msg ); 
								 loginWin.alert("<center>提交内容包含非法数据，请重新提交</center>");
							 }else{
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
		});   
		});
	}
	//development_app_info js end

global_obj.init.app_material();

