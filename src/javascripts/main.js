import "./reactApp.jsx";
import my from "./my.js";
import "../stylesheet/main.scss";
import { createApp } from "vue";
import vueApp from "./vueApp.vue";

import add from "./add.ts";

createApp(vueApp).mount("#vue-root");

console.log(add(3, 9));
console.log("webpack!");

my();
