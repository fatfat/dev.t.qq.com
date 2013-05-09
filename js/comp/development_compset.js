var development_compsetTmpl = [
this.tpl.header,
'<style type="text/css">',
'.hostingclick {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-top:1px solid #d9d9d9;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;font-weight:bold;}',
'.hosting {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-bottom:1px solid #d9d9d9;}',
'div a#yunJPGClick{display:none}',
'</style> ',
	'<div id="content" class="controlCon main main_app">',
        '<div class="approate">',
            '<a href="/development/complist/">我的组件</a> &gt; <span><%=comp.comp_name%></span>',
        '</div>',
        '<div class="deverLeft">',
           ' <div class="leftMain">',
               ' <div class="uicon">﻿<!--用户头像-->',
                    '<img src="http://mat1.gtimg.com/app/opent/images/index/icon.jpg" height="75" width="75" />',
                    '<br>',
                    '<%=comp.comp_name%>',
                '</div>',
                '<ul class="appsnav">',
                    '<li><a href="/development/compinfo/<%=comp.comp_id%>">组件信息</a></li>',
                    '<li><a href="/development/compsite/<%=comp.comp_id%>">网站信息</a></li>',
                    '<li class="active"><a href="/development/compset/<%=comp.comp_id%>">组件设置</a></li>',
                    '<!--  <li><a href="/development/compdel/222">删除组件</a></li>  -->',
                '</ul>',
            '</div>',
        '</div>', 
        
        '<div class="deverRight"> ',
            '<h1 class="comp_tit">组件设置</h1>'
            
].join("\r");

$("#main").append(tmpl(development_compsetTmpl,global_obj.data));


function compType1(){
	//'<!--一键分享-->'
	if(comp.comp_style){
		var comp_style = comp.comp_style?comp.comp_style:{"version":2,"iconindex":1,"showcounter":1,"counterpos":"top"};
		var comp_id = comp.comp_id;
		var share_iconindex = comp_style.iconindex;
		var share_counterpos = comp_style.counterpos;
		var share_showcounter = comp_style.showcounter;
		//<% include file="./websites/share/shareuse_include_new.tpl" %>
		util.createScript("/js/websites/share/shareuse_include_new.js");
		$("#main").append(tmpl(this.tpl.shareuse_include_new,global_obj.data));
		$(function(){
			if (comp_style.richable === 0){
				$("#richable").removeAttr("checked");
			}
		});
	}else{
		util.createScript("/js/websites/share/shareuse_include.js");
		$("#main").append(tmpl(this.tpl.shareuse_include,global_obj.data));
		//<% include file="./websites/share/shareuse_include.tpl" %>
		var comp_style = comp.comp_style?comp.comp_style:{"btnstyle":1,"btnsize":1,"btntext":"分享到腾讯微博","assname":"api_weibo","qshareable":true,"qsharestyle":0};
		var comp_id = comp.comp_id;
		$(function(){
		$("#assname").val(comp_style.assname);
		$("#reply_text").val(comp_style.btntext);
		$("#qsharebtn"+comp_style.qsharestyle).attr("checked","checked");
		$("input[name='t1']").filter("[value="+comp_style.btnstyle+"]").attr("checked","checked").trigger("click");
		$("input[name='size']").filter("[value="+comp_style.btnsize+"]").attr("checked","checked").trigger("click");
		if (comp_style.btnstyle==2){
			$("#replytext").show();
		}
		if (comp_style.qshareable){
			$("#qshareable").attr("checked","checked");
		}else{
			$("#qshareable").removeAttr("checked");
			$("#qshare_style").hide();
		}	
		});
	}
}

function  compType2(){
	<!--收听组件-->
	util.createScript("/js/websites/share/explain_include.js");
	$("#main").append(tmpl(this.tpl.explain_include,global_obj.data));
	//<% include file="./websites/followcomp/explain_include.tpl" %>
	var comp_style = comp.comp_style?comp.comp_style:{"names":"","colorstyle":0,"customcolor":"#fff","iconsize":0};
	var comp_id = comp.comp_id;
	if (comp_style.followtype === 0) { // 快速收听
		$(function () {
			if (comp_style.displayfolloweramount) {
				$("#typelist0").attr("checked","checked");
			} else {
				$("#typelist0").attr("checked","");
			}
			$("input[name=types]").filter("[value="+comp_style.displaystyle+"]").trigger("click").trigger("change");
		});
	} else {
		// 批量收听定制页参数初始化
		$(function(){
			$("input[name=followtype]").filter("[value=1]").trigger("click").trigger("change");
			$(".namelist").html(comp_style.names.replace(/([^,]+),?/g,"<li class=\"name_con\" onmouseover=\"listOver(this)\" onmouseout=\"listOut(this)\"><a href=\"javascript:;\" onclick=\"removeName(this)\"></a><span>$1</span></li>"));
			$("input[name='color']").filter("[value="+comp_style.colorstyle+"]").attr("checked","checked");
			$("input[name='iconsize']").filter("[value="+comp_style.iconsize+"]").attr("checked","checked");
			$("#color_bg").val(comp_style.customcolor);
			if (comp_style.colorstyle==1){
			$("#customcolor").show();
			}
			showDemo();
		});
	}
}

function compType3(){
	<!--话题墙-->
	util.createScript("/js/websites/wall/explain_include.js");
	$("#main").append(tmpl(this.tpl.explain_include,global_obj.data));
	//<% include file="./websites/wall/explain_include.tpl" %>
	var comp_style = comp.comp_style?comp.comp_style:{"topicnames":"%E7%BE%8E%E5%A5%B3,%E6%B8%94%E6%B0%B4%E4%B9%8B%E6%AC%A2,%E7%A6%8F%E5%88%A9","width":300,"height":550,"autowidth":true,"colorstyle":1,"defaultcolorstyle":-1,"customcolor":"B9FF40_FFF0D1_6A437A_63FFBC_91FFCF_54FF82","imgshow":0,"postpos":0};
	var comp_id = comp.comp_id;
	$(function(){
		var topicnames=comp_style.topicnames.split(","),originurl=comp_style.wburl || "",wbname=comp_style.wbname || "",customcolor=comp_style.customcolor.split("_");
		for(var i in topicnames){
		$("input[name='topicname']:eq("+i+")").val(decodeURIComponent(topicnames[i]));
		}
		$("input[name='originurl']").val(decodeURIComponent(originurl));
		$("input[name='wbname']").val(decodeURIComponent(wbname));
		for(var i in customcolor){
		$("#customcolor").find("input:eq("+i+")").val("#"+customcolor[i]);
		}
		$("#width").val(comp_style["width"]);
		$("#height").val(comp_style["height"]);
		if(comp_style.autowidth){
		$("#autowidth").attr("checked",comp_style.autowidth);
		$("#width").attr("disabled","disabled");
		}else{
		$("#autowidth").removeAttr("checked");
		}
		$("input[name='color']").filter("[value="+comp_style.colorstyle+"]").attr("checked","checked");
		$("#colorList").find("li").removeClass("s").eq(comp_style.defaultcolorstyle).addClass("s");
		$("input[name='imgshow']").filter("[value="+comp_style.imgshow+"]")/*.attr("checked","checked")*/.trigger("click");
		$("input[name='post']").filter("[value="+comp_style.postpos+"]")/*.attr("checked","checked")*/.trigger("click");
		if (comp_style.colorstyle==1){
		$("#colorList").hide();
		$("#customcolor").show();
		}else{
		$("#colorList").show();
		$("#customcolor").hide();
		}/*
		if (window.crUrl){
		crUrl(false);
		}*/
		//showDemo();
	});
}
function compType4(){
	//<!--Q-Share-->
	
	util.createScript("/js/websites/qshare/qshare_explain_include.js");
	$("#main").append(tmpl(this.tpl.qshare_explain_include,global_obj.data));
	//<% include file="./websites/qshare/qshare_explain_include.tpl" %>
	var comp_style = comp.comp_style?comp.comp_style:{"assname":"","qsharestyle":0};
	var comp_id = comp.comp_id;
	$("#assname").val(comp_style.assname||"");
	$("#qsharebtn"+(comp_style.qsharestyle||0)).attr("checked","checked");
}

function compType5(){
	//<!--心情板-->
	util.createScript("/js/websites/mood/mooduse_include.js");
	$("#main").append(tmpl(this.tpl.mooduse_include,global_obj.data));
	//<% include file="./websites/mood/mooduse_include.tpl" %>
	var comp_style = comp.comp_style?comp.comp_style:{"assname":"api_weibo","width":300,"height":"108","autowidth":true,"autoheight":true};
	var comp_id = comp.comp_id;
	$("#assname").val(comp_style.assname||"");
	$("#width").val(comp_style["width"]||300);
	$("#height").val(comp_style["height"]||108);
	if (comp_style.autowidth){
		$("#autowidth").attr("checked","checked");
	}else{
		$("#autowidth").removeAttr("checked");
	}
	if (comp_style.autoheight){
		$("#autoheight").attr("checked","checked");
	}else{
		$("#autoheight").removeAttr("checked");
	}
	if (window.refreshUrl){
		refreshUrl();
	}
}

function compType6(){
	<!--微评论-->
	util.createScript("/js/websites/comment/explain_include.js");
	$("#main").append(tmpl(this.tpl.explain_include,global_obj.data));
	//<% include file="./websites/comment/explain_include.tpl" %
	var comp_style = comp.comp_style?comp.comp_style:{"width":300,"height":550,"autowidth":true,"colorstyle":1,"defaultcolorstyle":-1,"customcolor":"white_white_white_white"};
	var comp_id = comp.comp_id;
	$(function(){
		var customcolor=decodeURIComponent(comp_style.customcolor).split("_");
		for(var i in customcolor){
			$("#customcolor").find("input:eq("+i+")").val("#"+customcolor[i]);
		}
		$("#account").val(comp_style.account||"");
		$("#pnum").val(comp_style.pnum||"");
		$("#width").val(comp_style["width"]);
		$("#height").val(comp_style["height"]);
		if(comp_style.autowidth){
			$("#autowidth").attr("checked",comp_style.autowidth);
			$("#width").attr("disabled","disabled");
		}else{
			$("#autowidth").removeAttr("checked");
		}
		$("input[name='color']").filter("[value="+comp_style.colorstyle+"]").attr("checked","checked");
		$("#colorList").find("li").removeClass("s").eq(comp_style.defaultcolorstyle).addClass("s");
		if (comp_style.colorstyle==1){
			$("#colorList").hide();
			$("#customcolor").show();
			$('#autocolor').show();
		}else{
			$("#colorList").show();
			$("#customcolor").hide();
		}
		crUrl(comp_style);
	
	});
}
function compType8(){
	<!--微评论-->
	var comp_style = comp.comp_style?comp.comp_style:{"b_type":"0", "b_size":"0", "a_type":"0"};
	var comp_id = comp.comp_id;
	var getpreview = function(){
		var imgurl = "http://mat1.gtimg.com/app/opent/images/websites/login/login_icon_"+[[1,2,3,4][+comp_style.b_size],5,6][+comp_style.b_type]+".png";
		return '<img src="' + imgurl +'"/>';
	};
	//<% include file="./websites/login/loginuse_include.tpl" %>
	util.createScript("/js/websites/login/loginuse_include.js");
	$("#main").append(tmpl(this.tpl.loginuse_include,global_obj.data));	
}

window.onload = function(){//解决IE6下组件设置（微评论）页左侧导航隐藏和效果预览框过长的bug
	if(comp.comp_type == 1){
		compType1();
	}else if(comp.comp_type == 2){
		compType2();
	}else if (comp.comp_type == 3){
		compType3();
	}else if(comp.comp_type == 4 ){
		compType4();
	}else if (comp.comp_type == 5 ){
		compType5();
	}else if(comp.comp_type == 6){
		compType6();
	}else if(comp.comp_type == 8){
		compType8();
	}
	var t = [
		'<div class="showcode_bar"><a href="javascript:;" class="devSubmit" id="showcode">获取代码</a>  <a href="/development/compinfo/<%=comp.comp_id%>" class="devCancel">取消</a></div>',
			'</div>',
		'</div>',
		this.tpl.footer
	].join("");

	$(document.body).append(t);
	if($.browser.msie && $.browser.version == "6.0"){
		$(".showcode_bar").css({"margin-bottom":"90px"});
		$(".appsnav").find(".active").css({"zoom":"1"});
	}
}


