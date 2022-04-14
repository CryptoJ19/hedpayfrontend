(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{549:function(t,e,n){"use strict";(function(t){n(23),n(39),n(46),n(53);var e=n(2),r=n(12),o=n.n(r);e.default.mixin({methods:{sumOrders:function(t){var e=this.$store.getters["market/getSelectedPair"],n={price:new o.a(0),quantity:new o.a(0),amount:new o.a(0)},r=t.reduce((function(t,e){return{price:t.price.plus(e.price),quantity:t.quantity.plus(e.quantity),amount:t.amount.plus(e.amount)}}),n);return r.quantity=parseFloat(r.quantity.toFixed(e.baseStep)),r.amount=parseFloat(r.amount.toFixed(e.quoteStep)),r},calculateMatchingOrder:function(t){var e=null;return t.length&&((e=this.sumOrders(t)).price=t[t.length-1].price),e},calculateRelativeFee:function(t,e){return new o.a(e).multipliedBy(t)},calculateBTTFee:function(e,n,r,c){try{var l=new o.a(c).shiftedBy(-2).minus(1).negated(),d=t.env.DECIMAL_COIN.toLowerCase(),m=e.toLowerCase(),f=1;if(m!==d){var x=this.$store.getters["market/getPairs"].find((function(t){return t.name.includes(m)&&t.name.includes(d)}));f=x.basicCoin.toLowerCase()===m?x.lastPrice:1/x.lastPrice}return new o.a(f).multipliedBy(200).multipliedBy(n).multipliedBy(r).multipliedBy(l)}catch(t){return console.log(t),new o.a(0)}},calculateAbsoluteFee:function(t,e){return new o.a(e).plus(t)},$bpn:function(t,e){var n=this.$store.getters["market/getSelectedPair"].baseStep||6;return this.$cpn(t,n,e)},$qpn:function(t,e){var n=this.$store.getters["market/getSelectedPair"].quoteStep||8;return this.$cpn(t,n,e)},$wpn:function(t){var e=this.$store.getters["ui/getSelectedWallet"].currency.decimals||8;return this.$cpn(t,e)},$cpn:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r={maximumFractionDigits:e};return n&&(r.minimumFractionDigits=e),this.$n(t,r)},$p:function(t,e){return new o.a(t).toFixed(e)}}})}).call(this,n(140))},550:function(t,e,n){"use strict";n(99);var r={name:"pagination",mixins:[n(556).a],props:{total:{type:Number,required:!0}},data:function(){return{currentPage:1,onPage:5}},computed:{pagesTotal:function(){return Math.ceil(this.total/this.onPage)}},methods:{prevPage:function(){this.currentPage>1&&(this.currentPage--,this.emitChanges())},nextPage:function(){this.currentPage<this.pagesTotal&&(this.currentPage++,this.emitChanges())},validateInput:function(t){"Delete"!==t.key&&"Backspace"!==t.key&&(this.currentPage>this.pagesTotal?this.currentPage=this.pagesTotal:this.currentPage<1&&(this.currentPage=1),this.emitChanges())},emitChanges:function(){this.$emit("paginator-updated",{limit:this.onPage,offset:(this.currentPage-1)*this.onPage})}}},o=(n(577),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination"},[r("button",{staticClass:"pagination__left",attrs:{disabled:1===t.currentPage},on:{click:t.prevPage}},[r("img",{attrs:{src:n(555)}})]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentPage,expression:"currentPage"}],staticClass:"pagination__current-page",attrs:{type:"number"},domProps:{value:t.currentPage},on:{keyup:t.validateInput,keypress:t.onlyNumber,input:function(e){e.target.composing||(t.currentPage=e.target.value)}}}),t._v(" "),r("span",{staticClass:"pagination__all"},[t._v("of "+t._s(t.pagesTotal))]),t._v(" "),r("button",{staticClass:"pagination__right",attrs:{disabled:t.currentPage>=t.pagesTotal},on:{click:t.nextPage}},[r("img",{attrs:{src:n(555)}})])])}),[],!1,null,"04bffaf7",null);e.a=component.exports},555:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDcgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNiAxTDEgNkw2IDExIiBzdHJva2U9IndoaXRlIi8+DQo8L3N2Zz4NCg=="},556:function(t,e,n){"use strict";e.a={methods:{onlyNumber:function(t){var e=t.keyCode?t.keyCode:t.which;(e<48||e>57)&&t.preventDefault()}}}},557:function(t,e,n){var content=n(578);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2b4c7a72",content,!0,{sourceMap:!1})},558:function(t,e,n){var content=n(580);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("9d2c64b2",content,!0,{sourceMap:!1})},559:function(t,e,n){var content=n(584);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0e4891a9",content,!0,{sourceMap:!1})},561:function(t,e,n){"use strict";var r={components:{Modal:n(138).a},props:{showModalProperty:{type:Boolean,required:!0},closeCallback:{type:Function,required:!0}}},o=(n(579),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showModalProperty?n("Modal",{attrs:{width:480},on:{close:t.closeCallback}},[n("div",{staticClass:"e2m"},[n("h5",{staticClass:"e2m-heading"},[t._v("You must enable 2FA to perform this operation")]),t._v(" "),n("div",{staticClass:"submit-wrap"},[n("button",{staticClass:"cancel",on:{click:t.closeCallback}},[t._v("Cancel")]),t._v(" "),n("nuxt-link",{staticClass:"submit",attrs:{tag:"button",to:"profile/?show2fa=true"}},[t._v("Enable 2FA")])],1)])]):t._e()}),[],!1,null,"bb0c94da",null);e.a=component.exports},566:function(t,e,n){"use strict";n(45),n(99);var r=n(12),o=n.n(r),c=n(413),l={name:"NumericInput",props:{name:String,value:{default:"0"},step:{type:Number,default:1},min:{type:Number,default:-1/0},max:{type:Number,default:1/0}},data:function(){return{number:this.value}},computed:{canBeIncreased:function(){return!(new o.a(this.number).plus(this.step).toNumber()>this.max)},canBeDecreased:function(){return!(new o.a(this.number).minus(this.step).toNumber()<this.min)}},watch:{value:function(){var t="string"==typeof this.value?this.value.replace(/,/g,""):this.value,e=isNaN(t)?0:parseInt(t);this.number=e},number:function(){this.$emit("input",this.number)}},methods:{changeValue:function(t){var e=new o.a(this.number).plus(t);this.number=e.toNumber()}},directives:{currency:c.a}},d=(n(583),n(6)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"numeric-input"},[r("button",{staticClass:"ni-button ni-prev",attrs:{disabled:!t.canBeDecreased},on:{click:function(e){return t.changeValue(-t.step)}}},[r("img",{attrs:{src:n(581),alt:"prev"}})]),t._v(" "),r("div",{staticClass:"ni-display"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"ni-value",attrs:{name:t.name,min:t.min,type:"number",max:t.max},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value)}}})]),t._v(" "),r("button",{staticClass:"ni-button ni-next",attrs:{disabled:!t.canBeIncreased},on:{click:function(e){return t.changeValue(t.step)}}},[r("img",{attrs:{src:n(582),alt:"next"}})])])}),[],!1,null,"44e0a0c1",null);e.a=component.exports},577:function(t,e,n){"use strict";n(557)},578:function(t,e,n){(e=n(14)(!1)).push([t.i,".pagination[data-v-04bffaf7]{display:flex;align-items:center}.pagination__left[data-v-04bffaf7],.pagination__right[data-v-04bffaf7]{background:#2dccd3;border-radius:5px;width:25px;height:25px;margin:0 20px}@media (max-width:425px){.pagination__left[data-v-04bffaf7],.pagination__right[data-v-04bffaf7]{margin:0 10px}}.pagination__left[data-v-04bffaf7]:disabled,.pagination__right[data-v-04bffaf7]:disabled{opacity:.7;cursor:default;pointer-events:none}.pagination__right[data-v-04bffaf7]{transform:rotate(180deg)}.pagination__current-page[data-v-04bffaf7]{border:1px solid #e5e5e5;border-radius:5px;width:46px;height:25px;text-align:center;font-size:16px;color:#052b43}@media (max-width:425px){.pagination__current-page[data-v-04bffaf7]{font-size:14px;width:40px}}.pagination__all[data-v-04bffaf7]{color:rgba(0,0,0,.3);letter-spacing:.06em;line-height:19px;margin-left:10px}@media (max-width:425px){.pagination__all[data-v-04bffaf7]{font-size:14px}}@media (max-width:375px){.pagination__all[data-v-04bffaf7]{display:none}}",""]),t.exports=e},579:function(t,e,n){"use strict";n(558)},580:function(t,e,n){(e=n(14)(!1)).push([t.i,".e2m[data-v-bb0c94da]{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:18px}.e2m-heading[data-v-bb0c94da]{font-weight:400;color:#000;opacity:.5}.e2m .submit-wrap[data-v-bb0c94da]{margin-top:40px;display:flex}@media (max-width:768px){.e2m .submit-wrap[data-v-bb0c94da]{flex-direction:column}.e2m .submit-wrap>*[data-v-bb0c94da]{margin-bottom:20px}}.e2m .submit-wrap .cancel[data-v-bb0c94da],.e2m .submit-wrap .submit[data-v-bb0c94da]{width:160px;height:56px;flex:1;padding:17px 34px}@media (max-width:768px){.e2m .submit-wrap .cancel[data-v-bb0c94da],.e2m .submit-wrap .submit[data-v-bb0c94da]{height:40px}}.e2m .submit-wrap .submit[data-v-bb0c94da]{background:#2dccd3;border-radius:8px;font-size:18px;line-height:1.16;letter-spacing:.06em;transition:all .3s;color:#fff;white-space:nowrap;text-decoration:none}.e2m .submit-wrap .submit[data-v-bb0c94da]:hover{background:#27b4bd}.e2m .submit-wrap .submit[disabled][data-v-bb0c94da]{background-color:#596372;cursor:unset}@media screen and (max-width:1440px){.e2m .submit-wrap .submit[data-v-bb0c94da]{font-size:16px}}@media (max-width:425px){.e2m .submit-wrap .submit[data-v-bb0c94da]{font-size:14px}}.e2m .submit-wrap .cancel[data-v-bb0c94da]{background:#fff;border:1px solid #e5e5e5;border-radius:8px;line-height:1.16;letter-spacing:.06em;transition:all .3s;color:rgba(5,43,67,.5);font-size:18px;margin-right:35px}.e2m .submit-wrap .cancel[data-v-bb0c94da]:hover{color:#2dccd3;border-color:#2dccd3}@media screen and (max-width:1440px){.e2m .submit-wrap .cancel[data-v-bb0c94da]{font-size:16px}}@media (max-width:425px){.e2m .submit-wrap .cancel[data-v-bb0c94da]{font-size:14px}}@media (max-width:768px){.e2m .submit-wrap .cancel[data-v-bb0c94da]{margin-right:20px}}",""]),t.exports=e},581:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNyAxTDIgNkw3IDExIiBzdHJva2U9IiMyRENDRDMiIHN0cm9rZS13aWR0aD0iMiIvPg0KPC9zdmc+DQo="},582:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMSAxTDYgNkwxIDExIiBzdHJva2U9IiMyRENDRDMiIHN0cm9rZS13aWR0aD0iMiIvPg0KPC9zdmc+DQo="},583:function(t,e,n){"use strict";n(559)},584:function(t,e,n){(e=n(14)(!1)).push([t.i,".numeric-input[data-v-44e0a0c1]{display:flex;max-width:342px;justify-content:center;border:1px solid #f8f9fb;border-radius:8px;overflow:hidden;margin:30px 0 13px}.numeric-input .ni-button[data-v-44e0a0c1],.numeric-input .ni-display[data-v-44e0a0c1]{width:114px;height:70px}.numeric-input .ni-button[data-v-44e0a0c1]{background:#f8f9fb;padding:0}@media (max-width:768px){.numeric-input .ni-button[data-v-44e0a0c1]{width:40px}}.numeric-input .ni-button[data-v-44e0a0c1]:hover{background:#e8ebf2}.numeric-input .ni-display[data-v-44e0a0c1]{display:flex;position:relative;align-items:center;justify-content:center;flex-shrink:0}.numeric-input .ni-display .ni-value[data-v-44e0a0c1]{position:absolute;width:100%;height:100%;text-align:center;border:none;font-size:30px}",""]),t.exports=e},607:function(t,e,n){var r=n(17);r(r.S,"Number",{isNaN:function(t){return t!=t}})},608:function(t,e,n){var content=n(658);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("131ddec2",content,!0,{sourceMap:!1})},616:function(t,e,n){"use strict";n(21),n(13),n(10),n(16),n(24),n(25),n(7),n(20);var r=n(1),o=n(3),c=n(12),l=n.n(c),table=n(667),d=n(554),m=n.n(d),f=n(30),x=n(566),h=n(138),v=n(35);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"staking-component",components:{Pagination:n(550).a,Modal:h.a,NumericInput:x.a,BTable:table.a,vuescroll:m.a},data:function(){return{currentPage:"1",scrollOptions:{vuescroll:{mode:"slide",zooming:!1,scroller:{bouncing:!1}},scrollPanel:{scrollingY:!1},rail:{},bar:{background:"#2dccd3"}},staking:{status:"",amount:0,selectedPackage:{id:""}},withdraw:{item:{},status:""},stakingFields:[{key:"name",label:this.$t("wallets.exchange.name"),sortable:!1},{key:"deadline",label:this.$t("dashboard.packages.lockdate"),sortable:!1},{key:"deadline",label:this.$t("dashboard.packages.lockdate"),sortable:!1},{key:"lockdate",label:this.$t("dashboard.packages.deadline"),sortable:!1},{key:"enddate",label:"End date",sortable:!1},{key:"status",label:this.$t("wallets.exchange.status")},{key:"amount",label:this.$t("wallets.exchange.total"),sortable:!1},{key:"buttons",label:"",sortable:!1}]}},computed:w(w({},Object(f.b)({packages:"staking/getPackages",items:"staking/getData"})),{},{stakingItems:function(){return this.items.rows}}),created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.apiGetStakingData();case 2:return e.next=4,t.$store.dispatch("staking/".concat(v.GET_AVAILABLE_PACKAGES));case 4:case"end":return e.stop()}}),e)})))()},methods:{unlockDateConverter:function(t){var e=new Date(t);return e.setMonth(e.getMonth()+3),this.$d(new Date(e))},convertDate:function(t){return new Date(t).toDateString()},selectPackage:function(t){this.staking.selectedPackage=t},calcAmount:function(t){return new l.a(t.deposit).plus(t.receivable).plus(t.revenue).toNumber()},selectWithdrawPackage:function(t){this.withdraw.item=t},setStakingStatus:function(t){this.staking.status=t},setWithdrawalStatus:function(t){this.withdraw.status=t},openPackagesModal:function(){this.selectPackage(this.packages[0]),this.setStakingStatus("package")},startWithdrawalProcess:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$store.dispatch("staking/".concat(v.CLAIM_STAKE),t.id);case 3:e.setStakingStatus("successWithdraw"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),e.setStakingStatus("errorsWithdraw");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},getValidatorRules:function(t,e){var n="";return t>-1&&(n+="min_value: ".concat(t)),t>-1&&e&&(n+="|"),e&&(n+="max_value: ".concat(e)),n},buy:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("staking/".concat(v.BUY_PACKAGE),{amount:t.staking.amount});case 3:return e.next=5,t.apiGetStakingData();case 5:t.setStakingStatus("success"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.setStakingStatus("error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},withdrawCard:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("staking/".concat(v.WITHDRAW),{id:t.withdraw.item.id,amount:Math.floor(t.withdraw.item.amount).toString()});case 3:t.withdraw.status="success",e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t.withdraw.status="error";case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},apiGetStakingData:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:null,n.prev=1,n.next=4,e.$store.dispatch("staking/".concat(v.GET_STAKING_DATA),r);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})))()}}},y=(n(657),n(6)),component=Object(y.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.items?r("div",{staticClass:"staking"},[r("page-component",{attrs:{"no-pad":!0},scopedSlots:t._u([{key:"head-left",fn:function(){return[t._v(t._s(t.$t("wallets.headings.investment")))]},proxy:!0},{key:"head-right",fn:function(){return[r("button",{staticClass:"open-button",on:{click:t.openPackagesModal}},[t._v("Open")]),t._v(" "),r("pagination",{attrs:{total:t.items.count},on:{"paginator-updated":t.apiGetStakingData}})]},proxy:!0},{key:"default",fn:function(){return[r("vuescroll",{attrs:{ops:t.scrollOptions}},[r("b-table",{staticClass:"default-table",attrs:{id:"table-staking",items:t.stakingItems,fields:t.stakingFields},scopedSlots:t._u([{key:"cell(name)",fn:function(){return[t._v("\n              Hdp\n            ")]},proxy:!0},{key:"cell(deadline)",fn:function(data){return[t._v("\n              "+t._s(t.$d(new Date(data.item.createdAt).getTime()))+"\n            ")]}},{key:"cell(lockdate)",fn:function(data){return[t._v("\n              "+t._s(t.unlockDateConverter(data.item.createdAt))+"\n            ")]}},{key:"cell(enddate)",fn:function(data){return[t._v("\n              "+t._s(t.$d(new Date(data.item.endingDate).getTime()))+"\n            ")]}},{key:"cell(balanceCrypto)",fn:function(data){return[r("span",[t._v(t._s(t._f("cryptoDigits")(data.item.balanceCrypto))+" "+t._s(data.item.ticker))])]}},{key:"cell(amount)",fn:function(data){return[t._v("\n              "+t._s(t.$n(t.calcAmount(data.item)))+" Hdp\n            ")]}},{key:"cell(balanceToUsd)",fn:function(data){return[r("span",{staticClass:"usd-value"},[t._v(t._s(parseFloat(data.item.inUSDAmount,2))+" $")])]}},{key:"cell(buttons)",fn:function(data){return["active"===data.item.status?r("button",{staticClass:"table-button",on:{click:function(e){return t.startWithdrawalProcess(data.item)}}},[t._v("Withdraw")]):t._e()]}}],null,!1,2984221640)})],1)]},proxy:!0}],null,!1,2397120459)}),t._v(" "),t.staking.status?r("Modal",{attrs:{"auto-width":!0},on:{close:function(e){return t.setStakingStatus("")}}},[r("div",{staticClass:"staking-modal"},["package"===t.staking.status?r("div",{staticClass:"choose-package"},[r("h4",[t._v("Choose a package")]),t._v(" "),r("div",{staticClass:"cards-wrap"},t._l(t.packages,(function(e,o){return r("div",{key:o,staticClass:"card",class:{selected:t.staking.selectedPackage.id===e.id},on:{click:function(n){return t.selectPackage(e)}}},[r("div",{staticClass:"marker"},[r("img",{attrs:{src:n(656),alt:"active"}})]),t._v(" "),r("div",{staticClass:"amount-text"},[t._v(t._s(e.minValue)+" "+t._s(e.max?"":"+"))]),t._v(" "),e.max?r("div",{staticClass:"text"},[t._v("to")]):t._e(),t._v(" "),r("div",{staticClass:"amount-text"},[t._v(t._s(e.max?e.max:"")+" HDP")]),t._v(" "),r("div",{staticClass:"information-block first"},[r("h5",{staticClass:"text"},[t._v("Package price: ")]),t._v(" "),r("div",{staticClass:"value"},[t._v(t._s(100*e.fee)+" %")])]),t._v(" "),r("div",{staticClass:"information-block"},[r("h5",{staticClass:"text"},[t._v("Annual revenue: ")]),t._v(" "),r("div",{staticClass:"value"},[t._v(t._s(100*e.interest)+" %")])])])})),0),t._v(" "),r("div",{staticClass:"buttons-row"},[r("button",{staticClass:"positive-button",on:{click:function(e){return t.setStakingStatus("amount")}}},[t._v("Proceed")])])]):t._e(),t._v(" "),r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit;return["amount"===t.staking.status?r("div",{staticClass:"specify-amount"},[r("h4",[t._v("Enter the number of tokens")]),t._v(" "),r("div",{staticClass:"text"},[t._v("selected package: "+t._s(t.staking.selectedPackage.minValue)+"\n              "+t._s(t.staking.selectedPackage.max?"to "+t.staking.selectedPackage.max:"+")+" HDP\n            ")]),t._v(" "),r("div",{staticClass:"text"},[t._v("price: "+t._s(t.staking.amount*t.staking.selectedPackage.fee)+" Hdp")]),t._v(" "),r("div",{staticClass:"text"},[t._v("annual rate: "+t._s(100*t.staking.selectedPackage.interest)+" %")]),t._v(" "),r("ValidationProvider",{attrs:{name:"value",slim:"",rules:t.getValidatorRules(t.staking.selectedPackage.min,t.staking.selectedPackage.max)},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("numeric-input",{attrs:{name:"value",min:t.staking.selectedPackage.minValue,max:t.staking.selectedPackage.amountLeft,step:10},model:{value:t.staking.amount,callback:function(e){t.$set(t.staking,"amount",e)},expression:"staking.amount"}}),t._v(" "),r("span",{staticClass:"validation-message"},[t._v(t._s(n[0]))])]}}],null,!0)}),t._v(" "),r("div",{staticClass:"buttons-row"},[r("button",{staticClass:"retoir-button",on:{click:function(e){return t.setStakingStatus("package")}}},[t._v("Back")]),t._v(" "),r("button",{staticClass:"positive-button",on:{click:function(e){return n(t.buy)}}},[t._v("Proceed")])])],1):t._e()]}}],null,!1,118715044)}),t._v(" "),"success"===t.staking.status||"error"===t.staking.status?r("div",{staticClass:"result-notification"},["success"===t.staking.status?[r("h4",[t._v("Success")]),t._v(" "),r("div",{staticClass:"notification-text"},[t._v("\n              "+t._s(t.staking.amount)+" Hdp successfully delegated. They are blocked for 1 year. On first day of each month\n              you will be rewarded according to "+t._s(t.staking.selectedPackage.percentage)+" % (annual rate). Thank you\n            ")]),t._v(" "),r("img",{staticClass:"notification-icon",attrs:{src:n(220),alt:"Success"}})]:t._e(),t._v(" "),"error"===t.staking.status?[r("h4",[t._v("Failure")]),t._v(" "),r("div",{staticClass:"notification-text"},[t._v("\n              You do not have enough funds in Hdp. Fill up the balance in the Buy Hdp section and repeat the procedure\n            ")]),t._v(" "),r("img",{staticClass:"notification-icon",attrs:{src:n(219),alt:"Error"}})]:t._e()],2):t._e(),t._v(" "),"successWithdraw"===t.staking.status||"errorWithdraw"===t.staking.status?r("div",{staticClass:"result-notification"},["successWithdraw"===t.staking.status?[r("h4",[t._v("Success")]),t._v(" "),r("div",{staticClass:"notification-text"},[t._v("\n              You will receive your funds when the next distribution period starts.\n            ")]),t._v(" "),r("img",{staticClass:"notification-icon",attrs:{src:n(220),alt:"Success"}})]:t._e(),t._v(" "),"errorWithdraw"===t.staking.status?[r("h4",[t._v("Failure")]),t._v(" "),r("div",{staticClass:"notification-text"},[t._v("\n              Error\n            ")]),t._v(" "),r("img",{staticClass:"notification-icon",attrs:{src:n(219),alt:"Error"}})]:t._e()],2):t._e()],1)]):t._e()],1):t._e()}),[],!1,null,null,null);e.a=component.exports},656:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMSAzLjVMNC41IDdMMTAuNSAxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4NCjwvc3ZnPg0K"},657:function(t,e,n){"use strict";n(608)},658:function(t,e,n){(e=n(14)(!1)).push([t.i,".staking .open-button,.staking .table-button{background:#2dccd3;border-radius:8px;font-size:18px;line-height:1.16;letter-spacing:.06em;transition:all .3s;color:#fff;padding:8px}.staking .open-button:hover,.staking .table-button:hover{background:#27b4bd}.staking .open-button[disabled],.staking .table-button[disabled]{background-color:#596372;cursor:unset}@media screen and (max-width:1440px){.staking .open-button,.staking .table-button{font-size:16px}}@media (max-width:425px){.staking .open-button,.staking .table-button{font-size:14px}}.text{font-weight:400;font-size:16px;opacity:.5}#table-staking{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;grid-template-columns:minmax(90px,1fr) minmax(120px,2fr) minmax(120px,2fr) minmax(120px,2fr) minmax(120px,2fr) minmax(140px,1fr) minmax(160px,1fr)}#table-staking tbody tr:first-of-type td{background:#fff!important}#table-staking tbody tr:not(:first-of-type) td{background:#fbfbfc!important}#table-staking .icon{flex-shrink:0}.input-row{display:flex;flex-direction:column}.input-row:not(:first-child){margin-top:20px}.input-row label{font-size:12px;color:rgba(5,43,67,.4);margin-bottom:10px}.input-row input,.input-row label{line-height:1.16;letter-spacing:.06em}.input-row input{border:1px solid #eaeaea;border-radius:5px;padding:7px 16px;font-size:14px;color:#052b43;height:40px;transition:border .3s}.input-row input:disabled{background:#f4f4f4}.input-row input:focus{border:1px solid rgba(5,43,67,.34)}h4{text-align:center;font-weight:400;opacity:.5}.cards-wrap{display:flex;justify-content:space-between;margin-top:40px}.card{position:relative;width:267px;height:360px;margin:15px;border:1px solid #eaeaea;border-radius:10px;display:flex;flex-direction:column;justify-content:center;align-items:center;letter-spacing:.06em;cursor:pointer}@media (max-width:900px){.card{width:100%;height:auto;margin:5px}.card,.card .text{font-size:20px}}.card.selected{border:2px solid #2dccd3}.card.selected .marker{background:#2dccd3;border-color:#2dccd3}.card .information-block{display:flex;flex-direction:column;align-items:center;margin-bottom:18px}@media (max-width:900px){.card .information-block{flex-direction:row;margin-bottom:1vw}}.card .information-block.first{margin-top:30px}@media (max-width:900px){.card .information-block.first{margin-top:1.1vw}}.card .amount-text{font-weight:700;font-size:30px}@media (max-width:900px){.card .amount-text{font-size:20px;padding-top:10px}}.card .value{font-weight:500}.card .marker{width:18px;height:18px;border-radius:50%;border:1px solid #eaeaea;background:#fff;position:absolute;left:22px;top:22px;display:flex;justify-content:center;align-items:center}.choose-package .buttons-row{flex-direction:row-reverse}@media (max-width:900px){.choose-package .cards-wrap{display:grid!important;grid-template-columns:minmax(135px,2fr);margin-left:-10px}}.choose-package .cards-wrap .card{width:200px}@media (max-width:900px){.choose-package .cards-wrap{display:flex;align-items:center}.choose-package .cards-wrap .card{width:100%}}.result-notification,.specify-amount{display:flex;flex-direction:column;align-items:center}.specify-amount{height:386px;display:flex;flex-direction:column;justify-content:space-between}.specify-amount .validation-message{min-height:20px;display:flex}.specify-amount h4{opacity:.5}.specify-amount .text{margin-top:10px;opacity:.3;text-align:center}@media (max-width:640px){.specify-amount{width:100%}}.result-notification{width:300px;text-align:center}.result-notification>*{margin-bottom:10px}@media (max-width:640px){.result-notification{width:100%}}.withdraw-option{display:grid;grid-template-columns:300px 1fr 1fr 30px;padding:15px;width:100%;height:60px}@media (max-width:900px){.withdraw-option{grid-template-columns:90px 1fr 1fr 30px}}.withdraw-option .text{margin-right:24px}.withdraw-option .ticker{opacity:1}.withdraw-option .marker{position:static}.buttons-row{display:flex;width:100%;justify-content:space-between}@media (max-width:640px){.buttons-row{flex-direction:column}}.retoir-button{background:#fff;border:1px solid #e5e5e5;border-radius:8px;font-size:18px;line-height:1.16;letter-spacing:.06em;transition:all .3s;color:rgba(5,43,67,.5);padding:17px;width:240px;margin:7px}.retoir-button:hover{color:#2dccd3;border-color:#2dccd3}@media screen and (max-width:1440px){.retoir-button{font-size:16px}}@media (max-width:425px){.retoir-button{font-size:14px}}.positive-button{background:#2dccd3;border-radius:8px;font-size:18px;line-height:1.16;letter-spacing:.06em;transition:all .3s;color:#fff;margin:7px;padding:17px;width:240px}.positive-button:hover{background:#27b4bd}.positive-button[disabled]{background-color:#596372;cursor:unset}@media screen and (max-width:1440px){.positive-button{font-size:16px}}@media (max-width:425px){.positive-button{font-size:14px}}.validation-message{color:#eb5757}.table-button{padding:7px 10px;flex:1}.table-button[disabled]{cursor:not-allowed;opacity:.3}.table-button:not(:first-child){margin-left:20px}",""]),t.exports=e}}]);