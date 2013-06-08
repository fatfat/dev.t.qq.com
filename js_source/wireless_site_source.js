var wireless_site = [
this.tpl.header,
'<link href="http://mat1.gtimg.com/app/opent/css/wireless/wireless.css?20120110" rel="stylesheet" type="text/css"/>',
'<div class="wrapper breadcast">',
'</div>',
'<div id="content" class="wrapper main main_comp">',
    this.tpl.wireless_osnav,
    '<div class="appsArea2">',
		'<h1 class="comp_tit">移动站点接入</h1>',
        '<p class="w_p4">移动站点可通过多种形式接入腾讯微博。使用腾讯微博账号登录网站，可省略繁琐的注册步骤，降低用户的使用门槛，减少用户流失提高用户活跃度。分享功能不但能够给移动站点带来品牌曝光的宣传展示，还能够通过用户在腾讯微博的社交关系达到合作方内容在微博平台裂变式传播的效果，为合作网站带来更多的流量以及新用户。</p>',
        '<h2 class="comp_sub_tit">一键分享</h2>',
        '<p class="w_p3">一键分享是将分享按钮嵌入到你的应用或者移动网站里，当你的用户点击它就能将网页名称+网址+指定图片， 转发到腾讯微博，分享给他们的听众，增加网站的访问流量。</p>',
        '<p class="w_p1">PC版的一键分享代码完美支持触屏了，您只需要申请PC版的一键分享代码即可用在您的移动站点上了。</p>',
        '<div class="w_p3 w_usewrap">',
            '<!--span>一键分享（Wap版）</span><a href="" class="w_usebtn">立即使用</a-->',
            '<span >一键分享（触屏版）</span><a href="http://dev.t.qq.com/websites/share/" class="w_usebtn">立即使用</a> ',
        '</div>',
        '<div class="w_div1">',
            '<p>图例示意</p>',
            '<img src="http://mat1.gtimg.com/app/opent/images/wireless/share_demo.jpg" />',
        '</div>',
	'</div>  ',
'</div>',
this.tpl.footer
].join("");
$("#main").append(tmpl(wireless_site,global_obj.data));
$('#w_showdemo').toggle(
    function(){
        $('#w_showcon').animate({height: 'toggle', opacity: 'toggle'}, "slow");
        $(this).text('收起效果预览');
        $(this).next('em').addClass('up');
    },
    function(){
        $('#w_showcon').animate({height: 'toggle', opacity: 'toggle'}, "slow");
        $(this).text('查看效果预览');
        $(this).next('em').removeClass('up');
    }
);
this.bindAllEvent();
util.setLoginInfo();
window.init();
