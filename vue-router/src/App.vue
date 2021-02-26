<template>
<div class="container-fluid p-0">
  <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Globomantics</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a @click="currentComponent='dashboard'" class="nav-link active" aria-current="page" href="javascript:;">Dashboard</a>
        </li>
        <li class="nav-item">
          <a @click="currentComponent='notes'" class="nav-link" href="javascript:;">Notes</a>
        </li>
        <li class="nav-item">
          <a @click="currentComponent='tasks'" class="nav-link" href="javascript:;">Tasks</a>
        </li>
       
      </ul>
    </div>
    
  </div>
</nav>
<div class='container-fluid'>
  <component :is="currentComponent"/>

  </div>
</div>
</template>

<script>
 import Tasks from './components/TodoItems.vue'
 import Dashboard from './components/Dashboard.vue'
 import Notes from './components/Notes.vue'

export default {
  name: 'App',
  data(){
    return{
      currentComponent:'dashboard'
    }
  },
  components: {
     Tasks,
     Notes,
     Dashboard
  }
}
</script>

<style>

</style>
