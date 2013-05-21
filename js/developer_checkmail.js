// JavaScript Document
	
var developer_cancelsubscribe = 
[       
	this.tpl.header, 
	'<div id="content" class="deverCon wrapper">',
		'<h3 class="formtitle">邮箱验证开发者身份</h3>',
		'<div class="devWrap">',
			'<div class="nopassTop clearfix">',
				'<div class="uicon">',			
					'<%if(developer && developer.head ){%>',
						'<img src="<%=developer.head%>/100" height="100" width="100" />',
					'<%}else{%>',
						'<img src="http://mat1.gtimg.com/app/opent/images/index/icon.jpg" height="100" width="100" />',
					'<%}%>',
				'</div> ',
				'<div class="right">',
					'<p><strong>开发者姓名：</strong><%=developer && developer.user_name ? developer.user_name : ""%></p>',
					'<p><strong>开发者类型：</strong><%if(developer && developer.user_type ? developer.user_type==1 : "false"){%>个人<%}else{%>公司<%}%></p>',
					'<p><strong>电子邮箱：</strong><span id="uemail"><%=developer && developer.user_email ? developer.user_email : ""%></span></p>',
					'<p><strong><a class="edit"">修改开发者资料</a></strong></p>',
				'</div>',
			'</div>',
			'<div class="nopassBottom clearfix">',
				'<div class="leftImg"></div>',
				'<p>你的电子邮箱尚未通过验证，还不能创建应用</p>',
				'<p>如果你设置的电子邮件未收到验证邮件，可 <strong><a class="edit">修改开发者资料</a></strong> 中的邮箱地址，重新获取验证邮件。</p>',
			'</div>',
		'</div>',
	'</div>', 
	this.tpl.footer
].join("");

global_obj.developer_detail.appMax = global_obj.data.developer.appMax;
global_obj.developer_detail.head = global_obj.data.developer.head;
var developer = global_obj.data.developer = global_obj.developer_detail;

$('#main').html(tmpl(developer_cancelsubscribe,global_obj.data));

$(function(){   
	if(developer && developer.user_type ? developer.user_type==1 : "false"){
		$('a.edit').attr('href','/developer/edit');
	}
	else{
		$('a.edit').attr('href','/developer/edit');
	}
	$('#edit').attr()
	var e=$("#uemail"),email=e.text(),url="";
	var edomain=(/@(.*)/.exec(email)||["",""])[1];
	if(edomain){
		switch(edomain){
			case "gmail.com":edomain="google.com";break;
		}
		e.html("<a href=\"http://mail."+edomain+"\" target=\"_blank\">"+email+"</a>");
	}
});
