<template>
  <transition
    :enter-active-class="enterActiveClass"
    leave-active-class=""
    :mode="mode"
  >
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
    },
  },
  computed: {
    enterActiveClass() {
      switch (this.name) {
        case "bounce-left":
          return "animate__animated animate__bounceInRight";
        case "bounce-right":
          return "animate__animated animate__bounceInLeft";
        case "bounce-down":
          return "animate__animated animate__bounceInDown";
        case "zoom-down":
          return "animate__animated animate__zoomInDown";
        default:
          return "";
      }
    },
  },
};
</script>