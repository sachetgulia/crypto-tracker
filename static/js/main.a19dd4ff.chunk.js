(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{37:function(e,c,t){},38:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t.n(a),s=t(13),r=t.n(s),i=t(4),o=t(14),l=t.n(o),j=(t(37),t(38),t(0)),p=function(e){var c=e.name,t=e.price,a=e.symbol,n=e.marketcap,s=e.volume,r=e.image,i=e.priceChange;return Object(j.jsx)("div",{className:"coin-container",children:Object(j.jsxs)("div",{className:"coin-row",children:[Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("img",{src:r,alt:"crypto"}),Object(j.jsx)("h1",{children:c}),Object(j.jsx)("p",{className:"coin-symbol",children:a})]}),Object(j.jsxs)("div",{className:"coin-data",children:[Object(j.jsxs)("p",{className:"coin-price",children:["$",t]}),Object(j.jsxs)("p",{className:"coin-volume",children:["$",s.toLocaleString()]}),i<0?Object(j.jsxs)("p",{className:"coin-percent red",children:[i.toFixed(2),"%"]}):Object(j.jsxs)("p",{className:"coin-percent green",children:[i.toFixed(2),"%"]}),Object(j.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",n.toLocaleString()]})]})]})})};var m=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],m=r[1];Object(a.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false").then((function(e){n(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(j.jsxs)("div",{className:"coin-app",children:[Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("h1",{className:"coin-text",children:"Search a currency"}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{className:"coin-input",type:"text",onChange:function(e){m(e.target.value)},placeholder:"Search"})})]}),d.map((function(e){return Object(j.jsx)(p,{name:e.name,price:e.current_price,symbol:e.symbol,marketcap:e.total_volume,volume:e.market_cap,image:e.image,priceChange:e.price_change_percentage_24h},e.id)}))]})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a19dd4ff.chunk.js.map