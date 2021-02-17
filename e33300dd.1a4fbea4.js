(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),r=(n(0),n(124)),o=n(145),s={title:"Foundations",slug:"/foundations"},u={unversionedId:"foundations/index",id:"foundations/index",isDocsHomePage:!1,title:"Foundations",description:"Foundations are guidelines for using elements of visual design and interaction.",source:"@site/docs/foundations/index.md",slug:"/foundations",permalink:"/design-system/docs/foundations",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/foundations/index.md",version:"current",lastUpdatedBy:"Anand Patil",lastUpdatedAt:1613587655,sidebar:"foundations",next:{title:"Accessibility",permalink:"/design-system/docs/foundations/accessibility"}},c=[],d={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Foundations are guidelines for using elements of visual design and interaction.")),Object(r.b)("p",null,"Our foundations provide guidance on using visual elements like color and typography, as well as framing for broad design concepts such as design tokens and accessibility."),Object(r.b)(o.c,{basePath:"/docs/foundations/",columns:2,mdxType:"Features"},Object(r.b)(o.a,{title:"Accessibility",slug:"accessibility",mdxType:"FeatureCard"},"Designing for accessibility ensures that interfaces and content are meaningful and effective for everyone."),Object(r.b)(o.a,{title:"Design Tokens",slug:"design-tokens",mdxType:"FeatureCard"},"Reusable elements of design are captured as design tokens to ensure consistency without sacrificing flexibility."),Object(r.b)(o.a,{title:"Color",slug:"color",mdxType:"FeatureCard"},"A color system defines visual hierarchy and identity through a consistent experience of color."),Object(r.b)(o.a,{title:"Typography",slug:"typography",mdxType:"FeatureCard"},"Effective typography adds clarity and purpose to the flow of your content."),Object(r.b)(o.a,{title:"Spacing",slug:"spacing",mdxType:"FeatureCard"},"Consistent spacing within and between visual elements balances a design and makes it easier to scan."),Object(r.b)(o.a,{title:"Motion",slug:"motion",mdxType:"FeatureCard"},"Careful use of motion can highlight important information and relationships in an expressive way.")))}l.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(24),i=n(131);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,s=void 0!==o&&o,u=r.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},131:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return b}));var a=n(3),i=n(0),r=n.n(i),o=n(126),s=n.n(o),u=n(123),c=n(127),d=n(146),l=n.n(d),f=function(e){var t,n=e.title,i=e.media,o=e.children,d=e.icon,f=e.href,m=e.basePath,b=void 0===m?"/":m,p=e.slug,g=void 0===p?"":p,_=e.tag,v=void 0===_?"div":_,h=e.columns,y=void 0===h?3:h,w=e.linkArrow,k=void 0!==w&&w,j=r.a.useState(null),O=j[0],x=j[1],E=r.a.useState(null),C=E[0],T=E[1],F=Object(c.a)(f||g?b+g:null),N=r.a.useMemo((function(){return F?"a":"span"}),[F]),P=r.a.useMemo((function(){return"string"==typeof d?{variant:d}:"object"==typeof d?{icon:d}:{}}),[d]);return r.a.createElement(v,{className:s()(l.a.feature,l.a["col-"+y],(t={},t[l.a["feature--linked"]]=Boolean(F),t)),onClick:function(e){if(F){var t=window.getSelection();O&&t&&t.toString()&&t.containsNode(O,!0)||C&&e.nativeEvent.composedPath().includes(C)||(window.location.href=F)}},ref:x},i,r.a.createElement("div",{className:l.a.feature__header},d&&r.a.createElement("span",{className:l.a.feature__icon},r.a.createElement(u.Icon,Object(a.a)({},P,{size:32}))),r.a.createElement(N,{ref:T,href:F,className:l.a.feature__link},n,F&&k&&r.a.createElement(u.Icon,{variant:"arrow-right",className:l.a.feature__arrow}))),r.a.createElement("div",{className:l.a.feature__body},o))},m=function(e){var t=e.src,n=e.alt,a=void 0===n?"":n,i=Object(c.a)(t);return i?r.a.createElement("div",{className:l.a.feature__media},r.a.createElement("img",{className:l.a.feature__img,src:i,alt:a})):r.a.createElement("div",{className:l.a.feature__tk},r.a.createElement("abbr",{title:"Media to come"},"TK"))},b=function(e){var t=e.basePath,n=void 0===t?"/":t,i=e.columns,o=void 0===i?3:i,s=e.children;return r.a.createElement("ul",{className:l.a.features},r.a.Children.map(s,(function(e){if(r.a.isValidElement(e)){var t=e.props;return r.a.createElement(f,Object(a.a)({columns:o},t,{basePath:n,tag:"li"}))}return null})))}},146:function(e,t,n){e.exports={features:"features_m4Wt",feature__arrow:"feature__arrow_2nrB",feature:"feature_16H5","feature--linked":"feature--linked_3sev",feature__header:"feature__header_AVdU",feature__icon:"feature__icon_1EmG",feature__media:"feature__media_rtpg",feature__img:"feature__img_3Gk6",feature__tk:"feature__tk_1C80",feature__link:"feature__link_2is4","col-2":"col-2_1CFk","col-3":"col-3_3gH7"}}}]);