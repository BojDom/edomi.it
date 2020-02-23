webpackJsonp([0],{659:function(e,t,n){function i(e){n(674),n(675),n(673)}var a=n(34)(n(668),n(679),i,"data-v-74efedfe",null);e.exports=a.exports},664:function(e,t,n){t=e.exports=n(656)(!1),t.push([e.i,".bold{font-weight:900}",""])},665:function(e,t,n){t=e.exports=n(656)(!1),t.push([e.i,"@keyframes spinAround-data-v-74efedfe{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.mapicon[data-v-74efedfe]{color:#517ee0}.mapicon i[data-v-74efedfe]{font-size:44px}.mapicon h3[data-v-74efedfe]{font-size:14px}#gmap[data-v-74efedfe]{min-width:200px;min-height:300px;height:80%;width:100%}",""])},666:function(e,t,n){t=e.exports=n(656)(!1),t.push([e.i,"#home[data-v-74efedfe]{border-radius:12px;padding:0;max-height:75vh;margin:0 auto}#home .faded-row[data-v-74efedfe]{background:linear-gradient(90deg,#df2227 0,#f06b59)}#home h2[data-v-74efedfe]{color:#df2227}#home #me-wrap[data-v-74efedfe]{padding:15px;background:linear-gradient(180deg,#fff 0,#eee 50%,#fff);min-height:100%;overflow:hidden}#home #me-text[data-v-74efedfe]{color:#333}#home .choose-lang[data-v-74efedfe]{border:1px solid #aaa;border-radius:6px;padding:3px;transform:translateZ(0)}#home .choose-lang img[data-v-74efedfe]{width:30px}#home .modal-content[data-v-74efedfe]{height:100%}",""])},668:function(e,t,n){"use strict";function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function i(a,o){try{var r=t[a](o),s=r.value}catch(e){return void n(e)}if(!r.done)return Promise.resolve(s).then(function(e){i("next",e)},function(e){i("throw",e)});e(s)}return i("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=n(69),r=n(42),s=n(244),c=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({name:"home",components:{SvgTest:c.default},computed:a({},(0,r.mapGetters)(["isConnected"])),data:function(){return{t:!1,textel:null,mapOpened:!1,cvOpened:!1,map:null,pos:{lat:45.468016,lng:10.8495523}}},methods:{open:function(){var e=this,t=.6*this.$store.state.screen.h;this.t=new o.Tween({x:0}).to({x:t},600).easing(o.Easing.Sinusoidal.Out).on("complete",function(){e.textel.style.paddingBottom="80px"}).on("update",function(t){e.textel.style.height=t.x+"px"}).start()},close:function(){var e=this;return new Promise(function(t){e.t=new o.Tween({x:to}).to({x:0},250).easing(o.Easing.Bounce.Out).on("update",function(t){e.textel.style.height=t.x+"px"}).start().on("end",function(){t()})})},showPosition:function(){var e=this;return i(regeneratorRuntime.mark(function t(){var n,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(function(e){return setTimeout(e,30)});case 2:if(n=document.querySelector("#home .modal-content"),n&&(n.style.height="100%"),!e.map){t.next=6;break}return t.abrupt("return");case 6:e.map=new google.maps.Map(document.getElementById("gmap"),{center:e.pos,zoom:8.5,styles:[{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:20}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{saturation:-100},{lightness:40}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{saturation:-10},{lightness:30}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:10}]},{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"simplified"},{saturation:-60},{lightness:60}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"},{saturation:-100},{lightness:60}]}],disableDefaultUI:!0,zoomControl:!0,zoomControlOptions:{position:11}}),i=new google.maps.Marker({position:e.pos,icon:window.location.origin+"/public/img/marker_blue.png",map:e.map,visible:!0}),"undefined"!=typeof gtag&&gtag("event","maps");case 9:case"end":return t.stop()}},t,e)}))()},openInMaps:function(){var e=this;return i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:window.open("http://maps.apple.com/maps?q="+Object.values(e.pos).join(","));case 1:case"end":return t.stop()}},t,e)}))()}},watch:{mapOpened:function(e){e?this.showPosition():this.map=null}},sockets:{},mounted:function(){var e=this;return i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.textel=document.querySelector("#me-text"),e.$root.$once("step-end",function(){return e.open()});case 2:case"end":return t.stop()}},t,e)}))()}},"computed",{langImg:function(){return"/public/img/"+this.$i18n.locale+".svg"}})},673:function(e,t,n){var i=n(664);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(657)("69c9bee2",i,!0,{})},674:function(e,t,n){var i=n(665);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(657)("ee67cc3e",i,!0,{})},675:function(e,t,n){var i=n(666);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(657)("9fab1e2a",i,!0,{})},679:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"f fc",attrs:{id:"home"}},[n("div",{attrs:{id:"me-wrap"}},[n("div",{staticClass:"f fullw"},[n("h2",{staticStyle:{margin:"0 auto 0 0"}},[e._v(" "+e._s(e.$t("suDiMe"))+" ")]),n("a",{staticClass:"choose-lang f",on:{click:function(t){return e.$root.$children[0].openLang(!0)}}},[n("i",{staticClass:"mdi mdi-chevron-down"}),n("img",{attrs:{src:e.langImg}})])]),n("div",{staticClass:"faded-row "}),n("div",{staticClass:"scroll scrolly",staticStyle:{height:"0px"},attrs:{id:"me-text"},domProps:{innerHTML:e._s(e.$t("meDesc"))}})]),n("div",{staticClass:"f ja fw",staticStyle:{padding:"0 20%"}},[n("div",{staticClass:"f fc mapicon"},[n("i",{staticClass:"mdi mdi-account-box-multiple is-primary",on:{click:function(t){e.cvOpened=!0}}}),n("h3",[e._v(e._s(e.$t("cv")))])]),n("div",{staticClass:"f fc mapicon"},[n("i",{staticClass:"mdi mdi-map-marker-radius is-primary",on:{click:function(t){e.mapOpened=!0}}}),n("h3",[e._v(e._s(e.$t("myPosition")))])])]),n("b-modal",{attrs:{active:e.cvOpened},on:{"update:active":function(t){e.cvOpened=t}}},[n("div",{staticClass:"f fc ja",staticStyle:{width:"100%",height:"100%",background:"#fff","border-radius":"15px","min-height":"100px"}},[e._v("\n\t\t\tPresto carichero' il curriculum in PDF\n\t\t")])]),n("b-modal",{attrs:{active:e.mapOpened},on:{"update:active":function(t){e.mapOpened=t}}},[n("div",{staticClass:"f fc ja",staticStyle:{width:"100%",height:"100%"}},[n("div",{attrs:{id:"gmap"}}),n("div",{staticClass:"fw f ja",staticStyle:{"text-transform":"capitalize"}},[n("b-button",{attrs:{type:"is-primary"},on:{click:function(t){return e.openInMaps()}}},[n("i",{staticClass:"mdi mdi-open-in-new"}),e._v(" "+e._s(e.$t("openInMaps")))]),n("b-button",{attrs:{type:"is-danger"},on:{click:function(t){e.mapOpened=!1}}},[e._v(e._s(e.$t("back")))])],1)])])],1)},staticRenderFns:[]}}});