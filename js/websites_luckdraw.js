;(function(){
	tpl.luckdraw = [
		'<!--{ include file="header.tpl" }-->',
		tpl.header,
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css?20120110" rel="stylesheet" type="text/css"/> ',
		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>微抽奖</span></div>',
		'<div id="content" class="wrapper main main_comp">',
		'<!--{ include file="./websites/appnav.tpl" }-->',
		tpl.websites_appnav,
		'<div class="appsArea2"> ',
		'<h2 class="apptit">',
					'<strong>使用微博组件 —— 微抽奖</strong>',
			'</h2>',
		'<p class="p">使用微博微抽奖，填写您的抽奖方式和中奖条件，提交申请，系统就会为您统计中奖用户，中奖结果会以邮件方式通知您填写的抽奖邮箱<span style="color:#f00;">（注：您必须是加V用户才能使用该功能）</span>。</p>',
		'<h3 class="hbline"><strong>基本设置</strong></h3>',
		'<%if(hadlogin){%>',
			'<form action="/luckdraw/submit" method="post" id="tempForm" class="openForm" >',
			'<input type="hidden"  name="weibo"  value="<%=encodeHTML(userInfo.name)%>">',
			'<input type="hidden"  name="olduin"  value="<%=encodeHTML(userInfo.uin)%>">',
			'<li style="margin-top:10px">',
			'<label class="leftword">抽奖对象：</label>',
			'<input id="Audience" class="obj" type="radio"  checked="" value="1" name="type">',
			'<label for="Audience" class="padRight">听众</label>',
			'<input id="Participants" class="obj" type="radio"   value="6" name="type">',
			'<label for="Participants">话题参与者</label>',
			'<input id="Broadcast"  class="obj" type="radio"  value="4" name="type">',
			'<label for="Broadcast">转播者</label>',
			'</li>',
			'<li style="margin-top:10px" id="topic" value="1">',
			'<label class="leftword"  ><em>*</em>话题名称：</label>',
			'<span class="inputBg"><input type="text" class="txt" id="inputt" name="topic" value="" data-rule="htname" data-error="话题名称"></span></br>',
			'<cite class="garyNotice" style="margin-left: 28px">最多20个汉字</cite>',
			'</li>',
			'<li style="margin-top:10px" id="url" value="1">',
			'<label class="leftword"  ><em>*</em>被转播广播url：</label>',
			'<span class="inputBg"><input type="text" class="txt" id="inputu" name="url" value="" data-rule="link" data-error="广播URL"></span></br>',
			'<cite class="garyNotice" style="margin-left: 28px">还没发广播？<a href="http://t.qq.com">点击</a>发表新广播</br>在微博主站点点击一条广播的详情，跳转到的页面地址即为广播的URL</br>请确保此广播由您填写的活动官方微博帐号发出</cite>',
			'</li>',
			'<li style="margin-top:10px">',
			'<label class="leftword"><em>*</em>抽取第</label>',
			'<span class="inputBg" style="background-color: #fff"; ><input type="text"  class="txt1" id="numbers" name="numbers" value="" data-rule="numbers" data-error="第几名用户是中奖用户"> 名用户为中奖用户</span>',
			'<cite class="garyNotice" style="margin-left: 28px">抽取多名用户请用分号分割不同数字(如：1；3；10)</br>为避免活动参与用户数增长过快导致中奖用户被漏掉，</br>请根据用户增加速度酌情填写中奖用户排名。</cite>',
			'</li>',
			'<li style="margin-top:10px">',
			'<label class="leftword"><em>*</em>活动简介：</label>',
			'<span class="inputBg"><input type="text" class="txt" name="introduction" value="" data-rule="introduction" data-error="活动简介"></span>',
			'</li>',
			'<li style="margin-top:10px">',
			'<label class="leftword"><em>*</em>活动截至时间：</label>',
			'<span class="inputBg"><input type="text" class="txt" name="time" value="" data-rule="time" data-error="活动截至时间"></span>',
			'<cite class="garyNotice" style="margin-left: 28px">活动截至时间填写如（2012-12-30 12:00:00）</cite>',
			'</li>',
			'<li style="margin-top:10px">',
			'<label class="leftword"><em>*</em>活动邮箱地址：</label>',
			'<span class="inputBg"><input type="text" class="txt" name="email" value="" data-rule="email" data-error="接收信息的邮箱"></span>',
			'<cite class="garyNotice" style="margin-left: 28px">邮箱用于接收中奖信息</cite>',
			'</li>',
			'</br><label class="leftword"></label>',
			'<input type="button"  id="sb" class="devSubmit" value="提交" data-rule="formauto" />',
			'</form>',
		'<%}%{%>',
			'<p >您尚未登录，请<a href="http://t.qq.com">登录</a>后使用微博抽奖系统</p>',
		'<%}%>',
		'</div>',
		'</div> ',
		'<!--{ include file="footer.tpl" }-->',
		tpl.footer,
	].join('');
	$('#main').html(tmpl(tpl.luckdraw,global_obj.data));
	util.createScript("http://mat1.gtimg.com/app/opent/js/luckdraw.js");
	encodeHTML = function (source) {
        return String(source)
            .replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/\\/g,'&#92;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;');
    };
	$(document).ready(function(){
	    if($("#Audience").attr("checked")==true){
	        js1();
	        }
	    else if($("#Participants").attr("checked")==true){
	        js2();
	        }
	    else if($("#Broadcast").attr("checked")==true){
	        js3();
	    }

	    $("#Audience").click(function(){
	        js1();
	    });
	    
	    $("#Participants").click(function(){
	        js2();
	    });
	    $("#Broadcast").click(function(){
	        js3();
	    });
	       $("#inputt").blur(function(){
	           $.get("/luckdraw/getNum?t="+Math.random(), {type: 6, topic: $("#inputt").val()},
	                function(data){
	               $("#tnum").val(data.num);
	                   },"json");
	        });
	       $("#inputu").blur(function(){
	           $.get("/luckdraw/getNum?t="+Math.random(), {type: 4, url: $("#inputu").val()},
	                   function(data){
	                  $("#unum").val(data.num);
	                      },"json");
	       });

	});
	function js1(){
	    $("#url").hide();
	    $("#topic").hide();
	    $("#fannum").show();
	    $("#inputt").val("1");
	    $("#inputu").val('http://t.qq.com/p/t/27649018272690');
	    $.get("/luckdraw/getNum?t="+Math.random(), {type: 1, weibo: "<!--{$userInfo.name}-->"},
	            function(data){
	           $("#fnum").val(data.num);
	               },"json");
	}
	function js2(){
		 $("#inputt").val('');
	    $("#topic").show();
	    $("#url").hide();
	    $("#fannum").hide();
	    $("#inputu").val('http://t.qq.com/p/t/27649018272690');
	    $.get("/luckdraw/getNum?t="+Math.random(), {type: 6, topic: $("#inputt").val()},
	            function(data){
	           $("#tnum").val(data.num);
	               },"json");
	}
	function js3(){
		$("#inputu").val('');
	    $("#topic").hide();
	    $("#url").show();
	    $("#fannum").hide();
	    $("#inputt").val('1');
	    $.get("/luckdraw/getNum?t="+Math.random(), {type: 4, url: $("#inputu").val()},
	            function(data){
	           $("#unum").val(data.num);
	               },"json");
	}
})();

