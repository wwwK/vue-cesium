(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0Yzd":function(s,t,a){s.exports=a("f0QH")},"K5/G":function(s,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("PlaneGraphics")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Examples")]),s._v(" "),a("h3",[s._v("add a PlaneGraphics to viewer with entity")]),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready}},[a("entity",{attrs:{position:s.position1,description:s.description,plane:s.planeEntity1},on:{"update:plane":function(t){s.planeEntity1=t}}},[a("plane-graphics",{attrs:{plane:s.plane1,dimensions:s.dimensions1,material:s.material1}})],1),s._v(" "),a("entity",{attrs:{position:s.position2,description:s.description,plane:s.planeEntity2},on:{"update:plane":function(t){s.planeEntity2=t}}},[a("plane-graphics",{attrs:{plane:s.plane2,dimensions:s.dimensions2,material:s.material2,outline:!0,outlineColor:s.outlineColor2}})],1),s._v(" "),a("entity",{attrs:{position:s.position3,description:s.description,plane:s.planeEntity3},on:{"update:plane":function(t){s.planeEntity3=t}}},[a("plane-graphics",{attrs:{plane:s.plane3,dimensions:s.dimensions3,fill:!1,outline:!0,outlineColor:s.outlineColor3},on:{ready:s.subReady}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(4)],1)},r=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("plane-graphics")]),this._v(" Add an entity containing a plane object to the viewer as a subcomponent of "),t("code",{pre:!0},[this._v("entity")]),this._v(". Describes a plane. The center position and orientation are determined by the containing Entity. As shown in the example below.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":plane.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"planeEntity1"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("plane-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":plane")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"plane1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":dimensions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"dimensions1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("plane-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":plane.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"planeEntity2"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("plane-graphics")]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":plane")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"plane2"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":dimensions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"dimensions2"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor2"')]),s._v("\n        >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("plane-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":plane.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"planeEntity3"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("plane-graphics")]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":plane")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"plane3"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":dimensions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"dimensions3"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":fill")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor3"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"subReady"')]),s._v("\n        >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("plane-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position1")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("114.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("planeEntity1")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("plane1")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("normal")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" }, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("distance")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("dimensions1")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("400000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'BLUE'")]),s._v(",\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position2")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("107.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("planeEntity2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("plane2")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("normal")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" }, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("distance")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("dimensions2")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("400000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor2")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'BLACK'")]),s._v(",\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position3")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("planeEntity3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("plane3")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("normal")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(" }, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("distance")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("dimensions3")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("400000.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor3")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'YELLOW'")]),s._v("\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material2 = Cesium.Color.RED.withAlpha("),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n      },\n      subReady(cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        viewer.zoomTo(viewer.entities)\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("default")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A boolean Property specifying the visibility of the plane.")])]),s._v(" "),a("tr",[a("td",[s._v("plane")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A Plane Property specifying the normal and distance for the plane. "),a("strong",[s._v("structure: { normal: { x: number, y: number, z: number }, distance: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("dimensions")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A Cartesian2 Property specifying the width and height of the plane. "),a("strong",[s._v("structure: { x: number, y: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("fill")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A boolean Property specifying whether the plane is filled with the provided material.")])]),s._v(" "),a("tr",[a("td",[s._v("material")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'WHITE'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying the material used to fill the plane.")])]),s._v(" "),a("tr",[a("td",[s._v("outline")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A boolean Property specifying whether the plane is outlined.")])]),s._v(" "),a("tr",[a("td",[s._v("outlineColor")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'BLACK'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying the Color of the outline.")])]),s._v(" "),a("tr",[a("td",[s._v("outlineWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A numeric Property specifying the width of the outline.")])]),s._v(" "),a("tr",[a("td",[s._v("shadows")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" An enum Property specifying whether the plane casts or receives shadows from each light source. "),a("strong",[s._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")])])]),s._v(" "),a("tr",[a("td",[s._v("distanceDisplayCondition")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying at what distance from the camera that this plane will be displayed. "),a("strong",[s._v("structure: { near: number, far: number }")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("Reference official document "),t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PlaneGraphics.html"}},[this._v("PlaneGraphics")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.")])]),s._v(" "),a("tr",[a("td",[s._v("definitionChanged")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Gets the event that is raised whenever a property or sub-property is changed or modified.")])])])])}]},f0QH:function(s,t,a){"use strict";a.r(t);var n=a("u/Og"),r=a.n(n);for(var l in n)"default"!==l&&function(s){a.d(t,s,function(){return n[s]})}(l);var e=a("K5/G"),v=a("JFUb"),_=Object(v.a)(r.a,e.a,e.b,!1,null,null,null);t.default=_.exports},"u/Og":function(s,t,a){var n,r,l;r=[t],void 0===(l="function"==typeof(n=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{description:"Hello Vue Cesium",position1:{lng:114,lat:40,height:3e5},planeEntity1:{},plane1:{normal:{x:1,y:0,z:0},distance:0},dimensions1:{x:4e5,y:3e5},material1:"BLUE",position2:{lng:107,lat:40,height:3e5},planeEntity2:{},plane2:{normal:{x:0,y:1,z:0},distance:0},dimensions2:{x:4e5,y:3e5},material2:{},outlineColor2:"BLACK",position3:{lng:100,lat:40,height:3e5},planeEntity3:{},plane3:{normal:{x:0,y:0,z:1},distance:0},dimensions3:{x:4e5,y:3e5},outlineColor3:"YELLOW"}},methods:{ready:function(s){var t=s.Cesium;s.viewer,this.material2=t.Color.RED.withAlpha(.5)},subReady:function(s){s.Cesium;var t=s.viewer;t.zoomTo(t.entities)}}},s.exports=t.default})?n.apply(t,r):n)||(s.exports=l)}}]);