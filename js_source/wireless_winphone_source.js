var wireless_winphone = [
tpl.header,
'<link href="http://mat1.gtimg.com/app/opent/css/wireless/wireless.css?20120110" rel="stylesheet" type="text/css"/>',
'<div class="wrapper breadcast">',
'</div>',
'<div id="content" class="wrapper main main_comp">',
    tpl.wireless_osnav,
    '<div class="appsArea2">',
		'<h1 class="comp_tit">腾讯微博无线接入 for WP7</h1>',
        '<div class="w_downwrap">',
            '<a class="w_downsdk" target="_blank" href="http://mat1.gtimg.com/app/opent/download/sdk/WP-SDK1.0.0.zip">下载SDK</a>',
            '<a href="/wireless/intro/" class="guide">查看接入指引></a>',
        '</div>',
        '<h2 class="comp_sub_tit">授权登录</h2>',
        '<p class="w_p1">为了更好的帮助第三方接入无线应用，微博无线应用开放平台提供了支持iOS、Android及Windows Phone7的SDK，封装了微博登录及部分微博开放API接口，应用只需要修改相应参数，不需要理解验证授权流程，即可实现微博登录功能。</p>',
        '<h2 class="comp_sub_tit">合作伙伴</h2>',
        '<div class="w_partners">',
            '<ul class="clearfix">',
                '<li>',
                    '<a >',
                        '<img src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" class="w_partners_icon1"/>',
                    '</a>',
                    '<a class="w_name" title="酷狗" >超级拍客</a>',
                '</li>',
                '<li>',
                    '<a >',
                        '<img src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" class="w_partners_icon2"/>',
                    '</a>',
                    '<a class="w_name" title="墨迹天气" >搜狐拍客</a>',
                '</li>',
                '<li>',
                    '<a >',
                        '<img src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" class="w_partners_icon3"/>',
                    '</a>',
                    '<a class="w_name" title="搜狐新闻" >凤凰新闻</a>',
                '</li>',
                '<li>',
                    '<a >',
                        '<img src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" class="w_partners_icon4"/>',
                    '</a>',
                    '<a class="w_name" title="百度身边" >掌上猫扑</a>',
                '</li>',
                '<li>',
                    '<a >',
                        '<img src="http://mat1.gtimg.com/app/opent/images/websites/0.gif" class="w_partners_icon5"/>',
                    '</a>',
                    '<a class="w_name" title="camera 360" >搜狐视频</a>',
                '</li>',
            '</ul>',
        '</div>',
	'</div>  ',
'</div>',
tpl.footer,
].join("");
$("#main").append(tmpl(wireless_winphone,global_obj.data));

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
