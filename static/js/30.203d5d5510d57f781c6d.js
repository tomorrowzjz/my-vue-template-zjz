webpackJsonp([30],{"25+A":function(t,e){},bJR0:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{showImg:!1,imgType:!1,pointX:0,pointY:0,canvasStyle:{}}},methods:{selectImage:function(t){var e=this,s=t.currentTarget;if(s.files&&s.files[0]){this.showImg=!0;var n=new FileReader;n.onload=function(t){e.$refs.img.src=t.target.result;var s=e.$refs.img;e.$nextTick(function(){var n=new Image;n.onload=function(){e.$refs.canvas.width=2*s.offsetWidth,e.$refs.canvas.height=2*s.offsetHeight,e.$refs.canvas.getContext("2d").drawImage(n,0,0,2*s.offsetWidth,2*s.offsetHeight)},n.src=t.target.result})},n.readAsDataURL(s.files[0])}},mousedownEvent:function(t){this.imgType=!0,this.pointX=t.offsetX,this.pointY=t.offsetY},mouseupEvent:function(t){var e=this;this.imgType=!1;var s=document.createElement("canvas"),n=s.getContext("2d");this.$nextTick(function(){var t=e.$refs.canvas.getContext("2d").getImageData(2*e.canvasStyle.x,2*e.canvasStyle.y,2*e.canvasStyle.w,2*e.canvasStyle.h);s.width=2*e.canvasStyle.w,s.height=2*e.canvasStyle.h,n.putImageData(t,0,0,0,0,2*e.canvasStyle.w,2*e.canvasStyle.h)})},mousemoveEvent:function(t){if(this.imgType){var e=t.offsetX,s=t.offsetY,n=s<this.pointY?s:this.pointY,i=e>this.pointX?e:this.pointX,a=s>this.pointY?s:this.pointY,o=e<this.pointX?e:this.pointX;this.canvasStyle={x:o,y:n,w:i-o,h:a-n},this.$refs.img.style.clip="rect("+n+"px,"+i+"px,"+a+"px,"+o+"px)"}}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("input",{attrs:{type:"file"},on:{change:function(e){t.selectImage(e)}}}),t._v(" "),t.showImg?s("div",{staticClass:"canvasDiv"},[s("canvas",{ref:"canvas",staticClass:"canvas"}),t._v(" "),s("div",{staticClass:"bg",on:{mouseup:function(e){t.mouseupEvent(e)}}}),t._v(" "),s("img",{ref:"img",staticClass:"img"}),t._v(" "),s("div",{staticClass:"mouseDiv",on:{mousedown:function(e){t.mousedownEvent(e)},mouseup:function(e){t.mouseupEvent(e)},mousemove:function(e){t.mousemoveEvent(e)}}})]):t._e()])},staticRenderFns:[]};var a=s("VU/8")(n,i,!1,function(t){s("25+A")},"data-v-42344f7d",null);e.default=a.exports}});
//# sourceMappingURL=30.203d5d5510d57f781c6d.js.map