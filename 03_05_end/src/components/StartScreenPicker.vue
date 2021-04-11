<template>

   <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" >Start Screen</span>
  </div>
  <select class="form-control" @change="startScreenChanged" v-model="selectedStartScreen">
        <option id="startscreen" :key="option.id" v-for="option in options" :value="option.id">{{option.value}}</option>
    </select>
</div>
</template>
<script>
export default {
    data(){
        return{
            options:[],
            selectedStartScreen:''
        }
    },
    created(){
        this.options= this.$router.options.routes.filter(route=> route.path!='/' && !route.path.includes(':')).map(route=>({id:route.path, value:route.path}));
        this.selectedStartScreen=this.$store.getters.startScreen;
    },
    methods:{
        startScreenChanged(){
            this.$store.commit('startScreen',this.selectedStartScreen)
        }
    }
}
</script>