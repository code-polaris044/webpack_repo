import "./reactApp.jsx";
import my from "./my.js";
import "../stylesheet/main.scss";

import Vue from "vue";
import VueApp from "./VueApp.vue";

new Vue({
  el: "#vue-root",
  render: (h) => h(VueApp),
});

console.log("webpack!");

my();
