(function(t){function e(e){for(var r,i,u=e[0],c=e[1],l=e[2],s=0,f=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/todoapp-vue-client/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Todos")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"header-title"},[t._v("Marvelous v2.0")]),n("div",{staticClass:"delete-all-btn",on:{click:t.deleteAll}},[t._v("Delete all tasks")]),n("div",{staticClass:"flex-container"},[n("div",[n("el-input",{staticClass:"inline-block filter-input",attrs:{placeholder:"Add task"},model:{value:t.what,callback:function(e){t.what=e},expression:"what"}}),n("el-button",{staticClass:"inline-block",attrs:{type:"primary",icon:"el-icon-add"},on:{click:t.add}},[t._v("Add")])],1),n("el-input",{staticClass:"filter-input",attrs:{placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("div",{staticClass:"flex-container"},[n("div",{staticClass:"todo-list"},[n("h3",[t._v("To Do")]),n("div",{staticClass:"border-r"},t._l(t.todo,(function(e){return n("label",{key:e.id,staticClass:"todo-item",attrs:{for:e.id},on:{click:function(n){return t.todoClicked(e)}}},[n("el-checkbox",{attrs:{id:e.id,value:e.done}}),t._v(" "+t._s(e.what)+" ")],1)})),0)]),n("div",{staticClass:"todo-list"},[n("h3",[t._v("To Do")]),n("div",t._l(t.done,(function(e){return n("label",{key:e.id,staticClass:"todo-item",attrs:{for:e.id},on:{click:function(n){return t.todoClicked(e)}}},[n("el-checkbox",{attrs:{id:e.id,value:e.done}}),t._v(" "+t._s(e.what)+" ")],1)})),0)])])])},u=[],c=(n("4de4"),n("c975"),n("ac1f"),n("841c"),n("96cf"),n("1da1")),l=n("8785"),d=n("9530"),s=n.n(d);function f(){var t=Object(l["a"])(["\n\tmutation todoDeleteAll {\n\t\ttodoDeleteAll\n\t}"]);return f=function(){return t},t}function p(){var t=Object(l["a"])(["\n\tmutation todoUpdate($id: ID!, $what: String, $done: Boolean) {\n\t\ttodoUpdate(id: $id, what: $what, done: $done) {\n\t\t\tid\n\t\t\twhat\n\t\t\tdone\n\t\t}\n\t}"]);return p=function(){return t},t}function h(){var t=Object(l["a"])(["\n\tmutation todoCreate($what: String!) {\n\t\ttodoCreate(what: $what) {\n\t\t\tid\n\t\t}\n\t}"]);return h=function(){return t},t}function v(){var t=Object(l["a"])(["\n\tquery {\n\t\ttodos {\n\t\t\tid\n\t\t\twhat\n\t\t\tdone\n\t\t}\n\t}"]);return v=function(){return t},t}var w=s()(v()),b=s()(h()),m=s()(p()),y=s()(f()),g={components:{},apollo:{todos:{query:w,loadingKey:"loading"}},computed:{todo:function(){var t=this;return this.todos.filter((function(e){return!e.done&&t.searchFilter(e.what)}))},done:function(){var t=this;return this.todos.filter((function(e){return e.done&&t.searchFilter(e.what)}))}},data:function(){return{loading:0,error:null,todos:[],what:"",search:""}},methods:{searchFilter:function(t){return!this.search||-1!==t.toLowerCase().indexOf(this.search.toLowerCase())},add:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.what,e.next=3,t.$apollo.mutate({mutation:b,variables:{what:n},update:function(t,e){var r=e.data.todoCreate;if(r){var o=t.readQuery({query:w}),a={__typename:"Todo",id:r.id,what:n,done:!1};o.todos.push(a),t.writeQuery({query:w,data:o})}}});case 3:t.what="";case 4:case"end":return e.stop()}}),e)})))()},update:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0;return Object(c["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,e.$apollo.mutate({mutation:m,variables:{id:t,what:r,done:n}});case 2:case"end":return o.stop()}}),o)})))()},todoClicked:function(t){this.update(t.id,!t.done)},deleteAll:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$apollo.mutate({mutation:y,update:function(t,e){var n=e.data.todoDeleteAll;n&&t.writeQuery({query:w,data:{todos:[]}})}});case 2:case"end":return e.stop()}}),e)})))()}}},k=g,x=(n("f471"),n("2877")),_=Object(x["a"])(k,i,u,!1,null,null,null),C=_.exports,O={name:"App",components:{Todos:C}},j=O,$=(n("034f"),Object(x["a"])(j,o,a,!1,null,null,null)),P=$.exports,q=n("2bf2"),A=n("74ca"),S=n("d634"),T=n("23bd"),D=n("0125"),R=function(t){return S["a"].from([new D["a"]({delay:{initial:500,max:1/0,jitter:!0},attempts:{max:3,retryIf:function(t){return!!t}}}),new T["a"]({uri:t})])},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new q["a"];return new A["a"]({cache:e,defaultOptions:{mutate:{errorPolicy:"all"},query:{errorPolicy:"all",fetchPolicy:"network-only"},watchQuery:{errorPolicy:"all",fetchPolicy:"cache-and-network"}},link:R(t)})},Q=n("522d"),F=n("5c96"),E=n.n(F);n("0fae");r["default"].use(E.a),r["default"].config.productionTip=!1,r["default"].use(Q["a"]);var I="https://todoapp-graphql-server.herokuapp.com/graphql",J=new Q["a"]({defaultClient:M(I)});new r["default"]({apolloProvider:J,render:function(t){return t(P)}}).$mount("#app")},"85ec":function(t,e,n){},ce9b:function(t,e,n){},f471:function(t,e,n){"use strict";var r=n("ce9b"),o=n.n(r);o.a}});
//# sourceMappingURL=app.bf7ab312.js.map