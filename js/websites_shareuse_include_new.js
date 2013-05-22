var comp_type=1;
this.tpl = this.tpl || {};
this.tpl.websites_shareuse_include_new = [
	'<h2 class="comp_sub_tit">Rich化功能</h2>',
	//'<!--{if !$comp.comp_id}--><!--{*<a href="?explain=1&compat=1" target="_self" class="none">旧版</a>*}--><!--{/if}-->',
	'<div class="p1">',
		'&nbsp; <input type="checkbox" id="richable" name="richable" checked/>',
		'<label for="richable">启用Rich化功能</label> ',
		'<a class="valign" href="http://wiki.open.t.qq.com/index.php/%E4%B8%80%E9%94%AE%E8%BD%AC%E6%92%ADrich%E5%8C%96%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3" target="_blank">什么是Rich化功能？</a>',
	'</div>',
	'<h2 class="comp_sub_tit">样式设置</h2>',
	'<div class="p1">',
		'<div>',
			'&nbsp; <input type="checkbox" name="showcounter" id="showcounter" checked/> <label for="showcounter">显示已分享次数</label>',
			//'<!--{*',
			//'<input type="checkbox" name="qshareable" id="qshareable" checked style="margin-left:40px;"/> <label for="qshareable">同步添加Q-Share功能</label>',
			//'<a href="" target="_blank" class="valign">什么是Q-Share功能？</a>',
			//'*}-->',
		'</div>',
		'<div class="icon_selector" style="display:none;">',
			'<a href="#" data-iconindex="1" data-counter-pos="top" hidefocus><div class="share_icon" style="background-position:-8px -8px;width:60px;height:55px;margin-top:5px;margin-left:33px;"></div></a>',
			'<a href="#" data-iconindex="1" data-counter-pos="right" hidefocus><div class="share_icon" style="background-position:-87px -33px;width:112px;height:24px;margin-top:36px;margin-left:7px;"></div></a>',
			'<a href="#" data-iconindex="0" data-counter-pos="top" hidefocus><div class="share_icon" style="background-position:-231px -12px;width:46px;height:62px;margin-top:5px;margin-left:40px;"></div></a>',
			'<a href="#" data-iconindex="0" data-counter-pos="right" hidefocus><div class="share_icon" style="background-position:-301px -24px;width:87px;height:32px;margin-top:33px;margin-left:21px;"></div></a>',
			'<a href="#" data-iconindex="2" data-custom-icon="1" hidefocus><div class="share_icon" style="background-position:-350px -24px;width:16px;height:16px;margin-top:30px;margin-left:56px;"></div></a>',
		'</div>',
	'</div>',
	'<div style="clear:left;"></div>',
].join("");

util.createScript(["http://mat1.gtimg.com/app/opent/js/rebuild/share.js","http://mat1.gtimg.com/app/opent/js/rebuild/comp_validate.js"],function(){
	bindAllEvent();
});

function formSubmit() {
	if ($("#showcode").attr("disabled")) {
		return;
	}
	var version = [1, 2][ + $("#showcounter").is(":checked")],
	//一键分享代码版本,1 - 普通版 2 - 显示分享次数
	richable = +$("#richable").is(":checked"),
	paras = {
		"comp_type": 1,
		//组件类型 1、'一键分享',2'批量收听',3'话题墙',4'Q-Share',5'心情板'
		"comp_style": "{\"version\":" + 2 + ",\"iconindex\":\"" + share_iconindex + "\",\"showcounter\":" + share_showcounter + ",\"counterpos\":\"" + share_counterpos + "\",\"richable\":" + richable + "}"
	};
/*	if (comp.comp_id) {
		paras["comp_id"] = comp.comp_id;
	}*/
	if ($("#comp_url").size() && $("#comp_name").size()) {
		paras["comp_url"] = encodeURIComponent($("#comp_url").val());
		paras["comp_name"] = encodeURIComponent($("#comp_name").val());
	}
	if(window.comp){
		paras["comp_id"] = comp.comp_id;
	}
	$("#showcode").attr("disabled", "disabled");
	$.ajax({
		"type": "post",
		"url": "/pipes/interfaceserver?action=common_query&business_type=ajax_compadd&t=" + new Date().getTime(),
		"data": paras,
		"dataType": "json",
		"success": function(d) {
			var ret = +(d.ret),
			msg = common.getMsgByRet(ret);
			if (msg) {
				loginWin.alert("<center>" + msg + "</center>");
				return;
			}
			if (ret === 0 && d.data && d.data.id) {
				location.href = '/development/compinfo?comp_id=' + d.data.id;
			} else {
				loginWin.alert({
					"title": "获取代码失败！",
					"width": 450,
					"text": "<center>" + (d.msg || "服务器失败") + "</center>"
				});
			}
			$("#showcode").removeAttr("disabled");
		},
		"error": function(d) {
			loginWin.alert({
				"title": "获取代码失败！",
				"width": 340,
				"text": "<center>连接服务器失败</center>"
			});
			$("#showcode").removeAttr("disabled");
		}
	});
}
function normalValidate() {
	$("#comp_name").trigger("blur");
}


