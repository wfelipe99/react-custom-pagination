module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.r(t),r.d(t,"Pagination",(function(){return s}));var n=r(0),o=r.n(n);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=function(e){for(var t=[],r=1;r<=Math.ceil(e.totalPosts/e.postsPerPage);r++)t.push(r);var i=c(Object(n.useState)(0),2),u=i[0],l=i[1],s=c(Object(n.useState)(5),2),f=s[0],d=s[1],b=c(Object(n.useState)(1),2),y=b[0],p=b[1];Object(n.useEffect)((function(){d(e.view?e.view:5)}),[e.view]);var v=function(t){e.paginate(t),p(t)},g=Math.ceil(t.length/f),h=Math.max.apply(Math,t),m={display:"flex",justifyContent:"center",alignItems:"center",color:e.color?e.color:"white",backgroundColor:e.bgColor?e.bgColor:"skyblue",width:e.boxWidth?e.boxWidth:"40px",height:e.boxHeight?e.boxHeight:"40px",cursor:"pointer",borderRadius:e.boxRadius?e.boxRadius:"50%"},O=a(a({},m),{},{width:"auto",cursor:"pointer",borderRadius:e.indexBorderRadius?e.indexBorderRadius:"5%",padding:"0 5px"}),j=a(a({},O),{},{backgroundColor:e.indexbgColor?e.indexbgColor:"tomato"}),x=a(a({},m),{},{backgroundColor:e.selectColor?e.selectColor:"gray"}),w={display:"flex",justifyContent:e.justify?e.justify:"space-evenly"};return o.a.createElement("div",{style:w},e.showFirst&&u>0?o.a.createElement("div",{style:O,onClick:function(){return p(1),l(0),void e.paginate(1)}},e.showFirstText?e.showFirstText:"Last Page"):void 0,u>0?o.a.createElement("div",{onClick:function(){l(u-1)},style:m},"<"):void 0,t.slice(u*f,u*f+f).map((function(e){return e===y?o.a.createElement("div",{key:e,onClick:function(){return v(e)},style:x},e):o.a.createElement("div",{key:e,onClick:function(){return v(e)},style:m},e)})),u!==g-1?o.a.createElement("div",{onClick:function(){l(u+1)},style:m},">"):void 0,e.showLast&&u!==g-1?o.a.createElement("div",{style:O,onClick:function(){return p(h),l(g-1),void e.paginate(h)}},e.showLastText?e.showLastText:"Last Page"):void 0,e.showIndex?o.a.createElement("div",{style:j},"Page "+y+" of "+h):void 0)}}]);