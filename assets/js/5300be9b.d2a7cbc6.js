(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(6),a=n(1),s=(n(0),n(181)),i={title:"Design Tokens"},r={unversionedId:"foundations/design-tokens",id:"foundations/design-tokens",isDocsHomePage:!1,title:"Design Tokens",description:"We capture all of our design elements as discrete entities called design tokens.",source:"@site/docs/foundations/design-tokens.mdx",sourceDirName:"foundations",slug:"/foundations/design-tokens",permalink:"/design-system/docs/foundations/design-tokens",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/foundations/design-tokens.mdx",version:"current",lastUpdatedBy:"apatil",lastUpdatedAt:1618967883,formattedLastUpdatedAt:"4/21/2021",frontMatter:{title:"Design Tokens"},sidebar:"foundations",previous:{title:"Accessibility",permalink:"/design-system/docs/foundations/accessibility"},next:{title:"Color",permalink:"/design-system/docs/foundations/color"}},c=[{value:"Types of Design Tokens",id:"types-of-design-tokens",children:[{value:"System Tokens",id:"system-tokens",children:[]},{value:"Role Tokens",id:"role-tokens",children:[]},{value:"Component Tokens",id:"component-tokens",children:[]}]},{value:"Token Conventions",id:"token-conventions",children:[{value:"Base Tokens",id:"base-tokens",children:[]},{value:"T-Shirt Sizing",id:"t-shirt-sizing",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"We capture all of our design elements as discrete entities called ",Object(s.b)("strong",{parentName:"p"},"design tokens"),"."),Object(s.b)("p",null,"Design tokens have a ",Object(s.b)("strong",{parentName:"p"},"static name")," and a ",Object(s.b)("strong",{parentName:"p"},"variable value"),", allowing you to theme the entire design of an application with design tokens alone.\nMost design tokens have a default value assigned, which effectively represents the default theme of the Norton Design System.\nBut since token values can be changed, you can simply reassign the value to begin creating a theme for a Norton Design System application."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prefix Note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"In CSS, our design tokens start with ",Object(s.b)("inlineCode",{parentName:"p"},"--nds-"),", but that prefix is omitted in most places in our documentation."))),Object(s.b)("h2",{id:"types-of-design-tokens"},"Types of Design Tokens"),Object(s.b)("p",null,"The Norton Design System contains three types of design tokens: ",Object(s.b)("a",{parentName:"p",href:"#system-tokens"},Object(s.b)("strong",{parentName:"a"},"system")),", ",Object(s.b)("a",{parentName:"p",href:"#role-tokens"},Object(s.b)("strong",{parentName:"a"},"role")),", and ",Object(s.b)("a",{parentName:"p",href:"#component-tokens"},Object(s.b)("strong",{parentName:"a"},"component"))," tokens, which are used in conjunction to capture the entire design of an application."),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Inheritance")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"The three types of tokens use the following system of inheritance in the Norton Design System."),Object(s.b)("ul",{parentName:"div"},Object(s.b)("li",{parentName:"ul"},"Abstract: ",Object(s.b)("inlineCode",{parentName:"li"},"component token")," \u2192 ",Object(s.b)("inlineCode",{parentName:"li"},"role token")," \u2192 ",Object(s.b)("inlineCode",{parentName:"li"},"system token")),Object(s.b)("li",{parentName:"ul"},"Concrete: ",Object(s.b)("inlineCode",{parentName:"li"},"button-color")," \u2192 ",Object(s.b)("inlineCode",{parentName:"li"},"primary-color")," \u2192 ",Object(s.b)("inlineCode",{parentName:"li"},"teal-60"))),Object(s.b)("p",{parentName:"div"},"And in CSS as implemented by ",Object(s.b)("inlineCode",{parentName:"p"},"@wwnds/core"),":"),Object(s.b)("pre",{parentName:"div"},Object(s.b)("code",{parentName:"pre",className:"language-css"},":root {\n    --nds-teal-60: #1a8082; /* system token */\n    --nds-primary-color: var(--nds-teal-60); /* role token */\n}\n\n.my-button {\n    --nds-button-color: var(--nds-primary-color); /* component token */\n\n    background-color: var(--nds-button-color); /* token usage */\n}\n")))),Object(s.b)("h3",{id:"system-tokens"},"System Tokens"),Object(s.b)("p",null,"A ",Object(s.b)("strong",{parentName:"p"},"system")," token is associated with one of our various subsystems, such as the color, motion, spacing, or typography systems."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"System tokens are ",Object(s.b)("em",{parentName:"li"},"immutable"),"\u2014","their values cannot be changed","\u2014","because they are intended to act as a value store rather than part of the theming system."),Object(s.b)("li",{parentName:"ul"},"System token names don't give hints as to how they should be used. This is because they are simply property values and could be used in a variety of ways."),Object(s.b)("li",{parentName:"ul"},"System tokens should rarely be used directly.")),Object(s.b)("h3",{id:"role-tokens"},"Role Tokens"),Object(s.b)("p",null,"A ",Object(s.b)("strong",{parentName:"p"},"role")," token has a semantic purpose in an application's design."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Role tokens are customizable and together constitute the primary way to theme a Norton Design System application."),Object(s.b)("li",{parentName:"ul"},"Role token names do give hints about how they should be used."),Object(s.b)("li",{parentName:"ul"},"Role tokens are the primary interface for theming and should therefore be used directly whenever possible.")),Object(s.b)("h3",{id:"component-tokens"},"Component Tokens"),Object(s.b)("p",null,"A ",Object(s.b)("strong",{parentName:"p"},"component")," token is scoped to a specific component."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Component tokens are customizable but changing their values may result in inconsistency across components."),Object(s.b)("li",{parentName:"ul"},"Component token names generally follow the pattern of ",Object(s.b)("inlineCode",{parentName:"li"},"{component}-{property}"),", where ",Object(s.b)("inlineCode",{parentName:"li"},"component")," is the name of the component and ",Object(s.b)("inlineCode",{parentName:"li"},"property")," captures the CSS property where the token is used.",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Examples: ",Object(s.b)("inlineCode",{parentName:"li"},"button-border-width")," or ",Object(s.b)("inlineCode",{parentName:"li"},"tooltip-offset-y"),"."))),Object(s.b)("li",{parentName:"ul"},"Component tokens can and should be used directly when creating custom components based on a Norton Design System component.")),Object(s.b)("h2",{id:"token-conventions"},"Token Conventions"),Object(s.b)("p",null,"In addition to the system of inheritance that our design tokens use, we follow a few key conventions that help you to better understand how to use them in your application."),Object(s.b)("h3",{id:"base-tokens"},"Base Tokens"),Object(s.b)("p",null,"Base tokens always have the ",Object(s.b)("inlineCode",{parentName:"p"},"-base")," suffix, denoting that they are used as the default value for the corresponding property across the application.\nCustomizing these will have the most wide-ranging impact on the design language of your application."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Example: custom base border-radius"',title:'"Example:',custom:!0,base:!0,'border-radius"':!0},"@use '@wwnds/core' as nds with (\n    $radius-base: var(--nds-radius-lg),\n);\n\n// buttons, text fields, and other inline components will all have more rounded corners\n")),Object(s.b)("h3",{id:"t-shirt-sizing"},"T-Shirt Sizing"),Object(s.b)("p",null,"For tokens that fall on a linear scale such as font size, we sometimes use t-shirt sizing suffixes of ",Object(s.b)("inlineCode",{parentName:"p"},"-xs"),", ",Object(s.b)("inlineCode",{parentName:"p"},"-sm"),", ",Object(s.b)("inlineCode",{parentName:"p"},"-md"),", and ",Object(s.b)("inlineCode",{parentName:"p"},"-lg")," to capture a normalized subset of values.\nCustomizing these will allow you to change the sense of scale across your application."))}d.isMDXComponent=!0}}]);