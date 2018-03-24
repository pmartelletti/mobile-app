export default [
  {
    path: '/',
    component: require('./assets/vue/pages/dashboard.vue')
  },
  {
    path: '/about/',
    component: require('./assets/vue/pages/about.vue')
  },
  {
      path: '/dashboard/',
      component: require('./assets/vue/pages/dashboard.vue')
  },
  {
      path: '/profile/',
      component: require('./assets/vue/pages/profile.vue')
  },
  {
      path: '/transactions/',
      component: require('./assets/vue/pages/transactions.vue')
  },
  {
    path: '/form/',
    component: require('./assets/vue/pages/form.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./assets/vue/pages/dynamic-route.vue')
  },
  {
    path: '/panel-left/',
    component: require('./assets/vue/pages/panel-left.vue')
  },
  {
    path: '/color-themes/',
    component: require('./assets/vue/pages/color-themes.vue')
  },
  {
    path: '/chat/',
    component: require('./assets/vue/pages/chat.vue')
  },
  {
    path: '/vuex/',
    component: require('./assets/vue/pages/vuex.vue')
  },
]
