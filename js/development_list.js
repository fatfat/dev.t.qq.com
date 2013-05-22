;(function(){
if(!userInfo.hdlogin)
{
	$('#main').html(tmpl(this.tpl.login,global_obj.data));
}
else
{
	if( global_obj.error != 0){
		location.href = '/development';//页面出错，自动跳转首页
	}
	//开平变量初始化
	global_obj.data.kapp_count = 0;
	global_obj.data.kpage_no = 0;
	global_obj.data.kpage_count = 13;
/*	
	//testdata  iweibo:
	if(!global_obj.data.displaytype)  global_obj.data.displaytype = "iweibo";
	if(!global_obj.data.iweibo) global_obj.data.iweibo = [];
	if(!global_obj.data.app_count) global_obj.data.app_count= 0;
	if(!global_obj.data.page_no) global_obj.data.page_no= 1;
	if(!global_obj.data.page_size) global_obj.data.page_size = 13;
*/
	//testdata  complist:
	global_obj.data.navPos = "7";
	if(!global_obj.data.comps)  global_obj.data.comps = global_obj.data.pagelist;
	
	global_obj.data.page_count = Math.ceil(global_obj.data.app_count / global_obj.data.page_size);  //页数
	if ( (global_obj.data.page_count ? global_obj.data.page_count:1) < global_obj.data.page_no) {    //当前页码不能超过总页数
	}
	
	this.tpl = this.tpl || {};
	this.tpl.development_list_comps = [
		'<div  id="applist" class="applist">',
		'<ul class="applist" id="applistul">',
			'<%if(comps.length>0&&app_count>0){%>',
				'<%for(var i=0;i<comps.length;i++){%>',
				'<%var comp = comps[i];%>',
				'<li>',
					'<dl>',
					'<dt><a href="/development/compinfo?comp_id=<%=comp.comp_id%>"><%=comp.comp_name%></a></dt>',
					'<dd class="applistdd"><span>组件类型：</span><label><%=comp.comp_type_name%></label></dd>',
					'<dd><span>接口权限：</span><label><%=comp.comp_level_name%>权限</label></dd>',
					'<dd><span>来源显示：</span><label><%=comp.comp_source_status_name%></label></dd>',
					'<dd><span>组件状态：</span><label><%=comp.comp_status_name%></label></dd>',
					'</dl>',
					'<div align="right">',
						'<%if(comp.comp_type!=7){%><a href="/development/compset?comp_id=<%=comp.comp_id%>">编辑</a> / <%}%>',
						'<a href="/development/compinfo?comp_id=<%=comp.comp_id%>">查看</a></div>',
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
				'</div>',
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
			'</div>', 
			tpl.applistul1, 
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
					'<dd><span>接口权限：</span><label><%=app.appLevle%>权限</label></dd>',
					'<dd><span>来源显示：</span><label><%=app.source_status_display%></label></dd>',
					'<dd><span id="appState_<%=app.app_id%>">组件状态： </span><label><%=app.appStatus%></label></dd>',
				'</dl>',
				'<div align="right"><a href="/development/iweiboinfo?appid=<%=app.app_id%> ">查看</a></div>',
				'</li>',
		'<%} if(!iweibo||iweibo.length==0){%> ',
				'<li style="height:auto;">你还没有使用过iWeibo，<a href="/apps/add/5/" style="display:inline;line-height:1;">马上使用</a></li>',
		'<%}%>',
			'</ul>',
		'</div> '
	].join("");
		
	
	//根据不同的类型渲染页面
	var setRightList = function(){
		if(global_obj.data.displaytype == "comps"){
			rightListTmpl = this.tpl.development_list_comps;
		}else if(global_obj.data.displaytype == "app"){
			rightListTmpl = this.tpl.development_list_app;
		}else if(global_obj.data.displaytype == "iweibo"){
			rightListTmpl = this.tpl.development_list_iweibo;
		} else {
		}
		
	}
	
	this.tpl.pageBar = [//翻页按钮
		'<div id="pagebar">',
			'<div class="pagebar">',
				'<em title="共<%=app_count%>条">共<%=app_count%>条</em>',
				'<%if(page_no > 1){%>',
					'<a href="javascript:;" id="prev") class="page_prev">上一页</a>',
				'<%}else{%>',
					'<span class = "page_prev">上一页</span>',
				'<%}%>',

				'<%if(page_no <= 5 ){%>',//page_no之前的页全部显示
					'<%if(page_no > page_count - 4){%>',
						//显示所有页码
						'<%for(var i = 1; i <= page_count; i++){%>',
							'<%if (i != page_no) {%>',
								'<a href="javascript:;" id="page<%=i%>"><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',
					'<%}else{%>',
						//显示  1到curr curr+1 curr+2 curr+3... total
						'<%for(var i = 1; i <= page_no + 3; i++){%>',
							'<%if (i != page_no) {%>',
								'<a href="javascript:;" id="page<%=i%>"><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',
						//'<span>...<span>',
						'<em class="dotted">...</em>',
						'<a href="javascript:;" id="page<%=page_count%>"><%=page_count%></a>',
					'<%}%>',
				'<%}else{%>', 
					'<%if(page_no > page_count - 5){%>',
						//显示1...curr-3到total
						'<a href="javascript:;" id="page1">1</a>',
						//'<span>...</span>',
						'<em class="dotted">...</em>',
						'<%for(var i = page_no - 3; i <= page_count; i++){%>',
							'<%if (i != page_no) {%>',
								'<a href="javascript:;" id="page<%=i%>"><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',
					'<%}else{%>',
						//显示1...curr-3到curr+3...total
						'<a href="javascript:;" id = "page1">1</a>',
					//	'<span>...</span>',
						'<em class="dotted">...</em>',
						'<%for(var i = page_no - 3; i <= page_no + 3; i++){%>',
							'<%if (i != page_no) {%>',
								'<a href="javascript:;" id = "page<%=i%>"><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',						
					//	'<span>...<span>',
						'<em class="dotted">...</em>',
						'<a href="javascript:;" id = "page<%=page_count%>"><%=page_count%></a>',
					'<%}%>',
				'<%}%>',

				'<%if (page_no < page_count) {%>',
					'<a href="javascript:;" id = "next" class="page_next">下一页</a>',
				'<%} else {%>',
					'<span class = "page_next">下一页</span>',
				'<% } %>',
			'</div>',
		'</div>',
	].join("");
				
	this.tpl.pageBar1 = [//翻页按钮
		'<div id="pagebar" style="display:none">',
			'<div class="pagebar">',
				'<em title="共<%=kapp_count%>条">共<%=kapp_count%>条</em>',
				'<%if(kpage_no > 1){%>',
					'<a href="#<%=kpage_no-1%>" id = "prev1" )  class="page_prev">上一页</a>',
				'<%}else{%>',
					'<span class = "page_prev">上一页</span>',
				'<%}%>',

				'<%if(kpage_no <= 5 ){%>',//page_no之前的页全部显示
					'<%if(kpage_no > kpage_count - 4){%>',
						//显示所有页码
						'<%for(var i = 1; i <= kpage_count; i++){%>',
							'<%if (i != kpage_no) {%>',
								'<a href="#<%=i%>" id="Page<%=i%>" ><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',
					'<%}else{%>',
						//显示  1到curr curr+1 curr+2 curr+3... total
						'<%for(var i = 1; i <= kpage_no + 3; i++){%>',
							'<%if (i != kpage_no) {%>',
								'<a href="#<%=i%>" id = "Page<%=i%>" ><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',
						//'<span>...<span>',
						'<em class="dotted">...</em>',
						'<a href="#<%=kpage_count%>" id = "Page<%=kpage_count%>" ><%=kpage_count%></a>',
					'<%}%>',
				'<%}else{%>', 
					'<%if(kpage_no > kpage_count - 5){%>',
						//显示1...curr-3到total
						'<a href="#1" id = "Page1">1</a>',
						//'<span>...</span>',
						'<em class="dotted">...</em>',
						'<%for(var i = kpage_no - 3; i <= kpage_count; i++){%>',
							'<%if (i != kpage_no) {%>',
								'<a href="#<%=i%>" id = "Page<%=i%>"><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',
					'<%}else{%>',
						//显示1...curr-3到curr+3...total
						'<a href="#1" id = "Page1" >1</a>',
					//	'<span>...</span>',
						'<em class="dotted">...</em>',
						'<%for(var i = kpage_no - 3; i <= kpage_no + 3; i++){%>',
							'<%if (i != kpage_no) {%>',
								'<a href="#<%=i%>" id = "Page<%=i%>" ><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',						
					//	'<span>...<span>',
						'<em class="dotted">...</em>',
						'<a href="#<%=kpage_count%>" id = "Page<%=kpage_count%>" ><%=kpage_count%></a>',
					'<%}%>',
				'<%}%>',

				'<%if(kpage_no < kpage_count){%>',
					'<a href="#<%=kpage_no+1%>" id = "next1" class="page_next">下一页</a>',
				'<%}else{%>',
					'<span class = "page_next">下一页</span>',
				'<%}%>',
			'</div>',
		'</div>',
	].join("");

	var rightListTmpl = {};
	setRightList();

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
					this.tpl.pageBar1,    
				'</div>',
			'</div>',
		'<script type="text/javascript" src="/js/app_appadd.js"></script>',
		this.tpl.footer,
	].join("");
	
	$("#main").html(this.tmpl(this.tpl.development_list,global_obj.data));
    
    var str = [
		'.dotted{display:block;float:left;color:#346496;line-height:18px;}',
	].join("");
	this.util.createStyle(str);
	insiteAppAble=true;
	var siteAppDisplayType = insiteAppAble?  16 : 0; 
	var displayAppType = 45;//+siteAppDisplayType;

	//检查开发这信息,看是不是开发这,或者创建应用达到上限
	$("#newapp").click(function(){
		popAppWin(global_obj.data.developer.user_app_numbers,global_obj.data.developer.user_app_limit); 
	});	
	$(function(){
		checkPageNum(global_obj.data.page_count);
		bindAllPageEvent();
		
		$('input#apptype1').click(function(){
			if($(this).attr('checked')==true) displayAppType = displayAppType|0x1;
			else displayAppType = displayAppType&0xFE;
			var apptypeUrl = "/pipes/interfaceserver?action=common_query&business_type=ajax_applist&appTypes="+displayAppType;
			AjaxPageList(apptypeUrl);
		}) 
		 
		$('input#apptype2').click(function(){
			if($(this).attr('checked')==true) displayAppType = displayAppType|0x4;
			else displayAppType = displayAppType&0xFB;
			var apptypeUrl = "/pipes/interfaceserver?action=common_query&business_type=ajax_applist&appTypes="+displayAppType;
			AjaxPageList(apptypeUrl);
		})
		 
		$('input#apptype3').click(function(){
			if($(this).attr('checked')==true) displayAppType = displayAppType|0x8;
			else displayAppType= displayAppType&0xF7;
			var apptypeUrl = "/pipes/interfaceserver?action=common_query&business_type=ajax_applist&appTypes="+displayAppType;
			AjaxPageList(apptypeUrl);
		})
		
		$('input#apptype4').click(function(){
			if($(this).attr('checked')==true) displayAppType = displayAppType|0x20;
			else displayAppType= displayAppType&0xDF;
			var apptypeUrl = "/pipes/interfaceserver?action=common_query&business_type=ajax_applist&appTypes="+displayAppType;
			AjaxPageList(apptypeUrl);
		})
	
		// TAB
		var content = $("#appContent").children("div.applist2");
		$("#appTab a").click(function () {
			var	 li = $(this).parent("li");
			var index = li.index();

			li.addClass("currentTab").siblings().removeClass("currentTab");
			content.eq(index).removeClass("hidden").siblings().addClass("hidden");
			
			if ($('#otherapplist').hasClass('hidden')){
				$('#pagebar').css('display','block');
				$('#pagebar1').css('display','none');
				checkPageNum(global_obj.data.page_count);
			}else{
				$('#pagebar1').css('display','block');
				$('#pagebar').css('display','none');
				hiddenkpagebar(global_obj.data.kpage_count);
			}
			this.blur();
		});
	})

	function bindAllPageEvent(){
		for(var i = 1; i <= global_obj.data.page_count; i++){
			bindPageEvent(i);	
		}
		for(var i = 1; i <= global_obj.data.kpage_count; i++){	
			bindPageEvent1(i);
		}	
		
		$("#prev").click(function(){
			pageList(global_obj.data.page_no-1);
		})
		
		$("#next").click(function(){
			pageList(global_obj.data.page_no+1);
		})
			
		$("#prev1").click(function(){
			pageList1(global_obj.kdata.page_no-1);
		})
		
		$("#next1").click(function(){
			pageList1(global_obj.kdata.page_no+1);
		})
	}

	function bindPageEvent1(pageNum) {
		var Pagei = '#Page' + pageNum;
		$(Pagei).click(function(){
			pageList1(pageNum);
		})
	}		
			
	function bindPageEvent(pageNum) {
		var pagei = '#page' + pageNum;
		$(pagei).click(function(){
			pageList(pageNum);
		})
	}
	
	function checkPageNum(page_count){
		if(page_count <= 1){
			$('#pagebar').css('display','none');
		}
		else{
			$('#pagebar').css('display','block');
		} 
	}
	
	function hiddenkpagebar(kpage_count){
		if(kpage_count <= 1){
			$('#pagebar1').css('display','none');
		}
		else{
			$('#pagebar1').css('display','block');
		}  
	}
	
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
		ajaxpageListUrl = "/pipes/interfaceserver";
		if (global_obj.data.displaytype == "app"){
	    	var data = {"action":"common_query","business_type":"ajax_applist","page":page,"appTypes":displayAppType};
	    } else {
	    	alert("comps");
	    	var data = {"action":"common_query","business_type":"complist","page":page,"appTypes":displayAppType};
	    }
		AjaxPageList(ajaxpageListUrl, data);
	} 
	/**
	 * AJAX翻页
	 */
	function pageList1(page){ 
		global_obj.data.kpage_no = page;
		var ajaxpageListUrl ="/pipes/interfaceserver";
	    var data = {"action":"common_query","business_type":"ajax_kapplist","page":page};
		AjaxPageList(ajaxpageListUrl, data);
	} 
		
	function AjaxPageList(ajaxpageListUrl,dota){ 
		$.ajax({
			  url: ajaxpageListUrl,
			  dataType: "json",
			  data: dota,
			  cache: false,
			  success: function(ResponseData){ 
			  	  console.log(ResponseData.data);
			  	  alert([ResponseData.data.uin,userInfo.hdlogin])
			  	  console.log([parseInt(ResponseData.data.uin,10) , parseInt(userInfo.hdlogin,10)]);
				  if (parseInt(ResponseData.data.uin,10) == parseInt(userInfo.hdlogin,10) ){
				  	  console.log('success');
				  	  ResponseData.data.apps = ResponseData.data.apps || {};
				      ResponseData.data.kapps = ResponseData.data.kapps || {};
				  	  if(global_obj.data.displaytype != "app" || $('#otherapplist').hasClass('hidden')){
				  	  	   	global_obj.data.app_count = ResponseData.data.app_count;
						  	global_obj.data.page_count = Math.ceil(global_obj.data.app_count / global_obj.data.page_size);  //页数
						  	global_obj.data.kpage_count = ResponseData.data.kpage_count = 0;
						   	//根据不同的类型渲染页面
							setRightList();
						  	ResponseData.data.page_count = global_obj.data.page_count;
							ResponseData.data.displaytype = global_obj.data.displaytype;
							ResponseData.data.kapps_count = 0;
							if(!ResponseData.data.comps) ResponseData.data.comps = ResponseData.data.datalist;
							$('#applistul').html(tmpl(tpl.applistul, ResponseData.data));
							console.log($('#applistul').html());
							$('#pagebar').html(tmpl(tpl.pageBar, ResponseData.data));
							checkPageNum(global_obj.data.page_count);
						}else{						
							global_obj.data.kapp_count = ResponseData.data.kapp_count;
							global_obj.data.kpage_count = Math.ceil(global_obj.data.kapp_count / global_obj.data.page_size);  //页数
							ResponseData.data.kpage_count = global_obj.data.kpage_count;
							global_obj.data.page_count = ResponseData.data.page_count = 0;
							setRightList();
							$('#applistul').html(tmpl(tpl.applistul, ResponseData.data));
							$('#pagebar1').html(tmpl(tpl.pageBar1, ResponseData.data));
							hiddenkpagebar(global_obj.data.kpage_count);
						}
						bindAllPageEvent();
				  }else{
				  	  console.log('failed');
					location.href="/development/";
				  }
			  },
	  		  error:function(){console.log('error');}
		})
	}
}
})();
