;(function(){
	this.tpl = this.tpl ||{};
	this.tpl.qshare_explain = [
		this.tpl.header,
		'<%if(!developerinfo){%>location.href="/developer/bedever/";<%}%>',
		'<link href="http://mat1.gtimg.com/app/opent/css/websites/app.css" rel="stylesheet" type="text/css"/>',
		'<div class="wrapper breadcast"><a href="/">腾讯微博开放平台</a> > <a href="/websites">网站接入</a> > <span>Q-Share</span></div>',
		'<div id="content" class="wrapper main main_comp">',
			this.tpl.websites_appnav,
			'<div class="appsArea2">',
				'<h2 class="apptit"><strong>使用微博组件 —— Q-Share</strong></h2>',
				this.tpl.compform,
				this.tpl.qshare_explain_include,
				'<div class="p1">',
					 '<a href="javascript:;" class="devSubmit" id="showcode">获取代码</a> ' ,
					 '<!--<a href="javascript:history.go(-1);" class="devCancel">取消</a> -->',
				'</div>',
				
				'<div class="p1" id="codearea">',
					'<textarea id="scripts"></textarea><input type="hidden" length="32" id="theKey" />',
					'<p><input type="checkbox" id="conpress"/> <label for="conpress">压缩代码</label></p>',
					'<p class="tr"><img src="http://mat1.gtimg.com/app/opent/images/oldapp/qshare/copybut.png" id="copyscript" border="0"/></p>',
				'</div>',
			'</div>',
			'</div>',
			this.tpl.footer
		].join("");
	$("#main").append(tmpl(this.tpl.qshare_explain,global_obj.data));
	$(function(){
		var UI = {};
		var menu = function(){ 
				this.menus = $('.nav ul li');
			}
		menu.prototype = {
			hilight : function( index ){
				this.menus.removeClass('current');			
				$(this.menus[index]).addClass('current');
			},
			hl : function( index ){
				return this.hilight(index);
			}
		}
		UI.menu = new menu();	
		window.UI = UI;
		UI.menu.hl(1);
	});	
	$.getScript('/js/comp_validate.js', function () {
		compValidateEvent();
	});
	QosSS.c = new Image();
	QosSS.c.onload = (QosSS.c.onerror = function() {delete QosSS.c;});
	QosSS.t[5]= (new Date()).getTime();
	QosSS.c.src="http://qos.report.qq.com/collect?type=1&name="+"opent_wqs_explain"+"&1="+ (QosSS.t[1]- QosSS.t[0])+"&2="+ (QosSS.t[2]- QosSS.t[0])+ "&3="+ (QosSS.t[3]- 		QosSS.t[0])+"&4="+ (QosSS.t[4]- QosSS.t[0])+ "&5="+ (QosSS.t[5]- QosSS.t[0]);
})();
