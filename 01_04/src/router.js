import { createRouter, createWebHashHistory } from 'vue-router'

import Dashboard from './components/Dashboard.vue'
import Tasks from './components/todos/TodoItems.vue'
import Notes from './components/notes/Notes.vue'
import NotFound from './components/NotFound.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path:'/', component:Dashboard},
    { path: '/dashboard', component: Dashboard },
    { path: '/tasks', component: Tasks },
    { path: '/notes', component: Notes },
    {path:'/:test(notes.*)', component: NotFound }
  ]
 
})

export default router