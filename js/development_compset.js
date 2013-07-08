/*变量初始化*/
global_obj.data.navPos = 7;
if(!window.comp){
	var comp = global_obj.data; 
}
var str = [
	'.hostingclick {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-top:1px solid #d9d9d9;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;font-weight:bold;}',
	'.hosting {cursor:pointer;line-height:25px;padding-left:0.8em;padding-right:0.8em;border-bottom:1px solid #d9d9d9;}',
	'div a#yunJPGClick{display:none}'
	].join("");
	util.createStyle(str);
var development_compsetTmpl = [
tpl.header,
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
                    '<li><a href="/development/compinfo?comp_id=<%=comp.comp_id%>">组件信息</a></li>',
                    '<li><a href="/development/compsite?comp_id=<%=comp.comp_id%>">网站信息</a></li>',
                    '<li class="active"><a href="/development/compset?comp_id=<%=comp.comp_id%>">组件设置</a></li>',
                    '<!--  <li><a href="/development/compdel/222">删除组件</a></li>  -->',
                '</ul>',
            '</div>',
        '</div>',
        
        '<div class="deverRight"> ',
           '<h1 class="comp_tit">组件设置</h1>',
            '<div class="showcode_bar"><a href="javascript:;" class="devSubmit" id="showcode">获取代码</a>  <a href="/development/compinfo?comp_id=<%=comp.comp_id%>" class="devCancel">取消</a></div>',
		'</div>',
	'</div>',
	tpl.footer
].join("\r");

$("#main").append(tmpl(development_compsetTmpl,global_obj.data));

var share_iconindex,share_counterpos,share_showcounter;
function compType1(){
	//'<!--一键分享-->'
	if(comp.comp_style){
		var comp_style = comp.comp_style?comp.comp_style:{"version":2,"iconindex":1,"showcounter":1,"counterpos":"top"};
		var comp_id = comp.comp_id;
		share_iconindex = comp_style.iconindex;
		share_counterpos = comp_style.counterpos;
	    share_showcounter = comp_style.showcounter;
		//<% include file="./websites/share/shareuse_include_new.tpl" %>
		util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/websites_shareuse_include_new.js",function(){
			$(".showcode_bar").before(tmpl(tpl.websites_shareuse_include_new,global_obj.data));
			bindAllEvent();
			$(function(){
				if (comp_style.richable === 0){
					$("#richable").removeAttr("checked");
				}
			});
		});
	}else{
		util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/websites_shareuse_include.js",function(){
			$(".showcode_bar").before(tmpl(tpl.shareuse_include,global_obj.data));
			bindAllEvent();
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
		});
	}
}

function  compType2(){
	<!--收听组件-->
	util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/websites_followcomp_explain_include.js",function(){
		$(".showcode_bar").before(tmpl(tpl.explain_include,global_obj.data));
		//<% include file="./websites/followcomp/explain_include.tpl" %>
		var comp_style = comp.comp_style?comp.comp_style:{"names":"","colorstyle":0,"customcolor":"#fff","iconsize":0};
		eventBindFuncList.push(function(){	
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
		});
	});
}

function compType3(){
	<!--话题墙-->
	util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/websites_wall_explain_include.js",function(){
		$(".showcode_bar").before(tmpl(tpl.websites_wall_explain_include,global_obj.data));
		bindAllEvent();
		//<% include file="./websites/wall/explain_include.tpl" %>
		var comp_style = comp.comp_style?comp.comp_style:{"topicnames":"%E7%BE%8E%E5%A5%B3,%E6%B8%94%E6%B0%B4%E4%B9%8B%E6%AC%A2,%E7%A6%8F%E5%88%A9","width":300,"height":550,"autowidth":true,"colorstyle":1,"defaultcolorstyle":-1,"customcolor":"B9FF40_FFF0D1_6A437A_63FFBC_91FFCF_54FF82","imgshow":0,"postpos":0};
		var comp_id = comp.comp_id;
		eventBindFuncList.push(function(){
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
	});
}
function compType4(){
	//<!--Q-Share-->
	util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/websites_qshare_explain_include.js",function(){
		$(".showcode_bar").before(tmpl(tpl.qshare_explain_include,global_obj.data));
		bindAllEvent();
		//<% include file="./websites/qshare/qshare_explain_include.tpl" %>
		$(function(){
			var comp_style = comp.comp_style?comp.comp_style:{"assname":"","qsharestyle":0};
			var comp_id = comp.comp_id;
			$("#assname").val(comp_style.assname||"");
			$("#qsharebtn"+(comp_style.qsharestyle||0)).attr("checked","checked");
		})
	});
}

function compType5(){
	//<!--心情板-->
	util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/websites_mooduse_include.js",function(){
		$(".showcode_bar").before(tmpl(tpl.mooduse_include,global_obj.data));
		//<% include file="./websites/mood/mooduse_include.tpl" %>
		var comp_style = comp.comp_style?comp.comp_style:{"assname":"api_weibo","width":300,"height":"108","autowidth":true,"autoheight":true};
		var comp_id = comp.comp_id;
		$("#assname").val(comp_style.assname||"");
		$("#width").val(comp_style["width"]||300);
		$("#height").val(comp_style["height"]||108);
		if (comp_style.autowidth){
			$("#autowidth").attr("checked","checked");
			$('#width').attr("disabled", "true");
		}else{
			$("#autowidth").removeAttr("checked");
		}
		if (comp_style.autoheight){
			$("#autoheight").attr("checked","checked");
			$('#height').attr("disabled", "true");
		}else{
			$("#autoheight").removeAttr("checked");
		}
		if (window.refreshUrl){
			refreshUrl();
		}
	});
}

function compType6(){
	<!--微评论-->
	util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/websites_comment_explain_include.js",function(){
		$(".showcode_bar").before(tmpl(tpl.explain_include,global_obj.data));
		bindAllEvent();
		//<% include file="./websites/comment/explain_include.tpl" %
		var comp_style = comp.comp_style?comp.comp_style:{"width":300,"height":550,"autowidth":true,"colorstyle":1,"defaultcolorstyle":-1,"customcolor":"white_white_white_white"};
		var comp_id = comp.comp_id;
		eventBindFuncList.push(function(){
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
	util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/websites_login_loginuse_include.js",function(){
		$(".showcode_bar").before(tmpl(tpl.loginuse_include,global_obj.data));
		bindAllEvent();	
	});
}

function compType9(){
		var comp_style = comp.comp_style?comp.comp_style:{"appkey":"801351684","theme":1,"nobg":0,"ModuleConfigure":{"PubModule":1,"TabModule":1,"TimelineModule":1,"TitleModule":1},"TimelineDetail":{"HeadStyle":1,"PageStyle":0,"PicStyle":0,"TwitterNum":20},"PubModuleConfigure":{"InitialContent":"#阅读墙测试# 说点什么吧","InsertFunction":[0,1,2],"SourceUrl":"http://mat1.gtimg.com/app/tmp/read.html","position":0},"TitleModuleConfigure":{"OfficialAccount":"api_weibo"},"TimelineModuleConfigure":[{"Condition":["阅读墙测试1","API接口意","AP接口问题","NOKIA925 超乎所见 震撼上市","分享视频"],"ConditionType":1,"ContentType":0,"Famous":0,"MessageType":0,"Name":"最热话题","SortType":1},{"Condition":["阅读墙","esdfsdf"],"ConditionType":0,"ContentType":0,"Famous":0,"MessageType":0,"Name":"热门搜索","SortType":1}]};
	var getPreview = function(){
		util.createScript("http://mat1.gtimg.com/app/vt/js/read/import.js",function(){
			$("#readShow").html("<iframe frameborder=\"0\" scrolling=\"no\" src=\"about:blank\" width=\"" + comp_style.width + "\" height=\"" + comp_style.height + "\" allowtransparency=\"true\" id=\""+"frame"+"\"></iframe>");
			window.showTxWbYDQ(document.getElementById("frame"),comp_style,function(d){/*回调函数,d的值格式为：{"action":"发表","ret":0,"errcode":0,"msg":"ok","data":{"id":231174038614579,"time":1371544700}},其中action的值可能为“发表、转播、评论”*/}
		);});
	}();
	<!--阅读墙-->
	util.createScript("http://mat1.gtimg.com/app/opent/rebuild/js/websites_read_explain_include.js",function(){
		util.createStyle("#readView{top: 197px;}.toExtend{margin-left:7px;}.comp_area ul li{margin-left:24px;}.deverRight{min-height:750px;}.deverRight p{margin:0;font-size:12px;}.comp_area{width:340px;}#topView{top:150px;}.timelineList{width:337px;}.addmod{margin-left:7px;}.split-line{margin-right:18px;}");
		$(".showcode_bar").before(tmpl(tpl.websites_read_explain_include,global_obj.data));
		bindAllEvent();
		eventBindFuncList.push(function(){
	var comp_style = {};

	if(window.comp && comp.comp_style) {
		comp_style = comp.comp_style;
	/*	comp_style.PubModuleConfigure.InitialContent = decodeURIComponent(comp_style.PubModuleConfigure.InitialContent);
		comp_style.PubModuleConfigure.SourceUrl = decodeURIComponent(comp_style.PubModuleConfigure.SourceUrl);
			
		var arr = comp_style.TimelineModuleConfigure;
		for(var j in arr) {
			for(var i in arr[j].Condition) {
				console.log(i,j)
				arr[j].Condition[i] = decodeURIComponent(arr[j].Condition[i]);
			}
		}
		
		comp_style.PubModuleConfigure.Name = decodeURIComponent(comp_style.PubModuleConfigure.Name);
		for (var i in comp_style.filter.userIds) {
			comp_style.filter.userIds[i] = decodeURIComponent(comp_style.filter.userIds[i]);
		}

		for (var i in comp_style.filter.keyWords) {
			comp_style.filter.keyWords[i] = decodeURIComponent(comp_style.filter.keyWords[i]);
		}*/
	} else {
		comp_style =  {
		"appkey":comp.comp_id || "801351684",
		"theme":0,
		"nobg":0,
		"ModuleConfigure":{
			"PubModule":1,
			"TabModule":1,
			"TimelineModule":1,
			"TitleModule":1
		},
		"TimelineDetail":{
			"HeadStyle":1,
			"PageStyle":0,
			"PicStyle":0,
			"TwitterNum":20
		},
		"PubModuleConfigure":{
			"InitialContent":"#阅读墙测试# 说点什么吧",
			"InsertFunction":[0,1,2],
			"SourceUrl":"http://mat1.gtimg.com/app/tmp/read.html",
			"position":0
		},
		"TitleModuleConfigure":{
			"OfficialAccount":"api_weibo"
		},
		"TimelineModuleConfigure":[{"Condition":["阅读墙测试1","API接口意见","API接口问题","NOKIA925 超乎所见 震撼上市","分享视频"],"ConditionType":1,"ContentType":0,"Famous":0,"MessageType":0,"Name":"最热话题","SortType":1},{"Condition":["阅读墙","esdfsdf"],"ConditionType":0,"ContentType":0,"Famous":0,"MessageType":0,"Name":"热门搜索","SortType":1}]
		}
	}

	comp_style.appkey = window.comp && comp.comp_id || "801351684";
			
			var form = $('#configboard'),f=form[0];

			$('#configboard input[name=width]').val(comp_style.width);
			$('#configboard input[name=height]').val(comp_style.height);	
			$('#nobg')[0].checked = !!comp_style.nobg;
						
			$('#configboard input[name=theme]')[(comp_style.theme)].checked = true;;
			$('#TitleModule')[0].checked = !!comp_style.ModuleConfigure.TitleModule;
			$('#PubModule')[0].checked = !!comp_style.ModuleConfigure.PubModule;
			$('#TabModule')[0].checked = !!comp_style.ModuleConfigure.TabModule;
			$('#TimelineModule')[0].checked = !!comp_style.ModuleConfigure.TimelineModule;
			$('#configboard input[name=OfficialAccount]').val(comp_style.TitleModuleConfigure.OfficialAccount);
			$('#configboard input[name=position]')[comp_style.PubModuleConfigure.position].checked=true;
						
			for(var i=0;i<3;i++){
				$('#configboard input[name=InsertFunction]')[i].checked = false;
			}
			for(var i in comp_style.PubModuleConfigure.InsertFunction){	
				var j = comp_style.PubModuleConfigure.InsertFunction[i];
				$('#configboard input[name=InsertFunction]')[j].checked = true;
			}
			
			$('#configboard input[name=SourceUrl]').val(comp_style.PubModuleConfigure.SourceUrl);
			$('#configboard input[name=InitialContent]').val(comp_style.PubModuleConfigure.InitialContent);	
			$('#configboard input[name=PageStyle]')[comp_style.TimelineDetail.PageStyle].checked=true;
			
			var twitterNum = [5,10,20,50,80,100];
			for(var i=0;i<6;i++){
				if(comp_style.TimelineDetail.TwitterNum == twitterNum[i]){
					$('option')[i].selected=true;
					break;
				}
			}
			$('#configboard input[name=PicStyle]')[comp_style.TimelineDetail.PicStyle].checked=true;
			$('#configboard input[name=HeadStyle]')[0].checked = !!comp_style.TimelineDetail.HeadStyle;	
			$('#configboard textarea[name=filter]').first().html(comp_style.filter.keyWords.join("\n"));
			$('#configboard textarea[name=filter]').last().html(comp_style.filter.userIds.join("\n"));
			
			var len = comp_style.TimelineModuleConfigure.length;
			var timelineList = $('#timelineList');
				
			for(var i = 0; i < len; i++){
				var arr = comp_style.TimelineModuleConfigure[i];
				var param = {};
				param["Name"] = arr["Name"];
				param["ConditionType"] = arr["ConditionType"];
				param["Condition"] = arr["Condition"].join("\n").replace(/^\s*|\s*$|\t*/g, "").split(/[\s\t]*\n+[\s\t]*/g).slice(0, 5).join("\t");
				param["SortType"] = arr["SortType"];
				param["Famous"] = arr["Famous"];
				param["ContentType"] = arr["ContentType"];
				param["MessageType"] = arr['MessageType'];

				if (param["Name"] && param["Condition"]) {
					li = $('<li></li>').appendTo(timelineList);
					for (var j in param) {
						li.attr(j, param[j]);
					}
					var conditionType = {
						"0": "关键词",
						"1": "话题",
						"2": "多用户",
						"3": "多URL"
					} [param["ConditionType"]];
					li.html(conditionType + ": " + param["Name"] + '</div></div><div><a href="javascript:void(0);" data-action="edit">修改</a> <a href="javascript:void(0);" data-action="del">删除</a></div>');
				} 
			}		
			$("#configboard").find("input").first().trigger("change");
		});
	});
}

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
}else if(comp.comp_type == 9){
	compType9();
}
	

	
//解决IE6下组件设置（微评论）页左侧导航隐藏和效果预览框过长的bug	
setTimeout(function(){
	if($.browser.msie && $.browser.version == "6.0"){
		$(".showcode_bar").css({"margin-bottom":"90px"});
		$(".appsnav").find(".active").css({"zoom":"1"});
	}
},200);
bindAllEvent();

