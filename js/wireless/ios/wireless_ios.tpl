<!--{ include file="header.tpl" }-->
<link href="http://mat1.gtimg.com/app/opent/css/wireless/wireless.css?20120110" rel="stylesheet" type="text/css"/>


<div class="wrapper breadcast">
	
</div>

<div id="content" class="wrapper main main_comp main_comp">
    <!--{ include file="./wireless/osnav.tpl" }-->

    <div class="appsArea2">
		<h1 class="comp_tit">腾讯微博无线接入 for ios</h1>

        <div class="w_downwrap">
            <a class="w_downsdk" target="_blank" href="http://wiki.open.t.qq.com/index.php/%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8%E6%8E%A5%E5%85%A5#iOS.E5.BA.94.E7.94.A8">下载SDK</a>
            <a href="/wireless/intro/" class="guide">查看接入指引></a>
        </div>

        <h2 class="comp_sub_tit">SSO登录</h2>
        <p class="w_p3">为了更好的提升微博登录用户体验，微博无线应用开放平台提供了支持SSO登录的SDK，当第三方应用接入该SDK，用户只需要安装有腾讯微博4.0客户端，即可使用客户端授权接入第三方应用，减少用户输入用户名和密码。</p>
        <div class="w_showhiden" id="w_showcon">
            <img src="http://mat1.gtimg.com/app/opent/images/wireless/ios_demo.jpg" />
        </div>
        <p class="w_p2" ><a id="w_showdemo">查看效果预览</a><em></em></p>

        <h2 class="comp_sub_tit">授权登录</h2>
        <p class="w_p1">为了更好的帮助第三方接入无线应用，微博无线应用开放平台提供了支持iOS、Android及Windows Phone7的SDK，封装了微博登录及部分微博开放API接口，应用只需要修改相应参数，不需要理解验证授权流程，即可实现微博登录功能。</p>

        <h2 class="comp_sub_tit">一键分享</h2>
        <p class="w_p1">一键分享是将分享按钮嵌入到你的应用或者移动网站里，当你的用户点击它就能将网页名称+网址+指定图片，转发到腾讯微博，分享给他们的听众，增加网站的访问流量。<br/>PC版的一键分享代码完美支持触屏了，您只需要申请PC版的一键分享代码即可在用在您的移动站点上了。</p>

        <h2 class="comp_sub_tit">合作伙伴</h2>
        <div class="w_partners">
            <ul class="clearfix">
                <li>
                    <a >
                        <img src="http://mat1.gtimg.com/app/opent/images/wireless/company/w_com_papa.jpg" height="72" width="72" />
                    </a>
                    <a class="w_name" title="啪啪" >啪啪</a>
                </li>

                <li>
                    <a >
                        <img src="http://mat1.gtimg.com/app/opent/images/wireless/company/w_com_cb.jpg" height="72" width="72" />
                    </a>
                    <a class="w_name" title="唱吧" >唱吧</a>
                </li>

                <li>
                    <a >
                        <img src="http://mat1.gtimg.com/app/opent/images/wireless/company/w_com_dp.jpg" height="72" width="72" />
                    </a>
                    <a class="w_name" title="大众点评" >大众点评</a>
                </li>

                <li>
                    <a >
                        <img src="http://mat1.gtimg.com/app/opent/images/wireless/company/w_com_dgms.jpg" height="72" width="72" />
                    </a>
                    <a class="w_name" title="豆果美食" >豆果美食</a>
                </li>

                <li>
                    <a >
                        <img src="http://mat1.gtimg.com/app/opent/images/wireless/company/w_com_xbk.jpg" height="72" width="72" />
                    </a>
                    <a class="w_name" title="星巴克中国" >星巴克中国</a>
                </li>

               
            </ul>
        </div>
	 
	</div>  

</div>

<script>
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
</script>

<!--{ include file="footer.tpl" }-->
