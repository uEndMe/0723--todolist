const
  test = () => import('@pages/test/test'),
  VLogin = () => import('@pages/login/VLogin'),
  VRoot = () => import('@pages/VRoot'),

  VHome = () => import('@pages/home/VHome'),
  HomeTodolist = () => import('@pages/home/HomeTodolist'),
  VProduction = () => import('@pages/production/VProduction'),
  VClass = () => import('@pages/class/VClass')


export default [
  { path: '/login', component: VLogin },
  {
    path: '/', component: VRoot,
    children: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: VHome },
      { path: '/home/todolist', component: HomeTodolist },
      { path: '/home/vuex', component: HomeTodolist },
      { path: '/production', component: VProduction },
      { path: '/class', component: VClass },
    ]
  },
  { path: '/test', component: test }
]