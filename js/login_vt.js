function setPreview(){
	var bt = +$("input[name='b_type']:checked").val(),
		bs = +$("input[name='size']:checked").val(),
		at = +$("input[name='a_type']:checked").val(),
		cna = "a_img_show", //className after login
		cnb = "b_img_show"; //className before login
	if (bt>0){
		$(".size").addClass("unvisible");
		bs = 0;
	}else{
		$(".size").removeClass("unvisible");
	}
	$("."+cnb).attr("class",[cnb,cnb].join(" ")+[bt,bs].join(""));
	$("."+cna).attr("class",[cna,cna].join(" ")+at);
}

$(function(){
	$("input[name='a_type'],input[name='b_type'],input[name='size']").bind("click",setPreview);
	if (window.comp_style){
		$("input[name='size'][value='"+comp_style.b_size+"']").trigger("click");
		$("input[name='b_type'][value='"+comp_style.b_type+"']").trigger("click");
		$("input[name='a_type'][value='"+comp_style.a_type+"']").trigger("click");
	}
	$("input[name='a_type'],input[name='b_type'],input[name='size']").filter(":checked").first().trigger("click");
});