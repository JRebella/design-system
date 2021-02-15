(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(124)),i=n(123),c=n(130),l={title:"Radio Group",description:"A radio group allows the user to select one option from a set of related options."},s={unversionedId:"components/radio-group",id:"components/radio-group",isDocsHomePage:!1,title:"Radio Group",description:"A radio group allows the user to select one option from a set of related options.",source:"@site/docs/components/radio-group.mdx",slug:"/components/radio-group",permalink:"/design-system/docs/components/radio-group",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/radio-group.mdx",version:"current",lastUpdatedBy:"Anand Patil",lastUpdatedAt:1613422486,sidebar:"components",previous:{title:"Modal",permalink:"/design-system/docs/components/modal"},next:{title:"Switch",permalink:"/design-system/docs/components/switch"}},u=[{value:"Anatomy",id:"anatomy",children:[{value:"Radio Group",id:"radio-group",children:[]},{value:"Radio Button",id:"radio-button",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"React API",id:"react-api",children:[{value:"RadioGroup",id:"radiogroup",children:[]},{value:"Radio",id:"radio",children:[]}]}],d={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A radio group allows the user to select one option from a set of related options.")),Object(o.b)("h2",{id:"anatomy"},"Anatomy"),Object(o.b)("p",null,"The anatomy for both a group of related radio buttons and a single radio button are outlined here."),Object(o.b)("h3",{id:"radio-group"},"Radio Group"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Label")," - text that conveys how the radio buttons are related and prompts the user to select a single radio button."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Current selection"),": a selected radio button indicates that it will be the option that is submitted."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Choices")," - the available radio buttons. Clicking or arrowing to an unselected radio button will deselect the currently selected radio button.")),Object(o.b)("h3",{id:"radio-button"},"Radio Button"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Control")," - the input control that conveys the current state of the radio button to the user."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Label")," - a short name that lets the user know what the radio button is selecting. Clicking the label should select the radio button."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Description")," (",Object(o.b)("em",{parentName:"li"},"optional"),") - additional text that can be used to add clarity or context to the radio button label. Clicking the description should do nothing.")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Single radio button usage")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Radio buttons must always be part of a radio group.\nUsing a single radio button by itself would allow the user to check the option but not uncheck it.\nIf that is desired, use a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"checkbox"}),"checkbox")," instead to ensure that the user can uncheck it."))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use radio buttons to allow a user to select exactly one item from a set of options, and display all available options."),Object(o.b)("li",{parentName:"ul"},"Radio buttons should have between 2-5 options.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If you have more than 5 options, use a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"dropdown"}),"dropdown")," or combo box."))),Object(o.b)("li",{parentName:"ul"},"The options in a group of radio buttons must be mutually exclusive. The user can only select 1 Radio."),Object(o.b)("li",{parentName:"ul"},"Only use radio buttons when the field is required. If all radio buttons are in an unselected state on load, a user must select one of the radio buttons before proceeding."),Object(o.b)("li",{parentName:"ul"},"Arrow keys move focus within the group, uncheck the previously focused button, and check the newly focused button."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("kbd",null,"Space")," selects the focused radio button if it is not already selected.")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Dos")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Do allow users to select a Radio by clicking the radio button or its text label."),Object(o.b)("li",{parentName:"ul"},"Do position the radio button to the left of its label."),Object(o.b)("li",{parentName:"ul"},"Do display options in a vertical layout, by default, for easier scanning."),Object(o.b)("li",{parentName:"ul"},"Consider the most logical order to display options, such as alphabetical, chronological or by popularity.")))),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Don'ts")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Don\u2019t use radio buttons if a user could select multiple options. Use ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"checkbox"}),"checkboxes")," instead."),Object(o.b)("li",{parentName:"ul"},"Don't use radio buttons if a user could select NO Radio. Use ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"checkbox"}),"checkboxes")," instead."),Object(o.b)("li",{parentName:"ul"},"Don\u2019t use radio buttons if an action will take immediate effect when the user selects or deselects it.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Use a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"switch"}),"switch")," if there are two opposite options (example: YES/NO, ON/OFF)."),Object(o.b)("li",{parentName:"ul"},"Otherwise, use a group of regular ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"button"}),"buttons"),".")))))),Object(o.b)("h2",{id:"react-api"},"React API"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { Radio, RadioGroup } from '@wwnds/react';\n")),Object(o.b)("h3",{id:"radiogroup"},"RadioGroup"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RadioGroup label="Select your favorite fruit." name="fruit">\n    <Radio thumbnail="\ud83c\udf4e" description="A classic choice">Apple</Radio>\n    <Radio thumbnail="\ud83c\udf4c" description="A taste of the tropics">Banana</Radio>\n    <Radio thumbnail="\ud83e\udd5d" description="A bit more exotic">Kiwi</Radio>\n    <Radio thumbnail="\ud83c\udf4a" description="Tangy and juicy">Orange</Radio>\n</RadioGroup>\n')),Object(o.b)(c.a,{from:i.RadioGroup,mdxType:"PropsTable"}),Object(o.b)("h3",{id:"radio"},"Radio"),Object(o.b)("p",null,"Note: there is no scenario where you would use a single ",Object(o.b)("inlineCode",{parentName:"p"},"Radio")," alone."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Radio>Apple</Radio>\n")),Object(o.b)(c.a,{from:i.Radio,mdxType:"PropsTable"}))}p.isMDXComponent=!0},129:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ge}));var r=n(3),a=n(0),o=n.n(a),i=n(123),c=n(129),l=n.n(c),s=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var d={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},p={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},m=["style","script"],b=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,h=/\n{2,}$/,g=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,y=/^ *> ?/gm,v=/^ {2,}\n/,O=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,j=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,k=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,N=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,w=/^(?:\n *)*\n/,x=/\r\n?/g,R=/^\[\^([^\]]+)](:.*)\n/,S=/^\[\^([^\]]+)]/,C=/\f/g,A=/^\s*?\[(x|\s)\]/,T=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,E=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,z=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,U=/&([a-z]+);/g,$=/^<!--.*?-->/,D=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,I=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,B=/^\{.*\}$/,L=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,P=/^<([^ >]+@[^ >]+)>/,M=/^<([^ >]+:\/[^ >]+)>/,_=/ *\n+$/,G=/(?:^|\n)( *)$/,q=/-([a-z])?/gi,F=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,H=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,Z=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,V=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,J=/^\[([^\]]*)\] ?\[([^\]]*)\]/,K=/(\[|\])/g,X=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Q=/\t/g,W=/^ *\| */,Y=/(^ *\||\| *$)/g,ee=/ *$/,te=/^ *:-+: *$/,ne=/^ *:-+ *$/,re=/^ *-+: *$/,ae=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,oe=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ie=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ce=/^\\([^0-9A-Za-z\s])/,le=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,se=/(^\n+|\n+$|\s+$)/g,ue=/^([ \t]*)/,de=/\\([^0-9A-Z\s])/gi,pe=/^( *)((?:[*+-]|\d+\.)) +/,me=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,be=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,fe=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,he=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ge=[g,k,j,T,E,z,$,I,me,be,F,H];function ye(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ve(e){return re.test(e)?"right":te.test(e)?"center":ne.test(e)?"left":null}function Oe(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var o=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&o.push([]):("text"===e.type&&(null==a[t+1]||"tableSeparator"===a[t+1].type)&&(e.content=e.content.replace(ee,"")),o[o.length-1].push(e))})),o}function je(e,t,n){n.inline=!0;var r=Oe(e[1],t,n),a=function(e){return e.replace(Y,"").split("|").map(ve)}(e[2]),o=function(e,t,n){return e.trim().split("\n").map((function(e){return Oe(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function ke(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Ne(e){function t(r,a){for(var o=[],i="";r;)for(var c=0;c<n.length;){var l=n[c],s=e[l],u=s.match(r,a,i);if(u){var d=u[0];r=r.substring(d.length);var p=s.parse(u,t,a);null==p.type&&(p.type=l),o.push(p),i=d;break}c++}return o}var n=Object.keys(e);return n.sort((function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a})),function(e,n){return t(function(e){return e.replace(x,"\n").replace(C,"").replace(Q,"    ")}(e),n)}}function we(e){return function(t,n){return n.inline?e.exec(t):null}}function xe(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Re(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Se(e){return function(t){return e.exec(t)}}function Ce(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(t){return null}return e}function Ae(e){return e.replace(de,"$1")}function Te(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ee(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function ze(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function Ue(e,t,n){return{content:Te(t,e[1],n)}}function $e(){return{}}function De(){return null}function Ie(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Be(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function Le(e,t){var n=Be(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":u(n))&&"render"in n?n:Be(t,e+".component",e):e}function Pe(e,t){function n(e,n){for(var r=Be(t.overrides,e+".props",{}),a=arguments.length,o=Array(a>2?a-2:0),c=2;c<a;c++)o[c-2]=arguments[c];return i.apply(void 0,[Le(e,t.overrides),s({},n,r,{className:Ie(n&&n.className,r.className)||void 0})].concat(o))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===X.test(e));var a=Q(C(r?e:e.replace(se,"")+"\n\n",{inline:r})),o=void 0;return a.length>1?o=n(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(o=a[0])&&(o=n("span",{key:"outer"},o)):o=n("span",{key:"outer"}),o}function a(e){var t=e.match(b);return t?t.reduce((function(e,t,n){var a=t.indexOf("=");if(-1!==a){var i=function(e){return-1!==e.indexOf("-")&&null===e.match(D)&&(e=e.replace(q,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,a)).trim(),c=l()(t.slice(a+1).trim()),s=d[i]||i,u=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Ce(t):(t.match(B)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(i,c);(z.test(u)||I.test(u))&&(e[s]=o.a.cloneElement(r(u.trim()),{key:n}))}else"style"!==t&&(e[d[t]||t]=!0);return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||ye,t.namedCodesToUnicode=t.namedCodesToUnicode?s({},p,t.namedCodesToUnicode):p;var i=t.createElement||o.a.createElement;var c=[],u={},x={blockQuote:{match:Re(g),order:2,parse:function(e,t,n){return{content:t(e[0].replace(y,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Se(v),order:2,parse:$e,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:Re(O),order:2,parse:$e,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:Re(k),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Re(j),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:xe(N),order:4,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:Re(R),order:1,parse:function(e){return c.push({footnote:e[2],identifier:e[1]}),{}},react:De},footnoteReference:{match:we(S),order:2,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,r){return n("a",{key:r.key,href:Ce(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:we(A),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:Re(T),order:2,parse:function(e,n,r){return{content:Te(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:Re(E),order:1,parse:function(e,t,n){return{content:Te(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Se($),order:2,parse:function(){return{}},react:De},image:{match:xe(he),order:2,parse:function(e){return{alt:e[1],target:Ae(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Ce(e.target)})}},link:{match:we(fe),order:4,parse:function(e,t,n){return{content:Ee(t,e[1],n),target:Ae(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:Ce(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:we(M),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:we(L),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:we(P),order:1,parse:function(e){var t=e[1],n=e[1];return f.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=G.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,be.exec(e)):null},order:2,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,i=e[0].replace(h,"\n").match(me),c=!1;return{items:i.map((function(e,r){var a=pe.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(pe,""),s=r===i.length-1,u=-1!==l.indexOf("\n\n")||s&&c;c=u;var d,p=n.inline,m=n._list;n._list=!0,u?(n.inline=!1,d=l.replace(_,"\n\n")):(n.inline=!0,d=l.replace(_,""));var b=t(d,n);return n.inline=p,n._list=m,b})),ordered:a,start:o}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,a){return n("li",{key:a},t(e,r))})))}},newlineCoalescer:{match:Re(w),order:4,parse:$e,react:function(){return"\n"}},paragraph:{match:Re(H),order:4,parse:Ue,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:we(Z),order:1,parse:function(e){return u[e[1]]={target:e[2],title:e[4]},{}},react:De},refImage:{match:xe(V),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:Ce(u[e.ref].target),title:u[e.ref].title})}},refLink:{match:we(J),order:1,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(K,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return u[e.ref]?n("a",{key:r.key,href:Ce(u[e.ref].target),title:u[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:Re(F),order:2,parse:je,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(a,o){return n("th",{key:o,style:ke(e,o)},t(a,r))})))),n("tbody",null,e.cells.map((function(a,o){return n("tr",{key:o},a.map((function(a,o){return n("td",{key:o,style:ke(e,o)},t(a,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?W.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Se(le),order:5,parse:function(e){return{content:e[0].replace(U,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:xe(ae),order:3,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:xe(oe),order:4,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:xe(ce),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:xe(ie),order:4,parse:Ue,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}};!0!==t.disableParsingRawHTML&&(x.htmlBlock={match:Se(z),order:2,parse:function(e,t,n){var r=e[3].match(ue)[1],o=new RegExp("^"+r,"gm"),i=e[3].replace(o,""),c=function(e){return ge.some((function(t){return t.test(e)}))}(i)?ze:Te,l=e[1].toLowerCase(),s=-1!==m.indexOf(l);return{attrs:a(e[2]),content:s?e[3]:c(t,i,n),noInnerParse:s,tag:s?l:e[1]}},react:function(e,t,r){return n(e.tag,s({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},x.htmlSelfClosing={match:Se(I),order:2,parse:function(e){return{attrs:a(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,s({},e.attrs,{key:r.key}))}});var C=Ne(x),Q=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,o=[],i=!1,c=0;c<n.length;c++){r.key=c;var l=t(n[c],r),s="string"==typeof l;s&&i?o[o.length-1]+=l:o.push(l),i=s}return r.key=a,o}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(x)),Y=r(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return c.length&&Y.props.children.push(n("footer",{key:"footer"},c.map((function(e){return n("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,Q(C(e.footnote,{inline:!0})))})))),Y}function Me(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return o.a.cloneElement(Pe(t,n),r)}var _e=function(e){var t=e.name,n=e.required,r=e.type,a=e.description;return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(i.FieldInfo,{indicator:n?"required":void 0,label:t})),o.a.createElement("td",null,o.a.createElement(Me,null,a)),o.a.createElement("td",null,o.a.createElement("code",{className:"code-wrap"},r.name.replace(" | undefined",""))))},Ge=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,a=n.displayName,i=n.props,c=Object.keys(i).map((function(e){var t=i[e];return o.a.createElement(_e,Object(r.a)({key:t.name},t))}));return o.a.createElement("table",{"aria-label":"Props for "+a},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Type"))),o.a.createElement("tbody",null,c))}}}]);