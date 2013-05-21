var comp_type=4;
this.tpl.qshare_explain_include = [
	'<div class="comp_area">',
	'<dl style="display:none;">',
		'<dt>查看示例</dt>',
		'<dd>例一：<a href="/websites/qshareexplain?page=demo1.html" target="_blank">自定义分享按钮</a> 例二：<a href="/websites/qshareexplain?page=demo2.html" target="_blank">自定义分享区域</a> 例三：<a href="/websites/qshareexplain?page=demo3.html" target="_blank">不设置分享按钮和分享区域</a>例四：<a href="/websites/qshareexplain?page=demo4.html" target="_blank" style="color:red">如何设置多个区域为分享区域</a></dd>',
	'</dl>',
	'<dl class="p1">',
		'<dt>样式设置</dt>',
		'<dd>',
			'<table width="100%">',
				'<tr>',
					'<td height="40"><input type="radio" name="qsharebtn" value="width:118px;height:25px;background:url(http://mat1.gtimg.com/app/opent/images/websites/share/qshare.png) no-repeat;" id="qsharebtn0" checked/> <label for="qsharebtn0"><img src="http://mat1.gtimg.com/app/opent/images/websites/share/qshare.png" valign="middle"/></label></td>',
					'<td><input type="radio" name="qsharebtn" value="width:92px;height:22px;background:url(http://mat1.gtimg.com/app/opent/images/websites/qshare/icon3.gif) no-repeat;" id="qsharebtn1"/> <label for="qsharebtn1"> <img src="http://mat1.gtimg.com/app/opent/images/websites/qshare/icon3.gif" valign="middle"/></label></td>',
					'<td><input type="radio" name="qsharebtn" value="width:92px;height:22px;background:url(http://mat1.gtimg.com/app/opent/images/websites/qshare/icon.gif) no-repeat;" id="qsharebtn2"/> <label for="qsharebtn2">  <img src="http://mat1.gtimg.com/app/opent/images/websites/qshare/icon.gif" valign="middle"/></label></td>',
					'<td><input type="radio" name="qsharebtn" value="width:59px;height:22px;background:url(http://mat1.gtimg.com/app/opent/images/websites/qshare/icon2.png) no-repeat;" id="qsharebtn3"/> <label for="qsharebtn3">  <img src="http://mat1.gtimg.com/app/opent/images/websites/qshare/icon2.png" valign="middle"/></label></td>',
				'</tr>',
				'<tr>',
					'<td height="40"><input type="radio" name="qsharebtn" value="width:32px;height:32px;background:url(http://mat1.gtimg.com/app/opent/images/websites/qshare/icon3.png) no-repeat;" id="qsharebtn4"/> <label for="qsharebtn4">  <img src="http://mat1.gtimg.com/app/opent/images/websites/qshare/icon3.png" valign="middle"/></label></td>',
					'<td><input type="radio" name="qsharebtn" value="width:28px;height:28px;background:url(http://mat1.gtimg.com/app/opent/images/websites/qshare/icon4.png) no-repeat;" id="qsharebtn5"/> <label for="qsharebtn5">  <img src="http://mat1.gtimg.com/app/opent/images/websites/qshare/icon4.png" valign="middle"/></label></td>',
					'<td><input type="radio" name="qsharebtn" value="width:63px;height:25px;background:url(http://mat1.gtimg.com/app/opent/images/websites/qshare/icon5.png) no-repeat;" id="qsharebtn6"/> <label for="qsharebtn6">  <img src="http://mat1.gtimg.com/app/opent/images/websites/qshare/icon5.png" valign="middle"/></label></td>',
					'<td><input type="radio" name="qsharebtn" value="width:68px;height:23px;background:url(http://mat1.gtimg.com/app/opent/images/websites/qshare/icon6.png) no-repeat;" id="qsharebtn7"/> <label for="qsharebtn7">  <img src="http://mat1.gtimg.com/app/opent/images/websites/qshare/icon6.png" valign="middle"/></label></td>',
				'</tr>',
			'</table>',
		'</dd>',
	'</dl>',
	'',
	'<dl class="p1" style="display:none;">',
	'<dt>关联设置</dt>',
	'<dd>',
	'<span class="form_input"><input type="text" id="assname" placeholder="填写微博帐号" data-rule="tname" data-error="微博帐号名"></span> <label id="assname_tip" class="inputdes">在用户分享成功后，会提示收听该注册账号 <a class="guideword" href="javascript:;">什么是微博帐号？<label>微博帐号即微博地址后缀，如下图红框所示<br/>http://t.qq.com/<span style="border:1px solid #f00">QQGenius</span></label></a></label>',
	'</dd>',
	'</dl>',
	'</div>'
].join("");

util.createScript("/js/comp_validate.js",function(){bindAllEvent();});

function formSubmit(){
	if($("#showcode").attr("disabled")){return;}
	var paras={
			"comp_type":4, //组件类型 1、'一键分享',2'批量收听',3'话题墙',4'Q-Share',5'心情板'
			"comp_style":"{\"assname\":\""+$("#assname").val()+"\",\"qsharestyle\":"+$("input[name='qsharebtn']:checked").attr("id").replace("qsharebtn","")+"}"
		};
		if ($("#comp_url").size()&&$("#comp_name").size()){
			paras["comp_url"]=encodeURIComponent($("#comp_url").val());
			paras["comp_name"]=encodeURIComponent($("#comp_name").val());
		}
		$("#showcode").attr("disabled","disabled");
		$.ajax(
		{"type":"post",
		"url":"/pipes/interfaceserver?action=common_query&business_type=ajax_compadd&t=" + new Date().getTime(),
		"data":paras,
		"dataType":"json",
		"success":function(d){
			var ret = +d.ret , msg = common.getMsgByRet(ret);
			if (msg){
				loginWin.alert("<center>"+msg+"</center>");
				return;
			}
			if (ret === 0 && d.data && d.data.id){
				location.href='/development/compinfo?comp_id='+d.data.id;
			}else{
				loginWin.alert({
					"title":"获取代码失败！",
					"width":450,
					"text":"<center>"+(d.msg||"服务器失败")+"</center>"
				});
			}
			$("#showcode").removeAttr("disabled");
		},
		"error":function(d){
			loginWin.alert({
						"title":"获取代码失败！",
						"width":340,
						"text":"<center>连接服务器失败</center>"
						});
			$("#showcode").removeAttr("disabled");
		}
		});
}
