!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.Iterum_1_0_2=r():e.Iterum_1_0_2=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=34)}([function(e,r,t){"use strict";function n(e,r){var t=!0,n=!1,i=void 0;try{for(var u,c=o.gen.call(this)[Symbol.iterator]();!(t=(u=c.next()).done);t=!0){var s=u.value,f=a(s,2),l=f[0],v=f[1];if(e.call(r||this,v,l,this))return[l,v]}}catch(e){n=!0,i=e}finally{try{!t&&c.return&&c.return()}finally{if(n)throw i}}}var a=function(){function e(e,r){var t=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=[["Function"]],o=t(5);e.exports={fn:n,validation:i}},function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();e.exports=function(){function e(){n(this,e)}return a(e,null,[{key:Symbol.hasInstance,value:function(e){return null!=e&&"function"==typeof e[Symbol.iterator]}}]),e}()},function(e,r,t){"use strict";function n(){var e,r,t,n,o,u,c,s,f,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,v=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:e=!0,r=!1,t=void 0,i.prev=3,n=this.entries()[Symbol.iterator]();case 5:if(e=(o=n.next()).done){i.next=20;break}if(u=o.value,c=a(u,2),s=c[0],f=c[1],!(s>=v)){i.next=14;break}return i.abrupt("return");case 14:if(!(s>=l)){i.next=17;break}return i.next=17,f;case 17:e=!0,i.next=5;break;case 20:i.next=26;break;case 22:i.prev=22,i.t0=i.catch(3),r=!0,t=i.t0;case 26:i.prev=26,i.prev=27,!e&&n.return&&n.return();case 29:if(i.prev=29,!r){i.next=32;break}throw t;case 32:return i.finish(29);case 33:return i.finish(26);case 34:case"end":return i.stop()}},i[0],this,[[3,22,26,34],[27,,29,33]])}var a=function(){function e(e,r){var t=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=[n].map(regeneratorRuntime.mark),o=[["Number","Undefined"],["Number","Undefined"]];e.exports={gen:n,validation:o}},function(e,r,t){"use strict";function n(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function a(e,r){return{fn:function(){for(var t=arguments.length,a=Array(t),i=0;i<t;i++)a[i]=arguments[i];var o=this,u=[].concat(n(o)),c=a.findIndex(function(e){return"function"==typeof e}),s=a[c];return a[c]=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t[r]=o,s.apply(this,t)},e.apply(u,a)}}}e.exports=a},function(e,r,t){"use strict";function n(e,r,t){var n={},u={instance:[],type:[]},c=r.some(function(r){var t=a(r,u);return n[t]=o[t](e),"instance"===t?i(e,r):n[t]===r})||0===r.length;return t?t(c,e,u,n):c}function a(e,r){var t="string"==typeof e?"type":"instance";return r[t].push("instance"===t?e.name:e),t}function i(e,r){var t=r[(Symbol||{}).hasInstance];return!!(e instanceof r||t)&&t.call(r,e)}var o={type:function(e){return{}.toString.call(e).slice(8,-1)},instance:function(e){return null==e?""+e:e.constructor.name}};e.exports=n},function(e,r,t){"use strict";function n(){var e,r,t,n,i,o,u;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e=0,r=!0,t=!1,n=void 0,a.prev=4,i=this[Symbol.iterator]();case 6:if(r=(o=i.next()).done){a.next=14;break}return u=o.value,a.next=10,[e,u];case 10:++e;case 11:r=!0,a.next=6;break;case 14:a.next=20;break;case 16:a.prev=16,a.t0=a.catch(4),t=!0,n=a.t0;case 20:a.prev=20,a.prev=21,!r&&i.return&&i.return();case 23:if(a.prev=23,!t){a.next=26;break}throw n;case 26:return a.finish(23);case 27:return a.finish(20);case 28:case"end":return a.stop()}},a[0],this,[[4,16,20,28],[21,,23,27]])}var a=[n].map(regeneratorRuntime.mark);e.exports={gen:n}},function(e,r,t){"use strict";function n(e,r){var t=a.fn.call(this,e,r);return t?t[0]:-1}var a=t(0),i=[["Function"]];e.exports={fn:n,validation:i}},function(e,r,t){"use strict";e.exports=t(32)},function(e,r,t){"use strict";function n(e,r,t,n){t=t||this.handler,n=n||this.fnName,e=a(e);var u=null,c=!e.some(function(e,t){if(o(e,["Object"]))for(var a=Math.min(r.length,t+e.times);t<a&&!u;++t)u=o(r[t],e.rule,i(n,t));else u=o(r[t],e,i(n,t));return u});return t?t(u,c):c}function a(e){var r=[];return e.every(function(e,t){var n=o(e,["Array"]);return n?r.push(e):o(e,["Number"])&&(r[t-1]={rule:r[t-1],times:e}),n}),r}function i(e,r){return function(t,n,a,i){return t?null:{fnName:e,nth:r,value:n,expected:a,actual:i}}}var o=t(4);e.exports=n},function(e,r,t){"use strict";function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.reduceRight(function(e,r){return regeneratorRuntime.mark(function t(n){var a,i,o,u,c,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=!0,i=!1,o=void 0,t.prev=3,u=e(n)[Symbol.iterator]();case 5:if(a=(c=u.next()).done){t.next=11;break}return s=c.value,t.delegateYield(r(s),"t0",8);case 8:a=!0,t.next=5;break;case 11:t.next=17;break;case 13:t.prev=13,t.t1=t.catch(3),i=!0,o=t.t1;case 17:t.prev=17,t.prev=18,!a&&u.return&&u.return();case 20:if(t.prev=20,!i){t.next=23;break}throw o;case 23:return t.finish(20);case 24:return t.finish(17);case 25:case"end":return t.stop()}},t,this,[[3,13,17,25],[18,,20,24]])})},regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r;case 2:case"end":return e.stop()}},e,this)}))}e.exports=n},function(e,r,t){"use strict";function n(e){if(e){var r=e.expected,t=Object.keys(r).filter(function(e){return r[e].length>0}).map(function(e){var t=a(r[e],1),n=t[0];return[(/^[aeiou]/i.test(n)?"an":"a")+" "+n].concat(r[e].slice(1)).map(function(r){return i[e](r)}).join(" or ")}).join(", or ");throw TypeError(e.value+" is not "+t)}}var a=function(){function e(e,r){var t=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i={type:function(e){return e.toLowerCase()},instance:function(e){return e+" instance"}};e.exports=n},function(e,r,t){"use strict";function n(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e){function r(e){return o([[s]],[e],f,"Iterum"),t(e)}function t(e){var t=void 0;return t=u(e,[s])?e[Symbol.iterator].bind(e):e,Object.create(r.prototype,a({},Symbol.iterator,{value:t}))}Object.defineProperty(r.prototype,"entries",{value:c.gen}),Object.defineProperty(r,"entries",{value:function(e){return c.gen.call(u(e,[s])?e:[])}});var i=e.staticMethods,l=e.methods;return Object.keys(i).forEach(function(e){Object.defineProperty(r,e,{value:function(){for(var a=i[e],u=a.gen,c=a.validation,s=arguments.length,l=Array(s),v=0;v<s;v++)l[v]=arguments[v];return o(c,l,f,e),t(u.bind.apply(u,[r].concat(n(l))))}})}),Object.keys(l).forEach(function(e){Object.defineProperty(r,e,{value:function(r){for(var a=l[e],i=a.fn,c=a.gen,v=a.validation,p=arguments.length,h=Array(p>1?p-1:0),d=1;d<p;d++)h[d-1]=arguments[d];o([[]].concat(n(v||[])),[r].concat(n(h)),f,e);var x=t(u(r,[s])?r:[]);return i?i.call.apply(i,[x].concat(n(h))):t(c.bind.apply(c,[x].concat(n(h))))}}),Object.defineProperty(r.prototype,e,{value:function(){for(var r=l[e],a=r.fn,i=r.gen,u=r.validation,c=arguments.length,s=Array(c),v=0;v<c;v++)s[v]=arguments[v];return o(u||[],s,f,e),a?a.call.apply(a,[this].concat(n(s))):t(i.bind.apply(i,[this].concat(n(s))))}})}),r}var o=t(8),u=t(4),c=t(5),s=t(1),f=t(10);e.exports=i},function(e,r,t){"use strict";function n(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];var a,u,c,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this,u=regeneratorRuntime.mark(function e(){var r,t,n,i,o,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,t=!1,n=void 0,e.prev=3,i=a[Symbol.iterator]();case 5:if(r=(o=i.next()).done){e.next=12;break}return u=o.value,e.next=9,[u];case 9:r=!0,e.next=5;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),t=!0,n=e.t0;case 18:e.prev=18,e.prev=19,!r&&i.return&&i.return();case 21:if(e.prev=21,!t){e.next=24;break}throw n;case 24:return e.finish(21);case 25:return e.finish(18);case 26:case"end":return e.stop()}},e,this,[[3,14,18,26],[19,,21,25]])}),c=r.map(function(e){return regeneratorRuntime.mark(function r(t){var a,i,o,u,c,s;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:a=!0,i=!1,o=void 0,r.prev=3,u=e[Symbol.iterator]();case 5:if(a=(c=u.next()).done){r.next=12;break}return s=c.value,r.next=9,[].concat(n(t),[s]);case 9:a=!0,r.next=5;break;case 12:r.next=18;break;case 14:r.prev=14,r.t0=r.catch(3),i=!0,o=r.t0;case 18:r.prev=18,r.prev=19,!a&&u.return&&u.return();case 21:if(r.prev=21,!i){r.next=24;break}throw o;case 24:return r.finish(21);case 25:return r.finish(18);case 26:case"end":return r.stop()}},r,this,[[3,14,18,26],[19,,21,25]])})}).reverse(),s=o.apply(void 0,n(c).concat([u])),e.delegateYield(s(),"t0",5);case 5:case"end":return e.stop()}},i[0],this)}var i=[a].map(regeneratorRuntime.mark),o=t(9),u=t(1),c=[[u],1/0];e.exports={gen:a,validation:c}},function(e,r,t){"use strict";function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];var n,i,o,u,c,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(this,"t0",1);case 1:n=!0,i=!1,o=void 0,e.prev=4,u=r[Symbol.iterator]();case 6:if(n=(c=u.next()).done){e.next=12;break}return s=c.value,e.delegateYield(s,"t1",9);case 9:n=!0,e.next=6;break;case 12:e.next=18;break;case 14:e.prev=14,e.t2=e.catch(4),i=!0,o=e.t2;case 18:e.prev=18,e.prev=19,!n&&u.return&&u.return();case 21:if(e.prev=21,!i){e.next=24;break}throw o;case 24:return e.finish(21);case 25:return e.finish(18);case 26:case"end":return e.stop()}},a[0],this,[[4,14,18,26],[19,,21,25]])}var a=[n].map(regeneratorRuntime.mark),i=t(1),o=[[i],1/0];e.exports={gen:n,validation:o}},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.delegateYield(i.gen.call(this,e),"t0",1);case 1:case"end":return r.stop()}},a[0],this)}var a=[n].map(regeneratorRuntime.mark),i=t(2),o=[["Number","Undefined"]];e.exports={gen:n,validation:o}},function(e,r,t){"use strict";function n(e,r){var t,n,o,u,c,s,f,l,v,p;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:t=!1,n=!0,o=!1,u=void 0,i.prev=4,c=this.entries()[Symbol.iterator]();case 6:if(n=(s=c.next()).done){i.next=23;break}if(f=s.value,l=a(f,2),v=l[0],p=l[1],!t){i.next=16;break}return i.next=14,p;case 14:i.next=20;break;case 16:if(e.call(r,p,v,this)){i.next=20;break}return t=!0,i.next=20,p;case 20:n=!0,i.next=6;break;case 23:i.next=29;break;case 25:i.prev=25,i.t0=i.catch(4),o=!0,u=i.t0;case 29:i.prev=29,i.prev=30,!n&&c.return&&c.return();case 32:if(i.prev=32,!o){i.next=35;break}throw u;case 35:return i.finish(32);case 36:return i.finish(29);case 37:case"end":return i.stop()}},i[0],this,[[4,25,29,37],[30,,32,36]])}var a=function(){function e(e,r){var t=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=[n].map(regeneratorRuntime.mark),o=[["Function"]];e.exports={gen:n,validation:o}},function(e,r,t){"use strict";function n(e,r){return!a.fn.call(this,function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return!e.call.apply(e,[this].concat(t))},r)}var a=t(0),i=[["Function"]];e.exports={fn:n,validation:i}},function(e,r,t){"use strict";function n(e,r){var t,n,o,u,c,s,f,l,v;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:t=!0,n=!1,o=void 0,i.prev=3,u=this.entries()[Symbol.iterator]();case 5:if(t=(c=u.next()).done){i.next=16;break}if(s=c.value,f=a(s,2),l=f[0],v=f[1],!e.call(r,v,l,this)){i.next=13;break}return i.next=13,v;case 13:t=!0,i.next=5;break;case 16:i.next=22;break;case 18:i.prev=18,i.t0=i.catch(3),n=!0,o=i.t0;case 22:i.prev=22,i.prev=23,!t&&u.return&&u.return();case 25:if(i.prev=25,!n){i.next=28;break}throw o;case 28:return i.finish(25);case 29:return i.finish(22);case 30:case"end":return i.stop()}},i[0],this,[[3,18,22,30],[23,,25,29]])}var a=function(){function e(e,r){var t=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=[n].map(regeneratorRuntime.mark),o=[["Function"]];e.exports={gen:n,validation:o}},function(e,r,t){"use strict";function n(e,r){var t=a.fn.call(this,e,r);return t&&t[1]}var a=t(0),i=[["Function"]];e.exports={fn:n,validation:i}},function(e,r,t){"use strict";function n(){var e,r,t,n,o,c,s,f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e=this[Symbol.iterator](),r=[];case 2:t=void 0,n=void 0,o=void 0,c=void 0;do{s=e.next(),n=s.value,t=s.done,o=t&&r.length>0,c=!t&&u(n,[i])&&r.length<f,o?e=r.pop():c&&(r.push(e),e=n[Symbol.iterator]())}while(o||c);if(!t){a.next=10;break}return a.abrupt("return");case 10:return a.next=12,n;case 12:a.next=2;break;case 14:case"end":return a.stop()}},a[0],this)}var a=[n].map(regeneratorRuntime.mark),i=t(1),o=[["Number","Undefined"]],u=t(4);e.exports={gen:n,validation:o}},function(e,r,t){"use strict";e.exports=t(3)([].forEach,2)},function(e,r,t){"use strict";function n(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=i.gen.call(this,r);return!!a.fn.call(t,function(r){return r===e||Object.is(r,e)})}var a=t(0),i=t(2);e.exports={fn:n}},function(e,r,t){"use strict";function n(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=i.gen.call(this,r),n=a.fn.call(t,function(r){return r===e});return n===-1?-1:r+n}var a=t(6),i=t(2);e.exports={fn:n}},function(e,r,t){"use strict";function n(e,r){var t,n,o,u,c,s,f,l,v;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:t=!0,n=!1,o=void 0,i.prev=3,u=this.entries()[Symbol.iterator]();case 5:if(t=(c=u.next()).done){i.next=15;break}return s=c.value,f=a(s,2),l=f[0],v=f[1],i.next=12,e.call(r,v,l,this);case 12:t=!0,i.next=5;break;case 15:i.next=21;break;case 17:i.prev=17,i.t0=i.catch(3),n=!0,o=i.t0;case 21:i.prev=21,i.prev=22,!t&&u.return&&u.return();case 24:if(i.prev=24,!n){i.next=27;break}throw o;case 27:return i.finish(24);case 28:return i.finish(21);case 29:case"end":return i.stop()}},i[0],this,[[3,17,21,29],[22,,24,28]])}var a=function(){function e(e,r){var t=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=[n].map(regeneratorRuntime.mark),o=[["Function"]];e.exports={gen:n,validation:o}},function(e,r,t){"use strict";function n(){var e,r,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e=this[Symbol.iterator](),r=0;case 2:if(!(r<n)){a.next=9;break}return t=e.next(),a.next=6,t.done?i:t.value;case 6:++r,a.next=2;break;case 9:return a.delegateYield(e,"t0",10);case 10:case"end":return a.stop()}},a[0],this)}var a=[n].map(regeneratorRuntime.mark),i=[["Number","Undefined"]];e.exports={gen:n,validation:i}},function(e,r,t){"use strict";e.exports=t(3)([].reduce,3)},function(e,r,t){"use strict";e.exports=t(3)([].reduceRight,3)},function(e,r,t){"use strict";function n(){var e,r,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(n<=0)){a.next=2;break}return a.abrupt("return");case 2:if(e=this[Symbol.iterator](),r=e.next(),!r.done){a.next=6;break}return a.abrupt("return");case 6:return a.next=8,r.value;case 8:return a.delegateYield(e,"t0",9);case 9:t=1;case 10:if(!(t<n)){a.next=15;break}return a.delegateYield(this,"t1",12);case 12:++t,a.next=10;break;case 15:case"end":return a.stop()}},a[0],this)}var a=[n].map(regeneratorRuntime.mark),i=[["Number","Undefined"]];e.exports={gen:n,validation:i}},function(e,r,t){"use strict";function n(e,r){return!!a.fn.call(this,e,r)}var a=t(0),i=[["Function"]];e.exports={fn:n,validation:i}},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.delegateYield(i.gen.call(this,0,e),"t0",1);case 1:case"end":return r.stop()}},a[0],this)}var a=[n].map(regeneratorRuntime.mark),i=t(2),o=[["Number","Undefined"]];e.exports={gen:n,validation:o}},function(e,r,t){"use strict";function n(e,r){var t,n,o,u,c,s,f,l,v;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:t=!0,n=!1,o=void 0,i.prev=3,u=this.entries()[Symbol.iterator]();case 5:if(t=(c=u.next()).done){i.next=19;break}if(s=c.value,f=a(s,2),l=f[0],v=f[1],!e.call(r,v,l,this)){i.next=15;break}return i.next=13,v;case 13:i.next=16;break;case 15:return i.abrupt("return");case 16:t=!0,i.next=5;break;case 19:i.next=25;break;case 21:i.prev=21,i.t0=i.catch(3),n=!0,o=i.t0;case 25:i.prev=25,i.prev=26,!t&&u.return&&u.return();case 28:if(i.prev=28,!n){i.next=31;break}throw o;case 31:return i.finish(28);case 32:return i.finish(25);case 33:case"end":return i.stop()}},i[0],this,[[3,21,25,33],[26,,28,32]])}var a=function(){function e(e,r){var t=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=[n].map(regeneratorRuntime.mark),o=[["Function"]];e.exports={gen:n,validation:o}},function(e,r,t){"use strict";function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];var n,i,o,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=[this].concat(r),i=n.map(function(e){return e[Symbol.iterator]()}),o=!0;case 3:if(!o){e.next=11;break}if(u=i.map(function(e){return e.next()}),!(o=u.every(function(e){return!e.done}))){e.next=9;break}return e.next=9,u.map(function(e){return e.value});case 9:e.next=3;break;case 11:case"end":return e.stop()}},a[0],this)}var a=[n].map(regeneratorRuntime.mark),i=t(1),o=[[i],1/0];e.exports={gen:n,validation:o}},function(e,r,t){"use strict";var n=t(11),a=t(33),i=t(12),o=t(13),u=t(14),c=t(15),s=t(16),f=t(17),l=t(18),v=t(0),p=t(6),h=t(19),d=t(20),x=t(21),m=t(22),y=t(23),b=t(24),g=t(25),k=t(26),w=t(27),R=t(2),A=t(28),S=t(29),j=t(30),O=t(31),E=n({staticMethods:{range:a},methods:{every:s,find:l,findEntry:v,findIndex:p,forEach:d,includes:x,indexOf:m,reduce:g,reduceRight:k,some:A,cartesian:i,concat:o,drop:u,dropWhile:c,filter:f,flatten:h,map:y,padEnd:b,repeat:w,slice:R,take:S,takeWhile:j,zip:O}});e.exports=E},function(e,r,t){"use strict";function n(){var e,r,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e=Math.sign(o),r=i-n,t=n;case 3:if(!(r*e>=0)){a.next=10;break}return a.next=6,t;case 6:r-=o;case 7:t+=o,a.next=3;break;case 10:case"end":return a.stop()}},a[0],this)}var a=[n].map(regeneratorRuntime.mark),i=["Number","Undefined"],o=[i,i,i];e.exports={gen:n,validation:o}},function(e,r,t){e.exports=t(7)}])});