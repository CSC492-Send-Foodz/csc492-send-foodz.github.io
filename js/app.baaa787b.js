(function(e){function t(t){for(var n,a,c=t[0],s=t[1],u=t[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-4dfece10":"3bcd59a5","chunk-6559ff90":"8f92df97","chunk-2a85ec00":"a64051f2","chunk-2e6f81c5":"a5056060","chunk-70718824":"72f1adb8","chunk-3d015816":"9f13c3aa","chunk-2b706f5b":"acdeb363","chunk-b3990a20":"b243976a"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-4dfece10":1,"chunk-6559ff90":1,"chunk-2a85ec00":1,"chunk-2e6f81c5":1,"chunk-70718824":1,"chunk-3d015816":1,"chunk-2b706f5b":1,"chunk-b3990a20":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-4dfece10":"6a39ffce","chunk-6559ff90":"c7315fda","chunk-2a85ec00":"bb63aae4","chunk-2e6f81c5":"bb7209c4","chunk-70718824":"6367695a","chunk-3d015816":"712e85ef","chunk-2b706f5b":"aa8de5cc","chunk-b3990a20":"f0066e5a"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===n||p===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],p=u.getAttribute("data-href");if(p===n||p===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,s.nc&&p.setAttribute("nonce",s.nc),p.src=c(e);var d=new Error;u=function(t){p.onerror=p.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=p;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1d8c":function(e,t,r){},3550:function(e,t,r){"use strict";var n=r("1d8c"),a=r.n(n);a.a},3640:function(e,t,r){"use strict";r("b0c0"),r("96cf");var n=r("1da1"),a=r("2b0e"),o=r("0ff2"),i=r("a18c"),c=r("9101"),s=r("59ca"),u=r.n(s);r("e71f"),r("ea7b");a["a"].use(o["a"]);var p={apiKey:"AIzaSyDrRUKi6kby_GoIb3H6l1m7AkX0Kg7_zPg",authDomain:"send-foodz-1a677.firebaseapp.com",databaseURL:"https://send-foodz-1a677.firebaseio.com",projectId:"send-foodz-1a677",storageBucket:"send-foodz-1a677.appspot.com",messagingSenderId:"813090925215",appId:"1:813090925215:web:15e62c6478e7e58837d0aa",measurementId:"G-YCKNHS7GM7"},d=u.a.initializeApp(p);function f(e,t){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:d.auth().setPersistence(u.a.auth.Auth.Persistence.SESSION).then(Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d.auth().signInWithEmailAndPassword(t,r).catch((function(e){return"auth/wrong-password"===e.code?"Login Failed":"Something went wrong. Try again later"})));case 1:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function h(e,t){return g.apply(this,arguments)}function g(){return g=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d.auth().createUserWithEmailAndPassword(t,r).catch((function(e){return e.message})));case 1:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function m(){return b.apply(this,arguments)}function b(){return b=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.auth().currentUser.getIdToken(!0).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c["a"].state.token=t,r=new Date,r.setHours(r.getHours()+1),c["a"].state.tokenExpiry=r;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function y(){d.auth().signOut()}function v(){return d.firestore()}d.auth().onAuthStateChanged(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=13;break}return r=u.a.auth().currentUser,console.log("currentUser",r),e.next=5,r.getIdToken(!0).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("token",t),c["a"].state.token=t,r=new Date,r.setHours(r.getHours()+1),c["a"].state.tokenExpiry=r;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:if(c["a"].state.id=t.uid,c["a"].state.email=t.email,r.metadata.creationTime===r.metadata.lastSignInTime){e.next=10;break}return e.next=10,c["a"].dispatch("postCheckAccountType",t.uid).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.data!==c["a"].state.userType&&(c["a"].state.userType="GroceryStores"===t.data?"Grocery Store":"Food Bank");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),y()}));case 10:"login"!==i["a"].currentRoute.name&&"signup"!==i["a"].currentRoute.name||(console.log("Router"),i["a"].push("Grocery Store"===c["a"].state.userType?{name:"inventory",params:{id:t.uid}}:{name:"availableGroceryStores"})),e.next=26;break;case 13:c["a"].state.id="",c["a"].state.email="",c["a"].state.token="",c["a"].state.inventoryItems=[],c["a"].state.groceryStores=[],c["a"].state.activeOrders=[],c["a"].state.userType="",c["a"].state.shoppingCart=[],c["a"].state.shoppingCartGroceryStoreId="",c["a"].state.showPopupStartNewShoppingCart=!1,c["a"].state.showCheckoutError=!1,c["a"].state.showSuccessfullOrderPlace=!1,"login"!==i["a"].currentRoute.name&&i["a"].push({name:"login"});case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t["a"]={database:d,signin:f,signup:h,refreshToken:m,signout:y,firestore:v}},"4e92":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("2f62"),o=(r("d1e78"),r("a18c")),i=r("f309");r("bf40");n["a"].use(i["a"]);var c=new i["a"]({theme:{themes:{light:{primary:"#000000",secondary:"#747474",background:"#FDFDFD",action:"#EBEBEB",error:"#b71c1c"}}}}),s=r("9101"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("NavBar"),r("v-content",{staticClass:"page"},[r("router-view")],1)],1)},p=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-navigation-drawer",{attrs:{"disable-resize-watcher":!0,app:""},model:{value:e.sidebar,callback:function(t){e.sidebar=t},expression:"sidebar"}},[r("v-list",e._l(e.tabsMenu,(function(t){return r("v-list-item",{key:t.title,attrs:{to:t.path}},[r("v-list-item-content",[e._v(e._s(t.title))])],1)})),1)],1),r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-toolbar",{attrs:{flat:""}},[r("span",{staticClass:"hidden-md-and-up"},[r("v-app-bar-nav-icon",{on:{click:function(t){e.sidebar=!e.sidebar}}})],1),r("v-toolbar-title",{staticClass:"brand"},[e._v(e._s(e.appTitle))])],1),r("v-col",{staticClass:"hidden-sm-and-down",attrs:{"p-0":""}},[r("v-tabs",{attrs:{right:"",grow:"",height:"60"}},[e._l(e.tabsMenu,(function(t){return r("v-tab",{key:t.title,attrs:{to:t.path}},[e._v(e._s(t.title))])})),"Food Bank"===this.getUserType?r("v-tab",{attrs:{text:"",to:"/cart"}},[r("v-badge",{attrs:{left:"",color:"black"}},[r("span",{attrs:{slot:"badge"},slot:"badge"},[e._v(e._s(e.getOrderFromGroceryStore.length))]),r("v-icon",[e._v("shopping_cart")])],1)],1):e._e(),""!==e.getId?r("v-tab",{on:{click:e.logout}},[e._v("Logout")]):e._e()],2)],1)],1)],1)],1)},f=[],l=r("5530"),h=r("3640"),g={data:function(){return{appTitle:"SEND FOODZ",sidebar:!1,profileItems:[{title:"Sign Up",path:"/signup"},{title:"Log In",path:"/login"}],foodBankTabs:[{title:"Stores",path:"/available-grocery-stores"},{title:" Active Orders",path:"/orders"}]}},computed:Object(l["a"])({},Object(a["c"])({getUserType:"getUserType",getId:"getId",getEmail:"getEmail",getOrderFromGroceryStore:"getOrderFromGroceryStore"}),{groceryStoreTabs:function(){return[{title:"Inventory",path:"/grocery-store/"+this.getId+"/inventory"},{title:" Active Orders",path:"/orders"}]},tabsMenu:function(){return"Food Bank"===this.getUserType?this.foodBankTabs:"Grocery Store"===this.getUserType?this.groceryStoreTabs:this.profileItems}}),methods:{logout:function(){h["a"].signout(),o["a"].push("login")}}},m=g,b=(r("f4eb"),r("2877")),y=r("6544"),v=r.n(y),k=r("5bc1"),w=r("4ca6"),S=r("62ad"),I=r("a523"),O=r("132d"),C=r("8860"),T=r("da13"),x=r("5d23"),E=r("f774"),P=r("0fd9"),j=r("71a3"),_=r("fe57"),A=r("71d9"),R=r("2a7f"),G=Object(b["a"])(m,d,f,!1,null,null,null),B=G.exports;v()(G,{VAppBarNavIcon:k["a"],VBadge:w["a"],VCol:S["a"],VContainer:I["a"],VIcon:O["a"],VList:C["a"],VListItem:T["a"],VListItemContent:x["a"],VNavigationDrawer:E["a"],VRow:P["a"],VTab:j["a"],VTabs:_["a"],VToolbar:A["a"],VToolbarTitle:R["a"]});var F={name:"App",components:{NavBar:B}},N=F,U=(r("3550"),r("7496")),D=r("a75b"),V=Object(b["a"])(N,u,p,!1,null,"03017d58",null),L=V.exports;v()(V,{VApp:U["a"],VContent:D["a"]}),n["a"].config.productionTip=!1,n["a"].use(a["a"]),new n["a"]({store:s["a"],router:o["a"],vuetify:c,render:function(e){return e(L)}}).$mount("#app")},9101:function(e,t,r){"use strict";r("7db0"),r("4160"),r("c975"),r("a434"),r("b0c0"),r("159b"),r("96cf");var n=r("1da1"),a=r("3835"),o=r("5530"),i=r("2b0e"),c=r("2f62"),s=r("369b"),u=r.n(s),p=r("bc3a"),d=r.n(p),f=r("3317"),l=r("0e44"),h=r("3640");i["a"].use(c["a"],d.a,f["b"]);var g="https://us-central1-send-foodz-1a677.cloudfunctions.net/app",m=new c["a"].Store({state:{id:"",email:"",token:"",tokenExpiry:new Date,inventoryItems:[],groceryStores:[],activeOrders:[],userType:"",shoppingCart:[],shoppingCartGroceryStoreId:"",showPopupStartNewShoppingCart:!1,showCheckoutError:!1,showSuccessfullOrderPlace:!1},getters:{getAllInventoryItems:function(e){return e.inventoryItems},getAllGroceryStores:function(e){return e.groceryStores},getActiveOrders:function(e){return e.activeOrders},getId:function(e){return e.id},getUserType:function(e){return e.userType},getEmail:function(e){return e.email},getOrderFromGroceryStore:function(e){return e.shoppingCart},getShoppingCartGroceryStoreId:function(e){return e.shoppingCartGroceryStoreId},getShowPopupStartNewShoppingCart:function(e){return e.showPopupStartNewShoppingCart},getShoppingCart:function(e){return e.shoppingCart},getShoppingCartIndex:function(e){return function(t){return e.shoppingCart.indexOf(e.shoppingCart.find((function(e){return e.id==t})))}},getShowCheckoutError:function(e){return e.showCheckoutError},getShowSuccessfullOrderPlace:function(e){return e.showSuccessfullOrderPlace}},mutations:Object(o["a"])({},f["b"],{setId:function(e,t){e.id=t},setEmail:function(e,t){e.email=t},setUserType:function(e,t){e.userType=t},setShoppingCartGroceryStoreId:function(e,t){e.shoppingCartGroceryStoreId=t},setShowPopupStartNewShoppingCart:function(e,t){e.showPopupStartNewShoppingCart=t},setShowCheckoutError:function(e,t){e.showCheckoutError=t},setShowSuccessfullOrderPlace:function(e,t){e.showSuccessfullOrderPlace=t},addInventoryItemToCart:function(e,t){t.quantity>0&&(t.item.quantity=t.quantity,e.shoppingCart.push(t.item))},updateInventoryItemInCart:function(e,t){e.shoppingCart[t.index].quantity=t.quantity},removeInventoryItemFromCart:function(e,t){e.shoppingCart.splice(t,1)},clearShoppingCart:function(e){e.shoppingCart=[]}}),actions:{bindInventoryItems:Object(f["a"])((function(e,t){var r=e.bindFirestoreRef;r("inventoryItems",h["a"].firestore().collection("GroceryStores").doc(t).collection("InventoryCollection").doc("Items"))})),bindActiveOrders:Object(f["a"])((function(e){var t,r=e.bindFirestoreRef,n=e.state;"Grocery Store"===n.userType?t="groceryStoreId":"Food Bank"===n.userType&&(t="foodBankId"),r("activeOrders",h["a"].firestore().collection("Orders").where(t,"==",n.id).where("status","in",["Looking For Driver","Driver on route for pick up","Inventory picked up"]))})),bindGroceryStores:Object(f["a"])((function(e){var t=e.bindFirestoreRef;t("groceryStores",h["a"].firestore().collection("GroceryStores"))})),updateOrderStatus:Object(f["a"])((function(e,t){d.a.post(g+"/order/statusUpdate",{id:t.id,status:t.status})})),postInventoryItems:function(e,t){void 0!==t&&u.a.parse(t,{complete:function(t){var r=[];t.data.forEach((function(t){r.push({id:t[0],name:t[1],brand:t[2],groceryStoreId:e.state.id,quantity:t[4],expirationDate:t[5]})})),d.a.post(g+"/groceryStore/updateInventory",{groceryStoreId:e.state.id,ediOrderNumber:"124AZ",inventory:r})}})},deleteInventoryItems:function(e,t){d.a.post(g+"/groceryStore/removeInventoryItem",{groceryStoreId:t.groceryStoreId,id:t.id})},postOrder:function(e){d.a.post(g+"/foodBank/placeOrder",{status:"Looking For Driver",groceryStoreId:e.state.shoppingCartGroceryStoreId,foodBankId:e.state.id,inventory:e.state.shoppingCart}).then((function(t){200==t.status&&("Order is unable to completed"===t.data.status?e.state.showCheckoutError=!0:(e.state.showSuccessfullOrderPlace=!0,e.state.shoppingCart=[]))}))},postAccountUpdate:function(e,t){var r=Object(a["a"])(t,5),n=r[0],o=r[1],i=r[2],c=r[3],s=r[4],u=g,p={id:o,address:s};return"Food Bank"===n?(u+="/foodBank/updateUserAccount",p.name=i,p.locationId=c):"Grocery Store"===n&&(u+="/groceryStore/updateUserAccount",p.company=i,p.storeNumber=c),d.a.post(u,p)},postCheckAccountType:function(e,t){return d.a.post(g+"/auth/checkUserType",{id:t,type:"Food Bank"===e.type?"Foodbanks":"GroceryStores"})}},plugins:[Object(l["a"])()]});d.a.interceptors.request.use(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(void 0!==m.state.tokenExpiry&&(new Date).getTime()>m.state.tokenExpiry.getTime()||""===m.state.token)){e.next=3;break}return e.next=3,h["a"].refreshToken();case 3:return r=m.state.token,t.headers.Authorization="Bearer "+r,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t["a"]=m},a18c:function(e,t,r){"use strict";r("b0c0"),r("d3b7");var n=r("2b0e"),a=r("8c4f"),o=r("9101");n["a"].use(a["a"]);var i=[{path:"/grocery-store/:id/inventory",name:"inventory",component:function(){return Promise.all([r.e("chunk-6559ff90"),r.e("chunk-70718824"),r.e("chunk-3d015816")]).then(r.bind(null,"fbb2"))}},{path:"/available-grocery-stores",name:"availableGroceryStores",component:function(){return r.e("chunk-4dfece10").then(r.bind(null,"a616"))}},{path:"/signup",name:"signup",component:function(){return Promise.all([r.e("chunk-70718824"),r.e("chunk-b3990a20")]).then(r.bind(null,"5c9c"))}},{path:"/login",name:"login",component:function(){return Promise.all([r.e("chunk-70718824"),r.e("chunk-2b706f5b")]).then(r.bind(null,"9ddf"))}},{path:"/orders",name:"orders",component:function(){return Promise.all([r.e("chunk-6559ff90"),r.e("chunk-2e6f81c5")]).then(r.bind(null,"5e81"))}},{path:"/cart",name:"cart",component:function(){return Promise.all([r.e("chunk-6559ff90"),r.e("chunk-2a85ec00")]).then(r.bind(null,"b789"))}}],c=new a["a"]({mode:"history",base:"/",routes:i});c.beforeEach((function(e,t,r){"login"!==e.name&&"signup"!==e.name&&""===o["a"].state.id?r({name:"login"}):r()})),t["a"]=c},f4eb:function(e,t,r){"use strict";var n=r("4e92"),a=r.n(n);a.a}});
//# sourceMappingURL=app.baaa787b.js.map