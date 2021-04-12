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
            console.log('curentroute', router.currentRoute.value)
            router.currentRoute.value.meta.onClose();
            // router.push({name:router.currentRoute.value.meta.onCloseRedirect})
        }
    }
}
</script>