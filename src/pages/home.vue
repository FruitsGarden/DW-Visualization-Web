<template>
    <div>  
        <line-component :lineData="lineData"></line-component>
    </div>
</template>
<script>
import lineComponent from './home/lineComponent.vue'
import {homeService} from '../service/index.js'
export default {
    components: {
        lineComponent,
    },
    data(){
        return {
            lineData:{},
        }
    },
    methods:{
        
    },
    async mounted(){
        await homeService.getHomeLine().then(data =>{
            this.lineData = {
                ...data,
            }
        })
    }
}
</script>

<style scoped lang="scss">

</style>




