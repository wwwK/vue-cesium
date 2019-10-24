(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"2Tk1":function(t,s,a){"use strict";a.d(s,"a",function(){return e}),a.d(s,"b",function(){return r});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("ImageryLayer")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Examples")]),t._v(" "),a("h3",[t._v("add a ImageryLayer with mapbox-imagery-provider to viewer")]),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:t.ready}},[a("imagery-layer",{attrs:{alpha:t.alpha,brightness:t.brightness,contrast:t.contrast}},[a("mapbox-imagery-provider",{attrs:{mapId:t.mapId}})],1)],1),t._v(" "),a("div",{staticClass:"demo-tool"},[a("span",[t._v("alpha")]),t._v(" "),a("vue-slider",{attrs:{min:0,max:1,interval:.01},model:{value:t.alpha,callback:function(s){t.alpha=s},expression:"alpha"}}),t._v(" "),a("span",[t._v("brightness")]),t._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:t.brightness,callback:function(s){t.brightness=s},expression:"brightness"}}),t._v(" "),a("span",[t._v("contrast")]),t._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:t.contrast,callback:function(s){t.contrast=s},expression:"contrast"}}),t._v(" "),a("span",[t._v("switch url")]),t._v(" "),a("md-select",{attrs:{placeholder:"switch url"},model:{value:t.mapId,callback:function(s){t.mapId=s},expression:"mapId"}},t._l(t.options,function(s){return a("md-option",{key:s.value,attrs:{value:s.value}},[t._v("\n            "+t._s(s.label)+"\n          ")])}))],1)],1)]],2),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(4)],1)},r=[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("imagery-layer")]),this._v("can be loaded into the viewer and needs to be used in conjunction with the imagery provider.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("cesium-viewer")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("imagery-layer")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":alpha")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"alpha"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":brightness")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"brightness"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":contrast")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"contrast"')]),t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("mapbox-imagery-provider")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":mapId")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"mapId"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("mapbox-imagery-provider")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("imagery-layer")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("cesium-viewer")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"demo-tool"')]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("alpha"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("vue-slider")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"alpha"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":min")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"0"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":max")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"1"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":interval")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"0.01"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("vue-slider")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("brightness"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("vue-slider")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"brightness"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":min")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"0"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":max")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"3"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":interval")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"0.01"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("vue-slider")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("contrast"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("vue-slider")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"contrast"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":min")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"0"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":max")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"3"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":interval")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"0.01"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("vue-slider")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("switch url"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("md-select")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"mapId"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"switch url"')]),t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("md-option")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"item in options"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"item.value"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"item.value"')]),t._v(">")]),t._v("\n          {{item.label}}\n        "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("md-option")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("md-select")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("mapId")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'mapbox.streets'")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("options")]),t._v(": [\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'mapbox.satellite'")]),t._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'satellite'")]),t._v("\n          },\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'mapbox.streets'")]),t._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'streets'")]),t._v("\n          }\n        ],\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("alpha")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("1")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("brightness")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("1")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("contrast")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("1")]),t._v("\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{attrs:{class:"hljs-comment"}},[t._v("// ...")]),t._v("\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("alpha")]),t._v(" "),a("td",[t._v("Number|function")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("1.0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The alpha blending value of this layer, from 0.0 to 1.0. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the alpha is required, and it is expected to return the alpha value to use for the tile.")])]),t._v(" "),a("tr",[a("td",[t._v("brightness")]),t._v(" "),a("td",[t._v("Number|function")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("1.0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The brightness of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 makes the imagery darker while greater than 1.0 makes it brighter. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the brightness is required, and it is expected to return the brightness value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),t._v(" "),a("tr",[a("td",[t._v("contrast")]),t._v(" "),a("td",[t._v("Number|function")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("1.0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The contrast of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the contrast while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the contrast is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),t._v(" "),a("tr",[a("td",[t._v("hue")]),t._v(" "),a("td",[t._v("Number|function")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0.0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The hue of this layer. 0.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the hue is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),t._v(" "),a("tr",[a("td",[t._v("saturation")]),t._v(" "),a("td",[t._v("Number|function")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("1.0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The saturation of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the saturation while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the saturation is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),t._v(" "),a("tr",[a("td",[t._v("gamma")]),t._v(" "),a("td",[t._v("Number|function")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("1.0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The gamma correction to apply to this layer. 1.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the gamma is required, and it is expected to return the gamma value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),t._v(" "),a("tr",[a("td",[t._v("splitDirection")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The ImagerySplitDirection split to apply to this layer.  "),a("strong",[t._v("LEFT: -1, NONE: 0, RIGHT: 1")])])]),t._v(" "),a("tr",[a("td",[t._v("minificationFilter")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("9729")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" The texture minification filter to apply to this layer. Possible values are TextureMinificationFilter.LINEAR and TextureMinificationFilter.NEAREST. "),a("strong",[t._v("NEAREST: 9728, LINEAR: 9729, NEAREST_MIPMAP_NEAREST: 9984, LINEAR_MIPMAP_NEAREST: 9985, NEAREST_MIPMAP_LINEAR: 9986, NEAREST_MIPMAP_NEAREST: 9984")])])]),t._v(" "),a("tr",[a("td",[t._v("magnificationFilter")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("9729")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" The texture minification filter to apply to this layer. Possible values are TextureMagnificationFilter.LINEAR and TextureMagnificationFilter.NEAREST. "),a("strong",[t._v("NEAREST: 9728, LINEAR: 9729")])])]),t._v(" "),a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("true")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" True if the layer is shown; otherwise, false.")])]),t._v(" "),a("tr",[a("td",[t._v("maximumAnisotropy")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("maximum supported")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" The maximum anisotropy level to use for texture filtering. If this parameter is not specified, the maximum anisotropy supported by the WebGL stack will be used. Larger values make the imagery look better in horizon views.")])]),t._v(" "),a("tr",[a("td",[t._v("minimumTerrainLevel")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The minimum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.")])]),t._v(" "),a("tr",[a("td",[t._v("maximumTerrainLevel")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The maximum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.")])]),t._v(" "),a("tr",[a("td",[t._v("cutoutRectangle")]),t._v(" "),a("td",[t._v("Rectangle")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Cartographic rectangle for cutting out a portion of this ImageryLayer.")])]),t._v(" "),a("tr",[a("td",[t._v("colorToAlpha")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Color to be used as alpha.")])]),t._v(" "),a("tr",[a("td",[t._v("colorToAlphaThreshold")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0.004")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" Threshold for color-to-alpha.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Reference official document "),s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/ImageryLayer.html"}},[this._v("ImageryLayer")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ready")]),t._v(" "),a("td",[t._v("{Cesium, viewer}")]),t._v(" "),a("td",[t._v("Triggers when ImageryLayer is ready. It returns a core class of Cesium, a viewer instance.")])])])])}]},"8nSs":function(t,s,a){"use strict";a.r(s);var e=a("Mawr"),r=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(s,t,function(){return e[t]})}(n);var l=a("2Tk1"),v=a("JFUb"),i=Object(v.a)(r.a,l.a,l.b,!1,null,null,null);s.default=i.exports},Mawr:function(t,s,a){var e,r,n;r=[s],void 0===(n="function"==typeof(e=function(s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{mapId:"mapbox.streets",options:[{value:"mapbox.satellite",label:"satellite"},{value:"mapbox.streets",label:"streets"}],alpha:1,brightness:1,contrast:1}},methods:{ready:function(t){t.Cesium,t.viewer}}},t.exports=s.default})?e.apply(s,r):e)||(t.exports=n)},zrnS:function(t,s,a){t.exports=a("8nSs")}}]);