(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['date-format-helper'] = {}));
}(this, (function (exports) { 'use strict';

	/**
	 * req: string or object
	 * back string for like regexp date format
	 */
	function dateFormat(props) {
		// S init Date
		let [t, format, unit] = [0, 'YYYY-MM-DD hh:mm:ss', 'ms'];
		if (['string', 'number'].includes(typeof props)) {
			t = props;
		} else if (typeof props === 'object') {
			props.t ? t = props.t : '';
			props.format ? format = props.format : '';
			props.unit ? unit = props.unit : '';
		}
		// E init date
	  const date = dateTransform(t, unit);
	  function fillZero(n) {
	    return n >= 10 ? n : '0' + n;
		}
		function fillZeroTwo(n) {
			return n >= 100 ? n : '0' + fillZero(n);
		}
	  const year = date.getFullYear();
	  const month = fillZero(date.getMonth() + 1);
	  const day = fillZero(date.getDate());
	  const hour = fillZero(date.getHours());
	  const min = fillZero(date.getMinutes());
		const sec = fillZero(date.getSeconds());
		const milliSec = fillZeroTwo(date.getMilliseconds());
	  return format.replace('YYYY', year)
	  	.replace('MM', month)
	  	.replace('DD', day)
	  	.replace('hh', hour)
	  	.replace('mm', min)
			.replace('ss', sec)
			.replace('SSS', milliSec);
	}

	// return Date Object
	function dateTransform(t, unit) {
		if (typeof t === 'number') {
			return unit === 'ms' ? new Date(t) : new Date(t * 1000);
		}
		// new Date('a') instanceof Date  is true, but it not a normal date, need use isNaN valueOf check it.
		return isNaN(new Date(t)) ? new Date() : new Date(t);
	}

	exports.dateFormat = dateFormat;
	exports.dateTransform = dateTransform;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
