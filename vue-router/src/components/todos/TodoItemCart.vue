<template>
 <div class="card " :class="{ 'card text-white bg-success':value.done,'text-dark bg-light':!value.done, }">
  <div class="card-body">
    <h5 class="card-title">{{value.title}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{value.createdOn}}</h6>
    <p class="card-text">{{value.note}}</p>
       <a  href="javascript:;" class="card-link text-danger float-end" @click.stop="$emit('delete')"><i class="fa fa-trash"></i></a>

  </div>
</div>
</template>

<script>
export default {
  name: 'TodoItemCart',
  props: {
    value: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
