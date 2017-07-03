import Vue from 'vue'
import iView from './iview/src/index.js'

if (process.BROWSER_BUILD) {
  Vue.use(iView)
}
