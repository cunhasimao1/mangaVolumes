(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0d3b":function(e,t,r){var n=r("d039"),a=r("b622"),i=r("c430"),o=a("iterator");e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach((function(e,n){t["delete"]("b"),r+=n+e})),i&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},"14d1":function(e,t,r){},"2b3d":function(e,t,r){"use strict";r("3ca3");var n,a=r("23e7"),i=r("83ab"),o=r("0d3b"),s=r("da84"),u=r("37e8"),c=r("6eeb"),l=r("19aa"),f=r("5135"),h=r("60da"),p=r("4df4"),d=r("6547").codeAt,v=r("5fb2"),m=r("d44e"),g=r("9861"),b=r("69f3"),y=s.URL,w=g.URLSearchParams,S=g.getState,k=b.set,R=b.getterFor("URL"),A=Math.floor,U=Math.pow,_="Invalid authority",L="Invalid scheme",x="Invalid host",q="Invalid port",j=/[A-Za-z]/,B=/[\d+-.A-Za-z]/,C=/\d/,O=/^(0x|0X)/,P=/^[0-7]+$/,E=/^\d+$/,T=/^[\dA-Fa-f]+$/,I=/[\0\t\n\r #%/:?@[\\]]/,$=/[\0\t\n\r #/:?@[\\]]/,F=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,N=/[\t\n\r]/g,M=function(e,t){var r,n,a;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return x;if(r=J(t.slice(1,-1)),!r)return x;e.host=r}else if(W(e)){if(t=v(t),I.test(t))return x;if(r=D(t),null===r)return x;e.host=r}else{if($.test(t))return x;for(r="",n=p(t),a=0;a<n.length;a++)r+=K(n[a],H);e.host=r}},D=function(e){var t,r,n,a,i,o,s,u=e.split(".");if(u.length&&""==u[u.length-1]&&u.pop(),t=u.length,t>4)return e;for(r=[],n=0;n<t;n++){if(a=u[n],""==a)return e;if(i=10,a.length>1&&"0"==a.charAt(0)&&(i=O.test(a)?16:8,a=a.slice(8==i?1:2)),""===a)o=0;else{if(!(10==i?E:8==i?P:T).test(a))return e;o=parseInt(a,i)}r.push(o)}for(n=0;n<t;n++)if(o=r[n],n==t-1){if(o>=U(256,5-t))return null}else if(o>255)return null;for(s=r.pop(),n=0;n<r.length;n++)s+=r[n]*U(256,3-n);return s},J=function(e){var t,r,n,a,i,o,s,u=[0,0,0,0,0,0,0,0],c=0,l=null,f=0,h=function(){return e.charAt(f)};if(":"==h()){if(":"!=e.charAt(1))return;f+=2,c++,l=c}while(h()){if(8==c)return;if(":"!=h()){t=r=0;while(r<4&&T.test(h()))t=16*t+parseInt(h(),16),f++,r++;if("."==h()){if(0==r)return;if(f-=r,c>6)return;n=0;while(h()){if(a=null,n>0){if(!("."==h()&&n<4))return;f++}if(!C.test(h()))return;while(C.test(h())){if(i=parseInt(h(),10),null===a)a=i;else{if(0==a)return;a=10*a+i}if(a>255)return;f++}u[c]=256*u[c]+a,n++,2!=n&&4!=n||c++}if(4!=n)return;break}if(":"==h()){if(f++,!h())return}else if(h())return;u[c++]=t}else{if(null!==l)return;f++,c++,l=c}}if(null!==l){o=c-l,c=7;while(0!=c&&o>0)s=u[c],u[c--]=u[l+o-1],u[l+--o]=s}else if(8!=c)return;return u},z=function(e){for(var t=null,r=1,n=null,a=0,i=0;i<8;i++)0!==e[i]?(a>r&&(t=n,r=a),n=null,a=0):(null===n&&(n=i),++a);return a>r&&(t=n,r=a),t},Z=function(e){var t,r,n,a;if("number"==typeof e){for(t=[],r=0;r<4;r++)t.unshift(e%256),e=A(e/256);return t.join(".")}if("object"==typeof e){for(t="",n=z(e),r=0;r<8;r++)a&&0===e[r]||(a&&(a=!1),n===r?(t+=r?":":"::",a=!0):(t+=e[r].toString(16),r<7&&(t+=":")));return"["+t+"]"}return e},H={},V=h({},H,{" ":1,'"':1,"<":1,">":1,"`":1}),X=h({},V,{"#":1,"?":1,"{":1,"}":1}),G=h({},X,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),K=function(e,t){var r=d(e,0);return r>32&&r<127&&!f(t,e)?e:encodeURIComponent(e)},Q={ftp:21,file:null,http:80,https:443,ws:80,wss:443},W=function(e){return f(Q,e.scheme)},Y=function(e){return""!=e.username||""!=e.password},ee=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},te=function(e,t){var r;return 2==e.length&&j.test(e.charAt(0))&&(":"==(r=e.charAt(1))||!t&&"|"==r)},re=function(e){var t;return e.length>1&&te(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},ne=function(e){var t=e.path,r=t.length;!r||"file"==e.scheme&&1==r&&te(t[0],!0)||t.pop()},ae=function(e){return"."===e||"%2e"===e.toLowerCase()},ie=function(e){return e=e.toLowerCase(),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},oe={},se={},ue={},ce={},le={},fe={},he={},pe={},de={},ve={},me={},ge={},be={},ye={},we={},Se={},ke={},Re={},Ae={},Ue={},_e={},Le=function(e,t,r,a){var i,o,s,u,c=r||oe,l=0,h="",d=!1,v=!1,m=!1;r||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(F,"")),t=t.replace(N,""),i=p(t);while(l<=i.length){switch(o=i[l],c){case oe:if(!o||!j.test(o)){if(r)return L;c=ue;continue}h+=o.toLowerCase(),c=se;break;case se:if(o&&(B.test(o)||"+"==o||"-"==o||"."==o))h+=o.toLowerCase();else{if(":"!=o){if(r)return L;h="",c=ue,l=0;continue}if(r&&(W(e)!=f(Q,h)||"file"==h&&(Y(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=h,r)return void(W(e)&&Q[e.scheme]==e.port&&(e.port=null));h="","file"==e.scheme?c=ye:W(e)&&a&&a.scheme==e.scheme?c=ce:W(e)?c=pe:"/"==i[l+1]?(c=le,l++):(e.cannotBeABaseURL=!0,e.path.push(""),c=Ae)}break;case ue:if(!a||a.cannotBeABaseURL&&"#"!=o)return L;if(a.cannotBeABaseURL&&"#"==o){e.scheme=a.scheme,e.path=a.path.slice(),e.query=a.query,e.fragment="",e.cannotBeABaseURL=!0,c=_e;break}c="file"==a.scheme?ye:fe;continue;case ce:if("/"!=o||"/"!=i[l+1]){c=fe;continue}c=de,l++;break;case le:if("/"==o){c=ve;break}c=Re;continue;case fe:if(e.scheme=a.scheme,o==n)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query;else if("/"==o||"\\"==o&&W(e))c=he;else if("?"==o)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query="",c=Ue;else{if("#"!=o){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.path.pop(),c=Re;continue}e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query,e.fragment="",c=_e}break;case he:if(!W(e)||"/"!=o&&"\\"!=o){if("/"!=o){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,c=Re;continue}c=ve}else c=de;break;case pe:if(c=de,"/"!=o||"/"!=h.charAt(l+1))continue;l++;break;case de:if("/"!=o&&"\\"!=o){c=ve;continue}break;case ve:if("@"==o){d&&(h="%40"+h),d=!0,s=p(h);for(var g=0;g<s.length;g++){var b=s[g];if(":"!=b||m){var y=K(b,G);m?e.password+=y:e.username+=y}else m=!0}h=""}else if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&W(e)){if(d&&""==h)return _;l-=p(h).length+1,h="",c=me}else h+=o;break;case me:case ge:if(r&&"file"==e.scheme){c=Se;continue}if(":"!=o||v){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&W(e)){if(W(e)&&""==h)return x;if(r&&""==h&&(Y(e)||null!==e.port))return;if(u=M(e,h),u)return u;if(h="",c=ke,r)return;continue}"["==o?v=!0:"]"==o&&(v=!1),h+=o}else{if(""==h)return x;if(u=M(e,h),u)return u;if(h="",c=be,r==ge)return}break;case be:if(!C.test(o)){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&W(e)||r){if(""!=h){var w=parseInt(h,10);if(w>65535)return q;e.port=W(e)&&w===Q[e.scheme]?null:w,h=""}if(r)return;c=ke;continue}return q}h+=o;break;case ye:if(e.scheme="file","/"==o||"\\"==o)c=we;else{if(!a||"file"!=a.scheme){c=Re;continue}if(o==n)e.host=a.host,e.path=a.path.slice(),e.query=a.query;else if("?"==o)e.host=a.host,e.path=a.path.slice(),e.query="",c=Ue;else{if("#"!=o){re(i.slice(l).join(""))||(e.host=a.host,e.path=a.path.slice(),ne(e)),c=Re;continue}e.host=a.host,e.path=a.path.slice(),e.query=a.query,e.fragment="",c=_e}}break;case we:if("/"==o||"\\"==o){c=Se;break}a&&"file"==a.scheme&&!re(i.slice(l).join(""))&&(te(a.path[0],!0)?e.path.push(a.path[0]):e.host=a.host),c=Re;continue;case Se:if(o==n||"/"==o||"\\"==o||"?"==o||"#"==o){if(!r&&te(h))c=Re;else if(""==h){if(e.host="",r)return;c=ke}else{if(u=M(e,h),u)return u;if("localhost"==e.host&&(e.host=""),r)return;h="",c=ke}continue}h+=o;break;case ke:if(W(e)){if(c=Re,"/"!=o&&"\\"!=o)continue}else if(r||"?"!=o)if(r||"#"!=o){if(o!=n&&(c=Re,"/"!=o))continue}else e.fragment="",c=_e;else e.query="",c=Ue;break;case Re:if(o==n||"/"==o||"\\"==o&&W(e)||!r&&("?"==o||"#"==o)){if(ie(h)?(ne(e),"/"==o||"\\"==o&&W(e)||e.path.push("")):ae(h)?"/"==o||"\\"==o&&W(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&te(h)&&(e.host&&(e.host=""),h=h.charAt(0)+":"),e.path.push(h)),h="","file"==e.scheme&&(o==n||"?"==o||"#"==o))while(e.path.length>1&&""===e.path[0])e.path.shift();"?"==o?(e.query="",c=Ue):"#"==o&&(e.fragment="",c=_e)}else h+=K(o,X);break;case Ae:"?"==o?(e.query="",c=Ue):"#"==o?(e.fragment="",c=_e):o!=n&&(e.path[0]+=K(o,H));break;case Ue:r||"#"!=o?o!=n&&("'"==o&&W(e)?e.query+="%27":e.query+="#"==o?"%23":K(o,H)):(e.fragment="",c=_e);break;case _e:o!=n&&(e.fragment+=K(o,V));break}l++}},xe=function(e){var t,r,n=l(this,xe,"URL"),a=arguments.length>1?arguments[1]:void 0,o=String(e),s=k(n,{type:"URL"});if(void 0!==a)if(a instanceof xe)t=R(a);else if(r=Le(t={},String(a)),r)throw TypeError(r);if(r=Le(s,o,null,t),r)throw TypeError(r);var u=s.searchParams=new w,c=S(u);c.updateSearchParams(s.query),c.updateURL=function(){s.query=String(u)||null},i||(n.href=je.call(n),n.origin=Be.call(n),n.protocol=Ce.call(n),n.username=Oe.call(n),n.password=Pe.call(n),n.host=Ee.call(n),n.hostname=Te.call(n),n.port=Ie.call(n),n.pathname=$e.call(n),n.search=Fe.call(n),n.searchParams=Ne.call(n),n.hash=Me.call(n))},qe=xe.prototype,je=function(){var e=R(this),t=e.scheme,r=e.username,n=e.password,a=e.host,i=e.port,o=e.path,s=e.query,u=e.fragment,c=t+":";return null!==a?(c+="//",Y(e)&&(c+=r+(n?":"+n:"")+"@"),c+=Z(a),null!==i&&(c+=":"+i)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(c+="?"+s),null!==u&&(c+="#"+u),c},Be=function(){var e=R(this),t=e.scheme,r=e.port;if("blob"==t)try{return new xe(t.path[0]).origin}catch(n){return"null"}return"file"!=t&&W(e)?t+"://"+Z(e.host)+(null!==r?":"+r:""):"null"},Ce=function(){return R(this).scheme+":"},Oe=function(){return R(this).username},Pe=function(){return R(this).password},Ee=function(){var e=R(this),t=e.host,r=e.port;return null===t?"":null===r?Z(t):Z(t)+":"+r},Te=function(){var e=R(this).host;return null===e?"":Z(e)},Ie=function(){var e=R(this).port;return null===e?"":String(e)},$e=function(){var e=R(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Fe=function(){var e=R(this).query;return e?"?"+e:""},Ne=function(){return R(this).searchParams},Me=function(){var e=R(this).fragment;return e?"#"+e:""},De=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(i&&u(qe,{href:De(je,(function(e){var t=R(this),r=String(e),n=Le(t,r);if(n)throw TypeError(n);S(t.searchParams).updateSearchParams(t.query)})),origin:De(Be),protocol:De(Ce,(function(e){var t=R(this);Le(t,String(e)+":",oe)})),username:De(Oe,(function(e){var t=R(this),r=p(String(e));if(!ee(t)){t.username="";for(var n=0;n<r.length;n++)t.username+=K(r[n],G)}})),password:De(Pe,(function(e){var t=R(this),r=p(String(e));if(!ee(t)){t.password="";for(var n=0;n<r.length;n++)t.password+=K(r[n],G)}})),host:De(Ee,(function(e){var t=R(this);t.cannotBeABaseURL||Le(t,String(e),me)})),hostname:De(Te,(function(e){var t=R(this);t.cannotBeABaseURL||Le(t,String(e),ge)})),port:De(Ie,(function(e){var t=R(this);ee(t)||(e=String(e),""==e?t.port=null:Le(t,e,be))})),pathname:De($e,(function(e){var t=R(this);t.cannotBeABaseURL||(t.path=[],Le(t,e+"",ke))})),search:De(Fe,(function(e){var t=R(this);e=String(e),""==e?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Le(t,e,Ue)),S(t.searchParams).updateSearchParams(t.query)})),searchParams:De(Ne),hash:De(Me,(function(e){var t=R(this);e=String(e),""!=e?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Le(t,e,_e)):t.fragment=null}))}),c(qe,"toJSON",(function(){return je.call(this)}),{enumerable:!0}),c(qe,"toString",(function(){return je.call(this)}),{enumerable:!0}),y){var Je=y.createObjectURL,ze=y.revokeObjectURL;Je&&c(xe,"createObjectURL",(function(e){return Je.apply(y,arguments)})),ze&&c(xe,"revokeObjectURL",(function(e){return ze.apply(y,arguments)}))}m(xe,"URL"),a({global:!0,forced:!o,sham:!i},{URL:xe})},"3f79":function(e,t,r){},4584:function(e,t,r){"use strict";r("3f79")},"4df4":function(e,t,r){"use strict";var n=r("0366"),a=r("7b0b"),i=r("9bdd"),o=r("e95a"),s=r("50c4"),u=r("8418"),c=r("35a1");e.exports=function(e){var t,r,l,f,h,p,d=a(e),v="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,b=void 0!==g,y=c(d),w=0;if(b&&(g=n(g,m>2?arguments[2]:void 0,2)),void 0==y||v==Array&&o(y))for(t=s(d.length),r=new v(t);t>w;w++)p=b?g(d[w],w):d[w],u(r,w,p);else for(f=y.call(d),h=f.next,r=new v;!(l=h.call(f)).done;w++)p=b?i(f,g,[l.value,w],!0):l.value,u(r,w,p);return r.length=w,r}},"5fb2":function(e,t,r){"use strict";var n=2147483647,a=36,i=1,o=26,s=38,u=700,c=72,l=128,f="-",h=/[^\0-\u007E]/,p=/[.\u3002\uFF0E\uFF61]/g,d="Overflow: input needs wider integers to process",v=a-i,m=Math.floor,g=String.fromCharCode,b=function(e){var t=[],r=0,n=e.length;while(r<n){var a=e.charCodeAt(r++);if(a>=55296&&a<=56319&&r<n){var i=e.charCodeAt(r++);56320==(64512&i)?t.push(((1023&a)<<10)+(1023&i)+65536):(t.push(a),r--)}else t.push(a)}return t},y=function(e){return e+22+75*(e<26)},w=function(e,t,r){var n=0;for(e=r?m(e/u):e>>1,e+=m(e/t);e>v*o>>1;n+=a)e=m(e/v);return m(n+(v+1)*e/(e+s))},S=function(e){var t=[];e=b(e);var r,s,u=e.length,h=l,p=0,v=c;for(r=0;r<e.length;r++)s=e[r],s<128&&t.push(g(s));var S=t.length,k=S;S&&t.push(f);while(k<u){var R=n;for(r=0;r<e.length;r++)s=e[r],s>=h&&s<R&&(R=s);var A=k+1;if(R-h>m((n-p)/A))throw RangeError(d);for(p+=(R-h)*A,h=R,r=0;r<e.length;r++){if(s=e[r],s<h&&++p>n)throw RangeError(d);if(s==h){for(var U=p,_=a;;_+=a){var L=_<=v?i:_>=v+o?o:_-v;if(U<L)break;var x=U-L,q=a-L;t.push(g(y(L+x%q))),U=m(x/q)}t.push(g(y(U))),v=w(p,A,k==S),p=0,++k}}++p,++h}return t.join("")};e.exports=function(e){var t,r,n=[],a=e.toLowerCase().replace(p,".").split(".");for(t=0;t<a.length;t++)r=a[t],n.push(h.test(r)?"xn--"+S(r):r);return n.join(".")}},"6ded":function(e,t,r){},"7e55":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add"},[r("form",{attrs:{action:"post"}},[r("section",{staticClass:"cover"},[r("img",{ref:"preview_cover"})]),r("section",{staticClass:"info"},[r("div",{staticClass:"sec select_div"},[r("label",{attrs:{for:"upload_saga"}},[e._v("Saga:")]),r("br"),r("select",{directives:[{name:"model",rawName:"v-model",value:e.select,expression:"select"}],attrs:{name:"upload_saga",id:"upload_saga",required:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.select=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"!!new saga!!"}},[e._v("--- New Saga ---")]),r("option",{attrs:{value:"",selected:""}}),e._l(e.sagas,(function(t){return r("option",{key:t._id,domProps:{value:t.name}},[e._v(e._s(t.name))])}))],2),"!!new saga!!"==e.select?r("input",{directives:[{name:"model",rawName:"v-model",value:e.newSaga,expression:"newSaga"}],attrs:{type:"text",name:"upload_newSaga",id:"upload_newSaga",required:"!!new saga!!"==e.select},domProps:{value:e.newSaga},on:{input:function(t){t.target.composing||(e.newSaga=t.target.value)}}}):e._e()]),r("div",{staticClass:"sec saga_div"},[r("label",{attrs:{for:"upload_volume"}},[e._v("Volume:")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.volume,expression:"volume"}],attrs:{type:"number",name:"upload_volume",id:"upload_volume",required:""},domProps:{value:e.volume},on:{input:function(t){t.target.composing||(e.volume=t.target.value)}}})]),r("div",{staticClass:"sec saga_cover"},[r("label",{attrs:{for:"upload_cover"}},[e._v("Cover:")]),r("br"),r("input",{ref:"upload_cover",attrs:{type:"file",accept:"image/*",name:"upload_cover",id:"upload_cover",required:""}})]),r("div",{staticClass:"sec saga_submit"},[r("input",{ref:"submitBtn",attrs:{type:"submit",value:"Submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}})])])])])},a=[],i=r("1da1"),o=r("5530");function s(e){if(Array.isArray(e))return e}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function u(e,t){var r=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,a,i=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done);o=!0)if(i.push(n.value),t&&i.length===t)break}catch(u){s=!0,a=u}finally{try{o||null==r["return"]||r["return"]()}finally{if(s)throw a}}return i}}r("fb6a"),r("b0c0"),r("a630");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,t){return s(e)||u(e,t)||l(e,t)||f()}r("96cf"),r("2b3d");var p=r("2f62"),d=r("bc3a"),v=r.n(d),m={name:"Add",data:function(){return{select:"default_blank",newSaga:"",volume:""}},computed:Object(p["c"])(["sagas"]),mounted:function(){var e=this.$refs.upload_cover,t=this.$refs.preview_cover;e.onchange=function(){var r=h(e.files,1),n=r[0];n&&(t.src=URL.createObjectURL(n))}},methods:Object(o["a"])(Object(o["a"])({},Object(p["b"])(["addNew"])),{},{submitText:function(e,t){this.$refs.submitBtn.value=e,this.$refs.submitBtn.style.borderColor=t},submit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,i,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.submitText("...","yellow"),t.prev=1,t.next=4,v.a.get("/api/imgbb/key");case 4:return r=t.sent,n=r.data,a=n.api_key,i=new FormData,i.append("image",e.$refs.upload_cover.files[0]),i.append("text","formText"),console.log(i),t.next=13,fetch("https://api.imgbb.com/1/upload?key=".concat(a),{method:"POST",body:i});case 13:return o=t.sent,t.next=16,o.json();case 16:return s=t.sent,console.log(s),t.next=20,e.addNew({newSaga:"!!new saga!!"==e.select&&e.newSaga.length>0,name:"!!new saga!!"==e.select&&e.newSaga.length>0?e.newSaga:e.select,volumes:[{volume:e.volume,image:s.data.url}]});case 20:e.submitText("Done","#363"),setTimeout((function(){e.submitText("Submit","#fff")}),5e3),t.next=28;break;case 24:t.prev=24,t.t0=t["catch"](1),e.submitText("Error","#b33"),setTimeout((function(){e.submitText("Submit","#fff")}),5e3);case 28:case"end":return t.stop()}}),t,null,[[1,24]])})))()}})},g=m,b=(r("f27b"),r("2877")),y=Object(b["a"])(g,n,a,!1,null,"2b52efda",null);t["default"]=y.exports},9861:function(e,t,r){"use strict";r("e260");var n=r("23e7"),a=r("d066"),i=r("0d3b"),o=r("6eeb"),s=r("e2cc"),u=r("d44e"),c=r("9ed3"),l=r("69f3"),f=r("19aa"),h=r("5135"),p=r("0366"),d=r("f5df"),v=r("825a"),m=r("861d"),g=r("7c73"),b=r("5c6c"),y=r("9a1f"),w=r("35a1"),S=r("b622"),k=a("fetch"),R=a("Headers"),A=S("iterator"),U="URLSearchParams",_=U+"Iterator",L=l.set,x=l.getterFor(U),q=l.getterFor(_),j=/\+/g,B=Array(4),C=function(e){return B[e-1]||(B[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},O=function(e){try{return decodeURIComponent(e)}catch(t){return e}},P=function(e){var t=e.replace(j," "),r=4;try{return decodeURIComponent(t)}catch(n){while(r)t=t.replace(C(r--),O);return t}},E=/[!'()~]|%20/g,T={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},I=function(e){return T[e]},$=function(e){return encodeURIComponent(e).replace(E,I)},F=function(e,t){if(t){var r,n,a=t.split("&"),i=0;while(i<a.length)r=a[i++],r.length&&(n=r.split("="),e.push({key:P(n.shift()),value:P(n.join("="))}))}},N=function(e){this.entries.length=0,F(this.entries,e)},M=function(e,t){if(e<t)throw TypeError("Not enough arguments")},D=c((function(e,t){L(this,{type:_,iterator:y(x(e).entries),kind:t})}),"Iterator",(function(){var e=q(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r})),J=function(){f(this,J,U);var e,t,r,n,a,i,o,s,u,c=arguments.length>0?arguments[0]:void 0,l=this,p=[];if(L(l,{type:U,entries:p,updateURL:function(){},updateSearchParams:N}),void 0!==c)if(m(c))if(e=w(c),"function"===typeof e){t=e.call(c),r=t.next;while(!(n=r.call(t)).done){if(a=y(v(n.value)),i=a.next,(o=i.call(a)).done||(s=i.call(a)).done||!i.call(a).done)throw TypeError("Expected sequence with length 2");p.push({key:o.value+"",value:s.value+""})}}else for(u in c)h(c,u)&&p.push({key:u,value:c[u]+""});else F(p,"string"===typeof c?"?"===c.charAt(0)?c.slice(1):c:c+"")},z=J.prototype;s(z,{append:function(e,t){M(arguments.length,2);var r=x(this);r.entries.push({key:e+"",value:t+""}),r.updateURL()},delete:function(e){M(arguments.length,1);var t=x(this),r=t.entries,n=e+"",a=0;while(a<r.length)r[a].key===n?r.splice(a,1):a++;t.updateURL()},get:function(e){M(arguments.length,1);for(var t=x(this).entries,r=e+"",n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){M(arguments.length,1);for(var t=x(this).entries,r=e+"",n=[],a=0;a<t.length;a++)t[a].key===r&&n.push(t[a].value);return n},has:function(e){M(arguments.length,1);var t=x(this).entries,r=e+"",n=0;while(n<t.length)if(t[n++].key===r)return!0;return!1},set:function(e,t){M(arguments.length,1);for(var r,n=x(this),a=n.entries,i=!1,o=e+"",s=t+"",u=0;u<a.length;u++)r=a[u],r.key===o&&(i?a.splice(u--,1):(i=!0,r.value=s));i||a.push({key:o,value:s}),n.updateURL()},sort:function(){var e,t,r,n=x(this),a=n.entries,i=a.slice();for(a.length=0,r=0;r<i.length;r++){for(e=i[r],t=0;t<r;t++)if(a[t].key>e.key){a.splice(t,0,e);break}t===r&&a.push(e)}n.updateURL()},forEach:function(e){var t,r=x(this).entries,n=p(e,arguments.length>1?arguments[1]:void 0,3),a=0;while(a<r.length)t=r[a++],n(t.value,t.key,this)},keys:function(){return new D(this,"keys")},values:function(){return new D(this,"values")},entries:function(){return new D(this,"entries")}},{enumerable:!0}),o(z,A,z.entries),o(z,"toString",(function(){var e,t=x(this).entries,r=[],n=0;while(n<t.length)e=t[n++],r.push($(e.key)+"="+$(e.value));return r.join("&")}),{enumerable:!0}),u(J,U),n({global:!0,forced:!i},{URLSearchParams:J}),i||"function"!=typeof k||"function"!=typeof R||n({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,r,n,a=[e];return arguments.length>1&&(t=arguments[1],m(t)&&(r=t.body,d(r)===U&&(n=t.headers?new R(t.headers):new R,n.has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=g(t,{body:b(0,String(r)),headers:b(0,n)}))),a.push(t)),k.apply(this,a)}}),e.exports={URLSearchParams:J,getState:x}},"9a1f":function(e,t,r){var n=r("825a"),a=r("35a1");e.exports=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return n(t.call(e))}},"9bdd":function(e,t,r){var n=r("825a"),a=r("2a62");e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(o){throw a(e),o}}},a351:function(e,t,r){"use strict";r("6ded")},a630:function(e,t,r){var n=r("23e7"),a=r("4df4"),i=r("1c7e"),o=!i((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:o},{from:a})},d28b:function(e,t,r){var n=r("746f");n("iterator")},e01a:function(e,t,r){"use strict";var n=r("23e7"),a=r("83ab"),i=r("da84"),o=r("5135"),s=r("861d"),u=r("9bf2").f,c=r("e893"),l=i.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},h=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof h?new l(e):void 0===e?l():l(e);return""===e&&(f[t]=!0),t};c(h,l);var p=h.prototype=l.prototype;p.constructor=h;var d=p.toString,v="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=d.call(e);if(o(f,e))return"";var r=v?t.slice(7,-1):t.replace(m,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:h})}},e4f1:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view manga"},[r("h1",[e._v(e._s(e.manga.name))]),r("div",{staticClass:"grid"},e._l(e.manga.volumes,(function(e){return r("img",{key:e._id,attrs:{src:e.image,alt:e.volume}})})),0)])},a=[],i=r("2f62"),o={name:"Manga",computed:Object(i["c"])(["manga"]),methods:Object(i["b"])(["getManga"]),mounted:function(){this.getManga(this.$route.params.id)}},s=o,u=(r("4584"),r("2877")),c=Object(u["a"])(s,n,a,!1,null,"e2626098",null);t["default"]=c.exports},f27b:function(e,t,r){"use strict";r("14d1")},f820:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view about"},[r("h1",[e._v("This is an about page")])])}],i={name:"About"},o=i,s=(r("a351"),r("2877")),u=Object(s["a"])(o,n,a,!1,null,"64edddc8",null);t["default"]=u.exports},fb6a:function(e,t,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),o=r("23cb"),s=r("50c4"),u=r("fc6a"),c=r("8418"),l=r("b622"),f=r("1dde"),h=f("slice"),p=l("species"),d=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!h},{slice:function(e,t){var r,n,l,f=u(this),h=s(f.length),m=o(e,h),g=o(void 0===t?h:t,h);if(i(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[p],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return d.call(f,m,g);for(n=new(void 0===r?Array:r)(v(g-m,0)),l=0;m<g;m++,l++)m in f&&c(n,l,f[m]);return n.length=l,n}})}}]);
//# sourceMappingURL=about.4ad2287b.js.map