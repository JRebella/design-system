(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return n?o.a.createElement(m,r(r({ref:t},s),{},{components:n})):o.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var s=2;s<c;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),c=(n(0),n(104)),i={title:"Checkbox",description:"A checkbox allows a user to select or deselect an option before submitting it."},r={unversionedId:"components/checkbox",id:"components/checkbox",isDocsHomePage:!1,title:"Checkbox",description:"A checkbox allows a user to select or deselect an option before submitting it.",source:"@site/docs/components/checkbox.mdx",permalink:"/design-system/docs/components/checkbox",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/checkbox.mdx",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1596775482,sidebar:"docs",previous:{title:"Button",permalink:"/design-system/docs/components/button"},next:{title:"Disclosure",permalink:"/design-system/docs/components/disclosure"}},l=[{value:"Anatomy",id:"anatomy",children:[]},{value:"Playground",id:"playground",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Types",id:"types",children:[{value:"Dual-state Checkbox",id:"dual-state-checkbox",children:[]},{value:"Tri-state Checkbox",id:"tri-state-checkbox",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"A checkbox allows a user to select or deselect an option before submitting it.")),Object(c.b)("h2",{id:"anatomy"},"Anatomy"),Object(c.b)("p",null,"A single checkbox includes:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"A checkbox control"),Object(c.b)("li",{parentName:"ol"},"A label"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"Optional")," A description")),Object(c.b)("h2",{id:"playground"},"Playground"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Checkbox\n    description="Additional information about this checkbox."\n    required\n    requiredIndicator\n>\n    Checkbox\n</Checkbox>\n')),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"indeterminate")," to set a checkbox in its ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes"}),"indeterminate state"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Checkbox\n    description="This checkbox starts out in the indeterminate/mixed state."\n    indeterminate\n>\n    Indeterminate\n</Checkbox>\n')),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A single checkbox has two mutually exclusive states: selected or not selected."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("kbd",null,"Space")," changes the state of the checkbox."),Object(c.b)("li",{parentName:"ul"},"Use a group of checkboxes to allow a user to select zero, one or multiple options from a list, and display all available options."),Object(c.b)("li",{parentName:"ul"},"Checkboxes may allow users to sub-select options from a nested list (see tri-state checkboxes)."),Object(c.b)("li",{parentName:"ul"},"Checkboxes work independently of other checkboxes, unless they are controlled by a tri-state checkbox.")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Dos")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"Do allow users to select an option by clicking the checkbox or its label."),Object(c.b)("li",{parentName:"ul"},"Do position the checkbox to the left of its label."),Object(c.b)("li",{parentName:"ul"},"Do separate groups of checkboxes with group labels."),Object(c.b)("li",{parentName:"ul"},"Do display options in a vertical layout for easier scanning."),Object(c.b)("li",{parentName:"ul"},"Do define a label for the checkbox, even if it is not visible (example: when selecting a row in a table).")))),Object(c.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Don'ts")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"Don\u2019t use checkboxes if only one item can be selected from a list. Use radio buttons or a dropdown instead."),Object(c.b)("li",{parentName:"ul"},"Don\u2019t use a checkbox if an action will take immediate effect when the user selects or deselects it. Add a Submit button to confirm, or use a toggle instead."),Object(c.b)("li",{parentName:"ul"},"Don\u2019t use negative statements for a checkbox, because taking action to select it is confusing and counter-intuitive. (example: \u201cI don\u2019t want to receive email\u2026\u201d)")))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Avoid setting default options, because pre-selecting an option makes it more likely that users will not make a conscious choice and submit an option unintentionally."),Object(c.b)("li",{parentName:"ul"},"Consider the most logical order to list options. Options may be listed alphabetically, by popularity, or some other ordered system that should be clear to the user.")),Object(c.b)("h2",{id:"types"},"Types"),Object(c.b)("h3",{id:"dual-state-checkbox"},"Dual-state Checkbox"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A single checkbox is a dual-state checkbox."),Object(c.b)("li",{parentName:"ul"},"A dual-state checkbox allows a user to switch between two states: checked and not checked.")),Object(c.b)("h3",{id:"tri-state-checkbox"},"Tri-state Checkbox"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A tri-state checkbox supports three states: checked, not checked, and indeterminate (partially checked)."),Object(c.b)("li",{parentName:"ul"},"A tri-state checkbox is used to represent and control the state of a group of options. Each option in the group can also be individually checked or unchecked with a dual state checkbox.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"If all options in the group are checked, the tri-state checkbox displays as checked."),Object(c.b)("li",{parentName:"ul"},"If some of the options in the group are checked, the tri-state checkbox displays as indeterminate (partially checked)."),Object(c.b)("li",{parentName:"ul"},"If none of the options in the group are checked, the tri-state checkbox displays as not checked."),Object(c.b)("li",{parentName:"ul"},"If a user checks a tri-state checkbox, then all the options in the group are checked."),Object(c.b)("li",{parentName:"ul"},"If a user unchecks a tri-state checkbox, then all the options in the group are unchecked.")))))}b.isMDXComponent=!0}}]);