import VHome from '../pages/main/content/VHome'
import VProduction from '../pages/main/content/VProduction'
import VClass from '../pages/main/content/VClass'

export default [
  { path: '/home', component: VHome, alias: '/' },
  { path: '/production', component: VProduction },
  { path: '/class', component: VClass }
]