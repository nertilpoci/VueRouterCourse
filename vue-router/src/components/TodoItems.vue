<template>
  <div class="row g-0">
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
    </div>
    <div class="col-12">
      <div
        v-if="displayMode == displayModes.card"
        class="row row-cols-1 row-cols-md-4 g-4 m-1"
      >
        <div
          class="col"
          :key="todo.id"
          v-for="todo in $store.getters.doneTodos"
        >
          <TodoItemCart class="m-1" :value="todo"> </TodoItemCart>
        </div>
      </div>
      <div v-else class="list-group m-1">
        <TodoItemList
          class="m-2"
          :key="todo.id"
          :value="todo"
          v-for="todo in $store.getters.doneTodos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItemCart from "./TodoItemCart.vue";
import TodoItemList from "./TodoItemList.vue";
export default {
  name: "TodoItems",
  components: {
    TodoItemCart,
    TodoItemList,
  },
  data() {
    return {
      displayModes: { card: "cards", list: "list" },
      displayMode: "cards",
    };
  },
  props: {},
};
</script>

