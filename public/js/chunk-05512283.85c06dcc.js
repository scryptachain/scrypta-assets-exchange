(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05512283"],{1148:function(e,t,a){"use strict";var s=a("a691"),n=a("1d80");e.exports="".repeat||function(e){var t=String(n(this)),a="",r=s(e);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(a+=t);return a}},"408a":function(e,t,a){var s=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=s(e))throw TypeError("Incorrect invocation");return+e}},"6e13":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("b-loading",{attrs:{"is-full-page":e.isFullPage,active:e.isLoading,"can-cancel":!1},on:{"update:active":function(t){e.isLoading=t}}}),e.trade.owner!==e.user?a("div",{staticClass:"columns"},["SELL"===e.trade.type?a("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[a("h2",{staticStyle:{"text-align":"center","font-size":"28px","font-weight":"bold","margin-bottom":"20px"}},[e._v("Buy "+e._s(e.sidechain.data.genesis.symbol)+" for LYRA")]),a("h3",{staticStyle:{"text-align":"center","font-size":"18px","font-weight":"bold","margin-bottom":"20px"}},[e._v("Price is "+e._s(e.trade.price)+" LYRA for 1 "+e._s(e.sidechain.data.genesis.symbol))]),a("b-field",{staticClass:"text-center",attrs:{label:"Amount you mean to buy (Max is "+e.trade.amountPair+" "+e.sidechain.data.genesis.symbol+")"}},[a("b-input",{attrs:{size:"is-large",controls:!1,type:"is-dark"},on:{input:function(t){return e.fixAmounts("pair")}},model:{value:e.amountPair,callback:function(t){e.amountPair=t},expression:"amountPair"}})],1),a("b-field",{staticClass:"text-center",attrs:{label:"Amount you will spend (Max is "+e.trade.amountAsset+" LYRA)"}},[a("b-input",{staticClass:"text-center",attrs:{size:"is-large",controls:!1,type:"is-dark"},on:{input:function(t){return e.fixAmounts("asset")}},model:{value:e.amountAsset,callback:function(t){e.amountAsset=t},expression:"amountAsset"}})],1),a("div",{staticStyle:{"text-align":"right","font-size":"14px"}},[e._v("You have "+e._s(e.userBalance)+" LYRA")]),e.isSending?e._e():a("div",{staticClass:"text-center"},[e.valid?a("div",{staticClass:"button is-primary is-large",on:{click:e.openUnlock}},[e._v("BUY")]):e._e(),e.valid?e._e():a("div",[e._v("Amount is invalid.")])]),e.isSending?a("div",{staticClass:"text-center"},[e._v(" Sending LYRA, please wait. ")]):e._e()],1):e._e(),"BUY"===e.trade.type?a("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[a("h2",{staticStyle:{"text-align":"center","font-size":"28px","font-weight":"bold","margin-bottom":"20px"}},[e._v("Sell "+e._s(e.sidechain.data.genesis.symbol)+" for LYRA")]),a("h3",{staticStyle:{"text-align":"center","font-size":"18px","font-weight":"bold","margin-bottom":"20px"}},[e._v("Price is "+e._s(e.trade.price)+" LYRA for 1 "+e._s(e.sidechain.data.genesis.symbol))]),a("b-field",{staticClass:"text-center",attrs:{label:"Amount you mean to sell (Max is "+e.trade.amountPair+" "+e.sidechain.data.genesis.symbol+")"}},[a("b-input",{attrs:{size:"is-large",controls:!1,type:"is-dark"},on:{input:function(t){return e.fixAmounts("pair")}},model:{value:e.amountPair,callback:function(t){e.amountPair=t},expression:"amountPair"}})],1),a("div",{staticStyle:{"text-align":"right","font-size":"14px"}},[e._v("You have "+e._s(e.userBalance)+" "+e._s(e.sidechain.data.genesis.symbol))]),a("b-field",{staticClass:"text-center",attrs:{label:"Amount you will earn (Max is "+e.trade.amountAsset+" LYRA)"}},[a("b-input",{staticClass:"text-center",attrs:{size:"is-large",controls:!1,type:"is-dark"},on:{input:function(t){return e.fixAmounts("asset")}},model:{value:e.amountAsset,callback:function(t){e.amountAsset=t},expression:"amountAsset"}})],1),e.isSending?e._e():a("div",{staticClass:"text-center"},[e.valid?a("div",{staticClass:"button is-primary is-large",on:{click:e.openUnlock}},[e._v("SELL")]):e._e(),e.valid?e._e():a("div",[e._v("Amount is invalid.")])]),e.isSending?a("div",{staticClass:"text-center"},[e._v(" Sending "+e._s(e.sidechain.data.genesis.symbol)+", please wait. ")]):e._e()],1):e._e()]):e._e(),e.trade.owner===e.user?a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[a("h2",{staticStyle:{"text-align":"center","font-size":"28px","font-weight":"bold","margin-bottom":"20px"}},[e._v("You're selling "+e._s(e.sidechain.data.genesis.symbol)+" for LYRA")]),a("h3",{staticStyle:{"text-align":"center","font-size":"18px","font-weight":"bold","margin-bottom":"20px"}},[e._v("Price is "+e._s(e.trade.price)+" LYRA for 1 "+e._s(e.sidechain.data.genesis.symbol))])])]):e._e()],1)},n=[],r=(a("b680"),a("96cf"),a("1da1")),i=a("bc3a"),o={name:"Trade",mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,t.checkUser(),e.next=4,t.getTrade();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{checkUser:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,t.next=3,a.scrypta.keyExist();case 3:s=t.sent,34===s.length?a.user=s:window.location="/#/";case 5:case"end":return t.stop()}}),t)})))()},openUnlock:function(){var e=!0,t=this,a=0;"SELL"===t.trade.type?(a=parseFloat(t.amountAsset)+.002,parseFloat(t.userBalance)<a&&(e=!1,t.$buefy.toast.open({message:"Not enough LYRA!",type:"is-danger"}))):"BUY"===t.trade.type&&parseFloat(t.userBalance)<parseFloat(t.amountPair)&&(e=!1,t.$buefy.toast.open({message:"Not enough assets!",type:"is-danger"})),!0===e&&t.$buefy.dialog.prompt({message:"Enter your wallet password to complete trade.",inputAttrs:{placeholder:"Enter password here",type:"password"},trapFocus:!0,onConfirm:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(s){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.scrypta.readKey(s);case 2:if(n=e.sent,!1!==n){e.next=7;break}t.$buefy.toast.open({message:"Wrong password!",type:"is-danger"}),e.next=22;break;case 7:if("SELL"!==t.trade.type){e.next=16;break}return t.isSending=!0,e.next=11,t.axios.post(t.apiurl+"/wallet/sendlyra",{from:t.user,to:t.trade.address,amount:a,private_key:n.prv});case 11:r=e.sent,t.isSending=!1,!0===r["data"]["success"]?(t.$buefy.toast.open({message:"LYRA sent correctly!",type:"is-success"}),t.getTrade()):(t.$buefy.toast.open({message:"Somthing goes wrong please retry.",type:"is-danger"}),t.isSending=!1),e.next=22;break;case 16:if("BUY"!==t.trade.type){e.next=22;break}return e.next=19,t.axios.post(t.apiurl+"/wallet/sendtoken",{from:t.user,to:t.trade.address,amount:t.amountPair,private_key:n.prv,pubkey:n.key,sidechain_address:t.trade.pair,fee:.002});case 19:i=e.sent,t.isSending=!1,!0===i["data"]["lyra"]["success"]&&1===i["data"]["sidechain"]["txs"].length?(t.$buefy.toast.open({message:t.sidechain.data.genesis.symbol+" sent correctly!",type:"is-success"}),setTimeout((function(){window.location="/#/user"}),1e3)):(t.$buefy.toast.open({message:"Somthing goes wrong please retry.",type:"is-danger"}),t.isSending=!1);case 22:case"end":return e.stop()}}),e)})));function s(t){return e.apply(this,arguments)}return s}()})},fixAmounts:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s,n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:s=t,n=!0,r=parseInt(s.sidechain.data.genesis.decimals),""===s.amountAsset&&(s.amountAsset=0),""===s.amountPair&&(s.amountPair=0),s.amountAsset>0&&(s.amountAsset=parseFloat(parseFloat(s.amountAsset).toFixed(8))),s.amountPair>0&&(s.amountPair=parseFloat(parseFloat(s.amountPair).toFixed(r))),s.amountAsset>s.trade.amountAsset&&(n=!1),s.amountPair>s.trade.amountPair&&(n=!1),s.valid=n,!0===n&&("pair"===e?s.amountAsset=parseFloat(s.amountPair)*parseFloat(s.trade.price):s.amountPair=parseFloat(s.amountAsset)/parseFloat(s.trade.price),s.amountAsset=parseFloat(parseFloat(s.amountAsset).toFixed(8)),s.amountPair=parseFloat(parseFloat(s.amountPair).toFixed(r)));case 11:case"end":return a.stop()}}),a)})))()},getTrade:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,s,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,t.next=3,a.axios.post(a.apiurl+"/trades/get",{uuid:a.$route.params.uuid});case 3:if(s=t.sent,a.trade=s["data"]["trade"],a.sidechain=s["data"]["sidechain"],a.amountPair=a.trade.amountPair,a.amountAsset=a.trade.amountAsset,"SELL"!==a.trade.type){t.next=15;break}return t.next=11,a.axios.post(a.apiurl+"/wallet/balance",{asset:"LYRA",address:a.user});case 11:n=t.sent,a.userBalance=n["data"],t.next=20;break;case 15:if("BUY"!==a.trade.type){t.next=20;break}return t.next=18,a.axios.post(a.apiurl+"/wallet/balance",{asset:a.trade.pair,address:a.user});case 18:r=t.sent,a.userBalance=r["data"];case 20:a.isLoading=!1;case 21:case"end":return t.stop()}}),t)})))()},convertTime:function(e){var t=e,a=new Date(1e3*t),s=a.getUTCDate(),n=a.getUTCMonth()+1,r=a.getUTCFullYear(),i=a.getHours(),o="0"+a.getMinutes(),u="0"+a.getSeconds(),c=s+"/"+n+"/"+r+" at "+i+":"+o.substr(-2)+":"+u.substr(-2);return c},logout:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,t.next=3,a.scrypta.forgetKey();case 3:location.reload();case 4:case"end":return t.stop()}}),t)})))()}},data:function(){return{scrypta:window.ScryptaCore,axios:i,user:"",userBalance:0,valid:!0,focus:"",isLoading:!0,isFullPage:!0,isSending:!1,assetSelected:"",amountPair:0,amountAsset:0,trade:{type:"-"},sidechain:{data:{genesis:{symbol:"-"}}},apiurl:"https://ex.planum.app"}}},u=o,c=a("2877"),l=Object(c["a"])(u,s,n,!1,null,null,null);t["default"]=l.exports},b680:function(e,t,a){"use strict";var s=a("23e7"),n=a("a691"),r=a("408a"),i=a("1148"),o=a("d039"),u=1..toFixed,c=Math.floor,l=function(e,t,a){return 0===t?a:t%2===1?l(e,t-1,a*e):l(e*e,t/2,a)},d=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},p=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){u.call({})}));s({target:"Number",proto:!0,forced:p},{toFixed:function(e){var t,a,s,o,u=r(this),p=n(e),m=[0,0,0,0,0,0],f="",g="0",h=function(e,t){var a=-1,s=t;while(++a<6)s+=e*m[a],m[a]=s%1e7,s=c(s/1e7)},x=function(e){var t=6,a=0;while(--t>=0)a+=m[t],m[t]=c(a/e),a=a%e*1e7},b=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==m[e]){var a=String(m[e]);t=""===t?a:t+i.call("0",7-a.length)+a}return t};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(f="-",u=-u),u>1e-21)if(t=d(u*l(2,69,1))-69,a=t<0?u*l(2,-t,1):u/l(2,t,1),a*=4503599627370496,t=52-t,t>0){h(0,a),s=p;while(s>=7)h(1e7,0),s-=7;h(l(10,s,1),0),s=t-1;while(s>=23)x(1<<23),s-=23;x(1<<s),h(1,1),x(2),g=b()}else h(0,a),h(1<<-t,0),g=b()+i.call("0",p);return p>0?(o=g.length,g=f+(o<=p?"0."+i.call("0",p-o)+g:g.slice(0,o-p)+"."+g.slice(o-p))):g=f+g,g}})}}]);
//# sourceMappingURL=chunk-05512283.85c06dcc.js.map