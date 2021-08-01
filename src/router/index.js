import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import NotFound from '../views/NotFound.vue'
import WorkDetail from '../views/WorkDetail.vue'

Vue.use(VueRouter)

const routes = [{
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/work-detail/:id',
    name: "WorkDetail",
    component: WorkDetail
  },
  {
    path: '*',
    name: 'not-found',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode: 'abstract',
})

export default router