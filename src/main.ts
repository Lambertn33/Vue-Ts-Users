import './assets/main.css'

import { createApp } from 'vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";

import { RiMailFill, LaCitySolid } from "oh-vue-icons/icons";

import App from './App.vue'

import router from './router'

const app = createApp(App)

app.use(router)

addIcons(RiMailFill, LaCitySolid);

app.component("v-icon", OhVueIcon);

app.mount('#app')
