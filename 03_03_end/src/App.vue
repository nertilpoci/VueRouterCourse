<template>
<router-view name="navbar"></router-view>
 <router-view></router-view>
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
