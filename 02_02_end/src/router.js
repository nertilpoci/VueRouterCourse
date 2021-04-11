import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Tasks from './components/todos/TodoItems.vue'
import NotFound from './components/NotFound.vue'
import NotesView from './views/NotesView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
     { path: '/', component: Dashboard },         
    { path: '/dashboard', component: Dashboard },
    { path: '/tasks', component: Tasks },
    { path: '/notes', component: NotesView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active"
 
})

export default router