import Vue, { AsyncComponent } from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index.vue'

Vue.use(VueRouter)

const loadView = (view: string): AsyncComponent => (): any => import(`@views/${view}/index.vue`);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: loadView('home')
  }
]

const createRouter: any = () => new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: routes
});

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router
