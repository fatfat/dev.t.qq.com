var _share_tencent_weibo = function() {
	var share_btn = function(_arr) {
		if (_arr[0]) {
			return _arr[0]
		} else {
			var o = document.createElement("a"),
			_ostyle = "width:92px;height:22px;background:url(http://mat1.gtimg.com/app/opent/images/websites/qshare/icon.gif) no-repeat #fff;position:absolute;display:none;";
			o.setAttribute("style", _ostyle);
			o.style.cssText = _ostyle;
			o.setAttribute("href", "javascript:;");
			document.body.insertBefore(o, document.body.childNodes[0]);
			return o
		}
	} (arguments);
	var share_area = function(_arr) {
		if (_arr[1]) {
			if ((typeof _arr[1] == "object" && _arr[1].length) || (_arr[1].constructor == Array)) {
				return _arr[1]
			} else {
				return [_arr[1]]
			}
		} else {
			return [document.body]
		}
	} (arguments);
	var current_area = share_area[0];
	var _site = "";
	var _appkey = encodeURI("abb5b6664d974468a224be6c699fd283");
	var _web = {
		"name": document.title || "",
		"href": location.href,
		"hash": location.hash,
		"target": "width=700,height=680,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,location=yes,resizable=no,status=no"
	};
	var _pic = function(area) {
		var _imgarr = area.getElementsByTagName("img");
		var _srcarr = [];
		for (var i = 0; i < _imgarr.length; i++) {
			_srcarr.push(_imgarr[i].src)
		}
		return _srcarr.join("|")
	};
	var _u = "http://v.t.qq.com/share/share.php?url=$url$&appkey=" + _appkey + "&site=" + _site + "&title=$title$&pic=$pic$";
	var _select = function() {
		return (document.selection ? document.selection.createRange().text: document.getSelection()).toString().replace(/[\s\n]+/g, " ")
	};
	var show = function(e, x, y) {
		with(share_btn.style) {
			display = "inline-block";
			left = x + "px";
			top = y + "px";
			position = "absolute";
			zIndex = "999999"
		}
	};
	var hide = function(e) {
		e.style.display = "none"
	};
	if ( !! window.find) {
		HTMLElement.prototype.contains = function(B) {
			return this.compareDocumentPosition(B) - 19 > 0
		}
	};
	String.prototype.elength = function() {
		return this.replace(/[^\u0000-\u00ff]/g, "aa").length
	};
	String.prototype.tripurl = function() {
		return this.replace(new RegExp("((news|telnet|nttp|file|http|ftp|https)://){1}(([-A-Za-z0-9]+(\\.[-A-Za-z0-9]+)*(\\.[-A-Za-z]{2,5}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_\\$\\.\\+\\!\\*\\(\\),;:@&=\\?/~\\#\\%]*)*", "gi"), _appkey.slice(0, 22))
	};
	document.onmouseup = function(e) {
		e = e || window.event;
		var o = e.target || e.srcElement;
		for (var i = 0; i < share_area.length; i++) {
			if (share_area[i].contains(o) || share_area[i] == o) {
				var _e = {
					"x": e.clientX,
					"y": e.clientY
				};
				var _o = {
					"w": share_btn.clientWidth,
					"h": share_btn.clientHeight
				};
				var _d = window.pageYOffset || (document.documentElement || document.body).scrollTop || 0;
				var x = (_e.x - _o.w < 0) ? _e.x + _o.w: _e.x - _o.w,
				y = (_e.y - _o.h < 0) ? _e.y + _d - _o.h: _e.y + _d;
				if (_select() && _select().length >= 10) {
					show(share_btn, x - 5, y);
					current_area = share_area[i];
					break
				} else {
					hide(share_btn)
				}
			} else {
				hide(share_btn)
			}
		}
	};
	document.onmouseover = function(e) {
		var curtarget = (e && e.target) || (window.event && window.event.srcElement);
		if (curtarget.tagName.toLowerCase() == "img") {
			var erect = curtarget.getBoundingClientRect();
			if (curtarget.clientWidth >= 150 && curtarget.clientHeight >= 150) {
				show(share_btn, erect.right - 120, erect.bottom + document.body.scrollTop + document.documentElement.scrollTop - 40);
				share_btn.setAttribute("shareimg", curtarget.src)
			}
		} else if (curtarget != share_btn) {
			share_btn.removeAttribute("shareimg");
			hide(share_btn)
		}
	};
	share_btn.onclick = function() {
		var shareimg = share_btn.getAttribute("shareimg");
		if (shareimg != null) {
			window.open(_u.replace("$title$", encodeURIComponent(_web.name)).replace("$url$", encodeURIComponent(_web.href)).replace("$pic$", encodeURIComponent(shareimg)).substr(0, 2048), 'null', _web.target);
			return
		}
		var _str = _select();
		var _strmaxlen = 257 - _web.name.tripurl().elength();
		var _resultstr = "";
		if (_str.elength() > _strmaxlen) {
			_strmaxlen = _strmaxlen - 3;
			for (var i = _strmaxlen >> 1; i <= _strmaxlen; i++) {
				if ((_str.slice(0, i)).tripurl().elength() >= _strmaxlen) {
					break
				} else {
					_resultstr = _str.slice(0, i)
				}
			}
			_resultstr += "..."
		} else {
			_resultstr = _str
		}
		if (_str) {
			var url = _u.replace("$title$", encodeURIComponent(_resultstr + " " + _web.name)).replace("$pic$", _pic(current_area));
			url = url.replace("$url$", encodeURIComponent(_web.href.replace(_web.hash, "") + "#" + (current_area["name"] || current_area["id"] || ""))).substr(0, 2048);
			window.open(url, 'null', _web.target)
		}
	}
};