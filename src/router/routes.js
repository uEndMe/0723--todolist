const
  VLogin = () => import('@pages/login/VLogin'),
  VRoot = () => import('@pages/VRoot'),

  VHome = () => import('@pages/home/VHome'),
  VProduction = () => import('@pages/production/VProduction'),
  VClass = () => import('@pages/class/VClass')


export default [
  { path: '/login', component: VLogin },
  {
    path: '/', component: VRoot,
    children: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: VHome, },
      { path: '/production', component: VProduction },
      { path: '/class', component: VClass }
    ]
  }
]