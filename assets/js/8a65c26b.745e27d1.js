"use strict";(self.webpackChunkdashdot=self.webpackChunkdashdot||[]).push([[207],{5694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:3,tags:["Configuration","Styles"]},d="Storage Widget",s={unversionedId:"config/widget-options/storage",id:"config/widget-options/storage",title:"Storage Widget",description:"DASHDOTSTORAGEWIDGET_GROW",source:"@site/docs/config/widget-options/storage.md",sourceDirName:"config/widget-options",slug:"/config/widget-options/storage",permalink:"/docs/config/widget-options/storage",draft:!1,editUrl:"https://github.com/MauriceNino/dashdot/edit/dev/apps/docs/docs/config/widget-options/storage.md",tags:[{label:"Configuration",permalink:"/docs/tags/configuration"},{label:"Styles",permalink:"/docs/tags/styles"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["Configuration","Styles"]},sidebar:"tutorialSidebar",previous:{title:"CPU Widget",permalink:"/docs/config/widget-options/processor"},next:{title:"RAM Widget",permalink:"/docs/config/widget-options/memory"}},p={},c=[{value:"<code>DASHDOT_STORAGE_WIDGET_GROW</code>",id:"dashdot_storage_widget_grow",level:2},{value:"<code>DASHDOT_STORAGE_WIDGET_MIN_WIDTH</code>",id:"dashdot_storage_widget_min_width",level:2},{value:"<code>DASHDOT_STORAGE_POLL_INTERVAL</code>",id:"dashdot_storage_poll_interval",level:2}],u={toc:c};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"storage-widget"},"Storage Widget"),(0,i.kt)("h2",{id:"dashdot_storage_widget_grow"},(0,i.kt)("inlineCode",{parentName:"h2"},"DASHDOT_STORAGE_WIDGET_GROW")),(0,i.kt)("p",null,"To adjust the relative size of the Storage widget."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ",(0,i.kt)("inlineCode",{parentName:"li"},"number")),(0,i.kt)("li",{parentName:"ul"},"default: ",(0,i.kt)("inlineCode",{parentName:"li"},"3.5"))),(0,i.kt)("h2",{id:"dashdot_storage_widget_min_width"},(0,i.kt)("inlineCode",{parentName:"h2"},"DASHDOT_STORAGE_WIDGET_MIN_WIDTH")),(0,i.kt)("p",null,"To adjust the minimum width of the Storage widget (in px)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ",(0,i.kt)("inlineCode",{parentName:"li"},"number")),(0,i.kt)("li",{parentName:"ul"},"default: ",(0,i.kt)("inlineCode",{parentName:"li"},"500"))),(0,i.kt)("h2",{id:"dashdot_storage_poll_interval"},(0,i.kt)("inlineCode",{parentName:"h2"},"DASHDOT_STORAGE_POLL_INTERVAL")),(0,i.kt)("p",null,"Read the Storage load every x milliseconds."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ",(0,i.kt)("inlineCode",{parentName:"li"},"number")),(0,i.kt)("li",{parentName:"ul"},"default: ",(0,i.kt)("inlineCode",{parentName:"li"},"60000"))))}g.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,m=u["".concat(d,".").concat(g)]||u[g]||c[g]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);