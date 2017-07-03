import Vue from 'vue'
import iView from './iview/src/iview.js'

if (process.BROWSER_BUILD) {
  Vue.use(iView)
}
