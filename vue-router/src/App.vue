<template>
<div class="container-fluid p-0">
  <nav class="navbar navbar-expand-md navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Globomantics</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Notes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tasks</a>
        </li>
       
      </ul>
    </div>
    
  </div>
</nav>
<div class="row row-cols-1 row-cols-md-2 g-4 m-1">
  <div class="col" :key="todo.id" v-for="todo in $store.getters.doneTodos" >
  <TodoItem  :value="todo">
       
      </TodoItem>


</div>
</div>
</div>
</template>

<script>
 import TodoItem from './components/TodoItem.vue'

export default {
  name: 'App',
  components: {
     TodoItem
  }
}
</script>

<style>

</style>
