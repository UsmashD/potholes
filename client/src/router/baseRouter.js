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

export default router