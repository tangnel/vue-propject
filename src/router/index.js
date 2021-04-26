import Vue from 'vue'
import Router from 'vue-router'
import Add from '../views/catalog/add'

Vue.use(Router);

export const constRouterMap = [{
  path: '/home',
  name: 'home',
  component: Add
},
  // {
  //   path: '/learn',
  //   name: 'learn',
  //   component: () => import('./views/Learn')
  // },
  // {
  //   path: '/student',
  //   name: 'student',
  //   component: () => import('./views/Student')
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('./views/About')
  // },
  // {
  //   path: '/community',
  //   name: 'community',
  //   component: () => import('./views/Community'),
  //   redirect: '/community/academic',
  //   children: [
  //     {
  //       path: 'academic',
  //       name: 'academic',
  //       component: () => import('./views/Academic.vue')
  //     },
  //     {
  //       path: 'download',
  //       name: 'download',
  //       component: () => import('./views/Download.vue')
  //     },
  //     {
  //       path: 'personal',
  //       name: 'personal',
  //       component: () => import('./views/Personal.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/question:id',
  //   name: 'question',
  //   component: () => import('./views/Question')
  // },
  // {
  //   path: '/NotFound',
  //   component: () => import('./views/NotFound')
  // },
  {
    path: '*',
    redirect(to) {
      if (to.path === '/') {
        return "/home"
      } else {
        return "/NotFound"
      }
    }
  }
]
export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active-exact',
  linkActiveClass: 'active',
  routes: constRouterMap
})
