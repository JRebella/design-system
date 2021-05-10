(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(6),l=n(1),r=(n(0),n(181)),i=n(40),b=n(184),o={title:"Core API"},d={unversionedId:"guides/dev/core-api",id:"guides/dev/core-api",isDocsHomePage:!1,title:"Core API",description:"The @wwnds/core package exposes six top-level mixins for setting CSS declarations, as well as a set of customizable variables for theming.",source:"@site/docs/guides/dev/core-api.mdx",sourceDirName:"guides/dev",slug:"/guides/dev/core-api",permalink:"/design-system/docs/guides/dev/core-api",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/guides/dev/core-api.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1618685757,formattedLastUpdatedAt:"4/17/2021",frontMatter:{title:"Core API"},sidebar:"guides",previous:{title:"Writing CSS",permalink:"/design-system/docs/guides/dev/writing-css"},next:{title:"React API",permalink:"/design-system/docs/guides/dev/react-api"}},c=[{value:"Theming variables",id:"theming-variables",children:[]},{value:"Tokens",id:"tokens",children:[]},{value:"Reset",id:"reset",children:[]},{value:"Components",id:"components",children:[{value:"All components",id:"all-components",children:[]},{value:"Individual components",id:"individual-components",children:[]},{value:"Fully modular mixins",id:"fully-modular-mixins",children:[]}]},{value:"Helpers",id:"helpers",children:[]},{value:"Utilities",id:"utilities",children:[]},{value:"Complete",id:"complete",children:[]}],s={toc:c};function m(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@wwnds/core")," package exposes six top-level mixins for setting CSS declarations, as well as a set of customizable ",Object(r.b)("a",{parentName:"p",href:"#theming-variables"},"variables for theming"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#tokens"},Object(r.b)("inlineCode",{parentName:"a"},"tokens"))," - All foundational design tokens set as CSS custom properties on the ",Object(r.b)("inlineCode",{parentName:"li"},":root"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#reset"},Object(r.b)("inlineCode",{parentName:"a"},"reset"))," - The global HTML reset. Forked from ",Object(r.b)("a",{parentName:"li",href:"https://getbootstrap.com/docs/5.0/content/reboot/"},"the Bootstrap reboot")," to use the Norton Design System foundations."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#components"},Object(r.b)("inlineCode",{parentName:"a"},"components"))," - Declarations for every component."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#helpers"},Object(r.b)("inlineCode",{parentName:"a"},"helpers"))," - Helper declarations that set a composed style uncoupled from any component."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#utilities"},Object(r.b)("inlineCode",{parentName:"a"},"utilities"))," - Utility declarations that set one property per class."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#complete"},Object(r.b)("inlineCode",{parentName:"a"},"complete"))," - The complete design system set in a single global stylesheet.")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sassdoc")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Additional utility mixins and functions are documented in our ",Object(r.b)("a",{href:Object(i.a)("sassdoc"),target:"\\_blank",rel:"noopener noreferrer"},"Sassdoc documentation"),"."))),Object(r.b)("h2",{id:"theming-variables"},"Theming variables"),Object(r.b)("p",null,"These variables should be ",Object(r.b)("a",{parentName:"p",href:"stylesheet-setup#configuration"},"configured in a forwarded stylesheet")," to ensure the most flexibility."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Token"),Object(r.b)("th",{parentName:"tr",align:null},"Default value"),Object(r.b)("th",{parentName:"tr",align:null},"Usage"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$primary-family")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"teal"')),Object(r.b)("td",{parentName:"tr",align:null},"The family used in components that have a default color")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$primary-grade")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"60")),Object(r.b)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the primary color")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$base-family")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"navy"')),Object(r.b)("td",{parentName:"tr",align:null},"Background, border, or shadow gradients")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$base-grade")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"null")," (unset)"),Object(r.b)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the base color")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$disabled-family")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"base-color"')),Object(r.b)("td",{parentName:"tr",align:null},"Not currently usable, non-interactive")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$disabled-grade")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"30")),Object(r.b)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the disabled color")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$error-family")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"red"')),Object(r.b)("td",{parentName:"tr",align:null},"Error, danger, or incorrect")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$error-grade")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"60")),Object(r.b)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the error color")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$success-family")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"green"')),Object(r.b)("td",{parentName:"tr",align:null},"Success, passing, or correct")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$success-grade")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"60")),Object(r.b)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the success color")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$warning-family")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"yellow"')),Object(r.b)("td",{parentName:"tr",align:null},"Warning or caution")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$warning-grade")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"60")),Object(r.b)("td",{parentName:"tr",align:null},"The grade that defines the midpoint of the warning color")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$background-color")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)(b.b,{mdxType:"ColorChip"},"white")),Object(r.b)("td",{parentName:"tr",align:null},"The main background color")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$text-color")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)(b.b,{mdxType:"ColorChip"},"base-color-90")),Object(r.b)("td",{parentName:"tr",align:null},"The main text color")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$text-color-inverse")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)(b.b,{mdxType:"ColorChip"},"background-color")),Object(r.b)("td",{parentName:"tr",align:null},"A contrasting text color")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$subdued-color")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)(b.b,{mdxType:"ColorChip"},"base-color-60")),Object(r.b)("td",{parentName:"tr",align:null},"De-emphasized, muted, or subdued content")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$selection-background-color")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)(b.b,{mdxType:"ColorChip"},"primary-color")),Object(r.b)("td",{parentName:"tr",align:null},"The background color of user-selected text (",Object(r.b)("inlineCode",{parentName:"td"},"::selection"),")")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$selection-text-color")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)(b.b,{mdxType:"ColorChip"},"text-color-inverse")),Object(r.b)("td",{parentName:"tr",align:null},"The text color of user-selected text (",Object(r.b)("inlineCode",{parentName:"td"},"::selection"),")")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$focus-color")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)(b.b,{mdxType:"ColorChip"},"blue-50")),Object(r.b)("td",{parentName:"tr",align:null},"The color used when an element has been focused (",Object(r.b)("inlineCode",{parentName:"td"},":focus"),")")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$focus-halo-inner-color")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)(b.b,{mdxType:"ColorChip"},"background-color")),Object(r.b)("td",{parentName:"tr",align:null},"The inner color of the ",Object(r.b)("a",{parentName:"td",href:"/docs/foundations/accessibility#focus-halo"},"focus halo"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$focus-halo-outer-color")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)(b.b,{mdxType:"ColorChip"},"focus-color")),Object(r.b)("td",{parentName:"tr",align:null},"The outer color of the ",Object(r.b)("a",{parentName:"td",href:"/docs/foundations/accessibility#focus-halo"},"focus halo"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$radius-base")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-radius-sm)")),Object(r.b)("td",{parentName:"tr",align:null},"The main border radius used for component shapes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$hd-dpi")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"200")),Object(r.b)("td",{parentName:"tr",align:null},"The minimum dots per inch (dpi) of a high-resolution screen")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$hd-dppx")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"125")),Object(r.b)("td",{parentName:"tr",align:null},"The minimum dots per pixel unit (dppx) for a high-resolution screen")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$min-xs")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",{parentName:"tr",align:null},"The minimum width for an extra small screen: a handset")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$min-sm")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"600px")),Object(r.b)("td",{parentName:"tr",align:null},"The minimum width for a small screen: a large handset or small tablet")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$min-md")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"960px")),Object(r.b)("td",{parentName:"tr",align:null},"The minimum width for a medium screen: a large tablet or small laptop")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$min-lg")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"1280px")),Object(r.b)("td",{parentName:"tr",align:null},"The minimum width for a large screen: a desktop")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$min-xl")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"1920px")),Object(r.b)("td",{parentName:"tr",align:null},"The minimum width for an extra large screen: a high-definition device")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$duration-scalar")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"1")),Object(r.b)("td",{parentName:"tr",align:null},"A multiplier used for increasing/decreasing all motion speed")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-family-sans")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-family-system-sans)")),Object(r.b)("td",{parentName:"tr",align:null},"The main sans serif font family")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-family-serif")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-family-system-serif)")),Object(r.b)("td",{parentName:"tr",align:null},"The main serif font family")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-family-mono")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-family-system-mono)")),Object(r.b)("td",{parentName:"tr",align:null},"The main monospace font family")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-family-base")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-family-sans)")),Object(r.b)("td",{parentName:"tr",align:null},"The main font family that will be used throughout your application")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-family-headings")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-family-base)")),Object(r.b)("td",{parentName:"tr",align:null},"The font family that will be used for all headings")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-size-root")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"1em")),Object(r.b)("td",{parentName:"tr",align:null},"The font size that is used to define ",Object(r.b)("inlineCode",{parentName:"td"},"1rem"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-size-xs")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-size-12)")),Object(r.b)("td",{parentName:"tr",align:null},"An extra small font size")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-size-sm")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-size-14)")),Object(r.b)("td",{parentName:"tr",align:null},"A small font size")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-size-md")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-size-16)")),Object(r.b)("td",{parentName:"tr",align:null},"A medium font size")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-size-lg")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-size-18)")),Object(r.b)("td",{parentName:"tr",align:null},"A large font size")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-size-h1")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-size-32)")),Object(r.b)("td",{parentName:"tr",align:null},"The font size used for the highest heading level")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-size-h2")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-size-24)")),Object(r.b)("td",{parentName:"tr",align:null},"The font size used for second-level headings")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-size-h3")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-size-20)")),Object(r.b)("td",{parentName:"tr",align:null},"The font size used for third-level headings")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-size-h4")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-size-18)")),Object(r.b)("td",{parentName:"tr",align:null},"The font size used for fourth-level headings")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-size-h5")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-size-16)")),Object(r.b)("td",{parentName:"tr",align:null},"The font size used for fifth-level headings")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-size-h6")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-size-14)")),Object(r.b)("td",{parentName:"tr",align:null},"The font size used for sixth-level headings")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-size-base")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-size-md)")),Object(r.b)("td",{parentName:"tr",align:null},"The font size used on the body and to set most text")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-weight-base")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-weight-regular)")),Object(r.b)("td",{parentName:"tr",align:null},"The font weight used for body copy")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"$font-weight-headings")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"var(--nds-font-weight-bold)")),Object(r.b)("td",{parentName:"tr",align:null},"The font weight used for headings")))),Object(r.b)("h2",{id:"tokens"},"Tokens"),Object(r.b)("p",null,"The tokens mixin sets the ",Object(r.b)("a",{parentName:"p",href:"/docs/foundations"},"foundations")," that contain design tokens as global CSS custom properties on the ",Object(r.b)("inlineCode",{parentName:"p"},":root")," element.\nYou will almost always want to set this as a global stylesheet, as most component styles use the CSS custom properties in their styling."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/tokens.scss"',title:'"Example:','src/styles/tokens.scss"':!0},"@use '@wwnds/core';\n\n@include core.tokens;\n")),Object(r.b)("h2",{id:"reset"},"Reset"),Object(r.b)("p",null,"The reset mixin is meant to be used to create a global stylesheet that ensures that all HTML elements are rendered consistently across browsers."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/reset.scss"',title:'"Example:','src/styles/reset.scss"':!0},"@use '@wwnds/core';\n\n@include core.reset;\n")),Object(r.b)("h2",{id:"components"},"Components"),Object(r.b)("p",null,"The component API provides three levels of usage with different levels of customization to suit your needs."),Object(r.b)("h3",{id:"all-components"},"All components"),Object(r.b)("p",null,"All component declarations can be set at once in one mixin."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/all-components.scss"',title:'"Example:','src/styles/all-components.scss"':!0},"@use '@wwnds/core';\n\n@include core.components;\n\n// resulting CSS will contain declarations for all components\n")),Object(r.b)("h3",{id:"individual-components"},"Individual components"),Object(r.b)("p",null,"Each individual component exposes a ",Object(r.b)("inlineCode",{parentName:"p"},"style")," mixin that is namespaced with the component's name on the top-level API (e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"button-style"),")."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/my-button.scss"',title:'"Example:','src/styles/my-button.scss"':!0},"@use '@wwnds/core';\n\n@include core.button-style;\n\n// resulting CSS will contain only button declarations\n")),Object(r.b)("h3",{id:"fully-modular-mixins"},"Fully modular mixins"),Object(r.b)("p",null,"Each component composes its styles via mixins.\nGenerally, these are applied to the component's anatomy with ",Object(r.b)("a",{parentName:"p",href:"http://getbem.com/"},"BEM")," selectors but you can use them with your own selectors."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/my-button.scss"',title:'"Example:','src/styles/my-button.scss"':!0},"@use '@wwnds/core';\n\n.custom-button {\n    @include core.button-base;\n    @include core.button-solid;\n\n    // override or add your own styles\n    // border: 2px solid var(--nds-button-color-80);\n}\n\n.custom-button__icon {\n    @include core.button-icon;\n}\n\n// resulting CSS will contain only the above two declarations\n")),Object(r.b)("h2",{id:"helpers"},"Helpers"),Object(r.b)("p",null,"Helpers are composed declarations that help with common styling needs that are not connected to any component.\nUnlike ",Object(r.b)("a",{parentName:"p",href:"#utilities"},"utilities"),", helpers always set multiple properties per declaration or compose styles together to meet a specific need."),Object(r.b)("p",null,"Helpers are disabled by default and must be turned on by setting ",Object(r.b)("inlineCode",{parentName:"p"},"$enable-helpers")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/helpers.scss"',title:'"Example:','src/styles/helpers.scss"':!0},"@use '@wwnds/core' with (\n    $enable-helpers: true,\n);\n\n@include core.helpers;\n")),Object(r.b)("h2",{id:"utilities"},"Utilities"),Object(r.b)("p",null,"Utilities are declarations that set a single property and are turned off by default.\nTo enable them, they must be turned on with the ",Object(r.b)("inlineCode",{parentName:"p"},"$enable-utilities")," map."),Object(r.b)("p",null,"Note that the utility API is deliberately minimal and is not suited for production usage.\nIf you would like to use a more utility-focused approach, we like ",Object(r.b)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/utilities.scss"',title:'"Example:','src/styles/utilities.scss"':!0},"@use '@wwnds/core' with (\n    $enable-utilities: ('color', 'spacing'),\n);\n\n@include core.utilities;\n")),Object(r.b)("h2",{id:"complete"},"Complete"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"complete")," mixin provides a single way to opt into every declaration.\nNote that this can also be accessed directly by using ",Object(r.b)("inlineCode",{parentName:"p"},"@wwnds/core/full"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: src/styles/norton-design-system.scss"',title:'"Example:','src/styles/norton-design-system.scss"':!0},"@use '@wwnds/core';\n\n@include core.complete;\n")))}m.isMDXComponent=!0}}]);