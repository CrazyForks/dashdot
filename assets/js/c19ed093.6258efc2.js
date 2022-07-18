"use strict";(self.webpackChunkdashdot=self.webpackChunkdashdot||[]).push([[562],{3790:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),a=n(6010),o=n(1976),i=n(8746),l=n(1699),c=n(1614);const s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function p(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function m(e){var t=e.href,n=e.icon,o=e.title,i=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",d),title:i},i))}function f(e){var t=e.item,n=(0,o.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){var t,n=e.item,a=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:a,title:n.label,description:null==i?void 0:i.description})}function y(e){var t=e.item;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,a.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e}))})))}},4922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=n(3790),l=n(1976),c=["components"],s={tags:["Installation","Docker"]},u="Installation",d={unversionedId:"install/index",id:"install/index",title:"Installation",description:"Quick Setup",source:"@site/docs/install/index.md",sourceDirName:"install",slug:"/install/",permalink:"/docs/install/",draft:!1,editUrl:"https://github.com/MauriceNino/dashdot/edit/dev/apps/docs/docs/install/index.md",tags:[{label:"Installation",permalink:"/docs/tags/installation"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{tags:["Installation","Docker"]},sidebar:"tutorialSidebar",next:{title:"Docker",permalink:"/docs/install/docker"}},p={},m=[{value:"Quick Setup",id:"quick-setup",level:2},{value:"Installation Options",id:"installation-options",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"quick-setup"},"Quick Setup"),(0,o.kt)("p",null,"Images are hosted on ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/mauricenino/dashdot"},"DockerHub"),",\nand are available for both AMD64 and ARM devices."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker container run -it \\\n  -p 80:3001 \\\n  -v /:/mnt/host:ro \\\n  --privileged \\\n  mauricenino/dashdot\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--privileged")," flag is needed to correctly determine the memory and storage info.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The volume mounts on ",(0,o.kt)("inlineCode",{parentName:"p"},"/:/mnt/host:ro")," is needed to read the usage stats of all drives,\nread the network usage and read the os version of the host. If you don't like to use this\nmount, feel free to check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/help#qa"},"help page")," to find a guide on how to set it up manually.")))),(0,o.kt)("h2",{id:"installation-options"},"Installation Options"),(0,o.kt)(i.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);