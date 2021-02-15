(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{106:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return r})),s.d(t,"metadata",(function(){return c})),s.d(t,"rightToc",(function(){return l})),s.d(t,"default",(function(){return b}));var n=s(3),a=s(7),i=(s(0),s(124)),o=s(126),r={title:"Stylesheet setup"},c={unversionedId:"guides/dev/stylesheet-setup",id:"guides/dev/stylesheet-setup",isDocsHomePage:!1,title:"Stylesheet setup",description:"All styling in the Norton Design System is done directly in CSS using the Sass modules exposed by the @wwnds/core library.",source:"@site/docs/guides/dev/stylesheet-setup.mdx",slug:"/guides/dev/stylesheet-setup",permalink:"/design-system/docs/guides/dev/stylesheet-setup",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/guides/dev/stylesheet-setup.mdx",version:"current",lastUpdatedBy:"Anand Patil",lastUpdatedAt:1613422486,sidebar:"guides",previous:{title:"Getting started",permalink:"/design-system/docs/guides/dev"},next:{title:"Writing CSS",permalink:"/design-system/docs/guides/dev/writing-css"}},l=[{value:"Single stylesheet",id:"single-stylesheet",children:[{value:"Pre-built CSS",id:"pre-built-css",children:[]},{value:"Custom build",id:"custom-build",children:[]}]},{value:"Modular usage",id:"modular-usage",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Setting tokens",id:"setting-tokens",children:[]},{value:"Other approaches",id:"other-approaches",children:[]}]}],d={rightToc:l};function b(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All styling in the Norton Design System is done directly in CSS using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://sass-lang.com/blog/the-module-system-is-launched"}),"Sass modules")," exposed by the ",Object(i.b)("inlineCode",{parentName:"p"},"@wwnds/core")," library.\nThis library can be used either as one ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#single-stylesheet"}),"single global stylesheet")," for your entire application or as the basis for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#modular-usage"}),"a modular approach"),".\nBoth approaches are covered here."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Sass compiler")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The Norton Design System's stylesheets must be compiled with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/sass/sass"}),"sass")," Node module and will not work with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/sass/node-sass"}),"node-sass"),".\nThis is because node-sass's underlying implementation, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/sass/libsass"}),"libsass")," does not support Sass modules and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://sass-lang.com/blog/libsass-is-deprecated"}),"has in fact been deprecated")," in favor of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/sass/dart-sass"}),"dart-sass")," (sass's underlying implementation)."),Object(i.b)("p",{parentName:"div"},"If your project is currently using node-sass, migrating should be as simple as swapping out node-sass for sass. View ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://sass-lang.com/blog/libsass-is-deprecated#how-do-i-migrate"}),'the "How do I migrate?" guide')," for more details."))),Object(i.b)("h2",{id:"single-stylesheet"},"Single stylesheet"),Object(i.b)("p",null,"The simplest way to use the design system's styling is to use a single global stylesheet.\nThis can be accomplished with either the pre-built CSS or the full Sass entry point."),Object(i.b)("h3",{id:"pre-built-css"},"Pre-built CSS"),Object(i.b)("p",null,"Two CSS files are included in our release distributions of ",Object(i.b)("inlineCode",{parentName:"p"},"@wwnds/core"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dist/main.css")," - the complete stylesheet."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dist/tokens.css")," - only the global design tokens (excluding component tokens), set on the ",Object(i.b)("inlineCode",{parentName:"li"},":root")," element.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- in a Node.js project --\x3e\n<link href="node_modules/@wwnds/core/dist/main.css" rel="stylesheet" />\n\n\x3c!-- using unpkg as a CDN (not suitable for production but ideal for prototyping) --\x3e\n<link href="https://unpkg.com/@wwnds/core/dist/main.css" rel="stylesheet" />\n')),Object(i.b)("h3",{id:"custom-build"},"Custom build"),Object(i.b)("p",null,"If you would like to customize something but still use the complete stylesheet, it is recommended that you use the full Sass entry point.\nFor instance, the following will be identical to the ",Object(i.b)("inlineCode",{parentName:"p"},"dist/main.css")," file but with the primary color family assigned to yellow (default is teal)."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"@use '@wwnds/core/full' with (\n    $primary-family: 'yellow',\n);\n")),Object(i.b)("p",null,"Note that a similar approach can be accomplished by using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"core-api#complete"}),"the ",Object(i.b)("inlineCode",{parentName:"a"},"complete")," mixin")," to create your own complete stylesheet."),Object(i.b)("h2",{id:"modular-usage"},"Modular usage"),Object(i.b)("p",null,"Using the Sass modules directly is ideal for scenarios where a single global stylesheet is not desired, such as in a React environment or when you only want to use part of the design system."),Object(i.b)("h3",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"The best way to get started with modular stylesheets is to ",Object(i.b)("inlineCode",{parentName:"p"},"@forward")," a configured version of the design system for use in your stylesheets.\nThis acts as the main place where Sass variables are configured to meet the needs of your application's look and feel and does not itself contain any declarations."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss",metastring:'title="src/styles/_nds.scss"',title:'"src/styles/_nds.scss"'}),"// note: name this file whatever makes sense to you\n\n@forward '@wwnds/core' with (\n    $font-family-base: 'My fancy font',\n    $radius-base: var(--nds-radius-xl),\n    $primary-family: 'cyan',\n);\n")),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Customizable variables")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Any variable in ",Object(i.b)("inlineCode",{parentName:"p"},"@wwnds/core")," that contains the ",Object(i.b)("inlineCode",{parentName:"p"},"!default")," flag is customizable in this way."),Object(i.b)("p",{parentName:"div"},"These variables are documented in ",Object(i.b)("a",{href:Object(o.a)("sassdoc"),target:"\\_blank",rel:"noopener noreferrer"},"the Sassdoc documentation"),", as well as ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"core-api#theming-variables"}),"the Core API - Theming variables")," table."))),Object(i.b)("p",null,"Once your configured version of ",Object(i.b)("inlineCode",{parentName:"p"},"@wwnds/core")," has been forwarded, it should be ",Object(i.b)("inlineCode",{parentName:"p"},"@used")," anywhere you need to use the core mixins or functions."),Object(i.b)("h3",{id:"setting-tokens"},"Setting tokens"),Object(i.b)("p",null,"At a minimum, you must create and use one global stylesheet to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"core-api#tokens"}),"set the design tokens")," as CSS custom properties.\nThis is because every component, utility, and helper in the design system uses our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/foundations/design-tokens"}),"design tokens"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss",metastring:'title="src/styles/globals.scss"',title:'"src/styles/globals.scss"'}),"@use 'nds'; // the configured & forwarded src/styles/_nds.scss\n\n@include nds.tokens; // contains `:root` declarations with CSS custom properties\n\n// optionally include other globals, such as the HTML reset styles\n@include nds.reset;\n")),Object(i.b)("h3",{id:"other-approaches"},"Other approaches"),Object(i.b)("p",null,"Other approaches, such as using the ",Object(i.b)("inlineCode",{parentName:"p"},"@import")," syntax or CSS-in-JS may work but aren't well-tested.\nUse them at your own risk."),Object(i.b)("h4",{id:"css-modules"},"CSS modules"),Object(i.b)("p",null,"While not well tested, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules"}),"CSS modules")," can be composed with core styles in environments that support CSS modules, such as in React."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss",metastring:'title="src/components/CustomButton/nds-button.scss"',title:'"src/components/CustomButton/nds-button.scss"'}),"@use '../../styles/nds';\n\n// apply the default design system styles for the button component\n@include nds.button-style;\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss",metastring:'title="src/components/CustomButton/index.module.scss"',title:'"src/components/CustomButton/index.module.scss"'}),"@use '../../styles/nds'; // the configured & forwarded src/styles/_nds.scss\n\n.btn {\n    // override a component token\n    --nds-button-border-radius: var(--nds-radius-pill);\n\n    // set additional styles with core\n    margin-bottom: nds.spacer(\"1rem\");\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/components/CustomButton/index.jsx"',title:'"src/components/CustomButton/index.jsx"'}),'import React from "react";\nimport { Button } from "@wwnds/react";\n// main design system button styles\nimport "./nds-button.scss";\n// modular styles\nimport styles from "./index.module.scss";\n\nexport const CustomButton = ({ children, ...props }) => (\n    <Button className={styles.btn} {...props}>\n        {children}\n    </Button>\n);\n')))}b.isMDXComponent=!0},126:function(e,t,s){"use strict";s.d(t,"b",(function(){return i})),s.d(t,"a",(function(){return o}));var n=s(24),a=s(131);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,s=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,s,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,r=void 0!==o&&o,c=i.absolute,l=void 0!==c&&c;if(!s)return s;if(s.startsWith("#"))return s;if(Object(a.b)(s))return s;if(r)return t+s;var d=s.startsWith(t)?s:t+s.replace(/^\//,"");return l?e+d:d}(i,s,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},131:function(e,t,s){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}s.d(t,"b",(function(){return n})),s.d(t,"a",(function(){return a}))}}]);