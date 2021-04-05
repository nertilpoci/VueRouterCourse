<template>
  <div class="row g-0">
    <div class="col-2">
      <Labels />
    </div>
    <div class="col-10">
       <div class="row g-0  justify-content-md-center">
         
       <div class="col">
          <Notes />
       </div>
        <div class="col child-outlet">
          <router-view></router-view>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
import Notes from "../components/notes/Notes.vue";
import Labels from "../components/labels/LabelList";
export default {
  components: {
    Notes,
    Labels,
  },
};
</script>

<style scoped>
.child-outlet:empty{
  flex:unset;
}
</style>