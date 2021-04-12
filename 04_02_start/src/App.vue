<template>
<div class="container-fluid p-0">
  <router-view  name="Navbar"></router-view>
  
<div class='container-fluid'>
  <router-view></router-view>

  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
    }
  },
  components: {
  }
}
</script>

<style>
.card{
   break-inside: avoid!important;
}
.card-columns{
  column-count: 4;
}
</style>
