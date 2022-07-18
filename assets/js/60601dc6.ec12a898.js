"use strict";(self.webpackChunkdashdot=self.webpackChunkdashdot||[]).push([[558],{868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var o=n(3117),i=n(102),r=(n(7294),n(3905)),a=["components"],l={sidebar_position:6,tags:["Configuration","Styles"]},p="GPU Widget",d={unversionedId:"config/widget-options/graphics",id:"config/widget-options/graphics",title:"GPU Widget",description:"To use the GPU widget, make sure to include it in the DASHDOTWIDGETLIST. One",source:"@site/docs/config/widget-options/graphics.md",sourceDirName:"config/widget-options",slug:"/config/widget-options/graphics",permalink:"/docs/config/widget-options/graphics",draft:!1,editUrl:"https://github.com/MauriceNino/dashdot/edit/dev/apps/docs/docs/config/widget-options/graphics.md",tags:[{label:"Configuration",permalink:"/docs/tags/configuration"},{label:"Styles",permalink:"/docs/tags/styles"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,tags:["Configuration","Styles"]},sidebar:"tutorialSidebar",previous:{title:"Network Widget",permalink:"/docs/config/widget-options/network"},next:{title:"Overrides",permalink:"/docs/config/overrides"}},s={},c=[{value:"<code>DASHDOT_GPU_WIDGET_GROW</code>",id:"dashdot_gpu_widget_grow",level:2},{value:"<code>DASHDOT_GPU_WIDGET_MIN_WIDTH</code>",id:"dashdot_gpu_widget_min_width",level:2},{value:"<code>DASHDOT_GPU_DATAPOINTS</code>",id:"dashdot_gpu_datapoints",level:2},{value:"<code>DASHDOT_GPU_POLL_INTERVAL</code>",id:"dashdot_gpu_poll_interval",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gpu-widget"},"GPU Widget"),(0,r.kt)("p",null,"To use the GPU widget, make sure to include it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DASHDOT_WIDGET_LIST"),". One\nlimitation with the GPU widget is that it will ",(0,r.kt)("strong",{parentName:"p"},"only run out of the box with from\nsource installations"),". Docker images do not include the necessary tools (mainly,\nbecause I don't want to bloat the image for everyone). If you absolutely need the\nGPU widget running inside a docker container, you will need to create your own image."),(0,r.kt)("p",null,"These links might help you with that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.howtogeek.com/devops/how-to-use-an-nvidia-gpu-with-docker-containers/"},"https://www.howtogeek.com/devops/how-to-use-an-nvidia-gpu-with-docker-containers/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/gpu-support/"},"https://docs.docker.com/compose/gpu-support/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/how-to-properly-use-the-gpu-within-a-docker-container-4c699c78c6d1"},"https://towardsdatascience.com/how-to-properly-use-the-gpu-within-a-docker-container-4c699c78c6d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/q/25185405/9150652"},"https://stackoverflow.com/q/25185405/9150652")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/q/63751883/9150652"},"https://stackoverflow.com/q/63751883/9150652"))),(0,r.kt)("h2",{id:"dashdot_gpu_widget_grow"},(0,r.kt)("inlineCode",{parentName:"h2"},"DASHDOT_GPU_WIDGET_GROW")),(0,r.kt)("p",null,"To adjust the relative size of the GPU widget."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},"default: ",(0,r.kt)("inlineCode",{parentName:"li"},"6"))),(0,r.kt)("h2",{id:"dashdot_gpu_widget_min_width"},(0,r.kt)("inlineCode",{parentName:"h2"},"DASHDOT_GPU_WIDGET_MIN_WIDTH")),(0,r.kt)("p",null,"To adjust the minimum width of the GPU widget (in px)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},"default: ",(0,r.kt)("inlineCode",{parentName:"li"},"700"))),(0,r.kt)("h2",{id:"dashdot_gpu_datapoints"},(0,r.kt)("inlineCode",{parentName:"h2"},"DASHDOT_GPU_DATAPOINTS")),(0,r.kt)("p",null,"The amount of datapoints in the GPU graph."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},"default: ",(0,r.kt)("inlineCode",{parentName:"li"},"20"))),(0,r.kt)("h2",{id:"dashdot_gpu_poll_interval"},(0,r.kt)("inlineCode",{parentName:"h2"},"DASHDOT_GPU_POLL_INTERVAL")),(0,r.kt)("p",null,"Read the GPU load every x milliseconds."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},"default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1000"))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(h,a(a({ref:t},s),{},{components:n})):o.createElement(h,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);