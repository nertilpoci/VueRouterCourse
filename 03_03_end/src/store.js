import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist'
const vuexPersist = new VuexPersist({
  key: 'vue-router-course',
  storage: window.localStorage
})
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const store = createStore({
  plugins: [vuexPersist.plugin],
  state: {
    tasks: [
     
    ],
    notes: [
      
    ],
    labels:[

    ]

  },
  getters: {
    allNotes(state) {
      return state.notes
    },
    allLabels(state) {
      return state.labels
    },
    allTasks(state) {
      return state.tasks
    },
    uninishedNoteCount(state){
      return state.notes.filter(note => !note.done).length
    },
    unfinishedTaskCount(state) {
      return state.tasks.filter(todo => !todo.done).length
    }
  },
  mutations: {
    saveLabel(state,label){
       if (label.id) {
        let existingLabelIndex = state.labels.findIndex(z => z.id == label.id);
        if (existingLabelIndex >= 0) {
          state.labels.splice(existingLabelIndex, 1, label);
          return;
        }
      }
      label.id=uuidv4();
      state.labels.push(label);
    },
    deleteLabel(state,id){
       
      //remove label from notes and tasks first
     state.notes.filter(z=>z.labels && z.labels.map(l=>l.id).includes(id)).forEach(note=>{
       note.labels=note.labels.filter(z=>z.id!=id);
     })
     state.tasks.filter(z=>z.labels && z.labels.map(l=>l.id).includes(id)).forEach(task=>{
      task.labels=task.labels.filter(z=>z.id!=id);
    })
    let labelIndex = state.labels.findIndex(z => z.id == id);
    if (labelIndex >= 0) {
      state.labels.splice(labelIndex, 1);
    }
    },
    saveNote(state, note) {
      if (note.id) {
        let existingNoteIndex = state.notes.findIndex(z => z.id == note.id);
        if (existingNoteIndex >= 0) {
          state.notes.splice(existingNoteIndex, 1, note);
          return;
        }
      }
      note.id=uuidv4();
      state.notes.push(note);
    },
    deleteNote(state, id) {
      let existingNoteIndex = state.notes.findIndex(z => z.id == id);
      if (existingNoteIndex >= 0) {
        state.notes.splice(existingNoteIndex, 1);
      }
    },
    saveTask(state, task) {
      if (task.id) {
        let existingTaskIndex = state.tasks.findIndex(z => z.id == task.id);
        if (existingTaskIndex >= 0) {
          state.tasks.splice(existingTaskIndex, 1, task);
          return;
        }
      }
      task.id=uuidv4();
      state.tasks.push(task);
    },
    deleteTask(state, id) {
      let existingTaskIndex = state.tasks.findIndex(z => z.id == id);
      if (existingTaskIndex >= 0) {
        state.tasks.splice(existingTaskIndex, 1);
      }
    }
  }
})