// JavaScript Document
	
var developer_bedever = 
[       
	headerTmpl, 
	'<div id="content" class="deverCon wrapper">',
		'<h3 class="formtitle">填写个人资料，获取开发者资格，就能创建自己的应用。</h3>',
		'<div class="devWrap">',
			'<h2 style="color:#366799"><strong>如何开发微博应用？</strong></h2>',
			'<p class="introWords">你只需要按照如下步骤操作：</p>',
			'<p class="introWords"><strong>第一步：</strong>填写你的个人信息</p>',
			'<p class="introWords"><strong>第二步：</strong>创建应用获取微博App Key和App Secret，调用微博API进行应用开发</p>',
			'<a class="linkBtn" id="linkBtn" href="developer_add.html">马上成为开发者</a>',
		'</div>',
	'</div> ',
	footerTmpl
].join("");

$(function(){   
	$(document.body).append(tmpl(developer_bedever,{}));
})
	