import VLogin from '../pages/login/VLogin'
import VRoot from '../pages/VRoot'

import VHome from '../pages/home/VHome'
import VProduction from '../pages/production/VProduction'
import VClass from '../pages/class/VClass'

export default [
  { path: '/login', component: VLogin },
  {
    path: '/', component: VRoot,
    children: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: VHome },
      { path: '/production', component: VProduction },
      { path: '/class', component: VClass }
    ]
  }
]