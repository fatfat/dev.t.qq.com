function OnDOMLoaded() {
	function r() {
		var e = T.find("#auth_type")[0].selectedIndex + "" + T.find("#auth_api")[0].selectedIndex;
		location.hash = e
	}
	var e = location.hash.split("#").pop(),t,n;e ? (e = e.split(""), e.length < 2 ? (t = parseInt(e[0], 10), n = 0) : (t = parseInt(e[0], 10), n = parseInt(e[1], 10))) : (t = 0, n = 0),
	t === 4 && T.dom.append(T.dom.create("option", {
		value: 4,
		innerHTML: "uin+skey"
	}), T.find("#auth_type_optgrp")[0]),
	T.find("#auth_type")[0].onchange = function() {
		selectAuthType(this.selectedIndex),
		T.find("#auth_api")[0].onchange()
	},
	T.find("#auth_api")[0].onchange = function() {
		var e = T.find("#auth_type")[0],
		t = this.options[this.selectedIndex].getAttribute("data-interfaceName"),
		n = e.selectedIndex;
		showParamsList(t, n),
		T.find("#validateResult")[0].style.display = "none",
		r()
	};
	if (t < 0 || t > T.find("#auth_type")[0].length - 1) t = 0;
	T.find("#auth_type")[0].selectedIndex = t,
	T.find("#auth_type")[0].onchange();
	if (n < 0 || n > T.find("#auth_api")[0].length - 1) n = 0;
	n > 0 && (T.find("#auth_api")[0].selectedIndex = n, T.find("#auth_api")[0].onchange()),
	T.find("#validateForm")[0].onsubmit = function() {
		var e = T.find("#validateResult")[0],
		t = T.find("#submit")[0],
		n;
		return t.disabled = !0,
		e.className = "content",
		e.style.display = "block",
		e.innerHTML = "正在检查...",
		setTimeout(function() {
			T.find("select").each(function(e) {
				e.disabled = !0
			})
		},
		0),
		validateRequest().complete(function() {
			e.innerHTML = "",
			t.disabled = !1,
			T.find("select").each(function(e) {
				e.disabled = !1
			})
		}).success(function(t) {
			T.dom.removeClass(e, "error-lookandfeel").addClass(e, "success-lookandfeel"),
			T.dom.append(T.dom.create("label", {
				innerHTML: "验证通过！"
			}), e),
			T.dom.append(T.dom.create("div", {
				innerHTML: t
			}), e)
		}).fail(function(t) {
			T.dom.removeClass(e, "success-lookandfeel").addClass(e, "error-lookandfeel"),
			T.dom.append(T.dom.create("label", {
				innerHTML: "验证失败！在参数中发现以下问题："
			}), e),
			T.dom.append(T.dom.create("div", {
				innerHTML: t
			}), e)
		}),
		!0
	}
}
function selectAuthType(e) {
	T.find("#auth_type")[0].selectedIndex = e,
	addApiList(e)
}
function addApiList(e) {
	var t = auth_types[e],
	n = T.find("#auth_api")[0],
	r,
	i,
	s,
	o,
	u;
	n.innerHTML = "";
	for (subtype in t) if (t.hasOwnProperty(subtype)) {
		s = "//open.t.qq.com";
		switch (subtype) {
		case "auth_interface":
			i = T.dom.create("optgroup", {
				label: "-- 授权接口"
			});
			break;
		case "api_interface":
			i = T.dom.create("optgroup", {
				label: "-- 典型数据交互接口"
			}),
			s += "/api";
			break;
		default:
			i = T.dom.create("optgroup", {
				label: "-- 其它接口"
			})
		}
		for (var a = 0,
		f = t[subtype].length; a < f; a++) o = (t[subtype][a].secure ? "https:": "http") + s + t[subtype][a].name,
		u = t[subtype][a].description,
		T.dom.append(T.dom.create("option", {
			value: o,
			"data-interfaceName": t[subtype][a].name,
			innerHTML: u ? o + " " + u: o
		}), i);
		T.dom.append(i, n)
	}
}
function showParamsList(e, t) {
	var n = [],
	r,
	i,
	s,
	o = interfaces[e].params;
	T.Array.each(o,
	function(e, o) {
		if (!o.availableAuthTypes || o.availableAuthTypes && T.Array.inArray(o.availableAuthTypes, t)) i = T.uid(10),
		s = typeof o.previewable == "undefined" || o.previewable ? !0 : !1,
		r = ['<li><div class="', s ? 'paramsName" data-value="' + o.name + '"': 'paramsNoPreviewName"', ">", o.optional ? "&nbsp;": '<span class="fs12 red">*</span>', o.name + ":", '</div><div class="paramsInput"><input type="', o.fieldType && o.fieldType == "file" ? "file": "text", '"', s ? ' data-type="paramsValue"': "", ' id="', i, '" name="' + o.name + '"', o.defaultValue == null ? "": ' value="' + o.defaultValue + '"', o.allowEdit ? "": ' class="disabled" readonly', "></input>", o.generator ? '&nbsp;<input style="line-height:20px;height:25px;" type="button" data-forInputID="' + i + '" data-paramsValue="' + o.name + '" value="自动生成"></input>': "", o.description ? '&nbsp;<span class="fs12 deepgray">' + o.description + "</span>": "", "</div></li>"].join(""),
		n.push(r)
	}),
	T.find("#paramsList")[0].innerHTML = n.join(""),
	T.find("#paramsList input[type=text]").each(function(e) {
		e.onchange = function() {
			setParamsPreview()
		}
	}),
	T.find("#paramsList input[type=button]").each(function(e) {
		e.onclick = function() {
			var e = this.getAttribute("data-paramsValue"),
			t = this.getAttribute("data-forInputID"),
			n = T.find("#auth_api")[0],
			r = n.options[n.selectedIndex].getAttribute("data-interfaceName"),
			i = interfaces[r].params,
			s,
			o;
			for (var u = 0,
			a = i.length; u < a; u++) i[u].name === e && (s = i[u].generator, o = T.find("#" + t)[0], o.value = s(), o.onchange())
		}
	}),
	setParamsPreview()
}
function setParamsPreview() {
	var e = T.find("#auth_api")[0].value,
	t = T.find("#paramsPreview")[0];
	t.value = e + "?" + getParamsPairs()
}
function getParamsPairs() {
	var e = [],
	t = 0,
	n = T.find("#paramsList .paramsName"),
	r = T.find("#paramsList input[data-type=paramsValue]");
	return n.each(function(n) {
		r[t] && e.push(n.getAttribute("data-value") + "=" + r[t].value),
		t++
	}),
	e.join("&")
}
function validateRequest() {
	var e = T.deferred.deferred(),
	t = T.find("#validateForm")[0];
	return window.callback = function(t) {
		setTimeout(function() {
			t.ret == 0 ? e.resolve(t.message) : e.reject(t.message)
		},
		800)
	},
	e
} (function() {
	var e, t = window.T;
	e = {
		name: "Open-JS",
		version: "2.0",
		debug: !0,
		pingback: !0,
		copy: function(e, t, n, r) {
			for (var i in t) if (n || typeof e[i] == "undefined") e[i] = r ? r(t[i]) : t[i];
			return e
		},
		create: function(e, t) {
			var n = this,
			r = e ? e.split(".") : [],
			i = r.length;
			for (var s = 0; s < i; s++) {
				var o = r[s],
				u = n[o];
				u || (u = t && s + 1 === i ? t: {},
				n[o] = u),
				n = u
			}
			return n
		},
		extend: function(t, n, r) {
			return e.copy(typeof t == "string" ? e.create.call(this, t) : t, n, r)
		},
		_alias: function(t, n) {
			n = n || e;
			if (typeof t == "string") this[t] ? QQWB.debug && window.console && window.console.log(QQWB.name + ': [WARNING] refused to alias "' + t + '",name conflict') : this[t] = n;
			else if (Object.prototype.toString.call(t) === "[object Array]") for (var r = 0,
			i = t.length; r < i; r++) this[t[r]] = n
		},
		alias: function(t, n) {
			return e._alias(t, e.create(n)),
			e
		},
		uid: function(e) {
			var t = Math.random().toString(16).substr(2);
			if (e) if (t.length > e) t = t.substr(0, e);
			else if (t.length < e) for (var n = 0,
			r = e - t.length; n < r; n++) t += Math.random().toString(16).substr(2, 1);
			return t
		},
		noConflict: function() {
			return t && (window.T = t),
			e
		},
		platforms: {
			WEIBO: 0,
			QZONE: 1
		}
	},
	e.extend("_const", {
		HTTP_PROTOCOL: "http://",
		HTTPS_PROTOCOL: "https://",
		API_HOST_WEIBO: "graph.t.qq.com",
		API_HOST_QZONE: "graph.qq.com",
		AUTH_HOST_WEIBO: "open.t.qq.com",
		AUTH_HOST_QZONE: "openapi.qzone.qq.com"
	}),
	e.extend("platforms.data." + e.platforms.WEIBO, {
		domain: {
			api: e._const.HTTP_PROTOCOL + e._const.AUTH_HOST_WEIBO + "/api",
			auth: e._const.HTTP_PROTOCOL + e._const.AUTH_HOST_WEIBO + "/oauth2_html/login.php",
			iframeProxy: e._const.HTTP_PROTOCOL + e._const.AUTH_HOST_WEIBO + "/open-js/proxy.html",
			flashProxy: e._const.HTTP_PROTOCOL + e._const.AUTH_HOST_WEIBO + "/open-js/proxy.swf",
			exchangeToken: e._const.HTTP_PROTOCOL + e._const.AUTH_HOST_WEIBO + "/cgi-bin/exchange_token",
			autoToken: e._const.HTTP_PROTOCOL + e._const.AUTH_HOST_WEIBO + "/cgi-bin/auto_token"
		},
		authWindow: {
			name: "openjsAuthWindow" + e.platforms.WEIBO + e.uid(),
			dimension: {
				pc: {
					width: 575,
					height: 465
				},
				mobile: {
					width: 0,
					height: 0
				}
			},
			popup: !0
		},
		cookie: {
			names: {
				accessToken: "QQWBAccessToken" + e.platforms.WEIBO,
				refreshToken: "QQWBRefreshToken" + e.platforms.WEIBO
			},
			path: "/",
			domain: ""
		}
	}),
	e.extend("platforms.data." + e.platforms.QZONE, {
		domain: {
			api: e._const.HTTPS_PROTOCOL + e._const.API_HOST_QZONE + "/",
			auth: e._const.HTTP_PROTOCOL + e._const.AUTH_HOST_QZONE + "/oauth/show",
			openid: e._const.HTTPS_PROTOCOL + e._const.API_HOST_QZONE + "/oauth2.0/me",
			iframeProxy: e._const.HTTPS_PROTOCOL + e._const.API_HOST_QZONE + "/proxy/proxy.html",
			flashProxy: e._const.HTTPS_PROTOCOL + e._const.API_HOST_QZONE + "/proxy/proxy.swf"
		},
		authWindow: {
			name: "openjsAuthWindow" + e.platforms.QZONE + e.uid(),
			dimension: {
				pc: {
					width: 569,
					height: 468
				},
				mobile: {
					width: 0,
					height: 0
				}
			},
			popup: !0
		},
		cookie: {
			names: {
				accessToken: "QQWBAccessToken" + e.platforms.QZONE,
				openId: "QQWBOpenId" + e.platforms.QZONE,
				clientId: "QQWBClientId" + e.platforms.QZONE
			},
			path: "/",
			domain: ""
		}
	}),
	e.create("getPlatform",
	function(e) {
		return e = e == null ? QQWB.platform: e,
		QQWB.platforms.data[e]
	}),
	e.create("getAppkey",
	function(e) {
		return QQWB.getPlatform(e).client.appkey || 0
	}),
	e.alias("provide", "create"),
	e._alias.call(window, ["QQWB", "T"], e)
})(),
QQWB.extend("String", {
	_trimLeft: /^\s+/,
	_trimRight: /\s+$/,
	isString: function(e) {
		return typeof e == "string"
	},
	ltrim: function(e) {
		return e == null ? "": e.toString().replace(this._trimLeft, "")
	},
	rtrim: function(e) {
		return e == null ? "": e.toString().replace(this._trimRight, "")
	},
	trim: String.prototype.trim ?
	function(e) {
		return e == null ? "": String.prototype.trim.call(e)
	}: function(e) {
		return e == null ? "": e.toString().replace(this._trimLeft, "").replace(this._trimRight, "")
	},
	startsWith: String.prototype.startsWith ?
	function(e, t) {
		return e == null ? !1 : String.prototype.startsWith.call(e, t)
	}: function(e, t) {
		return e == null ? !1 : e.toString().indexOf(t) == 0
	},
	endsWith: String.prototype.endsWith ?
	function(e, t) {
		return e == null ? !1 : String.prototype.endsWith.call(e, t)
	}: function(e, t) {
		return e == null ? !1 : e.toString().lastIndexOf(t) >= 0 && e.toString().lastIndexOf(t) + t.length == e.length
	}
}),
QQWB.extend("Array", {
	isArray: function(e) {
		return Object.prototype.toString.call(e) === "[object Array]"
	},
	inArray: function(e, t) {
		for (var n = 0,
		r = e.length; n < r; n++) if (t === e[n]) return ! 0;
		return ! 1
	},
	fromString: function(e, t, n) {
		return QQWB.String.isString(e) ? (t = t || "", n ? e.split(t, n) : e.split(t)) : []
	},
	fromArguments: function(e, t) {
		return typeof e != "object" ? [] : t ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e)
	},
	toArray: function(e) {
		return typeof e == "string" ? e.split("") : typeof e == "object" ? Array.prototype.slice.call(e, 0) : this.toArray(e.toString())
	},
	each: function(e, t) {
		for (var n = 0,
		r = e.length; n < r; n++) if (!1 === t(n, e[n])) break
	},
	get: function(e, t) {
		var n = e.length;
		if (Math.abs(t) < n) return t >= 0 ? e[t] : e[n + t]
	}
}),
QQWB.extend("dom", {
	create: function(e, t) {
		var n = document.createElement(e + "");
		if (t && n) for (attr in t) t.hasOwnProperty(attr) && (QQWB.String.startsWith(attr, "data-") ? n.setAttribute(attr, t[attr]) : n[attr] = t[attr]);
		return n
	},
	createHidden: function(e, t, n) {
		e = e || "div";
		var r = this.create(e, t);
		return n ? (r.width = r.height = 0, r.style.width = r.style.height = 0, r.style.position = "absolute", r.style.top = "-9999px") : r.style.display = "none",
		r
	},
	append: function(e, t) {
		return t = t || document.body,
		e && e.nodeType && t.appendChild(e),
		this
	},
	html: function(e, t) {
		return e && e.nodeType && t && (e.innerHTML = t),
		this
	},
	appendHidden: function(e, t, n) {
		var r = this.createHidden(null, t, n);
		return this.html(r, e),
		this.append(r)
	},
	remove: function(e) {
		return e && e.nodeType && e.parentNode && e.parentNode.removeChild(e),
		this
	},
	hasClass: function(e, t) {
		return (" " + e.className + " ").indexOf(" " + t + " ") >= 0
	},
	addClass: function(e, t) {
		return t = QQWB.String.trim(t),
		QQWB.Array.isArray(e) ? (QQWB.Array.each(e,
		function(e, n) {
			QQWB.dom.addClass(n, t)
		}), this) : (QQWB.dom.hasClass(e, t) || (e.className = e.className + " " + t), this)
	},
	removeClass: function(e, t) {
		return t = QQWB.String.trim(t),
		QQWB.Array.isArray(e) ? (QQWB.Array.each(e,
		function(e, n) {
			QQWB.dom.removeClass(n, t)
		}), this) : (QQWB.dom.hasClass(e, t) && (e.className = e.className.replace(t, ""), QQWB.dom.removeClass(e, t)), this)
	}
}),
QQWB.extend("Function", {
	isFunction: function(e) {
		return typeof e == "function"
	}
}),
QQWB.extend("deferred", {
	_promiseMethods: "done fail isResolved isRejected promise then always success error complete whatever".split(" "),
	_deferred: function() {
		var e = [],
		t,
		n,
		r,
		i = {
			done: function() {
				if (!r) {
					var n = arguments,
					s, o;
					t && (o = t, t = 0);
					for (var u = 0,
					f = n.length; u < f; u++) s = n[u],
					QQWB.Array.isArray(s) ? i.done.apply(i, s) : QQWB.Function.isFunction(s) && e.push(s);
					o && i.resolveWith(o[0], o[1])
				}
				return this
			},
			resolveWith: function(i, s) {
				if (!r && !t && !n) {
					s = s || [],
					n = 1;
					try {
						while (e[0]) e.shift().apply(i, s)
					} finally {
						t = [i, s],
						n = 0
					}
				}
				return this
			},
			resolve: function() {
				return i.resolveWith(this, arguments),
				this
			},
			isResolved: function() {
				return !! n || !!t
			},
			cancel: function() {
				return r = 1,
				e = [],
				this
			}
		};
		return i
	},
	deferred: function(e) {
		var t, n = QQWB.deferred._deferred(),
		r = QQWB.deferred._deferred();
		return QQWB.extend(n, {
			fail: r.done,
			then: function(e, t) {
				return n.done(e).fail(t),
				this
			},
			always: function() {
				return n.done.apply(n, arguments).fail.apply(this, arguments)
			},
			rejectWith: r.resolveWith,
			reject: r.resolve,
			isRejected: r.isResolved,
			promise: function(e) {
				if (e == null) {
					if (t) return t;
					t = e = {}
				}
				var r = QQWB.deferred._promiseMethods.length;
				while (r--) e[QQWB.deferred._promiseMethods[r]] = n[QQWB.deferred._promiseMethods[r]];
				return e
			}
		}),
		n.success = n.done,
		n.error = n.fail,
		n.complete = n.whatever = n.always,
		n.done(r.cancel).fail(n.cancel),
		delete n.cancel,
		e && e.call(n, n),
		n
	},
	when: function(e) {
		function t(e) {
			return function(t) {
				n[e] = arguments.length > 1 ? QQWB.Array.fromArguments(arguments) : t,
				--i || s.resolveWith(s, QQWB.Array.fromArguments(n))
			}
		}
		var n = arguments,
		r = n.length,
		i = r,
		s = r <= 1 && e && QQWB.Function.isFunction(e.promise) ? e: QQWB.deferred.deferred();
		if (r > 1) for (var o = 0; o < r; o++) n[o] && QQWB.Function.isFunction(n[o].promise) ? n[o].promise().then(t(o), s.reject) : --i,
		i || s.resolveWith(s, n);
		else s !== e && s.resolveWith(s, r ? [e] : []);
		return s.promise()
	}
}),
QQWB._alias(["task", "when"], QQWB.deferred.when),
function() {
	function e(e, t, n, r, i, s) {
		for (var o = 0,
		u = r.length; o < u; o++) {
			var a = r[o];
			if (a) {
				var f = !1;
				a = a[e];
				while (a) {
					if (a.sizcache === n) {
						f = r[a.sizset];
						break
					}
					a.nodeType === 1 && !s && (a.sizcache = n, a.sizset = o);
					if (a.nodeName.toLowerCase() === t) {
						f = a;
						break
					}
					a = a[e]
				}
				r[o] = f
			}
		}
	}
	function t(e, t, n, r, i, s) {
		for (var o = 0,
		u = r.length; o < u; o++) {
			var a = r[o];
			if (a) {
				var l = !1;
				a = a[e];
				while (a) {
					if (a.sizcache === n) {
						l = r[a.sizset];
						break
					}
					if (a.nodeType === 1) {
						s || (a.sizcache = n, a.sizset = o);
						if (typeof t != "string") {
							if (a === t) {
								l = !0;
								break
							}
						} else if (f.filter(t, [a]).length > 0) {
							l = a;
							break
						}
					}
					a = a[e]
				}
				r[o] = l
			}
		}
	}
	var n = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	r = 0,
	i = Object.prototype.toString,
	s = !1,
	o = !0,
	u = /\\/g,
	a = /\W/; [0, 0].sort(function() {
		return o = !1,
		0
	});
	var f = function(e, t, r, s) {
		r = r || [],
		t = t || document;
		var o = t;
		if (t.nodeType !== 1 && t.nodeType !== 9) return [];
		if (!e || typeof e != "string") return r;
		var u, a, h, p, v, m, g, b, w = !0,
		E = f.isXML(t),
		S = [],
		x = e;
		do {
			n.exec(""), u = n.exec(x);
			if (u) {
				x = u[3],
				S.push(u[1]);
				if (u[2]) {
					p = u[3];
					break
				}
			}
		} while ( u );
		if (S.length > 1 && c.exec(e)) if (S.length === 2 && l.relative[S[0]]) a = y(S[0] + S[1], t);
		else {
			a = l.relative[S[0]] ? [t] : f(S.shift(), t);
			while (S.length) e = S.shift(),
			l.relative[e] && (e += S.shift()),
			a = y(e, a)
		} else { ! s && S.length > 1 && t.nodeType === 9 && !E && l.match.ID.test(S[0]) && !l.match.ID.test(S[S.length - 1]) && (v = f.find(S.shift(), t, E), t = v.expr ? f.filter(v.expr, v.set)[0] : v.set[0]);
			if (t) {
				v = s ? {
					expr: S.pop(),
					set: d(s)
				}: f.find(S.pop(), S.length !== 1 || S[0] !== "~" && S[0] !== "+" || !t.parentNode ? t: t.parentNode, E),
				a = v.expr ? f.filter(v.expr, v.set) : v.set,
				S.length > 0 ? h = d(a) : w = !1;
				while (S.length) m = S.pop(),
				g = m,
				l.relative[m] ? g = S.pop() : m = "",
				g == null && (g = t),
				l.relative[m](h, g, E)
			} else h = S = []
		}
		h || (h = a),
		h || f.error(m || e);
		if (i.call(h) === "[object Array]") if (!w) r.push.apply(r, h);
		else if (t && t.nodeType === 1) for (b = 0; h[b] != null; b++) h[b] && (h[b] === !0 || h[b].nodeType === 1 && f.contains(t, h[b])) && r.push(a[b]);
		else for (b = 0; h[b] != null; b++) h[b] && h[b].nodeType === 1 && r.push(a[b]);
		else d(h, r);
		return p && (f(p, o, r, s), f.uniqueSort(r)),
		r
	};
	f.uniqueSort = function(e) {
		if (m) {
			s = o,
			e.sort(m);
			if (s) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1)
		}
		return e
	},
	f.matches = function(e, t) {
		return f(e, null, null, t)
	},
	f.matchesSelector = function(e, t) {
		return f(t, null, null, [e]).length > 0
	},
	f.find = function(e, t, n) {
		var r;
		if (!e) return [];
		for (var i = 0,
		s = l.order.length; i < s; i++) {
			var o, a = l.order[i];
			if (o = l.leftMatch[a].exec(e)) {
				var f = o[1];
				o.splice(1, 1);
				if (f.substr(f.length - 1) !== "\\") {
					o[1] = (o[1] || "").replace(u, ""),
					r = l.find[a](o, t, n);
					if (r != null) {
						e = e.replace(l.match[a], "");
						break
					}
				}
			}
		}
		return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []),
		{
			set: r,
			expr: e
		}
	},
	f.filter = function(e, t, n, r) {
		var i, s, o = e,
		u = [],
		a = t,
		c = t && t[0] && f.isXML(t[0]);
		while (e && t.length) {
			for (var h in l.filter) if ((i = l.leftMatch[h].exec(e)) != null && i[2]) {
				var p, d, v = l.filter[h],
				m = i[1];
				s = !1,
				i.splice(1, 1);
				if (m.substr(m.length - 1) === "\\") continue;
				a === u && (u = []);
				if (l.preFilter[h]) {
					i = l.preFilter[h](i, a, n, u, r, c);
					if (!i) s = p = !0;
					else if (i === !0) continue
				}
				if (i) for (var g = 0; (d = a[g]) != null; g++) if (d) {
					p = v(d, i, g, a);
					var y = r ^ !!p;
					n && p != null ? y ? s = !0 : a[g] = !1 : y && (u.push(d), s = !0)
				}
				if (p !== undefined) {
					n || (a = u),
					e = e.replace(l.match[h], "");
					if (!s) return [];
					break
				}
			}
			if (e === o) {
				if (s != null) break;
				f.error(e)
			}
			o = e
		}
		return a
	},
	f.error = function(e) {
		throw "Syntax error, unrecognized expression: " + e
	};
	var l = f.selectors = {
		order: ["ID", "NAME", "TAG"],
		match: {
			ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
			CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
			NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
			ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
			TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
			CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
			POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
			PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
		},
		leftMatch: {},
		attrMap: {
			"class": "className",
			"for": "htmlFor"
		},
		attrHandle: {
			href: function(e) {
				return e.getAttribute("href")
			},
			type: function(e) {
				return e.getAttribute("type")
			}
		},
		relative: {
			"+": function(e, t) {
				var n = typeof t == "string",
				r = n && !a.test(t),
				i = n && !r;
				r && (t = t.toLowerCase());
				for (var s = 0,
				o = e.length,
				u; s < o; s++) if (u = e[s]) {
					while ((u = u.previousSibling) && u.nodeType !== 1);
					e[s] = i || u && u.nodeName.toLowerCase() === t ? u || !1 : u === t
				}
				i && f.filter(t, e, !0)
			},
			">": function(e, t) {
				var n, r = typeof t == "string",
				i = 0,
				s = e.length;
				if (r && !a.test(t)) {
					t = t.toLowerCase();
					for (; i < s; i++) {
						n = e[i];
						if (n) {
							var o = n.parentNode;
							e[i] = o.nodeName.toLowerCase() === t ? o: !1
						}
					}
				} else {
					for (; i < s; i++) n = e[i],
					n && (e[i] = r ? n.parentNode: n.parentNode === t);
					r && f.filter(t, e, !0)
				}
			},
			"": function(n, i, s) {
				var o, u = r++,
				f = t;
				typeof i == "string" && !a.test(i) && (i = i.toLowerCase(), o = i, f = e),
				f("parentNode", i, u, n, o, s)
			},
			"~": function(n, i, s) {
				var o, u = r++,
				f = t;
				typeof i == "string" && !a.test(i) && (i = i.toLowerCase(), o = i, f = e),
				f("previousSibling", i, u, n, o, s)
			}
		},
		find: {
			ID: function(e, t, n) {
				if (typeof t.getElementById != "undefined" && !n) {
					var r = t.getElementById(e[1]);
					return r && r.parentNode ? [r] : []
				}
			},
			NAME: function(e, t) {
				if (typeof t.getElementsByName != "undefined") {
					var n = [],
					r = t.getElementsByName(e[1]);
					for (var i = 0,
					s = r.length; i < s; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
					return n.length === 0 ? null: n
				}
			},
			TAG: function(e, t) {
				if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e[1])
			}
		},
		preFilter: {
			CLASS: function(e, t, n, r, i, s) {
				e = " " + e[1].replace(u, "") + " ";
				if (s) return e;
				for (var o = 0,
				a; (a = t[o]) != null; o++) a && (i ^ (a.className && (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(a) : n && (t[o] = !1));
				return ! 1
			},
			ID: function(e) {
				return e[1].replace(u, "")
			},
			TAG: function(e, t) {
				return e[1].replace(u, "").toLowerCase()
			},
			CHILD: function(e) {
				if (e[1] === "nth") {
					e[2] || f.error(e[0]),
					e[2] = e[2].replace(/^\+|\s*/g, "");
					var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
					e[2] = t[1] + (t[2] || 1) - 0,
					e[3] = t[3] - 0
				} else e[2] && f.error(e[0]);
				return e[0] = r++,
				e
			},
			ATTR: function(e, t, n, r, i, s) {
				var o = e[1] = e[1].replace(u, "");
				return ! s && l.attrMap[o] && (e[1] = l.attrMap[o]),
				e[4] = (e[4] || e[5] || "").replace(u, ""),
				e[2] === "~=" && (e[4] = " " + e[4] + " "),
				e
			},
			PSEUDO: function(e, t, r, i, s) {
				if (e[1] === "not") {
					if (! ((n.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
						var o = f.filter(e[3], t, r, !0 ^ s);
						return r || i.push.apply(i, o),
						!1
					}
					e[3] = f(e[3], null, null, t)
				} else if (l.match.POS.test(e[0]) || l.match.CHILD.test(e[0])) return ! 0;
				return e
			},
			POS: function(e) {
				return e.unshift(!0),
				e
			}
		},
		filters: {
			enabled: function(e) {
				return e.disabled === !1 && e.type !== "hidden"
			},
			disabled: function(e) {
				return e.disabled === !0
			},
			checked: function(e) {
				return e.checked === !0
			},
			selected: function(e) {
				return e.parentNode && e.parentNode.selectedIndex,
				e.selected === !0
			},
			parent: function(e) {
				return !! e.firstChild
			},
			empty: function(e) {
				return ! e.firstChild
			},
			has: function(e, t, n) {
				return !! f(n[3], e).length
			},
			header: function(e) {
				return /h\d/i.test(e.nodeName)
			},
			text: function(e) {
				var t = e.getAttribute("type"),
				n = e.type;
				return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null)
			},
			radio: function(e) {
				return e.nodeName.toLowerCase() === "input" && "radio" === e.type
			},
			checkbox: function(e) {
				return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
			},
			file: function(e) {
				return e.nodeName.toLowerCase() === "input" && "file" === e.type
			},
			password: function(e) {
				return e.nodeName.toLowerCase() === "input" && "password" === e.type
			},
			submit: function(e) {
				var t = e.nodeName.toLowerCase();
				return (t === "input" || t === "button") && "submit" === e.type
			},
			image: function(e) {
				return e.nodeName.toLowerCase() === "input" && "image" === e.type
			},
			reset: function(e) {
				var t = e.nodeName.toLowerCase();
				return (t === "input" || t === "button") && "reset" === e.type
			},
			button: function(e) {
				var t = e.nodeName.toLowerCase();
				return t === "input" && "button" === e.type || t === "button"
			},
			input: function(e) {
				return /input|select|textarea|button/i.test(e.nodeName)
			},
			focus: function(e) {
				return e === e.ownerDocument.activeElement
			}
		},
		setFilters: {
			first: function(e, t) {
				return t === 0
			},
			last: function(e, t, n, r) {
				return t === r.length - 1
			},
			even: function(e, t) {
				return t % 2 === 0
			},
			odd: function(e, t) {
				return t % 2 === 1
			},
			lt: function(e, t, n) {
				return t < n[3] - 0
			},
			gt: function(e, t, n) {
				return t > n[3] - 0
			},
			nth: function(e, t, n) {
				return n[3] - 0 === t
			},
			eq: function(e, t, n) {
				return n[3] - 0 === t
			}
		},
		filter: {
			PSEUDO: function(e, t, n, r) {
				var i = t[1],
				s = l.filters[i];
				if (s) return s(e, n, t, r);
				if (i === "contains") return (e.textContent || e.innerText || f.getText([e]) || "").indexOf(t[3]) >= 0;
				if (i === "not") {
					var o = t[3];
					for (var u = 0,
					a = o.length; u < a; u++) if (o[u] === e) return ! 1;
					return ! 0
				}
				f.error(i)
			},
			CHILD: function(e, t) {
				var n = t[1],
				r = e;
				switch (n) {
				case "only":
				case "first":
					while (r = r.previousSibling) if (r.nodeType === 1) return ! 1;
					if (n === "first") return ! 0;
					r = e;
				case "last":
					while (r = r.nextSibling) if (r.nodeType === 1) return ! 1;
					return ! 0;
				case "nth":
					var i = t[2],
					s = t[3];
					if (i === 1 && s === 0) return ! 0;
					var o = t[0],
					u = e.parentNode;
					if (u && (u.sizcache !== o || !e.nodeIndex)) {
						var a = 0;
						for (r = u.firstChild; r; r = r.nextSibling) r.nodeType === 1 && (r.nodeIndex = ++a);
						u.sizcache = o
					}
					var f = e.nodeIndex - s;
					return i === 0 ? f === 0 : f % i === 0 && f / i >= 0
				}
			},
			ID: function(e, t) {
				return e.nodeType === 1 && e.getAttribute("id") === t
			},
			TAG: function(e, t) {
				return t === "*" && e.nodeType === 1 || e.nodeName.toLowerCase() === t
			},
			CLASS: function(e, t) {
				return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
			},
			ATTR: function(e, t) {
				var n = t[1],
				r = l.attrHandle[n] ? l.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n),
				i = r + "",
				s = t[2],
				o = t[4];
				return r == null ? s === "!=": s === "=" ? i === o: s === "*=" ? i.indexOf(o) >= 0 : s === "~=" ? (" " + i + " ").indexOf(o) >= 0 : o ? s === "!=" ? i !== o: s === "^=" ? i.indexOf(o) === 0 : s === "$=" ? i.substr(i.length - o.length) === o: s === "|=" ? i === o || i.substr(0, o.length + 1) === o + "-": !1 : i && r !== !1
			},
			POS: function(e, t, n, r) {
				var i = t[2],
				s = l.setFilters[i];
				if (s) return s(e, n, t, r)
			}
		}
	},
	c = l.match.POS,
	h = function(e, t) {
		return "\\" + (t - 0 + 1)
	};
	for (var p in l.match) l.match[p] = new RegExp(l.match[p].source + /(?![^\[]*\])(?![^\(]*\))/.source),
	l.leftMatch[p] = new RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[p].source.replace(/\\(\d+)/g, h));
	var d = function(e, t) {
		return e = Array.prototype.slice.call(e, 0),
		t ? (t.push.apply(t, e), t) : e
	};
	try {
		Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType
	} catch(v) {
		d = function(e, t) {
			var n = 0,
			r = t || [];
			if (i.call(e) === "[object Array]") Array.prototype.push.apply(r, e);
			else if (typeof e.length == "number") for (var s = e.length; n < s; n++) r.push(e[n]);
			else for (; e[n]; n++) r.push(e[n]);
			return r
		}
	}
	var m, g;
	document.documentElement.compareDocumentPosition ? m = function(e, t) {
		return e === t ? (s = !0, 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition ? -1 : 1 : e.compareDocumentPosition(t) & 4 ? -1 : 1
	}: (m = function(e, t) {
		if (e === t) return s = !0,
		0;
		if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
		var n, r, i = [],
		o = [],
		u = e.parentNode,
		a = t.parentNode,
		f = u;
		if (u === a) return g(e, t);
		if (!u) return - 1;
		if (!a) return 1;
		while (f) i.unshift(f),
		f = f.parentNode;
		f = a;
		while (f) o.unshift(f),
		f = f.parentNode;
		n = i.length,
		r = o.length;
		for (var l = 0; l < n && l < r; l++) if (i[l] !== o[l]) return g(i[l], o[l]);
		return l === n ? g(e, o[l], -1) : g(i[l], t, 1)
	},
	g = function(e, t, n) {
		if (e === t) return n;
		var r = e.nextSibling;
		while (r) {
			if (r === t) return - 1;
			r = r.nextSibling
		}
		return 1
	}),
	f.getText = function(e) {
		var t = "",
		n;
		for (var r = 0; e[r]; r++) n = e[r],
		n.nodeType === 3 || n.nodeType === 4 ? t += n.nodeValue: n.nodeType !== 8 && (t += f.getText(n.childNodes));
		return t
	},
	function() {
		var e = document.createElement("div"),
		t = "script" + (new Date).getTime(),
		n = document.documentElement;
		e.innerHTML = "<a name='" + t + "'/>",
		n.insertBefore(e, n.firstChild),
		document.getElementById(t) && (l.find.ID = function(e, t, n) {
			if (typeof t.getElementById != "undefined" && !n) {
				var r = t.getElementById(e[1]);
				return r ? r.id === e[1] || typeof r.getAttributeNode != "undefined" && r.getAttributeNode("id").nodeValue === e[1] ? [r] : undefined: []
			}
		},
		l.filter.ID = function(e, t) {
			var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
			return e.nodeType === 1 && n && n.nodeValue === t
		}),
		n.removeChild(e),
		n = e = null
	} (),
	function() {
		var e = document.createElement("div");
		e.appendChild(document.createComment("")),
		e.getElementsByTagName("*").length > 0 && (l.find.TAG = function(e, t) {
			var n = t.getElementsByTagName(e[1]);
			if (e[1] === "*") {
				var r = [];
				for (var i = 0; n[i]; i++) n[i].nodeType === 1 && r.push(n[i]);
				n = r
			}
			return n
		}),
		e.innerHTML = "<a href='#'></a>",
		e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (l.attrHandle.href = function(e) {
			return e.getAttribute("href", 2)
		}),
		e = null
	} (),
	document.querySelectorAll &&
	function() {
		var e = f,
		t = document.createElement("div"),
		n = "__sizzle__";
		t.innerHTML = "<p class='TEST'></p>";
		if (t.querySelectorAll && t.querySelectorAll(".TEST").length === 0) return;
		f = function(t, r, i, s) {
			r = r || document;
			if (!s && !f.isXML(r)) {
				var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
				if (o && (r.nodeType === 1 || r.nodeType === 9)) {
					if (o[1]) return d(r.getElementsByTagName(t), i);
					if (o[2] && l.find.CLASS && r.getElementsByClassName) return d(r.getElementsByClassName(o[2]), i)
				}
				if (r.nodeType === 9) {
					if (t === "body" && r.body) return d([r.body], i);
					if (o && o[3]) {
						var u = r.getElementById(o[3]);
						if (!u || !u.parentNode) return d([], i);
						if (u.id === o[3]) return d([u], i)
					}
					try {
						return d(r.querySelectorAll(t), i)
					} catch(a) {}
				} else if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
					var c = r,
					h = r.getAttribute("id"),
					p = h || n,
					v = r.parentNode,
					m = /^\s*[+~]/.test(t);
					h ? p = p.replace(/'/g, "\\$&") : r.setAttribute("id", p),
					m && v && (r = r.parentNode);
					try {
						if (!m || v) return d(r.querySelectorAll("[id='" + p + "'] " + t), i)
					} catch(g) {} finally {
						h || c.removeAttribute("id")
					}
				}
			}
			return e(t, r, i, s)
		};
		for (var r in e) f[r] = e[r];
		t = null
	} (),
	function() {
		var e = document.documentElement,
		t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
		if (t) {
			var n = !t.call(document.createElement("div"), "div"),
			r = !1;
			try {
				t.call(document.documentElement, "[test!='']:sizzle")
			} catch(i) {
				r = !0
			}
			f.matchesSelector = function(e, i) {
				i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
				if (!f.isXML(e)) try {
					if (r || !l.match.PSEUDO.test(i) && !/!=/.test(i)) {
						var s = t.call(e, i);
						if (s || !n || e.document && e.document.nodeType !== 11) return s
					}
				} catch(o) {}
				return f(i, null, null, [e]).length > 0
			}
		}
	} (),
	function() {
		var e = document.createElement("div");
		e.innerHTML = "<div class='test e'></div><div class='test'></div>";
		if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) return;
		e.lastChild.className = "e";
		if (e.getElementsByClassName("e").length === 1) return;
		l.order.splice(1, 0, "CLASS"),
		l.find.CLASS = function(e, t, n) {
			if (typeof t.getElementsByClassName != "undefined" && !n) return t.getElementsByClassName(e[1])
		},
		e = null
	} (),
	document.documentElement.contains ? f.contains = function(e, t) {
		return e !== t && (e.contains ? e.contains(t) : !0)
	}: document.documentElement.compareDocumentPosition ? f.contains = function(e, t) {
		return !! (e.compareDocumentPosition(t) & 16)
	}: f.contains = function() {
		return ! 1
	},
	f.isXML = function(e) {
		var t = (e ? e.ownerDocument || e: 0).documentElement;
		return t ? t.nodeName !== "HTML": !1
	};
	var y = function(e, t) {
		var n, r = [],
		i = "",
		s = t.nodeType ? [t] : t;
		while (n = l.match.PSEUDO.exec(e)) i += n[0],
		e = e.replace(l.match.PSEUDO, "");
		e = l.relative[e] ? e + "*": e;
		for (var o = 0,
		u = s.length; o < u; o++) f(e, s[o], r);
		return f.filter(i, r)
	},
	b = window.Sizzle;
	f.noConflict = function() {
		window.Sizzle = b
	},
	window.Sizzle = f
} (),
function() {
	function e(e) {
		var t;
		if (!QQWB.Array.isArray(this)) return this;
		t = [];
		for (var n = 0,
		r = this.length; n < r; n++) t = t.concat(u(e, this[n]));
		return t
	}
	function t(e) {
		return typeof e != "string" ? this: e.length <= 0 ? this: u.matches(":contains(" + e + ")", this)
	}
	function n(e) {
		return u.matches(e, this)
	}
	function r(e) {
		return u.matches(":not(" + e + ")", this)
	}
	function i(e) {
		return QQWB.Array.get(this, e)
	}
	function s(e) {
		if (!QQWB.Array.isArray(this) || !e) return this;
		for (var t = 0,
		n = this.length; t < n; t++) if (e(this[t]) === !1) break;
		return this
	}
	function o(u) {
		return ! u.find && (u.find = function(t) {
			return o(e.call(u, t))
		}),
		!u.contains && (u.contains = function(e) {
			return o(t.call(u, e))
		}),
		!u.keep && (u.keep = function(e) {
			return o(n.call(u, e))
		}),
		!u.tear && (u.tear = function(e) {
			return o(r.call(u, e))
		}),
		!u.get && (u.get = function(e) {
			return i.call(u, e)
		}),
		!u.each && (u.each = function(e) {
			return s.call(u, e)
		}),
		u
	}
	var u = window.Sizzle;
	u.noConflict(),
	QQWB.provide("dom.find",
	function(e, t) {
		return o(u(e, t))
	}),
	QQWB._alias("find", QQWB.dom.find)
} ();
var auth_types = {
	0 : {
		auth_interface: [{
			name: "/cgi-bin/request_token"
		},
		{
			name: "/cgi-bin/authorize"
		},
		{
			name: "/cgi-bin/access_token"
		}],
		api_interface: [{
			name: "/user/info",
			description: "获取用户信息"
		},
		{
			name: "/t/add_pic",
			description: "发表带图片的微博"
		}]
	},
	1 : {
		auth_interface: [{
			name: "/cgi-bin/oauth2/authorize",
			description: "授权相关",
			secure: !0
		},
		{
			name: "/cgi-bin/oauth2/access_token",
			description: "token相关",
			secure: !0
		}],
		api_interface: [{
			name: "/user/info",
			description: "获取用户信息"
		},
		{
			name: "/t/add_pic",
			description: "发表带图片的微博"
		}]
	},
	2 : {
		api_interface: [{
			name: "/user/info",
			description: "获取用户信息"
		},
		{
			name: "/t/add_pic",
			description: "发表带图片的微博"
		}]
	},
	3 : {
		api_interface: [{
			name: "/user/info",
			description: "获取用户信息"
		},
		{
			name: "/t/add_pic",
			description: "发表带图片的微博"
		}]
	},
	4 : {
		api_interface: [{
			name: "/user/info",
			description: "获取用户信息"
		},
		{
			name: "/t/add_pic",
			description: "发表带图片的微博"
		}]
	}
},
API_COMMON_PARAM = [{
	name: "oauth_consumer_key",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	availableAuthTypes: [0, 1, 3],
	description: "App Key(应用信息中的App Key值)"
},
{
	name: "oauth_token",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	availableAuthTypes: [0, 3],
	description: "Access Token"
},
{
	name: "access_token",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	availableAuthTypes: [1],
	description: "Access Token"
},
{
	name: "oauth_token_secret",
	defaultValue: null,
	allowEdit: !0,
	optional: !0,
	availableAuthTypes: [0],
	description: "Access Token Secret(如果您需要获得正确的签名，请填写此参数)",
	previewable: !1
},
{
	name: "oauth_signature_method",
	defaultValue: "HMAC-SHA1",
	allowEdit: !1,
	optional: !1,
	availableAuthTypes: [0],
	description: "签名方法，暂只支持HMAC-SHA1"
},
{
	name: "oauth_signature",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	availableAuthTypes: [0],
	description: "签名值，密钥为：App Secret&Access Token Secret。"
},
{
	name: "oauth_timestamp",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	availableAuthTypes: [0],
	description: "时间戳",
	generator: function() {
		return Math.round( + (new Date) / 1e3)
	}
},
{
	name: "oauth_nonce",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	availableAuthTypes: [0],
	description: "单次值",
	generator: function() {
		return T.uid(32)
	}
},
{
	name: "oauth_version",
	defaultValue: "2.a",
	allowEdit: !1,
	optional: !1,
	availableAuthTypes: [1],
	description: "版本号"
},
{
	name: "oauth_version",
	defaultValue: "2.0",
	allowEdit: !1,
	optional: !1,
	availableAuthTypes: [3],
	description: "版本号"
},
{
	name: "appid",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	availableAuthTypes: [2],
	description: "第三方应用的AppID"
},
{
	name: "openid",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	availableAuthTypes: [1, 2],
	description: "与第三方通信的用户ID"
},
{
	name: "openkey",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	availableAuthTypes: [2],
	description: "用户在第三方应用的腾讯登录态"
},
{
	name: "reqtime",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	availableAuthTypes: [2],
	description: "用户访问的当前时间（重复请求将会被拒绝）",
	generator: function() {
		return Math.round( + (new Date) / 1e3)
	}
},
{
	name: "sig",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	availableAuthTypes: [2],
	description: "URL参数签名"
},
{
	name: "format",
	defaultValue: "json",
	allowEdit: !0,
	optional: !0,
	description: "返回数据的格式（json或xml）"
},
{
	name: "uin",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	availableAuthTypes: [4],
	description: "uin"
},
{
	name: "skey",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	availableAuthTypes: [4],
	description: "skey"
},
{
	name: "wbversion",
	defaultValue: "1",
	allowEdit: !1,
	optional: !1,
	availableAuthTypes: [2],
	description: "微博版本号,目前为1"
}],
interfaces = {
	"/cgi-bin/request_token": {
		params: [{
			name: "oauth_consumer_key",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "App Key(应用信息中的App Key值)"
		},
		{
			name: "oauth_signature_method",
			defaultValue: "HMAC-SHA1",
			allowEdit: !1,
			optional: !1,
			description: "签名方法，暂只支持HMAC-SHA1"
		},
		{
			name: "oauth_signature",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "签名值，密钥为：App Secret。"
		},
		{
			name: "oauth_timestamp",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "时间戳, 其值是距1970 00:00:00 GMT的秒数，必须是大于0的整数",
			generator: function() {
				return Math.round( + (new Date) / 1e3)
			}
		},
		{
			name: "oauth_nonce",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "单次值，随机生成的32位字符串，防止重放攻击（每次请求必须不同）",
			generator: function() {
				return T.uid(32)
			}
		},
		{
			name: "oauth_callback",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "认证成功后浏览器会被重定向到这个url中"
		},
		{
			name: "oauth_version",
			defaultValue: "1.0",
			allowEdit: !1,
			optional: !0,
			description: "版本号"
		}]
	},
	"/cgi-bin/authorize": {
		params: [{
			name: "oauth_token",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "上一步中获得的未授权的Request Token"
		}]
	},
	"/cgi-bin/access_token": {
		params: [{
			name: "oauth_consumer_key",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "App Key（应用信息中的App Key值）"
		},
		{
			name: "oauth_token",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "第一步中获得的Request Token"
		},
		{
			name: "oauth_token_secret",
			defaultValue: null,
			allowEdit: !0,
			optional: !0,
			description: "第一步中获得的Request Token Secret(如果您需要获得正确的签名，请填写此参数)"
		},
		{
			name: "oauth_signature_method",
			defaultValue: "HMAC-SHA1",
			allowEdit: !1,
			optional: !1,
			description: "签名方法，暂只支持HMAC-SHA1"
		},
		{
			name: "oauth_signature",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "签名值，密钥为：App Secret&Request Token Secret"
		},
		{
			name: "oauth_timestamp",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "时间戳, 其值是距1970 00:00:00 GMT的秒数，必须是大于0的整数",
			generator: function() {
				return Math.round( + (new Date) / 1e3)
			}
		},
		{
			name: "oauth_nonce",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "单次值，随机生成的32位字符串，防止重放攻击（每次请求必须不同）",
			generator: function() {
				return T.uid(32)
			}
		},
		{
			name: "oauth_verifier",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "上一步请求授权request token时返回的验证码"
		},
		{
			name: "oauth_version",
			defaultValue: "1.0",
			allowEdit: !1,
			optional: !0,
			description: "版本号，有的话必须为“1.0”"
		}]
	},
	"/cgi-bin/oauth2/authorize": {
		params: [{
			name: "client_id",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "申请应用时分配的appkey"
		},
		{
			name: "redirect_uri",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "授权成功后的回调地址，即第三方应用的url"
		},
		{
			name: "response_type",
			defaultValue: "code",
			allowEdit: !0,
			optional: !1,
			description: "授权类型可以为code或token"
		},
		{
			name: "wap",
			defaultValue: null,
			allowEdit: !0,
			optional: !0,
			description: "手机授权页版本，可以为1或2，不带本参数，手机访问时自动跳转到2"
		}]
	},
	"/cgi-bin/oauth2/access_token": {
		params: [{
			name: "client_id",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "申请应用时分配的appkey"
		},
		{
			name: "client_secret",
			defaultValue: null,
			allowEdit: !1,
			optional: !1,
			description: "申请应用时分配的appsecret，在此不用填写，但实际使用时必须填写"
		},
		{
			name: "grant_type",
			defaultValue: null,
			allowEdit: !0,
			optional: !1,
			description: "authorization_code或refresh_token"
		},
		{
			name: "code",
			defaultValue: null,
			allowEdit: !0,
			optional: !0,
			description: "调用authorize时返回的code，当grant_type为authorization_code时必填"
		},
		{
			name: "refresh_token",
			defaultValue: null,
			allowEdit: !0,
			optional: !0,
			description: "之前返回的refreshtoken，当grant_type为refresh_token时必填"
		},
		{
			name: "redirect_uri",
			defaultValue: null,
			allowEdit: !0,
			optional: !0,
			description: "回调地址，必须和请求code时的redirecturi一致，当grant_type为authorization_code时必填"
		}]
	},
	"/user/info": {
		params: API_COMMON_PARAM
	},
	"/t/add_pic": {
		params: API_COMMON_PARAM
	}
};
interfaces["/t/add_pic"].params = interfaces["/t/add_pic"].params.concat([{
	name: "content",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	description: "微博内容"
},
{
	name: "clientip",
	defaultValue: "127.0.0.1",
	allowEdit: !0,
	optional: !0,
	description: "用户ip(以分析用户所在地)"
},
{
	name: "jing",
	defaultValue: null,
	allowEdit: !0,
	optional: !0,
	description: "经度"
},
{
	name: "wei",
	defaultValue: null,
	allowEdit: !0,
	optional: !0,
	description: "纬度"
},
{
	name: "pic",
	defaultValue: null,
	allowEdit: !0,
	optional: !1,
	fieldType: "file",
	description: "图片表单",
	previewable: !1
}]);
var auth_types, interfaces;
window.onload = function() {
	OnDOMLoaded()
};
/*  |xGv00|bb8093338f15f598200ee4c490468c45 */
