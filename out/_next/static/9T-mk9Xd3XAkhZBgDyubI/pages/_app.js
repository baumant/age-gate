(window.webpackJsonp=window.webpackJsonp||[]).push([["f496"],{"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),a=n("sLSF"),u=n("MI3g"),o=n("a7VT"),l=n("AT/M"),i=n("Tit0"),c=n("vYYK"),f=n("q1tI"),s=n.n(f),p=n("8Bbg"),d=n.n(p),h=n("m/Pd"),v=n.n(h),m=n("6mVS"),g=(n("kdv+"),n("p46w")),y=n.n(g),b=function(e){function t(){var e,n;Object(r.default)(this,t);for(var a=arguments.length,i=new Array(a),f=0;f<a;f++)i[f]=arguments[f];return n=Object(u.default)(this,(e=Object(o.default)(t)).call.apply(e,[this].concat(i))),Object(c.a)(Object(l.default)(n),"state",{shopOrigin:y.a.get("shopOrigin")}),n}return Object(i.default)(t,e),Object(a.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,null,s.a.createElement("title",null,"Age Gate"),s.a.createElement("meta",{charSet:"utf-8"})),s.a.createElement(m.a,{shopOrigin:this.state.shopOrigin,apiKey:void 0,forceRedirect:!0},s.a.createElement(t,n)))}}]),t}(d.a);t.default=b},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("eVuF")),u=r(n("UXZV")),o=r(n("/HRN")),l=r(n("WaGi")),i=r(n("ZDA2")),c=r(n("/+P4")),f=r(n("N9n2")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=s(n("q1tI")),h=p(n("17x9")),v=n("Bu4q"),m=n("nOHt"),g=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{router:m.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=w(t);return d.default.createElement(y,null,d.default.createElement(n,(0,u.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:function(e){var t=e.Component,n=(e.router,e.ctx);try{return a.default.resolve(v.loadGetInitialProps(t,n)).then(function(e){return{pageProps:e}})}catch(r){return a.default.reject(r)}}}]),t}(d.Component);g.childContextTypes={router:h.default.object},t.default=g;var y=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(d.Component);t.Container=y;var b=v.execOnce(function(){0});function w(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return b(),r},get pathname(){return b(),t},get asPath(){return b(),n},back:function(){b(),e.back()},push:function(t,n){return b(),e.push(t,n)},pushTo:function(t,n){b();var r=n?t:null,a=n||t;return e.push(r,a)},replace:function(t,n){return b(),e.replace(t,n)},replaceTo:function(t,n){b();var r=n?t:null,a=n||t;return e.replace(r,a)}}}t.createUrl=w},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])}},[["GcxT","5d41","9da1","ad9d"]]]);