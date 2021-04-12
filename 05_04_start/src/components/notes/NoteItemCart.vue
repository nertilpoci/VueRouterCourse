<template>
 <div class="card ">
      <img class="card-img-top" src="https://i.picsum.photos/id/20/1200/300.jpg?hmac=8rrSN6gcVsYYzYJs87AlbxZVnO0M38r6eD9kKJq1P3Q" alt="Card image cap" />

  <div class="card-body">
    <h5 class="card-title">{{value.title}}</h5>
    <h6 class="card-subtitle mb-2">{{value.createdOn}}</h6>
    <p class="card-text">{{value.note}}</p>
     <span v-if="!value.done" class="badge badge-pill badge-success bg-danger">Unfinished</span>
      <span v-else class="badge badge-pill badge-success bg-success">Done</span>
    <a  href="javascript:;" class="card-link text-danger float-end" @click.stop="$emit('delete')"><i class="fa fa-trash"></i></a>
  </div>
  <div v-if="value.labels && value.labels.length>0" class="card-footer">
  <span  v-for="label in value.labels" :key="label.id" class="m-1 badge badge-pill badge-primary bg-primary">{{label.title}}</span>

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
