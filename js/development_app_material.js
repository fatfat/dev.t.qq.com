this.tpl = this.tpl || {};
tpl.development_app_material = [
'<li>',
    '<label class="form_label">',
        '<%if (app.app_type ==5 ) {%>组件图标：<%} else if (app.app_type ==6) {%><em>*</em>应用图标：<%} else {%>应用图标：<%}%>',
    '</label>',
    '<div class="form_element">',
    '<table width="550">',
                '<tbody>',
                    '<tr>',
                        '<td valign="bottom" align="left" height="75">',
                            '<label class="nullimg">',
                                '<img src="<%=(app.app_icon_16 || "http://mat1.gtimg.com/app/opent/images/websites/0.gif")%>" width="16" height="16" _width="16" _height="16"/>',
                            '</label>',
                            '<br>',
                            '<label>',
                                '16×16',
                            '</label>',
                            '<br>',
                            '<label for="icon1" class="uploadbtn">',
                                '上传',
                            '</label>',
                            '<input type="file" _size="10" accept="image/png" name="icon1" id="icon1" data-default="<%=app.app_icon_16%>" <%if (app.app_type ==6 ) {%>class="required" _size="15"<%} else {%>class="file"<%}%>  data-label="<%if (app.app_type == 5) {%>组件图标<%} else {%>应用图标<%}%>"/>',
                            '<input type="hidden" name="img_need_post" id="img_need_post" value="0">',
                        '</td>',
                        '<td valign="bottom" align="left">',
                            '<label class="nullimg">',
                                '<img src="<%=(app.app_icon_50 || "http://mat1.gtimg.com/app/opent/images/websites/0.gif")%>" width="50" height="50" _width="50" _height="50"/>',
                            '</label>',
                            '<br>',
                            '<label>',
                                '50×50',
                            '</label>',
                            '<br>',
                            '<label for="icon2" class="uploadbtn">',
                                '上传',
                            '</label>',
                            '<input type="file" _size="10" accept="image/png" name="icon2" id="icon2" data-default="<%=app.app_icon_50%>" <%if (app.app_type ==6 ) {%>class="required" _size="15"<%} else {%>class="file"<%}%> data-label="<%if (app.app_type == 5) {%>组件图标<%} else {%>应用图标<%}%>"/>',
                        '</td>',
                        '<td valign="bottom" align="left">',
                            '<label class="nullimg">',
                                '<img src="<%=(app.app_icon_64 || "http://mat1.gtimg.com/app/opent/images/websites/0.gif")%>" width="64" height="64" _width="64" _height="64" />',
                            '</label>',
                            '<br>',
                            '<label>',
                                '64×64',
                            '</label>',
                            '<br>',
                            '<label for="icon3" class="uploadbtn">',
                                '上传',
                            '</label>',
                            '<input type="file" _size="10" accept="image/png" name="icon3" id="icon3" data-default="<%=app.app_icon_64%>" <%if (app.app_type ==6 ) {%>class="required" _size="15"<%} else {%>class="file"<%}%> data-label="<%if (app.app_type == 5) {%>组件图标<%} else {%>应用图标<%}%>"/>',
                        '</td>',
                        '<td valign="bottom" align="left">',
                            '<label class="nullimg">',
                                '<img src="<%=(app.app_icon_75 || "http://mat1.gtimg.com/app/opent/images/websites/0.gif")%>" width="75" height="75" _width="75" _height="75"/>',
                            '</label>',
                            '<br>',
                            '<label>',
                                '75×75',
                            '</label>',
                            '<br>',
                            '<label for="icon4" class="uploadbtn">',
                                '上传',
                            '</label>',
                            '<input type="file" _size="10" accept="image/png" name="icon4" id="icon4" data-default="<%=app.app_icon_75%>" <%if (app.app_type ==6 ) {%>class="required" _size="15"<%} else {%>class="file"<%}%> data-label="<%if (app.app_type == 5) {%>组件图标<%} else {%>应用图标<%}%>"/>',
                        '</td>',
                        '<%if (app.app_type ==6 ) {%>',
                        	'<td valign="bottom" align="left">',
                            '<label class="nullimg">',
                                '<img src="<%=(app.app_icon_114 || "http://mat1.gtimg.com/app/opent/images/websites/0.gif")%>" width="114" height="114" _width="114" _height="114"/>',
                            '</label>',
                            '<br>',
                            '<label>',
                                '114×114',
                            '</label>',
                            '<br>',
                            '<label for="icon5" class="uploadbtn">',
                                '上传',
                            '</label>',
                            '<input type="file" _size="10" accept="image/png" name="icon5" id="icon5" data-default="<%=app.app_icon_114%>" <%if (app.app_type ==6 ) {%>class="required" _size="15"<%} else {%>class="file"<%}%> data-label="<%if (app.app_type == 5) {%>组件图标<%} else {%>应用图标<%}%>"/>',
                        '</td>',
                        '<%}%>',
                    '</tr>',
                    '<tr>',
                        '<td colspan="<%if (app.app_type == 6) {%>5<%} else {%>4<%}%>" >',
                            '<label class="gray">',
                                '*图片格式为png &nbsp; &nbsp; *每张图片最大不超过10K',
                            '</label>',
                            '<div id="anquanlink" style="display:none;">',
                                '<a href="http://open.t.qq.com/bbs/forum.php?mod=viewthread&amp;tid=21271" target="_blank">',
                                    '如何将本站添加到受信任的站点列表中？',
                                '</a>',
                            '</div>',
                        '</td>',
                    '</tr>',
                '</tbody>',
            '</table>',
    '</div>',
'</li>',

'<% if (app.app_type !=5 && app.app_type !=6) { %>',
'<li>',
    '<label class="form_label">',
       '应用预览图：',
    '</label>',
    '<div class="form_element">',
    	'<table width="450">',
        '<tbody>',
            '<tr>',
                '<td>',
                    '<label class="nullimg">',
                        '<img src="<%=(app.app_icon_p1 || "http://mat1.gtimg.com/app/opent/images/websites/0.gif")%>" width="200" height="150" _width="330" _height="247">',
                    '</label>',
                    '<br>',
                    '<label>',
                        '330×247',
                    '</label>',
                    '<label class="uploadbtn" for="pic1">',
                        '上传',
                    '</label>',
                    '<input type="file" _size="50" accept="image/png" name="pic1" id="pic1" data-default="<%=app.app_icon_p1%>" class="file" data-label="应用预览图"/>',
                '</td>',
 				'<td>',
                    '<label class="nullimg">',
                        '<img src="<%=(app.app_icon_p2 || "http://mat1.gtimg.com/app/opent/images/websites/0.gif")%>" width="200" height="150" _width="330" _height="247">',
                    '</label>',
                    '<br>',
                    '<label>',
                        '330×247',
                    '</label>',
                    '<label class="uploadbtn" for="pic2">',
                        '上传',
                    '</label>',
                    '<input type="file" _size="50" accept="image/png" name="pic2" id="pic2" data-default="<%=app.app_icon_p2%>" class="file" data-label="应用预览图"/>',
                '</td>',

            '</tr>',
            '<tr ><td height="10"  colspan="2"></td></tr>',
           	
            '<tr><td colspan="2"><label class="gray">*图片格式为png &nbsp; &nbsp; *每张图片最大不超过50K</label> </td></tr>',
        '</tbody>',
    '</table>',
	'<div class="graydes">预览图在应用详情页展示，建议您提交的截图体现腾讯微博与应用结合场景</div>',
	'<div class="materialIntro previewIntro">',
    	'<a class="example" id="previewExample" href="javascript:;">填写示例</a>',
    	'<div class="materialDetail previewDetail" id="previewDiv">',
    		'<div class="meterialTitle">在应用详情页，会显示两张应用预览图，如蓝框所示</div>',
    		'<img id="previewImg" width="431px" height="270px" src="http://mat1.gtimg.com/app/opent/images/development/apppreview.jpg"/>',
    	'</div>',
    '</div>',
    '</div>',
'</li>',
	'<%if (app.app_type ==4) {%>',
	'<li>',
		'<label class="form_label">',
			'应用背景图：',
		'</label>',
		'<div class="form_element">',
			'<table width="450">',
			'<tbody>',
				'<tr>',
					'<td  colspan="2">',
						'<label class="nullimg">',
							'<img src="<%=(app.app_icon_p3 || "http://mat1.gtimg.com/app/opent/images/websites/0.gif")%>" width="350"',
							'height="247" _width="760" _height="580">',
						'</label>',
						'<br>',
						'<label>',
							'760×580',
						'</label>',
						'<label class="uploadbtn" for="pic3">',
							'上传',
						'</label>',
						'<input type="file" _size="100" accept="image/png" name="pic3" id="pic3" data-default="<%=app.app_icon_p3%>" class="file" data-label="应用背景图"/>',
					'</td>',
				'</tr>',
				'<tr><td><label class="gray">*图片格式为png &nbsp; &nbsp; *每张图片最大不超过100K</label> </td></tr>',
			'</tbody>',
		'</table>',
		'<div class="graydes">背景图在进入应用页面展示</div>',
		'<div class="materialIntro previewIntro">',
			'<a class="example" id="backgroundExample" href="javascript:;">填写示例</a>',
			'<div class="materialDetail backgroundDetail" id="backgroundDiv">',
				'<div class="meterialTitle">进入应用时，会显示应用背景图，即蓝框所示</div>',
				'<img id="backgroundImg" width="409px" height="335px" src="http://mat1.gtimg.com/app/opent/images/development/appbackground.jpg"/>',
			'</div>',
		'</div>',
		'</div>',
	'</li>',
	'<%}%>',
'<%}%>'

].join('');

var app = global_obj.data.app;

if (app.app_type ==6) {
	$(function(){
		$('input[type=file]').change(function(){ $('input#img_need_post').val('1')});
	})
}

if (app.app_type !=5 && app.app_type !=6) {
	$(function(){
		$('input[type=file]').change(function(){ $('input#img_need_post').val('1')});
	})
}

if (app.app_type ==4) {
	$(function(){
		$('input[type=file]').change(function(){ $('input#img_need_post').val('1')});
	})
}

var app_type =+ app.app_type;
	
var BKTIMER = {};
global_obj.init.app_material = function(){
	$("#backgroundExample").mouseover(function(){
		if(BKTIMER.timer){
			clearTimeout(BKTIMER.timer);
		}
		$("#backgroundDiv").show();
	}).mouseout(function(){
		BKTIMER.timer = setTimeout(function(){
			$("#backgroundDiv").hide();
		}, 200);
	});

	$("#backgroundDiv").mouseover(function(){
		if(BKTIMER.timer){
			clearTimeout(BKTIMER.timer);
		}
	}).mouseout(function(){
		BKTIMER.timer = setTimeout(function(){
			$("#backgroundDiv").hide();
		}, 200);
	});
		
	var PRETIMER = {};
	$("#previewExample").mouseover(function(){
		if(PRETIMER.timer){
			clearTimeout(PRETIMER.timer);
		}
		$("#previewDiv").show();
	}).mouseout(function(){
		PRETIMER.timer = setTimeout(function(){
			$("#previewDiv").hide();
		}, 200);
	});

	$("#previewDiv").mouseover(function(){
		if(PRETIMER.timer){
			clearTimeout(PRETIMER.timer);
		}
	}).mouseout(function(){
		PRETIMER.timer = setTimeout(function(){
			$("#previewDiv").hide();
		}, 200);
	});
}

