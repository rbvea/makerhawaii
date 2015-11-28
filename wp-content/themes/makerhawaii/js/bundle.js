/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(3);

	var _vue2 = _interopRequireDefault(_vue);

	var _map = __webpack_require__(5);

	var _map2 = _interopRequireDefault(_map);

	var _spaces = __webpack_require__(114);

	var _spaces2 = _interopRequireDefault(_spaces);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var v = new _vue2.default({
	  el: 'body',
	  components: { map: _map2.default, spaces: _spaces2.default }
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.10
	 * (c) 2015 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([a-z\d])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind$1(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	var isIE9 = inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;

	var isAndroid = inBrowser && navigator.userAgent.toLowerCase().indexOf('android') > 0;

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    timerFunc = setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var entry = {
	    key: key,
	    value: value
	  };
	  this._keymap[key] = entry;
	  if (this.tail) {
	    this.tail.newer = entry;
	    entry.older = this.tail;
	  } else {
	    this.head = entry;
	  }
	  this.tail = entry;
	  if (this.size === this.limit) {
	    return this.shift();
	  } else {
	    this.size++;
	  }
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var c;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */

	function parseDirective(s) {

	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};

	  for (i = 0, l = str.length; i < l; i++) {
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @return {String}
	 */

	function tokensToExp(tokens) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Boolean} single
	 * @return {String}
	 */

	function formatToken(token, single) {
	  return token.tag ? inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE$1 = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE$1.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text$1 = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether or not to handle fully object properties which
	   * are already backed by getters and seters. Depending on
	   * use case and environment, this might introduce non-neglible
	   * performance penalties.
	   */
	  convertAllProperties: false,

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	    warn = function (msg, e) {
	      if (hasConsole && (!config.silent || config.debug)) {
	        console.warn('[Vue warn]: ' + msg);
	        /* istanbul ignore if */
	        if (config.debug) {
	          if (e) {
	            throw e;
	          } else {
	            console.warn(new Error('Warning Stack Trace').stack);
	          }
	        }
	      }
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function on$1(el, event, cb) {
	  el.addEventListener(event, cb);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && el.content instanceof DocumentFragment) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail textNodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  trim(node, node.firstChild);
	  trim(node, node.lastChild);
	}

	function trim(parent, node) {
	  if (node && node.nodeType === 3 && !node.data.trim()) {
	    parent.removeChild(node);
	  }
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__vue_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && tag !== 'component') {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        if (tag.indexOf('-') > -1 || /HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly?');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */

	function getIsBinding(el) {
	  // dynamic syntax
	  var exp = getAttr(el, 'is');
	  if (exp != null) {
	    return { id: exp };
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  var key = prop.path;
	  vm[key] = vm._data[key] = assertProp(prop, value) ? value : undefined;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */

	function assertProp(prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true;
	  }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = typeof value === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator.call(null, value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	}

	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * 0.11 deprecation warning
	 */

	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var def;
	    var ids = Object.keys(components);
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id) {
	  var assets = options[type];
	  var camelizedId;
	  return assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	}

	/**
	 * Assert asset exists
	 */

	function assertAsset(val, type, id) {
	  if (!val) {
	    process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
	  }
	}

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = index + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var uid$3 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$3++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  var i = keys.length;
	  while (i--) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  var i = items.length;
	  while (i--) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function protoAugment(target, src) {
	  target.__proto__ = src;
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  var i = keys.length;
	  var key;
	  while (i--) {
	    key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((isArray(value) || isPlainObject(value)) && !Object.isFrozen(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  // cater for pre-defined getter/setters
	  var getter, setter;
	  if (config.convertAllProperties) {
	    var property = Object.getOwnPropertyDescriptor(obj, key);
	    if (property && property.configurable === false) {
	      return;
	    }
	    getter = property && property.get;
	    setter = property && property.set;
	  }

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}

	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on$1,
		off: off,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		assertAsset: assertAsset,
		checkComponentAttr: checkComponentAttr,
		initProp: initProp,
		assertProp: assertProp,
		commonTagRE: commonTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {

	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {

	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g;
	var booleanLiteralRE = /^(true|false)$/;

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(pathReplaceRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    return new Function('scope', 'return ' + body + ';');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  // dev tool hook
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush');
	    }
	  }
	  resetBatcherState();
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run();
	      return;
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = isFn ? expOrFn.toString() : expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = Object.create(null);
	  this.newDeps = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep;
	    if (!this.deps[id]) {
	      this.deps[id] = dep;
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	  this.newDeps = Object.create(null);
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var ids = Object.keys(this.deps);
	  var i = ids.length;
	  while (i--) {
	    var id = ids[i];
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this);
	    }
	  }
	  this.deps = this.newDeps;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and Array watchers should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isArray(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var depIds = Object.keys(this.deps);
	  var i = depIds.length;
	  while (i--) {
	    this.deps[depIds[i]].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // we can skip this if the vm if being destroyed
	    // which can improve teardown performance.
	    if (!this.vm._isBeingDestroyed) {
	      this.vm._watchers.$remove(this);
	    }
	    var depIds = Object.keys(this.deps);
	    var i = depIds.length;
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	function traverse(val) {
	  var i, keys;
	  if (isArray(val)) {
	    i = val.length;
	    while (i--) traverse(val[i]);
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) traverse(val[keys[i]]);
	  }
	}

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
	  }
	};

	var el = {

	  priority: 1500,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// these input element attributes should also set their
	// corresponding properties
	var inputProps = {
	  value: 1,
	  checked: 1,
	  selected: 1
	};

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;

	var bind = {

	  priority: 850,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    if (this.descriptor.interp) {
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + this.descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + this.descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    if (inputProps[attr] && attr in this.el) {
	      this.el[attr] = attr === 'value' ? value || '' : // IE9 will set input.value to "null" for null...
	      value;
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (modelProp) {
	      this.el[modelProp] = value;
	      // update v-model if present
	      var model = this.el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && this.el.tagName === 'TEXTAREA') {
	      this.el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (value != null && value !== false) {
	      if (xlinkRE.test(attr)) {
	        this.el.setAttributeNS(xlinkNS, attr, value);
	      } else {
	        this.el.setAttribute(attr, value);
	      }
	    } else {
	      this.el.removeAttribute(attr);
	    }
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': 46,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	var on = {

	  acceptStatement: true,
	  priority: 700,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on$1(self.el.contentWindow, self.arg, self.handler);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on$1(this.el, this.arg, this.handler);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.checked) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var select = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.checked) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        self.listener();
	      });
	    }

	    // Now attach the main listener
	    this.listener = function () {
	      if (composing) return;
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      jQuery(el).on('change', this.listener);
	      if (!lazy) {
	        jQuery(el).on('input', this.listener);
	      }
	    } else {
	      this.on('change', this.listener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.value = _toString(value);
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      jQuery(el).off('change', this.listener);
	      jQuery(el).off('input', this.listener);
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: 800,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    applyTransition(el, value ? 1 : -1, function () {
	      el.style.display = value ? '' : 'none';
	    }, this.vm);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && node.content instanceof DocumentFragment;
	}

	var tagRE$1 = /<([\w:]+)/;
	var entityRE = /&\w+;|&#\d+;|&#x[\dA-F]+;/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var hit = templateCache.get(templateString);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);

	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {

	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    if (!raw) {
	      templateString = templateString.trim();
	    }
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }

	  templateCache.put(templateString, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__vue_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__vfrag__ = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.unlink();
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  self.callHook(destroyChild);
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  self.callHook(destroyChild);
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call destroy for all contained instances,
	 * with remove:false and defer:true.
	 * Defer is necessary because we need to
	 * keep the children to call detach hooks
	 * on them.
	 *
	 * @param {Vue} child
	 */

	function destroyChild(child) {
	  child.$destroy(false, true);
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el)) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : el.outerHTML);
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var vIf = {

	  priority: 2000,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseFactory = new FragmentFactory(this.vm, next);
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	      this.factory = new FragmentFactory(this.vm, el);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseFactory && !this.elseFrag) {
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var uid$1 = 0;

	var vFor = {

	  priority: 2000,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    // support "item in items" syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$1;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          frag.scope[alias] = value;
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    defineReactive(scope, alias, value);
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__vfrag__ = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.before(prevEl.nextSibling);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else {
	        def(value, id, frag);
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number') {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__vfrag__;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__vfrag__;
	  }
	  return frag;
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(n);
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
	  };
	}

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	var text = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	// must export plain object
	var publicDirectives = {
	  text: text,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on,
	  bind: bind,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 1;
	var TYPE_ANIMATION = 2;
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = id + '-enter';
	  this.leaveClass = id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind$1(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {

	  // Important hack:
	  // in Chrome, if a just-entered element is applied the
	  // leave class while its interpolated property still has
	  // a very small value (within one frame), Chrome will
	  // skip the leave transition entirely and not firing the
	  // transtionend event. Therefore we need to protected
	  // against such cases using a one-frame timeout.
	  this.justEntered = true;
	  var self = this;
	  setTimeout(function () {
	    self.justEntered = false;
	  }, 17);

	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on$1(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	}

	var transition = {

	  priority: 1100,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    // apply on closest vm
	    el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {

	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      if (assertProp(prop, val)) {
	        child[childKey] = val;
	      }
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var component = {

	  priority: 1500,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */

	  resolveComponent: function resolveComponent(id, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || id;
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(id, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHook = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHook && !cached) {
	      this.waitingFor = newComponent;
	      activateHook.call(newComponent, function () {
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy();
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (process.env.NODE_ENV !== 'production') {
	      if (current) current._inactive = true;
	      target._inactive = false;
	    }
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value));
	    } else if (isPlainObject(value)) {
	      this.handleObject(value);
	    } else if (isArray(value)) {
	      this.handleArray(value);
	    } else {
	      this.cleanup();
	    }
	  },

	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    var keys = this.prevKeys = Object.keys(value);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      if (value[key]) {
	        addClass(this.el, key);
	      } else {
	        removeClass(this.el, key);
	      }
	    }
	  },

	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        addClass(this.el, value[i]);
	      }
	    }
	    this.prevKeys = value.slice();
	  },

	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (key && (!value || !contains$1(value, key))) {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};

	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}

	function contains$1(value, key) {
	  return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
	}

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition
	};

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.');
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value)) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.');
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (options.required) {
	      // warn missing required
	      process.env.NODE_ENV !== 'production' && warn('Missing required prop: ' + name);
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, getDefault(vm, options));
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = (scope || vm._context).$get(prop.parentPath);
	            initProp(vm, prop, value);
	          } else {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          }
	        } else {
	            process.env.NODE_ENV !== 'production' && warn('Cannot bind dynamic prop on a root instance' + ' with no parent: ' + prop.name + '="' + raw + '"');
	          }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value
	        value = options.type === Boolean && raw === '' ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */

	function getDefault(vm, options) {
	  // no default, return undefined
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// terminal directives
	var terminalDirectives = ['for', 'if'];

	// default directive priority
	var DEFAULT_PRIORITY = 1000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  return function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  };
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (!destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
	    }
	  }

	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: publicDirectives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) return;
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	  var value, dirName;
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i];
	    /* eslint-disable no-cond-assign */
	    if (value = el.getAttribute('v-' + dirName)) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options);
	    }
	    /* eslint-enable no-cond-assign */
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    // either an element directive, or if/for
	    def: def || publicDirectives[dirName]
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', publicDirectives.bind, true);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', publicDirectives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', publicDirectives.bind);
	            }
	          } else

	            // normal directives
	            if (name.indexOf('v-') === 0) {
	              // check arg
	              arg = (arg = name.match(argRE)) && arg[1];
	              if (arg) {
	                name = name.replace(argRE, '');
	              }
	              // extract directive name
	              dirName = name.slice(2);

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName);

	              if (process.env.NODE_ENV !== 'production') {
	                assertAsset(dirDef, 'directive', dirName);
	              }

	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Boolean} [interp]
	   */

	  function pushDir(dirName, def, interp) {
	    var parsed = parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      expression: parsed.expression,
	      filters: parsed.filters,
	      interp: interp
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || replacer.hasAttribute('is') || replacer.hasAttribute(':is') || replacer.hasAttribute('v-bind:is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class') {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude
	});

	function stateMixin (Vue) {

	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var propsData = this._data;
	    var optionsDataFn = this.$options.data;
	    var optionsData = optionsDataFn && optionsDataFn();
	    if (optionsData) {
	      this._data = optionsData;
	      for (var prop in propsData) {
	        if (process.env.NODE_ENV !== 'production' && hasOwn(optionsData, prop)) {
	          warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
	        }
	        if (this._props[prop].raw !== null || !hasOwn(optionsData, prop)) {
	          set(optionsData, prop, propsData[prop]);
	        }
	      }
	    }
	    var data = this._data;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      this._proxy(key);
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind$1(userDef.get, this) : noop;
	          def.set = userDef.set ? bind$1(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind$1(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {

	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind$1(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind$1(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	  this._bound = true;
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = params[i];
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 */

	Directive.prototype.on = function (event, handler) {
	  on$1(this.el, event, handler);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {

	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   * @return {Element}
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	    return el;
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (el instanceof DocumentFragment) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {String} name - directive name
	   * @param {Node} node   - target node
	   * @param {Object} desc - parsed directive descriptor
	   * @param {Object} def  - directive definition object
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	    // remove DOM element
	    var self = this;
	    if (remove && this.$el) {
	      this.$remove(function () {
	        self._cleanup();
	      });
	    } else if (!deferCleanup) {
	      this._cleanup();
	    }
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {

	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[i];
	      fn = resolveAsset(this.$options, 'filters', filter.name);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(fn, 'filter', filter.name);
	      }
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String} id
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (id, cb) {
	    var factory = resolveAsset(this.$options, 'components', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(factory, 'component', id);
	    }
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory(function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	function globalAPI (Vue) {

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text$1,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && commonTagRE.test(id)) {
	            warn('Do not use built-in HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	}

	var filterRE = /[^|]\|[^|]/;

	function dataAPI (Vue) {

	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement && !isSimplePath(exp)) {
	        var self = this;
	        return function statementHandler() {
	          res.get.call(self, self);
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      filters: parsed && parsed.filters
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      for (var key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {

	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {

	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var cbs = this._events[event];
	    var shouldPropagate = !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var res = cbs[i].apply(this, args);
	        if (res === true) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, arguments);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, arguments);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function () {
	    this.$emit.apply(this, arguments);
	    var parent = this.$parent;
	    while (parent) {
	      var shouldPropagate = parent.$emit.apply(parent, arguments);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {

	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install APIs
	globalAPI(Vue);
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur);
	  }, []);
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */

	function orderBy(arr, sortKey, reverse) {
	  arr = convertArray(arr);
	  if (!sortKey) {
	    return arr;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getPath(a, sortKey) : a;
	    b = isObject(b) ? getPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */

	  currency: function currency(value, _currency) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    var stringified = Math.abs(value).toFixed(2);
	    var _int = stringified.slice(0, -3);
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = stringified.slice(-3);
	    var sign = value < 0 ? '-' : '';
	    return _currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	var partial = {

	  priority: 1750,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.

	var slot = {

	  priority: 1750,

	  params: ['name'],

	  bind: function bind() {
	    var host = this.vm;
	    var raw = host.$options._content;
	    var content;
	    if (!raw) {
	      this.fallback();
	      return;
	    }
	    var context = host._context;
	    var slotName = this.params.name;
	    if (!slotName) {
	      // Default content
	      var self = this;
	      var compileDefaultContent = function compileDefaultContent() {
	        self.compile(extractFragment(raw.childNodes, raw, true), context, host);
	      };
	      if (!host._isCompiled) {
	        // defer until the end of instance compilation,
	        // because the default outlet must wait until all
	        // other possible outlets with selectors have picked
	        // out their contents.
	        host.$once('hook:compiled', compileDefaultContent);
	      } else {
	        compileDefaultContent();
	      }
	    } else {
	      var selector = '[slot="' + slotName + '"]';
	      var nodes = raw.querySelectorAll(selector);
	      if (nodes.length) {
	        content = extractFragment(nodes, raw);
	        if (content.hasChildNodes()) {
	          this.compile(content, context, host);
	        } else {
	          this.fallback();
	        }
	      } else {
	        this.fallback();
	      }
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent, main) {
	  var frag = document.createDocumentFragment();
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      append(node);
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true;
	      append(node);
	    }
	  }
	  return frag;

	  function append(node) {
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      node = parseTemplate(node);
	    }
	    node = cloneNode(node);
	    frag.appendChild(node);
	  }
	}

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	Vue.version = '1.0.10';

	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */

	Vue.options = {
	  directives: publicDirectives,
	  elementDirectives: elementDirectives,
	  filters: filters,
	  transitions: {},
	  components: {},
	  partials: {},
	  replace: true
	};

	// devtools global hook
	/* istanbul ignore if */
	if (process.env.NODE_ENV !== 'production') {
	  if (inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue);
	  }
	}

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6)
	module.exports = __webpack_require__(12)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(113)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./map.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./map.vue","-!vue-html-loader!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./map.vue"], function () {
	var newOptions = require("-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./map.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./map.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../vue-loader/lib/style-rewriter.js?id=_v-6613c1da&file=map.vue!./style.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../vue-loader/lib/style-rewriter.js?id=_v-6613c1da&file=map.vue!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "/* general typography */\n.leaflet-container {\n  background:#fff;\n  font:12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  color:#404040;\n  color:rgba(0,0,0,0.75);\n  outline:0;\n  overflow:hidden;\n  -ms-touch-action:none;\n  }\n\n.leaflet-container *,\n.leaflet-container *:after,\n.leaflet-container *:before {\n  box-sizing:border-box;\n  }\n\n.leaflet-container h1,\n.leaflet-container h2,\n.leaflet-container h3,\n.leaflet-container h4,\n.leaflet-container h5,\n.leaflet-container h6,\n.leaflet-container p {\n  font-size:15px;\n  line-height:20px;\n  margin:0 0 10px;\n  }\n\n.leaflet-container .marker-description img {\n  margin-bottom: 10px;\n  }\n\n.leaflet-container a {\n  color:#3887BE;\n  font-weight:normal;\n  text-decoration:none;\n  }\n  .leaflet-container a:hover      { color:#63b6e5; }\n  .leaflet-container.dark a       { color:#63b6e5; }\n  .leaflet-container.dark a:hover { color:#8fcaec; }\n\n.leaflet-container.dark .mapbox-button,\n.leaflet-container .mapbox-button {\n  background-color:#3887be;\n  display:inline-block;\n  height:40px;\n  line-height:40px;\n  text-decoration:none;\n  color:#fff;\n  font-size:12px;\n  white-space:nowrap;\n  text-overflow:ellipsis;\n  }\n  .leaflet-container.dark .mapbox-button:hover,\n  .leaflet-container .mapbox-button:hover {\n    color:#fff;\n    background-color:#3bb2d0;\n    }\n\n/* Base Leaflet\n------------------------------------------------------- */\n.leaflet-map-pane,\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-tile-pane,\n.leaflet-tile-container,\n.leaflet-overlay-pane,\n.leaflet-shadow-pane,\n.leaflet-marker-pane,\n.leaflet-popup-pane,\n.leaflet-overlay-pane svg,\n.leaflet-zoom-box,\n.leaflet-image-layer,\n.leaflet-layer {\n  position:absolute;\n  left:0;\n  top:0;\n  }\n\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n  -webkit-user-drag:none;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          -ms-user-select:none;\n      user-select:none;\n  }\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n  display: block;\n  }\n\n.leaflet-tile {\n  -webkit-filter:inherit;\n          filter:inherit;\n  visibility:hidden;\n  }\n.leaflet-tile-loaded {\n  visibility:inherit;\n  }\n.leaflet-zoom-box {\n  width:0;\n  height:0;\n  }\n\n.leaflet-tile-pane    { z-index:2; }\n.leaflet-objects-pane { z-index:3; }\n.leaflet-overlay-pane { z-index:4; }\n.leaflet-shadow-pane  { z-index:5; }\n.leaflet-marker-pane  { z-index:6; }\n.leaflet-popup-pane   { z-index:7; }\n\n.leaflet-control {\n  position:relative;\n  z-index:7;\n  pointer-events:auto;\n  float:left;\n  clear:both;\n  }\n  .leaflet-right .leaflet-control   { float:right; }\n  .leaflet-top .leaflet-control     { margin-top:10px; }\n  .leaflet-bottom .leaflet-control  { margin-bottom:10px; }\n  .leaflet-left .leaflet-control    { margin-left:10px; }\n  .leaflet-right .leaflet-control   { margin-right:10px; }\n\n.leaflet-top,\n.leaflet-bottom {\n  position:absolute;\n  z-index:1000;\n  pointer-events:none;\n  }\n  .leaflet-top    { top:0; }\n  .leaflet-right  { right:0; }\n  .leaflet-bottom { bottom:0; }\n  .leaflet-left   { left:0; }\n\n/* zoom and fade animations */\n.leaflet-fade-anim .leaflet-tile,\n.leaflet-fade-anim .leaflet-popup {\n  opacity:0;\n  -webkit-transition:opacity 0.2s linear;\n          transition:opacity 0.2s linear;\n  }\n  .leaflet-fade-anim .leaflet-tile-loaded,\n  .leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n    opacity:1;\n    }\n\n.leaflet-zoom-anim .leaflet-zoom-animated {\n  -webkit-transition:-webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\n          transition:-webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\n          transition:transform 0.25s cubic-bezier(0,0,0.25,1);\n          transition:        transform 0.25s cubic-bezier(0,0,0.25,1), -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\n  }\n.leaflet-zoom-anim .leaflet-tile,\n.leaflet-pan-anim .leaflet-tile,\n.leaflet-touching .leaflet-zoom-animated {\n  -webkit-transition:none;\n          transition:none;\n  }\n.leaflet-zoom-anim .leaflet-zoom-hide { visibility: hidden; }\n\n/* cursors */\n.leaflet-container {\n  cursor:-webkit-grab;\n  cursor:   -moz-grab;\n  }\n.leaflet-overlay-pane path,\n.leaflet-marker-icon,\n.leaflet-container.map-clickable,\n.leaflet-container.leaflet-clickable {\n  cursor:pointer;\n  }\n.leaflet-popup-pane,\n.leaflet-control {\n  cursor:auto;\n  }\n.leaflet-dragging,\n.leaflet-dragging .map-clickable,\n.leaflet-dragging .leaflet-clickable,\n.leaflet-dragging .leaflet-container {\n  cursor:move;\n  cursor:-webkit-grabbing;\n  cursor:   -moz-grabbing;\n  }\n\n.leaflet-zoom-box {\n  background:#fff;\n  border:2px dotted #202020;\n  opacity:0.5;\n  }\n\n/* general toolbar styles */\n.leaflet-control-layers,\n.leaflet-bar {\n  background-color:#fff;\n  border:1px solid #999;\n  border-color:rgba(0,0,0,0.4);\n  border-radius:3px;\n  box-shadow:none;\n  }\n.leaflet-bar a,\n.leaflet-bar a:hover {\n  color:#404040;\n  color:rgba(0,0,0,0.75);\n  border-bottom:1px solid #ddd;\n  border-bottom-color:rgba(0,0,0,0.10);\n  }\n  .leaflet-bar a:hover,\n  .leaflet-bar a:active {\n    background-color:#f8f8f8;\n    cursor:pointer;\n    }\n  .leaflet-bar a:hover:first-child {\n    border-radius:3px 3px 0 0;\n    }\n  .leaflet-bar a:hover:last-child {\n    border-bottom:none;\n    border-radius:0 0 3px 3px;\n    }\n  .leaflet-bar a:hover:only-of-type {\n    border-radius:3px;\n    }\n\n.leaflet-bar .leaflet-disabled {\n  cursor:default;\n  opacity:0.75;\n  }\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out {\n  display:block;\n  content:'';\n  text-indent:-999em;\n  }\n\n.leaflet-control-layers .leaflet-control-layers-list,\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\n  display:none;\n  }\n  .leaflet-control-layers-expanded .leaflet-control-layers-list {\n    display:block;\n    position:relative;\n    }\n\n.leaflet-control-layers-expanded {\n  background:#fff;\n  padding:6px 10px 6px 6px;\n  color:#404040;\n  color:rgba(0,0,0,0.75);\n  }\n.leaflet-control-layers-selector {\n  margin-top:2px;\n  position:relative;\n  top:1px;\n  }\n.leaflet-control-layers label {\n  display: block;\n  }\n.leaflet-control-layers-separator {\n  height:0;\n  border-top:1px solid #ddd;\n  border-top-color:rgba(0,0,0,0.10);\n  margin:5px -10px 5px -6px;\n  }\n\n.leaflet-container .leaflet-control-attribution {\n  background-color:rgba(255,255,255,0.5);\n  margin:0;\n  box-shadow:none;\n  }\n  .leaflet-container .leaflet-control-attribution a,\n  .leaflet-container .map-info-container a {\n    color:#404040;\n    }\n    .leaflet-control-attribution a:hover,\n    .map-info-container a:hover {\n      color:inherit;\n      text-decoration:underline;\n      }\n\n.leaflet-control-attribution,\n.leaflet-control-scale-line {\n  padding:0 5px;\n  }\n  .leaflet-left .leaflet-control-scale    { margin-left:5px; }\n  .leaflet-bottom .leaflet-control-scale  { margin-bottom:5px; }\n\n/* Used for smaller map containers & triggered by container size */\n.leaflet-container .leaflet-control-attribution.leaflet-compact-attribution { margin:10px; }\n.leaflet-container .leaflet-control-attribution.leaflet-compact-attribution {\n  background:#fff;\n  border-radius:3px 13px 13px 3px;\n  padding:3px 31px 3px 3px;\n  visibility:hidden;\n  }\n  .leaflet-control-attribution.leaflet-compact-attribution:hover {\n    visibility:visible;\n    }\n\n.leaflet-control-attribution.leaflet-compact-attribution:after {\n  content:'';\n  background-color:#fff;\n  background-color:rgba(255,255,255,0.5);\n  background-position:0 -78px;\n  border-radius:50%;\n  position:absolute;\n  display:inline-block;\n  width:26px;\n  height:26px;\n  vertical-align:middle;\n  bottom:0;\n  z-index:1;\n  visibility:visible;\n  cursor:pointer;\n  }\n  .leaflet-control-attribution.leaflet-compact-attribution:hover:after { background-color:#fff; }\n\n.leaflet-right .leaflet-control-attribution.leaflet-compact-attribution:after { right:0; }\n.leaflet-left .leaflet-control-attribution.leaflet-compact-attribution:after { left:0; }\n\n.leaflet-control-scale-line {\n  background-color:rgba(255,255,255,0.5);\n  border:1px solid #999;\n  border-color:rgba(0,0,0,0.4);\n  border-top:none;\n  padding:2px 5px 1px;\n  white-space:nowrap;\n  overflow:hidden;\n  }\n  .leaflet-control-scale-line:not(:first-child) {\n    border-top:2px solid #ddd;\n    border-top-color:rgba(0,0,0,0.10);\n    border-bottom:none;\n    margin-top:-2px;\n    }\n  .leaflet-control-scale-line:not(:first-child):not(:last-child) {\n    border-bottom:2px solid #777;\n    }\n\n/* popup */\n.leaflet-popup {\n  position:absolute;\n  text-align:center;\n  pointer-events:none;\n  }\n.leaflet-popup-content-wrapper {\n  padding:1px;\n  text-align:left;\n  pointer-events:all;\n  }\n.leaflet-popup-content {\n  padding:10px 10px 15px;\n  margin:0;\n  line-height:inherit;\n  }\n  .leaflet-popup-close-button + .leaflet-popup-content-wrapper .leaflet-popup-content {\n    padding-top:15px;\n    }\n\n.leaflet-popup-tip-container {\n  width:20px;\n  height:20px;\n  margin:0 auto;\n  position:relative;\n  }\n.leaflet-popup-tip {\n  width:0;\n\theight:0;\n  margin:0;\n\tborder-left:10px solid transparent;\n\tborder-right:10px solid transparent;\n\tborder-top:10px solid #fff;\n  box-shadow:none;\n  }\n.leaflet-popup-close-button {\n  text-indent:-999em;\n  position:absolute;\n  top:0;right:0;\n  pointer-events:all;\n  }\n  .leaflet-popup-close-button:hover {\n    background-color:#f8f8f8;\n    }\n\n.leaflet-popup-scrolled {\n  overflow:auto;\n  border-bottom:1px solid #ddd;\n  border-top:1px solid #ddd;\n  }\n\n/* div icon */\n.leaflet-div-icon {\n  background:#fff;\n  border:1px solid #999;\n  border-color:rgba(0,0,0,0.4);\n  }\n.leaflet-editing-icon {\n  border-radius:3px;\n  }\n\n/* Leaflet + Mapbox\n------------------------------------------------------- */\n.leaflet-bar a,\n.mapbox-icon,\n.map-tooltip.closable .close,\n.leaflet-control-layers-toggle,\n.leaflet-popup-close-button,\n.mapbox-button-icon:before {\n  content:'';\n  display:inline-block;\n  width:26px;\n  height:26px;\n  vertical-align:middle;\n  background-repeat:no-repeat;\n  }\n.leaflet-bar a {\n  display:block;\n  }\n\n.leaflet-control-attribution:after,\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out,\n.leaflet-popup-close-button,\n.leaflet-control-layers-toggle,\n.leaflet-container.dark .map-tooltip .close,\n.map-tooltip .close,\n.mapbox-icon {\n  opacity: .75;\n  background-image:url(" + __webpack_require__(9) + ");\n  background-repeat:no-repeat;\n  background-size:26px 260px;\n  }\n  .leaflet-container.dark .leaflet-control-attribution:after,\n  .mapbox-button-icon:before,\n  .leaflet-container.dark .leaflet-control-zoom-in,\n  .leaflet-container.dark .leaflet-control-zoom-out,\n  .leaflet-container.dark .leaflet-control-layers-toggle,\n  .leaflet-container.dark .mapbox-icon {\n    opacity: 1;\n    background-image:url(" + __webpack_require__(10) + ");\n    background-size:26px 260px;\n    }\n  .leaflet-bar .leaflet-control-zoom-in                 { background-position:0 0; }\n  .leaflet-bar .leaflet-control-zoom-out                { background-position:0 -26px; }\n  .map-tooltip.closable .close,\n  .leaflet-popup-close-button {\n    background-position:-3px -55px;\n    width:20px;\n    height:20px;\n    border-radius:0 3px 0 0;\n    }\n  .mapbox-icon-info                                     { background-position:0 -78px; }\n  .leaflet-control-layers-toggle                        { background-position:0 -104px; }\n  .mapbox-icon.mapbox-icon-share:before, .mapbox-icon.mapbox-icon-share         { background-position:0 -130px; }\n  .mapbox-icon.mapbox-icon-geocoder:before, .mapbox-icon.mapbox-icon-geocoder   { background-position:0 -156px; }\n  .mapbox-icon-facebook:before, .mapbox-icon-facebook   { background-position:0 -182px; }\n  .mapbox-icon-twitter:before, .mapbox-icon-twitter     { background-position:0 -208px; }\n  .mapbox-icon-pinterest:before, .mapbox-icon-pinterest { background-position:0 -234px; }\n\n.leaflet-popup-content-wrapper,\n.map-legends,\n.map-tooltip {\n  background:#fff;\n  border-radius:3px;\n  box-shadow:0 1px 2px rgba(0,0,0,0.10);\n  }\n.map-legends,\n.map-tooltip {\n  max-width:300px;\n  }\n.map-legends .map-legend {\n  padding:10px;\n  }\n.map-tooltip {\n  z-index:999999;\n  padding:10px;\n  min-width:180px;\n  max-height:400px;\n  overflow:auto;\n  opacity:1;\n  -webkit-transition:opacity 150ms;\n          transition:opacity 150ms;\n  }\n\n.map-tooltip .close {\n  text-indent:-999em;\n  overflow:hidden;\n  display:none;\n  }\n  .map-tooltip.closable .close {\n    position:absolute;\n    top:0;right:0;\n    border-radius:3px;\n    }\n    .map-tooltip.closable .close:active  {\n      background-color:#f8f8f8;\n      }\n\n.leaflet-control-interaction {\n  position:absolute;\n  top:10px;\n  right:10px;\n  width:300px;\n  }\n.leaflet-popup-content .marker-title {\n  font-weight:bold;\n  }\n.leaflet-control .mapbox-button {\n  background-color:#fff;\n  border:1px solid #ddd;\n  border-color:rgba(0,0,0,0.10);\n  padding:5px 10px;\n  border-radius:3px;\n  }\n\n/* Share modal\n------------------------------------------------------- */\n.mapbox-modal > div {\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  z-index:-1;\n  overflow-y:auto;\n  }\n  .mapbox-modal.active > div {\n    z-index:99999;\n    -webkit-transition:all .2s, z-index 0 0;\n    transition:all .2s, z-index 0 0;\n    }\n\n.mapbox-modal .mapbox-modal-mask {\n  background:rgba(0,0,0,0.5);\n  opacity:0;\n  }\n  .mapbox-modal.active .mapbox-modal-mask { opacity:1; }\n\n.mapbox-modal .mapbox-modal-content {\n  -webkit-transform:translateY(-100%);\n      -ms-transform:translateY(-100%);\n          transform:translateY(-100%);\n  }\n  .mapbox-modal.active .mapbox-modal-content {\n    -webkit-transform:translateY(0);\n        -ms-transform:translateY(0);\n            transform:translateY(0);\n    }\n\n.mapbox-modal-body {\n  position:relative;\n  background:#fff;\n  padding:20px;\n  z-index:1000;\n  width:50%;\n  margin:20px 0 20px 25%;\n  }\n.mapbox-share-buttons {\n  margin:0 0 20px;\n  }\n.mapbox-share-buttons a {\n  width:33.3333%;\n  border-left:1px solid #fff;\n  text-align:center;\n  border-radius:0;\n  }\n  .mapbox-share-buttons a:last-child  { border-radius:0 3px 3px 0; }\n  .mapbox-share-buttons a:first-child { border:none; border-radius:3px 0 0 3px; }\n\n.mapbox-modal input {\n  width:100%;\n  height:40px;\n  padding:10px;\n  border:1px solid #ddd;\n  border-color:rgba(0,0,0,0.10);\n  color:rgba(0,0,0,0.5);\n  }\n\n/* Info Control\n------------------------------------------------------- */\n.leaflet-control.mapbox-control-info {\n  margin:5px 30px 10px 10px;\n  min-height:26px;\n  }\n  .leaflet-right .leaflet-control.mapbox-control-info {\n    margin:5px 10px 10px 30px;\n    }\n\n.mapbox-info-toggle {\n  background-color:#fff;\n  background-color:rgba(255,255,255,0.5);\n  border-radius:50%;\n  position:absolute;\n  bottom:0;left:0;\n  z-index:1;\n  }\n  .leaflet-right .mapbox-control-info .mapbox-info-toggle  { left:auto; right:0; }\n  .mapbox-info-toggle:hover { background-color:#fff; }\n\n.map-info-container {\n  background:#fff;\n  padding:3px 5px 3px 27px;\n  display:none;\n  position:relative;\n  bottom:0;left:0;\n  border-radius:13px 3px 3px 13px;\n  }\n  .leaflet-right .map-info-container {\n    left:auto;\n    right:0;\n    padding:3px 27px 3px 5px;\n    border-radius:3px 13px 13px 3px;\n    }\n\n.mapbox-control-info.active .map-info-container { display:inline-block; }\n.leaflet-container .mapbox-improve-map { font-weight:bold; }\n\n/* Geocoder\n------------------------------------------------------- */\n.leaflet-control-mapbox-geocoder {\n  position:relative;\n  }\n.leaflet-control-mapbox-geocoder.searching {\n  opacity:0.75;\n  }\n.leaflet-control-mapbox-geocoder .leaflet-control-mapbox-geocoder-wrap {\n  background:#fff;\n  position:absolute;\n  border:1px solid #999;\n  border-color:rgba(0,0,0,0.4);\n  overflow:hidden;\n  left:26px;\n  height:28px;\n  width:0;\n  top:-1px;\n  border-radius:0 3px 3px 0;\n  opacity:0;\n  -webkit-transition:opacity 100ms;\n          transition:opacity 100ms;\n  }\n.leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-wrap {\n  width:180px;\n  opacity:1;\n  }\n.leaflet-bar .leaflet-control-mapbox-geocoder-toggle,\n.leaflet-bar .leaflet-control-mapbox-geocoder-toggle:hover {\n  border-bottom:none;\n  }\n.leaflet-control-mapbox-geocoder-toggle {\n  border-radius:3px;\n  }\n.leaflet-control-mapbox-geocoder.active,\n.leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-toggle {\n  border-top-right-radius:0;\n  border-bottom-right-radius:0;\n  }\n.leaflet-control-mapbox-geocoder .leaflet-control-mapbox-geocoder-form input {\n  background:transparent;\n  border:0;\n  width:180px;\n  padding:0 0 0 10px;\n  height:26px;\n  outline:none;\n  }\n.leaflet-control-mapbox-geocoder-results {\n  width:180px;\n  position:absolute;\n  left:26px;\n  top:25px;\n  border-radius:0 0 3px 3px;\n  }\n  .leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-results {\n    background:#fff;\n    border:1px solid #999;\n    border-color:rgba(0,0,0,0.4);\n    }\n.leaflet-control-mapbox-geocoder-results a,\n.leaflet-control-mapbox-geocoder-results span {\n  padding:0 10px;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  display:block;\n  width:100%;\n  font-size:12px;\n  line-height:26px;\n  text-align:left;\n  overflow:hidden;\n  }\n  .leaflet-container.dark .leaflet-control .leaflet-control-mapbox-geocoder-results a:hover,\n  .leaflet-control-mapbox-geocoder-results a:hover {\n    background:#f8f8f8;\n    opacity:1;\n    }\n\n.leaflet-right .leaflet-control-mapbox-geocoder-wrap,\n.leaflet-right .leaflet-control-mapbox-geocoder-results {\n  left:auto;\n  right:26px;\n  }\n.leaflet-right .leaflet-control-mapbox-geocoder-wrap {\n  border-radius:3px 0 0 3px;\n  }\n.leaflet-right .leaflet-control-mapbox-geocoder.active,\n.leaflet-right .leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-toggle {\n  border-radius:0 3px 3px 0;\n  }\n\n.leaflet-bottom .leaflet-control-mapbox-geocoder-results {\n  top:auto;\n  bottom:25px;\n  border-radius:3px 3px 0 0;\n  }\n\n/* Mapbox Logo\n------------------------------------------------------- */\n.mapbox-logo-true:before {\n  content:'';\n  display:inline-block;\n  width:61px;\n  height:19px;\n  vertical-align:middle;\n}\n.mapbox-logo-true {\n  background-repeat:no-repeat;\n  background-size:61px 19px;\n  background-image:url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI2NSIgaGVpZ2h0PSIyMCI+PGRlZnMvPjxtZXRhZGF0YT48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPjxkYzp0aXRsZS8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjEuODQ4MywtOTguNTAzOTUpIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjE3NDQxODM2LDAsMCwwLjE3NDQxODM2LDIyMC41MjI4MiwyOS4yMjkzNDIpIiBzdHlsZT0ib3BhY2l0eTowLjI1O2ZpbGw6I2ZmZmZmZjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MTcuMjAwMDIzNjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmUiPjxwYXRoIGQ9Ik0gNS4yOCAxLjUgQyA0LjU0IDEuNTYgMy45IDIuMjUgMy45MSAzIGwgMCAxMS44OCBjIDAuMDIgMC43NyAwLjcyIDEuNDcgMS41IDEuNDcgbCAxLjc1IDAgYyAwLjc4IDAgMS40OCAtMC42OSAxLjUgLTEuNDcgbCAwIC00LjI4IDAuNzIgMS4xOSBjIDAuNTMgMC44NyAyLjAzIDAuODcgMi41NiAwIGwgMC43MiAtMS4xOSAwIDQuMjggYyAwLjAyIDAuNzYgMC43IDEuNDUgMS40NyAxLjQ3IGwgMS43NSAwIGMgMC43OCAwIDEuNDggLTAuNjkgMS41IC0xLjQ3IGwgMCAtMC4xNiBjIDEuMDIgMS4xMiAyLjQ2IDEuODEgNC4wOSAxLjgxIGwgNC4wOSAwIDAgMS40NyBjIC0wIDAuNzggMC42OSAxLjQ4IDEuNDcgMS41IGwgMS43NSAwIGMgMC43OSAtMCAxLjUgLTAuNzEgMS41IC0xLjUgbCAwLjAyIC0xLjQ3IGMgMS43MiAwIDMuMDggLTAuNjQgNC4xNCAtMS42OSBsIDAgMC4xOSBjIDAgMC4zOSAwLjE2IDAuNzkgMC40NCAxLjA2IDAuMjggMC4yOCAwLjY3IDAuNDQgMS4wNiAwLjQ0IGwgMy4zMSAwIGMgMi4wMyAwIDMuODUgLTEuMDYgNC45MSAtMi42OSAxLjA1IDEuNjEgMi44NCAyLjY5IDQuODggMi42OSAxLjAzIDAgMS45OCAtMC4yNyAyLjgxIC0wLjc1IDAuMjggMC4zNSAwLjczIDAuNTcgMS4xOSAwLjU2IGwgMi4xMiAwIGMgMC40OCAwLjAxIDAuOTcgLTAuMjMgMS4yNSAtMC42MiBsIDAuOTEgLTEuMjggMC45MSAxLjI4IGMgMC4yOCAwLjM5IDAuNzQgMC42MyAxLjIyIDAuNjIgbCAyLjE2IDAgQyA2Mi42NyAxNi4zMyA2My40MiAxNC44OSA2Mi44MSAxNCBMIDYwLjIyIDEwLjM4IDYyLjYyIDcgQyA2My4yNiA2LjExIDYyLjUgNC42MiA2MS40MSA0LjYyIGwgLTIuMTYgMCBDIDU4Ljc4IDQuNjIgNTguMzEgNC44NiA1OC4wMyA1LjI1IEwgNTcuMzEgNi4yOCA1Ni41NiA1LjI1IEMgNTYuMjkgNC44NiA1NS44MiA0LjYyIDU1LjM0IDQuNjIgbCAtMi4xNiAwIGMgLTAuNDkgLTAgLTAuOTcgMC4yNSAtMS4yNSAwLjY2IC0wLjg2IC0wLjUxIC0xLjg0IC0wLjgxIC0yLjkxIC0wLjgxIC0yLjAzIDAgLTMuODMgMS4wOCAtNC44OCAyLjY5IEMgNDMuMSA1LjUzIDQxLjI3IDQuNDcgMzkuMTkgNC40NyBMIDM5LjE5IDMgQyAzOS4xOSAyLjYxIDM5LjAzIDIuMjEgMzguNzUgMS45NCAzOC40NyAxLjY2IDM4LjA4IDEuNSAzNy42OSAxLjUgbCAtMS43NSAwIGMgLTAuNzEgMCAtMS41IDAuODMgLTEuNSAxLjUgbCAwIDMuMTYgQyAzMy4zOCA1LjEgMzEuOTYgNC40NyAzMC4zOCA0LjQ3IGwgLTMuMzQgMCBjIC0wLjc3IDAuMDIgLTEuNDcgMC43MiAtMS40NyAxLjUgbCAwIDAuMzEgYyAtMS4wMiAtMS4xMiAtMi40NiAtMS44MSAtNC4wOSAtMS44MSAtMS42MyAwIC0zLjA3IDAuNyAtNC4wOSAxLjgxIEwgMTcuMzggMyBjIC0wIC0wLjc5IC0wLjcxIC0xLjUgLTEuNSAtMS41IEwgMTQuNSAxLjUgQyAxMy41NSAxLjUgMTIuMjggMS44NyAxMS42NiAyLjk0IGwgLTEgMS42OSAtMSAtMS42OSBDIDkuMDMgMS44NyA3Ljc3IDEuNSA2LjgxIDEuNSBsIC0xLjQxIDAgQyA1LjM2IDEuNSA1LjMyIDEuNSA1LjI4IDEuNSB6IG0gMTYuMTkgNy43MiBjIDAuNTMgMCAwLjk0IDAuMzUgMC45NCAxLjI4IGwgMCAxLjI4IC0wLjk0IDAgYyAtMC41MiAwIC0wLjk0IC0wLjM4IC0wLjk0IC0xLjI4IC0wIC0wLjkgMC40MiAtMS4yOCAwLjk0IC0xLjI4IHogbSA4LjgxIDAgYyAwLjgzIDAgMS4xOCAwLjY4IDEuMTkgMS4yOCAwLjAxIDAuOTQgLTAuNjIgMS4yOCAtMS4xOSAxLjI4IHogbSA4LjcyIDAgYyAwLjcyIDAgMS4zNyAwLjYgMS4zNyAxLjI4IDAgMC43NyAtMC41MSAxLjI4IC0xLjM3IDEuMjggeiBtIDEwLjAzIDAgYyAwLjU4IDAgMS4wOSAwLjUgMS4wOSAxLjI4IDAgMC43OCAtMC41MSAxLjI4IC0xLjA5IDEuMjggLTAuNTggMCAtMS4xMiAtMC41IC0xLjEyIC0xLjI4IDAgLTAuNzggMC41NCAtMS4yOCAxLjEyIC0xLjI4IHoiIHRyYW5zZm9ybT0ibWF0cml4KDUuNzMzMzQxNCwwLDAsNS43MzMzNDE0LDIzNi45MzMwOCwzOTcuMTc0OTgpIiBzdHlsZT0iZm9udC1zaXplOm1lZGl1bTtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTtsaW5lLWhlaWdodDpub3JtYWw7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTtkaXJlY3Rpb246bHRyO2Jsb2NrLXByb2dyZXNzaW9uOnRiO3dyaXRpbmctbW9kZTpsci10Yjt0ZXh0LWFuY2hvcjpzdGFydDtiYXNlbGluZS1zaGlmdDpiYXNlbGluZTtjb2xvcjojMDAwMDAwO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTcuMjAwMDIzNjU7bWFya2VyOm5vbmU7dmlzaWJpbGl0eTp2aXNpYmxlO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZTtmb250LWZhbWlseTpTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246U2FucyIvPjwvZz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjE3NDQxODM2LDAsMCwwLjE3NDQxODM2LDIyMC41MjI4MiwyOS4yMjkzNDIpIiBzdHlsZT0iZmlsbDojZmZmZmZmIj48cGF0aCBkPSJtIDUuNDEgMyAwIDEyIDEuNzUgMCAwIC05LjkxIDMuNSA1Ljk0IDMuNDcgLTUuOTQgMCA5LjkxIDEuNzUgMCAwIC0xMiBMIDE0LjUgMyBDIDEzLjggMyAxMy4yNSAzLjE2IDEyLjk0IDMuNjkgTCAxMC42NiA3LjU5IDguMzggMy42OSBDIDguMDcgMy4xNiA3LjUxIDMgNi44MSAzIHogTSAzNiAzIGwgMCAxMi4wMyAzLjI1IDAgYyAyLjQ0IDAgNC4zOCAtMS45MSA0LjM4IC00LjUzIDAgLTIuNjIgLTEuOTMgLTQuNDcgLTQuMzggLTQuNDcgQyAzOC43IDYuMDMgMzguMzIgNiAzNy43NSA2IGwgMCAtMyB6IE0gMjEuNDcgNS45NyBjIC0yLjQ0IDAgLTQuMTkgMS45MSAtNC4xOSA0LjUzIDAgMi42MiAxLjc1IDQuNTMgNC4xOSA0LjUzIGwgNC4xOSAwIDAgLTQuNTMgYyAwIC0yLjYyIC0xLjc1IC00LjUzIC00LjE5IC00LjUzIHogbSAyNy41NiAwIGMgLTIuNDEgMCAtNC4zOCAyLjAzIC00LjM4IDQuNTMgMCAyLjUgMS45NyA0LjUzIDQuMzggNC41MyAyLjQxIDAgNC4zNCAtMi4wMyA0LjM0IC00LjUzIDAgLTIuNSAtMS45NCAtNC41MyAtNC4zNCAtNC41MyB6IG0gLTIyIDAuMDMgMCAxMiAxLjc1IDAgMCAtMi45NyBjIDAuNTcgMCAxLjA0IC0wIDEuNTkgMCAyLjQ0IDAgNC4zNCAtMS45MSA0LjM0IC00LjUzIDAgLTIuNjIgLTEuOSAtNC41IC00LjM0IC00LjUgeiBtIDI2LjE2IDAgMy4wMyA0LjM4IC0zLjE5IDQuNjIgMi4xMiAwIEwgNTcuMzEgMTEuOTEgNTkuNDQgMTUgNjEuNTkgMTUgNTguMzggMTAuMzggNjEuNDEgNiA1OS4yNSA2IDU3LjMxIDguODEgNTUuMzQgNiB6IE0gMjEuNDcgNy43MiBjIDEuNCAwIDIuNDQgMS4xOSAyLjQ0IDIuNzggbCAwIDIuNzggLTIuNDQgMCBjIC0xLjQgMCAtMi40NCAtMS4yMSAtMi40NCAtMi43OCAtMCAtMS41NyAxLjA0IC0yLjc4IDIuNDQgLTIuNzggeiBtIDI3LjU2IDAgYyAxLjQ0IDAgMi41OSAxLjI0IDIuNTkgMi43OCAwIDEuNTQgLTEuMTUgMi43OCAtMi41OSAyLjc4IC0xLjQ0IDAgLTIuNjIgLTEuMjQgLTIuNjIgLTIuNzggMCAtMS41NCAxLjE4IC0yLjc4IDIuNjIgLTIuNzggeiBtIC0yMC4yNSAwLjAzIDEuNTkgMCBjIDEuNTkgMCAyLjU5IDEuMjggMi41OSAyLjc1IDAgMS40NyAtMS4xMyAyLjc4IC0yLjU5IDIuNzggbCAtMS41OSAwIHogbSA4Ljk3IDAgMS41IDAgYyAxLjQ3IDAgMi42MiAxLjI4IDIuNjIgMi43NSAwIDEuNDcgLTEuMDQgMi43OCAtMi42MiAyLjc4IGwgLTEuNSAwIHoiIHRyYW5zZm9ybT0ibWF0cml4KDUuNzMzMzQxNCwwLDAsNS43MzMzNDE0LDIzNi45MzMwOCwzOTcuMTc0OTgpIiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIi8+PC9nPjwvZz48L3N2Zz4=');\n}\n\n/* Dark Theme\n------------------------------------------------------- */\n.leaflet-container.dark .leaflet-bar {\n  background-color:#404040;\n  border-color:#202020;\n  border-color:rgba(0,0,0,0.75);\n  }\n  .leaflet-container.dark .leaflet-bar a {\n    color:#404040;\n    border-color:rgba(0,0,0,0.5);\n    }\n  .leaflet-container.dark .leaflet-bar a:active,\n  .leaflet-container.dark .leaflet-bar a:hover {\n    background-color:#505050;\n    }\n\n.leaflet-container.dark .leaflet-control-attribution:after,\n.leaflet-container.dark .mapbox-info-toggle,\n.leaflet-container.dark .map-info-container,\n.leaflet-container.dark .leaflet-control-attribution {\n  background-color:rgba(0,0,0,0.5);\n  color:#f8f8f8;\n  }\n  .leaflet-container.dark .leaflet-control-attribution a,\n  .leaflet-container.dark .leaflet-control-attribution a:hover,\n  .leaflet-container.dark .map-info-container a,\n  .leaflet-container.dark .map-info-container a:hover {\n    color:#fff;\n    }\n\n.leaflet-container.dark .leaflet-control-attribution:hover:after {\n  background-color:#000;\n  }\n.leaflet-container.dark .leaflet-control-layers-list span {\n  color:#f8f8f8;\n  }\n.leaflet-container.dark .leaflet-control-layers-separator {\n  border-top-color:rgba(255,255,255,0.10);\n  }\n.leaflet-container.dark .leaflet-bar a.leaflet-disabled,\n.leaflet-container.dark .leaflet-control .mapbox-button.disabled {\n  background-color:#252525;\n  color:#404040;\n  }\n.leaflet-container.dark .leaflet-control-mapbox-geocoder > div {\n  border-color:#202020;\n  border-color:rgba(0,0,0,0.75);\n  }\n  .leaflet-container.dark .leaflet-control .leaflet-control-mapbox-geocoder-results a {\n    border-color:#ddd #202020;\n    border-color:rgba(0,0,0,0.10) rgba(0,0,0,0.75);\n    }\n  .leaflet-container.dark .leaflet-control .leaflet-control-mapbox-geocoder-results span {\n    border-color:#202020;\n    border-color:rgba(0,0,0,0.75);\n    }\n\n/* Larger Screens\n------------------------------------------------------- */\n@media only screen and (max-width:800px) {\n.mapbox-modal-body {\n  width:83.3333%;\n  margin-left:8.3333%;\n  }\n}\n\n/* Smaller Screens\n------------------------------------------------------- */\n@media only screen and (max-width:640px) {\n.mapbox-modal-body {\n  width:100%;\n  height:100%;\n  margin:0;\n  }\n}\n\n/* Print\n------------------------------------------------------- */\n@media print { .mapbox-improve-map { display:none; } }\n\n/* Browser Fixes\n------------------------------------------------------- */\n/* VML support for IE8 */\n.leaflet-vml-shape { width:1px; height:1px; }\n.lvml { behavior:url(#default#VML); display:inline-block; position:absolute; }\n/* Map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container img.leaflet-tile { max-width:none !important; }\n/* Markers are broken in FF/IE if you have max-width: 100% on marker images */\n.leaflet-container img.leaflet-marker-icon { max-width:none; }\n/* Stupid Android 2 doesn't understand \"max-width: none\" properly */\n.leaflet-container img.leaflet-image-layer { max-width:15000px !important; }\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg { -moz-user-select:none; }\n/* Older IEs don't support the translateY property for display animation */\n.leaflet-oldie .mapbox-modal .mapbox-modal-content        { display:none; }\n.leaflet-oldie .mapbox-modal.active .mapbox-modal-content { display:block; }\n.map-tooltip { width:280px\\8; /* < IE9 */ }\n\n/* < IE8 */\n.leaflet-oldie .leaflet-control-zoom-in,\n.leaflet-oldie .leaflet-control-zoom-out,\n.leaflet-oldie .leaflet-popup-close-button,\n.leaflet-oldie .leaflet-control-layers-toggle,\n.leaflet-oldie .leaflet-container.dark .map-tooltip .close,\n.leaflet-oldie .map-tooltip .close,\n.leaflet-oldie .mapbox-icon {\n  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAEECAYAAAA24SSRAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAXnSURBVHic7ZxfiFVFGMB/33pRUQsKto002DY3McJ6yBYkESQxpYTypaB66KEXYRWLYOlhr9RTRGWRUkk9RyEU+Y9ClECJVTKlPybWBilqkYuWrqBOD/NdPV7PmTPn3NPtat/AcO6ZP9/vfN/Mmfl2Zs6Kc452hK62UAxkIANdEURkVERGC9crOjKIiANwzkmRep1lOjWXa2ijaU7jaGWgKsL110a1EnV+LQMqbLqyobO6t4EMZCADGchABrqmQUlPNSWOVgaqIpi7ZSADGchABjKQga49kIjURaQem14apGE4KVR/D0fXds5FRaAOOL1e+h1dP7ZgE6wQxDnXvs7QWaZLE1wUVmRNdY1zrp6wRF0kfqHYnHwDGchABjJQIETNRyIyFVgBzAPmavIIsAt4xzn3d66QiNl1PnCYy05JczwMzG9pKlfIhQCkES/kwUKQqRma9GpM02xqGXdrBdCXZm2NzaFP66SGUGeYl5E+WqJO0HRHSG+PXtJN54AjVbhbjQcbBSjiakH4hR0p+hChOiHQrhKg7Drt6t7//Qtb9RAU5XtXMaiak28gAxnIQO0Gicg0EXlMRDaIyFGNGzRtWhQpMA/1A6uAL4BzZM9H57TMKqC/8HyUPFhZJLiMI4sh0/UDK4FtwHig3LiWWal1UkPsDDsFWAgsBZZo8hZgM7DdOXcmV0igjQ4Ba4HFwORAuclaZi1wqNU2OgNsVw22aNoS1XAhMCXx4OkubOBJZwKDwFbgLNm97qyWGQRmtuoFWRsV0ujabCPzVA1kIAMZqBNAIjIgImPNRxUzK+SsmtRJn4Pqmj8AjCXzsmTlaTSck/8zcDRX/QiNMp8S6Ab2a5nvG5plyioDaoLs1/sBYKwyUBokkTdQJeiVZgi6UR+UVQI0QWHdoXKFvKDYz7RiynXctk7LPlmeRmsKyAqWNQfSQAYykIGuS5CI1ERkSET2ishpvQ6JSLE93ByfoQbsRHeNgfe4vOO8E6iF6hdxToZU6OqGUIWv1vShqkB7VYNaU3pN0/fGgvLa6C5gk3PufJO5zwObgDuraqM8jbZWpdEnwG3AYKOX6XVQ07+sSqNQr3P4QxS9LXeGBGxIzTiGXwR8QSHRsCj7ZjxAbxFYaVAKbMe/BkrAduRpZJ6qgQxkoP8DKDRY1sk/s5W6YFhoUG3nFnZeOIJfxLgXWB7zBFmmyzPT44my9zXSC098OZCTwCQttzOZVzVoX1a5LHmdtYyWDM29yjknItKF3xSelFWvKo1mhCClQLo1sC95T8T/ebr+xrqOABVZT82tY56qgQxkIAN1CkhEulsGiUi3iCzKyJsjIpuBYyLyo4isFpHXReTuTFLAr1sOnAeeT8nbzNW+3rfAM2UcyAcSQj4FngR68Ot0F1NA24CuMqBu4PMUgYdS0hzwYqlFJ+AeNV3s30aLSoEUtjEScoHE3nkZ0Ay1fR7o3ZCcGNAEYHcO5A/g5pZACpsMPEf6UexTwCN5MvI6w2zgaeBt4HQK5BsC57ubY+jPll/wHzn1Ayc07QD+u6MR4GPn3LlA/SuCOZAGMpCBDFRhiF50EpFl+PP49wOzgIPAHmCLc+6zXAERE18P+b7DRqAnJCfvfF0P/mTgLZr0l97vB27CL3HO0rwTwBzn3PHCGiU0uQisA6bhzT0T/T4ZeAr4s6FZmal8WcI0LwETgdfwHzY1XKz3teyjibLLioLWa8UDeG/oZbxD+QHwdULwg1r+K71fXxQ0ohXfAgS/Mvyh5i1MgNZp2qt6P5ImL/QezdbrSeAG4EbVJJkH8LteJ+p1FikhBPpNr3Odc6fUNHdo2oJEucbX8Y2zDQeLgr7T62IReRb4AX9mGGC6Xo8Bu0VkOvCQpu1JlRZoo6Vc/WL2ad4C4A28CWvAR5TtdU0dwqH/ewHvHi8HbgUexh+euDRCFH6PVOh0/FKzw3um4M8zpA1DxwkMQzFjXR9+d/9N1WI8BZI71kU56Aq8HXgC+Ak/5o3gX+rUNmmO5nsbqP2gfwCyvJzPNoKXiAAAAABJRU5ErkJggg==');\n}\n.leaflet-oldie .mapbox-button-icon:before,\n.leaflet-oldie .leaflet-container.dark .leaflet-control-zoom-in,\n.leaflet-oldie .leaflet-container.dark .leaflet-control-zoom-out,\n.leaflet-oldie .leaflet-container.dark .leaflet-control-layers-toggle,\n.leaflet-oldie .leaflet-container.dark .mapbox-icon {\n  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAEECAYAAAA24SSRAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAXYSURBVHic7ZxfiFVFHMc/a4uKWtDDtqJGZprYgwX5ByTdkkLbSgghCiKih14EBYtg6aEr9RRREKRUUs9hGEVtChKaYMkq2VqWmnUX2tKiNDNZY/Xbw/wue7x7zsw559626zY/GM6df7/P+c3MPfO7M3NumyTGQiaMCSWCIiiC6qVqoZC0lXgy1Cq0FanUck1XxVmSNL8WrzYT1LCMvz5qL1FnoAyoTNOVkpYb3hEUQREUQREUQRF0RYOqjHim9aHaTFDDEt2tCIqgCIqgCIqgCLoiQRULedNLgwCeq1NasbR8IilvqMhJpe5zrvpFQElYIYiksRsMLdd0aYoLwYqsqW5i9KjLLdHJj6AIiqAIiiCP5J2PpgLrgGXAYkvrA/YBrwF/BTXkmB2XSzqhbDlhZRqaypdLuuiB1ORiCOaDTM2wZLaFNMumZunzDYZ1wJy01ubyPfOazLE6qeIbDMsy0qsl6ngtWpyRfqOFInVKbWFXS9TxWtRXQl9mHR9oXwlQdp2xGt4t8YVt6iMor+/d8EM1OvkRFEERFEH/AWga8CCwFfjJwlZLm5ZHge/pPQ+4z8IKYGJGub+BT4GPLBwvCio7f6QeWfQ13TxgA7ATGPKUG7IyG6xOOj3nxDcFWAl0A/da2sdAL/AJcD6kwAc6bop6gT1kWzUZ6LKb6CbDqrx9dB535704S8BZ1o2zdEpSZ1HQ3MRddtmdp8kQzuKa9d8VBSUl9lEh0Pjro6ZKy00TERRBERRBLQZaCpxh9FHFUqBKiiJZ+n5gFfBHnrsKgUKb7t/j/PCwBNZwapKW1yGp3/KPSDrjKVsalIT0W3ypwZoGSoPU8pY2E/RCCqSiwJ55GdBVBusIlCu0Xpf3Na1guZbb1mnYJwtZtKmALm/Z6EBGUARFUASNV1A70AMcBP60aw9F93ADPkO7pD3mDwxKesOusvT2QP3czkmPKd2YUNpucVl+LlBo4jsITAduAIbrmnMAOAncnqflQn10M26JebgufdjSb8oDyQM6hlv3ru/4dkv/vFmgd4EZwPoErN3iM4BdeUGNjDpJqsrtmzc86mqwHkkH5X4t7JD0tEFyw3INzYwwuwisEVA9bPe/CarBdocsip5qBEVQBP3fQRWyX4jOCpUsZS2xhR2SQdwixq3A2lDhMkcTa7Ie2G6fwzfsmax8clrSJCu3py4vVV/ZphsALtjnFXkqtNwyWlLqR1Ub7obPA5OyKjXLolk+SFmQgEN18eD/PLXEI2j8gYqspwbrRE81giIogiKohUAdzQB1APdk5C3Ends6CXwLbAReBm7J1OZxINdKGpb0VEpeb4pT+aWkx8os0SxJKHlf0iOSOiXNkHQpBbRT0oQyoA5JH6YoPJ6SJknPeHR5+6gTWJ2SPjej/BceXV7QV8AHvsoJucTlvt5o8ZkraZa1fUheD+gJfo9+Bq4JlPkNt4Xgl9CdSJos6UlJF1IsOSvp/hw6vL8mFgCLgCXA44w+730IeIiM89314gP9ACzHHXD9xdIO49476gO2MfJjLCjRgYygCIqgCGqiFFl0WoM7j78ImA8cBQ7gzuaHp/wck1anpO2BqXy7lSu9I9YJ9APXWfycxfuBa4HbzDpwc9ZC4FQZi2qWXJK0WdI0ue3SuRp5P/lRSb8nLCvsQK5JNM2zkiZKeknSkKVdlPSmlX0gUXZNUdAWq3hY7tzj83K++FuS9icU32Hl91p8S1FQn1V8VVKb3Mrw25a3MgHabGkvWrwvTZ/ve7TArqeBq3H+3f66PIBf7VrzkuaTIj7Qj3ZdDJwF9jLy5wJdiXK1t+NrZxuOFgV9bddVwBPAN8ARS5tp15PAZxa/29IOpGrz9FG3Rsscy+uS9IqkBXLD/Z1GRl1yQEjuHANy7vFaSdMlrZa0K1Gm1PcISTMlDZiSbZa2I8VSSTolz2Mo9PQeBO7CvTE1iDtRc2dKuffwPX4CfVQfrpf0sKRjks5Zs27J6pP6EH3vCBp70D8db2VXFPfIagAAAABJRU5ErkJggg==');\n}\n\n.leaflet-oldie .mapbox-logo-true {\n  background-image: none;\n}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAIICAMAAAAWgT0mAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPpP6I0AAAAfdFJOUwDYoAgNNvSA4/u3mcTrUb5VQCByjBcoRwJMrs9nfF29SYbmAAAFH0lEQVR42u2c55qrIBCGY8HeYkliC/d/l0cRlRjFgbO7z5b5fiV5fAUGhHEYcrmgUKhfpIDSQBmig/44FNAXBeAyRH0epFU97Nz/fzRQKBQKhUKhvrnv/0t9WBQKhUKhUKhvLdfd/yxlKHX3Pp9B85XCRzClwCwXKzH8ckVmolQZTrmXz4d0qqdjCB2T63Su1jDSGrBajwYKhUKhUEoibmo4jpG6BIwkxhqfMhIQkkevYa0oP2eu8TaAFl9PGZ++yT+h8pjuKJbXcG3P/XK5r+2S2u01FLh+k9nQOIIMSZ8K7XipHqXkzGHb07EPkh5DKaRJ2+odN8qhR4agzsdCxjFkgAyxgVKQyTeQC+rcDUQ+dhjpDVitR0PvIdR63PUmFr0pTG+y1JyWUSgUCgXW46FKVM8mjptnpeBg9xFfpfyoh8zmdhJ6r0uNFya2jLgVqb+3fPppcTuEqEQfC+VF4OwBTlBI11CrfjdEbQEsuNpDaoFdy5/ZevanyvtuTax7acis5wTdps15x6xzZnKjvPICrWtpwPvJabo87xoH+wn76Rv3EwqFQqG+SnakmJm4pWSXua+RrJWCMRtKAr3HKZ9qEGMyHwaJ3xdGAWKM/4xUoInJmDWg0MwwGwKhlRkpGCQyAwWC7itztrm9QmPjOXO2jS5Uz4543U7HuHiBfb+oQ7Lffhqk9HKnDbmqew3HFOZIoFAo1N8Q6RvPa3qVrTHbnBcLExyOIEK0xAMWZo9MWFdVHY4UrKyhbh7fgbwOvAmq3HD7ZdfyKt/8XdQPdVu/DTXsAVBDab1+qyltANDQDCFGXg0N1IFineq1OoYIP8vk2841NIYR1MMhno5ftD4ahoo3NT6EcRsS7pJp5RR/f0rZtXS13FFM80WhUChQkEA6x2olMn7dbvj7pW2fXJNQDSpY5kKmBHG/UgnybQ2I+TjPVs0QzKs0FK1nir/9BmjjDitDlk5JNx2o/tP99Fsg9xgCT7EChG4sCoVC/VjZJLudpsVaL4FNqxz3dOPnxXqaknyyOhIoq53PUTi0k5RUUoEq10WnzLJjKKXUu88Framxvp9aspLGtaxaQn3L+R1Zilw93ThIHtxH5pJmyVlzYoPTNqYASbOKM2Ls5vhK+yqgu5mC8mBsv/9GIw/72t4u1J0EEfeO/fhn2dW5+d6q06C5G72V5Z/mMpL3vGpApDjbUi0oy7J5aZUDTLTMhGbFoIj04yoeZfLOyyGu2Yp180vIvsYtFMzgmNC80aorm9aJjQCWm4pCoVCor9CDlNO51JJAj05ZhbhAFaA5PdmeUwAcnHU18sLMPZfFBJXjt2FHKtKVLaAsfpC6XZfnzjk7SG0xG/j9aOfqnpHRcDk7Zu4d27Bgdx33wztvWakn16w47NOYt7pa/nvUsPnZ6viol5mDPKY3NOPivhrOlJ1DL3k9MpZPcY9np5el7JbHvjzbdh/s/Lywvfrp+012tt6YQtcPZ3Impz4b8IcvOfLuTJ7xjZ9VT+cz7Lbs/wLiqQ3VdFvLmb1/IoMifmePxdevS6Q9k53IN/kwG6xlz066ObvrqcyXj8f6jbdt5iY9PJnJp0P77a1mzm4zF9TJ/2Sg5e9YrJtIS33zMY/iw2G0ZGvT6eQSGXvLnsZhcTwLeetrDHdF8+nlSPJoXBJ/fo2xfaMgpJj9benkUsx1SVSmlpIP0lDpFWV8jb4trYMGVAdT26sdYZPlYMNC+FMI4LTM3vN6M4qVFgAU6iv0D5QnfMaZoP9/AAAAAElFTkSuQmCC"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAIICAMAAAAWgT0mAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURQAAAP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3wlHLoAAAAfdFJOUwDYoAgNNvSA4/u3mcTrUb5VQCByjBcoRwJMrs9nfF29SYbmAAAFH0lEQVR42u2c55qrIBCGY8HeYkliC/d/l0cRlRjFgbO7z5b5fiV5fAUGhHEYcrmgUKhfpIDSQBmig/44FNAXBeAyRH0epFU97Nz/fzRQKBQKhUKhvrnv/0t9WBQKhUKhUKhvLdfd/yxlKHX3Pp9B85XCRzClwCwXKzH8ckVmolQZTrmXz4d0qqdjCB2T63Su1jDSGrBajwYKhUKhUEoibmo4jpG6BIwkxhqfMhIQkkevYa0oP2eu8TaAFl9PGZ++yT+h8pjuKJbXcG3P/XK5r+2S2u01FLh+k9nQOIIMSZ8K7XipHqXkzGHb07EPkh5DKaRJ2+odN8qhR4agzsdCxjFkgAyxgVKQyTeQC+rcDUQ+dhjpDVitR0PvIdR63PUmFr0pTG+y1JyWUSgUCgXW46FKVM8mjptnpeBg9xFfpfyoh8zmdhJ6r0uNFya2jLgVqb+3fPppcTuEqEQfC+VF4OwBTlBI11CrfjdEbQEsuNpDaoFdy5/ZevanyvtuTax7acis5wTdps15x6xzZnKjvPICrWtpwPvJabo87xoH+wn76Rv3EwqFQqG+SnakmJm4pWSXua+RrJWCMRtKAr3HKZ9qEGMyHwaJ3xdGAWKM/4xUoInJmDWg0MwwGwKhlRkpGCQyAwWC7itztrm9QmPjOXO2jS5Uz4543U7HuHiBfb+oQ7Lffhqk9HKnDbmqew3HFOZIoFAo1N8Q6RvPa3qVrTHbnBcLExyOIEK0xAMWZo9MWFdVHY4UrKyhbh7fgbwOvAmq3HD7ZdfyKt/8XdQPdVu/DTXsAVBDab1+qyltANDQDCFGXg0N1IFineq1OoYIP8vk2841NIYR1MMhno5ftD4ahoo3NT6EcRsS7pJp5RR/f0rZtXS13FFM80WhUChQkEA6x2olMn7dbvj7pW2fXJNQDSpY5kKmBHG/UgnybQ2I+TjPVs0QzKs0FK1nir/9BmjjDitDlk5JNx2o/tP99Fsg9xgCT7EChG4sCoVC/VjZJLudpsVaL4FNqxz3dOPnxXqaknyyOhIoq53PUTi0k5RUUoEq10WnzLJjKKXUu88Framxvp9aspLGtaxaQn3L+R1Zilw93ThIHtxH5pJmyVlzYoPTNqYASbOKM2Ls5vhK+yqgu5mC8mBsv/9GIw/72t4u1J0EEfeO/fhn2dW5+d6q06C5G72V5Z/mMpL3vGpApDjbUi0oy7J5aZUDTLTMhGbFoIj04yoeZfLOyyGu2Yp180vIvsYtFMzgmNC80aorm9aJjQCWm4pCoVCor9CDlNO51JJAj05ZhbhAFaA5PdmeUwAcnHU18sLMPZfFBJXjt2FHKtKVLaAsfpC6XZfnzjk7SG0xG/j9aOfqnpHRcDk7Zu4d27Bgdx33wztvWakn16w47NOYt7pa/nvUsPnZ6viol5mDPKY3NOPivhrOlJ1DL3k9MpZPcY9np5el7JbHvjzbdh/s/Lywvfrp+012tt6YQtcPZ3Impz4b8IcvOfLuTJ7xjZ9VT+cz7Lbs/wLiqQ3VdFvLmb1/IoMifmePxdevS6Q9k53IN/kwG6xlz066ObvrqcyXj8f6jbdt5iY9PJnJp0P77a1mzm4zF9TJ/2Sg5e9YrJtIS33zMY/iw2G0ZGvT6eQSGXvLnsZhcTwLeetrDHdF8+nlSPJoXBJ/fo2xfaMgpJj9benkUsx1SVSmlpIP0lDpFWV8jb4trYMGVAdT26sdYZPlYMNC+FMI4LTM3vN6M4qVFgAU6iv0D5QnfMaZoP9/AAAAAElFTkSuQmCC"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mapbox = __webpack_require__(13);

	var _mapbox2 = _interopRequireDefault(_mapbox);

	var _mapbox3 = __webpack_require__(82);

	var _mapbox4 = __webpack_require__(83);

	var _mapbox5 = _interopRequireDefault(_mapbox4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  attached: function attached() {
	    this.client = new _mapbox2.default(_mapbox3.MAPBOX_API_KEY);
	    L.mapbox.accessToken = _mapbox3.MAPBOX_API_KEY;
	    this.map = L.mapbox.map(this.$el.querySelector('.map'), 'russellvea2.nl7ij7em');
	    this.map.setZoom(9);
	  },
	  data: function data() {
	    return {
	      msg: 'Hello, World'
	    };
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var makeClient = __webpack_require__(14);
	var xtend = __webpack_require__(69);
	var MapboxGeocoder = __webpack_require__(70);
	var MapboxSurface = __webpack_require__(71);
	var MapboxDirections = __webpack_require__(74);
	var MapboxUploads = __webpack_require__(75);
	var MapboxMatching = __webpack_require__(76);
	var MapboxDatasets = __webpack_require__(78);
	var MapboxDistance = __webpack_require__(80);
	var MapboxTilestats = __webpack_require__(81);

	/**
	 * The JavaScript API to Mapbox services
	 *
	 * @class
	 * @throws {Error} if accessToken is not provided
	 * @param {string} accessToken a private or public access token
	 * @param {Object} options additional options provided for configuration
	 * @param {string} [options.endpoint=https://api.mapbox.com] location
	 * of the Mapbox API pointed-to. This can be customized to point to a
	 * Mapbox Atlas Server instance, or a different service, a mock,
	 * or a staging endpoint. Usually you don't need to customize this.
	 * @param {string} [options.account] account id to use for api
	 * requests. If not is specified, the account defaults to the owner
	 * of the provided accessToken.
	 * @example
	 * var client = new MapboxClient('ACCESSTOKEN');
	 */
	var MapboxClient = makeClient('MapboxClient');

	// Combine all client APIs into one API for when people require()
	// the main mapbox-sdk-js library.
	xtend(
	  MapboxClient.prototype,
	  MapboxGeocoder.prototype,
	  MapboxSurface.prototype,
	  MapboxDirections.prototype,
	  MapboxDistance.prototype,
	  MapboxMatching.prototype,
	  MapboxDatasets.prototype,
	  MapboxUploads.prototype,
	  MapboxTilestats.prototype
	);

	module.exports = MapboxClient;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(15);
	var constants = __webpack_require__(19);
	var client = __webpack_require__(20);
	var getUser = __webpack_require__(67);

	/**
	 * Services all have the same constructor pattern: you initialize them
	 * with an access token and options, and they validate those arguments
	 * in a predictable way. This is a constructor-generator that makes
	 * it possible to require each service's API individually.
	 *
	 * @private
	 * @param {string} name the name of the Mapbox API this class will access:
	 * this is set to the name of the function so it will show up in tracebacks
	 * @returns {Function} constructor function
	 */
	function makeService(name) {

	  function service(accessToken, options) {
	    this.name = name;

	    assert(typeof accessToken === 'string',
	      'accessToken required to instantiate Mapbox client');

	    var endpoint = constants.DEFAULT_ENDPOINT;

	    if (options !== undefined) {
	      assert(typeof options === 'object', 'options must be an object');
	      if (options.endpoint) {
	        assert(typeof options.endpoint === 'string', 'endpoint must be a string');
	        endpoint = options.endpoint;
	      }
	      if (options.account) {
	        assert(typeof options.account === 'string', 'account must be a string');
	        this.owner = options.account;
	      }
	    }

	    this.client = client({
	      endpoint: endpoint,
	      accessToken: accessToken
	    });

	    this.accessToken = accessToken;
	    this.endpoint = endpoint;
	    this.owner = this.owner || getUser(accessToken);
	    assert(!!this.owner, 'could not determine account from provided accessToken');

	  }

	  return service;
	}

	module.exports = makeService;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Originally from narwhal.js (http://narwhaljs.org)
	// Copyright (c) 2009 Thomas Robinson <280north.com>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	// when used in node, this will actually load the util module we depend on
	// versus loading the builtin util module as happens otherwise
	// this is a bug in node module loading as far as I am concerned
	var util = __webpack_require__(16);

	var pSlice = Array.prototype.slice;
	var hasOwn = Object.prototype.hasOwnProperty;

	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.

	var assert = module.exports = ok;

	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })

	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;

	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  }
	  else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;

	      // try to strip useless frames
	      var fn_name = stackStartFunction.name;
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }

	      this.stack = out;
	    }
	  }
	};

	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);

	function replacer(key, value) {
	  if (util.isUndefined(value)) {
	    return '' + value;
	  }
	  if (util.isNumber(value) && !isFinite(value)) {
	    return value.toString();
	  }
	  if (util.isFunction(value) || util.isRegExp(value)) {
	    return value.toString();
	  }
	  return value;
	}

	function truncate(s, n) {
	  if (util.isString(s)) {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}

	function getMessage(self) {
	  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(JSON.stringify(self.expected, replacer), 128);
	}

	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.

	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.

	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}

	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;

	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.

	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;

	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);

	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};

	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);

	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};

	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);

	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};

	function _deepEqual(actual, expected) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
	    if (actual.length != expected.length) return false;

	    for (var i = 0; i < actual.length; i++) {
	      if (actual[i] !== expected[i]) return false;
	    }

	    return true;

	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (util.isDate(actual) && util.isDate(expected)) {
	    return actual.getTime() === expected.getTime();

	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;

	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!util.isObject(actual) && !util.isObject(expected)) {
	    return actual == expected;

	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected);
	  }
	}

	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}

	function objEquiv(a, b) {
	  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  // if one is a primitive, the other must be same
	  if (util.isPrimitive(a) || util.isPrimitive(b)) {
	    return a === b;
	  }
	  var aIsArgs = isArguments(a),
	      bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b);
	  }
	  var ka = objectKeys(a),
	      kb = objectKeys(b),
	      key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key])) return false;
	  }
	  return true;
	}

	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);

	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};

	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);

	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};

	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};

	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }

	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  } else if (actual instanceof expected) {
	    return true;
	  } else if (expected.call({}, actual) === true) {
	    return true;
	  }

	  return false;
	}

	function _throws(shouldThrow, block, expected, message) {
	  var actual;

	  if (util.isString(expected)) {
	    message = expected;
	    expected = null;
	  }

	  try {
	    block();
	  } catch (e) {
	    actual = e;
	  }

	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');

	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }

	  if (!shouldThrow && expectedException(actual, expected)) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }

	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}

	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);

	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws.apply(this, [true].concat(pSlice.call(arguments)));
	};

	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/message) {
	  _throws.apply(this, [false].concat(pSlice.call(arguments)));
	};

	assert.ifError = function(err) { if (err) {throw err;}};

	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(17);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(18);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 19 */
/***/ function(module, exports) {

	// We keep all of the constants that declare endpoints in one
	// place, so that we could concievably update this for API layout
	// revisions.
	module.exports.DEFAULT_ENDPOINT = 'https://api.mapbox.com';
	module.exports.API_GEOCODER_FORWARD = '/geocoding/v5/{dataset}/{query}.json{?proximity}';
	module.exports.API_GEOCODER_REVERSE = '/geocoding/v5/{dataset}/{longitude},{latitude}.json';
	module.exports.API_DIRECTIONS = '/v4/directions/{profile}/{encodedWaypoints}.json{?alternatives,instructions,geometry,steps}';
	module.exports.API_DISTANCE = '/distances/v1/mapbox/{profile}';
	module.exports.API_SURFACE = '/v4/surface/{mapid}.json{?layer,fields,points,geojson,interpolate,encoded_polyline}';
	module.exports.API_UPLOADS = '/uploads/v1/{owner}';
	module.exports.API_UPLOAD = '/uploads/v1/{owner}/{upload}';
	module.exports.API_UPLOAD_CREDENTIALS = '/uploads/v1/{owner}/credentials';
	module.exports.API_MATCHING = '/matching/v4/{profile}.json';
	module.exports.API_DATASET_DATASETS = '/datasets/v1/{owner}';
	module.exports.API_DATASET_DATASET = '/datasets/v1/{owner}/{dataset}';
	module.exports.API_DATASET_FEATURES = '/datasets/v1/{owner}/{dataset}/features';
	module.exports.API_DATASET_FEATURE = '/datasets/v1/{owner}/{dataset}/features/{id}';
	module.exports.API_TILESTATS_STATISTICS = '/tilestats/v1/{owner}/{tileset}';
	module.exports.API_TILESTATS_LAYER = '/tilestats/v1/{owner}/{tileset}/{layer}';
	module.exports.API_TILESTATS_ATTRIBUTE = '/tilestats/v1/{owner}/{tileset}/{layer}/{attribute}';
	module.exports.API_STATIC = '/v4/{mapid}{+overlay}/{+xyz}/{width}x{height}{+retina}{.format}';


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var rest = __webpack_require__(21);
	var callbackify = __webpack_require__(49);

	// rest.js client with MIME support
	module.exports = function(config) {
	  return rest
	    .wrap(__webpack_require__(51))
	    .wrap(__webpack_require__(52), { prefix: config.endpoint })
	    .wrap(__webpack_require__(53), { mime: 'application/json' })
	    .wrap(__webpack_require__(66), {
	      params: { access_token: config.accessToken }
	    })
	    .wrap(__webpack_require__(57))
	    .wrap(callbackify);
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2014 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var rest = __webpack_require__(22),
			    browser = __webpack_require__(25);

			rest.setPlatformDefaultClient(browser);

			return rest;

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2014 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		var undef;

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			/**
			 * Plain JS Object containing properties that represent an HTTP request.
			 *
			 * Depending on the capabilities of the underlying client, a request
			 * may be cancelable. If a request may be canceled, the client will add
			 * a canceled flag and cancel function to the request object. Canceling
			 * the request will put the response into an error state.
			 *
			 * @field {string} [method='GET'] HTTP method, commonly GET, POST, PUT, DELETE or HEAD
			 * @field {string|UrlBuilder} [path=''] path template with optional path variables
			 * @field {Object} [params] parameters for the path template and query string
			 * @field {Object} [headers] custom HTTP headers to send, in addition to the clients default headers
			 * @field [entity] the HTTP entity, common for POST or PUT requests
			 * @field {boolean} [canceled] true if the request has been canceled, set by the client
			 * @field {Function} [cancel] cancels the request if invoked, provided by the client
			 * @field {Client} [originator] the client that first handled this request, provided by the interceptor
			 *
			 * @class Request
			 */

			/**
			 * Plain JS Object containing properties that represent an HTTP response
			 *
			 * @field {Object} [request] the request object as received by the root client
			 * @field {Object} [raw] the underlying request object, like XmlHttpRequest in a browser
			 * @field {number} [status.code] status code of the response (i.e. 200, 404)
			 * @field {string} [status.text] status phrase of the response
			 * @field {Object] [headers] response headers hash of normalized name, value pairs
			 * @field [entity] the response body
			 *
			 * @class Response
			 */

			/**
			 * HTTP client particularly suited for RESTful operations.
			 *
			 * @field {function} wrap wraps this client with a new interceptor returning the wrapped client
			 *
			 * @param {Request} the HTTP request
			 * @returns {ResponsePromise<Response>} a promise the resolves to the HTTP response
			 *
			 * @class Client
			 */

			 /**
			  * Extended when.js Promises/A+ promise with HTTP specific helpers
			  *q
			  * @method entity promise for the HTTP entity
			  * @method status promise for the HTTP status code
			  * @method headers promise for the HTTP response headers
			  * @method header promise for a specific HTTP response header
			  *
			  * @class ResponsePromise
			  * @extends Promise
			  */

			var client, target, platformDefault;

			client = __webpack_require__(23);

			/**
			 * Make a request with the default client
			 * @param {Request} the HTTP request
			 * @returns {Promise<Response>} a promise the resolves to the HTTP response
			 */
			function defaultClient() {
				return target.apply(undef, arguments);
			}

			/**
			 * Change the default client
			 * @param {Client} client the new default client
			 */
			defaultClient.setDefaultClient = function setDefaultClient(client) {
				target = client;
			};

			/**
			 * Obtain a direct reference to the current default client
			 * @returns {Client} the default client
			 */
			defaultClient.getDefaultClient = function getDefaultClient() {
				return target;
			};

			/**
			 * Reset the default client to the platform default
			 */
			defaultClient.resetDefaultClient = function resetDefaultClient() {
				target = platformDefault;
			};

			/**
			 * @private
			 */
			defaultClient.setPlatformDefaultClient = function setPlatformDefaultClient(client) {
				if (platformDefault) {
					throw new Error('Unable to redefine platformDefaultClient');
				}
				target = platformDefault = client;
			};

			return client(defaultClient);

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2014 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (/* require */) {

			/**
			 * Add common helper methods to a client impl
			 *
			 * @param {function} impl the client implementation
			 * @param {Client} [target] target of this client, used when wrapping other clients
			 * @returns {Client} the client impl with additional methods
			 */
			return function client(impl, target) {

				if (target) {

					/**
					 * @returns {Client} the target client
					 */
					impl.skip = function skip() {
						return target;
					};

				}

				/**
				 * Allow a client to easily be wrapped by an interceptor
				 *
				 * @param {Interceptor} interceptor the interceptor to wrap this client with
				 * @param [config] configuration for the interceptor
				 * @returns {Client} the newly wrapped client
				 */
				impl.wrap = function wrap(interceptor, config) {
					return interceptor(impl, config);
				};

				/**
				 * @deprecated
				 */
				impl.chain = function chain() {
					if (typeof console !== 'undefined') {
						console.log('rest.js: client.chain() is deprecated, use client.wrap() instead');
					}

					return impl.wrap.apply(this, arguments);
				};

				return impl;

			};

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012-2014 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define, global) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var when, UrlBuilder, normalizeHeaderName, responsePromise, client, headerSplitRE;

			when = __webpack_require__(26);
			UrlBuilder = __webpack_require__(45);
			normalizeHeaderName = __webpack_require__(47);
			responsePromise = __webpack_require__(48);
			client = __webpack_require__(23);

			// according to the spec, the line break is '\r\n', but doesn't hold true in practice
			headerSplitRE = /[\r|\n]+/;

			function parseHeaders(raw) {
				// Note: Set-Cookie will be removed by the browser
				var headers = {};

				if (!raw) { return headers; }

				raw.trim().split(headerSplitRE).forEach(function (header) {
					var boundary, name, value;
					boundary = header.indexOf(':');
					name = normalizeHeaderName(header.substring(0, boundary).trim());
					value = header.substring(boundary + 1).trim();
					if (headers[name]) {
						if (Array.isArray(headers[name])) {
							// add to an existing array
							headers[name].push(value);
						}
						else {
							// convert single value to array
							headers[name] = [headers[name], value];
						}
					}
					else {
						// new, single value
						headers[name] = value;
					}
				});

				return headers;
			}

			function safeMixin(target, source) {
				Object.keys(source || {}).forEach(function (prop) {
					// make sure the property already exists as
					// IE 6 will blow up if we add a new prop
					if (source.hasOwnProperty(prop) && prop in target) {
						try {
							target[prop] = source[prop];
						}
						catch (e) {
							// ignore, expected for some properties at some points in the request lifecycle
						}
					}
				});

				return target;
			}

			return client(function xhr(request) {
				return responsePromise.promise(function (resolve, reject) {
					/*jshint maxcomplexity:20 */

					var client, method, url, headers, entity, headerName, response, XMLHttpRequest;

					request = typeof request === 'string' ? { path: request } : request || {};
					response = { request: request };

					if (request.canceled) {
						response.error = 'precanceled';
						reject(response);
						return;
					}

					XMLHttpRequest = request.engine || global.XMLHttpRequest;
					if (!XMLHttpRequest) {
						reject({ request: request, error: 'xhr-not-available' });
						return;
					}

					entity = request.entity;
					request.method = request.method || (entity ? 'POST' : 'GET');
					method = request.method;
					url = new UrlBuilder(request.path || '', request.params).build();

					try {
						client = response.raw = new XMLHttpRequest();

						// mixin extra request properties before and after opening the request as some properties require being set at different phases of the request
						safeMixin(client, request.mixin);
						client.open(method, url, true);
						safeMixin(client, request.mixin);

						headers = request.headers;
						for (headerName in headers) {
							/*jshint forin:false */
							if (headerName === 'Content-Type' && headers[headerName] === 'multipart/form-data') {
								// XMLHttpRequest generates its own Content-Type header with the
								// appropriate multipart boundary when sending multipart/form-data.
								continue;
							}

							client.setRequestHeader(headerName, headers[headerName]);
						}

						request.canceled = false;
						request.cancel = function cancel() {
							request.canceled = true;
							client.abort();
							reject(response);
						};

						client.onreadystatechange = function (/* e */) {
							if (request.canceled) { return; }
							if (client.readyState === (XMLHttpRequest.DONE || 4)) {
								response.status = {
									code: client.status,
									text: client.statusText
								};
								response.headers = parseHeaders(client.getAllResponseHeaders());
								response.entity = client.responseText;

								if (response.status.code > 0) {
									// check status code as readystatechange fires before error event
									resolve(response);
								}
								else {
									// give the error callback a chance to fire before resolving
									// requests for file:// URLs do not have a status code
									setTimeout(function () {
										resolve(response);
									}, 0);
								}
							}
						};

						try {
							client.onerror = function (/* e */) {
								response.error = 'loaderror';
								reject(response);
							};
						}
						catch (e) {
							// IE 6 will not support error handling
						}

						client.send(entity);
					}
					catch (e) {
						response.error = 'loaderror';
						reject(response);
					}

				});
			});

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24),
		typeof window !== 'undefined' ? window : void 0
		// Boilerplate for AMD and Node
	));


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */

	/**
	 * Promises/A+ and when() implementation
	 * when is part of the cujoJS family of libraries (http://cujojs.com/)
	 * @author Brian Cavalier
	 * @author John Hann
	 */
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

		var timed = __webpack_require__(27);
		var array = __webpack_require__(31);
		var flow = __webpack_require__(34);
		var fold = __webpack_require__(35);
		var inspect = __webpack_require__(36);
		var generate = __webpack_require__(37);
		var progress = __webpack_require__(38);
		var withThis = __webpack_require__(39);
		var unhandledRejection = __webpack_require__(40);
		var TimeoutError = __webpack_require__(30);

		var Promise = [array, flow, fold, generate, progress,
			inspect, withThis, timed, unhandledRejection]
			.reduce(function(Promise, feature) {
				return feature(Promise);
			}, __webpack_require__(42));

		var apply = __webpack_require__(33)(Promise);

		// Public API

		when.promise     = promise;              // Create a pending promise
		when.resolve     = Promise.resolve;      // Create a resolved promise
		when.reject      = Promise.reject;       // Create a rejected promise

		when.lift        = lift;                 // lift a function to return promises
		when['try']      = attempt;              // call a function and return a promise
		when.attempt     = attempt;              // alias for when.try

		when.iterate     = Promise.iterate;      // DEPRECATED (use cujojs/most streams) Generate a stream of promises
		when.unfold      = Promise.unfold;       // DEPRECATED (use cujojs/most streams) Generate a stream of promises

		when.join        = join;                 // Join 2 or more promises

		when.all         = all;                  // Resolve a list of promises
		when.settle      = settle;               // Settle a list of promises

		when.any         = lift(Promise.any);    // One-winner race
		when.some        = lift(Promise.some);   // Multi-winner race
		when.race        = lift(Promise.race);   // First-to-settle race

		when.map         = map;                  // Array.map() for promises
		when.filter      = filter;               // Array.filter() for promises
		when.reduce      = lift(Promise.reduce);       // Array.reduce() for promises
		when.reduceRight = lift(Promise.reduceRight);  // Array.reduceRight() for promises

		when.isPromiseLike = isPromiseLike;      // Is something promise-like, aka thenable

		when.Promise     = Promise;              // Promise constructor
		when.defer       = defer;                // Create a {promise, resolve, reject} tuple

		// Error types

		when.TimeoutError = TimeoutError;

		/**
		 * Get a trusted promise for x, or by transforming x with onFulfilled
		 *
		 * @param {*} x
		 * @param {function?} onFulfilled callback to be called when x is
		 *   successfully fulfilled.  If promiseOrValue is an immediate value, callback
		 *   will be invoked immediately.
		 * @param {function?} onRejected callback to be called when x is
		 *   rejected.
		 * @param {function?} onProgress callback to be called when progress updates
		 *   are issued for x. @deprecated
		 * @returns {Promise} a new promise that will fulfill with the return
		 *   value of callback or errback or the completion value of promiseOrValue if
		 *   callback and/or errback is not supplied.
		 */
		function when(x, onFulfilled, onRejected, onProgress) {
			var p = Promise.resolve(x);
			if (arguments.length < 2) {
				return p;
			}

			return p.then(onFulfilled, onRejected, onProgress);
		}

		/**
		 * Creates a new promise whose fate is determined by resolver.
		 * @param {function} resolver function(resolve, reject, notify)
		 * @returns {Promise} promise whose fate is determine by resolver
		 */
		function promise(resolver) {
			return new Promise(resolver);
		}

		/**
		 * Lift the supplied function, creating a version of f that returns
		 * promises, and accepts promises as arguments.
		 * @param {function} f
		 * @returns {Function} version of f that returns promises
		 */
		function lift(f) {
			return function() {
				for(var i=0, l=arguments.length, a=new Array(l); i<l; ++i) {
					a[i] = arguments[i];
				}
				return apply(f, this, a);
			};
		}

		/**
		 * Call f in a future turn, with the supplied args, and return a promise
		 * for the result.
		 * @param {function} f
		 * @returns {Promise}
		 */
		function attempt(f /*, args... */) {
			/*jshint validthis:true */
			for(var i=0, l=arguments.length-1, a=new Array(l); i<l; ++i) {
				a[i] = arguments[i+1];
			}
			return apply(f, this, a);
		}

		/**
		 * Creates a {promise, resolver} pair, either or both of which
		 * may be given out safely to consumers.
		 * @return {{promise: Promise, resolve: function, reject: function, notify: function}}
		 */
		function defer() {
			return new Deferred();
		}

		function Deferred() {
			var p = Promise._defer();

			function resolve(x) { p._handler.resolve(x); }
			function reject(x) { p._handler.reject(x); }
			function notify(x) { p._handler.notify(x); }

			this.promise = p;
			this.resolve = resolve;
			this.reject = reject;
			this.notify = notify;
			this.resolver = { resolve: resolve, reject: reject, notify: notify };
		}

		/**
		 * Determines if x is promise-like, i.e. a thenable object
		 * NOTE: Will return true for *any thenable object*, and isn't truly
		 * safe, since it may attempt to access the `then` property of x (i.e.
		 *  clever/malicious getters may do weird things)
		 * @param {*} x anything
		 * @returns {boolean} true if x is promise-like
		 */
		function isPromiseLike(x) {
			return x && typeof x.then === 'function';
		}

		/**
		 * Return a promise that will resolve only once all the supplied arguments
		 * have resolved. The resolution value of the returned promise will be an array
		 * containing the resolution values of each of the arguments.
		 * @param {...*} arguments may be a mix of promises and values
		 * @returns {Promise}
		 */
		function join(/* ...promises */) {
			return Promise.all(arguments);
		}

		/**
		 * Return a promise that will fulfill once all input promises have
		 * fulfilled, or reject when any one input promise rejects.
		 * @param {array|Promise} promises array (or promise for an array) of promises
		 * @returns {Promise}
		 */
		function all(promises) {
			return when(promises, Promise.all);
		}

		/**
		 * Return a promise that will always fulfill with an array containing
		 * the outcome states of all input promises.  The returned promise
		 * will only reject if `promises` itself is a rejected promise.
		 * @param {array|Promise} promises array (or promise for an array) of promises
		 * @returns {Promise} promise for array of settled state descriptors
		 */
		function settle(promises) {
			return when(promises, Promise.settle);
		}

		/**
		 * Promise-aware array map function, similar to `Array.prototype.map()`,
		 * but input array may contain promises or values.
		 * @param {Array|Promise} promises array of anything, may contain promises and values
		 * @param {function(x:*, index:Number):*} mapFunc map function which may
		 *  return a promise or value
		 * @returns {Promise} promise that will fulfill with an array of mapped values
		 *  or reject if any input promise rejects.
		 */
		function map(promises, mapFunc) {
			return when(promises, function(promises) {
				return Promise.map(promises, mapFunc);
			});
		}

		/**
		 * Filter the provided array of promises using the provided predicate.  Input may
		 * contain promises and values
		 * @param {Array|Promise} promises array of promises and values
		 * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
		 *  Must return truthy (or promise for truthy) for items to retain.
		 * @returns {Promise} promise that will fulfill with an array containing all items
		 *  for which predicate returned truthy.
		 */
		function filter(promises, predicate) {
			return when(promises, function(promises) {
				return Promise.filter(promises, predicate);
			});
		}

		return when;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(24));


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

		var env = __webpack_require__(28);
		var TimeoutError = __webpack_require__(30);

		function setTimeout(f, ms, x, y) {
			return env.setTimer(function() {
				f(x, y, ms);
			}, ms);
		}

		return function timed(Promise) {
			/**
			 * Return a new promise whose fulfillment value is revealed only
			 * after ms milliseconds
			 * @param {number} ms milliseconds
			 * @returns {Promise}
			 */
			Promise.prototype.delay = function(ms) {
				var p = this._beget();
				this._handler.fold(handleDelay, ms, void 0, p._handler);
				return p;
			};

			function handleDelay(ms, x, h) {
				setTimeout(resolveDelay, ms, x, h);
			}

			function resolveDelay(x, h) {
				h.resolve(x);
			}

			/**
			 * Return a new promise that rejects after ms milliseconds unless
			 * this promise fulfills earlier, in which case the returned promise
			 * fulfills with the same value.
			 * @param {number} ms milliseconds
			 * @param {Error|*=} reason optional rejection reason to use, defaults
			 *   to a TimeoutError if not provided
			 * @returns {Promise}
			 */
			Promise.prototype.timeout = function(ms, reason) {
				var p = this._beget();
				var h = p._handler;

				var t = setTimeout(onTimeout, ms, reason, p._handler);

				this._handler.visit(h,
					function onFulfill(x) {
						env.clearTimer(t);
						this.resolve(x); // this = h
					},
					function onReject(x) {
						env.clearTimer(t);
						this.reject(x); // this = h
					},
					h.notify);

				return p;
			};

			function onTimeout(reason, h, ms) {
				var e = typeof reason === 'undefined'
					? new TimeoutError('timed out after ' + ms + 'ms')
					: reason;
				h.reject(e);
			}

			return Promise;
		};

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	/*global process,document,setTimeout,clearTimeout,MutationObserver,WebKitMutationObserver*/
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
		/*jshint maxcomplexity:6*/

		// Sniff "best" async scheduling option
		// Prefer process.nextTick or MutationObserver, then check for
		// setTimeout, and finally vertx, since its the only env that doesn't
		// have setTimeout

		var MutationObs;
		var capturedSetTimeout = typeof setTimeout !== 'undefined' && setTimeout;

		// Default env
		var setTimer = function(f, ms) { return setTimeout(f, ms); };
		var clearTimer = function(t) { return clearTimeout(t); };
		var asap = function (f) { return capturedSetTimeout(f, 0); };

		// Detect specific env
		if (isNode()) { // Node
			asap = function (f) { return process.nextTick(f); };

		} else if (MutationObs = hasMutationObserver()) { // Modern browser
			asap = initMutationObserver(MutationObs);

		} else if (!capturedSetTimeout) { // vert.x
			var vertxRequire = require;
			var vertx = __webpack_require__(29);
			setTimer = function (f, ms) { return vertx.setTimer(ms, f); };
			clearTimer = vertx.cancelTimer;
			asap = vertx.runOnLoop || vertx.runOnContext;
		}

		return {
			setTimer: setTimer,
			clearTimer: clearTimer,
			asap: asap
		};

		function isNode () {
			return typeof process !== 'undefined' &&
				Object.prototype.toString.call(process) === '[object process]';
		}

		function hasMutationObserver () {
			return (typeof MutationObserver === 'function' && MutationObserver) ||
				(typeof WebKitMutationObserver === 'function' && WebKitMutationObserver);
		}

		function initMutationObserver(MutationObserver) {
			var scheduled;
			var node = document.createTextNode('');
			var o = new MutationObserver(run);
			o.observe(node, { characterData: true });

			function run() {
				var f = scheduled;
				scheduled = void 0;
				f();
			}

			var i = 0;
			return function (f) {
				scheduled = f;
				node.data = (i ^= 1);
			};
		}
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 29 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

		/**
		 * Custom error type for promises rejected by promise.timeout
		 * @param {string} message
		 * @constructor
		 */
		function TimeoutError (message) {
			Error.call(this);
			this.message = message;
			this.name = TimeoutError.name;
			if (typeof Error.captureStackTrace === 'function') {
				Error.captureStackTrace(this, TimeoutError);
			}
		}

		TimeoutError.prototype = Object.create(Error.prototype);
		TimeoutError.prototype.constructor = TimeoutError;

		return TimeoutError;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

		var state = __webpack_require__(32);
		var applier = __webpack_require__(33);

		return function array(Promise) {

			var applyFold = applier(Promise);
			var toPromise = Promise.resolve;
			var all = Promise.all;

			var ar = Array.prototype.reduce;
			var arr = Array.prototype.reduceRight;
			var slice = Array.prototype.slice;

			// Additional array combinators

			Promise.any = any;
			Promise.some = some;
			Promise.settle = settle;

			Promise.map = map;
			Promise.filter = filter;
			Promise.reduce = reduce;
			Promise.reduceRight = reduceRight;

			/**
			 * When this promise fulfills with an array, do
			 * onFulfilled.apply(void 0, array)
			 * @param {function} onFulfilled function to apply
			 * @returns {Promise} promise for the result of applying onFulfilled
			 */
			Promise.prototype.spread = function(onFulfilled) {
				return this.then(all).then(function(array) {
					return onFulfilled.apply(this, array);
				});
			};

			return Promise;

			/**
			 * One-winner competitive race.
			 * Return a promise that will fulfill when one of the promises
			 * in the input array fulfills, or will reject when all promises
			 * have rejected.
			 * @param {array} promises
			 * @returns {Promise} promise for the first fulfilled value
			 */
			function any(promises) {
				var p = Promise._defer();
				var resolver = p._handler;
				var l = promises.length>>>0;

				var pending = l;
				var errors = [];

				for (var h, x, i = 0; i < l; ++i) {
					x = promises[i];
					if(x === void 0 && !(i in promises)) {
						--pending;
						continue;
					}

					h = Promise._handler(x);
					if(h.state() > 0) {
						resolver.become(h);
						Promise._visitRemaining(promises, i, h);
						break;
					} else {
						h.visit(resolver, handleFulfill, handleReject);
					}
				}

				if(pending === 0) {
					resolver.reject(new RangeError('any(): array must not be empty'));
				}

				return p;

				function handleFulfill(x) {
					/*jshint validthis:true*/
					errors = null;
					this.resolve(x); // this === resolver
				}

				function handleReject(e) {
					/*jshint validthis:true*/
					if(this.resolved) { // this === resolver
						return;
					}

					errors.push(e);
					if(--pending === 0) {
						this.reject(errors);
					}
				}
			}

			/**
			 * N-winner competitive race
			 * Return a promise that will fulfill when n input promises have
			 * fulfilled, or will reject when it becomes impossible for n
			 * input promises to fulfill (ie when promises.length - n + 1
			 * have rejected)
			 * @param {array} promises
			 * @param {number} n
			 * @returns {Promise} promise for the earliest n fulfillment values
			 *
			 * @deprecated
			 */
			function some(promises, n) {
				/*jshint maxcomplexity:7*/
				var p = Promise._defer();
				var resolver = p._handler;

				var results = [];
				var errors = [];

				var l = promises.length>>>0;
				var nFulfill = 0;
				var nReject;
				var x, i; // reused in both for() loops

				// First pass: count actual array items
				for(i=0; i<l; ++i) {
					x = promises[i];
					if(x === void 0 && !(i in promises)) {
						continue;
					}
					++nFulfill;
				}

				// Compute actual goals
				n = Math.max(n, 0);
				nReject = (nFulfill - n + 1);
				nFulfill = Math.min(n, nFulfill);

				if(n > nFulfill) {
					resolver.reject(new RangeError('some(): array must contain at least '
					+ n + ' item(s), but had ' + nFulfill));
				} else if(nFulfill === 0) {
					resolver.resolve(results);
				}

				// Second pass: observe each array item, make progress toward goals
				for(i=0; i<l; ++i) {
					x = promises[i];
					if(x === void 0 && !(i in promises)) {
						continue;
					}

					Promise._handler(x).visit(resolver, fulfill, reject, resolver.notify);
				}

				return p;

				function fulfill(x) {
					/*jshint validthis:true*/
					if(this.resolved) { // this === resolver
						return;
					}

					results.push(x);
					if(--nFulfill === 0) {
						errors = null;
						this.resolve(results);
					}
				}

				function reject(e) {
					/*jshint validthis:true*/
					if(this.resolved) { // this === resolver
						return;
					}

					errors.push(e);
					if(--nReject === 0) {
						results = null;
						this.reject(errors);
					}
				}
			}

			/**
			 * Apply f to the value of each promise in a list of promises
			 * and return a new list containing the results.
			 * @param {array} promises
			 * @param {function(x:*, index:Number):*} f mapping function
			 * @returns {Promise}
			 */
			function map(promises, f) {
				return Promise._traverse(f, promises);
			}

			/**
			 * Filter the provided array of promises using the provided predicate.  Input may
			 * contain promises and values
			 * @param {Array} promises array of promises and values
			 * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
			 *  Must return truthy (or promise for truthy) for items to retain.
			 * @returns {Promise} promise that will fulfill with an array containing all items
			 *  for which predicate returned truthy.
			 */
			function filter(promises, predicate) {
				var a = slice.call(promises);
				return Promise._traverse(predicate, a).then(function(keep) {
					return filterSync(a, keep);
				});
			}

			function filterSync(promises, keep) {
				// Safe because we know all promises have fulfilled if we've made it this far
				var l = keep.length;
				var filtered = new Array(l);
				for(var i=0, j=0; i<l; ++i) {
					if(keep[i]) {
						filtered[j++] = Promise._handler(promises[i]).value;
					}
				}
				filtered.length = j;
				return filtered;

			}

			/**
			 * Return a promise that will always fulfill with an array containing
			 * the outcome states of all input promises.  The returned promise
			 * will never reject.
			 * @param {Array} promises
			 * @returns {Promise} promise for array of settled state descriptors
			 */
			function settle(promises) {
				return all(promises.map(settleOne));
			}

			function settleOne(p) {
				var h = Promise._handler(p);
				if(h.state() === 0) {
					return toPromise(p).then(state.fulfilled, state.rejected);
				}

				h._unreport();
				return state.inspect(h);
			}

			/**
			 * Traditional reduce function, similar to `Array.prototype.reduce()`, but
			 * input may contain promises and/or values, and reduceFunc
			 * may return either a value or a promise, *and* initialValue may
			 * be a promise for the starting value.
			 * @param {Array|Promise} promises array or promise for an array of anything,
			 *      may contain a mix of promises and values.
			 * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
			 * @returns {Promise} that will resolve to the final reduced value
			 */
			function reduce(promises, f /*, initialValue */) {
				return arguments.length > 2 ? ar.call(promises, liftCombine(f), arguments[2])
						: ar.call(promises, liftCombine(f));
			}

			/**
			 * Traditional reduce function, similar to `Array.prototype.reduceRight()`, but
			 * input may contain promises and/or values, and reduceFunc
			 * may return either a value or a promise, *and* initialValue may
			 * be a promise for the starting value.
			 * @param {Array|Promise} promises array or promise for an array of anything,
			 *      may contain a mix of promises and values.
			 * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
			 * @returns {Promise} that will resolve to the final reduced value
			 */
			function reduceRight(promises, f /*, initialValue */) {
				return arguments.length > 2 ? arr.call(promises, liftCombine(f), arguments[2])
						: arr.call(promises, liftCombine(f));
			}

			function liftCombine(f) {
				return function(z, x, i) {
					return applyFold(f, void 0, [z,x,i]);
				};
			}
		};

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

		return {
			pending: toPendingState,
			fulfilled: toFulfilledState,
			rejected: toRejectedState,
			inspect: inspect
		};

		function toPendingState() {
			return { state: 'pending' };
		}

		function toRejectedState(e) {
			return { state: 'rejected', reason: e };
		}

		function toFulfilledState(x) {
			return { state: 'fulfilled', value: x };
		}

		function inspect(handler) {
			var state = handler.state();
			return state === 0 ? toPendingState()
				 : state > 0   ? toFulfilledState(handler.value)
				               : toRejectedState(handler.value);
		}

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

		makeApply.tryCatchResolve = tryCatchResolve;

		return makeApply;

		function makeApply(Promise, call) {
			if(arguments.length < 2) {
				call = tryCatchResolve;
			}

			return apply;

			function apply(f, thisArg, args) {
				var p = Promise._defer();
				var l = args.length;
				var params = new Array(l);
				callAndResolve({ f:f, thisArg:thisArg, args:args, params:params, i:l-1, call:call }, p._handler);

				return p;
			}

			function callAndResolve(c, h) {
				if(c.i < 0) {
					return call(c.f, c.thisArg, c.params, h);
				}

				var handler = Promise._handler(c.args[c.i]);
				handler.fold(callAndResolveNext, c, void 0, h);
			}

			function callAndResolveNext(c, x, h) {
				c.params[c.i] = x;
				c.i -= 1;
				callAndResolve(c, h);
			}
		}

		function tryCatchResolve(f, thisArg, args, resolver) {
			try {
				resolver.resolve(f.apply(thisArg, args));
			} catch(e) {
				resolver.reject(e);
			}
		}

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));




/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

		return function flow(Promise) {

			var resolve = Promise.resolve;
			var reject = Promise.reject;
			var origCatch = Promise.prototype['catch'];

			/**
			 * Handle the ultimate fulfillment value or rejection reason, and assume
			 * responsibility for all errors.  If an error propagates out of result
			 * or handleFatalError, it will be rethrown to the host, resulting in a
			 * loud stack track on most platforms and a crash on some.
			 * @param {function?} onResult
			 * @param {function?} onError
			 * @returns {undefined}
			 */
			Promise.prototype.done = function(onResult, onError) {
				this._handler.visit(this._handler.receiver, onResult, onError);
			};

			/**
			 * Add Error-type and predicate matching to catch.  Examples:
			 * promise.catch(TypeError, handleTypeError)
			 *   .catch(predicate, handleMatchedErrors)
			 *   .catch(handleRemainingErrors)
			 * @param onRejected
			 * @returns {*}
			 */
			Promise.prototype['catch'] = Promise.prototype.otherwise = function(onRejected) {
				if (arguments.length < 2) {
					return origCatch.call(this, onRejected);
				}

				if(typeof onRejected !== 'function') {
					return this.ensure(rejectInvalidPredicate);
				}

				return origCatch.call(this, createCatchFilter(arguments[1], onRejected));
			};

			/**
			 * Wraps the provided catch handler, so that it will only be called
			 * if the predicate evaluates truthy
			 * @param {?function} handler
			 * @param {function} predicate
			 * @returns {function} conditional catch handler
			 */
			function createCatchFilter(handler, predicate) {
				return function(e) {
					return evaluatePredicate(e, predicate)
						? handler.call(this, e)
						: reject(e);
				};
			}

			/**
			 * Ensures that onFulfilledOrRejected will be called regardless of whether
			 * this promise is fulfilled or rejected.  onFulfilledOrRejected WILL NOT
			 * receive the promises' value or reason.  Any returned value will be disregarded.
			 * onFulfilledOrRejected may throw or return a rejected promise to signal
			 * an additional error.
			 * @param {function} handler handler to be called regardless of
			 *  fulfillment or rejection
			 * @returns {Promise}
			 */
			Promise.prototype['finally'] = Promise.prototype.ensure = function(handler) {
				if(typeof handler !== 'function') {
					return this;
				}

				return this.then(function(x) {
					return runSideEffect(handler, this, identity, x);
				}, function(e) {
					return runSideEffect(handler, this, reject, e);
				});
			};

			function runSideEffect (handler, thisArg, propagate, value) {
				var result = handler.call(thisArg);
				return maybeThenable(result)
					? propagateValue(result, propagate, value)
					: propagate(value);
			}

			function propagateValue (result, propagate, x) {
				return resolve(result).then(function () {
					return propagate(x);
				});
			}

			/**
			 * Recover from a failure by returning a defaultValue.  If defaultValue
			 * is a promise, it's fulfillment value will be used.  If defaultValue is
			 * a promise that rejects, the returned promise will reject with the
			 * same reason.
			 * @param {*} defaultValue
			 * @returns {Promise} new promise
			 */
			Promise.prototype['else'] = Promise.prototype.orElse = function(defaultValue) {
				return this.then(void 0, function() {
					return defaultValue;
				});
			};

			/**
			 * Shortcut for .then(function() { return value; })
			 * @param  {*} value
			 * @return {Promise} a promise that:
			 *  - is fulfilled if value is not a promise, or
			 *  - if value is a promise, will fulfill with its value, or reject
			 *    with its reason.
			 */
			Promise.prototype['yield'] = function(value) {
				return this.then(function() {
					return value;
				});
			};

			/**
			 * Runs a side effect when this promise fulfills, without changing the
			 * fulfillment value.
			 * @param {function} onFulfilledSideEffect
			 * @returns {Promise}
			 */
			Promise.prototype.tap = function(onFulfilledSideEffect) {
				return this.then(onFulfilledSideEffect)['yield'](this);
			};

			return Promise;
		};

		function rejectInvalidPredicate() {
			throw new TypeError('catch predicate must be a function');
		}

		function evaluatePredicate(e, predicate) {
			return isError(predicate) ? e instanceof predicate : predicate(e);
		}

		function isError(predicate) {
			return predicate === Error
				|| (predicate != null && predicate.prototype instanceof Error);
		}

		function maybeThenable(x) {
			return (typeof x === 'object' || typeof x === 'function') && x !== null;
		}

		function identity(x) {
			return x;
		}

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	/** @author Jeff Escalante */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

		return function fold(Promise) {

			Promise.prototype.fold = function(f, z) {
				var promise = this._beget();

				this._handler.fold(function(z, x, to) {
					Promise._handler(z).fold(function(x, z, to) {
						to.resolve(f.call(this, z, x));
					}, x, this, to);
				}, z, promise._handler.receiver, promise._handler);

				return promise;
			};

			return Promise;
		};

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

		var inspect = __webpack_require__(32).inspect;

		return function inspection(Promise) {

			Promise.prototype.inspect = function() {
				return inspect(Promise._handler(this));
			};

			return Promise;
		};

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

		return function generate(Promise) {

			var resolve = Promise.resolve;

			Promise.iterate = iterate;
			Promise.unfold = unfold;

			return Promise;

			/**
			 * @deprecated Use github.com/cujojs/most streams and most.iterate
			 * Generate a (potentially infinite) stream of promised values:
			 * x, f(x), f(f(x)), etc. until condition(x) returns true
			 * @param {function} f function to generate a new x from the previous x
			 * @param {function} condition function that, given the current x, returns
			 *  truthy when the iterate should stop
			 * @param {function} handler function to handle the value produced by f
			 * @param {*|Promise} x starting value, may be a promise
			 * @return {Promise} the result of the last call to f before
			 *  condition returns true
			 */
			function iterate(f, condition, handler, x) {
				return unfold(function(x) {
					return [x, f(x)];
				}, condition, handler, x);
			}

			/**
			 * @deprecated Use github.com/cujojs/most streams and most.unfold
			 * Generate a (potentially infinite) stream of promised values
			 * by applying handler(generator(seed)) iteratively until
			 * condition(seed) returns true.
			 * @param {function} unspool function that generates a [value, newSeed]
			 *  given a seed.
			 * @param {function} condition function that, given the current seed, returns
			 *  truthy when the unfold should stop
			 * @param {function} handler function to handle the value produced by unspool
			 * @param x {*|Promise} starting value, may be a promise
			 * @return {Promise} the result of the last value produced by unspool before
			 *  condition returns true
			 */
			function unfold(unspool, condition, handler, x) {
				return resolve(x).then(function(seed) {
					return resolve(condition(seed)).then(function(done) {
						return done ? seed : resolve(unspool(seed)).spread(next);
					});
				});

				function next(item, newSeed) {
					return resolve(handler(item)).then(function() {
						return unfold(unspool, condition, handler, newSeed);
					});
				}
			}
		};

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

		return function progress(Promise) {

			/**
			 * @deprecated
			 * Register a progress handler for this promise
			 * @param {function} onProgress
			 * @returns {Promise}
			 */
			Promise.prototype.progress = function(onProgress) {
				return this.then(void 0, void 0, onProgress);
			};

			return Promise;
		};

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

		return function addWith(Promise) {
			/**
			 * Returns a promise whose handlers will be called with `this` set to
			 * the supplied receiver.  Subsequent promises derived from the
			 * returned promise will also have their handlers called with receiver
			 * as `this`. Calling `with` with undefined or no arguments will return
			 * a promise whose handlers will again be called in the usual Promises/A+
			 * way (no `this`) thus safely undoing any previous `with` in the
			 * promise chain.
			 *
			 * WARNING: Promises returned from `with`/`withThis` are NOT Promises/A+
			 * compliant, specifically violating 2.2.5 (http://promisesaplus.com/#point-41)
			 *
			 * @param {object} receiver `this` value for all handlers attached to
			 *  the returned promise.
			 * @returns {Promise}
			 */
			Promise.prototype['with'] = Promise.prototype.withThis = function(receiver) {
				var p = this._beget();
				var child = p._handler;
				child.receiver = receiver;
				this._handler.chain(child, receiver);
				return p;
			};

			return Promise;
		};

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));



/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

		var setTimer = __webpack_require__(28).setTimer;
		var format = __webpack_require__(41);

		return function unhandledRejection(Promise) {

			var logError = noop;
			var logInfo = noop;
			var localConsole;

			if(typeof console !== 'undefined') {
				// Alias console to prevent things like uglify's drop_console option from
				// removing console.log/error. Unhandled rejections fall into the same
				// category as uncaught exceptions, and build tools shouldn't silence them.
				localConsole = console;
				logError = typeof localConsole.error !== 'undefined'
					? function (e) { localConsole.error(e); }
					: function (e) { localConsole.log(e); };

				logInfo = typeof localConsole.info !== 'undefined'
					? function (e) { localConsole.info(e); }
					: function (e) { localConsole.log(e); };
			}

			Promise.onPotentiallyUnhandledRejection = function(rejection) {
				enqueue(report, rejection);
			};

			Promise.onPotentiallyUnhandledRejectionHandled = function(rejection) {
				enqueue(unreport, rejection);
			};

			Promise.onFatalRejection = function(rejection) {
				enqueue(throwit, rejection.value);
			};

			var tasks = [];
			var reported = [];
			var running = null;

			function report(r) {
				if(!r.handled) {
					reported.push(r);
					logError('Potentially unhandled rejection [' + r.id + '] ' + format.formatError(r.value));
				}
			}

			function unreport(r) {
				var i = reported.indexOf(r);
				if(i >= 0) {
					reported.splice(i, 1);
					logInfo('Handled previous rejection [' + r.id + '] ' + format.formatObject(r.value));
				}
			}

			function enqueue(f, x) {
				tasks.push(f, x);
				if(running === null) {
					running = setTimer(flush, 0);
				}
			}

			function flush() {
				running = null;
				while(tasks.length > 0) {
					tasks.shift()(tasks.shift());
				}
			}

			return Promise;
		};

		function throwit(e) {
			throw e;
		}

		function noop() {}

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

		return {
			formatError: formatError,
			formatObject: formatObject,
			tryStringify: tryStringify
		};

		/**
		 * Format an error into a string.  If e is an Error and has a stack property,
		 * it's returned.  Otherwise, e is formatted using formatObject, with a
		 * warning added about e not being a proper Error.
		 * @param {*} e
		 * @returns {String} formatted string, suitable for output to developers
		 */
		function formatError(e) {
			var s = typeof e === 'object' && e !== null && e.stack ? e.stack : formatObject(e);
			return e instanceof Error ? s : s + ' (WARNING: non-Error used)';
		}

		/**
		 * Format an object, detecting "plain" objects and running them through
		 * JSON.stringify if possible.
		 * @param {Object} o
		 * @returns {string}
		 */
		function formatObject(o) {
			var s = String(o);
			if(s === '[object Object]' && typeof JSON !== 'undefined') {
				s = tryStringify(o, s);
			}
			return s;
		}

		/**
		 * Try to return the result of JSON.stringify(x).  If that fails, return
		 * defaultValue
		 * @param {*} x
		 * @param {*} defaultValue
		 * @returns {String|*} JSON.stringify(x) or defaultValue
		 */
		function tryStringify(x, defaultValue) {
			try {
				return JSON.stringify(x);
			} catch(e) {
				return defaultValue;
			}
		}

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

		var makePromise = __webpack_require__(43);
		var Scheduler = __webpack_require__(44);
		var async = __webpack_require__(28).asap;

		return makePromise({
			scheduler: new Scheduler(async)
		});

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(24));


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

		return function makePromise(environment) {

			var tasks = environment.scheduler;
			var emitRejection = initEmitRejection();

			var objectCreate = Object.create ||
				function(proto) {
					function Child() {}
					Child.prototype = proto;
					return new Child();
				};

			/**
			 * Create a promise whose fate is determined by resolver
			 * @constructor
			 * @returns {Promise} promise
			 * @name Promise
			 */
			function Promise(resolver, handler) {
				this._handler = resolver === Handler ? handler : init(resolver);
			}

			/**
			 * Run the supplied resolver
			 * @param resolver
			 * @returns {Pending}
			 */
			function init(resolver) {
				var handler = new Pending();

				try {
					resolver(promiseResolve, promiseReject, promiseNotify);
				} catch (e) {
					promiseReject(e);
				}

				return handler;

				/**
				 * Transition from pre-resolution state to post-resolution state, notifying
				 * all listeners of the ultimate fulfillment or rejection
				 * @param {*} x resolution value
				 */
				function promiseResolve (x) {
					handler.resolve(x);
				}
				/**
				 * Reject this promise with reason, which will be used verbatim
				 * @param {Error|*} reason rejection reason, strongly suggested
				 *   to be an Error type
				 */
				function promiseReject (reason) {
					handler.reject(reason);
				}

				/**
				 * @deprecated
				 * Issue a progress event, notifying all progress listeners
				 * @param {*} x progress event payload to pass to all listeners
				 */
				function promiseNotify (x) {
					handler.notify(x);
				}
			}

			// Creation

			Promise.resolve = resolve;
			Promise.reject = reject;
			Promise.never = never;

			Promise._defer = defer;
			Promise._handler = getHandler;

			/**
			 * Returns a trusted promise. If x is already a trusted promise, it is
			 * returned, otherwise returns a new trusted Promise which follows x.
			 * @param  {*} x
			 * @return {Promise} promise
			 */
			function resolve(x) {
				return isPromise(x) ? x
					: new Promise(Handler, new Async(getHandler(x)));
			}

			/**
			 * Return a reject promise with x as its reason (x is used verbatim)
			 * @param {*} x
			 * @returns {Promise} rejected promise
			 */
			function reject(x) {
				return new Promise(Handler, new Async(new Rejected(x)));
			}

			/**
			 * Return a promise that remains pending forever
			 * @returns {Promise} forever-pending promise.
			 */
			function never() {
				return foreverPendingPromise; // Should be frozen
			}

			/**
			 * Creates an internal {promise, resolver} pair
			 * @private
			 * @returns {Promise}
			 */
			function defer() {
				return new Promise(Handler, new Pending());
			}

			// Transformation and flow control

			/**
			 * Transform this promise's fulfillment value, returning a new Promise
			 * for the transformed result.  If the promise cannot be fulfilled, onRejected
			 * is called with the reason.  onProgress *may* be called with updates toward
			 * this promise's fulfillment.
			 * @param {function=} onFulfilled fulfillment handler
			 * @param {function=} onRejected rejection handler
			 * @param {function=} onProgress @deprecated progress handler
			 * @return {Promise} new promise
			 */
			Promise.prototype.then = function(onFulfilled, onRejected, onProgress) {
				var parent = this._handler;
				var state = parent.join().state();

				if ((typeof onFulfilled !== 'function' && state > 0) ||
					(typeof onRejected !== 'function' && state < 0)) {
					// Short circuit: value will not change, simply share handler
					return new this.constructor(Handler, parent);
				}

				var p = this._beget();
				var child = p._handler;

				parent.chain(child, parent.receiver, onFulfilled, onRejected, onProgress);

				return p;
			};

			/**
			 * If this promise cannot be fulfilled due to an error, call onRejected to
			 * handle the error. Shortcut for .then(undefined, onRejected)
			 * @param {function?} onRejected
			 * @return {Promise}
			 */
			Promise.prototype['catch'] = function(onRejected) {
				return this.then(void 0, onRejected);
			};

			/**
			 * Creates a new, pending promise of the same type as this promise
			 * @private
			 * @returns {Promise}
			 */
			Promise.prototype._beget = function() {
				return begetFrom(this._handler, this.constructor);
			};

			function begetFrom(parent, Promise) {
				var child = new Pending(parent.receiver, parent.join().context);
				return new Promise(Handler, child);
			}

			// Array combinators

			Promise.all = all;
			Promise.race = race;
			Promise._traverse = traverse;

			/**
			 * Return a promise that will fulfill when all promises in the
			 * input array have fulfilled, or will reject when one of the
			 * promises rejects.
			 * @param {array} promises array of promises
			 * @returns {Promise} promise for array of fulfillment values
			 */
			function all(promises) {
				return traverseWith(snd, null, promises);
			}

			/**
			 * Array<Promise<X>> -> Promise<Array<f(X)>>
			 * @private
			 * @param {function} f function to apply to each promise's value
			 * @param {Array} promises array of promises
			 * @returns {Promise} promise for transformed values
			 */
			function traverse(f, promises) {
				return traverseWith(tryCatch2, f, promises);
			}

			function traverseWith(tryMap, f, promises) {
				var handler = typeof f === 'function' ? mapAt : settleAt;

				var resolver = new Pending();
				var pending = promises.length >>> 0;
				var results = new Array(pending);

				for (var i = 0, x; i < promises.length && !resolver.resolved; ++i) {
					x = promises[i];

					if (x === void 0 && !(i in promises)) {
						--pending;
						continue;
					}

					traverseAt(promises, handler, i, x, resolver);
				}

				if(pending === 0) {
					resolver.become(new Fulfilled(results));
				}

				return new Promise(Handler, resolver);

				function mapAt(i, x, resolver) {
					if(!resolver.resolved) {
						traverseAt(promises, settleAt, i, tryMap(f, x, i), resolver);
					}
				}

				function settleAt(i, x, resolver) {
					results[i] = x;
					if(--pending === 0) {
						resolver.become(new Fulfilled(results));
					}
				}
			}

			function traverseAt(promises, handler, i, x, resolver) {
				if (maybeThenable(x)) {
					var h = getHandlerMaybeThenable(x);
					var s = h.state();

					if (s === 0) {
						h.fold(handler, i, void 0, resolver);
					} else if (s > 0) {
						handler(i, h.value, resolver);
					} else {
						resolver.become(h);
						visitRemaining(promises, i+1, h);
					}
				} else {
					handler(i, x, resolver);
				}
			}

			Promise._visitRemaining = visitRemaining;
			function visitRemaining(promises, start, handler) {
				for(var i=start; i<promises.length; ++i) {
					markAsHandled(getHandler(promises[i]), handler);
				}
			}

			function markAsHandled(h, handler) {
				if(h === handler) {
					return;
				}

				var s = h.state();
				if(s === 0) {
					h.visit(h, void 0, h._unreport);
				} else if(s < 0) {
					h._unreport();
				}
			}

			/**
			 * Fulfill-reject competitive race. Return a promise that will settle
			 * to the same state as the earliest input promise to settle.
			 *
			 * WARNING: The ES6 Promise spec requires that race()ing an empty array
			 * must return a promise that is pending forever.  This implementation
			 * returns a singleton forever-pending promise, the same singleton that is
			 * returned by Promise.never(), thus can be checked with ===
			 *
			 * @param {array} promises array of promises to race
			 * @returns {Promise} if input is non-empty, a promise that will settle
			 * to the same outcome as the earliest input promise to settle. if empty
			 * is empty, returns a promise that will never settle.
			 */
			function race(promises) {
				if(typeof promises !== 'object' || promises === null) {
					return reject(new TypeError('non-iterable passed to race()'));
				}

				// Sigh, race([]) is untestable unless we return *something*
				// that is recognizable without calling .then() on it.
				return promises.length === 0 ? never()
					 : promises.length === 1 ? resolve(promises[0])
					 : runRace(promises);
			}

			function runRace(promises) {
				var resolver = new Pending();
				var i, x, h;
				for(i=0; i<promises.length; ++i) {
					x = promises[i];
					if (x === void 0 && !(i in promises)) {
						continue;
					}

					h = getHandler(x);
					if(h.state() !== 0) {
						resolver.become(h);
						visitRemaining(promises, i+1, h);
						break;
					} else {
						h.visit(resolver, resolver.resolve, resolver.reject);
					}
				}
				return new Promise(Handler, resolver);
			}

			// Promise internals
			// Below this, everything is @private

			/**
			 * Get an appropriate handler for x, without checking for cycles
			 * @param {*} x
			 * @returns {object} handler
			 */
			function getHandler(x) {
				if(isPromise(x)) {
					return x._handler.join();
				}
				return maybeThenable(x) ? getHandlerUntrusted(x) : new Fulfilled(x);
			}

			/**
			 * Get a handler for thenable x.
			 * NOTE: You must only call this if maybeThenable(x) == true
			 * @param {object|function|Promise} x
			 * @returns {object} handler
			 */
			function getHandlerMaybeThenable(x) {
				return isPromise(x) ? x._handler.join() : getHandlerUntrusted(x);
			}

			/**
			 * Get a handler for potentially untrusted thenable x
			 * @param {*} x
			 * @returns {object} handler
			 */
			function getHandlerUntrusted(x) {
				try {
					var untrustedThen = x.then;
					return typeof untrustedThen === 'function'
						? new Thenable(untrustedThen, x)
						: new Fulfilled(x);
				} catch(e) {
					return new Rejected(e);
				}
			}

			/**
			 * Handler for a promise that is pending forever
			 * @constructor
			 */
			function Handler() {}

			Handler.prototype.when
				= Handler.prototype.become
				= Handler.prototype.notify // deprecated
				= Handler.prototype.fail
				= Handler.prototype._unreport
				= Handler.prototype._report
				= noop;

			Handler.prototype._state = 0;

			Handler.prototype.state = function() {
				return this._state;
			};

			/**
			 * Recursively collapse handler chain to find the handler
			 * nearest to the fully resolved value.
			 * @returns {object} handler nearest the fully resolved value
			 */
			Handler.prototype.join = function() {
				var h = this;
				while(h.handler !== void 0) {
					h = h.handler;
				}
				return h;
			};

			Handler.prototype.chain = function(to, receiver, fulfilled, rejected, progress) {
				this.when({
					resolver: to,
					receiver: receiver,
					fulfilled: fulfilled,
					rejected: rejected,
					progress: progress
				});
			};

			Handler.prototype.visit = function(receiver, fulfilled, rejected, progress) {
				this.chain(failIfRejected, receiver, fulfilled, rejected, progress);
			};

			Handler.prototype.fold = function(f, z, c, to) {
				this.when(new Fold(f, z, c, to));
			};

			/**
			 * Handler that invokes fail() on any handler it becomes
			 * @constructor
			 */
			function FailIfRejected() {}

			inherit(Handler, FailIfRejected);

			FailIfRejected.prototype.become = function(h) {
				h.fail();
			};

			var failIfRejected = new FailIfRejected();

			/**
			 * Handler that manages a queue of consumers waiting on a pending promise
			 * @constructor
			 */
			function Pending(receiver, inheritedContext) {
				Promise.createContext(this, inheritedContext);

				this.consumers = void 0;
				this.receiver = receiver;
				this.handler = void 0;
				this.resolved = false;
			}

			inherit(Handler, Pending);

			Pending.prototype._state = 0;

			Pending.prototype.resolve = function(x) {
				this.become(getHandler(x));
			};

			Pending.prototype.reject = function(x) {
				if(this.resolved) {
					return;
				}

				this.become(new Rejected(x));
			};

			Pending.prototype.join = function() {
				if (!this.resolved) {
					return this;
				}

				var h = this;

				while (h.handler !== void 0) {
					h = h.handler;
					if (h === this) {
						return this.handler = cycle();
					}
				}

				return h;
			};

			Pending.prototype.run = function() {
				var q = this.consumers;
				var handler = this.handler;
				this.handler = this.handler.join();
				this.consumers = void 0;

				for (var i = 0; i < q.length; ++i) {
					handler.when(q[i]);
				}
			};

			Pending.prototype.become = function(handler) {
				if(this.resolved) {
					return;
				}

				this.resolved = true;
				this.handler = handler;
				if(this.consumers !== void 0) {
					tasks.enqueue(this);
				}

				if(this.context !== void 0) {
					handler._report(this.context);
				}
			};

			Pending.prototype.when = function(continuation) {
				if(this.resolved) {
					tasks.enqueue(new ContinuationTask(continuation, this.handler));
				} else {
					if(this.consumers === void 0) {
						this.consumers = [continuation];
					} else {
						this.consumers.push(continuation);
					}
				}
			};

			/**
			 * @deprecated
			 */
			Pending.prototype.notify = function(x) {
				if(!this.resolved) {
					tasks.enqueue(new ProgressTask(x, this));
				}
			};

			Pending.prototype.fail = function(context) {
				var c = typeof context === 'undefined' ? this.context : context;
				this.resolved && this.handler.join().fail(c);
			};

			Pending.prototype._report = function(context) {
				this.resolved && this.handler.join()._report(context);
			};

			Pending.prototype._unreport = function() {
				this.resolved && this.handler.join()._unreport();
			};

			/**
			 * Wrap another handler and force it into a future stack
			 * @param {object} handler
			 * @constructor
			 */
			function Async(handler) {
				this.handler = handler;
			}

			inherit(Handler, Async);

			Async.prototype.when = function(continuation) {
				tasks.enqueue(new ContinuationTask(continuation, this));
			};

			Async.prototype._report = function(context) {
				this.join()._report(context);
			};

			Async.prototype._unreport = function() {
				this.join()._unreport();
			};

			/**
			 * Handler that wraps an untrusted thenable and assimilates it in a future stack
			 * @param {function} then
			 * @param {{then: function}} thenable
			 * @constructor
			 */
			function Thenable(then, thenable) {
				Pending.call(this);
				tasks.enqueue(new AssimilateTask(then, thenable, this));
			}

			inherit(Pending, Thenable);

			/**
			 * Handler for a fulfilled promise
			 * @param {*} x fulfillment value
			 * @constructor
			 */
			function Fulfilled(x) {
				Promise.createContext(this);
				this.value = x;
			}

			inherit(Handler, Fulfilled);

			Fulfilled.prototype._state = 1;

			Fulfilled.prototype.fold = function(f, z, c, to) {
				runContinuation3(f, z, this, c, to);
			};

			Fulfilled.prototype.when = function(cont) {
				runContinuation1(cont.fulfilled, this, cont.receiver, cont.resolver);
			};

			var errorId = 0;

			/**
			 * Handler for a rejected promise
			 * @param {*} x rejection reason
			 * @constructor
			 */
			function Rejected(x) {
				Promise.createContext(this);

				this.id = ++errorId;
				this.value = x;
				this.handled = false;
				this.reported = false;

				this._report();
			}

			inherit(Handler, Rejected);

			Rejected.prototype._state = -1;

			Rejected.prototype.fold = function(f, z, c, to) {
				to.become(this);
			};

			Rejected.prototype.when = function(cont) {
				if(typeof cont.rejected === 'function') {
					this._unreport();
				}
				runContinuation1(cont.rejected, this, cont.receiver, cont.resolver);
			};

			Rejected.prototype._report = function(context) {
				tasks.afterQueue(new ReportTask(this, context));
			};

			Rejected.prototype._unreport = function() {
				if(this.handled) {
					return;
				}
				this.handled = true;
				tasks.afterQueue(new UnreportTask(this));
			};

			Rejected.prototype.fail = function(context) {
				this.reported = true;
				emitRejection('unhandledRejection', this);
				Promise.onFatalRejection(this, context === void 0 ? this.context : context);
			};

			function ReportTask(rejection, context) {
				this.rejection = rejection;
				this.context = context;
			}

			ReportTask.prototype.run = function() {
				if(!this.rejection.handled && !this.rejection.reported) {
					this.rejection.reported = true;
					emitRejection('unhandledRejection', this.rejection) ||
						Promise.onPotentiallyUnhandledRejection(this.rejection, this.context);
				}
			};

			function UnreportTask(rejection) {
				this.rejection = rejection;
			}

			UnreportTask.prototype.run = function() {
				if(this.rejection.reported) {
					emitRejection('rejectionHandled', this.rejection) ||
						Promise.onPotentiallyUnhandledRejectionHandled(this.rejection);
				}
			};

			// Unhandled rejection hooks
			// By default, everything is a noop

			Promise.createContext
				= Promise.enterContext
				= Promise.exitContext
				= Promise.onPotentiallyUnhandledRejection
				= Promise.onPotentiallyUnhandledRejectionHandled
				= Promise.onFatalRejection
				= noop;

			// Errors and singletons

			var foreverPendingHandler = new Handler();
			var foreverPendingPromise = new Promise(Handler, foreverPendingHandler);

			function cycle() {
				return new Rejected(new TypeError('Promise cycle'));
			}

			// Task runners

			/**
			 * Run a single consumer
			 * @constructor
			 */
			function ContinuationTask(continuation, handler) {
				this.continuation = continuation;
				this.handler = handler;
			}

			ContinuationTask.prototype.run = function() {
				this.handler.join().when(this.continuation);
			};

			/**
			 * Run a queue of progress handlers
			 * @constructor
			 */
			function ProgressTask(value, handler) {
				this.handler = handler;
				this.value = value;
			}

			ProgressTask.prototype.run = function() {
				var q = this.handler.consumers;
				if(q === void 0) {
					return;
				}

				for (var c, i = 0; i < q.length; ++i) {
					c = q[i];
					runNotify(c.progress, this.value, this.handler, c.receiver, c.resolver);
				}
			};

			/**
			 * Assimilate a thenable, sending it's value to resolver
			 * @param {function} then
			 * @param {object|function} thenable
			 * @param {object} resolver
			 * @constructor
			 */
			function AssimilateTask(then, thenable, resolver) {
				this._then = then;
				this.thenable = thenable;
				this.resolver = resolver;
			}

			AssimilateTask.prototype.run = function() {
				var h = this.resolver;
				tryAssimilate(this._then, this.thenable, _resolve, _reject, _notify);

				function _resolve(x) { h.resolve(x); }
				function _reject(x)  { h.reject(x); }
				function _notify(x)  { h.notify(x); }
			};

			function tryAssimilate(then, thenable, resolve, reject, notify) {
				try {
					then.call(thenable, resolve, reject, notify);
				} catch (e) {
					reject(e);
				}
			}

			/**
			 * Fold a handler value with z
			 * @constructor
			 */
			function Fold(f, z, c, to) {
				this.f = f; this.z = z; this.c = c; this.to = to;
				this.resolver = failIfRejected;
				this.receiver = this;
			}

			Fold.prototype.fulfilled = function(x) {
				this.f.call(this.c, this.z, x, this.to);
			};

			Fold.prototype.rejected = function(x) {
				this.to.reject(x);
			};

			Fold.prototype.progress = function(x) {
				this.to.notify(x);
			};

			// Other helpers

			/**
			 * @param {*} x
			 * @returns {boolean} true iff x is a trusted Promise
			 */
			function isPromise(x) {
				return x instanceof Promise;
			}

			/**
			 * Test just enough to rule out primitives, in order to take faster
			 * paths in some code
			 * @param {*} x
			 * @returns {boolean} false iff x is guaranteed *not* to be a thenable
			 */
			function maybeThenable(x) {
				return (typeof x === 'object' || typeof x === 'function') && x !== null;
			}

			function runContinuation1(f, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.become(h);
				}

				Promise.enterContext(h);
				tryCatchReject(f, h.value, receiver, next);
				Promise.exitContext();
			}

			function runContinuation3(f, x, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.become(h);
				}

				Promise.enterContext(h);
				tryCatchReject3(f, x, h.value, receiver, next);
				Promise.exitContext();
			}

			/**
			 * @deprecated
			 */
			function runNotify(f, x, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.notify(x);
				}

				Promise.enterContext(h);
				tryCatchReturn(f, x, receiver, next);
				Promise.exitContext();
			}

			function tryCatch2(f, a, b) {
				try {
					return f(a, b);
				} catch(e) {
					return reject(e);
				}
			}

			/**
			 * Return f.call(thisArg, x), or if it throws return a rejected promise for
			 * the thrown exception
			 */
			function tryCatchReject(f, x, thisArg, next) {
				try {
					next.become(getHandler(f.call(thisArg, x)));
				} catch(e) {
					next.become(new Rejected(e));
				}
			}

			/**
			 * Same as above, but includes the extra argument parameter.
			 */
			function tryCatchReject3(f, x, y, thisArg, next) {
				try {
					f.call(thisArg, x, y, next);
				} catch(e) {
					next.become(new Rejected(e));
				}
			}

			/**
			 * @deprecated
			 * Return f.call(thisArg, x), or if it throws, *return* the exception
			 */
			function tryCatchReturn(f, x, thisArg, next) {
				try {
					next.notify(f.call(thisArg, x));
				} catch(e) {
					next.notify(e);
				}
			}

			function inherit(Parent, Child) {
				Child.prototype = objectCreate(Parent.prototype);
				Child.prototype.constructor = Child;
			}

			function snd(x, y) {
				return y;
			}

			function noop() {}

			function initEmitRejection() {
				/*global process, self, CustomEvent*/
				if(typeof process !== 'undefined' && process !== null
					&& typeof process.emit === 'function') {
					// Returning falsy here means to call the default
					// onPotentiallyUnhandledRejection API.  This is safe even in
					// browserify since process.emit always returns falsy in browserify:
					// https://github.com/defunctzombie/node-process/blob/master/browser.js#L40-L46
					return function(type, rejection) {
						return type === 'unhandledRejection'
							? process.emit(type, rejection.value, rejection)
							: process.emit(type, rejection);
					};
				} else if(typeof self !== 'undefined' && typeof CustomEvent === 'function') {
					return (function(noop, self, CustomEvent) {
						var hasCustomEvent = false;
						try {
							var ev = new CustomEvent('unhandledRejection');
							hasCustomEvent = ev instanceof CustomEvent;
						} catch (e) {}

						return !hasCustomEvent ? noop : function(type, rejection) {
							var ev = new CustomEvent(type, {
								detail: {
									reason: rejection.value,
									key: rejection
								},
								bubbles: false,
								cancelable: true
							});

							return !self.dispatchEvent(ev);
						};
					}(noop, self, CustomEvent));
				}

				return noop;
			}

			return Promise;
		};
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */

	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

		// Credit to Twisol (https://github.com/Twisol) for suggesting
		// this type of extensible queue + trampoline approach for next-tick conflation.

		/**
		 * Async task scheduler
		 * @param {function} async function to schedule a single async function
		 * @constructor
		 */
		function Scheduler(async) {
			this._async = async;
			this._running = false;

			this._queue = this;
			this._queueLen = 0;
			this._afterQueue = {};
			this._afterQueueLen = 0;

			var self = this;
			this.drain = function() {
				self._drain();
			};
		}

		/**
		 * Enqueue a task
		 * @param {{ run:function }} task
		 */
		Scheduler.prototype.enqueue = function(task) {
			this._queue[this._queueLen++] = task;
			this.run();
		};

		/**
		 * Enqueue a task to run after the main task queue
		 * @param {{ run:function }} task
		 */
		Scheduler.prototype.afterQueue = function(task) {
			this._afterQueue[this._afterQueueLen++] = task;
			this.run();
		};

		Scheduler.prototype.run = function() {
			if (!this._running) {
				this._running = true;
				this._async(this.drain);
			}
		};

		/**
		 * Drain the handler queue entirely, and then the after queue
		 */
		Scheduler.prototype._drain = function() {
			var i = 0;
			for (; i < this._queueLen; ++i) {
				this._queue[i].run();
				this._queue[i] = void 0;
			}

			this._queueLen = 0;
			this._running = false;

			for (i = 0; i < this._afterQueueLen; ++i) {
				this._afterQueue[i].run();
				this._afterQueue[i] = void 0;
			}

			this._afterQueueLen = 0;
		};

		return Scheduler;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(24)));


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012-2013 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define, location) {
		'use strict';

		var undef;

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var mixin, origin, urlRE, absoluteUrlRE, fullyQualifiedUrlRE;

			mixin = __webpack_require__(46);

			urlRE = /([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?(\/[^?#]*)?(\?[^#]*)?(#\S*)?/i;
			absoluteUrlRE = /^([a-z][a-z0-9\-\+\.]*:\/\/|\/)/i;
			fullyQualifiedUrlRE = /([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?\//i;

			/**
			 * Apply params to the template to create a URL.
			 *
			 * Parameters that are not applied directly to the template, are appended
			 * to the URL as query string parameters.
			 *
			 * @param {string} template the URI template
			 * @param {Object} params parameters to apply to the template
			 * @return {string} the resulting URL
			 */
			function buildUrl(template, params) {
				// internal builder to convert template with params.
				var url, name, queryStringParams, re;

				url = template;
				queryStringParams = {};

				if (params) {
					for (name in params) {
						/*jshint forin:false */
						re = new RegExp('\\{' + name + '\\}');
						if (re.test(url)) {
							url = url.replace(re, encodeURIComponent(params[name]), 'g');
						}
						else {
							queryStringParams[name] = params[name];
						}
					}
					for (name in queryStringParams) {
						url += url.indexOf('?') === -1 ? '?' : '&';
						url += encodeURIComponent(name);
						if (queryStringParams[name] !== null && queryStringParams[name] !== undefined) {
							url += '=';
							url += encodeURIComponent(queryStringParams[name]);
						}
					}
				}
				return url;
			}

			function startsWith(str, test) {
				return str.indexOf(test) === 0;
			}

			/**
			 * Create a new URL Builder
			 *
			 * @param {string|UrlBuilder} template the base template to build from, may be another UrlBuilder
			 * @param {Object} [params] base parameters
			 * @constructor
			 */
			function UrlBuilder(template, params) {
				if (!(this instanceof UrlBuilder)) {
					// invoke as a constructor
					return new UrlBuilder(template, params);
				}

				if (template instanceof UrlBuilder) {
					this._template = template.template;
					this._params = mixin({}, this._params, params);
				}
				else {
					this._template = (template || '').toString();
					this._params = params || {};
				}
			}

			UrlBuilder.prototype = {

				/**
				 * Create a new UrlBuilder instance that extends the current builder.
				 * The current builder is unmodified.
				 *
				 * @param {string} [template] URL template to append to the current template
				 * @param {Object} [params] params to combine with current params.  New params override existing params
				 * @return {UrlBuilder} the new builder
				 */
				append: function (template,  params) {
					// TODO consider query strings and fragments
					return new UrlBuilder(this._template + template, mixin({}, this._params, params));
				},

				/**
				 * Create a new UrlBuilder with a fully qualified URL based on the
				 * window's location or base href and the current templates relative URL.
				 *
				 * Path variables are preserved.
				 *
				 * *Browser only*
				 *
				 * @return {UrlBuilder} the fully qualified URL template
				 */
				fullyQualify: function () {
					if (!location) { return this; }
					if (this.isFullyQualified()) { return this; }

					var template = this._template;

					if (startsWith(template, '//')) {
						template = origin.protocol + template;
					}
					else if (startsWith(template, '/')) {
						template = origin.origin + template;
					}
					else if (!this.isAbsolute()) {
						template = origin.origin + origin.pathname.substring(0, origin.pathname.lastIndexOf('/') + 1);
					}

					if (template.indexOf('/', 8) === -1) {
						// default the pathname to '/'
						template = template + '/';
					}

					return new UrlBuilder(template, this._params);
				},

				/**
				 * True if the URL is absolute
				 *
				 * @return {boolean}
				 */
				isAbsolute: function () {
					return absoluteUrlRE.test(this.build());
				},

				/**
				 * True if the URL is fully qualified
				 *
				 * @return {boolean}
				 */
				isFullyQualified: function () {
					return fullyQualifiedUrlRE.test(this.build());
				},

				/**
				 * True if the URL is cross origin. The protocol, host and port must not be
				 * the same in order to be cross origin,
				 *
				 * @return {boolean}
				 */
				isCrossOrigin: function () {
					if (!origin) {
						return true;
					}
					var url = this.parts();
					return url.protocol !== origin.protocol ||
					       url.hostname !== origin.hostname ||
					       url.port !== origin.port;
				},

				/**
				 * Split a URL into its consituent parts following the naming convention of
				 * 'window.location'. One difference is that the port will contain the
				 * protocol default if not specified.
				 *
				 * @see https://developer.mozilla.org/en-US/docs/DOM/window.location
				 *
				 * @returns {Object} a 'window.location'-like object
				 */
				parts: function () {
					/*jshint maxcomplexity:20 */
					var url, parts;
					url = this.fullyQualify().build().match(urlRE);
					parts = {
						href: url[0],
						protocol: url[1],
						host: url[3] || '',
						hostname: url[4] || '',
						port: url[6],
						pathname: url[7] || '',
						search: url[8] || '',
						hash: url[9] || ''
					};
					parts.origin = parts.protocol + '//' + parts.host;
					parts.port = parts.port || (parts.protocol === 'https:' ? '443' : parts.protocol === 'http:' ? '80' : '');
					return parts;
				},

				/**
				 * Expand the template replacing path variables with parameters
				 *
				 * @param {Object} [params] params to combine with current params.  New params override existing params
				 * @return {string} the expanded URL
				 */
				build: function (params) {
					return buildUrl(this._template, mixin({}, this._params, params));
				},

				/**
				 * @see build
				 */
				toString: function () {
					return this.build();
				}

			};

			origin = location ? new UrlBuilder(location.href).parts() : undef;

			return UrlBuilder;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24),
		typeof window !== 'undefined' ? window.location : void 0
		// Boilerplate for AMD and Node
	));


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012-2013 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		// derived from dojo.mixin
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (/* require */) {

			var empty = {};

			/**
			 * Mix the properties from the source object into the destination object.
			 * When the same property occurs in more then one object, the right most
			 * value wins.
			 *
			 * @param {Object} dest the object to copy properties to
			 * @param {Object} sources the objects to copy properties from.  May be 1 to N arguments, but not an Array.
			 * @return {Object} the destination object
			 */
			function mixin(dest /*, sources... */) {
				var i, l, source, name;

				if (!dest) { dest = {}; }
				for (i = 1, l = arguments.length; i < l; i += 1) {
					source = arguments[i];
					for (name in source) {
						if (!(name in dest) || (dest[name] !== source[name] && (!(name in empty) || empty[name] !== source[name]))) {
							dest[name] = source[name];
						}
					}
				}

				return dest; // Object
			}

			return mixin;

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (/* require */) {

			/**
			 * Normalize HTTP header names using the pseudo camel case.
			 *
			 * For example:
			 *   content-type         -> Content-Type
			 *   accepts              -> Accepts
			 *   x-custom-header-name -> X-Custom-Header-Name
			 *
			 * @param {string} name the raw header name
			 * @return {string} the normalized header name
			 */
			function normalizeHeaderName(name) {
				return name.toLowerCase()
					.split('-')
					.map(function (chunk) { return chunk.charAt(0).toUpperCase() + chunk.slice(1); })
					.join('-');
			}

			return normalizeHeaderName;

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2014-2015 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var when = __webpack_require__(26),
				normalizeHeaderName = __webpack_require__(47);

			function property(promise, name) {
				return promise.then(
					function (value) {
						return value && value[name];
					},
					function (value) {
						return when.reject(value && value[name]);
					}
				);
			}

			/**
			 * Obtain the response entity
			 *
			 * @returns {Promise} for the response entity
			 */
			function entity() {
				/*jshint validthis:true */
				return property(this, 'entity');
			}

			/**
			 * Obtain the response status
			 *
			 * @returns {Promise} for the response status
			 */
			function status() {
				/*jshint validthis:true */
				return property(property(this, 'status'), 'code');
			}

			/**
			 * Obtain the response headers map
			 *
			 * @returns {Promise} for the response headers map
			 */
			function headers() {
				/*jshint validthis:true */
				return property(this, 'headers');
			}

			/**
			 * Obtain a specific response header
			 *
			 * @param {String} headerName the header to retrieve
			 * @returns {Promise} for the response header's value
			 */
			function header(headerName) {
				/*jshint validthis:true */
				headerName = normalizeHeaderName(headerName);
				return property(this.headers(), headerName);
			}

			/**
			 * Follow a related resource
			 *
			 * The relationship to follow may be define as a plain string, an object
			 * with the rel and params, or an array containing one or more entries
			 * with the previous forms.
			 *
			 * Examples:
			 *   response.follow('next')
			 *
			 *   response.follow({ rel: 'next', params: { pageSize: 100 } })
			 *
			 *   response.follow([
			 *       { rel: 'items', params: { projection: 'noImages' } },
			 *       'search',
			 *       { rel: 'findByGalleryIsNull', params: { projection: 'noImages' } },
			 *       'items'
			 *   ])
			 *
			 * @param {String|Object|Array} rels one, or more, relationships to follow
			 * @returns ResponsePromise<Response> related resource
			 */
			function follow(rels) {
				/*jshint validthis:true */
				rels = [].concat(rels);
				return make(when.reduce(rels, function (response, rel) {
					if (typeof rel === 'string') {
						rel = { rel: rel };
					}
					if (typeof response.entity.clientFor !== 'function') {
						throw new Error('Hypermedia response expected');
					}
					var client = response.entity.clientFor(rel.rel);
					return client({ params: rel.params });
				}, this));
			}

			/**
			 * Wrap a Promise as an ResponsePromise
			 *
			 * @param {Promise<Response>} promise the promise for an HTTP Response
			 * @returns {ResponsePromise<Response>} wrapped promise for Response with additional helper methods
			 */
			function make(promise) {
				promise.status = status;
				promise.headers = headers;
				promise.header = header;
				promise.entity = entity;
				promise.follow = follow;
				return promise;
			}

			function responsePromise() {
				return make(when.apply(when, arguments));
			}

			responsePromise.make = make;
			responsePromise.reject = function (val) {
				return make(when.reject(val));
			};
			responsePromise.promise = function (func) {
				return make(when.promise(func));
			};

			return responsePromise;

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var interceptor = __webpack_require__(50);

	var callbackify = interceptor({
	  success: function (response) {
	    var request = response && response.request;
	    var callback = request && request.callback;

	    if (typeof callback === 'function') {
	      callback(null, response.entity);
	    }

	    return response;
	  },
	  error: function (response) {
	    var request = response && response.request;
	    var callback = request && request.callback;

	    if (typeof callback === 'function') {
	      var err = response.error || response.entity;
	      if (typeof err !== 'object') err = new Error(err);
	      callback(err);
	    }

	    return response;
	  }
	});

	module.exports = callbackify;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012-2015 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var defaultClient, mixin, responsePromise, client, when;

			defaultClient = __webpack_require__(22);
			mixin = __webpack_require__(46);
			responsePromise = __webpack_require__(48);
			client = __webpack_require__(23);
			when = __webpack_require__(26);

			/**
			 * Interceptors have the ability to intercept the request and/org response
			 * objects.  They may augment, prune, transform or replace the
			 * request/response as needed.  Clients may be composed by wrapping
			 * together multiple interceptors.
			 *
			 * Configured interceptors are functional in nature.  Wrapping a client in
			 * an interceptor will not affect the client, merely the data that flows in
			 * and out of that client.  A common configuration can be created once and
			 * shared; specialization can be created by further wrapping that client
			 * with custom interceptors.
			 *
			 * @param {Client} [target] client to wrap
			 * @param {Object} [config] configuration for the interceptor, properties will be specific to the interceptor implementation
			 * @returns {Client} A client wrapped with the interceptor
			 *
			 * @class Interceptor
			 */

			function defaultInitHandler(config) {
				return config;
			}

			function defaultRequestHandler(request /*, config, meta */) {
				return request;
			}

			function defaultResponseHandler(response /*, config, meta */) {
				return response;
			}

			function race(promisesOrValues) {
				// this function is different than when.any as the first to reject also wins
				return when.promise(function (resolve, reject) {
					promisesOrValues.forEach(function (promiseOrValue) {
						when(promiseOrValue, resolve, reject);
					});
				});
			}

			/**
			 * Alternate return type for the request handler that allows for more complex interactions.
			 *
			 * @param properties.request the traditional request return object
			 * @param {Promise} [properties.abort] promise that resolves if/when the request is aborted
			 * @param {Client} [properties.client] override the defined client with an alternate client
			 * @param [properties.response] response for the request, short circuit the request
			 */
			function ComplexRequest(properties) {
				if (!(this instanceof ComplexRequest)) {
					// in case users forget the 'new' don't mix into the interceptor
					return new ComplexRequest(properties);
				}
				mixin(this, properties);
			}

			/**
			 * Create a new interceptor for the provided handlers.
			 *
			 * @param {Function} [handlers.init] one time intialization, must return the config object
			 * @param {Function} [handlers.request] request handler
			 * @param {Function} [handlers.response] response handler regardless of error state
			 * @param {Function} [handlers.success] response handler when the request is not in error
			 * @param {Function} [handlers.error] response handler when the request is in error, may be used to 'unreject' an error state
			 * @param {Function} [handlers.client] the client to use if otherwise not specified, defaults to platform default client
			 *
			 * @returns {Interceptor}
			 */
			function interceptor(handlers) {

				var initHandler, requestHandler, successResponseHandler, errorResponseHandler;

				handlers = handlers || {};

				initHandler            = handlers.init    || defaultInitHandler;
				requestHandler         = handlers.request || defaultRequestHandler;
				successResponseHandler = handlers.success || handlers.response || defaultResponseHandler;
				errorResponseHandler   = handlers.error   || function () {
					// Propagate the rejection, with the result of the handler
					return when((handlers.response || defaultResponseHandler).apply(this, arguments), when.reject, when.reject);
				};

				return function (target, config) {

					if (typeof target === 'object') {
						config = target;
					}
					if (typeof target !== 'function') {
						target = handlers.client || defaultClient;
					}

					config = initHandler(config || {});

					function interceptedClient(request) {
						var context, meta;
						context = {};
						meta = { 'arguments': Array.prototype.slice.call(arguments), client: interceptedClient };
						request = typeof request === 'string' ? { path: request } : request || {};
						request.originator = request.originator || interceptedClient;
						return responsePromise(
							requestHandler.call(context, request, config, meta),
							function (request) {
								var response, abort, next;
								next = target;
								if (request instanceof ComplexRequest) {
									// unpack request
									abort = request.abort;
									next = request.client || next;
									response = request.response;
									// normalize request, must be last
									request = request.request;
								}
								response = response || when(request, function (request) {
									return when(
										next(request),
										function (response) {
											return successResponseHandler.call(context, response, config, meta);
										},
										function (response) {
											return errorResponseHandler.call(context, response, config, meta);
										}
									);
								});
								return abort ? race([response, abort]) : response;
							},
							function (error) {
								return when.reject({ request: request, error: error });
							}
						);
					}

					return client(interceptedClient, target);
				};
			}

			interceptor.ComplexRequest = ComplexRequest;

			return interceptor;

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012-2013 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var interceptor, when;

			interceptor = __webpack_require__(50);
			when = __webpack_require__(26);

			/**
			 * Rejects the response promise based on the status code.
			 *
			 * Codes greater than or equal to the provided value are rejected.  Default
			 * value 400.
			 *
			 * @param {Client} [client] client to wrap
			 * @param {number} [config.code=400] code to indicate a rejection
			 *
			 * @returns {Client}
			 */
			return interceptor({
				init: function (config) {
					config.code = config.code || 400;
					return config;
				},
				response: function (response, config) {
					if (response.status && response.status.code >= config.code) {
						return when.reject(response);
					}
					return response;
				}
			});

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012-2013 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var interceptor, UrlBuilder;

			interceptor = __webpack_require__(50);
			UrlBuilder = __webpack_require__(45);

			function startsWith(str, prefix) {
				return str.indexOf(prefix) === 0;
			}

			function endsWith(str, suffix) {
				return str.lastIndexOf(suffix) + suffix.length === str.length;
			}

			/**
			 * Prefixes the request path with a common value.
			 *
			 * @param {Client} [client] client to wrap
			 * @param {number} [config.prefix] path prefix
			 *
			 * @returns {Client}
			 */
			return interceptor({
				request: function (request, config) {
					var path;

					if (config.prefix && !(new UrlBuilder(request.path).isFullyQualified())) {
						path = config.prefix;
						if (request.path) {
							if (!endsWith(path, '/') && !startsWith(request.path, '/')) {
								// add missing '/' between path sections
								path += '/';
							}
							path += request.path;
						}
						request.path = path;
					}

					return request;
				}
			});

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012-2014 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var interceptor, mime, registry, noopConverter, when;

			interceptor = __webpack_require__(50);
			mime = __webpack_require__(54);
			registry = __webpack_require__(55);
			when = __webpack_require__(26);

			noopConverter = {
				read: function (obj) { return obj; },
				write: function (obj) { return obj; }
			};

			/**
			 * MIME type support for request and response entities.  Entities are
			 * (de)serialized using the converter for the MIME type.
			 *
			 * Request entities are converted using the desired converter and the
			 * 'Accept' request header prefers this MIME.
			 *
			 * Response entities are converted based on the Content-Type response header.
			 *
			 * @param {Client} [client] client to wrap
			 * @param {string} [config.mime='text/plain'] MIME type to encode the request
			 *   entity
			 * @param {string} [config.accept] Accept header for the request
			 * @param {Client} [config.client=<request.originator>] client passed to the
			 *   converter, defaults to the client originating the request
			 * @param {Registry} [config.registry] MIME registry, defaults to the root
			 *   registry
			 * @param {boolean} [config.permissive] Allow an unkown request MIME type
			 *
			 * @returns {Client}
			 */
			return interceptor({
				init: function (config) {
					config.registry = config.registry || registry;
					return config;
				},
				request: function (request, config) {
					var type, headers;

					headers = request.headers || (request.headers = {});
					type = mime.parse(headers['Content-Type'] = headers['Content-Type'] || config.mime || 'text/plain');
					headers.Accept = headers.Accept || config.accept || type.raw + ', application/json;q=0.8, text/plain;q=0.5, */*;q=0.2';

					if (!('entity' in request)) {
						return request;
					}

					return config.registry.lookup(type).otherwise(function () {
						// failed to resolve converter
						if (config.permissive) {
							return noopConverter;
						}
						throw 'mime-unknown';
					}).then(function (converter) {
						var client = config.client || request.originator;

						return when.attempt(converter.write, request.entity, { client: client, request: request, mime: type, registry: config.registry })
							.otherwise(function() {
								throw 'mime-serialization';
							})
							.then(function(entity) {
								request.entity = entity;
								return request;
							});
					});
				},
				response: function (response, config) {
					if (!(response.headers && response.headers['Content-Type'] && response.entity)) {
						return response;
					}

					var type = mime.parse(response.headers['Content-Type']);

					return config.registry.lookup(type).otherwise(function () { return noopConverter; }).then(function (converter) {
						var client = config.client || response.request && response.request.originator;

						return when.attempt(converter.read, response.entity, { client: client, response: response, mime: type, registry: config.registry })
							.otherwise(function (e) {
								response.error = 'mime-deserialization';
								response.cause = e;
								throw response;
							})
							.then(function (entity) {
								response.entity = entity;
								return response;
							});
					});
				}
			});

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	* Copyright 2014 the original author or authors
	* @license MIT, see LICENSE.txt for details
	*
	* @author Scott Andrews
	*/

	(function (define) {
		'use strict';

		var undef;

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (/* require */) {

			/**
			 * Parse a MIME type into it's constituent parts
			 *
			 * @param {string} mime MIME type to parse
			 * @return {{
			 *   {string} raw the original MIME type
			 *   {string} type the type and subtype
			 *   {string} [suffix] mime suffix, including the plus, if any
			 *   {Object} params key/value pair of attributes
			 * }}
			 */
			function parse(mime) {
				var params, type;

				params = mime.split(';');
				type = params[0].trim().split('+');

				return {
					raw: mime,
					type: type[0],
					suffix: type[1] ? '+' + type[1] : '',
					params: params.slice(1).reduce(function (params, pair) {
						pair = pair.split('=');
						params[pair[0].trim()] = pair[1] ? pair[1].trim() : undef;
						return params;
					}, {})
				};
			}

			return {
				parse: parse
			};

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012-2014 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var mime, when, registry;

			mime = __webpack_require__(54);
			when = __webpack_require__(26);

			function Registry(mimes) {

				/**
				 * Lookup the converter for a MIME type
				 *
				 * @param {string} type the MIME type
				 * @return a promise for the converter
				 */
				this.lookup = function lookup(type) {
					var parsed;

					parsed = typeof type === 'string' ? mime.parse(type) : type;

					if (mimes[parsed.raw]) {
						return mimes[parsed.raw];
					}
					if (mimes[parsed.type + parsed.suffix]) {
						return mimes[parsed.type + parsed.suffix];
					}
					if (mimes[parsed.type]) {
						return mimes[parsed.type];
					}
					if (mimes[parsed.suffix]) {
						return mimes[parsed.suffix];
					}

					return when.reject(new Error('Unable to locate converter for mime "' + parsed.raw + '"'));
				};

				/**
				 * Create a late dispatched proxy to the target converter.
				 *
				 * Common when a converter is registered under multiple names and
				 * should be kept in sync if updated.
				 *
				 * @param {string} type mime converter to dispatch to
				 * @returns converter whose read/write methods target the desired mime converter
				 */
				this.delegate = function delegate(type) {
					return {
						read: function () {
							var args = arguments;
							return this.lookup(type).then(function (converter) {
								return converter.read.apply(this, args);
							}.bind(this));
						}.bind(this),
						write: function () {
							var args = arguments;
							return this.lookup(type).then(function (converter) {
								return converter.write.apply(this, args);
							}.bind(this));
						}.bind(this)
					};
				};

				/**
				 * Register a custom converter for a MIME type
				 *
				 * @param {string} type the MIME type
				 * @param converter the converter for the MIME type
				 * @return a promise for the converter
				 */
				this.register = function register(type, converter) {
					mimes[type] = when(converter);
					return mimes[type];
				};

				/**
				 * Create a child registry whoes registered converters remain local, while
				 * able to lookup converters from its parent.
				 *
				 * @returns child MIME registry
				 */
				this.child = function child() {
					return new Registry(Object.create(mimes));
				};

			}

			registry = new Registry({});

			// include provided serializers
			registry.register('application/hal', __webpack_require__(56));
			registry.register('application/json', __webpack_require__(62));
			registry.register('application/x-www-form-urlencoded', __webpack_require__(63));
			registry.register('multipart/form-data', __webpack_require__(64));
			registry.register('text/plain', __webpack_require__(65));

			registry.register('+json', registry.delegate('application/json'));

			return registry;

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2013-2015 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var pathPrefix, template, find, lazyPromise, responsePromise, when;

			pathPrefix = __webpack_require__(52);
			template = __webpack_require__(57);
			find = __webpack_require__(60);
			lazyPromise = __webpack_require__(61);
			responsePromise = __webpack_require__(48);
			when = __webpack_require__(26);

			function defineProperty(obj, name, value) {
				Object.defineProperty(obj, name, {
					value: value,
					configurable: true,
					enumerable: false,
					writeable: true
				});
			}

			/**
			 * Hypertext Application Language serializer
			 *
			 * Implemented to https://tools.ietf.org/html/draft-kelly-json-hal-06
			 *
			 * As the spec is still a draft, this implementation will be updated as the
			 * spec evolves
			 *
			 * Objects are read as HAL indexing links and embedded objects on to the
			 * resource. Objects are written as plain JSON.
			 *
			 * Embedded relationships are indexed onto the resource by the relationship
			 * as a promise for the related resource.
			 *
			 * Links are indexed onto the resource as a lazy promise that will GET the
			 * resource when a handler is first registered on the promise.
			 *
			 * A `requestFor` method is added to the entity to make a request for the
			 * relationship.
			 *
			 * A `clientFor` method is added to the entity to get a full Client for a
			 * relationship.
			 *
			 * The `_links` and `_embedded` properties on the resource are made
			 * non-enumerable.
			 */
			return {

				read: function (str, opts) {
					var client, console;

					opts = opts || {};
					client = opts.client;
					console = opts.console || console;

					function deprecationWarning(relationship, deprecation) {
						if (deprecation && console && console.warn || console.log) {
							(console.warn || console.log).call(console, 'Relationship \'' + relationship + '\' is deprecated, see ' + deprecation);
						}
					}

					return opts.registry.lookup(opts.mime.suffix).then(function (converter) {
						return when(converter.read(str, opts)).then(function (root) {

							find.findProperties(root, '_embedded', function (embedded, resource, name) {
								Object.keys(embedded).forEach(function (relationship) {
									if (relationship in resource) { return; }
									var related = responsePromise({
										entity: embedded[relationship]
									});
									defineProperty(resource, relationship, related);
								});
								defineProperty(resource, name, embedded);
							});
							find.findProperties(root, '_links', function (links, resource, name) {
								Object.keys(links).forEach(function (relationship) {
									var link = links[relationship];
									if (relationship in resource) { return; }
									defineProperty(resource, relationship, responsePromise.make(lazyPromise(function () {
										if (link.deprecation) { deprecationWarning(relationship, link.deprecation); }
										if (link.templated === true) {
											return template(client)({ path: link.href });
										}
										return client({ path: link.href });
									})));
								});
								defineProperty(resource, name, links);
								defineProperty(resource, 'clientFor', function (relationship, clientOverride) {
									var link = links[relationship];
									if (!link) {
										throw new Error('Unknown relationship: ' + relationship);
									}
									if (link.deprecation) { deprecationWarning(relationship, link.deprecation); }
									if (link.templated === true) {
										return template(
											clientOverride || client,
											{ template: link.href }
										);
									}
									return pathPrefix(
										clientOverride || client,
										{ prefix: link.href }
									);
								});
								defineProperty(resource, 'requestFor', function (relationship, request, clientOverride) {
									var client = this.clientFor(relationship, clientOverride);
									return client(request);
								});
							});

							return root;
						});
					});

				},

				write: function (obj, opts) {
					return opts.registry.lookup(opts.mime.suffix).then(function (converter) {
						return converter.write(obj, opts);
					});
				}

			};
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2015 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var interceptor, uriTemplate, mixin;

			interceptor = __webpack_require__(50);
			uriTemplate = __webpack_require__(58);
			mixin = __webpack_require__(46);

			/**
			 * Applies request params to the path as a URI Template
			 *
			 * Params are removed from the request object, as they have been consumed.
			 *
			 * @param {Client} [client] client to wrap
			 * @param {Object} [config.params] default param values
			 * @param {string} [config.template] default template
			 *
			 * @returns {Client}
			 */
			return interceptor({
				init: function (config) {
					config.params = config.params || {};
					config.template = config.template || '';
					return config;
				},
				request: function (request, config) {
					var template, params;

					template = request.path || config.template;
					params = mixin({}, request.params, config.params);

					request.path = uriTemplate.expand(template, params);
					delete request.params;

					return request;
				}
			});

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2015 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		var undef;

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var uriEncoder, operations, prefixRE;

			uriEncoder = __webpack_require__(59);

			prefixRE = /^([^:]*):([0-9]+)$/;
			operations = {
				'':  { first: '',  separator: ',', named: false, empty: '',  encoder: uriEncoder.encode },
				'+': { first: '',  separator: ',', named: false, empty: '',  encoder: uriEncoder.encodeURL },
				'#': { first: '#', separator: ',', named: false, empty: '',  encoder: uriEncoder.encodeURL },
				'.': { first: '.', separator: '.', named: false, empty: '',  encoder: uriEncoder.encode },
				'/': { first: '/', separator: '/', named: false, empty: '',  encoder: uriEncoder.encode },
				';': { first: ';', separator: ';', named: true,  empty: '',  encoder: uriEncoder.encode },
				'?': { first: '?', separator: '&', named: true,  empty: '=', encoder: uriEncoder.encode },
				'&': { first: '&', separator: '&', named: true,  empty: '=', encoder: uriEncoder.encode },
				'=': { reserved: true },
				',': { reserved: true },
				'!': { reserved: true },
				'@': { reserved: true },
				'|': { reserved: true }
			};

			function apply(operation, expression, params) {
				/*jshint maxcomplexity:11 */
				return expression.split(',').reduce(function (result, variable) {
					var opts, value;

					opts = {};
					if (variable.slice(-1) === '*') {
						variable = variable.slice(0, -1);
						opts.explode = true;
					}
					if (prefixRE.test(variable)) {
						var prefix = prefixRE.exec(variable);
						variable = prefix[1];
						opts.maxLength = parseInt(prefix[2]);
					}

					variable = uriEncoder.decode(variable);
					value = params[variable];

					if (value === undef || value === null) {
						return result;
					}
					if (Array.isArray(value)) {
						result += value.reduce(function (result, value) {
							if (result.length) {
								result += opts.explode ? operation.separator : ',';
								if (operation.named && opts.explode) {
									result += operation.encoder(variable);
									result += value.length ? '=' : operation.empty;
								}
							}
							else {
								result += operation.first;
								if (operation.named) {
									result += operation.encoder(variable);
									result += value.length ? '=' : operation.empty;
								}
							}
							result += operation.encoder(value);
							return result;
						}, '');
					}
					else if (typeof value === 'object') {
						result += Object.keys(value).reduce(function (result, name) {
							if (result.length) {
								result += opts.explode ? operation.separator : ',';
							}
							else {
								result += operation.first;
								if (operation.named && !opts.explode) {
									result += operation.encoder(variable);
									result += value[name].length ? '=' : operation.empty;
								}
							}
							result += operation.encoder(name);
							result += opts.explode ? '=' : ',';
							result += operation.encoder(value[name]);
							return result;
						}, '');
					}
					else {
						value = String(value);
						if (opts.maxLength) {
							value = value.slice(0, opts.maxLength);
						}
						result += result.length ? operation.separator : operation.first;
						if (operation.named) {
							result += operation.encoder(variable);
							result += value.length ? '=' : operation.empty;
						}
						result += operation.encoder(value);
					}

					return result;
				}, '');
			}

			function expandExpression(expression, params) {
				var operation;

				operation = operations[expression.slice(0,1)];
				if (operation) {
					expression = expression.slice(1);
				}
				else {
					operation = operations[''];
				}

				if (operation.reserved) {
					throw new Error('Reserved expression operations are not supported');
				}

				return apply(operation, expression, params);
			}

			function expandTemplate(template, params) {
				var start, end, uri;

				uri = '';
				end = 0;
				while (true) {
					start = template.indexOf('{', end);
					if (start === -1) {
						// no more expressions
						uri += template.slice(end);
						break;
					}
					uri += template.slice(end, start);
					end = template.indexOf('}', start) + 1;
					uri += expandExpression(template.slice(start + 1, end - 1), params);
				}

				return uri;
			}

			return {

				/**
				 * Expand a URI Template with parameters to form a URI.
				 *
				 * Full implementation (level 4) of rfc6570.
				 * @see https://tools.ietf.org/html/rfc6570
				 *
				 * @param {string} template URI template
				 * @param {Object} [params] params to apply to the template durring expantion
				 * @returns {string} expanded URI
				 */
				expand: expandTemplate

			};

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2015 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (/* require */) {

			var charMap;

			charMap = (function () {
				var strings = {
					alpha: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
					digit: '0123456789'
				};

				strings.genDelims = ':/?#[]@';
				strings.subDelims = '!$&\'()*+,;=';
				strings.reserved = strings.genDelims + strings.subDelims;
				strings.unreserved = strings.alpha + strings.digit + '-._~';
				strings.url = strings.reserved + strings.unreserved;
				strings.scheme = strings.alpha + strings.digit + '+-.';
				strings.userinfo = strings.unreserved + strings.subDelims + ':';
				strings.host = strings.unreserved + strings.subDelims;
				strings.port = strings.digit;
				strings.pchar = strings.unreserved + strings.subDelims + ':@';
				strings.segment = strings.pchar;
				strings.path = strings.segment + '/';
				strings.query = strings.pchar + '/?';
				strings.fragment = strings.pchar + '/?';

				return Object.keys(strings).reduce(function (charMap, set) {
					charMap[set] = strings[set].split('').reduce(function (chars, myChar) {
						chars[myChar] = true;
						return chars;
					}, {});
					return charMap;
				}, {});
			}());

			function encode(str, allowed) {
				if (typeof str !== 'string') {
					throw new Error('String required for URL encoding');
				}
				return str.split('').map(function (myChar) {
					if (allowed.hasOwnProperty(myChar)) {
						return myChar;
					}
					var code = myChar.charCodeAt(0);
					if (code <= 127) {
						return '%' + code.toString(16).toUpperCase();
					}
					else {
						return encodeURIComponent(myChar).toUpperCase();
					}
				}).join('');
			}

			function makeEncoder(allowed) {
				allowed = allowed || charMap.unreserved;
				return function (str) {
					return encode(str, allowed);
				};
			}

			function decode(str) {
				return decodeURIComponent(str);
			}

			return {

				/*
				 * Decode URL encoded strings
				 *
				 * @param {string} URL encoded string
				 * @returns {string} URL decoded string
				 */
				decode: decode,

				/*
				 * URL encode a string
				 *
				 * All but alpha-numerics and a very limited set of punctuation - . _ ~ are
				 * encoded.
				 *
				 * @param {string} string to encode
				 * @returns {string} URL encoded string
				 */
				encode: makeEncoder(),

				/*
				* URL encode a URL
				*
				* All character permitted anywhere in a URL are left unencoded even
				* if that character is not permitted in that portion of a URL.
				*
				* Note: This method is typically not what you want.
				*
				* @param {string} string to encode
				* @returns {string} URL encoded string
				*/
				encodeURL: makeEncoder(charMap.url),

				/*
				 * URL encode the scheme portion of a URL
				 *
				 * @param {string} string to encode
				 * @returns {string} URL encoded string
				 */
				encodeScheme: makeEncoder(charMap.scheme),

				/*
				 * URL encode the user info portion of a URL
				 *
				 * @param {string} string to encode
				 * @returns {string} URL encoded string
				 */
				encodeUserInfo: makeEncoder(charMap.userinfo),

				/*
				 * URL encode the host portion of a URL
				 *
				 * @param {string} string to encode
				 * @returns {string} URL encoded string
				 */
				encodeHost: makeEncoder(charMap.host),

				/*
				 * URL encode the port portion of a URL
				 *
				 * @param {string} string to encode
				 * @returns {string} URL encoded string
				 */
				encodePort: makeEncoder(charMap.port),

				/*
				 * URL encode a path segment portion of a URL
				 *
				 * @param {string} string to encode
				 * @returns {string} URL encoded string
				 */
				encodePathSegment: makeEncoder(charMap.segment),

				/*
				 * URL encode the path portion of a URL
				 *
				 * @param {string} string to encode
				 * @returns {string} URL encoded string
				 */
				encodePath: makeEncoder(charMap.path),

				/*
				 * URL encode the query portion of a URL
				 *
				 * @param {string} string to encode
				 * @returns {string} URL encoded string
				 */
				encodeQuery: makeEncoder(charMap.query),

				/*
				 * URL encode the fragment portion of a URL
				 *
				 * @param {string} string to encode
				 * @returns {string} URL encoded string
				 */
				encodeFragment: makeEncoder(charMap.fragment)

			};

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2013 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (/* require */) {

			return {

				/**
				 * Find objects within a graph the contain a property of a certain name.
				 *
				 * NOTE: this method will not discover object graph cycles.
				 *
				 * @param {*} obj object to search on
				 * @param {string} prop name of the property to search for
				 * @param {Function} callback function to receive the found properties and their parent
				 */
				findProperties: function findProperties(obj, prop, callback) {
					if (typeof obj !== 'object' || obj === null) { return; }
					if (prop in obj) {
						callback(obj[prop], obj, prop);
					}
					Object.keys(obj).forEach(function (key) {
						findProperties(obj[key], prop, callback);
					});
				}

			};

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2013 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var when;

			when = __webpack_require__(26);

			/**
			 * Create a promise whose work is started only when a handler is registered.
			 *
			 * The work function will be invoked at most once. Thrown values will result
			 * in promise rejection.
			 *
			 * @param {Function} work function whose ouput is used to resolve the
			 *   returned promise.
			 * @returns {Promise} a lazy promise
			 */
			function lazyPromise(work) {
				var defer, started, resolver, promise, then;

				defer = when.defer();
				started = false;

				resolver = defer.resolver;
				promise = defer.promise;
				then = promise.then;

				promise.then = function () {
					if (!started) {
						started = true;
						when.attempt(work).then(resolver.resolve, resolver.reject);
					}
					return then.apply(promise, arguments);
				};

				return promise;
			}

			return lazyPromise;

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012-2015 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (/* require */) {

			/**
			 * Create a new JSON converter with custom reviver/replacer.
			 *
			 * The extended converter must be published to a MIME registry in order
			 * to be used. The existing converter will not be modified.
			 *
			 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
			 *
			 * @param {function} [reviver=undefined] custom JSON.parse reviver
			 * @param {function|Array} [replacer=undefined] custom JSON.stringify replacer
			 */
			function createConverter(reviver, replacer) {
				return {

					read: function (str) {
						return JSON.parse(str, reviver);
					},

					write: function (obj) {
						return JSON.stringify(obj, replacer);
					},

					extend: createConverter

				};
			}

			return createConverter();

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (/* require */) {

			var encodedSpaceRE, urlEncodedSpaceRE;

			encodedSpaceRE = /%20/g;
			urlEncodedSpaceRE = /\+/g;

			function urlEncode(str) {
				str = encodeURIComponent(str);
				// spec says space should be encoded as '+'
				return str.replace(encodedSpaceRE, '+');
			}

			function urlDecode(str) {
				// spec says space should be encoded as '+'
				str = str.replace(urlEncodedSpaceRE, ' ');
				return decodeURIComponent(str);
			}

			function append(str, name, value) {
				if (Array.isArray(value)) {
					value.forEach(function (value) {
						str = append(str, name, value);
					});
				}
				else {
					if (str.length > 0) {
						str += '&';
					}
					str += urlEncode(name);
					if (value !== undefined && value !== null) {
						str += '=' + urlEncode(value);
					}
				}
				return str;
			}

			return {

				read: function (str) {
					var obj = {};
					str.split('&').forEach(function (entry) {
						var pair, name, value;
						pair = entry.split('=');
						name = urlDecode(pair[0]);
						if (pair.length === 2) {
							value = urlDecode(pair[1]);
						}
						else {
							value = null;
						}
						if (name in obj) {
							if (!Array.isArray(obj[name])) {
								// convert to an array, perserving currnent value
								obj[name] = [obj[name]];
							}
							obj[name].push(value);
						}
						else {
							obj[name] = value;
						}
					});
					return obj;
				},

				write: function (obj) {
					var str = '';
					Object.keys(obj).forEach(function (name) {
						str = append(str, name, obj[name]);
					});
					return str;
				}

			};
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2014 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Michael Jackson
	 */

	/* global FormData, File, Blob */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (/* require */) {

			function isFormElement(object) {
				return object &&
					object.nodeType === 1 && // Node.ELEMENT_NODE
					object.tagName === 'FORM';
			}

			function createFormDataFromObject(object) {
				var formData = new FormData();

				var value;
				for (var property in object) {
					if (object.hasOwnProperty(property)) {
						value = object[property];

						if (value instanceof File) {
							formData.append(property, value, value.name);
						} else if (value instanceof Blob) {
							formData.append(property, value);
						} else {
							formData.append(property, String(value));
						}
					}
				}

				return formData;
			}

			return {

				write: function (object) {
					if (typeof FormData === 'undefined') {
						throw new Error('The multipart/form-data mime serializer requires FormData support');
					}

					// Support FormData directly.
					if (object instanceof FormData) {
						return object;
					}

					// Support <form> elements.
					if (isFormElement(object)) {
						return new FormData(object);
					}

					// Support plain objects, may contain File/Blob as value.
					if (typeof object === 'object' && object !== null) {
						return createFormDataFromObject(object);
					}

					throw new Error('Unable to create FormData from object ' + object);
				}

			};
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (/* require */) {

			return {

				read: function (str) {
					return str;
				},

				write: function (obj) {
					return obj.toString();
				}

			};
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2013 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */

	(function (define) {
		'use strict';

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

			var interceptor, mixinUtil, defaulter;

			interceptor = __webpack_require__(50);
			mixinUtil = __webpack_require__(46);

			defaulter = (function () {

				function mixin(prop, target, defaults) {
					if (prop in target || prop in defaults) {
						target[prop] = mixinUtil({}, defaults[prop], target[prop]);
					}
				}

				function copy(prop, target, defaults) {
					if (prop in defaults && !(prop in target)) {
						target[prop] = defaults[prop];
					}
				}

				var mappings = {
					method: copy,
					path: copy,
					params: mixin,
					headers: mixin,
					entity: copy,
					mixin: mixin
				};

				return function (target, defaults) {
					for (var prop in mappings) {
						/*jshint forin: false */
						mappings[prop](prop, target, defaults);
					}
					return target;
				};

			}());

			/**
			 * Provide default values for a request. These values will be applied to the
			 * request if the request object does not already contain an explicit value.
			 *
			 * For 'params', 'headers', and 'mixin', individual values are mixed in with the
			 * request's values. The result is a new object representiing the combined
			 * request and config values. Neither input object is mutated.
			 *
			 * @param {Client} [client] client to wrap
			 * @param {string} [config.method] the default method
			 * @param {string} [config.path] the default path
			 * @param {Object} [config.params] the default params, mixed with the request's existing params
			 * @param {Object} [config.headers] the default headers, mixed with the request's existing headers
			 * @param {Object} [config.mixin] the default "mixins" (http/https options), mixed with the request's existing "mixins"
			 *
			 * @returns {Client}
			 */
			return interceptor({
				request: function handleRequest(request, config) {
					return defaulter(request, config);
				}
			});

		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	}(
		__webpack_require__(24)
		// Boilerplate for AMD and Node
	));


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var atob = __webpack_require__(68);

	/**
	 * Access tokens actually are data, and using them we can derive
	 * a user's username. This method attempts to do just that,
	 * decoding the part of the token after the first `.` into
	 * a username.
	 *
	 * @private
	 * @param {string} token an access token
	 * @return {string} username
	 */
	function getUser(token) {
	  var data = token.split('.')[1];
	  if (!data) return null;
	  data = data.replace(/-/g, '+').replace(/_/g, '/');

	  // window.atob does not require padding
	  if (!process.browser) {
	    var mod = data.length % 4;
	    if (mod === 2) data += '==';
	    if (mod === 3) data += '=';
	    if (mod === 1 || mod > 3) return null;
	  } else {
	    data = data.replace(/=/g, '');
	  }

	  try {
	    return JSON.parse(atob(data)).u;
	  } catch(err) {
	    return null;
	  }
	}

	module.exports = getUser;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function(str) {
	  return window.atob(str);
	};


/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = extend

	function extend(target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i]

	        for (var key in source) {
	            if (source.hasOwnProperty(key)) {
	                target[key] = source[key]
	            }
	        }
	    }

	    return target
	}


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(15),
	  makeService = __webpack_require__(14),
	  constants = __webpack_require__(19);

	var MapboxGeocoder = makeService('MapboxGeocoder');

	var REVERSE_GEOCODER_PRECISION = 5;
	var FORWARD_GEOCODER_PROXIMITY_PRECISION = 3;

	/**
	 * Search for a location with a string, using the
	 * [Mapbox Geocoding API](https://www.mapbox.com/developers/api/geocoding/).
	 *
	 * @param {string} query desired location
	 * @param {Object} [options={}] additional options meant to tune
	 * the request
	 * @param {Object} options.proximity a proximity argument: this is
	 * a geographical point given as an object with latitude and longitude
	 * properties. Search results closer to this point will be given
	 * higher priority.
	 * @param {string} [options.dataset=mapbox.places] the desired data to be
	 * geocoded against. The default, mapbox.places, does not permit unlimited
	 * caching. `mapbox.places-permanent` is available on request and does
	 * permit permanent caching.
	 * @param {Function} callback called with (err, results)
	 * @returns {undefined} nothing, calls callback
	 * @memberof MapboxClient
	 * @example
	 * var mapboxClient = new MapboxClient('ACCESSTOKEN');
	 * mapboxClient.geocodeForward('Paris, France', function(err, res) {
	 *   // res is a GeoJSON document with geocoding matches
	 * });
	 * // using the proximity option to weight results closer to texas
	 * mapboxClient.geocodeForward('Paris, France', {
	 *   proximity: { latitude: 33.6875431, longitude: -95.4431142 }
	 * }, function(err, res) {
	 *   // res is a GeoJSON document with geocoding matches
	 * });
	 */
	MapboxGeocoder.prototype.geocodeForward = function(query, options, callback) {

	  // permit the options argument to be omitted
	  if (callback === undefined && typeof options === 'function') {
	    callback = options;
	    options = {};
	  }

	  // typecheck arguments
	  assert(typeof query === 'string', 'query must be a string');
	  assert(typeof options === 'object', 'options must be an object');
	  assert(typeof callback === 'function', 'callback must be a function');

	  var queryOptions = {
	    query: query,
	    dataset: 'mapbox.places'
	  };

	  var precision = FORWARD_GEOCODER_PROXIMITY_PRECISION;
	  if (options.precision) {
	    assert(typeof options.precision === 'number', 'precision option must be number');
	    precision = options.precision;
	  }

	  if (options.proximity) {
	    assert(typeof options.proximity.latitude === 'number' &&
	      typeof options.proximity.longitude === 'number',
	      'proximity must be an object with numeric latitude & longitude properties');
	    queryOptions.proximity = roundTo(options.proximity.longitude, precision) + ',' + roundTo(options.proximity.latitude, precision);
	  }

	  if (options.dataset) {
	    assert(typeof options.dataset === 'string', 'dataset option must be string');
	    queryOptions.dataset = options.dataset;
	  }

	  this.client({
	    path: constants.API_GEOCODER_FORWARD,
	    params: queryOptions,
	    callback: callback
	  });
	};

	/**
	 * Given a location, determine what geographical features are located
	 * there. This uses the [Mapbox Geocoding API](https://www.mapbox.com/developers/api/geocoding/).
	 *
	 * @param {Object} location the geographical point to search
	 * @param {number} location.latitude decimal degrees latitude, in range -90 to 90
	 * @param {number} location.longitude decimal degrees longitude, in range -180 to 180
	 * @param {Object} [options={}] additional options meant to tune
	 * the request
	 * @param {string} [options.dataset=mapbox.places] the desired data to be
	 * geocoded against. The default, mapbox.places, does not permit unlimited
	 * caching. `mapbox.places-permanent` is available on request and does
	 * permit permanent caching.
	 * @param {Function} callback called with (err, results)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var mapboxClient = new MapboxGeocoder('ACCESSTOKEN');
	 * mapboxClient.geocodeReverse(
	 *   { latitude: 33.6875431, longitude: -95.4431142 },
	 *   function(err, res) {
	 *   // res is a GeoJSON document with geocoding matches
	 * });
	 */
	MapboxGeocoder.prototype.geocodeReverse = function(location, options, callback) {

	  // permit the options argument to be omitted
	  if (callback === undefined && typeof options === 'function') {
	    callback = options;
	    options = {};
	  }

	  // typecheck arguments
	  assert(typeof location === 'object', 'location must be an object');
	  assert(typeof options === 'object', 'options must be an object');
	  assert(typeof callback === 'function', 'callback must be a function');

	  assert(typeof location.latitude === 'number' &&
	    typeof location.longitude === 'number',
	    'location must be an object with numeric latitude & longitude properties');

	  var dataset = 'mapbox.places';
	  if (options.dataset) {
	    assert(typeof options.dataset === 'string', 'dataset option must be string');
	    dataset = options.dataset;
	  }

	  var precision = REVERSE_GEOCODER_PRECISION;
	  if (options.precision) {
	    assert(typeof options.precision === 'number', 'precision option must be number');
	    precision = options.precision;
	  }

	  this.client({
	    path: constants.API_GEOCODER_REVERSE,
	    params: {
	      longitude: roundTo(location.longitude, precision),
	      latitude: roundTo(location.latitude, precision),
	      dataset: dataset
	    },
	    callback: callback
	  });
	};

	function roundTo(value, places) {
	  var mult = Math.pow(10, places);
	  return Math.round(value * mult) / mult;
	}

	module.exports = MapboxGeocoder;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(15),
	  formatPoints = __webpack_require__(72),
	  makeService = __webpack_require__(14),
	  constants = __webpack_require__(19);

	var MapboxSurface = makeService('MapboxSurface');

	/**
	 * Given a list of locations, retrieve vector tiles, find the nearest
	 * spatial features, extract their data values, and then absolute values and
	 * optionally interpolated values in-between, if the interpolate option is specified.
	 *
	 * Consult the [Surface API](https://www.mapbox.com/developers/api/surface/)
	 * for more documentation.
	 *
	 * @param {string} mapid a Mapbox mapid containing vector tiles against
	 * which we'll query
	 * @param {string} layer layer within the given `mapid` for which to pull
	 * data
	 * @param {Array<string>} fields layer within the given `mapid` for which to pull
	 * data
	 * @param {Array<Object>|string} path either an encoded polyline,
	 * provided as a string, or an array of objects with longitude and latitude
	 * properties, similar to waypoints.
	 * @param {Object} [options={}] additional options meant to tune
	 * the request
	 * @param {string} [options.geojson=false] whether to return data as a
	 * GeoJSON point
	 * @param {string} [options.zoom=maximum] zoom level at which features
	 * are queried
	 * @param {boolean} [options.interpolate=true] Whether to interpolate
	 * between matches in the feature collection.
	 * @param {Function} callback called with (err, results)
	 * @memberof MapboxClient
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var mapboxClient = new MapboxClient('ACCESSTOKEN');
	 */
	MapboxSurface.prototype.surface = function(mapid, layer, fields, path, options, callback) {

	  // permit the options argument to be omitted
	  if (callback === undefined && typeof options === 'function') {
	    callback = options;
	    options = {};
	  }

	  // typecheck arguments
	  assert(typeof mapid === 'string', 'mapid must be a string');
	  assert(typeof layer === 'string', 'layer must be a string');
	  assert(Array.isArray(fields), 'fields must be an array of strings');
	  assert(Array.isArray(path) || typeof path === 'string', 'path must be an array of objects or a string');
	  assert(typeof options === 'object', 'options must be an object');
	  assert(typeof callback === 'function', 'callback must be a function');

	  var interpolate = true,
	    geojson = false;

	  if (options.interpolate !== undefined) {
	    assert(typeof options.interpolate === 'boolean', 'interpolate must be a boolean');
	    interpolate = options.interpolate;
	  }

	  if (options.geojson !== undefined) {
	    assert(typeof options.geojson === 'boolean', 'geojson option must be boolean');
	    geojson = options.geojson;
	  }

	  var surfaceOptions = {
	    geojson: geojson,
	    layer: layer,
	    mapid: mapid,
	    fields: fields.join(','),
	    interpolate: interpolate
	  };

	  if (Array.isArray(path)) {
	    surfaceOptions.points = formatPoints(path);
	  } else {
	    surfaceOptions.encoded_polyline = path;
	  }

	  if (options.zoom !== undefined) {
	    assert(typeof options.zoom === 'number', 'zoom must be a number');
	    surfaceOptions.z = options.zoom;
	  }

	  this.client({
	    path: constants.API_SURFACE,
	    params: surfaceOptions,
	    callback: callback
	  });
	};

	module.exports = MapboxSurface;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assertLocation = __webpack_require__(73);

	/**
	 * Format waypionts in a way that's friendly to the directions and surface
	 * API: comma-separated latitude, longitude pairs with semicolons between
	 * them.
	 * @private
	 * @param {Array<Object>} waypoints array of objects with latitude and longitude
	 * properties
	 * @returns {string} formatted points
	 * @throws {Error} if the input is invalid
	 */
	function formatPoints(waypoints) {
	  return waypoints.map(function(location) {
	    assertLocation(location);
	    return location.longitude + ',' + location.latitude;
	  }).join(';');
	}

	module.exports = formatPoints;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(15);

	/**
	 * Given an object that should be a location, ensure that it has
	 * valid numeric longitude & latitude properties
	 *
	 * @param {Object} location object with longitude and latitude values
	 * @throws {AssertError} if the object is not a valid location
	 * @returns {undefined} nothing
	 * @private
	 */
	function assertLocation(location) {
	  assert(typeof location.latitude === 'number' &&
	    typeof location.longitude === 'number',
	    'location must be an object with numeric latitude & longitude properties');
	  if (location.zoom !== undefined) {
	    assert(typeof location.zoom === 'number', 'zoom must be numeric');
	  }
	}

	module.exports = assertLocation;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(15),
	  formatPoints = __webpack_require__(72),
	  makeService = __webpack_require__(14),
	  constants = __webpack_require__(19);

	var MapboxDirections = makeService('MapboxDirections');

	/**
	 * Find directions from A to B, or between any number of locations.
	 * Consult the [Mapbox Directions API](https://www.mapbox.com/developers/api/directions/)
	 * for more documentation.
	 *
	 * @param {Array<Object>} waypoints an array of objects with `latitude`
	 * and `longitude` properties that represent waypoints in order. Up to
	 * 25 waypoints can be specified.
	 * @param {Object} [options={}] additional options meant to tune
	 * the request
	 * @param {string} [options.profile=mapbox.driving] the directions
	 * profile, which determines how to prioritize different routes.
	 * Options are `'mapbox.driving'`, which assumes transportation via an
	 * automobile and will use highways, `'mapbox.walking'`, which avoids
	 * streets without sidewalks, and `'mapbox.cycling'`, which prefers streets
	 * with bicycle lanes and lower speed limits for transportation via
	 * bicycle.
	 * @param {string} [options.alternatives=true] whether to generate
	 * alternative routes along with the preferred route.
	 * @param {string} [options.instructions=text] format for turn-by-turn
	 * instructions along the route.
	 * @param {string} [options.geometry=geojson] format for the returned
	 * route. Options are `'geojson'`, `'polyline'`, or `false`: `polyline`
	 * yields more compact responses which can be decoded on the client side.
	 * [GeoJSON](http://geojson.org/), the default, is compatible with libraries
	 * like [Mapbox GL](https://www.mapbox.com/mapbox-gl/),
	 * Leaflet and [Mapbox.js](https://www.mapbox.com/mapbox.js/). `false`
	 * omits the geometry entirely and only returns instructions.
	 * @param {Function} callback called with (err, results)
	 * @returns {undefined} nothing, calls callback
	 * @memberof MapboxClient
	 * @example
	 * var mapboxClient = new MapboxClient('ACCESSTOKEN');
	 * mapboxClient.getDirections(
	 *   [
	 *     { latitude: 33.6, longitude: -95.4431 },
	 *     { latitude: 33.2, longitude: -95.4431 } ],
	 *   function(err, res) {
	 *   // res is a document with directions
	 * });
	 *
	 * // With options
	 * mapboxClient.getDirections([
	 *   { latitude: 33.6875431, longitude: -95.4431142 },
	 *   { latitude: 33.6875431, longitude: -95.4831142 }
	 * ], {
	 *   profile: 'mapbox.walking',
	 *   instructions: 'html',
	 *   alternatives: false,
	 *   geometry: 'polyline'
	 * }, function(err, results) {
	 *   console.log(results.origin);
	 * });
	 */
	MapboxDirections.prototype.getDirections = function(waypoints, options, callback) {

	  // permit the options argument to be omitted
	  if (callback === undefined && typeof options === 'function') {
	    callback = options;
	    options = {};
	  }

	  // typecheck arguments
	  assert(Array.isArray(waypoints), 'waypoints must be an array');
	  assert(typeof options === 'object', 'options must be an object');
	  assert(typeof callback === 'function', 'callback must be a function');

	  var encodedWaypoints = formatPoints(waypoints);

	  var profile = 'mapbox.driving',
	    alternatives = true,
	    steps = true,
	    geometry = 'geojson',
	    instructions = 'text';

	  if (options.profile) {
	    assert(typeof options.profile === 'string', 'profile option must be string');
	    profile = options.profile;
	  }

	  if (typeof options.alternatives !== 'undefined') {
	    assert(typeof options.alternatives === 'boolean', 'alternatives option must be boolean');
	    alternatives = options.alternatives;
	  }

	  if (typeof options.steps !== 'undefined') {
	    assert(typeof options.steps === 'boolean', 'steps option must be boolean');
	    steps = options.steps;
	  }

	  if (options.geometry) {
	    assert(typeof options.geometry === 'string', 'geometry option must be string');
	    geometry = options.geometry;
	  }

	  if (options.instructions) {
	    assert(typeof options.instructions === 'string', 'instructions option must be string');
	    instructions = options.instructions;
	  }

	  this.client({
	    path: constants.API_DIRECTIONS,
	    params: {
	      encodedWaypoints: encodedWaypoints,
	      profile: profile,
	      instructions: instructions,
	      geometry: geometry,
	      alternatives: alternatives,
	      steps: steps
	    },
	    callback: callback
	  });
	};

	module.exports = MapboxDirections;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(15),
	  makeService = __webpack_require__(14),
	  constants = __webpack_require__(19);

	var Uploads = module.exports = makeService('MapboxUploads');

	/**
	 * Retrieve a listing of uploads for a particular account.
	 *
	 * This request requires an access token with the uploads:list scope.
	 *
	 * @param {Function} callback called with (err, uploads)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var mapboxClient = new MapboxClient('ACCESSTOKEN');
	 * mapboxClient.listUploads(function(err, uploads) {
	 *   console.log(uploads);
	 *   // [
	 *   //   {
	 *   //     "complete": true,
	 *   //     "tileset": "example.mbtiles",
	 *   //     "error": null,
	 *   //     "id": "abc123",
	 *   //     "modified": "2014-11-21T19:41:10.000Z",
	 *   //     "created": "2014-11-21T19:41:10.000Z",
	 *   //     "owner": "example",
	 *   //     "progress": 1
	 *   //   },
	 *   //   {
	 *   //     "complete": false,
	 *   //     "tileset": "example.foo",
	 *   //     "error": null,
	 *   //     "id": "xyz789",
	 *   //     "modified": "2014-11-21T19:41:10.000Z",
	 *   //     "created": "2014-11-21T19:41:10.000Z",
	 *   //     "owner": "example",
	 *   //     "progress": 0
	 *   //   }
	 *   // ]
	 * });
	 */
	Uploads.prototype.listUploads = function(callback) {
	  assert(typeof callback === 'function', 'callback must be a function');

	  this.client({
	    path: constants.API_UPLOADS,
	    params: { owner: this.owner },
	    callback: callback
	  });
	};

	/**
	 * Retrieve credentials that allow a new file to be staged on Amazon S3
	 * while an upload is processed. All uploads must be staged using these
	 * credentials before being uploaded to Mapbox.
	 *
	 * This request requires an access token with the uploads:write scope.
	 *
	 * @param {Function} callback called with (err, credentials)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var mapboxClient = new MapboxClient('ACCESSTOKEN');
	 * mapboxClient.createUploadCredentials(function(err, credentials) {
	 *   console.log(credentials);
	 *   // {
	 *   //   "accessKeyId": "{accessKeyId}",
	 *   //   "bucket": "somebucket",
	 *   //   "key": "hij456",
	 *   //   "secretAccessKey": "{secretAccessKey}",
	 *   //   "sessionToken": "{sessionToken}",
	 *   //   "url": "{s3 url}"
	 *   // }
	 *
	 *   // Use aws-sdk to stage the file on Amazon S3
	 *   var AWS = require('aws-sdk');
	 *   var s3 = new AWS.S3({
	 *        accessKeyId: credentials.accessKeyId,
	 *        secretAccessKey: credentials.secretAccessKey,
	 *        sessionToken: credentials.sessionToken,
	 *        region: 'us-east-1'
	 *   });
	 *   s3.putObject({
	 *     Bucket: credentials.bucket,
	 *     Key: credentials.key,
	 *     Body: fs.createReadStream('/path/to/file.mbtiles')
	 *   }, function(err, resp) {
	 *   });
	 * });
	 */
	Uploads.prototype.createUploadCredentials = function(callback) {
	  assert(typeof callback === 'function', 'callback must be a function');

	  this.client({
	    path: constants.API_UPLOAD_CREDENTIALS,
	    params: { owner: this.owner },
	    callback: callback
	  });
	};

	/**
	 * Create an new upload with a file previously staged on Amazon S3.
	 *
	 * This request requires an access token with the uploads:write scope.
	 *
	 * @param {Object} options an object that defines the upload's properties
	 * @param {String} options.tileset id of the tileset to create or
	 * replace. This must consist of an account id and a unique key
	 * separated by a period. Reuse of a tileset value will overwrite
	 * existing data. To avoid overwriting existing data, you must ensure
	 * that you are using unique tileset ids.
	 * @param {String} options.url https url of a file staged on Amazon S3.
	 * @param {Function} callback called with (err, upload)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var mapboxClient = new MapboxClient('ACCESSTOKEN');
	 * // Response from a call to createUploadCredentials
	 * var credentials = {
	 *   "accessKeyId": "{accessKeyId}",
	 *   "bucket": "somebucket",
	 *   "key": "hij456",
	 *   "secretAccessKey": "{secretAccessKey}",
	 *   "sessionToken": "{sessionToken}",
	 *   "url": "{s3 url}"
	 * };
	 * mapboxClient.createUpload({
	 *    tileset: [accountid, 'mytileset'].join('.'),
	 *    url: credentials.url
	 * }, function(err, upload) {
	 *   console.log(upload);
	 *   // {
	 *   //   "complete": false,
	 *   //   "tileset": "example.markers",
	 *   //   "error": null,
	 *   //   "id": "hij456",
	 *   //   "modified": "2014-11-21T19:41:10.000Z",
	 *   //   "created": "2014-11-21T19:41:10.000Z",
	 *   //   "owner": "example",
	 *   //   "progress": 0
	 *   // }
	 * });
	 */
	Uploads.prototype.createUpload = function(options, callback) {
	  assert(typeof options === 'object', 'options must be an object');
	  assert(typeof callback === 'function', 'callback must be a function');

	  this.client({
	    path: constants.API_UPLOADS,
	    params: { owner: this.owner },
	    entity: options,
	    callback: callback
	  });
	};

	/**
	 * Retrieve state of an upload.
	 *
	 * This request requires an access token with the uploads:read scope.
	 *
	 * @param {String} upload id of the upload to read
	 * @param {Function} callback called with (err, upload)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var mapboxClient = new MapboxClient('ACCESSTOKEN');
	 * mapboxClient.readUpload('hij456', function(err, upload) {
	 *   console.log(upload);
	 *   // {
	 *   //   "complete": true,
	 *   //   "tileset": "example.markers",
	 *   //   "error": null,
	 *   //   "id": "hij456",
	 *   //   "modified": "2014-11-21T19:41:10.000Z",
	 *   //   "created": "2014-11-21T19:41:10.000Z",
	 *   //   "owner": "example",
	 *   //   "progress": 1
	 *   // }
	 * });
	 */
	Uploads.prototype.readUpload = function(upload, callback) {
	  assert(typeof upload === 'string', 'upload must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');

	  this.client({
	    path: constants.API_UPLOAD,
	    params: {
	      owner: this.owner,
	      upload: upload
	    },
	    callback: callback
	  });
	};

	/**
	 * Delete a completed upload. In-progress uploads cannot be deleted.
	 *
	 * This request requires an access token with the uploads:delete scope.
	 *
	 * @param {Function} callback called with (err)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var mapboxClient = new MapboxClient('ACCESSTOKEN');
	 * mapboxClient.deleteUpload('hij456', function(err) {
	 * });
	 */
	Uploads.prototype.deleteUpload = function(upload, callback) {
	  assert(typeof upload === 'string', 'upload must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');

	  this.client({
	    method: 'delete',
	    path: constants.API_UPLOAD,
	    params: {
	      owner: this.owner,
	      upload: upload
	    },
	    callback: callback
	  });
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(15),
	  geojsonhint = __webpack_require__(77),
	  makeService = __webpack_require__(14),
	  constants = __webpack_require__(19);

	var MapboxMatching = makeService('MapboxMatching');

	/**
	 * Snap recorded location traces to roads and paths from OpenStreetMap.
	 * Consult the [Map Matching API](https://www.mapbox.com/developers/api/map-matching/)
	 * for more documentation.
	 *
	 * @param {Object} trace a single [GeoJSON](http://geojson.org/)
	 * Feature with a LineString geometry, containing up to 100 positions.
	 * @param {Object} [options={}] additional options meant to tune
	 * the request
	 * @param {string} [options.profile=mapbox.driving] the directions
	 * profile, which determines how to prioritize different routes.
	 * Options are `'mapbox.driving'`, which assumes transportation via an
	 * automobile and will use highways, `'mapbox.walking'`, which avoids
	 * streets without sidewalks, and `'mapbox.cycling'`, which prefers streets
	 * with bicycle lanes and lower speed limits for transportation via
	 * bicycle.
	 * @param {string} [options.geometry=geojson] format for the returned
	 * route. Options are `'geojson'`, `'polyline'`, or `false`: `polyline`
	 * yields more compact responses which can be decoded on the client side.
	 * [GeoJSON](http://geojson.org/), the default, is compatible with libraries
	 * like [Mapbox GL](https://www.mapbox.com/mapbox-gl/),
	 * Leaflet and [Mapbox.js](https://www.mapbox.com/mapbox.js/). `false`
	 * omits the geometry entirely and only returns matched points.
	 * @param {number} [options.gps_precision=4] An integer in meters indicating
	 * the assumed precision of the used tracking device. Use higher
	 * numbers (5-10) for noisy traces and lower numbers (1-3) for clean
	 * traces. The default value is 4.
	 * @param {Function} callback called with (err, results)
	 * @returns {undefined} nothing, calls callback
	 * @memberof MapboxClient
	 * @example
	 * var mapboxClient = new MapboxClient('ACCESSTOKEN');
	 * mapboxClient.matching({
	 *   "type": "Feature",
	 *   "properties": {
	 *     "coordTimes": [
	 *       "2015-04-21T06:00:00Z",
	 *       "2015-04-21T06:00:05Z",
	 *       "2015-04-21T06:00:10Z",
	 *       "2015-04-21T06:00:15Z",
	 *       "2015-04-21T06:00:20Z"
	 *     ]
	 *     },
	 *   "geometry": {
	 *     "type": "LineString",
	 *     "coordinates": [
	 *       [ 13.418946862220764, 52.50055852688439 ],
	 *       [ 13.419011235237122, 52.50113000479732 ],
	 *       [ 13.419756889343262, 52.50171780290061 ],
	 *       [ 13.419885635375975, 52.50237416816131 ],
	 *       [ 13.420631289482117, 52.50294888790448 ]
	 *     ]
	 *   }
	 * },
	 *   function(err, res) {
	 *   // res is a document with directions
	 * });
	 */
	MapboxMatching.prototype.matching = function(trace, options, callback) {

	  // permit the options argument to be omitted
	  if (callback === undefined && typeof options === 'function') {
	    callback = options;
	    options = {};
	  }

	  // typecheck arguments
	  assert(geojsonhint.hint(trace).length === 0, 'trace must be valid GeoJSON');
	  assert(typeof options === 'object', 'options must be an object');
	  assert(typeof callback === 'function', 'callback must be a function');

	  var profile = 'mapbox.driving',
	    gps_precision = 4,
	    geometry = 'geojson';


	  if (options.gps_precision !== undefined) {
	    assert(typeof options.gps_precision === 'number', 'gps_precision must be a number');
	    gps_precision = options.gps_precision;
	  }

	  if (options.profile) {
	    assert(typeof options.profile === 'string', 'profile option must be string');
	    profile = options.profile;
	  }

	  if (options.geometry) {
	    assert(typeof options.geometry === 'string', 'geometry option must be string');
	    geometry = options.geometry;
	  }

	  this.client({
	    path: constants.API_MATCHING,
	    params: {
	      profile: profile,
	      geometry: geometry,
	      gps_precision: gps_precision
	    },
	    method: 'post',
	    entity: trace,
	    callback: callback
	  });
	};

	module.exports = MapboxMatching;


/***/ },
/* 77 */
/***/ function(module, exports) {

	/**
	 * @alias geojsonhint
	 * @param {(string|object)} GeoJSON given as a string or as an object
	 * @returns {Array<Object>} an array of errors
	 */
	function hint(gj) {

	    var errors = [];

	    function root(_) {
	        if (!_.type) {
	            errors.push({
	                message: 'The type property is required and was not found',
	                line: _.__line__
	            });
	        } else if (!types[_.type]) {
	            errors.push({
	                message: 'The type ' + _.type + ' is unknown',
	                line: _.__line__
	            });
	        } else if (_) {
	            types[_.type](_);
	        }
	    }

	    function everyIs(_, type) {
	        // make a single exception because typeof null === 'object'
	        return _.every(function(x) { return (x !== null) && (typeof x === type); });
	    }

	    function requiredProperty(_, name, type) {
	        if (typeof _[name] === 'undefined') {
	            return errors.push({
	                message: '"' + name + '" property required',
	                line: _.__line__
	            });
	        } else if (type === 'array') {
	            if (!Array.isArray(_[name])) {
	                return errors.push({
	                    message: '"' + name +
	                        '" property should be an array, but is an ' +
	                        (typeof _[name]) + ' instead',
	                    line: _.__line__
	                });
	            }
	        } else if (type && typeof _[name] !== type) {
	            return errors.push({
	                message: '"' + name +
	                    '" property should be ' + (type) +
	                    ', but is an ' + (typeof _[name]) + ' instead',
	                line: _.__line__
	            });
	        }
	    }

	    // http://geojson.org/geojson-spec.html#feature-collection-objects
	    function FeatureCollection(_) {
	        crs(_);
	        bbox(_);
	        if (!requiredProperty(_, 'features', 'array')) {
	            if (!everyIs(_.features, 'object')) {
	                return errors.push({
	                    message: 'Every feature must be an object',
	                    line: _.__line__
	                });
	            }
	            _.features.forEach(Feature);
	        }
	    }

	    // http://geojson.org/geojson-spec.html#positions
	    function position(_, line) {
	        if (!Array.isArray(_)) {
	            return errors.push({
	                message: 'position should be an array, is a ' + (typeof _) +
	                    ' instead',
	                line: _.__line__ || line
	            });
	        } else {
	            if (_.length < 2) {
	                return errors.push({
	                    message: 'position must have 2 or more elements',
	                    line: _.__line__ || line
	                });
	            }
	            if (!everyIs(_, 'number')) {
	                return errors.push({
	                    message: 'each element in a position must be a number',
	                    line: _.__line__ || line
	                });
	            }
	        }
	    }

	    function positionArray(coords, type, depth, line) {
	        if (line === undefined && coords.__line__ !== undefined) {
	            line = coords.__line__;
	        }
	        if (depth === 0) {
	            return position(coords, line);
	        } else {
	            if (depth === 1 && type) {
	                if (type === 'LinearRing') {
	                    if (!Array.isArray(coords[coords.length - 1])) {
	                        return errors.push({
	                            message: 'a number was found where a coordinate array should have been found: this needs to be nested more deeply',
	                            line: line
	                        });
	                    }
	                    if (coords.length < 4) {
	                        errors.push({
	                            message: 'a LinearRing of coordinates needs to have four or more positions',
	                            line: line
	                        });
	                    }
	                    if (coords.length &&
	                        (coords[coords.length - 1].length !== coords[0].length ||
	                        !coords[coords.length - 1].every(function(position, index) {
	                        return coords[0][index] === position;
	                    }))) {
	                        errors.push({
	                            message: 'the first and last positions in a LinearRing of coordinates must be the same',
	                            line: line
	                        });
	                    }
	                } else if (type === 'Line' && coords.length < 2) {
	                    errors.push({
	                        message: 'a line needs to have two or more coordinates to be valid',
	                        line: line
	                    });
	                }
	            }
	            coords.forEach(function(c) {
	                positionArray(c, type, depth - 1, c.__line__ || line);
	            });
	        }
	    }

	    function crs(_) {
	        if (!_.crs) return;
	        if (typeof _.crs === 'object') {
	            var strErr = requiredProperty(_.crs, 'type', 'string'),
	                propErr = requiredProperty(_.crs, 'properties', 'object');
	            if (!strErr && !propErr) {
	                // http://geojson.org/geojson-spec.html#named-crs
	                if (_.crs.type === 'name') {
	                    requiredProperty(_.crs.properties, 'name', 'string');
	                } else if (_.crs.type === 'link') {
	                    requiredProperty(_.crs.properties, 'href', 'string');
	                }
	            }
	        } else {
	            errors.push({
	                message: 'the value of the crs property must be an object, not a ' + (typeof _.crs),
	                line: _.__line__
	            });
	        }
	    }

	    function bbox(_) {
	        if (!_.bbox) { return; }
	        if (Array.isArray(_.bbox)) {
	            if (!everyIs(_.bbox, 'number')) {
	                return errors.push({
	                    message: 'each element in a bbox property must be a number',
	                    line: _.bbox.__line__
	                });
	            }
	        } else {
	            errors.push({
	                message: 'bbox property must be an array of numbers, but is a ' + (typeof _.bbox),
	                line: _.__line__
	            });
	        }
	    }

	    // http://geojson.org/geojson-spec.html#point
	    function Point(_) {
	        crs(_);
	        bbox(_);
	        if (!requiredProperty(_, 'coordinates', 'array')) {
	            position(_.coordinates);
	        }
	    }

	    // http://geojson.org/geojson-spec.html#polygon
	    function Polygon(_) {
	        crs(_);
	        bbox(_);
	        if (!requiredProperty(_, 'coordinates', 'array')) {
	            positionArray(_.coordinates, 'LinearRing', 2);
	        }
	    }

	    // http://geojson.org/geojson-spec.html#multipolygon
	    function MultiPolygon(_) {
	        crs(_);
	        bbox(_);
	        if (!requiredProperty(_, 'coordinates', 'array')) {
	            positionArray(_.coordinates, 'LinearRing', 3);
	        }
	    }

	    // http://geojson.org/geojson-spec.html#linestring
	    function LineString(_) {
	        crs(_);
	        bbox(_);
	        if (!requiredProperty(_, 'coordinates', 'array')) {
	            positionArray(_.coordinates, 'Line', 1);
	        }
	    }

	    // http://geojson.org/geojson-spec.html#multilinestring
	    function MultiLineString(_) {
	        crs(_);
	        bbox(_);
	        if (!requiredProperty(_, 'coordinates', 'array')) {
	            positionArray(_.coordinates, 'Line', 2);
	        }
	    }

	    // http://geojson.org/geojson-spec.html#multipoint
	    function MultiPoint(_) {
	        crs(_);
	        bbox(_);
	        if (!requiredProperty(_, 'coordinates', 'array')) {
	            positionArray(_.coordinates, '', 1);
	        }
	    }

	    function GeometryCollection(_) {
	        crs(_);
	        bbox(_);
	        if (!requiredProperty(_, 'geometries', 'array')) {
	            _.geometries.forEach(function(geometry) {
	                if (geometry) root(geometry);
	            });
	        }
	    }

	    function Feature(_) {
	        crs(_);
	        bbox(_);
	        // https://github.com/geojson/draft-geojson/blob/master/middle.mkd#feature-object
	        if (_.id !== undefined &&
	            typeof _.id !== 'string' &&
	            typeof _.id !== 'number') {
	            errors.push({
	                message: 'Feature "id" property must have a string or number value',
	                line: _.__line__
	            });
	        }
	        if (_.type !== 'Feature') {
	            errors.push({
	                message: 'GeoJSON features must have a type=feature property',
	                line: _.__line__
	            });
	        }
	        requiredProperty(_, 'properties', 'object');
	        if (!requiredProperty(_, 'geometry', 'object')) {
	            // http://geojson.org/geojson-spec.html#feature-objects
	            // tolerate null geometry
	            if (_.geometry) root(_.geometry);
	        }
	    }

	    var types = {
	        Point: Point,
	        Feature: Feature,
	        MultiPoint: MultiPoint,
	        LineString: LineString,
	        MultiLineString: MultiLineString,
	        FeatureCollection: FeatureCollection,
	        GeometryCollection: GeometryCollection,
	        Polygon: Polygon,
	        MultiPolygon: MultiPolygon
	    };

	    if (typeof gj !== 'object' ||
	        gj === null ||
	        gj === undefined) {
	        errors.push({
	            message: 'The root of a GeoJSON object must be an object.',
	            line: 0
	        });
	        return errors;
	    }

	    root(gj);

	    errors.forEach(function(err) {
	        if (err.hasOwnProperty('line') && err.line === undefined) {
	            delete err.line;
	        }
	    });

	    return errors;
	}

	module.exports.hint = hint;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(15),
	  geojsonhint = __webpack_require__(77),
	  hat = __webpack_require__(79),
	  makeService = __webpack_require__(14),
	  constants = __webpack_require__(19);

	var Datasets = module.exports = makeService('MapboxDatasets');

	/**
	 * To retrieve a listing of datasets for a particular account.
	 * This request requires an access token with the datasets:read scope.
	 *
	 * @param {Function} callback called with (err, datasets)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var MapboxClient = require('mapbox');
	 * var client = new MapboxClient('ACCESSTOKEN');
	 * client.listDatasets(function(err, datasets) {
	 *   console.log(datasets);
	 *   // [
	 *   //   {
	 *   //     "owner": {account},
	 *   //     "id": {dataset id},
	 *   //     "name": {dataset name},
	 *   //     "description": {dataset description},
	 *   //     "created": {timestamp},
	 *   //     "modified": {timestamp}
	 *   //   },
	 *   //   {
	 *   //     "owner": {account},
	 *   //     "id": {dataset id},
	 *   //     "name": {dataset name},
	 *   //     "description": {dataset description},
	 *   //     "created": {timestamp},
	 *   //     "modified": {timestamp}
	 *   //   }
	 *   // ]
	 * });
	 */
	Datasets.prototype.listDatasets = function(callback) {
	  assert(typeof callback === 'function', 'callback must be a function');

	  this.client({
	    path: constants.API_DATASET_DATASETS,
	    params: {
	      owner: this.owner
	    },
	    callback: callback
	  });
	};

	/**
	 * To create a new dataset. Valid properties include title and description (not required).
	 * This request requires an access token with the datasets:write scope.
	 *
	 * @param {object} [options] an object defining a dataset's properties
	 * @param {string} [options.name] the dataset's name
	 * @param {string} [options.description] the dataset's description
	 * @param {Function} callback called with (err, dataset)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var MapboxClient = require('mapbox');
	 * var client = new MapboxClient('ACCESSTOKEN');
	 * client.createDataset({ name: 'foo', description: 'bar' }, function(err, dataset) {
	 *   console.log(dataset);
	 *   // {
	 *   //   "owner": {account},
	 *   //   "id": {dataset id},
	 *   //   "name": "foo",
	 *   //   "description": "description",
	 *   //   "created": {timestamp},
	 *   //   "modified": {timestamp}
	 *   // }
	 * });
	 */
	Datasets.prototype.createDataset = function(options, callback) {
	  // permit the options argument to be omitted
	  if (callback === undefined && typeof options === 'function') {
	    callback = options;
	    options = {};
	  }

	  assert(typeof options === 'object', 'options must be an object');
	  assert(typeof callback === 'function', 'callback must be a function');

	  this.client({
	    path: constants.API_DATASET_DATASETS,
	    params: {
	      owner: this.owner
	    },
	    entity: options,
	    callback: callback
	  });
	};

	/**
	 * To retrieve information about a particular dataset.
	 * This request requires an access token with the datasets:read scope.
	 *
	 * @param {string} dataset the id for an existing dataset
	 * @param {Function} callback called with (err, dataset)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var MapboxClient = require('mapbox');
	 * var client = new MapboxClient('ACCESSTOKEN');
	 * client.readDataset('dataset-id', function(err, dataset) {
	 *   console.log(dataset);
	 *   // {
	 *   //   "owner": {account},
	 *   //   "id": "dataset-id",
	 *   //   "name": {dataset name},
	 *   //   "description": {dataset description},
	 *   //   "created": {timestamp},
	 *   //   "modified": {timestamp}
	 *   // }
	 * });
	 */
	Datasets.prototype.readDataset = function(dataset, callback) {
	  assert(typeof dataset === 'string', 'dataset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');

	  this.client({
	    path: constants.API_DATASET_DATASET,
	    params: {
	      owner: this.owner,
	      dataset: dataset
	    },
	    callback: callback
	  });
	};

	/**
	 * To make updates to a particular dataset's properties.
	 * This request requires an access token with the datasets:write scope.
	 *
	 * @param {string} dataset the id for an existing dataset
	 * @param {object} [options] an object defining updates to the dataset's properties
	 * @param {string} [options.name] the updated dataset's name
	 * @param {string} [options.description] the updated dataset's description
	 * @param {Function} callback called with (err, dataset)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var MapboxClient = require('mapbox');
	 * var client = new MapboxClient('ACCESSTOKEN');
	 * var options = { name: 'foo' };
	 * client.updateDataset('dataset-id', options, function(err, dataset) {
	 *   console.log(dataset);
	 *   // {
	 *   //   "owner": {account},
	 *   //   "id": "dataset-id",
	 *   //   "name": "foo",
	 *   //   "description": {dataset description},
	 *   //   "created": {timestamp},
	 *   //   "modified": {timestamp}
	 *   // }
	 * });
	 */
	Datasets.prototype.updateDataset = function(dataset, options, callback) {
	  assert(typeof dataset === 'string', 'dataset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');
	  assert(typeof options === 'object', 'options must be an object');
	  assert(!!options.name || !!options.description, 'options must include a name or a description');

	  this.client({
	    path: constants.API_DATASET_DATASET,
	    params: {
	      owner: this.owner,
	      dataset: dataset
	    },
	    method: 'patch',
	    entity: options,
	    callback: callback
	  });
	};

	/**
	 * To delete a particular dataset.
	 * This request requires an access token with the datasets:write scope.
	 *
	 * @param {string} dataset the id for an existing dataset
	 * @param {Function} callback called with (err)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var MapboxClient = require('mapbox');
	 * var client = new MapboxClient('ACCESSTOKEN');
	 * client.deleteDataset('dataset-id', function(err) {
	 *   if (!err) console.log('deleted!');
	 * });
	 */
	Datasets.prototype.deleteDataset = function(dataset, callback) {
	  assert(typeof dataset === 'string', 'dataset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');

	  this.client({
	    path: constants.API_DATASET_DATASET,
	    params: {
	      owner: this.owner,
	      dataset: dataset
	    },
	    method: 'delete',
	    callback: callback
	  });
	};

	/**
	 * Retrive a list of the features in a particular dataset. The response body will be a GeoJSON FeatureCollection.
	 * This request requires an access token with the datasets:read scope.
	 *
	 * @param {string} dataset the id for an existing dataset
	 * @param {Function} callback called with (err, collection)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var MapboxClient = require('mapbox');
	 * var client = new MapboxClient('ACCESSTOKEN');
	 * client.listFeatures('dataset-id', function(err, collection) {
	 *   console.log(collection);
	 *   {
	 *     "type": "FeatureCollection",
	 *     "features": [
	 *       {
	 *         "id": {feature id},
	 *         "type": "Feature",
	 *         "properties": {feature properties}
	 *         "geometry": {feature geometry}
	 *       },
	 *       {
	 *         "id": {feature id},
	 *         "type": "Feature",
	 *         "properties": {feature properties}
	 *         "geometry": {feature geometry}
	 *       }
	 *     ]
	 *   }
	 * });
	 */
	Datasets.prototype.listFeatures = function(dataset, callback) {
	  assert(typeof dataset === 'string', 'dataset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');

	  this.client({
	    path: constants.API_DATASET_FEATURES,
	    params: {
	      owner: this.owner,
	      dataset: dataset
	    },
	    callback: callback
	  });
	};

	/**
	 * Insert a feature into a dataset. This can be a new feature, or overwrite an existing one.
	 * If overwriting an existing feature, make sure that the feature's `id` property correctly identifies
	 * the feature you wish to overwrite.
	 * For new features, specifying an `id` is optional. If you do not specify an `id`, one will be assigned
	 * and returned as part of the response.
	 * This request requires an access token with the datasets:write scope.
	 * There are a number of limits to consider when making this request:
	 *   - a single feature cannot be larger than 500 KB
	 *   - the dataset must not exceed 2000 total features
	 *   - the dataset must not exceed a total of 5 MB
	 *
	 * @param {object} feature the feature to insert. Must be a valid GeoJSON feature per http://geojson.org/geojson-spec.html#feature-objects
	 * @param {string} dataset the id for an existing dataset
	 * @param {Function} callback called with (err, feature)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * // Insert a brand new feature without an id
	 * var MapboxClient = require('mapbox');
	 * var client = new MapboxClient('ACCESSTOKEN');
	 * var feature = {
	 *   "type": "Feature",
	 *   "properties": {
	 *     "name": "Null Island"
	 *   },
	 *   "geometry": {
	 *     "type": "Point",
	 *     "coordinates": [0, 0]
	 *   }
	 * };
	 * client.insertFeature(feature, 'dataset-id', function(err, feature) {
	 *   console.log(feature);
	 *   // {
	 *   //   "id": {feature id},
	 *   //   "type": "Feature",
	 *   //   "properties": {
	 *   //     "name": "Null Island"
	 *   //   },
	 *   //   "geometry": {
	 *   //     "type": "Point",
	 *   //     "coordinates": [0, 0]
	 *   //   }
	 *   // }
	 * });
	 * @example
	 * // Insert a brand new feature with an id, or overwrite an existing feature at that id
	 * var MapboxClient = require('mapbox');
	 * var client = new MapboxClient('ACCESSTOKEN');
	 * var feature = {
	 *   "id": "feature-id",
	 *   "type": "Feature",
	 *   "properties": {
	 *     "name": "Null Island"
	 *   },
	 *   "geometry": {
	 *     "type": "Point",
	 *     "coordinates": [0, 0]
	 *   }
	 * };
	 * client.insertFeature(feature, 'dataset-id', function(err, feature) {
	 *   console.log(feature);
	 *   // {
	 *   //   "id": "feature-id",
	 *   //   "type": "Feature",
	 *   //   "properties": {
	 *   //     "name": "Null Island"
	 *   //   },
	 *   //   "geometry": {
	 *   //     "type": "Point",
	 *   //     "coordinates": [0, 0]
	 *   //   }
	 *   // }
	 * });
	 */
	Datasets.prototype.insertFeature = function(feature, dataset, callback) {
	  assert(typeof dataset === 'string', 'dataset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');
	  assert(geojsonhint.hint(feature).length === 0, 'feature must be valid GeoJSON');

	  var id = feature.id || hat();
	  assert(typeof id === 'string', 'The GeoJSON feature\'s id must be a string');

	  this.client({
	    path: constants.API_DATASET_FEATURE,
	    params: {
	      owner: this.owner,
	      dataset: dataset,
	      id: id
	    },
	    method: 'put',
	    entity: feature,
	    callback: callback
	  });
	};

	/**
	 * Read an existing feature from a dataset.
	 * This request requires an access token with the datasets:read scope.
	 *
	 * @param {string} id the `id` of the feature to read
	 * @param {string} dataset the id for an existing dataset
	 * @param {Function} callback called with (err, feature)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var MapboxClient = require('mapbox');
	 * var client = new MapboxClient('ACCESSTOKEN');
	 * client.readFeature('feature-id', 'dataset-id', function(err, feature) {
	 *   console.log(feature);
	 *   // {
	 *   //   "id": "feature-id",
	 *   //   "type": "Feature",
	 *   //   "properties": {
	 *   //     "name": "Null Island"
	 *   //   },
	 *   //   "geometry": {
	 *   //     "type": "Point",
	 *   //     "coordinates": [0, 0]
	 *   //   }
	 *   // }
	 * });
	 */
	Datasets.prototype.readFeature = function(id, dataset, callback) {
	  assert(typeof id === 'string', 'id must be a string');
	  assert(typeof dataset === 'string', 'dataset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');

	  this.client({
	    path: constants.API_DATASET_FEATURE,
	    params: {
	      owner: this.owner,
	      dataset: dataset,
	      id: id
	    },
	    callback: callback
	  });
	};

	/**
	 * Delete an existing feature from a dataset.
	 * This request requires an access token with the datasets:write scope.
	 *
	 * @param {string} id the `id` of the feature to read
	 * @param {string} dataset the id for an existing dataset
	 * @param {Function} callback called with (err)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var MapboxClient = require('mapbox');
	 * var client = new MapboxClient('ACCESSTOKEN');
	 * client.deleteFeature('feature-id', 'dataset-id', function(err, feature) {
	 *   if (!err) console.log('deleted!');
	 * });
	 */
	Datasets.prototype.deleteFeature = function(id, dataset, callback) {
	  assert(typeof id === 'string', 'id must be a string');
	  assert(typeof dataset === 'string', 'dataset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');

	  this.client({
	    path: constants.API_DATASET_FEATURE,
	    params: {
	      owner: this.owner,
	      dataset: dataset,
	      id: id
	    },
	    method: 'delete',
	    callback: callback
	  });
	};

	/**
	 * Perform a batch of inserts, updates, and deletes to a dataset in a single combined request.
	 * This request requires an access token with the datasets:write scope.
	 * There are a number of limits to consider when making this request:
	 *   - you can send a total of 100 changes (sum of puts + deletes) in a single request
	 *   - any single feature cannot be larger than 500 KB
	 *   - the dataset must not exceed 2000 total features
	 *   - the dataset must not exceed a total of 5 MB
	 *
	 * @param {object} update an object describing features in insert and/or delete
	 * @param {Array<object>} [update.put] features to insert. Each feature must be a valid GeoJSON feature per http://geojson.org/geojson-spec.html#feature-objects
	 * @param {Array<string>} [update.delete] ids of features to delete
	 * @param {string} dataset the id for an existing dataset
	 * @param {Function} callback called with (err, results)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var MapboxClient = require('mapbox');
	 * var client = new MapboxClient('ACCESSTOKEN');
	 * var inserts = [
	 *   {
	 *     "id": "1",
	 *     "type": "Feature",
	 *     "properties": {
	 *       "name": "Null Island"
	 *     },
	 *     "geometry": {
	 *       "type": "Point",
	 *       "coordinates": [0, 0]
	 *     }
	 *   },
	 *   {
	 *     "id": "2",
	 *     "type": "Feature",
	 *     "properties": {
	 *       "name": "Offshore from Null Island"
	 *     },
	 *     "geometry": {
	 *       "type": "Point",
	 *       "coordinates": [0.01, 0.01]
	 *     }
	 *   }
	 * ];
	 * var deletes =[
	 *   'feature-id-1',
	 *   'feature-id-2'
	 * ];
	 * client.bulkFeatureUpdate({ put: inserts, delete: deletes }, dataset, function(err, results) {
	 *  console.log(results);
	 * // {
	 * //   "put": [
	 * //     {
	 * //       "id": {feature-id},
	 * //       "type": "Feature",
	 * //       "properties": {
	 * //         "name": "Null Island"
	 * //       },
	 * //       "geometry": {
	 * //         "type": "Point",
	 * //         "coordinates": [0, 0]
	 * //       }
	 * //     },
	 * //     {
	 * //       "id": {feature-id},
	 * //       "type": "Feature",
	 * //       "properties": {
	 * //         "name": "Offshore from Null Island"
	 * //       },
	 * //       "geometry": {
	 * //         "type": "Point",
	 * //         "coordinates": [0.01, 0.01]
	 * //       }
	 * //     }
	 * //   ],
	 * //   "delete": [
	 * //     "feature-id-1",
	 * //     "feature-id-2"
	 * //   ]
	 * // }
	 * });
	 */
	Datasets.prototype.bulkFeatureUpdate = function(update, dataset, callback) {
	  assert(typeof update === 'object', 'update must be an object');
	  assert(typeof dataset === 'string', 'dataset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');

	  var inserts = update.put || [];
	  var deletes = update.delete || [];

	  assert(
	    geojsonhint.hint({type: 'FeatureCollection', features: inserts}).length === 0,
	    'update.put must be an array of valid GeoJSON features'
	  );
	  assert(
	    inserts.every(function(feature) { return feature.id; }),
	    'inserted GeoJSON features must include ids'
	  );

	  assert(
	    deletes.every(function(id) { return typeof id === 'string'; }),
	    'update.delete must be an array of strings'
	  );

	  this.client({
	    path: constants.API_DATASET_FEATURES,
	    params: {
	      owner: this.owner,
	      dataset: dataset
	    },
	    method: 'post',
	    entity: { put: inserts, delete: deletes },
	    callback: callback
	  });
	};


/***/ },
/* 79 */
/***/ function(module, exports) {

	var hat = module.exports = function (bits, base) {
	    if (!base) base = 16;
	    if (bits === undefined) bits = 128;
	    if (bits <= 0) return '0';
	    
	    var digits = Math.log(Math.pow(2, bits)) / Math.log(base);
	    for (var i = 2; digits === Infinity; i *= 2) {
	        digits = Math.log(Math.pow(2, bits / i)) / Math.log(base) * i;
	    }
	    
	    var rem = digits - Math.floor(digits);
	    
	    var res = '';
	    
	    for (var i = 0; i < Math.floor(digits); i++) {
	        var x = Math.floor(Math.random() * base).toString(base);
	        res = x + res;
	    }
	    
	    if (rem) {
	        var b = Math.pow(base, rem);
	        var x = Math.floor(Math.random() * b).toString(base);
	        res = x + res;
	    }
	    
	    var parsed = parseInt(res, base);
	    if (parsed !== Infinity && parsed >= Math.pow(2, bits)) {
	        return hat(bits, base)
	    }
	    else return res;
	};

	hat.rack = function (bits, base, expandBy) {
	    var fn = function (data) {
	        var iters = 0;
	        do {
	            if (iters ++ > 10) {
	                if (expandBy) bits += expandBy;
	                else throw new Error('too many ID collisions, use more bits')
	            }
	            
	            var id = hat(bits, base);
	        } while (Object.hasOwnProperty.call(hats, id));
	        
	        hats[id] = data;
	        return id;
	    };
	    var hats = fn.hats = {};
	    
	    fn.get = function (id) {
	        return fn.hats[id];
	    };
	    
	    fn.set = function (id, value) {
	        fn.hats[id] = value;
	        return fn;
	    };
	    
	    fn.bits = bits || 128;
	    fn.base = base || 16;
	    return fn;
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(15),
	  makeService = __webpack_require__(14),
	  constants = __webpack_require__(19);

	var MapboxDistance = makeService('MapboxDistance');

	/**
	 * Compute a table of travel-time estimates between a set of waypoints.
	 * Consult the [Mapbox Distance API](https://www.mapbox.com/developers/api/distance/)
	 * for more documentation.
	 *
	 * @param {Array<Array<number>>} waypoints an array of coordinate pairs
	 * in [longitude, latitude] order. Up to
	 * 100 waypoints can be specified.
	 * @param {Object} [options={}] additional options meant to tune
	 * the request
	 * @param {string} [options.profile=driving] the directions
	 * profile, which determines how to prioritize different routes.
	 * Options are `'driving'`, which assumes transportation via an
	 * automobile and will use highways, `'walking'`, which avoids
	 * streets without sidewalks, and `'cycling'`, which prefers streets
	 * with bicycle lanes and lower speed limits for transportation via
	 * bicycle.
	 * @param {Function} callback called with (err, results)
	 * @returns {undefined} nothing, calls callback
	 * @memberof MapboxClient
	 * @example
	 * var mapboxClient = new MapboxClient('ACCESSTOKEN');
	 * // With options
	 * mapboxClient.getDistances([
	 *   [-95.4431142, 33.6875431],
	 *   [-95.0431142, 33.6875431],
	 *   [-95.0431142, 33.0875431],
	 *   [-95.0431142, 33.0175431],
	 *   [-95.4831142, 33.6875431]
	 * ], {
	 *   profile: 'walking'
	 * }, function(err, results) {
	 *   console.log(results);
	 * });
	 *
	 * // Results is an object like:
	 * { durations:
	 *   [ [ 0, 1196, 3977, 3415, 5196 ],
	 *     [ 1207, 0, 3775, 3213, 4993 ],
	 *     [ 3976, 3774, 0, 2650, 2579 ],
	 *     [ 3415, 3212, 2650, 0, 3869 ],
	 *     [ 5208, 5006, 2579, 3882, 0 ] ] }
	 *
	 * // If the coordinates include an un-routable place, then
	 * // the table may contain 'null' values to indicate this, like
	 * { durations:
	 *   [ [ 0, 11642, 57965, null, 72782 ],
	 *     [ 11642, 0, 56394, null, 69918 ],
	 *     [ 57965, 56394, 0, null, 19284 ],
	 *     [ null, null, null, 0, null ],
	 *     [ 72782, 69918, 19284, null, 0 ] ] }
	 */
	MapboxDistance.prototype.getDistances = function(waypoints, options, callback) {

	  // permit the options argument to be omitted
	  if (callback === undefined && typeof options === 'function') {
	    callback = options;
	    options = {};
	  }

	  // typecheck arguments
	  assert(Array.isArray(waypoints), 'waypoints must be an array');

	  var profile = 'driving';

	  if (options.profile) {
	    assert(typeof options.profile === 'string', 'profile option must be string');
	    profile = options.profile;
	  }

	  this.client({
	    path: constants.API_DISTANCE,
	    params: {
	      profile: profile
	    },
	    entity: {
	      coordinates: waypoints
	    },
	    method: 'post',
	    callback: callback
	  });
	};

	module.exports = MapboxDistance;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(15),
	  makeService = __webpack_require__(14),
	  constants = __webpack_require__(19);

	var Tilestats = module.exports = makeService('MapboxTilestats');

	/**
	 * To create an empty set of tileset statistics.
	 *
	 * @private
	 * @param {String} tileset - the id for the tileset
	 * @param {Array<string>} layers - an array of layer names in the tileset
	 * @param {Function} callback called with (err, tilestats)
	 * @returns {undefined} nothing, calls callback
	 */
	Tilestats.prototype.createTilestats = function(tileset, layers, callback) {
	  assert(typeof tileset === 'string', 'tileset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');
	  assert(Array.isArray(layers), 'layers must be an array');
	  assert(layers.every(function(layer) {
	    return typeof layer === 'string';
	  }), 'layers must be an array of strings');

	  var owner = tileset.split('.')[0];
	  if (owner === tileset) owner = this.owner;

	  this.client({
	    path: constants.API_TILESTATS_STATISTICS,
	    params: {
	      owner: owner,
	      tileset: tileset
	    },
	    entity: { layers: layers },
	    method: 'post',
	    callback: callback
	  });
	};

	/**
	 * To delete a set of tileset statistics.
	 *
	 * @private
	 * @param {String} tileset - the id for the tileset
	 * @param {Function} callback called with (err)
	 * @returns {undefined} nothing, calls callback
	 */
	Tilestats.prototype.deleteTilestats = function(tileset, callback) {
	  assert(typeof tileset === 'string', 'tileset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');

	  var owner = tileset.split('.')[0];
	  if (owner === tileset) owner = this.owner;

	  this.client({
	    path: constants.API_TILESTATS_STATISTICS,
	    params: {
	      owner: owner,
	      tileset: tileset
	    },
	    method: 'delete',
	    callback: callback
	  });
	};

	/**
	 * To retrieve statistics about a specific tileset.
	 *
	 * @param {String} tileset - the id for the tileset
	 * @param {Function} callback called with (err, tilestats)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var client = new MapboxClient('ACCESSTOKEN');
	 * client.getTilestats('tileset-id', function(err, info) {
	 *   console.log(info);
	 *   // {
	 *   //   "account": {account},
	 *   //   "tilesetid": "tileset-id",
	 *   //   "layers": [
	 *   //     {
	 *   //       "account": {account},
	 *   //       "tilesetid": "tileset-id",
	 *   //       "layer": {layername},
	 *   //       "count": 10,
	 *   //       "attributes": [
	 *   //         {
	 *   //           "attribute": {attributename},
	 *   //           "min": 0,
	 *   //           "max": 10,
	 *   //           "values": [0, 10]
	 *   //         }
	 *   //       ]
	 *   //     }
	 *   //   ]
	 *   // }
	 * });
	 */
	Tilestats.prototype.getTilestats = function(tileset, callback) {
	  assert(typeof tileset === 'string', 'tileset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');

	  var owner = tileset.split('.')[0];
	  if (owner === tileset) owner = this.owner;

	  this.client({
	    path: constants.API_TILESTATS_STATISTICS,
	    params: {
	      owner: owner,
	      tileset: tileset
	    },
	    callback: callback
	  });
	};

	/**
	 * Add or update information about geometry types present in a tileset layer.
	 * This request may be made multiple times against a single layer, in order to
	 * update the total geometry counts across a set of parallel tileset reads.
	 *
	 * @private
	 * @param {String} tileset - the id for the tileset
	 * @param {String} layer - the name of the layer in the tileset
	 * @param {Object} geometries - an object indicating the number of features present
	 * in the layer of various geometry types.
	 * @param {Number} [geometries.point] - number of Point features
	 * @param {Number} [geometries.multipoint] - number of MultiPoint features
	 * @param {Number} [geometries.linestring] - number of LineString features
	 * @param {Number} [geometries.multilinestring] - number of MultiLineString features
	 * @param {Number} [geometries.polygon] - number of Polygon features
	 * @param {Number} [geometries.multipolygon] - number of MultiPolygon features
	 * @param {Number} [geometries.geometrycollection] - number of GeometryCollection features
	 * @param {Function} callback called with (err)
	 * @returns {undefined} nothing, calls callback
	 */
	Tilestats.prototype.updateTilestatsLayer = function(tileset, layer, geometries, callback) {
	  assert(typeof tileset === 'string', 'tileset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');
	  assert(typeof layer === 'string', 'layer must be a string');
	  assert(typeof geometries === 'object', 'geometries must be an object');

	  var owner = tileset.split('.')[0];
	  if (owner === tileset) owner = this.owner;

	  this.client({
	    path: constants.API_TILESTATS_LAYER,
	    params: {
	      owner: owner,
	      tileset: tileset,
	      layer: layer
	    },
	    entity: geometries,
	    method: 'post',
	    callback: callback
	  });
	};

	/**
	 * To add or update statistics about the values of a particular attribute in
	 * a layer. This request may be made multiple times against a single attribute,
	 * in order to update the statistics across a set of parallel tileset reads.
	 *
	 * @private
	 * @param {String} tileset - the id for the tileset
	 * @param {String} layer - the name of the layer in the tileset
	 * @param {String} attribute - the name of the attribute in the layer
	 * @param {Object} stats - statistics about attribute values in the layer
	 * @param {Number|String} stats.min - the minimum attribute value
	 * @param {Number|String} stats.max - the maximum attribute value
	 * @param {Array<Number|String>} stats.values - an array of unique values for the attribute
	 * @param {Function} callback called with (err)
	 * @returns {undefined} nothing, calls callback
	 */
	Tilestats.prototype.updateTilestatsAttribute = function(tileset, layer, attribute, stats, callback) {
	  assert(typeof tileset === 'string', 'tileset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');
	  assert(typeof layer === 'string', 'layer must be a string');
	  assert(typeof attribute === 'string', 'attribute must be a string');
	  assert(typeof stats === 'object', 'stats must be an object');

	  var owner = tileset.split('.')[0];
	  if (owner === tileset) owner = this.owner;

	  this.client({
	    path: constants.API_TILESTATS_ATTRIBUTE,
	    params: {
	      owner: owner,
	      tileset: tileset,
	      layer: layer,
	      attribute: attribute
	    },
	    entity: stats,
	    method: 'post',
	    callback: callback
	  });
	};

	/**
	 * To retrieve statistics about the attribute values of a particular attribute
	 * within a tileset layer.
	 *
	 * @param {String} tileset - the id for the tileset
	 * @param {String} layer - the name of the layer in the tileset
	 * @param {String} attribute - the name of the attribute in the layer
	 * @param {Function} callback called with (err)
	 * @returns {undefined} nothing, calls callback
	 * @example
	 * var client = new MapboxClient('ACCESSTOKEN');
	 * client.getTilestatsAttribute('tileset-id', 'layer-name', 'attr-name', function(err, info) {
	 *   console.log(info);
	 *   // {
	 *   //   "account": {account},
	 *   //   "tilesetid": "tileset-id",
	 *   //   "layer": "layer-name",
	 *   //   "attribute": "attr-name",
	 *   //   "type": "Number",
	 *   //   "min": 0,
	 *   //   "max": 10,
	 *   //   "values": [
	 *   //     0,
	 *   //     10
	 *   //   ]
	 *   // }
	 * });
	 */
	Tilestats.prototype.getTilestatsAttribute = function(tileset, layer, attribute, callback) {
	  assert(typeof tileset === 'string', 'tileset must be a string');
	  assert(typeof callback === 'function', 'callback must be a function');
	  assert(typeof layer === 'string', 'layer must be a string');
	  assert(typeof attribute === 'string', 'attribute must be a string');

	  var owner = tileset.split('.')[0];
	  if (owner === tileset) owner = this.owner;

	  this.client({
	    path: constants.API_TILESTATS_ATTRIBUTE,
	    params: {
	      owner: owner,
	      tileset: tileset,
	      layer: layer,
	      attribute: attribute
	    },
	    callback: callback
	  });
	};


/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MAPBOX_API_KEY = exports.MAPBOX_API_KEY = 'pk.eyJ1IjoicnVzc2VsbHZlYTIiLCJhIjoiY2lmZzVrNWJkOWV2cnNlbTdza2thcGozNSJ9.zw6CcZLxP6lq0x-xfwp6uA';

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var leaflet = __webpack_require__(84);

	__webpack_require__(86);

	module.exports = leaflet;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = window.L = __webpack_require__(85);


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
	 (c) 2010-2013, Vladimir Agafonkin
	 (c) 2010-2011, CloudMade
	*/
	(function (window, document, undefined) {
	var oldL = window.L,
	    L = {};

	L.version = '0.7.7';

	// define Leaflet for Node module pattern loaders, including Browserify
	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = L;

	// define Leaflet as an AMD module
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (L), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// define Leaflet as a global L variable, saving the original L to restore later if needed

	L.noConflict = function () {
		window.L = oldL;
		return this;
	};

	window.L = L;


	/*
	 * L.Util contains various utility functions used throughout Leaflet code.
	 */

	L.Util = {
		extend: function (dest) { // (Object[, Object, ...]) ->
			var sources = Array.prototype.slice.call(arguments, 1),
			    i, j, len, src;

			for (j = 0, len = sources.length; j < len; j++) {
				src = sources[j] || {};
				for (i in src) {
					if (src.hasOwnProperty(i)) {
						dest[i] = src[i];
					}
				}
			}
			return dest;
		},

		bind: function (fn, obj) { // (Function, Object) -> Function
			var args = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
			return function () {
				return fn.apply(obj, args || arguments);
			};
		},

		stamp: (function () {
			var lastId = 0,
			    key = '_leaflet_id';
			return function (obj) {
				obj[key] = obj[key] || ++lastId;
				return obj[key];
			};
		}()),

		invokeEach: function (obj, method, context) {
			var i, args;

			if (typeof obj === 'object') {
				args = Array.prototype.slice.call(arguments, 3);

				for (i in obj) {
					method.apply(context, [i, obj[i]].concat(args));
				}
				return true;
			}

			return false;
		},

		limitExecByInterval: function (fn, time, context) {
			var lock, execOnUnlock;

			return function wrapperFn() {
				var args = arguments;

				if (lock) {
					execOnUnlock = true;
					return;
				}

				lock = true;

				setTimeout(function () {
					lock = false;

					if (execOnUnlock) {
						wrapperFn.apply(context, args);
						execOnUnlock = false;
					}
				}, time);

				fn.apply(context, args);
			};
		},

		falseFn: function () {
			return false;
		},

		formatNum: function (num, digits) {
			var pow = Math.pow(10, digits || 5);
			return Math.round(num * pow) / pow;
		},

		trim: function (str) {
			return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
		},

		splitWords: function (str) {
			return L.Util.trim(str).split(/\s+/);
		},

		setOptions: function (obj, options) {
			obj.options = L.extend({}, obj.options, options);
			return obj.options;
		},

		getParamString: function (obj, existingUrl, uppercase) {
			var params = [];
			for (var i in obj) {
				params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
			}
			return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
		},
		template: function (str, data) {
			return str.replace(/\{ *([\w_]+) *\}/g, function (str, key) {
				var value = data[key];
				if (value === undefined) {
					throw new Error('No value provided for variable ' + str);
				} else if (typeof value === 'function') {
					value = value(data);
				}
				return value;
			});
		},

		isArray: Array.isArray || function (obj) {
			return (Object.prototype.toString.call(obj) === '[object Array]');
		},

		emptyImageUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
	};

	(function () {

		// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

		function getPrefixed(name) {
			var i, fn,
			    prefixes = ['webkit', 'moz', 'o', 'ms'];

			for (i = 0; i < prefixes.length && !fn; i++) {
				fn = window[prefixes[i] + name];
			}

			return fn;
		}

		var lastTime = 0;

		function timeoutDefer(fn) {
			var time = +new Date(),
			    timeToCall = Math.max(0, 16 - (time - lastTime));

			lastTime = time + timeToCall;
			return window.setTimeout(fn, timeToCall);
		}

		var requestFn = window.requestAnimationFrame ||
		        getPrefixed('RequestAnimationFrame') || timeoutDefer;

		var cancelFn = window.cancelAnimationFrame ||
		        getPrefixed('CancelAnimationFrame') ||
		        getPrefixed('CancelRequestAnimationFrame') ||
		        function (id) { window.clearTimeout(id); };


		L.Util.requestAnimFrame = function (fn, context, immediate, element) {
			fn = L.bind(fn, context);

			if (immediate && requestFn === timeoutDefer) {
				fn();
			} else {
				return requestFn.call(window, fn, element);
			}
		};

		L.Util.cancelAnimFrame = function (id) {
			if (id) {
				cancelFn.call(window, id);
			}
		};

	}());

	// shortcuts for most used utility functions
	L.extend = L.Util.extend;
	L.bind = L.Util.bind;
	L.stamp = L.Util.stamp;
	L.setOptions = L.Util.setOptions;


	/*
	 * L.Class powers the OOP facilities of the library.
	 * Thanks to John Resig and Dean Edwards for inspiration!
	 */

	L.Class = function () {};

	L.Class.extend = function (props) {

		// extended class with the new prototype
		var NewClass = function () {

			// call the constructor
			if (this.initialize) {
				this.initialize.apply(this, arguments);
			}

			// call all constructor hooks
			if (this._initHooks) {
				this.callInitHooks();
			}
		};

		// instantiate class without calling constructor
		var F = function () {};
		F.prototype = this.prototype;

		var proto = new F();
		proto.constructor = NewClass;

		NewClass.prototype = proto;

		//inherit parent's statics
		for (var i in this) {
			if (this.hasOwnProperty(i) && i !== 'prototype') {
				NewClass[i] = this[i];
			}
		}

		// mix static properties into the class
		if (props.statics) {
			L.extend(NewClass, props.statics);
			delete props.statics;
		}

		// mix includes into the prototype
		if (props.includes) {
			L.Util.extend.apply(null, [proto].concat(props.includes));
			delete props.includes;
		}

		// merge options
		if (props.options && proto.options) {
			props.options = L.extend({}, proto.options, props.options);
		}

		// mix given properties into the prototype
		L.extend(proto, props);

		proto._initHooks = [];

		var parent = this;
		// jshint camelcase: false
		NewClass.__super__ = parent.prototype;

		// add method for calling all hooks
		proto.callInitHooks = function () {

			if (this._initHooksCalled) { return; }

			if (parent.prototype.callInitHooks) {
				parent.prototype.callInitHooks.call(this);
			}

			this._initHooksCalled = true;

			for (var i = 0, len = proto._initHooks.length; i < len; i++) {
				proto._initHooks[i].call(this);
			}
		};

		return NewClass;
	};


	// method for adding properties to prototype
	L.Class.include = function (props) {
		L.extend(this.prototype, props);
	};

	// merge new default options to the Class
	L.Class.mergeOptions = function (options) {
		L.extend(this.prototype.options, options);
	};

	// add a constructor hook
	L.Class.addInitHook = function (fn) { // (Function) || (String, args...)
		var args = Array.prototype.slice.call(arguments, 1);

		var init = typeof fn === 'function' ? fn : function () {
			this[fn].apply(this, args);
		};

		this.prototype._initHooks = this.prototype._initHooks || [];
		this.prototype._initHooks.push(init);
	};


	/*
	 * L.Mixin.Events is used to add custom events functionality to Leaflet classes.
	 */

	var eventsKey = '_leaflet_events';

	L.Mixin = {};

	L.Mixin.Events = {

		addEventListener: function (types, fn, context) { // (String, Function[, Object]) or (Object[, Object])

			// types can be a map of types/handlers
			if (L.Util.invokeEach(types, this.addEventListener, this, fn, context)) { return this; }

			var events = this[eventsKey] = this[eventsKey] || {},
			    contextId = context && context !== this && L.stamp(context),
			    i, len, event, type, indexKey, indexLenKey, typeIndex;

			// types can be a string of space-separated words
			types = L.Util.splitWords(types);

			for (i = 0, len = types.length; i < len; i++) {
				event = {
					action: fn,
					context: context || this
				};
				type = types[i];

				if (contextId) {
					// store listeners of a particular context in a separate hash (if it has an id)
					// gives a major performance boost when removing thousands of map layers

					indexKey = type + '_idx';
					indexLenKey = indexKey + '_len';

					typeIndex = events[indexKey] = events[indexKey] || {};

					if (!typeIndex[contextId]) {
						typeIndex[contextId] = [];

						// keep track of the number of keys in the index to quickly check if it's empty
						events[indexLenKey] = (events[indexLenKey] || 0) + 1;
					}

					typeIndex[contextId].push(event);


				} else {
					events[type] = events[type] || [];
					events[type].push(event);
				}
			}

			return this;
		},

		hasEventListeners: function (type) { // (String) -> Boolean
			var events = this[eventsKey];
			return !!events && ((type in events && events[type].length > 0) ||
			                    (type + '_idx' in events && events[type + '_idx_len'] > 0));
		},

		removeEventListener: function (types, fn, context) { // ([String, Function, Object]) or (Object[, Object])

			if (!this[eventsKey]) {
				return this;
			}

			if (!types) {
				return this.clearAllEventListeners();
			}

			if (L.Util.invokeEach(types, this.removeEventListener, this, fn, context)) { return this; }

			var events = this[eventsKey],
			    contextId = context && context !== this && L.stamp(context),
			    i, len, type, listeners, j, indexKey, indexLenKey, typeIndex, removed;

			types = L.Util.splitWords(types);

			for (i = 0, len = types.length; i < len; i++) {
				type = types[i];
				indexKey = type + '_idx';
				indexLenKey = indexKey + '_len';

				typeIndex = events[indexKey];

				if (!fn) {
					// clear all listeners for a type if function isn't specified
					delete events[type];
					delete events[indexKey];
					delete events[indexLenKey];

				} else {
					listeners = contextId && typeIndex ? typeIndex[contextId] : events[type];

					if (listeners) {
						for (j = listeners.length - 1; j >= 0; j--) {
							if ((listeners[j].action === fn) && (!context || (listeners[j].context === context))) {
								removed = listeners.splice(j, 1);
								// set the old action to a no-op, because it is possible
								// that the listener is being iterated over as part of a dispatch
								removed[0].action = L.Util.falseFn;
							}
						}

						if (context && typeIndex && (listeners.length === 0)) {
							delete typeIndex[contextId];
							events[indexLenKey]--;
						}
					}
				}
			}

			return this;
		},

		clearAllEventListeners: function () {
			delete this[eventsKey];
			return this;
		},

		fireEvent: function (type, data) { // (String[, Object])
			if (!this.hasEventListeners(type)) {
				return this;
			}

			var event = L.Util.extend({}, data, { type: type, target: this });

			var events = this[eventsKey],
			    listeners, i, len, typeIndex, contextId;

			if (events[type]) {
				// make sure adding/removing listeners inside other listeners won't cause infinite loop
				listeners = events[type].slice();

				for (i = 0, len = listeners.length; i < len; i++) {
					listeners[i].action.call(listeners[i].context, event);
				}
			}

			// fire event for the context-indexed listeners as well
			typeIndex = events[type + '_idx'];

			for (contextId in typeIndex) {
				listeners = typeIndex[contextId].slice();

				if (listeners) {
					for (i = 0, len = listeners.length; i < len; i++) {
						listeners[i].action.call(listeners[i].context, event);
					}
				}
			}

			return this;
		},

		addOneTimeEventListener: function (types, fn, context) {

			if (L.Util.invokeEach(types, this.addOneTimeEventListener, this, fn, context)) { return this; }

			var handler = L.bind(function () {
				this
				    .removeEventListener(types, fn, context)
				    .removeEventListener(types, handler, context);
			}, this);

			return this
			    .addEventListener(types, fn, context)
			    .addEventListener(types, handler, context);
		}
	};

	L.Mixin.Events.on = L.Mixin.Events.addEventListener;
	L.Mixin.Events.off = L.Mixin.Events.removeEventListener;
	L.Mixin.Events.once = L.Mixin.Events.addOneTimeEventListener;
	L.Mixin.Events.fire = L.Mixin.Events.fireEvent;


	/*
	 * L.Browser handles different browser and feature detections for internal Leaflet use.
	 */

	(function () {

		var ie = 'ActiveXObject' in window,
			ielt9 = ie && !document.addEventListener,

		    // terrible browser detection to work around Safari / iOS / Android browser bugs
		    ua = navigator.userAgent.toLowerCase(),
		    webkit = ua.indexOf('webkit') !== -1,
		    chrome = ua.indexOf('chrome') !== -1,
		    phantomjs = ua.indexOf('phantom') !== -1,
		    android = ua.indexOf('android') !== -1,
		    android23 = ua.search('android [23]') !== -1,
			gecko = ua.indexOf('gecko') !== -1,

		    mobile = typeof orientation !== undefined + '',
		    msPointer = !window.PointerEvent && window.MSPointerEvent,
			pointer = (window.PointerEvent && window.navigator.pointerEnabled) ||
					  msPointer,
		    retina = ('devicePixelRatio' in window && window.devicePixelRatio > 1) ||
		             ('matchMedia' in window && window.matchMedia('(min-resolution:144dpi)') &&
		              window.matchMedia('(min-resolution:144dpi)').matches),

		    doc = document.documentElement,
		    ie3d = ie && ('transition' in doc.style),
		    webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23,
		    gecko3d = 'MozPerspective' in doc.style,
		    opera3d = 'OTransition' in doc.style,
		    any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d || opera3d) && !phantomjs;

		var touch = !window.L_NO_TOUCH && !phantomjs && (pointer || 'ontouchstart' in window ||
			(window.DocumentTouch && document instanceof window.DocumentTouch));

		L.Browser = {
			ie: ie,
			ielt9: ielt9,
			webkit: webkit,
			gecko: gecko && !webkit && !window.opera && !ie,

			android: android,
			android23: android23,

			chrome: chrome,

			ie3d: ie3d,
			webkit3d: webkit3d,
			gecko3d: gecko3d,
			opera3d: opera3d,
			any3d: any3d,

			mobile: mobile,
			mobileWebkit: mobile && webkit,
			mobileWebkit3d: mobile && webkit3d,
			mobileOpera: mobile && window.opera,

			touch: touch,
			msPointer: msPointer,
			pointer: pointer,

			retina: retina
		};

	}());


	/*
	 * L.Point represents a point with x and y coordinates.
	 */

	L.Point = function (/*Number*/ x, /*Number*/ y, /*Boolean*/ round) {
		this.x = (round ? Math.round(x) : x);
		this.y = (round ? Math.round(y) : y);
	};

	L.Point.prototype = {

		clone: function () {
			return new L.Point(this.x, this.y);
		},

		// non-destructive, returns a new point
		add: function (point) {
			return this.clone()._add(L.point(point));
		},

		// destructive, used directly for performance in situations where it's safe to modify existing point
		_add: function (point) {
			this.x += point.x;
			this.y += point.y;
			return this;
		},

		subtract: function (point) {
			return this.clone()._subtract(L.point(point));
		},

		_subtract: function (point) {
			this.x -= point.x;
			this.y -= point.y;
			return this;
		},

		divideBy: function (num) {
			return this.clone()._divideBy(num);
		},

		_divideBy: function (num) {
			this.x /= num;
			this.y /= num;
			return this;
		},

		multiplyBy: function (num) {
			return this.clone()._multiplyBy(num);
		},

		_multiplyBy: function (num) {
			this.x *= num;
			this.y *= num;
			return this;
		},

		round: function () {
			return this.clone()._round();
		},

		_round: function () {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			return this;
		},

		floor: function () {
			return this.clone()._floor();
		},

		_floor: function () {
			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			return this;
		},

		distanceTo: function (point) {
			point = L.point(point);

			var x = point.x - this.x,
			    y = point.y - this.y;

			return Math.sqrt(x * x + y * y);
		},

		equals: function (point) {
			point = L.point(point);

			return point.x === this.x &&
			       point.y === this.y;
		},

		contains: function (point) {
			point = L.point(point);

			return Math.abs(point.x) <= Math.abs(this.x) &&
			       Math.abs(point.y) <= Math.abs(this.y);
		},

		toString: function () {
			return 'Point(' +
			        L.Util.formatNum(this.x) + ', ' +
			        L.Util.formatNum(this.y) + ')';
		}
	};

	L.point = function (x, y, round) {
		if (x instanceof L.Point) {
			return x;
		}
		if (L.Util.isArray(x)) {
			return new L.Point(x[0], x[1]);
		}
		if (x === undefined || x === null) {
			return x;
		}
		return new L.Point(x, y, round);
	};


	/*
	 * L.Bounds represents a rectangular area on the screen in pixel coordinates.
	 */

	L.Bounds = function (a, b) { //(Point, Point) or Point[]
		if (!a) { return; }

		var points = b ? [a, b] : a;

		for (var i = 0, len = points.length; i < len; i++) {
			this.extend(points[i]);
		}
	};

	L.Bounds.prototype = {
		// extend the bounds to contain the given point
		extend: function (point) { // (Point)
			point = L.point(point);

			if (!this.min && !this.max) {
				this.min = point.clone();
				this.max = point.clone();
			} else {
				this.min.x = Math.min(point.x, this.min.x);
				this.max.x = Math.max(point.x, this.max.x);
				this.min.y = Math.min(point.y, this.min.y);
				this.max.y = Math.max(point.y, this.max.y);
			}
			return this;
		},

		getCenter: function (round) { // (Boolean) -> Point
			return new L.Point(
			        (this.min.x + this.max.x) / 2,
			        (this.min.y + this.max.y) / 2, round);
		},

		getBottomLeft: function () { // -> Point
			return new L.Point(this.min.x, this.max.y);
		},

		getTopRight: function () { // -> Point
			return new L.Point(this.max.x, this.min.y);
		},

		getSize: function () {
			return this.max.subtract(this.min);
		},

		contains: function (obj) { // (Bounds) or (Point) -> Boolean
			var min, max;

			if (typeof obj[0] === 'number' || obj instanceof L.Point) {
				obj = L.point(obj);
			} else {
				obj = L.bounds(obj);
			}

			if (obj instanceof L.Bounds) {
				min = obj.min;
				max = obj.max;
			} else {
				min = max = obj;
			}

			return (min.x >= this.min.x) &&
			       (max.x <= this.max.x) &&
			       (min.y >= this.min.y) &&
			       (max.y <= this.max.y);
		},

		intersects: function (bounds) { // (Bounds) -> Boolean
			bounds = L.bounds(bounds);

			var min = this.min,
			    max = this.max,
			    min2 = bounds.min,
			    max2 = bounds.max,
			    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
			    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

			return xIntersects && yIntersects;
		},

		isValid: function () {
			return !!(this.min && this.max);
		}
	};

	L.bounds = function (a, b) { // (Bounds) or (Point, Point) or (Point[])
		if (!a || a instanceof L.Bounds) {
			return a;
		}
		return new L.Bounds(a, b);
	};


	/*
	 * L.Transformation is an utility class to perform simple point transformations through a 2d-matrix.
	 */

	L.Transformation = function (a, b, c, d) {
		this._a = a;
		this._b = b;
		this._c = c;
		this._d = d;
	};

	L.Transformation.prototype = {
		transform: function (point, scale) { // (Point, Number) -> Point
			return this._transform(point.clone(), scale);
		},

		// destructive transform (faster)
		_transform: function (point, scale) {
			scale = scale || 1;
			point.x = scale * (this._a * point.x + this._b);
			point.y = scale * (this._c * point.y + this._d);
			return point;
		},

		untransform: function (point, scale) {
			scale = scale || 1;
			return new L.Point(
			        (point.x / scale - this._b) / this._a,
			        (point.y / scale - this._d) / this._c);
		}
	};


	/*
	 * L.DomUtil contains various utility functions for working with DOM.
	 */

	L.DomUtil = {
		get: function (id) {
			return (typeof id === 'string' ? document.getElementById(id) : id);
		},

		getStyle: function (el, style) {

			var value = el.style[style];

			if (!value && el.currentStyle) {
				value = el.currentStyle[style];
			}

			if ((!value || value === 'auto') && document.defaultView) {
				var css = document.defaultView.getComputedStyle(el, null);
				value = css ? css[style] : null;
			}

			return value === 'auto' ? null : value;
		},

		getViewportOffset: function (element) {

			var top = 0,
			    left = 0,
			    el = element,
			    docBody = document.body,
			    docEl = document.documentElement,
			    pos;

			do {
				top  += el.offsetTop  || 0;
				left += el.offsetLeft || 0;

				//add borders
				top += parseInt(L.DomUtil.getStyle(el, 'borderTopWidth'), 10) || 0;
				left += parseInt(L.DomUtil.getStyle(el, 'borderLeftWidth'), 10) || 0;

				pos = L.DomUtil.getStyle(el, 'position');

				if (el.offsetParent === docBody && pos === 'absolute') { break; }

				if (pos === 'fixed') {
					top  += docBody.scrollTop  || docEl.scrollTop  || 0;
					left += docBody.scrollLeft || docEl.scrollLeft || 0;
					break;
				}

				if (pos === 'relative' && !el.offsetLeft) {
					var width = L.DomUtil.getStyle(el, 'width'),
					    maxWidth = L.DomUtil.getStyle(el, 'max-width'),
					    r = el.getBoundingClientRect();

					if (width !== 'none' || maxWidth !== 'none') {
						left += r.left + el.clientLeft;
					}

					//calculate full y offset since we're breaking out of the loop
					top += r.top + (docBody.scrollTop  || docEl.scrollTop  || 0);

					break;
				}

				el = el.offsetParent;

			} while (el);

			el = element;

			do {
				if (el === docBody) { break; }

				top  -= el.scrollTop  || 0;
				left -= el.scrollLeft || 0;

				el = el.parentNode;
			} while (el);

			return new L.Point(left, top);
		},

		documentIsLtr: function () {
			if (!L.DomUtil._docIsLtrCached) {
				L.DomUtil._docIsLtrCached = true;
				L.DomUtil._docIsLtr = L.DomUtil.getStyle(document.body, 'direction') === 'ltr';
			}
			return L.DomUtil._docIsLtr;
		},

		create: function (tagName, className, container) {

			var el = document.createElement(tagName);
			el.className = className;

			if (container) {
				container.appendChild(el);
			}

			return el;
		},

		hasClass: function (el, name) {
			if (el.classList !== undefined) {
				return el.classList.contains(name);
			}
			var className = L.DomUtil._getClass(el);
			return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
		},

		addClass: function (el, name) {
			if (el.classList !== undefined) {
				var classes = L.Util.splitWords(name);
				for (var i = 0, len = classes.length; i < len; i++) {
					el.classList.add(classes[i]);
				}
			} else if (!L.DomUtil.hasClass(el, name)) {
				var className = L.DomUtil._getClass(el);
				L.DomUtil._setClass(el, (className ? className + ' ' : '') + name);
			}
		},

		removeClass: function (el, name) {
			if (el.classList !== undefined) {
				el.classList.remove(name);
			} else {
				L.DomUtil._setClass(el, L.Util.trim((' ' + L.DomUtil._getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
			}
		},

		_setClass: function (el, name) {
			if (el.className.baseVal === undefined) {
				el.className = name;
			} else {
				// in case of SVG element
				el.className.baseVal = name;
			}
		},

		_getClass: function (el) {
			return el.className.baseVal === undefined ? el.className : el.className.baseVal;
		},

		setOpacity: function (el, value) {

			if ('opacity' in el.style) {
				el.style.opacity = value;

			} else if ('filter' in el.style) {

				var filter = false,
				    filterName = 'DXImageTransform.Microsoft.Alpha';

				// filters collection throws an error if we try to retrieve a filter that doesn't exist
				try {
					filter = el.filters.item(filterName);
				} catch (e) {
					// don't set opacity to 1 if we haven't already set an opacity,
					// it isn't needed and breaks transparent pngs.
					if (value === 1) { return; }
				}

				value = Math.round(value * 100);

				if (filter) {
					filter.Enabled = (value !== 100);
					filter.Opacity = value;
				} else {
					el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
				}
			}
		},

		testProp: function (props) {

			var style = document.documentElement.style;

			for (var i = 0; i < props.length; i++) {
				if (props[i] in style) {
					return props[i];
				}
			}
			return false;
		},

		getTranslateString: function (point) {
			// on WebKit browsers (Chrome/Safari/iOS Safari/Android) using translate3d instead of translate
			// makes animation smoother as it ensures HW accel is used. Firefox 13 doesn't care
			// (same speed either way), Opera 12 doesn't support translate3d

			var is3d = L.Browser.webkit3d,
			    open = 'translate' + (is3d ? '3d' : '') + '(',
			    close = (is3d ? ',0' : '') + ')';

			return open + point.x + 'px,' + point.y + 'px' + close;
		},

		getScaleString: function (scale, origin) {

			var preTranslateStr = L.DomUtil.getTranslateString(origin.add(origin.multiplyBy(-1 * scale))),
			    scaleStr = ' scale(' + scale + ') ';

			return preTranslateStr + scaleStr;
		},

		setPosition: function (el, point, disable3D) { // (HTMLElement, Point[, Boolean])

			// jshint camelcase: false
			el._leaflet_pos = point;

			if (!disable3D && L.Browser.any3d) {
				el.style[L.DomUtil.TRANSFORM] =  L.DomUtil.getTranslateString(point);
			} else {
				el.style.left = point.x + 'px';
				el.style.top = point.y + 'px';
			}
		},

		getPosition: function (el) {
			// this method is only used for elements previously positioned using setPosition,
			// so it's safe to cache the position for performance

			// jshint camelcase: false
			return el._leaflet_pos;
		}
	};


	// prefix style property names

	L.DomUtil.TRANSFORM = L.DomUtil.testProp(
	        ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

	// webkitTransition comes first because some browser versions that drop vendor prefix don't do
	// the same for the transitionend event, in particular the Android 4.1 stock browser

	L.DomUtil.TRANSITION = L.DomUtil.testProp(
	        ['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

	L.DomUtil.TRANSITION_END =
	        L.DomUtil.TRANSITION === 'webkitTransition' || L.DomUtil.TRANSITION === 'OTransition' ?
	        L.DomUtil.TRANSITION + 'End' : 'transitionend';

	(function () {
	    if ('onselectstart' in document) {
	        L.extend(L.DomUtil, {
	            disableTextSelection: function () {
	                L.DomEvent.on(window, 'selectstart', L.DomEvent.preventDefault);
	            },

	            enableTextSelection: function () {
	                L.DomEvent.off(window, 'selectstart', L.DomEvent.preventDefault);
	            }
	        });
	    } else {
	        var userSelectProperty = L.DomUtil.testProp(
	            ['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

	        L.extend(L.DomUtil, {
	            disableTextSelection: function () {
	                if (userSelectProperty) {
	                    var style = document.documentElement.style;
	                    this._userSelect = style[userSelectProperty];
	                    style[userSelectProperty] = 'none';
	                }
	            },

	            enableTextSelection: function () {
	                if (userSelectProperty) {
	                    document.documentElement.style[userSelectProperty] = this._userSelect;
	                    delete this._userSelect;
	                }
	            }
	        });
	    }

		L.extend(L.DomUtil, {
			disableImageDrag: function () {
				L.DomEvent.on(window, 'dragstart', L.DomEvent.preventDefault);
			},

			enableImageDrag: function () {
				L.DomEvent.off(window, 'dragstart', L.DomEvent.preventDefault);
			}
		});
	})();


	/*
	 * L.LatLng represents a geographical point with latitude and longitude coordinates.
	 */

	L.LatLng = function (lat, lng, alt) { // (Number, Number, Number)
		lat = parseFloat(lat);
		lng = parseFloat(lng);

		if (isNaN(lat) || isNaN(lng)) {
			throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
		}

		this.lat = lat;
		this.lng = lng;

		if (alt !== undefined) {
			this.alt = parseFloat(alt);
		}
	};

	L.extend(L.LatLng, {
		DEG_TO_RAD: Math.PI / 180,
		RAD_TO_DEG: 180 / Math.PI,
		MAX_MARGIN: 1.0E-9 // max margin of error for the "equals" check
	});

	L.LatLng.prototype = {
		equals: function (obj) { // (LatLng) -> Boolean
			if (!obj) { return false; }

			obj = L.latLng(obj);

			var margin = Math.max(
			        Math.abs(this.lat - obj.lat),
			        Math.abs(this.lng - obj.lng));

			return margin <= L.LatLng.MAX_MARGIN;
		},

		toString: function (precision) { // (Number) -> String
			return 'LatLng(' +
			        L.Util.formatNum(this.lat, precision) + ', ' +
			        L.Util.formatNum(this.lng, precision) + ')';
		},

		// Haversine distance formula, see http://en.wikipedia.org/wiki/Haversine_formula
		// TODO move to projection code, LatLng shouldn't know about Earth
		distanceTo: function (other) { // (LatLng) -> Number
			other = L.latLng(other);

			var R = 6378137, // earth radius in meters
			    d2r = L.LatLng.DEG_TO_RAD,
			    dLat = (other.lat - this.lat) * d2r,
			    dLon = (other.lng - this.lng) * d2r,
			    lat1 = this.lat * d2r,
			    lat2 = other.lat * d2r,
			    sin1 = Math.sin(dLat / 2),
			    sin2 = Math.sin(dLon / 2);

			var a = sin1 * sin1 + sin2 * sin2 * Math.cos(lat1) * Math.cos(lat2);

			return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		},

		wrap: function (a, b) { // (Number, Number) -> LatLng
			var lng = this.lng;

			a = a || -180;
			b = b ||  180;

			lng = (lng + b) % (b - a) + (lng < a || lng === b ? b : a);

			return new L.LatLng(this.lat, lng);
		}
	};

	L.latLng = function (a, b) { // (LatLng) or ([Number, Number]) or (Number, Number)
		if (a instanceof L.LatLng) {
			return a;
		}
		if (L.Util.isArray(a)) {
			if (typeof a[0] === 'number' || typeof a[0] === 'string') {
				return new L.LatLng(a[0], a[1], a[2]);
			} else {
				return null;
			}
		}
		if (a === undefined || a === null) {
			return a;
		}
		if (typeof a === 'object' && 'lat' in a) {
			return new L.LatLng(a.lat, 'lng' in a ? a.lng : a.lon);
		}
		if (b === undefined) {
			return null;
		}
		return new L.LatLng(a, b);
	};



	/*
	 * L.LatLngBounds represents a rectangular area on the map in geographical coordinates.
	 */

	L.LatLngBounds = function (southWest, northEast) { // (LatLng, LatLng) or (LatLng[])
		if (!southWest) { return; }

		var latlngs = northEast ? [southWest, northEast] : southWest;

		for (var i = 0, len = latlngs.length; i < len; i++) {
			this.extend(latlngs[i]);
		}
	};

	L.LatLngBounds.prototype = {
		// extend the bounds to contain the given point or bounds
		extend: function (obj) { // (LatLng) or (LatLngBounds)
			if (!obj) { return this; }

			var latLng = L.latLng(obj);
			if (latLng !== null) {
				obj = latLng;
			} else {
				obj = L.latLngBounds(obj);
			}

			if (obj instanceof L.LatLng) {
				if (!this._southWest && !this._northEast) {
					this._southWest = new L.LatLng(obj.lat, obj.lng);
					this._northEast = new L.LatLng(obj.lat, obj.lng);
				} else {
					this._southWest.lat = Math.min(obj.lat, this._southWest.lat);
					this._southWest.lng = Math.min(obj.lng, this._southWest.lng);

					this._northEast.lat = Math.max(obj.lat, this._northEast.lat);
					this._northEast.lng = Math.max(obj.lng, this._northEast.lng);
				}
			} else if (obj instanceof L.LatLngBounds) {
				this.extend(obj._southWest);
				this.extend(obj._northEast);
			}
			return this;
		},

		// extend the bounds by a percentage
		pad: function (bufferRatio) { // (Number) -> LatLngBounds
			var sw = this._southWest,
			    ne = this._northEast,
			    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
			    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

			return new L.LatLngBounds(
			        new L.LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
			        new L.LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
		},

		getCenter: function () { // -> LatLng
			return new L.LatLng(
			        (this._southWest.lat + this._northEast.lat) / 2,
			        (this._southWest.lng + this._northEast.lng) / 2);
		},

		getSouthWest: function () {
			return this._southWest;
		},

		getNorthEast: function () {
			return this._northEast;
		},

		getNorthWest: function () {
			return new L.LatLng(this.getNorth(), this.getWest());
		},

		getSouthEast: function () {
			return new L.LatLng(this.getSouth(), this.getEast());
		},

		getWest: function () {
			return this._southWest.lng;
		},

		getSouth: function () {
			return this._southWest.lat;
		},

		getEast: function () {
			return this._northEast.lng;
		},

		getNorth: function () {
			return this._northEast.lat;
		},

		contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
			if (typeof obj[0] === 'number' || obj instanceof L.LatLng) {
				obj = L.latLng(obj);
			} else {
				obj = L.latLngBounds(obj);
			}

			var sw = this._southWest,
			    ne = this._northEast,
			    sw2, ne2;

			if (obj instanceof L.LatLngBounds) {
				sw2 = obj.getSouthWest();
				ne2 = obj.getNorthEast();
			} else {
				sw2 = ne2 = obj;
			}

			return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
			       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
		},

		intersects: function (bounds) { // (LatLngBounds)
			bounds = L.latLngBounds(bounds);

			var sw = this._southWest,
			    ne = this._northEast,
			    sw2 = bounds.getSouthWest(),
			    ne2 = bounds.getNorthEast(),

			    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
			    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

			return latIntersects && lngIntersects;
		},

		toBBoxString: function () {
			return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
		},

		equals: function (bounds) { // (LatLngBounds)
			if (!bounds) { return false; }

			bounds = L.latLngBounds(bounds);

			return this._southWest.equals(bounds.getSouthWest()) &&
			       this._northEast.equals(bounds.getNorthEast());
		},

		isValid: function () {
			return !!(this._southWest && this._northEast);
		}
	};

	//TODO International date line?

	L.latLngBounds = function (a, b) { // (LatLngBounds) or (LatLng, LatLng)
		if (!a || a instanceof L.LatLngBounds) {
			return a;
		}
		return new L.LatLngBounds(a, b);
	};


	/*
	 * L.Projection contains various geographical projections used by CRS classes.
	 */

	L.Projection = {};


	/*
	 * Spherical Mercator is the most popular map projection, used by EPSG:3857 CRS used by default.
	 */

	L.Projection.SphericalMercator = {
		MAX_LATITUDE: 85.0511287798,

		project: function (latlng) { // (LatLng) -> Point
			var d = L.LatLng.DEG_TO_RAD,
			    max = this.MAX_LATITUDE,
			    lat = Math.max(Math.min(max, latlng.lat), -max),
			    x = latlng.lng * d,
			    y = lat * d;

			y = Math.log(Math.tan((Math.PI / 4) + (y / 2)));

			return new L.Point(x, y);
		},

		unproject: function (point) { // (Point, Boolean) -> LatLng
			var d = L.LatLng.RAD_TO_DEG,
			    lng = point.x * d,
			    lat = (2 * Math.atan(Math.exp(point.y)) - (Math.PI / 2)) * d;

			return new L.LatLng(lat, lng);
		}
	};


	/*
	 * Simple equirectangular (Plate Carree) projection, used by CRS like EPSG:4326 and Simple.
	 */

	L.Projection.LonLat = {
		project: function (latlng) {
			return new L.Point(latlng.lng, latlng.lat);
		},

		unproject: function (point) {
			return new L.LatLng(point.y, point.x);
		}
	};


	/*
	 * L.CRS is a base object for all defined CRS (Coordinate Reference Systems) in Leaflet.
	 */

	L.CRS = {
		latLngToPoint: function (latlng, zoom) { // (LatLng, Number) -> Point
			var projectedPoint = this.projection.project(latlng),
			    scale = this.scale(zoom);

			return this.transformation._transform(projectedPoint, scale);
		},

		pointToLatLng: function (point, zoom) { // (Point, Number[, Boolean]) -> LatLng
			var scale = this.scale(zoom),
			    untransformedPoint = this.transformation.untransform(point, scale);

			return this.projection.unproject(untransformedPoint);
		},

		project: function (latlng) {
			return this.projection.project(latlng);
		},

		scale: function (zoom) {
			return 256 * Math.pow(2, zoom);
		},

		getSize: function (zoom) {
			var s = this.scale(zoom);
			return L.point(s, s);
		}
	};


	/*
	 * A simple CRS that can be used for flat non-Earth maps like panoramas or game maps.
	 */

	L.CRS.Simple = L.extend({}, L.CRS, {
		projection: L.Projection.LonLat,
		transformation: new L.Transformation(1, 0, -1, 0),

		scale: function (zoom) {
			return Math.pow(2, zoom);
		}
	});


	/*
	 * L.CRS.EPSG3857 (Spherical Mercator) is the most common CRS for web mapping
	 * and is used by Leaflet by default.
	 */

	L.CRS.EPSG3857 = L.extend({}, L.CRS, {
		code: 'EPSG:3857',

		projection: L.Projection.SphericalMercator,
		transformation: new L.Transformation(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),

		project: function (latlng) { // (LatLng) -> Point
			var projectedPoint = this.projection.project(latlng),
			    earthRadius = 6378137;
			return projectedPoint.multiplyBy(earthRadius);
		}
	});

	L.CRS.EPSG900913 = L.extend({}, L.CRS.EPSG3857, {
		code: 'EPSG:900913'
	});


	/*
	 * L.CRS.EPSG4326 is a CRS popular among advanced GIS specialists.
	 */

	L.CRS.EPSG4326 = L.extend({}, L.CRS, {
		code: 'EPSG:4326',

		projection: L.Projection.LonLat,
		transformation: new L.Transformation(1 / 360, 0.5, -1 / 360, 0.5)
	});


	/*
	 * L.Map is the central class of the API - it is used to create a map.
	 */

	L.Map = L.Class.extend({

		includes: L.Mixin.Events,

		options: {
			crs: L.CRS.EPSG3857,

			/*
			center: LatLng,
			zoom: Number,
			layers: Array,
			*/

			fadeAnimation: L.DomUtil.TRANSITION && !L.Browser.android23,
			trackResize: true,
			markerZoomAnimation: L.DomUtil.TRANSITION && L.Browser.any3d
		},

		initialize: function (id, options) { // (HTMLElement or String, Object)
			options = L.setOptions(this, options);


			this._initContainer(id);
			this._initLayout();

			// hack for https://github.com/Leaflet/Leaflet/issues/1980
			this._onResize = L.bind(this._onResize, this);

			this._initEvents();

			if (options.maxBounds) {
				this.setMaxBounds(options.maxBounds);
			}

			if (options.center && options.zoom !== undefined) {
				this.setView(L.latLng(options.center), options.zoom, {reset: true});
			}

			this._handlers = [];

			this._layers = {};
			this._zoomBoundLayers = {};
			this._tileLayersNum = 0;

			this.callInitHooks();

			this._addLayers(options.layers);
		},


		// public methods that modify map state

		// replaced by animation-powered implementation in Map.PanAnimation.js
		setView: function (center, zoom) {
			zoom = zoom === undefined ? this.getZoom() : zoom;
			this._resetView(L.latLng(center), this._limitZoom(zoom));
			return this;
		},

		setZoom: function (zoom, options) {
			if (!this._loaded) {
				this._zoom = this._limitZoom(zoom);
				return this;
			}
			return this.setView(this.getCenter(), zoom, {zoom: options});
		},

		zoomIn: function (delta, options) {
			return this.setZoom(this._zoom + (delta || 1), options);
		},

		zoomOut: function (delta, options) {
			return this.setZoom(this._zoom - (delta || 1), options);
		},

		setZoomAround: function (latlng, zoom, options) {
			var scale = this.getZoomScale(zoom),
			    viewHalf = this.getSize().divideBy(2),
			    containerPoint = latlng instanceof L.Point ? latlng : this.latLngToContainerPoint(latlng),

			    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
			    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

			return this.setView(newCenter, zoom, {zoom: options});
		},

		fitBounds: function (bounds, options) {

			options = options || {};
			bounds = bounds.getBounds ? bounds.getBounds() : L.latLngBounds(bounds);

			var paddingTL = L.point(options.paddingTopLeft || options.padding || [0, 0]),
			    paddingBR = L.point(options.paddingBottomRight || options.padding || [0, 0]),

			    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

			zoom = (options.maxZoom) ? Math.min(options.maxZoom, zoom) : zoom;

			var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

			    swPoint = this.project(bounds.getSouthWest(), zoom),
			    nePoint = this.project(bounds.getNorthEast(), zoom),
			    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

			return this.setView(center, zoom, options);
		},

		fitWorld: function (options) {
			return this.fitBounds([[-90, -180], [90, 180]], options);
		},

		panTo: function (center, options) { // (LatLng)
			return this.setView(center, this._zoom, {pan: options});
		},

		panBy: function (offset) { // (Point)
			// replaced with animated panBy in Map.PanAnimation.js
			this.fire('movestart');

			this._rawPanBy(L.point(offset));

			this.fire('move');
			return this.fire('moveend');
		},

		setMaxBounds: function (bounds) {
			bounds = L.latLngBounds(bounds);

			this.options.maxBounds = bounds;

			if (!bounds) {
				return this.off('moveend', this._panInsideMaxBounds, this);
			}

			if (this._loaded) {
				this._panInsideMaxBounds();
			}

			return this.on('moveend', this._panInsideMaxBounds, this);
		},

		panInsideBounds: function (bounds, options) {
			var center = this.getCenter(),
				newCenter = this._limitCenter(center, this._zoom, bounds);

			if (center.equals(newCenter)) { return this; }

			return this.panTo(newCenter, options);
		},

		addLayer: function (layer) {
			// TODO method is too big, refactor

			var id = L.stamp(layer);

			if (this._layers[id]) { return this; }

			this._layers[id] = layer;

			// TODO getMaxZoom, getMinZoom in ILayer (instead of options)
			if (layer.options && (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom))) {
				this._zoomBoundLayers[id] = layer;
				this._updateZoomLevels();
			}

			// TODO looks ugly, refactor!!!
			if (this.options.zoomAnimation && L.TileLayer && (layer instanceof L.TileLayer)) {
				this._tileLayersNum++;
				this._tileLayersToLoad++;
				layer.on('load', this._onTileLayerLoad, this);
			}

			if (this._loaded) {
				this._layerAdd(layer);
			}

			return this;
		},

		removeLayer: function (layer) {
			var id = L.stamp(layer);

			if (!this._layers[id]) { return this; }

			if (this._loaded) {
				layer.onRemove(this);
			}

			delete this._layers[id];

			if (this._loaded) {
				this.fire('layerremove', {layer: layer});
			}

			if (this._zoomBoundLayers[id]) {
				delete this._zoomBoundLayers[id];
				this._updateZoomLevels();
			}

			// TODO looks ugly, refactor
			if (this.options.zoomAnimation && L.TileLayer && (layer instanceof L.TileLayer)) {
				this._tileLayersNum--;
				this._tileLayersToLoad--;
				layer.off('load', this._onTileLayerLoad, this);
			}

			return this;
		},

		hasLayer: function (layer) {
			if (!layer) { return false; }

			return (L.stamp(layer) in this._layers);
		},

		eachLayer: function (method, context) {
			for (var i in this._layers) {
				method.call(context, this._layers[i]);
			}
			return this;
		},

		invalidateSize: function (options) {
			if (!this._loaded) { return this; }

			options = L.extend({
				animate: false,
				pan: true
			}, options === true ? {animate: true} : options);

			var oldSize = this.getSize();
			this._sizeChanged = true;
			this._initialCenter = null;

			var newSize = this.getSize(),
			    oldCenter = oldSize.divideBy(2).round(),
			    newCenter = newSize.divideBy(2).round(),
			    offset = oldCenter.subtract(newCenter);

			if (!offset.x && !offset.y) { return this; }

			if (options.animate && options.pan) {
				this.panBy(offset);

			} else {
				if (options.pan) {
					this._rawPanBy(offset);
				}

				this.fire('move');

				if (options.debounceMoveend) {
					clearTimeout(this._sizeTimer);
					this._sizeTimer = setTimeout(L.bind(this.fire, this, 'moveend'), 200);
				} else {
					this.fire('moveend');
				}
			}

			return this.fire('resize', {
				oldSize: oldSize,
				newSize: newSize
			});
		},

		// TODO handler.addTo
		addHandler: function (name, HandlerClass) {
			if (!HandlerClass) { return this; }

			var handler = this[name] = new HandlerClass(this);

			this._handlers.push(handler);

			if (this.options[name]) {
				handler.enable();
			}

			return this;
		},

		remove: function () {
			if (this._loaded) {
				this.fire('unload');
			}

			this._initEvents('off');

			try {
				// throws error in IE6-8
				delete this._container._leaflet;
			} catch (e) {
				this._container._leaflet = undefined;
			}

			this._clearPanes();
			if (this._clearControlPos) {
				this._clearControlPos();
			}

			this._clearHandlers();

			return this;
		},


		// public methods for getting map state

		getCenter: function () { // (Boolean) -> LatLng
			this._checkIfLoaded();

			if (this._initialCenter && !this._moved()) {
				return this._initialCenter;
			}
			return this.layerPointToLatLng(this._getCenterLayerPoint());
		},

		getZoom: function () {
			return this._zoom;
		},

		getBounds: function () {
			var bounds = this.getPixelBounds(),
			    sw = this.unproject(bounds.getBottomLeft()),
			    ne = this.unproject(bounds.getTopRight());

			return new L.LatLngBounds(sw, ne);
		},

		getMinZoom: function () {
			return this.options.minZoom === undefined ?
				(this._layersMinZoom === undefined ? 0 : this._layersMinZoom) :
				this.options.minZoom;
		},

		getMaxZoom: function () {
			return this.options.maxZoom === undefined ?
				(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
				this.options.maxZoom;
		},

		getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
			bounds = L.latLngBounds(bounds);

			var zoom = this.getMinZoom() - (inside ? 1 : 0),
			    maxZoom = this.getMaxZoom(),
			    size = this.getSize(),

			    nw = bounds.getNorthWest(),
			    se = bounds.getSouthEast(),

			    zoomNotFound = true,
			    boundsSize;

			padding = L.point(padding || [0, 0]);

			do {
				zoom++;
				boundsSize = this.project(se, zoom).subtract(this.project(nw, zoom)).add(padding);
				zoomNotFound = !inside ? size.contains(boundsSize) : boundsSize.x < size.x || boundsSize.y < size.y;

			} while (zoomNotFound && zoom <= maxZoom);

			if (zoomNotFound && inside) {
				return null;
			}

			return inside ? zoom : zoom - 1;
		},

		getSize: function () {
			if (!this._size || this._sizeChanged) {
				this._size = new L.Point(
					this._container.clientWidth,
					this._container.clientHeight);

				this._sizeChanged = false;
			}
			return this._size.clone();
		},

		getPixelBounds: function () {
			var topLeftPoint = this._getTopLeftPoint();
			return new L.Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
		},

		getPixelOrigin: function () {
			this._checkIfLoaded();
			return this._initialTopLeftPoint;
		},

		getPanes: function () {
			return this._panes;
		},

		getContainer: function () {
			return this._container;
		},


		// TODO replace with universal implementation after refactoring projections

		getZoomScale: function (toZoom) {
			var crs = this.options.crs;
			return crs.scale(toZoom) / crs.scale(this._zoom);
		},

		getScaleZoom: function (scale) {
			return this._zoom + (Math.log(scale) / Math.LN2);
		},


		// conversion methods

		project: function (latlng, zoom) { // (LatLng[, Number]) -> Point
			zoom = zoom === undefined ? this._zoom : zoom;
			return this.options.crs.latLngToPoint(L.latLng(latlng), zoom);
		},

		unproject: function (point, zoom) { // (Point[, Number]) -> LatLng
			zoom = zoom === undefined ? this._zoom : zoom;
			return this.options.crs.pointToLatLng(L.point(point), zoom);
		},

		layerPointToLatLng: function (point) { // (Point)
			var projectedPoint = L.point(point).add(this.getPixelOrigin());
			return this.unproject(projectedPoint);
		},

		latLngToLayerPoint: function (latlng) { // (LatLng)
			var projectedPoint = this.project(L.latLng(latlng))._round();
			return projectedPoint._subtract(this.getPixelOrigin());
		},

		containerPointToLayerPoint: function (point) { // (Point)
			return L.point(point).subtract(this._getMapPanePos());
		},

		layerPointToContainerPoint: function (point) { // (Point)
			return L.point(point).add(this._getMapPanePos());
		},

		containerPointToLatLng: function (point) {
			var layerPoint = this.containerPointToLayerPoint(L.point(point));
			return this.layerPointToLatLng(layerPoint);
		},

		latLngToContainerPoint: function (latlng) {
			return this.layerPointToContainerPoint(this.latLngToLayerPoint(L.latLng(latlng)));
		},

		mouseEventToContainerPoint: function (e) { // (MouseEvent)
			return L.DomEvent.getMousePosition(e, this._container);
		},

		mouseEventToLayerPoint: function (e) { // (MouseEvent)
			return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
		},

		mouseEventToLatLng: function (e) { // (MouseEvent)
			return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
		},


		// map initialization methods

		_initContainer: function (id) {
			var container = this._container = L.DomUtil.get(id);

			if (!container) {
				throw new Error('Map container not found.');
			} else if (container._leaflet) {
				throw new Error('Map container is already initialized.');
			}

			container._leaflet = true;
		},

		_initLayout: function () {
			var container = this._container;

			L.DomUtil.addClass(container, 'leaflet-container' +
				(L.Browser.touch ? ' leaflet-touch' : '') +
				(L.Browser.retina ? ' leaflet-retina' : '') +
				(L.Browser.ielt9 ? ' leaflet-oldie' : '') +
				(this.options.fadeAnimation ? ' leaflet-fade-anim' : ''));

			var position = L.DomUtil.getStyle(container, 'position');

			if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
				container.style.position = 'relative';
			}

			this._initPanes();

			if (this._initControlPos) {
				this._initControlPos();
			}
		},

		_initPanes: function () {
			var panes = this._panes = {};

			this._mapPane = panes.mapPane = this._createPane('leaflet-map-pane', this._container);

			this._tilePane = panes.tilePane = this._createPane('leaflet-tile-pane', this._mapPane);
			panes.objectsPane = this._createPane('leaflet-objects-pane', this._mapPane);
			panes.shadowPane = this._createPane('leaflet-shadow-pane');
			panes.overlayPane = this._createPane('leaflet-overlay-pane');
			panes.markerPane = this._createPane('leaflet-marker-pane');
			panes.popupPane = this._createPane('leaflet-popup-pane');

			var zoomHide = ' leaflet-zoom-hide';

			if (!this.options.markerZoomAnimation) {
				L.DomUtil.addClass(panes.markerPane, zoomHide);
				L.DomUtil.addClass(panes.shadowPane, zoomHide);
				L.DomUtil.addClass(panes.popupPane, zoomHide);
			}
		},

		_createPane: function (className, container) {
			return L.DomUtil.create('div', className, container || this._panes.objectsPane);
		},

		_clearPanes: function () {
			this._container.removeChild(this._mapPane);
		},

		_addLayers: function (layers) {
			layers = layers ? (L.Util.isArray(layers) ? layers : [layers]) : [];

			for (var i = 0, len = layers.length; i < len; i++) {
				this.addLayer(layers[i]);
			}
		},


		// private methods that modify map state

		_resetView: function (center, zoom, preserveMapOffset, afterZoomAnim) {

			var zoomChanged = (this._zoom !== zoom);

			if (!afterZoomAnim) {
				this.fire('movestart');

				if (zoomChanged) {
					this.fire('zoomstart');
				}
			}

			this._zoom = zoom;
			this._initialCenter = center;

			this._initialTopLeftPoint = this._getNewTopLeftPoint(center);

			if (!preserveMapOffset) {
				L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));
			} else {
				this._initialTopLeftPoint._add(this._getMapPanePos());
			}

			this._tileLayersToLoad = this._tileLayersNum;

			var loading = !this._loaded;
			this._loaded = true;

			this.fire('viewreset', {hard: !preserveMapOffset});

			if (loading) {
				this.fire('load');
				this.eachLayer(this._layerAdd, this);
			}

			this.fire('move');

			if (zoomChanged || afterZoomAnim) {
				this.fire('zoomend');
			}

			this.fire('moveend', {hard: !preserveMapOffset});
		},

		_rawPanBy: function (offset) {
			L.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
		},

		_getZoomSpan: function () {
			return this.getMaxZoom() - this.getMinZoom();
		},

		_updateZoomLevels: function () {
			var i,
				minZoom = Infinity,
				maxZoom = -Infinity,
				oldZoomSpan = this._getZoomSpan();

			for (i in this._zoomBoundLayers) {
				var layer = this._zoomBoundLayers[i];
				if (!isNaN(layer.options.minZoom)) {
					minZoom = Math.min(minZoom, layer.options.minZoom);
				}
				if (!isNaN(layer.options.maxZoom)) {
					maxZoom = Math.max(maxZoom, layer.options.maxZoom);
				}
			}

			if (i === undefined) { // we have no tilelayers
				this._layersMaxZoom = this._layersMinZoom = undefined;
			} else {
				this._layersMaxZoom = maxZoom;
				this._layersMinZoom = minZoom;
			}

			if (oldZoomSpan !== this._getZoomSpan()) {
				this.fire('zoomlevelschange');
			}
		},

		_panInsideMaxBounds: function () {
			this.panInsideBounds(this.options.maxBounds);
		},

		_checkIfLoaded: function () {
			if (!this._loaded) {
				throw new Error('Set map center and zoom first.');
			}
		},

		// map events

		_initEvents: function (onOff) {
			if (!L.DomEvent) { return; }

			onOff = onOff || 'on';

			L.DomEvent[onOff](this._container, 'click', this._onMouseClick, this);

			var events = ['dblclick', 'mousedown', 'mouseup', 'mouseenter',
			              'mouseleave', 'mousemove', 'contextmenu'],
			    i, len;

			for (i = 0, len = events.length; i < len; i++) {
				L.DomEvent[onOff](this._container, events[i], this._fireMouseEvent, this);
			}

			if (this.options.trackResize) {
				L.DomEvent[onOff](window, 'resize', this._onResize, this);
			}
		},

		_onResize: function () {
			L.Util.cancelAnimFrame(this._resizeRequest);
			this._resizeRequest = L.Util.requestAnimFrame(
			        function () { this.invalidateSize({debounceMoveend: true}); }, this, false, this._container);
		},

		_onMouseClick: function (e) {
			if (!this._loaded || (!e._simulated &&
			        ((this.dragging && this.dragging.moved()) ||
			         (this.boxZoom  && this.boxZoom.moved()))) ||
			            L.DomEvent._skipped(e)) { return; }

			this.fire('preclick');
			this._fireMouseEvent(e);
		},

		_fireMouseEvent: function (e) {
			if (!this._loaded || L.DomEvent._skipped(e)) { return; }

			var type = e.type;

			type = (type === 'mouseenter' ? 'mouseover' : (type === 'mouseleave' ? 'mouseout' : type));

			if (!this.hasEventListeners(type)) { return; }

			if (type === 'contextmenu') {
				L.DomEvent.preventDefault(e);
			}

			var containerPoint = this.mouseEventToContainerPoint(e),
			    layerPoint = this.containerPointToLayerPoint(containerPoint),
			    latlng = this.layerPointToLatLng(layerPoint);

			this.fire(type, {
				latlng: latlng,
				layerPoint: layerPoint,
				containerPoint: containerPoint,
				originalEvent: e
			});
		},

		_onTileLayerLoad: function () {
			this._tileLayersToLoad--;
			if (this._tileLayersNum && !this._tileLayersToLoad) {
				this.fire('tilelayersload');
			}
		},

		_clearHandlers: function () {
			for (var i = 0, len = this._handlers.length; i < len; i++) {
				this._handlers[i].disable();
			}
		},

		whenReady: function (callback, context) {
			if (this._loaded) {
				callback.call(context || this, this);
			} else {
				this.on('load', callback, context);
			}
			return this;
		},

		_layerAdd: function (layer) {
			layer.onAdd(this);
			this.fire('layeradd', {layer: layer});
		},


		// private methods for getting map state

		_getMapPanePos: function () {
			return L.DomUtil.getPosition(this._mapPane);
		},

		_moved: function () {
			var pos = this._getMapPanePos();
			return pos && !pos.equals([0, 0]);
		},

		_getTopLeftPoint: function () {
			return this.getPixelOrigin().subtract(this._getMapPanePos());
		},

		_getNewTopLeftPoint: function (center, zoom) {
			var viewHalf = this.getSize()._divideBy(2);
			// TODO round on display, not calculation to increase precision?
			return this.project(center, zoom)._subtract(viewHalf)._round();
		},

		_latLngToNewLayerPoint: function (latlng, newZoom, newCenter) {
			var topLeft = this._getNewTopLeftPoint(newCenter, newZoom).add(this._getMapPanePos());
			return this.project(latlng, newZoom)._subtract(topLeft);
		},

		// layer point of the current center
		_getCenterLayerPoint: function () {
			return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
		},

		// offset of the specified place to the current center in pixels
		_getCenterOffset: function (latlng) {
			return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
		},

		// adjust center for view to get inside bounds
		_limitCenter: function (center, zoom, bounds) {

			if (!bounds) { return center; }

			var centerPoint = this.project(center, zoom),
			    viewHalf = this.getSize().divideBy(2),
			    viewBounds = new L.Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
			    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

			return this.unproject(centerPoint.add(offset), zoom);
		},

		// adjust offset for view to get inside bounds
		_limitOffset: function (offset, bounds) {
			if (!bounds) { return offset; }

			var viewBounds = this.getPixelBounds(),
			    newBounds = new L.Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

			return offset.add(this._getBoundsOffset(newBounds, bounds));
		},

		// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
		_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
			var nwOffset = this.project(maxBounds.getNorthWest(), zoom).subtract(pxBounds.min),
			    seOffset = this.project(maxBounds.getSouthEast(), zoom).subtract(pxBounds.max),

			    dx = this._rebound(nwOffset.x, -seOffset.x),
			    dy = this._rebound(nwOffset.y, -seOffset.y);

			return new L.Point(dx, dy);
		},

		_rebound: function (left, right) {
			return left + right > 0 ?
				Math.round(left - right) / 2 :
				Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
		},

		_limitZoom: function (zoom) {
			var min = this.getMinZoom(),
			    max = this.getMaxZoom();

			return Math.max(min, Math.min(max, zoom));
		}
	});

	L.map = function (id, options) {
		return new L.Map(id, options);
	};


	/*
	 * Mercator projection that takes into account that the Earth is not a perfect sphere.
	 * Less popular than spherical mercator; used by projections like EPSG:3395.
	 */

	L.Projection.Mercator = {
		MAX_LATITUDE: 85.0840591556,

		R_MINOR: 6356752.314245179,
		R_MAJOR: 6378137,

		project: function (latlng) { // (LatLng) -> Point
			var d = L.LatLng.DEG_TO_RAD,
			    max = this.MAX_LATITUDE,
			    lat = Math.max(Math.min(max, latlng.lat), -max),
			    r = this.R_MAJOR,
			    r2 = this.R_MINOR,
			    x = latlng.lng * d * r,
			    y = lat * d,
			    tmp = r2 / r,
			    eccent = Math.sqrt(1.0 - tmp * tmp),
			    con = eccent * Math.sin(y);

			con = Math.pow((1 - con) / (1 + con), eccent * 0.5);

			var ts = Math.tan(0.5 * ((Math.PI * 0.5) - y)) / con;
			y = -r * Math.log(ts);

			return new L.Point(x, y);
		},

		unproject: function (point) { // (Point, Boolean) -> LatLng
			var d = L.LatLng.RAD_TO_DEG,
			    r = this.R_MAJOR,
			    r2 = this.R_MINOR,
			    lng = point.x * d / r,
			    tmp = r2 / r,
			    eccent = Math.sqrt(1 - (tmp * tmp)),
			    ts = Math.exp(- point.y / r),
			    phi = (Math.PI / 2) - 2 * Math.atan(ts),
			    numIter = 15,
			    tol = 1e-7,
			    i = numIter,
			    dphi = 0.1,
			    con;

			while ((Math.abs(dphi) > tol) && (--i > 0)) {
				con = eccent * Math.sin(phi);
				dphi = (Math.PI / 2) - 2 * Math.atan(ts *
				            Math.pow((1.0 - con) / (1.0 + con), 0.5 * eccent)) - phi;
				phi += dphi;
			}

			return new L.LatLng(phi * d, lng);
		}
	};



	L.CRS.EPSG3395 = L.extend({}, L.CRS, {
		code: 'EPSG:3395',

		projection: L.Projection.Mercator,

		transformation: (function () {
			var m = L.Projection.Mercator,
			    r = m.R_MAJOR,
			    scale = 0.5 / (Math.PI * r);

			return new L.Transformation(scale, 0.5, -scale, 0.5);
		}())
	});


	/*
	 * L.TileLayer is used for standard xyz-numbered tile layers.
	 */

	L.TileLayer = L.Class.extend({
		includes: L.Mixin.Events,

		options: {
			minZoom: 0,
			maxZoom: 18,
			tileSize: 256,
			subdomains: 'abc',
			errorTileUrl: '',
			attribution: '',
			zoomOffset: 0,
			opacity: 1,
			/*
			maxNativeZoom: null,
			zIndex: null,
			tms: false,
			continuousWorld: false,
			noWrap: false,
			zoomReverse: false,
			detectRetina: false,
			reuseTiles: false,
			bounds: false,
			*/
			unloadInvisibleTiles: L.Browser.mobile,
			updateWhenIdle: L.Browser.mobile
		},

		initialize: function (url, options) {
			options = L.setOptions(this, options);

			// detecting retina displays, adjusting tileSize and zoom levels
			if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {

				options.tileSize = Math.floor(options.tileSize / 2);
				options.zoomOffset++;

				if (options.minZoom > 0) {
					options.minZoom--;
				}
				this.options.maxZoom--;
			}

			if (options.bounds) {
				options.bounds = L.latLngBounds(options.bounds);
			}

			this._url = url;

			var subdomains = this.options.subdomains;

			if (typeof subdomains === 'string') {
				this.options.subdomains = subdomains.split('');
			}
		},

		onAdd: function (map) {
			this._map = map;
			this._animated = map._zoomAnimated;

			// create a container div for tiles
			this._initContainer();

			// set up events
			map.on({
				'viewreset': this._reset,
				'moveend': this._update
			}, this);

			if (this._animated) {
				map.on({
					'zoomanim': this._animateZoom,
					'zoomend': this._endZoomAnim
				}, this);
			}

			if (!this.options.updateWhenIdle) {
				this._limitedUpdate = L.Util.limitExecByInterval(this._update, 150, this);
				map.on('move', this._limitedUpdate, this);
			}

			this._reset();
			this._update();
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		onRemove: function (map) {
			this._container.parentNode.removeChild(this._container);

			map.off({
				'viewreset': this._reset,
				'moveend': this._update
			}, this);

			if (this._animated) {
				map.off({
					'zoomanim': this._animateZoom,
					'zoomend': this._endZoomAnim
				}, this);
			}

			if (!this.options.updateWhenIdle) {
				map.off('move', this._limitedUpdate, this);
			}

			this._container = null;
			this._map = null;
		},

		bringToFront: function () {
			var pane = this._map._panes.tilePane;

			if (this._container) {
				pane.appendChild(this._container);
				this._setAutoZIndex(pane, Math.max);
			}

			return this;
		},

		bringToBack: function () {
			var pane = this._map._panes.tilePane;

			if (this._container) {
				pane.insertBefore(this._container, pane.firstChild);
				this._setAutoZIndex(pane, Math.min);
			}

			return this;
		},

		getAttribution: function () {
			return this.options.attribution;
		},

		getContainer: function () {
			return this._container;
		},

		setOpacity: function (opacity) {
			this.options.opacity = opacity;

			if (this._map) {
				this._updateOpacity();
			}

			return this;
		},

		setZIndex: function (zIndex) {
			this.options.zIndex = zIndex;
			this._updateZIndex();

			return this;
		},

		setUrl: function (url, noRedraw) {
			this._url = url;

			if (!noRedraw) {
				this.redraw();
			}

			return this;
		},

		redraw: function () {
			if (this._map) {
				this._reset({hard: true});
				this._update();
			}
			return this;
		},

		_updateZIndex: function () {
			if (this._container && this.options.zIndex !== undefined) {
				this._container.style.zIndex = this.options.zIndex;
			}
		},

		_setAutoZIndex: function (pane, compare) {

			var layers = pane.children,
			    edgeZIndex = -compare(Infinity, -Infinity), // -Infinity for max, Infinity for min
			    zIndex, i, len;

			for (i = 0, len = layers.length; i < len; i++) {

				if (layers[i] !== this._container) {
					zIndex = parseInt(layers[i].style.zIndex, 10);

					if (!isNaN(zIndex)) {
						edgeZIndex = compare(edgeZIndex, zIndex);
					}
				}
			}

			this.options.zIndex = this._container.style.zIndex =
			        (isFinite(edgeZIndex) ? edgeZIndex : 0) + compare(1, -1);
		},

		_updateOpacity: function () {
			var i,
			    tiles = this._tiles;

			if (L.Browser.ielt9) {
				for (i in tiles) {
					L.DomUtil.setOpacity(tiles[i], this.options.opacity);
				}
			} else {
				L.DomUtil.setOpacity(this._container, this.options.opacity);
			}
		},

		_initContainer: function () {
			var tilePane = this._map._panes.tilePane;

			if (!this._container) {
				this._container = L.DomUtil.create('div', 'leaflet-layer');

				this._updateZIndex();

				if (this._animated) {
					var className = 'leaflet-tile-container';

					this._bgBuffer = L.DomUtil.create('div', className, this._container);
					this._tileContainer = L.DomUtil.create('div', className, this._container);

				} else {
					this._tileContainer = this._container;
				}

				tilePane.appendChild(this._container);

				if (this.options.opacity < 1) {
					this._updateOpacity();
				}
			}
		},

		_reset: function (e) {
			for (var key in this._tiles) {
				this.fire('tileunload', {tile: this._tiles[key]});
			}

			this._tiles = {};
			this._tilesToLoad = 0;

			if (this.options.reuseTiles) {
				this._unusedTiles = [];
			}

			this._tileContainer.innerHTML = '';

			if (this._animated && e && e.hard) {
				this._clearBgBuffer();
			}

			this._initContainer();
		},

		_getTileSize: function () {
			var map = this._map,
			    zoom = map.getZoom() + this.options.zoomOffset,
			    zoomN = this.options.maxNativeZoom,
			    tileSize = this.options.tileSize;

			if (zoomN && zoom > zoomN) {
				tileSize = Math.round(map.getZoomScale(zoom) / map.getZoomScale(zoomN) * tileSize);
			}

			return tileSize;
		},

		_update: function () {

			if (!this._map) { return; }

			var map = this._map,
			    bounds = map.getPixelBounds(),
			    zoom = map.getZoom(),
			    tileSize = this._getTileSize();

			if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
				return;
			}

			var tileBounds = L.bounds(
			        bounds.min.divideBy(tileSize)._floor(),
			        bounds.max.divideBy(tileSize)._floor());

			this._addTilesFromCenterOut(tileBounds);

			if (this.options.unloadInvisibleTiles || this.options.reuseTiles) {
				this._removeOtherTiles(tileBounds);
			}
		},

		_addTilesFromCenterOut: function (bounds) {
			var queue = [],
			    center = bounds.getCenter();

			var j, i, point;

			for (j = bounds.min.y; j <= bounds.max.y; j++) {
				for (i = bounds.min.x; i <= bounds.max.x; i++) {
					point = new L.Point(i, j);

					if (this._tileShouldBeLoaded(point)) {
						queue.push(point);
					}
				}
			}

			var tilesToLoad = queue.length;

			if (tilesToLoad === 0) { return; }

			// load tiles in order of their distance to center
			queue.sort(function (a, b) {
				return a.distanceTo(center) - b.distanceTo(center);
			});

			var fragment = document.createDocumentFragment();

			// if its the first batch of tiles to load
			if (!this._tilesToLoad) {
				this.fire('loading');
			}

			this._tilesToLoad += tilesToLoad;

			for (i = 0; i < tilesToLoad; i++) {
				this._addTile(queue[i], fragment);
			}

			this._tileContainer.appendChild(fragment);
		},

		_tileShouldBeLoaded: function (tilePoint) {
			if ((tilePoint.x + ':' + tilePoint.y) in this._tiles) {
				return false; // already loaded
			}

			var options = this.options;

			if (!options.continuousWorld) {
				var limit = this._getWrapTileNum();

				// don't load if exceeds world bounds
				if ((options.noWrap && (tilePoint.x < 0 || tilePoint.x >= limit.x)) ||
					tilePoint.y < 0 || tilePoint.y >= limit.y) { return false; }
			}

			if (options.bounds) {
				var tileSize = this._getTileSize(),
				    nwPoint = tilePoint.multiplyBy(tileSize),
				    sePoint = nwPoint.add([tileSize, tileSize]),
				    nw = this._map.unproject(nwPoint),
				    se = this._map.unproject(sePoint);

				// TODO temporary hack, will be removed after refactoring projections
				// https://github.com/Leaflet/Leaflet/issues/1618
				if (!options.continuousWorld && !options.noWrap) {
					nw = nw.wrap();
					se = se.wrap();
				}

				if (!options.bounds.intersects([nw, se])) { return false; }
			}

			return true;
		},

		_removeOtherTiles: function (bounds) {
			var kArr, x, y, key;

			for (key in this._tiles) {
				kArr = key.split(':');
				x = parseInt(kArr[0], 10);
				y = parseInt(kArr[1], 10);

				// remove tile if it's out of bounds
				if (x < bounds.min.x || x > bounds.max.x || y < bounds.min.y || y > bounds.max.y) {
					this._removeTile(key);
				}
			}
		},

		_removeTile: function (key) {
			var tile = this._tiles[key];

			this.fire('tileunload', {tile: tile, url: tile.src});

			if (this.options.reuseTiles) {
				L.DomUtil.removeClass(tile, 'leaflet-tile-loaded');
				this._unusedTiles.push(tile);

			} else if (tile.parentNode === this._tileContainer) {
				this._tileContainer.removeChild(tile);
			}

			// for https://github.com/CloudMade/Leaflet/issues/137
			if (!L.Browser.android) {
				tile.onload = null;
				tile.src = L.Util.emptyImageUrl;
			}

			delete this._tiles[key];
		},

		_addTile: function (tilePoint, container) {
			var tilePos = this._getTilePos(tilePoint);

			// get unused tile - or create a new tile
			var tile = this._getTile();

			/*
			Chrome 20 layouts much faster with top/left (verify with timeline, frames)
			Android 4 browser has display issues with top/left and requires transform instead
			(other browsers don't currently care) - see debug/hacks/jitter.html for an example
			*/
			L.DomUtil.setPosition(tile, tilePos, L.Browser.chrome);

			this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;

			this._loadTile(tile, tilePoint);

			if (tile.parentNode !== this._tileContainer) {
				container.appendChild(tile);
			}
		},

		_getZoomForUrl: function () {

			var options = this.options,
			    zoom = this._map.getZoom();

			if (options.zoomReverse) {
				zoom = options.maxZoom - zoom;
			}

			zoom += options.zoomOffset;

			return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
		},

		_getTilePos: function (tilePoint) {
			var origin = this._map.getPixelOrigin(),
			    tileSize = this._getTileSize();

			return tilePoint.multiplyBy(tileSize).subtract(origin);
		},

		// image-specific code (override to implement e.g. Canvas or SVG tile layer)

		getTileUrl: function (tilePoint) {
			return L.Util.template(this._url, L.extend({
				s: this._getSubdomain(tilePoint),
				z: tilePoint.z,
				x: tilePoint.x,
				y: tilePoint.y
			}, this.options));
		},

		_getWrapTileNum: function () {
			var crs = this._map.options.crs,
			    size = crs.getSize(this._map.getZoom());
			return size.divideBy(this._getTileSize())._floor();
		},

		_adjustTilePoint: function (tilePoint) {

			var limit = this._getWrapTileNum();

			// wrap tile coordinates
			if (!this.options.continuousWorld && !this.options.noWrap) {
				tilePoint.x = ((tilePoint.x % limit.x) + limit.x) % limit.x;
			}

			if (this.options.tms) {
				tilePoint.y = limit.y - tilePoint.y - 1;
			}

			tilePoint.z = this._getZoomForUrl();
		},

		_getSubdomain: function (tilePoint) {
			var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
			return this.options.subdomains[index];
		},

		_getTile: function () {
			if (this.options.reuseTiles && this._unusedTiles.length > 0) {
				var tile = this._unusedTiles.pop();
				this._resetTile(tile);
				return tile;
			}
			return this._createTile();
		},

		// Override if data stored on a tile needs to be cleaned up before reuse
		_resetTile: function (/*tile*/) {},

		_createTile: function () {
			var tile = L.DomUtil.create('img', 'leaflet-tile');
			tile.style.width = tile.style.height = this._getTileSize() + 'px';
			tile.galleryimg = 'no';

			tile.onselectstart = tile.onmousemove = L.Util.falseFn;

			if (L.Browser.ielt9 && this.options.opacity !== undefined) {
				L.DomUtil.setOpacity(tile, this.options.opacity);
			}
			// without this hack, tiles disappear after zoom on Chrome for Android
			// https://github.com/Leaflet/Leaflet/issues/2078
			if (L.Browser.mobileWebkit3d) {
				tile.style.WebkitBackfaceVisibility = 'hidden';
			}
			return tile;
		},

		_loadTile: function (tile, tilePoint) {
			tile._layer  = this;
			tile.onload  = this._tileOnLoad;
			tile.onerror = this._tileOnError;

			this._adjustTilePoint(tilePoint);
			tile.src     = this.getTileUrl(tilePoint);

			this.fire('tileloadstart', {
				tile: tile,
				url: tile.src
			});
		},

		_tileLoaded: function () {
			this._tilesToLoad--;

			if (this._animated) {
				L.DomUtil.addClass(this._tileContainer, 'leaflet-zoom-animated');
			}

			if (!this._tilesToLoad) {
				this.fire('load');

				if (this._animated) {
					// clear scaled tiles after all new tiles are loaded (for performance)
					clearTimeout(this._clearBgBufferTimer);
					this._clearBgBufferTimer = setTimeout(L.bind(this._clearBgBuffer, this), 500);
				}
			}
		},

		_tileOnLoad: function () {
			var layer = this._layer;

			//Only if we are loading an actual image
			if (this.src !== L.Util.emptyImageUrl) {
				L.DomUtil.addClass(this, 'leaflet-tile-loaded');

				layer.fire('tileload', {
					tile: this,
					url: this.src
				});
			}

			layer._tileLoaded();
		},

		_tileOnError: function () {
			var layer = this._layer;

			layer.fire('tileerror', {
				tile: this,
				url: this.src
			});

			var newUrl = layer.options.errorTileUrl;
			if (newUrl) {
				this.src = newUrl;
			}

			layer._tileLoaded();
		}
	});

	L.tileLayer = function (url, options) {
		return new L.TileLayer(url, options);
	};


	/*
	 * L.TileLayer.WMS is used for putting WMS tile layers on the map.
	 */

	L.TileLayer.WMS = L.TileLayer.extend({

		defaultWmsParams: {
			service: 'WMS',
			request: 'GetMap',
			version: '1.1.1',
			layers: '',
			styles: '',
			format: 'image/jpeg',
			transparent: false
		},

		initialize: function (url, options) { // (String, Object)

			this._url = url;

			var wmsParams = L.extend({}, this.defaultWmsParams),
			    tileSize = options.tileSize || this.options.tileSize;

			if (options.detectRetina && L.Browser.retina) {
				wmsParams.width = wmsParams.height = tileSize * 2;
			} else {
				wmsParams.width = wmsParams.height = tileSize;
			}

			for (var i in options) {
				// all keys that are not TileLayer options go to WMS params
				if (!this.options.hasOwnProperty(i) && i !== 'crs') {
					wmsParams[i] = options[i];
				}
			}

			this.wmsParams = wmsParams;

			L.setOptions(this, options);
		},

		onAdd: function (map) {

			this._crs = this.options.crs || map.options.crs;

			this._wmsVersion = parseFloat(this.wmsParams.version);

			var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
			this.wmsParams[projectionKey] = this._crs.code;

			L.TileLayer.prototype.onAdd.call(this, map);
		},

		getTileUrl: function (tilePoint) { // (Point, Number) -> String

			var map = this._map,
			    tileSize = this.options.tileSize,

			    nwPoint = tilePoint.multiplyBy(tileSize),
			    sePoint = nwPoint.add([tileSize, tileSize]),

			    nw = this._crs.project(map.unproject(nwPoint, tilePoint.z)),
			    se = this._crs.project(map.unproject(sePoint, tilePoint.z)),
			    bbox = this._wmsVersion >= 1.3 && this._crs === L.CRS.EPSG4326 ?
			        [se.y, nw.x, nw.y, se.x].join(',') :
			        [nw.x, se.y, se.x, nw.y].join(','),

			    url = L.Util.template(this._url, {s: this._getSubdomain(tilePoint)});

			return url + L.Util.getParamString(this.wmsParams, url, true) + '&BBOX=' + bbox;
		},

		setParams: function (params, noRedraw) {

			L.extend(this.wmsParams, params);

			if (!noRedraw) {
				this.redraw();
			}

			return this;
		}
	});

	L.tileLayer.wms = function (url, options) {
		return new L.TileLayer.WMS(url, options);
	};


	/*
	 * L.TileLayer.Canvas is a class that you can use as a base for creating
	 * dynamically drawn Canvas-based tile layers.
	 */

	L.TileLayer.Canvas = L.TileLayer.extend({
		options: {
			async: false
		},

		initialize: function (options) {
			L.setOptions(this, options);
		},

		redraw: function () {
			if (this._map) {
				this._reset({hard: true});
				this._update();
			}

			for (var i in this._tiles) {
				this._redrawTile(this._tiles[i]);
			}
			return this;
		},

		_redrawTile: function (tile) {
			this.drawTile(tile, tile._tilePoint, this._map._zoom);
		},

		_createTile: function () {
			var tile = L.DomUtil.create('canvas', 'leaflet-tile');
			tile.width = tile.height = this.options.tileSize;
			tile.onselectstart = tile.onmousemove = L.Util.falseFn;
			return tile;
		},

		_loadTile: function (tile, tilePoint) {
			tile._layer = this;
			tile._tilePoint = tilePoint;

			this._redrawTile(tile);

			if (!this.options.async) {
				this.tileDrawn(tile);
			}
		},

		drawTile: function (/*tile, tilePoint*/) {
			// override with rendering code
		},

		tileDrawn: function (tile) {
			this._tileOnLoad.call(tile);
		}
	});


	L.tileLayer.canvas = function (options) {
		return new L.TileLayer.Canvas(options);
	};


	/*
	 * L.ImageOverlay is used to overlay images over the map (to specific geographical bounds).
	 */

	L.ImageOverlay = L.Class.extend({
		includes: L.Mixin.Events,

		options: {
			opacity: 1
		},

		initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
			this._url = url;
			this._bounds = L.latLngBounds(bounds);

			L.setOptions(this, options);
		},

		onAdd: function (map) {
			this._map = map;

			if (!this._image) {
				this._initImage();
			}

			map._panes.overlayPane.appendChild(this._image);

			map.on('viewreset', this._reset, this);

			if (map.options.zoomAnimation && L.Browser.any3d) {
				map.on('zoomanim', this._animateZoom, this);
			}

			this._reset();
		},

		onRemove: function (map) {
			map.getPanes().overlayPane.removeChild(this._image);

			map.off('viewreset', this._reset, this);

			if (map.options.zoomAnimation) {
				map.off('zoomanim', this._animateZoom, this);
			}
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		setOpacity: function (opacity) {
			this.options.opacity = opacity;
			this._updateOpacity();
			return this;
		},

		// TODO remove bringToFront/bringToBack duplication from TileLayer/Path
		bringToFront: function () {
			if (this._image) {
				this._map._panes.overlayPane.appendChild(this._image);
			}
			return this;
		},

		bringToBack: function () {
			var pane = this._map._panes.overlayPane;
			if (this._image) {
				pane.insertBefore(this._image, pane.firstChild);
			}
			return this;
		},

		setUrl: function (url) {
			this._url = url;
			this._image.src = this._url;
		},

		getAttribution: function () {
			return this.options.attribution;
		},

		_initImage: function () {
			this._image = L.DomUtil.create('img', 'leaflet-image-layer');

			if (this._map.options.zoomAnimation && L.Browser.any3d) {
				L.DomUtil.addClass(this._image, 'leaflet-zoom-animated');
			} else {
				L.DomUtil.addClass(this._image, 'leaflet-zoom-hide');
			}

			this._updateOpacity();

			//TODO createImage util method to remove duplication
			L.extend(this._image, {
				galleryimg: 'no',
				onselectstart: L.Util.falseFn,
				onmousemove: L.Util.falseFn,
				onload: L.bind(this._onImageLoad, this),
				src: this._url
			});
		},

		_animateZoom: function (e) {
			var map = this._map,
			    image = this._image,
			    scale = map.getZoomScale(e.zoom),
			    nw = this._bounds.getNorthWest(),
			    se = this._bounds.getSouthEast(),

			    topLeft = map._latLngToNewLayerPoint(nw, e.zoom, e.center),
			    size = map._latLngToNewLayerPoint(se, e.zoom, e.center)._subtract(topLeft),
			    origin = topLeft._add(size._multiplyBy((1 / 2) * (1 - 1 / scale)));

			image.style[L.DomUtil.TRANSFORM] =
			        L.DomUtil.getTranslateString(origin) + ' scale(' + scale + ') ';
		},

		_reset: function () {
			var image   = this._image,
			    topLeft = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
			    size = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(topLeft);

			L.DomUtil.setPosition(image, topLeft);

			image.style.width  = size.x + 'px';
			image.style.height = size.y + 'px';
		},

		_onImageLoad: function () {
			this.fire('load');
		},

		_updateOpacity: function () {
			L.DomUtil.setOpacity(this._image, this.options.opacity);
		}
	});

	L.imageOverlay = function (url, bounds, options) {
		return new L.ImageOverlay(url, bounds, options);
	};


	/*
	 * L.Icon is an image-based icon class that you can use with L.Marker for custom markers.
	 */

	L.Icon = L.Class.extend({
		options: {
			/*
			iconUrl: (String) (required)
			iconRetinaUrl: (String) (optional, used for retina devices if detected)
			iconSize: (Point) (can be set through CSS)
			iconAnchor: (Point) (centered by default, can be set in CSS with negative margins)
			popupAnchor: (Point) (if not specified, popup opens in the anchor point)
			shadowUrl: (String) (no shadow by default)
			shadowRetinaUrl: (String) (optional, used for retina devices if detected)
			shadowSize: (Point)
			shadowAnchor: (Point)
			*/
			className: ''
		},

		initialize: function (options) {
			L.setOptions(this, options);
		},

		createIcon: function (oldIcon) {
			return this._createIcon('icon', oldIcon);
		},

		createShadow: function (oldIcon) {
			return this._createIcon('shadow', oldIcon);
		},

		_createIcon: function (name, oldIcon) {
			var src = this._getIconUrl(name);

			if (!src) {
				if (name === 'icon') {
					throw new Error('iconUrl not set in Icon options (see the docs).');
				}
				return null;
			}

			var img;
			if (!oldIcon || oldIcon.tagName !== 'IMG') {
				img = this._createImg(src);
			} else {
				img = this._createImg(src, oldIcon);
			}
			this._setIconStyles(img, name);

			return img;
		},

		_setIconStyles: function (img, name) {
			var options = this.options,
			    size = L.point(options[name + 'Size']),
			    anchor;

			if (name === 'shadow') {
				anchor = L.point(options.shadowAnchor || options.iconAnchor);
			} else {
				anchor = L.point(options.iconAnchor);
			}

			if (!anchor && size) {
				anchor = size.divideBy(2, true);
			}

			img.className = 'leaflet-marker-' + name + ' ' + options.className;

			if (anchor) {
				img.style.marginLeft = (-anchor.x) + 'px';
				img.style.marginTop  = (-anchor.y) + 'px';
			}

			if (size) {
				img.style.width  = size.x + 'px';
				img.style.height = size.y + 'px';
			}
		},

		_createImg: function (src, el) {
			el = el || document.createElement('img');
			el.src = src;
			return el;
		},

		_getIconUrl: function (name) {
			if (L.Browser.retina && this.options[name + 'RetinaUrl']) {
				return this.options[name + 'RetinaUrl'];
			}
			return this.options[name + 'Url'];
		}
	});

	L.icon = function (options) {
		return new L.Icon(options);
	};


	/*
	 * L.Icon.Default is the blue marker icon used by default in Leaflet.
	 */

	L.Icon.Default = L.Icon.extend({

		options: {
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],

			shadowSize: [41, 41]
		},

		_getIconUrl: function (name) {
			var key = name + 'Url';

			if (this.options[key]) {
				return this.options[key];
			}

			if (L.Browser.retina && name === 'icon') {
				name += '-2x';
			}

			var path = L.Icon.Default.imagePath;

			if (!path) {
				throw new Error('Couldn\'t autodetect L.Icon.Default.imagePath, set it manually.');
			}

			return path + '/marker-' + name + '.png';
		}
	});

	L.Icon.Default.imagePath = (function () {
		var scripts = document.getElementsByTagName('script'),
		    leafletRe = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;

		var i, len, src, matches, path;

		for (i = 0, len = scripts.length; i < len; i++) {
			src = scripts[i].src;
			matches = src.match(leafletRe);

			if (matches) {
				path = src.split(leafletRe)[0];
				return (path ? path + '/' : '') + 'images';
			}
		}
	}());


	/*
	 * L.Marker is used to display clickable/draggable icons on the map.
	 */

	L.Marker = L.Class.extend({

		includes: L.Mixin.Events,

		options: {
			icon: new L.Icon.Default(),
			title: '',
			alt: '',
			clickable: true,
			draggable: false,
			keyboard: true,
			zIndexOffset: 0,
			opacity: 1,
			riseOnHover: false,
			riseOffset: 250
		},

		initialize: function (latlng, options) {
			L.setOptions(this, options);
			this._latlng = L.latLng(latlng);
		},

		onAdd: function (map) {
			this._map = map;

			map.on('viewreset', this.update, this);

			this._initIcon();
			this.update();
			this.fire('add');

			if (map.options.zoomAnimation && map.options.markerZoomAnimation) {
				map.on('zoomanim', this._animateZoom, this);
			}
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		onRemove: function (map) {
			if (this.dragging) {
				this.dragging.disable();
			}

			this._removeIcon();
			this._removeShadow();

			this.fire('remove');

			map.off({
				'viewreset': this.update,
				'zoomanim': this._animateZoom
			}, this);

			this._map = null;
		},

		getLatLng: function () {
			return this._latlng;
		},

		setLatLng: function (latlng) {
			this._latlng = L.latLng(latlng);

			this.update();

			return this.fire('move', { latlng: this._latlng });
		},

		setZIndexOffset: function (offset) {
			this.options.zIndexOffset = offset;
			this.update();

			return this;
		},

		setIcon: function (icon) {

			this.options.icon = icon;

			if (this._map) {
				this._initIcon();
				this.update();
			}

			if (this._popup) {
				this.bindPopup(this._popup);
			}

			return this;
		},

		update: function () {
			if (this._icon) {
				this._setPos(this._map.latLngToLayerPoint(this._latlng).round());
			}
			return this;
		},

		_initIcon: function () {
			var options = this.options,
			    map = this._map,
			    animation = (map.options.zoomAnimation && map.options.markerZoomAnimation),
			    classToAdd = animation ? 'leaflet-zoom-animated' : 'leaflet-zoom-hide';

			var icon = options.icon.createIcon(this._icon),
				addIcon = false;

			// if we're not reusing the icon, remove the old one and init new one
			if (icon !== this._icon) {
				if (this._icon) {
					this._removeIcon();
				}
				addIcon = true;

				if (options.title) {
					icon.title = options.title;
				}

				if (options.alt) {
					icon.alt = options.alt;
				}
			}

			L.DomUtil.addClass(icon, classToAdd);

			if (options.keyboard) {
				icon.tabIndex = '0';
			}

			this._icon = icon;

			this._initInteraction();

			if (options.riseOnHover) {
				L.DomEvent
					.on(icon, 'mouseover', this._bringToFront, this)
					.on(icon, 'mouseout', this._resetZIndex, this);
			}

			var newShadow = options.icon.createShadow(this._shadow),
				addShadow = false;

			if (newShadow !== this._shadow) {
				this._removeShadow();
				addShadow = true;
			}

			if (newShadow) {
				L.DomUtil.addClass(newShadow, classToAdd);
			}
			this._shadow = newShadow;


			if (options.opacity < 1) {
				this._updateOpacity();
			}


			var panes = this._map._panes;

			if (addIcon) {
				panes.markerPane.appendChild(this._icon);
			}

			if (newShadow && addShadow) {
				panes.shadowPane.appendChild(this._shadow);
			}
		},

		_removeIcon: function () {
			if (this.options.riseOnHover) {
				L.DomEvent
				    .off(this._icon, 'mouseover', this._bringToFront)
				    .off(this._icon, 'mouseout', this._resetZIndex);
			}

			this._map._panes.markerPane.removeChild(this._icon);

			this._icon = null;
		},

		_removeShadow: function () {
			if (this._shadow) {
				this._map._panes.shadowPane.removeChild(this._shadow);
			}
			this._shadow = null;
		},

		_setPos: function (pos) {
			L.DomUtil.setPosition(this._icon, pos);

			if (this._shadow) {
				L.DomUtil.setPosition(this._shadow, pos);
			}

			this._zIndex = pos.y + this.options.zIndexOffset;

			this._resetZIndex();
		},

		_updateZIndex: function (offset) {
			this._icon.style.zIndex = this._zIndex + offset;
		},

		_animateZoom: function (opt) {
			var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

			this._setPos(pos);
		},

		_initInteraction: function () {

			if (!this.options.clickable) { return; }

			// TODO refactor into something shared with Map/Path/etc. to DRY it up

			var icon = this._icon,
			    events = ['dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu'];

			L.DomUtil.addClass(icon, 'leaflet-clickable');
			L.DomEvent.on(icon, 'click', this._onMouseClick, this);
			L.DomEvent.on(icon, 'keypress', this._onKeyPress, this);

			for (var i = 0; i < events.length; i++) {
				L.DomEvent.on(icon, events[i], this._fireMouseEvent, this);
			}

			if (L.Handler.MarkerDrag) {
				this.dragging = new L.Handler.MarkerDrag(this);

				if (this.options.draggable) {
					this.dragging.enable();
				}
			}
		},

		_onMouseClick: function (e) {
			var wasDragged = this.dragging && this.dragging.moved();

			if (this.hasEventListeners(e.type) || wasDragged) {
				L.DomEvent.stopPropagation(e);
			}

			if (wasDragged) { return; }

			if ((!this.dragging || !this.dragging._enabled) && this._map.dragging && this._map.dragging.moved()) { return; }

			this.fire(e.type, {
				originalEvent: e,
				latlng: this._latlng
			});
		},

		_onKeyPress: function (e) {
			if (e.keyCode === 13) {
				this.fire('click', {
					originalEvent: e,
					latlng: this._latlng
				});
			}
		},

		_fireMouseEvent: function (e) {

			this.fire(e.type, {
				originalEvent: e,
				latlng: this._latlng
			});

			// TODO proper custom event propagation
			// this line will always be called if marker is in a FeatureGroup
			if (e.type === 'contextmenu' && this.hasEventListeners(e.type)) {
				L.DomEvent.preventDefault(e);
			}
			if (e.type !== 'mousedown') {
				L.DomEvent.stopPropagation(e);
			} else {
				L.DomEvent.preventDefault(e);
			}
		},

		setOpacity: function (opacity) {
			this.options.opacity = opacity;
			if (this._map) {
				this._updateOpacity();
			}

			return this;
		},

		_updateOpacity: function () {
			L.DomUtil.setOpacity(this._icon, this.options.opacity);
			if (this._shadow) {
				L.DomUtil.setOpacity(this._shadow, this.options.opacity);
			}
		},

		_bringToFront: function () {
			this._updateZIndex(this.options.riseOffset);
		},

		_resetZIndex: function () {
			this._updateZIndex(0);
		}
	});

	L.marker = function (latlng, options) {
		return new L.Marker(latlng, options);
	};


	/*
	 * L.DivIcon is a lightweight HTML-based icon class (as opposed to the image-based L.Icon)
	 * to use with L.Marker.
	 */

	L.DivIcon = L.Icon.extend({
		options: {
			iconSize: [12, 12], // also can be set through CSS
			/*
			iconAnchor: (Point)
			popupAnchor: (Point)
			html: (String)
			bgPos: (Point)
			*/
			className: 'leaflet-div-icon',
			html: false
		},

		createIcon: function (oldIcon) {
			var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
			    options = this.options;

			if (options.html !== false) {
				div.innerHTML = options.html;
			} else {
				div.innerHTML = '';
			}

			if (options.bgPos) {
				div.style.backgroundPosition =
				        (-options.bgPos.x) + 'px ' + (-options.bgPos.y) + 'px';
			}

			this._setIconStyles(div, 'icon');
			return div;
		},

		createShadow: function () {
			return null;
		}
	});

	L.divIcon = function (options) {
		return new L.DivIcon(options);
	};


	/*
	 * L.Popup is used for displaying popups on the map.
	 */

	L.Map.mergeOptions({
		closePopupOnClick: true
	});

	L.Popup = L.Class.extend({
		includes: L.Mixin.Events,

		options: {
			minWidth: 50,
			maxWidth: 300,
			// maxHeight: null,
			autoPan: true,
			closeButton: true,
			offset: [0, 7],
			autoPanPadding: [5, 5],
			// autoPanPaddingTopLeft: null,
			// autoPanPaddingBottomRight: null,
			keepInView: false,
			className: '',
			zoomAnimation: true
		},

		initialize: function (options, source) {
			L.setOptions(this, options);

			this._source = source;
			this._animated = L.Browser.any3d && this.options.zoomAnimation;
			this._isOpen = false;
		},

		onAdd: function (map) {
			this._map = map;

			if (!this._container) {
				this._initLayout();
			}

			var animFade = map.options.fadeAnimation;

			if (animFade) {
				L.DomUtil.setOpacity(this._container, 0);
			}
			map._panes.popupPane.appendChild(this._container);

			map.on(this._getEvents(), this);

			this.update();

			if (animFade) {
				L.DomUtil.setOpacity(this._container, 1);
			}

			this.fire('open');

			map.fire('popupopen', {popup: this});

			if (this._source) {
				this._source.fire('popupopen', {popup: this});
			}
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		openOn: function (map) {
			map.openPopup(this);
			return this;
		},

		onRemove: function (map) {
			map._panes.popupPane.removeChild(this._container);

			L.Util.falseFn(this._container.offsetWidth); // force reflow

			map.off(this._getEvents(), this);

			if (map.options.fadeAnimation) {
				L.DomUtil.setOpacity(this._container, 0);
			}

			this._map = null;

			this.fire('close');

			map.fire('popupclose', {popup: this});

			if (this._source) {
				this._source.fire('popupclose', {popup: this});
			}
		},

		getLatLng: function () {
			return this._latlng;
		},

		setLatLng: function (latlng) {
			this._latlng = L.latLng(latlng);
			if (this._map) {
				this._updatePosition();
				this._adjustPan();
			}
			return this;
		},

		getContent: function () {
			return this._content;
		},

		setContent: function (content) {
			this._content = content;
			this.update();
			return this;
		},

		update: function () {
			if (!this._map) { return; }

			this._container.style.visibility = 'hidden';

			this._updateContent();
			this._updateLayout();
			this._updatePosition();

			this._container.style.visibility = '';

			this._adjustPan();
		},

		_getEvents: function () {
			var events = {
				viewreset: this._updatePosition
			};

			if (this._animated) {
				events.zoomanim = this._zoomAnimation;
			}
			if ('closeOnClick' in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
				events.preclick = this._close;
			}
			if (this.options.keepInView) {
				events.moveend = this._adjustPan;
			}

			return events;
		},

		_close: function () {
			if (this._map) {
				this._map.closePopup(this);
			}
		},

		_initLayout: function () {
			var prefix = 'leaflet-popup',
				containerClass = prefix + ' ' + this.options.className + ' leaflet-zoom-' +
				        (this._animated ? 'animated' : 'hide'),
				container = this._container = L.DomUtil.create('div', containerClass),
				closeButton;

			if (this.options.closeButton) {
				closeButton = this._closeButton =
				        L.DomUtil.create('a', prefix + '-close-button', container);
				closeButton.href = '#close';
				closeButton.innerHTML = '&#215;';
				L.DomEvent.disableClickPropagation(closeButton);

				L.DomEvent.on(closeButton, 'click', this._onCloseButtonClick, this);
			}

			var wrapper = this._wrapper =
			        L.DomUtil.create('div', prefix + '-content-wrapper', container);
			L.DomEvent.disableClickPropagation(wrapper);

			this._contentNode = L.DomUtil.create('div', prefix + '-content', wrapper);

			L.DomEvent.disableScrollPropagation(this._contentNode);
			L.DomEvent.on(wrapper, 'contextmenu', L.DomEvent.stopPropagation);

			this._tipContainer = L.DomUtil.create('div', prefix + '-tip-container', container);
			this._tip = L.DomUtil.create('div', prefix + '-tip', this._tipContainer);
		},

		_updateContent: function () {
			if (!this._content) { return; }

			if (typeof this._content === 'string') {
				this._contentNode.innerHTML = this._content;
			} else {
				while (this._contentNode.hasChildNodes()) {
					this._contentNode.removeChild(this._contentNode.firstChild);
				}
				this._contentNode.appendChild(this._content);
			}
			this.fire('contentupdate');
		},

		_updateLayout: function () {
			var container = this._contentNode,
			    style = container.style;

			style.width = '';
			style.whiteSpace = 'nowrap';

			var width = container.offsetWidth;
			width = Math.min(width, this.options.maxWidth);
			width = Math.max(width, this.options.minWidth);

			style.width = (width + 1) + 'px';
			style.whiteSpace = '';

			style.height = '';

			var height = container.offsetHeight,
			    maxHeight = this.options.maxHeight,
			    scrolledClass = 'leaflet-popup-scrolled';

			if (maxHeight && height > maxHeight) {
				style.height = maxHeight + 'px';
				L.DomUtil.addClass(container, scrolledClass);
			} else {
				L.DomUtil.removeClass(container, scrolledClass);
			}

			this._containerWidth = this._container.offsetWidth;
		},

		_updatePosition: function () {
			if (!this._map) { return; }

			var pos = this._map.latLngToLayerPoint(this._latlng),
			    animated = this._animated,
			    offset = L.point(this.options.offset);

			if (animated) {
				L.DomUtil.setPosition(this._container, pos);
			}

			this._containerBottom = -offset.y - (animated ? 0 : pos.y);
			this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x + (animated ? 0 : pos.x);

			// bottom position the popup in case the height of the popup changes (images loading etc)
			this._container.style.bottom = this._containerBottom + 'px';
			this._container.style.left = this._containerLeft + 'px';
		},

		_zoomAnimation: function (opt) {
			var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center);

			L.DomUtil.setPosition(this._container, pos);
		},

		_adjustPan: function () {
			if (!this.options.autoPan) { return; }

			var map = this._map,
			    containerHeight = this._container.offsetHeight,
			    containerWidth = this._containerWidth,

			    layerPos = new L.Point(this._containerLeft, -containerHeight - this._containerBottom);

			if (this._animated) {
				layerPos._add(L.DomUtil.getPosition(this._container));
			}

			var containerPos = map.layerPointToContainerPoint(layerPos),
			    padding = L.point(this.options.autoPanPadding),
			    paddingTL = L.point(this.options.autoPanPaddingTopLeft || padding),
			    paddingBR = L.point(this.options.autoPanPaddingBottomRight || padding),
			    size = map.getSize(),
			    dx = 0,
			    dy = 0;

			if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
				dx = containerPos.x + containerWidth - size.x + paddingBR.x;
			}
			if (containerPos.x - dx - paddingTL.x < 0) { // left
				dx = containerPos.x - paddingTL.x;
			}
			if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
				dy = containerPos.y + containerHeight - size.y + paddingBR.y;
			}
			if (containerPos.y - dy - paddingTL.y < 0) { // top
				dy = containerPos.y - paddingTL.y;
			}

			if (dx || dy) {
				map
				    .fire('autopanstart')
				    .panBy([dx, dy]);
			}
		},

		_onCloseButtonClick: function (e) {
			this._close();
			L.DomEvent.stop(e);
		}
	});

	L.popup = function (options, source) {
		return new L.Popup(options, source);
	};


	L.Map.include({
		openPopup: function (popup, latlng, options) { // (Popup) or (String || HTMLElement, LatLng[, Object])
			this.closePopup();

			if (!(popup instanceof L.Popup)) {
				var content = popup;

				popup = new L.Popup(options)
				    .setLatLng(latlng)
				    .setContent(content);
			}
			popup._isOpen = true;

			this._popup = popup;
			return this.addLayer(popup);
		},

		closePopup: function (popup) {
			if (!popup || popup === this._popup) {
				popup = this._popup;
				this._popup = null;
			}
			if (popup) {
				this.removeLayer(popup);
				popup._isOpen = false;
			}
			return this;
		}
	});


	/*
	 * Popup extension to L.Marker, adding popup-related methods.
	 */

	L.Marker.include({
		openPopup: function () {
			if (this._popup && this._map && !this._map.hasLayer(this._popup)) {
				this._popup.setLatLng(this._latlng);
				this._map.openPopup(this._popup);
			}

			return this;
		},

		closePopup: function () {
			if (this._popup) {
				this._popup._close();
			}
			return this;
		},

		togglePopup: function () {
			if (this._popup) {
				if (this._popup._isOpen) {
					this.closePopup();
				} else {
					this.openPopup();
				}
			}
			return this;
		},

		bindPopup: function (content, options) {
			var anchor = L.point(this.options.icon.options.popupAnchor || [0, 0]);

			anchor = anchor.add(L.Popup.prototype.options.offset);

			if (options && options.offset) {
				anchor = anchor.add(options.offset);
			}

			options = L.extend({offset: anchor}, options);

			if (!this._popupHandlersAdded) {
				this
				    .on('click', this.togglePopup, this)
				    .on('remove', this.closePopup, this)
				    .on('move', this._movePopup, this);
				this._popupHandlersAdded = true;
			}

			if (content instanceof L.Popup) {
				L.setOptions(content, options);
				this._popup = content;
				content._source = this;
			} else {
				this._popup = new L.Popup(options, this)
					.setContent(content);
			}

			return this;
		},

		setPopupContent: function (content) {
			if (this._popup) {
				this._popup.setContent(content);
			}
			return this;
		},

		unbindPopup: function () {
			if (this._popup) {
				this._popup = null;
				this
				    .off('click', this.togglePopup, this)
				    .off('remove', this.closePopup, this)
				    .off('move', this._movePopup, this);
				this._popupHandlersAdded = false;
			}
			return this;
		},

		getPopup: function () {
			return this._popup;
		},

		_movePopup: function (e) {
			this._popup.setLatLng(e.latlng);
		}
	});


	/*
	 * L.LayerGroup is a class to combine several layers into one so that
	 * you can manipulate the group (e.g. add/remove it) as one layer.
	 */

	L.LayerGroup = L.Class.extend({
		initialize: function (layers) {
			this._layers = {};

			var i, len;

			if (layers) {
				for (i = 0, len = layers.length; i < len; i++) {
					this.addLayer(layers[i]);
				}
			}
		},

		addLayer: function (layer) {
			var id = this.getLayerId(layer);

			this._layers[id] = layer;

			if (this._map) {
				this._map.addLayer(layer);
			}

			return this;
		},

		removeLayer: function (layer) {
			var id = layer in this._layers ? layer : this.getLayerId(layer);

			if (this._map && this._layers[id]) {
				this._map.removeLayer(this._layers[id]);
			}

			delete this._layers[id];

			return this;
		},

		hasLayer: function (layer) {
			if (!layer) { return false; }

			return (layer in this._layers || this.getLayerId(layer) in this._layers);
		},

		clearLayers: function () {
			this.eachLayer(this.removeLayer, this);
			return this;
		},

		invoke: function (methodName) {
			var args = Array.prototype.slice.call(arguments, 1),
			    i, layer;

			for (i in this._layers) {
				layer = this._layers[i];

				if (layer[methodName]) {
					layer[methodName].apply(layer, args);
				}
			}

			return this;
		},

		onAdd: function (map) {
			this._map = map;
			this.eachLayer(map.addLayer, map);
		},

		onRemove: function (map) {
			this.eachLayer(map.removeLayer, map);
			this._map = null;
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		eachLayer: function (method, context) {
			for (var i in this._layers) {
				method.call(context, this._layers[i]);
			}
			return this;
		},

		getLayer: function (id) {
			return this._layers[id];
		},

		getLayers: function () {
			var layers = [];

			for (var i in this._layers) {
				layers.push(this._layers[i]);
			}
			return layers;
		},

		setZIndex: function (zIndex) {
			return this.invoke('setZIndex', zIndex);
		},

		getLayerId: function (layer) {
			return L.stamp(layer);
		}
	});

	L.layerGroup = function (layers) {
		return new L.LayerGroup(layers);
	};


	/*
	 * L.FeatureGroup extends L.LayerGroup by introducing mouse events and additional methods
	 * shared between a group of interactive layers (like vectors or markers).
	 */

	L.FeatureGroup = L.LayerGroup.extend({
		includes: L.Mixin.Events,

		statics: {
			EVENTS: 'click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose'
		},

		addLayer: function (layer) {
			if (this.hasLayer(layer)) {
				return this;
			}

			if ('on' in layer) {
				layer.on(L.FeatureGroup.EVENTS, this._propagateEvent, this);
			}

			L.LayerGroup.prototype.addLayer.call(this, layer);

			if (this._popupContent && layer.bindPopup) {
				layer.bindPopup(this._popupContent, this._popupOptions);
			}

			return this.fire('layeradd', {layer: layer});
		},

		removeLayer: function (layer) {
			if (!this.hasLayer(layer)) {
				return this;
			}
			if (layer in this._layers) {
				layer = this._layers[layer];
			}

			if ('off' in layer) {
				layer.off(L.FeatureGroup.EVENTS, this._propagateEvent, this);
			}

			L.LayerGroup.prototype.removeLayer.call(this, layer);

			if (this._popupContent) {
				this.invoke('unbindPopup');
			}

			return this.fire('layerremove', {layer: layer});
		},

		bindPopup: function (content, options) {
			this._popupContent = content;
			this._popupOptions = options;
			return this.invoke('bindPopup', content, options);
		},

		openPopup: function (latlng) {
			// open popup on the first layer
			for (var id in this._layers) {
				this._layers[id].openPopup(latlng);
				break;
			}
			return this;
		},

		setStyle: function (style) {
			return this.invoke('setStyle', style);
		},

		bringToFront: function () {
			return this.invoke('bringToFront');
		},

		bringToBack: function () {
			return this.invoke('bringToBack');
		},

		getBounds: function () {
			var bounds = new L.LatLngBounds();

			this.eachLayer(function (layer) {
				bounds.extend(layer instanceof L.Marker ? layer.getLatLng() : layer.getBounds());
			});

			return bounds;
		},

		_propagateEvent: function (e) {
			e = L.extend({
				layer: e.target,
				target: this
			}, e);
			this.fire(e.type, e);
		}
	});

	L.featureGroup = function (layers) {
		return new L.FeatureGroup(layers);
	};


	/*
	 * L.Path is a base class for rendering vector paths on a map. Inherited by Polyline, Circle, etc.
	 */

	L.Path = L.Class.extend({
		includes: [L.Mixin.Events],

		statics: {
			// how much to extend the clip area around the map view
			// (relative to its size, e.g. 0.5 is half the screen in each direction)
			// set it so that SVG element doesn't exceed 1280px (vectors flicker on dragend if it is)
			CLIP_PADDING: (function () {
				var max = L.Browser.mobile ? 1280 : 2000,
				    target = (max / Math.max(window.outerWidth, window.outerHeight) - 1) / 2;
				return Math.max(0, Math.min(0.5, target));
			})()
		},

		options: {
			stroke: true,
			color: '#0033ff',
			dashArray: null,
			lineCap: null,
			lineJoin: null,
			weight: 5,
			opacity: 0.5,

			fill: false,
			fillColor: null, //same as color by default
			fillOpacity: 0.2,

			clickable: true
		},

		initialize: function (options) {
			L.setOptions(this, options);
		},

		onAdd: function (map) {
			this._map = map;

			if (!this._container) {
				this._initElements();
				this._initEvents();
			}

			this.projectLatlngs();
			this._updatePath();

			if (this._container) {
				this._map._pathRoot.appendChild(this._container);
			}

			this.fire('add');

			map.on({
				'viewreset': this.projectLatlngs,
				'moveend': this._updatePath
			}, this);
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		onRemove: function (map) {
			map._pathRoot.removeChild(this._container);

			// Need to fire remove event before we set _map to null as the event hooks might need the object
			this.fire('remove');
			this._map = null;

			if (L.Browser.vml) {
				this._container = null;
				this._stroke = null;
				this._fill = null;
			}

			map.off({
				'viewreset': this.projectLatlngs,
				'moveend': this._updatePath
			}, this);
		},

		projectLatlngs: function () {
			// do all projection stuff here
		},

		setStyle: function (style) {
			L.setOptions(this, style);

			if (this._container) {
				this._updateStyle();
			}

			return this;
		},

		redraw: function () {
			if (this._map) {
				this.projectLatlngs();
				this._updatePath();
			}
			return this;
		}
	});

	L.Map.include({
		_updatePathViewport: function () {
			var p = L.Path.CLIP_PADDING,
			    size = this.getSize(),
			    panePos = L.DomUtil.getPosition(this._mapPane),
			    min = panePos.multiplyBy(-1)._subtract(size.multiplyBy(p)._round()),
			    max = min.add(size.multiplyBy(1 + p * 2)._round());

			this._pathViewport = new L.Bounds(min, max);
		}
	});


	/*
	 * Extends L.Path with SVG-specific rendering code.
	 */

	L.Path.SVG_NS = 'http://www.w3.org/2000/svg';

	L.Browser.svg = !!(document.createElementNS && document.createElementNS(L.Path.SVG_NS, 'svg').createSVGRect);

	L.Path = L.Path.extend({
		statics: {
			SVG: L.Browser.svg
		},

		bringToFront: function () {
			var root = this._map._pathRoot,
			    path = this._container;

			if (path && root.lastChild !== path) {
				root.appendChild(path);
			}
			return this;
		},

		bringToBack: function () {
			var root = this._map._pathRoot,
			    path = this._container,
			    first = root.firstChild;

			if (path && first !== path) {
				root.insertBefore(path, first);
			}
			return this;
		},

		getPathString: function () {
			// form path string here
		},

		_createElement: function (name) {
			return document.createElementNS(L.Path.SVG_NS, name);
		},

		_initElements: function () {
			this._map._initPathRoot();
			this._initPath();
			this._initStyle();
		},

		_initPath: function () {
			this._container = this._createElement('g');

			this._path = this._createElement('path');

			if (this.options.className) {
				L.DomUtil.addClass(this._path, this.options.className);
			}

			this._container.appendChild(this._path);
		},

		_initStyle: function () {
			if (this.options.stroke) {
				this._path.setAttribute('stroke-linejoin', 'round');
				this._path.setAttribute('stroke-linecap', 'round');
			}
			if (this.options.fill) {
				this._path.setAttribute('fill-rule', 'evenodd');
			}
			if (this.options.pointerEvents) {
				this._path.setAttribute('pointer-events', this.options.pointerEvents);
			}
			if (!this.options.clickable && !this.options.pointerEvents) {
				this._path.setAttribute('pointer-events', 'none');
			}
			this._updateStyle();
		},

		_updateStyle: function () {
			if (this.options.stroke) {
				this._path.setAttribute('stroke', this.options.color);
				this._path.setAttribute('stroke-opacity', this.options.opacity);
				this._path.setAttribute('stroke-width', this.options.weight);
				if (this.options.dashArray) {
					this._path.setAttribute('stroke-dasharray', this.options.dashArray);
				} else {
					this._path.removeAttribute('stroke-dasharray');
				}
				if (this.options.lineCap) {
					this._path.setAttribute('stroke-linecap', this.options.lineCap);
				}
				if (this.options.lineJoin) {
					this._path.setAttribute('stroke-linejoin', this.options.lineJoin);
				}
			} else {
				this._path.setAttribute('stroke', 'none');
			}
			if (this.options.fill) {
				this._path.setAttribute('fill', this.options.fillColor || this.options.color);
				this._path.setAttribute('fill-opacity', this.options.fillOpacity);
			} else {
				this._path.setAttribute('fill', 'none');
			}
		},

		_updatePath: function () {
			var str = this.getPathString();
			if (!str) {
				// fix webkit empty string parsing bug
				str = 'M0 0';
			}
			this._path.setAttribute('d', str);
		},

		// TODO remove duplication with L.Map
		_initEvents: function () {
			if (this.options.clickable) {
				if (L.Browser.svg || !L.Browser.vml) {
					L.DomUtil.addClass(this._path, 'leaflet-clickable');
				}

				L.DomEvent.on(this._container, 'click', this._onMouseClick, this);

				var events = ['dblclick', 'mousedown', 'mouseover',
				              'mouseout', 'mousemove', 'contextmenu'];
				for (var i = 0; i < events.length; i++) {
					L.DomEvent.on(this._container, events[i], this._fireMouseEvent, this);
				}
			}
		},

		_onMouseClick: function (e) {
			if (this._map.dragging && this._map.dragging.moved()) { return; }

			this._fireMouseEvent(e);
		},

		_fireMouseEvent: function (e) {
			if (!this._map || !this.hasEventListeners(e.type)) { return; }

			var map = this._map,
			    containerPoint = map.mouseEventToContainerPoint(e),
			    layerPoint = map.containerPointToLayerPoint(containerPoint),
			    latlng = map.layerPointToLatLng(layerPoint);

			this.fire(e.type, {
				latlng: latlng,
				layerPoint: layerPoint,
				containerPoint: containerPoint,
				originalEvent: e
			});

			if (e.type === 'contextmenu') {
				L.DomEvent.preventDefault(e);
			}
			if (e.type !== 'mousemove') {
				L.DomEvent.stopPropagation(e);
			}
		}
	});

	L.Map.include({
		_initPathRoot: function () {
			if (!this._pathRoot) {
				this._pathRoot = L.Path.prototype._createElement('svg');
				this._panes.overlayPane.appendChild(this._pathRoot);

				if (this.options.zoomAnimation && L.Browser.any3d) {
					L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-animated');

					this.on({
						'zoomanim': this._animatePathZoom,
						'zoomend': this._endPathZoom
					});
				} else {
					L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-hide');
				}

				this.on('moveend', this._updateSvgViewport);
				this._updateSvgViewport();
			}
		},

		_animatePathZoom: function (e) {
			var scale = this.getZoomScale(e.zoom),
			    offset = this._getCenterOffset(e.center)._multiplyBy(-scale)._add(this._pathViewport.min);

			this._pathRoot.style[L.DomUtil.TRANSFORM] =
			        L.DomUtil.getTranslateString(offset) + ' scale(' + scale + ') ';

			this._pathZooming = true;
		},

		_endPathZoom: function () {
			this._pathZooming = false;
		},

		_updateSvgViewport: function () {

			if (this._pathZooming) {
				// Do not update SVGs while a zoom animation is going on otherwise the animation will break.
				// When the zoom animation ends we will be updated again anyway
				// This fixes the case where you do a momentum move and zoom while the move is still ongoing.
				return;
			}

			this._updatePathViewport();

			var vp = this._pathViewport,
			    min = vp.min,
			    max = vp.max,
			    width = max.x - min.x,
			    height = max.y - min.y,
			    root = this._pathRoot,
			    pane = this._panes.overlayPane;

			// Hack to make flicker on drag end on mobile webkit less irritating
			if (L.Browser.mobileWebkit) {
				pane.removeChild(root);
			}

			L.DomUtil.setPosition(root, min);
			root.setAttribute('width', width);
			root.setAttribute('height', height);
			root.setAttribute('viewBox', [min.x, min.y, width, height].join(' '));

			if (L.Browser.mobileWebkit) {
				pane.appendChild(root);
			}
		}
	});


	/*
	 * Popup extension to L.Path (polylines, polygons, circles), adding popup-related methods.
	 */

	L.Path.include({

		bindPopup: function (content, options) {

			if (content instanceof L.Popup) {
				this._popup = content;
			} else {
				if (!this._popup || options) {
					this._popup = new L.Popup(options, this);
				}
				this._popup.setContent(content);
			}

			if (!this._popupHandlersAdded) {
				this
				    .on('click', this._openPopup, this)
				    .on('remove', this.closePopup, this);

				this._popupHandlersAdded = true;
			}

			return this;
		},

		unbindPopup: function () {
			if (this._popup) {
				this._popup = null;
				this
				    .off('click', this._openPopup)
				    .off('remove', this.closePopup);

				this._popupHandlersAdded = false;
			}
			return this;
		},

		openPopup: function (latlng) {

			if (this._popup) {
				// open the popup from one of the path's points if not specified
				latlng = latlng || this._latlng ||
				         this._latlngs[Math.floor(this._latlngs.length / 2)];

				this._openPopup({latlng: latlng});
			}

			return this;
		},

		closePopup: function () {
			if (this._popup) {
				this._popup._close();
			}
			return this;
		},

		_openPopup: function (e) {
			this._popup.setLatLng(e.latlng);
			this._map.openPopup(this._popup);
		}
	});


	/*
	 * Vector rendering for IE6-8 through VML.
	 * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
	 */

	L.Browser.vml = !L.Browser.svg && (function () {
		try {
			var div = document.createElement('div');
			div.innerHTML = '<v:shape adj="1"/>';

			var shape = div.firstChild;
			shape.style.behavior = 'url(#default#VML)';

			return shape && (typeof shape.adj === 'object');

		} catch (e) {
			return false;
		}
	}());

	L.Path = L.Browser.svg || !L.Browser.vml ? L.Path : L.Path.extend({
		statics: {
			VML: true,
			CLIP_PADDING: 0.02
		},

		_createElement: (function () {
			try {
				document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
				return function (name) {
					return document.createElement('<lvml:' + name + ' class="lvml">');
				};
			} catch (e) {
				return function (name) {
					return document.createElement(
					        '<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
				};
			}
		}()),

		_initPath: function () {
			var container = this._container = this._createElement('shape');

			L.DomUtil.addClass(container, 'leaflet-vml-shape' +
				(this.options.className ? ' ' + this.options.className : ''));

			if (this.options.clickable) {
				L.DomUtil.addClass(container, 'leaflet-clickable');
			}

			container.coordsize = '1 1';

			this._path = this._createElement('path');
			container.appendChild(this._path);

			this._map._pathRoot.appendChild(container);
		},

		_initStyle: function () {
			this._updateStyle();
		},

		_updateStyle: function () {
			var stroke = this._stroke,
			    fill = this._fill,
			    options = this.options,
			    container = this._container;

			container.stroked = options.stroke;
			container.filled = options.fill;

			if (options.stroke) {
				if (!stroke) {
					stroke = this._stroke = this._createElement('stroke');
					stroke.endcap = 'round';
					container.appendChild(stroke);
				}
				stroke.weight = options.weight + 'px';
				stroke.color = options.color;
				stroke.opacity = options.opacity;

				if (options.dashArray) {
					stroke.dashStyle = L.Util.isArray(options.dashArray) ?
					    options.dashArray.join(' ') :
					    options.dashArray.replace(/( *, *)/g, ' ');
				} else {
					stroke.dashStyle = '';
				}
				if (options.lineCap) {
					stroke.endcap = options.lineCap.replace('butt', 'flat');
				}
				if (options.lineJoin) {
					stroke.joinstyle = options.lineJoin;
				}

			} else if (stroke) {
				container.removeChild(stroke);
				this._stroke = null;
			}

			if (options.fill) {
				if (!fill) {
					fill = this._fill = this._createElement('fill');
					container.appendChild(fill);
				}
				fill.color = options.fillColor || options.color;
				fill.opacity = options.fillOpacity;

			} else if (fill) {
				container.removeChild(fill);
				this._fill = null;
			}
		},

		_updatePath: function () {
			var style = this._container.style;

			style.display = 'none';
			this._path.v = this.getPathString() + ' '; // the space fixes IE empty path string bug
			style.display = '';
		}
	});

	L.Map.include(L.Browser.svg || !L.Browser.vml ? {} : {
		_initPathRoot: function () {
			if (this._pathRoot) { return; }

			var root = this._pathRoot = document.createElement('div');
			root.className = 'leaflet-vml-container';
			this._panes.overlayPane.appendChild(root);

			this.on('moveend', this._updatePathViewport);
			this._updatePathViewport();
		}
	});


	/*
	 * Vector rendering for all browsers that support canvas.
	 */

	L.Browser.canvas = (function () {
		return !!document.createElement('canvas').getContext;
	}());

	L.Path = (L.Path.SVG && !window.L_PREFER_CANVAS) || !L.Browser.canvas ? L.Path : L.Path.extend({
		statics: {
			//CLIP_PADDING: 0.02, // not sure if there's a need to set it to a small value
			CANVAS: true,
			SVG: false
		},

		redraw: function () {
			if (this._map) {
				this.projectLatlngs();
				this._requestUpdate();
			}
			return this;
		},

		setStyle: function (style) {
			L.setOptions(this, style);

			if (this._map) {
				this._updateStyle();
				this._requestUpdate();
			}
			return this;
		},

		onRemove: function (map) {
			map
			    .off('viewreset', this.projectLatlngs, this)
			    .off('moveend', this._updatePath, this);

			if (this.options.clickable) {
				this._map.off('click', this._onClick, this);
				this._map.off('mousemove', this._onMouseMove, this);
			}

			this._requestUpdate();
			
			this.fire('remove');
			this._map = null;
		},

		_requestUpdate: function () {
			if (this._map && !L.Path._updateRequest) {
				L.Path._updateRequest = L.Util.requestAnimFrame(this._fireMapMoveEnd, this._map);
			}
		},

		_fireMapMoveEnd: function () {
			L.Path._updateRequest = null;
			this.fire('moveend');
		},

		_initElements: function () {
			this._map._initPathRoot();
			this._ctx = this._map._canvasCtx;
		},

		_updateStyle: function () {
			var options = this.options;

			if (options.stroke) {
				this._ctx.lineWidth = options.weight;
				this._ctx.strokeStyle = options.color;
			}
			if (options.fill) {
				this._ctx.fillStyle = options.fillColor || options.color;
			}

			if (options.lineCap) {
				this._ctx.lineCap = options.lineCap;
			}
			if (options.lineJoin) {
				this._ctx.lineJoin = options.lineJoin;
			}
		},

		_drawPath: function () {
			var i, j, len, len2, point, drawMethod;

			this._ctx.beginPath();

			for (i = 0, len = this._parts.length; i < len; i++) {
				for (j = 0, len2 = this._parts[i].length; j < len2; j++) {
					point = this._parts[i][j];
					drawMethod = (j === 0 ? 'move' : 'line') + 'To';

					this._ctx[drawMethod](point.x, point.y);
				}
				// TODO refactor ugly hack
				if (this instanceof L.Polygon) {
					this._ctx.closePath();
				}
			}
		},

		_checkIfEmpty: function () {
			return !this._parts.length;
		},

		_updatePath: function () {
			if (this._checkIfEmpty()) { return; }

			var ctx = this._ctx,
			    options = this.options;

			this._drawPath();
			ctx.save();
			this._updateStyle();

			if (options.fill) {
				ctx.globalAlpha = options.fillOpacity;
				ctx.fill(options.fillRule || 'evenodd');
			}

			if (options.stroke) {
				ctx.globalAlpha = options.opacity;
				ctx.stroke();
			}

			ctx.restore();

			// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
		},

		_initEvents: function () {
			if (this.options.clickable) {
				this._map.on('mousemove', this._onMouseMove, this);
				this._map.on('click dblclick contextmenu', this._fireMouseEvent, this);
			}
		},

		_fireMouseEvent: function (e) {
			if (this._containsPoint(e.layerPoint)) {
				this.fire(e.type, e);
			}
		},

		_onMouseMove: function (e) {
			if (!this._map || this._map._animatingZoom) { return; }

			// TODO don't do on each move
			if (this._containsPoint(e.layerPoint)) {
				this._ctx.canvas.style.cursor = 'pointer';
				this._mouseInside = true;
				this.fire('mouseover', e);

			} else if (this._mouseInside) {
				this._ctx.canvas.style.cursor = '';
				this._mouseInside = false;
				this.fire('mouseout', e);
			}
		}
	});

	L.Map.include((L.Path.SVG && !window.L_PREFER_CANVAS) || !L.Browser.canvas ? {} : {
		_initPathRoot: function () {
			var root = this._pathRoot,
			    ctx;

			if (!root) {
				root = this._pathRoot = document.createElement('canvas');
				root.style.position = 'absolute';
				ctx = this._canvasCtx = root.getContext('2d');

				ctx.lineCap = 'round';
				ctx.lineJoin = 'round';

				this._panes.overlayPane.appendChild(root);

				if (this.options.zoomAnimation) {
					this._pathRoot.className = 'leaflet-zoom-animated';
					this.on('zoomanim', this._animatePathZoom);
					this.on('zoomend', this._endPathZoom);
				}
				this.on('moveend', this._updateCanvasViewport);
				this._updateCanvasViewport();
			}
		},

		_updateCanvasViewport: function () {
			// don't redraw while zooming. See _updateSvgViewport for more details
			if (this._pathZooming) { return; }
			this._updatePathViewport();

			var vp = this._pathViewport,
			    min = vp.min,
			    size = vp.max.subtract(min),
			    root = this._pathRoot;

			//TODO check if this works properly on mobile webkit
			L.DomUtil.setPosition(root, min);
			root.width = size.x;
			root.height = size.y;
			root.getContext('2d').translate(-min.x, -min.y);
		}
	});


	/*
	 * L.LineUtil contains different utility functions for line segments
	 * and polylines (clipping, simplification, distances, etc.)
	 */

	/*jshint bitwise:false */ // allow bitwise operations for this file

	L.LineUtil = {

		// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
		// Improves rendering performance dramatically by lessening the number of points to draw.

		simplify: function (/*Point[]*/ points, /*Number*/ tolerance) {
			if (!tolerance || !points.length) {
				return points.slice();
			}

			var sqTolerance = tolerance * tolerance;

			// stage 1: vertex reduction
			points = this._reducePoints(points, sqTolerance);

			// stage 2: Douglas-Peucker simplification
			points = this._simplifyDP(points, sqTolerance);

			return points;
		},

		// distance from a point to a segment between two points
		pointToSegmentDistance:  function (/*Point*/ p, /*Point*/ p1, /*Point*/ p2) {
			return Math.sqrt(this._sqClosestPointOnSegment(p, p1, p2, true));
		},

		closestPointOnSegment: function (/*Point*/ p, /*Point*/ p1, /*Point*/ p2) {
			return this._sqClosestPointOnSegment(p, p1, p2);
		},

		// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
		_simplifyDP: function (points, sqTolerance) {

			var len = points.length,
			    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
			    markers = new ArrayConstructor(len);

			markers[0] = markers[len - 1] = 1;

			this._simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

			var i,
			    newPoints = [];

			for (i = 0; i < len; i++) {
				if (markers[i]) {
					newPoints.push(points[i]);
				}
			}

			return newPoints;
		},

		_simplifyDPStep: function (points, markers, sqTolerance, first, last) {

			var maxSqDist = 0,
			    index, i, sqDist;

			for (i = first + 1; i <= last - 1; i++) {
				sqDist = this._sqClosestPointOnSegment(points[i], points[first], points[last], true);

				if (sqDist > maxSqDist) {
					index = i;
					maxSqDist = sqDist;
				}
			}

			if (maxSqDist > sqTolerance) {
				markers[index] = 1;

				this._simplifyDPStep(points, markers, sqTolerance, first, index);
				this._simplifyDPStep(points, markers, sqTolerance, index, last);
			}
		},

		// reduce points that are too close to each other to a single point
		_reducePoints: function (points, sqTolerance) {
			var reducedPoints = [points[0]];

			for (var i = 1, prev = 0, len = points.length; i < len; i++) {
				if (this._sqDist(points[i], points[prev]) > sqTolerance) {
					reducedPoints.push(points[i]);
					prev = i;
				}
			}
			if (prev < len - 1) {
				reducedPoints.push(points[len - 1]);
			}
			return reducedPoints;
		},

		// Cohen-Sutherland line clipping algorithm.
		// Used to avoid rendering parts of a polyline that are not currently visible.

		clipSegment: function (a, b, bounds, useLastCode) {
			var codeA = useLastCode ? this._lastCode : this._getBitCode(a, bounds),
			    codeB = this._getBitCode(b, bounds),

			    codeOut, p, newCode;

			// save 2nd code to avoid calculating it on the next segment
			this._lastCode = codeB;

			while (true) {
				// if a,b is inside the clip window (trivial accept)
				if (!(codeA | codeB)) {
					return [a, b];
				// if a,b is outside the clip window (trivial reject)
				} else if (codeA & codeB) {
					return false;
				// other cases
				} else {
					codeOut = codeA || codeB;
					p = this._getEdgeIntersection(a, b, codeOut, bounds);
					newCode = this._getBitCode(p, bounds);

					if (codeOut === codeA) {
						a = p;
						codeA = newCode;
					} else {
						b = p;
						codeB = newCode;
					}
				}
			}
		},

		_getEdgeIntersection: function (a, b, code, bounds) {
			var dx = b.x - a.x,
			    dy = b.y - a.y,
			    min = bounds.min,
			    max = bounds.max;

			if (code & 8) { // top
				return new L.Point(a.x + dx * (max.y - a.y) / dy, max.y);
			} else if (code & 4) { // bottom
				return new L.Point(a.x + dx * (min.y - a.y) / dy, min.y);
			} else if (code & 2) { // right
				return new L.Point(max.x, a.y + dy * (max.x - a.x) / dx);
			} else if (code & 1) { // left
				return new L.Point(min.x, a.y + dy * (min.x - a.x) / dx);
			}
		},

		_getBitCode: function (/*Point*/ p, bounds) {
			var code = 0;

			if (p.x < bounds.min.x) { // left
				code |= 1;
			} else if (p.x > bounds.max.x) { // right
				code |= 2;
			}
			if (p.y < bounds.min.y) { // bottom
				code |= 4;
			} else if (p.y > bounds.max.y) { // top
				code |= 8;
			}

			return code;
		},

		// square distance (to avoid unnecessary Math.sqrt calls)
		_sqDist: function (p1, p2) {
			var dx = p2.x - p1.x,
			    dy = p2.y - p1.y;
			return dx * dx + dy * dy;
		},

		// return closest point on segment or distance to that point
		_sqClosestPointOnSegment: function (p, p1, p2, sqDist) {
			var x = p1.x,
			    y = p1.y,
			    dx = p2.x - x,
			    dy = p2.y - y,
			    dot = dx * dx + dy * dy,
			    t;

			if (dot > 0) {
				t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

				if (t > 1) {
					x = p2.x;
					y = p2.y;
				} else if (t > 0) {
					x += dx * t;
					y += dy * t;
				}
			}

			dx = p.x - x;
			dy = p.y - y;

			return sqDist ? dx * dx + dy * dy : new L.Point(x, y);
		}
	};


	/*
	 * L.Polyline is used to display polylines on a map.
	 */

	L.Polyline = L.Path.extend({
		initialize: function (latlngs, options) {
			L.Path.prototype.initialize.call(this, options);

			this._latlngs = this._convertLatLngs(latlngs);
		},

		options: {
			// how much to simplify the polyline on each zoom level
			// more = better performance and smoother look, less = more accurate
			smoothFactor: 1.0,
			noClip: false
		},

		projectLatlngs: function () {
			this._originalPoints = [];

			for (var i = 0, len = this._latlngs.length; i < len; i++) {
				this._originalPoints[i] = this._map.latLngToLayerPoint(this._latlngs[i]);
			}
		},

		getPathString: function () {
			for (var i = 0, len = this._parts.length, str = ''; i < len; i++) {
				str += this._getPathPartStr(this._parts[i]);
			}
			return str;
		},

		getLatLngs: function () {
			return this._latlngs;
		},

		setLatLngs: function (latlngs) {
			this._latlngs = this._convertLatLngs(latlngs);
			return this.redraw();
		},

		addLatLng: function (latlng) {
			this._latlngs.push(L.latLng(latlng));
			return this.redraw();
		},

		spliceLatLngs: function () { // (Number index, Number howMany)
			var removed = [].splice.apply(this._latlngs, arguments);
			this._convertLatLngs(this._latlngs, true);
			this.redraw();
			return removed;
		},

		closestLayerPoint: function (p) {
			var minDistance = Infinity, parts = this._parts, p1, p2, minPoint = null;

			for (var j = 0, jLen = parts.length; j < jLen; j++) {
				var points = parts[j];
				for (var i = 1, len = points.length; i < len; i++) {
					p1 = points[i - 1];
					p2 = points[i];
					var sqDist = L.LineUtil._sqClosestPointOnSegment(p, p1, p2, true);
					if (sqDist < minDistance) {
						minDistance = sqDist;
						minPoint = L.LineUtil._sqClosestPointOnSegment(p, p1, p2);
					}
				}
			}
			if (minPoint) {
				minPoint.distance = Math.sqrt(minDistance);
			}
			return minPoint;
		},

		getBounds: function () {
			return new L.LatLngBounds(this.getLatLngs());
		},

		_convertLatLngs: function (latlngs, overwrite) {
			var i, len, target = overwrite ? latlngs : [];

			for (i = 0, len = latlngs.length; i < len; i++) {
				if (L.Util.isArray(latlngs[i]) && typeof latlngs[i][0] !== 'number') {
					return;
				}
				target[i] = L.latLng(latlngs[i]);
			}
			return target;
		},

		_initEvents: function () {
			L.Path.prototype._initEvents.call(this);
		},

		_getPathPartStr: function (points) {
			var round = L.Path.VML;

			for (var j = 0, len2 = points.length, str = '', p; j < len2; j++) {
				p = points[j];
				if (round) {
					p._round();
				}
				str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
			}
			return str;
		},

		_clipPoints: function () {
			var points = this._originalPoints,
			    len = points.length,
			    i, k, segment;

			if (this.options.noClip) {
				this._parts = [points];
				return;
			}

			this._parts = [];

			var parts = this._parts,
			    vp = this._map._pathViewport,
			    lu = L.LineUtil;

			for (i = 0, k = 0; i < len - 1; i++) {
				segment = lu.clipSegment(points[i], points[i + 1], vp, i);
				if (!segment) {
					continue;
				}

				parts[k] = parts[k] || [];
				parts[k].push(segment[0]);

				// if segment goes out of screen, or it's the last one, it's the end of the line part
				if ((segment[1] !== points[i + 1]) || (i === len - 2)) {
					parts[k].push(segment[1]);
					k++;
				}
			}
		},

		// simplify each clipped part of the polyline
		_simplifyPoints: function () {
			var parts = this._parts,
			    lu = L.LineUtil;

			for (var i = 0, len = parts.length; i < len; i++) {
				parts[i] = lu.simplify(parts[i], this.options.smoothFactor);
			}
		},

		_updatePath: function () {
			if (!this._map) { return; }

			this._clipPoints();
			this._simplifyPoints();

			L.Path.prototype._updatePath.call(this);
		}
	});

	L.polyline = function (latlngs, options) {
		return new L.Polyline(latlngs, options);
	};


	/*
	 * L.PolyUtil contains utility functions for polygons (clipping, etc.).
	 */

	/*jshint bitwise:false */ // allow bitwise operations here

	L.PolyUtil = {};

	/*
	 * Sutherland-Hodgeman polygon clipping algorithm.
	 * Used to avoid rendering parts of a polygon that are not currently visible.
	 */
	L.PolyUtil.clipPolygon = function (points, bounds) {
		var clippedPoints,
		    edges = [1, 4, 2, 8],
		    i, j, k,
		    a, b,
		    len, edge, p,
		    lu = L.LineUtil;

		for (i = 0, len = points.length; i < len; i++) {
			points[i]._code = lu._getBitCode(points[i], bounds);
		}

		// for each edge (left, bottom, right, top)
		for (k = 0; k < 4; k++) {
			edge = edges[k];
			clippedPoints = [];

			for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
				a = points[i];
				b = points[j];

				// if a is inside the clip window
				if (!(a._code & edge)) {
					// if b is outside the clip window (a->b goes out of screen)
					if (b._code & edge) {
						p = lu._getEdgeIntersection(b, a, edge, bounds);
						p._code = lu._getBitCode(p, bounds);
						clippedPoints.push(p);
					}
					clippedPoints.push(a);

				// else if b is inside the clip window (a->b enters the screen)
				} else if (!(b._code & edge)) {
					p = lu._getEdgeIntersection(b, a, edge, bounds);
					p._code = lu._getBitCode(p, bounds);
					clippedPoints.push(p);
				}
			}
			points = clippedPoints;
		}

		return points;
	};


	/*
	 * L.Polygon is used to display polygons on a map.
	 */

	L.Polygon = L.Polyline.extend({
		options: {
			fill: true
		},

		initialize: function (latlngs, options) {
			L.Polyline.prototype.initialize.call(this, latlngs, options);
			this._initWithHoles(latlngs);
		},

		_initWithHoles: function (latlngs) {
			var i, len, hole;
			if (latlngs && L.Util.isArray(latlngs[0]) && (typeof latlngs[0][0] !== 'number')) {
				this._latlngs = this._convertLatLngs(latlngs[0]);
				this._holes = latlngs.slice(1);

				for (i = 0, len = this._holes.length; i < len; i++) {
					hole = this._holes[i] = this._convertLatLngs(this._holes[i]);
					if (hole[0].equals(hole[hole.length - 1])) {
						hole.pop();
					}
				}
			}

			// filter out last point if its equal to the first one
			latlngs = this._latlngs;

			if (latlngs.length >= 2 && latlngs[0].equals(latlngs[latlngs.length - 1])) {
				latlngs.pop();
			}
		},

		projectLatlngs: function () {
			L.Polyline.prototype.projectLatlngs.call(this);

			// project polygon holes points
			// TODO move this logic to Polyline to get rid of duplication
			this._holePoints = [];

			if (!this._holes) { return; }

			var i, j, len, len2;

			for (i = 0, len = this._holes.length; i < len; i++) {
				this._holePoints[i] = [];

				for (j = 0, len2 = this._holes[i].length; j < len2; j++) {
					this._holePoints[i][j] = this._map.latLngToLayerPoint(this._holes[i][j]);
				}
			}
		},

		setLatLngs: function (latlngs) {
			if (latlngs && L.Util.isArray(latlngs[0]) && (typeof latlngs[0][0] !== 'number')) {
				this._initWithHoles(latlngs);
				return this.redraw();
			} else {
				return L.Polyline.prototype.setLatLngs.call(this, latlngs);
			}
		},

		_clipPoints: function () {
			var points = this._originalPoints,
			    newParts = [];

			this._parts = [points].concat(this._holePoints);

			if (this.options.noClip) { return; }

			for (var i = 0, len = this._parts.length; i < len; i++) {
				var clipped = L.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
				if (clipped.length) {
					newParts.push(clipped);
				}
			}

			this._parts = newParts;
		},

		_getPathPartStr: function (points) {
			var str = L.Polyline.prototype._getPathPartStr.call(this, points);
			return str + (L.Browser.svg ? 'z' : 'x');
		}
	});

	L.polygon = function (latlngs, options) {
		return new L.Polygon(latlngs, options);
	};


	/*
	 * Contains L.MultiPolyline and L.MultiPolygon layers.
	 */

	(function () {
		function createMulti(Klass) {

			return L.FeatureGroup.extend({

				initialize: function (latlngs, options) {
					this._layers = {};
					this._options = options;
					this.setLatLngs(latlngs);
				},

				setLatLngs: function (latlngs) {
					var i = 0,
					    len = latlngs.length;

					this.eachLayer(function (layer) {
						if (i < len) {
							layer.setLatLngs(latlngs[i++]);
						} else {
							this.removeLayer(layer);
						}
					}, this);

					while (i < len) {
						this.addLayer(new Klass(latlngs[i++], this._options));
					}

					return this;
				},

				getLatLngs: function () {
					var latlngs = [];

					this.eachLayer(function (layer) {
						latlngs.push(layer.getLatLngs());
					});

					return latlngs;
				}
			});
		}

		L.MultiPolyline = createMulti(L.Polyline);
		L.MultiPolygon = createMulti(L.Polygon);

		L.multiPolyline = function (latlngs, options) {
			return new L.MultiPolyline(latlngs, options);
		};

		L.multiPolygon = function (latlngs, options) {
			return new L.MultiPolygon(latlngs, options);
		};
	}());


	/*
	 * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
	 */

	L.Rectangle = L.Polygon.extend({
		initialize: function (latLngBounds, options) {
			L.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
		},

		setBounds: function (latLngBounds) {
			this.setLatLngs(this._boundsToLatLngs(latLngBounds));
		},

		_boundsToLatLngs: function (latLngBounds) {
			latLngBounds = L.latLngBounds(latLngBounds);
			return [
				latLngBounds.getSouthWest(),
				latLngBounds.getNorthWest(),
				latLngBounds.getNorthEast(),
				latLngBounds.getSouthEast()
			];
		}
	});

	L.rectangle = function (latLngBounds, options) {
		return new L.Rectangle(latLngBounds, options);
	};


	/*
	 * L.Circle is a circle overlay (with a certain radius in meters).
	 */

	L.Circle = L.Path.extend({
		initialize: function (latlng, radius, options) {
			L.Path.prototype.initialize.call(this, options);

			this._latlng = L.latLng(latlng);
			this._mRadius = radius;
		},

		options: {
			fill: true
		},

		setLatLng: function (latlng) {
			this._latlng = L.latLng(latlng);
			return this.redraw();
		},

		setRadius: function (radius) {
			this._mRadius = radius;
			return this.redraw();
		},

		projectLatlngs: function () {
			var lngRadius = this._getLngRadius(),
			    latlng = this._latlng,
			    pointLeft = this._map.latLngToLayerPoint([latlng.lat, latlng.lng - lngRadius]);

			this._point = this._map.latLngToLayerPoint(latlng);
			this._radius = Math.max(this._point.x - pointLeft.x, 1);
		},

		getBounds: function () {
			var lngRadius = this._getLngRadius(),
			    latRadius = (this._mRadius / 40075017) * 360,
			    latlng = this._latlng;

			return new L.LatLngBounds(
			        [latlng.lat - latRadius, latlng.lng - lngRadius],
			        [latlng.lat + latRadius, latlng.lng + lngRadius]);
		},

		getLatLng: function () {
			return this._latlng;
		},

		getPathString: function () {
			var p = this._point,
			    r = this._radius;

			if (this._checkIfEmpty()) {
				return '';
			}

			if (L.Browser.svg) {
				return 'M' + p.x + ',' + (p.y - r) +
				       'A' + r + ',' + r + ',0,1,1,' +
				       (p.x - 0.1) + ',' + (p.y - r) + ' z';
			} else {
				p._round();
				r = Math.round(r);
				return 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r + ' 0,' + (65535 * 360);
			}
		},

		getRadius: function () {
			return this._mRadius;
		},

		// TODO Earth hardcoded, move into projection code!

		_getLatRadius: function () {
			return (this._mRadius / 40075017) * 360;
		},

		_getLngRadius: function () {
			return this._getLatRadius() / Math.cos(L.LatLng.DEG_TO_RAD * this._latlng.lat);
		},

		_checkIfEmpty: function () {
			if (!this._map) {
				return false;
			}
			var vp = this._map._pathViewport,
			    r = this._radius,
			    p = this._point;

			return p.x - r > vp.max.x || p.y - r > vp.max.y ||
			       p.x + r < vp.min.x || p.y + r < vp.min.y;
		}
	});

	L.circle = function (latlng, radius, options) {
		return new L.Circle(latlng, radius, options);
	};


	/*
	 * L.CircleMarker is a circle overlay with a permanent pixel radius.
	 */

	L.CircleMarker = L.Circle.extend({
		options: {
			radius: 10,
			weight: 2
		},

		initialize: function (latlng, options) {
			L.Circle.prototype.initialize.call(this, latlng, null, options);
			this._radius = this.options.radius;
		},

		projectLatlngs: function () {
			this._point = this._map.latLngToLayerPoint(this._latlng);
		},

		_updateStyle : function () {
			L.Circle.prototype._updateStyle.call(this);
			this.setRadius(this.options.radius);
		},

		setLatLng: function (latlng) {
			L.Circle.prototype.setLatLng.call(this, latlng);
			if (this._popup && this._popup._isOpen) {
				this._popup.setLatLng(latlng);
			}
			return this;
		},

		setRadius: function (radius) {
			this.options.radius = this._radius = radius;
			return this.redraw();
		},

		getRadius: function () {
			return this._radius;
		}
	});

	L.circleMarker = function (latlng, options) {
		return new L.CircleMarker(latlng, options);
	};


	/*
	 * Extends L.Polyline to be able to manually detect clicks on Canvas-rendered polylines.
	 */

	L.Polyline.include(!L.Path.CANVAS ? {} : {
		_containsPoint: function (p, closed) {
			var i, j, k, len, len2, dist, part,
			    w = this.options.weight / 2;

			if (L.Browser.touch) {
				w += 10; // polyline click tolerance on touch devices
			}

			for (i = 0, len = this._parts.length; i < len; i++) {
				part = this._parts[i];
				for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
					if (!closed && (j === 0)) {
						continue;
					}

					dist = L.LineUtil.pointToSegmentDistance(p, part[k], part[j]);

					if (dist <= w) {
						return true;
					}
				}
			}
			return false;
		}
	});


	/*
	 * Extends L.Polygon to be able to manually detect clicks on Canvas-rendered polygons.
	 */

	L.Polygon.include(!L.Path.CANVAS ? {} : {
		_containsPoint: function (p) {
			var inside = false,
			    part, p1, p2,
			    i, j, k,
			    len, len2;

			// TODO optimization: check if within bounds first

			if (L.Polyline.prototype._containsPoint.call(this, p, true)) {
				// click on polygon border
				return true;
			}

			// ray casting algorithm for detecting if point is in polygon

			for (i = 0, len = this._parts.length; i < len; i++) {
				part = this._parts[i];

				for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
					p1 = part[j];
					p2 = part[k];

					if (((p1.y > p.y) !== (p2.y > p.y)) &&
							(p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
						inside = !inside;
					}
				}
			}

			return inside;
		}
	});


	/*
	 * Extends L.Circle with Canvas-specific code.
	 */

	L.Circle.include(!L.Path.CANVAS ? {} : {
		_drawPath: function () {
			var p = this._point;
			this._ctx.beginPath();
			this._ctx.arc(p.x, p.y, this._radius, 0, Math.PI * 2, false);
		},

		_containsPoint: function (p) {
			var center = this._point,
			    w2 = this.options.stroke ? this.options.weight / 2 : 0;

			return (p.distanceTo(center) <= this._radius + w2);
		}
	});


	/*
	 * CircleMarker canvas specific drawing parts.
	 */

	L.CircleMarker.include(!L.Path.CANVAS ? {} : {
		_updateStyle: function () {
			L.Path.prototype._updateStyle.call(this);
		}
	});


	/*
	 * L.GeoJSON turns any GeoJSON data into a Leaflet layer.
	 */

	L.GeoJSON = L.FeatureGroup.extend({

		initialize: function (geojson, options) {
			L.setOptions(this, options);

			this._layers = {};

			if (geojson) {
				this.addData(geojson);
			}
		},

		addData: function (geojson) {
			var features = L.Util.isArray(geojson) ? geojson : geojson.features,
			    i, len, feature;

			if (features) {
				for (i = 0, len = features.length; i < len; i++) {
					// Only add this if geometry or geometries are set and not null
					feature = features[i];
					if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
						this.addData(features[i]);
					}
				}
				return this;
			}

			var options = this.options;

			if (options.filter && !options.filter(geojson)) { return; }

			var layer = L.GeoJSON.geometryToLayer(geojson, options.pointToLayer, options.coordsToLatLng, options);
			layer.feature = L.GeoJSON.asFeature(geojson);

			layer.defaultOptions = layer.options;
			this.resetStyle(layer);

			if (options.onEachFeature) {
				options.onEachFeature(geojson, layer);
			}

			return this.addLayer(layer);
		},

		resetStyle: function (layer) {
			var style = this.options.style;
			if (style) {
				// reset any custom styles
				L.Util.extend(layer.options, layer.defaultOptions);

				this._setLayerStyle(layer, style);
			}
		},

		setStyle: function (style) {
			this.eachLayer(function (layer) {
				this._setLayerStyle(layer, style);
			}, this);
		},

		_setLayerStyle: function (layer, style) {
			if (typeof style === 'function') {
				style = style(layer.feature);
			}
			if (layer.setStyle) {
				layer.setStyle(style);
			}
		}
	});

	L.extend(L.GeoJSON, {
		geometryToLayer: function (geojson, pointToLayer, coordsToLatLng, vectorOptions) {
			var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
			    coords = geometry.coordinates,
			    layers = [],
			    latlng, latlngs, i, len;

			coordsToLatLng = coordsToLatLng || this.coordsToLatLng;

			switch (geometry.type) {
			case 'Point':
				latlng = coordsToLatLng(coords);
				return pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng);

			case 'MultiPoint':
				for (i = 0, len = coords.length; i < len; i++) {
					latlng = coordsToLatLng(coords[i]);
					layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng));
				}
				return new L.FeatureGroup(layers);

			case 'LineString':
				latlngs = this.coordsToLatLngs(coords, 0, coordsToLatLng);
				return new L.Polyline(latlngs, vectorOptions);

			case 'Polygon':
				if (coords.length === 2 && !coords[1].length) {
					throw new Error('Invalid GeoJSON object.');
				}
				latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
				return new L.Polygon(latlngs, vectorOptions);

			case 'MultiLineString':
				latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
				return new L.MultiPolyline(latlngs, vectorOptions);

			case 'MultiPolygon':
				latlngs = this.coordsToLatLngs(coords, 2, coordsToLatLng);
				return new L.MultiPolygon(latlngs, vectorOptions);

			case 'GeometryCollection':
				for (i = 0, len = geometry.geometries.length; i < len; i++) {

					layers.push(this.geometryToLayer({
						geometry: geometry.geometries[i],
						type: 'Feature',
						properties: geojson.properties
					}, pointToLayer, coordsToLatLng, vectorOptions));
				}
				return new L.FeatureGroup(layers);

			default:
				throw new Error('Invalid GeoJSON object.');
			}
		},

		coordsToLatLng: function (coords) { // (Array[, Boolean]) -> LatLng
			return new L.LatLng(coords[1], coords[0], coords[2]);
		},

		coordsToLatLngs: function (coords, levelsDeep, coordsToLatLng) { // (Array[, Number, Function]) -> Array
			var latlng, i, len,
			    latlngs = [];

			for (i = 0, len = coords.length; i < len; i++) {
				latlng = levelsDeep ?
				        this.coordsToLatLngs(coords[i], levelsDeep - 1, coordsToLatLng) :
				        (coordsToLatLng || this.coordsToLatLng)(coords[i]);

				latlngs.push(latlng);
			}

			return latlngs;
		},

		latLngToCoords: function (latlng) {
			var coords = [latlng.lng, latlng.lat];

			if (latlng.alt !== undefined) {
				coords.push(latlng.alt);
			}
			return coords;
		},

		latLngsToCoords: function (latLngs) {
			var coords = [];

			for (var i = 0, len = latLngs.length; i < len; i++) {
				coords.push(L.GeoJSON.latLngToCoords(latLngs[i]));
			}

			return coords;
		},

		getFeature: function (layer, newGeometry) {
			return layer.feature ? L.extend({}, layer.feature, {geometry: newGeometry}) : L.GeoJSON.asFeature(newGeometry);
		},

		asFeature: function (geoJSON) {
			if (geoJSON.type === 'Feature') {
				return geoJSON;
			}

			return {
				type: 'Feature',
				properties: {},
				geometry: geoJSON
			};
		}
	});

	var PointToGeoJSON = {
		toGeoJSON: function () {
			return L.GeoJSON.getFeature(this, {
				type: 'Point',
				coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
			});
		}
	};

	L.Marker.include(PointToGeoJSON);
	L.Circle.include(PointToGeoJSON);
	L.CircleMarker.include(PointToGeoJSON);

	L.Polyline.include({
		toGeoJSON: function () {
			return L.GeoJSON.getFeature(this, {
				type: 'LineString',
				coordinates: L.GeoJSON.latLngsToCoords(this.getLatLngs())
			});
		}
	});

	L.Polygon.include({
		toGeoJSON: function () {
			var coords = [L.GeoJSON.latLngsToCoords(this.getLatLngs())],
			    i, len, hole;

			coords[0].push(coords[0][0]);

			if (this._holes) {
				for (i = 0, len = this._holes.length; i < len; i++) {
					hole = L.GeoJSON.latLngsToCoords(this._holes[i]);
					hole.push(hole[0]);
					coords.push(hole);
				}
			}

			return L.GeoJSON.getFeature(this, {
				type: 'Polygon',
				coordinates: coords
			});
		}
	});

	(function () {
		function multiToGeoJSON(type) {
			return function () {
				var coords = [];

				this.eachLayer(function (layer) {
					coords.push(layer.toGeoJSON().geometry.coordinates);
				});

				return L.GeoJSON.getFeature(this, {
					type: type,
					coordinates: coords
				});
			};
		}

		L.MultiPolyline.include({toGeoJSON: multiToGeoJSON('MultiLineString')});
		L.MultiPolygon.include({toGeoJSON: multiToGeoJSON('MultiPolygon')});

		L.LayerGroup.include({
			toGeoJSON: function () {

				var geometry = this.feature && this.feature.geometry,
					jsons = [],
					json;

				if (geometry && geometry.type === 'MultiPoint') {
					return multiToGeoJSON('MultiPoint').call(this);
				}

				var isGeometryCollection = geometry && geometry.type === 'GeometryCollection';

				this.eachLayer(function (layer) {
					if (layer.toGeoJSON) {
						json = layer.toGeoJSON();
						jsons.push(isGeometryCollection ? json.geometry : L.GeoJSON.asFeature(json));
					}
				});

				if (isGeometryCollection) {
					return L.GeoJSON.getFeature(this, {
						geometries: jsons,
						type: 'GeometryCollection'
					});
				}

				return {
					type: 'FeatureCollection',
					features: jsons
				};
			}
		});
	}());

	L.geoJson = function (geojson, options) {
		return new L.GeoJSON(geojson, options);
	};


	/*
	 * L.DomEvent contains functions for working with DOM events.
	 */

	L.DomEvent = {
		/* inspired by John Resig, Dean Edwards and YUI addEvent implementations */
		addListener: function (obj, type, fn, context) { // (HTMLElement, String, Function[, Object])

			var id = L.stamp(fn),
			    key = '_leaflet_' + type + id,
			    handler, originalHandler, newType;

			if (obj[key]) { return this; }

			handler = function (e) {
				return fn.call(context || obj, e || L.DomEvent._getEvent());
			};

			if (L.Browser.pointer && type.indexOf('touch') === 0) {
				return this.addPointerListener(obj, type, handler, id);
			}
			if (L.Browser.touch && (type === 'dblclick') && this.addDoubleTapListener) {
				this.addDoubleTapListener(obj, handler, id);
			}

			if ('addEventListener' in obj) {

				if (type === 'mousewheel') {
					obj.addEventListener('DOMMouseScroll', handler, false);
					obj.addEventListener(type, handler, false);

				} else if ((type === 'mouseenter') || (type === 'mouseleave')) {

					originalHandler = handler;
					newType = (type === 'mouseenter' ? 'mouseover' : 'mouseout');

					handler = function (e) {
						if (!L.DomEvent._checkMouse(obj, e)) { return; }
						return originalHandler(e);
					};

					obj.addEventListener(newType, handler, false);

				} else if (type === 'click' && L.Browser.android) {
					originalHandler = handler;
					handler = function (e) {
						return L.DomEvent._filterClick(e, originalHandler);
					};

					obj.addEventListener(type, handler, false);
				} else {
					obj.addEventListener(type, handler, false);
				}

			} else if ('attachEvent' in obj) {
				obj.attachEvent('on' + type, handler);
			}

			obj[key] = handler;

			return this;
		},

		removeListener: function (obj, type, fn) {  // (HTMLElement, String, Function)

			var id = L.stamp(fn),
			    key = '_leaflet_' + type + id,
			    handler = obj[key];

			if (!handler) { return this; }

			if (L.Browser.pointer && type.indexOf('touch') === 0) {
				this.removePointerListener(obj, type, id);
			} else if (L.Browser.touch && (type === 'dblclick') && this.removeDoubleTapListener) {
				this.removeDoubleTapListener(obj, id);

			} else if ('removeEventListener' in obj) {

				if (type === 'mousewheel') {
					obj.removeEventListener('DOMMouseScroll', handler, false);
					obj.removeEventListener(type, handler, false);

				} else if ((type === 'mouseenter') || (type === 'mouseleave')) {
					obj.removeEventListener((type === 'mouseenter' ? 'mouseover' : 'mouseout'), handler, false);
				} else {
					obj.removeEventListener(type, handler, false);
				}
			} else if ('detachEvent' in obj) {
				obj.detachEvent('on' + type, handler);
			}

			obj[key] = null;

			return this;
		},

		stopPropagation: function (e) {

			if (e.stopPropagation) {
				e.stopPropagation();
			} else {
				e.cancelBubble = true;
			}
			L.DomEvent._skipped(e);

			return this;
		},

		disableScrollPropagation: function (el) {
			var stop = L.DomEvent.stopPropagation;

			return L.DomEvent
				.on(el, 'mousewheel', stop)
				.on(el, 'MozMousePixelScroll', stop);
		},

		disableClickPropagation: function (el) {
			var stop = L.DomEvent.stopPropagation;

			for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
				L.DomEvent.on(el, L.Draggable.START[i], stop);
			}

			return L.DomEvent
				.on(el, 'click', L.DomEvent._fakeStop)
				.on(el, 'dblclick', stop);
		},

		preventDefault: function (e) {

			if (e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
			return this;
		},

		stop: function (e) {
			return L.DomEvent
				.preventDefault(e)
				.stopPropagation(e);
		},

		getMousePosition: function (e, container) {
			if (!container) {
				return new L.Point(e.clientX, e.clientY);
			}

			var rect = container.getBoundingClientRect();

			return new L.Point(
				e.clientX - rect.left - container.clientLeft,
				e.clientY - rect.top - container.clientTop);
		},

		getWheelDelta: function (e) {

			var delta = 0;

			if (e.wheelDelta) {
				delta = e.wheelDelta / 120;
			}
			if (e.detail) {
				delta = -e.detail / 3;
			}
			return delta;
		},

		_skipEvents: {},

		_fakeStop: function (e) {
			// fakes stopPropagation by setting a special event flag, checked/reset with L.DomEvent._skipped(e)
			L.DomEvent._skipEvents[e.type] = true;
		},

		_skipped: function (e) {
			var skipped = this._skipEvents[e.type];
			// reset when checking, as it's only used in map container and propagates outside of the map
			this._skipEvents[e.type] = false;
			return skipped;
		},

		// check if element really left/entered the event target (for mouseenter/mouseleave)
		_checkMouse: function (el, e) {

			var related = e.relatedTarget;

			if (!related) { return true; }

			try {
				while (related && (related !== el)) {
					related = related.parentNode;
				}
			} catch (err) {
				return false;
			}
			return (related !== el);
		},

		_getEvent: function () { // evil magic for IE
			/*jshint noarg:false */
			var e = window.event;
			if (!e) {
				var caller = arguments.callee.caller;
				while (caller) {
					e = caller['arguments'][0];
					if (e && window.Event === e.constructor) {
						break;
					}
					caller = caller.caller;
				}
			}
			return e;
		},

		// this is a horrible workaround for a bug in Android where a single touch triggers two click events
		_filterClick: function (e, handler) {
			var timeStamp = (e.timeStamp || e.originalEvent.timeStamp),
				elapsed = L.DomEvent._lastClick && (timeStamp - L.DomEvent._lastClick);

			// are they closer together than 500ms yet more than 100ms?
			// Android typically triggers them ~300ms apart while multiple listeners
			// on the same event should be triggered far faster;
			// or check if click is simulated on the element, and if it is, reject any non-simulated events

			if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
				L.DomEvent.stop(e);
				return;
			}
			L.DomEvent._lastClick = timeStamp;

			return handler(e);
		}
	};

	L.DomEvent.on = L.DomEvent.addListener;
	L.DomEvent.off = L.DomEvent.removeListener;


	/*
	 * L.Draggable allows you to add dragging capabilities to any element. Supports mobile devices too.
	 */

	L.Draggable = L.Class.extend({
		includes: L.Mixin.Events,

		statics: {
			START: L.Browser.touch ? ['touchstart', 'mousedown'] : ['mousedown'],
			END: {
				mousedown: 'mouseup',
				touchstart: 'touchend',
				pointerdown: 'touchend',
				MSPointerDown: 'touchend'
			},
			MOVE: {
				mousedown: 'mousemove',
				touchstart: 'touchmove',
				pointerdown: 'touchmove',
				MSPointerDown: 'touchmove'
			}
		},

		initialize: function (element, dragStartTarget) {
			this._element = element;
			this._dragStartTarget = dragStartTarget || element;
		},

		enable: function () {
			if (this._enabled) { return; }

			for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
				L.DomEvent.on(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
			}

			this._enabled = true;
		},

		disable: function () {
			if (!this._enabled) { return; }

			for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
				L.DomEvent.off(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
			}

			this._enabled = false;
			this._moved = false;
		},

		_onDown: function (e) {
			this._moved = false;

			if (e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }

			L.DomEvent.stopPropagation(e);

			if (L.Draggable._disabled) { return; }

			L.DomUtil.disableImageDrag();
			L.DomUtil.disableTextSelection();

			if (this._moving) { return; }

			var first = e.touches ? e.touches[0] : e;

			this._startPoint = new L.Point(first.clientX, first.clientY);
			this._startPos = this._newPos = L.DomUtil.getPosition(this._element);

			L.DomEvent
			    .on(document, L.Draggable.MOVE[e.type], this._onMove, this)
			    .on(document, L.Draggable.END[e.type], this._onUp, this);
		},

		_onMove: function (e) {
			if (e.touches && e.touches.length > 1) {
				this._moved = true;
				return;
			}

			var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
			    newPoint = new L.Point(first.clientX, first.clientY),
			    offset = newPoint.subtract(this._startPoint);

			if (!offset.x && !offset.y) { return; }
			if (L.Browser.touch && Math.abs(offset.x) + Math.abs(offset.y) < 3) { return; }

			L.DomEvent.preventDefault(e);

			if (!this._moved) {
				this.fire('dragstart');

				this._moved = true;
				this._startPos = L.DomUtil.getPosition(this._element).subtract(offset);

				L.DomUtil.addClass(document.body, 'leaflet-dragging');
				this._lastTarget = e.target || e.srcElement;
				L.DomUtil.addClass(this._lastTarget, 'leaflet-drag-target');
			}

			this._newPos = this._startPos.add(offset);
			this._moving = true;

			L.Util.cancelAnimFrame(this._animRequest);
			this._animRequest = L.Util.requestAnimFrame(this._updatePosition, this, true, this._dragStartTarget);
		},

		_updatePosition: function () {
			this.fire('predrag');
			L.DomUtil.setPosition(this._element, this._newPos);
			this.fire('drag');
		},

		_onUp: function () {
			L.DomUtil.removeClass(document.body, 'leaflet-dragging');

			if (this._lastTarget) {
				L.DomUtil.removeClass(this._lastTarget, 'leaflet-drag-target');
				this._lastTarget = null;
			}

			for (var i in L.Draggable.MOVE) {
				L.DomEvent
				    .off(document, L.Draggable.MOVE[i], this._onMove)
				    .off(document, L.Draggable.END[i], this._onUp);
			}

			L.DomUtil.enableImageDrag();
			L.DomUtil.enableTextSelection();

			if (this._moved && this._moving) {
				// ensure drag is not fired after dragend
				L.Util.cancelAnimFrame(this._animRequest);

				this.fire('dragend', {
					distance: this._newPos.distanceTo(this._startPos)
				});
			}

			this._moving = false;
		}
	});


	/*
		L.Handler is a base class for handler classes that are used internally to inject
		interaction features like dragging to classes like Map and Marker.
	*/

	L.Handler = L.Class.extend({
		initialize: function (map) {
			this._map = map;
		},

		enable: function () {
			if (this._enabled) { return; }

			this._enabled = true;
			this.addHooks();
		},

		disable: function () {
			if (!this._enabled) { return; }

			this._enabled = false;
			this.removeHooks();
		},

		enabled: function () {
			return !!this._enabled;
		}
	});


	/*
	 * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
	 */

	L.Map.mergeOptions({
		dragging: true,

		inertia: !L.Browser.android23,
		inertiaDeceleration: 3400, // px/s^2
		inertiaMaxSpeed: Infinity, // px/s
		inertiaThreshold: L.Browser.touch ? 32 : 18, // ms
		easeLinearity: 0.25,

		// TODO refactor, move to CRS
		worldCopyJump: false
	});

	L.Map.Drag = L.Handler.extend({
		addHooks: function () {
			if (!this._draggable) {
				var map = this._map;

				this._draggable = new L.Draggable(map._mapPane, map._container);

				this._draggable.on({
					'dragstart': this._onDragStart,
					'drag': this._onDrag,
					'dragend': this._onDragEnd
				}, this);

				if (map.options.worldCopyJump) {
					this._draggable.on('predrag', this._onPreDrag, this);
					map.on('viewreset', this._onViewReset, this);

					map.whenReady(this._onViewReset, this);
				}
			}
			this._draggable.enable();
		},

		removeHooks: function () {
			this._draggable.disable();
		},

		moved: function () {
			return this._draggable && this._draggable._moved;
		},

		_onDragStart: function () {
			var map = this._map;

			if (map._panAnim) {
				map._panAnim.stop();
			}

			map
			    .fire('movestart')
			    .fire('dragstart');

			if (map.options.inertia) {
				this._positions = [];
				this._times = [];
			}
		},

		_onDrag: function () {
			if (this._map.options.inertia) {
				var time = this._lastTime = +new Date(),
				    pos = this._lastPos = this._draggable._newPos;

				this._positions.push(pos);
				this._times.push(time);

				if (time - this._times[0] > 200) {
					this._positions.shift();
					this._times.shift();
				}
			}

			this._map
			    .fire('move')
			    .fire('drag');
		},

		_onViewReset: function () {
			// TODO fix hardcoded Earth values
			var pxCenter = this._map.getSize()._divideBy(2),
			    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

			this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
			this._worldWidth = this._map.project([0, 180]).x;
		},

		_onPreDrag: function () {
			// TODO refactor to be able to adjust map pane position after zoom
			var worldWidth = this._worldWidth,
			    halfWidth = Math.round(worldWidth / 2),
			    dx = this._initialWorldOffset,
			    x = this._draggable._newPos.x,
			    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
			    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
			    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

			this._draggable._newPos.x = newX;
		},

		_onDragEnd: function (e) {
			var map = this._map,
			    options = map.options,
			    delay = +new Date() - this._lastTime,

			    noInertia = !options.inertia || delay > options.inertiaThreshold || !this._positions[0];

			map.fire('dragend', e);

			if (noInertia) {
				map.fire('moveend');

			} else {

				var direction = this._lastPos.subtract(this._positions[0]),
				    duration = (this._lastTime + delay - this._times[0]) / 1000,
				    ease = options.easeLinearity,

				    speedVector = direction.multiplyBy(ease / duration),
				    speed = speedVector.distanceTo([0, 0]),

				    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
				    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

				    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
				    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

				if (!offset.x || !offset.y) {
					map.fire('moveend');

				} else {
					offset = map._limitOffset(offset, map.options.maxBounds);

					L.Util.requestAnimFrame(function () {
						map.panBy(offset, {
							duration: decelerationDuration,
							easeLinearity: ease,
							noMoveStart: true
						});
					});
				}
			}
		}
	});

	L.Map.addInitHook('addHandler', 'dragging', L.Map.Drag);


	/*
	 * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
	 */

	L.Map.mergeOptions({
		doubleClickZoom: true
	});

	L.Map.DoubleClickZoom = L.Handler.extend({
		addHooks: function () {
			this._map.on('dblclick', this._onDoubleClick, this);
		},

		removeHooks: function () {
			this._map.off('dblclick', this._onDoubleClick, this);
		},

		_onDoubleClick: function (e) {
			var map = this._map,
			    zoom = map.getZoom() + (e.originalEvent.shiftKey ? -1 : 1);

			if (map.options.doubleClickZoom === 'center') {
				map.setZoom(zoom);
			} else {
				map.setZoomAround(e.containerPoint, zoom);
			}
		}
	});

	L.Map.addInitHook('addHandler', 'doubleClickZoom', L.Map.DoubleClickZoom);


	/*
	 * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
	 */

	L.Map.mergeOptions({
		scrollWheelZoom: true
	});

	L.Map.ScrollWheelZoom = L.Handler.extend({
		addHooks: function () {
			L.DomEvent.on(this._map._container, 'mousewheel', this._onWheelScroll, this);
			L.DomEvent.on(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
			this._delta = 0;
		},

		removeHooks: function () {
			L.DomEvent.off(this._map._container, 'mousewheel', this._onWheelScroll);
			L.DomEvent.off(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
		},

		_onWheelScroll: function (e) {
			var delta = L.DomEvent.getWheelDelta(e);

			this._delta += delta;
			this._lastMousePos = this._map.mouseEventToContainerPoint(e);

			if (!this._startTime) {
				this._startTime = +new Date();
			}

			var left = Math.max(40 - (+new Date() - this._startTime), 0);

			clearTimeout(this._timer);
			this._timer = setTimeout(L.bind(this._performZoom, this), left);

			L.DomEvent.preventDefault(e);
			L.DomEvent.stopPropagation(e);
		},

		_performZoom: function () {
			var map = this._map,
			    delta = this._delta,
			    zoom = map.getZoom();

			delta = delta > 0 ? Math.ceil(delta) : Math.floor(delta);
			delta = Math.max(Math.min(delta, 4), -4);
			delta = map._limitZoom(zoom + delta) - zoom;

			this._delta = 0;
			this._startTime = null;

			if (!delta) { return; }

			if (map.options.scrollWheelZoom === 'center') {
				map.setZoom(zoom + delta);
			} else {
				map.setZoomAround(this._lastMousePos, zoom + delta);
			}
		}
	});

	L.Map.addInitHook('addHandler', 'scrollWheelZoom', L.Map.ScrollWheelZoom);


	/*
	 * Extends the event handling code with double tap support for mobile browsers.
	 */

	L.extend(L.DomEvent, {

		_touchstart: L.Browser.msPointer ? 'MSPointerDown' : L.Browser.pointer ? 'pointerdown' : 'touchstart',
		_touchend: L.Browser.msPointer ? 'MSPointerUp' : L.Browser.pointer ? 'pointerup' : 'touchend',

		// inspired by Zepto touch code by Thomas Fuchs
		addDoubleTapListener: function (obj, handler, id) {
			var last,
			    doubleTap = false,
			    delay = 250,
			    touch,
			    pre = '_leaflet_',
			    touchstart = this._touchstart,
			    touchend = this._touchend,
			    trackedTouches = [];

			function onTouchStart(e) {
				var count;

				if (L.Browser.pointer) {
					trackedTouches.push(e.pointerId);
					count = trackedTouches.length;
				} else {
					count = e.touches.length;
				}
				if (count > 1) {
					return;
				}

				var now = Date.now(),
					delta = now - (last || now);

				touch = e.touches ? e.touches[0] : e;
				doubleTap = (delta > 0 && delta <= delay);
				last = now;
			}

			function onTouchEnd(e) {
				if (L.Browser.pointer) {
					var idx = trackedTouches.indexOf(e.pointerId);
					if (idx === -1) {
						return;
					}
					trackedTouches.splice(idx, 1);
				}

				if (doubleTap) {
					if (L.Browser.pointer) {
						// work around .type being readonly with MSPointer* events
						var newTouch = { },
							prop;

						// jshint forin:false
						for (var i in touch) {
							prop = touch[i];
							if (typeof prop === 'function') {
								newTouch[i] = prop.bind(touch);
							} else {
								newTouch[i] = prop;
							}
						}
						touch = newTouch;
					}
					touch.type = 'dblclick';
					handler(touch);
					last = null;
				}
			}
			obj[pre + touchstart + id] = onTouchStart;
			obj[pre + touchend + id] = onTouchEnd;

			// on pointer we need to listen on the document, otherwise a drag starting on the map and moving off screen
			// will not come through to us, so we will lose track of how many touches are ongoing
			var endElement = L.Browser.pointer ? document.documentElement : obj;

			obj.addEventListener(touchstart, onTouchStart, false);
			endElement.addEventListener(touchend, onTouchEnd, false);

			if (L.Browser.pointer) {
				endElement.addEventListener(L.DomEvent.POINTER_CANCEL, onTouchEnd, false);
			}

			return this;
		},

		removeDoubleTapListener: function (obj, id) {
			var pre = '_leaflet_';

			obj.removeEventListener(this._touchstart, obj[pre + this._touchstart + id], false);
			(L.Browser.pointer ? document.documentElement : obj).removeEventListener(
			        this._touchend, obj[pre + this._touchend + id], false);

			if (L.Browser.pointer) {
				document.documentElement.removeEventListener(L.DomEvent.POINTER_CANCEL, obj[pre + this._touchend + id],
					false);
			}

			return this;
		}
	});


	/*
	 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
	 */

	L.extend(L.DomEvent, {

		//static
		POINTER_DOWN: L.Browser.msPointer ? 'MSPointerDown' : 'pointerdown',
		POINTER_MOVE: L.Browser.msPointer ? 'MSPointerMove' : 'pointermove',
		POINTER_UP: L.Browser.msPointer ? 'MSPointerUp' : 'pointerup',
		POINTER_CANCEL: L.Browser.msPointer ? 'MSPointerCancel' : 'pointercancel',

		_pointers: [],
		_pointerDocumentListener: false,

		// Provides a touch events wrapper for (ms)pointer events.
		// Based on changes by veproza https://github.com/CloudMade/Leaflet/pull/1019
		//ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

		addPointerListener: function (obj, type, handler, id) {

			switch (type) {
			case 'touchstart':
				return this.addPointerListenerStart(obj, type, handler, id);
			case 'touchend':
				return this.addPointerListenerEnd(obj, type, handler, id);
			case 'touchmove':
				return this.addPointerListenerMove(obj, type, handler, id);
			default:
				throw 'Unknown touch event type';
			}
		},

		addPointerListenerStart: function (obj, type, handler, id) {
			var pre = '_leaflet_',
			    pointers = this._pointers;

			var cb = function (e) {
				if (e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
					L.DomEvent.preventDefault(e);
				}

				var alreadyInArray = false;
				for (var i = 0; i < pointers.length; i++) {
					if (pointers[i].pointerId === e.pointerId) {
						alreadyInArray = true;
						break;
					}
				}
				if (!alreadyInArray) {
					pointers.push(e);
				}

				e.touches = pointers.slice();
				e.changedTouches = [e];

				handler(e);
			};

			obj[pre + 'touchstart' + id] = cb;
			obj.addEventListener(this.POINTER_DOWN, cb, false);

			// need to also listen for end events to keep the _pointers list accurate
			// this needs to be on the body and never go away
			if (!this._pointerDocumentListener) {
				var internalCb = function (e) {
					for (var i = 0; i < pointers.length; i++) {
						if (pointers[i].pointerId === e.pointerId) {
							pointers.splice(i, 1);
							break;
						}
					}
				};
				//We listen on the documentElement as any drags that end by moving the touch off the screen get fired there
				document.documentElement.addEventListener(this.POINTER_UP, internalCb, false);
				document.documentElement.addEventListener(this.POINTER_CANCEL, internalCb, false);

				this._pointerDocumentListener = true;
			}

			return this;
		},

		addPointerListenerMove: function (obj, type, handler, id) {
			var pre = '_leaflet_',
			    touches = this._pointers;

			function cb(e) {

				// don't fire touch moves when mouse isn't down
				if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) { return; }

				for (var i = 0; i < touches.length; i++) {
					if (touches[i].pointerId === e.pointerId) {
						touches[i] = e;
						break;
					}
				}

				e.touches = touches.slice();
				e.changedTouches = [e];

				handler(e);
			}

			obj[pre + 'touchmove' + id] = cb;
			obj.addEventListener(this.POINTER_MOVE, cb, false);

			return this;
		},

		addPointerListenerEnd: function (obj, type, handler, id) {
			var pre = '_leaflet_',
			    touches = this._pointers;

			var cb = function (e) {
				for (var i = 0; i < touches.length; i++) {
					if (touches[i].pointerId === e.pointerId) {
						touches.splice(i, 1);
						break;
					}
				}

				e.touches = touches.slice();
				e.changedTouches = [e];

				handler(e);
			};

			obj[pre + 'touchend' + id] = cb;
			obj.addEventListener(this.POINTER_UP, cb, false);
			obj.addEventListener(this.POINTER_CANCEL, cb, false);

			return this;
		},

		removePointerListener: function (obj, type, id) {
			var pre = '_leaflet_',
			    cb = obj[pre + type + id];

			switch (type) {
			case 'touchstart':
				obj.removeEventListener(this.POINTER_DOWN, cb, false);
				break;
			case 'touchmove':
				obj.removeEventListener(this.POINTER_MOVE, cb, false);
				break;
			case 'touchend':
				obj.removeEventListener(this.POINTER_UP, cb, false);
				obj.removeEventListener(this.POINTER_CANCEL, cb, false);
				break;
			}

			return this;
		}
	});


	/*
	 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
	 */

	L.Map.mergeOptions({
		touchZoom: L.Browser.touch && !L.Browser.android23,
		bounceAtZoomLimits: true
	});

	L.Map.TouchZoom = L.Handler.extend({
		addHooks: function () {
			L.DomEvent.on(this._map._container, 'touchstart', this._onTouchStart, this);
		},

		removeHooks: function () {
			L.DomEvent.off(this._map._container, 'touchstart', this._onTouchStart, this);
		},

		_onTouchStart: function (e) {
			var map = this._map;

			if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

			var p1 = map.mouseEventToLayerPoint(e.touches[0]),
			    p2 = map.mouseEventToLayerPoint(e.touches[1]),
			    viewCenter = map._getCenterLayerPoint();

			this._startCenter = p1.add(p2)._divideBy(2);
			this._startDist = p1.distanceTo(p2);

			this._moved = false;
			this._zooming = true;

			this._centerOffset = viewCenter.subtract(this._startCenter);

			if (map._panAnim) {
				map._panAnim.stop();
			}

			L.DomEvent
			    .on(document, 'touchmove', this._onTouchMove, this)
			    .on(document, 'touchend', this._onTouchEnd, this);

			L.DomEvent.preventDefault(e);
		},

		_onTouchMove: function (e) {
			var map = this._map;

			if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

			var p1 = map.mouseEventToLayerPoint(e.touches[0]),
			    p2 = map.mouseEventToLayerPoint(e.touches[1]);

			this._scale = p1.distanceTo(p2) / this._startDist;
			this._delta = p1._add(p2)._divideBy(2)._subtract(this._startCenter);

			if (this._scale === 1) { return; }

			if (!map.options.bounceAtZoomLimits) {
				if ((map.getZoom() === map.getMinZoom() && this._scale < 1) ||
				    (map.getZoom() === map.getMaxZoom() && this._scale > 1)) { return; }
			}

			if (!this._moved) {
				L.DomUtil.addClass(map._mapPane, 'leaflet-touching');

				map
				    .fire('movestart')
				    .fire('zoomstart');

				this._moved = true;
			}

			L.Util.cancelAnimFrame(this._animRequest);
			this._animRequest = L.Util.requestAnimFrame(
			        this._updateOnMove, this, true, this._map._container);

			L.DomEvent.preventDefault(e);
		},

		_updateOnMove: function () {
			var map = this._map,
			    origin = this._getScaleOrigin(),
			    center = map.layerPointToLatLng(origin),
			    zoom = map.getScaleZoom(this._scale);

			map._animateZoom(center, zoom, this._startCenter, this._scale, this._delta, false, true);
		},

		_onTouchEnd: function () {
			if (!this._moved || !this._zooming) {
				this._zooming = false;
				return;
			}

			var map = this._map;

			this._zooming = false;
			L.DomUtil.removeClass(map._mapPane, 'leaflet-touching');
			L.Util.cancelAnimFrame(this._animRequest);

			L.DomEvent
			    .off(document, 'touchmove', this._onTouchMove)
			    .off(document, 'touchend', this._onTouchEnd);

			var origin = this._getScaleOrigin(),
			    center = map.layerPointToLatLng(origin),

			    oldZoom = map.getZoom(),
			    floatZoomDelta = map.getScaleZoom(this._scale) - oldZoom,
			    roundZoomDelta = (floatZoomDelta > 0 ?
			            Math.ceil(floatZoomDelta) : Math.floor(floatZoomDelta)),

			    zoom = map._limitZoom(oldZoom + roundZoomDelta),
			    scale = map.getZoomScale(zoom) / this._scale;

			map._animateZoom(center, zoom, origin, scale);
		},

		_getScaleOrigin: function () {
			var centerOffset = this._centerOffset.subtract(this._delta).divideBy(this._scale);
			return this._startCenter.add(centerOffset);
		}
	});

	L.Map.addInitHook('addHandler', 'touchZoom', L.Map.TouchZoom);


	/*
	 * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
	 */

	L.Map.mergeOptions({
		tap: true,
		tapTolerance: 15
	});

	L.Map.Tap = L.Handler.extend({
		addHooks: function () {
			L.DomEvent.on(this._map._container, 'touchstart', this._onDown, this);
		},

		removeHooks: function () {
			L.DomEvent.off(this._map._container, 'touchstart', this._onDown, this);
		},

		_onDown: function (e) {
			if (!e.touches) { return; }

			L.DomEvent.preventDefault(e);

			this._fireClick = true;

			// don't simulate click or track longpress if more than 1 touch
			if (e.touches.length > 1) {
				this._fireClick = false;
				clearTimeout(this._holdTimeout);
				return;
			}

			var first = e.touches[0],
			    el = first.target;

			this._startPos = this._newPos = new L.Point(first.clientX, first.clientY);

			// if touching a link, highlight it
			if (el.tagName && el.tagName.toLowerCase() === 'a') {
				L.DomUtil.addClass(el, 'leaflet-active');
			}

			// simulate long hold but setting a timeout
			this._holdTimeout = setTimeout(L.bind(function () {
				if (this._isTapValid()) {
					this._fireClick = false;
					this._onUp();
					this._simulateEvent('contextmenu', first);
				}
			}, this), 1000);

			L.DomEvent
				.on(document, 'touchmove', this._onMove, this)
				.on(document, 'touchend', this._onUp, this);
		},

		_onUp: function (e) {
			clearTimeout(this._holdTimeout);

			L.DomEvent
				.off(document, 'touchmove', this._onMove, this)
				.off(document, 'touchend', this._onUp, this);

			if (this._fireClick && e && e.changedTouches) {

				var first = e.changedTouches[0],
				    el = first.target;

				if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
					L.DomUtil.removeClass(el, 'leaflet-active');
				}

				// simulate click if the touch didn't move too much
				if (this._isTapValid()) {
					this._simulateEvent('click', first);
				}
			}
		},

		_isTapValid: function () {
			return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
		},

		_onMove: function (e) {
			var first = e.touches[0];
			this._newPos = new L.Point(first.clientX, first.clientY);
		},

		_simulateEvent: function (type, e) {
			var simulatedEvent = document.createEvent('MouseEvents');

			simulatedEvent._simulated = true;
			e.target._simulatedClick = true;

			simulatedEvent.initMouseEvent(
			        type, true, true, window, 1,
			        e.screenX, e.screenY,
			        e.clientX, e.clientY,
			        false, false, false, false, 0, null);

			e.target.dispatchEvent(simulatedEvent);
		}
	});

	if (L.Browser.touch && !L.Browser.pointer) {
		L.Map.addInitHook('addHandler', 'tap', L.Map.Tap);
	}


	/*
	 * L.Handler.ShiftDragZoom is used to add shift-drag zoom interaction to the map
	  * (zoom to a selected bounding box), enabled by default.
	 */

	L.Map.mergeOptions({
		boxZoom: true
	});

	L.Map.BoxZoom = L.Handler.extend({
		initialize: function (map) {
			this._map = map;
			this._container = map._container;
			this._pane = map._panes.overlayPane;
			this._moved = false;
		},

		addHooks: function () {
			L.DomEvent.on(this._container, 'mousedown', this._onMouseDown, this);
		},

		removeHooks: function () {
			L.DomEvent.off(this._container, 'mousedown', this._onMouseDown);
			this._moved = false;
		},

		moved: function () {
			return this._moved;
		},

		_onMouseDown: function (e) {
			this._moved = false;

			if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

			L.DomUtil.disableTextSelection();
			L.DomUtil.disableImageDrag();

			this._startLayerPoint = this._map.mouseEventToLayerPoint(e);

			L.DomEvent
			    .on(document, 'mousemove', this._onMouseMove, this)
			    .on(document, 'mouseup', this._onMouseUp, this)
			    .on(document, 'keydown', this._onKeyDown, this);
		},

		_onMouseMove: function (e) {
			if (!this._moved) {
				this._box = L.DomUtil.create('div', 'leaflet-zoom-box', this._pane);
				L.DomUtil.setPosition(this._box, this._startLayerPoint);

				//TODO refactor: move cursor to styles
				this._container.style.cursor = 'crosshair';
				this._map.fire('boxzoomstart');
			}

			var startPoint = this._startLayerPoint,
			    box = this._box,

			    layerPoint = this._map.mouseEventToLayerPoint(e),
			    offset = layerPoint.subtract(startPoint),

			    newPos = new L.Point(
			        Math.min(layerPoint.x, startPoint.x),
			        Math.min(layerPoint.y, startPoint.y));

			L.DomUtil.setPosition(box, newPos);

			this._moved = true;

			// TODO refactor: remove hardcoded 4 pixels
			box.style.width  = (Math.max(0, Math.abs(offset.x) - 4)) + 'px';
			box.style.height = (Math.max(0, Math.abs(offset.y) - 4)) + 'px';
		},

		_finish: function () {
			if (this._moved) {
				this._pane.removeChild(this._box);
				this._container.style.cursor = '';
			}

			L.DomUtil.enableTextSelection();
			L.DomUtil.enableImageDrag();

			L.DomEvent
			    .off(document, 'mousemove', this._onMouseMove)
			    .off(document, 'mouseup', this._onMouseUp)
			    .off(document, 'keydown', this._onKeyDown);
		},

		_onMouseUp: function (e) {

			this._finish();

			var map = this._map,
			    layerPoint = map.mouseEventToLayerPoint(e);

			if (this._startLayerPoint.equals(layerPoint)) { return; }

			var bounds = new L.LatLngBounds(
			        map.layerPointToLatLng(this._startLayerPoint),
			        map.layerPointToLatLng(layerPoint));

			map.fitBounds(bounds);

			map.fire('boxzoomend', {
				boxZoomBounds: bounds
			});
		},

		_onKeyDown: function (e) {
			if (e.keyCode === 27) {
				this._finish();
			}
		}
	});

	L.Map.addInitHook('addHandler', 'boxZoom', L.Map.BoxZoom);


	/*
	 * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
	 */

	L.Map.mergeOptions({
		keyboard: true,
		keyboardPanOffset: 80,
		keyboardZoomOffset: 1
	});

	L.Map.Keyboard = L.Handler.extend({

		keyCodes: {
			left:    [37],
			right:   [39],
			down:    [40],
			up:      [38],
			zoomIn:  [187, 107, 61, 171],
			zoomOut: [189, 109, 173]
		},

		initialize: function (map) {
			this._map = map;

			this._setPanOffset(map.options.keyboardPanOffset);
			this._setZoomOffset(map.options.keyboardZoomOffset);
		},

		addHooks: function () {
			var container = this._map._container;

			// make the container focusable by tabbing
			if (container.tabIndex === -1) {
				container.tabIndex = '0';
			}

			L.DomEvent
			    .on(container, 'focus', this._onFocus, this)
			    .on(container, 'blur', this._onBlur, this)
			    .on(container, 'mousedown', this._onMouseDown, this);

			this._map
			    .on('focus', this._addHooks, this)
			    .on('blur', this._removeHooks, this);
		},

		removeHooks: function () {
			this._removeHooks();

			var container = this._map._container;

			L.DomEvent
			    .off(container, 'focus', this._onFocus, this)
			    .off(container, 'blur', this._onBlur, this)
			    .off(container, 'mousedown', this._onMouseDown, this);

			this._map
			    .off('focus', this._addHooks, this)
			    .off('blur', this._removeHooks, this);
		},

		_onMouseDown: function () {
			if (this._focused) { return; }

			var body = document.body,
			    docEl = document.documentElement,
			    top = body.scrollTop || docEl.scrollTop,
			    left = body.scrollLeft || docEl.scrollLeft;

			this._map._container.focus();

			window.scrollTo(left, top);
		},

		_onFocus: function () {
			this._focused = true;
			this._map.fire('focus');
		},

		_onBlur: function () {
			this._focused = false;
			this._map.fire('blur');
		},

		_setPanOffset: function (pan) {
			var keys = this._panKeys = {},
			    codes = this.keyCodes,
			    i, len;

			for (i = 0, len = codes.left.length; i < len; i++) {
				keys[codes.left[i]] = [-1 * pan, 0];
			}
			for (i = 0, len = codes.right.length; i < len; i++) {
				keys[codes.right[i]] = [pan, 0];
			}
			for (i = 0, len = codes.down.length; i < len; i++) {
				keys[codes.down[i]] = [0, pan];
			}
			for (i = 0, len = codes.up.length; i < len; i++) {
				keys[codes.up[i]] = [0, -1 * pan];
			}
		},

		_setZoomOffset: function (zoom) {
			var keys = this._zoomKeys = {},
			    codes = this.keyCodes,
			    i, len;

			for (i = 0, len = codes.zoomIn.length; i < len; i++) {
				keys[codes.zoomIn[i]] = zoom;
			}
			for (i = 0, len = codes.zoomOut.length; i < len; i++) {
				keys[codes.zoomOut[i]] = -zoom;
			}
		},

		_addHooks: function () {
			L.DomEvent.on(document, 'keydown', this._onKeyDown, this);
		},

		_removeHooks: function () {
			L.DomEvent.off(document, 'keydown', this._onKeyDown, this);
		},

		_onKeyDown: function (e) {
			var key = e.keyCode,
			    map = this._map;

			if (key in this._panKeys) {

				if (map._panAnim && map._panAnim._inProgress) { return; }

				map.panBy(this._panKeys[key]);

				if (map.options.maxBounds) {
					map.panInsideBounds(map.options.maxBounds);
				}

			} else if (key in this._zoomKeys) {
				map.setZoom(map.getZoom() + this._zoomKeys[key]);

			} else {
				return;
			}

			L.DomEvent.stop(e);
		}
	});

	L.Map.addInitHook('addHandler', 'keyboard', L.Map.Keyboard);


	/*
	 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
	 */

	L.Handler.MarkerDrag = L.Handler.extend({
		initialize: function (marker) {
			this._marker = marker;
		},

		addHooks: function () {
			var icon = this._marker._icon;
			if (!this._draggable) {
				this._draggable = new L.Draggable(icon, icon);
			}

			this._draggable
				.on('dragstart', this._onDragStart, this)
				.on('drag', this._onDrag, this)
				.on('dragend', this._onDragEnd, this);
			this._draggable.enable();
			L.DomUtil.addClass(this._marker._icon, 'leaflet-marker-draggable');
		},

		removeHooks: function () {
			this._draggable
				.off('dragstart', this._onDragStart, this)
				.off('drag', this._onDrag, this)
				.off('dragend', this._onDragEnd, this);

			this._draggable.disable();
			L.DomUtil.removeClass(this._marker._icon, 'leaflet-marker-draggable');
		},

		moved: function () {
			return this._draggable && this._draggable._moved;
		},

		_onDragStart: function () {
			this._marker
			    .closePopup()
			    .fire('movestart')
			    .fire('dragstart');
		},

		_onDrag: function () {
			var marker = this._marker,
			    shadow = marker._shadow,
			    iconPos = L.DomUtil.getPosition(marker._icon),
			    latlng = marker._map.layerPointToLatLng(iconPos);

			// update shadow position
			if (shadow) {
				L.DomUtil.setPosition(shadow, iconPos);
			}

			marker._latlng = latlng;

			marker
			    .fire('move', {latlng: latlng})
			    .fire('drag');
		},

		_onDragEnd: function (e) {
			this._marker
			    .fire('moveend')
			    .fire('dragend', e);
		}
	});


	/*
	 * L.Control is a base class for implementing map controls. Handles positioning.
	 * All other controls extend from this class.
	 */

	L.Control = L.Class.extend({
		options: {
			position: 'topright'
		},

		initialize: function (options) {
			L.setOptions(this, options);
		},

		getPosition: function () {
			return this.options.position;
		},

		setPosition: function (position) {
			var map = this._map;

			if (map) {
				map.removeControl(this);
			}

			this.options.position = position;

			if (map) {
				map.addControl(this);
			}

			return this;
		},

		getContainer: function () {
			return this._container;
		},

		addTo: function (map) {
			this._map = map;

			var container = this._container = this.onAdd(map),
			    pos = this.getPosition(),
			    corner = map._controlCorners[pos];

			L.DomUtil.addClass(container, 'leaflet-control');

			if (pos.indexOf('bottom') !== -1) {
				corner.insertBefore(container, corner.firstChild);
			} else {
				corner.appendChild(container);
			}

			return this;
		},

		removeFrom: function (map) {
			var pos = this.getPosition(),
			    corner = map._controlCorners[pos];

			corner.removeChild(this._container);
			this._map = null;

			if (this.onRemove) {
				this.onRemove(map);
			}

			return this;
		},

		_refocusOnMap: function () {
			if (this._map) {
				this._map.getContainer().focus();
			}
		}
	});

	L.control = function (options) {
		return new L.Control(options);
	};


	// adds control-related methods to L.Map

	L.Map.include({
		addControl: function (control) {
			control.addTo(this);
			return this;
		},

		removeControl: function (control) {
			control.removeFrom(this);
			return this;
		},

		_initControlPos: function () {
			var corners = this._controlCorners = {},
			    l = 'leaflet-',
			    container = this._controlContainer =
			            L.DomUtil.create('div', l + 'control-container', this._container);

			function createCorner(vSide, hSide) {
				var className = l + vSide + ' ' + l + hSide;

				corners[vSide + hSide] = L.DomUtil.create('div', className, container);
			}

			createCorner('top', 'left');
			createCorner('top', 'right');
			createCorner('bottom', 'left');
			createCorner('bottom', 'right');
		},

		_clearControlPos: function () {
			this._container.removeChild(this._controlContainer);
		}
	});


	/*
	 * L.Control.Zoom is used for the default zoom buttons on the map.
	 */

	L.Control.Zoom = L.Control.extend({
		options: {
			position: 'topleft',
			zoomInText: '+',
			zoomInTitle: 'Zoom in',
			zoomOutText: '-',
			zoomOutTitle: 'Zoom out'
		},

		onAdd: function (map) {
			var zoomName = 'leaflet-control-zoom',
			    container = L.DomUtil.create('div', zoomName + ' leaflet-bar');

			this._map = map;

			this._zoomInButton  = this._createButton(
			        this.options.zoomInText, this.options.zoomInTitle,
			        zoomName + '-in',  container, this._zoomIn,  this);
			this._zoomOutButton = this._createButton(
			        this.options.zoomOutText, this.options.zoomOutTitle,
			        zoomName + '-out', container, this._zoomOut, this);

			this._updateDisabled();
			map.on('zoomend zoomlevelschange', this._updateDisabled, this);

			return container;
		},

		onRemove: function (map) {
			map.off('zoomend zoomlevelschange', this._updateDisabled, this);
		},

		_zoomIn: function (e) {
			this._map.zoomIn(e.shiftKey ? 3 : 1);
		},

		_zoomOut: function (e) {
			this._map.zoomOut(e.shiftKey ? 3 : 1);
		},

		_createButton: function (html, title, className, container, fn, context) {
			var link = L.DomUtil.create('a', className, container);
			link.innerHTML = html;
			link.href = '#';
			link.title = title;

			var stop = L.DomEvent.stopPropagation;

			L.DomEvent
			    .on(link, 'click', stop)
			    .on(link, 'mousedown', stop)
			    .on(link, 'dblclick', stop)
			    .on(link, 'click', L.DomEvent.preventDefault)
			    .on(link, 'click', fn, context)
			    .on(link, 'click', this._refocusOnMap, context);

			return link;
		},

		_updateDisabled: function () {
			var map = this._map,
				className = 'leaflet-disabled';

			L.DomUtil.removeClass(this._zoomInButton, className);
			L.DomUtil.removeClass(this._zoomOutButton, className);

			if (map._zoom === map.getMinZoom()) {
				L.DomUtil.addClass(this._zoomOutButton, className);
			}
			if (map._zoom === map.getMaxZoom()) {
				L.DomUtil.addClass(this._zoomInButton, className);
			}
		}
	});

	L.Map.mergeOptions({
		zoomControl: true
	});

	L.Map.addInitHook(function () {
		if (this.options.zoomControl) {
			this.zoomControl = new L.Control.Zoom();
			this.addControl(this.zoomControl);
		}
	});

	L.control.zoom = function (options) {
		return new L.Control.Zoom(options);
	};



	/*
	 * L.Control.Attribution is used for displaying attribution on the map (added by default).
	 */

	L.Control.Attribution = L.Control.extend({
		options: {
			position: 'bottomright',
			prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
		},

		initialize: function (options) {
			L.setOptions(this, options);

			this._attributions = {};
		},

		onAdd: function (map) {
			this._container = L.DomUtil.create('div', 'leaflet-control-attribution');
			L.DomEvent.disableClickPropagation(this._container);

			for (var i in map._layers) {
				if (map._layers[i].getAttribution) {
					this.addAttribution(map._layers[i].getAttribution());
				}
			}
			
			map
			    .on('layeradd', this._onLayerAdd, this)
			    .on('layerremove', this._onLayerRemove, this);

			this._update();

			return this._container;
		},

		onRemove: function (map) {
			map
			    .off('layeradd', this._onLayerAdd)
			    .off('layerremove', this._onLayerRemove);

		},

		setPrefix: function (prefix) {
			this.options.prefix = prefix;
			this._update();
			return this;
		},

		addAttribution: function (text) {
			if (!text) { return; }

			if (!this._attributions[text]) {
				this._attributions[text] = 0;
			}
			this._attributions[text]++;

			this._update();

			return this;
		},

		removeAttribution: function (text) {
			if (!text) { return; }

			if (this._attributions[text]) {
				this._attributions[text]--;
				this._update();
			}

			return this;
		},

		_update: function () {
			if (!this._map) { return; }

			var attribs = [];

			for (var i in this._attributions) {
				if (this._attributions[i]) {
					attribs.push(i);
				}
			}

			var prefixAndAttribs = [];

			if (this.options.prefix) {
				prefixAndAttribs.push(this.options.prefix);
			}
			if (attribs.length) {
				prefixAndAttribs.push(attribs.join(', '));
			}

			this._container.innerHTML = prefixAndAttribs.join(' | ');
		},

		_onLayerAdd: function (e) {
			if (e.layer.getAttribution) {
				this.addAttribution(e.layer.getAttribution());
			}
		},

		_onLayerRemove: function (e) {
			if (e.layer.getAttribution) {
				this.removeAttribution(e.layer.getAttribution());
			}
		}
	});

	L.Map.mergeOptions({
		attributionControl: true
	});

	L.Map.addInitHook(function () {
		if (this.options.attributionControl) {
			this.attributionControl = (new L.Control.Attribution()).addTo(this);
		}
	});

	L.control.attribution = function (options) {
		return new L.Control.Attribution(options);
	};


	/*
	 * L.Control.Scale is used for displaying metric/imperial scale on the map.
	 */

	L.Control.Scale = L.Control.extend({
		options: {
			position: 'bottomleft',
			maxWidth: 100,
			metric: true,
			imperial: true,
			updateWhenIdle: false
		},

		onAdd: function (map) {
			this._map = map;

			var className = 'leaflet-control-scale',
			    container = L.DomUtil.create('div', className),
			    options = this.options;

			this._addScales(options, className, container);

			map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
			map.whenReady(this._update, this);

			return container;
		},

		onRemove: function (map) {
			map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
		},

		_addScales: function (options, className, container) {
			if (options.metric) {
				this._mScale = L.DomUtil.create('div', className + '-line', container);
			}
			if (options.imperial) {
				this._iScale = L.DomUtil.create('div', className + '-line', container);
			}
		},

		_update: function () {
			var bounds = this._map.getBounds(),
			    centerLat = bounds.getCenter().lat,
			    halfWorldMeters = 6378137 * Math.PI * Math.cos(centerLat * Math.PI / 180),
			    dist = halfWorldMeters * (bounds.getNorthEast().lng - bounds.getSouthWest().lng) / 180,

			    size = this._map.getSize(),
			    options = this.options,
			    maxMeters = 0;

			if (size.x > 0) {
				maxMeters = dist * (options.maxWidth / size.x);
			}

			this._updateScales(options, maxMeters);
		},

		_updateScales: function (options, maxMeters) {
			if (options.metric && maxMeters) {
				this._updateMetric(maxMeters);
			}

			if (options.imperial && maxMeters) {
				this._updateImperial(maxMeters);
			}
		},

		_updateMetric: function (maxMeters) {
			var meters = this._getRoundNum(maxMeters);

			this._mScale.style.width = this._getScaleWidth(meters / maxMeters) + 'px';
			this._mScale.innerHTML = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';
		},

		_updateImperial: function (maxMeters) {
			var maxFeet = maxMeters * 3.2808399,
			    scale = this._iScale,
			    maxMiles, miles, feet;

			if (maxFeet > 5280) {
				maxMiles = maxFeet / 5280;
				miles = this._getRoundNum(maxMiles);

				scale.style.width = this._getScaleWidth(miles / maxMiles) + 'px';
				scale.innerHTML = miles + ' mi';

			} else {
				feet = this._getRoundNum(maxFeet);

				scale.style.width = this._getScaleWidth(feet / maxFeet) + 'px';
				scale.innerHTML = feet + ' ft';
			}
		},

		_getScaleWidth: function (ratio) {
			return Math.round(this.options.maxWidth * ratio) - 10;
		},

		_getRoundNum: function (num) {
			var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
			    d = num / pow10;

			d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;

			return pow10 * d;
		}
	});

	L.control.scale = function (options) {
		return new L.Control.Scale(options);
	};


	/*
	 * L.Control.Layers is a control to allow users to switch between different layers on the map.
	 */

	L.Control.Layers = L.Control.extend({
		options: {
			collapsed: true,
			position: 'topright',
			autoZIndex: true
		},

		initialize: function (baseLayers, overlays, options) {
			L.setOptions(this, options);

			this._layers = {};
			this._lastZIndex = 0;
			this._handlingClick = false;

			for (var i in baseLayers) {
				this._addLayer(baseLayers[i], i);
			}

			for (i in overlays) {
				this._addLayer(overlays[i], i, true);
			}
		},

		onAdd: function (map) {
			this._initLayout();
			this._update();

			map
			    .on('layeradd', this._onLayerChange, this)
			    .on('layerremove', this._onLayerChange, this);

			return this._container;
		},

		onRemove: function (map) {
			map
			    .off('layeradd', this._onLayerChange, this)
			    .off('layerremove', this._onLayerChange, this);
		},

		addBaseLayer: function (layer, name) {
			this._addLayer(layer, name);
			this._update();
			return this;
		},

		addOverlay: function (layer, name) {
			this._addLayer(layer, name, true);
			this._update();
			return this;
		},

		removeLayer: function (layer) {
			var id = L.stamp(layer);
			delete this._layers[id];
			this._update();
			return this;
		},

		_initLayout: function () {
			var className = 'leaflet-control-layers',
			    container = this._container = L.DomUtil.create('div', className);

			//Makes this work on IE10 Touch devices by stopping it from firing a mouseout event when the touch is released
			container.setAttribute('aria-haspopup', true);

			if (!L.Browser.touch) {
				L.DomEvent
					.disableClickPropagation(container)
					.disableScrollPropagation(container);
			} else {
				L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation);
			}

			var form = this._form = L.DomUtil.create('form', className + '-list');

			if (this.options.collapsed) {
				if (!L.Browser.android) {
					L.DomEvent
					    .on(container, 'mouseover', this._expand, this)
					    .on(container, 'mouseout', this._collapse, this);
				}
				var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
				link.href = '#';
				link.title = 'Layers';

				if (L.Browser.touch) {
					L.DomEvent
					    .on(link, 'click', L.DomEvent.stop)
					    .on(link, 'click', this._expand, this);
				}
				else {
					L.DomEvent.on(link, 'focus', this._expand, this);
				}
				//Work around for Firefox android issue https://github.com/Leaflet/Leaflet/issues/2033
				L.DomEvent.on(form, 'click', function () {
					setTimeout(L.bind(this._onInputClick, this), 0);
				}, this);

				this._map.on('click', this._collapse, this);
				// TODO keyboard accessibility
			} else {
				this._expand();
			}

			this._baseLayersList = L.DomUtil.create('div', className + '-base', form);
			this._separator = L.DomUtil.create('div', className + '-separator', form);
			this._overlaysList = L.DomUtil.create('div', className + '-overlays', form);

			container.appendChild(form);
		},

		_addLayer: function (layer, name, overlay) {
			var id = L.stamp(layer);

			this._layers[id] = {
				layer: layer,
				name: name,
				overlay: overlay
			};

			if (this.options.autoZIndex && layer.setZIndex) {
				this._lastZIndex++;
				layer.setZIndex(this._lastZIndex);
			}
		},

		_update: function () {
			if (!this._container) {
				return;
			}

			this._baseLayersList.innerHTML = '';
			this._overlaysList.innerHTML = '';

			var baseLayersPresent = false,
			    overlaysPresent = false,
			    i, obj;

			for (i in this._layers) {
				obj = this._layers[i];
				this._addItem(obj);
				overlaysPresent = overlaysPresent || obj.overlay;
				baseLayersPresent = baseLayersPresent || !obj.overlay;
			}

			this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';
		},

		_onLayerChange: function (e) {
			var obj = this._layers[L.stamp(e.layer)];

			if (!obj) { return; }

			if (!this._handlingClick) {
				this._update();
			}

			var type = obj.overlay ?
				(e.type === 'layeradd' ? 'overlayadd' : 'overlayremove') :
				(e.type === 'layeradd' ? 'baselayerchange' : null);

			if (type) {
				this._map.fire(type, obj);
			}
		},

		// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
		_createRadioElement: function (name, checked) {

			var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"';
			if (checked) {
				radioHtml += ' checked="checked"';
			}
			radioHtml += '/>';

			var radioFragment = document.createElement('div');
			radioFragment.innerHTML = radioHtml;

			return radioFragment.firstChild;
		},

		_addItem: function (obj) {
			var label = document.createElement('label'),
			    input,
			    checked = this._map.hasLayer(obj.layer);

			if (obj.overlay) {
				input = document.createElement('input');
				input.type = 'checkbox';
				input.className = 'leaflet-control-layers-selector';
				input.defaultChecked = checked;
			} else {
				input = this._createRadioElement('leaflet-base-layers', checked);
			}

			input.layerId = L.stamp(obj.layer);

			L.DomEvent.on(input, 'click', this._onInputClick, this);

			var name = document.createElement('span');
			name.innerHTML = ' ' + obj.name;

			label.appendChild(input);
			label.appendChild(name);

			var container = obj.overlay ? this._overlaysList : this._baseLayersList;
			container.appendChild(label);

			return label;
		},

		_onInputClick: function () {
			var i, input, obj,
			    inputs = this._form.getElementsByTagName('input'),
			    inputsLen = inputs.length;

			this._handlingClick = true;

			for (i = 0; i < inputsLen; i++) {
				input = inputs[i];
				obj = this._layers[input.layerId];

				if (input.checked && !this._map.hasLayer(obj.layer)) {
					this._map.addLayer(obj.layer);

				} else if (!input.checked && this._map.hasLayer(obj.layer)) {
					this._map.removeLayer(obj.layer);
				}
			}

			this._handlingClick = false;

			this._refocusOnMap();
		},

		_expand: function () {
			L.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded');
		},

		_collapse: function () {
			this._container.className = this._container.className.replace(' leaflet-control-layers-expanded', '');
		}
	});

	L.control.layers = function (baseLayers, overlays, options) {
		return new L.Control.Layers(baseLayers, overlays, options);
	};


	/*
	 * L.PosAnimation is used by Leaflet internally for pan animations.
	 */

	L.PosAnimation = L.Class.extend({
		includes: L.Mixin.Events,

		run: function (el, newPos, duration, easeLinearity) { // (HTMLElement, Point[, Number, Number])
			this.stop();

			this._el = el;
			this._inProgress = true;
			this._newPos = newPos;

			this.fire('start');

			el.style[L.DomUtil.TRANSITION] = 'all ' + (duration || 0.25) +
			        's cubic-bezier(0,0,' + (easeLinearity || 0.5) + ',1)';

			L.DomEvent.on(el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);
			L.DomUtil.setPosition(el, newPos);

			// toggle reflow, Chrome flickers for some reason if you don't do this
			L.Util.falseFn(el.offsetWidth);

			// there's no native way to track value updates of transitioned properties, so we imitate this
			this._stepTimer = setInterval(L.bind(this._onStep, this), 50);
		},

		stop: function () {
			if (!this._inProgress) { return; }

			// if we just removed the transition property, the element would jump to its final position,
			// so we need to make it stay at the current position

			L.DomUtil.setPosition(this._el, this._getPos());
			this._onTransitionEnd();
			L.Util.falseFn(this._el.offsetWidth); // force reflow in case we are about to start a new animation
		},

		_onStep: function () {
			var stepPos = this._getPos();
			if (!stepPos) {
				this._onTransitionEnd();
				return;
			}
			// jshint camelcase: false
			// make L.DomUtil.getPosition return intermediate position value during animation
			this._el._leaflet_pos = stepPos;

			this.fire('step');
		},

		// you can't easily get intermediate values of properties animated with CSS3 Transitions,
		// we need to parse computed style (in case of transform it returns matrix string)

		_transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,

		_getPos: function () {
			var left, top, matches,
			    el = this._el,
			    style = window.getComputedStyle(el);

			if (L.Browser.any3d) {
				matches = style[L.DomUtil.TRANSFORM].match(this._transformRe);
				if (!matches) { return; }
				left = parseFloat(matches[1]);
				top  = parseFloat(matches[2]);
			} else {
				left = parseFloat(style.left);
				top  = parseFloat(style.top);
			}

			return new L.Point(left, top, true);
		},

		_onTransitionEnd: function () {
			L.DomEvent.off(this._el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);

			if (!this._inProgress) { return; }
			this._inProgress = false;

			this._el.style[L.DomUtil.TRANSITION] = '';

			// jshint camelcase: false
			// make sure L.DomUtil.getPosition returns the final position value after animation
			this._el._leaflet_pos = this._newPos;

			clearInterval(this._stepTimer);

			this.fire('step').fire('end');
		}

	});


	/*
	 * Extends L.Map to handle panning animations.
	 */

	L.Map.include({

		setView: function (center, zoom, options) {

			zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
			center = this._limitCenter(L.latLng(center), zoom, this.options.maxBounds);
			options = options || {};

			if (this._panAnim) {
				this._panAnim.stop();
			}

			if (this._loaded && !options.reset && options !== true) {

				if (options.animate !== undefined) {
					options.zoom = L.extend({animate: options.animate}, options.zoom);
					options.pan = L.extend({animate: options.animate}, options.pan);
				}

				// try animating pan or zoom
				var animated = (this._zoom !== zoom) ?
					this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
					this._tryAnimatedPan(center, options.pan);

				if (animated) {
					// prevent resize handler call, the view will refresh after animation anyway
					clearTimeout(this._sizeTimer);
					return this;
				}
			}

			// animation didn't start, just reset the map view
			this._resetView(center, zoom);

			return this;
		},

		panBy: function (offset, options) {
			offset = L.point(offset).round();
			options = options || {};

			if (!offset.x && !offset.y) {
				return this;
			}

			if (!this._panAnim) {
				this._panAnim = new L.PosAnimation();

				this._panAnim.on({
					'step': this._onPanTransitionStep,
					'end': this._onPanTransitionEnd
				}, this);
			}

			// don't fire movestart if animating inertia
			if (!options.noMoveStart) {
				this.fire('movestart');
			}

			// animate pan unless animate: false specified
			if (options.animate !== false) {
				L.DomUtil.addClass(this._mapPane, 'leaflet-pan-anim');

				var newPos = this._getMapPanePos().subtract(offset);
				this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
			} else {
				this._rawPanBy(offset);
				this.fire('move').fire('moveend');
			}

			return this;
		},

		_onPanTransitionStep: function () {
			this.fire('move');
		},

		_onPanTransitionEnd: function () {
			L.DomUtil.removeClass(this._mapPane, 'leaflet-pan-anim');
			this.fire('moveend');
		},

		_tryAnimatedPan: function (center, options) {
			// difference between the new and current centers in pixels
			var offset = this._getCenterOffset(center)._floor();

			// don't animate too far unless animate: true specified in options
			if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

			this.panBy(offset, options);

			return true;
		}
	});


	/*
	 * L.PosAnimation fallback implementation that powers Leaflet pan animations
	 * in browsers that don't support CSS3 Transitions.
	 */

	L.PosAnimation = L.DomUtil.TRANSITION ? L.PosAnimation : L.PosAnimation.extend({

		run: function (el, newPos, duration, easeLinearity) { // (HTMLElement, Point[, Number, Number])
			this.stop();

			this._el = el;
			this._inProgress = true;
			this._duration = duration || 0.25;
			this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

			this._startPos = L.DomUtil.getPosition(el);
			this._offset = newPos.subtract(this._startPos);
			this._startTime = +new Date();

			this.fire('start');

			this._animate();
		},

		stop: function () {
			if (!this._inProgress) { return; }

			this._step();
			this._complete();
		},

		_animate: function () {
			// animation loop
			this._animId = L.Util.requestAnimFrame(this._animate, this);
			this._step();
		},

		_step: function () {
			var elapsed = (+new Date()) - this._startTime,
			    duration = this._duration * 1000;

			if (elapsed < duration) {
				this._runFrame(this._easeOut(elapsed / duration));
			} else {
				this._runFrame(1);
				this._complete();
			}
		},

		_runFrame: function (progress) {
			var pos = this._startPos.add(this._offset.multiplyBy(progress));
			L.DomUtil.setPosition(this._el, pos);

			this.fire('step');
		},

		_complete: function () {
			L.Util.cancelAnimFrame(this._animId);

			this._inProgress = false;
			this.fire('end');
		},

		_easeOut: function (t) {
			return 1 - Math.pow(1 - t, this._easeOutPower);
		}
	});


	/*
	 * Extends L.Map to handle zoom animations.
	 */

	L.Map.mergeOptions({
		zoomAnimation: true,
		zoomAnimationThreshold: 4
	});

	if (L.DomUtil.TRANSITION) {

		L.Map.addInitHook(function () {
			// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
			this._zoomAnimated = this.options.zoomAnimation && L.DomUtil.TRANSITION &&
					L.Browser.any3d && !L.Browser.android23 && !L.Browser.mobileOpera;

			// zoom transitions run with the same duration for all layers, so if one of transitionend events
			// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
			if (this._zoomAnimated) {
				L.DomEvent.on(this._mapPane, L.DomUtil.TRANSITION_END, this._catchTransitionEnd, this);
			}
		});
	}

	L.Map.include(!L.DomUtil.TRANSITION ? {} : {

		_catchTransitionEnd: function (e) {
			if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
				this._onZoomTransitionEnd();
			}
		},

		_nothingToAnimate: function () {
			return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
		},

		_tryAnimatedZoom: function (center, zoom, options) {

			if (this._animatingZoom) { return true; }

			options = options || {};

			// don't animate if disabled, not supported or zoom difference is too large
			if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
			        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

			// offset is the pixel coords of the zoom origin relative to the current center
			var scale = this.getZoomScale(zoom),
			    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale),
				origin = this._getCenterLayerPoint()._add(offset);

			// don't animate if the zoom origin isn't within one screen from the current center, unless forced
			if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

			this
			    .fire('movestart')
			    .fire('zoomstart');

			this._animateZoom(center, zoom, origin, scale, null, true);

			return true;
		},

		_animateZoom: function (center, zoom, origin, scale, delta, backwards, forTouchZoom) {

			if (!forTouchZoom) {
				this._animatingZoom = true;
			}

			// put transform transition on all layers with leaflet-zoom-animated class
			L.DomUtil.addClass(this._mapPane, 'leaflet-zoom-anim');

			// remember what center/zoom to set after animation
			this._animateToCenter = center;
			this._animateToZoom = zoom;

			// disable any dragging during animation
			if (L.Draggable) {
				L.Draggable._disabled = true;
			}

			L.Util.requestAnimFrame(function () {
				this.fire('zoomanim', {
					center: center,
					zoom: zoom,
					origin: origin,
					scale: scale,
					delta: delta,
					backwards: backwards
				});
				// horrible hack to work around a Chrome bug https://github.com/Leaflet/Leaflet/issues/3689
				setTimeout(L.bind(this._onZoomTransitionEnd, this), 250);
			}, this);
		},

		_onZoomTransitionEnd: function () {
			if (!this._animatingZoom) { return; }

			this._animatingZoom = false;

			L.DomUtil.removeClass(this._mapPane, 'leaflet-zoom-anim');

			L.Util.requestAnimFrame(function () {
				this._resetView(this._animateToCenter, this._animateToZoom, true, true);

				if (L.Draggable) {
					L.Draggable._disabled = false;
				}
			}, this);
		}
	});


	/*
		Zoom animation logic for L.TileLayer.
	*/

	L.TileLayer.include({
		_animateZoom: function (e) {
			if (!this._animating) {
				this._animating = true;
				this._prepareBgBuffer();
			}

			var bg = this._bgBuffer,
			    transform = L.DomUtil.TRANSFORM,
			    initialTransform = e.delta ? L.DomUtil.getTranslateString(e.delta) : bg.style[transform],
			    scaleStr = L.DomUtil.getScaleString(e.scale, e.origin);

			bg.style[transform] = e.backwards ?
					scaleStr + ' ' + initialTransform :
					initialTransform + ' ' + scaleStr;
		},

		_endZoomAnim: function () {
			var front = this._tileContainer,
			    bg = this._bgBuffer;

			front.style.visibility = '';
			front.parentNode.appendChild(front); // Bring to fore

			// force reflow
			L.Util.falseFn(bg.offsetWidth);

			var zoom = this._map.getZoom();
			if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
				this._clearBgBuffer();
			}

			this._animating = false;
		},

		_clearBgBuffer: function () {
			var map = this._map;

			if (map && !map._animatingZoom && !map.touchZoom._zooming) {
				this._bgBuffer.innerHTML = '';
				this._bgBuffer.style[L.DomUtil.TRANSFORM] = '';
			}
		},

		_prepareBgBuffer: function () {

			var front = this._tileContainer,
			    bg = this._bgBuffer;

			// if foreground layer doesn't have many tiles but bg layer does,
			// keep the existing bg layer and just zoom it some more

			var bgLoaded = this._getLoadedTilesPercentage(bg),
			    frontLoaded = this._getLoadedTilesPercentage(front);

			if (bg && bgLoaded > 0.5 && frontLoaded < 0.5) {

				front.style.visibility = 'hidden';
				this._stopLoadingImages(front);
				return;
			}

			// prepare the buffer to become the front tile pane
			bg.style.visibility = 'hidden';
			bg.style[L.DomUtil.TRANSFORM] = '';

			// switch out the current layer to be the new bg layer (and vice-versa)
			this._tileContainer = bg;
			bg = this._bgBuffer = front;

			this._stopLoadingImages(bg);

			//prevent bg buffer from clearing right after zoom
			clearTimeout(this._clearBgBufferTimer);
		},

		_getLoadedTilesPercentage: function (container) {
			var tiles = container.getElementsByTagName('img'),
			    i, len, count = 0;

			for (i = 0, len = tiles.length; i < len; i++) {
				if (tiles[i].complete) {
					count++;
				}
			}
			return count / len;
		},

		// stops loading all tiles in the background layer
		_stopLoadingImages: function (container) {
			var tiles = Array.prototype.slice.call(container.getElementsByTagName('img')),
			    i, len, tile;

			for (i = 0, len = tiles.length; i < len; i++) {
				tile = tiles[i];

				if (!tile.complete) {
					tile.onload = L.Util.falseFn;
					tile.onerror = L.Util.falseFn;
					tile.src = L.Util.emptyImageUrl;

					tile.parentNode.removeChild(tile);
				}
			}
		}
	});


	/*
	 * Provides L.Map with convenient shortcuts for using browser geolocation features.
	 */

	L.Map.include({
		_defaultLocateOptions: {
			watch: false,
			setView: false,
			maxZoom: Infinity,
			timeout: 10000,
			maximumAge: 0,
			enableHighAccuracy: false
		},

		locate: function (/*Object*/ options) {

			options = this._locateOptions = L.extend(this._defaultLocateOptions, options);

			if (!navigator.geolocation) {
				this._handleGeolocationError({
					code: 0,
					message: 'Geolocation not supported.'
				});
				return this;
			}

			var onResponse = L.bind(this._handleGeolocationResponse, this),
				onError = L.bind(this._handleGeolocationError, this);

			if (options.watch) {
				this._locationWatchId =
				        navigator.geolocation.watchPosition(onResponse, onError, options);
			} else {
				navigator.geolocation.getCurrentPosition(onResponse, onError, options);
			}
			return this;
		},

		stopLocate: function () {
			if (navigator.geolocation) {
				navigator.geolocation.clearWatch(this._locationWatchId);
			}
			if (this._locateOptions) {
				this._locateOptions.setView = false;
			}
			return this;
		},

		_handleGeolocationError: function (error) {
			var c = error.code,
			    message = error.message ||
			            (c === 1 ? 'permission denied' :
			            (c === 2 ? 'position unavailable' : 'timeout'));

			if (this._locateOptions.setView && !this._loaded) {
				this.fitWorld();
			}

			this.fire('locationerror', {
				code: c,
				message: 'Geolocation error: ' + message + '.'
			});
		},

		_handleGeolocationResponse: function (pos) {
			var lat = pos.coords.latitude,
			    lng = pos.coords.longitude,
			    latlng = new L.LatLng(lat, lng),

			    latAccuracy = 180 * pos.coords.accuracy / 40075017,
			    lngAccuracy = latAccuracy / Math.cos(L.LatLng.DEG_TO_RAD * lat),

			    bounds = L.latLngBounds(
			            [lat - latAccuracy, lng - lngAccuracy],
			            [lat + latAccuracy, lng + lngAccuracy]),

			    options = this._locateOptions;

			if (options.setView) {
				var zoom = Math.min(this.getBoundsZoom(bounds), options.maxZoom);
				this.setView(latlng, zoom);
			}

			var data = {
				latlng: latlng,
				bounds: bounds,
				timestamp: pos.timestamp
			};

			for (var i in pos.coords) {
				if (typeof pos.coords[i] === 'number') {
					data[i] = pos.coords[i];
				}
			}

			this.fire('locationfound', data);
		}
	});


	}(window, document));

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var geocoderControl = __webpack_require__(87),
	    gridControl = __webpack_require__(97),
	    featureLayer = __webpack_require__(101),
	    legendControl = __webpack_require__(104),
	    shareControl = __webpack_require__(105),
	    tileLayer = __webpack_require__(107),
	    infoControl = __webpack_require__(108),
	    map = __webpack_require__(109),
	    gridLayer = __webpack_require__(110);

	L.mapbox = module.exports = {
	    VERSION: __webpack_require__(93).version,
	    geocoder: __webpack_require__(88),
	    marker: __webpack_require__(102),
	    simplestyle: __webpack_require__(103),
	    tileLayer: tileLayer.tileLayer,
	    TileLayer: tileLayer.TileLayer,
	    infoControl: infoControl.infoControl,
	    InfoControl: infoControl.InfoControl,
	    shareControl: shareControl.shareControl,
	    ShareControl: shareControl.ShareControl,
	    legendControl: legendControl.legendControl,
	    LegendControl: legendControl.LegendControl,
	    geocoderControl: geocoderControl.geocoderControl,
	    GeocoderControl: geocoderControl.GeocoderControl,
	    gridControl: gridControl.gridControl,
	    GridControl: gridControl.GridControl,
	    gridLayer: gridLayer.gridLayer,
	    GridLayer: gridLayer.GridLayer,
	    featureLayer: featureLayer.featureLayer,
	    FeatureLayer: featureLayer.FeatureLayer,
	    map: map.map,
	    Map: map.Map,
	    config: __webpack_require__(92),
	    sanitize: __webpack_require__(99),
	    template: __webpack_require__(98).to_html,
	    feedback: __webpack_require__(94)
	};


	// Hardcode image path, because Leaflet's autodetection
	// fails, because mapbox.js is not named leaflet.js
	window.L.Icon.Default.imagePath =
	    // Detect bad-news protocols like file:// and hardcode
	    // to https if they're detected.
	    ((document.location.protocol === 'https:' ||
	    document.location.protocol === 'http:') ? '' : 'https:') +
	    '//api.tiles.mapbox.com/mapbox.js/' + 'v' +
	    __webpack_require__(93).version + '/images';


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var geocoder = __webpack_require__(88),
	    util = __webpack_require__(90);

	var GeocoderControl = L.Control.extend({
	    includes: L.Mixin.Events,

	    options: {
	        proximity: true,
	        position: 'topleft',
	        pointZoom: 16,
	        keepOpen: false,
	        autocomplete: false
	    },

	    initialize: function(_, options) {
	        L.Util.setOptions(this, options);
	        this.setURL(_);
	        this._updateSubmit = L.bind(this._updateSubmit, this);
	        this._updateAutocomplete = L.bind(this._updateAutocomplete, this);
	        this._chooseResult = L.bind(this._chooseResult, this);
	    },

	    setURL: function(_) {
	        this.geocoder = geocoder(_, {
	            accessToken: this.options.accessToken
	        });
	        return this;
	    },

	    getURL: function() {
	        return this.geocoder.getURL();
	    },

	    setID: function(_) {
	        return this.setURL(_);
	    },

	    setTileJSON: function(_) {
	        return this.setURL(_.geocoder);
	    },

	    _toggle: function(e) {
	        if (e) L.DomEvent.stop(e);
	        if (L.DomUtil.hasClass(this._container, 'active')) {
	            L.DomUtil.removeClass(this._container, 'active');
	            this._results.innerHTML = '';
	            this._input.blur();
	        } else {
	            L.DomUtil.addClass(this._container, 'active');
	            this._input.focus();
	            this._input.select();
	        }
	    },

	    _closeIfOpen: function() {
	        if (L.DomUtil.hasClass(this._container, 'active') &&
	            !this.options.keepOpen) {
	            L.DomUtil.removeClass(this._container, 'active');
	            this._results.innerHTML = '';
	            this._input.blur();
	        }
	    },

	    onAdd: function(map) {

	        var container = L.DomUtil.create('div', 'leaflet-control-mapbox-geocoder leaflet-bar leaflet-control'),
	            link = L.DomUtil.create('a', 'leaflet-control-mapbox-geocoder-toggle mapbox-icon mapbox-icon-geocoder', container),
	            results = L.DomUtil.create('div', 'leaflet-control-mapbox-geocoder-results', container),
	            wrap = L.DomUtil.create('div', 'leaflet-control-mapbox-geocoder-wrap', container),
	            form = L.DomUtil.create('form', 'leaflet-control-mapbox-geocoder-form', wrap),
	            input = L.DomUtil.create('input', '', form);

	        link.href = '#';
	        link.innerHTML = '&nbsp;';

	        input.type = 'text';
	        input.setAttribute('placeholder', 'Search');

	        L.DomEvent.addListener(form, 'submit', this._geocode, this);
	        L.DomEvent.addListener(input, 'keyup', this._autocomplete, this);
	        L.DomEvent.disableClickPropagation(container);

	        this._map = map;
	        this._results = results;
	        this._input = input;
	        this._form = form;

	        if (this.options.keepOpen) {
	            L.DomUtil.addClass(container, 'active');
	        } else {
	            this._map.on('click', this._closeIfOpen, this);
	            L.DomEvent.addListener(link, 'click', this._toggle, this);
	        }

	        return container;
	    },

	    _updateSubmit: function(err, resp) {
	        L.DomUtil.removeClass(this._container, 'searching');
	        this._results.innerHTML = '';
	        if (err || !resp) {
	            this.fire('error', {error: err});
	        } else {
	            var features = [];
	            if (resp.results && resp.results.features) {
	                features = resp.results.features;
	            }
	            if (features.length === 1) {
	                this.fire('autoselect', { feature: features[0] });
	                this.fire('found', {results: resp.results});
	                this._chooseResult(features[0]);
	                this._closeIfOpen();
	            } else if (features.length > 1) {
	                this.fire('found', {results: resp.results});
	                this._displayResults(features);
	            } else {
	                this._displayResults(features);
	            }
	        }
	    },

	    _updateAutocomplete: function(err, resp) {
	        this._results.innerHTML = '';
	        if (err || !resp) {
	            this.fire('error', {error: err});
	        } else {
	            var features = [];
	            if (resp.results && resp.results.features) {
	                features = resp.results.features;
	            }
	            if (features.length) {
	                this.fire('found', {results: resp.results});
	            }
	            this._displayResults(features);
	        }
	    },

	    _displayResults: function(features) {
	        for (var i = 0, l = Math.min(features.length, 5); i < l; i++) {
	            var feature = features[i];
	            var name = feature.place_name;
	            if (!name.length) continue;

	            var r = L.DomUtil.create('a', '', this._results);
	            var text = ('innerText' in r) ? 'innerText' : 'textContent';
	            r[text] = name;
	            r.setAttribute('title', name);
	            r.href = '#';

	            (L.bind(function(feature) {
	                L.DomEvent.addListener(r, 'click', function(e) {
	                    this._chooseResult(feature);
	                    L.DomEvent.stop(e);
	                    this.fire('select', { feature: feature });
	                }, this);
	            }, this))(feature);
	        }
	        if (features.length > 5) {
	            var outof = L.DomUtil.create('span', '', this._results);
	            outof.innerHTML = 'Top 5 of ' + features.length + '  results';
	        }
	    },

	    _chooseResult: function(result) {
	        if (result.bbox) {
	            this._map.fitBounds(util.lbounds(result.bbox));
	        } else if (result.center) {
	            this._map.setView([result.center[1], result.center[0]], (this._map.getZoom() === undefined) ?
	                this.options.pointZoom :
	                Math.max(this._map.getZoom(), this.options.pointZoom));
	        }
	    },

	    _geocode: function(e) {
	        L.DomEvent.preventDefault(e);
	        if (this._input.value === '') return this._updateSubmit();
	        L.DomUtil.addClass(this._container, 'searching');
	        this.geocoder.query({
	            query: this._input.value,
	            proximity: this.options.proximity ? this._map.getCenter() : false
	        }, this._updateSubmit);
	    },

	    _autocomplete: function() {
	        if (!this.options.autocomplete) return;
	        if (this._input.value === '') return this._updateAutocomplete();
	        this.geocoder.query({
	            query: this._input.value,
	            proximity: this.options.proximity ? this._map.getCenter() : false
	        }, this._updateAutocomplete);
	    }
	});

	module.exports.GeocoderControl = GeocoderControl;

	module.exports.geocoderControl = function(_, options) {
	    return new GeocoderControl(_, options);
	};


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArray = __webpack_require__(89),
	    util = __webpack_require__(90),
	    format_url = __webpack_require__(91),
	    feedback = __webpack_require__(94),
	    request = __webpack_require__(95);

	// Low-level geocoding interface - wraps specific API calls and their
	// return values.
	module.exports = function(url, options) {
	    if (!options) options = {};
	    var geocoder = {};

	    util.strict(url, 'string');

	    if (url.indexOf('/') === -1) {
	        url = format_url('/geocoding/v5/' + url + '/{query}.json', options.accessToken, 5);
	    }

	    function roundTo(latLng, precision) {
	        var mult = Math.pow(10, precision);
	        latLng.lat = Math.round(latLng.lat * mult) / mult;
	        latLng.lng = Math.round(latLng.lng * mult) / mult;
	        return latLng;
	    }

	    geocoder.getURL = function() {
	        return url;
	    };

	    geocoder.queryURL = function(_) {
	        var isObject = !(isArray(_) || typeof _ === 'string'),
	            query = isObject ? _.query : _;

	        if (isArray(query)) {
	            var parts = [];
	            for (var i = 0; i < query.length; i++) {
	                parts[i] = encodeURIComponent(query[i]);
	            }
	            query = parts.join(';');
	        } else {
	            query = encodeURIComponent(query);
	        }

	        feedback.record({ geocoding: query });

	        var url = L.Util.template(geocoder.getURL(), {query: query});

	        if (isObject && _.types) {
	            if (isArray(_.types)) {
	                url += '&types=' + _.types.join();
	            } else {
	                url += '&types=' + _.types;
	            }
	        }

	        if (isObject && _.proximity) {
	            var proximity = roundTo(L.latLng(_.proximity), 3);
	            url += '&proximity=' + proximity.lng + ',' + proximity.lat;
	        }

	        return url;
	    };

	    geocoder.query = function(_, callback) {
	        util.strict(callback, 'function');

	        request(geocoder.queryURL(_), function(err, json) {
	            if (json && (json.length || json.features)) {
	                var res = {
	                    results: json
	                };
	                if (json.features && json.features.length) {
	                    res.latlng = [
	                        json.features[0].center[1],
	                        json.features[0].center[0]];

	                    if (json.features[0].bbox) {
	                        res.bounds = json.features[0].bbox;
	                        res.lbounds = util.lbounds(res.bounds);
	                    }
	                }
	                callback(null, res);
	            } else callback(err || true);
	        });

	        return geocoder;
	    };

	    // a reverse geocode:
	    //
	    //  geocoder.reverseQuery([80, 20])
	    geocoder.reverseQuery = function(_, callback) {
	        var q = '';

	        // sort through different ways people represent lat and lon pairs
	        function normalize(x) {
	            var latLng;
	            if (x.lat !== undefined && x.lng !== undefined) {
	                latLng = L.latLng(x.lat, x.lng);
	            } else if (x.lat !== undefined && x.lon !== undefined) {
	                latLng = L.latLng(x.lat, x.lon);
	            } else {
	                latLng = L.latLng(x[1], x[0]);
	            }
	            latLng = roundTo(latLng, 5);
	            return latLng.lng + ',' + latLng.lat;
	        }

	        if (_.length && _[0].length) {
	            for (var i = 0, pts = []; i < _.length; i++) {
	                pts.push(normalize(_[i]));
	            }
	            q = pts.join(';');
	        } else {
	            q = normalize(_);
	        }

	        request(geocoder.queryURL(q), function(err, json) {
	            callback(err, json);
	        });

	        return geocoder;
	    };

	    return geocoder;
	};


/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';

	function contains(item, list) {
	    if (!list || !list.length) return false;
	    for (var i = 0; i < list.length; i++) {
	        if (list[i] === item) return true;
	    }
	    return false;
	}

	module.exports = {
	    idUrl: function(_, t) {
	        if (_.indexOf('/') === -1) t.loadID(_);
	        else t.loadURL(_);
	    },
	    log: function(_) {
	        if (typeof console === 'object' &&
	            typeof console.error === 'function') {
	            console.error(_);
	        }
	    },
	    strict: function(_, type) {
	        if (typeof _ !== type) {
	            throw new Error('Invalid argument: ' + type + ' expected');
	        }
	    },
	    strict_instance: function(_, klass, name) {
	        if (!(_ instanceof klass)) {
	            throw new Error('Invalid argument: ' + name + ' expected');
	        }
	    },
	    strict_oneof: function(_, values) {
	        if (!contains(_, values)) {
	            throw new Error('Invalid argument: ' + _ + ' given, valid values are ' +
	                values.join(', '));
	        }
	    },
	    strip_tags: function(_) {
	        return _.replace(/<[^<]+>/g, '');
	    },
	    lbounds: function(_) {
	        // leaflet-compatible bounds, since leaflet does not do geojson
	        return new L.LatLngBounds([[_[1], _[0]], [_[3], _[2]]]);
	    }
	};


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var config = __webpack_require__(92),
	    version = __webpack_require__(93).version;

	module.exports = function(path, accessToken) {
	    accessToken = accessToken || L.mapbox.accessToken;

	    if (!accessToken && config.REQUIRE_ACCESS_TOKEN) {
	        throw new Error('An API access token is required to use Mapbox.js. ' +
	            'See https://www.mapbox.com/mapbox.js/api/v' + version + '/api-access-tokens/');
	    }

	    var url = (document.location.protocol === 'https:' || config.FORCE_HTTPS) ? config.HTTPS_URL : config.HTTP_URL;
	    url = url.replace(/\/v4$/, '');
	    url += path;
	    url += url.indexOf('?') !== -1 ? '&access_token=' : '?access_token=';

	    if (config.REQUIRE_ACCESS_TOKEN) {
	        if (accessToken[0] === 's') {
	            throw new Error('Use a public access token (pk.*) with Mapbox.js, not a secret access token (sk.*). ' +
	                'See https://www.mapbox.com/mapbox.js/api/v' + version + '/api-access-tokens/');
	        }

	        url += accessToken;
	    }

	    return url;
	};

	module.exports.tileJSON = function(urlOrMapID, accessToken) {
	    if (urlOrMapID.indexOf('/') !== -1)
	        return urlOrMapID;

	    var url = module.exports('/v4/' + urlOrMapID + '.json', accessToken);

	    // TileJSON requests need a secure flag appended to their URLs so
	    // that the server knows to send SSL-ified resource references.
	    if (url.indexOf('https') === 0)
	        url += '&secure';

	    return url;
	};


/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    HTTP_URL: 'http://a.tiles.mapbox.com/v4',
	    HTTPS_URL: 'https://a.tiles.mapbox.com/v4',
	    FORCE_HTTPS: false,
	    REQUIRE_ACCESS_TOKEN: true
	};


/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = {
		"author": {
			"name": "Mapbox"
		},
		"name": "mapbox.js",
		"description": "mapbox javascript api",
		"version": "2.2.3",
		"homepage": "http://mapbox.com/",
		"repository": {
			"type": "git",
			"url": "git://github.com/mapbox/mapbox.js.git"
		},
		"main": "src/index.js",
		"dependencies": {
			"corslite": "0.0.6",
			"isarray": "0.0.1",
			"leaflet": "0.7.7",
			"mustache": "0.7.3",
			"sanitize-caja": "0.1.3"
		},
		"scripts": {
			"test": "eslint --no-eslintrc -c .eslintrc src && mocha-phantomjs test/index.html"
		},
		"license": "BSD-3-Clause",
		"devDependencies": {
			"browserify": "^6.3.2",
			"clean-css": "~2.0.7",
			"eslint": "^0.23.0",
			"expect.js": "0.3.1",
			"happen": "0.1.3",
			"leaflet-fullscreen": "0.0.4",
			"leaflet-hash": "0.2.1",
			"marked": "~0.3.0",
			"minifyify": "^6.1.0",
			"minimist": "0.0.5",
			"mocha": "1.17.1",
			"mocha-phantomjs": "3.1.6",
			"sinon": "1.10.2"
		},
		"optionalDependencies": {},
		"engines": {
			"node": "*"
		},
		"gitHead": "09f45092b28d60072a37a400dc44faf04c980108",
		"bugs": {
			"url": "https://github.com/mapbox/mapbox.js/issues"
		},
		"_id": "mapbox.js@2.2.3",
		"_shasum": "3f7fb12be220382d3ed821aee38016f1d34d6105",
		"_from": "mapbox.js@*",
		"_npmVersion": "1.4.28",
		"_npmUser": {
			"name": "karenzshea",
			"email": "karen@mapbox.com"
		},
		"maintainers": [
			{
				"name": "aaronlidman",
				"email": "aaronlidman@gmail.com"
			},
			{
				"name": "ajashton",
				"email": "aj.ashton@gmail.com"
			},
			{
				"name": "ansis",
				"email": "ansis.brammanis@gmail.com"
			},
			{
				"name": "bergwerkgis",
				"email": "wb@bergwerk-gis.at"
			},
			{
				"name": "bhousel",
				"email": "bryan@mapbox.com"
			},
			{
				"name": "bsudekum",
				"email": "bobby@mapbox.com"
			},
			{
				"name": "camilleanne",
				"email": "camille@mapbox.com"
			},
			{
				"name": "dnomadb",
				"email": "damon@mapbox.com"
			},
			{
				"name": "dthompson",
				"email": "dthompson@gmail.com"
			},
			{
				"name": "dvncan",
				"email": "duncan@mapbox.com"
			},
			{
				"name": "edenh",
				"email": "eden@mapbox.com"
			},
			{
				"name": "emilymcafee",
				"email": "emily@mapbox.com"
			},
			{
				"name": "flippmoke",
				"email": "flippmoke@gmail.com"
			},
			{
				"name": "freenerd",
				"email": "spam@freenerd.de"
			},
			{
				"name": "gretacb",
				"email": "carol@mapbox.com"
			},
			{
				"name": "heyitsgarrett",
				"email": "heyitsgarrett@gmail.com"
			},
			{
				"name": "ian29",
				"email": "ian.villeda@gmail.com"
			},
			{
				"name": "ianshward",
				"email": "ian@mapbox.com"
			},
			{
				"name": "ingalls",
				"email": "nicholas.ingalls@gmail.com"
			},
			{
				"name": "jfirebaugh",
				"email": "john.firebaugh@gmail.com"
			},
			{
				"name": "jrpruit1",
				"email": "jake@jakepruitt.com"
			},
			{
				"name": "karenzshea",
				"email": "karen@mapbox.com"
			},
			{
				"name": "kkaefer",
				"email": "kkaefer@gmail.com"
			},
			{
				"name": "lbud",
				"email": "lauren@mapbox.com"
			},
			{
				"name": "lucaswoj",
				"email": "lucas@lucaswoj.com"
			},
			{
				"name": "lxbarth",
				"email": "alex@mapbox.com"
			},
			{
				"name": "lyzidiamond",
				"email": "lyzi@mapbox.com"
			},
			{
				"name": "mapbox",
				"email": "accounts@mapbox.com"
			},
			{
				"name": "mateov",
				"email": "matt@mapbox.com"
			},
			{
				"name": "mcwhittemore",
				"email": "mcwhittemore@gmail.com"
			},
			{
				"name": "miccolis",
				"email": "jeff@miccolis.net"
			},
			{
				"name": "mikemorris",
				"email": "michael.patrick.morris@gmail.com"
			},
			{
				"name": "morganherlocker",
				"email": "morgan.herlocker@gmail.com"
			},
			{
				"name": "mourner",
				"email": "agafonkin@gmail.com"
			},
			{
				"name": "nickidlugash",
				"email": "nicki@mapbox.com"
			},
			{
				"name": "planemad",
				"email": "arun.planemad@gmail.com"
			},
			{
				"name": "rclark",
				"email": "ryan.clark.j@gmail.com"
			},
			{
				"name": "samanbb",
				"email": "saman@mapbox.com"
			},
			{
				"name": "sbma44",
				"email": "tlee@mapbox.com"
			},
			{
				"name": "scothis",
				"email": "scothis@gmail.com"
			},
			{
				"name": "sgillies",
				"email": "sean@mapbox.com"
			},
			{
				"name": "springmeyer",
				"email": "dane@mapbox.com"
			},
			{
				"name": "themarex",
				"email": "patrick@mapbox.com"
			},
			{
				"name": "tmcw",
				"email": "tom@macwright.org"
			},
			{
				"name": "tristen",
				"email": "tristen.brown@gmail.com"
			},
			{
				"name": "willwhite",
				"email": "will@mapbox.com"
			},
			{
				"name": "yhahn",
				"email": "young@mapbox.com"
			}
		],
		"dist": {
			"shasum": "3f7fb12be220382d3ed821aee38016f1d34d6105",
			"tarball": "http://registry.npmjs.org/mapbox.js/-/mapbox.js-2.2.3.tgz"
		},
		"directories": {},
		"_resolved": "https://registry.npmjs.org/mapbox.js/-/mapbox.js-2.2.3.tgz"
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';

	var Feedback = L.Class.extend({
	    includes: L.Mixin.Events,
	    data: {},
	    record: function(data) {
	        L.extend(this.data, data);
	        this.fire('change');
	    }
	});

	module.exports = new Feedback();


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var corslite = __webpack_require__(96),
	    strict = __webpack_require__(90).strict,
	    config = __webpack_require__(92);

	var protocol = /^(https?:)?(?=\/\/(.|api)\.tiles\.mapbox\.com\/)/;

	module.exports = function(url, callback) {
	    strict(url, 'string');
	    strict(callback, 'function');

	    url = url.replace(protocol, function(match, protocol) {
	        if (!('withCredentials' in new window.XMLHttpRequest())) {
	            // XDomainRequest in use; doesn't support cross-protocol requests
	            return document.location.protocol;
	        } else if (protocol === 'https:' || document.location.protocol === 'https:' || config.FORCE_HTTPS) {
	            return 'https:';
	        } else {
	            return 'http:';
	        }
	    });

	    function onload(err, resp) {
	        if (!err && resp) {
	            resp = JSON.parse(resp.responseText);
	        }
	        callback(err, resp);
	    }

	    return corslite(url, onload);
	};


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	function corslite(url, callback, cors) {
	    var sent = false;

	    if (typeof window.XMLHttpRequest === 'undefined') {
	        return callback(Error('Browser not supported'));
	    }

	    if (typeof cors === 'undefined') {
	        var m = url.match(/^\s*https?:\/\/[^\/]*/);
	        cors = m && (m[0] !== location.protocol + '//' + location.domain +
	                (location.port ? ':' + location.port : ''));
	    }

	    var x = new window.XMLHttpRequest();

	    function isSuccessful(status) {
	        return status >= 200 && status < 300 || status === 304;
	    }

	    if (cors && !('withCredentials' in x)) {
	        // IE8-9
	        x = new window.XDomainRequest();

	        // Ensure callback is never called synchronously, i.e., before
	        // x.send() returns (this has been observed in the wild).
	        // See https://github.com/mapbox/mapbox.js/issues/472
	        var original = callback;
	        callback = function() {
	            if (sent) {
	                original.apply(this, arguments);
	            } else {
	                var that = this, args = arguments;
	                setTimeout(function() {
	                    original.apply(that, args);
	                }, 0);
	            }
	        }
	    }

	    function loaded() {
	        if (
	            // XDomainRequest
	            x.status === undefined ||
	            // modern browsers
	            isSuccessful(x.status)) callback.call(x, null, x);
	        else callback.call(x, x, null);
	    }

	    // Both `onreadystatechange` and `onload` can fire. `onreadystatechange`
	    // has [been supported for longer](http://stackoverflow.com/a/9181508/229001).
	    if ('onload' in x) {
	        x.onload = loaded;
	    } else {
	        x.onreadystatechange = function readystate() {
	            if (x.readyState === 4) {
	                loaded();
	            }
	        };
	    }

	    // Call the callback with the XMLHttpRequest object as an error and prevent
	    // it from ever being called again by reassigning it to `noop`
	    x.onerror = function error(evt) {
	        // XDomainRequest provides no evt parameter
	        callback.call(this, evt || true, null);
	        callback = function() { };
	    };

	    // IE9 must have onprogress be set to a unique function.
	    x.onprogress = function() { };

	    x.ontimeout = function(evt) {
	        callback.call(this, evt, null);
	        callback = function() { };
	    };

	    x.onabort = function(evt) {
	        callback.call(this, evt, null);
	        callback = function() { };
	    };

	    // GET is the only supported HTTP Verb by XDomainRequest and is the
	    // only one supported here.
	    x.open('GET', url, true);

	    // Send the request. Sending data is not supported.
	    x.send(null);
	    sent = true;

	    return x;
	}

	if (true) module.exports = corslite;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(90),
	    Mustache = __webpack_require__(98);

	var GridControl = L.Control.extend({

	    options: {
	        pinnable: true,
	        follow: false,
	        sanitizer: __webpack_require__(99),
	        touchTeaser: true,
	        location: true
	    },

	    _currentContent: '',

	    // pinned means that this control is on a feature and the user has likely
	    // clicked. pinned will not become false unless the user clicks off
	    // of the feature onto another or clicks x
	    _pinned: false,

	    initialize: function(_, options) {
	        L.Util.setOptions(this, options);
	        util.strict_instance(_, L.Class, 'L.mapbox.gridLayer');
	        this._layer = _;
	    },

	    setTemplate: function(template) {
	        util.strict(template, 'string');
	        this.options.template = template;
	        return this;
	    },

	    _template: function(format, data) {
	        if (!data) return;
	        var template = this.options.template || this._layer.getTileJSON().template;
	        if (template) {
	            var d = {};
	            d['__' + format + '__'] = true;
	            return this.options.sanitizer(
	                Mustache.to_html(template, L.extend(d, data)));
	        }
	    },

	    // change the content of the tooltip HTML if it has changed, otherwise
	    // noop
	    _show: function(content, o) {
	        if (content === this._currentContent) return;

	        this._currentContent = content;

	        if (this.options.follow) {
	            this._popup.setContent(content)
	                .setLatLng(o.latLng);
	            if (this._map._popup !== this._popup) this._popup.openOn(this._map);
	        } else {
	            this._container.style.display = 'block';
	            this._contentWrapper.innerHTML = content;
	        }
	    },

	    hide: function() {
	        this._pinned = false;
	        this._currentContent = '';

	        this._map.closePopup();
	        this._container.style.display = 'none';
	        this._contentWrapper.innerHTML = '';

	        L.DomUtil.removeClass(this._container, 'closable');

	        return this;
	    },

	    _mouseover: function(o) {
	        if (o.data) {
	            L.DomUtil.addClass(this._map._container, 'map-clickable');
	        } else {
	            L.DomUtil.removeClass(this._map._container, 'map-clickable');
	        }

	        if (this._pinned) return;

	        var content = this._template('teaser', o.data);
	        if (content) {
	            this._show(content, o);
	        } else {
	            this.hide();
	        }
	    },

	    _mousemove: function(o) {
	        if (this._pinned) return;
	        if (!this.options.follow) return;

	        this._popup.setLatLng(o.latLng);
	    },

	    _navigateTo: function(url) {
	        window.top.location.href = url;
	    },

	    _click: function(o) {

	        var location_formatted = this._template('location', o.data);
	        if (this.options.location && location_formatted &&
	            location_formatted.search(/^https?:/) === 0) {
	            return this._navigateTo(this._template('location', o.data));
	        }

	        if (!this.options.pinnable) return;

	        var content = this._template('full', o.data);

	        if (!content && this.options.touchTeaser && L.Browser.touch) {
	            content = this._template('teaser', o.data);
	        }

	        if (content) {
	            L.DomUtil.addClass(this._container, 'closable');
	            this._pinned = true;
	            this._show(content, o);
	        } else if (this._pinned) {
	            L.DomUtil.removeClass(this._container, 'closable');
	            this._pinned = false;
	            this.hide();
	        }
	    },

	    _onPopupClose: function() {
	        this._currentContent = null;
	        this._pinned = false;
	    },

	    _createClosebutton: function(container, fn) {
	        var link = L.DomUtil.create('a', 'close', container);

	        link.innerHTML = 'close';
	        link.href = '#';
	        link.title = 'close';

	        L.DomEvent
	            .on(link, 'click', L.DomEvent.stopPropagation)
	            .on(link, 'mousedown', L.DomEvent.stopPropagation)
	            .on(link, 'dblclick', L.DomEvent.stopPropagation)
	            .on(link, 'click', L.DomEvent.preventDefault)
	            .on(link, 'click', fn, this);

	        return link;
	    },

	    onAdd: function(map) {
	        this._map = map;

	        var className = 'leaflet-control-grid map-tooltip',
	            container = L.DomUtil.create('div', className),
	            contentWrapper = L.DomUtil.create('div', 'map-tooltip-content');

	        // hide the container element initially
	        container.style.display = 'none';
	        this._createClosebutton(container, this.hide);
	        container.appendChild(contentWrapper);

	        this._contentWrapper = contentWrapper;
	        this._popup = new L.Popup({ autoPan: false, closeOnClick: false });

	        map.on('popupclose', this._onPopupClose, this);

	        L.DomEvent
	            .disableClickPropagation(container)
	            // allow people to scroll tooltips with mousewheel
	            .addListener(container, 'mousewheel', L.DomEvent.stopPropagation);

	        this._layer
	            .on('mouseover', this._mouseover, this)
	            .on('mousemove', this._mousemove, this)
	            .on('click', this._click, this);

	        return container;
	    },

	    onRemove: function (map) {

	        map.off('popupclose', this._onPopupClose, this);

	        this._layer
	            .off('mouseover', this._mouseover, this)
	            .off('mousemove', this._mousemove, this)
	            .off('click', this._click, this);
	    }
	});

	module.exports.GridControl = GridControl;

	module.exports.gridControl = function(_, options) {
	    return new GridControl(_, options);
	};


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */

	/*global define: false*/

	(function (root, factory) {
	  if (typeof exports === "object" && exports) {
	    factory(exports); // CommonJS
	  } else {
	    var mustache = {};
	    factory(mustache);
	    if (true) {
	      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (mustache), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else {
	      root.Mustache = mustache; // <script>
	    }
	  }
	}(this, function (mustache) {

	  var whiteRe = /\s*/;
	  var spaceRe = /\s+/;
	  var nonSpaceRe = /\S/;
	  var eqRe = /\s*=/;
	  var curlyRe = /\s*\}/;
	  var tagRe = /#|\^|\/|>|\{|&|=|!/;

	  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	  // See https://github.com/janl/mustache.js/issues/189
	  var RegExp_test = RegExp.prototype.test;
	  function testRegExp(re, string) {
	    return RegExp_test.call(re, string);
	  }

	  function isWhitespace(string) {
	    return !testRegExp(nonSpaceRe, string);
	  }

	  var Object_toString = Object.prototype.toString;
	  var isArray = Array.isArray || function (object) {
	    return Object_toString.call(object) === '[object Array]';
	  };

	  function isFunction(object) {
	    return typeof object === 'function';
	  }

	  function escapeRegExp(string) {
	    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
	  }

	  var entityMap = {
	    "&": "&amp;",
	    "<": "&lt;",
	    ">": "&gt;",
	    '"': '&quot;',
	    "'": '&#39;',
	    "/": '&#x2F;'
	  };

	  function escapeHtml(string) {
	    return String(string).replace(/[&<>"'\/]/g, function (s) {
	      return entityMap[s];
	    });
	  }

	  function Scanner(string) {
	    this.string = string;
	    this.tail = string;
	    this.pos = 0;
	  }

	  /**
	   * Returns `true` if the tail is empty (end of string).
	   */
	  Scanner.prototype.eos = function () {
	    return this.tail === "";
	  };

	  /**
	   * Tries to match the given regular expression at the current position.
	   * Returns the matched text if it can match, the empty string otherwise.
	   */
	  Scanner.prototype.scan = function (re) {
	    var match = this.tail.match(re);

	    if (match && match.index === 0) {
	      var string = match[0];
	      this.tail = this.tail.substring(string.length);
	      this.pos += string.length;
	      return string;
	    }

	    return "";
	  };

	  /**
	   * Skips all text until the given regular expression can be matched. Returns
	   * the skipped string, which is the entire tail if no match can be made.
	   */
	  Scanner.prototype.scanUntil = function (re) {
	    var index = this.tail.search(re), match;

	    switch (index) {
	    case -1:
	      match = this.tail;
	      this.tail = "";
	      break;
	    case 0:
	      match = "";
	      break;
	    default:
	      match = this.tail.substring(0, index);
	      this.tail = this.tail.substring(index);
	    }

	    this.pos += match.length;

	    return match;
	  };

	  function Context(view, parent) {
	    this.view = view == null ? {} : view;
	    this.parent = parent;
	    this._cache = { '.': this.view };
	  }

	  Context.make = function (view) {
	    return (view instanceof Context) ? view : new Context(view);
	  };

	  Context.prototype.push = function (view) {
	    return new Context(view, this);
	  };

	  Context.prototype.lookup = function (name) {
	    var value;
	    if (name in this._cache) {
	      value = this._cache[name];
	    } else {
	      var context = this;

	      while (context) {
	        if (name.indexOf('.') > 0) {
	          value = context.view;

	          var names = name.split('.'), i = 0;
	          while (value != null && i < names.length) {
	            value = value[names[i++]];
	          }
	        } else {
	          value = context.view[name];
	        }

	        if (value != null) break;

	        context = context.parent;
	      }

	      this._cache[name] = value;
	    }

	    if (isFunction(value)) {
	      value = value.call(this.view);
	    }

	    return value;
	  };

	  function Writer() {
	    this.clearCache();
	  }

	  Writer.prototype.clearCache = function () {
	    this._cache = {};
	    this._partialCache = {};
	  };

	  Writer.prototype.compile = function (template, tags) {
	    var fn = this._cache[template];

	    if (!fn) {
	      var tokens = mustache.parse(template, tags);
	      fn = this._cache[template] = this.compileTokens(tokens, template);
	    }

	    return fn;
	  };

	  Writer.prototype.compilePartial = function (name, template, tags) {
	    var fn = this.compile(template, tags);
	    this._partialCache[name] = fn;
	    return fn;
	  };

	  Writer.prototype.getPartial = function (name) {
	    if (!(name in this._partialCache) && this._loadPartial) {
	      this.compilePartial(name, this._loadPartial(name));
	    }

	    return this._partialCache[name];
	  };

	  Writer.prototype.compileTokens = function (tokens, template) {
	    var self = this;
	    return function (view, partials) {
	      if (partials) {
	        if (isFunction(partials)) {
	          self._loadPartial = partials;
	        } else {
	          for (var name in partials) {
	            self.compilePartial(name, partials[name]);
	          }
	        }
	      }

	      return renderTokens(tokens, self, Context.make(view), template);
	    };
	  };

	  Writer.prototype.render = function (template, view, partials) {
	    return this.compile(template)(view, partials);
	  };

	  /**
	   * Low-level function that renders the given `tokens` using the given `writer`
	   * and `context`. The `template` string is only needed for templates that use
	   * higher-order sections to extract the portion of the original template that
	   * was contained in that section.
	   */
	  function renderTokens(tokens, writer, context, template) {
	    var buffer = '';

	    // This function is used to render an artbitrary template
	    // in the current context by higher-order functions.
	    function subRender(template) {
	      return writer.render(template, context);
	    }

	    var token, tokenValue, value;
	    for (var i = 0, len = tokens.length; i < len; ++i) {
	      token = tokens[i];
	      tokenValue = token[1];

	      switch (token[0]) {
	      case '#':
	        value = context.lookup(tokenValue);

	        if (typeof value === 'object' || typeof value === 'string') {
	          if (isArray(value)) {
	            for (var j = 0, jlen = value.length; j < jlen; ++j) {
	              buffer += renderTokens(token[4], writer, context.push(value[j]), template);
	            }
	          } else if (value) {
	            buffer += renderTokens(token[4], writer, context.push(value), template);
	          }
	        } else if (isFunction(value)) {
	          var text = template == null ? null : template.slice(token[3], token[5]);
	          value = value.call(context.view, text, subRender);
	          if (value != null) buffer += value;
	        } else if (value) {
	          buffer += renderTokens(token[4], writer, context, template);
	        }

	        break;
	      case '^':
	        value = context.lookup(tokenValue);

	        // Use JavaScript's definition of falsy. Include empty arrays.
	        // See https://github.com/janl/mustache.js/issues/186
	        if (!value || (isArray(value) && value.length === 0)) {
	          buffer += renderTokens(token[4], writer, context, template);
	        }

	        break;
	      case '>':
	        value = writer.getPartial(tokenValue);
	        if (isFunction(value)) buffer += value(context);
	        break;
	      case '&':
	        value = context.lookup(tokenValue);
	        if (value != null) buffer += value;
	        break;
	      case 'name':
	        value = context.lookup(tokenValue);
	        if (value != null) buffer += mustache.escape(value);
	        break;
	      case 'text':
	        buffer += tokenValue;
	        break;
	      }
	    }

	    return buffer;
	  }

	  /**
	   * Forms the given array of `tokens` into a nested tree structure where
	   * tokens that represent a section have two additional items: 1) an array of
	   * all tokens that appear in that section and 2) the index in the original
	   * template that represents the end of that section.
	   */
	  function nestTokens(tokens) {
	    var tree = [];
	    var collector = tree;
	    var sections = [];

	    var token;
	    for (var i = 0, len = tokens.length; i < len; ++i) {
	      token = tokens[i];
	      switch (token[0]) {
	      case '#':
	      case '^':
	        sections.push(token);
	        collector.push(token);
	        collector = token[4] = [];
	        break;
	      case '/':
	        var section = sections.pop();
	        section[5] = token[2];
	        collector = sections.length > 0 ? sections[sections.length - 1][4] : tree;
	        break;
	      default:
	        collector.push(token);
	      }
	    }

	    return tree;
	  }

	  /**
	   * Combines the values of consecutive text tokens in the given `tokens` array
	   * to a single token.
	   */
	  function squashTokens(tokens) {
	    var squashedTokens = [];

	    var token, lastToken;
	    for (var i = 0, len = tokens.length; i < len; ++i) {
	      token = tokens[i];
	      if (token) {
	        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
	          lastToken[1] += token[1];
	          lastToken[3] = token[3];
	        } else {
	          lastToken = token;
	          squashedTokens.push(token);
	        }
	      }
	    }

	    return squashedTokens;
	  }

	  function escapeTags(tags) {
	    return [
	      new RegExp(escapeRegExp(tags[0]) + "\\s*"),
	      new RegExp("\\s*" + escapeRegExp(tags[1]))
	    ];
	  }

	  /**
	   * Breaks up the given `template` string into a tree of token objects. If
	   * `tags` is given here it must be an array with two string values: the
	   * opening and closing tags used in the template (e.g. ["<%", "%>"]). Of
	   * course, the default is to use mustaches (i.e. Mustache.tags).
	   */
	  function parseTemplate(template, tags) {
	    template = template || '';
	    tags = tags || mustache.tags;

	    if (typeof tags === 'string') tags = tags.split(spaceRe);
	    if (tags.length !== 2) throw new Error('Invalid tags: ' + tags.join(', '));

	    var tagRes = escapeTags(tags);
	    var scanner = new Scanner(template);

	    var sections = [];     // Stack to hold section tokens
	    var tokens = [];       // Buffer to hold the tokens
	    var spaces = [];       // Indices of whitespace tokens on the current line
	    var hasTag = false;    // Is there a {{tag}} on the current line?
	    var nonSpace = false;  // Is there a non-space char on the current line?

	    // Strips all whitespace tokens array for the current line
	    // if there was a {{#tag}} on it and otherwise only space.
	    function stripSpace() {
	      if (hasTag && !nonSpace) {
	        while (spaces.length) {
	          delete tokens[spaces.pop()];
	        }
	      } else {
	        spaces = [];
	      }

	      hasTag = false;
	      nonSpace = false;
	    }

	    var start, type, value, chr, token, openSection;
	    while (!scanner.eos()) {
	      start = scanner.pos;

	      // Match any text between tags.
	      value = scanner.scanUntil(tagRes[0]);
	      if (value) {
	        for (var i = 0, len = value.length; i < len; ++i) {
	          chr = value.charAt(i);

	          if (isWhitespace(chr)) {
	            spaces.push(tokens.length);
	          } else {
	            nonSpace = true;
	          }

	          tokens.push(['text', chr, start, start + 1]);
	          start += 1;

	          // Check for whitespace on the current line.
	          if (chr == '\n') stripSpace();
	        }
	      }

	      // Match the opening tag.
	      if (!scanner.scan(tagRes[0])) break;
	      hasTag = true;

	      // Get the tag type.
	      type = scanner.scan(tagRe) || 'name';
	      scanner.scan(whiteRe);

	      // Get the tag value.
	      if (type === '=') {
	        value = scanner.scanUntil(eqRe);
	        scanner.scan(eqRe);
	        scanner.scanUntil(tagRes[1]);
	      } else if (type === '{') {
	        value = scanner.scanUntil(new RegExp('\\s*' + escapeRegExp('}' + tags[1])));
	        scanner.scan(curlyRe);
	        scanner.scanUntil(tagRes[1]);
	        type = '&';
	      } else {
	        value = scanner.scanUntil(tagRes[1]);
	      }

	      // Match the closing tag.
	      if (!scanner.scan(tagRes[1])) throw new Error('Unclosed tag at ' + scanner.pos);

	      token = [type, value, start, scanner.pos];
	      tokens.push(token);

	      if (type === '#' || type === '^') {
	        sections.push(token);
	      } else if (type === '/') {
	        // Check section nesting.
	        openSection = sections.pop();
	        if (!openSection) {
	          throw new Error('Unopened section "' + value + '" at ' + start);
	        }
	        if (openSection[1] !== value) {
	          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
	        }
	      } else if (type === 'name' || type === '{' || type === '&') {
	        nonSpace = true;
	      } else if (type === '=') {
	        // Set the tags for the next time around.
	        tags = value.split(spaceRe);
	        if (tags.length !== 2) {
	          throw new Error('Invalid tags at ' + start + ': ' + tags.join(', '));
	        }
	        tagRes = escapeTags(tags);
	      }
	    }

	    // Make sure there are no open sections when we're done.
	    openSection = sections.pop();
	    if (openSection) {
	      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
	    }

	    return nestTokens(squashTokens(tokens));
	  }

	  mustache.name = "mustache.js";
	  mustache.version = "0.7.3";
	  mustache.tags = ["{{", "}}"];

	  mustache.Scanner = Scanner;
	  mustache.Context = Context;
	  mustache.Writer = Writer;

	  mustache.parse = parseTemplate;

	  // Export the escaping function so that the user may override it.
	  // See https://github.com/janl/mustache.js/issues/244
	  mustache.escape = escapeHtml;

	  // All Mustache.* functions use this writer.
	  var defaultWriter = new Writer();

	  /**
	   * Clears all cached templates and partials in the default writer.
	   */
	  mustache.clearCache = function () {
	    return defaultWriter.clearCache();
	  };

	  /**
	   * Compiles the given `template` to a reusable function using the default
	   * writer.
	   */
	  mustache.compile = function (template, tags) {
	    return defaultWriter.compile(template, tags);
	  };

	  /**
	   * Compiles the partial with the given `name` and `template` to a reusable
	   * function using the default writer.
	   */
	  mustache.compilePartial = function (name, template, tags) {
	    return defaultWriter.compilePartial(name, template, tags);
	  };

	  /**
	   * Compiles the given array of tokens (the output of a parse) to a reusable
	   * function using the default writer.
	   */
	  mustache.compileTokens = function (tokens, template) {
	    return defaultWriter.compileTokens(tokens, template);
	  };

	  /**
	   * Renders the `template` with the given `view` and `partials` using the
	   * default writer.
	   */
	  mustache.render = function (template, view, partials) {
	    return defaultWriter.render(template, view, partials);
	  };

	  // This is here for backwards compatibility with 0.4.x.
	  mustache.to_html = function (template, view, partials, send) {
	    var result = mustache.render(template, view, partials);

	    if (isFunction(send)) {
	      send(result);
	    } else {
	      return result;
	    }
	  };

	}));


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var html_sanitize = __webpack_require__(100);

	module.exports = function(_) {
	    if (!_) return '';
	    return html_sanitize(_, cleanUrl, cleanId);
	};

	// https://bugzilla.mozilla.org/show_bug.cgi?id=255107
	function cleanUrl(url) {
	    'use strict';
	    if (/^https?/.test(url.getScheme())) return url.toString();
	    if (/^mailto?/.test(url.getScheme())) return url.toString();
	    if ('data' == url.getScheme() && /^image/.test(url.getPath())) {
	        return url.toString();
	    }
	}

	function cleanId(id) { return id; }


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	
	// Copyright (C) 2010 Google Inc.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.

	/**
	 * @fileoverview
	 * Implements RFC 3986 for parsing/formatting URIs.
	 *
	 * @author mikesamuel@gmail.com
	 * \@provides URI
	 * \@overrides window
	 */

	var URI = (function () {

	/**
	 * creates a uri from the string form.  The parser is relaxed, so special
	 * characters that aren't escaped but don't cause ambiguities will not cause
	 * parse failures.
	 *
	 * @return {URI|null}
	 */
	function parse(uriStr) {
	  var m = ('' + uriStr).match(URI_RE_);
	  if (!m) { return null; }
	  return new URI(
	      nullIfAbsent(m[1]),
	      nullIfAbsent(m[2]),
	      nullIfAbsent(m[3]),
	      nullIfAbsent(m[4]),
	      nullIfAbsent(m[5]),
	      nullIfAbsent(m[6]),
	      nullIfAbsent(m[7]));
	}


	/**
	 * creates a uri from the given parts.
	 *
	 * @param scheme {string} an unencoded scheme such as "http" or null
	 * @param credentials {string} unencoded user credentials or null
	 * @param domain {string} an unencoded domain name or null
	 * @param port {number} a port number in [1, 32768].
	 *    -1 indicates no port, as does null.
	 * @param path {string} an unencoded path
	 * @param query {Array.<string>|string|null} a list of unencoded cgi
	 *   parameters where even values are keys and odds the corresponding values
	 *   or an unencoded query.
	 * @param fragment {string} an unencoded fragment without the "#" or null.
	 * @return {URI}
	 */
	function create(scheme, credentials, domain, port, path, query, fragment) {
	  var uri = new URI(
	      encodeIfExists2(scheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_),
	      encodeIfExists2(
	          credentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_),
	      encodeIfExists(domain),
	      port > 0 ? port.toString() : null,
	      encodeIfExists2(path, URI_DISALLOWED_IN_PATH_),
	      null,
	      encodeIfExists(fragment));
	  if (query) {
	    if ('string' === typeof query) {
	      uri.setRawQuery(query.replace(/[^?&=0-9A-Za-z_\-~.%]/g, encodeOne));
	    } else {
	      uri.setAllParameters(query);
	    }
	  }
	  return uri;
	}
	function encodeIfExists(unescapedPart) {
	  if ('string' == typeof unescapedPart) {
	    return encodeURIComponent(unescapedPart);
	  }
	  return null;
	};
	/**
	 * if unescapedPart is non null, then escapes any characters in it that aren't
	 * valid characters in a url and also escapes any special characters that
	 * appear in extra.
	 *
	 * @param unescapedPart {string}
	 * @param extra {RegExp} a character set of characters in [\01-\177].
	 * @return {string|null} null iff unescapedPart == null.
	 */
	function encodeIfExists2(unescapedPart, extra) {
	  if ('string' == typeof unescapedPart) {
	    return encodeURI(unescapedPart).replace(extra, encodeOne);
	  }
	  return null;
	};
	/** converts a character in [\01-\177] to its url encoded equivalent. */
	function encodeOne(ch) {
	  var n = ch.charCodeAt(0);
	  return '%' + '0123456789ABCDEF'.charAt((n >> 4) & 0xf) +
	      '0123456789ABCDEF'.charAt(n & 0xf);
	}

	/**
	 * {@updoc
	 *  $ normPath('foo/./bar')
	 *  # 'foo/bar'
	 *  $ normPath('./foo')
	 *  # 'foo'
	 *  $ normPath('foo/.')
	 *  # 'foo'
	 *  $ normPath('foo//bar')
	 *  # 'foo/bar'
	 * }
	 */
	function normPath(path) {
	  return path.replace(/(^|\/)\.(?:\/|$)/g, '$1').replace(/\/{2,}/g, '/');
	}

	var PARENT_DIRECTORY_HANDLER = new RegExp(
	    ''
	    // A path break
	    + '(/|^)'
	    // followed by a non .. path element
	    // (cannot be . because normPath is used prior to this RegExp)
	    + '(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)'
	    // followed by .. followed by a path break.
	    + '/\\.\\.(?:/|$)');

	var PARENT_DIRECTORY_HANDLER_RE = new RegExp(PARENT_DIRECTORY_HANDLER);

	var EXTRA_PARENT_PATHS_RE = /^(?:\.\.\/)*(?:\.\.$)?/;

	/**
	 * Normalizes its input path and collapses all . and .. sequences except for
	 * .. sequences that would take it above the root of the current parent
	 * directory.
	 * {@updoc
	 *  $ collapse_dots('foo/../bar')
	 *  # 'bar'
	 *  $ collapse_dots('foo/./bar')
	 *  # 'foo/bar'
	 *  $ collapse_dots('foo/../bar/./../../baz')
	 *  # 'baz'
	 *  $ collapse_dots('../foo')
	 *  # '../foo'
	 *  $ collapse_dots('../foo').replace(EXTRA_PARENT_PATHS_RE, '')
	 *  # 'foo'
	 * }
	 */
	function collapse_dots(path) {
	  if (path === null) { return null; }
	  var p = normPath(path);
	  // Only /../ left to flatten
	  var r = PARENT_DIRECTORY_HANDLER_RE;
	  // We replace with $1 which matches a / before the .. because this
	  // guarantees that:
	  // (1) we have at most 1 / between the adjacent place,
	  // (2) always have a slash if there is a preceding path section, and
	  // (3) we never turn a relative path into an absolute path.
	  for (var q; (q = p.replace(r, '$1')) != p; p = q) {};
	  return p;
	}

	/**
	 * resolves a relative url string to a base uri.
	 * @return {URI}
	 */
	function resolve(baseUri, relativeUri) {
	  // there are several kinds of relative urls:
	  // 1. //foo - replaces everything from the domain on.  foo is a domain name
	  // 2. foo - replaces the last part of the path, the whole query and fragment
	  // 3. /foo - replaces the the path, the query and fragment
	  // 4. ?foo - replace the query and fragment
	  // 5. #foo - replace the fragment only

	  var absoluteUri = baseUri.clone();
	  // we satisfy these conditions by looking for the first part of relativeUri
	  // that is not blank and applying defaults to the rest

	  var overridden = relativeUri.hasScheme();

	  if (overridden) {
	    absoluteUri.setRawScheme(relativeUri.getRawScheme());
	  } else {
	    overridden = relativeUri.hasCredentials();
	  }

	  if (overridden) {
	    absoluteUri.setRawCredentials(relativeUri.getRawCredentials());
	  } else {
	    overridden = relativeUri.hasDomain();
	  }

	  if (overridden) {
	    absoluteUri.setRawDomain(relativeUri.getRawDomain());
	  } else {
	    overridden = relativeUri.hasPort();
	  }

	  var rawPath = relativeUri.getRawPath();
	  var simplifiedPath = collapse_dots(rawPath);
	  if (overridden) {
	    absoluteUri.setPort(relativeUri.getPort());
	    simplifiedPath = simplifiedPath
	        && simplifiedPath.replace(EXTRA_PARENT_PATHS_RE, '');
	  } else {
	    overridden = !!rawPath;
	    if (overridden) {
	      // resolve path properly
	      if (simplifiedPath.charCodeAt(0) !== 0x2f /* / */) {  // path is relative
	        var absRawPath = collapse_dots(absoluteUri.getRawPath() || '')
	            .replace(EXTRA_PARENT_PATHS_RE, '');
	        var slash = absRawPath.lastIndexOf('/') + 1;
	        simplifiedPath = collapse_dots(
	            (slash ? absRawPath.substring(0, slash) : '')
	            + collapse_dots(rawPath))
	            .replace(EXTRA_PARENT_PATHS_RE, '');
	      }
	    } else {
	      simplifiedPath = simplifiedPath
	          && simplifiedPath.replace(EXTRA_PARENT_PATHS_RE, '');
	      if (simplifiedPath !== rawPath) {
	        absoluteUri.setRawPath(simplifiedPath);
	      }
	    }
	  }

	  if (overridden) {
	    absoluteUri.setRawPath(simplifiedPath);
	  } else {
	    overridden = relativeUri.hasQuery();
	  }

	  if (overridden) {
	    absoluteUri.setRawQuery(relativeUri.getRawQuery());
	  } else {
	    overridden = relativeUri.hasFragment();
	  }

	  if (overridden) {
	    absoluteUri.setRawFragment(relativeUri.getRawFragment());
	  }

	  return absoluteUri;
	}

	/**
	 * a mutable URI.
	 *
	 * This class contains setters and getters for the parts of the URI.
	 * The <tt>getXYZ</tt>/<tt>setXYZ</tt> methods return the decoded part -- so
	 * <code>uri.parse('/foo%20bar').getPath()</code> will return the decoded path,
	 * <tt>/foo bar</tt>.
	 *
	 * <p>The raw versions of fields are available too.
	 * <code>uri.parse('/foo%20bar').getRawPath()</code> will return the raw path,
	 * <tt>/foo%20bar</tt>.  Use the raw setters with care, since
	 * <code>URI::toString</code> is not guaranteed to return a valid url if a
	 * raw setter was used.
	 *
	 * <p>All setters return <tt>this</tt> and so may be chained, a la
	 * <code>uri.parse('/foo').setFragment('part').toString()</code>.
	 *
	 * <p>You should not use this constructor directly -- please prefer the factory
	 * functions {@link uri.parse}, {@link uri.create}, {@link uri.resolve}
	 * instead.</p>
	 *
	 * <p>The parameters are all raw (assumed to be properly escaped) parts, and
	 * any (but not all) may be null.  Undefined is not allowed.</p>
	 *
	 * @constructor
	 */
	function URI(
	    rawScheme,
	    rawCredentials, rawDomain, port,
	    rawPath, rawQuery, rawFragment) {
	  this.scheme_ = rawScheme;
	  this.credentials_ = rawCredentials;
	  this.domain_ = rawDomain;
	  this.port_ = port;
	  this.path_ = rawPath;
	  this.query_ = rawQuery;
	  this.fragment_ = rawFragment;
	  /**
	   * @type {Array|null}
	   */
	  this.paramCache_ = null;
	}

	/** returns the string form of the url. */
	URI.prototype.toString = function () {
	  var out = [];
	  if (null !== this.scheme_) { out.push(this.scheme_, ':'); }
	  if (null !== this.domain_) {
	    out.push('//');
	    if (null !== this.credentials_) { out.push(this.credentials_, '@'); }
	    out.push(this.domain_);
	    if (null !== this.port_) { out.push(':', this.port_.toString()); }
	  }
	  if (null !== this.path_) { out.push(this.path_); }
	  if (null !== this.query_) { out.push('?', this.query_); }
	  if (null !== this.fragment_) { out.push('#', this.fragment_); }
	  return out.join('');
	};

	URI.prototype.clone = function () {
	  return new URI(this.scheme_, this.credentials_, this.domain_, this.port_,
	                 this.path_, this.query_, this.fragment_);
	};

	URI.prototype.getScheme = function () {
	  // HTML5 spec does not require the scheme to be lowercased but
	  // all common browsers except Safari lowercase the scheme.
	  return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase();
	};
	URI.prototype.getRawScheme = function () {
	  return this.scheme_;
	};
	URI.prototype.setScheme = function (newScheme) {
	  this.scheme_ = encodeIfExists2(
	      newScheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);
	  return this;
	};
	URI.prototype.setRawScheme = function (newScheme) {
	  this.scheme_ = newScheme ? newScheme : null;
	  return this;
	};
	URI.prototype.hasScheme = function () {
	  return null !== this.scheme_;
	};


	URI.prototype.getCredentials = function () {
	  return this.credentials_ && decodeURIComponent(this.credentials_);
	};
	URI.prototype.getRawCredentials = function () {
	  return this.credentials_;
	};
	URI.prototype.setCredentials = function (newCredentials) {
	  this.credentials_ = encodeIfExists2(
	      newCredentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);

	  return this;
	};
	URI.prototype.setRawCredentials = function (newCredentials) {
	  this.credentials_ = newCredentials ? newCredentials : null;
	  return this;
	};
	URI.prototype.hasCredentials = function () {
	  return null !== this.credentials_;
	};


	URI.prototype.getDomain = function () {
	  return this.domain_ && decodeURIComponent(this.domain_);
	};
	URI.prototype.getRawDomain = function () {
	  return this.domain_;
	};
	URI.prototype.setDomain = function (newDomain) {
	  return this.setRawDomain(newDomain && encodeURIComponent(newDomain));
	};
	URI.prototype.setRawDomain = function (newDomain) {
	  this.domain_ = newDomain ? newDomain : null;
	  // Maintain the invariant that paths must start with a slash when the URI
	  // is not path-relative.
	  return this.setRawPath(this.path_);
	};
	URI.prototype.hasDomain = function () {
	  return null !== this.domain_;
	};


	URI.prototype.getPort = function () {
	  return this.port_ && decodeURIComponent(this.port_);
	};
	URI.prototype.setPort = function (newPort) {
	  if (newPort) {
	    newPort = Number(newPort);
	    if (newPort !== (newPort & 0xffff)) {
	      throw new Error('Bad port number ' + newPort);
	    }
	    this.port_ = '' + newPort;
	  } else {
	    this.port_ = null;
	  }
	  return this;
	};
	URI.prototype.hasPort = function () {
	  return null !== this.port_;
	};


	URI.prototype.getPath = function () {
	  return this.path_ && decodeURIComponent(this.path_);
	};
	URI.prototype.getRawPath = function () {
	  return this.path_;
	};
	URI.prototype.setPath = function (newPath) {
	  return this.setRawPath(encodeIfExists2(newPath, URI_DISALLOWED_IN_PATH_));
	};
	URI.prototype.setRawPath = function (newPath) {
	  if (newPath) {
	    newPath = String(newPath);
	    this.path_ = 
	      // Paths must start with '/' unless this is a path-relative URL.
	      (!this.domain_ || /^\//.test(newPath)) ? newPath : '/' + newPath;
	  } else {
	    this.path_ = null;
	  }
	  return this;
	};
	URI.prototype.hasPath = function () {
	  return null !== this.path_;
	};


	URI.prototype.getQuery = function () {
	  // From http://www.w3.org/Addressing/URL/4_URI_Recommentations.html
	  // Within the query string, the plus sign is reserved as shorthand notation
	  // for a space.
	  return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, ' ');
	};
	URI.prototype.getRawQuery = function () {
	  return this.query_;
	};
	URI.prototype.setQuery = function (newQuery) {
	  this.paramCache_ = null;
	  this.query_ = encodeIfExists(newQuery);
	  return this;
	};
	URI.prototype.setRawQuery = function (newQuery) {
	  this.paramCache_ = null;
	  this.query_ = newQuery ? newQuery : null;
	  return this;
	};
	URI.prototype.hasQuery = function () {
	  return null !== this.query_;
	};

	/**
	 * sets the query given a list of strings of the form
	 * [ key0, value0, key1, value1, ... ].
	 *
	 * <p><code>uri.setAllParameters(['a', 'b', 'c', 'd']).getQuery()</code>
	 * will yield <code>'a=b&c=d'</code>.
	 */
	URI.prototype.setAllParameters = function (params) {
	  if (typeof params === 'object') {
	    if (!(params instanceof Array)
	        && (params instanceof Object
	            || Object.prototype.toString.call(params) !== '[object Array]')) {
	      var newParams = [];
	      var i = -1;
	      for (var k in params) {
	        var v = params[k];
	        if ('string' === typeof v) {
	          newParams[++i] = k;
	          newParams[++i] = v;
	        }
	      }
	      params = newParams;
	    }
	  }
	  this.paramCache_ = null;
	  var queryBuf = [];
	  var separator = '';
	  for (var j = 0; j < params.length;) {
	    var k = params[j++];
	    var v = params[j++];
	    queryBuf.push(separator, encodeURIComponent(k.toString()));
	    separator = '&';
	    if (v) {
	      queryBuf.push('=', encodeURIComponent(v.toString()));
	    }
	  }
	  this.query_ = queryBuf.join('');
	  return this;
	};
	URI.prototype.checkParameterCache_ = function () {
	  if (!this.paramCache_) {
	    var q = this.query_;
	    if (!q) {
	      this.paramCache_ = [];
	    } else {
	      var cgiParams = q.split(/[&\?]/);
	      var out = [];
	      var k = -1;
	      for (var i = 0; i < cgiParams.length; ++i) {
	        var m = cgiParams[i].match(/^([^=]*)(?:=(.*))?$/);
	        // From http://www.w3.org/Addressing/URL/4_URI_Recommentations.html
	        // Within the query string, the plus sign is reserved as shorthand
	        // notation for a space.
	        out[++k] = decodeURIComponent(m[1]).replace(/\+/g, ' ');
	        out[++k] = decodeURIComponent(m[2] || '').replace(/\+/g, ' ');
	      }
	      this.paramCache_ = out;
	    }
	  }
	};
	/**
	 * sets the values of the named cgi parameters.
	 *
	 * <p>So, <code>uri.parse('foo?a=b&c=d&e=f').setParameterValues('c', ['new'])
	 * </code> yields <tt>foo?a=b&c=new&e=f</tt>.</p>
	 *
	 * @param key {string}
	 * @param values {Array.<string>} the new values.  If values is a single string
	 *   then it will be treated as the sole value.
	 */
	URI.prototype.setParameterValues = function (key, values) {
	  // be nice and avoid subtle bugs where [] operator on string performs charAt
	  // on some browsers and crashes on IE
	  if (typeof values === 'string') {
	    values = [ values ];
	  }

	  this.checkParameterCache_();
	  var newValueIndex = 0;
	  var pc = this.paramCache_;
	  var params = [];
	  for (var i = 0, k = 0; i < pc.length; i += 2) {
	    if (key === pc[i]) {
	      if (newValueIndex < values.length) {
	        params.push(key, values[newValueIndex++]);
	      }
	    } else {
	      params.push(pc[i], pc[i + 1]);
	    }
	  }
	  while (newValueIndex < values.length) {
	    params.push(key, values[newValueIndex++]);
	  }
	  this.setAllParameters(params);
	  return this;
	};
	URI.prototype.removeParameter = function (key) {
	  return this.setParameterValues(key, []);
	};
	/**
	 * returns the parameters specified in the query part of the uri as a list of
	 * keys and values like [ key0, value0, key1, value1, ... ].
	 *
	 * @return {Array.<string>}
	 */
	URI.prototype.getAllParameters = function () {
	  this.checkParameterCache_();
	  return this.paramCache_.slice(0, this.paramCache_.length);
	};
	/**
	 * returns the value<b>s</b> for a given cgi parameter as a list of decoded
	 * query parameter values.
	 * @return {Array.<string>}
	 */
	URI.prototype.getParameterValues = function (paramNameUnescaped) {
	  this.checkParameterCache_();
	  var values = [];
	  for (var i = 0; i < this.paramCache_.length; i += 2) {
	    if (paramNameUnescaped === this.paramCache_[i]) {
	      values.push(this.paramCache_[i + 1]);
	    }
	  }
	  return values;
	};
	/**
	 * returns a map of cgi parameter names to (non-empty) lists of values.
	 * @return {Object.<string,Array.<string>>}
	 */
	URI.prototype.getParameterMap = function (paramNameUnescaped) {
	  this.checkParameterCache_();
	  var paramMap = {};
	  for (var i = 0; i < this.paramCache_.length; i += 2) {
	    var key = this.paramCache_[i++],
	      value = this.paramCache_[i++];
	    if (!(key in paramMap)) {
	      paramMap[key] = [value];
	    } else {
	      paramMap[key].push(value);
	    }
	  }
	  return paramMap;
	};
	/**
	 * returns the first value for a given cgi parameter or null if the given
	 * parameter name does not appear in the query string.
	 * If the given parameter name does appear, but has no '<tt>=</tt>' following
	 * it, then the empty string will be returned.
	 * @return {string|null}
	 */
	URI.prototype.getParameterValue = function (paramNameUnescaped) {
	  this.checkParameterCache_();
	  for (var i = 0; i < this.paramCache_.length; i += 2) {
	    if (paramNameUnescaped === this.paramCache_[i]) {
	      return this.paramCache_[i + 1];
	    }
	  }
	  return null;
	};

	URI.prototype.getFragment = function () {
	  return this.fragment_ && decodeURIComponent(this.fragment_);
	};
	URI.prototype.getRawFragment = function () {
	  return this.fragment_;
	};
	URI.prototype.setFragment = function (newFragment) {
	  this.fragment_ = newFragment ? encodeURIComponent(newFragment) : null;
	  return this;
	};
	URI.prototype.setRawFragment = function (newFragment) {
	  this.fragment_ = newFragment ? newFragment : null;
	  return this;
	};
	URI.prototype.hasFragment = function () {
	  return null !== this.fragment_;
	};

	function nullIfAbsent(matchPart) {
	  return ('string' == typeof matchPart) && (matchPart.length > 0)
	         ? matchPart
	         : null;
	}




	/**
	 * a regular expression for breaking a URI into its component parts.
	 *
	 * <p>http://www.gbiv.com/protocols/uri/rfc/rfc3986.html#RFC2234 says
	 * As the "first-match-wins" algorithm is identical to the "greedy"
	 * disambiguation method used by POSIX regular expressions, it is natural and
	 * commonplace to use a regular expression for parsing the potential five
	 * components of a URI reference.
	 *
	 * <p>The following line is the regular expression for breaking-down a
	 * well-formed URI reference into its components.
	 *
	 * <pre>
	 * ^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
	 *  12            3  4          5       6  7        8 9
	 * </pre>
	 *
	 * <p>The numbers in the second line above are only to assist readability; they
	 * indicate the reference points for each subexpression (i.e., each paired
	 * parenthesis). We refer to the value matched for subexpression <n> as $<n>.
	 * For example, matching the above expression to
	 * <pre>
	 *     http://www.ics.uci.edu/pub/ietf/uri/#Related
	 * </pre>
	 * results in the following subexpression matches:
	 * <pre>
	 *    $1 = http:
	 *    $2 = http
	 *    $3 = //www.ics.uci.edu
	 *    $4 = www.ics.uci.edu
	 *    $5 = /pub/ietf/uri/
	 *    $6 = <undefined>
	 *    $7 = <undefined>
	 *    $8 = #Related
	 *    $9 = Related
	 * </pre>
	 * where <undefined> indicates that the component is not present, as is the
	 * case for the query component in the above example. Therefore, we can
	 * determine the value of the five components as
	 * <pre>
	 *    scheme    = $2
	 *    authority = $4
	 *    path      = $5
	 *    query     = $7
	 *    fragment  = $9
	 * </pre>
	 *
	 * <p>msamuel: I have modified the regular expression slightly to expose the
	 * credentials, domain, and port separately from the authority.
	 * The modified version yields
	 * <pre>
	 *    $1 = http              scheme
	 *    $2 = <undefined>       credentials -\
	 *    $3 = www.ics.uci.edu   domain       | authority
	 *    $4 = <undefined>       port        -/
	 *    $5 = /pub/ietf/uri/    path
	 *    $6 = <undefined>       query without ?
	 *    $7 = Related           fragment without #
	 * </pre>
	 */
	var URI_RE_ = new RegExp(
	      "^" +
	      "(?:" +
	        "([^:/?#]+)" +         // scheme
	      ":)?" +
	      "(?://" +
	        "(?:([^/?#]*)@)?" +    // credentials
	        "([^/?#:@]*)" +        // domain
	        "(?::([0-9]+))?" +     // port
	      ")?" +
	      "([^?#]+)?" +            // path
	      "(?:\\?([^#]*))?" +      // query
	      "(?:#(.*))?" +           // fragment
	      "$"
	      );

	var URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_ = /[#\/\?@]/g;
	var URI_DISALLOWED_IN_PATH_ = /[\#\?]/g;

	URI.parse = parse;
	URI.create = create;
	URI.resolve = resolve;
	URI.collapse_dots = collapse_dots;  // Visible for testing.

	// lightweight string-based api for loadModuleMaker
	URI.utils = {
	  mimeTypeOf: function (uri) {
	    var uriObj = parse(uri);
	    if (/\.html$/.test(uriObj.getPath())) {
	      return 'text/html';
	    } else {
	      return 'application/javascript';
	    }
	  },
	  resolve: function (base, uri) {
	    if (base) {
	      return resolve(parse(base), parse(uri)).toString();
	    } else {
	      return '' + uri;
	    }
	  }
	};


	return URI;
	})();

	// Copyright Google Inc.
	// Licensed under the Apache Licence Version 2.0
	// Autogenerated at Mon Feb 25 13:05:42 EST 2013
	// @overrides window
	// @provides html4
	var html4 = {};
	html4.atype = {
	  'NONE': 0,
	  'URI': 1,
	  'URI_FRAGMENT': 11,
	  'SCRIPT': 2,
	  'STYLE': 3,
	  'HTML': 12,
	  'ID': 4,
	  'IDREF': 5,
	  'IDREFS': 6,
	  'GLOBAL_NAME': 7,
	  'LOCAL_NAME': 8,
	  'CLASSES': 9,
	  'FRAME_TARGET': 10,
	  'MEDIA_QUERY': 13
	};
	html4[ 'atype' ] = html4.atype;
	html4.ATTRIBS = {
	  '*::class': 9,
	  '*::dir': 0,
	  '*::draggable': 0,
	  '*::hidden': 0,
	  '*::id': 4,
	  '*::inert': 0,
	  '*::itemprop': 0,
	  '*::itemref': 6,
	  '*::itemscope': 0,
	  '*::lang': 0,
	  '*::onblur': 2,
	  '*::onchange': 2,
	  '*::onclick': 2,
	  '*::ondblclick': 2,
	  '*::onfocus': 2,
	  '*::onkeydown': 2,
	  '*::onkeypress': 2,
	  '*::onkeyup': 2,
	  '*::onload': 2,
	  '*::onmousedown': 2,
	  '*::onmousemove': 2,
	  '*::onmouseout': 2,
	  '*::onmouseover': 2,
	  '*::onmouseup': 2,
	  '*::onreset': 2,
	  '*::onscroll': 2,
	  '*::onselect': 2,
	  '*::onsubmit': 2,
	  '*::onunload': 2,
	  '*::spellcheck': 0,
	  '*::style': 3,
	  '*::title': 0,
	  '*::translate': 0,
	  'a::accesskey': 0,
	  'a::coords': 0,
	  'a::href': 1,
	  'a::hreflang': 0,
	  'a::name': 7,
	  'a::onblur': 2,
	  'a::onfocus': 2,
	  'a::shape': 0,
	  'a::tabindex': 0,
	  'a::target': 10,
	  'a::type': 0,
	  'area::accesskey': 0,
	  'area::alt': 0,
	  'area::coords': 0,
	  'area::href': 1,
	  'area::nohref': 0,
	  'area::onblur': 2,
	  'area::onfocus': 2,
	  'area::shape': 0,
	  'area::tabindex': 0,
	  'area::target': 10,
	  'audio::controls': 0,
	  'audio::loop': 0,
	  'audio::mediagroup': 5,
	  'audio::muted': 0,
	  'audio::preload': 0,
	  'bdo::dir': 0,
	  'blockquote::cite': 1,
	  'br::clear': 0,
	  'button::accesskey': 0,
	  'button::disabled': 0,
	  'button::name': 8,
	  'button::onblur': 2,
	  'button::onfocus': 2,
	  'button::tabindex': 0,
	  'button::type': 0,
	  'button::value': 0,
	  'canvas::height': 0,
	  'canvas::width': 0,
	  'caption::align': 0,
	  'col::align': 0,
	  'col::char': 0,
	  'col::charoff': 0,
	  'col::span': 0,
	  'col::valign': 0,
	  'col::width': 0,
	  'colgroup::align': 0,
	  'colgroup::char': 0,
	  'colgroup::charoff': 0,
	  'colgroup::span': 0,
	  'colgroup::valign': 0,
	  'colgroup::width': 0,
	  'command::checked': 0,
	  'command::command': 5,
	  'command::disabled': 0,
	  'command::icon': 1,
	  'command::label': 0,
	  'command::radiogroup': 0,
	  'command::type': 0,
	  'data::value': 0,
	  'del::cite': 1,
	  'del::datetime': 0,
	  'details::open': 0,
	  'dir::compact': 0,
	  'div::align': 0,
	  'dl::compact': 0,
	  'fieldset::disabled': 0,
	  'font::color': 0,
	  'font::face': 0,
	  'font::size': 0,
	  'form::accept': 0,
	  'form::action': 1,
	  'form::autocomplete': 0,
	  'form::enctype': 0,
	  'form::method': 0,
	  'form::name': 7,
	  'form::novalidate': 0,
	  'form::onreset': 2,
	  'form::onsubmit': 2,
	  'form::target': 10,
	  'h1::align': 0,
	  'h2::align': 0,
	  'h3::align': 0,
	  'h4::align': 0,
	  'h5::align': 0,
	  'h6::align': 0,
	  'hr::align': 0,
	  'hr::noshade': 0,
	  'hr::size': 0,
	  'hr::width': 0,
	  'iframe::align': 0,
	  'iframe::frameborder': 0,
	  'iframe::height': 0,
	  'iframe::marginheight': 0,
	  'iframe::marginwidth': 0,
	  'iframe::width': 0,
	  'img::align': 0,
	  'img::alt': 0,
	  'img::border': 0,
	  'img::height': 0,
	  'img::hspace': 0,
	  'img::ismap': 0,
	  'img::name': 7,
	  'img::src': 1,
	  'img::usemap': 11,
	  'img::vspace': 0,
	  'img::width': 0,
	  'input::accept': 0,
	  'input::accesskey': 0,
	  'input::align': 0,
	  'input::alt': 0,
	  'input::autocomplete': 0,
	  'input::checked': 0,
	  'input::disabled': 0,
	  'input::inputmode': 0,
	  'input::ismap': 0,
	  'input::list': 5,
	  'input::max': 0,
	  'input::maxlength': 0,
	  'input::min': 0,
	  'input::multiple': 0,
	  'input::name': 8,
	  'input::onblur': 2,
	  'input::onchange': 2,
	  'input::onfocus': 2,
	  'input::onselect': 2,
	  'input::placeholder': 0,
	  'input::readonly': 0,
	  'input::required': 0,
	  'input::size': 0,
	  'input::src': 1,
	  'input::step': 0,
	  'input::tabindex': 0,
	  'input::type': 0,
	  'input::usemap': 11,
	  'input::value': 0,
	  'ins::cite': 1,
	  'ins::datetime': 0,
	  'label::accesskey': 0,
	  'label::for': 5,
	  'label::onblur': 2,
	  'label::onfocus': 2,
	  'legend::accesskey': 0,
	  'legend::align': 0,
	  'li::type': 0,
	  'li::value': 0,
	  'map::name': 7,
	  'menu::compact': 0,
	  'menu::label': 0,
	  'menu::type': 0,
	  'meter::high': 0,
	  'meter::low': 0,
	  'meter::max': 0,
	  'meter::min': 0,
	  'meter::value': 0,
	  'ol::compact': 0,
	  'ol::reversed': 0,
	  'ol::start': 0,
	  'ol::type': 0,
	  'optgroup::disabled': 0,
	  'optgroup::label': 0,
	  'option::disabled': 0,
	  'option::label': 0,
	  'option::selected': 0,
	  'option::value': 0,
	  'output::for': 6,
	  'output::name': 8,
	  'p::align': 0,
	  'pre::width': 0,
	  'progress::max': 0,
	  'progress::min': 0,
	  'progress::value': 0,
	  'q::cite': 1,
	  'select::autocomplete': 0,
	  'select::disabled': 0,
	  'select::multiple': 0,
	  'select::name': 8,
	  'select::onblur': 2,
	  'select::onchange': 2,
	  'select::onfocus': 2,
	  'select::required': 0,
	  'select::size': 0,
	  'select::tabindex': 0,
	  'source::type': 0,
	  'table::align': 0,
	  'table::bgcolor': 0,
	  'table::border': 0,
	  'table::cellpadding': 0,
	  'table::cellspacing': 0,
	  'table::frame': 0,
	  'table::rules': 0,
	  'table::summary': 0,
	  'table::width': 0,
	  'tbody::align': 0,
	  'tbody::char': 0,
	  'tbody::charoff': 0,
	  'tbody::valign': 0,
	  'td::abbr': 0,
	  'td::align': 0,
	  'td::axis': 0,
	  'td::bgcolor': 0,
	  'td::char': 0,
	  'td::charoff': 0,
	  'td::colspan': 0,
	  'td::headers': 6,
	  'td::height': 0,
	  'td::nowrap': 0,
	  'td::rowspan': 0,
	  'td::scope': 0,
	  'td::valign': 0,
	  'td::width': 0,
	  'textarea::accesskey': 0,
	  'textarea::autocomplete': 0,
	  'textarea::cols': 0,
	  'textarea::disabled': 0,
	  'textarea::inputmode': 0,
	  'textarea::name': 8,
	  'textarea::onblur': 2,
	  'textarea::onchange': 2,
	  'textarea::onfocus': 2,
	  'textarea::onselect': 2,
	  'textarea::placeholder': 0,
	  'textarea::readonly': 0,
	  'textarea::required': 0,
	  'textarea::rows': 0,
	  'textarea::tabindex': 0,
	  'textarea::wrap': 0,
	  'tfoot::align': 0,
	  'tfoot::char': 0,
	  'tfoot::charoff': 0,
	  'tfoot::valign': 0,
	  'th::abbr': 0,
	  'th::align': 0,
	  'th::axis': 0,
	  'th::bgcolor': 0,
	  'th::char': 0,
	  'th::charoff': 0,
	  'th::colspan': 0,
	  'th::headers': 6,
	  'th::height': 0,
	  'th::nowrap': 0,
	  'th::rowspan': 0,
	  'th::scope': 0,
	  'th::valign': 0,
	  'th::width': 0,
	  'thead::align': 0,
	  'thead::char': 0,
	  'thead::charoff': 0,
	  'thead::valign': 0,
	  'tr::align': 0,
	  'tr::bgcolor': 0,
	  'tr::char': 0,
	  'tr::charoff': 0,
	  'tr::valign': 0,
	  'track::default': 0,
	  'track::kind': 0,
	  'track::label': 0,
	  'track::srclang': 0,
	  'ul::compact': 0,
	  'ul::type': 0,
	  'video::controls': 0,
	  'video::height': 0,
	  'video::loop': 0,
	  'video::mediagroup': 5,
	  'video::muted': 0,
	  'video::poster': 1,
	  'video::preload': 0,
	  'video::width': 0
	};
	html4[ 'ATTRIBS' ] = html4.ATTRIBS;
	html4.eflags = {
	  'OPTIONAL_ENDTAG': 1,
	  'EMPTY': 2,
	  'CDATA': 4,
	  'RCDATA': 8,
	  'UNSAFE': 16,
	  'FOLDABLE': 32,
	  'SCRIPT': 64,
	  'STYLE': 128,
	  'VIRTUALIZED': 256
	};
	html4[ 'eflags' ] = html4.eflags;
	// these are bitmasks of the eflags above.
	html4.ELEMENTS = {
	  'a': 0,
	  'abbr': 0,
	  'acronym': 0,
	  'address': 0,
	  'applet': 272,
	  'area': 2,
	  'article': 0,
	  'aside': 0,
	  'audio': 0,
	  'b': 0,
	  'base': 274,
	  'basefont': 274,
	  'bdi': 0,
	  'bdo': 0,
	  'big': 0,
	  'blockquote': 0,
	  'body': 305,
	  'br': 2,
	  'button': 0,
	  'canvas': 0,
	  'caption': 0,
	  'center': 0,
	  'cite': 0,
	  'code': 0,
	  'col': 2,
	  'colgroup': 1,
	  'command': 2,
	  'data': 0,
	  'datalist': 0,
	  'dd': 1,
	  'del': 0,
	  'details': 0,
	  'dfn': 0,
	  'dialog': 272,
	  'dir': 0,
	  'div': 0,
	  'dl': 0,
	  'dt': 1,
	  'em': 0,
	  'fieldset': 0,
	  'figcaption': 0,
	  'figure': 0,
	  'font': 0,
	  'footer': 0,
	  'form': 0,
	  'frame': 274,
	  'frameset': 272,
	  'h1': 0,
	  'h2': 0,
	  'h3': 0,
	  'h4': 0,
	  'h5': 0,
	  'h6': 0,
	  'head': 305,
	  'header': 0,
	  'hgroup': 0,
	  'hr': 2,
	  'html': 305,
	  'i': 0,
	  'iframe': 16,
	  'img': 2,
	  'input': 2,
	  'ins': 0,
	  'isindex': 274,
	  'kbd': 0,
	  'keygen': 274,
	  'label': 0,
	  'legend': 0,
	  'li': 1,
	  'link': 274,
	  'map': 0,
	  'mark': 0,
	  'menu': 0,
	  'meta': 274,
	  'meter': 0,
	  'nav': 0,
	  'nobr': 0,
	  'noembed': 276,
	  'noframes': 276,
	  'noscript': 276,
	  'object': 272,
	  'ol': 0,
	  'optgroup': 0,
	  'option': 1,
	  'output': 0,
	  'p': 1,
	  'param': 274,
	  'pre': 0,
	  'progress': 0,
	  'q': 0,
	  's': 0,
	  'samp': 0,
	  'script': 84,
	  'section': 0,
	  'select': 0,
	  'small': 0,
	  'source': 2,
	  'span': 0,
	  'strike': 0,
	  'strong': 0,
	  'style': 148,
	  'sub': 0,
	  'summary': 0,
	  'sup': 0,
	  'table': 0,
	  'tbody': 1,
	  'td': 1,
	  'textarea': 8,
	  'tfoot': 1,
	  'th': 1,
	  'thead': 1,
	  'time': 0,
	  'title': 280,
	  'tr': 1,
	  'track': 2,
	  'tt': 0,
	  'u': 0,
	  'ul': 0,
	  'var': 0,
	  'video': 0,
	  'wbr': 2
	};
	html4[ 'ELEMENTS' ] = html4.ELEMENTS;
	html4.ELEMENT_DOM_INTERFACES = {
	  'a': 'HTMLAnchorElement',
	  'abbr': 'HTMLElement',
	  'acronym': 'HTMLElement',
	  'address': 'HTMLElement',
	  'applet': 'HTMLAppletElement',
	  'area': 'HTMLAreaElement',
	  'article': 'HTMLElement',
	  'aside': 'HTMLElement',
	  'audio': 'HTMLAudioElement',
	  'b': 'HTMLElement',
	  'base': 'HTMLBaseElement',
	  'basefont': 'HTMLBaseFontElement',
	  'bdi': 'HTMLElement',
	  'bdo': 'HTMLElement',
	  'big': 'HTMLElement',
	  'blockquote': 'HTMLQuoteElement',
	  'body': 'HTMLBodyElement',
	  'br': 'HTMLBRElement',
	  'button': 'HTMLButtonElement',
	  'canvas': 'HTMLCanvasElement',
	  'caption': 'HTMLTableCaptionElement',
	  'center': 'HTMLElement',
	  'cite': 'HTMLElement',
	  'code': 'HTMLElement',
	  'col': 'HTMLTableColElement',
	  'colgroup': 'HTMLTableColElement',
	  'command': 'HTMLCommandElement',
	  'data': 'HTMLElement',
	  'datalist': 'HTMLDataListElement',
	  'dd': 'HTMLElement',
	  'del': 'HTMLModElement',
	  'details': 'HTMLDetailsElement',
	  'dfn': 'HTMLElement',
	  'dialog': 'HTMLDialogElement',
	  'dir': 'HTMLDirectoryElement',
	  'div': 'HTMLDivElement',
	  'dl': 'HTMLDListElement',
	  'dt': 'HTMLElement',
	  'em': 'HTMLElement',
	  'fieldset': 'HTMLFieldSetElement',
	  'figcaption': 'HTMLElement',
	  'figure': 'HTMLElement',
	  'font': 'HTMLFontElement',
	  'footer': 'HTMLElement',
	  'form': 'HTMLFormElement',
	  'frame': 'HTMLFrameElement',
	  'frameset': 'HTMLFrameSetElement',
	  'h1': 'HTMLHeadingElement',
	  'h2': 'HTMLHeadingElement',
	  'h3': 'HTMLHeadingElement',
	  'h4': 'HTMLHeadingElement',
	  'h5': 'HTMLHeadingElement',
	  'h6': 'HTMLHeadingElement',
	  'head': 'HTMLHeadElement',
	  'header': 'HTMLElement',
	  'hgroup': 'HTMLElement',
	  'hr': 'HTMLHRElement',
	  'html': 'HTMLHtmlElement',
	  'i': 'HTMLElement',
	  'iframe': 'HTMLIFrameElement',
	  'img': 'HTMLImageElement',
	  'input': 'HTMLInputElement',
	  'ins': 'HTMLModElement',
	  'isindex': 'HTMLUnknownElement',
	  'kbd': 'HTMLElement',
	  'keygen': 'HTMLKeygenElement',
	  'label': 'HTMLLabelElement',
	  'legend': 'HTMLLegendElement',
	  'li': 'HTMLLIElement',
	  'link': 'HTMLLinkElement',
	  'map': 'HTMLMapElement',
	  'mark': 'HTMLElement',
	  'menu': 'HTMLMenuElement',
	  'meta': 'HTMLMetaElement',
	  'meter': 'HTMLMeterElement',
	  'nav': 'HTMLElement',
	  'nobr': 'HTMLElement',
	  'noembed': 'HTMLElement',
	  'noframes': 'HTMLElement',
	  'noscript': 'HTMLElement',
	  'object': 'HTMLObjectElement',
	  'ol': 'HTMLOListElement',
	  'optgroup': 'HTMLOptGroupElement',
	  'option': 'HTMLOptionElement',
	  'output': 'HTMLOutputElement',
	  'p': 'HTMLParagraphElement',
	  'param': 'HTMLParamElement',
	  'pre': 'HTMLPreElement',
	  'progress': 'HTMLProgressElement',
	  'q': 'HTMLQuoteElement',
	  's': 'HTMLElement',
	  'samp': 'HTMLElement',
	  'script': 'HTMLScriptElement',
	  'section': 'HTMLElement',
	  'select': 'HTMLSelectElement',
	  'small': 'HTMLElement',
	  'source': 'HTMLSourceElement',
	  'span': 'HTMLSpanElement',
	  'strike': 'HTMLElement',
	  'strong': 'HTMLElement',
	  'style': 'HTMLStyleElement',
	  'sub': 'HTMLElement',
	  'summary': 'HTMLElement',
	  'sup': 'HTMLElement',
	  'table': 'HTMLTableElement',
	  'tbody': 'HTMLTableSectionElement',
	  'td': 'HTMLTableDataCellElement',
	  'textarea': 'HTMLTextAreaElement',
	  'tfoot': 'HTMLTableSectionElement',
	  'th': 'HTMLTableHeaderCellElement',
	  'thead': 'HTMLTableSectionElement',
	  'time': 'HTMLTimeElement',
	  'title': 'HTMLTitleElement',
	  'tr': 'HTMLTableRowElement',
	  'track': 'HTMLTrackElement',
	  'tt': 'HTMLElement',
	  'u': 'HTMLElement',
	  'ul': 'HTMLUListElement',
	  'var': 'HTMLElement',
	  'video': 'HTMLVideoElement',
	  'wbr': 'HTMLElement'
	};
	html4[ 'ELEMENT_DOM_INTERFACES' ] = html4.ELEMENT_DOM_INTERFACES;
	html4.ueffects = {
	  'NOT_LOADED': 0,
	  'SAME_DOCUMENT': 1,
	  'NEW_DOCUMENT': 2
	};
	html4[ 'ueffects' ] = html4.ueffects;
	html4.URIEFFECTS = {
	  'a::href': 2,
	  'area::href': 2,
	  'blockquote::cite': 0,
	  'command::icon': 1,
	  'del::cite': 0,
	  'form::action': 2,
	  'img::src': 1,
	  'input::src': 1,
	  'ins::cite': 0,
	  'q::cite': 0,
	  'video::poster': 1
	};
	html4[ 'URIEFFECTS' ] = html4.URIEFFECTS;
	html4.ltypes = {
	  'UNSANDBOXED': 2,
	  'SANDBOXED': 1,
	  'DATA': 0
	};
	html4[ 'ltypes' ] = html4.ltypes;
	html4.LOADERTYPES = {
	  'a::href': 2,
	  'area::href': 2,
	  'blockquote::cite': 2,
	  'command::icon': 1,
	  'del::cite': 2,
	  'form::action': 2,
	  'img::src': 1,
	  'input::src': 1,
	  'ins::cite': 2,
	  'q::cite': 2,
	  'video::poster': 1
	};
	html4[ 'LOADERTYPES' ] = html4.LOADERTYPES;

	// Copyright (C) 2006 Google Inc.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.

	/**
	 * @fileoverview
	 * An HTML sanitizer that can satisfy a variety of security policies.
	 *
	 * <p>
	 * The HTML sanitizer is built around a SAX parser and HTML element and
	 * attributes schemas.
	 *
	 * If the cssparser is loaded, inline styles are sanitized using the
	 * css property and value schemas.  Else they are remove during
	 * sanitization.
	 *
	 * If it exists, uses parseCssDeclarations, sanitizeCssProperty,  cssSchema
	 *
	 * @author mikesamuel@gmail.com
	 * @author jasvir@gmail.com
	 * \@requires html4, URI
	 * \@overrides window
	 * \@provides html, html_sanitize
	 */

	// The Turkish i seems to be a non-issue, but abort in case it is.
	if ('I'.toLowerCase() !== 'i') { throw 'I/i problem'; }

	/**
	 * \@namespace
	 */
	var html = (function(html4) {

	  // For closure compiler
	  var parseCssDeclarations, sanitizeCssProperty, cssSchema;
	  if ('undefined' !== typeof window) {
	    parseCssDeclarations = window['parseCssDeclarations'];
	    sanitizeCssProperty = window['sanitizeCssProperty'];
	    cssSchema = window['cssSchema'];
	  }

	  // The keys of this object must be 'quoted' or JSCompiler will mangle them!
	  // This is a partial list -- lookupEntity() uses the host browser's parser
	  // (when available) to implement full entity lookup.
	  // Note that entities are in general case-sensitive; the uppercase ones are
	  // explicitly defined by HTML5 (presumably as compatibility).
	  var ENTITIES = {
	    'lt': '<',
	    'LT': '<',
	    'gt': '>',
	    'GT': '>',
	    'amp': '&',
	    'AMP': '&',
	    'quot': '"',
	    'apos': '\'',
	    'nbsp': '\240'
	  };

	  // Patterns for types of entity/character reference names.
	  var decimalEscapeRe = /^#(\d+)$/;
	  var hexEscapeRe = /^#x([0-9A-Fa-f]+)$/;
	  // contains every entity per http://www.w3.org/TR/2011/WD-html5-20110113/named-character-references.html
	  var safeEntityNameRe = /^[A-Za-z][A-za-z0-9]+$/;
	  // Used as a hook to invoke the browser's entity parsing. <textarea> is used
	  // because its content is parsed for entities but not tags.
	  // TODO(kpreid): This retrieval is a kludge and leads to silent loss of
	  // functionality if the document isn't available.
	  var entityLookupElement =
	      ('undefined' !== typeof window && window['document'])
	          ? window['document'].createElement('textarea') : null;
	  /**
	   * Decodes an HTML entity.
	   *
	   * {\@updoc
	   * $ lookupEntity('lt')
	   * # '<'
	   * $ lookupEntity('GT')
	   * # '>'
	   * $ lookupEntity('amp')
	   * # '&'
	   * $ lookupEntity('nbsp')
	   * # '\xA0'
	   * $ lookupEntity('apos')
	   * # "'"
	   * $ lookupEntity('quot')
	   * # '"'
	   * $ lookupEntity('#xa')
	   * # '\n'
	   * $ lookupEntity('#10')
	   * # '\n'
	   * $ lookupEntity('#x0a')
	   * # '\n'
	   * $ lookupEntity('#010')
	   * # '\n'
	   * $ lookupEntity('#x00A')
	   * # '\n'
	   * $ lookupEntity('Pi')      // Known failure
	   * # '\u03A0'
	   * $ lookupEntity('pi')      // Known failure
	   * # '\u03C0'
	   * }
	   *
	   * @param {string} name the content between the '&' and the ';'.
	   * @return {string} a single unicode code-point as a string.
	   */
	  function lookupEntity(name) {
	    // TODO: entity lookup as specified by HTML5 actually depends on the
	    // presence of the ";".
	    if (ENTITIES.hasOwnProperty(name)) { return ENTITIES[name]; }
	    var m = name.match(decimalEscapeRe);
	    if (m) {
	      return String.fromCharCode(parseInt(m[1], 10));
	    } else if (!!(m = name.match(hexEscapeRe))) {
	      return String.fromCharCode(parseInt(m[1], 16));
	    } else if (entityLookupElement && safeEntityNameRe.test(name)) {
	      entityLookupElement.innerHTML = '&' + name + ';';
	      var text = entityLookupElement.textContent;
	      ENTITIES[name] = text;
	      return text;
	    } else {
	      return '&' + name + ';';
	    }
	  }

	  function decodeOneEntity(_, name) {
	    return lookupEntity(name);
	  }

	  var nulRe = /\0/g;
	  function stripNULs(s) {
	    return s.replace(nulRe, '');
	  }

	  var ENTITY_RE_1 = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g;
	  var ENTITY_RE_2 = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/;
	  /**
	   * The plain text of a chunk of HTML CDATA which possibly containing.
	   *
	   * {\@updoc
	   * $ unescapeEntities('')
	   * # ''
	   * $ unescapeEntities('hello World!')
	   * # 'hello World!'
	   * $ unescapeEntities('1 &lt; 2 &amp;&AMP; 4 &gt; 3&#10;')
	   * # '1 < 2 && 4 > 3\n'
	   * $ unescapeEntities('&lt;&lt <- unfinished entity&gt;')
	   * # '<&lt <- unfinished entity>'
	   * $ unescapeEntities('/foo?bar=baz&copy=true')  // & often unescaped in URLS
	   * # '/foo?bar=baz&copy=true'
	   * $ unescapeEntities('pi=&pi;&#x3c0;, Pi=&Pi;\u03A0') // FIXME: known failure
	   * # 'pi=\u03C0\u03c0, Pi=\u03A0\u03A0'
	   * }
	   *
	   * @param {string} s a chunk of HTML CDATA.  It must not start or end inside
	   *     an HTML entity.
	   */
	  function unescapeEntities(s) {
	    return s.replace(ENTITY_RE_1, decodeOneEntity);
	  }

	  var ampRe = /&/g;
	  var looseAmpRe = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi;
	  var ltRe = /[<]/g;
	  var gtRe = />/g;
	  var quotRe = /\"/g;

	  /**
	   * Escapes HTML special characters in attribute values.
	   *
	   * {\@updoc
	   * $ escapeAttrib('')
	   * # ''
	   * $ escapeAttrib('"<<&==&>>"')  // Do not just escape the first occurrence.
	   * # '&#34;&lt;&lt;&amp;&#61;&#61;&amp;&gt;&gt;&#34;'
	   * $ escapeAttrib('Hello <World>!')
	   * # 'Hello &lt;World&gt;!'
	   * }
	   */
	  function escapeAttrib(s) {
	    return ('' + s).replace(ampRe, '&amp;').replace(ltRe, '&lt;')
	        .replace(gtRe, '&gt;').replace(quotRe, '&#34;');
	  }

	  /**
	   * Escape entities in RCDATA that can be escaped without changing the meaning.
	   * {\@updoc
	   * $ normalizeRCData('1 < 2 &&amp; 3 > 4 &amp;& 5 &lt; 7&8')
	   * # '1 &lt; 2 &amp;&amp; 3 &gt; 4 &amp;&amp; 5 &lt; 7&amp;8'
	   * }
	   */
	  function normalizeRCData(rcdata) {
	    return rcdata
	        .replace(looseAmpRe, '&amp;$1')
	        .replace(ltRe, '&lt;')
	        .replace(gtRe, '&gt;');
	  }

	  // TODO(felix8a): validate sanitizer regexs against the HTML5 grammar at
	  // http://www.whatwg.org/specs/web-apps/current-work/multipage/syntax.html
	  // http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html
	  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html
	  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html

	  // We initially split input so that potentially meaningful characters
	  // like '<' and '>' are separate tokens, using a fast dumb process that
	  // ignores quoting.  Then we walk that token stream, and when we see a
	  // '<' that's the start of a tag, we use ATTR_RE to extract tag
	  // attributes from the next token.  That token will never have a '>'
	  // character.  However, it might have an unbalanced quote character, and
	  // when we see that, we combine additional tokens to balance the quote.

	  var ATTR_RE = new RegExp(
	    '^\\s*' +
	    '([-.:\\w]+)' +             // 1 = Attribute name
	    '(?:' + (
	      '\\s*(=)\\s*' +           // 2 = Is there a value?
	      '(' + (                   // 3 = Attribute value
	        // TODO(felix8a): maybe use backref to match quotes
	        '(\")[^\"]*(\"|$)' +    // 4, 5 = Double-quoted string
	        '|' +
	        '(\')[^\']*(\'|$)' +    // 6, 7 = Single-quoted string
	        '|' +
	        // Positive lookahead to prevent interpretation of
	        // <foo a= b=c> as <foo a='b=c'>
	        // TODO(felix8a): might be able to drop this case
	        '(?=[a-z][-\\w]*\\s*=)' +
	        '|' +
	        // Unquoted value that isn't an attribute name
	        // (since we didn't match the positive lookahead above)
	        '[^\"\'\\s]*' ) +
	      ')' ) +
	    ')?',
	    'i');

	  // false on IE<=8, true on most other browsers
	  var splitWillCapture = ('a,b'.split(/(,)/).length === 3);

	  // bitmask for tags with special parsing, like <script> and <textarea>
	  var EFLAGS_TEXT = html4.eflags['CDATA'] | html4.eflags['RCDATA'];

	  /**
	   * Given a SAX-like event handler, produce a function that feeds those
	   * events and a parameter to the event handler.
	   *
	   * The event handler has the form:{@code
	   * {
	   *   // Name is an upper-case HTML tag name.  Attribs is an array of
	   *   // alternating upper-case attribute names, and attribute values.  The
	   *   // attribs array is reused by the parser.  Param is the value passed to
	   *   // the saxParser.
	   *   startTag: function (name, attribs, param) { ... },
	   *   endTag:   function (name, param) { ... },
	   *   pcdata:   function (text, param) { ... },
	   *   rcdata:   function (text, param) { ... },
	   *   cdata:    function (text, param) { ... },
	   *   startDoc: function (param) { ... },
	   *   endDoc:   function (param) { ... }
	   * }}
	   *
	   * @param {Object} handler a record containing event handlers.
	   * @return {function(string, Object)} A function that takes a chunk of HTML
	   *     and a parameter.  The parameter is passed on to the handler methods.
	   */
	  function makeSaxParser(handler) {
	    // Accept quoted or unquoted keys (Closure compat)
	    var hcopy = {
	      cdata: handler.cdata || handler['cdata'],
	      comment: handler.comment || handler['comment'],
	      endDoc: handler.endDoc || handler['endDoc'],
	      endTag: handler.endTag || handler['endTag'],
	      pcdata: handler.pcdata || handler['pcdata'],
	      rcdata: handler.rcdata || handler['rcdata'],
	      startDoc: handler.startDoc || handler['startDoc'],
	      startTag: handler.startTag || handler['startTag']
	    };
	    return function(htmlText, param) {
	      return parse(htmlText, hcopy, param);
	    };
	  }

	  // Parsing strategy is to split input into parts that might be lexically
	  // meaningful (every ">" becomes a separate part), and then recombine
	  // parts if we discover they're in a different context.

	  // TODO(felix8a): Significant performance regressions from -legacy,
	  // tested on
	  //    Chrome 18.0
	  //    Firefox 11.0
	  //    IE 6, 7, 8, 9
	  //    Opera 11.61
	  //    Safari 5.1.3
	  // Many of these are unusual patterns that are linearly slower and still
	  // pretty fast (eg 1ms to 5ms), so not necessarily worth fixing.

	  // TODO(felix8a): "<script> && && && ... <\/script>" is slower on all
	  // browsers.  The hotspot is htmlSplit.

	  // TODO(felix8a): "<p title='>>>>...'><\/p>" is slower on all browsers.
	  // This is partly htmlSplit, but the hotspot is parseTagAndAttrs.

	  // TODO(felix8a): "<a><\/a><a><\/a>..." is slower on IE9.
	  // "<a>1<\/a><a>1<\/a>..." is faster, "<a><\/a>2<a><\/a>2..." is faster.

	  // TODO(felix8a): "<p<p<p..." is slower on IE[6-8]

	  var continuationMarker = {};
	  function parse(htmlText, handler, param) {
	    var m, p, tagName;
	    var parts = htmlSplit(htmlText);
	    var state = {
	      noMoreGT: false,
	      noMoreEndComments: false
	    };
	    parseCPS(handler, parts, 0, state, param);
	  }

	  function continuationMaker(h, parts, initial, state, param) {
	    return function () {
	      parseCPS(h, parts, initial, state, param);
	    };
	  }

	  function parseCPS(h, parts, initial, state, param) {
	    try {
	      if (h.startDoc && initial == 0) { h.startDoc(param); }
	      var m, p, tagName;
	      for (var pos = initial, end = parts.length; pos < end;) {
	        var current = parts[pos++];
	        var next = parts[pos];
	        switch (current) {
	        case '&':
	          if (ENTITY_RE_2.test(next)) {
	            if (h.pcdata) {
	              h.pcdata('&' + next, param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	            pos++;
	          } else {
	            if (h.pcdata) { h.pcdata("&amp;", param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '<\/':
	          if (m = /^([-\w:]+)[^\'\"]*/.exec(next)) {
	            if (m[0].length === next.length && parts[pos + 1] === '>') {
	              // fast case, no attribute parsing needed
	              pos += 2;
	              tagName = m[1].toLowerCase();
	              if (h.endTag) {
	                h.endTag(tagName, param, continuationMarker,
	                  continuationMaker(h, parts, pos, state, param));
	              }
	            } else {
	              // slow case, need to parse attributes
	              // TODO(felix8a): do we really care about misparsing this?
	              pos = parseEndTag(
	                parts, pos, h, param, continuationMarker, state);
	            }
	          } else {
	            if (h.pcdata) {
	              h.pcdata('&lt;/', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '<':
	          if (m = /^([-\w:]+)\s*\/?/.exec(next)) {
	            if (m[0].length === next.length && parts[pos + 1] === '>') {
	              // fast case, no attribute parsing needed
	              pos += 2;
	              tagName = m[1].toLowerCase();
	              if (h.startTag) {
	                h.startTag(tagName, [], param, continuationMarker,
	                  continuationMaker(h, parts, pos, state, param));
	              }
	              // tags like <script> and <textarea> have special parsing
	              var eflags = html4.ELEMENTS[tagName];
	              if (eflags & EFLAGS_TEXT) {
	                var tag = { name: tagName, next: pos, eflags: eflags };
	                pos = parseText(
	                  parts, tag, h, param, continuationMarker, state);
	              }
	            } else {
	              // slow case, need to parse attributes
	              pos = parseStartTag(
	                parts, pos, h, param, continuationMarker, state);
	            }
	          } else {
	            if (h.pcdata) {
	              h.pcdata('&lt;', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '<\!--':
	          // The pathological case is n copies of '<\!--' without '-->', and
	          // repeated failure to find '-->' is quadratic.  We avoid that by
	          // remembering when search for '-->' fails.
	          if (!state.noMoreEndComments) {
	            // A comment <\!--x--> is split into three tokens:
	            //   '<\!--', 'x--', '>'
	            // We want to find the next '>' token that has a preceding '--'.
	            // pos is at the 'x--'.
	            for (p = pos + 1; p < end; p++) {
	              if (parts[p] === '>' && /--$/.test(parts[p - 1])) { break; }
	            }
	            if (p < end) {
	              if (h.comment) {
	                var comment = parts.slice(pos, p).join('');
	                h.comment(
	                  comment.substr(0, comment.length - 2), param,
	                  continuationMarker,
	                  continuationMaker(h, parts, p + 1, state, param));
	              }
	              pos = p + 1;
	            } else {
	              state.noMoreEndComments = true;
	            }
	          }
	          if (state.noMoreEndComments) {
	            if (h.pcdata) {
	              h.pcdata('&lt;!--', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '<\!':
	          if (!/^\w/.test(next)) {
	            if (h.pcdata) {
	              h.pcdata('&lt;!', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          } else {
	            // similar to noMoreEndComment logic
	            if (!state.noMoreGT) {
	              for (p = pos + 1; p < end; p++) {
	                if (parts[p] === '>') { break; }
	              }
	              if (p < end) {
	                pos = p + 1;
	              } else {
	                state.noMoreGT = true;
	              }
	            }
	            if (state.noMoreGT) {
	              if (h.pcdata) {
	                h.pcdata('&lt;!', param, continuationMarker,
	                  continuationMaker(h, parts, pos, state, param));
	              }
	            }
	          }
	          break;
	        case '<?':
	          // similar to noMoreEndComment logic
	          if (!state.noMoreGT) {
	            for (p = pos + 1; p < end; p++) {
	              if (parts[p] === '>') { break; }
	            }
	            if (p < end) {
	              pos = p + 1;
	            } else {
	              state.noMoreGT = true;
	            }
	          }
	          if (state.noMoreGT) {
	            if (h.pcdata) {
	              h.pcdata('&lt;?', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '>':
	          if (h.pcdata) {
	            h.pcdata("&gt;", param, continuationMarker,
	              continuationMaker(h, parts, pos, state, param));
	          }
	          break;
	        case '':
	          break;
	        default:
	          if (h.pcdata) {
	            h.pcdata(current, param, continuationMarker,
	              continuationMaker(h, parts, pos, state, param));
	          }
	          break;
	        }
	      }
	      if (h.endDoc) { h.endDoc(param); }
	    } catch (e) {
	      if (e !== continuationMarker) { throw e; }
	    }
	  }

	  // Split str into parts for the html parser.
	  function htmlSplit(str) {
	    // can't hoist this out of the function because of the re.exec loop.
	    var re = /(<\/|<\!--|<[!?]|[&<>])/g;
	    str += '';
	    if (splitWillCapture) {
	      return str.split(re);
	    } else {
	      var parts = [];
	      var lastPos = 0;
	      var m;
	      while ((m = re.exec(str)) !== null) {
	        parts.push(str.substring(lastPos, m.index));
	        parts.push(m[0]);
	        lastPos = m.index + m[0].length;
	      }
	      parts.push(str.substring(lastPos));
	      return parts;
	    }
	  }

	  function parseEndTag(parts, pos, h, param, continuationMarker, state) {
	    var tag = parseTagAndAttrs(parts, pos);
	    // drop unclosed tags
	    if (!tag) { return parts.length; }
	    if (h.endTag) {
	      h.endTag(tag.name, param, continuationMarker,
	        continuationMaker(h, parts, pos, state, param));
	    }
	    return tag.next;
	  }

	  function parseStartTag(parts, pos, h, param, continuationMarker, state) {
	    var tag = parseTagAndAttrs(parts, pos);
	    // drop unclosed tags
	    if (!tag) { return parts.length; }
	    if (h.startTag) {
	      h.startTag(tag.name, tag.attrs, param, continuationMarker,
	        continuationMaker(h, parts, tag.next, state, param));
	    }
	    // tags like <script> and <textarea> have special parsing
	    if (tag.eflags & EFLAGS_TEXT) {
	      return parseText(parts, tag, h, param, continuationMarker, state);
	    } else {
	      return tag.next;
	    }
	  }

	  var endTagRe = {};

	  // Tags like <script> and <textarea> are flagged as CDATA or RCDATA,
	  // which means everything is text until we see the correct closing tag.
	  function parseText(parts, tag, h, param, continuationMarker, state) {
	    var end = parts.length;
	    if (!endTagRe.hasOwnProperty(tag.name)) {
	      endTagRe[tag.name] = new RegExp('^' + tag.name + '(?:[\\s\\/]|$)', 'i');
	    }
	    var re = endTagRe[tag.name];
	    var first = tag.next;
	    var p = tag.next + 1;
	    for (; p < end; p++) {
	      if (parts[p - 1] === '<\/' && re.test(parts[p])) { break; }
	    }
	    if (p < end) { p -= 1; }
	    var buf = parts.slice(first, p).join('');
	    if (tag.eflags & html4.eflags['CDATA']) {
	      if (h.cdata) {
	        h.cdata(buf, param, continuationMarker,
	          continuationMaker(h, parts, p, state, param));
	      }
	    } else if (tag.eflags & html4.eflags['RCDATA']) {
	      if (h.rcdata) {
	        h.rcdata(normalizeRCData(buf), param, continuationMarker,
	          continuationMaker(h, parts, p, state, param));
	      }
	    } else {
	      throw new Error('bug');
	    }
	    return p;
	  }

	  // at this point, parts[pos-1] is either "<" or "<\/".
	  function parseTagAndAttrs(parts, pos) {
	    var m = /^([-\w:]+)/.exec(parts[pos]);
	    var tag = {};
	    tag.name = m[1].toLowerCase();
	    tag.eflags = html4.ELEMENTS[tag.name];
	    var buf = parts[pos].substr(m[0].length);
	    // Find the next '>'.  We optimistically assume this '>' is not in a
	    // quoted context, and further down we fix things up if it turns out to
	    // be quoted.
	    var p = pos + 1;
	    var end = parts.length;
	    for (; p < end; p++) {
	      if (parts[p] === '>') { break; }
	      buf += parts[p];
	    }
	    if (end <= p) { return void 0; }
	    var attrs = [];
	    while (buf !== '') {
	      m = ATTR_RE.exec(buf);
	      if (!m) {
	        // No attribute found: skip garbage
	        buf = buf.replace(/^[\s\S][^a-z\s]*/, '');

	      } else if ((m[4] && !m[5]) || (m[6] && !m[7])) {
	        // Unterminated quote: slurp to the next unquoted '>'
	        var quote = m[4] || m[6];
	        var sawQuote = false;
	        var abuf = [buf, parts[p++]];
	        for (; p < end; p++) {
	          if (sawQuote) {
	            if (parts[p] === '>') { break; }
	          } else if (0 <= parts[p].indexOf(quote)) {
	            sawQuote = true;
	          }
	          abuf.push(parts[p]);
	        }
	        // Slurp failed: lose the garbage
	        if (end <= p) { break; }
	        // Otherwise retry attribute parsing
	        buf = abuf.join('');
	        continue;

	      } else {
	        // We have an attribute
	        var aName = m[1].toLowerCase();
	        var aValue = m[2] ? decodeValue(m[3]) : '';
	        attrs.push(aName, aValue);
	        buf = buf.substr(m[0].length);
	      }
	    }
	    tag.attrs = attrs;
	    tag.next = p + 1;
	    return tag;
	  }

	  function decodeValue(v) {
	    var q = v.charCodeAt(0);
	    if (q === 0x22 || q === 0x27) { // " or '
	      v = v.substr(1, v.length - 2);
	    }
	    return unescapeEntities(stripNULs(v));
	  }

	  /**
	   * Returns a function that strips unsafe tags and attributes from html.
	   * @param {function(string, Array.<string>): ?Array.<string>} tagPolicy
	   *     A function that takes (tagName, attribs[]), where tagName is a key in
	   *     html4.ELEMENTS and attribs is an array of alternating attribute names
	   *     and values.  It should return a record (as follows), or null to delete
	   *     the element.  It's okay for tagPolicy to modify the attribs array,
	   *     but the same array is reused, so it should not be held between calls.
	   *     Record keys:
	   *        attribs: (required) Sanitized attributes array.
	   *        tagName: Replacement tag name.
	   * @return {function(string, Array)} A function that sanitizes a string of
	   *     HTML and appends result strings to the second argument, an array.
	   */
	  function makeHtmlSanitizer(tagPolicy) {
	    var stack;
	    var ignoring;
	    var emit = function (text, out) {
	      if (!ignoring) { out.push(text); }
	    };
	    return makeSaxParser({
	      'startDoc': function(_) {
	        stack = [];
	        ignoring = false;
	      },
	      'startTag': function(tagNameOrig, attribs, out) {
	        if (ignoring) { return; }
	        if (!html4.ELEMENTS.hasOwnProperty(tagNameOrig)) { return; }
	        var eflagsOrig = html4.ELEMENTS[tagNameOrig];
	        if (eflagsOrig & html4.eflags['FOLDABLE']) {
	          return;
	        }

	        var decision = tagPolicy(tagNameOrig, attribs);
	        if (!decision) {
	          ignoring = !(eflagsOrig & html4.eflags['EMPTY']);
	          return;
	        } else if (typeof decision !== 'object') {
	          throw new Error('tagPolicy did not return object (old API?)');
	        }
	        if ('attribs' in decision) {
	          attribs = decision['attribs'];
	        } else {
	          throw new Error('tagPolicy gave no attribs');
	        }
	        var eflagsRep;
	        var tagNameRep;
	        if ('tagName' in decision) {
	          tagNameRep = decision['tagName'];
	          eflagsRep = html4.ELEMENTS[tagNameRep];
	        } else {
	          tagNameRep = tagNameOrig;
	          eflagsRep = eflagsOrig;
	        }
	        // TODO(mikesamuel): relying on tagPolicy not to insert unsafe
	        // attribute names.

	        // If this is an optional-end-tag element and either this element or its
	        // previous like sibling was rewritten, then insert a close tag to
	        // preserve structure.
	        if (eflagsOrig & html4.eflags['OPTIONAL_ENDTAG']) {
	          var onStack = stack[stack.length - 1];
	          if (onStack && onStack.orig === tagNameOrig &&
	              (onStack.rep !== tagNameRep || tagNameOrig !== tagNameRep)) {
	                out.push('<\/', onStack.rep, '>');
	          }
	        }

	        if (!(eflagsOrig & html4.eflags['EMPTY'])) {
	          stack.push({orig: tagNameOrig, rep: tagNameRep});
	        }

	        out.push('<', tagNameRep);
	        for (var i = 0, n = attribs.length; i < n; i += 2) {
	          var attribName = attribs[i],
	              value = attribs[i + 1];
	          if (value !== null && value !== void 0) {
	            out.push(' ', attribName, '="', escapeAttrib(value), '"');
	          }
	        }
	        out.push('>');

	        if ((eflagsOrig & html4.eflags['EMPTY'])
	            && !(eflagsRep & html4.eflags['EMPTY'])) {
	          // replacement is non-empty, synthesize end tag
	          out.push('<\/', tagNameRep, '>');
	        }
	      },
	      'endTag': function(tagName, out) {
	        if (ignoring) {
	          ignoring = false;
	          return;
	        }
	        if (!html4.ELEMENTS.hasOwnProperty(tagName)) { return; }
	        var eflags = html4.ELEMENTS[tagName];
	        if (!(eflags & (html4.eflags['EMPTY'] | html4.eflags['FOLDABLE']))) {
	          var index;
	          if (eflags & html4.eflags['OPTIONAL_ENDTAG']) {
	            for (index = stack.length; --index >= 0;) {
	              var stackElOrigTag = stack[index].orig;
	              if (stackElOrigTag === tagName) { break; }
	              if (!(html4.ELEMENTS[stackElOrigTag] &
	                    html4.eflags['OPTIONAL_ENDTAG'])) {
	                // Don't pop non optional end tags looking for a match.
	                return;
	              }
	            }
	          } else {
	            for (index = stack.length; --index >= 0;) {
	              if (stack[index].orig === tagName) { break; }
	            }
	          }
	          if (index < 0) { return; }  // Not opened.
	          for (var i = stack.length; --i > index;) {
	            var stackElRepTag = stack[i].rep;
	            if (!(html4.ELEMENTS[stackElRepTag] &
	                  html4.eflags['OPTIONAL_ENDTAG'])) {
	              out.push('<\/', stackElRepTag, '>');
	            }
	          }
	          if (index < stack.length) {
	            tagName = stack[index].rep;
	          }
	          stack.length = index;
	          out.push('<\/', tagName, '>');
	        }
	      },
	      'pcdata': emit,
	      'rcdata': emit,
	      'cdata': emit,
	      'endDoc': function(out) {
	        for (; stack.length; stack.length--) {
	          out.push('<\/', stack[stack.length - 1].rep, '>');
	        }
	      }
	    });
	  }

	  var ALLOWED_URI_SCHEMES = /^(?:https?|mailto|data)$/i;

	  function safeUri(uri, effect, ltype, hints, naiveUriRewriter) {
	    if (!naiveUriRewriter) { return null; }
	    try {
	      var parsed = URI.parse('' + uri);
	      if (parsed) {
	        if (!parsed.hasScheme() ||
	            ALLOWED_URI_SCHEMES.test(parsed.getScheme())) {
	          var safe = naiveUriRewriter(parsed, effect, ltype, hints);
	          return safe ? safe.toString() : null;
	        }
	      }
	    } catch (e) {
	      return null;
	    }
	    return null;
	  }

	  function log(logger, tagName, attribName, oldValue, newValue) {
	    if (!attribName) {
	      logger(tagName + " removed", {
	        change: "removed",
	        tagName: tagName
	      });
	    }
	    if (oldValue !== newValue) {
	      var changed = "changed";
	      if (oldValue && !newValue) {
	        changed = "removed";
	      } else if (!oldValue && newValue)  {
	        changed = "added";
	      }
	      logger(tagName + "." + attribName + " " + changed, {
	        change: changed,
	        tagName: tagName,
	        attribName: attribName,
	        oldValue: oldValue,
	        newValue: newValue
	      });
	    }
	  }

	  function lookupAttribute(map, tagName, attribName) {
	    var attribKey;
	    attribKey = tagName + '::' + attribName;
	    if (map.hasOwnProperty(attribKey)) {
	      return map[attribKey];
	    }
	    attribKey = '*::' + attribName;
	    if (map.hasOwnProperty(attribKey)) {
	      return map[attribKey];
	    }
	    return void 0;
	  }
	  function getAttributeType(tagName, attribName) {
	    return lookupAttribute(html4.ATTRIBS, tagName, attribName);
	  }
	  function getLoaderType(tagName, attribName) {
	    return lookupAttribute(html4.LOADERTYPES, tagName, attribName);
	  }
	  function getUriEffect(tagName, attribName) {
	    return lookupAttribute(html4.URIEFFECTS, tagName, attribName);
	  }

	  /**
	   * Sanitizes attributes on an HTML tag.
	   * @param {string} tagName An HTML tag name in lowercase.
	   * @param {Array.<?string>} attribs An array of alternating names and values.
	   * @param {?function(?string): ?string} opt_naiveUriRewriter A transform to
	   *     apply to URI attributes; it can return a new string value, or null to
	   *     delete the attribute.  If unspecified, URI attributes are deleted.
	   * @param {function(?string): ?string} opt_nmTokenPolicy A transform to apply
	   *     to attributes containing HTML names, element IDs, and space-separated
	   *     lists of classes; it can return a new string value, or null to delete
	   *     the attribute.  If unspecified, these attributes are kept unchanged.
	   * @return {Array.<?string>} The sanitized attributes as a list of alternating
	   *     names and values, where a null value means to omit the attribute.
	   */
	  function sanitizeAttribs(tagName, attribs,
	    opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger) {
	    // TODO(felix8a): it's obnoxious that domado duplicates much of this
	    // TODO(felix8a): maybe consistently enforce constraints like target=
	    for (var i = 0; i < attribs.length; i += 2) {
	      var attribName = attribs[i];
	      var value = attribs[i + 1];
	      var oldValue = value;
	      var atype = null, attribKey;
	      if ((attribKey = tagName + '::' + attribName,
	           html4.ATTRIBS.hasOwnProperty(attribKey)) ||
	          (attribKey = '*::' + attribName,
	           html4.ATTRIBS.hasOwnProperty(attribKey))) {
	        atype = html4.ATTRIBS[attribKey];
	      }
	      if (atype !== null) {
	        switch (atype) {
	          case html4.atype['NONE']: break;
	          case html4.atype['SCRIPT']:
	            value = null;
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          case html4.atype['STYLE']:
	            if ('undefined' === typeof parseCssDeclarations) {
	              value = null;
	              if (opt_logger) {
	                log(opt_logger, tagName, attribName, oldValue, value);
		      }
	              break;
	            }
	            var sanitizedDeclarations = [];
	            parseCssDeclarations(
	                value,
	                {
	                  declaration: function (property, tokens) {
	                    var normProp = property.toLowerCase();
	                    var schema = cssSchema[normProp];
	                    if (!schema) {
	                      return;
	                    }
	                    sanitizeCssProperty(
	                        normProp, schema, tokens,
	                        opt_naiveUriRewriter
	                        ? function (url) {
	                            return safeUri(
	                                url, html4.ueffects.SAME_DOCUMENT,
	                                html4.ltypes.SANDBOXED,
	                                {
	                                  "TYPE": "CSS",
	                                  "CSS_PROP": normProp
	                                }, opt_naiveUriRewriter);
	                          }
	                        : null);
	                    sanitizedDeclarations.push(property + ': ' + tokens.join(' '));
	                  }
	                });
	            value = sanitizedDeclarations.length > 0 ?
	              sanitizedDeclarations.join(' ; ') : null;
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          case html4.atype['ID']:
	          case html4.atype['IDREF']:
	          case html4.atype['IDREFS']:
	          case html4.atype['GLOBAL_NAME']:
	          case html4.atype['LOCAL_NAME']:
	          case html4.atype['CLASSES']:
	            value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          case html4.atype['URI']:
	            value = safeUri(value,
	              getUriEffect(tagName, attribName),
	              getLoaderType(tagName, attribName),
	              {
	                "TYPE": "MARKUP",
	                "XML_ATTR": attribName,
	                "XML_TAG": tagName
	              }, opt_naiveUriRewriter);
	              if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          case html4.atype['URI_FRAGMENT']:
	            if (value && '#' === value.charAt(0)) {
	              value = value.substring(1);  // remove the leading '#'
	              value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
	              if (value !== null && value !== void 0) {
	                value = '#' + value;  // restore the leading '#'
	              }
	            } else {
	              value = null;
	            }
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          default:
	            value = null;
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	        }
	      } else {
	        value = null;
	        if (opt_logger) {
	          log(opt_logger, tagName, attribName, oldValue, value);
	        }
	      }
	      attribs[i + 1] = value;
	    }
	    return attribs;
	  }

	  /**
	   * Creates a tag policy that omits all tags marked UNSAFE in html4-defs.js
	   * and applies the default attribute sanitizer with the supplied policy for
	   * URI attributes and NMTOKEN attributes.
	   * @param {?function(?string): ?string} opt_naiveUriRewriter A transform to
	   *     apply to URI attributes.  If not given, URI attributes are deleted.
	   * @param {function(?string): ?string} opt_nmTokenPolicy A transform to apply
	   *     to attributes containing HTML names, element IDs, and space-separated
	   *     lists of classes.  If not given, such attributes are left unchanged.
	   * @return {function(string, Array.<?string>)} A tagPolicy suitable for
	   *     passing to html.sanitize.
	   */
	  function makeTagPolicy(
	    opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger) {
	    return function(tagName, attribs) {
	      if (!(html4.ELEMENTS[tagName] & html4.eflags['UNSAFE'])) {
	        return {
	          'attribs': sanitizeAttribs(tagName, attribs,
	            opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger)
	        };
	      } else {
	        if (opt_logger) {
	          log(opt_logger, tagName, undefined, undefined, undefined);
	        }
	      }
	    };
	  }

	  /**
	   * Sanitizes HTML tags and attributes according to a given policy.
	   * @param {string} inputHtml The HTML to sanitize.
	   * @param {function(string, Array.<?string>)} tagPolicy A function that
	   *     decides which tags to accept and sanitizes their attributes (see
	   *     makeHtmlSanitizer above for details).
	   * @return {string} The sanitized HTML.
	   */
	  function sanitizeWithPolicy(inputHtml, tagPolicy) {
	    var outputArray = [];
	    makeHtmlSanitizer(tagPolicy)(inputHtml, outputArray);
	    return outputArray.join('');
	  }

	  /**
	   * Strips unsafe tags and attributes from HTML.
	   * @param {string} inputHtml The HTML to sanitize.
	   * @param {?function(?string): ?string} opt_naiveUriRewriter A transform to
	   *     apply to URI attributes.  If not given, URI attributes are deleted.
	   * @param {function(?string): ?string} opt_nmTokenPolicy A transform to apply
	   *     to attributes containing HTML names, element IDs, and space-separated
	   *     lists of classes.  If not given, such attributes are left unchanged.
	   */
	  function sanitize(inputHtml,
	    opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger) {
	    var tagPolicy = makeTagPolicy(
	      opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger);
	    return sanitizeWithPolicy(inputHtml, tagPolicy);
	  }

	  // Export both quoted and unquoted names for Closure linkage.
	  var html = {};
	  html.escapeAttrib = html['escapeAttrib'] = escapeAttrib;
	  html.makeHtmlSanitizer = html['makeHtmlSanitizer'] = makeHtmlSanitizer;
	  html.makeSaxParser = html['makeSaxParser'] = makeSaxParser;
	  html.makeTagPolicy = html['makeTagPolicy'] = makeTagPolicy;
	  html.normalizeRCData = html['normalizeRCData'] = normalizeRCData;
	  html.sanitize = html['sanitize'] = sanitize;
	  html.sanitizeAttribs = html['sanitizeAttribs'] = sanitizeAttribs;
	  html.sanitizeWithPolicy = html['sanitizeWithPolicy'] = sanitizeWithPolicy;
	  html.unescapeEntities = html['unescapeEntities'] = unescapeEntities;
	  return html;
	})(html4);

	var html_sanitize = html['sanitize'];

	// Loosen restrictions of Caja's
	// html-sanitizer to allow for styling
	html4.ATTRIBS['*::style'] = 0;
	html4.ELEMENTS['style'] = 0;
	html4.ATTRIBS['a::target'] = 0;
	html4.ELEMENTS['video'] = 0;
	html4.ATTRIBS['video::src'] = 0;
	html4.ATTRIBS['video::poster'] = 0;
	html4.ATTRIBS['video::controls'] = 0;
	html4.ELEMENTS['audio'] = 0;
	html4.ATTRIBS['audio::src'] = 0;
	html4.ATTRIBS['video::autoplay'] = 0;
	html4.ATTRIBS['video::controls'] = 0;

	if (true) {
	    module.exports = html_sanitize;
	}


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(90),
	    format_url = __webpack_require__(91),
	    request = __webpack_require__(95),
	    marker = __webpack_require__(102),
	    simplestyle = __webpack_require__(103);

	// # featureLayer
	//
	// A layer of features, loaded from Mapbox or else. Adds the ability
	// to reset features, filter them, and load them from a GeoJSON URL.
	var FeatureLayer = L.FeatureGroup.extend({
	    options: {
	        filter: function() { return true; },
	        sanitizer: __webpack_require__(99),
	        style: simplestyle.style,
	        popupOptions: { closeButton: false }
	    },

	    initialize: function(_, options) {
	        L.setOptions(this, options);

	        this._layers = {};

	        if (typeof _ === 'string') {
	            util.idUrl(_, this);
	        // javascript object of TileJSON data
	        } else if (_ && typeof _ === 'object') {
	            this.setGeoJSON(_);
	        }
	    },

	    setGeoJSON: function(_) {
	        this._geojson = _;
	        this.clearLayers();
	        this._initialize(_);
	        return this;
	    },

	    getGeoJSON: function() {
	        return this._geojson;
	    },

	    loadURL: function(url) {
	        if (this._request && 'abort' in this._request) this._request.abort();
	        this._request = request(url, L.bind(function(err, json) {
	            this._request = null;
	            if (err && err.type !== 'abort') {
	                util.log('could not load features at ' + url);
	                this.fire('error', {error: err});
	            } else if (json) {
	                this.setGeoJSON(json);
	                this.fire('ready');
	            }
	        }, this));
	        return this;
	    },

	    loadID: function(id) {
	        return this.loadURL(format_url('/v4/' + id + '/features.json', this.options.accessToken));
	    },

	    setFilter: function(_) {
	        this.options.filter = _;
	        if (this._geojson) {
	            this.clearLayers();
	            this._initialize(this._geojson);
	        }
	        return this;
	    },

	    getFilter: function() {
	        return this.options.filter;
	    },

	    _initialize: function(json) {
	        var features = L.Util.isArray(json) ? json : json.features,
	            i, len;

	        if (features) {
	            for (i = 0, len = features.length; i < len; i++) {
	                // Only add this if geometry or geometries are set and not null
	                if (features[i].geometries || features[i].geometry || features[i].features) {
	                    this._initialize(features[i]);
	                }
	            }
	        } else if (this.options.filter(json)) {

	            var opts = {accessToken: this.options.accessToken},
	                pointToLayer = this.options.pointToLayer || function(feature, latlon) {
	                  return marker.style(feature, latlon, opts);
	                },
	                layer = L.GeoJSON.geometryToLayer(json, pointToLayer),
	                popupHtml = marker.createPopup(json, this.options.sanitizer),
	                style = this.options.style,
	                defaultStyle = style === simplestyle.style;

	            if (style && 'setStyle' in layer &&
	                // if the style method is the simplestyle default, then
	                // never style L.Circle or L.CircleMarker because
	                // simplestyle has no rules over them, only over geometry
	                // primitives directly from GeoJSON
	                (!(defaultStyle && (layer instanceof L.Circle ||
	                  layer instanceof L.CircleMarker)))) {
	                if (typeof style === 'function') {
	                    style = style(json);
	                }
	                layer.setStyle(style);
	            }

	            layer.feature = json;

	            if (popupHtml) {
	                layer.bindPopup(popupHtml, this.options.popupOptions);
	            }

	            this.addLayer(layer);
	        }
	    }
	});

	module.exports.FeatureLayer = FeatureLayer;

	module.exports.featureLayer = function(_, options) {
	    return new FeatureLayer(_, options);
	};


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var format_url = __webpack_require__(91),
	    util = __webpack_require__(90),
	    sanitize = __webpack_require__(99);

	// mapbox-related markers functionality
	// provide an icon from mapbox's simple-style spec and hosted markers
	// service
	function icon(fp, options) {
	    fp = fp || {};

	    var sizes = {
	            small: [20, 50],
	            medium: [30, 70],
	            large: [35, 90]
	        },
	        size = fp['marker-size'] || 'medium',
	        symbol = ('marker-symbol' in fp && fp['marker-symbol'] !== '') ? '-' + fp['marker-symbol'] : '',
	        color = (fp['marker-color'] || '7e7e7e').replace('#', '');

	    return L.icon({
	        iconUrl: format_url('/v4/marker/' +
	            'pin-' + size.charAt(0) + symbol + '+' + color +
	            // detect and use retina markers, which are x2 resolution
	            (L.Browser.retina ? '@2x' : '') + '.png', options && options.accessToken),
	        iconSize: sizes[size],
	        iconAnchor: [sizes[size][0] / 2, sizes[size][1] / 2],
	        popupAnchor: [0, -sizes[size][1] / 2]
	    });
	}

	// a factory that provides markers for Leaflet from Mapbox's
	// [simple-style specification](https://github.com/mapbox/simplestyle-spec)
	// and [Markers API](http://mapbox.com/developers/api/#markers).
	function style(f, latlon, options) {
	    return L.marker(latlon, {
	        icon: icon(f.properties, options),
	        title: util.strip_tags(
	            sanitize((f.properties && f.properties.title) || ''))
	    });
	}

	// Sanitize and format properties of a GeoJSON Feature object in order
	// to form the HTML string used as the argument for `L.createPopup`
	function createPopup(f, sanitizer) {
	    if (!f || !f.properties) return '';
	    var popup = '';

	    if (f.properties.title) {
	        popup += '<div class="marker-title">' + f.properties.title + '</div>';
	    }

	    if (f.properties.description) {
	        popup += '<div class="marker-description">' + f.properties.description + '</div>';
	    }

	    return (sanitizer || sanitize)(popup);
	}

	module.exports = {
	    icon: icon,
	    style: style,
	    createPopup: createPopup
	};


/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';

	// an implementation of the simplestyle spec for polygon and linestring features
	// https://github.com/mapbox/simplestyle-spec
	var defaults = {
	    stroke: '#555555',
	    'stroke-width': 2,
	    'stroke-opacity': 1,
	    fill: '#555555',
	    'fill-opacity': 0.5
	};

	var mapping = [
	    ['stroke', 'color'],
	    ['stroke-width', 'weight'],
	    ['stroke-opacity', 'opacity'],
	    ['fill', 'fillColor'],
	    ['fill-opacity', 'fillOpacity']
	];

	function fallback(a, b) {
	    var c = {};
	    for (var k in b) {
	        if (a[k] === undefined) c[k] = b[k];
	        else c[k] = a[k];
	    }
	    return c;
	}

	function remap(a) {
	    var d = {};
	    for (var i = 0; i < mapping.length; i++) {
	        d[mapping[i][1]] = a[mapping[i][0]];
	    }
	    return d;
	}

	function style(feature) {
	    return remap(fallback(feature.properties || {}, defaults));
	}

	module.exports = {
	    style: style,
	    defaults: defaults
	};


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LegendControl = L.Control.extend({

	    options: {
	        position: 'bottomright',
	        sanitizer: __webpack_require__(99)
	    },

	    initialize: function(options) {
	        L.setOptions(this, options);
	        this._legends = {};
	    },

	    onAdd: function() {
	        this._container = L.DomUtil.create('div', 'map-legends wax-legends');
	        L.DomEvent.disableClickPropagation(this._container);

	        this._update();

	        return this._container;
	    },

	    addLegend: function(text) {
	        if (!text) { return this; }

	        if (!this._legends[text]) {
	            this._legends[text] = 0;
	        }

	        this._legends[text]++;
	        return this._update();
	    },

	    removeLegend: function(text) {
	        if (!text) { return this; }
	        if (this._legends[text]) this._legends[text]--;
	        return this._update();
	    },

	    _update: function() {
	        if (!this._map) { return this; }

	        this._container.innerHTML = '';
	        var hide = 'none';

	        for (var i in this._legends) {
	            if (this._legends.hasOwnProperty(i) && this._legends[i]) {
	                var div = L.DomUtil.create('div', 'map-legend wax-legend', this._container);
	                div.innerHTML = this.options.sanitizer(i);
	                hide = 'block';
	            }
	        }

	        // hide the control entirely unless there is at least one legend;
	        // otherwise there will be a small grey blemish on the map.
	        this._container.style.display = hide;

	        return this;
	    }
	});

	module.exports.LegendControl = LegendControl;

	module.exports.legendControl = function(options) {
	    return new LegendControl(options);
	};


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var format_url = __webpack_require__(91);

	var ShareControl = L.Control.extend({
	    includes: [__webpack_require__(106)],

	    options: {
	        position: 'topleft',
	        url: ''
	    },

	    initialize: function(_, options) {
	        L.setOptions(this, options);
	        this._loadTileJSON(_);
	    },

	    _setTileJSON: function(json) {
	        this._tilejson = json;
	    },

	    onAdd: function(map) {
	        this._map = map;

	        var container = L.DomUtil.create('div', 'leaflet-control-mapbox-share leaflet-bar');
	        var link = L.DomUtil.create('a', 'mapbox-share mapbox-icon mapbox-icon-share', container);
	        link.href = '#';

	        this._modal = L.DomUtil.create('div', 'mapbox-modal', this._map._container);
	        this._mask = L.DomUtil.create('div', 'mapbox-modal-mask', this._modal);
	        this._content = L.DomUtil.create('div', 'mapbox-modal-content', this._modal);

	        L.DomEvent.addListener(link, 'click', this._shareClick, this);
	        L.DomEvent.disableClickPropagation(container);

	        this._map.on('mousedown', this._clickOut, this);

	        return container;
	    },

	    _clickOut: function(e) {
	        if (this._sharing) {
	            L.DomEvent.preventDefault(e);
	            L.DomUtil.removeClass(this._modal, 'active');
	            this._content.innerHTML = '';
	            this._sharing = null;
	            return;
	        }
	    },

	    _shareClick: function(e) {
	        L.DomEvent.stop(e);
	        if (this._sharing) return this._clickOut(e);

	        var tilejson = this._tilejson || this._map._tilejson || {},
	            url = encodeURIComponent(this.options.url || tilejson.webpage || window.location),
	            name = encodeURIComponent(tilejson.name),
	            image = format_url('/v4/' + tilejson.id + '/' + this._map.getCenter().lng + ',' + this._map.getCenter().lat + ',' + this._map.getZoom() + '/600x600.png', this.options.accessToken),
	            embed = format_url('/v4/' + tilejson.id + '.html', this.options.accessToken),
	            twitter = '//twitter.com/intent/tweet?status=' + name + ' ' + url,
	            facebook = '//www.facebook.com/sharer.php?u=' + url + '&t=' + encodeURIComponent(tilejson.name),
	            pinterest = '//www.pinterest.com/pin/create/button/?url=' + url + '&media=' + image + '&description=' + tilejson.name,
	            share = ('<h3>Share this map</h3>' +
	                    '<div class="mapbox-share-buttons"><a class="mapbox-button mapbox-button-icon mapbox-icon-facebook" target="_blank" href="{{facebook}}">Facebook</a>' +
	                    '<a class="mapbox-button mapbox-button-icon mapbox-icon-twitter" target="_blank" href="{{twitter}}">Twitter</a>' +
	                    '<a class="mapbox-button mapbox-button-icon mapbox-icon-pinterest" target="_blank" href="{{pinterest}}">Pinterest</a></div>')
	                    .replace('{{twitter}}', twitter)
	                    .replace('{{facebook}}', facebook)
	                    .replace('{{pinterest}}', pinterest),
	            embedValue = '<iframe width="100%" height="500px" frameBorder="0" src="{{embed}}"></iframe>'.replace('{{embed}}', embed),
	            embedLabel = 'Copy and paste this <strong>HTML code</strong> into documents to embed this map on web pages.';

	        L.DomUtil.addClass(this._modal, 'active');

	        this._sharing = L.DomUtil.create('div', 'mapbox-modal-body', this._content);
	        this._sharing.innerHTML = share;

	        var input = L.DomUtil.create('input', 'mapbox-embed', this._sharing);
	        input.type = 'text';
	        input.value = embedValue;

	        var label = L.DomUtil.create('label', 'mapbox-embed-description', this._sharing);
	        label.innerHTML = embedLabel;

	        var close = L.DomUtil.create('a', 'leaflet-popup-close-button', this._sharing);
	        close.href = '#';

	        L.DomEvent.disableClickPropagation(this._sharing);
	        L.DomEvent.addListener(close, 'click', this._clickOut, this);
	        L.DomEvent.addListener(input, 'click', function(e) {
	            e.target.focus();
	            e.target.select();
	        });
	    }
	});

	module.exports.ShareControl = ShareControl;

	module.exports.shareControl = function(_, options) {
	    return new ShareControl(_, options);
	};


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var request = __webpack_require__(95),
	    format_url = __webpack_require__(91),
	    util = __webpack_require__(90);

	module.exports = {
	    _loadTileJSON: function(_) {
	        if (typeof _ === 'string') {
	            _ = format_url.tileJSON(_, this.options && this.options.accessToken);
	            request(_, L.bind(function(err, json) {
	                if (err) {
	                    util.log('could not load TileJSON at ' + _);
	                    this.fire('error', {error: err});
	                } else if (json) {
	                    this._setTileJSON(json);
	                    this.fire('ready');
	                }
	            }, this));
	        } else if (_ && typeof _ === 'object') {
	            this._setTileJSON(_);
	        }
	    }
	};


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(90);
	var formatPattern = /\.((?:png|jpg)\d*)(?=$|\?)/;

	var TileLayer = L.TileLayer.extend({
	    includes: [__webpack_require__(106)],

	    options: {
	        sanitizer: __webpack_require__(99)
	    },

	    // http://mapbox.com/developers/api/#image_quality
	    formats: [
	        'png', 'jpg',
	        // PNG
	        'png32', 'png64', 'png128', 'png256',
	        // JPG
	        'jpg70', 'jpg80', 'jpg90'],

	    scalePrefix: '@2x.',

	    initialize: function(_, options) {
	        L.TileLayer.prototype.initialize.call(this, undefined, options);

	        this._tilejson = {};

	        if (options && options.format) {
	            util.strict_oneof(options.format, this.formats);
	        }

	        this._loadTileJSON(_);
	    },

	    setFormat: function(_) {
	        util.strict(_, 'string');
	        this.options.format = _;
	        this.redraw();
	        return this;
	    },

	    // disable the setUrl function, which is not available on mapbox tilelayers
	    setUrl: null,

	    _setTileJSON: function(json) {
	        util.strict(json, 'object');

	        this.options.format = this.options.format ||
	            json.tiles[0].match(formatPattern)[1];

	        L.extend(this.options, {
	            tiles: json.tiles,
	            attribution: this.options.sanitizer(json.attribution),
	            minZoom: json.minzoom || 0,
	            maxZoom: json.maxzoom || 18,
	            tms: json.scheme === 'tms',
	            bounds: json.bounds && util.lbounds(json.bounds)
	        });

	        this._tilejson = json;
	        this.redraw();
	        return this;
	    },

	    getTileJSON: function() {
	        return this._tilejson;
	    },

	    // this is an exception to mapbox.js naming rules because it's called
	    // by `L.map`
	    getTileUrl: function(tilePoint) {
	        var tiles = this.options.tiles,
	            index = Math.floor(Math.abs(tilePoint.x + tilePoint.y) % tiles.length),
	            url = tiles[index];

	        var templated = L.Util.template(url, tilePoint);
	        if (!templated) {
	            return templated;
	        } else {
	            return templated.replace(formatPattern,
	                (L.Browser.retina ? this.scalePrefix : '.') + this.options.format);
	        }
	    },

	    // TileJSON.TileLayers are added to the map immediately, so that they get
	    // the desired z-index, but do not update until the TileJSON has been loaded.
	    _update: function() {
	        if (this.options.tiles) {
	            L.TileLayer.prototype._update.call(this);
	        }
	    }
	});

	module.exports.TileLayer = TileLayer;

	module.exports.tileLayer = function(_, options) {
	    return new TileLayer(_, options);
	};


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var InfoControl = L.Control.extend({
	    options: {
	        position: 'bottomright',
	        sanitizer: __webpack_require__(99)
	    },

	    initialize: function(options) {
	        L.setOptions(this, options);
	        this._info = {};
	        console.warn('infoControl has been deprecated and will be removed in mapbox.js v3.0.0. Use the default attribution control instead, which is now responsive.');
	    },

	    onAdd: function(map) {
	        this._container = L.DomUtil.create('div', 'mapbox-control-info mapbox-small');
	        this._content = L.DomUtil.create('div', 'map-info-container', this._container);

	        var link = L.DomUtil.create('a', 'mapbox-info-toggle mapbox-icon mapbox-icon-info', this._container);
	        link.href = '#';

	        L.DomEvent.addListener(link, 'click', this._showInfo, this);
	        L.DomEvent.disableClickPropagation(this._container);

	        for (var i in map._layers) {
	            if (map._layers[i].getAttribution) {
	                this.addInfo(map._layers[i].getAttribution());
	            }
	        }

	        map
	            .on('layeradd', this._onLayerAdd, this)
	            .on('layerremove', this._onLayerRemove, this);

	        this._update();
	        return this._container;
	    },

	    onRemove: function(map) {
	        map
	            .off('layeradd', this._onLayerAdd, this)
	            .off('layerremove', this._onLayerRemove, this);
	    },

	    addInfo: function(text) {
	        if (!text) return this;
	        if (!this._info[text]) this._info[text] = 0;
	        this._info[text] = true;
	        return this._update();
	    },

	    removeInfo: function (text) {
	        if (!text) return this;
	        if (this._info[text]) this._info[text] = false;
	        return this._update();
	    },

	    _showInfo: function(e) {
	        L.DomEvent.preventDefault(e);
	        if (this._active === true) return this._hidecontent();

	        L.DomUtil.addClass(this._container, 'active');
	        this._active = true;
	        this._update();
	    },

	    _hidecontent: function() {
	        this._content.innerHTML = '';
	        this._active = false;
	        L.DomUtil.removeClass(this._container, 'active');
	        return;
	    },

	    _update: function() {
	        if (!this._map) { return this; }
	        this._content.innerHTML = '';
	        var hide = 'none';
	        var info = [];

	        for (var i in this._info) {
	            if (this._info.hasOwnProperty(i) && this._info[i]) {
	                info.push(this.options.sanitizer(i));
	                hide = 'block';
	            }
	        }

	        this._content.innerHTML += info.join(' | ');

	        // If there are no results in _info then hide this.
	        this._container.style.display = hide;
	        return this;
	    },

	    _onLayerAdd: function(e) {
	        if (e.layer.getAttribution && e.layer.getAttribution()) {
	            this.addInfo(e.layer.getAttribution());
	        } else if ('on' in e.layer && e.layer.getAttribution) {
	            e.layer.on('ready', L.bind(function() {
	                this.addInfo(e.layer.getAttribution());
	            }, this));
	        }
	    },

	    _onLayerRemove: function (e) {
	        if (e.layer.getAttribution) {
	            this.removeInfo(e.layer.getAttribution());
	        }
	    }
	});

	module.exports.InfoControl = InfoControl;

	module.exports.infoControl = function(options) {
	    return new InfoControl(options);
	};


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var tileLayer = __webpack_require__(107).tileLayer,
	    featureLayer = __webpack_require__(101).featureLayer,
	    gridLayer = __webpack_require__(110).gridLayer,
	    gridControl = __webpack_require__(97).gridControl,
	    infoControl = __webpack_require__(108).infoControl,
	    shareControl = __webpack_require__(105).shareControl,
	    legendControl = __webpack_require__(104).legendControl,
	    mapboxLogoControl = __webpack_require__(112).mapboxLogoControl,
	    feedback = __webpack_require__(94);

	function withAccessToken(options, accessToken) {
	    if (!accessToken || options.accessToken)
	        return options;
	    return L.extend({accessToken: accessToken}, options);
	}

	var LMap = L.Map.extend({
	    includes: [__webpack_require__(106)],

	    options: {
	        tileLayer: {},
	        featureLayer: {},
	        gridLayer: {},
	        legendControl: {},
	        gridControl: {},
	        infoControl: false,
	        shareControl: false,
	        sanitizer: __webpack_require__(99)
	    },

	    _tilejson: {},

	    initialize: function(element, _, options) {

	        L.Map.prototype.initialize.call(this, element,
	            L.extend({}, L.Map.prototype.options, options));

	        // Disable the default 'Leaflet' text
	        if (this.attributionControl) {
	            this.attributionControl.setPrefix('');

	            var compact = this.options.attributionControl.compact;
	            // Set a compact display if map container width is < 640 or
	            // compact is set to `true` in attributionControl options.
	            if (compact || (compact !== false && this._container.offsetWidth <= 640)) {
	                L.DomUtil.addClass(this.attributionControl._container, 'leaflet-compact-attribution');
	            }

	            if (compact === undefined) {
	                this.on('resize', function() {
	                    if (this._container.offsetWidth > 640) {
	                        L.DomUtil.removeClass(this.attributionControl._container, 'leaflet-compact-attribution');
	                    } else {
	                        L.DomUtil.addClass(this.attributionControl._container, 'leaflet-compact-attribution');
	                    }
	                });
	            }
	        }

	        if (this.options.tileLayer) {
	            this.tileLayer = tileLayer(undefined,
	                withAccessToken(this.options.tileLayer, this.options.accessToken));
	            this.addLayer(this.tileLayer);
	        }

	        if (this.options.featureLayer) {
	            this.featureLayer = featureLayer(undefined,
	                withAccessToken(this.options.featureLayer, this.options.accessToken));
	            this.addLayer(this.featureLayer);
	        }

	        if (this.options.gridLayer) {
	            this.gridLayer = gridLayer(undefined,
	                withAccessToken(this.options.gridLayer, this.options.accessToken));
	            this.addLayer(this.gridLayer);
	        }

	        if (this.options.gridLayer && this.options.gridControl) {
	            this.gridControl = gridControl(this.gridLayer, this.options.gridControl);
	            this.addControl(this.gridControl);
	        }

	        if (this.options.infoControl) {
	            this.infoControl = infoControl(this.options.infoControl);
	            this.addControl(this.infoControl);
	        }

	        if (this.options.legendControl) {
	            this.legendControl = legendControl(this.options.legendControl);
	            this.addControl(this.legendControl);
	        }

	        if (this.options.shareControl) {
	            this.shareControl = shareControl(undefined,
	                withAccessToken(this.options.shareControl, this.options.accessToken));
	            this.addControl(this.shareControl);
	        }

	        this._mapboxLogoControl = mapboxLogoControl(this.options.mapboxLogoControl);
	        this.addControl(this._mapboxLogoControl);

	        this._loadTileJSON(_);

	        this.on('layeradd', this._onLayerAdd, this)
	            .on('layerremove', this._onLayerRemove, this)
	            .on('moveend', this._updateMapFeedbackLink, this);

	        this.whenReady(function () {
	            feedback.on('change', this._updateMapFeedbackLink, this);
	        });

	        this.on('unload', function () {
	            feedback.off('change', this._updateMapFeedbackLink, this);
	        });
	    },

	    // use a javascript object of tilejson data to configure this layer
	    _setTileJSON: function(_) {
	        this._tilejson = _;
	        this._initialize(_);
	        return this;
	    },

	    getTileJSON: function() {
	        return this._tilejson;
	    },

	    _initialize: function(json) {
	        if (this.tileLayer) {
	            this.tileLayer._setTileJSON(json);
	            this._updateLayer(this.tileLayer);
	        }

	        if (this.featureLayer && !this.featureLayer.getGeoJSON() && json.data && json.data[0]) {
	            this.featureLayer.loadURL(json.data[0]);
	        }

	        if (this.gridLayer) {
	            this.gridLayer._setTileJSON(json);
	            this._updateLayer(this.gridLayer);
	        }

	        if (this.infoControl && json.attribution) {
	            this.infoControl.addInfo(this.options.sanitizer(json.attribution));
	            this._updateMapFeedbackLink();
	        }

	        if (this.legendControl && json.legend) {
	            this.legendControl.addLegend(json.legend);
	        }

	        if (this.shareControl) {
	            this.shareControl._setTileJSON(json);
	        }

	        this._mapboxLogoControl._setTileJSON(json);

	        if (!this._loaded && json.center) {
	            var zoom = this.getZoom() !== undefined ? this.getZoom() : json.center[2],
	                center = L.latLng(json.center[1], json.center[0]);

	            this.setView(center, zoom);
	        }
	    },

	    _updateMapFeedbackLink: function() {
	        if (!this._controlContainer.getElementsByClassName) return;
	        var link = this._controlContainer.getElementsByClassName('mapbox-improve-map');
	        if (link.length && this._loaded) {
	            var center = this.getCenter().wrap();
	            var tilejson = this._tilejson || {};
	            var id = tilejson.id || '';

	            var hash = '#' + id + '/' +
	                center.lng.toFixed(3) + '/' +
	                center.lat.toFixed(3) + '/' +
	                this.getZoom();

	            for (var key in feedback.data) {
	                hash += '/' + key + '=' + feedback.data[key];
	            }

	            for (var i = 0; i < link.length; i++) {
	                link[i].hash = hash;
	            }
	        }
	    },

	    _onLayerAdd: function(e) {
	        if ('on' in e.layer) {
	            e.layer.on('ready', this._onLayerReady, this);
	        }
	        window.setTimeout(L.bind(this._updateMapFeedbackLink, this), 0); // Update after attribution control resets the HTML.
	    },

	    _onLayerRemove: function(e) {
	        if ('on' in e.layer) {
	            e.layer.off('ready', this._onLayerReady, this);
	        }
	        window.setTimeout(L.bind(this._updateMapFeedbackLink, this), 0); // Update after attribution control resets the HTML.
	    },

	    _onLayerReady: function(e) {
	        this._updateLayer(e.target);
	    },

	    _updateLayer: function(layer) {
	        if (!layer.options) return;

	        if (this.infoControl && this._loaded) {
	            this.infoControl.addInfo(layer.options.infoControl);
	        }

	        if (this.attributionControl && this._loaded && layer.getAttribution) {
	            this.attributionControl.addAttribution(layer.getAttribution());
	        }

	        if (!(L.stamp(layer) in this._zoomBoundLayers) &&
	                (layer.options.maxZoom || layer.options.minZoom)) {
	            this._zoomBoundLayers[L.stamp(layer)] = layer;
	        }

	        this._updateMapFeedbackLink();
	        this._updateZoomLevels();
	    }
	});

	module.exports.Map = LMap;

	module.exports.map = function(element, _, options) {
	    return new LMap(element, _, options);
	};


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(90),
	    request = __webpack_require__(95),
	    grid = __webpack_require__(111);

	// forked from danzel/L.UTFGrid
	var GridLayer = L.Class.extend({
	    includes: [L.Mixin.Events, __webpack_require__(106)],

	    options: {
	        template: function() { return ''; }
	    },

	    _mouseOn: null,
	    _tilejson: {},
	    _cache: {},

	    initialize: function(_, options) {
	        L.Util.setOptions(this, options);
	        this._loadTileJSON(_);
	    },

	    _setTileJSON: function(json) {
	        util.strict(json, 'object');

	        L.extend(this.options, {
	            grids: json.grids,
	            minZoom: json.minzoom,
	            maxZoom: json.maxzoom,
	            bounds: json.bounds && util.lbounds(json.bounds)
	        });

	        this._tilejson = json;
	        this._cache = {};
	        this._update();

	        return this;
	    },

	    getTileJSON: function() {
	        return this._tilejson;
	    },

	    active: function() {
	        return !!(this._map && this.options.grids && this.options.grids.length);
	    },

	    addTo: function (map) {
	        map.addLayer(this);
	        return this;
	    },

	    onAdd: function(map) {
	        this._map = map;
	        this._update();

	        this._map
	            .on('click', this._click, this)
	            .on('mousemove', this._move, this)
	            .on('moveend', this._update, this);
	    },

	    onRemove: function() {
	        this._map
	            .off('click', this._click, this)
	            .off('mousemove', this._move, this)
	            .off('moveend', this._update, this);
	    },

	    getData: function(latlng, callback) {
	        if (!this.active()) return;

	        var map = this._map,
	            point = map.project(latlng.wrap()),
	            tileSize = 256,
	            resolution = 4,
	            x = Math.floor(point.x / tileSize),
	            y = Math.floor(point.y / tileSize),
	            max = map.options.crs.scale(map.getZoom()) / tileSize;

	        x = (x + max) % max;
	        y = (y + max) % max;

	        this._getTile(map.getZoom(), x, y, function(grid) {
	            var gridX = Math.floor((point.x - (x * tileSize)) / resolution),
	                gridY = Math.floor((point.y - (y * tileSize)) / resolution);

	            callback(grid(gridX, gridY));
	        });

	        return this;
	    },

	    _click: function(e) {
	        this.getData(e.latlng, L.bind(function(data) {
	            this.fire('click', {
	                latLng: e.latlng,
	                data: data
	            });
	        }, this));
	    },

	    _move: function(e) {
	        this.getData(e.latlng, L.bind(function(data) {
	            if (data !== this._mouseOn) {
	                if (this._mouseOn) {
	                    this.fire('mouseout', {
	                        latLng: e.latlng,
	                        data: this._mouseOn
	                    });
	                }

	                this.fire('mouseover', {
	                    latLng: e.latlng,
	                    data: data
	                });

	                this._mouseOn = data;
	            } else {
	                this.fire('mousemove', {
	                    latLng: e.latlng,
	                    data: data
	                });
	            }
	        }, this));
	    },

	    _getTileURL: function(tilePoint) {
	        var urls = this.options.grids,
	            index = (tilePoint.x + tilePoint.y) % urls.length,
	            url = urls[index];

	        return L.Util.template(url, tilePoint);
	    },

	    // Load up all required json grid files
	    _update: function() {
	        if (!this.active()) return;

	        var bounds = this._map.getPixelBounds(),
	            z = this._map.getZoom(),
	            tileSize = 256;

	        if (z > this.options.maxZoom || z < this.options.minZoom) return;

	        var tileBounds = L.bounds(
	                bounds.min.divideBy(tileSize)._floor(),
	                bounds.max.divideBy(tileSize)._floor()),
	            max = this._map.options.crs.scale(z) / tileSize;

	        for (var x = tileBounds.min.x; x <= tileBounds.max.x; x++) {
	            for (var y = tileBounds.min.y; y <= tileBounds.max.y; y++) {
	                // x wrapped
	                this._getTile(z, ((x % max) + max) % max, ((y % max) + max) % max);
	            }
	        }
	    },

	    _getTile: function(z, x, y, callback) {
	        var key = z + '_' + x + '_' + y,
	            tilePoint = L.point(x, y);

	        tilePoint.z = z;

	        if (!this._tileShouldBeLoaded(tilePoint)) {
	            return;
	        }

	        if (key in this._cache) {
	            if (!callback) return;

	            if (typeof this._cache[key] === 'function') {
	                callback(this._cache[key]); // Already loaded
	            } else {
	                this._cache[key].push(callback); // Pending
	            }

	            return;
	        }

	        this._cache[key] = [];

	        if (callback) {
	            this._cache[key].push(callback);
	        }

	        request(this._getTileURL(tilePoint), L.bind(function(err, json) {
	            var callbacks = this._cache[key];
	            this._cache[key] = grid(json);
	            for (var i = 0; i < callbacks.length; ++i) {
	                callbacks[i](this._cache[key]);
	            }
	        }, this));
	    },

	    _tileShouldBeLoaded: function(tilePoint) {
	        if (tilePoint.z > this.options.maxZoom || tilePoint.z < this.options.minZoom) {
	            return false;
	        }

	        if (this.options.bounds) {
	            var tileSize = 256,
	                nwPoint = tilePoint.multiplyBy(tileSize),
	                sePoint = nwPoint.add(new L.Point(tileSize, tileSize)),
	                nw = this._map.unproject(nwPoint),
	                se = this._map.unproject(sePoint),
	                bounds = new L.LatLngBounds([nw, se]);

	            if (!this.options.bounds.intersects(bounds)) {
	                return false;
	            }
	        }

	        return true;
	    }
	});

	module.exports.GridLayer = GridLayer;

	module.exports.gridLayer = function(_, options) {
	    return new GridLayer(_, options);
	};


/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';

	function utfDecode(c) {
	    if (c >= 93) c--;
	    if (c >= 35) c--;
	    return c - 32;
	}

	module.exports = function(data) {
	    return function(x, y) {
	        if (!data) return;
	        var idx = utfDecode(data.grid[y].charCodeAt(x)),
	            key = data.keys[idx];
	        return data.data[key];
	    };
	};


/***/ },
/* 112 */
/***/ function(module, exports) {

	'use strict';

	var MapboxLogoControl = L.Control.extend({

	    options: {
	        position: 'bottomleft'
	    },

	    initialize: function(options) {
	        L.setOptions(this, options);
	    },

	    onAdd: function() {
	        this._container = L.DomUtil.create('div', 'mapbox-logo');
	        return this._container;
	    },

	    _setTileJSON: function(json) {
	        // Check if account referenced by the accessToken
	        // is asscociated with the Mapbox Logo
	        // as determined by mapbox-maps.
	        if (json.mapbox_logo) {
	            L.DomUtil.addClass(this._container, 'mapbox-logo-true');
	        }
	    }
	});

	module.exports.MapboxLogoControl = MapboxLogoControl;

	module.exports.mapboxLogoControl = function(options) {
	    return new MapboxLogoControl(options);
	};


/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "<div class=\"map__container\">\n    <div class=\"map\"></div>\n  </div>";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115)
	module.exports = __webpack_require__(117)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(119)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./spaces.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./spaces.vue","-!vue-html-loader!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./spaces.vue"], function () {
	var newOptions = require("-!babel-loader?presets[]=es2015&plugins[]=transform-runtime!./../../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./spaces.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./spaces.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(116);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-01ac8ac2&file=spaces.vue!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./spaces.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-01ac8ac2&file=spaces.vue!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./spaces.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".space {\n  }\n.space__item {\n    min-height: 100%\n}\n.space__item-container {\n    height: calc(100vh - 260px);\n    overflow: scroll;\n    padding: 0 10px\n}\n.space-text {\n    margin: 0\n}\n.space-text--bold {\n    font-weight: 600;\n    margin-bottom: 4px\n}", ""]);

	// exports


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(3);

	var _vue2 = _interopRequireDefault(_vue);

	var _noframeworkWaypoints = __webpack_require__(118);

	var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  created: function created() {
	    var _this = this;

	    var req = new XMLHttpRequest();
	    req.open('GET', '/makerspaces', true);
	    req.send();
	    req.onload = function () {
	      // console.log(JSON.parse(req.responseText));
	      _vue2.default.set(_this.$data, 'makerspaces', JSON.parse(req.responseText));
	    };
	  },
	  watch: function watch() {
	    return {
	      makerspaces: function makerspaces(val) {
	        console.log(val);
	        if (val) {
	          console.log(val);
	        }
	      }
	    };
	  },
	  data: function data() {
	    return {
	      makerspaces: []
	    };
	  }
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	/*!
	Waypoints - 4.0.0
	Copyright © 2011-2015 Caleb Troughton
	Licensed under the MIT license.
	https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
	*/
	(function() {
	  'use strict'

	  var keyCounter = 0
	  var allWaypoints = {}

	  /* http://imakewebthings.com/waypoints/api/waypoint */
	  function Waypoint(options) {
	    if (!options) {
	      throw new Error('No options passed to Waypoint constructor')
	    }
	    if (!options.element) {
	      throw new Error('No element option passed to Waypoint constructor')
	    }
	    if (!options.handler) {
	      throw new Error('No handler option passed to Waypoint constructor')
	    }

	    this.key = 'waypoint-' + keyCounter
	    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
	    this.element = this.options.element
	    this.adapter = new Waypoint.Adapter(this.element)
	    this.callback = options.handler
	    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
	    this.enabled = this.options.enabled
	    this.triggerPoint = null
	    this.group = Waypoint.Group.findOrCreate({
	      name: this.options.group,
	      axis: this.axis
	    })
	    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

	    if (Waypoint.offsetAliases[this.options.offset]) {
	      this.options.offset = Waypoint.offsetAliases[this.options.offset]
	    }
	    this.group.add(this)
	    this.context.add(this)
	    allWaypoints[this.key] = this
	    keyCounter += 1
	  }

	  /* Private */
	  Waypoint.prototype.queueTrigger = function(direction) {
	    this.group.queueTrigger(this, direction)
	  }

	  /* Private */
	  Waypoint.prototype.trigger = function(args) {
	    if (!this.enabled) {
	      return
	    }
	    if (this.callback) {
	      this.callback.apply(this, args)
	    }
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/destroy */
	  Waypoint.prototype.destroy = function() {
	    this.context.remove(this)
	    this.group.remove(this)
	    delete allWaypoints[this.key]
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/disable */
	  Waypoint.prototype.disable = function() {
	    this.enabled = false
	    return this
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/enable */
	  Waypoint.prototype.enable = function() {
	    this.context.refresh()
	    this.enabled = true
	    return this
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/next */
	  Waypoint.prototype.next = function() {
	    return this.group.next(this)
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/previous */
	  Waypoint.prototype.previous = function() {
	    return this.group.previous(this)
	  }

	  /* Private */
	  Waypoint.invokeAll = function(method) {
	    var allWaypointsArray = []
	    for (var waypointKey in allWaypoints) {
	      allWaypointsArray.push(allWaypoints[waypointKey])
	    }
	    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
	      allWaypointsArray[i][method]()
	    }
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/destroy-all */
	  Waypoint.destroyAll = function() {
	    Waypoint.invokeAll('destroy')
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/disable-all */
	  Waypoint.disableAll = function() {
	    Waypoint.invokeAll('disable')
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/enable-all */
	  Waypoint.enableAll = function() {
	    Waypoint.invokeAll('enable')
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/refresh-all */
	  Waypoint.refreshAll = function() {
	    Waypoint.Context.refreshAll()
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/viewport-height */
	  Waypoint.viewportHeight = function() {
	    return window.innerHeight || document.documentElement.clientHeight
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/viewport-width */
	  Waypoint.viewportWidth = function() {
	    return document.documentElement.clientWidth
	  }

	  Waypoint.adapters = []

	  Waypoint.defaults = {
	    context: window,
	    continuous: true,
	    enabled: true,
	    group: 'default',
	    horizontal: false,
	    offset: 0
	  }

	  Waypoint.offsetAliases = {
	    'bottom-in-view': function() {
	      return this.context.innerHeight() - this.adapter.outerHeight()
	    },
	    'right-in-view': function() {
	      return this.context.innerWidth() - this.adapter.outerWidth()
	    }
	  }

	  window.Waypoint = Waypoint
	}())
	;(function() {
	  'use strict'

	  function requestAnimationFrameShim(callback) {
	    window.setTimeout(callback, 1000 / 60)
	  }

	  var keyCounter = 0
	  var contexts = {}
	  var Waypoint = window.Waypoint
	  var oldWindowLoad = window.onload

	  /* http://imakewebthings.com/waypoints/api/context */
	  function Context(element) {
	    this.element = element
	    this.Adapter = Waypoint.Adapter
	    this.adapter = new this.Adapter(element)
	    this.key = 'waypoint-context-' + keyCounter
	    this.didScroll = false
	    this.didResize = false
	    this.oldScroll = {
	      x: this.adapter.scrollLeft(),
	      y: this.adapter.scrollTop()
	    }
	    this.waypoints = {
	      vertical: {},
	      horizontal: {}
	    }

	    element.waypointContextKey = this.key
	    contexts[element.waypointContextKey] = this
	    keyCounter += 1

	    this.createThrottledScrollHandler()
	    this.createThrottledResizeHandler()
	  }

	  /* Private */
	  Context.prototype.add = function(waypoint) {
	    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
	    this.waypoints[axis][waypoint.key] = waypoint
	    this.refresh()
	  }

	  /* Private */
	  Context.prototype.checkEmpty = function() {
	    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
	    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
	    if (horizontalEmpty && verticalEmpty) {
	      this.adapter.off('.waypoints')
	      delete contexts[this.key]
	    }
	  }

	  /* Private */
	  Context.prototype.createThrottledResizeHandler = function() {
	    var self = this

	    function resizeHandler() {
	      self.handleResize()
	      self.didResize = false
	    }

	    this.adapter.on('resize.waypoints', function() {
	      if (!self.didResize) {
	        self.didResize = true
	        Waypoint.requestAnimationFrame(resizeHandler)
	      }
	    })
	  }

	  /* Private */
	  Context.prototype.createThrottledScrollHandler = function() {
	    var self = this
	    function scrollHandler() {
	      self.handleScroll()
	      self.didScroll = false
	    }

	    this.adapter.on('scroll.waypoints', function() {
	      if (!self.didScroll || Waypoint.isTouch) {
	        self.didScroll = true
	        Waypoint.requestAnimationFrame(scrollHandler)
	      }
	    })
	  }

	  /* Private */
	  Context.prototype.handleResize = function() {
	    Waypoint.Context.refreshAll()
	  }

	  /* Private */
	  Context.prototype.handleScroll = function() {
	    var triggeredGroups = {}
	    var axes = {
	      horizontal: {
	        newScroll: this.adapter.scrollLeft(),
	        oldScroll: this.oldScroll.x,
	        forward: 'right',
	        backward: 'left'
	      },
	      vertical: {
	        newScroll: this.adapter.scrollTop(),
	        oldScroll: this.oldScroll.y,
	        forward: 'down',
	        backward: 'up'
	      }
	    }

	    for (var axisKey in axes) {
	      var axis = axes[axisKey]
	      var isForward = axis.newScroll > axis.oldScroll
	      var direction = isForward ? axis.forward : axis.backward

	      for (var waypointKey in this.waypoints[axisKey]) {
	        var waypoint = this.waypoints[axisKey][waypointKey]
	        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
	        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
	        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
	        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
	        if (crossedForward || crossedBackward) {
	          waypoint.queueTrigger(direction)
	          triggeredGroups[waypoint.group.id] = waypoint.group
	        }
	      }
	    }

	    for (var groupKey in triggeredGroups) {
	      triggeredGroups[groupKey].flushTriggers()
	    }

	    this.oldScroll = {
	      x: axes.horizontal.newScroll,
	      y: axes.vertical.newScroll
	    }
	  }

	  /* Private */
	  Context.prototype.innerHeight = function() {
	    /*eslint-disable eqeqeq */
	    if (this.element == this.element.window) {
	      return Waypoint.viewportHeight()
	    }
	    /*eslint-enable eqeqeq */
	    return this.adapter.innerHeight()
	  }

	  /* Private */
	  Context.prototype.remove = function(waypoint) {
	    delete this.waypoints[waypoint.axis][waypoint.key]
	    this.checkEmpty()
	  }

	  /* Private */
	  Context.prototype.innerWidth = function() {
	    /*eslint-disable eqeqeq */
	    if (this.element == this.element.window) {
	      return Waypoint.viewportWidth()
	    }
	    /*eslint-enable eqeqeq */
	    return this.adapter.innerWidth()
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/context-destroy */
	  Context.prototype.destroy = function() {
	    var allWaypoints = []
	    for (var axis in this.waypoints) {
	      for (var waypointKey in this.waypoints[axis]) {
	        allWaypoints.push(this.waypoints[axis][waypointKey])
	      }
	    }
	    for (var i = 0, end = allWaypoints.length; i < end; i++) {
	      allWaypoints[i].destroy()
	    }
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/context-refresh */
	  Context.prototype.refresh = function() {
	    /*eslint-disable eqeqeq */
	    var isWindow = this.element == this.element.window
	    /*eslint-enable eqeqeq */
	    var contextOffset = isWindow ? undefined : this.adapter.offset()
	    var triggeredGroups = {}
	    var axes

	    this.handleScroll()
	    axes = {
	      horizontal: {
	        contextOffset: isWindow ? 0 : contextOffset.left,
	        contextScroll: isWindow ? 0 : this.oldScroll.x,
	        contextDimension: this.innerWidth(),
	        oldScroll: this.oldScroll.x,
	        forward: 'right',
	        backward: 'left',
	        offsetProp: 'left'
	      },
	      vertical: {
	        contextOffset: isWindow ? 0 : contextOffset.top,
	        contextScroll: isWindow ? 0 : this.oldScroll.y,
	        contextDimension: this.innerHeight(),
	        oldScroll: this.oldScroll.y,
	        forward: 'down',
	        backward: 'up',
	        offsetProp: 'top'
	      }
	    }

	    for (var axisKey in axes) {
	      var axis = axes[axisKey]
	      for (var waypointKey in this.waypoints[axisKey]) {
	        var waypoint = this.waypoints[axisKey][waypointKey]
	        var adjustment = waypoint.options.offset
	        var oldTriggerPoint = waypoint.triggerPoint
	        var elementOffset = 0
	        var freshWaypoint = oldTriggerPoint == null
	        var contextModifier, wasBeforeScroll, nowAfterScroll
	        var triggeredBackward, triggeredForward

	        if (waypoint.element !== waypoint.element.window) {
	          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
	        }

	        if (typeof adjustment === 'function') {
	          adjustment = adjustment.apply(waypoint)
	        }
	        else if (typeof adjustment === 'string') {
	          adjustment = parseFloat(adjustment)
	          if (waypoint.options.offset.indexOf('%') > - 1) {
	            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
	          }
	        }

	        contextModifier = axis.contextScroll - axis.contextOffset
	        waypoint.triggerPoint = elementOffset + contextModifier - adjustment
	        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
	        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
	        triggeredBackward = wasBeforeScroll && nowAfterScroll
	        triggeredForward = !wasBeforeScroll && !nowAfterScroll

	        if (!freshWaypoint && triggeredBackward) {
	          waypoint.queueTrigger(axis.backward)
	          triggeredGroups[waypoint.group.id] = waypoint.group
	        }
	        else if (!freshWaypoint && triggeredForward) {
	          waypoint.queueTrigger(axis.forward)
	          triggeredGroups[waypoint.group.id] = waypoint.group
	        }
	        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
	          waypoint.queueTrigger(axis.forward)
	          triggeredGroups[waypoint.group.id] = waypoint.group
	        }
	      }
	    }

	    Waypoint.requestAnimationFrame(function() {
	      for (var groupKey in triggeredGroups) {
	        triggeredGroups[groupKey].flushTriggers()
	      }
	    })

	    return this
	  }

	  /* Private */
	  Context.findOrCreateByElement = function(element) {
	    return Context.findByElement(element) || new Context(element)
	  }

	  /* Private */
	  Context.refreshAll = function() {
	    for (var contextId in contexts) {
	      contexts[contextId].refresh()
	    }
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
	  Context.findByElement = function(element) {
	    return contexts[element.waypointContextKey]
	  }

	  window.onload = function() {
	    if (oldWindowLoad) {
	      oldWindowLoad()
	    }
	    Context.refreshAll()
	  }

	  Waypoint.requestAnimationFrame = function(callback) {
	    var requestFn = window.requestAnimationFrame ||
	      window.mozRequestAnimationFrame ||
	      window.webkitRequestAnimationFrame ||
	      requestAnimationFrameShim
	    requestFn.call(window, callback)
	  }
	  Waypoint.Context = Context
	}())
	;(function() {
	  'use strict'

	  function byTriggerPoint(a, b) {
	    return a.triggerPoint - b.triggerPoint
	  }

	  function byReverseTriggerPoint(a, b) {
	    return b.triggerPoint - a.triggerPoint
	  }

	  var groups = {
	    vertical: {},
	    horizontal: {}
	  }
	  var Waypoint = window.Waypoint

	  /* http://imakewebthings.com/waypoints/api/group */
	  function Group(options) {
	    this.name = options.name
	    this.axis = options.axis
	    this.id = this.name + '-' + this.axis
	    this.waypoints = []
	    this.clearTriggerQueues()
	    groups[this.axis][this.name] = this
	  }

	  /* Private */
	  Group.prototype.add = function(waypoint) {
	    this.waypoints.push(waypoint)
	  }

	  /* Private */
	  Group.prototype.clearTriggerQueues = function() {
	    this.triggerQueues = {
	      up: [],
	      down: [],
	      left: [],
	      right: []
	    }
	  }

	  /* Private */
	  Group.prototype.flushTriggers = function() {
	    for (var direction in this.triggerQueues) {
	      var waypoints = this.triggerQueues[direction]
	      var reverse = direction === 'up' || direction === 'left'
	      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
	      for (var i = 0, end = waypoints.length; i < end; i += 1) {
	        var waypoint = waypoints[i]
	        if (waypoint.options.continuous || i === waypoints.length - 1) {
	          waypoint.trigger([direction])
	        }
	      }
	    }
	    this.clearTriggerQueues()
	  }

	  /* Private */
	  Group.prototype.next = function(waypoint) {
	    this.waypoints.sort(byTriggerPoint)
	    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
	    var isLast = index === this.waypoints.length - 1
	    return isLast ? null : this.waypoints[index + 1]
	  }

	  /* Private */
	  Group.prototype.previous = function(waypoint) {
	    this.waypoints.sort(byTriggerPoint)
	    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
	    return index ? this.waypoints[index - 1] : null
	  }

	  /* Private */
	  Group.prototype.queueTrigger = function(waypoint, direction) {
	    this.triggerQueues[direction].push(waypoint)
	  }

	  /* Private */
	  Group.prototype.remove = function(waypoint) {
	    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
	    if (index > -1) {
	      this.waypoints.splice(index, 1)
	    }
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/first */
	  Group.prototype.first = function() {
	    return this.waypoints[0]
	  }

	  /* Public */
	  /* http://imakewebthings.com/waypoints/api/last */
	  Group.prototype.last = function() {
	    return this.waypoints[this.waypoints.length - 1]
	  }

	  /* Private */
	  Group.findOrCreate = function(options) {
	    return groups[options.axis][options.name] || new Group(options)
	  }

	  Waypoint.Group = Group
	}())
	;(function() {
	  'use strict'

	  var Waypoint = window.Waypoint

	  function isWindow(element) {
	    return element === element.window
	  }

	  function getWindow(element) {
	    if (isWindow(element)) {
	      return element
	    }
	    return element.defaultView
	  }

	  function NoFrameworkAdapter(element) {
	    this.element = element
	    this.handlers = {}
	  }

	  NoFrameworkAdapter.prototype.innerHeight = function() {
	    var isWin = isWindow(this.element)
	    return isWin ? this.element.innerHeight : this.element.clientHeight
	  }

	  NoFrameworkAdapter.prototype.innerWidth = function() {
	    var isWin = isWindow(this.element)
	    return isWin ? this.element.innerWidth : this.element.clientWidth
	  }

	  NoFrameworkAdapter.prototype.off = function(event, handler) {
	    function removeListeners(element, listeners, handler) {
	      for (var i = 0, end = listeners.length - 1; i < end; i++) {
	        var listener = listeners[i]
	        if (!handler || handler === listener) {
	          element.removeEventListener(listener)
	        }
	      }
	    }

	    var eventParts = event.split('.')
	    var eventType = eventParts[0]
	    var namespace = eventParts[1]
	    var element = this.element

	    if (namespace && this.handlers[namespace] && eventType) {
	      removeListeners(element, this.handlers[namespace][eventType], handler)
	      this.handlers[namespace][eventType] = []
	    }
	    else if (eventType) {
	      for (var ns in this.handlers) {
	        removeListeners(element, this.handlers[ns][eventType] || [], handler)
	        this.handlers[ns][eventType] = []
	      }
	    }
	    else if (namespace && this.handlers[namespace]) {
	      for (var type in this.handlers[namespace]) {
	        removeListeners(element, this.handlers[namespace][type], handler)
	      }
	      this.handlers[namespace] = {}
	    }
	  }

	  /* Adapted from jQuery 1.x offset() */
	  NoFrameworkAdapter.prototype.offset = function() {
	    if (!this.element.ownerDocument) {
	      return null
	    }

	    var documentElement = this.element.ownerDocument.documentElement
	    var win = getWindow(this.element.ownerDocument)
	    var rect = {
	      top: 0,
	      left: 0
	    }

	    if (this.element.getBoundingClientRect) {
	      rect = this.element.getBoundingClientRect()
	    }

	    return {
	      top: rect.top + win.pageYOffset - documentElement.clientTop,
	      left: rect.left + win.pageXOffset - documentElement.clientLeft
	    }
	  }

	  NoFrameworkAdapter.prototype.on = function(event, handler) {
	    var eventParts = event.split('.')
	    var eventType = eventParts[0]
	    var namespace = eventParts[1] || '__default'
	    var nsHandlers = this.handlers[namespace] = this.handlers[namespace] || {}
	    var nsTypeList = nsHandlers[eventType] = nsHandlers[eventType] || []

	    nsTypeList.push(handler)
	    this.element.addEventListener(eventType, handler)
	  }

	  NoFrameworkAdapter.prototype.outerHeight = function(includeMargin) {
	    var height = this.innerHeight()
	    var computedStyle

	    if (includeMargin && !isWindow(this.element)) {
	      computedStyle = window.getComputedStyle(this.element)
	      height += parseInt(computedStyle.marginTop, 10)
	      height += parseInt(computedStyle.marginBottom, 10)
	    }

	    return height
	  }

	  NoFrameworkAdapter.prototype.outerWidth = function(includeMargin) {
	    var width = this.innerWidth()
	    var computedStyle

	    if (includeMargin && !isWindow(this.element)) {
	      computedStyle = window.getComputedStyle(this.element)
	      width += parseInt(computedStyle.marginLeft, 10)
	      width += parseInt(computedStyle.marginRight, 10)
	    }

	    return width
	  }

	  NoFrameworkAdapter.prototype.scrollLeft = function() {
	    var win = getWindow(this.element)
	    return win ? win.pageXOffset : this.element.scrollLeft
	  }

	  NoFrameworkAdapter.prototype.scrollTop = function() {
	    var win = getWindow(this.element)
	    return win ? win.pageYOffset : this.element.scrollTop
	  }

	  NoFrameworkAdapter.extend = function() {
	    var args = Array.prototype.slice.call(arguments)

	    function merge(target, obj) {
	      if (typeof target === 'object' && typeof obj === 'object') {
	        for (var key in obj) {
	          if (obj.hasOwnProperty(key)) {
	            target[key] = obj[key]
	          }
	        }
	      }

	      return target
	    }

	    for (var i = 1, end = args.length; i < end; i++) {
	      merge(args[0], args[i])
	    }
	    return args[0]
	  }

	  NoFrameworkAdapter.inArray = function(element, array, i) {
	    return array == null ? -1 : array.indexOf(element, i)
	  }

	  NoFrameworkAdapter.isEmptyObject = function(obj) {
	    /* eslint no-unused-vars: 0 */
	    for (var name in obj) {
	      return false
	    }
	    return true
	  }

	  Waypoint.adapters.push({
	    name: 'noframework',
	    Adapter: NoFrameworkAdapter
	  })
	  Waypoint.Adapter = NoFrameworkAdapter
	}())
	;

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = "<section class=\"space__item-container\">\n    <article class=\"space__item\" v-for=\"space in makerspaces\" data-lat=\"{{space.address.lat}}\" data-lng=\"{{space.address.lng}}\">\n      <h1 class=\"space__title\">{{space.post_title}}</h1>\n\n      <div class=\"space__info\" v-if=\"space.membership_info\">\n        <h3 class=\"space__text--bold\">Membership Info</h3>\n        <p class=\"space__text\">{{space.membership_info}}</p>\n      </div>\n\n      <div class=\"space__info\" v-if=\"space.classes\">\n        <h3 class=\"space__text--bold\">Classes</h3>\n        <p class=\"space__text\">{{space.classes}}</p>\n      </div>\n\n      <div class=\"space__info\" v-if=\"space.website\">\n        <h3 class=\"space__text--bold\">Website</h3>\n        <p class=\"space__text\"><a target=\"_blank\" href=\"{{space.website}}\">{{space.website}}</a></p>\n      </div>\n\n    </article>\n  </section>";

/***/ }
/******/ ]);