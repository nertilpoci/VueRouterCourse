<template>
    <div class="row g-0">
    <div class="col-2">
      <Labels />
    </div>
    <div class="col-10">
      <Notes />
    </div>
  </div>
</template>
<script>
import Notes from "../components/notes/Notes.vue";
import Labels from "../components/labels/LabelList";
export default {
    components:{
        Notes,
        Labels
    }
}
</script>