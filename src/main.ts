import { createApp } from 'vue'
import { ElButton, ElCard, ElRow, ElCol, ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/css/base.css'
import App from './App.vue'
const components = [
  ElButton,
  ElCard,
  ElRow,
  ElCol,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu
]

const app = createApp(App)
components.forEach(component => {
  app.component(component.name, component)
})
app.mount('#app')
