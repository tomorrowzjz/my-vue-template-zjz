webpackJsonp([58],{R7AA:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("u4Bf"),l=s.n(n),i={name:"MenuChild",components:{draggable:l.a},props:{childs:{type:Array,default:function(){return[]}}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("draggable",{staticClass:"dragArea",attrs:{list:e.childs,options:{draggable:".item",group:"pages"},element:"ul"}},e._l(e.childs,function(t){return s("li",{key:t.id,staticClass:"item"},[s("div",[e._v(e._s(t.title))]),e._v(" "),t.children&&t.children.length>0?[s("menu-child",{attrs:{childs:t.children}})]:e._e()],2)}))},staticRenderFns:[]},r=s("VU/8")(i,a,!1,null,null,null).exports,d={components:{draggable:l.a,MenuChild:r},data:function(){return{pages:[{id:2,title:"About",nests:[{id:12,title:"East Esperanza12",nests:[{id:13,title:"winborough13",nests:null}]}]},{id:5,title:"East Shaylee",nests:[{id:6,title:"Einoborough",nests:[{id:7,title:"East Esperanza",nests:[{id:8,title:"winborough",nests:null}]}]},{id:9,title:"Einoborough9",nests:[{id:10,title:"East Esperanza10",nests:[{id:11,title:"winborough11",nests:null}]}]}]}]}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("draggable",{staticClass:"dragArea",attrs:{options:{draggable:".item",group:"pages"},element:"ul"},model:{value:e.pages,callback:function(t){e.pages=t},expression:"pages"}},e._l(e.pages,function(t){return s("li",{key:t.id,staticClass:"item"},[s("div",[e._v(e._s(t.title))]),e._v(" "),t.nests&&t.nests.length>0?[s("menu-child",{attrs:{childs:t.nests}})]:e._e()],2)}))},staticRenderFns:[]},o=s("VU/8")(d,u,!1,null,null,null);t.default=o.exports}});