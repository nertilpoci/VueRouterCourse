<template>
  <div class="row g-0" v-if="!editingNote">
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

      <router-link  to="/notes/new" class="float-end btn btn-link">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
    <div class="col-12">
      <div
        v-if="displayMode == displayModes.card"
        class="row g-0"
      >
        <div class="col" :key="todo.id" v-for="todo in $store.getters.allNotes">
          <NoteItemCard
            @delete="deleteNote(todo.id)"
            @click="edit(todo.id)"
            class="m-1 note-card"
            :value="todo"
          >
          </NoteItemCard>
        </div>
      </div>
      <div v-else class="list-group m-1 p-3">
        <NoteItemList
          @click="edit(todo.id)"
          @delete="deleteNote(todo.id)"
          class="m-2"
          :key="todo.id"
          :value="todo"
          v-for="todo in $store.getters.allNotes"
        />
      </div>
    </div>
  </div>
  <div class="row p-5" v-else>
    <div class="col-12">
      <NoteAddEdit @close="editingNote = null" :value="editingNote" />
    </div>
  </div>
</template>

<script>
import NoteItemCard from "./NoteItemCart.vue";
import NoteItemList from "./NoteItemList.vue";
import NoteAddEdit from "./NoteAddEdit.vue";
export default {
  name: "Notes",
  components: {
    NoteItemCard,
    NoteItemList,
    NoteAddEdit,
  },
  data() {
    return {
      editingNote: null,
      displayModes: { card: "cards", list: "list" },
      displayMode: "cards",
    };
  },
  props: {},
  methods: {
    deleteNote(id) {
      this.$store.commit("deleteNote", id);
    },
    edit(id) {
      let todo = this.$store.getters.allNotes.find((z) => z.id == id);
      this.editingNote = { ...todo }; // clone todo to avoid any reactive properties being set
    },
    createNote() {
      //set editing note to an object without id and blank properties
      this.editingNote = {
        id: null,
        note: "",
        title: "",
        createdOn: new Date().toLocaleDateString(),
        done: false,
      };
    },
  },
};
</script>



<style scoped>
.note-card{
  max-width:200px
}
</style>