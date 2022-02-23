import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
.directive('focus', {
  // When the bound element is inserted into the DOM...
  mounted: function (el) {
    // Focus the element
    el.focus()
  }
})
.use(router)
.mount('#app')