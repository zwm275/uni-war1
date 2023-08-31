"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onShow() {
    console.log("index");
  },
  onPullDownRefresh() {
    console.log("页面下拉刷新了");
  },
  onLoad() {
    console.log(getCurrentPages());
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/桌面/Debug/HX/uniapp-war/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
