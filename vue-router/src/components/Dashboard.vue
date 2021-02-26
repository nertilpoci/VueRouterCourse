<template>
  <div class="row">
  <div class="col-sm-6">
   
    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Tasks</div>
  <div class="card-body">
        <h5 class="card-title">Unfinished Tasks</h5>
 <p class="card-text" v-if="$store.getters.unfinishedTaskCount>0">You have <b>{{$store.getters.unfinishedTaskCount}}</b> uninished tasks</p>
        <p class="card-text text-success" v-else>Great job. You don't have any tasks pending</p>
       </div>
</div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      

      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>