(()=>{var e,t={359:()=>{chrome.runtime.onInstalled.addListener((function(){chrome.storage.sync.set({toggleSitesActive:!1,toggleSitesList:"example.com"},(function(){}))}));var e=!1,t="example.com";chrome.storage.sync.get(["toggleSitesActive","toggleSitesList"],(function(o){e=o.toggleSitesActive,t=o.toggleSitesList})),chrome.webRequest.onBeforeRequest.addListener((function(o){return e?{cancel:t.split(/\n/).some((function(e){var t=new URL(o.url);return Boolean(-1!==t.hostname.indexOf(e))}))}:{cancel:!1}}),{urls:["<all_urls>"]},["blocking"]),chrome.storage.onChanged.addListener((function(o,r){"sync"===r&&(o.toggleSitesActive&&(e=o.toggleSitesActive.newValue),o.toggleSitesList&&(t=o.toggleSitesList.newValue))}))},652:()=>{}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,o,n,i)=>{if(!o){var s=1/0;for(g=0;g<e.length;g++){for(var[o,n,i]=e[g],l=!0,a=0;a<o.length;a++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](o[a])))?o.splice(a--,1):(l=!1,i<s&&(s=i));if(l){e.splice(g--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var g=e.length;g>0&&e[g-1][2]>i;g--)e[g]=e[g-1];e[g]=[o,n,i]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={732:0,671:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[s,l,a]=o,c=0;if(s.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(a)var g=a(r)}for(t&&t(o);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(g)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),r.O(void 0,[671],(()=>r(359)));var n=r.O(void 0,[671],(()=>r(652)));n=r.O(n)})();