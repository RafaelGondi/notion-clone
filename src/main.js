import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import contenteditable from 'vue-contenteditable'

const app = createApp(App);

app.use(contenteditable).mount('#app')
