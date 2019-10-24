(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{"2gqY":function(s,a,t){var l,n,r;n=[a,t("2Pi3")],void 0===(r="function"==typeof(l=function(a,t){"use strict";function l(s){if(Array.isArray(s)){for(var a=0,t=Array(s.length);a<s.length;a++)t[a]=s[a];return t}return Array.from(s)}Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{urlLayer:"./statics/SampleData/worldimage.jpg",urlNetCDF:"./statics/SampleData/windData/demo.nc",windData:{},options:[{label:"Global Data",value:1},{label:"China Data",value:2}],data:0,particleSystemOptions:{particlesTextureSize:128,maxParticles:16384,particleHeight:100,fadeOpacity:.996,dropRate:.003,dropRateBump:.01,speedFactor:4,lineWidth:4}}},methods:{ready:function(s){this.cesiumInstance=s,this.data=1,this.switchData(1)},switchData:function(s){var a=this.cesiumInstance,t=a.Cesium,l=(a.viewer,this);1===s?this.loadNetCDF(this.urlNetCDF).then(function(s){l.windData=s}):2===s&&t.Resource.fetchJson({url:"./statics/SampleData/windData/wind.json"}).then(function(s){s.lat.array=new Float32Array(s.lon.array),s.lat.array=new Float32Array(s.lat.array),s.lev.array=new Float32Array(s.lev.array),s.U.array=new Float32Array(s.U.array),s.V.array=new Float32Array(s.V.array),l.windData=s})},loadNetCDF:async function(s){return new Promise(function(a){var n=new XMLHttpRequest;n.open("GET",s),n.responseType="arraybuffer",n.onload=function(){var s=function(s){return s.reduce(function(s,a){return s[a.name]=a,s},{})},r=new t(n.response),v={},e=s(r.dimensions);v.dimensions={},v.dimensions.lon=e.lon.size,v.dimensions.lat=e.lat.size,v.dimensions.lev=e.lev.size;var _=s(r.variables),i=s(_.U.attributes),p=s(_.V.attributes);v.lon={},v.lon.array=new Float32Array(r.getDataVariable("lon").flat()),v.lon.min=Math.min.apply(Math,l(v.lon.array)),v.lon.max=Math.max.apply(Math,l(v.lon.array)),v.lat={},v.lat.array=new Float32Array(r.getDataVariable("lat").flat()),v.lat.min=Math.min.apply(Math,l(v.lat.array)),v.lat.max=Math.max.apply(Math,l(v.lat.array)),v.lev={},v.lev.array=new Float32Array(r.getDataVariable("lev").flat()),v.lev.min=Math.min.apply(Math,l(v.lev.array)),v.lev.max=Math.max.apply(Math,l(v.lev.array)),v.U={},v.U.array=new Float32Array(r.getDataVariable("U").flat()),v.U.min=i.min.value,v.U.max=i.max.value,v.V={},v.V.array=new Float32Array(r.getDataVariable("V").flat()),v.V.min=p.min.value,v.V.max=p.max.value,a(v)},n.send()})}}},s.exports=a.default})?l.apply(a,n):l)||(s.exports=r)},H2lr:function(s,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return n});var l=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("风向图")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("添加风向图到场景")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("cesium-viewer",{attrs:{scene3DOnly:"",animation:"",timeline:""},on:{ready:s.ready}},[t("imagery-layer",[t("singletile-imagery-provider",{attrs:{url:s.urlLayer}})],1),s._v(" "),t("cesium-windmap",{ref:"windmap",attrs:{data:s.windData,particleSystemOptions:s.particleSystemOptions}})],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[s._v("maxParticles")]),s._v(" "),t("vue-slider",{attrs:{min:1,max:65536,interval:1},model:{value:s.particleSystemOptions.maxParticles,callback:function(a){s.$set(s.particleSystemOptions,"maxParticles",a)},expression:"particleSystemOptions.maxParticles"}}),s._v(" "),t("span",[s._v("particleHeight")]),s._v(" "),t("vue-slider",{attrs:{min:1,max:1e4,interval:1},model:{value:s.particleSystemOptions.particleHeight,callback:function(a){s.$set(s.particleSystemOptions,"particleHeight",a)},expression:"particleSystemOptions.particleHeight"}}),s._v(" "),t("span",[s._v("fadeOpacity")]),s._v(" "),t("vue-slider",{attrs:{min:.9,max:.999,interval:.001},model:{value:s.particleSystemOptions.fadeOpacity,callback:function(a){s.$set(s.particleSystemOptions,"fadeOpacity",a)},expression:"particleSystemOptions.fadeOpacity"}}),s._v(" "),t("span",[s._v("dropRate")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:.1,interval:.001},model:{value:s.particleSystemOptions.dropRate,callback:function(a){s.$set(s.particleSystemOptions,"dropRate",a)},expression:"particleSystemOptions.dropRate"}}),s._v(" "),t("span",[s._v("dropRateBump")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:.2,interval:.001},model:{value:s.particleSystemOptions.dropRateBump,callback:function(a){s.$set(s.particleSystemOptions,"dropRateBump",a)},expression:"particleSystemOptions.dropRateBump"}}),s._v(" "),t("span",[s._v("speedFactor")]),s._v(" "),t("vue-slider",{attrs:{min:.5,max:100,interval:.1},model:{value:s.particleSystemOptions.speedFactor,callback:function(a){s.$set(s.particleSystemOptions,"speedFactor",a)},expression:"particleSystemOptions.speedFactor"}}),s._v(" "),t("span",[s._v("lineWidth")]),s._v(" "),t("vue-slider",{attrs:{min:.01,max:16,interval:.01},model:{value:s.particleSystemOptions.lineWidth,callback:function(a){s.$set(s.particleSystemOptions,"lineWidth",a)},expression:"particleSystemOptions.lineWidth"}}),s._v(" "),t("span",[s._v("switch data")]),s._v(" "),t("md-select",{attrs:{placeholder:"切换数据"},on:{selected:s.switchData},model:{value:s.data,callback:function(a){s.data=a},expression:"data"}},s._l(s.options,function(a){return t("md-option",{key:a.value,attrs:{value:a.value}},[s._v("\n            "+s._s(a.label)+"\n          ")])}))],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(3),s._v(" "),t("h2",[s._v("Vue方法")]),s._v(" "),s._m(4),s._v(" "),t("h2",[s._v("其他说明")]),s._v(" "),s._m(5)],1)},n=[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("cesium-windmap")]),this._v(" 风向图")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("scene3DOnly")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("timeline")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("singletile-imagery-provider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"urlLayer"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("singletile-imagery-provider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-windmap")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"windmap"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"windData"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":particleSystemOptions")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-windmap")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("maxParticles"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.maxParticles"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"65536"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("particleHeight"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.particleHeight"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"10000"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("fadeOpacity"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.fadeOpacity"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.90"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.999"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.001"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("dropRate"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.dropRate"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.001"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("dropRateBump"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.dropRateBump"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.001"')]),s._v(" >")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("speedFactor"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.speedFactor"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.5"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.1"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("lineWidth"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"particleSystemOptions.lineWidth"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"16"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("switch data"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"切换数据"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@selected")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"switchData"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v("\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item in options"')]),s._v("\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v("\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(">")]),s._v("\n          {{item.label}}\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" NetCDFReader = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'netcdfjs'")]),s._v(")\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("urlLayer")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/worldimage.jpg'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("urlNetCDF")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/windData/demo.nc'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("windData")]),s._v(": {},\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Global Data'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n        }, {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'China Data'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n        }],\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("particleSystemOptions")]),s._v(": {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("particlesTextureSize")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("128")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("maxParticles")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("128")]),s._v(" * "),t("span",{attrs:{class:"hljs-number"}},[s._v("128")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("particleHeight")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("fadeOpacity")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.996")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("dropRate")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.003")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("dropRateBump")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.01")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("speedFactor")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("4.0")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("4.0")]),s._v("\n        },\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".data = "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".switchData("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n      },\n      switchData (val) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" _this = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (val === "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("){\n          "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loadNetCDF("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".urlNetCDF).then("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("data")]),s._v(")=>")]),s._v("{\n            _this.windData = data\n          })\n        } "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (val === "),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v("){\n          Cesium.Resource.fetchJson({ "),t("span",{attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'./statics/data/wind.json'")]),s._v(" }).then("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("data")]),s._v(") =>")]),s._v(" {\n            data.lat.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(data.lon.array)\n            data.lat.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(data.lat.array)\n            data.lev.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(data.lev.array)\n            data.U.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(data.U.array)\n            data.V.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(data.V.array)\n            _this.windData = data\n          })\n        }\n      },\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("async")]),s._v(" loadNetCDF (filePath) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" _this = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}},[s._v("resolve")]),s._v(") ")]),s._v("{\n          "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" request = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" XMLHttpRequest()\n          request.open("),t("span",{attrs:{class:"hljs-string"}},[s._v("'GET'")]),s._v(", filePath)\n          request.responseType = "),t("span",{attrs:{class:"hljs-string"}},[s._v("'arraybuffer'")]),s._v("\n          request.onload = "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" arrayToMap = "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}},[s._v("array")]),s._v(") ")]),s._v("{\n              "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" array.reduce("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}},[s._v("map, object")]),s._v(") ")]),s._v("{\n                map[object.name] = object\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" map\n              }, {})\n            }\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" NetCDF = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" NetCDFReader(request.response)\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" data = {}\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" dimensions = arrayToMap(NetCDF.dimensions)\n            data.dimensions = {}\n            data.dimensions.lon = dimensions["),t("span",{attrs:{class:"hljs-string"}},[s._v("'lon'")]),s._v("].size\n            data.dimensions.lat = dimensions["),t("span",{attrs:{class:"hljs-string"}},[s._v("'lat'")]),s._v("].size\n            data.dimensions.lev = dimensions["),t("span",{attrs:{class:"hljs-string"}},[s._v("'lev'")]),s._v("].size\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" variables = arrayToMap(NetCDF.variables)\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" uAttributes = arrayToMap(variables["),t("span",{attrs:{class:"hljs-string"}},[s._v("'U'")]),s._v("].attributes)\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" vAttributes = arrayToMap(variables["),t("span",{attrs:{class:"hljs-string"}},[s._v("'V'")]),s._v("].attributes)\n            data.lon = {}\n            data.lon.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(NetCDF.getDataVariable("),t("span",{attrs:{class:"hljs-string"}},[s._v("'lon'")]),s._v(").flat())\n            data.lon.min = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".min(...data.lon.array)\n            data.lon.max = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".max(...data.lon.array)\n            data.lat = {}\n            data.lat.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(NetCDF.getDataVariable("),t("span",{attrs:{class:"hljs-string"}},[s._v("'lat'")]),s._v(").flat())\n            data.lat.min = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".min(...data.lat.array)\n            data.lat.max = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".max(...data.lat.array)\n            data.lev = {}\n            data.lev.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(NetCDF.getDataVariable("),t("span",{attrs:{class:"hljs-string"}},[s._v("'lev'")]),s._v(").flat())\n            data.lev.min = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".min(...data.lev.array)\n            data.lev.max = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".max(...data.lev.array)\n            data.U = {}\n            data.U.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(NetCDF.getDataVariable("),t("span",{attrs:{class:"hljs-string"}},[s._v("'U'")]),s._v(").flat())\n            data.U.min = uAttributes["),t("span",{attrs:{class:"hljs-string"}},[s._v("'min'")]),s._v("].value\n            data.U.max = uAttributes["),t("span",{attrs:{class:"hljs-string"}},[s._v("'max'")]),s._v("].value\n            data.V = {}\n            data.V.array = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Float32Array")]),s._v("(NetCDF.getDataVariable("),t("span",{attrs:{class:"hljs-string"}},[s._v("'V'")]),s._v(").flat())\n            data.V.min = vAttributes["),t("span",{attrs:{class:"hljs-string"}},[s._v("'min'")]),s._v("].value\n            data.V.max = vAttributes["),t("span",{attrs:{class:"hljs-string"}},[s._v("'max'")]),s._v("].value\n            resolve(data)\n          }\n          request.send()\n        })\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("data")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("required")]),s._v(" 指定风向数据。")])]),s._v(" "),t("tr",[t("td",[s._v("particleSystemOptions")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定粒子参数。")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回Cesium类, viewer实例。")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("方法名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("destroy")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("清除风向图。")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ul",[t("li",[s._v("实现思路和着色代码（GLSL）都来自大神"),t("code",{pre:!0},[s._v("RaymanNg")]),s._v("的"),t("a",{attrs:{href:"https://github.com/RaymanNg/3D-Wind-Field"}},[s._v("3D-Wind-Field")]),s._v("，感谢大神的贡献，我只是搬运到支持vue了。")]),s._v(" "),t("li",[s._v("实现代码值得学习，不过需要修改Cesium源代码，具体修改了哪些内容我搞明白了列出来。")]),s._v(" "),t("li",[s._v("着色代码完全看不懂，只是直接拿来用了，详细请见请移步"),t("a",{attrs:{href:"https://github.com/zouyaoji/vue-cesium/tree/gh-pages/statics/SampleData/windData"}},[s._v("GitHUB")])]),s._v(" "),t("li",[s._v("风向数据是NetCDF文件，详细介绍后面再补充。")]),s._v(" "),t("li",[s._v("对比"),t("a",{attrs:{href:"https://earth.nullschool.net/"}},[s._v("nullschool")])])])}]},Nb5a:function(s,a,t){"use strict";t.r(a);var l=t("2gqY"),n=t.n(l);for(var r in l)"default"!==r&&function(s){t.d(a,s,function(){return l[s]})}(r);var v=t("H2lr"),e=t("JFUb"),_=Object(e.a)(n.a,v.a,v.b,!1,null,null,null);a.default=_.exports},P0RS:function(s,a,t){s.exports=t("Nb5a")}}]);