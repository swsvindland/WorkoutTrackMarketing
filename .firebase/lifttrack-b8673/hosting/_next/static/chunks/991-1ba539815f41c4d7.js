(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return c.ImageLoaderProps}}),t.default=function(e){let t,r;var a,{src:i,sizes:b,unoptimized:h=!1,priority:y=!1,loading:T,className:E,quality:x,width:R,height:w,fill:P,style:S,onLoad:O,onLoadingComplete:k,placeholder:C="empty",blurDataURL:A,layout:I,objectFit:z,objectPosition:M,lazyBoundary:j,lazyRoot:D}=e,F=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let N=o.useContext(d.ImageConfigContext),_=o.useMemo(()=>{let e=p||N||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[N]),$=F,L=$.loader||f.default;if(delete $.loader,"__next_img_default"in L){if("custom"===_.loader)throw Error(`Image with src "${i}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{let G=L;L=e=>{let{config:t}=e,r=l(e,["config"]);return G(r)}}if(I){"fill"===I&&(P=!0);let W={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];W&&(S=n({},S,W));let U={responsive:"100vw",fill:"100vw"}[I];U&&!b&&(b=U)}let V="",B=g(R),Y=g(w);if("object"==typeof(a=i)&&(m(a)||void 0!==a.src)){let q=m(i)?i.default:i;if(!q.src)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(q)}`);if(!q.height||!q.width)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(q)}`);if(t=q.blurWidth,r=q.blurHeight,A=A||q.blurDataURL,V=q.src,!P){if(B||Y){if(B&&!Y){let H=B/q.width;Y=Math.round(q.height*H)}else if(!B&&Y){let Z=Y/q.height;B=Math.round(q.width*Z)}}else B=q.width,Y=q.height}}let J=!y&&("lazy"===T||void 0===T);((i="string"==typeof i?i:V).startsWith("data:")||i.startsWith("blob:"))&&(h=!0,J=!1),_.unoptimized&&(h=!0);let[K,Q]=o.useState(!1),[X,ee]=o.useState(!1),et=g(x),er=Object.assign(P?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:M}:{},X?{}:{color:"transparent"},S),en="blur"===C&&A&&!K?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:`url("data:image/svg+xml;charset=utf-8,${s.getImageBlurSvg({widthInt:B,heightInt:Y,blurWidth:t,blurHeight:r,blurDataURL:A})}")`}:{},ea=function(e){let{config:t,src:r,unoptimized:n,width:a,quality:i,sizes:l,loader:o}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:a}=e;if(r){let i=/(^|\s)(1?\d?\d)vw/g,l=[];for(let o;o=i.exec(r);o)l.push(parseInt(o[2]));if(l.length){let u=.01*Math.min(...l);return{widths:a.filter(e=>e>=n[0]*u),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let s=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:s,kind:"x"}}(t,a,l),c=u.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:u.map((e,n)=>`${o({config:t,src:r,quality:i,width:e})} ${"w"===s?e:n+1}${s}`).join(", "),src:o({config:t,src:r,quality:i,width:u[c]})}}({config:_,src:i,unoptimized:h,width:B,quality:et,sizes:b,loader:L}),ei=i,el={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:$.crossOrigin},eo=o.useRef(O);o.useEffect(()=>{eo.current=O},[O]);let eu=o.useRef(k);o.useEffect(()=>{eu.current=k},[k]);let es=n({isLazy:J,imgAttributes:ea,heightInt:Y,widthInt:B,qualityInt:et,className:E,imgStyle:er,blurStyle:en,loading:T,config:_,fill:P,unoptimized:h,placeholder:C,loader:L,srcString:ei,onLoadRef:eo,onLoadingCompleteRef:eu,setBlurComplete:Q,setShowAltText:ee},$);return o.default.createElement(o.default.Fragment,null,o.default.createElement(v,Object.assign({},es)),y?o.default.createElement(u.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},el))):null)};var n=r(6495).Z,a=r(2648).Z,i=r(1598).Z,l=r(7273).Z,o=i(r(7294)),u=a(r(3121)),s=r(2675),c=r(139),d=r(8730);r(7238);var f=a(r(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function b(e,t,r,a,i,l,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&l(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,u=!1;a.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>u,persist(){},preventDefault(){o=!0,t.preventDefault()},stopPropagation(){u=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let v=e=>{var{imgAttributes:t,heightInt:r,widthInt:a,qualityInt:i,className:u,imgStyle:s,blurStyle:c,isLazy:d,fill:f,placeholder:p,loading:m,srcString:g,config:v,unoptimized:h,loader:y,onLoadRef:T,onLoadingCompleteRef:E,setBlurComplete:x,setShowAltText:R,onLoad:w,onError:P}=e,S=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=d?"lazy":m,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},S,t,{width:a,height:r,decoding:"async","data-nimg":f?"fill":"1",className:u,loading:m,style:n({},s,c),ref:o.useCallback(e=>{e&&(P&&(e.src=e.src),e.complete&&b(e,g,p,T,E,x,h))},[g,p,T,E,x,P,h]),onLoad(e){let t=e.currentTarget;b(t,g,p,T,E,x,h)},onError(e){R(!0),"blur"===p&&x(!0),P&&P(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:a,blurDataURL:i}=e,l=n||t,o=a||r,u=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&o?`%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ${l} ${o}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${n&&a?"1":"20"}'/%3E${u}%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='${i}'/%3E%3C/svg%3E`:`%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='${i}'/%3E%3C/svg%3E`}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:a}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:`${t.path}?url=${encodeURIComponent(r)}&w=${n}&q=${a||75}`}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},5675:function(e,t,r){e.exports=r(9749)},4697:function(e,t,r){"use strict";r.d(t,{y1:function(){return a}});var n=r(7294);function a(e,t,r){var a=this,i=(0,n.useRef)(null),l=(0,n.useRef)(0),o=(0,n.useRef)(null),u=(0,n.useRef)([]),s=(0,n.useRef)(),c=(0,n.useRef)(),d=(0,n.useRef)(e),f=(0,n.useRef)(!0);(0,n.useEffect)(function(){d.current=e},[e]);var p=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw TypeError("Expected a function");t=+t||0;var m=!!(r=r||{}).leading,g=!("trailing"in r)||!!r.trailing,b="maxWait"in r,v=b?Math.max(+r.maxWait||0,t):null;return(0,n.useEffect)(function(){return f.current=!0,function(){f.current=!1}},[]),(0,n.useMemo)(function(){var e=function(e){var t=u.current,r=s.current;return u.current=s.current=null,l.current=e,c.current=d.current.apply(r,t)},r=function(e,t){p&&cancelAnimationFrame(o.current),o.current=p?requestAnimationFrame(e):setTimeout(e,t)},n=function(e){if(!f.current)return!1;var r=e-i.current;return!i.current||r>=t||r<0||b&&e-l.current>=v},h=function(t){return o.current=null,g&&u.current?e(t):(u.current=s.current=null,c.current)},y=function e(){var a=Date.now();if(n(a))return h(a);if(f.current){var o=t-(a-i.current);r(e,b?Math.min(o,v-(a-l.current)):o)}},T=function(){var d=Date.now(),p=n(d);if(u.current=[].slice.call(arguments),s.current=a,i.current=d,p){if(!o.current&&f.current)return l.current=i.current,r(y,t),m?e(i.current):c.current;if(b)return r(y,t),e(i.current)}return o.current||r(y,t),c.current};return T.cancel=function(){o.current&&(p?cancelAnimationFrame(o.current):clearTimeout(o.current)),l.current=0,u.current=i.current=s.current=o.current=null},T.isPending=function(){return!!o.current},T.flush=function(){return o.current?h(Date.now()):c.current},T},[m,b,t,v,g,p])}},548:function(e,t,r){"use strict";r.d(t,{E:function(){return A}});var n,a,i=r(7294),l=r(2351),o=r(4203),u=r(2984),s=r(6723),c=r(1363),d=r(4575),f=r(3784),p=r(3781);let m=(0,i.createContext)(null);function g(){let[e,t]=(0,i.useState)([]);return[e.length>0?e.join(" "):void 0,(0,i.useMemo)(()=>function(e){let r=(0,p.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let r=t.slice(),n=r.indexOf(e);return -1!==n&&r.splice(n,1),r}))),n=(0,i.useMemo)(()=>({register:r,slot:e.slot,name:e.name,props:e.props}),[r,e.slot,e.name,e.props]);return i.createElement(m.Provider,{value:n},e.children)},[t])]}let b=(0,l.yV)(function(e,t){let{passive:r=!1,...n}=e,a=function e(){let t=(0,i.useContext)(m);if(null===t){let r=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return t}(),u=`headlessui-label-${(0,o.M)()}`,c=(0,f.T)(t);(0,s.e)(()=>a.register(u),[u,a.register]);let d={ref:c,...a.props,id:u};return r&&("onClick"in d&&delete d.onClick,"onClick"in n&&delete n.onClick),(0,l.sY)({ourProps:d,theirProps:n,slot:a.slot||{},defaultTag:"label",name:a.name||"Label"})}),v=(0,i.createContext)(null);function h(){let[e,t]=(0,i.useState)([]);return[e.length>0?e.join(" "):void 0,(0,i.useMemo)(()=>function(e){let r=(0,p.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let r=t.slice(),n=r.indexOf(e);return -1!==n&&r.splice(n,1),r}))),n=(0,i.useMemo)(()=>({register:r,slot:e.slot,name:e.name,props:e.props}),[r,e.slot,e.name,e.props]);return i.createElement(v.Provider,{value:n},e.children)},[t])]}let y=(0,l.yV)(function(e,t){let r=function e(){let t=(0,i.useContext)(v);if(null===t){let r=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return t}(),n=`headlessui-description-${(0,o.M)()}`,a=(0,f.T)(t);(0,s.e)(()=>r.register(n),[n,r.register]);let u={ref:a,...r.props,id:n};return(0,l.sY)({ourProps:u,theirProps:e,slot:r.slot||{},defaultTag:"p",name:r.name||"Description"})});var T=r(5466),E=r(6045);function x(e,t){return e?e+"["+t+"]":t}var R=r(4103),w=((n=w||{})[n.RegisterOption=0]="RegisterOption",n[n.UnregisterOption=1]="UnregisterOption",n);let P={0(e,t){let r=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,d.z2)(r,e=>e.element.current)}},1(e,t){let r=e.options.slice(),n=e.options.findIndex(e=>e.id===t.id);return -1===n?e:(r.splice(n,1),{...e,options:r})}},S=(0,i.createContext)(null);function O(e,t){return(0,u.E)(t.type,P,e,t)}S.displayName="RadioGroupContext";let k=(0,l.yV)(function(e,t){let{value:r,defaultValue:n,name:a,onChange:u,by:m=(e,t)=>e===t,disabled:b=!1,...v}=e,y=(0,p.z)("string"==typeof m?(e,t)=>(null==e?void 0:e[m])===(null==t?void 0:t[m]):m),[R,w]=(0,i.useReducer)(O,{options:[]}),P=R.options,[k,C]=g(),[A,I]=h(),z=`headlessui-radiogroup-${(0,o.M)()}`,M=(0,i.useRef)(null),j=(0,f.T)(M,t),[D,F]=function(e,t,r){let[n,a]=(0,i.useState)(r),l=void 0!==e;return[l?e:n,(0,p.z)(e=>(l||a(e),null==t?void 0:t(e)))]}(r,u,n),N=(0,i.useMemo)(()=>P.find(e=>!e.propsRef.current.disabled),[P]),_=(0,i.useMemo)(()=>P.some(e=>y(e.propsRef.current.value,D)),[P,D]),$=(0,p.z)(e=>{var t;if(b||y(e,D))return!1;let r=null==(t=P.find(t=>y(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==r||!r.disabled)&&(null==F||F(e),!0)});!function({container:e,accept:t,walk:r,enabled:n=!0}){let a=(0,i.useRef)(t),l=(0,i.useRef)(r);(0,i.useEffect)(()=>{a.current=t,l.current=r},[t,r]),(0,s.e)(()=>{if(!e||!n)return;let t=(0,T.r)(e);if(!t)return;let r=a.current,i=l.current,o=Object.assign(e=>r(e),{acceptNode:r}),u=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;u.nextNode();)i(u.currentNode)},[e,n,a,l])}({container:M.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let L=(0,p.z)(e=>{let t=M.current;if(!t)return;let r=(0,T.r)(t),n=P.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case c.R.Enter:!function(e){var t;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r){for(let n of r.elements)if("INPUT"===n.tagName&&"submit"===n.type||"BUTTON"===n.tagName&&"submit"===n.type||"INPUT"===n.nodeName&&"image"===n.type){n.click();return}}}(e.currentTarget);break;case c.R.ArrowLeft:case c.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(n,d.TO.Previous|d.TO.WrapAround)===d.fE.Success){let a=P.find(e=>e.element.current===(null==r?void 0:r.activeElement));a&&$(a.propsRef.current.value)}break;case c.R.ArrowRight:case c.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(n,d.TO.Next|d.TO.WrapAround)===d.fE.Success){let i=P.find(e=>e.element.current===(null==r?void 0:r.activeElement));i&&$(i.propsRef.current.value)}break;case c.R.Space:{e.preventDefault(),e.stopPropagation();let l=P.find(e=>e.element.current===(null==r?void 0:r.activeElement));l&&$(l.propsRef.current.value)}}}),G=(0,p.z)(e=>(w({type:0,...e}),()=>w({type:1,id:e.id}))),W=(0,i.useMemo)(()=>({registerOption:G,firstOption:N,containsCheckedOption:_,change:$,disabled:b,value:D,compare:y}),[G,N,_,$,b,D,y]),U=(0,i.useMemo)(()=>({value:D}),[D]);return i.createElement(I,{name:"RadioGroup.Description"},i.createElement(C,{name:"RadioGroup.Label"},i.createElement(S.Provider,{value:W},null!=a&&null!=D&&(function e(t={},r=null,n=[]){for(let[a,i]of Object.entries(t))!function t(r,n,a){if(Array.isArray(a))for(let[i,l]of a.entries())t(r,x(n,i.toString()),l);else a instanceof Date?r.push([n,a.toISOString()]):"boolean"==typeof a?r.push([n,a?"1":"0"]):"string"==typeof a?r.push([n,a]):"number"==typeof a?r.push([n,`${a}`]):null==a?r.push([n,""]):e(a,n,r)}(n,x(r,a),i);return n})({[a]:D}).map(([e,t])=>i.createElement(E._,{features:E.A.Hidden,...(0,l.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})})),(0,l.sY)({ourProps:{ref:j,id:z,role:"radiogroup","aria-labelledby":k,"aria-describedby":A,onKeyDown:L},theirProps:v,slot:U,defaultTag:"div",name:"RadioGroup"}))))});var C=((a=C||{})[a.Empty=1]="Empty",a[a.Active=2]="Active",a);let A=Object.assign(k,{Option:(0,l.yV)(function(e,t){let r=(0,i.useRef)(null),n=(0,f.T)(r,t),a=`headlessui-radiogroup-option-${(0,o.M)()}`,[u,c]=g(),[d,m]=h(),{addFlag:b,removeFlag:v,hasFlag:y}=function(e=0){let[t,r]=(0,i.useState)(e);return{addFlag:(0,i.useCallback)(e=>r(t=>t|e),[t]),hasFlag:(0,i.useCallback)(e=>Boolean(t&e),[t]),removeFlag:(0,i.useCallback)(e=>r(t=>t&~e),[r]),toggleFlag:(0,i.useCallback)(e=>r(t=>t^e),[r])}}(1),{value:T,disabled:E=!1,...x}=e,w=(0,i.useRef)({value:T,disabled:E});(0,s.e)(()=>{w.current.value=T},[T,w]),(0,s.e)(()=>{w.current.disabled=E},[E,w]);let{registerOption:P,disabled:O,change:k,firstOption:C,containsCheckedOption:A,value:I,compare:z}=function e(t){let r=(0,i.useContext)(S);if(null===r){let n=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return r}("RadioGroup.Option");(0,s.e)(()=>P({id:a,element:r,propsRef:w}),[a,P,r,e]);let M=(0,p.z)(e=>{var t;if((0,R.P)(e.currentTarget))return e.preventDefault();k(T)&&(b(2),null==(t=r.current)||t.focus())}),j=(0,p.z)(e=>{if((0,R.P)(e.currentTarget))return e.preventDefault();b(2)}),D=(0,p.z)(()=>v(2)),F=(null==C?void 0:C.id)===a,N=O||E,_=z(I,T),$=(0,i.useMemo)(()=>({checked:_,disabled:N,active:y(2)}),[_,N,y]);return i.createElement(m,{name:"RadioGroup.Description"},i.createElement(c,{name:"RadioGroup.Label"},(0,l.sY)({ourProps:{ref:n,id:a,role:"radio","aria-checked":_?"true":"false","aria-labelledby":u,"aria-describedby":d,"aria-disabled":!!N||void 0,tabIndex:N?-1:_||!A&&F?0:-1,onClick:N?void 0:M,onFocus:N?void 0:j,onBlur:N?void 0:D},theirProps:x,slot:$,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:b,Description:y})},3729:function(e,t,r){"use strict";r.d(t,{O:function(){return z}});var n,a=r(7294),i=r(2351),l=r(4203),o=r(2984),u=r(1363),s=r(4575),c=r(6723),d=r(3784),f=r(4157),p=r(3855),m=r(6045);function g({onFocus:e}){let[t,r]=(0,a.useState)(!0);return t?a.createElement(m._,{as:"button",type:"button",features:m.A.Focusable,onFocus(t){t.preventDefault();let n,a=50;n=requestAnimationFrame(function t(){if(a--<=0){n&&cancelAnimationFrame(n);return}if(e()){r(!1),cancelAnimationFrame(n);return}n=requestAnimationFrame(t)})}}):null}var b=r(3781),v=((n=v||{})[n.SetSelectedIndex=0]="SetSelectedIndex",n[n.RegisterTab=1]="RegisterTab",n[n.UnregisterTab=2]="UnregisterTab",n[n.RegisterPanel=3]="RegisterPanel",n[n.UnregisterPanel=4]="UnregisterPanel",n);let h={0(e,t){let r=e.tabs.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))});if(t.index<0)return{...e,selectedIndex:e.tabs.indexOf(r[0])};if(t.index>e.tabs.length)return{...e,selectedIndex:e.tabs.indexOf(r[r.length-1])};let n=e.tabs.slice(0,t.index),a=[...e.tabs.slice(t.index),...n].find(e=>r.includes(e));return a?{...e,selectedIndex:e.tabs.indexOf(a)}:e},1(e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],a=(0,s.z2)([...e.tabs,t.tab],e=>e.current),i=null!=(r=a.indexOf(n))?r:e.selectedIndex;return -1===i&&(i=e.selectedIndex),{...e,tabs:a,selectedIndex:i}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,s.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},y=(0,a.createContext)(null);function T(e){let t=(0,a.useContext)(y);if(null===t){let r=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,T),r}return t}y.displayName="TabsSSRContext";let E=(0,a.createContext)(null);function x(e){let t=(0,a.useContext)(E);if(null===t){let r=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,x),r}return t}E.displayName="TabsDataContext";let R=(0,a.createContext)(null);function w(e){let t=(0,a.useContext)(R);if(null===t){let r=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,w),r}return t}function P(e,t){return(0,o.E)(t.type,h,e,t)}R.displayName="TabsActionsContext";let S=a.Fragment,O=(0,i.yV)(function(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:l=!1,onChange:o,selectedIndex:u=null,...s}=e,f=n?"vertical":"horizontal",m=l?"manual":"auto",b=null!==u,v=(0,d.T)(t),[h,T]=(0,a.useReducer)(P,{selectedIndex:null!=u?u:r,tabs:[],panels:[]}),x=(0,a.useMemo)(()=>({selectedIndex:h.selectedIndex}),[h.selectedIndex]),w=(0,p.E)(o||(()=>{})),O=(0,p.E)(h.tabs),k=(0,a.useMemo)(()=>({orientation:f,activation:m,...h}),[f,m,h]),C=(0,p.E)(b?e.selectedIndex:h.selectedIndex),A=(0,a.useMemo)(()=>({registerTab:e=>(T({type:1,tab:e}),()=>T({type:2,tab:e})),registerPanel:e=>(T({type:3,panel:e}),()=>T({type:4,panel:e})),change(e){C.current!==e&&w.current(e),b||T({type:0,index:e})}}),[T,b]);(0,c.e)(()=>{T({type:0,index:null!=u?u:r})},[u]);let I=(0,a.useRef)({tabs:[],panels:[]});return a.createElement(y.Provider,{value:I},a.createElement(R.Provider,{value:A},a.createElement(E.Provider,{value:k},k.tabs.length<=0&&a.createElement(g,{onFocus(){var e,t;for(let r of O.current)if((null==(e=r.current)?void 0:e.tabIndex)===0)return null==(t=r.current)||t.focus(),!0;return!1}}),(0,i.sY)({ourProps:{ref:v},theirProps:s,slot:x,defaultTag:S,name:"Tabs"}))))}),k=(0,i.yV)(function(e,t){let{orientation:r,selectedIndex:n}=x("Tab.List"),a=(0,d.T)(t);return(0,i.sY)({ourProps:{ref:a,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:"div",name:"Tabs.List"})}),C=(0,i.yV)(function(e,t){var r,n;let p=`headlessui-tabs-tab-${(0,l.M)()}`,{orientation:m,activation:g,selectedIndex:v,tabs:h,panels:y}=x("Tab"),E=w("Tab"),R=T("Tab"),P=(0,a.useRef)(null),S=(0,d.T)(P,t);(0,c.e)(()=>E.registerTab(P),[E,P]);let O=R.current.tabs.indexOf(p);-1===O&&(O=R.current.tabs.push(p)-1);let k=h.indexOf(P);-1===k&&(k=O);let C=k===v,A=(0,b.z)(e=>{let t=h.map(e=>e.current).filter(Boolean);if(e.key===u.R.Space||e.key===u.R.Enter){e.preventDefault(),e.stopPropagation(),E.change(k);return}switch(e.key){case u.R.Home:case u.R.PageUp:return e.preventDefault(),e.stopPropagation(),(0,s.jA)(t,s.TO.First);case u.R.End:case u.R.PageDown:return e.preventDefault(),e.stopPropagation(),(0,s.jA)(t,s.TO.Last)}if((0,o.E)(m,{vertical:()=>e.key===u.R.ArrowUp?(0,s.jA)(t,s.TO.Previous|s.TO.WrapAround):e.key===u.R.ArrowDown?(0,s.jA)(t,s.TO.Next|s.TO.WrapAround):void 0,horizontal:()=>e.key===u.R.ArrowLeft?(0,s.jA)(t,s.TO.Previous|s.TO.WrapAround):e.key===u.R.ArrowRight?(0,s.jA)(t,s.TO.Next|s.TO.WrapAround):void 0}))return e.preventDefault()}),I=(0,b.z)(()=>{var e;null==(e=P.current)||e.focus()}),z=(0,a.useRef)(!1),M=(0,b.z)(()=>{var e,t;z.current||(z.current=!0,null==(e=P.current)||e.focus(),E.change(k),t=()=>{z.current=!1},"function"==typeof queueMicrotask?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e})))}),j=(0,b.z)(e=>{e.preventDefault()}),D=(0,a.useMemo)(()=>({selected:C}),[C]),F={ref:S,onKeyDown:A,onFocus:"manual"===g?I:M,onMouseDown:j,onClick:M,id:p,role:"tab",type:(0,f.f)(e,P),"aria-controls":null==(n=null==(r=y[k])?void 0:r.current)?void 0:n.id,"aria-selected":C,tabIndex:C?0:-1};return(0,i.sY)({ourProps:F,theirProps:e,slot:D,defaultTag:"button",name:"Tabs.Tab"})}),A=(0,i.yV)(function(e,t){let{selectedIndex:r}=x("Tab.Panels"),n=(0,d.T)(t),l=(0,a.useMemo)(()=>({selectedIndex:r}),[r]);return(0,i.sY)({ourProps:{ref:n},theirProps:e,slot:l,defaultTag:"div",name:"Tabs.Panels"})}),I=i.AN.RenderStrategy|i.AN.Static,z=Object.assign(C,{Group:O,List:k,Panels:A,Panel:(0,i.yV)(function(e,t){var r,n,o,u;let{selectedIndex:s,tabs:f,panels:p}=x("Tab.Panel"),g=w("Tab.Panel"),b=T("Tab.Panel"),v=`headlessui-tabs-panel-${(0,l.M)()}`,h=(0,a.useRef)(null),y=(0,d.T)(h,t);(0,c.e)(()=>g.registerPanel(h),[g,h]);let E=b.current.panels.indexOf(v);-1===E&&(E=b.current.panels.push(v)-1);let R=p.indexOf(h);-1===R&&(R=E);let P=R===s,S=(0,a.useMemo)(()=>({selected:P}),[P]),O={ref:y,id:v,role:"tabpanel","aria-labelledby":null==(n=null==(r=f[R])?void 0:r.current)?void 0:n.id,tabIndex:P?0:-1};return P||null!=(o=e.unmount)&&!o||null!=(u=e.static)&&u?(0,i.sY)({ourProps:O,theirProps:e,slot:S,defaultTag:"div",features:I,visible:P,name:"Tabs.Panel"}):a.createElement(m._,{as:"span",...O})})})}}]);