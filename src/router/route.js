import About from "../components/About";
import Home from "../components/Home";
import User from "../components/User";
import Phone from "../components/Phone";
import Tablet from "../components/Tablet";
import Error from "../components/Error";
export let routes = [
  {
    path: '/home',
    component: Home,
    children:[
      {
        path: 'phone',
        component: Phone
      },
      {
        path: 'tablet',
        component: Tablet
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:id',
    component: User
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    component: Error
  }
];