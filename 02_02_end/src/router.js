import { createRouter, createWebHashHistory } from 'vue-router'

import Dashboard from './components/Dashboard.vue'
import Tasks from './components/todos/TodoItems.vue'
import Notes from './components/notes/Notes.vue'
import NotFound from './components/NotFound.vue'
import NoteAddEdit from './components/notes/NoteAddEdit.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
     { path: '/', component: Dashboard },         
    { path: '/dashboard', component: Dashboard },
    { path: '/tasks', component: Tasks },
    { path: '/notes', component: Notes },
    { path: '/notes/new', component: NoteAddEdit },
    { path: '/notes/edit/:noteId([0-9A-Fa-f]{8}[-][0-9A-Fa-f]{4}[-][0-9A-Fa-f]{4}[-][0-9A-Fa-f]{4}[-][0-9A-Fa-f]{12})', component: NoteAddEdit },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active"
 
})

export default router