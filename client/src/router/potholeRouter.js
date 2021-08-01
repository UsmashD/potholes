
import Potholes from './../components/Potholes'

const potholeRoutes = [
  { 
    path: '/potholes', 
    name: 'potholes',
    component: Potholes
},{ 
    path: '/potholes/:id', 
    name: 'pothole',
    component: Potholes
}]


export default potholeRoutes