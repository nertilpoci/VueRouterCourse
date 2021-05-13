<template>
  <div class="card">
    <div class="card-body">
      <h7 class="card-title">
        {{ label.id ? "Update Label" : "Create New Label" }}
      </h7>
      <form @submit="onSubmit">
        <div class="form-group">
          <label for="title-label">Title</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="title"
            required
            v-model="label.title"
            placeholder="Enter title"
          />
        </div>
        <hr />
        <div class="float-end">
          <button type="submit" class="btn btn-sm btn-primary m-1">
            {{ label.id ? "Update" : "Create" }}
          </button>
          <button class="btn btn-sm btn-danger" @click="$emit('close')">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddEditLabel",
  components: {},
  props: {
    value: Object,
  },
  data() {
    return {
      label: null,
    };
  },
  mounted() {},
  created() {
    this.label = this.value || {
      id: null,
      title: "",
      color: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log("note", this.label);
      this.$store.commit("saveLabel", this.label);
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
</style>
