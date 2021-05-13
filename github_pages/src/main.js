import { createApp } from 'vue'
import 'bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'
import {store} from './store'
import router from './router'
const app  = createApp(App)
app.use(router)
app.use(store);
app.mount('#app')
