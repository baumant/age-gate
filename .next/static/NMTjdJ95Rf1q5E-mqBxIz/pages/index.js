(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"+jru":function(e,t,a){a("aPfg")("WeakMap")},"9Jkg":function(e,t,a){e.exports=a("oh+g")},BURE:function(e,t,a){a("cHUd")("WeakMap")},G4HQ:function(e,t,a){e.exports=a("m5qO")},Oc8Q:function(e,t,a){"use strict";var n,r=a("5T2Y"),i=a("V7Et")(0),o=a("kTiW"),l=a("6/1s"),s=a("kwZ1"),c=a("kB4c"),u=a("93I4"),h=a("n3ko"),f=a("n3ko"),d=!r.ActiveXObject&&"ActiveXObject"in r,p=l.getWeak,g=Object.isExtensible,m=c.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},E={get:function(e){if(u(e)){var t=p(e);return!0===t?m(h(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(h(this,"WeakMap"),e,t)}},y=e.exports=a("raTm")("WeakMap",b,E,c,!0,!0);f&&d&&(s((n=c.getConstructor(b,"WeakMap")).prototype,E),l.NEED=!0,i(["delete","has","get","set"],function(e){var t=y.prototype,a=t[e];o(t,e,function(t,r){if(u(t)&&!g(t)){this._f||(this._f=new n);var i=this._f[e](t,r);return"set"==e?this:i}return a.call(this,t,r)})}))},RNiq:function(e,t,a){"use strict";a.r(t);var n=a("G4HQ"),r=a.n(n),i=a("pLtp"),o=a.n(i),l=a("9Jkg"),s=a.n(l),c=a("0iUn"),u=a("sLSF"),h=a("MI3g"),f=a("a7VT"),d=a("AT/M"),p=a("Tit0"),g=a("vYYK");function m(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e).value}var b=a("q1tI"),E=a.n(b),y=a("6mVS"),w=a("p46w"),v=a.n(w),x=function(e){function t(){var e,a;Object(c.default)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=Object(h.default)(this,(e=Object(f.default)(t)).call.apply(e,[this].concat(r))),Object(g.a)(Object(d.default)(a),"state",{age:21,rememberDays:14,requireDOB:!1,backgroundUrl:"none",logoUrl:"none",redirectUrl:"http://google.com",headerText:"You must be {{age}}+ to enter this site",subheaderText:"This website contains adult material and is only suitable for those {{age}} years or older. Click Enter only if you are at least {{age}} years of age.",exitButton:!0,exitButtonColor:{hue:0,brightness:.9,saturation:.6},showToast:!1,showError:!1,errorMessage:""}),k.set(Object(d.default)(a),{writable:!0,value:function(e){return function(t){return a.setState(Object(g.a)({},e,t))}}}),O.set(Object(d.default)(a),{writable:!0,value:function(e){return function(t){return a.setState(Object(g.a)({},e,!a.state[e]))}}}),T.set(Object(d.default)(a),{writable:!0,value:function(e){a.setState({backgroundUrl:e})}}),j.set(Object(d.default)(a),{writable:!0,value:function(e,t,a){return!e||!("none"===e&&"backgroundUrl"===a||"none"===e&&"logoUrl"===a)&&!new RegExp(t).test(e)}}),D.set(Object(d.default)(a),{writable:!0,value:function(){fetch("/updateAgeGate",{method:"POST",headers:{"Content-Type":"application/json"},body:s()(a.state)}).then(function(e){console.log("response: ",e),201===e.status?(a.setState({showToast:!0}),v.a.set("ageGateVariables",s()(a.state))):a.setState({errorMessage:e.status+", "+e.statusText,showError:!0})}).catch(function(e){console.log("error: ",e),this.setState({errorMessage:e,showError:!0})}),console.log("submission",a.state)}}),S.set(Object(d.default)(a),{writable:!0,value:function(){fetch("/uninstallAgeGate",{method:"POST",body:s()(v.a.get("shopOrigin"))}).then(function(e){console.log(e),200===e.status?alert("Successfully uninstalled Age Gate"):a.setState({errorMessage:e.status+", "+e.statusText,showError:!0})})}}),a}return Object(p.default)(t,e),Object(u.default)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=v.a.get();a.ageGateVariables?(console.log("variables in cookies"),e=JSON.parse(a.ageGateVariables),o()(e).map(function(a){t.setState(Object(g.a)({},a,e[a]))}),console.log(this.state)):fetch("/checkVariables",{headers:{"Content-Type":"application/json"},method:"GET"}).then(function(n){a=v.a.get(),e=JSON.parse(a.ageGateVariables),console.log("checkVariables response:",n,e),o()(e).map(function(a){t.setState(Object(g.a)({},a,e[a]))})}).catch(function(e){console.log("error: ",e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.age,n=t.rememberDays,r=t.requireDOB,i=t.backgroundUrl,o=t.logoUrl,l=t.redirectUrl,s=t.headerText,c=t.subheaderText,u=t.exitButton,h=t.exitButtonColor,f=t.showToast,d=t.showError,p=t.errorMessage,g=v.a.get("shopOrigin"),b=r?"Disable":"Enable",w=r?"enabled":"disabled",x=u?"Disable":"Enable",B=u?"a button":"text",M="^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$",U=f?E.a.createElement(y.q,{content:"Sucessfully updated",onDismiss:function(){return e.setState({showToast:!1})}}):null,q=d?E.a.createElement(y.b,{title:"Error",status:"Critical",onDismiss:function(){return e.setState({showError:!1,errorMessage:""})}},E.a.createElement("p",null,p)):null;return E.a.createElement(y.i,null,E.a.createElement(y.g,null,U,E.a.createElement(y.g.AnnotatedSection,{title:"Age Restriction",description:"The age required to enter."},E.a.createElement(y.n,{value:a,onChange:m(this,k).call(this,"age"),type:"number",suffix:"years"})),E.a.createElement(y.g.AnnotatedSection,{title:"Remember Visitor",description:"Number of days to remember the visitor's answer."},E.a.createElement(y.n,{value:n,onChange:m(this,k).call(this,"rememberDays"),type:"number",suffix:"days"})),E.a.createElement(y.g.AnnotatedSection,{title:"Require Date of Birth",description:"This requires the user to enter their date of birth to confirm their age."},E.a.createElement(y.k,{action:{content:b,onAction:m(this,O).call(this,"requireDOB")},enabled:r},"This setting is ",E.a.createElement(y.o,{variation:"strong"},w),".")),E.a.createElement(y.g.AnnotatedSection,{title:"Redirect url",description:"This is the url that the app will redirect users to who are under the required age."},E.a.createElement(y.n,{value:l,onChange:m(this,k).call(this,"redirectUrl"),pattern:M,type:"url",error:m(this,j).call(this,l,M,"redirectUrl"),prefix:"url:"}),E.a.createElement(y.f,{message:m(this,j).call(this,l,M,"redirectUrl")?"Invalid url. Make sure to include http:// or https://":"",fieldID:"redirectUrl"})),E.a.createElement(y.g.AnnotatedSection,{title:"Design",description:"Customize the design of the age gate."},E.a.createElement(y.c,{sectioned:!0},E.a.createElement(y.e,null,"Background Image"),E.a.createElement(y.n,{label:"Display an image in the background. Leave as 'none' for the default grey background.",value:i,onChange:m(this,k).call(this,"backgroundUrl"),pattern:M,type:"url",error:m(this,j).call(this,i,M,"backgroundUrl"),prefix:"image url:"}),E.a.createElement("div",{className:"Polaris-Labelled__HelpText"},"You can upload images in ",E.a.createElement("a",{href:"https://"+g+"/admin/settings/files"},"Settings > Files")),E.a.createElement(y.f,{message:m(this,j).call(this,i,M,"backgroundUrl")?"Invalid url. Make sure to include http:// or https://":"",fieldID:"backgroundUrl"}),"none"!==i&&!m(this,j).call(this,i,M,"backgroundUrl")&&E.a.createElement(y.p,{source:i,size:"large",alt:"background image"}),E.a.createElement(y.g.Section,null,E.a.createElement(y.m,null,"Examples:"),E.a.createElement(y.l,null,E.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return m(e,T).call(e,"https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80")},onKeyDown:function(){return m(e,T).call(e,"https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80")}},E.a.createElement(y.p,{source:"https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80",size:"large",alt:"background image"})),E.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return m(e,T).call(e,"https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")},onKeyDown:function(){return m(e,T).call(e,"https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")}},E.a.createElement(y.p,{source:"https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",size:"large",alt:"background image"})),E.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return m(e,T).call(e,"https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")},onKeyDown:function(){return m(e,T).call(e,"https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")}},E.a.createElement(y.p,{source:"https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",size:"large",alt:"background image"})),E.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return m(e,T).call(e,"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")},onKeyDown:function(){return m(e,T).call(e,"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")}},E.a.createElement(y.p,{source:"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",size:"large",alt:"background image"}))))),E.a.createElement(y.c,{sectioned:!0},E.a.createElement(y.e,null,"Logo"),E.a.createElement(y.n,{label:"Display your logo as part of the overlay. Leave as 'none' for no logo.",value:o,onChange:m(this,k).call(this,"logoUrl"),pattern:M,type:"url",error:m(this,j).call(this,o,M,"logoUrl"),prefix:"image url:"}),E.a.createElement("div",{className:"Polaris-Labelled__HelpText"},"You can upload images in ",E.a.createElement("a",{href:"https://"+g+"/admin/settings/files"},"Settings > Files")),E.a.createElement(y.f,{message:m(this,j).call(this,o,M,"logoUrl")?"Invalid url. Make sure to include http:// or https://":"",fieldID:"logoUrl"}),"none"!==o&&!m(this,j).call(this,o,M,"logoUrl")&&E.a.createElement(y.p,{source:o,size:"large",alt:"logo image"})),E.a.createElement(y.c,{sectioned:!0},E.a.createElement(y.e,null,"Header Text"),E.a.createElement(y.n,{value:s,onChange:m(this,k).call(this,"headerText"),type:"text",helpText:"You can use the variable {{age}} to include your set age requirement."})),E.a.createElement(y.c,{sectioned:!0},E.a.createElement(y.e,null,"Subheader Text"),E.a.createElement(y.n,{value:c,onChange:m(this,k).call(this,"subheaderText"),type:"text",helpText:"You can use the variable {{age}} to include your set age requirement.",multiline:"true"})),E.a.createElement(y.c,{sectioned:!0},E.a.createElement(y.e,null,"Buttons"),E.a.createElement(y.k,{action:{content:x,onAction:m(this,O).call(this,"exitButton")},enabled:u},"The exit link is displayed as ",E.a.createElement(y.o,{variation:"strong"},B)),u&&E.a.createElement(y.g.Section,null,E.a.createElement("p",null,"Exit Button Background Color:"),E.a.createElement(y.d,{onChange:m(this,k).call(this,"exitButtonColor"),color:h}))))),q,E.a.createElement(y.j,{primaryAction:[{content:"Save Settings",onAction:function(){m(e,D).call(e)}}],secondaryActions:[{content:"Uninstall Age Gate",onAction:function(){console.log("uninstall age gate action"),m(e,S).call(e)}}]}))}}]),t}(E.a.Component),k=new r.a,O=new r.a,T=new r.a,j=new r.a,D=new r.a,S=new r.a;t.default=x},kB4c:function(e,t,a){"use strict";var n=a("XJU/"),r=a("6/1s").getWeak,i=a("5K7Z"),o=a("93I4"),l=a("EXMj"),s=a("oioR"),c=a("V7Et"),u=a("B+OT"),h=a("n3ko"),f=c(5),d=c(6),p=0,g=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,function(e){return e[0]===t})};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=d(this.a,function(t){return t[0]===e});return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,i){var c=e(function(e,n){l(e,c,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=n&&s(n,a,e[i],e)});return n(c.prototype,{delete:function(e){if(!o(e))return!1;var a=r(e);return!0===a?g(h(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!o(e))return!1;var a=r(e);return!0===a?g(h(this,t)).has(e):a&&u(a,this._i)}}),c},def:function(e,t,a){var n=r(i(t),!0);return!0===n?g(e).set(t,a):n[e._i]=a,e},ufstore:g}},m5qO:function(e,t,a){a("wgeU"),a("bBy9"),a("Oc8Q"),a("BURE"),a("+jru"),e.exports=a("WEpk").WeakMap},"oh+g":function(e,t,a){var n=a("WEpk"),r=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);