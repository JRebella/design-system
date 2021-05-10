(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{155:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return b})),a.d(e,"toc",(function(){return m})),a.d(e,"default",(function(){return p}));var n=a(6),i=a(1),o=(a(0),a(181)),c=a(40),s=a(29),r=a(184),l={title:"Switch",description:"A switch allows the user to immediately turn an option on or off."},b={unversionedId:"components/switch",id:"components/switch",isDocsHomePage:!1,title:"Switch",description:"A switch allows the user to immediately turn an option on or off.",source:"@site/docs/components/switch.mdx",sourceDirName:"components",slug:"/components/switch",permalink:"/design-system/docs/components/switch",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/switch.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1618685757,formattedLastUpdatedAt:"4/17/2021",frontMatter:{title:"Switch",description:"A switch allows the user to immediately turn an option on or off."},sidebar:"components",previous:{title:"Spinner",permalink:"/design-system/docs/components/spinner"},next:{title:"Text Field",permalink:"/design-system/docs/components/text-field"}},m=[{value:"Anatomy",id:"anatomy",children:[]},{value:"Usage",id:"usage",children:[]},{value:"React API",id:"react-api",children:[{value:"Switch",id:"switch",children:[]}]}],d={toc:m};function p(t){var e=t.components,a=Object(i.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A switch allows the user to immediately turn an option on or off.")),Object(o.b)("h2",{id:"anatomy"},"Anatomy"),Object(o.b)("img",{alt:"A diagram of the switch's various components.",src:Object(c.a)("/img/anatomy_switch.png")}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Label")," - a short name that lets the user know what the switch will turn on or off."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Description")," (",Object(o.b)("em",{parentName:"li"},"optional"),") - a description that can be used to add clarity to the role of the switch."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Control")," - an indicator that lets the user know the current state of the switch.")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When a user toggles a switch, its corresponding action takes effect right away."),Object(o.b)("li",{parentName:"ul"},"A switch has two mutually exclusive states","\u2014","on and off.")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Dos")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Do use a switch to mimic a physical on/off switch in the interface."),Object(o.b)("li",{parentName:"ul"},"Do allow users to select the switch by clicking the control or its text label.")))),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Don'ts")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},'Don\u2019t use the words "on/off" in the switch\u2019s text label. The option that the switch controls should be clear from its label. A tooltip/title attribute may be added to convey the on/off state.'),Object(o.b)("li",{parentName:"ul"},"Don\u2019t use a switch if the option is part of a larger flow, with a final confirmation step or Submit button. Use a ",Object(o.b)("a",{parentName:"li",href:"checkbox"},"checkbox")," instead."),Object(o.b)("li",{parentName:"ul"},"Don\u2019t use a switch if users can select multiple options from a list. Use ",Object(o.b)("a",{parentName:"li",href:"checkbox"},"checkboxes")," instead.")))),Object(o.b)("h2",{id:"react-api"},"React API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Switch } from '@wwnds/react';\n")),Object(o.b)("h3",{id:"switch"},"Switch"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Switch label="Switch" />\n')),Object(o.b)(r.f,{from:s.Switch,mdxType:"PropsTable"}))}p.isMDXComponent=!0}}]);