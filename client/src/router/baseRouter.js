import VueRouter from 'vue-router'
import userRouter from './userRouter'
import authRouter from './authRouter'
import potholeRouter from './potholeRouter'

import Home from './../components/Home'

const baseRoutes = [{ 
    path: '/home', 
    name: 'home',
    component: Home
  }]

let routes = baseRoutes.concat(userRouter, authRouter, potholeRouter)
// routes = baseRoutes.concat(authRouter)
const router = new VueRouter({
    routes 
})
/*
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          if(to.matched.some(record => record.meta.is_admin)) {
              if(user.is_admin == 1){
                  next()
              }
              else{
                  next({ name: 'userboard'})
              }
          }else {
              next()
          }
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('jwt') == null){
          next()
      }
      else{
          next({ name: 'userboard'})
      }
  }else {
      next()
  }
})
*/
export default router