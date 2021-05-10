(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{141:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return p})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return l}));var n=o(6),r=o(1),i=(o(0),o(181)),a=o(29),c=o(184),s={title:"React Providers"},p={unversionedId:"components/react-providers",id:"components/react-providers",isDocsHomePage:!1,title:"React Providers",description:"The React implementation of the design system uses React context to make certain aspects configurable through context providers.",source:"@site/docs/components/react-providers.mdx",sourceDirName:"components",slug:"/components/react-providers",permalink:"/design-system/docs/components/react-providers",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/components/react-providers.mdx",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1620167301,formattedLastUpdatedAt:"5/4/2021",frontMatter:{title:"React Providers"},sidebar:"components",previous:{title:"Tooltip",permalink:"/design-system/docs/components/tooltip"}},d=[{value:"App Provider",id:"app-provider",children:[]},{value:"Theme Provider",id:"theme-provider",children:[{value:"useTheme hook",id:"usetheme-hook",children:[]}]}],m={toc:d};function l(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The React implementation of the design system uses ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React context")," to make certain aspects configurable through ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#contextprovider"},"context providers"),"."),Object(i.b)("h2",{id:"app-provider"},"App Provider"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<AppProvider>")," is used to configure the design system at the application level and should wrap your whole application if used.\nBecause it extends the ",Object(i.b)("inlineCode",{parentName:"p"},"<ThemeProvider>"),", it will be treated as the ",Object(i.b)("a",{parentName:"p",href:"#root-theme"},"root theme configuration"),"."),Object(i.b)("p",null,"For instance, to use your own router link and force a light color scheme:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example: light scheme and custom router link"',title:'"Example:',light:!0,scheme:!0,and:!0,custom:!0,router:!0,'link"':!0},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { Link } from 'react-router-dom';\nimport { AppProvider } from '@wwnds/react';\nimport App from './App';\n\nconst rootElement = document.getElementById('root');\nReactDOM.render(\n    <React.StrictMode>\n        <AppProvider\n            linkComponent={Link}\n            colorScheme=\"light\"\n            ignoreOSColorScheme\n        >\n            <App />\n        </AppProvider>\n    </React.StrictMode>,\n    rootElement,\n);\n")),Object(i.b)(c.f,{from:a.AppProvider,mdxType:"PropsTable"}),Object(i.b)("h2",{id:"theme-provider"},"Theme Provider"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<ThemeProvider>")," sets a color scheme context, setting a ",Object(i.b)("inlineCode",{parentName:"p"},"data-color-scheme")," attribute (",Object(i.b)("inlineCode",{parentName:"p"},'"light"')," or ",Object(i.b)("inlineCode",{parentName:"p"},'"dark"'),") that can be used to theme children.\n",Object(i.b)("inlineCode",{parentName:"p"},"@wwnds/core")," uses this to set color role token assignments, but you can use it however you like with a ",Object(i.b)("inlineCode",{parentName:"p"},"[data-color-scheme='light|dark']")," selector."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<ThemeProvider>")," can be nested, and the highest-level provider will be used as the root provider.\nWhen ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),", the root provider will use ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"},"the color scheme that the user prefers"),".\nAnd by default, the root color scheme will update whenever the user changes their preferred color scheme in their operating system settings.\nThis can be disabled by setting ",Object(i.b)("inlineCode",{parentName:"p"},"ignoreOSColorScheme"),"."),Object(i.b)("p",null,"When nested inside a parent ",Object(i.b)("inlineCode",{parentName:"p"},"<ThemeProvider>"),", the ",Object(i.b)("inlineCode",{parentName:"p"},'"inverse"')," value will use the inverse of the parent color scheme context."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ThemeProvider colorScheme="dark">\n    <p className="themed">Dark</p>\n    <ThemeProvider colorScheme="inverse">\n        <p className="themed">Inverted</p>\n        <ThemeProvider colorScheme="inverse">\n            <p className="themed">Double inverted</p>\n        </ThemeProvider>\n    </ThemeProvider>\n</ThemeProvider>\n')),Object(i.b)(c.f,{from:a.ThemeProvider,mdxType:"PropsTable"}),Object(i.b)("h3",{id:"usetheme-hook"},"useTheme hook"),Object(i.b)("p",null,"In addition to the theme provider, the ",Object(i.b)("inlineCode",{parentName:"p"},"useTheme")," hook can be used by components to update the current context's color scheme."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example: toggle dark mode with a switch"',title:'"Example:',toggle:!0,dark:!0,mode:!0,with:!0,a:!0,'switch"':!0},"import { Switch, useTheme } from '@wwnds/react';\n\nexport const SchemeToggle = () => {\n    const { colorScheme, setColorScheme } = useTheme();\n    const isDark = colorScheme === 'dark';\n\n    const onToggleChange = (checked: boolean) => {\n        setColorScheme((checked) ? 'dark' : 'light');\n    };\n\n    return (\n        <Switch\n            label=\"Dark mode\"\n            checked={isDark}\n            onToggle={onToggleChange}\n        />\n    );\n}\n")))}l.isMDXComponent=!0}}]);