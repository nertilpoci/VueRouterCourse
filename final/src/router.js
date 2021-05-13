/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { createRouter, createWebHistory } from 'vue-router'
import { store } from './store'


const Dashboard = () => import( './components/Dashboard.vue')
const Tasks = () => import( './components/todos/TodoItems.vue')
const Notes = () => import( './views/NotesView.vue')
const NotFound = () => import( './components/NotFound.vue')
const NoteAddEdit = () => import( './views/AddEditNoteView.vue')
const NavbarComponent = () => import('./components/navigation/Navbar.vue')
const Login = () => import('./components/auth/Login.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: (to) => {
        return { path: store.getters.startScreen || 'dashboard' }
      },
    },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
    { path: '/login', name: 'login', component: Login },
    {
      meta: {
        title:"Globomantics: Notes",
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
        title:"Globomantics: Notes",
        requiresAuth:true,
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
          beforeEnter: () => {
            console.log('Before Note Edit Enter (Per-Route)')
          },
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

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(savedPosition || { left: 0, top: 0 })
      }, 1000)
    })

  },

})
router.beforeEach((to, from) => {
  console.log('Before Each(Global)')
  if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
    return { name: 'login' }
  }
})
router.beforeResolve(async (to, from) => {
  console.log('Before Resolve (Global)')
  //ask for microphone:
  if(to.meta.requiresMic){
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true })
    }
    catch (err) {
      alert('Cannot proceed without allowing access to mic. Enable access and reload the page')
      return false
  
    }
  }
})
router.afterEach((to, from) => {
  console.log('After Each (Global)')
  document.title=to.meta.title || "Globomantics"
  to.meta.transition = to.matched.length == 1 ? 'bounce-right' : 'bounce-left'
})

export default router