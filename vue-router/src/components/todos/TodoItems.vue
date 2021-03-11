<template>
  <div class="row g-0" v-if="!editingTask">
    <div class="col-12">
      <button
        v-if="displayMode != displayModes.card"
        @click="displayMode = displayModes.card"
        type="button"
        class="float-end btn btn-link"
      >
        <i class="fa fa-th"></i>
      </button>
      <button
        v-if="displayMode != displayModes.list"
        @click="displayMode = displayModes.list"
        type="button"
        class="float-end btn btn-link"
      >
        <i class="fa fa-list"></i>
      </button>
      <button
        @click="createTask"
        type="button"
        class="float-end btn btn-link"
      >
       <i class="fa fa-plus"></i>
      </button>
    </div>
    <div class="col-12">
      <div
        v-if="displayMode == displayModes.card"
        class="row row-cols-1 row-cols-md-4 g-4 m-1"
      >
        <div
          class="col"
          :key="todo.id"
          v-for="todo in $store.getters.allTasks"
        >
          <TodoItemCart @click="edit(todo.id)" @delete="deleteTask(todo.id)" class="m-1" :value="todo"> </TodoItemCart>
        </div>
      </div>
      <div v-else class="list-group m-1">
        <TodoItemList
          class="m-2" 
           @click="edit(todo.id)" @delete="deleteTask(todo.id)"
          :key="todo.id"
          :value="todo"
          v-for="todo in $store.getters.allTasks"
        />
      </div>
    </div>
  </div>
  <div class="row p-5" v-else>
    <div class="col-12">
      <TaskAddEdit @close="editingTask = null" :value="editingTask" />
    </div>
  </div>
</template>

<script>
import TodoItemCart from "./TodoItemCart.vue";
import TodoItemList from "./TodoItemList.vue";
import TaskAddEdit from './TaskAddEdit.vue'
export default {
  name: "TodoItems",
  components: {
    TodoItemCart,
    TodoItemList,
    TaskAddEdit
  },
  data() {
    return {
      editingTask:null,
      displayModes: { card: "cards", list: "list" },
      displayMode: "cards",
    };
  },
  methods: {
    deleteTask(id){
       this.$store.commit("deleteTask", id);
    },
    edit(id){
      let task= this.$store.getters.allTasks.find(z=>z.id==id);
      this.editingTask= { ...task };// clone todo to avoid any reactive properties being set
    },
    createTask() {
      this.editingTask = {
        id: null,
        note: "",
        title:'',
        createdOn: new Date().toLocaleDateString(),
        done: false,
      };
    }
    },

  props: {},
};
</script>

