var str = [
	'.form_label{width:90px;}',
	'.appform .form_input{margin-left:90px;}',
	'.appform .form_img{margin-left:90px;border-radius: 3px;border: 3px solid #E2E9EF;display: inline-block;line-height: 0;overflow:hidden;}',
	'.appform .form_button {margin-left:90px;}'
].join('');
util.createStyle(str);
this.tpl = this.tpl || {};
tpl.development_noticeapply = [
//	'<!--{ include file="header.tpl" }-->',
	tpl.header,
	'<div id="content" class="controlCon main main_app">',
		'<div class="approate"><a href="/development/">我的应用</a> &gt; <span><%=app.app_name%></span>',
		'</div>',
		'<div class="deverLeft">',
			'<div class="leftMain">',
				'<div class="uicon"><img src="<%=app.app_icon_75 || "http://mat1.gtimg.com/app/opent/images/index/icon.jpg"%>"',
					'height="75" width="75" /><br />',
				'<p><%=app.app_name%></p>',
				'</div>',

			'<!--{ include file="./development/appnav.tpl" }-->',
			tpl.appnav,
			'</div>',
		'</div>',
		
		'<div class="deverRight">',
		'<h1 class="comp_tit">接入通知系统</h1>',
		
	'<form class="appform" style="margin-top:20px;">',

	'<ul>',
		'<li><label class="form_label">通知发送帐号： </label>',
			'<span class="form_input"><input type="text" value="" name="notice_account" id="notice_account" data-rule="appweibo" data-error="通知发送帐号"/></span>',
			'<cite class="gray inputdes">该帐号必须与应用相关，且必须是认证帐号 &nbsp;<a href="http://t.qq.com/certification" target="_blank">现在去认证</a></cite>',
		'</li>',
		'<li><label class="form_label">效果预览： </label>',
		'<div class="form_img" id="appPreview">',
			'<img id ="nullimg" class="nulimg" src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" width="560" height="110"/>',
		'</div>',
		'</li>',
		'<li><label class="form_label">&nbsp;</label>',
			'<div class="form_button">',
				'<input type="submit" class="devSubmit" id="noticeSubmit" value="提交申请">',
				'<input type="reset" class="devCancel" value="以后再说" onclick="javascript:{window.location.href="/development/notice?appid=<%=app.app_id%>"}">',
			'</div>',
		'</li>',
	'</ul>',
	'</form>',
	'</div>',
	'</div>',

	'<!--{ include file="footer.tpl" }-->',
	tpl.footer
].join("");
$('#main').html(tmpl(tpl.development_noticeapply,global_obj.data));
$(function(){
//	global_obj.init.appnav();
	bindAllEvent();
	//帐号未通过审核——重新提交申请
	var notice_check_status=global_obj.data.app.notice_check_status,notice_bdaction=global_obj.data.app.notice_bdaction;
	if(notice_check_status=="1" || notice_bdaction=="3")
	{
		var notice_account= "app.notice_account";
		var	text =$("#notice_account");
		text.val(notice_account);
		
		text.attr("data-only",true);//已经验证过帐号
		var errmsg = text.attr("data-error");//提示信息
		showmsg(true,text,errmsg);
		var app = global_obj.data.app;
		getPreview(app.notice_head,app.notice_nick,app.notice_type);
	}
});

//效果预览
function getPreview(head,nick,notice_type){
	var previewhtml="<div class='preview'><dl><dt><a><img src='";
   	var imgSrc=head+"/50";
    
    previewhtml+=imgSrc+"' height='50' width='50'></a></dt>"
    		   +"<dd><h3><a>"+nick+"</a><a title='腾讯机构认证' class='";
    if(notice_type==1){
    	previewhtml+="evip";
    }else if(notice_type==0){
    	previewhtml+="vip";
    }
    previewhtml+="'></a>"+"<a class='gray'>:</a></h3><p>亲，你很久没来【"+global_obj.data.app.app_name+"】了，我们又推出新功能啦，不要犹豫了，快来体验吧！"
    		   +"<a href='http://url.cn/ouzlnc' target='_blank'>http://url.cn/ouzlnc</a></p><p class='time'>"+"app.notice_date"+"</p></dd></dl></div>";
	$("#appPreview").html(previewhtml);
}

//取消效果预览
function　removePreview(){
		$("#appPreview").html("<img id ='nullimg' class='nulimg' src='http://mat1.gtimg.com/app/opent/images/websites/0.gif' width='560' height='110'/>");
}

function formSubmit(){
	if($("#noticeSubmit").attr("disabled")){return;}
	var notice_status="app.notice_status";
	if(notice_status=="0"){
		loginWin.alert("<center>当前应用禁止提交接入申请。</center>");
		return false;
	}
			
    var paras={
    			"action":"common_query"
    			,"business_type":"ajax_noticecheck"
        		,"appid"  : global_obj.data.app.app_id
				,"notice_account" :$("#notice_account").val()
        	};
        
        	$("#noticeSubmit").attr("disabled","disabled");
        	
        	$.ajax(
        	{"type":"post",
        	"url":"/pipes/interfaceserver?t="+new Date().getTime(),
        	"data":paras,
        	"dataType":"json",
        	"success":function(d){
        			var ret = +(d.ret),msg = common.getMsgByRet(ret);
        			if (msg){
        				loginWin.alert("<center>"+msg+"</center>");
        				return;
        			}
        		    if (ret === 0){
        		    	loginWin.alert({
				    	"title":"提交申请成功！",
				    	"width":450,
				    	"text":"<center>提交申请成功</center>"
				    	},function(){
				    		location.href="/development/notice?appid="+global_obj.data.app.app_id;	
				    	});	
				    
			   		}else{
				   		loginWin.alert({
				    	"title":"提交申请失败！",
				    	"width":450,
				    	"text":"<center>"+(d.msg||"服务器失败")+"</center>"
				    	});
			   		}
			   		$("#noticeSubmit").removeAttr("disabled");
        	},
        	"error":function(d){
        		loginWin.alert({
    				    	"title":"提交申请失败！",
    				    	"width":340,
    				    	"text":"<center>连接服务器失败</center>"
    				    	});
    			$("#noticeSubmit").removeAttr("disabled");
        	}
        	});
    }
	this.util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/notice_validate.js");
	
