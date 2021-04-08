import { createApp } from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'
import {store} from './store'
const app  = createApp(App)
app.use(store);
app.mount('#app')
