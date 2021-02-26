<template>
<a href="javascript:;" class="list-group-item list-group-item-action list-group-item-light" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{value.title}}</h5>
      <small>{{value.createdOn}}</small>
    </div>
    <p class="mb-1">{{value.note}}</p>
  </a>
</template>

<script>
export default {
  name: 'TodoItemList',
  props: {
    value: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
