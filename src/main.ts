import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/index.scss'

import { setupErrorHandle } from '@/utils/error-handle';

const app = createApp(App)
setupErrorHandle(app); // 统一异常处理

app.mount('#app')
