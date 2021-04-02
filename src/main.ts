import { createApp } from 'vue'
import { ElRow, ElCol, ElButton, ElSelect } from 'element-plus'
import 'element-plus/packages/theme-chalk/src/base.scss'
import App from './App.vue'
const app = createApp(App)
app.component(ElButton.name, ElButton)
app.component(ElSelect.name, ElSelect)
app.component(ElRow.name, ElRow)
app.component(ElCol.name, ElCol)
app.mount('#app')
