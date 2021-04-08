(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return g})),a.d(t,"metadata",(function(){return f})),a.d(t,"toc",(function(){return v})),a.d(t,"default",(function(){return j}));var n=a(5),r=a(1),o=a(0),c=a.n(o),i=a(152),s=a(179),l=a(153),p=a(123),b=a.n(p),d=37,u=39;var m=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,r=e.values,i=e.groupId,p=e.className,m=Object(s.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,f=Object(o.useState)(n),v=f[0],O=f[1],j=o.Children.toArray(e.children);if(null!=i){var y=h[i];null!=y&&y!==v&&r.some((function(e){return e.value===y}))&&O(y)}var w=function(e){O(e),null!=i&&g(i,e)},N=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},p)},r.map((function(e){var t=e.value,a=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(l.a)("tabs__item",b.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(o.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};var h=function(e){var t=e.children,a=e.hidden,n=e.className;return c.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},g={title:"Getting started",slug:"/guides/dev"},f={unversionedId:"guides/dev/getting-started",id:"guides/dev/getting-started",isDocsHomePage:!1,title:"Getting started",description:"The implementation of the Norton Design System for the web is composed of two main packages:",source:"@site/docs/guides/dev/getting-started.mdx",slug:"/guides/dev",permalink:"/design-system/docs/guides/dev",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/guides/dev/getting-started.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1617897716,sidebar:"guides",previous:{title:"Guides",permalink:"/design-system/docs/guides"},next:{title:"Stylesheet setup",permalink:"/design-system/docs/guides/dev/stylesheet-setup"}},v=[{value:"Core package",id:"core-package",children:[]},{value:"React package",id:"react-package",children:[]},{value:"Independent package usage",id:"independent-package-usage",children:[]}],O={toc:v};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The implementation of the Norton Design System for the web is composed of two main packages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A modular ",Object(i.b)("a",{parentName:"li",href:"#core-package"},"CSS library")," to help you style your application and content."),Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("a",{parentName:"li",href:"#react-package"},"React component library")," to help you compose accessible, robust applications and content.")),Object(i.b)("p",null,"These two libraries do not depend on each other but work best when used together.\nEach is published to the public NPM registry under ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/org/wwnds"},"the ",Object(i.b)("inlineCode",{parentName:"a"},"@wwnds")," scope"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Audience")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This guide is intended for developers and a minimal understanding of web technologies such as CSS and HTML is assumed.\nGuidance on using the React library also requires a basic understanding of ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"."))),Object(i.b)("h2",{id:"core-package"},"Core package"),Object(i.b)("p",null,"The core package is a ",Object(i.b)("a",{parentName:"p",href:"https://sass-lang.com/"},"Sass")," implementation of the ",Object(i.b)("a",{parentName:"p",href:"/docs/foundations"},"foundations")," and styling for all ",Object(i.b)("a",{parentName:"p",href:"/docs/components"},"components"),".\nIt includes the following features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An implementation of the ",Object(i.b)("a",{parentName:"li",href:"/docs/foundations/design-tokens"},"design tokens")," for all foundational elements (color, typography, etc.) set as ",Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"},"CSS custom properties"),"."),Object(i.b)("li",{parentName:"ul"},"Modular styling for all components via ",Object(i.b)("a",{parentName:"li",href:"https://sass-lang.com/documentation/at-rules/mixin"},"Sass mixins"),"."),Object(i.b)("li",{parentName:"ul"},"A global reset stylesheet, forked from ",Object(i.b)("a",{parentName:"li",href:"https://getbootstrap.com/docs/5.0/content/reboot/"},"the Bootstrap reboot")," to use the Norton Design System foundations."),Object(i.b)("li",{parentName:"ul"},"A Sass API for theming and customizing every aspect of the library, built on ",Object(i.b)("a",{parentName:"li",href:"https://sass-lang.com/blog/the-module-system-is-launched"},"Sass modules"),".")),Object(i.b)(m,{groupId:"package-manager",defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(h,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install @wwnds/core\n"))),Object(i.b)(h,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @wwnds/core\n")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Links")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@wwnds/core"},"NPM: @wwnds/core")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/wwnorton/design-system/tree/main/packages/core"},"GitHub: packages/core"))))),Object(i.b)("h2",{id:"react-package"},"React package"),Object(i.b)("p",null,"The React package is a ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," implementation of the components with no styling applied.\nIt includes the following features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A React ",Object(i.b)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"Typescript")," implementation of the Norton Design System ",Object(i.b)("a",{parentName:"li",href:"/docs/components"},"components"),"."),Object(i.b)("li",{parentName:"ul"},"A rich developer experience powered by the comprehensive typings and descriptions for all top-level components and their props."),Object(i.b)("li",{parentName:"ul"},"Useful ",Object(i.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-overview.html"},"React hooks")," to help you build stateless, functional applications.")),Object(i.b)(m,{groupId:"package-manager",defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(h,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install @wwnds/react\n"))),Object(i.b)(h,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @wwnds/react\n")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Links")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@wwnds/react"},"NPM: @wwnds/react")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/wwnorton/design-system/tree/main/packages/react"},"GitHub: packages/react"))))),Object(i.b)("h2",{id:"independent-package-usage"},"Independent package usage"),Object(i.b)("p",null,"Neither the ",Object(i.b)("a",{parentName:"p",href:"#core"},"core package")," nor the ",Object(i.b)("a",{parentName:"p",href:"#react"},"react package")," depend on one another and can therefore be used fully independently of each other.\nFor instance, you could use ",Object(i.b)("inlineCode",{parentName:"p"},"@wwnds/core")," to style a ",Object(i.b)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue.js")," application, or you could apply your own styling to ",Object(i.b)("inlineCode",{parentName:"p"},"@wwnds/react")," without using anything from ",Object(i.b)("inlineCode",{parentName:"p"},"@wwnds/core"),"."),Object(i.b)("p",null,"However, this guide fill focus on combined usage, as the packages work best when used together."))}j.isMDXComponent=!0},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||o;return a?r.a.createElement(m,i(i({ref:t},l),{},{components:a})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},153:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},179:function(e,t,a){"use strict";var n=a(0),r=a(180);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},180:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r}}]);