var str = [
	'.article_list{margin:20px 48px;background: transprant;}',
	'.article_list li{height:30px;line-height:30px;clear:both;display:inline-block;width:100%;border-bottom:1px dotted #EEEEEE;}',
	'.article_list li:hover{background-position:0 -24px;}',
	'.article_list li span{float:left;background: transprant;padding-right:5px;font-size:14px;}',
	'.article_list li span label{_ position:absolute;}',
	'.article_list li a{color:#444;}',
	'.article_list li a:hover{color:#3A8DD1;}',
	'.article_list li cite{float:right;font-style:normal;color:#888;font-family:tahoma;font-size:12px;background: transprant;padding-left:5px;}',
	'.pagebar {margin:0 43px 50px;}',
	'.icon_news_new,.icon_news_hot,.icon_news_recommand{background:url(http://mat1.gtimg.com/app/opent/images/index/newsicon.gif) no-repeat;width:20px;height:16px;display:inline-block;* display:inline;zoom:1;vertical-align:middle;}',
	'.icon_news_new{background-position:-32px 0;}',
	'.icon_news_recommand{background-position:-64px 0;}'
].join("\r");
//var userInfo = window.userInfo || {};
//userInfo.hdlogin = window.hdlogin = "76516702";
util.createStyle(str);
global_obj.data.navPos='0';
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
	tpl.content = [
		'<div id="content" class="wrapper main main_more_news">',
		'<div class="approate">',
			'<a href="/">腾讯微博开放平台</a> &gt; <span>开放平台动态</span>',
		'</div>',
		'<ul class="article_list">',
		'<%for(var i = 0, totalNum = pagelist.length, list = pagelist[0]; i < totalNum && (list = pagelist[i]); i++)	{%>',
			'<li><span><a href=<%=list.link%> target = _blank; title = <%=list.title%>><%=list.title%></a></span><cite><%=list.pubDate%></cite></li>',
		'<%}%></ul>',
		tpl.pageBar,
	'</div>',
		].join("");
		
			
tpl.index_more = [
	tpl.header,
	tpl.content,
	'<script type="text/javascript" src="http://tajs.qq.com/stats?sId=22020733" charset="UTF-8"></script>',
 	'<!--[if IE 8]><script>try{document.execCommand("BackgroundImageCache", false, true);}catch(e){}</script><![endif]-->',
	tpl.footer,
].join("\r");

	global_obj.data.page_count = Math.ceil(global_obj.data.app_count / global_obj.data.page_size);  //页数
	$('#main').html(tmpl(tpl.index_more,global_obj.data));
	window.bindAllPageEvent();
		
	 function AjaxPageList(ajaxpageListUrl,dota){ 
		$.ajax({
			  url: ajaxpageListUrl,
			  dataType: "json",
			  data: dota,
			  cache: false,
			  success: function(ResponseData){ 
				ResponseData.data.page_count = global_obj.data.page_count;
				global_obj.data.page_no = global_obj.data.page_no;
				$('#content').html(tmpl(tpl.content, ResponseData.data));
				checkPageNum(global_obj.data.page_count);
				bindAllPageEvent();
			  },
	  		  error:function(){}
		})
	}	
	 function pageList (page){ 
		global_obj.data.page_no = page;
		ajaxpageListUrl = "/pipes/interfaceserver";
    	var data = {"action":"common_query","business_type":"moreinfolist","page":page};
		AjaxPageList(ajaxpageListUrl, data);
	} 
	  
	function bindPageEvent (pageNum) {
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
	
	function  bindAllPageEvent(){
		for(var i = 1; i <= global_obj.data.page_count; i++){
			bindPageEvent(i);	
		}
		
		$("#prev").click(function(){
			pageList(global_obj.data.page_no-1);
		})
		
		$("#next").click(function(){
			pageList(global_obj.data.page_no+1);
		})
	}
	



