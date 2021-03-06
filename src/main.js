// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueMaterial from 'vue-material'
import App from './App'
import router from './router'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false

Vue.use(vueMaterial)

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'light-green',
      hue: 700
    },
    accent: 'red'
  },
  teal: {
    primary: 'blue',
    accent: 'pink'
  },
  purple: {
    primary: 'purple',
    accent: 'orange'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
