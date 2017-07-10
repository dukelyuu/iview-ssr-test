import Vue from 'vue'
import iView from 'iview'

if (process.BROWSER_BUILD) {
  Vue.use(iView)
}
