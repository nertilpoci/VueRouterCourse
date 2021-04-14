<template>
  <div class="card">
     <img class="card-img-top" src="https://i.picsum.photos/id/668/1200/300.jpg?hmac=h7jX5zGII1WkHCcilt8o7z0ABBZepGUpMU8sWqGBG-o" alt="Card image cap">
      <div class="card-body">
         <h5 class="card-title" >{{task.id? 'Update Task': 'Create New Task'}}</h5>
    <form @submit="onSubmit">
    <div class="form-group">
      <label for="title-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        required
         v-model="task.title"
        placeholder="Enter title"
      />
    </div>
    <div class="form-group">
      <label for="note-label">Content</label>
      <textarea
        type="text"
        class="form-control"
        id="note"
        required
        rows="5"
        v-model="task.note"
        placeholder="Enter content"
      />
    </div>
     <div class="form-check">
    <input v-model="task.done" type="checkbox" class="form-check-input" id="completed">
    <label class="form-check-label" for="completed">Completed</label>
  </div>
    <hr>
<div class="float-end">
  
    <button type="submit" class="btn btn-primary m-1 ">{{task.id? 'Update': 'Create'}}</button>
        <button class="btn btn-danger" @click="$emit('close')">Cancel</button>
                <!-- <button style="position:absolute;top:0;right:0;font-size:40px" class="btn btn-link" @click="$emit('close')"><i class="fa fa-times-circle"></i></button> -->


</div>
  </form>
  </div>

  </div>
</template>

<script>
export default {
  name: "TaskAddEdit",
  components:{
  },
  props: {
    value: Object,
  },
  data() {
    return {
      task: null,
    };
  },
  mounted(){
  },
  created() {
    this.task = this.value || {
      id: null,
      title: "",
      note: "",
      createdOn: new Date().toLocaleDateString(),
      done: false,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.commit("saveTask", this.task);
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
</style>
