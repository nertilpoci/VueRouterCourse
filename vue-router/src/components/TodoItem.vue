<template>
 <div class="card text-dark bg-light">
  <div class="card-body">
    <h5 class="card-title">{{value.title}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{value.createdOn}}</h6>
    <p class="card-text">{{value.note}}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'valueItem',
  props: {
    value: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
