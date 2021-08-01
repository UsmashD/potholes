
import User from './../components/User'

const userRoutes = [
  { 
    path: '/users', 
    name: 'users',
    component: User
},{ 
    path: '/users/:id', 
    name: 'user',
    component: User
}]


export default userRoutes