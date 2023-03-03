"use strict";(self.webpackChunkusagrada_github_io=self.webpackChunkusagrada_github_io||[]).push([[218],{9058:(t,e,a)=>{a.d(e,{Z:()=>N});a(7294);var l=a(6010),n=a(3285),r=a(7524),o=a(9960),s=a(5999);const i="sidebar_re4s",c="sidebarItemTitle_pO2u",m="sidebarItemList_Yudw",u="sidebarItem__DBe",d="sidebarItemLink_mo7H",g="sidebarItemLinkActive_I1ZP";var Z=a(917);function p(t){let{sidebar:e}=t;return(0,Z.tZ)("aside",{className:"col col--3"},(0,Z.tZ)("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},(0,Z.tZ)("div",{className:(0,l.Z)(c,"margin-bottom--md")},e.title),(0,Z.tZ)("ul",{className:(0,l.Z)(m,"clean-list")},e.items.map((t=>(0,Z.tZ)("li",{key:t.permalink,className:u},(0,Z.tZ)(o.Z,{isNavLink:!0,to:t.permalink,className:d,activeClassName:g},t.title)))))))}var h=a(3102);function f(t){let{sidebar:e}=t;return(0,Z.tZ)("ul",{className:"menu__list"},e.items.map((t=>(0,Z.tZ)("li",{key:t.permalink,className:"menu__list-item"},(0,Z.tZ)(o.Z,{isNavLink:!0,to:t.permalink,className:"menu__link",activeClassName:"menu__link--active"},t.title)))))}function b(t){return(0,Z.tZ)(h.Zo,{component:f,props:t})}function v(t){let{sidebar:e}=t;const a=(0,r.i)();return e?.items.length?"mobile"===a?(0,Z.tZ)(b,{sidebar:e}):(0,Z.tZ)(p,{sidebar:e}):null}function N(t){const{sidebar:e,toc:a,children:r,...o}=t,s=e&&e.items.length>0;return(0,Z.tZ)(n.Z,o,(0,Z.tZ)("div",{className:"container margin-vert--lg"},(0,Z.tZ)("div",{className:"row"},(0,Z.tZ)(v,{sidebar:e}),(0,Z.tZ)("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},r),a&&(0,Z.tZ)("div",{className:"col col--2"},a))))}},756:(t,e,a)=>{a.d(e,{Z:()=>S});var l=a(7294),n=a(6010),r=a(9460),o=a(4996),s=a(917);function i(t){let{children:e,className:a}=t;const{frontMatter:l,assets:n}=(0,r.C)(),{withBaseUrl:i}=(0,o.C)(),c=n.image??l.image;return(0,s.tZ)("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&(0,s.tZ)("meta",{itemProp:"image",content:i(c,{absolute:!0})}),e)}var c=a(9960);const m="title_f1Hy";function u(t){let{className:e}=t;const{metadata:a,isBlogPostPage:l}=(0,r.C)(),{permalink:o,title:i}=a,u=l?"h1":"h2";return(0,s.tZ)(u,{className:(0,n.Z)(m,e),itemProp:"headline"},l?i:(0,s.tZ)(c.Z,{itemProp:"url",to:o},i))}var d=a(5999),g=a(2263);const Z=["zero","one","two","few","many","other"];function p(t){return Z.filter((e=>t.includes(e)))}const h={locale:"en",pluralForms:p(["one","other"]),select:t=>1===t?"one":"other"};function f(){const{i18n:{currentLocale:t}}=(0,g.Z)();return(0,l.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:p(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),h}}),[t])}function b(){const t=f();return{selectMessage:(e,a)=>function(t,e,a){const l=t.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${t}`);const n=a.select(e),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,e,t)}}const v="container_mt6G";function N(t){let{readingTime:e}=t;const a=function(){const{selectMessage:t}=b();return e=>{const a=Math.ceil(e);return t(a,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,s.tZ)(l.Fragment,null,a(e))}function P(t){let{date:e,formattedDate:a}=t;return(0,s.tZ)("time",{dateTime:e,itemProp:"datePublished"},a)}function _(){return(0,s.tZ)(l.Fragment,null," \xb7 ")}function k(t){let{className:e}=t;const{metadata:a}=(0,r.C)(),{date:o,formattedDate:i,readingTime:c}=a;return(0,s.tZ)("div",{className:(0,n.Z)(v,"margin-vert--md",e)},(0,s.tZ)(P,{date:o,formattedDate:i}),void 0!==c&&(0,s.tZ)(l.Fragment,null,(0,s.tZ)(_,null),(0,s.tZ)(N,{readingTime:c})))}function C(t){return t.href?(0,s.tZ)(c.Z,t):(0,s.tZ)(l.Fragment,null,t.children)}function w(t){let{author:e,className:a}=t;const{name:l,title:r,url:o,imageURL:i,email:c}=e,m=o||c&&`mailto:${c}`||void 0;return(0,s.tZ)("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},i&&(0,s.tZ)(C,{href:m,className:"avatar__photo-link"},(0,s.tZ)("img",{className:"avatar__photo",src:i,alt:l})),l&&(0,s.tZ)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},(0,s.tZ)("div",{className:"avatar__name"},(0,s.tZ)(C,{href:m,itemProp:"url"},(0,s.tZ)("span",{itemProp:"name"},l))),r&&(0,s.tZ)("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const T="authorCol_Hf19",y="imageOnlyAuthorRow_pa_O",B="imageOnlyAuthorCol_G86a";function I(t){let{className:e}=t;const{metadata:{authors:a},assets:l}=(0,r.C)();if(0===a.length)return null;const o=a.every((t=>{let{name:e}=t;return!e}));return(0,s.tZ)("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",o?y:"row",e)},a.map(((t,e)=>(0,s.tZ)("div",{className:(0,n.Z)(!o&&"col col--6",o?B:T),key:e},(0,s.tZ)(w,{author:{...t,imageURL:l.authorsImageUrls[e]??t.imageURL}})))))}function F(){return(0,s.tZ)("header",null,(0,s.tZ)(u,null),(0,s.tZ)(k,null),(0,s.tZ)(I,null))}var M=a(8780),L=a(210);function R(t){let{children:e,className:a}=t;const{isBlogPostPage:l}=(0,r.C)();return(0,s.tZ)("div",{id:l?M.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},(0,s.tZ)(L.Z,null,e))}var x=a(4881),A=a(6233),U=a(7462);function $(){return(0,s.tZ)("b",null,(0,s.tZ)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function D(t){const{blogPostTitle:e,...a}=t;return(0,s.tZ)(c.Z,(0,U.Z)({"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:e})},a),(0,s.tZ)($,null))}const O="blogPostFooterDetailsFull_mRVl";function H(){const{metadata:t,isBlogPostPage:e}=(0,r.C)(),{tags:a,title:l,editUrl:o,hasTruncateMarker:i}=t,c=!e&&i,m=a.length>0;return m||c||o?(0,s.tZ)("footer",{className:(0,n.Z)("row docusaurus-mt-lg",e&&O)},m&&(0,s.tZ)("div",{className:(0,n.Z)("col",{"col--9":c})},(0,s.tZ)(A.Z,{tags:a})),e&&o&&(0,s.tZ)("div",{className:"col margin-top--sm"},(0,s.tZ)(x.Z,{editUrl:o})),c&&(0,s.tZ)("div",{className:(0,n.Z)("col text--right",{"col--3":m})},(0,s.tZ)(D,{blogPostTitle:l,to:t.permalink}))):null}function S(t){let{children:e,className:a}=t;const l=function(){const{isBlogPostPage:t}=(0,r.C)();return t?void 0:"margin-bottom--xl"}();return(0,s.tZ)(i,{className:(0,n.Z)(l,a)},(0,s.tZ)(F,null),(0,s.tZ)(R,null,e),(0,s.tZ)(H,null))}},9460:(t,e,a)=>{a.d(e,{C:()=>i,n:()=>s});var l=a(7294),n=a(902),r=a(917);const o=l.createContext(null);function s(t){let{children:e,content:a,isBlogPostPage:n=!1}=t;const s=function(t){let{content:e,isBlogPostPage:a}=t;return(0,l.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:a})),[e,a])}({content:a,isBlogPostPage:n});return(0,r.tZ)(o.Provider,{value:s},e)}function i(){const t=(0,l.useContext)(o);if(null===t)throw new n.i6("BlogPostProvider");return t}}}]);