import VLogin from '../pages/login/VLogin'
import VHome from '../pages/home/VHome'

import HomeHome from '../pages/home/home/HomeHome'
import HomeProduction from '../pages/home/production/HomeProduction'
import HomeClass from '../pages/home/class/HomeClass'

export default [
  { path: '/', redirect: '/home' },
  { path: '/login', component: VLogin },
  {
    path: '/home', component: VHome,
    children: [
      { path: '/home', redirect: '/home/home' },
      { path: '/home/home', component: HomeHome },
      { path: '/home/production', component: HomeProduction },
      { path: '/home/class', component: HomeClass }
    ]
  }
]