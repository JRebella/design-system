(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{146:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),l=t.n(c),i=t(163),o=t(19),s=t(256),u=t.n(s),m=t(167),d=t(5),_=function(e){return r.a.createElement("svg",Object(d.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 95 30"},e),r.a.createElement("title",null,"W. W. Norton & Company"),r.a.createElement("path",{fill:"currentColor",d:"M28.06 22.47c.3-2 10.15-2.48 10.71-2.48 1.63 0 3.89-.13 1.81-.74a9 9 0 0 1-4.51-3.78 6.24 6.24 0 0 1-3.68-3c-2.21-.27-5.34-1.74-6.14-2.75A59.6 59.6 0 0 1 8 5.7C5.83 4.79-.64.44.05.21c2.11-.71 7.11.66 9.42.9 5.12.55 10.28.46 15.44.62h1.92c2.48-.07 5.37-.13 7.17 1.46 2.43 2.23 11.64 14.11 14 12.74.51-.31-.5-.77-1.66-1.13a.31.31 0 0 1 0-.59c5.11-1.18 8 1.88 14.4 2.74 5.28.7 5.89 3.61 5 6.53-.62 2.1.64 3.3 0 4.76-.34.76-.8.11-.88-.11-1.22-3.5-2.84-7.2-9.38-5a20.92 20.92 0 0 1-6.92 1.61 19.76 19.76 0 0 1-4.06-.34 12.6 12.6 0 0 0-4.66-.2c-1.6.3-2.34 4.05-4.45 5.67A.68.68 0 0 1 35 30c-1.79 0-7.22-3.31-6.94-7.53zm23.54-9.15c3.14-2.93 6.59-7.25 9.4-10.13 1.56-1.58 4.58-1.53 7.14-1.48h1.91c5.15-.16 10.32-.07 15.44-.61C87.83.86 92.84-.51 95 .2c.69.24-5.78 4.59-8 5.5a59.59 59.59 0 0 1-18.21 4c-.31.65-3.64 2.5-6.14 2.75 0 0-1.42 2.56-3.66 2.95a.68.68 0 0 1-.2 0c-1.29.05-4.56-1.4-7.19-2.08z"}))};a.default=function(){var e=Object(o.default)().siteConfig,a=void 0===e?{}:e;return r.a.createElement(i.a,{title:a.title,description:a.description},r.a.createElement("header",{className:u.a.hero},r.a.createElement("div",{className:u.a.hero__container},r.a.createElement("h1",{className:u.a.hero__title},"The"," ",a.title),r.a.createElement("p",{className:u.a.hero__subtitle},a.tagline),r.a.createElement("div",{className:u.a.hero__image},r.a.createElement(_,null)))),r.a.createElement("main",null,r.a.createElement("section",{className:l()("container",u.a.section)},r.a.createElement(m.c,{basePath:"/docs/"},r.a.createElement(m.a,{title:"Foundations",slug:"foundations",linkArrow:!0},"Guidelines for using visual elements and interaction patterns with the Norton Design System."),r.a.createElement(m.a,{title:"Components",slug:"components",linkArrow:!0},"The building blocks for composing applications and content with the Norton Design System."),r.a.createElement(m.a,{title:"Guides",slug:"guides",linkArrow:!0},"Tutorials and examples to help designers, developers, and editors learn how get the most out of the Norton Design System.")))))}},167:function(e,a,t){"use strict";t.d(a,"a",(function(){return _})),t.d(a,"b",(function(){return h})),t.d(a,"c",(function(){return f}));var n=t(5),r=t(0),c=t.n(r),l=t(2),i=t.n(l),o=t(27),s=t(35),u=t(36),m=t(168),d=t.n(m),_=function(e){var a,t=e.title,r=e.media,l=e.children,m=e.icon,_=e.href,h=e.basePath,f=void 0===h?"/":h,b=e.slug,v=void 0===b?"":b,g=e.tag,E=void 0===g?"div":g,p=e.columns,N=void 0===p?3:p,k=e.linkArrow,w=void 0!==k&&k,j=c.a.useState(null),O=j[0],S=j[1],C=Object(s.a)(_||v?f+v:void 0),y=c.a.useMemo((function(){return"string"==typeof m?{variant:m}:"object"==typeof m?{icon:m}:{}}),[m]),x=c.a.useCallback((function(e){var a=e.children;return C?c.a.createElement(u.a,{to:C,className:d.a.feature__link},a):c.a.createElement("span",{className:d.a.feature__link},a)}),[C]);return c.a.createElement(E,{className:i()(d.a.feature,d.a["col-"+N],(a={},a[d.a["feature--linked"]]=Boolean(C),a)),onClick:function(e){if(C){var a=window.getSelection();O&&a&&a.toString()&&a.containsNode(O,!0)||e.nativeEvent.composedPath().some((function(e){return e instanceof HTMLElement&&"a"===e.tagName.toLowerCase()}))||(window.location.href=C)}},ref:S},r,c.a.createElement("div",{className:d.a.feature__header},m&&c.a.createElement("span",{className:d.a.feature__icon},c.a.createElement(o.Icon,Object(n.a)({},y,{size:32}))),c.a.createElement(x,null,t,C&&w&&c.a.createElement(o.Icon,{variant:"arrow-right",className:d.a.feature__arrow}))),c.a.createElement("div",{className:d.a.feature__body},l))},h=function(e){var a=e.src,t=e.alt,n=void 0===t?"":t,r=Object(s.a)(a);return r?c.a.createElement("div",{className:d.a.feature__media},c.a.createElement("img",{className:d.a.feature__img,src:r,alt:n})):c.a.createElement("div",{className:d.a.feature__tk},c.a.createElement("abbr",{title:"Media to come"},"TK"))},f=function(e){var a=e.basePath,t=void 0===a?"/":a,r=e.columns,l=void 0===r?3:r,i=e.children;return c.a.createElement("ul",{className:d.a.features},c.a.Children.map(i,(function(e){if(c.a.isValidElement(e)){var a=e.props;return c.a.createElement(_,Object(n.a)({columns:l},a,{basePath:t,tag:"li"}))}return null})))}},168:function(e,a,t){e.exports={features:"features_1fPi",feature__arrow:"feature__arrow_3TY1",feature:"feature_3OJI","feature--linked":"feature--linked_lv-9",feature__header:"feature__header_18-n",feature__icon:"feature__icon_VYaY",feature__media:"feature__media_YaFH",feature__img:"feature__img_1B7-",feature__tk:"feature__tk_3bhS",feature__link:"feature__link_3vru","col-2":"col-2_5vVY","col-3":"col-3_u1YQ"}},170:function(e,a,t){"use strict";var n=t(5),r=t(0),c=t.n(r),l=t(153),i=t(27),o=t(35),s=t(19),u=t(2),m=t.n(u),d=t(157),_=function(e){var a=Object(r.useRef)(!1),n=Object(r.useRef)(null),l=Object(d.useHistory)(),i=Object(s.default)().siteConfig,o=(void 0===i?{}:i).baseUrl,u=function(){a.current||(Promise.all([fetch(o+"search-doc.json").then((function(e){return e.json()})),fetch(o+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(53),t.e(57)]).then(t.bind(null,285)),t.e(36).then(t.t.bind(null,284,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=o+t.url;document.createElement("a").href=n,l.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},_=Object(r.useCallback)((function(a){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("input",{id:"search_input_react",type:"search","aria-label":"Search",className:m()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:u,onMouseOver:u,onFocus:_,onBlur:_,ref:n}))},h=t(159),f=t(165),b=t(161),v=t(162),g=t(164),E=t(171),p=t(79),N=t.n(p),k="right";a.a=function(){var e,a=Object(s.default)().siteConfig.themeConfig,t=a.navbar,u=((t=void 0===t?{}:t).title,t.items),m=void 0===u?[]:u,d=t.hideOnScroll,p=void 0!==d&&d,w=a.colorMode,j=(w=void 0===w?{}:w).disableSwitch,O=void 0!==j&&j,S=Object(r.useState)(!1),C=S[0],y=S[1],x=Object(r.useState)(!1),M=x[0],z=x[1],T=Object(h.a)(),B=T.setLightTheme,I=T.setDarkTheme,D=Object(i.useTheme)(),P=D.colorScheme,V=D.setColorScheme,L="dark"===P,A=Object(f.a)(p),H=A.navbarRef,Y=A.isNavbarVisible;Object(b.a)(C);var W=Object(r.useCallback)((function(){y(!0)}),[y]),F=Object(r.useCallback)((function(){y(!1)}),[y]),J=function(e){V(e?"dark":"light")};Object(r.useEffect)((function(){try{P&&window.localStorage.setItem("nds-color-scheme",P)}catch(e){console.error(e)}}),[P]),Object(r.useLayoutEffect)((function(){L?I():B()}),[L,I,B]);var R=Object(v.a)();Object(r.useEffect)((function(){R===v.b.desktop&&y(!1)}),[R]);var G=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:k)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:k)}))}}(m),K=G.leftItems,Q=G.rightItems;return c.a.createElement("nav",{ref:H,className:Object(l.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":C},e[N.a.navbarHideable]=p,e[N.a.navbarHidden]=!Y,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},null!=m&&0!==m.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:W,onKeyDown:W},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(g.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(l.a)("navbar__title")}),K.map((function(e,a){return c.a.createElement(E.a,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},c.a.createElement(E.a,{href:Object(o.a)("sassdoc"),label:"Sassdoc"}),c.a.createElement(E.a,{href:Object(o.a)("storybook"),label:"Storybook"}),Q.map((function(e,a){return c.a.createElement(E.a,Object(n.a)({},e,{key:a}))})),!O&&c.a.createElement(i.Switch,{className:N.a.displayOnlyInLargeViewport,label:"Dark mode",checked:L,onToggle:J,tipped:!0},c.a.createElement(i.Icon,{icon:{d:L?"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z":"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},color:L?void 0:"var(--nds-yellow-50)"})),c.a.createElement(_,{handleSearchBarToggle:z,isSearchBarExpanded:M}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:F}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(g.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:F}),!O&&C&&c.a.createElement(i.Switch,{label:"Dark mode toggle in sidebar",checked:L,onToggle:J,tipped:!0})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},m.map((function(e,a){return c.a.createElement(E.a,Object(n.a)({mobile:!0},e,{onClick:F,key:a}))})))))))}},256:function(e,a,t){e.exports={section:"section_X28C",hero:"hero_2NwL",hero__container:"hero__container_zwsb",hero__title:"hero__title_3mnO",hero__subtitle:"hero__subtitle_yBWN",hero__image:"hero__image_1_Tx"}}}]);