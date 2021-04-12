<template>
  <div class="container-fluid p-0">
    <router-view name="Navbar"></router-view>

    <div class="container-fluid">
      <router-view v-slot="{ Component }">
        <AnimatedTransition name="bounce-right">
         <component  :is="Component" />
        </AnimatedTransition>
      </router-view>
    </div>
  </div>
</template>

<script>
import AnimatedTransition from './components/transitions/AnimatedTransition.vue'

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
   AnimatedTransition
  },
};
</script>

<style>
.card {
  break-inside: avoid !important;
}
.card-columns {
  column-count: 4;
}
/* Initial state for the new componenet */
.fade-enter-from {
  opacity: 0;
}
/* Applied to the new component throught the entire transition */
.fade-enter-active {
  transition: opacity 1s ease;
}
/* Applied to the new component once the transition is finished */
.fade-enter-to {
  opacity: 1;
}

/* Initial state for the  componenet that is removed */
.fade-leave-from {
  opacity: 1;
}
/* Applied to the component to be removed throught the entire transition */
.fade-leave-active {
  transition: opacity 0.5s ease;
}
/* Applied to the  component that is removed once the transition is finished */
.fade-leave-to {
  opacity: 0;
}
</style>
