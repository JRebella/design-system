(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(3),o=a(7),s=(a(0),a(123)),r=(a(152),{title:"Writing CSS"}),c={unversionedId:"guides/dev/writing-css",id:"guides/dev/writing-css",isDocsHomePage:!1,title:"Writing CSS",description:"Once your stylesheets have been set up how you want them, you can start writing CSS with the Norton Design System.",source:"@site/docs/guides/dev/writing-css.mdx",slug:"/guides/dev/writing-css",permalink:"/design-system/docs/guides/dev/writing-css",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/guides/dev/writing-css.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1613087196,sidebar:"guides",previous:{title:"Stylesheet setup",permalink:"/design-system/docs/guides/dev/stylesheet-setup"},next:{title:"Core API",permalink:"/design-system/docs/guides/dev/core-api"}},i=[{value:"Theming",id:"theming",children:[]},{value:"Best practices",id:"best-practices",children:[{value:"Use CSS custom properties, not Sass variables",id:"use-css-custom-properties-not-sass-variables",children:[]},{value:"Use role tokens, not system tokens",id:"use-role-tokens-not-system-tokens",children:[]},{value:"Override token values instead of property values whenever possible",id:"override-token-values-instead-of-property-values-whenever-possible",children:[]},{value:"Compose your own CSS custom properties out of existing tokens",id:"compose-your-own-css-custom-properties-out-of-existing-tokens",children:[]},{value:"Use Sass modules",id:"use-sass-modules",children:[]}]}],l={rightToc:i};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Once your ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"stylesheet-setup"}),"stylesheets have been set up")," how you want them, you can start writing CSS with the Norton Design System."),Object(s.b)("h2",{id:"theming"},"Theming"),Object(s.b)("p",null,"The Norton Design System's CSS is fully themeable through the use of Sass variables.\nThe variables that capture the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/foundations"}),"foundational style elements")," constitute the main interface for theming an application.\nRefer to ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"core-api#theming-variables"}),"the variables table")," to learn more about these customizable variables."),Object(s.b)("h2",{id:"best-practices"},"Best practices"),Object(s.b)("p",null,"To get the most out of the Norton Design System's CSS, some best practices should be followed for writing your CSS."),Object(s.b)("h3",{id:"use-css-custom-properties-not-sass-variables"},"Use CSS custom properties, not Sass variables"),Object(s.b)("p",null,"CSS custom properties are live variables that can be modified via JavaScript and will always reference the current value of the token.\nSass variables, on the other hand, are hard-coded into the stylesheet when the CSS is compiled and cannot be changed after that point."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"@use '@wwnds/core';\n\n// \ud83d\udc4d Good: use the CSS custom property\n.foo {\n    font-family: var(--nds-font-family-serif);\n}\n\n// \ud83d\udc4e Bad: use the Sass variable\n.foo {\n    font-family: core.$font-family-serif;\n}\n")),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Why?")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"CSS custom properties are supported directly in the browser, whereas Sass variables are not."))),Object(s.b)("h3",{id:"use-role-tokens-not-system-tokens"},"Use role tokens, not system tokens"),Object(s.b)("p",null,"Using ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/foundations/design-tokens#role-tokens"}),"role tokens")," will facilitate theming in your application through ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"stylesheet-setup#customization"}),"customization")," since role tokens can be customized and ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/foundations/design-tokens#system-tokens"}),"system tokens")," cannot.\nRefer to the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/foundations/design-tokens#types-of-design-tokens"}),"design token types")," inheritance outline for more clarification of this convention."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"@use '@wwnds/core';\n\n// \u2728 Best: modify a known role token at this scope and then use it\n// (not always possible)\n.foo {\n    --nds-background-color: var(--nds-base-color-20);\n\n    background-color: var(--nds-background-color);\n}\n\n// \ud83d\udc4d Good: use the role token\n.foo {\n    background-color: var(--nds-base-color-20);\n}\n\n// \ud83d\udc4e Bad: use the system token\n.foo {\n    background-color: var(--nds-navy-20);\n}\n")),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Why?")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"System token values are static and cannot be modified, which prevents you from using them to theme your component."))),Object(s.b)("h3",{id:"override-token-values-instead-of-property-values-whenever-possible"},"Override token values instead of property values whenever possible"),Object(s.b)("p",null,"Some tokens, like ",Object(s.b)("inlineCode",{parentName:"p"},"text-color")," and ",Object(s.b)("inlineCode",{parentName:"p"},"background-color")," are set globally and are designed to use the CSS cascade to style all elements.\nWe encourage you to embrace the cascade","\u2014","a fundamental feature of CSS","\u2014","modifying token values at specific scopes to accomplish your goals instead of modifying properties directly."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"@use '@wwnds/core';\n\n// \ud83d\udc4d Good: override the token value and then use it\n.foo {\n    --nds-text-color: var(--nds-base-color-10);\n    --nds-background-color: var(--nds-primary-color-80);\n\n    color: var(--nds-text-color);\n    background-color: var(--nds-background-color);\n}\n\n// Okay: override the property value\n.foo {\n    color: var(--nds-base-color-10);\n    background-color: var(--nds-primary-color-80);\n}\n")),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Why?")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"This will ensure that children of this component that use the role tokens use the locally-scoped values instead of the global ones."),Object(s.b)("p",{parentName:"div"},"For instance, the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/foundations/accessibility#focus-halo"}),"focus-halo")," uses ",Object(s.b)("inlineCode",{parentName:"p"},"--nds-background-color")," to create the illusion of an offset halo when an element is focused.\nIf your element's background color is hard-coded as ",Object(s.b)("inlineCode",{parentName:"p"},"--nds-primary-color-80"),", that focus halo will now have an offset that does not appear to match the background color."),Object(s.b)("p",{parentName:"div"},"It's considered okay to use tokens directly in scenarios where component isolation is favored."))),Object(s.b)("h3",{id:"compose-your-own-css-custom-properties-out-of-existing-tokens"},"Compose your own CSS custom properties out of existing tokens"),Object(s.b)("p",null,"We deliberately provide only a small set of opinionated design tokens but recognize that you may have application-specific styles that would make sense as tokens."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"@use '@wwnds/core';\n\n// \ud83d\udc4d Good: declare and use your own reusable custom properties out of existing tokens\n:root {\n    --brand-gradient: linear-gradient(\n        var(--nds-primary-color),\n        var(--nds-primary-color-90),\n    );\n}\n")),Object(s.b)("h3",{id:"use-sass-modules"},"Use Sass modules"),Object(s.b)("p",null,"When using the Sass directly, avoid ",Object(s.b)("inlineCode",{parentName:"p"},"@import"),", favoring ",Object(s.b)("inlineCode",{parentName:"p"},"@forward")," and ",Object(s.b)("inlineCode",{parentName:"p"},"@use"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"// \u2728 Best: forward a configured version of the core library\n@forward '@wwnds/core' with (\n    // configured Sass variables\n    $radius-base: var(--nds-radius-xl),\n);\n\n// \ud83d\udc4d Good: use the core library directly\n@use '@wwnds/core';\n\n// \ud83d\udc4e Bad: use the deprecated import syntax\n@import '@wwnds/core/full';\n")),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Why?")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"The ",Object(s.b)("inlineCode",{parentName:"p"},"@import")," at-rule is ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://sass-lang.com/documentation/at-rules/import"}),"being deprecated by Sass")," and won't work sometime in the future."),Object(s.b)("p",{parentName:"div"},"See more about this in ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"stylesheet-setup#configuration"}),"the guide on stylesheet configuration"),"."))))}d.isMDXComponent=!0},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return v}));var n=a(0),o=a.n(n),s=a(174),r=a.n(s),c=a(126),i=a.n(c),l=a(122),d=a(153),u=a.n(d),b=function(e){if(e){var t=e.aa,a=e.aaLarge;return e.aaa?"AAA":t?"AA":a?"AA Large":void 0}},m=function(e){var t=e.color,a=e.textLight,n=e.textDark,s=o.a.useState(),c=s[0],d=s[1],m=o.a.useState(),p=m[0],h=m[1],v=o.a.useState(),g=v[0],f=v[1],O=o.a.useState(null),j=O[0],y=O[1],w=o.a.useState(""),N=w[0],k=w[1],S=o.a.useMemo((function(){return t.replace("var(--","").replace(")","").replace("nds-","")}),[t]);return o.a.useLayoutEffect((function(){if(j){var e=window.getComputedStyle(j).backgroundColor,t=(i=e.replace(/[()rgb]/g,"").split(/\s+/g),l=i[0],u=i[1],m=i[2],p=parseInt(l,10).toString(16),v=parseInt(u,10).toString(16),g=parseInt(m,10).toString(16),1===p.length&&(p="0"+p),1===v.length&&(v="0"+v),1===g.length&&(g="0"+g),"#"+p+v+g);d(t);var o=r()({backgroundColor:t,textLight:a,textDark:n},{compact:!0,threshold:0})[0].combinations,s=o[0],c=o[1];k(s.contrast>c.contrast?"var(--nds-white)":"var(--nds-black)"),h({level:b(s.accessibility),ratio:s.contrast,hex:s.hex}),f({level:b(c.accessibility),ratio:c.contrast,hex:c.hex})}var i,l,u,m,p,v,g}),[j,a,n]),o.a.createElement("tr",{id:"color-"+S,ref:y,className:u.a.grade,style:{"--nds-text-color":N,"--nds-background-color":t}},o.a.createElement("td",{className:u.a.name},S),o.a.createElement("td",{className:u.a.hex},c),[p,g].map((function(e,t){if(!e)return null;var a=e.ratio,n=e.level,s=a>=3,r=i()(u.a["color-use"],s?u.a["color-use--success"]:u.a["color-use--error"]),d="https://whocanuse.com/?b="+c.replace("#","")+"&c="+(0===t?"ffffff":"000000");return o.a.createElement("td",{className:u.a[0===t?"col-light":"col-dark"],key:a},o.a.createElement("a",{className:u.a.wcag,href:d,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:r},o.a.createElement(l.Icon,{variant:s?"check":"close"})),a.toFixed(2),n&&" (WCAG "+n+")"))})))},p=function(e){var t=e.name,a=e.textLight,n=e.textDark;return o.a.createElement(o.a.Fragment,null,Array.from(Array(10).keys()).map((function(e){var s="var(--nds-"+t+"-"+10*(e+1)+")";return o.a.createElement(m,{color:s,textLight:a,textDark:n,key:s})})))},h=function(){var e=o.a.useState(null),t=e[0],a=e[1],n=o.a.useState(!1),s=n[0],r=n[1],c=o.a.useMemo((function(){return l.canUseDOM&&"IntersectionObserver"in window?new IntersectionObserver((function(e){var a=e[0];a.target===t&&r(a.intersectionRatio<1)}),{threshold:[1],rootMargin:"60px 0px 0px 0px"}):null}),[t]);o.a.useEffect((function(){return t&&c&&c.observe(t),function(){t&&c&&c.unobserve(t)}}),[t,c]);var d=o.a.useMemo((function(){var e;return i()(((e={})[u.a.stuck]=s,e))}),[s]);return o.a.createElement("table",{className:u.a.colors},o.a.createElement("thead",{ref:a},o.a.createElement("tr",null,o.a.createElement("th",{className:d},"Token name"),o.a.createElement("th",{className:d},"Hex value"),o.a.createElement("th",{className:d},"Contrast ratio against white"),o.a.createElement("th",{className:d},"Contrast ratio against black"))),o.a.createElement("tbody",null,["red","yellow","green","teal","cyan","blue","purple","navy","gray"].map((function(e){return o.a.createElement(p,{key:e,name:e,textLight:"#fff",textDark:"#000"})}))))},v=function(e){var t=e.children,a=e.color,n=o.a.useMemo((function(){return a||(["#","rgb"].some((function(e){return t.startsWith(e)}))?t:"var(--"+(t.startsWith("nds")?t:"nds-"+t)+")")}),[t,a]);return o.a.createElement("code",{className:"no-break"},o.a.createElement("span",{className:"color-chip"},o.a.createElement("span",{style:{backgroundColor:n}})),t)}},153:function(e,t,a){e.exports={colors:"colors_1ZX6",stuck:"stuck_22OF","color-use":"color-use_arf6","color-use--success":"color-use--success_3guW","color-use--error":"color-use--error_2Pl3",wcag:"wcag_KiCb","col-light":"col-light_CQUQ","col-dark":"col-dark_17Hj",grade:"grade_2G8v",name:"name_3F0Y",hex:"hex_mXKY"}}}]);