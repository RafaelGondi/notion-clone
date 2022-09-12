import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import contenteditable from 'vue-contenteditable'
import Cuida from '@sysvale/cuida';


const app = createApp(App);

app.use(Cuida);
app.use(contenteditable);
app.use(createPinia());
app.mount('#app');
