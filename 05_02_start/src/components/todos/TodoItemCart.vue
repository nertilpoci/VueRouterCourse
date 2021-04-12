<template>
  <div
    class="card"
  >
    <img
      class="card-img-top"
      src="https://i.picsum.photos/id/668/1200/300.jpg?hmac=h7jX5zGII1WkHCcilt8o7z0ABBZepGUpMU8sWqGBG-o"
      alt="Card image cap"
    />

    <div class="card-body">
      <h5 class="card-title">{{ value.title }} </h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ value.createdOn }}</h6> 
      <p class="card-text">{{ value.note }}</p>
      <span v-if="!value.done" class="badge badge-pill badge-success bg-danger">Unfinished</span>
      <span v-else class="badge badge-pill badge-success bg-success">Done</span>
      <a
        href="javascript:;"
        class="card-link text-danger float-end"
        @click.stop="$emit('delete')"
        ><i class="fa fa-trash"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItemCart",
  props: {
    value: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
