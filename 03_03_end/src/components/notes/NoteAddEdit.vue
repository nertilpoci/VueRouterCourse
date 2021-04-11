<template>
  <div class="card">
    <div></div>
    <img
      class="card-img-top"
      src="https://i.picsum.photos/id/20/1200/300.jpg?hmac=8rrSN6gcVsYYzYJs87AlbxZVnO0M38r6eD9kKJq1P3Q"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">
        {{ note.id ? "Update Note" : "Create New Note" }}
      </h5>
      <form @submit="onSubmit">
        <div class="form-group">
          <label for="title-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="note.title"
            placeholder="Enter title"
          />
        </div>
        <div class="form-group">
          <label for="note-label">Content</label>
          <textarea
            type="text"
            class="form-control"
            id="note"
            required
            rows="5"
            v-model="note.note"
            placeholder="Enter content"
          />
        </div>
        <div class="form-group">
          <label for="labels">Select Labels</label>
          <select multiple class="form-control" id="labels" v-model="labelIds">
            <option
              v-for="label in $store.getters.allLabels"
              :key="label.id"
              :value="label.id"
            >
              {{ label.title }}
            </option>
          </select>
        </div>
        <div class="form-check">
          <input
            v-model="note.done"
            type="checkbox"
            class="form-check-input"
            id="completed"
          />
          <label class="form-check-label" for="completed">Completed</label>
        </div>
        <hr />
        <div class="float-end">
          <button type="submit" class="btn btn-primary m-1">
            {{ note.id ? "Update" : "Create" }}
          </button>
          <button class="btn btn-danger" @click="$emit('close')">Cancel</button>
          <!-- <button style="position:absolute;top:0;right:0;font-size:40px" class="btn btn-link" @click="$emit('close')"><i class="fa fa-times-circle"></i></button> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteAddEdit",
  components: {},
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      labelIds: [],
      note: null,
    };
  },
  mounted() {},
  watch: {
    id() {
      this.initializeNote();
    },
  },
  created() {
    this.initializeNote();
  },
  methods: {
    initializeNote() {
      let noteId = this.id;
      if (noteId) {
        let existingNote = this.$store.getters.allNotes.find(
          (z) => z.id == noteId
        );
        this.note = { ...existingNote }; //copy existing note to remove vue change tracker
      } else {
        this.note = {
          id: null,
          title: "",
          note: "",
          createdOn: new Date().toLocaleDateString(),
          done: false,
          labels: [],
        };
      }

      this.labelIds = this.note.labels && this.note.labels.map((z) => z.id);
    },
    onSubmit(event) {
      event.preventDefault();
      this.note.labels = this.$store.getters.allLabels.filter((z) =>
        this.labelIds.includes(z.id)
      );
      this.$store.commit("saveNote", { ...this.note }); // copy before saving to remove vue change tracker
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
</style>

