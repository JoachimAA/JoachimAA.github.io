(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4Hix":function(e,t,n){e.exports={container:"shopItems-module--container--3vBn6"}},jzlG:function(e,t,n){e.exports={image:"shopItem-module--image--B6B8R",container:"shopItem-module--container--JUCR1",name:"shopItem-module--name--234y6",priceFrom:"shopItem-module--priceFrom--1-59D",priceContainer:"shopItem-module--priceContainer--2URti"}},vg2q:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("rY4l"),i=n("KQm4"),l=n("jzlG"),c=n.n(l),m=function(e){var t=e.item,n=t.tiers.find((function(e){return"Sample"===e.name})),r=n?n.price:"Unknown";console.log(r);return a.a.createElement("div",{style:{fontFamily:"rat"},className:c.a.container},a.a.createElement("div",{className:c.a.image,style:{backgroundImage:"url(src/images/logo.svg)"}},"picture box"),a.a.createElement("div",{className:c.a.name},t.name),a.a.createElement("div",{className:c.a.priceContainer},a.a.createElement("div",{className:c.a.priceFrom},"From"),a.a.createElement("div",null,"£"+r.toFixed(2))))},u=n("4Hix"),s=n.n(u),p=n("9gHR");function d(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=function(){for(var e,t=[],n=d(p.a.shopCategories);!(e=n()).done;){var r=e.value;t=[].concat(Object(i.a)(t),Object(i.a)(r.items))}return a.a.createElement("div",{className:s.a.container},t.map((function(e){return a.a.createElement(m,{item:e})})))},y=function(){return a.a.createElement("div",null,a.a.createElement(v,null))},g=n("JwsL");t.default=function(){return r.createElement("div",{style:{fontFamily:"Montserrat"}},r.createElement(o.a,null),r.createElement(y,null),r.createElement(g.a,null))}}}]);
//# sourceMappingURL=component---src-pages-shop-js-c6f36973f6382c24a2b8.js.map