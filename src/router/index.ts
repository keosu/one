import { createRouter, createWebHashHistory } from 'vue-router/dist/vue-router.esm-bundler'
import { PageMain, PageAbout, PageErr} from '@/pages'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: PageMain,
      meta: {
        titleKey: 'title.main'
      }
    },
    {
      path: '/about',
      component: PageAbout,
      meta: {
        titleKey: 'title.second'
      }
    },
    {
      path: '/error',
      component: PageErr,
      meta: {
        titleKey: 'title.error'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})
