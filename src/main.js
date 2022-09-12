import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import contenteditable from 'vue-contenteditable'
import Cuida from '@sysvale/cuida';


const app = createApp(App);

app.use(Cuida);
app.use(contenteditable).mount('#app')
