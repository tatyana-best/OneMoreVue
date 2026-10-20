import { createRouter, createWebHistory } from 'vue-router'
import First from '../components/first.vue'
import Second from '../components/second.vue'
import Third from '../components/third.vue'
import Forth from '../components/forth.vue'
import Fifth from '../components/fifth.vue'
import Sixth from '../components/sixth.vue'
import Seventh from '../components/seventh.vue'
import Eighth from '../components/eighth.vue'
import Ninth from '../components/ninth.vue'
import Tenth from '../components/tenth.vue'
import Eleventh from '../components/eleventh.vue'

const routes = [
  { path: '/OneMoreVue/MyProject/first',  name: 'first',  component: First },
  { path: '/OneMoreVue/MyProject/second', name: 'second', component: Second },
  { path: '/OneMoreVue/MyProject/third', name: 'third', component: Third },
  { path: '/OneMoreVue/MyProject/forth', name: 'forth', component: Forth },
  { path: '/OneMoreVue/MyProject/fifth', name: 'fifth', component: Fifth },
  { path: '/OneMoreVue/MyProject/sixth', name: 'sixth', component: Sixth },
  { path: '/OneMoreVue/MyProject/seventh', name: 'seventh', component: Seventh },
  { path: '/OneMoreVue/MyProject/eighth', name: 'eighth', component: Eighth },
  { path: '/OneMoreVue/MyProject/ninth', name: 'ninth', component: Ninth },
  { path: '/OneMoreVue/MyProject/tenth', name: 'tenth', component: Tenth },
  { path: '/OneMoreVue/MyProject/eleventh', name: 'eleventh', component: Eleventh },
]

const router = createRouter({
  history: createWebHistory('/OneMoreVue/MyProject/'),
  routes,
})

export default router
