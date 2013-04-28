//	global_obj.data.page_no = 11;
//	data.data.navPos = '7';
//	global_obj.data.app_count = 194;
//	var page_no = global_obj.data.page_no + 1; //页码
if (!hdlogin)
{
	$('#main').html(tmpl(this.tpl.login,global_obj.data));
} else {
	var page_count = Math.ceil(global_obj.data.app_count/global_obj.data.page_size);  //页数
	var kpage_count = Math.ceil(global_obj.data.kapp_count/global_obj.data.page_size);  //页数
	if((page_count?page_count:1) < global_obj.data.page_no || (kpage_count?kpage_count:1) < global_obj.data.kpage_no){    //当前页码不能超过总页数
		alert("warning:The page_no excceeds the total page counts");
	}
	var pageBar 

	var cpage_no = global_obj.data.page_no;
	var cpage_count = page_count;
	var capp_count = global_obj.data.app_count;
	var str = [
		'.dotted{display:block;float:left;color:#346496;line-height:18px;}',
	].join("");
	this.util.createStyle(str);
	this.tpl = this.tpl || {};
	this.tpl.development_list_comps = [
		'<div  id="applist" class="applist">',
		'<ul class="applist" id="applistul">',
			'<%if(comps.length>0&&comp_count>0){%>',
				'<%for(var i=0;i<comps.length;i++){%>',
				'<%var comp = comps[i];%>',
				'<li>',
					'<dl>',
					'<dt><a href="/development/compinfo?compid=<%=comp.comp_id%>"><%=comp.comp_name%></a></dt>',
					'<dd class="applistdd"><span>组件类型：</span><label><%=comp.compType%></label></dd>',
					'<dd><span>接口权限：</span><label><%=comp.compLevel%>权限</label></dd>',
					'<dd><span>来源显示：</span><label><%=comp.compSource_status%></label></dd>',
					'<dd><span>组件状态：</span><label><%=comp.compStatus%></label></dd>',
					'</dl>',
					'<div align="right">',
						'<%if(comp.comp_type!=7){%><a href="/development/compset?compid=<%=comp.comp_id%>">编辑</a> / <%}%>',
						'<a href="/development/compinfo?compid=<%=comp.comp_id%>">查看</a></div>',
				'</li>',
			'<%}%>',
			'</ul>',
			//'<div id="pagebar"><%=pagelist%></div>',
			'<%}else{%>'  , 
				'<ul class="applist">',
					'<li>你还没有使用过微博组件，<a href="/websites/">马上使用</a></li>',
				'</ul>',
			'<%}%>', 
		'</div>'
	].join("");

	tpl.applistul = [
		'<ul id="applistul">' ,
					'<%for(var i=0;i<apps.length;i++){%>',
						'<% var app=apps[i];%>',		
						'<li>',
						'<a href="/development/appinfo?appid=<%=app.app_id%> ">',
							'<img src=" <%=(app.app_icon_75?app.app_icon_75:"http://mat1.gtimg.com/app/opent/images/index/icon.jpg")%> " height="60" width="60"/></a>',
						'<dl>',
							'<dt><a href="/development/appinfo?appid=<%=app.app_id%> "><%=app.app_name%></a></dt>',
							'<dd><span>应用分类：</span><label><%=app.appType%></label></dd>',
							'<dd><span>接口权限：</span><label><%=app.app_level%>权限</label></dd>',
							'<dd><span>来源显示：</span><label><%=app.source_status_display%></label></dd>',
							'<dd><span id="appState_"<%=app.app_id%>>应用状态： </span><label><%=app.app_status_display%></label></dd>',
						'</dl>',
						'<div align="right"><a href="/development/appinfo?appid=<%=app.app_id%> ">查看</a></div>',
						'</li>',
					'<%}%> ',
					'<%if(!apps||apps.length==0){%>',
						'<li style="height:auto;">你还没有创建过应用，<a href="javascript:;" onclick="$(\\"#newapp\\").trigger(\\"click\\");" style="display:inline">马上创建</a></li>',
					'<%}%>',
					'</ul>',
			//		'<div id="pagebar"><%=pagelist%></div>',
					'</div>',
			   // <!--其他平台应用-->
			   '<div id="otherapplist" class="applist2 hidden">',
				   '<ul id="applistul1">',
						'<%for(var i=0;i<kapps.length;i++){%>',    
							'<%var kapp=kapps[i];%>',          
							'<li>',
							'<img src="<%=(kapp.app_icon_75?kapp.app_icon_75:"http://mat1.gtimg.com/app/opent/images/index/icon.jpg")%>" height="60" width="60" />',
							'<dl>',
								'<dt style="color:#346496"><%=kapp.app_name%></dt>' ,
								'<dd><span>应用KEY：</span><label><%=kapp.app_id%></label></dd>',
								'<dd><span>&nbsp;&nbsp;&nbsp;&nbsp;创建平台：</span><label> <%=kapp.create_plat%></label></dd>',
								'<dd><span>&nbsp;&nbsp;&nbsp;&nbsp;已上线平台：</span><label><%=kapp.online_plat%></label></dd>',
							'</dl>',
							'<div align="right">',
								'<%if(kapp.wb_had){%>',
									'<a href="/development/appinfo?appid=<%=kapp.app_id%>">已接入到微博（查看）</a>',
								'<%}else{%>',
									'<a href="/development/appinfo?appid=<%=kapp.app_id%>?comfrom=<%=kapp.app_comefrom%> ">接入到微博 </a>',
								'<%}%>',
							'</div>',
							'</li>',
						'<%} if(!kapps||kapps.length==0){%>' ,
							'<%if(showtype){%>',
								'<li style="height:auto;">您的其他平台应用已全部导入到微博了</li>',
							'<%}else{%>',
								'<li style="height:auto;">您还没有在其他平台创建过应用</li>',
							'<%}%>',
						'<%}%>',
					'</ul>',
	].join("");

		tpl.applistul1 = [
			   // <!--其他平台应用-->
			   '<div id="otherapplist" class="applist2 hidden">',
				   '<ul id="applistul1">',
						'<%for(var i=0;i<kapps.length;i++){%>',    
							'<%var kapp=kapps[i];%>',          
							'<li>',
							'<img src="<%=(kapp.app_icon_75?kapp.app_icon_75:"http://mat1.gtimg.com/app/opent/images/index/icon.jpg")%>" height="60" width="60" />',
							'<dl>',
								'<dt style="color:#346496"><%=kapp.app_name%></dt>' ,
								'<dd><span>应用KEY：</span><label><%=kapp.app_id%></label></dd>',
								'<dd><span>&nbsp;&nbsp;&nbsp;&nbsp;创建平台：</span><label> <%=kapp.create_plat%></label></dd>',
								'<dd><span>&nbsp;&nbsp;&nbsp;&nbsp;已上线平台：</span><label><%=kapp.online_plat%></label></dd>',
							'</dl>',
							'<div align="right">',
								'<%if(kapp.wb_had){%>',
									'<a href="/development/appinfo?appid=<%=kapp.app_id%>">已接入到微博（查看）</a>',
								'<%}else{%>',
									'<a href="/development/appinfo?appid=<%=kapp.app_id%>?comfrom=<%=kapp.app_comefrom%> ">接入到微博 </a>',
								'<%}%>',
							'</div>',
							'</li>',
						'<%} if(!kapps||kapps.length==0){%>' ,
							'<%if(showtype){%>',
								'<li style="height:auto;">您的其他平台应用已全部导入到微博了</li>',
							'<%}else{%>',
								'<li style="height:auto;">您还没有在其他平台创建过应用</li>',
							'<%}%>',
						'<%}%>',
					'</ul>',
	].join("");

	this.tpl.development_list_app = [
		//<!------------------------------------已创建的应用----------------------------------------->
		'<ul id="appTab">',
			'<li class="currentTab">',
				'<a href="javascript:;">微博应用</a>',
			'</li>',
			'<li>',
				'<a href="javascript:;">其他平台应用</a>',
		   '</li>',
	   '</ul>',
	   '<div id="appContent">',
		   // <!--微博应用-->
			'<div id="applist" class="applist2">',
				'<form>',
					'<input type="checkbox" name="apptype" id="apptype4" checked=""/>',
					'<label for="apptype4">无线应用</label>',
				    '<input type="checkbox" name="apptype" id="apptype2" checked=""/>',
					'<label for="apptype2">PC客户端</label>',
					'<input type="checkbox" name="apptype" id="apptype1" checked=""/>',
					'<label for="apptype1">网页应用</label>',
					'<input type="checkbox" name="apptype" id="apptype3" checked=""/>',
					'<label for="apptype3">站内应用</label>',
				'</form>',
				tpl.applistul,
				tpl.applistul1,
			'</div>',  
		'</div>'
	].join("");
	this.tpl.development_list_iweibo = [
		//<!------------------------------------iweibo----------------------------------------->  
		'<div class="applist2" id="applist">',
		'<ul id="applistul">',
		'<%for(var i=0;i<iweibo.length;i++){%>',
			'<%var app = iweibo[i];%>',			
				'<li>',
				'<a href="/development/iweiboinfo?appid=<%=app.app_id%> ">',
				'<img src="<%=app.app_icon_75?app.app_icon_75:"http://mat1.gtimg.com/app/opent/images/index/icon.jpg"%>" height="60" width="60" /></a>',
				'<dl>',
					'<dt><a href="/development/iweiboinfo?appid=<%=app.app_id%> "><%=app.app_name%></a></dt> ',
					'<dd><span>接口权限：</span><label><%=app.app_level%>权限</label></dd>',
					'<dd><span>来源显示：</span><label><%=app.source_status_display%></label></dd>',
					'<dd><span id="appState_<%=app.app_id%>">组件状态： </span><label><%=app.app_status_display%></label></dd>',
				'</dl>',
				'<div align="right"><a href="/development/iweiboinfo?appid=<%=app.app_id%> ">查看</a></div>',
				'</li>',
		'<%} if(!iweibo||iweibo.length==0){%> ',
				'<li style="height:auto;">你还没有使用过iWeibo，<a href="/apps/add/5/" style="display:inline;line-height:1;">马上使用</a></li>',
		'<%}%>',
			'</ul>',
		'<div id="pagebar"><%=pagelist%></div>',
		'</div> '
	].join("");
	
	//根据不同的类型渲染页面
	if(global_obj.data.displaytype == "comps"){
		var rightListTmpl = this.tpl.development_list_comps
	}else if(global_obj.data.displaytype == "app"){
		var rightListTmpl = this.tpl.development_list_app
	}else if(global_obj.data.displaytype == "iweibo"){
		var rightListTmpl = this.tpl.development_list_iweibo
	};

	this.tpl.pageBar = [//翻页按钮
		'<div id="pagebar">',
			'<div class="pagebar">',
				'<em title="共<%=app_cnt%>条">共<%=app_cnt%>条</em>',
				'<%if(page_num > 1){%>',
					'<a href="#<%=page_num-1%>" onclick="pageList(<%=page_num - 1%>);" class="page_prev">上一页</a>',
				'<%}else{%>',
					'<span class = "page_prev">上一页</span>',
				'<%}%>',

				'<%if(page_no <= 5 ){%>',//page_no之前的页全部显示
					'<%if(page_num > page_cnt - 4){%>',
						//显示所有页码
						'<%for(var i = 1; i <= page_cnt; i++){%>',
							'<%if (i != page_num) {%>',
								'<a href="#<%=i%>" onclick = pageList(<%=i%>)><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',
					'<%}else{%>',
						//显示  1到curr curr+1 curr+2 curr+3... total
						'<%for(var i = 1; i <= page_num + 3; i++){%>',
							'<%if (i != page_no) {%>',
								'<a href="#<%=i%>" onclick = pageList(<%=i%>)><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',
						//'<span>...<span>',
						'<em class="dotted">...</em>',
						'<a href="#<%=page_cnt%>" onclick = pageList(<%=page_cnt%>)><%=page_cnt%></a>',
					'<%}%>',
				'<%}else{%>', 
					'<%if(page_num > page_cnt - 5){%>',
						//显示1...curr-3到total
						'<a href="#1" onclick = pageList(1)>1</a>',
						//'<span>...</span>',
						'<em class="dotted">...</em>',
						'<%for(var i = page_num - 3; i <= page_cnt; i++){%>',
							'<%if (i != page_num) {%>',
								'<a href="#<%=i%>" onclick = pageList(<%=i%>)><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',
					'<%}else{%>',
						//显示1...curr-3到curr+3...total
						'<a href="#1" onclick = pageList(1)>1</a>',
					//	'<span>...</span>',
						'<em class="dotted">...</em>',
						'<%for(var i = page_num - 3; i <= page_num + 3; i++){%>',
							'<%if (i != page_num) {%>',
								'<a href="#<%=i%>" onclick = pageList(<%=i%>)><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',						
					//	'<span>...<span>',
						'<em class="dotted">...</em>',
						'<a href="#<%=page_cnt%>" onclick = pageList(<%=page_cnt%>)><%=page_cnt%></a>',
					'<%}%>',
				'<%}%>',

				'<%if(page_num < page_cnt){%>',
					'<a href="#<%=page_num+1%>" onclick="pageList(<%=page_num+1%> );" class="page_next">下一页</a>',
				'<%}else{%>',
					'<span class = "page_next">下一页</span>',
				'<%}%>',
			'</div>',
		'</div>',
	].join("");

	this.tpl.development_list = [
		this.tpl.header,
		'<link href="http://mat1.gtimg.com/app/opent/css/development/index_selectapp.css?201205251" rel="stylesheet" type="text/css" />',
			'<div id="content" class="controlCon main main_app">',
				'<div class="deverLeft">',
					'<div class="leftMain">',
						'<div class="uicon">﻿',//<!--用户头像-->
							'<img src="<%=developer.head?developer.head+"/100":"http://mat1.gtimg.com/app/opent/images/index/icon.jpg"%>" height="75" width="75" />',
							'<br>',
							'<%=userInfo.nick%>',
						'</div>',
						'<ul class="appsnav">',
							'<li class="<%=(displaytype == "iweibo"?"active":"")%>"><a href="/development/iweibo">iWeibo</a></li>',
							'<li class="<%=(displaytype == "comps"?"active":"")%>"><a href="/development/complist">我的组件</a></li>',
							'<li class="<%=(displaytype == "app"?"active":"")%>"><a href="/development/">我的应用</a></li>',
							'<li><a href="/development/developer/">开发者资料</a></li>',
						'</ul>',
						'<%if(developer.user_app_numbers<developer.user_app_limit){%>',
						'<a href="javascript:;" class="creatIcon" rel="/development/create" id="newapp">创建应用</a>',
						'<%}%>',
					'</div>',
				'</div>',
				'<div class="deverRight"> ',
					'<%if(displaytype != "app"){%>',
						'<h1 class="comp_tit">',
							'<%if(displaytype == "iweibo"){%>',
								'iWeibo',
							'<%}else if(displaytype == "comps"){%>',
							   '我的组件',
							'<%}%>',
						 '</h1>',
					'<%}%>',
					rightListTmpl,
					this.tpl.pageBar,
				'</div>',
			'</div>',
		'<script type="text/javascript" src="http://mat1.gtimg.com/app/opent/js/app_appadd.js"></script>',
		this.tpl.footer,
	].join("");
	
	$("#main").html(this.tmpl(this.tpl.development_list,global_obj.data));

	var insiteAppAble=true;
	var siteAppDisplayType = insiteAppAble?  16 : 0; 
	var displayAppType = 45;//+siteAppDisplayType;

	//检查开发这信息,看是不是开发这,或者创建应用达到上限
	$("#newapp").click(function(){
		popAppWin(developer.user_app_numbers,developer.user_app_limit); 
	});	
	$(function(){

		$('input#apptype1').click(function(){
			if($(this).attr('checked')==true) displayAppType = displayAppType|0x1;
			else displayAppType = displayAppType&0xFE;
			var apptypeUrl = "/interfaceserver?action=common_query&business_type=ajax_applist&appTypes="+displayAppType;
			AjaxPageList(apptypeUrl);
		}) 
		 
		$('input#apptype2').click(function(){
			if($(this).attr('checked')==true) displayAppType = displayAppType|0x4;
			else displayAppType = displayAppType&0xFB;
			var apptypeUrl = "/interfaceserver?action=common_query&business_type=ajax_applist&appTypes="+displayAppType;
			AjaxPageList(apptypeUrl);
		})
		 
		$('input#apptype3').click(function(){
			if($(this).attr('checked')==true) displayAppType = displayAppType|0x8;
			else displayAppType= displayAppType&0xF7;
			var apptypeUrl = "/interfaceserver?action=common_query&business_type=ajax_applist&appTypes="+displayAppType;
			AjaxPageList(apptypeUrl);
		})
		
		$('input#apptype4').click(function(){
			if($(this).attr('checked')==true) displayAppType = displayAppType|0x20;
			else displayAppType= displayAppType&0xDF;
			var apptypeUrl = "/interfaceserver?action=common_query&business_type=ajax_applist&appTypes="+displayAppType;
			AjaxPageList(apptypeUrl);
		})
/*
		//pageBar
		if(global_obj.data.page_cnt == 1){
			$('#pagebar').css('display','none');
		}
		else{
			$('#pagebar').css('display','block');
		}    
		*/
		// TAB
		var content = $("#appContent").children("div.applist2");
		$("#appTab a").click(function () {
			var	 li = $(this).parent("li");
			var index = li.index();
			li.addClass("currentTab").siblings().removeClass("currentTab");
			content.eq(index).removeClass("hidden").siblings().addClass("hidden");
			this.blur();
		});
	})
	
	/**
	 * AJAX翻页
	 */
	function pageList(page){ 
		/*if(comps){
			var ajaxpageListUrl ="/development/indexajaxcomplist/"+page+"?d="+(new Date().getTime());
		}else if(iweibo){
			var ajaxpageListUrl ="/development/indexajaxiweibolist/"+page+"?d="+(new Date().getTime());
		}else{
			var ajaxpageListUrl ="/development/indexajaxapplist/"+page+'/'+displayAppType+'/'+"?d="+(new Date().getTime());
		}*/
		global_obj.data.page_no = page;
		ajaxpageListUrl = "http://open_test.t.qq.com/pipes/interfaceserver?action=common_query&business_type=ajax_applist&page="+page;
		AjaxPageList(ajaxpageListUrl);
	} 
	/**
	 * AJAX翻页
	 */
	function pageList1(page){ 
		global_obj.data.kpage_no = page;
		ajaxpageListUrl = "http://open_test.t.qq.com/pipes/interfaceserver?action=common_query&business_type=ajax_applist&kpage="+page;
		AjaxPageList(ajaxpageListUrl);
	} 
		
	function AjaxPageList(ajaxpageListUrl){ 
		console.log("AjaxPageList");
		$.ajax({
			  url: ajaxpageListUrl,
			  dataType: "json",
			  cache: false,
			  success: function(ResposeData){ 
				  if(ResposeData.data.uin == hdlogin){
				  	if ($('#otherapplist').hasClass('hidden')) {
				  		console.log(1);
						ResposeData.data.page_num = global_obj.data.page_no;
						ResposeData.data.page_cnt = page_count;
						ResponseData.data.app_cnt = global_obj.data.app_count;
						$('#applistul').html(tmpl(tpl.applistul, ResposeData.data));
						$('#pagebar').html(tmpl(tpl.pageBar, ResposeData.data));
					}else if (!ResposeData.data.kapps) {
						console.log(2);
						ResposeData.data.page_num = global_obj.data.kpage_no;
						ResposeData.data.page_cnt = kpage_count;
						ResponseData.data.app_cnt = global_obj.data.kapp_count;
						$('#applistul1').html(tmpl(tpl.applistul1, ResposeData.data));
						$('#pagebar').html(tmpl(tpl.pageBar, ResposeData.data));
					}
					console.log(3);
				  }else{
				  	console.log(4);
					location.href="/development/";
				  }
			  }
		})
	}
}
