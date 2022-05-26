import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";  // index.js는 이름 생략 가능,
import store from './store'     // detail.js 같은 다른 이름은 생략 불가
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router)
  .use(store) // plugin
  .use(loadImage)
  .mount("#app");
