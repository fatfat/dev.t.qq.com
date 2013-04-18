// JavaScript Document
	
var developer_cancelsubscribe = 
[       
	headerTmpl, 
	'<style>',
	/*body,div,input,p{
		margin:0;
		padding:0;
	}
	body{
		font: 16px/1.75 "Microsoft Yahei",Tahoma,Arial;
		color: #333;
	}
	.subsribe{
		margin:20px auto;
		width:400px;
	}
	.btnbar{
		text-align:center;
	}
	.btn{
		min-width: 68px;
		height: 26px;
		line-height: 19px;
		margin: 3px 0 0 3px;
		border: 1px solid #999;
		border-radius: 3px;
		color: #666;
		padding: 0 3px;
		cursor: pointer;
		text-align:center;
	}
	.ok{
		background-color: #D6EEF6;
	}
	.cancel{
		background-color: #eee;
	}*/
	'</style>',
	'<div class="actioninfo">',
		'<img src="http://mat1.gtimg.com/app/opent/images/index/transparent.gif" class="alert">取消订阅后将无法及时收到API调用相关信息。确定取消订阅？<br/><a href="javascript:void(0)" id="subcribeApiCall" class="links">确定</a> &nbsp; <a href="javascript:void(0)" id="cancelSubscribe" class="links">关闭</a>',
	'</div>',
	footerTmpl	
].join("");
	
$(function(){   
	$(document.body).append(tmpl(developer_cancelsubscribe,{}));
	$("#subcribeApiCall").click(function(){
		$.ajax({
	        type: "get",
	        url: "/developer/cancelsub/1",
	        dataType: "json",
	        success: function(d){
	            if(d.ret == 0){
	            	alert("取消订阅成功");
					window.close();
					return false;
	            }else{
	            	alert("操作失败");
	            	return false;
	            }
	        },
	        error:function(){
	        	 alert("网络错误，请重试");
	        	 return false;
	        }
	 	});	
	});

	$("#cancelSubscribe").click(function(){
		window.close();
		return false;
	});
	/*
	var xhr = null,
		subcribeApiCall = document.getElementById("subcribeApiCall"),
		cancelSubscribe = document.getElementById("cancelSubscribe");
	
	function createXHR(){
		if(window.XMLHttpRequest){
			return new XMLHttpRequest();
		}else if(window.ActiveXObject){//IE6 && IE5
			return new ActiveXObject("Microsoft.XMLHTTP");
		}else{
			return null;
		}
	}
	
	function handleReadyStateChange(){
		if(xhr.readyState == 4){
			if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){//请求成功
				var d = xhr.responseText,
					ret =+ JSON.parse(d).ret;
				if(ret === 0){
					alert("取消订阅成功");
					window.close();
				}else{
					alert("操作失败");
				}
			}else{
				alert("网络错误，请重试");
			}
			xhr = null;
		}
	}
		
	subcribeApiCall.onclick = function(){
		xhr = createXHR();
		xhr.onreadystatechange =handleReadyStateChange;
		xhr.open("GET", "http://dev.t.qq.com/developer/cancelsub/1", true);
		xhr.send(null);
	}
	
	cancelSubscribe.onclick = function(){
		window.close();
	}
	*/			
})
