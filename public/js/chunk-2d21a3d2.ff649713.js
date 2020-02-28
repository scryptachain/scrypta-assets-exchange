(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("b-loading",{attrs:{"is-full-page":t.isFullPage,active:t.isLoading,"can-cancel":!1},on:{"update:active":function(e){t.isLoading=e}}}),s("h2",{staticStyle:{"text-align":"center","font-size":"28px","font-weight":"bold","margin-bottom":"20px"}},[t._v("Buy and Sell assets with LYRA")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third is-offset-one-third"},[s("b-field",[s("b-select",{attrs:{placeholder:"Select asset",size:"is-medium",expanded:""},on:{input:t.filterAssets},model:{value:t.assetSelected,callback:function(e){t.assetSelected=e},expression:"assetSelected"}},[s("option",{attrs:{value:""}},[t._v("Show all offers")]),t._l(t.assets,(function(e){return s("option",{key:e.address,domProps:{value:e.address}},[t._v(t._s(e.genesis.name))])}))],2)],1)],1)]),s("b-tabs",{staticClass:"block",attrs:{size:"is-medium",position:"is-centered",type:"is-toggle-rounded",animated:!1}},[s("b-tab-item",{staticStyle:{"margin-top":"20px"},attrs:{label:"Sell"}},[0===t.sells.length?s("div",[s("h2",{staticStyle:{"text-align":"center","font-weight":"bold","font-size":"24px"}},[t._v("No sell orders.")])]):t._e(),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},t._l(t.sells,(function(e){return s("div",{key:e.uuid},["SELL"===e.type?s("div",{staticClass:"list-trade"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("strong",[t._v("SELLS")]),s("br"),t._v(" "+t._s(e.amountPair)+" "+t._s(t.chains[e.pair])+" ")]),s("div",{staticClass:"column"},[s("strong",[t._v("FOR")]),s("br"),t._v(" "+t._s(e.amountAsset)+" LYRA ")]),s("div",{staticClass:"column"},[s("strong",[t._v("CREATED")]),s("br"),t._v(" "+t._s(e.timestamp)+" ")]),s("div",{staticClass:"column"},[s("strong",[t._v("EXPIRES")]),s("br"),t._v(" "+t._s(e.expiration)+" ")]),s("div",{staticClass:"column"},[s("a",{attrs:{href:"/#/trade/"+e.uuid}},[s("div",{staticClass:"button is-primary is-large",staticStyle:{float:"right"}},[t._v("BUY")])])])])]):t._e()])})),0)])]),s("b-tab-item",{staticStyle:{"margin-top":"20px"},attrs:{label:"Buy"}},[0===t.buys.length?s("div",[s("h2",{staticStyle:{"text-align":"center","font-weight":"bold","font-size":"24px"}},[t._v("No buy orders.")])]):t._e(),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},t._l(t.buys,(function(e){return s("div",{key:e.uuid},["BUY"===e.type?s("div",{staticClass:"list-trade"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("strong",[t._v("BUYS")]),s("br"),t._v(" "+t._s(e.amountPair)+" "+t._s(t.chains[e.pair])+" ")]),s("div",{staticClass:"column"},[s("strong",[t._v("FOR")]),s("br"),t._v(" "+t._s(e.amountAsset)+" LYRA ")]),s("div",{staticClass:"column"},[s("strong",[t._v("CREATED")]),s("br"),t._v(" "+t._s(e.timestamp)+" ")]),s("div",{staticClass:"column"},[s("strong",[t._v("EXPIRES")]),s("br"),t._v(" "+t._s(e.expiration)+" ")]),s("div",{staticClass:"column"},[s("a",{attrs:{href:"/#/trade/"+e.uuid}},[s("div",{staticClass:"button is-primary is-large",staticStyle:{float:"right"}},[t._v("SELL")])])])])]):t._e()])})),0)])])],1)],1)},r=[],n=(s("96cf"),s("1da1")),i=s("bc3a"),c={name:"Home",mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this,e.checkUser(),t.next=4,e.getAllAssets();case 4:e.getActiveTrades();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{checkUser:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t,e.next=3,s.scrypta.keyExist();case 3:a=e.sent,34===a.length&&(s.user=a);case 5:case"end":return e.stop()}}),e)})))()},convertTime:function(t){var e=t,s=new Date(1e3*e),a=s.getUTCDate(),r=s.getUTCMonth()+1,n=s.getUTCFullYear(),i=s.getHours(),c="0"+s.getMinutes(),o="0"+s.getSeconds(),l=a+"/"+r+"/"+n+" at "+i+":"+c.substr(-2)+":"+o.substr(-2);return l},getAllAssets:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a,r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t,e.next=3,s.scrypta.connectNode();case 3:return a=e.sent,e.next=6,s.axios.get(a+"/sidechain/list");case 6:for(n in r=e.sent,s.assets=r["data"]["data"],s.assets)i=s.assets[n],s.chains[i.address]=i.genesis.symbol;case 9:case"end":return e.stop()}}),e)})))()},filterAssets:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(a in s=t,s.isLoading=!0,s.buys=[],s.sells=[],s.trades)"BUY"===s.trades[a].type?s.trades[a].pair!==s.assetSelected&&""!==s.assetSelected||s.buys.push(s.trades[a]):"SELL"===s.trades[a].type&&(s.trades[a].pair!==s.assetSelected&&""!==s.assetSelected||s.sells.push(s.trades[a]));s.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},getActiveTrades:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t,e.next=3,s.axios.post(s.apiurl+"/trades/active");case 3:for(r in a=e.sent,s.trades=a["data"],s.trades)s.trades[r].timestamp=s.convertTime(s.trades[r].timestamp),s.trades[r].expiration=s.convertTime(s.trades[r].expiration),"BUY"===s.trades[r].type?s.buys.push(s.trades[r]):"SELL"===s.trades[r].type&&s.sells.push(s.trades[r]);s.isLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},logout:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t,e.next=3,s.scrypta.forgetKey();case 3:location.reload();case 4:case"end":return e.stop()}}),e)})))()}},data:function(){return{scrypta:window.ScryptaCore,axios:i,user:"",isLoading:!0,isFullPage:!0,assetSelected:"",chains:{},trades:[],assets:[],sells:[],buys:[],apiurl:"https://ex.planum.app"}}},o=c,l=s("2877"),u=Object(l["a"])(o,a,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.ff649713.js.map