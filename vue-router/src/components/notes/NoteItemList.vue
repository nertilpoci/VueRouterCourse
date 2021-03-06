<template>
<a href="javascript:;" class="list-group-item list-group-item-action list-group-item-light" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{value.title}}</h5>
      <small>{{value.createdOn}}</small>
    </div>
    <p class="mb-1">{{value.note}}</p>
     <small class="float-end"><a  href="javascript:;" class="card-link text-danger" @click.stop="$emit('delete')"><i class="fa fa-trash"></i></a></small>
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
