import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
  },
]
