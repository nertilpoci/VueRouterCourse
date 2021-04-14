
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
          <router-view v-slot="{ Component,route }">
        <AnimatedTransition mode="out-in" :name="route.meta.transition" >
          <component  :is="Component" />
        </AnimatedTransition>
      </router-view>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */

import Notes from "../components/notes/Notes.vue";
import Labels from "../components/labels/LabelList";
import AnimatedTransition from '../components/transitions/AnimatedTransition.vue'
export default {
  components: {
    Notes,
    Labels,
    AnimatedTransition
  }
};
</script>

<style scoped>
.child-outlet:empty{
  flex:unset;
}
</style>