import Login from './../components/Login'
import Logout from './../components/Logout'

const authRoutes = [
  { 
    path: '/Login', 
    name: 'login',
    component: Login
},{ 
  path: '/Logout', 
  name: 'logout',
  component: Logout
}]


export default authRoutes