import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './theme.css'
import translatePlugin from './translatePlugin'

import {ru, cz, en} from './vocabulary'



const app=createApp(App)

app.use(translatePlugin,{ru,cz,en} )
app.use(router)
app.mount('#app')
