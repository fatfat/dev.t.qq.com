;(function(){
	this.util = this.util || {};
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
					'<dt><a href="/development/compinfo/<%=comp.comp_id%>"><%=comp.comp_name%></a></dt>',
					'<dd class="applistdd"><span>组件类型：</span><label><%=comp.compType%></label></dd>',
					'<dd><span>接口权限：</span><label><%=comp.compLevel%>权限</label></dd>',
					'<dd><span>来源显示：</span><label><%=comp.compSource_status%></label></dd>',
					'<dd><span>组件状态：</span><label><%=comp.compStatus%></label></dd>',
					'</dl>',
					'<div align="right">',
						'<%if(comp.comp_type!=7){%><a href="/development/compset/<%=comp.comp_id%>">编辑</a> / <%}%>',
						'<a href="/development/compinfo/<%=comp.comp_id%>">查看</a></div>',
				'</li>',
			'<%}%>',
			'</ul>',
			'<div id="pagebar"><%=pagelist%></div>',
			'<%}else{%>'  , 
				'<ul class="applist">',
					'<li>你还没有使用过微博组件，<a href="/websites/">马上使用</a></li>',
				'</ul>',
			'<%}%>', 
		'</div>'
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
				   ' <input type="checkbox" name="apptype" id="apptype2" checked=""/>',
					'<label for="apptype2">PC客户端</label>',
					'<input type="checkbox" name="apptype" id="apptype1" checked=""/>',
					'<label for="apptype1">网页应用</label>',
					'<input type="checkbox" name="apptype" id="apptype3" checked=""/>',
					'<label for="apptype3">站内应用</label>',
				'</form>',
				'<ul id="applistul">' ,
				'<%for(var i=0;i<apps.length;i++){%>',
					'<% var app=apps[i];%>',		
					'<li>',
					'<a href="/development/appinfo/<%=app.app_id%> ">',
						'<img src=" <%=(app.app_icon_75?app.app_icon_75:"http://mat1.gtimg.com/app/opent/images/index/icon.jpg")%> " height="60" width="60"/></a>',
					'<dl>',
						'<dt><a href="/development/appinfo/<%=app.app_id%> "><%=app.app_name%></a></dt>',
						'<dd><span>应用分类：</span><label><%=app.appType%></label></dd>',
						'<dd><span>接口权限：</span><label><%=app.app_level%>权限</label></dd>',
						'<dd><span>来源显示：</span><label><%=app.source_status_display%></label></dd>',
						'<dd><span id="appState_"<%=app.app_id%>>应用状态： </span><label><%=app.app_status_display%></label></dd>',
					'</dl>',
					'<div align="right"><a href="/development/appinfo/<%=app.app_id%> ">查看</a></div>',
					'</li>',
				'<%}%> ',
				'<%if(!apps||apps.length==0){%>',
					'<li style="height:auto;">你还没有创建过应用，<a href="javascript:;" onclick="$(\\"#newapp\\").trigger(\\"click\\");" style="display:inline">马上创建</a></li>',
				'<%}%>',
				'</ul>',
				'<div id="pagebar"><%=pagelist%></div>',
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
								'<a href="/development/appinfo/<%=kapp.app_id%>">已接入到微博（查看）</a>',
							'<%}else{%>',
								'<a href="/development/appinfo/<%=kapp.app_id%>?comfrom=<%=kapp.app_comefrom%> ">接入到微博 </a>',
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
				'<div id="pagebar1"><%=pagelist1%></div>',
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
				'<a href="/development/iweiboinfo/<%=app.app_id%> ">',
				'<img src="<%=app.app_icon_75?app.app_icon_75:"http://mat1.gtimg.com/app/opent/images/index/icon.jpg"%>" height="60" width="60" /></a>',
				'<dl>',
					'<dt><a href="/development/iweiboinfo/<%=app.app_id%> "><%=app.app_name%></a></dt> ',
					'<dd><span>接口权限：</span><label><%=app.app_level%>权限</label></dd>',
					'<dd><span>来源显示：</span><label><%=app.source_status_display%></label></dd>',
					'<dd><span id="appState_<%=app.app_id%>">组件状态： </span><label><%=app.app_status_display%></label></dd>',
				'</dl>',
				'<div align="right"><a href="/development/iweiboinfo/<%=app.app_id%> ">查看</a></div>',
				'</li>',
		'<%} if(!iweibo||iweibo.length==0){%> ',
				'<li style="height:auto;">你还没有使用过iWeibo，<a href="/apps/add/5/" style="display:inline;line-height:1;">马上使用</a></li>',
		'<%}%>',
			'</ul>',
	//	'<div id="pagebar"><%=pagelist%></div>',
		'</div> '
	].join("");
	
	//根据不同的类型渲染页面
	if(data.displaytype == "comps"){
		var rightListTmpl = this.tpl.development_list_comps
	}else if(data.displaytype == "app"){
		var rightListTmpl = this.tpl.development_list_app
	}else if(data.displaytype == "iweibo"){
		var rightListTmpl = this.tpl.development_list_iweibo
	};

	this.tpl.pageBar = [//翻页按钮
		'<div id="pagebar">',
			'<div class="pagebar">',
				'<em title="共<%=data.app_count%>条">共<%=page_count%>条</em>',
				'<%if(page_no != 1){%>',
					'<a href="#1" onclick="pageList(<%=parseInt(page_no) - 1%>);" class="page_prev">上一页</a>',
				'<%}else{%>',
					'<span class = "page_prev">上一页</span>',
				'<%}%>',

				'<%if(page_no <= 5 ){%>',//page_no之前的页全部显示
					'<%if(page_no >= page_count - 4){%>',
						//显示所有页码
						'<%for(var i = 1; i <= page_count; i++){%>',
							'<%if (i != page_no) {%>',
								'<a href="#<%=i%>" onclick = pageList(<%=i%>)><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',
					'<%}else{%>',
						//显示  1到curr curr+1 curr+2 curr+3... total
						'<%for(var i = 1; i <= page_no + 3; i++){%>',
							'<%if (i != page_no) {%>',
								'<a href="#<%=i%>" onclick = pageList(<%=i%>)><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',
						//'<span>...<span>',
						'<em class="dotted">...</em>',
						'<a href="#<%=page_count%>" onclick = pageList(<%=page_count%>)><%=page_count%></a>',
					'<%}%>',
				'<%}else{%>', 
					'<%if(page_no >= page_count - 4){%>',
						//显示1...curr-3到total
						'<a href="#1" onclick = pageList(1)>1</a>',
						//'<span>...</span>',
						'<em class="dotted">...</em>',
						'<%for(var i = page_no - 3; i <= page_count; i++){%>',
							'<%if (i != page_no) {%>',
								'<a href="#<%=i%>" onclick = pageList(<%=i%>)><%=i%></a>',
							'<%}else{%>',
								'<span><%=i%></span>',
							'<%}%>',
						'<%}%>',
					'<%}else{%>',
						//显示1...curr-3到curr+3...total
						'<a href="#1>" onclick = pageList(1)>1</a>',
					//	'<span>...</span>',
						'<em class="dotted">...</em>',
						'<%for(var i = page_no - 3; i <= page_no - 1; i++){%>',
							'<a href="#<%=i%>" onclick = pageList(<%=i%>)><%=i%></a>',
						'<%}%>',
						'<span><%=page_no%></span>',
						'<%for(var i = page_no + 1; i <= page_no + 3; i++){%>',
							'<a href="#<%=i%>" onclick = pageList(<%=i%>)><%=i%></a>',
						'<%}%>',						
					//	'<span>...<span>',
						'<em class="dotted">...</em>',
						'<a href="#<%=page_count%>" onclick = pageList(<%=page_count%>)><%=page_count%></a>',
					'<%}%>',
				'<%}%>',

				'<%if(page_no != page_count){%>',
					'<a href="#<%=page_count%>" onclick="pageList(<%=parseInt(page_no)+ 1%> );" class="page_next">下一页</a>',
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
							'<li class="<%=(displaytype == "iweibo"?"active":"")%>"><a href="/development/iweibo/">iWeibo</a></li>',
							'<li class="<%=(displaytype == "comps"?"active":"")%>"><a href="/development/complist/">我的组件</a></li>',
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
	
	$("#main").html(this.tmpl(this.tpl.development_list,data));



	var insiteAppAble=true;
	var developer = data.developer;
	var siteAppDisplayType = insiteAppAble?  16 : 0; 
	var displayAppType = 45;//+siteAppDisplayType;
	$(function(){
		//检查开发这信息,看是不是开发这,或者创建应用达到上限
		$("#newapp").click(function(){
			popAppWin(developer.user_app_numbers,developer.user_app_limit); 
		});	
		$(function(){
			$('input#apptype1').click(function(){
				if($(this).attr('checked')==true) displayAppType = displayAppType|0x1;
				else displayAppType = displayAppType&0xFE;
				var apptypeUrl = "/development/indexajaxapplist/1/"+displayAppType+'/';
				AjaxPageList(apptypeUrl);
			}) 
			 
			$('input#apptype2').click(function(){
				if($(this).attr('checked')==true) displayAppType = displayAppType|0x4;
				else displayAppType = displayAppType&0xFB;
				var apptypeUrl = "/development/indexajaxapplist/1/"+displayAppType+'/';
				AjaxPageList(apptypeUrl);
			})
			 
			$('input#apptype3').click(function(){
				if($(this).attr('checked')==true) displayAppType = displayAppType|0x8;
				else displayAppType= displayAppType&0xF7;
				var apptypeUrl = "/development/indexajaxapplist/1/"+displayAppType+'/';
				AjaxPageList(apptypeUrl);
			})
			
			$('input#apptype4').click(function(){
				if($(this).attr('checked')==true) displayAppType = displayAppType|0x20;
				else displayAppType= displayAppType&0xDF;
				var apptypeUrl = "/development/indexajaxapplist/1/"+displayAppType+'/';
				AjaxPageList(apptypeUrl);
			})
			
			// TAB
			var $content = $("#appContent").children("div.applist2");
			$("#appTab a").click(function () {
				var $this = $(this);
				var $li = $this.parent("li");
				var index = $li.index();
				$li.addClass("currentTab").siblings().removeClass("currentTab");
				$content.eq(index).removeClass("hidden").siblings().addClass("hidden");
				$this.blur();
			});
		})
		
		/**
		 * AJAX翻页
		 */
		function pageList(page){ 
			alert(1);
			if(comps){
				var ajaxpageListUrl ="/development/indexajaxcomplist/"+page+"?d="+(new Date().getTime());
			}else if(iweibo){
				var ajaxpageListUrl ="/development/indexajaxiweibolist/"+page+"?d="+(new Date().getTime());
			}else{
				var ajaxpageListUrl ="/development/indexajaxapplist/"+page+'/'+displayAppType+'/'+"?d="+(new Date().getTime());
			}
			AjaxPageList(ajaxpageListUrl);
		} 
		/**
		 * AJAX翻页
		 */
		function pageList1(page){ 
			var ajaxpageListUrl ="/development/indexajaxkpapplist/"+page+'/'+displayAppType+'/'+"?d="+(new Date().getTime());
			AjaxPageList(ajaxpageListUrl);
		} 
			
		function AjaxPageList(ajaxpageListUrl){ 
			$.ajax({
				  url: ajaxpageListUrl,
				  dataType: "json",
				  cache: false,
				  success: function(ResposeData){ 
					  if(ResposeData.uin == hdlogin){
						$('#applistul').html(ResposeData.html);
						$('#pagebar').html(ResposeData.pagestr);
						$('#applistul1').html(ResposeData.html1);
						$('#pagebar1').html(ResposeData.pagestr1);
					  }else{
						location.href="/development/";
					  }
				  }
			})
		}
		
	});
})();
