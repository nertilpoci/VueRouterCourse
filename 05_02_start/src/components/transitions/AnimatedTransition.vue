<template>
  <transition
    v-if="name == 'bounce-left'"
    enter-active-class="animate__animated animate__bounceInRight"
    leave-active-class="animate__animated animate__bounceOutRight"
    :mode="mode"
  >
    <slot></slot>
  </transition>
  <transition
    v-else-if="name == 'bounce-right'"
    enter-active-class="animate__animated animate__bounceInLeft"
    leave-active-class="animate__animated animate__bounceOutLeft"
   :mode="mode"
  >
    <slot></slot>
  </transition>
  <transition  :mode="mode" v-else> 
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    mode: {
      type: String,
      default: "out-in",
    }
  },
};
</script>