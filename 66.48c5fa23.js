(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"+xeE":function(s,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return v});var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("六面体盒子")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("添加六面体盒子到场景")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready}},[a("entity",{attrs:{position:s.position1,description:s.description,box:s.box1},on:{"update:box":function(t){s.box1=t}}},[a("box-graphics",{attrs:{dimensions:s.dimensions1,material:s.material1}})],1),s._v(" "),a("entity",{attrs:{position:s.position2,description:s.description,box:s.box2},on:{"update:box":function(t){s.box2=t}}},[a("box-graphics",{attrs:{dimensions:s.dimensions2,material:s.material2,outlineColor:s.outlineColor2,outline:!0}})],1),s._v(" "),a("entity",{attrs:{position:s.position3,description:s.description,box:s.box3},on:{"update:box":function(t){s.box3=t}}},[a("box-graphics",{attrs:{dimensions:s.dimensions3,outlineColor:s.outlineColor3,fill:!1,outline:!0}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4)],1)},v=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("box-graphics")]),this._v(" 六面体盒子组件，作为"),t("code",{pre:!0},[this._v("entity")]),this._v("的子组件添加包含六面体盒子对象的实体到场景。六面体盒子对象描述的是一个框，中心位置和方向由包含实体确定，如示例所示。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":box.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"box1"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("box-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":dimensions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"dimensions1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("box-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":box.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"box2"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("box-graphics")]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":dimensions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"dimensions2"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor2"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n        >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("box-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":box.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"box3"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("box-graphics")]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":dimensions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"dimensions3"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor3"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":fill")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n        >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("box-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("box1")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position1")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("dimensions1")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("400000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("500000.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'BLUE'")]),s._v(",\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("box2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position2")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("110.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("dimensions2")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("400000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("500000.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor2")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'BLACK'")]),s._v(",\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("box3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position3")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("dimensions3")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("400000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("500000.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor3")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'YELLOW'")]),s._v("\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material2 = Cesium.Color.RED.withAlpha("),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 box 是否可见。")])]),s._v(" "),a("tr",[a("td",[s._v("dimensions")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 box 的长宽高。 "),a("strong",[s._v("结构：{ x: number, y: number, z: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("heightReference")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 box 高度模式。 "),a("strong",[s._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),s._v(" "),a("tr",[a("td",[s._v("fill")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 box 是否按提供的材质填充。")])]),s._v(" "),a("tr",[a("td",[s._v("material")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'WHITE'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 box 材质。")])]),s._v(" "),a("tr",[a("td",[s._v("outline")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否绘制 box 轮廓线。")])]),s._v(" "),a("tr",[a("td",[s._v("outlineColor")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'BLACK'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否绘制 box 轮廓线的颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("outlineWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定绘制 box 轮廓线的宽度。")])]),s._v(" "),a("tr",[a("td",[s._v("shadows")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定这些是否投射或接收来自每个光源的阴影。 "),a("strong",[s._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")])])]),s._v(" "),a("tr",[a("td",[s._v("distanceDisplayCondition")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 box 显示条件。 "),a("strong",[s._v("结构：{ near: number, far: number }")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("官方文档 "),t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/BoxGraphics.html"}},[this._v("BoxGraphics")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。")])]),s._v(" "),a("tr",[a("td",[s._v("definitionChanged")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("每当更改或修改属性或子属性时触发该事件。")])])])])}]},AZ5S:function(s,t,a){"use strict";a.r(t);var n=a("Ws3l"),v=a.n(n);for(var _ in n)"default"!==_&&function(s){a.d(t,s,function(){return n[s]})}(_);var r=a("+xeE"),l=a("JFUb"),e=Object(l.a)(v.a,r.a,r.b,!1,null,null,null);t.default=e.exports},Tnky:function(s,t,a){s.exports=a("AZ5S")},Ws3l:function(s,t,a){var n,v,_;v=[t],void 0===(_="function"==typeof(n=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{description:"Hello Vue Cesium",box1:{},position1:{lng:105,lat:40,height:3e5},dimensions1:{x:4e5,y:3e5,z:5e5},material1:"BLUE",box2:{},position2:{lng:110,lat:40,height:3e5},dimensions2:{x:4e5,y:3e5,z:5e5},material2:{},outlineColor2:"BLACK",box3:{},position3:{lng:100,lat:40,height:3e5},dimensions3:{x:4e5,y:3e5,z:5e5},outlineColor3:"YELLOW"}},methods:{ready:function(s){var t=s.Cesium;s.viewer,this.material2=t.Color.RED.withAlpha(.5)}}},s.exports=t.default})?n.apply(t,v):n)||(s.exports=_)}}]);