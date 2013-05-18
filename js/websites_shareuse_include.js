;(function(){
	QosSS.t[2]= (new Date()).getTime();
	$(this).tpl = $(this).tpl || {};
	var tpl.shareuse_include = [
		'<div class="comp_area">',
			'<div class="sizeshow">',
				'<div id="reshow"><a href="javascript:;" class="tmblog"><img id="imgbot" src="http://mat1.gtimg.com/app/opent/images/websites/share/b32.png" valign="middle"/></a></div>',
			'</div>',
			'<div class="p1">',
			'<div class="sizeselect">',
				'<h3>样式设置<%if !comp.comp_id{%><a href="/websites/share?explain=1" target="_self" style="padding-left:10px;font-size:12px;font-weight:normal;">新版</a><%}%></h3>',
			'<p><span class="f14">样式</span> 　　<input type="radio" value="1" name="t1" id="style1" checked="checked" /> <label for="style1">按钮</label> 　　<input type="radio" value="2" name="t1" id="style2"/> <label for="style2">图标</label></p>',
			'<p><span class="f14">大小</span> 　　<input type="radio" value="1" name="size" checked="checked" id="sizea"/> <label for="sizea">大</label> 　　　<input type="radio" value="2" name="size" id="sizeb"/> <label for="sizeb">中</label>　　 <input type="radio" value="3" name="size" id="sizec"/> <label for="sizec">小</label></p>',
			'<p id="replytext" style="display:none;"><label>按钮文字</label><span class="form_input"><input type="text" size="20" name="reply_text" id="reply_text" value="转播到腾讯微博"/></span></p>',
			'</div>',
			'</div>',
		'<div class="p1">',
		'<h3>是否同步添加Q-Share功能 <input type="checkbox" name="qshareable" id="qshareable" value="qshare" checked/> <label for="qshareable">同步添加Q-Share功能</label></h3>',
		'<div id="qshare_style">',
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
		'</div>',
		'</div>',
		'</div>',
		'<div style="display:none;">',
		'<textarea id="code00"><!--{ include file="websites/share/share_full.txt" }--></textarea>',
		'<textarea id="code01"><!--{ include file="websites/share/share_simple.txt" }--></textarea>',
		'<textarea id="code10"><!--{ include file="websites/share/qshare_full.txt" }--></textarea>',
		'<textarea id="code11"><!--{ include file="websites/share/qshare_simple.txt" }--></textarea>',
		'<textarea id="scripts"></textarea>',
		'</div>',
		'<script>',
		'var appkey="",shareid="share_btn_"+(new Date().getTime());',
		'var _botImg="<a href="javascript:void(0)" class="tmblog" id=""+shareid+""><img src="http://mat1.gtimg.com/app/opent/images/websites/share/b32.png"></a>";',
		'function bico(){',
		'var _img,x=parseInt($("input[name=t1]:checked").val()),y=parseInt($("input[name=size]:checked").val()),z=$("#qshareable").is(":checked")?"":" onclick=\"postToWb();\"";',
		'if(x ==1){',
		'$("#replytext").hide();',
			'_img = "<a href="javascript:;" class="tmblog" id=""+shareid+"""+z+" hidefocus><img src="http://mat1.gtimg.com/app/opent/images/websites/share/b"+[32,32,24,16][y]+".png" border="0" alt="分享到腾讯微博" valign="middle"></a>"; ',
		'}else{',
		'$("#replytext").show(); ',
		'var _txt = " "+$("#reply_text").val();',
			'_img = "<a href="javascript:;" style="font-size:"+[14,18,14,12][y]+"px;" id=""+shareid+"""+z+" hidefocus><img src="http://mat1.gtimg.com/app/opent/images/websites/share/weiboicon"+[32,32,24,16][y]+".png" valign="middle" border="0" alt=""+_txt+"" />"+_txt+"</a>";',
		'}',
		'return $("#reshow").html(_img)&&_img;',
		'}',
		'<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/comp_validate.js?20120515"></script>',
	].join("");

	var appkey='',shareid="share_btn_"+(new Date().getTime());
	var _botImg='<a href="javascript:void(0)" class="tmblog" id="'+shareid+'"><img src="http://mat1.gtimg.com/app/opent/images/websites/share/b32.png"></a>';
	function bico(){
	    var _img,x=parseInt($('input[name=t1]:checked').val()),y=parseInt($('input[name=size]:checked').val()),z=$("#qshareable").is(":checked")?"":" onclick=\"postToWb();\"";
	    if(x ==1){
	        $("#replytext").hide();
	        	_img = '<a href="javascript:;" class="tmblog" id="'+shareid+'"'+z+' hidefocus><img src="http://mat1.gtimg.com/app/opent/images/websites/share/b'+[32,32,24,16][y]+'.png" border="0" alt="分享到腾讯微博" valign="middle"></a>'; 
	    }else{
	        $("#replytext").show(); 
	        var _txt = " "+$("#reply_text").val();
	        	_img = '<a href="javascript:;" style="font-size:'+[14,18,14,12][y]+'px;" id="'+shareid+'"'+z+' hidefocus><img src="http://mat1.gtimg.com/app/opent/images/websites/share/weiboicon'+[32,32,24,16][y]+'.png" valign="middle" border="0" alt="'+_txt+'" />'+_txt+'</a>';
	    }
	    return $('#reshow').html(_img)&&_img;
	}

	function checkappkey(appkey){
	    	return /(^\d{9}$)|(^[0-9a-z]{32}$)/.test(appkey);
	}

	function doscript(){
		var _img=bico(),
		qshareable=$("#qshareable").is(":checked"), //是否绑定Q-Share
		compresscode=$("#compresscode").is(":checked"),//是否压缩代码
		appkey = ($("#theKey").val()||"801000271").replace(/\s/g,""),
		codestr=$("#code"+(qshareable+0)+(compresscode+0)).val();
		if (!checkappkey(appkey)){
	    	$('#scripts').val("请输入正确appkey。");
	    	return;
		}else{
	    	codestr=codestr.replace("$assname$",$("#assname").val())
	    				   .replace("$appkey$",appkey)
	    				   .replace("$share_btn$",shareid);
	    	if (qshareable){
	    		codestr=codestr.replace("$css$",$("#qshare_style").find("input[type='radio']:checked").val());
	    	}
	    	$('#scripts').val(_img+"\n\n<script>\n"+codestr+"\n<\/script>"); 
		} 
	}
	 
	$(function(){
	    $("#reply_text").keyup(function(){
	        var _txt=$(this).val();
	        $("#reshow").find("a").html(_txt);
	        doscript();
	    });
	    
	    $('#theKey,#assname').keyup(function(){
	        doscript();
	    });
	    $('.explain h3').toggle(function(){
	        $(this).next().show();  
	    },function(){
	        $(this).next().hide();  
	    }); 
	    $('.sizeselect input').click(function(){
	    	doscript();
	    });
	    $("#qshareable").click(function(){
	    	if($(this).is(":checked")){
	    	$("#qshare_style").show();
	    	}else{
	    	$("#qshare_style").hide();
	    	}
	    	doscript();
	    });
	    $("#qshare_style input[type='radio'],#compresscode").click(function(){
	    	doscript();
	    });
	    $("#showcode").click(function(){
	    
	    })
	});
	function postToWb(){}

	function formSubmit(){
	if($("#showcode").attr("disabled")){return;}
	var paras={
	    		"comp_type":1, //组件类型 1、'一键分享',2'批量收听',3'话题墙',4'Q-Share',5'心情板'
	    		"action":common_query,
	    		"business_type":"ajax_compadd",
				"comp_style":"{\"btnstyle\":"+$("input[name='t1']:checked").val()+",\"btnsize\":"+$("input[name='size']:checked").val()+",\"btntext\":\""+$("input[name='reply_text']").val()+"\",\"assname\":\""+$("#assname").val()+"\",\"qshareable\":"+$("input[name='qshareable']").is(":checked")+",\"qsharestyle\":"+$("input[name='qsharebtn']:checked").attr("id").replace("qsharebtn","")+"}"
	    	};
	    	if (comp.comp_id)
	    	paras["comp_id"]=comp.comp_id;
	    	
	    	if ($("#comp_url").size()&&$("#comp_name").size()){
	    		paras["comp_url"]=encodeURIComponent($("#comp_url").val());
	    		paras["comp_name"]=encodeURIComponent($("#comp_name").val());
	    	}
	    	$("#showcode").attr("disabled","disabled");
	    	$.ajax(
	    	{"type":"post",
	    	"url":"/pipes/interfaceserver?t="+ new Date().getTime(),
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
	function normalValidate(){
	    	$("#comp_name").trigger("blur");
	}
    var comp_type=1;
})();
