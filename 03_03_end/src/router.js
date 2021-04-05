import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Tasks from './components/todos/TodoItems.vue'
import Notes from './views/NotesView.vue'
import NotFound from './components/NotFound.vue'
import TaskAddEdit from './components/notes/NoteAddEdit.vue'
import Navbar from './components/Navbar.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Dashboard },

    {
      path: '/dashboard',
      components: {
        default: Dashboard,
        navbar: Navbar
      },
    },
    {
      path: '/tasks', components: {
        default: Tasks,
        navbar: Navbar
      }
    },
    {

      path: '/notes',
      components: {
        default: Notes,
        navbar: Navbar
      },
      children: [
        { name: 'newnote', path: 'new', component: TaskAddEdit},
        {
          name: 'editnote', path: 'edit/:id([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})?', component: TaskAddEdit,
          // props:true,
          // props:{id:''},
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