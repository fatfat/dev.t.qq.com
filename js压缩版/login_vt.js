function setPreview(){var C=+$("input[name='b_type']:checked").val(),D=+$("input[name='size']:checked").val(),B=+$("input[name='a_type']:checked").val(),E="a_img_show",A="b_img_show";if(C>0){$(".size").addClass("unvisible");D=0}else{$(".size").removeClass("unvisible")}$("."+A).attr("class",[A,A].join(" ")+[C,D].join(""));$("."+E).attr("class",[E,E].join(" ")+B)}$(function(){$("input[name='a_type'],input[name='b_type'],input[name='size']").bind("click",setPreview);if(window.comp_style){$("input[name='size'][value='"+comp_style.b_size+"']").trigger("click");$("input[name='b_type'][value='"+comp_style.b_type+"']").trigger("click");$("input[name='a_type'][value='"+comp_style.a_type+"']").trigger("click")}$("input[name='a_type'],input[name='b_type'],input[name='size']").filter(":checked").first().trigger("click")});