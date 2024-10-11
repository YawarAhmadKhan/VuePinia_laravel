import "./bootstrap";
import { createApp } from "vue";
import { createPinia } from "pinia";
import post from "./components/Post.vue";
const pinia = createPinia();
createApp(post).use(pinia).mount("#app");
