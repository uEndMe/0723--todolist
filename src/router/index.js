import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'

// 配置
const oldPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (path) {
  return (location.pathname !== path) && oldPush.call(this, path)
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router