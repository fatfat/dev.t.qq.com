global_obj.data.navPos=7;var comp=global_obj.data.comp=global_obj.data;var development_compinfoTmpl=[this.tpl.header,'<div id="content" class="controlCon main main_app">','<div class="approate">','<a href="/development/complist/">我的组件</a> &gt;  <span><%=comp.comp_name%></span>',"</div>",'<div class="deverLeft">','<div class="leftMain">','<div class="uicon"><!--用户头像-->','<img src="http://mat1.gtimg.com/app/opent/images/index/icon.jpg" height="75" width="75" />',"<br>","<%=comp.comp_name%>","</div>",'<ul class="appsnav">','<li class="active"><a href="/development/compinfo?comp_id=<%=comp.comp_id%>">组件信息</a></li>','<li><a href="/development/compsite?comp_id=<%=comp.comp_id%>">网站信息</a></li>',"<% if(comp.comp_type != 7){%>",'<li><a href="/development/compset?comp_id=<%=comp.comp_id%>">组件设置</a></li>',"<% } %>","</ul>","</div>","</div>",'<div class="deverRight">','<h1 class="comp_tit">组件信息概览</h1>','<ul class="appinfo">',"<%if(comp.comp_status==0){%>",'<li class="alert alert_warn">','<a href="javascript:;" class="hidebtn closealert">收起↑</a>',"<h4>你的组件已经被禁止使用</h4>",'<div class="alert_content">如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank" class="a1">联系我们</a></div>',"</li>","<%}else if(comp.comp_status==1){ %>",'<li class="alert alert_warn">','<a href="javascript:;" class="hidebtn closealert">收起↑</a>',"<h4>你的组件已可用</h4>",'<div class="alert_content">如需显示网站来源，可将组件 <a href="/development/compcheckuser?comp_id=<%=comp.comp_id%>" class="a1">提交审核</a>',"审核通过后，来源显示自动生效</div>","</li>","<%}else if(comp.comp_status==2){%>",'<li class="alert alert_warn">',"<h4>组件审核中</h4>","</li>","<%}else if(comp.comp_status==7){%>",'<li class="alert alert_warn">','<a href="javascript:;" class="hidebtn closealert">收起↑</a>',"<h4>你的组件未通过审核，原因如下：</h4>",'<div class="alert_content"><%=comp.comp_check_msg%><br/>','你可以修改后重新<a href="/development/compcheckuser?comp_id=<%=comp.comp_id%>" class="a1">提交审核</a>，如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" class="a1" target="_blank">联系我们</a></div>',"</li>","<%}else if(comp.comp_status==3){%>",'<li class="alert alert_warn">','<a href="javascript:;" class="hidebtn closealert"></a>',"<h4>你的组件已通过审核</h4>","</li>","<%}else{%>",'<li class="alert alert_warn">','<a href="javascript:;" class="hidebtn closealert">收起↑</a>',"<h4>你的组件为非法状态</h4>",'<div class="alert_content" class="a1">如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></div>',"</li>","<%}%>","<%if(comp.comp_bd_change){%>",'<li class="alert alert_warn" beclose="true">','<a href="javascript:;" class="hidebtn closealert">隐藏</a>',"<h4>管理员对你的组件进行了如下操作：</h4>",'<div class="alert_content" class="a1"><%=comp.comp_bd_change%><br/>','如有疑问请<a href="http://wiki.open.t.qq.com/index.php/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系我们</a></div>',"</li>","<%}%>",'<li><strong>网站名称：</strong><em><%=comp.comp_name%>&nbsp; &nbsp;<a href="/development/compsite?comp_id=<%=comp.comp_id%>">修改</a></em></li>','<li><strong>网站地址：</strong><em><a href="<%=comp.comp_url%>" target="_blank" class="a1"><%=comp.comp_url%></a>&nbsp; <a href="/development/compsite?comp_id=<%=comp.comp_id%>">修改</a></em></li>',' <li><strong>组件类型：</strong><em><%=comp.comp_type_name%>&nbsp; &nbsp;<a href="/websites/<%if(comp.comp_type==1||comp.comp_type==7){%>share<%}else if(comp.comp_type==2){%>followcomp<%}else if(comp.comp_type==3){%>wall<%}else if(comp.comp_type==4){%>qshare<%}else if(comp.comp_type==5){%>mood<%}else if(comp.comp_type==6){%>comment<%}else if(comp.comp_type==8){%>login<%}%>/" target="_blank">详细介绍</a></em></li>','<li><strong>接口权限：</strong><em><%=comp.comp_level_name%> | 通过审核后自动升级为高级&nbsp; &nbsp;<a href="http://wiki.open.t.qq.com/index.php/API%E8%B0%83%E7%94%A8%E6%9D%83%E9%99%90" target="_blank">查看接口权限详细说明&gt;&gt;</a></em></li>','<li><strong>来源显示：</strong><em><%=comp.comp_source_status_name%> | 通过审核后自动生效&nbsp; &nbsp;<a href="http://wiki.open.t.qq.com/index.php/%E4%BA%A7%E5%93%81%E7%B1%BBFAQ#.E6.8F.90.E4.BA.A4.E5.BA.94.E7.94.A8.E6.9D.A5.E6.BA.90.E5.AD.97.E6.AE.B5.E5.AE.A1.E6.A0.B8.E8.83.BD.E5.BE.97.E5.88.B0.E4.BB.80.E4.B9.88.E5.A5.BD.E5.A4.84.EF.BC.9F" target="_blank">查看来源显示详细说明&gt;&gt;</a></em></li>',"<li><strong>组件状态：</strong><em><%=comp.comp_status_name%>&nbsp;</em></li>","<% if(comp.comp_type != 7){ %>",'<li><strong>组件样式：</strong><em><span id="preview" style="display:block;width:580px;"></span><a href="/development/compset?comp_id=<%=comp.comp_id%>">修改</a></em></li>',"<% } %>",'<li><strong>组件代码：</strong><em class="alert">复制以下代码，粘贴到你的网页后台代码中，即可在网页中显示组件 <a href="http://mat1.gtimg.com/app/opent/demo/index1.html" class="comp_demo none" target="_blank"><span class="icon_demo"></span> 互动演示</a></em></li>',"<% if(comp.comp_type==7){ %>",'<li id="wapTypeList"><strong>&nbsp;</strong>','<em><input type="radio" name="wapTypes" value="1" checked="checked" id="wapTypeList1"/> <label for="wapTypeList1">wap 1.0</label> &nbsp;','<input type="radio" name="wapTypes" value="2" id="wapTypeList2"/> <label for="wapTypeList2">wap 2.0</label>  &nbsp;','<input type="radio" name="wapTypes" value="3" id="wapTypeList3"/> <label for="wapTypeList3">触屏版</label></em>',"</li>","<% } %>",'<li><strong>&nbsp;</strong><em id="code_area"><textarea style="width:100%;height:220px;" id="scripts"></textarea></em></li>','<li class="getcode">',"<span>",'<input type="checkbox" id="compress" checked/> <label for="compress">压缩代码</label>',"</span>",'<span title="有些网站的模板引擎会过滤反斜杠，使程序发生各种各样的问题，推荐使用此方法" style="margin-left:10px;display:none;" id="outlinkCode">','<input type="checkbox" id="outlink" checked/> <label for="outlink">外部调用<font style="font-size:12px;color:red;">(推荐)</font></label>',"</span>",'<a href="javascript:;" id="copybtn" class="btn_code">复制代码</a>',"</li>","<% if(comp.comp_type==7){ %>",'<li><strong>使用简介：</strong><em><a href="http://wiki.open.t.qq.com/index.php/%E4%B8%80%E9%94%AE%E8%BD%AC%E6%92%AD%E7%A7%BB%E5%8A%A8%E7%89%88" target="_blank">详细说明</a></em></li>',"<% } %>","</ul>","</div>","</div>",].join("\r");$("#main").append(tmpl(development_compinfoTmpl,global_obj.data));function compType1(){if(comp.comp_style){var h=comp.comp_style?comp.comp_style:{version:2,iconindex:1,showcounter:1,counterpos:"top"};var l=comp.comp_id;var e=h.iconindex;var k=h.counterpos;var m=h.showcounter;var c=((h.richable===undefined)?1:h.richable);var a='<div class="code_tit">1. 将以下代码插入到页面中需要部署分享按钮的地方</div><div contenteditAble="true" class="code">'+['&lt;div id="qqwb_share__" data-appkey="'+comp.comp_id+'" ','data-icon="'+e+'" ','data-counter="'+m+'" ',m?'data-counter_pos="'+k+'" ':"",'data-content="{title}" ',c&&'data-richcontent="{line1}|{line2}|{line3}" '||"",'data-pic="{pic}"&gt;&lt;/div&gt;'].join("").replace(/\{(\w+)\}/g,'<span class="c_red">{$1}</span>')+'</div><div class="code_tit">2. 将以下代码插入到<span class="c_green">&lt;/body&gt;</span>之前</div><div contenteditAble="true" class="code">&lt;script src="http://mat1.gtimg.com/app/openjs/openjs.js#autoboot=no&debug=no"&gt;&lt;/script&gt;</div><div class="code_tit">3. 把代码中标红的参数按以下说明进行相应替换</div><table width="100%" cellpadding="7" border="1" class="paratable"><tr><th>title</th><td>默认的文本内容或Rich化分享时的消息体标题，rich化时最多15个全角字符长度</td></tr>'+(function(n){if(n===0){return""}else{return"<tr><th>line1</th><td>Rich化消息体第一行文字，最多15个全角字符长度</td></tr><tr><th>line2</th><td>Rich化消息体第二行文字，最多15个全角字符长度</td></tr><tr><th>line3</th><td>Rich化消息体第三行文字，最多15个全角字符长度</td></tr>"}})(c)+"<tr><th>pic</th><td>需要被分享的图片url，多张图片以|分隔</td></tr></table>";function j(){var n="http://mat1.gtimg.com/app/newvt/share/images/";if(!m){return'<img src="'+n+"share_icon_"+e+'.png"></img>'}else{return'<img src="'+n+"share_icon_"+e+"_"+k+'.png"></img>'}}$(function(){$("#preview").html(j());$("#code_area").html(a).toggleClass("reflow");$("#compress").attr("disabled",true);$(".getcode").hide();$(".comp_demo").removeClass("none")})}else{var g=comp.comp_type,h=comp.comp_style?comp.comp_style:{btnstyle:1,btnsize:1,btntext:"分享到腾讯微博",assname:"api_weibo",qshareable:1,qsharestyle:0},l=comp.comp_id,a="",i="share_btn_qq";qsharebtn=["w:118;h:25;b:share/qshare.png;","w:92;h:22;b:qshare/icon3.gif;","w:92;h:22;b:qshare/icon.gif;","w:59;h:22;b:qshare/icon2.png;","w:32;h:32;b:qshare/icon3.png;","w:28;h:28;b:qshare/icon4.png;","w:63;h:25;b:qshare/icon5.png;","w:68;h:23;b:qshare/icon6.png;"];var f="http://mat1.gtimg.com/app/opent/images/websites/"+["share/qshare.png","qshare/icon3.gif","qshare/icon.gif","qshare/icon2.png","qshare/icon3.png","qshare/icon4.png","qshare/icon5.png","qshare/icon6.png"][h.btnstyle];function d(n){if(g==1){if(h.btnstyle==1){a='<a href="javascript:;" class="tmblog" id="'+i+'"><img src="http://mat1.gtimg.com/app/opent/images/websites/share/'+["","b32.png","b24.png","b16.png"][h.btnsize]+'" border="0" alt="'+h.btntext+'"/></a>'}else{if(h.btnstyle==2){a='<a href="javascript:;" class="tmblog" id="'+i+'" style="font-size:'+[18,18,14,12][h.btnsize]+'px;"> <img src="http://mat1.gtimg.com/app/opent/images/websites/share/weiboicon'+["",32,24,16][h.btnsize]+'.png" border="0" alt="'+h.btntext+'" valign="middle">'+(h.btntext&&(" "+h.btntext))+"</a>"}}$("#preview").html(a);if($("#outlink").is(":checked")){a='1. 将以下代码插入到页面中需要部署分享按钮的地方<div class="code" contenteditAble=true>'+a.replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</div>";a+='2. 将以下代码插入到<span class="c_green">&lt;/body&gt;</span>之前\n';a+='<div class="code" contenteditAble=true>&lt;script src="http://mat1.gtimg.com/app/opent/js/qshare'+(n&&"_min"||"")+'.js"&gt;&lt;/script&gt;';a+='\n&lt;script&gt;\n_share_tencent_weibo({\n\t"appkey":"'+l+'"\t/*你从腾讯微博开放平台获得的appkey*/';a+='\n\t,"btn":document.getElementById("'+i+'")\t/*一键分享按钮*/';if(h.qshareable){a+='\n\t,"qicon":'+qsharebtn[h.qsharestyle].replace(/w:(\d+);h:(\d+);b:q?share\/([^;]+);/,'{"width":$1,"height":$2,"name":"$3"}\t/*选中文字后出现的分享按钮样式*/')}else{a+='\n\t,"qshareable":false\t/*不绑定Q-Share功能*/'}a+="\n\t/*\n\t\tlin1、line2、line3是rich化参数，请将红色文字内空替换为所需要的文本\n\t\t不想配置rich化功能，可将line1、line2、line3参数删除\n\t*/";a+='\n\t,line1:"<span class="c_red">{line1}</span>"\t /*Rich化消息体第一行文字，最多15个全角字符长度*/';a+='\n\t,line2:"<span class="c_red">{line2}</span>"\t /*Rich化消息体第二行文字，最多15个全角字符长度*/';a+='\n\t,line3:"<span class="c_red">{line3}</span>"\t /*Rich化消息体第三行文字，最多15个全角字符长度*/';a+="\n\t/*\n\t\tbm参数可配置为精简版，如果使用完整版，可bm参数删除\n\t\tbm=0\t不显示同步到Qzone、不显示@好友功能\n\t\tbm=1\t默认值，既显示同步到Qzone，又显示@好友\n\t\tbm=101\t显示同步到Qzone，不显示@好友;\n\t\tbm=110\t显示同步到Qzone,不显示@好友\n\t*/";a+="\n\t,bm:1\t/*使用完整版*/";a+="\n});\n&lt;/script&gt;</div>";a=a.replace(/\/\*([^\*\/]*)?\*\//g,'<span class="c_green">/*$1*/</span>')}else{a='1. 将以下代码插入到页面中需要部署分享按钮的地方<div class="code" contenteditAble=true>'+a.replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</div>";a+='2. 将以下代码插入到<span class="c_green">&lt;/body&gt;</span>之前\n';a+='<div class="code" contenteditAble=true>'+["&lt;script&gt;",$("#code"+(h.qshareable+0)+(n+0)).val().replace(/\/\*([\s\S]*)?\*\//g,'<span class="c_green">/*$1*/</span>'),"&lt;/script&gt;"].join("\n")+"</div>";a=a.replace("$assname$",h.assname).replace("$appkey$",l).replace("$share_btn$",i).replace("$css$",qsharebtn[h.qsharestyle].replace(/w:(\d+)?;h:(\d+)?;b:([^;]*)?;/g,"width:$1px;height:$2px;background:url(http://mat1.gtimg.com/app/opent/images/websites/$3);"))}$("#code_area").html("<pre>"+a+"</pre>")}}d(true);$("#outlinkCode").click(function(){d($("#compress").is(":checked"))}).show();$("#compress").click(function(){d($(this).is(":checked"))});function b(){}}}function compType2(){var b=comp.comp_style?comp.comp_style:{names:"",colorstyle:0,customcolor:"#fff",iconsize:0};var a=comp.comp_id;if(b.followtype===0){$("#scripts").val(decodeURIComponent(b.htm))}else{$("#scripts").val("<iframe frameborder='0' scrolling='auto' src='"+("http://follow.v.t.qq.com/index.php?c=follow&a=index&appkey="+a+"&bg="+["fff",b.customcolor.replace("#","")][b.colorstyle]+"&hsize="+[100,50][b.iconsize]+"&name="+b.names.replace(/\|/g,","))+"' width='301' height='"+(50+Math.ceil(b.names.split("|").length/3)*80)+"'></iframe>")}$("#preview").html($("#scripts").val());$(".getcode span").css("visibility","hidden")}function compType3(){var c=comp.comp_style?comp.comp_style:{topicnames:"%E7%BE%8E%E5%A5%B3,%E6%B8%94%E6%B0%B4%E4%B9%8B%E6%AC%A2,%E7%A6%8F%E5%88%A9",width:300,height:550,autowidth:true,colorstyle:1,defaultcolorstyle:4,customcolor:"B9FF40_FFF0D1_6A437A_63FFBC_91FFCF_54FF82",imgshow:0,postpos:0};var a=comp.comp_id;function d(){var e=[],i=c.colorstyle*4,g=c.topicnames.replace(/,/g,"|");var h=comp.comp_id||801000271;var f="http://wall.v.t.qq.com/index.php?c=wall&a=index&t="+g;f+="&ak="+h;f+="&w="+[c.width,0][0+c.autowidth];f+="&h="+c.height;f+="&n="+c.wbname;f+="&url="+c.wburl;f+="&s="+c.defaultcolorstyle;f+="&o="+function(){var j=7;switch(c.imgshow||0){case 0:j&=~parseInt(1<<1,"0x");break;case 1:j|=parseInt(1<<1,"0x");break}switch(c.postpos||0){case 0:j|=parseInt(1<<3,"0x");j|=parseInt(1<<2,"0x");break;case 1:j&=~parseInt(1<<3,"0x");j|=parseInt(1<<2,"0x");break;default:j&=~parseInt(1<<2,"0x")}switch(c.tmodel||0){case 0:j&=~parseInt(1<<5,"0x");break;case 5:j|=parseInt(1<<5,"0x");break}return j}();return f}var b=d();$("#scripts").val('<iframe frameborder="0" scrolling="no" src="'+b+'" width="'+[c.width,"100%"][0+c.autowidth]+'" height="'+c.height+'"></iframe>');$("#preview").html($("#scripts").val());$(".getcode span").css("visibility","hidden")}function compType4(){var d=comp.comp_style?comp.comp_style:{assname:"",qsharestyle:0};var a=comp.comp_id;var c=["w:118;h:25;b:share/qshare.png;","w:92;h:22;b:qshare/icon3.gif;","w:92;h:22;b:qshare/icon.gif;","w:59;h:22;b:qshare/icon2.png;","w:32;h:32;b:qshare/icon3.png;","w:28;h:28;b:qshare/icon4.png;","w:63;h:25;b:qshare/icon5.png;","w:68;h:23;b:qshare/icon6.png;"];$("#preview").html(c[d.qsharestyle||0].replace(/w:(\d+)?;h:(\d+)?;b:([^;]*)?;/g,'<img src="http://mat1.gtimg.com/app/opent/images/websites/$3" border="0">'));function b(f){if($("#outlink").is(":checked")){var e='<script src="http://mat1.gtimg.com/app/opent/js/qshare'+(f&&"_min"||"")+'.js"><\/script>\n';e+='<script>\n_share_tencent_weibo({\n\t"appkey":"'+a+'"\t/*你从腾讯微博开放平台获得的appkey*/';e+='\n\t,"qicon":'+c[d.qsharestyle].replace(/w:(\d+);h:(\d+);b:q?share\/([^;]+);/,'{"width":$1,"height":$2,"name":"$3"}\t/*选中文字后出现的分享按钮样式*/');if(d.assname){e+='\n\t,"assname":"'+d.assname+'"\t/*分享后收听的微博帐号*/'}e+="\n/*以下参数非必须，建议您删除掉*/\n";e+=',"pic": "http://app.qpic.cn/mblogpic/4df7ef943f773edef66c/2000|http://app.qpic.cn/mblogpic/fceb497309f311c76ce8/2000"	/*分享的图片，注意请先将图片地址进行urlencode后再用|进行合并，删除此参数程序将自行抓取网页中所有50*50以上大小的图片*/';e+=',"title": "您想要分享的文字内容..."	/*分享的内容，删除此参数程序获取网页中<title></title>标签之间的内容来填充*/';e+=',"url": "指定你想要分享的页面网址"   /*分享链接，删除此参数程序自动获取使用本代码的网页链接*/';e+="\n});\n<\/script>";$("#scripts").val(e)}else{$("#scripts").val("<script>\n"+$("#code0"+((f||0)+0)).val().replace("$appkey$",a).replace("$css$",c[d.qsharestyle||0].replace(/w:(\d+)?;h:(\d+)?;b:([^;]*)?;/g,"width:$1px;height:$2px;background:url(http://mat1.gtimg.com/app/opent/images/websites/$3);")).replace("$assname$",encodeURIComponent(d.assname))+"\n<\/script>")}}b(true);$("#compress").click(function(){b($(this).is(":checked"))});$("#outlinkCode").click(function(){b($("#compress").is(":checked"))}).show()}function compType5(){var c=comp.comp_style?comp.comp_style:{assname:"api_weibo",width:300,height:"108",autowidth:true,autoheight:true};var a=comp.comp_id;var b="http://emotion.v.t.qq.com/index.php?c=emotion&a=index";b+="&appkey="+a;b+="&name="+(c.assname||"");b+="&w="+([c.width,0][0+c.autowidth]);b+="&h="+([c.height-10,0][0+c.autoheight]);$("#scripts").val('<iframe frameborder="0" marginwidth="0" marginheight="0" scrolling="no" src="'+b+'" width="'+[c.width,"100%"][0+c.autowidth]+'" height="'+[c.height,"auto"][0+c.autoheight]+'"></iframe>');$("#preview").html($("#scripts").val()).find("iframe").attr("height",125);$(".getcode span").css("visibility","hidden")}function compType6(){var c=comp.comp_style?comp.comp_style:{width:300,height:550,autowidth:true,colorstyle:1,defaultcolorstyle:-1,customcolor:"white_white_white_white"};var a=comp.comp_id;function d(){var g=c.colorstyle*4;var f=comp.comp_id||"801318648";var e="http://comment.v.t.qq.com/index.html";e+="#appkey="+f;e+="&width="+[c.width,0][0+c.autowidth];e+="&height="+c.height;e+="&url="+encodeURI(c.url);if(g==4){e+="&colorset="+c.customcolor}return e}var b=d();$("#scripts").val(['<div id="qqwb_comment__" data-appkey="'+comp.comp_id+'" data-width="',[c.width,"100%"][0+c.autowidth],'" data-height="',c.height,'"',(c.colorstyle==1?' data-colors="'+decodeURIComponent(c.customcolor)+'"':""),"></div>",'\n<script src="http://mat1.gtimg.com/app/openjs/openjs.js#debug=yes&autoboot=no"><\/script>'].join(""));$("#preview").html('<iframe frameborder="0" scrolling="no" src="'+b+'" width="'+[c.width,"100%"][0+c.autowidth]+'" height="'+c.height+'"></iframe>');$(".getcode span").css("visibility","hidden")}function compType7(){var a=comp.comp_id;function c(d){var e="";if(d=="1"){e+='<!-- 将以下代码插入到页面中的相应位置 -->\n<anchor>分享至腾讯微博\n  <go href="http://ti.3g.qq.com/open/s?aid=share" method="post">\n    <postfield name="sbid" value="'+comp.comp_id+'" />\n    <postfield name="msg" value="替换此处为要分享的内容" />\n    <!-- 无图片可删除此项 -->\n    <postfield name="image" value="替换此处为图片的链接" />\n    <!-- 返回链接必须与申请时的域名一致 -->\n    <postfield name="return" value="替换此处为返回链接" />\n    <postfield name="g_ut" value="'+d+'" />\n  </go>\n</anchor>\n'}else{if(d=="2"||d=="3"){e+='<!-- 将以下代码插入到页面中的相应位置 -->\n<form action="http://ti.3g.qq.com/open/s?aid=share" method="post">\n  <input type="hidden" name="sbid" value="'+comp.comp_id+'" />\n  <input type="hidden" name="msg" value="替换此处为要分享的内容" />\n  <!-- 无图片可删除此项 -->\n  <input type="hidden" name="image" value="替换此处为图片的链接" />\n  <!-- 返回链接必须与申请时的域名一致 -->\n  <input type="hidden" name="return" value="替换此处为返回链接" />\n  <input type="hidden" name="g_ut" value="'+d+'" />\n  <input type="submit" value="分享至腾讯微博" />\n</form>\n'}}return e}$(function(){b();$("#wapTypeList input").change(function(){b()});$("#compress").attr("disabled",true)});function b(){var f=$("input[name=wapTypes]:checked");var e=f.val();var d=c(e);$("#scripts").val(d).toggleClass("reflow")}}function compType8(){var a=comp.comp_id;var d=comp.comp_style?comp.comp_style:{b_type:0,b_size:0,a_type:0};function c(){var f="http://mat1.gtimg.com/app/opent/images/websites/login/login_icon_"+[[1,2,3,4][+d.b_size],5,6][+d.b_type]+".png";return'<img src="'+f+'"/>'}function e(k,i){var h=i.b_type,j=h>0?0:(+i.b_size),g=i.a_type,f='  <!doctype html>\n  <html>\n    <head>\n      <meta charset = "utf-8">\n      <title>腾讯微博登录组件</title>\n      <style type="text/css">\n        .login_btn{display:inline-block;background-repeat:no-repeat;font-size:12px;text-decoration:none;color:#055675;}\n        .login_btn00{width:230px;height:48px;background-image:url(http://mat1.gtimg.com/app/opent/images/websites/login/login_icon_1.png);}\n        .login_btn01{width:170px;height:32px;background-image:url(http://mat1.gtimg.com/app/opent/images/websites/login/login_icon_2.png);}\n        .login_btn02{width:120px;height:24px;background-image:url(http://mat1.gtimg.com/app/opent/images/websites/login/login_icon_3.png);}\n        .login_btn03{width:105px;height:16px;background-image:url(http://mat1.gtimg.com/app/opent/images/websites/login/login_icon_4.png);}\n        .login_btn10{padding-left:20px;background-image:url(http://mat1.gtimg.com/app/opent/images/websites/share/weiboicon16.png);}\n        .login_btn20{}\n        img{border:none;vertical-align:middle;}\n        .logout_btn{display:none;margin:0px;padding:0px;font-size:12px;line-height:1.75;font-family:Arial,Helvetica,sans-serif;vertical-align:middle;color:rgb(100,100,100,);}\n        .head_img{display:inline-block;vertical-align:middle;}\n        .head_img img{vertical-align:middle;}\n        .logout_right{display:inline-block;vertical-align:middle;}\n        .nick_text{display:inline-block;margin-left:4px;text-decoration:initial;color:rgb(0,120,182);}\n        .logout_text{margin-left:5px;vertical-align:middle;text-decoration:initial;color:rgb(153,153,153);cursor:pointer;}\n      </style>\n      &lt;script src="http://mat1.gtimg.com/app/openjs/openjs.js"&gt;&lt;/script&gt;\n    </head>\n    <body>\n      <div class="qq_account_log" id="qq_account_log">\n        <a class="login_btn login_btn'+h+j+'" id="login_btn" href="javascript:;">\n'+(h>0?"\t\t微博登录":"")+'        </a>\n        <div class="logout_btn" id="logout_btn"></div>\n      </div>\n      &lt;script defer="defer"&gt;\n        var login_btn = document.getElementById("login_btn"),\n            logout_btn = document.getElementById("logout_btn");\n        function login(){\n          T.login(function(loginStatus){\n            getUserInfo();\n            login_btn.style.display = "none"\n            logout_btn.style.display = "inline-block";\n          },function(loginError){\n             alert(loginError.message);\n          });\n        }\n        function logout(){\n          logout_btn.style.display = "none";\n          login_btn.style.display = "inline-block";\n          T.logout();\n        }\n        function getUserInfo(){\n          T.api("/user/info")\n          .success(function(response){\n            if(response.ret === 0){\n';if(g===2){f+='              var html="",data=response.data;\n              html=\'<span class="logout_right"><a class="nick_text" href="http://t.qq.com/\' + response.data.name +\'" target="_blank" title="\'+response.data.nick +\'">\'+ response.data.nick +\'</a><a class="logout_text" id="logout_text"　href="javascript:void(0);">退出</a></span>\';\n'}else{f+='              var html="",imgsrc="",data=response.data;\n';if(g===0){f+='              if(!!data.head) {\n                 imgsrc = data.head +"/20";\n              }else {\n                imgsrc = "http://mat1.gtimg.com/app/openjs/widget/static/connect/images/head_normal_20.png";\n              }\n'}else{if(g===1){f+='              imgsrc = "http://mat1.gtimg.com/app/opent/images/websites/login/logo.png"\n'}}f+='              html = \'<a class="head_img" href="http://t.qq.com/\'+ data.name +\'" target="_blank"><img src="\'+ imgsrc +\'" /></a><span class="logout_right"><a class="nick_text" href="http://t.qq.com/\' + data.name +\'" target="_blank" title="\'+data.nick +\'">\'+ data.nick +\'</a><a class="logout_text" id="logout_text"　href="javascript:void(0);">退出</a></span>\';\n'}f+='              logout_btn.innerHTML = html;\n              var logout_text = document.getElementById("logout_text");\n              logout_text.onclick = logout;\n            }else{\n              alert(response.ret);\n            }\n          })\n          .error(function(code,message){\n            alert(message);\n          });\n        }\n        function init(){\n          T.init({appkey:'+k+'});\n          if(!T.loginStatus()){\n            login_btn.style.display = "inline-block";\n            logout_btn.style.display = "none";\n          }else{\n            getUserInfo();\n            login_btn.style.display = "none";\n            logout_btn.style.display = "inline-block";\n          }\n          login_btn.onclick = login;\n        }\n        init();\n      &lt;/script&gt;\n    </body>\n  </html>\n';return f}function b(){var f=e(a,d).replace(/&lt;/g,"<").replace(/&gt;/g,">");$("#scripts").val(f);setTimeout(function(){$("#scripts").toggleClass("reflow")},0)}$(function(){$("#preview").html(c());$("#compress").attr("disabled",true);$(".getcode").hide();b()})}$(".appinfo li.alert").find(".hidebtn").click(function(){var a=$(this),b=a.parent(),c=b.find(".alert_content");if(b.attr("beclose")){b.hide();$.get("/development/ajaxcompalert/<%=comp.comp_id%>?t="+new Date().getTime());return}if(c.is(":visible")){c.slideUp("fast");a.html("展开↓")}else{c.slideDown("fast");a.html("收起↑")}});if(comp.comp_type==1){compType1()}else{if(comp.comp_type==2){compType2()}else{if(comp.comp_type==3){compType3()}else{if(comp.comp_type==4){compType4()}else{if(comp.comp_type==5){compType5()}else{if(comp.comp_type==7){compType7()}else{if(comp.comp_type==6){compType6()}else{if(comp.comp_type==8){compType8()}}}}}}}}$("#main").append(this.tpl.footer);$(".code").click(function(){var b=$(this)[0],a;if(document.createRange){a=document.createRange();a.selectNodeContents(b);sel=window.getSelection();sel.removeAllRanges();sel.addRange(a)}else{if(document.body.createTextRange){a=document.body.createTextRange();a.moveToElementText(b);a.select()}else{if(window.getSelection){a=window.getSelection();a.setBaseAndExtent(b,0,b,1)}}}});