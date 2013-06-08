function showSelectAppType(){loginWin.show({"width":526,"height":294,"title":"选择你要创建的应用类型","text":'<div class="newApp" id="showSelectAppType">                    <ul class="appTypeList">                        <li>                            <input type="radio" name="appType" checked="checked" appType="4" id="appType1"/>            				<label for="appType1">站内应用</label>                        </li>                        <li>                            <input type="radio" name="appType" appType="1" id="appType3"/>            				<label for="appType3">网页应用</label>                        </li>            			<li>                            <input type="radio" name="appType" appType="6" id="appType2"/>            				<label for="appType2">无线应用</label>                        </li>                    </ul>                    <div class="appWrap appSite currentApp">                        <div class="appTitle">                            <img src="http://mat1.gtimg.com/app/opent/images/developer/index/app_site.gif" alt="站内应用" />                            <p class="title">创建站内应用</p>                            <p>用户可以在微博里直接使用</p>                            <p>案例:<a href="http://app.t.qq.com/app/intro/24341?via=24341_WB.HOME.HOT.1.1" target="_blank">星佳城市</a>                             		<a href="http://app.t.qq.com/app/intro/23006?via=23006_WB.CATEGORYATTR.0.2.2" target="_blank">德州扑克</a>                            </p>                        </div>                        <div class="appIntro">                            <h3>站内应用的优势：</h3>                            <ul>                                <li>可上架到微博应用频道并获得推广资源</li>                                <li>可在应用中加入收费功能</li>                                <li>托管服务器可免费试用3个月</li>                                <li>用户进入应用时无需授权，体验更流畅</li>                            </ul>                        </div>                        <div class="arrow"></div>                    </div>                    <div class="appWrap appWeb">                        <div class="appTitle">                            <img  src="http://mat1.gtimg.com/app/opent/images/developer/index/app_web.gif" alt="网页应用" />                            <p class="title">创建网页应用</p>                            <p>创建诸如浏览器插件等其他应用</p>                            <p>案例:<a href="http://app.t.qq.com/app/intro/170712?via=170712_WB.CATEGORYATTR.0.2.3" target="_blank">国际IQ测试</a>             						<a href="http://app.t.qq.com/app/intro/801000002?via=801000002_WB.CATEGORYATTR.0.2.4" target="_blank">微分析</a>            				</p>                        </div>                        <div class="appIntro">                            <h3>网页应用策略调整：</h3>                            <ul>                                <li>网页应用在审核通过后即可正常使用，无需上架。若有上架需求，转为站内应用后即可。</li>                                <li>网页应用中不能含有收费功能</li>                                <li>用户进入应用时需进行授权</li>                            </ul>                        </div>                        <div class="arrow"></div>                    </div>            		<div class="appWrap appClient">                        <div class="appTitle">                            <img src="http://mat1.gtimg.com/app/opent/images/developer/index/app_wireless.gif"  alt="无线应用" />                            <p class="title">创建无线应用</p>                            <p>运行在手机或平板电脑上的应用</p>                            <p>案例:<a href="http://app.t.qq.com/app/intro/170222?via=170222_WB.CATEGORYATTR.0.2.16" target="_blank">小伞兵</a>             						<a href="http://app.t.qq.com/app/intro/170053?via=170053_WB.CATEGORYATTR.0.4.1" target="_blank">YiBo</a>            				</p>                        </div>                        <div class="appIntro">                            <h3>无线应用简介：</h3>                            <ul>                                <li>开发者可使用微博开放平台提供的接口开发无线应用，借助微博的关系链基础，增进用户与好友间的交互，提升使用体验。</li>                            </ul>                        </div>                        <div class="arrow"></div>                    </div>                </div><div class="bottom"><a href="'+["javascript:refuseInsiteApp();","/apps/add/4/"][insiteAppAble+0]+'" class="devSubmit" >确定</a></div>'});var B=loginWin.contentarea.find(".newApp");var A=B.find(".appTypeList input");A.bind("click",function(){var C=$(this).parents("li").index();B.find("div.appWrap").eq(C).addClass("currentApp").siblings().removeClass("currentApp");loginWin.contentarea.find(".devSubmit").attr("href","/apps/add/"+$(this).attr("appType"))})}function popAppWin(B,A,D){if(loginWin&&loginWin.show){if(B<A){D=D||"";D==""?showSelectAppType():gotoUrl("/apps/add/4?cid=3")}else{if(B==0&&A==0){var C='<div style="text-align:center;margin:30px 0 10px;">你还未获得开发者身份，请先注册成为开发者</div><div style="text-align:center;"><a href="javascript:;" class="devSubmit closeBtn">确定</a></div>';loginWin.show({"title":"提示","width":460,"height":185,"text":C});loginWin.contentarea.find(".closeBtn").bind("click",function(){location.href="/developer/add";return false})}else{loginWin.alert({"width":460,"text":"<center>当前帐号创建的应用已达上限，你可以使用其它帐号来创建应用</center>"})}}if(location.hash=="#newapp"||location.hash=="#newgame"){if(!document.all){location.hash="#0"}}}}function gotoUrl(A){location.href=A;return false};