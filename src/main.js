import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import './assets/css/style.css';
import './assets/css/vendor/dlicon.css'
import './assets/css/vendor/font-awesome.css'

createApp(App)
    .use(router)
    // .use(VueSlideToggle)
    .mount('#app')
