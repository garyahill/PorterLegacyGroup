/*! For license information please see npm.scheduler.37bc8e0dbee465aa10fa.js.LICENSE.txt */
"use strict";(self.webpackChunkporter_legacy_group=self.webpackChunkporter_legacy_group||[]).push([[979],{463:(e,n)=>{function t(e,n){var t=e.length;e.push(n);e:for(;0<t;){var a=t-1>>>1,r=e[a];if(!(0<l(r,n)))break e;e[a]=n,e[t]=r,t=a}}function a(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var n=e[0],t=e.pop();if(t!==n){e[0]=t;e:for(var a=0,r=e.length,i=r>>>1;a<i;){var u=2*(a+1)-1,o=e[u],s=u+1,c=e[s];if(0>l(o,t))s<r&&0>l(c,o)?(e[a]=c,e[s]=t,a=s):(e[a]=o,e[u]=t,a=u);else{if(!(s<r&&0>l(c,t)))break e;e[a]=c,e[s]=t,a=s}}}return n}function l(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;n.unstable_now=function(){return i.now()}}else{var u=Date,o=u.now();n.unstable_now=function(){return u.now()-o}}var s=[],c=[],f=1,b=null,p=3,d=!1,v=!1,y=!1,g="function"==typeof setTimeout?setTimeout:null,_="function"==typeof clearTimeout?clearTimeout:null,m="undefined"!=typeof setImmediate?setImmediate:null;function h(e){for(var n=a(c);null!==n;){if(null===n.callback)r(c);else{if(!(n.startTime<=e))break;r(c),n.sortIndex=n.expirationTime,t(s,n)}n=a(c)}}function k(e){if(y=!1,h(e),!v)if(null!==a(s))v=!0,N(w);else{var n=a(c);null!==n&&R(k,n.startTime-e)}}function w(e,t){v=!1,y&&(y=!1,_(P),P=-1),d=!0;var l=p;try{for(h(t),b=a(s);null!==b&&(!(b.expirationTime>t)||e&&!M());){var i=b.callback;if("function"==typeof i){b.callback=null,p=b.priorityLevel;var u=i(b.expirationTime<=t);t=n.unstable_now(),"function"==typeof u?b.callback=u:b===a(s)&&r(s),h(t)}else r(s);b=a(s)}if(null!==b)var o=!0;else{var f=a(c);null!==f&&R(k,f.startTime-t),o=!1}return o}finally{b=null,p=l,d=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var x,I=!1,T=null,P=-1,C=5,L=-1;function M(){return!(n.unstable_now()-L<C)}function F(){if(null!==T){var e=n.unstable_now();L=e;var t=!0;try{t=T(!0,e)}finally{t?x():(I=!1,T=null)}}else I=!1}if("function"==typeof m)x=function(){m(F)};else if("undefined"!=typeof MessageChannel){var j=new MessageChannel,E=j.port2;j.port1.onmessage=F,x=function(){E.postMessage(null)}}else x=function(){g(F,0)};function N(e){T=e,I||(I=!0,x())}function R(e,t){P=g((function(){e(n.unstable_now())}),t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){v||d||(v=!0,N(w))},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return a(s)},n.unstable_next=function(e){switch(p){case 1:case 2:case 3:var n=3;break;default:n=p}var t=p;p=n;try{return e()}finally{p=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=p;p=e;try{return n()}finally{p=t}},n.unstable_scheduleCallback=function(e,r,l){var i=n.unstable_now();switch(l="object"==typeof l&&null!==l&&"number"==typeof(l=l.delay)&&0<l?i+l:i,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return e={id:f++,callback:r,priorityLevel:e,startTime:l,expirationTime:u=l+u,sortIndex:-1},l>i?(e.sortIndex=l,t(c,e),null===a(s)&&e===a(c)&&(y?(_(P),P=-1):y=!0,R(k,l-i))):(e.sortIndex=u,t(s,e),v||d||(v=!0,N(w))),e},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(e){var n=p;return function(){var t=p;p=n;try{return e.apply(this,arguments)}finally{p=t}}}},982:(e,n,t)=>{e.exports=t(463)}}]);
//# sourceMappingURL=npm.scheduler.37bc8e0dbee465aa10fa.js.map