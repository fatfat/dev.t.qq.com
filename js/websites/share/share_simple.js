this.tpl = this.tpl||{};
this.tpl.share_simple = [
	'function postToWb() {',
		'var _url = encodeURIComponent(location.href);',
		'var _pic = encodeURI("");',
		'var _t = "";',
		'var metainfo = document.getElementsByTagName("meta");',
		'for (var metai = 0; metai < metainfo.length; metai++) {',
			'if ((new RegExp("description", "gi")).test(metainfo[metai].getAttribute("name"))) {',
				'_t = metainfo[metai].attributes["content"].value',
			'}',
		'}',
		'_t = document.title + _t;',
		'if (_t.length > 120) {',
			'_t = _t.substr(0, 117) + "..."',
		'}',
		'_t = encodeURI(_t);',
		'var _u = "http://share.v.t.qq.com/index.php?c=share&a=index&url=" + _url + "&appkey=$appkey$&pic=" + _pic + "&assname=$assname$&title=" + _t;',
		'window.open(_u, "", "width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no")',
	'};',
].join("\r")

