/* (c) 2008, 2009, 2010 Add This, LLC */
var addthis_conf = {
	ver : 100
};
function addthis_click(d, c) {
	try {
		d.onmouseout = function() {
			addthis_close()
		}
	} catch (f) {
	}
	return addthis_open(d, c || "", window.addthis_url || "",
			window.addthis_title || "")
}
function addthis_invoke(e, c, d, f) {
	addthis_config.username = f || _ate.pub();
	addthis_share.url = (c || b.addthis_url || "[url]");
	addthis_share.title = (d || b.addthis_title || "[title]");
	var b = window, g = addthis_share.url.toLowerCase(), a = addthis_share.title
			.toLowerCase();
	if (g === "" || g === "[url]") {
		addthis_share.url = location.href
	}
	if (a === "" || a === "[title]") {
		addthis_share.title = document.title
	}
	_ate.as(e);
	return false
};
if (!window._ate) {
	var _atd = "www.addthis.com/", _atr = "//s7.addthis.com/", _atn = "//l.addthiscdn.com/", _euc = encodeURIComponent, _duc = decodeURIComponent, _atc = {
		dr : 0,
		ver : 250,
		loc : 0,
		enote : "",
		cwait : 500,
		bamp : 0.25,
		camp : 1,
		damp : 1,
		famp : 0.02,
		pamp : 0.2,
		tamp : 1,
		vamp : 1,
		ltj : 1,
		xamp : 0.5,
		abf : !!window.addthis_do_ab,
		ufc : 1
	};
	(function() {
		var l;
		try {
			l = window.location;
			if (l.protocol.indexOf("file") === 0
					|| l.protocol.indexOf("safari-extension") === 0
					|| l.protocol.indexOf("chrome-extension") === 0) {
				_atr = "http:" + _atr
			}
			if (l.hostname.indexOf("localhost") != -1) {
				_atc.loc = 1
			}
		} catch (e) {
		}
		var ua = navigator.userAgent.toLowerCase(), d = document, w = window, dl = d.location, b = {
			win : /windows/.test(ua),
			xp : (/windows nt 5.1/.test(ua)) || (/windows nt 5.2/.test(ua)),
			osx : /os x/.test(ua),
			chr : /chrome/.test(ua),
			iph : /iphone/.test(ua),
			dro : /android/.test(ua),
			ipa : /ipad/.test(ua),
			saf : /safari/.test(ua),
			opr : /opera/.test(ua),
			msi : (/msie/.test(ua)) && !(/opera/.test(ua)),
			ffx : /firefox/.test(ua),
			ff2 : /firefox\/2/.test(ua),
			ffn : /firefox\/((3.[6789][0-9a-z]*)|(4.[0-9a-z]*))/.test(ua),
			ie6 : /msie 6.0/.test(ua),
			ie7 : /msie 7.0/.test(ua),
			ie8 : /msie 8.0/.test(ua),
			ie9 : /msie 9.0/.test(ua),
			mod : -1
		}, _ate = {
			rev : "97533",
			bro : b,
			wlp : (l || {}).protocol,
			dl : dl,
			upm : !!w.postMessage
					&& ("" + w.postMessage).toLowerCase().indexOf(
							"[native code]") !== -1,
			bamp : _atc.bamp - Math.random(),
			camp : _atc.camp - Math.random(),
			xamp : _atc.xamp - Math.random(),
			vamp : _atc.vamp - Math.random(),
			tamp : _atc.tamp - Math.random(),
			pamp : _atc.pamp - Math.random(),
			ab : "-",
			inst : 1,
			wait : 500,
			tmo : null,
			sub : !!window.at_sub,
			dbm : 0,
			uid : null,
			spt : "static/r07/widget30.png",
			api : {},
			imgz : [],
			hash : window.location.hash
		};
		d.ce = d.createElement;
		d.gn = d.getElementsByTagName;
		window._ate = _ate;
		_ate.evl = function(src, scope) {
			return eval(src)
		};
		var reduce = function(o, fn, acc, cxt) {
			if (!o) {
				return acc
			}
			if (o instanceof Array || (o.length && (typeof o !== "function"))) {
				for ( var i = 0, len = o.length, v = o[0]; i < len; v = o[++i]) {
					acc = fn.call(cxt || o, acc, v, i, o)
				}
			} else {
				for ( var name in o) {
					acc = fn.call(cxt || o, acc, o[name], name, o)
				}
			}
			return acc
		}, _asl = Array.prototype.slice, slice = function(a) {
			return _asl.apply(a, _asl.call(arguments, 1))
		}, strip = function(s) {
			return ("" + s).replace(/(^\s+|\s+$)/g, "")
		}, extend = function(A, B) {
			return reduce(slice(arguments, 1), function(A, donor) {
				return reduce(donor, function(o, v, k) {
					if (o) {
						o[k] = v
					}
					return o
				}, A)
			}, A)
		}, recursiveToKV = function(o, del) {
			return reduce(
					o,
					function(acc, v, k) {
						k = strip(k);
						if (k) {
							acc
									.push(_euc(k)
											+ "="
											+ _euc(strip((typeof (v) == "object" ? recursiveToKV(v)
													: (v)))))
						}
						return acc
					}, []).join(del || "&")
		}, toKV = function(o, del) {
			return reduce(o, function(acc, v, k) {
				k = strip(k);
				if (k) {
					acc.push(_euc(k) + "=" + _euc(strip(v)))
				}
				return acc
			}, []).join(del || "&")
		}, recursiveFromKV = function(q, del) {
			return reduce(
					(q || "").split(del || "&"),
					function(acc, pair) {
						try {
							var kv = pair.split("="), k = strip(_duc(kv[0])), v = strip(_duc(kv
									.slice(1).join("=")));
							if (v.indexOf(del || "&") > -1) {
								v = recursiveFromKV(del || "&")
							}
							if (k) {
								acc[k] = v
							}
						} catch (e) {
						}
						return acc
					}, {})
		}, fromKV = function(q, del) {
			return reduce(
					(q || "").split(del || "&"),
					function(acc, pair) {
						try {
							var kv = pair.split("="), k = strip(_duc(kv[0])), v = strip(_duc(kv
									.slice(1).join("=")));
							if (k) {
								acc[k] = v
							}
						} catch (e) {
						}
						return acc
					}, {})
		}, bind = function() {
			var args = slice(arguments, 0), fn = args.shift(), context = args
					.shift();
			return function() {
				return fn.apply(context, args.concat(slice(arguments, 0)))
			}
		}, _listen = function(un, obj, evt, fn) {
			if (!obj) {
				return
			}
			if (we) {
				obj[(un ? "detach" : "attach") + "Event"]("on" + evt, fn)
			} else {
				obj[(un ? "remove" : "add") + "EventListener"](evt, fn, false)
			}
		}, listen = function(obj, evt, fn) {
			_listen(0, obj, evt, fn)
		}, unlisten = function(obj, evt, fn) {
			_listen(1, obj, evt, fn)
		}, util = {
			reduce : reduce,
			slice : slice,
			strip : strip,
			extend : extend,
			toKV : toKV,
			rtoKV : recursiveToKV,
			fromKV : fromKV,
			rfromKV : recursiveFromKV,
			bind : bind,
			listen : listen,
			unlisten : unlisten
		};
		_ate.util = util;
		extend(_ate, util);
		(function(_addthis, addthis, env) {
			var undefined, u = _addthis.util;
			function PolyEvent(type, triggerType, target, triggerTarget, data) {
				this.type = type;
				this.triggerType = triggerType || type;
				this.target = target || triggerTarget;
				this.triggerTarget = triggerTarget || target;
				this.data = data || {}
			}
			u.extend(PolyEvent.prototype, {
				constructor : PolyEvent,
				bubbles : false,
				preventDefault : u.noop,
				stopPropagation : u.noop,
				clone : function() {
					return new this.constructor(this.type, this.triggerType,
							this.target, this.triggerTarget, u.extend({},
									this.data))
				}
			});
			function EventDispatcher(target, defaultEventType) {
				this.target = target;
				this.queues = {};
				this.defaultEventType = defaultEventType || PolyEvent
			}
			function getQueue(evt) {
				var Qs = this.queues;
				if (!Qs[evt]) {
					Qs[evt] = []
				}
				return Qs[evt]
			}
			function addEventListener(evt, fn) {
				this.getQueue(evt).push(fn)
			}
			function removeEventListener(evt, fn) {
				var q = this.getQueue(evt), idx = q.indexOf(fn);
				if (idx !== -1) {
					q.splice(idx, 1)
				}
			}
			function fire(evtname, target, data, sync) {
				var self = this;
				if (!sync) {
					setTimeout(function() {
						self.dispatchEvent(new self.defaultEventType(evtname,
								evtname, target, self.target, data))
					}, 10)
				} else {
					self.dispatchEvent(new self.defaultEventType(evtname,
							evtname, target, self.target, data))
				}
			}
			function dispatchEvent(evt) {
				for ( var i = 0, target = evt.target, q = this
						.getQueue(evt.type), L = q.length; i < L; i++) {
					q[i].call(target, evt.clone())
				}
			}
			function decorate(delegate) {
				if (!delegate) {
					return
				}
				for ( var k in methods) {
					delegate[k] = u.bind(methods[k], this)
				}
				return delegate
			}
			var methods = {
				constructor : EventDispatcher,
				getQueue : getQueue,
				addEventListener : addEventListener,
				removeEventListener : removeEventListener,
				dispatchEvent : dispatchEvent,
				fire : fire,
				decorate : decorate
			};
			u.extend(EventDispatcher.prototype, methods);
			_addthis.event = {
				PolyEvent : PolyEvent,
				EventDispatcher : EventDispatcher
			}
		})(_ate, _ate.api, _ate);
		_ate.ed = new _ate.event.EventDispatcher(_ate);
		var _adr = {
			isBound : 0,
			isReady : 0,
			readyList : [],
			onReady : function() {
				if (!_adr.isReady) {
					_adr.isReady = 1;
					var l = _adr.readyList.concat(window.addthis_onload || []);
					for ( var fn = 0; fn < l.length; fn++) {
						l[fn].call(window)
					}
					_adr.readyList = []
				}
			},
			addLoad : function(func) {
				var o = w.onload;
				if (typeof w.onload != "function") {
					w.onload = func
				} else {
					w.onload = function() {
						if (o) {
							o()
						}
						func()
					}
				}
			},
			bindReady : function() {
				if (r.isBound || _atc.xol) {
					return
				}
				r.isBound = 1;
				if (d.addEventListener && !b.opr) {
					d.addEventListener("DOMContentLoaded", r.onReady, false)
				}
				var apc = window.addthis_product;
				if (apc && apc.indexOf("f") > -1) {
					r.onReady();
					return
				}
				if (b.msi && !b.ie9 && window == top) {
					(function() {
						if (r.isReady) {
							return
						}
						try {
							d.documentElement.doScroll("left")
						} catch (error) {
							setTimeout(arguments.callee, 0);
							return
						}
						r.onReady()
					})()
				}
				if (b.opr) {
					d.addEventListener("DOMContentLoaded", function() {
						if (r.isReady) {
							return
						}
						for ( var i = 0; i < d.styleSheets.length; i++) {
							if (d.styleSheets[i].disabled) {
								setTimeout(arguments.callee, 0);
								return
							}
						}
						r.onReady()
					}, false)
				}
				if (b.saf) {
					var numStyles;
					(function() {
						if (r.isReady) {
							return
						}
						if (d.readyState != "loaded"
								&& d.readyState != "complete") {
							setTimeout(arguments.callee, 0);
							return
						}
						if (numStyles === undefined) {
							var links = d.gn("link");
							for ( var i = 0; i < links.length; i++) {
								if (links[i].getAttribute("rel") == "stylesheet") {
									numStyles++
								}
							}
							var styles = d.gn("style");
							numStyles += styles.length
						}
						if (d.styleSheets.length != numStyles) {
							setTimeout(arguments.callee, 0);
							return
						}
						r.onReady()
					})()
				}
				r.addLoad(r.onReady)
			},
			append : function(fn, args) {
				r.bindReady();
				if (r.isReady) {
					fn.call(window, [])
				} else {
					r.readyList.push(function() {
						return fn.call(window, [])
					})
				}
			}
		}, r = _adr, a = _ate;
		extend(_ate, {
			plo : [],
			lad : function(x) {
				_ate.plo.push(x)
			}
		});
		(function(_addthis, addthis, env) {
			var w = window;
			_addthis.pub = function() {
				return _euc((window.addthis_config || {}).pubid
						|| (window.addthis_config || {}).username
						|| window.addthis_pub || "")
			};
			_addthis.usu = function(url, f) {
				if (!w.addthis_share) {
					w.addthis_share = {}
				}
				if (f || url != addthis_share.url) {
					addthis_share.imp_url = 0
				}
			};
			_addthis.rsu = function() {
				var d = document, dt = d.title, du = d.location ? d.location.href
						: "";
				if (_atc.ver >= 250
						&& addthis_share.imp_url
						&& du
						&& du != w.addthis_share.url
						&& !(_ate.util.ivc((d.location.hash || "").substr(1)
								.split(",").shift()))) {
					w.addthis_share.url = w.addthis_url = du;
					w.addthis_share.title = w.addthis_title = dt;
					return 1
				}
				return 0
			};
			_addthis.igv = function(u, t) {
				if (!w.addthis_config) {
					w.addthis_config = {
						username : w.addthis_pub
					}
				} else {
					if (addthis_config.data_use_cookies === false) {
						_atc.xck = 1
					}
				}
				if (!w.addthis_share) {
					w.addthis_share = {}
				}
				if (!addthis_share.url) {
					if (!w.addthis_url && addthis_share.imp_url === undefined) {
						addthis_share.imp_url = 1
					}
					addthis_share.url = (w.addthis_url || u || "").split("#{")
							.shift()
				}
				if (!addthis_share.title) {
					addthis_share.title = (w.addthis_title || t || "").split(
							"#{").shift()
				}
			};
			if (!_atc.ost) {
				if (!w.addthis_conf) {
					w.addthis_conf = {}
				}
				for ( var i in addthis_conf) {
					_atc[i] = addthis_conf[i]
				}
				_atc.ost = 1
			}
		})(_ate, _ate.api, _ate);
		(function(_addthis, addthis, env) {
			var undefined, d = document, u = _addthis.util;
			_addthis.ckv = u.fromKV(d.cookie, ";");
			function read(k) {
				return u.fromKV(d.cookie, ";")[k]
			}
			if (!_addthis.cookie) {
				_addthis.cookie = {}
			}
			_addthis.cookie.rck = read
		})(_ate, _ate.api, _ate);
		(function(_addthis, addthis, env) {
			var undefined, d = document, isWriteable = 0, u = _addthis.util;
			function canWeWrite() {
				if (isWriteable) {
					return 1
				}
				set("xtc", 1);
				if (1 == _addthis.cookie.rck("xtc")) {
					isWriteable = 1
				}
				kill("xtc", 1);
				return isWriteable
			}
			function checkForGovSite(host) {
				if (_atc.xck) {
					return
				}
				var h = host || _ate.dh || _ate.du
						|| (_ate.dl ? _ate.dl.hostname : "");
				if (h.indexOf(".gov") > -1 || h.indexOf(".mil") > -1) {
					_atc.xck = 1
				}
				var p = typeof (_addthis.pub) === "function" ? _addthis.pub()
						: _addthis.pub, x = [ "usarmymedia", "govdelivery" ];
				for (i in x) {
					if (p == x[i]) {
						_atc.xck = 1;
						break
					}
				}
			}
			function kill(k, ud) {
				if (d.cookie) {
					d.cookie = k
							+ "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"
							+ (ud ? "; domain=" + (_addthis.bro.msi ? "" : ".")
									+ "addthis.com" : "")
				}
			}
			function set(u, v, s, nd, expires) {
				checkForGovSite();
				if (!_atc.xck) {
					if (!expires) {
						var expires = new Date();
						expires.setYear(expires.getFullYear() + 2)
					}
					document.cookie = u
							+ "="
							+ v
							+ (!s ? "; expires=" + expires.toUTCString() : "")
							+ "; path=/;"
							+ (!nd ? " domain=" + (_addthis.bro.msi ? "" : ".")
									+ "addthis.com" : "")
				}
			}
			if (!_addthis.cookie) {
				_addthis.cookie = {}
			}
			_addthis.cookie.sck = set;
			_addthis.cookie.kck = kill;
			_addthis.cookie.cww = canWeWrite;
			_addthis.cookie.gov = checkForGovSite
		})(_ate, _ate.api, _ate);
		(function(_addthis, addthis, env) {
			function munge(s) {
				var mv = 291;
				if (s) {
					for ( var i = 0; i < s.length; i++) {
						mv = (mv * (s.charCodeAt(i) + i) + 3) & 1048575
					}
				}
				return (mv & 16777215).toString(32)
			}
			_addthis.mun = munge
		})(_ate, _ate.api, _ate);
		(function(_addthis, addthis, env) {
			var undefined, u = _addthis.util, max = 4294967295, sttm = new Date()
					.getTime();
			function generateCuid() {
				return ((sttm / 1000) & max).toString(16)
						+ ("00000000" + (Math.floor(Math.random() * (max + 1)))
								.toString(16)).slice(-8)
			}
			function getDateFromCuid(cuid) {
				return isValidCuid(cuid) ? (new Date((parseInt(cuid
						.substr(0, 8), 16) * 1000))) : new Date()
			}
			function isCuidInFuture(cuid) {
				var d = getDateFromCuid();
				return ((d.getTime() - 1000 * 86400) > (new Date()).getTime())
			}
			function isCuidOlderThan(cuid, seconds) {
				var d = getDateFromCuid(cuid);
				return (((new Date()).getTime() - d.getTime()) > seconds * 1000)
			}
			function isValidCuid(cuid) {
				return cuid && cuid.match(/^[0-9a-f]{16}$/)
						&& !isCuidInFuture(cuid)
			}
			u.cuid = generateCuid;
			u.ivc = isValidCuid;
			u.ioc = isCuidOlderThan
		})(_ate, _ate.api, _ate);
		(function(_addthis, addthis, env) {
			function getHashParams(s, qs) {
				var q = s.indexOf("#") > -1 && !qs ? s
						.replace(/^[^\#]+\#?/, "") : s
						.replace(/^[^\?]+\??/, ""), p = _addthis.util.fromKV(q);
				return p
			}
			function getScriptParams(scriptName) {
				var ss = document.gn("script"), ss_length = ss.length, s = ss[ss_length - 1], p = getHashParams(s.src);
				if (scriptName || (s.src && s.src.indexOf("addthis") == -1)) {
					for ( var i = 0; i < ss_length; i++) {
						if ((ss[i].src || "").indexOf(scriptName
								|| "addthis.com") > -1) {
							p = getHashParams(ss[i].src);
							break
						}
					}
				}
				return p
			}
			if (!_addthis.util) {
				_addthis.util = {}
			}
			_addthis.util.gsp = getScriptParams;
			_addthis.util.ghp = getHashParams
		})(_ate, _ate.api, _ate);
		(function(_addthis, addthis, env) {
			var u = _addthis.util, keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
			function hexToBase64(input) {
				var output = "", chr1, chr2, chr3, enc1, enc2, i = 0;
				if (/[0-9a-fA-F]+/.test(input)) {
					while (i < input.length) {
						chr1 = parseInt(input.charAt(i++), 16);
						chr2 = parseInt(input.charAt(i++), 16);
						chr3 = parseInt(input.charAt(i++), 16);
						enc1 = (chr1 << 2)
								| (isNaN(chr3) ? chr2 & 3 : (chr2 >> 2));
						enc2 = ((chr2 & 3) << 4) | chr3;
						output += keyStr.charAt(enc1)
								+ (isNaN(chr3) ? "" : keyStr.charAt(enc2))
					}
				} else {
				}
				return output
			}
			function base64ToHex(input) {
				var output = "", chr1, chr2, chr3, enc1, enc2, i = 0;
				while (i < input.length) {
					enc1 = keyStr.indexOf(input.charAt(i++));
					enc2 = i >= input.length ? NaN : keyStr.indexOf(input
							.charAt(i++));
					chr1 = enc1 >> 2;
					chr2 = isNaN(enc2) ? (enc1 & 3)
							: (((enc1 & 3) << 2) | (enc2 >> 4));
					chr3 = enc2 & 15;
					output += chr1.toString(16) + chr2.toString(16)
							+ (isNaN(enc2) ? "" : chr3.toString(16))
				}
				return output
			}
			u.hbtoa = hexToBase64;
			u.atohb = base64ToHex
		})(_ate, _ate.api, _ate);
		(function(_addthis, addthis, env) {
			var a = _addthis, sttm = new Date().getTime(), ran = function() {
				return Math.floor(Math.random() * 4294967295).toString(36)
			}, off = function() {
				return Math.floor((new Date().getTime() - sttm) / 100)
						.toString(16)
			}, sid = 0, ssid = function(f) {
				if (sid === 0) {
					a.sid = sid = (f || a.util.cuid())
				}
				return sid
			}, xmtmo = null, sxm = function(b, xmi) {
				if (xmtmo !== null) {
					clearTimeout(xmtmo)
				}
				if (b) {
					xmtmo = setTimeout(function() {
						xmi(false)
					}, _ate.wait)
				}
			}, fcv = function(k, v) {
				return _euc(k) + "=" + _euc(v) + ";" + off()
			}, seq = 1, processUrlParams = function(url, f) {
				var u = (url || "").split("?"), url = u.shift(), query = (u
						.pop() || "").split("&");
				return f(url, query)
			}, mungeUrl = function(url, transforms, share, svc) {
				if (!transforms) {
					transforms = {}
				}
				if (!transforms.remove) {
					transforms.remove = []
				}
				transforms.remove.push("sms_ss");
				transforms.remove.push("at_xt");
				transforms.remove.push("fb_ref");
				transforms.remove.push("fb_source");
				if (transforms.remove) {
					url = removeUrlParams(url, transforms.remove)
				}
				if (transforms.clean) {
					url = cleanUrl(url)
				}
				if (transforms.defrag) {
					url = clearOurFragment(url)
				}
				if (transforms.add) {
					url = addUrlParams(url, transforms.add, share, svc)
				}
				return url
			}, addUrlParams = function(url, params, share, service) {
				var templatedParams = {};
				if (params) {
					for ( var k in params) {
						if (url.indexOf(k + "=") > -1) {
							continue
						}
						templatedParams[k] = templateUrlParams(params[k], url,
								share, service)
					}
					params = _ate.util.toKV(templatedParams)
				}
				return url
						+ (params.length ? ((url.indexOf("?") > -1 ? "&" : "?") + params)
								: "")
			}, templateUrlParams = function(s, url, share, service) {
				var share = share || addthis_share;
				return s.replace(/{{service}}/g, _euc(service || "")).replace(
						/{{code}}/g, _euc(service || "")).replace(/{{title}}/g,
						_euc(share.title)).replace(/{{url}}/g, _euc(url))
			}, removeUrlParams = function(url, params) {
				var remove = {}, params = params || [];
				for ( var i = 0; i < params.length; i++) {
					remove[params[i]] = 1
				}
				return processUrlParams(url, function(url, query) {
					var newQuery = [];
					if (query) {
						for ( var i in query) {
							if (typeof (query[i]) == "string") {
								var kv = (query[i] || "").split("=");
								if (kv.length != 2 && query[i]) {
									newQuery.push(query[i])
								} else {
									if (remove[kv[0]]) {
										continue
									} else {
										if (query[i]) {
											newQuery.push(query[i])
										}
									}
								}
							}
						}
						url += (newQuery.length ? ("?" + newQuery.join("&"))
								: "")
					}
					return url
				})
			}, getOurFragment = function(url) {
				var frag = url.split("#").pop().split(",").shift().split("=")
						.pop();
				if (_ate.util.ivc(frag)) {
					return url.split("#").pop().split(",")
				}
				return [ "" ]
			}, clearOurFragment = function(url) {
				var frag = getOurFragment(url).shift().split("=").pop();
				if (_ate.util.ivc(frag)) {
					return url.split("#").shift()
				} else {
					frag = url.split("#").slice(1).join("#");
					if (frag.length == 12 && frag.substr(0, 1) == "."
							&& /[a-zA-Z0-9\-_]{11}/.test(frag.substr(1))) {
						return url.split("#").shift()
					}
				}
				return url
			}, cleanUrl = function(url) {
				return processUrlParams(url, function(url, query) {
					var jidx = url.indexOf(";jsessionid"), newQuery = [];
					if (jidx > -1) {
						url = url.substr(0, jidx)
					}
					if (query) {
						for ( var i in query) {
							if (typeof (query[i]) == "string") {
								var kv = (query[i] || "").split("=");
								if (kv.length == 2) {
									if (kv[0].indexOf("utm_") === 0
											|| kv[0] == "gclid"
											|| kv[0] == "sms_ss"
											|| kv[0] == "at_xt"
											|| kv[0] == "fb_ref"
											|| kv[0] == "fb_source") {
										continue
									}
								}
								if (query[i]) {
									newQuery.push(query[i])
								}
							}
						}
						url += (newQuery.length ? ("?" + newQuery.join("&"))
								: "")
					}
					return url
				})
			}, sta = function() {
				var pub = (typeof (a.pub || "") == "function" ? a.pub() : a.pub)
						|| "unknown";
				return "AT-" + pub + "/-/" + a.ab + "/" + ssid() + "/"
						+ (seq++) + (a.uid !== null ? "/" + a.uid : "")
			};
			if (!_ate.track) {
				_ate.track = {}
			}
			_addthis.util.extend(_ate.track, {
				fcv : fcv,
				ran : ran,
				rup : removeUrlParams,
				aup : addUrlParams,
				cof : clearOurFragment,
				gof : getOurFragment,
				clu : cleanUrl,
				mgu : mungeUrl,
				ssid : ssid,
				sta : sta,
				sxm : sxm
			})
		})(_ate, _ate.api, _ate);
		(function(_addthis, addthis, env) {
			var clickPrefix = ".", clickPrefixLength = clickPrefix.length, clickTrackable = 0, trackableProducts = {
				wpp : 1,
				blg : 1
			};
			function extractOurParameters(dl, dr) {
				if (!dl) {
					dl = document.location
				}
				if (!dr) {
					dr = d.referer || d.referrer || ""
				}
				var rxi, rsi, rsiq, rsc, shareGeneration = 0, du = dl ? dl.href
						: "", hashlessUrl = (du || "").split("#").shift(), hash = (du || "")
						.split("#").pop(), qParams = _ate.util.ghp(du, 1), hParams = _ate.util
						.ghp(du);
				shareGeneration = 0, at_st = hParams.at_st,
						rsc = qParams.sms_ss, fb_ref = qParams.fb_ref,
						at_xt = qParams.at_xt, q_at_st = qParams.at_st;
				if (fb_ref) {
					var at_xt_raw = fb_ref.split("=").pop().split("_");
					if (at_xt_raw.length == 2 && _ate.util.ivc(at_xt_raw[0])) {
						at_xt = at_xt_raw.join(",");
						rsc = "facebook_like"
					}
				}
				if (!at_st) {
					if (hash.length == (11 + clickPrefixLength)
							&& (hash.substr(0, clickPrefixLength) == clickPrefix)
							&& /[a-zA-Z0-9\-_]{11}/.test(hash
									.substr(clickPrefixLength))) {
						var key = _ate.util.atohb(hash
								.substr(clickPrefixLength));
						at_st = key.substr(0, 16) + ",";
						at_st += parseInt(key.substr(16), 10)
					}
				}
				at_st = at_st && _ate.util.ivc(at_st.split(",").shift()) ? at_st
						: "";
				if (at_st) {
					shareGeneration = parseInt(at_st.split(",").pop()) + 1;
					rsi = at_st.split(",").shift()
				} else {
					if (du.indexOf(_atd + "book") == -1 && hashlessUrl != dr) {
						var cvt = [], sm;
						if (at_xt) {
							sm = at_xt.split(",");
							rxi = _duc(sm.shift());
							if (rxi.indexOf(",") > -1) {
								sm = rxi.split(",");
								rxi = sm.shift()
							}
						} else {
							if (q_at_st) {
								sm = q_at_st.split(",");
								rsiq = _duc(sm.shift());
								if (rsiq.indexOf(",") > -1) {
									sm = rsiq.split(",");
									rsiq = sm.shift()
								}
							}
						}
						if (sm && sm.length) {
							shareGeneration = Math.min(3,
									parseInt(sm.pop()) + 1)
						}
					}
				}
				if (!_ate.util.ivc(rsi)) {
					rsi = null
				}
				if (!_ate.util.ivc(rsiq)) {
					rsiq = null
				}
				return {
					rsi : rsi,
					rsiq : rsiq,
					rxi : rxi,
					rsc : rsc,
					gen : shareGeneration
				}
			}
			function clickTrackableProduct(product, config) {
				if (!config
						|| (config.data_track_clickback !== false && config.data_track_linkback !== false)) {
					if (clickTrackable) {
						return true
					}
					product = (product || window.addthis_product || "")
							.split(",");
					for ( var i = 0; i < product.length; i++) {
						if (trackableProducts[product[i].split("-").shift()]) {
							return (clickTrackable = true)
						}
					}
				}
				return false
			}
			_ate.extend(_ate.track, {
				cpf : clickPrefix,
				ctp : clickTrackableProduct,
				eop : extractOurParameters
			})
		})(_ate, _ate.api, _ate);
		(function() {
			var d = document, a = _ate, cvt = [], avt = null, qtp = [], xtp = function() {
				var p;
				while (p = qtp.pop()) {
					trk(p)
				}
			}, pcs = [], spc = null, apc = function(c) {
				c = c.split("-").shift();
				for ( var i = 0; i < pcs.length; i++) {
					if (pcs[i] == c) {
						return
					}
				}
				pcs.push(c)
			}, gat = function() {
			}, atf = null, get_atssh = function() {
				var div = d.getElementById("_atssh");
				if (!div) {
					div = d.ce("div");
					div.style.visibility = "hidden";
					div.id = "_atssh";
					a.opp(div.style);
					d.body.insertBefore(div, d.body.firstChild)
				}
				return div
			}, ctf = function(url) {
				var ifr, r = Math.floor(Math.random() * 1000), div = get_atssh();
				if (!a.bro.msi) {
					ifr = d.ce("iframe");
					ifr.id = "_atssh" + r;
					ifr.title = "AddThis utility frame"
				} else {
					if (a.bro.ie6 && !url
							&& d.location.protocol.indexOf("https") == 0) {
						url = "javascript:''"
					}
					div.innerHTML = '<iframe id="_atssh'
							+ r
							+ '" width="1" height="1" title="AddThis utility frame" name="_atssh'
							+ r + '" ' + (url ? 'src="' + url + '"' : "") + ">";
					ifr = d.getElementById("_atssh" + r)
				}
				a.opp(ifr.style);
				ifr.frameborder = ifr.style.border = 0;
				ifr.style.top = ifr.style.left = 0;
				return ifr
			}, onMenuShare = function(e) {
				var share = 300;
				if (e && e.data && e.data.service) {
					if (a.dcp >= share) {
						return
					}
					trk({
						gen : share,
						sh : e.data.service
					});
					a.dcp = share
				}
			}, onMenuPop = function(evt) {
				var t = {}, data = evt.data || {}, svc = data.svc, pco = data.pco, servicesInMenu = data.cmo, referringService = data.crs, preferredServices = data.cso;
				if (svc) {
					t.sh = svc
				}
				if (servicesInMenu) {
					t.cm = servicesInMenu
				}
				if (preferredServices) {
					t.cs = 1
				}
				if (referringService) {
					t.cr = 1
				}
				if (pco) {
					t.spc = pco
				}
				img("sh", "3", null, t)
			}, trk = function(t) {
				var dr = a.dr, rev = (a.rev || "");
				if (!t) {
					return
				}
				t.xck = _atc.xck ? 1 : 0;
				t.xxl = 1;
				t.sid = a.track.ssid();
				t.pub = a.pub();
				t.ssl = a.ssl || 0;
				t.du = a.tru(a.du || a.dl.href);
				if (a.dt) {
					t.dt = a.dt
				}
				if (a.cb) {
					t.cb = a.cb
				}
				t.lng = a.lng();
				t.ver = _atc.ver;
				if (!a.upm && a.uid) {
					t.uid = a.uid
				}
				t.pc = t.spc || pcs.join(",");
				if (dr) {
					t.dr = a.tru(dr)
				}
				if (a.dh) {
					t.dh = a.dh
				}
				if (rev) {
					t.rev = rev
				}
				if (a.xfr) {
					if (a.upm) {
						if (atf) {
							atf.contentWindow.postMessage(toKV(t), "*")
						}
					} else {
						var div = get_atssh(), base = "static/r07/sh41.html"
								+ (false ? "?t=" + new Date().getTime() : "");
						if (atf) {
							div.removeChild(div.firstChild)
						}
						atf = ctf();
						atf.src = _atr + base + "#" + toKV(t);
						div.appendChild(atf)
					}
				} else {
					qtp.push(t)
				}
			}, img = function(i, c, x, obj, close) {
				if (!window.at_sub && !_atc.xtr) {
					var t = obj || {};
					t.evt = i;
					if (x) {
						t.ext = x
					}
					avt = t;
					if (close === 1) {
						xmi(true)
					} else {
						a.track.sxm(true, xmi)
					}
				}
			}, cev = function(k, v) {
				cvt.push(a.track.fcv(k, v));
				a.track.sxm(true, xmi)
			}, xmi = function(close) {
				var h = a.dl ? a.dl.hostname : "";
				if (cvt.length > 0 || avt) {
					a.track.sxm(false, xmi);
					if (_atc.xtr) {
						return
					}
					var t = avt || {};
					t.ce = cvt.join(",");
					cvt = [];
					avt = null;
					trk(t);
					if (close) {
						var i = d.ce("iframe");
						i.id = "_atf";
						_ate.opp(i.style);
						d.body.appendChild(i);
						i = d.getElementById("_atf")
					}
				}
			};
			a.ed.addEventListener("addthis-internal.compact", onMenuPop);
			a.ed.addEventListener("addthis.menu.share", onMenuShare);
			if (!a.track) {
				a.track = {}
			}
			a.util.extend(a.track, {
				pcs : pcs,
				apc : apc,
				cev : cev,
				ctf : ctf,
				gtf : get_atssh,
				qtp : function(p) {
					qtp.push(p)
				},
				stf : function(f) {
					atf = f
				},
				trk : trk,
				xtp : xtp
			})
		})();
		extend(_ate, {
			_rec : [],
			xfr : !_ate.upm || !_ate.bro.ffx,
			pmh : function(e) {
				if (e.origin.slice(-12) == ".addthis.com") {
					if (!e.data) {
						return
					}
					var data = fromKV(e.data), r = _ate._rec;
					for ( var n = 0; n < r.length; n++) {
						r[n](data)
					}
				}
			}
		});
		extend(_ate, {
			lng : function() {
				return window.addthis_language
						|| (window.addthis_config || {}).ui_language
						|| (_ate.bro.msi ? navigator.userLanguage
								: navigator.language) || "en"
			},
			iwb : function(l) {
				var wd = {
					th : 1,
					pl : 1,
					sl : 1,
					gl : 1,
					hu : 1,
					is : 1,
					nb : 1,
					se : 1,
					su : 1,
					sw : 1
				};
				return !!wd[l]
			},
			ivl : function(l) {
				var lg = {
					af : 1,
					afr : "af",
					ar : 1,
					ara : "ar",
					az : 1,
					aze : "az",
					be : 1,
					bye : "be",
					bg : 1,
					bul : "bg",
					bn : 1,
					ben : "bn",
					bs : 1,
					bos : "bs",
					ca : 1,
					cat : "ca",
					cs : 1,
					ces : "cs",
					cze : "cs",
					cy : 1,
					cym : "cy",
					da : 1,
					dan : "da",
					de : 1,
					deu : "de",
					ger : "de",
					el : 1,
					gre : "el",
					ell : "ell",
					en : 1,
					eo : 1,
					es : 1,
					esl : "es",
					spa : "spa",
					et : 1,
					est : "et",
					eu : 1,
					fa : 1,
					fas : "fa",
					per : "fa",
					fi : 1,
					fin : "fi",
					fo : 1,
					fao : "fo",
					fr : 1,
					fra : "fr",
					fre : "fr",
					ga : 1,
					gae : "ga",
					gdh : "ga",
					gl : 1,
					glg : "gl",
					gu : 1,
					he : 1,
					heb : "he",
					hi : 1,
					hin : "hin",
					hr : 1,
					ht : 1,
					cro : "hr",
					hu : 1,
					hun : "hu",
					id : 1,
					ind : "id",
					is : 1,
					ice : "is",
					it : 1,
					ita : "it",
					ja : 1,
					jpn : "ja",
					ko : 1,
					kor : "ko",
					ku : 1,
					lb : 1,
					ltz : "lb",
					lt : 1,
					lit : "lt",
					lv : 1,
					lav : "lv",
					mk : 1,
					mac : "mk",
					mak : "mk",
					ml : 1,
					mn : 1,
					ms : 1,
					msa : "ms",
					may : "ms",
					nb : 1,
					nl : 1,
					nla : "nl",
					dut : "nl",
					no : 1,
					nds : 1,
					nn : 1,
					nno : "no",
					oc : 1,
					oci : "oc",
					pl : 1,
					pol : "pl",
					ps : 1,
					pt : 1,
					por : "pt",
					ro : 1,
					ron : "ro",
					rum : "ro",
					ru : 1,
					rus : "ru",
					sk : 1,
					slk : "sk",
					slo : "sk",
					sl : 1,
					slv : "sl",
					sq : 1,
					alb : "sq",
					sr : 1,
					se : 1,
					si : 1,
					ser : "sr",
					su : 1,
					sv : 1,
					sve : "sv",
					sw : 1,
					swe : "sv",
					ta : 1,
					tam : "ta",
					te : 1,
					teg : "te",
					th : 1,
					tha : "th",
					tl : 1,
					tgl : "tl",
					tn : 1,
					tr : 1,
					tur : "tr",
					tt : 1,
					uk : 1,
					ukr : "uk",
					ur : 1,
					urd : "ur",
					vi : 1,
					vec : 1,
					vie : "vi",
					"zh-hk" : 1,
					"chi-hk" : "zh-hk",
					"zho-hk" : "zh-hk",
					"zh-tr" : 1,
					"chi-tr" : "zh-tr",
					"zho-tr" : "zh-tr",
					"zh-tw" : 1,
					"chi-tw" : "zh-tw",
					"zho-tw" : "zh-tw",
					zh : 1,
					chi : "zh",
					zho : "zh"
				};
				if (lg[l]) {
					return lg[l]
				}
				l = l.split("-").shift();
				if (lg[l]) {
					if (lg[l] === 1) {
						return l
					} else {
						return lg[l]
					}
				}
				return 0
			},
			gvl : function(l) {
				var rv = _ate.ivl(l) || "en";
				if (rv === 1) {
					rv = l
				}
				return rv
			},
			alg : function(al, f) {
				var l = _ate.gvl((al || _ate.lng()).toLowerCase());
				if (l.indexOf("en") !== 0 && (!_ate.pll || f)) {
					_ate.pll = _ate.ajs("static/r07/lang09/" + l + ".js")
				}
			}
		});
		extend(
				_ate,
				{
					trim : function(s, e) {
						try {
							s = s.replace(/^[\s\u3000]+|[\s\u3000]+$/g, "");
							if (e) {
								s = _euc(s)
							}
						} catch (e) {
						}
						return s || ""
					},
					trl : [],
					tru : function(u, k) {
						var rv = "", found = 0, lastEncoding = -1;
						if (u) {
							rv = u.substr(0, 300);
							if (rv !== u) {
								if ((lastEncoding = rv.lastIndexOf("%")) >= rv.length - 4) {
									rv = rv.substr(0, lastEncoding)
								}
								if (rv != u) {
									for ( var i in _ate.trl) {
										if (_ate.trl[i] == k) {
											found = 1
										}
									}
									if (!found) {
										_ate.trl.push(k)
									}
								}
							}
						}
						return rv
					},
					opp : function(st) {
						st.width = st.height = "1px";
						st.position = "absolute";
						st.zIndex = 100000
					},
					jlr : {},
					ajs : function(name, fullUrl) {
						if (!_ate.jlr[name]) {
							var o = d.ce("script"), head = d.gn("head")[0]
									|| d.documentElement;
							o.src = (fullUrl ? "" : _atr) + name;
							head.insertBefore(o, head.firstChild);
							_ate.jlr[name] = 1;
							return o
						}
						return 1
					},
					jlo : function() {
						try {
							var a = _ate, al = a.lng(), aig = function(src) {
								var img = new Image();
								_ate.imgz.push(img);
								img.src = src
							};
							a.alg(al);
							if (!a.pld) {
								if (a.bro.ie6) {
									aig(_atr + a.spt);
									aig(_atr + "static/t00/logo1414.gif");
									aig(_atr + "static/t00/logo88.gif");
									if (window.addthis_feed) {
										aig("static/r05/feed00.gif", 1)
									}
								}
								if (a.pll && !window.addthis_translations) {
									setTimeout(function() {
										a.pld = a.ajs("static/r07/menu74.js")
									}, 10)
								} else {
									a.pld = a.ajs("static/r07/menu74.js")
								}
							}
						} catch (e) {
						}
					},
					ao : function(elt, pane, iurl, ititle, iconf, ishare) {
						_ate.lad([ "open", elt, pane, iurl, ititle, iconf,
								ishare ]);
						_ate.jlo();
						return false
					},
					ac : function() {
					},
					as : function(s, cf, sh) {
						_ate.lad([ "send", s, cf, sh ]);
						_ate.jlo()
					}
				});
		(function(_addthis, addthis, env) {
			var d = document, c_porn = 1, k_porn = [ "cbea", "kkk", "zvys",
					"phz" ], i = k_porn.length, porn_hash = {};
			function rot(s) {
				return s.replace(/[a-zA-Z]/g, function(c) {
					return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c
							.charCodeAt(0) + 13) ? c : c - 26)
				})
			}
			while (i--) {
				porn_hash[rot(k_porn[i])] = 1
			}
			function classifyString(s) {
				var c = 0;
				s = (s || "").toLowerCase() + "";
				if (!s) {
					return c
				}
				s = s.replace(/[^a-zA-Z]/g, " ").split(" ");
				for ( var i = 0, s_max = s.length; i < s_max; i++) {
					if (porn_hash[s[i]]) {
						c |= c_porn;
						return c
					}
				}
				return c
			}
			function classify() {
				var title = (w.addthis_title || d.title), bitmask = classifyString(title), metaElements = d.all ? d.all
						.tags("META")
						: d.getElementsByTagName ? d
								.getElementsByTagName("META") : new Array(), j = (metaElements || "").length;
				if (metaElements && j) {
					while (j--) {
						var m = metaElements[j] || {}, n = (m.name || "")
								.toLowerCase(), c = m.content;
						if (n == "description" || n == "keywords") {
							bitmask |= classifyString(c)
						}
					}
				}
				return bitmask
			}
			if (!_addthis.ad) {
				_addthis.ad = {}
			}
			_ate.extend(_addthis.ad, {
				cla : classify
			})
		})(_ate, _ate.api, _ate);
		(function(_addthis, addthis, env) {
			var undefined, d = document, u = _addthis.util, EventDispatcher = _addthis.event.EventDispatcher, SLEEP_MS = 25, loading = [];
			function ApiQueueFactory(name, fn, cxt) {
				var queue = [];
				function queue() {
					queue.push(arguments)
				}
				function ready() {
					cxt[name] = fn;
					while (queue.length) {
						fn.apply(cxt, queue.shift())
					}
				}
				queue.ready = ready;
				return queue
			}
			function monitor(newRes) {
				if (newRes && newRes instanceof Resource) {
					loading.push(newRes)
				}
				for ( var i = 0; i < loading.length;) {
					var resource = loading[i];
					if (resource && resource.test()) {
						loading.splice(i, 1);
						Resource.fire("load", resource, {
							resource : resource
						})
					} else {
						i++
					}
				}
				if (loading.length) {
					setTimeout(monitor, SLEEP_MS)
				}
			}
			function Resource(id, url, test) {
				var self = this, hub = new EventDispatcher(self);
				hub.decorate(hub).decorate(self);
				this.ready = false;
				this.loading = false;
				this.id = id;
				this.url = url;
				if (typeof (test) === "function") {
					this.test = test
				} else {
					this.test = function() {
						return (!!_window[test])
					}
				}
				Resource.addEventListener("load", function(evt) {
					var r = evt.resource;
					if (!r || r.id !== self.id) {
						return
					}
					self.loading = false;
					self.ready = true;
					hub.fire(evt.type, r, {
						resource : r
					})
				})
			}
			u.extend(Resource.prototype, {
				load : function() {
					if (!this.loading) {
						var l;
						if (this.url.substr(this.url.length - 4) == ".css") {
							var head = (d.gn("head")[0] || d.documentElement);
							l = d.ce("link");
							l.rel = "stylesheet";
							l.type = "text/css";
							l.href = this.url;
							l.media = "all";
							head.insertBefore(l, head.firstChild)
						} else {
							l = _ate.ajs(this.url, 1)
						}
						this.loading = true;
						Resource.monitor(this);
						return l
					} else {
						return 1
					}
				}
			});
			var staticHub = new EventDispatcher(Resource);
			staticHub.decorate(staticHub).decorate(Resource);
			u.extend(Resource, {
				known : {},
				loading : loading,
				monitor : monitor
			});
			_addthis.resource = {
				Resource : Resource,
				ApiQueueFactory : ApiQueueFactory
			}
		})(_ate, _ate.api, _ate);
		(function(_addthis, addthis, env) {
			var d = document, a = _addthis, scrapeLinks = function() {
				var links = d.gn("link"), rv = {};
				for ( var i = 0; i < links.length; i++) {
					var l = links[i];
					if (l.href && l.rel) {
						rv[l.rel] = l.href
					}
				}
				return rv
			}, links = scrapeLinks(), svcurl = function() {
				var p = d.location.protocol;
				if (p == "file:") {
					p = "http:"
				}
				return p + "//" + _atd
			}, srd = function() {
				if (a.dr) {
					return "&pre=" + _euc(a.track.cof(a.dr))
				} else {
					return ""
				}
			}, genurl = function(svc, feed, share, config) {
				return svcurl()
						+ (feed ? "feed.php" : (svc == "email"
								&& _atc.ver >= 300 ? "tellfriend.php"
								: "bookmark.php")) + "?v=" + (_atc.ver)
						+ "&winname=addthis&" + uadd(svc, feed, share, config)
						+ srd() + "&tt=0"
						+ (svc === "more" && a.bro.ipa ? "&imore=1" : "")
			}, uadd = function(svc, feed, share, config) {
				var t = a.trim, d = window, pub = a.pub(), w = window._atw
						|| {}, u = (share && share.url ? share.url : (w.share
						&& w.share.url ? w.share.url
						: (d.addthis_url || d.location.href))), acs, hc = function(
						s) {
					if (u && u != "") {
						var i = u.indexOf("#at" + s);
						if (i > -1) {
							u = u.substr(0, i)
						}
					}
				};
				if (!config) {
					config = w.conf || {}
				} else {
					for ( var k in w.conf) {
						if (!(config[k])) {
							config[k] = w.conf[k]
						}
					}
				}
				if (!share) {
					share = w.share || {}
				} else {
					for ( var k in w.share) {
						if (!(share[k])) {
							share[k] = w.share[k]
						}
					}
				}
				if (a.rsu()) {
					share.url = window.addthis_url;
					share.title = window.addthis_title;
					u = share.url
				}
				if (!pub || pub == "undefined") {
					pub = "unknown"
				}
				acs = config.services_custom;
				hc("pro");
				hc("opp");
				hc("cle");
				hc("clb");
				hc("abc");
				if (u.indexOf("addthis.com/static/r07/ab") > -1) {
					u = u.split("&");
					for ( var i = 0; i < u.length; i++) {
						var p = u[i].split("=");
						if (p.length == 2) {
							if (p[0] == "url") {
								u = p[1];
								break
							}
						}
					}
				}
				if (acs instanceof Array) {
					for ( var i = 0; i < acs.length; i++) {
						if (acs[i].code == svc) {
							acs = acs[i];
							break
						}
					}
				}
				var tmp = ((share.templates && share.templates[svc]) ? share.templates[svc]
						: ""), module = ((share.modules && share.modules[svc]) ? share.modules[svc]
						: ""), url_transforms = share.share_url_transforms
						|| share.url_transforms || {}, track_url_transforms = share.track_url_transforms
						|| share.url_transforms, shortener = ((url_transforms
						&& url_transforms.shorten && share.shorteners) ? (typeof (url_transforms.shorten) == "string" ? url_transforms.shorten
						: (url_transforms.shorten[svc]
								|| url_transforms.shorten["default"] || ""))
						: ""), shorteners = "", prc = (config.product
						|| d.addthis_product || ("men-" + _atc.ver)), crs = w.crs, email_vars = "", trackingFragment = a.track
						.gof(u), rsi = trackingFragment.length == 2 ? trackingFragment
						.shift().split("=").pop()
						: "", gen = trackingFragment.length == 2 ? trackingFragment
						.pop()
						: "";
				if (share.email_vars) {
					for ( var k in share.email_vars) {
						email_vars += (email_vars == "" ? "" : "&") + _euc(k)
								+ "=" + _euc(share.email_vars[k])
					}
				}
				if (a.track.spc && prc.indexOf(a.track.spc) == -1) {
					prc += "," + a.track.spc
				}
				if (url_transforms && url_transforms.shorten
						&& share.shorteners) {
					for ( var k in share.shorteners) {
						for ( var kk in share.shorteners[k]) {
							shorteners += (shorteners.length ? "&" : "")
									+ _euc(k + "." + kk) + "="
									+ _euc(share.shorteners[k][kk])
						}
					}
				}
				u = a.track.cof(u);
				u = a.track.mgu(u, url_transforms, share, svc);
				if (track_url_transforms) {
					share.trackurl = a.track.mgu(share.trackurl || u,
							track_url_transforms, share, svc)
				}
				var rv = "pub="
						+ pub
						+ "&source="
						+ prc
						+ "&lng="
						+ (a.lng() || "xx")
						+ "&s="
						+ svc
						+ (config.ui_508_compliant ? "&u508=1" : "")
						+ (feed ? "&h1="
								+ t((share.feed || share.url).replace(
										"feed://", ""), 1) + "&t1=" : "&url="
								+ t(u, 1) + "&title=")
						+ t(share.title || d.addthis_title, 1)
						+ (_atc.ver < 200 ? "&logo=" + t(d.addthis_logo, 1)
								+ "&logobg=" + t(d.addthis_logo_background, 1)
								+ "&logocolor=" + t(d.addthis_logo_color, 1)
								: "")
						+ "&ate="
						+ a.track.sta()
						+ ((window.addthis_ssh && (!crs || addthis_ssh != crs) && (addthis_ssh == svc || addthis_ssh
								.search(new RegExp("(?:^|,)(" + svc
										+ ")(?:$|,)")) > -1)) ? "&ips=1" : "")
						+ (crs ? "&cr=" + (svc == crs ? 1 : 0) : "")
						+ "&uid="
						+ _euc(a.uid && a.uid != "x" ? a.uid : a.util.cuid())
						+ (share.email_template ? "&email_template="
								+ _euc(share.email_template) : "")
						+ (email_vars ? "&email_vars=" + _euc(email_vars) : "")
						+ (shortener ? "&shortener="
								+ _euc(typeof (shortener) == "array" ? shortener
										.join(",")
										: shortener)
								: "")
						+ (shortener && shorteners ? "&" + shorteners : "")
						+ ((share.passthrough || {})[svc] ? "&passthrough="
								+ t(
										(typeof (share.passthrough[svc]) == "object" ? a.util
												.toKV(share.passthrough[svc])
												: share.passthrough[svc]), 1)
								: "")
						+ (share.description ? "&description="
								+ t(share.description, 1) : "")
						+ (share.html ? "&html=" + t(share.html, 1)
								: (share.content ? "&html="
										+ t(share.content, 1) : ""))
						+ (share.trackurl && share.trackurl != u ? "&trackurl="
								+ t(share.trackurl, 1) : "")
						+ (share.screenshot ? "&screenshot="
								+ t(share.screenshot, 1) : "")
						+ (share.swfurl ? "&swfurl=" + t(share.swfurl, 1) : "")
						+ (a.cb ? "&cb=" + a.cb : "")
						+ (a.ufbl ? "&ufbl=1" : "")
						+ (share.iframeurl ? "&iframeurl="
								+ t(share.iframeurl, 1) : "")
						+ (share.width ? "&width=" + share.width : "")
						+ (share.height ? "&height=" + share.height : "")
						+ (config.data_track_p32 ? "&p32="
								+ config.data_track_p32 : "")
						+ (config.data_track_clickback
								|| config.data_track_linkback || !pub
								|| pub == "AddThis"
								|| _ate.track.ctp(config.product, config) ? "&sms_ss=1&at_xt=1"
								: "")
						+ ((acs && acs.url) ? "&acn=" + _euc(acs.name)
								+ "&acc=" + _euc(acs.code) + "&acu="
								+ _euc(acs.url) : "")
						+ (a.smd ? (a.smd.rxi ? "&rxi=" + a.smd.rxi : "")
								+ (a.smd.rsi ? "&rsi=" + a.smd.rsi : "")
								+ (a.smd.gen ? "&gen=" + a.smd.gen : "")
								: ((rsi ? "&rsi=" + rsi : "") + (gen ? "&gen="
										+ gen : "")))
						+ (share.xid ? "&xid=" + t(share.xid, 1) : "")
						+ (tmp ? "&template=" + t(tmp, 1) : "")
						+ (module ? "&module=" + t(module, 1) : "")
						+ (config.ui_cobrand ? "&ui_cobrand="
								+ t(config.ui_cobrand, 1) : "")
						+ (config.ui_header_color ? "&ui_header_color="
								+ t(config.ui_header_color, 1) : "")
						+ (config.ui_header_background ? "&ui_header_background="
								+ t(config.ui_header_background, 1)
								: "");
				return rv
			}, generateClickbackPair = function(share, config) {
				var xid = share.xid || a.util.cuid();
				if (config.data_track_clickback || config.data_track_linkback
						|| _ate.track.ctp(config.product, config)) {
					return "at_xt=" + xid + "," + ((a.smd || {}).gen || 0)
				} else {
					return ""
				}
			}, appendClickback = function(service, share, config, urlOverride,
					track, fromButton) {
				var pub = a.pub(), url = urlOverride || share.url || "", xid = share.xid
						|| a.util.cuid();
				if (url.toLowerCase().indexOf("http%3a%2f%2f") === 0) {
					url = _duc(url)
				}
				if (track) {
					var shareClone = {};
					for ( var k in share) {
						shareClone[k] = share[k]
					}
					shareClone.xid = xid;
					setTimeout(function() {
						(new Image()).src = genurl(service == "twitter"
								&& fromButton ? "tweet" : service, 0,
								shareClone, config)
					}, 100)
				}
				return url
						+ (config.data_track_clickback
								|| config.data_track_linkback || !pub
								|| pub == "AddThis" ? ((url.indexOf("?") > -1) ? "&"
								: "?")
								+ ("sms_ss=" + service)
								+ ("&at_xt=" + xid + "," + ((a.smd || {}).gen || 0))
								: "")
			}, genieu = function(share, config, track) {
				var config = config || {}, url_transforms = share.share_url_transforms
						|| share.url_transforms || {}, url = a.track
						.cof(a.track.mgu(share.url, url_transforms, share,
								"mailto"));
				return "mailto:?subject="
						+ _euc(share.title ? share.title : url)
						+ "&body="
						+ _euc(appendClickback("mailto", share, config, url,
								track))
			}, useNewTwitterEndpoint = function(share) {
				return ((!share.templates || !share.templates.twitter) && (!a.wlp || a.wlp == "http:"))
			}, openCenteredWindow = function(url, width, height, name) {
				var neww = width || 550, newh = height || 450, screenw = screen.width, screenh = screen.height, xoffset = Math
						.round((screenw / 2) - (neww / 2)), yoffset = 0, i;
				if (screenh > newh) {
					xoffset = Math.round((screenh / 2) - (newh / 2))
				}
				w
						.open(
								url,
								name || "addthis_share",
								"left="
										+ xoffset
										+ ",top="
										+ yoffset
										+ ",width="
										+ neww
										+ ",height="
										+ newh
										+ ",personalbar=no,toolbar=no,scrollbars=yes,location=yes,resizable=yes");
				return false
			}, alwaysUseWindow = function(svc) {
				var windowed = {
					wordpress : 1,
					vk : 1
				};
				return windowed[svc]
			}, shareToWindow = function(svc, share, config, width, height, name) {
				var svcMap = {
					wordpress : {
						width : 720,
						height : 570
					},
					linkedin : {
						width : 600,
						height : 400
					},
					vk : {
						width : 720,
						height : 290
					},
					"default" : {
						width : 550,
						height : 450
					}
				}, url = genurl(svc, 0, share, config);
				if (config.ui_use_same_window) {
					window.location.href = url
				} else {
					openCenteredWindow(url, width
							|| (svcMap[svc] || svcMap["default"]).width, height
							|| (svcMap[svc] || svcMap["default"]).height, name)
				}
				return false
			}, performTwitterShare = function(share, config, fromButton,
					sameWindow) {
				var passthrough = "", url_transforms = share.share_url_transforms
						|| share.url_transforms || {}, storedTitle, url = a.track
						.cof(a.track.mgu(share.url, url_transforms, share,
								"twitter"));
				if ((share.passthrough || {}).twitter) {
					if (share.passthrough.twitter.text) {
						storedTitle = share.title;
						share.title = share.passthrough.twitter.text
					}
					passthrough = a.util.toKV(share.passthrough.twitter)
				}
				if (passthrough.indexOf("text=") == -1) {
					passthrough = "text=" + _euc(share.title) + "&"
							+ passthrough
				}
				if (passthrough.indexOf("via=") == -1) {
					passthrough = "via=AddThis&" + passthrough
				}
				url = "http://twitter.com/share?url="
						+ _euc(appendClickback("twitter", share, config, url,
								1, fromButton)) + "&" + passthrough;
				if (storedTitle) {
					share.title = storedTitle
				}
				if (config.ui_use_same_window || sameWindow) {
					window.location.href = url
				} else {
					openCenteredWindow(url, 550, 450, "twitter_tweet")
				}
				return false
			}, loads = [], track = function(svc, feed, share, config) {
				var url = genurl(svc, feed, share, config);
				loads.push(a.ajs(url, 1))
			}, geneurl = function(share, email, config) {
				return svcurl()
						+ "tellfriend.php?&fromname=aaa&fromemail="
						+ _euc(email.from)
						+ "&frommenu=1&tofriend="
						+ _euc(email.to)
						+ (share.email_template ? "&template="
								+ _euc(share.email_template) : "")
						+ (email.vars ? "&vars=" + _euc(email.vars) : "")
						+ "&lng=" + (a.lng() || "xx") + "&note="
						+ _euc(email.note) + "&"
						+ uadd("email", null, null, config)
			};
			_addthis.share = {
				auw : alwaysUseWindow,
				ocw : openCenteredWindow,
				stw : shareToWindow,
				pts : performTwitterShare,
				unt : useNewTwitterEndpoint,
				uadd : uadd,
				genurl : genurl,
				geneurl : geneurl,
				genieu : genieu,
				acb : appendClickback,
				gcp : generateClickbackPair,
				svcurl : svcurl,
				track : track,
				links : links
			}
		})(_ate, _ate.api, _ate);
		var w = window, ac = w.addthis_config || {}, css = new _ate.resource.Resource(
				"widgetcss", _atr + "static/r07/widget58.css", function() {
					return true
				}), css32 = new _ate.resource.Resource("widget32css", _atr
				+ "static/r07/widgetbig58.css", function() {
			return true
		});
		function main() {
			try {
				if (_atc.xol && !_atc.xcs && ac.ui_use_css !== false) {
					css.load();
					if (_ate.bro.ipa) {
						css32.load()
					}
				}
				var a = _ate, msi = a.bro.msi, hp = 0, addthis_config = window.addthis_config
						|| {}, dt = d.title, dr = (typeof (a.rdr) !== "undefined") ? a.rdr
						: (d.referer || d.referrer || ""), du = dl ? dl.href
						: null, dh = dl.hostname, canonicalUrl = du, clickback = 0, al = (_ate
						.lng().split("-")).shift(), ourParams = _ate.track.eop(
						dl, dr), cvt = [], rsiq = ourParams.rsiq, rsi = ourParams.rsi, rxi = ourParams.rxi, rsc = ourParams.rsc, gen = ourParams.gen, ifr, ifrsrc = _atr
						+ "static/r07/sh41.html#", data, updatePc = function() {
					if (!_ate.track.pcs.length) {
						_ate.track.apc(window.addthis_product
								|| ("men-" + _atc.ver))
					}
					data.pc = _ate.track.pcs.join(",")
				};
				if (window.addthis_product) {
					_ate.track.apc(addthis_product);
					if (addthis_product.indexOf("fxe") == -1
							&& addthis_product.indexOf("bkm") == -1) {
						_ate.track.spc = addthis_product
					}
				}
				var l = _ate.share.links.canonical;
				if (l) {
					if (l.indexOf("http") !== 0) {
						canonicalUrl = (du || "").split("//").pop().split("/");
						if (l.indexOf("/") === 0) {
							canonicalUrl = canonicalUrl.shift() + l
						} else {
							canonicalUrl.pop();
							canonicalUrl = canonicalUrl.join("/") + "/" + l
						}
						canonicalUrl = dl.protocol + "//" + canonicalUrl
					} else {
						canonicalUrl = l
					}
					_ate.usu(0, 1)
				}
				canonicalUrl = canonicalUrl.split("#{").shift();
				a.igv(canonicalUrl, d.title || "");
				var transforms = addthis_share.view_url_transforms
						|| addthis_share.track_url_transforms
						|| addthis_share.url_transforms;
				if (transforms) {
					canonicalUrl = _ate.track.mgu(canonicalUrl, transforms)
				}
				a.smd = {
					rsi : rsi,
					rxi : rxi,
					gen : gen,
					rsc : rsc
				};
				a.dr = a.tru(dr, "fr");
				a.du = a.tru(canonicalUrl, "fp");
				a.dt = dt = w.addthis_share.title;
				a.cb = a.ad.cla();
				a.dh = dl.hostname;
				a.ssl = du && du.indexOf("https") === 0 ? 1 : 0;
				data = {
					cb : a.cb,
					ab : a.ab,
					dh : a.dh,
					dr : a.dr,
					du : a.du,
					dt : dt,
					inst : a.inst,
					lng : a.lng(),
					pc : w.addthis_product || "men",
					pub : a.pub(),
					ssl : a.ssl,
					sid : _ate.track.ssid(),
					srd : _atc.damp,
					srf : _atc.famp,
					srp : _atc.pamp,
					srx : _atc.xamp,
					ver : _atc.ver,
					xck : _atc.xck || 0
				};
				if (a.trl.length) {
					data.trl = a.trl.join(",")
				}
				if (a.rev) {
					data.rev = a.rev
				}
				if (addthis_config.data_track_clickback
						|| addthis_config.data_track_linkback
						|| _ate.track.ctp(data.pc, addthis_config)) {
					data.ct = a.ct = 1
				}
				if (a.prv) {
					data.prv = toKV(a.prv)
				}
				if (rsc) {
					data.sr = rsc
				}
				if (a.vamp >= 0 && !a.sub) {
					if (rsi && a.util.ioc(rsi, 5) && !a.util.ioc(rsi, 2592000)) {
						cvt.push(a.track.fcv("plv", Math.round(1 / _atc.vamp)));
						cvt.push(a.track.fcv("rsi", rsi));
						cvt.push(a.track.fcv("gen", gen));
						cvt.push(a.track.fcv("abc", 1));
						data.ce = cvt.join(",");
						clickback = "addressbar"
					} else {
						if (rxi || rsiq || rsc) {
							cvt.push(a.track.fcv("plv", Math
									.round(1 / _atc.vamp)));
							if (rsc) {
								cvt.push(a.track.fcv("rsc", rsc))
							}
							if (rxi) {
								cvt.push(a.track.fcv("rxi", rxi))
							} else {
								if (rsiq) {
									cvt.push(a.track.fcv("rsi", rsiq))
								}
							}
							if (rsiq || rxi) {
								cvt.push(a.track.fcv("gen", gen))
							}
							data.ce = cvt.join(",");
							clickback = rsc || "unknown"
						}
					}
				}
				if (clickback && a.bamp >= 0) {
					data.clk = 1;
					a.dcp = data.gen = 50;
					_ate.ed.fire("addthis.user.clickback",
							window.addthis || {}, {
								service : clickback
							})
				}
				if (a.upm) {
					data.xd = 1;
					if (_ate.bro.ffx) {
						data.xld = 1
					}
				}
				if (window.history
						&& typeof (history.replaceState) == "function"
						&& !_ate.bro.chr
						&& (addthis_config.data_track_addressbar || addthis_config.data_track_addressbar_paths)
						&& ((du || "").split("#").shift() != dr)
						&& (du.indexOf("#") == -1 || rsi)) {
					var path = dl.pathname || "", regex, matched = path != "/";
					if (addthis_config.data_track_addressbar_paths) {
						matched = 0;
						for ( var i = 0; i < addthis_config.data_track_addressbar_paths.length; i++) {
							regex = new RegExp(
									addthis_config.data_track_addressbar_paths[i]
											.replace(/\*/g, ".*")
											+ "$");
							if (regex.test(path)) {
								matched = 1;
								break
							}
						}
					}
					if (matched && (!rsi || a.util.ioc(rsi, 5))) {
						history.replaceState({
							d : (new Date()),
							g : gen
						}, d.title, dl.href.split("#").shift()
								+ "#"
								+ _ate.track.cpf
								+ _ate.util.hbtoa(_ate.track.ssid()
										+ Math.min(3, gen)))
					}
				}
				if (dl.href.indexOf(_atr) == -1 && !a.sub) {
					if (a.upm) {
						if (msi) {
							setTimeout(function() {
								updatePc();
								ifr = a.track.ctf(ifrsrc + toKV(data));
								a.track.stf(ifr)
							}, _ate.wait);
							w.attachEvent("onmessage", a.pmh)
						} else {
							ifr = a.track.ctf();
							w.addEventListener("message", a.pmh, false)
						}
						if (_ate.bro.ffx) {
							ifr.src = ifrsrc;
							_ate.track.qtp(data)
						} else {
							if (!msi) {
								setTimeout(function() {
									updatePc();
									ifr.src = ifrsrc + toKV(data)
								}, _ate.wait)
							}
						}
					} else {
						ifr = a.track.ctf();
						setTimeout(function() {
							updatePc();
							ifr.src = ifrsrc + toKV(data)
						}, _ate.wait)
					}
					if (ifr) {
						ifr = a.track.gtf().appendChild(ifr);
						a.track.stf(ifr)
					}
				}
				if (w.addthis_language || ac.ui_language) {
					a.alg()
				}
				if (a.plo.length > 0) {
					a.jlo()
				}
			} catch (e) {
				window.console && console.log("lod", e)
			}
		}
		w._ate = a;
		w._adr = r;
		a._rec.push(function(data) {
			if (data.sshs) {
				var s = window.addthis_ssh = _duc(data.sshs);
				a.gssh = 1;
				a._ssh = s.split(",")
			}
			if (data.uss) {
				var u = a._uss = _duc(data.uss).split(",");
				if (window.addthis_ssh) {
					var seen = {}, u = u.concat(a._ssh), new_u = [];
					for ( var i = 0; i < u.length; i++) {
						var s = u[i];
						if (!seen[s]) {
							new_u.push(s)
						}
						seen[s] = 1
					}
					u = new_u
				}
				a._ssh = u;
				window.addthis_ssh = u.join(",")
			}
			if (data.ups) {
				var s = data.ups.split(",");
				a.ups = {};
				for ( var i = 0; i < s.length; i++) {
					if (s[i]) {
						var o = fromKV(_duc(s[i]));
						a.ups[o.name] = o
					}
				}
				a._ups = a.ups
			}
			if (data.uid) {
				a.uid = data.uid
			}
			if (data.dbm) {
				a.dbm = data.dbm
			}
			if (data.rdy) {
				a.xfr = 1;
				a.track.xtp();
				return
			}
		});
		try {
			var serviceConfiguration = {}, params = _ate.util
					.gsp("addthis_widget.js");
			if (typeof (params) == "object") {
				if (params.provider) {
					serviceConfiguration = {
						provider : _ate.mun(params.provider_code
								|| params.provider),
						auth : params.auth || params.provider_auth || ""
					};
					if (params.uid || params.provider_uid) {
						serviceConfiguration.uid = _ate.mun(params.uid
								|| params.provider_uid)
					}
					if (params.logout) {
						serviceConfiguration.logout = 1
					}
					_ate.prv = serviceConfiguration
				}
				if (params.pubid || params.pub || params.username) {
					w.addthis_pub = _duc(params.pubid || params.pub
							|| params.username)
				}
				if (w.addthis_pub && w.addthis_config) {
					w.addthis_config.username = w.addthis_pub
				}
				if (params.domready) {
					_atc.dr = 1
				}
				if (params.onready && params.onready.match(/[a-zA-Z0-9_\.\$]+/)) {
					try {
						_ate.onr = _ate.evl(params.onready)
					} catch (e) {
						window.console
								&& console.log("addthis: onready function ("
										+ params.onready + ") not defined", e)
					}
				}
				if (params.async) {
					_atc.xol = 1
				}
			}
			if ((window.addthis_conf || {}).xol) {
				_atc.xol = 1
			}
			if (_atc.ver === 120) {
				var rc = "atb" + _ate.util.cuid();
				d.write('<span id="' + rc + '"></span>');
				_ate.igv();
				_ate.lad([ "span", rc, addthis_share.url || "[url]",
						addthis_share.title || "[title]" ])
			}
			if (w.addthis_clickout) {
				_ate.lad([ "cout" ])
			}
			if (!_atc.xol && !_atc.xcs && ac.ui_use_css !== false) {
				css.load();
				if (_ate.bro.ipa) {
					css32.load()
				}
			}
		} catch (e) {
			if (window.console) {
				console.log("main", e)
			}
		}
		_adr.bindReady();
		_adr.append(main)
	})();
	function addthis_open() {
		if (typeof iconf == "string") {
			iconf = null
		}
		return _ate.ao.apply(_ate, arguments)
	}
	function addthis_close() {
		_ate.ac()
	}
	function addthis_sendto() {
		_ate.as.apply(_ate, arguments);
		return false
	}
	if (_atc.dr) {
		_adr.onReady()
	}
} else {
	_ate.inst++
}
if (_atc.abf) {
	addthis_open(document.getElementById("ab"), "emailab", window.addthis_url
			|| "[URL]", window.addthis_title || "[TITLE]")
};