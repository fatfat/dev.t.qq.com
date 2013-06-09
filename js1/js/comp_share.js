var undef,share_iconindex,share_counterpos,share_showcounter;

if (undef == share_iconindex) {
    var share_iconindex = "1"; // 转播图标
}
if (undef == share_counterpos) {
    var share_counterpos = "top"; //数字位置
}
if (undef == share_showcounter) {
    var share_showcounter = 1; // 是否显示数字
}
function getpreview() {
	var imgurl = "http://mat1.gtimg.com/app/newvt/share/images/";
	if (!share_showcounter) {
		return '<img src="' + imgurl + 'share_icon_' + share_iconindex + '.png"></img>';
	} else {
		return '<img src="' + imgurl + 'share_icon_' + share_iconindex + '_' + share_counterpos +'.png"></img>';
	}
}

// 根据当前全局变量设置，更新视觉显示
function update_shareicon () {

    $.each($(".icon_selector > a"), function (i,el) {

        el = $(el);
        // icon_index 必须匹配
        // (icon_idex非0，非1)自定义的图标的话share_counterpos为undefined, 若share_counterpos不是undefined则必须匹配
        if (el.attr("data-iconindex") == share_iconindex &&
            (share_counterpos === 'undefined' || el.attr("data-counter-pos") == share_counterpos)) {

            // 是否显示数字
            if (share_showcounter) {
                // 更换为带数字的图片
                $(".icon_selector > a > div").removeClass("share_icon_unnum")
                                             .addClass("share_icon");
                // 显示所有图标
                $(".icon_selector > a").show();
                // 隐藏类型为自定义的图标除外，自定义图标不支持数字显示
                $(".icon_selector > a[data-custom-icon=\"1\"]").hide();
            } else {
                // 更换为不带数字的图标
                $(".icon_selector > a > div").removeClass("share_icon")
                                             .addClass("share_icon_unnum");

                // 显示类型为自定义的图标
                $(".icon_selector > a[data-custom-icon=\"1\"]").show();
                // 不显示数字的情况下合并图标
                $.each($(".icon_selector > a"), function (j,ael) {
                    // 非自定义图标隐藏
                    if (!$(ael).attr('data-custom-icon') && j%2 !== 0) {
                        $(ael).hide();
                    }
                });
            }

            // 高亮背景
            el.trigger("click");

            return false;
        }

    });
}

eventBindFuncList.push(function () {
    // 隐藏预览
    // $('.sizeshow').hide();
    // 切换背景
    $(".icon_selector > a").click(function () {
        $(".icon_selector > a").removeClass("icon_selected");
        $(this).addClass("icon_selected");
        share_iconindex = $(this).attr("data-iconindex");
        share_counterpos = $(this).attr("data-counter-pos");
		// 更新预览区
		// $("#reshow").html(getpreview());
        return false;
    });

    // 切换是否显示转播次数
    $("#showcounter").change(function () {
        share_showcounter = $(this).attr("checked") ? 1 : 0;
        $(".icon_selector > a:visible").first().trigger("click");
        update_shareicon();
    });

	if (!share_showcounter) {
        $("#showcounter").attr("checked",false);
	}

    // 显示视觉效果
    update_shareicon();

    $(".icon_selector").show();
});

