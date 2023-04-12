import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'
import '@/styles/_diy-elementui.scss'
import store  from '@/store'
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
// export const detectZoom = () => {
//   let ratio = 0,
//     screen = window.screen,
//     ua = navigator.userAgent.toLowerCase();
//   if (window.devicePixelRatio !== undefined) {
//     ratio = window.devicePixelRatio;
//   } else if (~ua.indexOf('msie')) {
//     if (screen.deviceXDPI && screen.logicalXDPI) {
//       ratio = screen.deviceXDPI / screen.logicalXDPI;
//     }
//   } else if (
//     window.outerWidth !== undefined &&
//     window.innerWidth !== undefined
//   ) {
//     ratio = window.outerWidth / window.innerWidth;
//   }
//   if (ratio) {
//     ratio = Math.round(ratio * 100);
//   }
//   return ratio;
// };
//
// document.body.style.zoom = 100 / Number(detectZoom);
