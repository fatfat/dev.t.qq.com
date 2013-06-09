
var wireless_android = [
this.tpl.header,
'<link href="http://mat1.gtimg.com/app/opent/css/wireless/wireless.css?20120110" rel="stylesheet" type="text/css"/>',
'<div class="wrapper breadcast">',
'</div>',
'<div id="content" class="wrapper main main_comp">',
    this.tpl.wireless_osnav,
    '<div class="appsArea2">',
		'<h1 class="comp_tit">腾讯微博无线接入 for Android</h1>',
        '<div class="w_downwrap">',
            '<a class="w_downsdk" target="_blank" href="http://mat1.gtimg.com/app/opent/download/sdk/Android_SDK_v1.2.zip">下载SDK</a>',
            '<a href="/wireless/intro/" class="guide">查看接入指引></a>',
        '</div>',
        '<h2 class="comp_sub_tit">授权登录</h2>',
        '<p class="w_p1">为了更好的帮助第三方接入无线应用，微博无线应用开放平台提供了支持iOS、Android及Windows Phone7的SDK，封装了微博登录及部分微博开放API接口，应用只需要修改相应参数，不需要理解验证授权流程，即可实现微博登录功能。</p>',
        '<h2 class="comp_sub_tit">一键分享</h2>',
        '<p class="w_p1">一键分享是将分享按钮嵌入到你的应用或者移动网站里，当你的用户点击它就能将网页名称+网址+指定图片，转发到腾讯微博，分享给他们的听众，增加网站的访问流量。<br/>PC版的一键分享代码完美支持触屏了，您只需要申请PC版的一键分享代码即可在用在您的移动站点上了。</p>',
        '<h2 class="comp_sub_tit">合作伙伴</h2>',
        '<div class="w_partners">',
            '<ul class="clearfix">',
                '<li>',
                    '<a >',
                        '<img src="http://mat1.gtimg.com/app/opent/images/wireless/company/w_com_kg.jpg" height="72" width="72" />',
                    '</a>',
                    '<a class="w_name" title="酷狗" >酷狗</a>',
                '</li>',
                '<li>',
                    '<a >',
                        '<img src="http://mat1.gtimg.com/app/opent/images/wireless/company/w_com_mjtq.jpg" height="72" width="72" />',
                    '</a>',
                    '<a class="w_name" title="墨迹天气" >墨迹天气</a>',
                '</li>',
                '<li>',
                    '<a >',
                        '<img src="http://mat1.gtimg.com/app/opent/images/wireless/company/w_com_shxw.jpg" height="72" width="72" />',
                    '</a>',
                    '<a class="w_name" title="搜狐新闻" >搜狐新闻</a>',
                '</li>',
                '<li>',
                    '<a >',
                        '<img src="http://mat1.gtimg.com/app/opent/images/wireless/company/w_com_bdsb.jpg" height="72" width="72" />',
                    '</a>',
                    '<a class="w_name" title="百度身边" >百度身边</a>',
                '</li>',
                '<li>',
                    '<a >',
                        '<img src="http://mat1.gtimg.com/app/opent/images/wireless/company/w_com_cc.jpg" height="72" width="72" />',
                    '</a>',
                    '<a class="w_name" title="camera 360" >camera 360</a>',
                '</li>',
            '</ul>',
        '</div>',
	'</div>  ',
'</div>',
this.tpl.footer
].join("");


$("#main").append(tmpl(wireless_android,global_obj.data));

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
setLoginInfo();
window.init();