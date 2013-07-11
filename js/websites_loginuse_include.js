if(!window.comp) {
	var comp = global_obj.data;
} else {
	var comp = {};
}
tpl.websites_loginuse_include = [
'<link href="http://mat1.gtimg.com/app/opent/css/websites/login/use.css" rel="stylesheet" type="text/css"/>',
'<h2 class="comp_sub_tit">配置微博登录按钮样式</h2>',
'<div class="style_set">',
	'<div class="titles">',
		'<p class="f14">1&nbsp;选择登录前样式</p>',
		'<p class="f14 offset_right">登录前效果预览:</p>',
	'</div>',
	'<div class="load_before">',
		'<form>',
			'<div class="type">',
				'<strong class="sub">样式：</strong>',
				'<p>',
					'<input type="radio" checked="checked" name="b_type" value=0 id="btn"/><label for="btn">按钮</label>',
					'<input type="radio" name="b_type" value=1 id="btn_words"/><label for="btn_words">图标+文字</label>',
					'<input type="radio" name="b_type" value=2 id="words" /><label for="words">文字</label>',
				'</p>',
			'</div>',
			'<div class="size unvisible">',
				'<strong class="sub">大小：</strong>',
				'<p>',
					'<input type="radio" checked="checked" name="size" value=0 id="230_48" /><label for="230_48">230*48</label>',
					'<input type="radio" name="size" value=1 id="170_32" /><label for="170_32">170*32</label>',
					'<input type="radio" name="size" value=2 id="120_24" /><label for="120_24">120*24</label>',
					'<input type="radio" name="size" value=3 id="105_16" /><label for="105_16">105*16</label>',
				'</p>',
			'</div>',
		'</form>',
		'<div class="b_img_container">',
			'<div class="b_img_show"></div>',
		'</div>',
	'</div>',
	'<div class="titles">',
		'<p class="f14">2&nbsp;选择登录后样式</p>',
		'<p class="f14 offset_right">登录后效果预览:</p>',
	'</div>',
	'<div class="load_after">',
		'<form>',
			'<div class="type">',
				'<strong class="sub">样式：</strong>',
				'<p>',
					'<input type="radio" checked="checked" name="a_type" value=0 id="pic_nick" /><label for="pic_nick">用户头像+昵称</label>',
					'<input type="radio" name="a_type" value=1 id="logo_nick" /><label for="logo_nick">logo+昵称</label>',
					'<input type="radio" name="a_type" value=2 id="nick" /><label for="nick">昵称</label>',
				'</p>',
			'</div>',
		'</form>',
		'<div class="a_img_container">',
			'<div class="a_img_show"></div>',
		'</div>',
	'</div>',
'</div>',
'<!--{*',
'<h2 class="comp_sub_tit">配置Appkey</h2>',
'<p class="intro">使用腾讯微博账号登录，网站需首先进行申请，获得对应的appID与appKey，以保证后续流程中可正确对网站与用户进行验证与授权。申请创建应用或使用下方的申请网站合作</p>',
'<form class="appform comp_site_form">',
	'<ul>',
		'<li><label class="form_label">网站名称： </label>',
			'<span class="form_input"><input type="text" value="" name="comp_name" id="comp_name" maxlength="16" data-rule="compname" data-error="网站名称"/></span>',
			'<cite class="gray inputdes">该名称用于显示来源 <a href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F" target="_blank" class="icon_help" title="提交应用来源字段审核能得到什么好处？"></a></cite>',
		'</li>',
		'<li><label class="form_label">网站地址： </label>',
			'<span class="form_input"><input type="text" value="" name="comp_url" id="comp_url" data-rule="link" data-error="网站地址"/></span>',
			'<cite class="gray inputdes">用户通过该链接地址访问你的网站</cite>',
		'</li>', 
	'</ul>',
'</form>*}-->',
].join("");

function formSubmit(){
	if($("#showcode").attr("disabled")){return;}
	var paras={
		'comp_type':8,//组件类型 1、'一键分享',2'批量收听',3'话题墙',4'Q-Share',5'心情板',8'微博登录'
		'comp_style':'{\"b_type\":\"' + $("input[name='b_type']:checked").val()+'\", \"b_size\":\"' + $("input[name='size']:checked").val() +'\", \"a_type\":\"' + $("input[name='a_type']:checked").val() +'\"}'
	};

    comp && comp.comp_id && (paras["comp_id"]=comp.comp_id);

	if($('#comp_url').size() && $('#comp_name').size()){
		paras['comp_url'] = encodeURIComponent($('#comp_url').val());
		paras['comp_name'] = encodeURIComponent($('#comp_name').val());
	}
	$('#showcode').attr('disabled','disabled');
	$.ajax({'type' : 'post',
		'url':'/pipes/interfaceserver?action=common_query&business_type=ajax_compadd&t=' + new Date().getTime(),
		'data':paras,
		'dataType':'json',
		'success' : function(d){
			var ret =+ (d.ret), msg = common.getMsgByRet(ret);
			if(msg){
				loginWin.alert('<center>'+msg+'</center>');
				return;
			}
			if(ret === 0 && d.data && d.data.id){
				location.href='/development/compinfo?comp_id='+d.data.id;
			}else{
				loginWin.alert({
					'title':'获取代码失败！',
					'width':450,
					'text':'<center>'+(d.msg||'服务器失败')+'</center>'
				});
			}
			$('#showcode').removeAttr('disabled');
		},
		'error' : function(d){
			loginWin.alert({
					'title':'获取代码失败！',
					'width':340,
					'text':'<center>连接服务器失败</center>'
				});
			$('#showcode').removeAttr('disabled');
		}
	});
}
function normalValidate(){
   	$("#comp_name").trigger("blur");
}
var comp_type=8;

