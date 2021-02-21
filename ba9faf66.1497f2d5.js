(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(124)),l=n(123),o=n(130),c={title:"Text Field",description:"A text field allows the user to enter and edit text."},s={unversionedId:"components/text-field",id:"components/text-field",isDocsHomePage:!1,title:"Text Field",description:"A text field allows the user to enter and edit text.",source:"@site/docs/components/text-field.mdx",slug:"/components/text-field",permalink:"/design-system/docs/components/text-field",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/text-field.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1613885092,sidebar:"components",previous:{title:"Switch",permalink:"/design-system/docs/components/switch"},next:{title:"Tooltip",permalink:"/design-system/docs/components/tooltip"}},d=[{value:"Anatomy",id:"anatomy",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Types",id:"types",children:[{value:"Number",id:"number",children:[]},{value:"Email",id:"email",children:[]},{value:"Password",id:"password",children:[]},{value:"URL",id:"url",children:[]},{value:"Tel",id:"tel",children:[]}]},{value:"Text Wrapping Variants",id:"text-wrapping-variants",children:[{value:"Single line text field",id:"single-line-text-field",children:[]},{value:"Multi-line text field not yet implemented",id:"multi-line-text-field-not-yet-implemented",children:[]},{value:"Text area text field not yet implemented",id:"text-area-text-field-not-yet-implemented",children:[]}]},{value:"React API",id:"react-api",children:[{value:"TextField",id:"textfield",children:[]},{value:"FieldInfo",id:"fieldinfo",children:[]},{value:"FieldFeedback",id:"fieldfeedback",children:[]},{value:"FieldAddon",id:"fieldaddon",children:[]}]}],u={rightToc:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"A text field allows the user to enter and edit text.")),Object(i.b)("h2",{id:"anatomy"},"Anatomy"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Label")," - a short name that lets the user know what to type in the field."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Field indicator")," (",Object(i.b)("em",{parentName:"li"},"optional"),") - a parenthetical that lets the user know whether the field is required or optional.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'Use this to bring attention to a field that is the "odd one out."\nFor instance, if there are five fields in a form and only one is optional, the field indicator should say "(optional)" for that one instead of "(required)" for the other four.'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Description")," (",Object(i.b)("em",{parentName:"li"},"optional"),") - additional text that can be used to add clarity to the role of the text field or help the user understand the expected input format."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Input container")," - a container that outlines the boundary of text field's input area and addons."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Input area")," - where the user enters text."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Addon(s)")," (",Object(i.b)("em",{parentName:"li"},"optional"),") - field addons help the user control the state of the text field.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Addons can be included before or after the input area."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Error feedback")," (",Object(i.b)("em",{parentName:"li"},"optional"),") - feedback that lets the user know that their current input is invalid and why."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Character count feedback")," (",Object(i.b)("em",{parentName:"li"},"optional"),") - an indicator that lets the user know how many characters they have remaining.")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A text field allows a user to freeform type or paste their own response to a prompt."),Object(i.b)("li",{parentName:"ul"},"A text field has a label that describes what the user should type."),Object(i.b)("li",{parentName:"ul"},"A text field\u2019s label must be visible at all times."),Object(i.b)("li",{parentName:"ul"},"A text field\u2019s label must be associated with its input. To associate a label with an input, either use the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for"}),"for attribute")," or wrap the input in the label element.")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Dos")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Do let the size of the input area indicate the amount of content you expect the user to enter.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"By default, the text field should be full width, defined by the size of its container."),Object(i.b)("li",{parentName:"ul"},"Only use a fixed-width input area if the text entry has a specific, known length. The width should remain fixed unless it is wider than its container","\u2014","then shrink width to fit.")))))),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Don'ts")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Don\u2019t use labels that are too long. Labels should be very concise."),Object(i.b)("li",{parentName:"ul"},"Don\u2019t include instructions in a label","\u2014","use help text instead."),Object(i.b)("li",{parentName:"ul"},"Don\u2019t disable the user\u2019s ability to select, copy or paste."),Object(i.b)("li",{parentName:"ul"},"Don\u2019t require users to write paragraphs of text in a single-line text field.")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Character Counter")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"A text field may have a character counter, but it is not an intuitive way for users to understand content length."),Object(i.b)("li",{parentName:"ul"},"Use a character counter only if it is important for users to know how long their text entry can be, or to clarify if the user surpasses the character limit."),Object(i.b)("li",{parentName:"ul"},"By default, a text field does not have a character limit. If necessary, set a limit higher than most users will need."),Object(i.b)("li",{parentName:"ul"},"Allow users to enter more than the character limit, and then display an error. This lets a user type or copy and paste their full text entry, then edit it down."),Object(i.b)("li",{parentName:"ul"},"The character count should be announced to assistive technology users after they stop typing.")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Placeholder")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"A text field may have placeholder text to provide hints or examples, but placeholder text should not contain important information."),Object(i.b)("li",{parentName:"ul"},"Don\u2019t use placeholder text in place of a label, because it will disappear once the user starts typing in the field."),Object(i.b)("li",{parentName:"ul"},"Set an accessible color for placeholder text. Most browsers\u2019 default rendering of placeholder text does not provide a high enough contrast ratio.")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Required Text Fields")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"By default, a text field should be optional unless there is a significant reason to mark it as required."),Object(i.b)("li",{parentName:"ul"},"If using both required and optional text fields in a form, include a clear signifier to differentiate required fields from optional fields.")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Error Validation")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"By default, display error validation on a text field as soon as the user has moved to the next field."),Object(i.b)("li",{parentName:"ul"},"Use caution if displaying error validation before the user has finished entering text."),Object(i.b)("li",{parentName:"ul"},"Use caution if displaying error validation on Save or Submit, especially if the text field will not be visible on screen when Save or Submit is activated.")))),Object(i.b)("h2",{id:"types"},"Types"),Object(i.b)("p",null,"Text field types are based on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"}),"HTML input types")," that do not require a separate interface for entry, such as a date picker.\nWhere possible, they should be implemented with their corresponding ",Object(i.b)("inlineCode",{parentName:"p"},"<input>")," type."),Object(i.b)("h3",{id:"number"},"Number"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Allows the user to enter a number, and can display step arrows on focus."),Object(i.b)("li",{parentName:"ul"},"Includes built-in validation to reject non-numeric text entry."),Object(i.b)("li",{parentName:"ul"},"The default step value is 1, but can be set with more or less granularity, including decimal values."),Object(i.b)("li",{parentName:"ul"},"Allow users to use the up and down arrows on their keyboard to adjust the value typed into the field.")),Object(i.b)("h3",{id:"email"},"Email"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Allows the user to enter an email address or list of email addresses."),Object(i.b)("li",{parentName:"ul"},"Includes built-in validation to ensure text entry is a properly formatted email address."),Object(i.b)("li",{parentName:"ul"},"Some devices may display an email-specific keyboard for easier entry."),Object(i.b)("li",{parentName:"ul"},"Can allow the user's browser to automatically fill out the field, if enabled.")),Object(i.b)("h3",{id:"password"},"Password"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Allows the user to securely enter a password by obscuring the text entry."),Object(i.b)("li",{parentName:"ul"},"Can allow the user\u2019s browser or password manager to automatically fill out the field.")),Object(i.b)("h3",{id:"url"},"URL"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Allows the user to enter a URL."),Object(i.b)("li",{parentName:"ul"},"Includes built-in validation to ensure text entry is a properly formatted URL."),Object(i.b)("li",{parentName:"ul"},"Some devices may display a URL keyboard for easier entry.")),Object(i.b)("h3",{id:"tel"},"Tel"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Allows the user to enter a telephone number."),Object(i.b)("li",{parentName:"ul"},"The text entry is not automatically validated, because telephone numbers vary around the world."),Object(i.b)("li",{parentName:"ul"},"Some devices may display a telephone keyboard for easier entry.")),Object(i.b)("h2",{id:"text-wrapping-variants"},"Text Wrapping Variants"),Object(i.b)("p",null,"If the user inputs text that cannot fit inside the visible text field container, the text must either wrap or the container must scroll with the text.\nThree options are provided to address this need."),Object(i.b)("h3",{id:"single-line-text-field"},"Single line text field"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A single-line text field displays only one line of text."),Object(i.b)("li",{parentName:"ul"},"As the cursor reaches the right edge of the input area, text longer than the input area automatically scrolls left."),Object(i.b)("li",{parentName:"ul"},"Use single-line text fields for: Number, Email, Password, and Tel inputs.")),Object(i.b)("h3",{id:"multi-line-text-field-not-yet-implemented"},"Multi-line text field ","[not yet implemented]"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A multi-line text field grows to accommodate multiple lines of text and show all text entry at once."),Object(i.b)("li",{parentName:"ul"},"Text longer than the input area wraps to a new line. The input area expands vertically and shifts any screen elements below it."),Object(i.b)("li",{parentName:"ul"},"Multi-line text fields initially appear as single-line fields, which is useful for compact layouts that need to accommodate large amounts of text."),Object(i.b)("li",{parentName:"ul"},"Use multi-line text fields for: free response input and URL.")),Object(i.b)("h3",{id:"text-area-text-field-not-yet-implemented"},"Text area text field ","[not yet implemented]"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A text area text field has a fixed height."),Object(i.b)("li",{parentName:"ul"},"Text longer than the input area wraps onto a new line, and scrolls vertically when the cursor reaches the bottom of the input area."),Object(i.b)("li",{parentName:"ul"},"The large size of the input area indicates that longer responses are possible and encouraged."),Object(i.b)("li",{parentName:"ul"},"Use text area text fields for: free response inputs with additional formatting capabilities.")),Object(i.b)("h2",{id:"react-api"},"React API"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { TextField } from '@wwnds/react';\n")),Object(i.b)("h3",{id:"textfield"},"TextField"),Object(i.b)("p",null,"TextField provides a single interface for a complete ",Object(i.b)("inlineCode",{parentName:"p"},"<input>")," field.\nInternally, it uses the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#fieldinfo"}),"FieldInfo"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#fieldfeedback"}),"FieldFeedback"),", and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#fieldaddon"}),"FieldAddon")," components."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<TextField\n    maxLength={30}\n    description="Use the description to display hints about entry."\n    required\n    requiredIndicator\n    validateOnChange\n>\n    Default text field\n</TextField>\n')),Object(i.b)(o.a,{from:l.TextField,mdxType:"PropsTable"}),Object(i.b)("h3",{id:"fieldinfo"},"FieldInfo"),Object(i.b)("p",null,"The FieldInfo component is used to information about a related field.\nIt will always contain a label for the field and can contain an optional description.\nMake sure to include a valid ",Object(i.b)("inlineCode",{parentName:"p"},"htmlFor")," prop when used with form controls such as an ",Object(i.b)("inlineCode",{parentName:"p"},"<input>"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FieldInfo description="Use the description to display hints about entry.">\n    Default text field\n</FieldInfo>\n')),Object(i.b)(o.a,{from:l.FieldInfo,mdxType:"PropsTable"}),Object(i.b)("h3",{id:"fieldfeedback"},"FieldFeedback"),Object(i.b)("p",null,"A container for field feedback. Use to display content based on field input."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<FieldFeedback errors={['Something went wrong', 'Another thing isn\\'t right']}>\n    Generic feedback goes here\n</FieldFeedback>\n")),Object(i.b)(o.a,{from:l.FieldFeedback,mdxType:"PropsTable"}),Object(i.b)("h3",{id:"fieldaddon"},"FieldAddon"),Object(i.b)("p",null,"The FieldAddon is a simple container for input addons.\nIt is used by the TextField component to render addons before or after the ",Object(i.b)("inlineCode",{parentName:"p"},"<input>"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FieldAddon>\n    <IconButton icon="check">Correct</IconButton>\n</FieldAddon>\n')),Object(i.b)(o.a,{from:l.FieldAddon,mdxType:"PropsTable"}))}p.isMDXComponent=!0},129:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return qe}));var a=n(3),r=n(0),i=n.n(r),l=n(123),o=n(129),c=n.n(o),s=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var u={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},p={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},b=["style","script"],m=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,h=/mailto:/i,f=/\n{2,}$/,g=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,y=/^ *> ?/gm,O=/^ {2,}\n/,j=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,v=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,N=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,x=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,w=/^(?:\n *)*\n/,k=/\r\n?/g,T=/^\[\^([^\]]+)](:.*)\n/,A=/^\[\^([^\]]+)]/,F=/\f/g,S=/^\s*?\[(x|\s)\]/,C=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,z=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,I=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,E=/&([a-z]+);/g,U=/^<!--.*?-->/,L=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,M=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,B=/^\{.*\}$/,P=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,R=/^<([^ >]+@[^ >]+)>/,D=/^<([^ >]+:\/[^ >]+)>/,$=/ *\n+$/,q=/(?:^|\n)( *)$/,H=/-([a-z])?/gi,_=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,V=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,W=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,Z=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,G=/^\[([^\]]*)\] ?\[([^\]]*)\]/,J=/(\[|\])/g,X=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,K=/\t/g,Q=/^ *\| */,Y=/(^ *\||\| *$)/g,ee=/ *$/,te=/^ *:-+: *$/,ne=/^ *:-+ *$/,ae=/^ *-+: *$/,re=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ie=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,le=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,oe=/^\\([^0-9A-Za-z\s])/,ce=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,se=/(^\n+|\n+$|\s+$)/g,de=/^([ \t]*)/,ue=/\\([^0-9A-Z\s])/gi,pe=/^( *)((?:[*+-]|\d+\.)) +/,be=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,me=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,he=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,fe=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ge=[g,N,v,C,z,I,U,M,be,me,_,V];function ye(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Oe(e){return ae.test(e)?"right":te.test(e)?"center":ne.test(e)?"left":null}function je(e,t,n){var a=n.inTable;n.inTable=!0;var r=t(e.trim(),n);n.inTable=a;var i=[[]];return r.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==r.length-1&&i.push([]):("text"===e.type&&(null==r[t+1]||"tableSeparator"===r[t+1].type)&&(e.content=e.content.replace(ee,"")),i[i.length-1].push(e))})),i}function ve(e,t,n){n.inline=!0;var a=je(e[1],t,n),r=function(e){return e.replace(Y,"").split("|").map(Oe)}(e[2]),i=function(e,t,n){return e.trim().split("\n").map((function(e){return je(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:r,cells:i,header:a,type:"table"}}function Ne(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function xe(e){function t(a,r){for(var i=[],l="";a;)for(var o=0;o<n.length;){var c=n[o],s=e[c],d=s.match(a,r,l);if(d){var u=d[0];a=a.substring(u.length);var p=s.parse(d,t,r);null==p.type&&(p.type=c),i.push(p),l=u;break}o++}return i}var n=Object.keys(e);return n.sort((function(t,n){var a=e[t].order,r=e[n].order;return a===r?t<n?-1:1:a-r})),function(e,n){return t(function(e){return e.replace(k,"\n").replace(F,"").replace(K,"    ")}(e),n)}}function we(e){return function(t,n){return n.inline?e.exec(t):null}}function ke(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Te(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Ae(e){return function(t){return e.exec(t)}}function Fe(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(t){return null}return e}function Se(e){return e.replace(ue,"$1")}function Ce(e,t,n){var a=n.inline||!1,r=n.simple||!1;n.inline=!0,n.simple=!0;var i=e(t,n);return n.inline=a,n.simple=r,i}function ze(e,t,n){var a=n.inline||!1,r=n.simple||!1;n.inline=!1,n.simple=!0;var i=e(t,n);return n.inline=a,n.simple=r,i}function Ie(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function Ee(e,t,n){return{content:Ce(t,e[1],n)}}function Ue(){return{}}function Le(){return null}function Me(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Be(e,t,n){for(var a=e,r=t.split(".");r.length&&void 0!==(a=a[r[0]]);)r.shift();return a||n}function Pe(e,t){var n=Be(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":d(n))&&"render"in n?n:Be(t,e+".component",e):e}function Re(e,t){function n(e,n){for(var a=Be(t.overrides,e+".props",{}),r=arguments.length,i=Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];return l.apply(void 0,[Pe(e,t.overrides),s({},n,a,{className:Me(n&&n.className,a.className)||void 0})].concat(i))}function a(e){var a=!1;t.forceInline?a=!0:!t.forceBlock&&(a=!1===X.test(e));var r=K(F(a?e:e.replace(se,"")+"\n\n",{inline:a})),i=void 0;return r.length>1?i=n(a?"span":"div",{key:"outer"},r):1===r.length?"string"==typeof(i=r[0])&&(i=n("span",{key:"outer"},i)):i=n("span",{key:"outer"}),i}function r(e){var t=e.match(m);return t?t.reduce((function(e,t,n){var r=t.indexOf("=");if(-1!==r){var l=function(e){return-1!==e.indexOf("-")&&null===e.match(L)&&(e=e.replace(H,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,r)).trim(),o=c()(t.slice(r+1).trim()),s=u[l]||l,d=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),a=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[a]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Fe(t):(t.match(B)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(l,o);(I.test(d)||M.test(d))&&(e[s]=i.a.cloneElement(a(d.trim()),{key:n}))}else"style"!==t&&(e[u[t]||t]=!0);return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||ye,t.namedCodesToUnicode=t.namedCodesToUnicode?s({},p,t.namedCodesToUnicode):p;var l=t.createElement||i.a.createElement;var o=[],d={},k={blockQuote:{match:Te(g),order:2,parse:function(e,t,n){return{content:t(e[0].replace(y,""),n)}},react:function(e,t,a){return n("blockquote",{key:a.key},t(e.content,a))}},breakLine:{match:Ae(O),order:2,parse:Ue,react:function(e,t,a){return n("br",{key:a.key})}},breakThematic:{match:Te(j),order:2,parse:Ue,react:function(e,t,a){return n("hr",{key:a.key})}},codeBlock:{match:Te(N),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,a){return n("pre",{key:a.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Te(v),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:ke(x),order:4,parse:function(e){return{content:e[2]}},react:function(e,t,a){return n("code",{key:a.key},e.content)}},footnote:{match:Te(T),order:1,parse:function(e){return o.push({footnote:e[2],identifier:e[1]}),{}},react:Le},footnoteReference:{match:we(A),order:2,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,a){return n("a",{key:a.key,href:Fe(e.target)},n("sup",{key:a.key},e.content))}},gfmTask:{match:we(S),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,a){return n("input",{checked:e.completed,key:a.key,readOnly:!0,type:"checkbox"})}},heading:{match:Te(C),order:2,parse:function(e,n,a){return{content:Ce(n,e[2],a),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,a){return n("h"+e.level,{id:e.id,key:a.key},t(e.content,a))}},headingSetext:{match:Te(z),order:1,parse:function(e,t,n){return{content:Ce(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Ae(U),order:2,parse:function(){return{}},react:Le},image:{match:ke(fe),order:2,parse:function(e){return{alt:e[1],target:Se(e[2]),title:e[3]}},react:function(e,t,a){return n("img",{key:a.key,alt:e.alt||void 0,title:e.title||void 0,src:Fe(e.target)})}},link:{match:we(he),order:4,parse:function(e,t,n){return{content:ze(t,e[1],n),target:Se(e[2]),title:e[3]}},react:function(e,t,a){return n("a",{key:a.key,href:Fe(e.target),title:e.title},t(e.content,a))}},linkAngleBraceStyleDetector:{match:we(D),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:we(P),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:we(R),order:1,parse:function(e){var t=e[1],n=e[1];return h.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var a=q.exec(n),r=t._list||!t.inline;return a&&r?(e=a[1]+e,me.exec(e)):null},order:2,parse:function(e,t,n){var a=e[2],r=a.length>1,i=r?+a:void 0,l=e[0].replace(f,"\n").match(be),o=!1;return{items:l.map((function(e,a){var r=pe.exec(e)[0].length,i=new RegExp("^ {1,"+r+"}","gm"),c=e.replace(i,"").replace(pe,""),s=a===l.length-1,d=-1!==c.indexOf("\n\n")||s&&o;o=d;var u,p=n.inline,b=n._list;n._list=!0,d?(n.inline=!1,u=c.replace($,"\n\n")):(n.inline=!0,u=c.replace($,""));var m=t(u,n);return n.inline=p,n._list=b,m})),ordered:r,start:i}},react:function(e,t,a){return n(e.ordered?"ol":"ul",{key:a.key,start:e.start},e.items.map((function(e,r){return n("li",{key:r},t(e,a))})))}},newlineCoalescer:{match:Te(w),order:4,parse:Ue,react:function(){return"\n"}},paragraph:{match:Te(V),order:4,parse:Ee,react:function(e,t,a){return n("p",{key:a.key},t(e.content,a))}},ref:{match:we(W),order:1,parse:function(e){return d[e[1]]={target:e[2],title:e[4]},{}},react:Le},refImage:{match:ke(Z),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,a){return n("img",{key:a.key,alt:e.alt,src:Fe(d[e.ref].target),title:d[e.ref].title})}},refLink:{match:we(G),order:1,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(J,"\\$1"),n),ref:e[2]}},react:function(e,t,a){return d[e.ref]?n("a",{key:a.key,href:Fe(d[e.ref].target),title:d[e.ref].title},t(e.content,a)):n("span",{key:a.key},t(e.fallbackContent,a))}},table:{match:Te(_),order:2,parse:ve,react:function(e,t,a){return n("table",{key:a.key},n("thead",null,n("tr",null,e.header.map((function(r,i){return n("th",{key:i,style:Ne(e,i)},t(r,a))})))),n("tbody",null,e.cells.map((function(r,i){return n("tr",{key:i},r.map((function(r,i){return n("td",{key:i,style:Ne(e,i)},t(r,a))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?Q.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Ae(ce),order:5,parse:function(e){return{content:e[0].replace(E,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:ke(re),order:3,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,a){return n("strong",{key:a.key},t(e.content,a))}},textEmphasized:{match:ke(ie),order:4,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,a){return n("em",{key:a.key},t(e.content,a))}},textEscaped:{match:ke(oe),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:ke(le),order:4,parse:Ee,react:function(e,t,a){return n("del",{key:a.key},t(e.content,a))}}};!0!==t.disableParsingRawHTML&&(k.htmlBlock={match:Ae(I),order:2,parse:function(e,t,n){var a=e[3].match(de)[1],i=new RegExp("^"+a,"gm"),l=e[3].replace(i,""),o=function(e){return ge.some((function(t){return t.test(e)}))}(l)?Ie:Ce,c=e[1].toLowerCase(),s=-1!==b.indexOf(c);return{attrs:r(e[2]),content:s?e[3]:o(t,l,n),noInnerParse:s,tag:s?c:e[1]}},react:function(e,t,a){return n(e.tag,s({key:a.key},e.attrs),e.noInnerParse?e.content:t(e.content,a))}},k.htmlSelfClosing={match:Ae(M),order:2,parse:function(e){return{attrs:r(e[2]||""),tag:e[1]}},react:function(e,t,a){return n(e.tag,s({},e.attrs,{key:a.key}))}});var F=xe(k),K=function(e){return function t(n,a){if(a=a||{},Array.isArray(n)){for(var r=a.key,i=[],l=!1,o=0;o<n.length;o++){a.key=o;var c=t(n[o],a),s="string"==typeof c;s&&l?i[i.length-1]+=c:i.push(c),l=s}return a.key=r,i}return e(n,t,a)}}(function(e){return function(t,n,a){return e[t.type].react(t,n,a)}}(k)),Y=a(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return o.length&&Y.props.children.push(n("footer",{key:"footer"},o.map((function(e){return n("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,K(F(e.footnote,{inline:!0})))})))),Y}function De(e){var t=e.children,n=e.options,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["children","options"]);return i.a.cloneElement(Re(t,n),a)}var $e=function(e){var t=e.name,n=e.required,a=e.type,r=e.description;return i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(l.FieldInfo,{indicator:n?"required":void 0,label:t})),i.a.createElement("td",null,i.a.createElement(De,null,r)),i.a.createElement("td",null,i.a.createElement("code",{className:"code-wrap"},a.name.replace(" | undefined",""))))},qe=function(e){var t=e.from;if(!("__docgenInfo"in t))return null;var n=t.__docgenInfo,r=n.displayName,l=n.props,o=Object.keys(l).map((function(e){var t=l[e];return i.a.createElement($e,Object(a.a)({key:t.name},t))}));return i.a.createElement("table",{"aria-label":"Props for "+r},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Description"),i.a.createElement("th",null,"Type"))),i.a.createElement("tbody",null,o))}}}]);