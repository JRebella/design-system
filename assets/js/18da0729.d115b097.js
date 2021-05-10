(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{124:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(6),b=a(1),l=(a(0),a(181)),i={title:"Typography"},r={unversionedId:"foundations/typography",id:"foundations/typography",isDocsHomePage:!1,title:"Typography",description:"Our typographical subsystem helps you to create a consistent, flexible typographic style for your application.",source:"@site/docs/foundations/typography.mdx",sourceDirName:"foundations",slug:"/foundations/typography",permalink:"/design-system/docs/foundations/typography",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/foundations/typography.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1617079883,formattedLastUpdatedAt:"3/30/2021",frontMatter:{title:"Typography"},sidebar:"foundations",previous:{title:"Color",permalink:"/design-system/docs/foundations/color"},next:{title:"Spacing",permalink:"/design-system/docs/foundations/spacing"}},s=[{value:"Typesets",id:"typesets",children:[{value:"Body Typesets",id:"body-typesets",children:[]},{value:"UI Typesets",id:"ui-typesets",children:[]},{value:"Heading Typesets",id:"heading-typesets",children:[]}]},{value:"Font Family",id:"font-family",children:[{value:"Usage Examples",id:"usage-examples",children:[]}]},{value:"Font Size",id:"font-size",children:[{value:"Usage Examples",id:"usage-examples-1",children:[]}]}],o={toc:s};function c(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Our typographical subsystem helps you to create a consistent, flexible typographic style for your application.\nDesign tokens for ",Object(l.b)("a",{parentName:"p",href:"#font-family"},"font family"),", ",Object(l.b)("a",{parentName:"p",href:"#font-size"},"font size"),", ",Object(l.b)("a",{parentName:"p",href:"#line-height"},"line height"),", and ",Object(l.b)("a",{parentName:"p",href:"#font-weight"},"font weight")," give you a granular way to customize type,\nand our ",Object(l.b)("a",{parentName:"p",href:"#typesets"},"typeset")," convention gives you a flexible and easy way to apply and define composed sets of typographic properties."),Object(l.b)("h2",{id:"typesets"},"Typesets"),Object(l.b)("p",null,"A typeset is a composed set of typographical styles that are used for specific purposes.\nWe include three categories of typesets to be used with body text, UI text, and headings.\nAll three come in a variety of sizing variants, but you can also define your own typesets as needed."),Object(l.b)("p",null,"The default typeset, which is used as the default ",Object(l.b)("a",{parentName:"p",href:"#body-typesets"},"body typeset"),", utilizes all ",Object(l.b)("a",{parentName:"p",href:"design-tokens#base-tokens"},"base tokens"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="The default typeset"',title:'"The',default:!0,'typeset"':!0},"@use '@wwnds/core' as nds;\n\n.my-selector {\n    @include nds.typeset;\n}\n\n// CSS output\n// .my-selector {\n//   font-family: var(--nds-font-family-base);\n//   font-size: var(--nds-font-size-base);\n//   line-height: var(--nds-line-height-base);\n// }\n")),Object(l.b)("h3",{id:"body-typesets"},"Body Typesets"),Object(l.b)("p",null,"Used for content, the body typesets are typically set at the document body to define the defaults for most content.\nThey always use a font family of ",Object(l.b)("inlineCode",{parentName:"p"},"font-family-base")," and a line height of ",Object(l.b)("inlineCode",{parentName:"p"},"line-height-base"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"body-xs")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"body-sm")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"body-md")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"body-lg")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"body-xs"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"body-sm"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"body-md"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"body-lg"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit."))))),Object(l.b)("p",null,"Additionally, the ",Object(l.b)("inlineCode",{parentName:"p"},"body-base")," typeset uses the base font size token (",Object(l.b)("inlineCode",{parentName:"p"},"font-size-base"),")."),Object(l.b)("h3",{id:"ui-typesets"},"UI Typesets"),Object(l.b)("p",null,"Used for user interface elements where text doesn't typically reflow, the UI typesets have a smaller default line height than body typesets.\nThey always use a font family of ",Object(l.b)("inlineCode",{parentName:"p"},"font-family-base")," and a line height of ",Object(l.b)("inlineCode",{parentName:"p"},"line-height-3"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"ui-xs")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"ui-sm")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"ui-md")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"ui-lg")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"ui-xs"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"ui-sm"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"ui-md"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"ui-lg"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit."))))),Object(l.b)("p",null,"Additionally, the ",Object(l.b)("inlineCode",{parentName:"p"},"ui-base")," typeset uses the base font size token (",Object(l.b)("inlineCode",{parentName:"p"},"font-size-base"),")."),Object(l.b)("h3",{id:"heading-typesets"},"Heading Typesets"),Object(l.b)("p",null,"Used to convey hierarchy, the heading typesets create greater vertical separation while still adhering to a consistent vertical rhythm."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Heading"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"heading-1")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"h1"},"Lorem ipsum dolor sit"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"heading-2")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"h2"},"Lorem ipsum dolor sit"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"heading-3")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"h3"},"Lorem ipsum dolor sit"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"heading-4")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"h4"},"Lorem ipsum dolor sit"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"heading-5")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"h5"},"Lorem ipsum dolor sit"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"heading-6")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"h6"},"Lorem ipsum dolor sit"))))),Object(l.b)("h2",{id:"font-family"},"Font Family"),Object(l.b)("p",null,"Our font family system provides design tokens for sans serif, serif, and monospace\nfont family types, all defaulting to their respective ",Object(l.b)("a",{parentName:"p",href:"https://systemfontstack.com/"},"system stack"),".\nSystem stack defaults help us keep the size of the design system down while ensuring\nthat all devices use a font that looks good on that device."),Object(l.b)("p",null,"To customize the font family and ensure a more consistent typographic experience\nfor your users, simply override the font family design tokens."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Token"),Object(l.b)("th",{parentName:"tr",align:null},"Customizable"),Object(l.b)("th",{parentName:"tr",align:null},"Usage"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"ff-system-sans"},"font-family-system-sans")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"a sans serif system font stack")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"ff-system-serif"},"font-family-system-serif")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"a serif system font stack")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"ff-system-mono"},"font-family-system-mono")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"a monospace system font stack")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"ff-sans"},"font-family-sans")),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"the main sans serif font family")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"ff-serif"},"font-family-serif")),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"the main serif font family")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"ff-mono"},"font-family-mono")),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"the main monospace font family")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"ff-base"},"font-family-base")),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"the main font family that will be used throughout your application")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"ff-headings"},"font-family-headings")),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"the font family that will be used for headings")))),Object(l.b)("h3",{id:"usage-examples"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Use a font family token"',title:'"Use',a:!0,font:!0,family:!0,'token"':!0},"@use '@wwnds/core' as nds;\n\n.my-serif-selector {\n    font-family: var(--nds-font-family-serif);\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Set custom serif font as base"',title:'"Set',custom:!0,serif:!0,font:!0,as:!0,'base"':!0},"@use '@wwnds/core' with (\n    $font-family-serif: 'Lora',\n    $font-family-base: var(--nds-font-family-serif),\n);\n\n// --nds-font-family-base will resolve to \"'Lora', var(--nds-font-family-system-serif)\"\n")),Object(l.b)("h2",{id:"font-size"},"Font Size"),Object(l.b)("p",null,"The main way to control font sizing in the Norton Design System is with the font\nsize ",Object(l.b)("a",{parentName:"p",href:"design-tokens#role-tokens"},"role tokens"),". These tokens capture the base font\nsize for your content, sizes suitable to convey hierarchy (in other words: headings),\nand a small subset of t-shirt sizes to help create a consistent sense of scale\nfor typography in your application."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Role Token"),Object(l.b)("th",{parentName:"tr",align:null},"Default value"),Object(l.b)("th",{parentName:"tr",align:null},"Px equivalent",Object(l.b)("sup",{parentName:"th",id:"fnref-1"},Object(l.b)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-base"},"font-size-base")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"font-size-md")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"16px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-xs"},"font-size-xs")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"font-size-12")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"12px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-sm"},"font-size-sm")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"font-size-14")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"14px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-md"},"font-size-md")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"font-size-16")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"16px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-lg"},"font-size-lg")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"font-size-18")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"18px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-h1"},"font-size-h1")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"font-size-32")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"32px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-h2"},"font-size-h2")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"font-size-24")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"24px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-h3"},"font-size-h3")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"font-size-20")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"20px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-h4"},"font-size-h4")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"font-size-18")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"18px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-h5"},"font-size-h5")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"font-size-16")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"16px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-h6"},"font-size-h6")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"font-size-14")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"14px"))))),Object(l.b)("p",null,"Font size ",Object(l.b)("a",{parentName:"p",href:"design-tokens#system-tokens"},"system tokens")," form the basis of the font\nsizing system. Note that these cannot be modified and always use ",Object(l.b)("inlineCode",{parentName:"p"},"rem")," units to\nensure that ",Object(l.b)("a",{parentName:"p",href:"https://css-tricks.com/accessible-font-sizing-explained/"},"the user is in charge of text size"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"System Token"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Px equivalent",Object(l.b)("sup",{parentName:"th",id:"fnref-1"},Object(l.b)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-10"},"font-size-10")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0.625rem")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"10px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-12"},"font-size-12")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0.75rem")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"12px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-14"},"font-size-14")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0.875em")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"14px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-16"},"font-size-16")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"1rem")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"16px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-18"},"font-size-18")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"1.125rem")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"18px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-20"},"font-size-20")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"1.25rem")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"20px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-24"},"font-size-24")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"1.5rem")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"24px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-32"},"font-size-32")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"2rem")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"32px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-40"},"font-size-40")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"2.5rem")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"40px"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("code",{class:"fs-48"},"font-size-48")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"3rem")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"48px"))))),Object(l.b)("a",{name:"px-rem",class:"anchor enhancedAnchor__-node_modules-@docusaurus-theme-classic-lib-theme-Heading-"}),Object(l.b)("h3",{id:"usage-examples-1"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Using a font size token"',title:'"Using',a:!0,font:!0,size:!0,'token"':!0},"@use '@wwnds/core' as nds;\n\n.my-large-text {\n    font-size: var(--nds-font-size-lg);\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-scss",metastring:'title="Use larger font sizes across your application"',title:'"Use',larger:!0,font:!0,sizes:!0,across:!0,your:!0,'application"':!0},"@use '@wwnds/core' with (\n    $font-size-xs: var(--nds-font-size-14),\n    $font-size-sm: var(--nds-font-size-16),\n    $font-size-md: var(--nds-font-size-18),\n    $font-size-lg: var(--nds-font-size-20),\n);\n\n// --nds-font-size-base is still equal to var(--nds-font-size-md),\n// making the base font size equivalent to 18px\n")),Object(l.b)("div",{className:"footnotes"},Object(l.b)("hr",{parentName:"div"}),Object(l.b)("ol",{parentName:"div"},Object(l.b)("li",{parentName:"ol",id:"fn-1"},"Since all font sizes are set as ",Object(l.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/length#rem"},"rem"),",\nthe computed pixel equivalent assumes a browser font size of ",Object(l.b)("inlineCode",{parentName:"li"},"16px"),".",Object(l.b)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);