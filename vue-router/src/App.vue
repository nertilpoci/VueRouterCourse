<template>
<AppView/>
</template>

<script>
 import AppView from './views/AppView'

export default {
  name: 'App',
  data(){
    return{
      currentComponent:'dashboard'
    }
  },
  components: {
     AppView
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
