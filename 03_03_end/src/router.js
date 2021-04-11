import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Tasks from './components/todos/TodoItems.vue'
import Notes from './views/NotesView.vue'
import NotFound from './components/NotFound.vue'
import TaskAddEdit from './components/notes/NoteAddEdit.vue'
import {store} from './store'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: (to) => {
        console.log("Redirect from ", to)
        return { path: store.getters.startScreen }
      },
    },
    { path: '/dashboard', name:'dashboard', component: Dashboard },
    { path: '/tasks', name:'tasks', component: Tasks },
    {
      path: '/notes', name:'notes',
      component: Notes,
      children: [
        { path: 'new',name:'newnote', component: TaskAddEdit
       },
        {name:'editnote',
          path: 'edit/:id([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})?', component: TaskAddEdit,
          props: route => ({ id: route.params.id })
        },
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active"

})

export default router