;(function(){
	tpl.shareuse_include_wap = [
		'<link rel="stylesheet" type="text/css" href="http://mat1.gtimg.com/app/newvt/share/css/share_20120711.css">',
		'<div style="clear:left;"></div>',
	].join("");
	this.util = this.util || {};
	util.createScript("http://mat1.gtimg.com/app/newvt/share/js/share_20120711.js");
	util.createScript("http://mat1.gtimg.com/app/opent/js/comp_validate.js?20120515");

	function formSubmit(){
	    if($("#showcode").attr("disabled")){return;}
	    var paras={
	        		"comp_type":7, //组件类型 1、'一键分享',2'批量收听',3'话题墙',4'Q-Share',5'心情板'
	    			"comp_style":""
	        	};
	        	if (comp.comp_id){
	        		paras["comp_id"]=comp.comp_id;
	        	}
	        	if ($("#comp_url").size()&&$("#comp_name").size()){
	        		paras["comp_url"]=encodeURIComponent($("#comp_url").val());
	        		paras["comp_name"]=encodeURIComponent($("#comp_name").val());
	        	}
	        	$("#showcode").attr("disabled","disabled");
	        	$.ajax(
	        	{"type":"post",
	        	"url":"/pipes/interfaceserver?action=common_query&business_type=ajax_compadd&t=" + new Date().getTime(),
	        	"data":paras,
	        	"dataType":"json",
	        	"success":function(d){
	        			var ret = +(d.ret),msg = common.getMsgByRet(ret);
	        			if (msg){
	        				loginWin.alert("<center>"+msg+"</center>");
	        				return;
	        			}
	        		    if (ret === 0 && d.data && d.data.id){
				   			location.href='/development/compinfo?comp_id='+d.data.id;
				   		}else{
					   		loginWin.alert({
					    	"title":"获取代码失败！",
					    	"width":450,
					    	"text":"<center>"+(d.msg||"服务器失败")+"</center>"
					    	});
				   		}
				   		$("#showcode").removeAttr("disabled");
	        	},
	        	"error":function(d){
	        		loginWin.alert({
	    				    	"title":"获取代码失败！",
	    				    	"width":340,
	    				    	"text":"<center>连接服务器失败</center>"
	    				    	});
	    			$("#showcode").removeAttr("disabled");
	        	}
	        	});
	    }
	    function normalValidate(){
	        	$("#comp_name").trigger("blur");
	    }
	    var comp_type=7;
	
})();


