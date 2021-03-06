var imgViewer=function(){
	var Viewer,imglist,currentIndex=0,showing=false;
	var initDom=function(imglist)
	{
		var winbg=$("<div class=\"winbg\"></div>").appendTo($("body")).hide();
		var winiframe=$("<iframe width=\"100%\" height=\"100%\" frameborder=\"0\"></iframe>").appendTo(winbg);
		if($.browser.msie)
		{winiframe[0].contentWindow.document.bgColor="#000";}
		var imgtip=$("<div class=\"imgtip\"></div>").appendTo(winbg);
		var imgWin=$("<div class=\"imgWin\"></div>").appendTo(winbg);
			with(imgWin)
			{append($("<img src=\"about:blank\"/><a href=\"javascript:void(0);\" class=\"close\"></a>"));}
		var viewControl=$("<div class=\"imgViewer\"></div>").appendTo(winbg);
		var viewerLabel=$("<label><b>1</b>/"+imglist.size()+"</label>").appendTo(viewControl);
		var btnLeft =$("<a href=\"javascript:void(0);\" class=\"left\"></a>").appendTo(viewControl);
		var btnRight=$("<a href=\"javascript:void(0);\" class=\"right\"></a>").appendTo(viewControl);
		var btnClose=$("<a href=\"javascript:void(0);\" class=\"close\"></a>").appendTo(viewControl);
		imglist.each(function(i){$(this).attr("viewIndex",i);});
		return {"BtnA":btnLeft,"BtnB":btnRight,"BC":btnClose,"BL":viewerLabel,
		"win":winbg,"img":imgWin.find("img"),"BC2":imgWin.find("a.close"),"tip":imgtip
		};
	}
	var initEvent=function(Viewer,imglist)
	{
		Viewer.win.find("a.close").bind("click",function(){Viewer.win.hide();showing=false;});
		Viewer.BtnA.bind("click",function(){
			if (currentIndex>0)
			{showImage(currentIndex-1);currentIndex--;}
			else
			{showTip("\u5df2\u7ecf\u662f\u7b2c\u4e00\u5f20\u4e86");}	
		});
		Viewer.BtnB.bind("click",function(){
			if (currentIndex<imglist.size()-1)
			{showImage(currentIndex+1);currentIndex++;}
			else
			{showTip("\u5df2\u7ecf\u662f\u6700\u540e\u4e00\u5f20\u4e86");}
		});
		Viewer.img.bind("load",function(){var img=$(this);img.parent().css({"margin-left":-img.width()/2,"margin-top":-img.height()/2});});
		imglist.bind("click",function(){
			currentIndex=parseInt(this.getAttribute("viewIndex"),10);
			showImage(currentIndex);
		});			
	}
	var showImage=function(i)
	{	
		Viewer.win.show();
		var img=imglist.eq(i),imgpath=img.attr("path"),simg=Viewer.img;
		Viewer.BL.html("<b>"+(parseInt(i)+1)+"</b>/"+imglist.size());
		if (!showing)
		{simg.attr("src",imgpath).load(function(){simg.parent().fadeIn("slow");});}
		else
		{simg.parent().fadeOut("slow",function(){simg.attr("src",imgpath)}).fadeIn("slow");}
		showing=true;	
	}
	var showTip=function(str)
	{
		Viewer.tip.html(str).fadeIn(300).delay(100).fadeOut(300);
	}	
	var init = function(){
	imglist=$("img.view");
	if (imglist.size()>0)
	{
		Viewer=initDom(imglist);
		initEvent(Viewer,imglist);
	}
	};
	return init();
};
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
});
$(function(){
	UI.menu.hl(1);
})

/*  |xGv00|cdcd3eba2ba605230b210a3888c3e539 */