<template>
<div>
    <NoteAddEdit v-bind="$props" @close="navigateBack"/>
    </div>
</template>
<script>
import router from '../router'
import NoteAddEdit from '../components/notes/NoteAddEdit.vue'
export default {
    components:{
        NoteAddEdit
    },
    props:{
        id:{
            type:String,
            default:''
        }
    },
    methods:{
        navigateBack(){
            //  router.go(-1)
            router.back();
        }
    }
}
</script>