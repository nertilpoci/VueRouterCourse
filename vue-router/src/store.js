import { createStore } from 'vuex'

export const store = createStore({
    state: {
        todos: [
          { id: 1,title:'note1', note: 'lkajfd lkajdf llkjdsafdsaf ', createdOn:'25-02-2020', done: true },
          { id: 2,title:'note1', note: 'lkajfd lkajdf llkjdsafdsaf ', createdOn:'25-02-2020', done: true },
          { id: 3,title:'note1', note: 'lkajfd lkajdf llkjdsafdsaf ', createdOn:'25-02-2020', done: true },
          { id: 4,title:'note1', note: 'lkajfd lkajdf llkjdsafdsaf ', createdOn:'25-02-2020', done: true }
        ]
      },
      getters: {
        doneTodos (state) {
          return state.todos.filter(todo => todo.done)
        }
      }
})