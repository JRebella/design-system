(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{112:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return Re}));var r=n(2),a=n(0),o=n.n(a),c=n(101),i=n(112),l=n.n(i),s=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var p={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},d={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},m=["style","script"],b=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,h=/mailto:/i,f=/\n{2,}$/,g=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,y=/^ *> ?/gm,k=/^ {2,}\n/,v=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,x=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,O=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,j=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,N=/^(?:\n *)*\n/,w=/\r\n?/g,C=/^\[\^([^\]]+)](:.*)\n/,S=/^\[\^([^\]]+)]/,A=/\f/g,E=/^\s*?\[(x|\s)\]/,T=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,D=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,I=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,z=/&([a-z]+);/g,U=/^<!--.*?-->/,$=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,_=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,P=/^\{.*\}$/,B=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,L=/^<([^ >]+@[^ >]+)>/,M=/^<([^ >]+:\/[^ >]+)>/,q=/ *\n+$/,R=/(?:^|\n)( *)$/,F=/-([a-z])?/gi,H=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,Z=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,G=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,J=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,V=/^\[([^\]]*)\] ?\[([^\]]*)\]/,W=/(\[|\])/g,X=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,K=/\t/g,Q=/^ *\| */,Y=/(^ *\||\| *$)/g,ee=/ *$/,te=/^ *:-+: *$/,ne=/^ *:-+ *$/,re=/^ *-+: *$/,ae=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,oe=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ce=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ie=/^\\([^0-9A-Za-z\s])/,le=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,se=/(^\n+|\n+$|\s+$)/g,ue=/^([ \t]*)/,pe=/\\([^0-9A-Z\s])/gi,de=/^( *)((?:[*+-]|\d+\.)) +/,me=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,be=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,he=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,fe=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ge=[g,O,x,T,D,I,U,_,me,be,H,Z];function ye(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ke(e){return re.test(e)?"right":te.test(e)?"center":ne.test(e)?"left":null}function ve(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var o=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&o.push([]):("text"===e.type&&(null==a[t+1]||"tableSeparator"===a[t+1].type)&&(e.content=e.content.replace(ee,"")),o[o.length-1].push(e))})),o}function xe(e,t,n){n.inline=!0;var r=ve(e[1],t,n),a=function(e){return e.replace(Y,"").split("|").map(ke)}(e[2]),o=function(e,t,n){return e.trim().split("\n").map((function(e){return ve(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function Oe(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function je(e){function t(r,a){for(var o=[],c="";r;)for(var i=0;i<n.length;){var l=n[i],s=e[l],u=s.match(r,a,c);if(u){var p=u[0];r=r.substring(p.length);var d=s.parse(u,t,a);null==d.type&&(d.type=l),o.push(d),c=p;break}i++}return o}var n=Object.keys(e);return n.sort((function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a})),function(e,n){return t(function(e){return e.replace(w,"\n").replace(A,"").replace(K,"    ")}(e),n)}}function Ne(e){return function(t,n){return n.inline?e.exec(t):null}}function we(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Ce(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Se(e){return function(t){return e.exec(t)}}function Ae(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(t){return null}return e}function Ee(e){return e.replace(pe,"$1")}function Te(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function De(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ie(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function ze(e,t,n){return{content:Te(t,e[1],n)}}function Ue(){return{}}function $e(){return null}function _e(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Pe(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function Be(e,t){var n=Pe(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":u(n))&&"render"in n?n:Pe(t,e+".component",e):e}function Le(e,t){function n(e,n){for(var r=Pe(t.overrides,e+".props",{}),a=arguments.length,o=Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];return c.apply(void 0,[Be(e,t.overrides),s({},n,r,{className:_e(n&&n.className,r.className)||void 0})].concat(o))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===X.test(e));var a=K(A(r?e:e.replace(se,"")+"\n\n",{inline:r})),o=void 0;return a.length>1?o=n(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(o=a[0])&&(o=n("span",{key:"outer"},o)):o=n("span",{key:"outer"}),o}function a(e){var t=e.match(b);return t?t.reduce((function(e,t,n){var a=t.indexOf("=");if(-1!==a){var c=function(e){return-1!==e.indexOf("-")&&null===e.match($)&&(e=e.replace(F,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,a)).trim(),i=l()(t.slice(a+1).trim()),s=p[c]||c,u=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Ae(t):(t.match(P)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(c,i);(I.test(u)||_.test(u))&&(e[s]=o.a.cloneElement(r(u.trim()),{key:n}))}else"style"!==t&&(e[p[t]||t]=!0);return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||ye,t.namedCodesToUnicode=t.namedCodesToUnicode?s({},d,t.namedCodesToUnicode):d;var c=t.createElement||o.a.createElement;var i=[],u={},w={blockQuote:{match:Ce(g),order:2,parse:function(e,t,n){return{content:t(e[0].replace(y,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Se(k),order:2,parse:Ue,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:Ce(v),order:2,parse:Ue,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:Ce(O),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Ce(x),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:we(j),order:4,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:Ce(C),order:1,parse:function(e){return i.push({footnote:e[2],identifier:e[1]}),{}},react:$e},footnoteReference:{match:Ne(S),order:2,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,r){return n("a",{key:r.key,href:Ae(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:Ne(E),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:Ce(T),order:2,parse:function(e,n,r){return{content:Te(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:Ce(D),order:1,parse:function(e,t,n){return{content:Te(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Se(U),order:2,parse:function(){return{}},react:$e},image:{match:we(fe),order:2,parse:function(e){return{alt:e[1],target:Ee(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Ae(e.target)})}},link:{match:Ne(he),order:4,parse:function(e,t,n){return{content:De(t,e[1],n),target:Ee(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:Ae(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:Ne(M),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:Ne(B),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:Ne(L),order:1,parse:function(e){var t=e[1],n=e[1];return h.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=R.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,be.exec(e)):null},order:2,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,c=e[0].replace(f,"\n").match(me),i=!1;return{items:c.map((function(e,r){var a=de.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(de,""),s=r===c.length-1,u=-1!==l.indexOf("\n\n")||s&&i;i=u;var p,d=n.inline,m=n._list;n._list=!0,u?(n.inline=!1,p=l.replace(q,"\n\n")):(n.inline=!0,p=l.replace(q,""));var b=t(p,n);return n.inline=d,n._list=m,b})),ordered:a,start:o}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,a){return n("li",{key:a},t(e,r))})))}},newlineCoalescer:{match:Ce(N),order:4,parse:Ue,react:function(){return"\n"}},paragraph:{match:Ce(Z),order:4,parse:ze,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:Ne(G),order:1,parse:function(e){return u[e[1]]={target:e[2],title:e[4]},{}},react:$e},refImage:{match:we(J),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:Ae(u[e.ref].target),title:u[e.ref].title})}},refLink:{match:Ne(V),order:1,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(W,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return u[e.ref]?n("a",{key:r.key,href:Ae(u[e.ref].target),title:u[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:Ce(H),order:2,parse:xe,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(a,o){return n("th",{key:o,style:Oe(e,o)},t(a,r))})))),n("tbody",null,e.cells.map((function(a,o){return n("tr",{key:o},a.map((function(a,o){return n("td",{key:o,style:Oe(e,o)},t(a,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?Q.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Se(le),order:5,parse:function(e){return{content:e[0].replace(z,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:we(ae),order:3,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:we(oe),order:4,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:we(ie),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:we(ce),order:4,parse:ze,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}};!0!==t.disableParsingRawHTML&&(w.htmlBlock={match:Se(I),order:2,parse:function(e,t,n){var r=e[3].match(ue)[1],o=new RegExp("^"+r,"gm"),c=e[3].replace(o,""),i=function(e){return ge.some((function(t){return t.test(e)}))}(c)?Ie:Te,l=e[1].toLowerCase(),s=-1!==m.indexOf(l);return{attrs:a(e[2]),content:s?e[3]:i(t,c,n),noInnerParse:s,tag:s?l:e[1]}},react:function(e,t,r){return n(e.tag,s({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},w.htmlSelfClosing={match:Se(_),order:2,parse:function(e){return{attrs:a(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,s({},e.attrs,{key:r.key}))}});var A=je(w),K=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,o=[],c=!1,i=0;i<n.length;i++){r.key=i;var l=t(n[i],r),s="string"==typeof l;s&&c?o[o.length-1]+=l:o.push(l),c=s}return r.key=a,o}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(w)),Y=r(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return i.length&&Y.props.children.push(n("footer",{key:"footer"},i.map((function(e){return n("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,K(A(e.footnote,{inline:!0})))})))),Y}function Me(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return o.a.cloneElement(Le(t,n),r)}var qe=function(e){var t=e.name,n=e.required,r=e.type,a=e.description;return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(c.FieldInfo,{indicator:n?"required":void 0,label:t})),o.a.createElement("td",null,o.a.createElement(Me,null,a)),o.a.createElement("td",null,o.a.createElement("code",null,r.name.replace(" | undefined",""))))},Re=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,a=n.displayName,c=n.props,i=Object.keys(c).map((function(e){var t=c[e];return o.a.createElement(qe,Object(r.a)({key:t.name},t))}));return o.a.createElement("table",{"aria-label":"Props for "+a},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Type"))),o.a.createElement("tbody",null,i))}},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(102)),c=n(184),i=n(113),l={title:"Checkbox",description:"A checkbox allows a user to select or deselect an option before submitting it."},s={unversionedId:"components/checkbox",id:"components/checkbox",isDocsHomePage:!1,title:"Checkbox",description:"A checkbox allows a user to select or deselect an option before submitting it.",source:"@site/docs/components/checkbox.mdx",permalink:"/design-system/docs/components/checkbox",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/checkbox.mdx",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1597758426,sidebar:"docs",previous:{title:"Button",permalink:"/design-system/docs/components/button"},next:{title:"Disclosure",permalink:"/design-system/docs/components/disclosure"}},u=[{value:"Anatomy",id:"anatomy",children:[]},{value:"Playground",id:"playground",children:[]},{value:"Props",id:"props",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Types",id:"types",children:[{value:"Dual-state Checkbox",id:"dual-state-checkbox",children:[]},{value:"Tri-state Checkbox",id:"tri-state-checkbox",children:[]}]}],p={rightToc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A checkbox allows a user to select or deselect an option before submitting it.")),Object(o.b)("h2",{id:"anatomy"},"Anatomy"),Object(o.b)("p",null,"A single checkbox includes:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A checkbox control"),Object(o.b)("li",{parentName:"ol"},"A label"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Optional")," A description")),Object(o.b)("h2",{id:"playground"},"Playground"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Checkbox\n    description="Additional information about this checkbox."\n    required\n    requiredIndicator\n>\n    Checkbox\n</Checkbox>\n')),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"indeterminate")," to set a checkbox in its ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes"}),"indeterminate state"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Checkbox\n    description="This checkbox starts out in the indeterminate/mixed state."\n    indeterminate\n>\n    Indeterminate\n</Checkbox>\n')),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)(i.a,{from:c.a,mdxType:"PropsTable"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A single checkbox has two mutually exclusive states: selected or not selected."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("kbd",null,"Space")," changes the state of the checkbox."),Object(o.b)("li",{parentName:"ul"},"Use a group of checkboxes to allow a user to select zero, one or multiple options from a list, and display all available options."),Object(o.b)("li",{parentName:"ul"},"Checkboxes may allow users to sub-select options from a nested list (see tri-state checkboxes)."),Object(o.b)("li",{parentName:"ul"},"Checkboxes work independently of other checkboxes, unless they are controlled by a tri-state checkbox.")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Dos")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Do allow users to select an option by clicking the checkbox or its label."),Object(o.b)("li",{parentName:"ul"},"Do position the checkbox to the left of its label."),Object(o.b)("li",{parentName:"ul"},"Do separate groups of checkboxes with group labels."),Object(o.b)("li",{parentName:"ul"},"Do display options in a vertical layout for easier scanning."),Object(o.b)("li",{parentName:"ul"},"Do define a label for the checkbox, even if it is not visible (example: when selecting a row in a table).")))),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Don'ts")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Don\u2019t use checkboxes if only one item can be selected from a list. Use radio buttons or a dropdown instead."),Object(o.b)("li",{parentName:"ul"},"Don\u2019t use a checkbox if an action will take immediate effect when the user selects or deselects it. Add a Submit button to confirm, or use a toggle instead."),Object(o.b)("li",{parentName:"ul"},"Don\u2019t use negative statements for a checkbox, because taking action to select it is confusing and counter-intuitive. (example: \u201cI don\u2019t want to receive email\u2026\u201d)")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Avoid setting default options, because pre-selecting an option makes it more likely that users will not make a conscious choice and submit an option unintentionally."),Object(o.b)("li",{parentName:"ul"},"Consider the most logical order to list options. Options may be listed alphabetically, by popularity, or some other ordered system that should be clear to the user.")),Object(o.b)("h2",{id:"types"},"Types"),Object(o.b)("h3",{id:"dual-state-checkbox"},"Dual-state Checkbox"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A single checkbox is a dual-state checkbox."),Object(o.b)("li",{parentName:"ul"},"A dual-state checkbox allows a user to switch between two states: checked and not checked.")),Object(o.b)("h3",{id:"tri-state-checkbox"},"Tri-state Checkbox"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A tri-state checkbox supports three states: checked, not checked, and indeterminate (partially checked)."),Object(o.b)("li",{parentName:"ul"},"A tri-state checkbox is used to represent and control the state of a group of options. Each option in the group can also be individually checked or unchecked with a dual state checkbox.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If all options in the group are checked, the tri-state checkbox displays as checked."),Object(o.b)("li",{parentName:"ul"},"If some of the options in the group are checked, the tri-state checkbox displays as indeterminate (partially checked)."),Object(o.b)("li",{parentName:"ul"},"If none of the options in the group are checked, the tri-state checkbox displays as not checked."),Object(o.b)("li",{parentName:"ul"},"If a user checks a tri-state checkbox, then all the options in the group are checked."),Object(o.b)("li",{parentName:"ul"},"If a user unchecks a tri-state checkbox, then all the options in the group are unchecked.")))))}d.isMDXComponent=!0}}]);