﻿// JavaScript Document
	
var developer_checkusermail = 
[       
	headerTmpl,
	'<div id="content" class="deverCon clearfix">',
		'<div class="title2">',
			'<h3>邮箱验证开发者身份 </h3>',
		'</div>',
		'<div class="devWrap">',
			'<p class="title3" id="tit"><strong><%=updateInfo.msg%></strong></p>',
			'<div class="emailGo">',
				'<span class="emailLogo"></span>',
				'<span class="emailRight">',
					'<span class="emailTip" id="infos">验证邮件已发送至  <a title= "<%=mail_domain%>" target="_blank" href="<%=mail_domain%>"><%=mail_address%></a></span>',
					'<span class="emailnotice">(请在48小时内完成验证，48小时后邮件将失效，你需要重新填写注册次信息。)</span>',
				'</span>',
			'</div>',
			'<p class="title3"><strong>没有收到邮件？</strong></p>',
			'<p id="tips">可以到垃圾邮件目录里找找，或者<a href="javascript:;" id="sendMail">点击这里</a> 重新发送验证邮件。</p>',
		'</div>',
	'</div> ',
	footerTmpl
].join("");

$(function(){   
	$(document.body).append(tmpl(developer_checkusermail,data));
	var mail_domain = "www.qq.com";
	var mail_address = '76516702@qq.com';
    $('#sendMail').click(function(){
        //$url = 'http://open.t.qq.com/cgi-bin/send_mail?m='+Math.random();//{"ret":0}
       	var $url = '/developer/sendmail';
        $.getJSON($url,function(d){
        	if(d && (d.ret==0)){
	            $('#tit').html('<span style="color:#3A8DC9">激活邮件已重新发送</span>');
	            $('#infos').html( '系统已经重新发送了一封激活邮件至<a href=' + mail_domain + 'target="_blank">' + mail_address + '</a>');
	            $('#tips').html('1. 请到邮箱中的垃圾邮件、广告邮件目录中找找看<br>2. 如果你总是收不到激活邮件，我们建议你 <a href="javascript:history.go(-1);">更换一个Email地址</a>');
            }
            else{
            	alert("邮件发送失败！");
            }
        });
    });
})