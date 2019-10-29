webpackJsonp([51],{"+Kgw":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"Basetable",mixins:[{data:function(){return{pagination:{currentPage:1,total:1,pagesize:10}}},methods:{getData:function(){throw new Error("component must implement getData method")},handleSizeChange:function(e){this.pagination.pagesize=e,this.getData()},handleCurrentChange:function(e){this.pagination.currentPage=e,this.getData()}}}],data:function(){return{url:"../static/vuetable.json",tableData:[],cur_page:1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,delVisible:!1,form:{name:"",date:"",address:""},idx:-1,isExpand:!1,query:"",type:"",status:""}},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var a=!1,l=0;l<e.del_list.length;l++)if(t.name===e.del_list[l].name){a=!0;break}if(!a&&t.address.indexOf(e.select_cate)>-1&&(t.name.indexOf(e.select_word)>-1||t.address.indexOf(e.select_word)>-1))return t})}},created:function(){this.getData()},methods:{exeQuery:function(){},reset:function(){},handleCurrentChange:function(e){this.cur_page=e,this.getData()},getData:function(){this.tableData=[{date:"1997-11-11",name:"林丽",address:"吉林省 辽源市 龙山区"},{date:"1987-09-24",name:"文敏",address:"江西省 萍乡市 芦溪县"},{date:"1996-08-08",name:"杨秀兰",address:"黑龙江省 黑河市 五大连池市"},{date:"1978-06-18",name:"魏强",address:"广东省 韶关市 始兴县"},{date:"1977-07-09",name:"石秀兰",address:"江苏省 宿迁市 宿豫区"},{date:"1994-09-20",name:"朱洋",address:"海外 海外 -"}]},search:function(){this.is_search=!0},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},handleEdit:function(e,t){this.idx=e;var a=this.tableData[e];this.form={name:a.name,date:a.date,address:a.address},this.editVisible=!0},handleDelete:function(e,t){this.idx=e,this.delVisible=!0},delAll:function(){var e=this.multipleSelection.length,t="";this.del_list=this.del_list.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.error("删除了"+t),this.multipleSelection=[]},handleSelectionChange:function(e){this.multipleSelection=e},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1,this.$message.success("修改第 "+(this.idx+1)+" 行成功")},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1},handleExpand:function(){this.isExpand=!this.isExpand}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"}),e._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"query"},[a("el-row",[a("el-col",{staticClass:"row-bg text-size",attrs:{span:1}},[a("span",[e._v("名称:")])]),e._v(" "),a("el-col",{staticClass:"row-bg",attrs:{span:7}},[a("el-input",{attrs:{placeholder:"请输入内容"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.exeQuery(t):null}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isExpand,expression:"isExpand"}]},[a("el-col",{staticClass:"row-bg",attrs:{span:4}},[a("el-select",{attrs:{placeholder:"类型",clearable:""},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[a("el-option",{attrs:{label:"商品基础信息",value:"metadata"}}),e._v(" "),a("el-option",{attrs:{label:"商品销售规格",value:"option"}}),e._v(" "),a("el-option",{attrs:{label:"商品属性",value:"attribute"}}),e._v(" "),a("el-option",{attrs:{label:"商品图片",value:"image"}})],1)],1),e._v(" "),a("el-col",{staticClass:"row-bg",attrs:{span:4}},[a("el-select",{attrs:{placeholder:"状态",clearable:""},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[a("el-option",{attrs:{label:"创建",value:"created"}}),e._v(" "),a("el-option",{attrs:{label:"启用",value:"enabled"}}),e._v(" "),a("el-option",{attrs:{label:"禁用",value:"disabled"}}),e._v(" "),a("el-option",{attrs:{label:"废弃",value:"deprecated"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"row-bg",attrs:{span:8}},[a("el-button",{attrs:{type:"primary"},on:{click:e.exeQuery}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.reset}},[e._v("重置")]),e._v(" "),a("span",{staticClass:"expand",on:{click:e.handleExpand}},[e.isExpand?[e._v("\n                                收起 "),a("i",{staticClass:"el-icon-arrow-up"})]:[e._v("\n                                展开 "),a("i",{staticClass:"el-icon-arrow-down"})]],2)],1)],1)],1)]),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.data,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"date",label:"日期",sortable:"",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{formatter:e.formatter,prop:"address",label:"地址"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.pagination.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pagination.pagesize,total:e.pagination.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.editVisible,title:"编辑",width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"50px"}},[a("el-form-item",{attrs:{label:"日期"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.delVisible,title:"提示",width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var i=a("VU/8")(l,s,!1,function(e){a("W5cS")},"data-v-3487ec9e",null);t.default=i.exports},W5cS:function(e,t){}});