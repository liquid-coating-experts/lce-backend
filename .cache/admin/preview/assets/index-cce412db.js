import{r as k}from"./a-5d09fcc8.js";import{i as O}from"./helpers-562b3d1f.js";import"./index-2d41eb72.js";import"./layout-00c03a3d.js";import"./index-8af7b54a.js";import"./index-9ec7a1b4.js";import"./index-dfcee5d3.js";import"./index-281c90b3.js";function j(a,e){return Object.keys(e).reduce(function(i,t){if(t.startsWith(a)){var r=t.substr(a.length);i[r]=e[t]}return i},{})}function U(a,e){var i=document.createElement("a");i.href=e;var t=i.search.slice(1),r=t.split("&").reduce(function(v,P){var p=P.split("="),b=p[0],S=p[1];return v[b]=k(S),v},{}),s=[],m=r.ajs_uid,f=r.ajs_event,c=r.ajs_aid,n=O(a.options.useQueryString)?a.options.useQueryString:{},o=n.aid,l=o===void 0?/.+/:o,u=n.uid,A=u===void 0?/.+/:u;if(c){var _=Array.isArray(r.ajs_aid)?r.ajs_aid[0]:r.ajs_aid;l.test(_)&&a.setAnonymousId(_)}if(m){var d=Array.isArray(r.ajs_uid)?r.ajs_uid[0]:r.ajs_uid;if(A.test(d)){var h=j("ajs_trait_",r);s.push(a.identify(d,h))}}if(f){var y=Array.isArray(r.ajs_event)?r.ajs_event[0]:r.ajs_event,g=j("ajs_prop_",r);s.push(a.track(y,g))}return Promise.all(s)}export{U as queryString};
