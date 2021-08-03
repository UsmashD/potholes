
import Potholes from './../components/Potholes'

const potholeRoutes = [
  { 
    path: '/potholes', 
    name: 'potholes',
    component: Potholes,
    meta: {
      requiresAuth: true
    }
},{ 
    path: '/potholes/:id', 
    name: 'pothole',
    component: Potholes
}]


export default potholeRoutes