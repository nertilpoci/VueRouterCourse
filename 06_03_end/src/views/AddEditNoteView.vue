<template>
  <div>
    <NoteAddEdit ref="noteeditor" v-bind="$props" @close="navigateBack" />
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import router from "../router";
import NoteAddEdit from "../components/notes/NoteAddEdit.vue";
export default {
  components: {
    NoteAddEdit,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("Before Notes Edit Entered (In-Component)");
    next(vm=>{
      //change component properties
    })
  },
  beforeRouteLeave() {
    console.log("Before Notes Edit Leave (In-Component)");
    
     //check if it has unsaved changes
    if (this.$refs.noteeditor.hasChanges()) {
      const discardChanges = window.confirm(
        "Do you really want to leave? You have some changes that you havent saved yet"
      );
      if (!discardChanges) return false;
    }
  },
   beforeRouteUpdate(to, from) { 
    
    console.log("Before Notes Edit Updated (In-Component)"); 
     
  },
  methods: {
    navigateBack() {
      router.currentRoute.value.meta.onClose();
    },
  },
};
</script>