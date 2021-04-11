<template>
  <div class="row">
    <hr />
    <div class="col-6 p-1">
      <div class="card">
        <router-link to="/tasks" custom v-slot="{ navigate }">
          <img
            @click="navigate"
            class="card-img-top"
            src="https://i.picsum.photos/id/668/1200/300.jpg?hmac=h7jX5zGII1WkHCcilt8o7z0ABBZepGUpMU8sWqGBG-o"
            alt="Card image cap"
          />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">Unfinished Tasks</h5>
          <p class="card-text" v-if="$store.getters.unfinishedTaskCount > 0">
            You have <b>{{ $store.getters.unfinishedTaskCount }}</b> uninished
            tasks
          </p>
          <p class="card-text text-success" v-else>
            Great job. You don't have any tasks pending
          </p>
        </div>
      </div>
    </div>
    <div class="col-6 p-1">
      <div class="card">
        <router-link to="/tasks" custom v-slot="{ navigate }">
          <img
            class="card-img-top"
            @click="navigate"
            src="https://i.picsum.photos/id/668/1200/300.jpg?hmac=h7jX5zGII1WkHCcilt8o7z0ABBZepGUpMU8sWqGBG-o"
            alt="Card image cap"
          />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">Total Tasks</h5>
          <p class="card-text">
            You have <b>{{ $store.getters.allTasks.length }}</b> tasks
          </p>
        </div>
      </div>
    </div>
    <div class="col-6 p-1">
      <div class="card">
        <router-link to="/notes" custom v-slot="{ navigate }">
          <img
            class="card-img-top"
            @click="navigate"
            src="https://i.picsum.photos/id/20/1200/300.jpg?hmac=8rrSN6gcVsYYzYJs87AlbxZVnO0M38r6eD9kKJq1P3Q"
            alt="Card image cap"
          />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">Unfinished Notes</h5>
          <p class="card-text" v-if="$store.getters.uninishedNoteCount > 0">
            You have <b>{{ $store.getters.uninishedNoteCount }}</b> uninished
            notes
          </p>
          <p class="card-text text-success" v-else>
            Great job. You don't have any notes pending
          </p>
        </div>
      </div>
    </div>
    <div class="col-6 p-1">
     
      <div class="card">
         <router-link to="/notes" custom v-slot="{ navigate }">
          <img
            @click="navigate"
            class="card-img-top"
            src="https://i.picsum.photos/id/20/1200/300.jpg?hmac=8rrSN6gcVsYYzYJs87AlbxZVnO0M38r6eD9kKJq1P3Q"
            alt="Card image cap"
          />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">Total Notes</h5>
          <p class="card-text">
            You have <b>{{ $store.getters.allNotes.length }}</b> notes
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>