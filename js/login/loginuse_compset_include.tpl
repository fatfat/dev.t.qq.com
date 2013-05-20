<h2 class="comp_sub_tit">配置微博登录按钮样式</h2>
<div class="style_set">
	<div class="titles">
		<p class="f14">1&nbsp;选择登录前样式</p>
		<p class="f14 offset_right">登录前效果预览:</p>
	</div>
	<div class="load_before">
		<form>
			<div class="type">
				<p class="sub">样式：</p>
				<p><input type="radio" checked="checked" name="b_type" value=0 data="btn"/><label for="btn">按钮</label></p>
				<p><input type="radio" name="b_type" value=1 data="btn_words"/><label for="btn_words">图标+文字</label></p>
				<p><input type="radio" name="b_type" value=2 data="words" /><label for="words">文字</label></p>
			</div>
			<div class="size">
				<p class="sub">大小：</p>
				<p><input type="radio" checked="checked" name="size" value=0 data="230_48" /><label for="230_48">230*48</label></p>
				<p><input type="radio" name="size" value=1 data="170_32" /><label for="170_32">170*32</label></p>
				<p><input type="radio" name="size" value=2 data="120_24" /><label for="120_24">120*24</label></p>
				<p><input type="radio" name="size" value=3 data="105_16" /><label for="105_16">105*16</label></p>
			</div>
		</form>
		<div class="b_img_container">
			<div class="b_img_show"></div>
		</div>
	</div>
	<div class="titles">
		<p class="f14">2&nbsp;选择登录后样式</p>
		<p class="f14 offset_right">登录后效果预览:</p>
	</div>
	<div class="load_after">
		<form>
			<div class="type">
				<p class="sub">样式：</p>
				<p><input type="radio" checked="checked" name="a_type" value=0 data="pic_nick" /><label for="pic_nick">用户头像+昵称</label></p>
				<p><input type="radio" name="a_type" value=1 data="logo_nick" /><label for="logo_nick">logo+昵称</label></p>
				<p><input type="radio" name="a_type" value=2 data="nick" /><label for="nick">昵称</label></p>
			</div>
		</form>
		<div class="a_img_container">
			<div class="a_img_show"></div>
		</div>
	</div>
</div>
<script>
function formSubmit(){
	if($("#showcode").attr("disabled")){return;}
	var paras={
		'comp_type':8,//组件类型 1、'一键分享',2'批量收听',3'话题墙',4'Q-Share',5'心情板',8'微博登录'
		'comp_style':'{"b_type":"' + b_type+'", "b_size":"' + b_size +'", "a_type":"' + a_type +'"}'
	};
	<!--{if $comp.comp_id}-->
        paras["comp_id"]=<!--{$comp.comp_id}-->;
    <!--{/if}-->
	$('#showcode').attr('disabled','disabled');
	$.ajax({'type' : 'post',
		'url':'/development/compadd?t=' + new Date().getTime(),
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
</script>
<script src="http://mat1.gtimg.com/app/opent/js/login_vt.js"></script>
<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/comp_validate.js?20130328"></script>