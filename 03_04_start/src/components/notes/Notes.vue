<template>
  <div class="row g-0" >
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

      <router-link :to="{name:'newnote'}" class="float-end btn btn-link">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
    <div class="col-12">
      <div v-if="displayMode == displayModes.card" class="row g-0">
        <div class="col" :key="todo.id" v-for="todo in $store.getters.allNotes">
          <router-link
            :to="{name:'editnote', params:{id:todo.id}}"
            custom
            v-slot="{ navigate }"
          >
            <NoteItemCard
              @delete="deleteNote(todo.id)"
              @click="navigate"
              class="m-1 note-card"
              :value="todo"
            >
            </NoteItemCard>
          </router-link>
        </div>
      </div>
      <div v-else class="list-group m-1 p-3">
        <router-link
          :key="todo.id"
          v-for="todo in $store.getters.allNotes"
          :to="{name:'editnote', params:{id:todo.id}}"
          custom
          v-slot="{ navigate }"
        >
          <NoteItemList
            @click="navigate(todo.id)"
            @delete="deleteNote(todo.id)"
            class="m-2"
            :value="todo"
          />
        </router-link>
      </div>
    </div>
  </div>
  
</template>

<script>
import NoteItemCard from "./NoteItemCart.vue";
import NoteItemList from "./NoteItemList.vue";
export default {
  name: "Notes",
  components: {
    NoteItemCard,
    NoteItemList,
  },
  data() {
    return {
      displayModes: { card: "cards", list: "list" },
      displayMode: "cards",
    };
  },
  props: {},
  methods: {
    deleteNote(id) {
      this.$store.commit("deleteNote", id);
    }
  },
};
</script>



<style scoped>
.note-card {
  max-width: 200px;
}
</style>