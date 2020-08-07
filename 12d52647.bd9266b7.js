(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,b=p["".concat(a,".").concat(u)]||p[u]||m[u]||r;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(2),o=n(6),r=(n(0),n(104)),a={title:"Motion"},s={unversionedId:"motion",id:"motion",isDocsHomePage:!1,title:"Motion",description:"This page is incomplete and may see significant changes.",source:"@site/docs/motion.md",permalink:"/design-system/docs/motion",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/motion.md",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1596775482,sidebar:"docs",previous:{title:"Color",permalink:"/design-system/docs/color"},next:{title:"Typography",permalink:"/design-system/docs/typography"}},c=[{value:"Reduced motion",id:"reduced-motion",children:[]},{value:"Debugging motion",id:"debugging-motion",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Work in progress")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This page is incomplete and may see significant changes.\nPlease ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/wwnorton/design-system/issues"}),"submit feedback on GitHub"),"\nif you would like to contribute."))),Object(r.b)("p",null,"The Norton design system has fully implemented the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://material.io/design/motion"}),"Material Design's motion system"),"\nand it is highly recommended that you reference Material's guidance when designing\nfor motion. All motion tokens and utilities are available in the ",Object(r.b)("inlineCode",{parentName:"p"},"@wwnds/core")," library."),Object(r.b)("h2",{id:"reduced-motion"},"Reduced motion"),Object(r.b)("p",null,"To ensure that ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"}),"prefers-reduced-motion"),"\nis always followed, it is highly recommend that you use the ",Object(r.b)("inlineCode",{parentName:"p"},"transition")," Sass\nfunction in ",Object(r.b)("inlineCode",{parentName:"p"},"@wwnds/core")," to set your transitions.\nThis will multiply the provided duration by the ",Object(r.b)("inlineCode",{parentName:"p"},"duration-scalar")," token, which\nis automatically set to ",Object(r.b)("inlineCode",{parentName:"p"},"0")," when the user prefers reduced motion."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-scss"}),"@use '@wwnds/core' as nds;\n\n.my-sidebar {\n    transition: nds.transition(transform, var(--nds-duration-close));\n}\n\n.my-sidebar.open {\n    transition: nds.transition(transform, var(--nds-duration-open));\n}\n")),Object(r.b)("h2",{id:"debugging-motion"},"Debugging motion"),Object(r.b)("p",null,"During development, it can be useful to slow down durations and easings to ensure\nso that you can see the animations in greater detail.\nThe design system provides a special ",Object(r.b)("inlineCode",{parentName:"p"},"duration-scalar")," token to help with this.\nTo modify it, simply open your dev tools, click on the ",Object(r.b)("inlineCode",{parentName:"p"},"<html>")," element, and\nchange the value of the ",Object(r.b)("inlineCode",{parentName:"p"},"--nds-duration-scalar")," property to any number.\nSince all durations are multiplied by this token, all motion will automatically\nscale along with it."))}d.isMDXComponent=!0}}]);