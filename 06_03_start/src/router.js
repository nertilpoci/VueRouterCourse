/* eslint-disable no-unused-vars */

import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Tasks from './components/todos/TodoItems.vue'
import Notes from './views/NotesView.vue'
import NotFound from './components/NotFound.vue'
import NoteAddEdit from './views/AddEditNoteView.vue'
import { store } from './store'
import NavbarComponent from './components/navigation/Navbar.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: (to) => {
        console.log("Redirect from ", to)
        return { path: store.getters.startScreen }
      },
    },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
    {
      meta: {
        transition: 'bounce-right'
      },
      path: '/tasks', name: 'tasks', components: {
        default: Tasks,
        Navbar: NavbarComponent
      }
    },
    {
      path: '/notes', name: 'notes',
      meta: {
        transition: 'bounce-right'
      },
      components: {
        default: Notes,
        Navbar: NavbarComponent
      },
      children: [
        {
          path: 'new',
          name: 'newnote',
          component: NoteAddEdit,
          meta: {
            onClose: () => router.push({ name: 'notes' })
          }
        },
        {
          name: 'editnote',
          meta: {
            onClose: () => router.push({ name: 'notes' })
          },
          path: 'edit/:id([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})?',
          component: NoteAddEdit,
          props: route => ({ id: route.params.id })
        },
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    console.log('to',to)
    console.log('from',from)
    console.log('savedPosition',savedPosition)
     
   return new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve( savedPosition||  { left: 0, top: 0 })
    }, 1000)
  })

  },
  
})
router.afterEach((to, from) => {
  console.log('to',to)
  console.log('from',from)
  to.meta.transition = to.matched.length==1 ? 'bounce-right' : 'bounce-left'
})

export default router