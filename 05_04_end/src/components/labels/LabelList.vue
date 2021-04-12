<template>
  <div class="row">
    <div class="col-12">
      <button
        @click="createLabel"
        type="button"
        v-if="!editingLabel"
        class="btn btn-sm"
      >
        <i class="fa fa-plus"></i>
      </button>
      <AddEditLabel
        @close="editingLabel = null"
        v-if="editingLabel"
        :value="editingLabel"
      />
    </div>
    <div class="col-12">
      <div class="list-group">
        <a
          :key="label.id"
          v-for="label in $store.getters.allLabels"
          href="javascript:;"
          class="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h7 class="mb-1">{{ label.title }}</h7>
            <small></small>
            <a
              href="javascript:;"
              class="text-danger float-end" style="font-size:10px"
              @click.stop="deleteLabel(label.id)"
              ><i class="fa fa-trash"></i
            ></a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import AddEditLabel from "./AddEditLabel";
export default {
  name: "Labels",
  components: {
    AddEditLabel,
  },
  data() {
    return {
      editingLabel: null,
    };
  },
  props: {},
  methods: {
    deleteLabel(id) {
      this.$store.commit("deleteLabel", id);
    },

    createLabel() {
      this.editingLabel = {
        id: null,
        title: "",
        color: "",
      };
    },
  },
};
</script>
<style scoped>
.label-list {
  height: calc(100vh - 150px);
  overflow: auto;
}
</style>